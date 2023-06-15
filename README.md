Project Title
Welcome to my first app, Pay It Forward! I'm really passionate about volunteering and doing things for others. It can be easy to forget to do things for others, or if that's something you want to do more of and work on, this app would challenge/remind you to put kindness out in the world through acts of kindness. On Login, the app gives you a random act of kindness to do for someone from a list of available acts. The app also gives the user the option to edit, post , delete acts to the list via an edit page that displays all available acts and available options as described for all new and existing acts. The user would also have the option to: check an act once completed, favorite acts, or get a new random act.

Getting Started
Create database and table

Create a new database called `Pay-It-Forward` and create a `user` table:

```SQL
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

Additional tables and base data can be found in the database.sql file. 

Prerequisites
Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)


- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
  
- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`


Built With
React, Redux, Express, Passport, Material-UI, and PostgreSQL (a full list of dependencies can be found in `package.json`).


Author
Miguel Torres


Acknowledgments
Thank you Chris, Marc, and all the staff with Prime Digital Academy for your unwavering support to making this possible!!
For my son, Liam. I love you, Peanut!