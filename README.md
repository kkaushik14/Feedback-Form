# Feedback Form

A modern, full-stack movie feedback web application built with Node.js, Express, MongoDB, Tailwind CSS, Fira Mono font, and vanilla JavaScript.

## Features
- User authentication (sign up/login) with JWT
- Submit feedback for any movie
- Browse, search, and interact with reviews from others
- Movie recommendations
- Responsive navigation bar and professional SaaS-style footer
- Dark mode UI with Fira Mono font
- Modern, responsive design using Tailwind CSS
- Developer contact/about section with flip cards and photos
- Alerts user on successful or failed actions

## Project Structure
```
Feedback Form/
├── lib/
│   └── db.js              # MongoDB connection logic
├── models/
│   ├── Feedback.js        # Mongoose model for feedback
│   └── User.js            # Mongoose model for users
├── public/
│   ├── index.html         # Landing page
│   ├── form.html          # Feedback form page
│   ├── review.html        # Review browsing page
│   ├── recommendation.html# Movie recommendations page
│   ├── about.html         # About/contact page
│   ├── input.css          # Tailwind CSS input
│   ├── output.css         # Compiled Tailwind CSS
│   ├── main.js            # Frontend JS for form/review actions
│   ├── navbar.js          # Responsive navigation logic
│   └── auth.js            # Auth logic (login/signup)
├── routes/
│   ├── feedback.js        # Express route for feedback API
│   └── auth.js            # Express route for authentication
├── server.js              # Main Express server
├── tailwind.config.js     # Tailwind CSS config
├── package.json           # Project dependencies and scripts
├── .env                   # Environment variables (PORT, MONGODB_URI, JWT_SECRET)
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
JWT_SECRET=your_jwt_secret
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
- Sign up or log in to your account.
- Fill out the feedback form and submit for any movie.
- Browse, search, and interact with reviews, recommendations.
- Feedback and reviews are stored in MongoDB.
- Alerts will notify you of success or errors.

## Troubleshooting
- If you see a `path-to-regexp` error, try deleting `node_modules` and `package-lock.json`, then run `npm install` again.
- Ensure MongoDB is running and accessible at the URI specified in `.env`.
- Make sure your `.env` file contains a valid `JWT_SECRET` for authentication.