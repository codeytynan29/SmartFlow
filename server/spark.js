const express = require('express');
const router = express.Router();
const { Configuration, OpenAIApi } = require('openai');
const { getFirestore, doc, getDoc } = require('firebase-admin/firestore');

// Ensure Firebase Admin is initialized elsewhere (e.g. in server/firebase.js)
const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
}));

router.post('/', async (req, res) => {
  const { message, userTier = 'free', zip = null, coords = null } = req.body;

  try {
    const db = getFirestore();
    const configRef = doc(db, 'config', 'spark');
    const configSnap = await getDoc(configRef);

    if (!configSnap.exists()) {
      return res.status(500).json({ error: 'Missing Spark config in Firestore.' });
    }

    const config = configSnap.data();

    let prompt = '';
    if (userTier === 'pro') {
      prompt = config.proPrompt || 'You are a professional HVAC assistant.';
    } else {
      prompt = config.freePrompt || 'You are a friendly HVAC assistant.';
    }

    if (zip || coords) {
      prompt += `\n\nSuggest up to ${config.suggestLimit || 3} nearby HVAC companies.`;
      if (userTier === 'pro' && config.proLabel) {
        prompt += ` Prioritize companies labeled "${config.proLabel}".`;
      }
    }

    const response = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt + "\n\n" + message }],
    });

    const reply = response.data.choices[0].message.content;
    res.json({ reply });
  } catch (err) {
    console.error('Spark Error:', err);
    res.status(500).json({ error: 'Spark is currently unavailable.' });
  }
});

module.exports = router;