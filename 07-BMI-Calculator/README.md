# BMI Calculator

A simple and interactive BMI (Body Mass Index) Calculator built with **React** and **Tailwind CSS**. This application allows users to calculate their BMI based on height and weight and provides a categorized result (Underweight, Normal weight, Overweight, Obese).

## Features

- 🎨 **Beautiful UI** - Styled with Tailwind CSS.
- 🔄 **Unit Toggle** - Supports both Metric (kg/cm) and Imperial (lbs/in) systems.
- ⚡ **Instant Feedback** - Displays BMI result and corresponding category.
- 🎯 **Interactive UI** - Input fields for height and weight with real-time updates.
- 🔔 **Toast Notifications** - Alerts users for errors and displays results.
- ♻️ **Reset Button** - Allows users to clear input fields quickly.
- 📊 **Health Tips** - Provides additional insights based on BMI category.

## Installation

Ensure you have **Node.js** and **npm** installed. Then, follow these steps:

```bash
# Clone this repository
git clone https://github.com/jsaurabh1906/React-Projects.git
cd React-Projects
cd 07-BMI-Calculator

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Component Breakdown

The app is structured using reusable components for better maintainability:

1.  **BMICalculator.js** - Main component handling state and logic.
2.  **ToggleUnitsTabs.js** - Allows users to switch between metric and imperial units.
3.  **InputField.js** - A reusable input component for height and weight.
4.  **ActionButtons.js** - Contains the Calculate and Reset buttons.
5.  **Results.js** - Displays the BMI result and category.
6.  **HealthTips.js** - Shows health recommendations based on BMI.

## Usage

1.  Select the **unit system** (Metric or Imperial).
2.  Enter your **height** and **weight**.
3.  Click **Calculate** to see your BMI.
4.  Click **Reset** to clear the inputs.
5.  View your **BMI category and health tips**.

## Technologies Used

- **React.js** - Component-based UI development.
- **Tailwind CSS** - Styling for a modern and responsive design.
- **React Icons** - For stylish icons.
- **React Toastify** - Provides toast notifications.

## Contributing

Feel free to fork this repository and contribute! Submit a pull request with your improvements.

## License

This project is open-source and available under the [MIT License]
