# Blog Management System


## 📌 Overview
This is a simple blog management system built using Node.js, Express.js, MongoDB, and EJS. Users can create, view, and manage blog posts in a dynamic web application.

## ✨ Features
- View all blog posts
- Create new blog posts
- Redirect to an about page
- Handles 404 errors gracefully

## 🛠️ Technologies Used
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Frontend**: EJS (Embedded JavaScript Templates)
- **Dependencies**:
  - Express.js
  - Mongoose
  - EJS
  - Lodash

## 🚀 Installation & Setup
### Prerequisites
- Install [Node.js](https://nodejs.org/)
- Install MongoDB or use a MongoDB Atlas database

### Steps
1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   cd blog-management-system
   ```
2. **Install dependencies:** (This will install all required packages, as `node_modules` is not included in the repository)
   ```sh
   npm install
   ```
3. **Update MongoDB connection string in `app.js`:**
   ```js
   const dbURL = "your-mongodb-connection-string";
   ```
4. **Start the server:**
   ```sh
   npm start
   ```
5. Open `http://localhost:3000` in your browser.

## 🔥 Usage
- `GET /` → Redirects to `/blogs`
- `GET /blogs` → Fetch all blog posts
- `POST /blogs` → Create a new blog post
- `GET /blogs/create` → Form to create a blog post
- `GET /about` → About page
- `GET /about-us` → Redirects to `/about`

## 📁 Folder Structure
```
📦 Blog Management System
 ┣ 📂 models
 ┣ 📂 views
 ┃ ┣ 📜 index.ejs
 ┃ ┣ 📜 about.ejs
 ┃ ┣ 📜 create.ejs
 ┃ ┗ 📂 partials
 ┣ 📜 app.js
 ┣ 📜 package.json
 ┣ 📜 package-lock.json
 ┣ 📜 .gitignore
 ┗ 📜 README.md
```

> **Note:** The `node_modules` folder is not included in the repository. Install dependencies using `npm install`.

## 🤝 Contributing
Contributions are welcome! Feel free to fork this repository and submit a pull request.
