# beLocal (fspt2-finalproject)

This project has been built using the following:

Front-end: ReactJs, JavaScript, HTML, CSS, Reactstrap & Bootstrap.

Back-end: NodeJs, Express & Sequelize.

## Documentation

## User Flow Diagram

<img src="images/User%20flow.png">

## Database schema

<img src="images/db%20schema%20activities.JPG">

## Setup

### Dependencies

Run `yarn` on root folder to install dependencies related to Express.

`cd client` and run `yarn` install dependencies related to React.

### Database Prep

- Create an `.env` file to the main project directory and add:

```bash
  DB_NAME=your_best_experience
  DB_HOST=localhost
  DB_PASSWORD=YOUR_PASSWORD
  DB_USER=root API_PORT=5000
  SUPER_SECRET=bestexperience
```
(replace YOUR_PASSWORD with your actual password)

- Run `yarn migrate` in the main folder of this repository, in a new terminal window. This will create the tables you need for this project in your database.

### Run Your Development Servers

- Run yarn start in project directory to start both the Express server on port 5000 and client server in development mode with hot reloading in port 3000.
- Client is configured so all API calls will be proxied to port 5000 for a smoother development experience. Yay!
- You can test your client app in http://localhost:3000
- You can test your API in http://localhost:5000/api

## Notes

_This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._