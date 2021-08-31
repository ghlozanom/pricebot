
import { getRateFor } from "./Helpers/rate-retriever.js";

(async () => {

  try {
    // Locate a card that can be used as the source for the transaction.
    const btcUsdRate = await getRateFor('BTC-USD');

    // Create a transaction and log its outputs
    console.log(`BTC-USD rate: ${btcUsdRate.ask}`);
  } catch (error) {
      console.log('Error while calculating price oscilation, please try again');
    return;
  }
})();