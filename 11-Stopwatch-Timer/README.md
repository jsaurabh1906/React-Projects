# Stopwatch and Timer App

## Overview

This project is a React-based Stopwatch and Timer application that allows users to switch between stopwatch and timer modes. It provides functionalities for tracking elapsed time, recording laps, setting countdown timers, and managing controls such as start, stop, and reset.

## Folder Structure

```
src/
│── assets/
│── components/           # UI components
│   │── Stopwatch/        # Components related to stopwatch mode
│   │   │── LapList.jsx         # Displays recorded laps
│   │   │── StopwatchMode.jsx   # Stopwatch main component
│   │── Timer/            # Components related to timer mode
│   │   │── TimerButtons.jsx    # Preset and custom timer buttons
│   │   │── TimerMode.jsx       # Timer main component
│   │── ControlButtons.jsx # Start, stop, reset, and lap buttons
│   │── Header.jsx        # Header component of the app
│   │── StopwatchTimerApp.jsx  # Main container for the app
│   │── SwitchMode.jsx    # Toggle between Stopwatch and Timer
│   │── TimeDisplay.jsx   # Displays formatted time
│── hooks/                # Custom React hooks
│   │── useStopwatch.jsx  # Manages stopwatch functionality
│   │── useTimer.jsx      # Manages timer functionality
│── utils/                # Utility functions
│   │── timeFormatter.js  # Formats time into MM:SS:MS format
│── App.css
│── App.jsx               # Main React component
│── index.css             # Base styles
│── main.jsx              # Entry point of the application
```

## Features

- **Stopwatch Mode**

  - Start, stop, and reset the stopwatch
  - Record laps and display them in a list

- **Timer Mode**

  - Set a countdown timer with presets (30 sec, 1 min, 5 min, etc.)
  - Input custom time values
  - Start, stop, and reset the timer
  - Displays "Time's up!" when the timer reaches zero

- **Global Features**
  - Clean UI with Tailwind CSS
  - Easy-to-use controls
  - Custom hooks for better code management

## Installation

### Prerequisites

Ensure you have **Node.js** and **npm** installed.

### Steps

git clone https://github.com/jsaurabh1906/React-Projects.git
cd React-Projects
cd 09-Expense-Tracker

1. Clone this repository:
   ```sh
   git clone https://github.com/jsaurabh1906/React-Projects.git
   cd React-Projects
   ```
2. Navigate into the project directory:
   ```sh
   cd 11-Stopwatch-Timer
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the application:
   ```sh
   npm run dev
   ```

## Usage

- Click **Start** to begin timing in either Stopwatch or Timer mode.
- Click **Stop** to pause the timing.
- Click **Reset** to reset the time.
- Switch between Stopwatch and Timer mode using the **Mode Switch** button.

## Technologies Used

- **React** for building the UI
- **Tailwind CSS** for styling
- **Custom Hooks** for state management

## Future Enhancements

- Add more preset timer values
- Implement a settings page for customizing the app
- Improve the UI/UX for better user experience

## Contribution

Feel free to fork this repository and submit pull requests for improvements!

## License

This project is open-source and available under the MIT License.
