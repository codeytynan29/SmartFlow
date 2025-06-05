const express = require('express');
const router = express.Router();
const { Configuration, OpenAIApi } = require('openai');
const { searchHVACCompanies } = require('./placesHelper');

const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
}));

router.post('/', async (req, res) => {
  const { message, userTier = 'free', zip = null, coords = null } = req.body;

  let suggestions = [];
  if (zip) {
    suggestions = await searchHVACCompanies(zip);
  }

  try {
    let prompt = '';
    if (userTier === 'pro') {
      prompt = `You are Spark, a technical HVAC assistant for trained technicians. Answer in detail:\n\n${message}`;
    } else {
      prompt = `You are Spark, a friendly AI assistant for homeowners. Avoid jargon. Question:\n\n${message}`;
    }

    const response = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    });

    let reply = response.data.choices[0].message.content;

    if (suggestions.length > 0) {
      reply += `\n\nNearby HVAC companies:\n`;
      suggestions.forEach((company, i) => {
        reply += `${i + 1}. ${company.name} - ${company.address}`;
        if (company.website) reply += ` (${company.website})`;
        reply += '\n';
      });
    }

    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Spark is currently unavailable.' });
  }
});

module.exports = router;
