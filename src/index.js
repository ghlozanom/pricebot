
import { getRateFor } from "./Helpers/rate-retriever.js";

async function getRateInIntervals(ticker) 
{
  try {
    // Locate a card that can be used as the source for the transaction.
    const btcUsdRate = await getRateFor(ticker);

    console.log(`BTC-USD rate: ${btcUsdRate.ask} at ${new Date().toISOString()}`);
  } catch (error) {
      console.log('Error while calculating price oscilation, please try again');
    return;
  }
}

const intervalObj = setInterval(() => {
  getRateInIntervals('BTC-USD');
}, 1000 * 5); // five minutes