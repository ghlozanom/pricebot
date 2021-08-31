
import { getRateFor } from "./Helpers/rate-retriever.js";
import { RateTracker } from "./Helpers/rate-tracker.js";

const btcUsdTracker = new RateTracker('BTC-USD');
const upXauUsdTracker = new RateTracker('UPXAU-USD');

async function getRateInIntervals(ticker) 
{
  try {

    const tickerRate = await getRateFor(ticker);

    console.log(`${ticker} rate: ${tickerRate.ask} at ${new Date().toISOString()}`);
    return tickerRate.ask;

  } catch (error) {
      console.log('Error while calculating price oscilation, please try again');
    return;
  }
}

// lets run this every 5 seconds
const intervalObj = setInterval(async () => {
  btcUsdTracker.process(await getRateInIntervals('BTC-USD'));
  upXauUsdTracker.process(await getRateInIntervals('UPXAU-USD'));
}, 1000 * 5);