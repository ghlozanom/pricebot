# Pricebot
Uphold Bot - Assessment Challenge - Price oscilation bot

## Requirements

- Node.js v14.0 or later
- Docker

## Setup

- Run `npm install` 
- Create a `.env` file based on the `.env.example` file, and populate it with the required data.

## Run

The currencies rate tracker bot can be configured from command line, environment variables or a file located at 'src/config/config.json'

Arguments are:
- **currencyPairs**
- **fetchIntervalInSeconds**

To run with **currencyPairs** as argument, try:

Run `npm start -- --currencyPairs="UPXAU-USD"`.

## Docker

This app is configured to run with Docker. To do it:

- To build the image, from the root folder of the app (the one containing the `Dockerfile`) run `docker build . -t <your username>/pricebot`
- To run the image, run `docker run <your username>/pricebot`. There is no port exposed so far, and it runs not detached in order to see the output.

