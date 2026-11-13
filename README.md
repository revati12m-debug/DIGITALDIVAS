live link:


http://localhost:5173/


submission link: https://digitaldivas.vercel.app/




GramaPulse (ROUTELESS)

GPS-free rural bus intelligence and emergency crisis response for students and commuters.

Core Features

Crowd Reporting & Trust: 1-tap bus updates with quorum verification and 45-min expiration.

ETA & Skip-Risk Alerts: Deterministic stop-to-stop arrival estimates and overcrowding warnings.

Unmet Demand Analytics: Stranded-student metrics with Gemini Flash summaries.

Emergency Crisis Mode (/crisis): Dijkstra detour routing, exam-deadline prioritization, and bus reallocation.

Tech Stack

React, TypeScript, Tailwind CSS, Firebase (Auth, Firestore, Cloud Functions), Gemini Flash API, Recharts, Vercel.

Quick Setup (Windows CMD)

cd frontend && npm install
cd ..\functions && npm install
cd ..
copy frontend\.env.example frontend\.env
copy functions\.env.example functions\.env


Add your Firebase config to frontend\.env and GEMINI_API_KEY to functions\.env.

Run & Test

cd frontend
npm run lint
npm run build
npm run dev
