# Intelligent Bus Passenger Automation & Occupancy System

An automated pipeline that ingests real-time passenger counts from an AI microservice, computes real-time bus crowd and occupancy levels, stores logs in MongoDB, broadcasts updates via WebSockets, and dispatches automated email alerts.

---

## 🌐 Live Demo & Preview
<!-- ADD YOUR LIVE DEMO LINK BELOW -->
> 🚀 **Live Demo**: [Click here to view live project](PASTE_YOUR_LIVE_DEMO_URL_HERE)  
> *(Deploy to Vercel, Netlify, Render, or GitHub Pages and paste your live link above)*

---

## 🛠️ Tech Stack & Technologies
`Node.js` `JavaScript` `MongoDB` `Socket.io` `Nodemailer` `REST API`

---

## 📁 Repository Structure
```text
bus-automation/
├── index.js             # Master orchestrator workflow
├── step1-fetch.js.js    # Fetch passenger telemetry from AI microservice
├── step2-calc.json.js   # Calculate crowd density & trigger thresholds
├── step3-store.js.js    # Persist occupancy records to MongoDB database
├── step4-broadcast.js.js# Real-time WebSocket broadcast (Socket.io)
├── step5-email.js.js    # Email dispatch for crowd threshold alerts
└── package.json         # Dependencies
```

---

## ⚙️ Prerequisites & Setup

### Requirements
- Basic familiarity with `JavaScript`
- Git installed on your local machine

### Installation Steps
```bash
# 1. Clone repository
git clone https://github.com/JasminPeer/bus-automation.git
cd bus-automation

# 2. Install dependencies
npm install

# 3. Configure credentials (.env or script parameters for MongoDB & SMTP)
# 4. Run the pipeline
node index.js
```

---

## 🚀 How to Use
Executes the 5-step automation cycle in sequence, updating database state and broadcasting live passenger metrics.

---

## 👤 Author
- **Jasmin Peer**
- GitHub: [@JasminPeer](https://github.com/JasminPeer)
