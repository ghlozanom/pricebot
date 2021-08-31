# pricebot
Uphold Bot - Assessment Challenge - Price oscilation bot

## Requirements

- Node.js v14.0 or later

## Setup

- Run `npm install` 
- Create a `.env` file based on the `.env.example` file, and populate it with the required data.

## Run

The currencies rate tracker bot can be configured from command line, environment variables or a file located at 'src/config/config.json'

Arguments are:
- **currencyPairs**

To run with **currencyPairs** as argument:

Run `npm start -- --currencyPairs="UPXAU-USD"`.