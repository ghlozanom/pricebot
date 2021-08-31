
import { getRateFor } from "./Helpers/rate-retriever.js";
import { RateTracker } from "./Helpers/rate-tracker.js";

const btcUsdTracker = new RateTracker('BTC-USD');
const upXauUsdTracker = new RateTracker('UPXAU-USD');

// lets run this every 5 seconds
const intervalObj = setInterval(async () => {
  try {
    btcUsdTracker.process(await getRateFor('BTC-USD'));
    upXauUsdTracker.process(await getRateFor('UPXAU-USD'));
  } catch (error)
  {
    console.log('Error while getting rates and processing them: ', error);
  }
}, 1000 * 5);