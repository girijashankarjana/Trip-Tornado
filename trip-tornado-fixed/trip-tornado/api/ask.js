const Anthropic = require('@anthropic-ai/sdk');

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

module.exports = async function handler(req, res) {
  // Allow CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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
    return res.status(200).json({ result: text });
  } catch (err) {
    console.error('Anthropic API error:', err.message);
    return res.status(500).json({ error: 'AI request failed. Please try again.' });
  }
};
