
import { getRateFor } from "./Helpers/rate-retriever.js";
import { RateTracker } from "./Helpers/rate-tracker.js";

const rateTracker = new RateTracker();

async function getRateInIntervals(ticker) 
{
  try {
    
    const btcUsdRate = await getRateFor(ticker);

    console.log(`BTC-USD rate: ${btcUsdRate.ask} at ${new Date().toISOString()}`);
    rateTracker.process(btcUsdRate.ask);

  } catch (error) {
      console.log('Error while calculating price oscilation, please try again');
    return;
  }
}

// lets run this every 5 seconds
const intervalObj = setInterval(() => {
  getRateInIntervals('BTC-USD');
}, 1000 * 5);