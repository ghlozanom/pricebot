
import { getRateFor } from "./Helpers/rate-retriever.js";
import { RateTracker } from "./Helpers/rate-tracker.js";
import { getCurrencyPairs } from "./Config/config.js";

var currencyPairs = getCurrencyPairs();

if (!currencyPairs)
{
  console.log('No currency pairs defined, nothing to do');
  process.exit(0);
}

var currencyPairsRateTrackers = [];
for (const currencyPair of currencyPairs)
{
  console.log(`Currency pair: ${currencyPair}`);
  currencyPairsRateTrackers.push(new RateTracker(currencyPair));
}

// lets run this every 5 seconds
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
}, 1000 * 5);