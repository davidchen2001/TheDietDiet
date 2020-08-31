# TheDietDiet

Health and Wellness Web Application  

## Installation 

To get this project up and running, first clone the repository

```bash 
git clone https://github.com/Dioceus/TheDietDiet.git
```

In the root folder of the repository, install the dependencies. Run (from terminal or cmd):

```bash 
npm install 
```

Ensure you are running Node.js 10.16 +

## Usage

1) Create a MongoDB Atlas Account Here: https://www.mongodb.com/cloud/atlas

2) Once you have created an account, Build a New Cluster, and create a collection within that cluster

3) Under Security, go to Database Access and create a User 

4) Under Security, go to Network Access, and ensure your IP is whitelisted

5) In Clusters, Under Connect, select the Connect your application option to retrieve your MongoDB URI 

6) Navigate to /db, and create a new folder config. Navigate to /db/config, and create a new file, default.json.

Enter the contents below into default.json and with <Your MongoDB URI> replaced with your MongoDB URI.

```javascript
{
    "mongoURI": <Your MongoDB URI>,
    "jwtSecret": "myJwtSecret",
}
```

Note: The config folder has already been included in .gitignore. Please do not remove it. Never commit database credentials to any version of this repository (or any public repository).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run server`

Runs the Express server on port 5000 

### `npm run dev`

Runs the app and the server concurrently

