
import { getRateFor } from "./Helpers/rate-retriever.js";
import { RateTracker } from "./Helpers/rate-tracker.js";
import { 
  config
 } from "./Config/config.js";

if (!config.isValid)
{
  console.log('Invalid configuration', config);
  process.exit(1);
}

const currencyPairsRateTrackers = [];
for (const currencyPair of config.currencyPairs)
{
  console.log(`Currency pair: ${currencyPair}`);
  currencyPairsRateTrackers.push(new RateTracker(currencyPair, config.priceOscilationPercentage));
}

const intervalObj = setInterval(async () => {
  try {
    for (const currencyPairRateTracker of currencyPairsRateTrackers)
    {
      currencyPairRateTracker.process(await getRateFor(currencyPairRateTracker.ticker));
    }
  } catch (error)
  {
    console.log('Error while getting rates and processing them: ', error);
  }
}, config.fetchInterval);