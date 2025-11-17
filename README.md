🌐 FullStack Student Web Application

A complete Student CRUD Full-Stack Web Application built using
Spring Boot + MySQL + React.js, organized cleanly into two separate branches:

main → Backend (Spring Boot + MySQL)

frontend → React Frontend UI

🏷️ Tech Stack
Backend
  Springboot 
Frontend
  React
Database
  MySQL

🌿 Branch Structure Overview
🔵 main Branch — Backend (Spring Boot + MySQL)

This branch contains the complete backend API.

Includes:

Spring Boot application

Controller, Service, Repository layers

MySQL integration

application.properties

Maven project structure

Student CRUD REST endpoints

API Endpoints:
Method	Endpoint	Description
GET	/api/students	Get all students
GET	/api/students/{id}	Get student by ID
POST	/api/students	Create student
PUT	/api/students/{id}	Update student
DELETE	/api/students/{id}	Delete student
🟣 frontend Branch — React Application

This branch contains the entire frontend UI of the project.

Includes:

React components

axios API integration

State management using hooks

Custom CSS & animations

Form + table UI

CRUD operations UI

Pages:

Student Registration Form

Student Table List

Edit & Delete operations

🏗️ Application Architecture
                 ┌────────────────────────┐
                 │        React UI         │
                 │   (frontend branch)     │
                 └───────────┬────────────┘
                             │ Axios Calls
                             ▼
          ┌─────────────────────────────────────┐
          │        Spring Boot Backend           │
          │            (main branch)             │
          └───────────────┬─────────────────────┘
                          │ JDBC
                          ▼
                 ┌────────────────────────┐
                 │        MySQL DB        │
                 └────────────────────────┘

🚀 Local Setup Guide
1️⃣ Clone the Repository
git clone https://github.com/AbhhirramEncora/FullStack_StudentWebApp.git
cd FullStack_StudentWebApp

🖥️ Backend Setup (main branch)
✔ Switch to backend branch
git checkout main

✔ Configure MySQL

Create database:

CREATE DATABASE studentdb;

✔ Update application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/studentdb
spring.datasource.username=yourUsername
spring.datasource.password=yourPassword
spring.jpa.hibernate.ddl-auto=update

✔ Run the backend
mvn spring-boot:run


Backend runs at:

http://localhost:8080

🎨 Frontend Setup (frontend branch)
✔ Switch to frontend branch
git checkout frontend

✔ Install dependencies
npm install

✔ Start the React app
npm start


Frontend runs at:

http://localhost:3000

🌍 Deployment Guide
⭐ Recommended Deployment Strategy
Backend (Spring Boot + MySQL)

Deploy on Render, Railway, or AWS EC2

Use either:

Free MySQL on Railway (when available)

Planetscale (Free)

Aiven (Free trial)

Frontend (React)

Deploy on:

Netlify (free)

Vercel (free)

GitHub Pages

Example Production Architecture
Netlify (React)
        ↓
Spring Boot API (Render)
        ↓
MySQL Cloud DB (Railway/Planetscale)

📁 Folder Structure (Summary)
main branch (Backend)
src/
 └── main/
      ├── java/com/test/...
      └── resources/application.properties
pom.xml

frontend branch (React)
src/
 ├── components/
 ├── api/
 ├── App.js
 ├── App.css
package.json

🙋‍♂️ Author

Abhhirram Encora
Full-Stack Developer
Java | Spring Boot | React | MySQL
