# Skill Progress Tracker 🎯

A simple, clean, and responsive frontend application to track the skills you are learning and your current proficiency level. Built with **React** and **Vite**.

## ✨ Features

- **Add Skills**: Easily input skill names.
- **Select Proficiency**: Choose from **Beginner**, **Intermediate**, or **Advanced** levels.
- **Visual Feedback**: Skills are displayed with clear, color-coded badges:
  - 🔵 **Beginner** (Light Blue)
  - 🟢 **Intermediate** (Light Green)
  - 🟠 **Advanced** (Light Orange)
- **Validation**: Prevents adding empty skills.
- **Responsive Design**: Looks great on both desktop and mobile screens.
- **Clean UI**: Minimalist design with soft colors and smooth interactions.

## 🛠️ Technologies Used

- **FrameWork**: React (v19)
- **Build Tool**: Vite
- **Styling**: CSS3 (Custom responsive design)
- **Language**: JavaScript (ES6+)

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/anjalichilukuri61/Skill-Progress-Tracker.git
    cd Skill-Progress-Tracker
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Click the link shown in the terminal (usually `http://localhost:5173/`).

## 📂 Project Structure

```bash
skill-progress-tracker/
├── src/
│   ├── components/
│   │   ├── Header.jsx       # App title and description
│   │   ├── SkillInput.jsx   # Input form with validation
│   │   └── SkillList.jsx    # Display list of skills
│   ├── App.jsx              # Main state management
│   ├── styles.css           # Global application styles
│   └── main.jsx             # Entry point
├── index.html               # HTML template
└── package.json             # Dependencies and scripts
```

## 🔮 Future Improvements

- [ ] Add LocalStorage support to persist skills after refresh.
- [ ] Add ability to edit existing skills.
- [ ] Add filter/sort functionality.

---

Made with 💻 and React.
