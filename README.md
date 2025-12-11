🏘️ Neighborhood Help Alert System

A full-stack platform designed to help people quickly find nearby workers and service providers, including plumbers, builders, electricians, healthcare workers, educators, and technical experts.
This system makes it easy for users to connect with the right professionals within their neighborhood in real time.

🚀 Overview

The Neighborhood Help Alert System is built to support local communities by providing fast access to essential services.
Users can browse, search, and contact nearby workers across multiple sectors, while workers can register and manage their service profiles.

This project uses a modern full-stack architecture combining React.js, Next.js, Node.js, Express, MongoDB, MySQL, and Google Cloud Services.

🌟 Key Features
👥 User Features

🔍 Search for nearby workers & service providers

📍 Location-based worker suggestions

👨‍🔧 View worker profiles with skills, pricing & availability

📞 Direct contact or request help

⭐ Rating and review system (if implemented)

🧰 Worker Features

📝 Register and create a service profile

🛠 Add skills, service categories, and pricing

🔄 Update availability (active / busy)

📊 Get requests from nearby users

🛡️ System Features

🔒 Secure authentication (JWT + OAuth if used)

🌍 Google Cloud integration (Maps API, Hosting, Storage)

🏷️ Multi-sector support (Technical, Construction, Healthcare, Education, etc.)

📬 Real-time alerts/notifications (if implemented)

🗃 Dual database usage (MongoDB + MySQL)

🧱 Tech Stack
Frontend

React.js

Next.js (SSR + Routing)

TailwindCSS / Bootstrap (if used)

Axios

Backend

Node.js

Express.js

Google Cloud Functions / Cloud Storage (optional)

JWT Authentication

Databases

MongoDB – User profiles, workers, service categories

MySQL – Structured service records / logs / analytics

📂 Project Structure
NeighborhoodHelpAlertSystem/
│
├── frontend/        # Next.js + React app
│   ├── public/
│   ├── pages/
│   ├── components/
│   ├── hooks/
│   ├── context/
│   └── package.json

│
├── backend/         # Node.js + Express API
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/      # MongoDB models
│   ├── sql/         # MySQL tables/queries
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md

⚙️ Installation & Setup Guide
1. Clone Repository
git clone https://github.com/your-username/NeighborhoodHelpAlertSystem.git
cd NeighborhoodHelpAlertSystem

🖥️ Backend Setup
Install dependencies
cd backend
npm install

Create .env file in /backend

PORT=5000

MONGO_URI=your_mongodb_connection_string

MYSQL_HOST=your_host

MYSQL_USER=your_user

MYSQL_PASSWORD=your_password

MYSQL_DATABASE=your_db_name

JWT_SECRET=your_secret_key

GOOGLE_API_KEY=your_google_cloud_api_key

Start backend server
npm start


Backend runs at: http://localhost:5000

🌐 Frontend Setup (Next.js)

cd frontend

npm install

Create .env.local in /frontend

NEXT_PUBLIC_API_URL=http://localhost:5000

NEXT_PUBLIC_GOOGLE_MAPS_KEY=your_google_maps_api_key

Run frontend
npm run dev


Frontend runs at: http://localhost:3000

📡 API Overview
Auth

Method	Endpoint	Description

POST	/api/auth/register	User/worker registration

POST	/api/auth/login	Login

Workers

Method	Endpoint	Description

GET	/api/workers	Get all workers

GET	/api/workers/nearby	Get workers by location

POST	/api/workers	Add new worker profile

PUT	/api/workers/:id	Update worker

DELETE	/api/workers/:id	Delete worker

Requests

Method	Endpoint	Description

POST	/api/request	Send help request

GET	/api/request/user/:id	User request history

GET	/api/request/worker/:id	Worker service requests

📸 Screenshots

(Add your screenshots here)

![Home Page](link)

![Workers List](link)

![Worker Profile](link)

![Search Page](link)

☁️ Google Cloud Services Used

Google Maps API (location & place search)

Cloud Storage (images/documents)

Firebase/Cloud Messaging (if used for alerts)

🔐 Environment Variables Required

Variable	Description

MONGO_URI	MongoDB connection

MYSQL_DATABASE	MySQL database name

GOOGLE_API_KEY	Google Maps API key

JWT_SECRET	Token secret

🤝 Contributing

Contributions are welcome!

Create a pull request or open an issue to discuss improvements.

📄 License

This project is licensed under the MIT License
