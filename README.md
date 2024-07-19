# CRUD App

A simple CRUD (Create, Read, Update, Delete) application built using EJS, HTML, CSS, Express.js, Mongoose, and MongoDB.
o Developed a crud application using express.js, Mongoose, MongoDB, ensuring efficient data management , user interactions. 
o Implemented user authentication and session handling using Express session, enhancing application security and user privacy.
o Designed and styled UI/UX with EJS, HTML, CSS.

## Features

- Create new records
- Read and display existing records
- Update existing records
- Delete records

## Tech Stack

- **Frontend**: EJS, HTML, CSS
- **Backend**: Express.js
- **Database**: MongoDB, Mongoose

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/subhajit2002/Crud-App.git
   cd Crud-App

2.Install dependencies
npm install

3.Set up MongoDB
Ensure you have MongoDB installed and running. Update the MongoDB connection string in `app.js`:
mongoose.connect('mongodb://localhost:27017/yourdbname', { useNewUrlParser: true, useUnifiedTopology: true });

4.Run the application
npm start

5.Open your browser
Navigate to `http://localhost:3000`

6.Usage
Navigate to the home page to see the list of records.
Use the provided forms to create, update, or delete records.

7.File Structure
crud-app/
│
├── views/
│   ├── index.ejs
│   ├── new.ejs
│   ├── edit.ejs
│   └── partials/
│       └── header.ejs
│
├── public/
│   ├── css/
│   │   └── styles.css
│
├── models/
│   └── record.js
│
├── routes/
│   └── records.js
│
├── app.js
├── package.json
└── README.md

![Screenshot 2024-07-19 110237](https://github.com/user-attachments/assets/bad996a9-1086-4260-b78b-42cd933e7d36)

![Screenshot 2024-07-19 110319](https://github.com/user-attachments/assets/b5042614-0b1a-4478-9131-ab9de347084d)

![Screenshot 2024-07-19 110437](https://github.com/user-attachments/assets/43206145-0d30-45d1-92a9-0ec873172525)

![Screenshot 2024-07-19 110529](https://github.com/user-attachments/assets/c41d3f03-1378-4954-86c0-7eefc5d43491)
