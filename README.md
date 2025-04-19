# seminar-react-nodejs-sm-ccs-2025
To execute the project, you need to configure node modules to be installed in the server and client directory
To install, navigate to each directory and run the command npm i

To run:
cd client
npm run dev

You should see this:
  VITE v6.3.0  ready in 885 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help

To run:
cd server
node index.js

You should see this:
Server running on http://localhost:5000
MongoDB connected


But if you prefer to do the project from scratch, then you must undergo the following:

Create the following directories:
mern-app/
├── client/           → React frontend
└── server/           → Express backend

cd server //to enter the server directory

npm init -y

npm install express mongoose cors body-parser

cd .. //to go out the server directory

npm create vite@latest client //this will install vite inside the client directory

npm install // this will install the node modules

npm install axios




