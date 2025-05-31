# Feedback Form

A simple feedback form web application built with Node.js, Express, MongoDB, Tailwind CSS, and vanilla JavaScript.

## Features
- Dark mode UI with a unique font (Fira Mono)
- Responsive and modern design using Tailwind CSS
- Collects user name, email, and feedback
- Stores feedback in MongoDB
- Alerts user on successful or failed submission

## Project Structure
```
Feedback Form/
├── lib/
│   └── db.js              # MongoDB connection logic
├── models/
│   └── Feedback.js        # Mongoose model for feedback
├── public/
│   ├── index.html         # Main frontend HTML
│   ├── input.css          # Tailwind CSS input
│   ├── main.js            # Frontend JS for form submission
│   └── output.css         # Compiled Tailwind CSS
├── routes/
│   └── feedback.js        # Express route for feedback API
├── server.js              # Main Express server
├── tailwind.config.js     # Tailwind CSS config
├── package.json           # Project dependencies and scripts
├── .env                   # Environment variables (PORT, MONGODB_URI)
└── README.md              # Project documentation
```

## Setup Instructions

### 1. Clone the repository
```sh
git clone <repo-url>
cd "Feedback Form"
```

### 2. Install dependencies
```sh
npm install
```

### 3. Configure environment variables
Create a `.env` file in the root directory:
```
PORT=2390
MONGODB_URI=mongodb://localhost:27017/feedbackdb
```

### 4. Build Tailwind CSS (if you change input.css)
```sh
npx tailwindcss -i ./public/input.css -o ./public/output.css --minify
```

### 5. Start the server
```sh
npm start
```

The app will be available at [http://127.0.0.1:2390](http://127.0.0.1:2390)

## Usage
- Fill out the feedback form and submit.
- Feedback is stored in MongoDB.
- Alerts will notify you of success or errors.

## Troubleshooting
- If you see a `path-to-regexp` error, try deleting `node_modules` and `package-lock.json`, then run `npm install` again.
- Ensure MongoDB is running and accessible at the URI specified in `.env`.

## License
MIT
