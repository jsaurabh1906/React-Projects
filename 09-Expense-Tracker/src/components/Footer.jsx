import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-3 text-center mt-10 shadow-md">
      <p>Made with ❤️ from Saurabh</p>
      <p>
        &copy; {new Date().getFullYear()} Expense Tracker. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
