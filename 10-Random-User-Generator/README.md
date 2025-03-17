# Random User Generator

A simple React application that fetches and displays a randomly generated user profile using the [Random User API](https://randomuser.me/). The app features user details such as name, email, location, and contact information, along with a button to generate a new user.

## 🚀 Features

- Fetches random user data from an API
- Displays user profile with name, email, location, and age
- Includes a profile picture
- Refresh button to generate a new user
- Modern UI with Tailwind CSS styling

## 🛠️ Technologies Used

- React
- Tailwind CSS
- Random User API
- Custom Hooks - (useFetch Hook)

## 📦 Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/jsaurabh1906/React-Projects.git
   cd React-Projects
   cd 10-Random-User-Generator
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```

## 🔧 Usage

- Click the **"Get New User"** button to fetch a new random user profile.
- View user details such as name, email, location, age, and contact information.

## 📂 Project Structure

```
random-user-generator/
│── src/
│   ├── components/
│   │   ├── Loader.jsx
│   │   ├── Error.jsx
│   ├── hooks/
│   │   ├── useFetch.js
│   ├── App.jsx
│   ├── RandomUserGenerator.jsx
│── public/
│── package.json
│── README.md
```

## 🌐 API Reference

The project uses the [Random User API](https://randomuser.me/api/) to fetch user details. Example API response:

```json
{
  "results": [
    {
      "name": { "title": "Mr", "first": "John", "last": "Doe" },
      "email": "john.doe@example.com",
      "location": { "city": "New York", "country": "USA" },
      "dob": { "age": 30 },
      "phone": "123-456-7890",
      "picture": { "large": "https://randomuser.me/api/portraits/men/1.jpg" }
    }
  ]
}
```

## 📜 License

This project is open-source and available under the [MIT License]

## 🙌 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.
