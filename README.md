# Quiz App

## Overview
The **Quiz App** is a dynamic web-based application designed to offer users an engaging quiz-taking experience. This application is built using React.js for the frontend and Node.js for the backend. The app features user authentication, a timer for each quiz, and a detailed results page with a breakdown of user performance.

### Key Features:
- **Interactive Quiz Interface**: Provides users with a seamless question-answering experience.
- **Timer Functionality**: Tracks and displays remaining time for quiz completion.
- **Result Page**: Displays a detailed report with correct answers highlighted, user-selected answers, and overall performance.
- **Responsive Design**: Ensures a smooth user experience across devices.

---

## Technologies Used
- **Frontend**: React.js, HTML5, CSS3
- **Backend**: Node.js, Express.js
- **State Management**: Context API
- **Routing**: React Router DOM
- **Styling**: Custom CSS and animations

---

## Setup and Installation Instructions

### Prerequisites:
Ensure you have the following installed on your system:
- **Node.js** (v14+)
- **npm** or **yarn**
- A web browser (preferably Google Chrome)

### Steps to Set Up:
1. Clone the repository:
   ```bash
   git clone https://github.com/guruprasath-v/quiz-app.git
   ```
2. Navigate to the project directory:
  ```bash
  cd quiz-app
  ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and visit http://localhost:3000 to view the application.

## Assumptions Made
1. **User Authentication**: Assumes users have unique email addresses stored in localStorage for tracking progress.
2. **Answer Submission**: Answers are tracked in state and updated dynamically on question change.
3. **Responsive Design**: Built to adapt to most screen sizes and devices.
4. **Quiz Format**: Quiz data is structured as an array of questions with corresponding options and correct answers.

## Challenges Faced and Solutions
### - Challenge 1: State Management
**Problem**: Managing quiz data and user answers efficiently across components.
**Solution**: Implemented Context API to share state between components like Sidebar, Question, and Report.
### - Challenge 2: Timer Implementation
**Problem**: Timer needed to sync correctly and stop when the quiz ended.
**Solution**: Used useEffect with dependency checks to control the timer and avoid infinite loops.
### - Challenge 3: Navigation with Data
**Problem**: Passing quiz and answer details between pages without wrapping the entire app with context.
**Solution**: Utilized useNavigate with state to pass data during navigation and accessed it using useLocation.

## Hosted Application
The Quiz App is deployed on Netlify. Visit the live application here. [Live-Link](https://beatitquizapp.netlify.app/) 


