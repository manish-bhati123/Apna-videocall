# 🎥 Video Conferencing App

A real-time video conferencing web app built with **WebRTC**, **React.js**, and **Socket.IO**, with secure user authentication using **bcrypt** and **crypto**.

---

## 🚀 Tech Stack

### Frontend
- React.js
- Socket.IO Client
- Axios
- WebRTC API
- Navigator API
- CORS Handling

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- Socket.IO
- bcrypt (for password hashing)
- crypto (for secure token generation)
- http-status
- CORS

---

## 🔐 Authentication

- Passwords are hashed with **bcrypt** during registration.
- Login uses **bcrypt.compare()** for verification.
- Secure tokens or session IDs can be generated using **crypto.randomBytes()** (no JWT).
- Auth state can be stored using cookies or in-memory sessions.

---

## ✨ Features

- User Registration & Login
- Real-time video and audio calling using WebRTC
- Join/Create unique video rooms
- Real-time chat messaging
- Mute/Unmute and Camera On/Off
- Peer-to-peer media connection
- Clean and responsive UI
- Socket.IO-based signaling
- Error handling with HTTP status codes

---



