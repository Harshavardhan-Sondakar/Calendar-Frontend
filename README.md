# Comply's Smart Compliance Scheduler

A modern web application designed to help compliance professionals track and manage their tasks efficiently.

## Features

- Create and manage compliance events with detailed information
- Multiple reminder system
- Email notifications for involved people
- Calendar view with daily, weekly, and monthly views
- Table view with search and filtering capabilities
- Status tracking (In Progress, Complete, Over Due)
- File attachments and notes
- Modern, user-friendly interface

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   cd comply-scheduler
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:
   ```
   MONGODB_URI=mongodb://localhost:27017/comply-scheduler
   PORT=5000
   ```

4. Start MongoDB service on your machine

## Running the Application

1. Start the backend server:
   ```bash
   cd server
   npm install
   node index.js
   ```

2. In a new terminal, start the frontend development server:
   ```bash
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

## Technologies Used

- Frontend:
  - React
  - Material-UI
  - React Big Calendar
  - React Router
  - Axios

- Backend:
  - Node.js
  - Express
  - MongoDB
  - Mongoose

## Project Structure

```
comply-scheduler/
├── src/
│   ├── components/
│   │   └── Navbar.js
│   ├── pages/
│   │   ├── Dashboard.js
│   │   ├── Calendar.js
│   │   └── EventForm.js
│   └── App.js
├── server/
│   └── index.js
└── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
