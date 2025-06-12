# Comply's Smart Compliance Scheduler

A modern web application to help compliance professionals track and manage their tasks efficiently.

## Features

- **Create and manage compliance events** with detailed information
- **Multiple reminders** per event
- **Email notifications** for people involved
- **Calendar view** (day, week, month) with interactive event display
- **Dashboard view** with event cards and quick actions
- **Status tracking**: In Progress, Complete, Over Due
- **Notes** for each event
- **Responsive, modern UI** using Material-UI

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm

## Project Structure

```
comply-scheduler/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── server/
│   ├── .env
│   ├── index.js
│   ├── package.json
│   ├── models/
│   │   └── Event.js
│   └── services/
│       ├── emailService.js
│       └── reminderService.js
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   ├── components/
│   │   └── Navbar.js
│   └── pages/
│       ├── Calendar.js
│       ├── CalendarCustom.css
│       ├── Dashboard.js
│       └── EventForm.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Setup

1. **Clone the repository**
   ```sh
   git clone <your-repo-url>
   cd comply-scheduler
   ```

2. **Install frontend dependencies**
   ```sh
   npm install
   ```

3. **Configure environment variables**

   - In the root `.env` file, set:
     ```
     MONGODB_URI=your-mongodb-uri
     PORT=5000
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASSWORD=your-app-password
     ```
   - In `server/.env`, set the same email credentials.

4. **Install backend dependencies**
   ```sh
   cd server
   npm install
   cd ..
   ```

## Running the Application

1. **Start the backend server**
   ```sh
   cd server
   npm run start
   # or for development with auto-reload:
   npm run dev
   ```

2. **Start the frontend development server**
   ```sh
   npm start
   ```

3. **Open your browser** and go to [http://localhost:3000](http://localhost:3000)

## Technologies Used

- **Frontend**: React, Material-UI, React Big Calendar, React Router, Axios
- **Backend**: Node.js, Express, MongoDB, Mongoose, Nodemailer

## Usage

- **Dashboard**: View all compliance events, edit or delete them, and mark as complete or overdue.
- **Calendar**: Visualize events in day/week/month views. Click on an event to edit.
- **Event Form**: Create or edit events, add people (emails), set reminders, and add notes.

## Email Reminders

- Reminders are sent automatically to all involved people at the specified times.
- Uses Gmail SMTP (set credentials in `.env`).


