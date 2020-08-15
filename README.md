# beLocal

beLocal is a web-based marketplace that promotes local tourism and communities. You can find and book eco-friendly activities offered by amazing local experts. You can participate in one of our amazing activities or create you own!
![homepage](/client/public/img/homepage.jpg)

Check out the deployed app on Heroku: [beLocal](https://belocalcatalonia.herokuapp.com)

## Technologies

This project has been built using the following:

- Front-end: ReactJs, JavaScript, HTML, CSS, Reactstrap & Bootstrap.

- Back-end: NodeJs, Express & Sequelize.

- Deployment: Heroku.

- Integrated Google Maps, used emailjs (e-mail confirmation), multer (files uploading), JsonWebToken (authentication), bcrypt (password-hashing), QR code.

## Documentation

## User Flow Diagram

<img src="images/User%20flow.png">

## Database schema

![dbschema](/client/public/img/db_schema.jpg)

## Setup

### Dependencies

Run `yarn` on root folder to install dependencies related to Express.

`cd client` and run `yarn` install dependencies related to React.

### Database Prep

- Create an `.env` file to the main project directory and add:

```
  DB_NAME=your_best_experience
  DB_HOST=localhost
  DB_PASSWORD=YOUR_PASSWORD
  DB_USER=root
  PORT=5000
  SUPER_SECRET=bestexperience
```

(replace YOUR_PASSWORD with your actual password)

- Create another `.env` file on the client folder (to access the google maps api):

```
REACT_APP_GOOGLE_API_KEY=GOOGLE_API_KEY
```

(Replace GOOGLE_API_KEY with your actual Google maps api key. You can get it by signing up for the service through the website: [Google Cloud Platform](https://console.cloud.google.com/?pli=1)

- Run `yarn migrate` in the main folder of this repository, in your terminal. This will create the tables you need for this project in your database.

### Run Your Development Servers

- Run `yarn dev` in project directory to start both the Express server on port 5000 and client server in development mode with hot reloading in port 3000.
- Client is configured so all API calls will be proxied to port 5000 for a smoother development experience.
- You can test your client app in `http://localhost:3000`
- You can test your API in `http://localhost:5000/api`

## Notes

_This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._
