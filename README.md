# 🚀 **Signup Calculator Application** (MERN Stack)

Welcome to the **Signup Calculator** app built with the **MERN Stack**! This app allows users to register, log in, and perform calculations with different mathematical operators. After logging in, you can select your desired operator (Addition, Subtraction, Multiplication) and perform calculations.

## ✨ **Features**

- **🔐 User Authentication**: Register and log in to access the calculator.
- **🧮 Dynamic Calculator**: Choose between **Addition**, **Subtraction**, or **Multiplication** to perform operations.
- **⚡ Fast Performance**: Built with **React** for a responsive user interface and **Node.js/Express** for a fast backend.
- **💾 MVC Structure**: Backend follows the **MVC architecture** to ensure maintainable and scalable code.
- **🔒 Secure**: User credentials are stored securely with **bcrypt** and sessions are managed using **express-session**.

## 💻 **Built With**

- **React.js**: For the dynamic and reactive user interface.
- **Node.js & Express.js**: For handling API requests and server-side logic.
- **MongoDB**: For storing user data, including name, email, password, and operator preference.
- **CSS & Tailwind CSS**: For styling and responsive design.
- **dotenv**: To manage environment variables securely.
- **express-session**: For managing user sessions and maintaining login state.

## 🚀 **Getting Started**

Follow these steps to run the project on your local system:

### 📋 **Prerequisites**
Ensure you have the following installed:
- **Node.js**: [Download Node.js](https://nodejs.org/)
- **MongoDB**: Set up your local or cloud MongoDB instance (e.g., MongoDB Atlas).
- **npm**: To install dependencies.

### 🛠️ **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/signup-calculator.git

2. Navigate to the project directory:
    cd signup-calculator

3. Frontend (React): Install dependencies in the frontend folder:
    cd frontend
    npm install

4. Backend (Node.js/Express): Install dependencies in the backend folder:
    cd ../backend
    npm install

5. Create a .env file in the backend folder and add the following variables:

    PORT=5000

    MONGO_URI=your-mongodb-uri

    SESSION_SECRET=your-session-secret

6. Start the server using the following command:
    npm start or nodemon server.js

7. Open your browser and visit http://localhost:3000 for the frontend 
    and http://localhost:5000 for the backend.

## 📝 Usage

### 🎮 Register User
Register by providing:
- **Name**
- **Email**
- **Password**
- **Operator Preference**: (Addition, Subtraction, Multiplication)

After registration, you’ll be redirected to the **Login Page**.

### 🔑 Login User
Log in with your **email** and **password**. Upon successful login, you’ll be redirected to the **Calculator Page**.

### 🧮 Calculator Page
Based on your chosen operator:
- **Addition**: Enter two numbers for the sum.
- **Subtraction**: Enter two numbers for the difference.
- **Multiplication**: Enter two numbers for the product.

For example, with **Addition**, entering 2 and 2 will give you **4**.

## 🛠️ Backend Structure
- **Model**: Defines user data (name, email, password, operator).
- **View**: Frontend that interacts with the user.
- **Controller**: Handles logic for registration, login, and calculation.

## 🔐 Security
- Passwords are hashed with **bcrypt**.
- **express-session** keeps users logged in.

## 📁 Folder Structure
- **frontend/**: React app (login, register, calculator).
- **backend/**: Server-side code (routes, controllers, models).

## 📝 Future Enhancements
- Implement **JWT Authentication**.
- Save and view previous calculations.
- Improve UI with more customization.

🎉 **Enjoy the Signup Calculator App!** 🧮
Feel free to contribute, improve, and have fun! 🙌

