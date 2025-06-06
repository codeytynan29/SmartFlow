import { db } from './firebase';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

export const saveChecklistToFirestore = async (userId, title, items) => {
  try {
    await addDoc(collection(db, 'checklists'), {
      userId,
      title,
      items,
      createdAt: new Date(),
    });
  } catch (error) {
    console.error('Error saving checklist:', error);
  }
};

export const fetchChecklistsFromFirestore = async (userId) => {
  try {
    const q = query(collection(db, 'checklists'), where('userId', '==', userId));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => doc.data());
  } catch (error) {
    console.error('Error loading checklists:', error);
    return [];
  }
};
