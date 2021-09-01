# Pricebot
Uphold Bot - Assessment Challenge - Price oscilation bot

## Requirements

- Node.js v14.0 or later
- Docker
- Docker Compose
- MongoDB running (locally on port 27017 when not running with Docker compose)

## Setup

- Run `npm install`
- Configure the values set in `.env` and `src/config/config.json` files

## Run

The currencies rate tracker bot can be configured from command line, environment variables or a file located at 'src/config/config.json'

Arguments are:
- **currencyPairs**
- **fetchIntervalInSeconds**
- **priceOscilationPercentage**
- **dbUrl**

If you run without any argument, the values defined in `config.json` will be used. To run it with predefined config values, try:

Run `npm start`

To run with **currencyPairs** as argument, try:

Run `npm start -- --currencyPairs="UPXAU-USD"`.

## Docker Compose

This app is configured to run with Docker compose. It will build the node app and run a mongo image to which the app will connect to. To do it, open a terminal in the root folder and:

- Run `docker-compose up --build`

