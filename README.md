# Quiz Application

A simple interactive Quiz Application built using HTML, CSS, and JavaScript. Users can answer multiple-choice questions, navigate between questions, track their progress, and view their final score.

## Features

- Start quiz using the Start Quiz button.
- Randomize the order of questions.
- Display multiple-choice questions with four options each.
- Select and change answers.
- Navigate using Previous and Next buttons.
- Display a progress bar.
- 60-second countdown timer.
- Automatically finish the quiz when the timer reaches zero.
- Calculate and display the final score.
- Restart the quiz using the Restart button.

## Technologies Used

- **HTML5** — Structure of the application.
- **CSS3** — Styling, layout, and interactive states.
- **JavaScript** — Quiz logic, timer, answer selection, and score calculation.

## How It Works

1. Click **Start Quiz** to begin.
2. Questions are shuffled before the quiz starts.
3. Select an option for each question.
4. Use Previous and Next to navigate between questions.
5. Monitor your progress using the progress bar and timer.
6. When all questions are completed or time runs out, the result screen displays your score.
7. Click **Restart** to reload the application.

## Project Structure

```text
quiz-application/
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run Locally

1. Clone or download the repository.
2. Keep `index.html`, `style.css`, and `script.js` in the same folder.
3. Open `index.html` in your web browser.
4. Click **Start Quiz** to begin.

No package installation or build tools are required.

## Current Limitations

- The quiz currently contains five predefined questions about HTML, CSS, JavaScript, and React.
- The timer is fixed at 60 seconds.
- The Restart button reloads the entire page.
- The quiz does not save previous scores or attempts.

## Future Improvements

- Add more questions and different categories.
- Allow users to choose quiz difficulty.
- Show correct answers and explanations after completion.
- Add a high-score leaderboard.
- Save scores using Local Storage.
- Improve mobile responsiveness and accessibility.

## License

This project is created for learning and practice purposes. Add a formal license if you plan to distribute it publicly.