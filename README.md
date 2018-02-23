## Wired News App

This is a news applicastion thats takes articles and allows the user to save them to a Mongo Databse. IT uses the NewsAPI.org API to get the articles from many different media sources. Future development would have many of those sources, but as of 2.23.2018, this app just uses Wired. 


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


