# YelpCamp

![YelpCamp](https://your-image-link.com) <!-- Optional: Add a relevant project image -->

## 📌 Overview
YelpCamp is a **full-stack web application** that allows users to discover, create, and review campgrounds. The platform provides an interactive way to share camping experiences with others using RESTful APIs and third-party integrations.

## ✨ Features
- 🔑 **User Authentication** (Register, Login, Logout) using Passport.js.
- 🏕️ **Campground Management** (Create, Edit, Delete, View campgrounds).
- 📝 **User Reviews & Ratings** with CRUD functionality.
- 🗺️ **Interactive Map** integration using Mapbox API.
- 📸 **Image Uploads** via Cloudinary.
- 🔍 **RESTful APIs** for seamless interaction.

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Frontend:** HTML, CSS, JavaScript, Bootstrap
- **Database:** MongoDB & Mongoose
- **Authentication:** Passport.js
- **APIs & Services:** Cloudinary

## 🚀 Getting Started
### Prerequisites
Make sure you have the following installed:
- Node.js
- MongoDB (local or Atlas)

### Installation
1. **Clone the repository**
   ```sh
   git clone https://github.com/SabaNazneen/YelpCamp.git
   cd YelpCamp
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Set up environment variables**
   Create a `.env` file in the root directory and add:
   ```env
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   MAPBOX_TOKEN=your_mapbox_token
   ```
4. **Run the application**
   ```sh
   node app.js
   ```
5. Open your browser and go to:
   ```
   http://localhost:3000/
   ```

## 📷 Screenshots (Optional)
_Add relevant screenshots of your project interface._

## 🏕️ RESTful API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/campgrounds` | Get all campgrounds |
| POST | `/campgrounds` | Create a new campground |
| GET | `/campgrounds/:id` | Get details of a campground |
| PUT | `/campgrounds/:id` | Update a campground |
| DELETE | `/campgrounds/:id` | Delete a campground |

## 🛠️ Future Enhancements
- Implement **favorite campgrounds** feature.
- Add **real-time chat** for users to discuss campgrounds.
- Deploy the app on **Heroku/Vercel**.

## 🤝 Contributing
Contributions are welcome! Feel free to **fork** the repo and submit a **pull request**.

## 📜 License
This project is licensed under the **MIT License**.

## 🔗 Connect with Me
[![LinkedIn](https://img.shields.io/badge/LinkedIn-SabaNazneen-blue)](https://linkedin.com/in/saba-nazneen)  [![GitHub](https://img.shields.io/badge/GitHub-SabaNazneen-black)](https://github.com/SabaNazneen)

---
Let me know if you want any modifications! 🚀
