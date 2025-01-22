# Travel Brochure Project

## Project Overview

This project is a full-stack web application where users can register, log in, and manage travel locations they have visited. Users can add new places, view details, edit, and delete them. The application uses a combination of a backend built with Node.js and Express, and a frontend built with React.

### Repositories

- [Frontend Repository](https://github.com/abdula96/Frontend-Travel-Brochure)
- [Backend Repository](https://github.com/abdula96/Backend-Travel-Brochure)

### Backend

The backend is responsible for handling API requests, managing authentication, and performing CRUD operations on places. It uses MongoDB as the database.

#### Key Features:

- User registration and login with JWT authentication.
- CRUD operations for managing places.
- Image upload support using Multer.
- Protected routes to ensure only authenticated users can perform certain actions.

### Frontend

The frontend provides a user interface for interacting with the application. It includes components for displaying places, managing user information, and handling authentication.

#### Key Features:

- User registration and login.
- Display a list of places with a search feature.
- Allow authenticated users to add, edit, and delete places.
- Show random place banners on various pages.

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- npm

### Installation

1. Clone the repositories:

   ```sh
   git clone https://github.com/abdula96/Frontend-Travel-Brochure.git
   git clone https://github.com/abdula96/Backend-Travel-Brochure.git
   ```

2. Navigate to the backend directory and install dependencies:

   ```sh
   cd Backend-Travel-Brochure
   npm install
   ```

3. Create a `.env` file in the backend directory and add the following environment variables:

   ```sh
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   EMAIL_USER=your_email_user
   EMAIL_PASS=your_email_pass
   CLIENT_URL=http://localhost:5173
   ```

4. Seed the database (optional):

   ```sh
   node seed.js
   ```

5. Start the backend server:

   ```sh
   npm run dev
   ```

6. Navigate to the frontend directory and install dependencies:

   ```sh
   cd ../Frontend-Travel-Brochure
   npm install
   ```

7. Create a `.env` file in the frontend directory and add the following environment variables:

   ```sh
   VITE_API_URL=http://localhost:5000/api
   ```

8. Start the frontend server:

   ```sh
   npm run dev
   ```

### Deployment

#### GitHub Pages Deployment

_Coming Soon_

## Technologies Used

- **Backend:** Node.js, Express, MongoDB, Mongoose, Multer, JWT, bcrypt, dotenv, nodemailer
- **Frontend:** React, React Router, Axios
- **Other:** Nodemon, Concurrently, Vite

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or feedback, please feel free to reach out at [your-email@example.com](mailto:your-email@example.com).
