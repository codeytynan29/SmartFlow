const express = require('express');
const router = express.Router();
// const { Configuration, OpenAIApi } = require('openai');

// const openai = new OpenAIApi(new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// }));

router.post('/', async (req, res) => {
  // const { message, userTier = 'free', zip = null, coords = null } = req.body;

  try {
    // TEMPORARY: Bypass OpenAI and return DIY response directly
    const reply = "DIY: Screwdriver, Multimeter - Turn off power > Remove the panel > Check for loose wires";

    res.json({ reply });

    // 🔙 To restore OpenAI later, uncomment everything above and below
    /*
    let prompt = '';
    if (userTier === 'pro') {
      prompt = `You are Spark, a technical HVAC assistant for trained technicians. Answer in detail:\n\n${message}`;
    } else {
      prompt = `You are Spark, a friendly AI assistant for homeowners. Avoid jargon. Question:\n\n${message}`;
    }

    if (zip || coords) {
      prompt += `\n\nAlso suggest 2-3 nearby HVAC companies if needed.`;
    }

    const response = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    });

    const reply = response.data.choices[0].message.content;
    res.json({ reply });
    */
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Spark is currently unavailable.' });
  }
});

module.exports = router;