
import { getRateFor } from "./Helpers/rate-retriever.js";
import { RateTracker } from "./Helpers/rate-tracker.js";
import nconf from 'nconf';

// Reading first config from params, then fron environment and last from config.json
nconf.argv().env('__').file('src/Config/config.json');

var currencyPairsParam = nconf.get('currencyPairs');
if (!currencyPairsParam)
{
  console.log('No currency pairs defined, nothing to do');
  process.exit(0);
}
var currencyPairs = currencyPairsParam.split(',');
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