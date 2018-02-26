<h1>Tech News React App</h1>

This is a news application thats takes articles and allows the user to save them to a Mongo Database for later reading. It uses the NewsAPI.org API to get the articles from the users selected media sources.

<h2>Technologies used in this application</h2>
<ul>
    <li>React Materialize: https://react-materialize.github.io/#/</li>
    <li>NewAPI.org: https://newsapi.org/</li>
    <li>React Day Picker: http://react-day-picker.js.org/</li>
    <li>Mongoose: http://mongoosejs.com/docs/index.html</li>
    <li>Express Router:  https://expressjs.com/en/guide/routing.html </li>
</ul>


## About This App

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following commands:

```
yarn install
cd client
yarn install
cd ..
``

After both installations complete, run the following command in your terminal:

```
yarn start
```

That's it, your app should be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.


