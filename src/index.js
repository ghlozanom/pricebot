
import { getRateFor } from "./Helpers/rate-retriever.js";
import { RateTracker } from "./Helpers/rate-tracker.js";
import { getCurrencyPairs, getFetchInterval } from "./Config/config.js";

var currencyPairs = getCurrencyPairs();
var fetchInterval = getFetchInterval();

if (!currencyPairs || !fetchInterval)
{
  console.log('Invalid configuration');
  process.exit(1);
}

var currencyPairsRateTrackers = [];
for (const currencyPair of currencyPairs)
{
  console.log(`Currency pair: ${currencyPair}`);
  currencyPairsRateTrackers.push(new RateTracker(currencyPair));
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
}, fetchInterval);