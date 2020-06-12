Health and Wellness Web App 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run server`

Runs the Express server on port 5000.<br>

### `npm run dev`

Runs the app and the server concurrently<br>

## Run the Project 

1) Create a MongoDB Atlas Account Here: https://www.mongodb.com/cloud/atlas

2) Once you have created an account, Build a New Cluster, and create a collection within that cluster

3) Under Security, go to Database Access and create a User 

4) Under Security, go to Network Access, and ensure your IP is whitelisted

5) In Clusters, Under Connect, select the Connect your application option and copy the URI to the default.json file under the config folder of this project under Database 