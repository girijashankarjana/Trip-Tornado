require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Anthropic = require('@anthropic-ai/sdk');

const app = express();
const PORT = process.env.PORT || 3000;

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // serves index.html and assets

// ── Anthropic client ──────────────────────────────────────────────────────────
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY, // loaded from .env file
});

// ── AI Route ──────────────────────────────────────────────────────────────────
app.post('/api/ask', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      system:
        'You are Trip Tornado, a knowledgeable and friendly AI travel planning assistant. Be specific, practical, and enthusiastic. Use emoji sparingly for structure. Keep responses well-organized and useful.',
      messages: [{ role: 'user', content: prompt }],
    });

    const text = message.content[0]?.text || 'No response received.';
    res.json({ result: text });
  } catch (err) {
    console.error('Anthropic API error:', err.message);
    res.status(500).json({ error: 'AI request failed. Please try again.' });
  }
});

// ── Health check ──────────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Trip Tornado is running 🌪️' });
});

// ── Start server ──────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✈️  Trip Tornado running at http://localhost:${PORT}`);
});
