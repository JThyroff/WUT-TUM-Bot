# ![TUMBot Logo](../../tumbot.png)TUM Bot

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system (**TODO**).

### 1. Clone the repository

### 2. Install `node.js`

* Windows: [Download and Install Node.js and npm](https://www.npmjs.com/get-npm "Download Node.js and npm")
* Linux:
`Node.js` and `npm` aren't really being kept up to date on Debian/Ubuntu in the repositories, so to get the latest versions of both, enter the following in your command line:
 1. `curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -`
 2. `sudo apt-get install -y nodejs`

Run the following installs from the repository's root directory:
* `npm install`
* `npm install discord.js`
* `npm install dotenv`

### 3. Add your Discord Bot Token

This project uses environment variables to extort your Bot Token from the public.
Create a file named `.env` in the repository's root directory. Copy and paste your Bot Token into the file and save it: 
`BOT_TOKEN = YOUR_TOKEN_HERE`
You can find your Bot Token on the [Discord Developer Portal](https://discord.com/developers/ "Discord Developer Portal").

## Features

Slide your way through the server!