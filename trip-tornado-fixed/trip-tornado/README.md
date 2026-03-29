# 🌪️ Trip Tornado — AI Travel Planner

An AI-powered travel planning app built with Node.js + Express + Claude AI.

---

## 📁 Project Structure

```
trip-tornado/
├── public/
│   └── index.html       ← Your frontend (the travel planner UI)
├── server.js            ← Express backend (keeps your API key safe)
├── package.json         ← Node.js dependencies
├── vercel.json          ← Vercel deployment config
├── .env.example         ← Template for your secret keys
├── .gitignore           ← Prevents secrets from being uploaded
└── README.md            ← This file
```

---

## 🚀 Run Locally (on your computer)

### Step 1 — Install Node.js
Download and install from: https://nodejs.org (choose the LTS version)

### Step 2 — Get your Anthropic API Key
1. Go to https://console.anthropic.com
2. Sign up / log in
3. Click "API Keys" → "Create Key"
4. Copy the key (starts with `sk-ant-...`)

### Step 3 — Set up the project
Open your Terminal (Mac) or Command Prompt (Windows) and run:

```bash
# Navigate into the project folder
cd trip-tornado

# Install dependencies
npm install

# Create your .env file from the template
cp .env.example .env
```

Then open the `.env` file and replace `your_api_key_here` with your real Anthropic API key:
```
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxx
```

### Step 4 — Start the app
```bash
npm start
```

Open your browser and go to: **http://localhost:3000**

Your app is now running locally! 🎉

---

## 🌍 Deploy to Vercel (Free — Live on the Internet)

### Step 1 — Create a GitHub account
Go to https://github.com and sign up (free).

### Step 2 — Upload your project to GitHub
1. Go to https://github.com/new
2. Create a new repository called `trip-tornado`
3. Make it **Public** (required for free Vercel hosting)
4. Upload all your project files (drag and drop in the browser, or use Git)

> ⚠️ Make sure `.env` is NOT uploaded — it's in `.gitignore` to protect your key.

### Step 3 — Deploy on Vercel
1. Go to https://vercel.com and sign up with your GitHub account
2. Click **"Add New Project"**
3. Select your `trip-tornado` repository
4. Click **"Deploy"** — Vercel will detect it's a Node.js app automatically

### Step 4 — Add your API key to Vercel
After deploying, your AI won't work yet because Vercel doesn't have your secret key.
1. In Vercel, go to your project → **Settings** → **Environment Variables**
2. Click **Add New**
3. Name: `ANTHROPIC_API_KEY`
4. Value: `sk-ant-xxxxxxxxxxxxxxxx` (your real key)
5. Click **Save**
6. Go to **Deployments** → click the three dots → **Redeploy**

### Step 5 — Your app is live! 🎉
Vercel gives you a free URL like: `https://trip-tornado-abc123.vercel.app`

Share it with anyone!

---

## 🌐 Add a Custom Domain (Optional)

1. Buy a domain (~$12/year) at https://namecheap.com or https://domains.google
2. In Vercel → your project → **Settings** → **Domains**
3. Add your domain and follow the DNS instructions
4. Done — your app will be live at e.g. `https://triptornado.com`

---

## 💡 Next Steps to Improve the App

| Feature | Tool | Cost |
|---|---|---|
| Save trips / user accounts | Supabase | Free tier |
| Real flight prices | Amadeus API | Free tier |
| Hotel photos | Google Places API | Free tier |
| Email itineraries | Resend | Free tier |
| Analytics | Vercel Analytics | Free |

---

## ❓ Troubleshooting

**"Cannot find module" error**
→ Run `npm install` again

**AI returns an error**
→ Check your `.env` file has the correct API key with no spaces

**Page not loading on Vercel**
→ Make sure `vercel.json` is in the root of your project

**API key not working**
→ Go to console.anthropic.com and make sure the key is active and has credits

---

Built with ❤️ using Claude AI + Express + Vanilla JS
