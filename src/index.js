
import { getRateFor } from "./Helpers/rate-retriever.js";
import { RateTracker } from "./Helpers/rate-tracker.js";
import { 
  config
 } from "./Config/config.js";
 import axios from "axios";

if (!config.isValid)
{
  console.log('Invalid configuration', config);
  process.exit(1);
}

const currencyPairsRateTrackers = [];
for (const currencyPair of config.currencyPairs)
{
  console.log(`Currency pair: ${currencyPair}`);
  currencyPairsRateTrackers.push(new RateTracker(currencyPair, config.priceOscilation));
}

const intervalObj = setInterval(async () => {
  try {
    for (const currencyPairRateTracker of currencyPairsRateTrackers)
    {
      currencyPairRateTracker.process(await getRateFor(currencyPairRateTracker.ticker, axios));
    }
  } catch (error)
  {
    console.log('Error while getting rates and processing them: ', error);
  }
}, config.fetchInterval);