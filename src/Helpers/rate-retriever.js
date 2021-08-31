
/**
 * Dependencies.
 */

 import dotenv from "dotenv";
 import path from "path";
 
 // Dotenv configuration.
 dotenv.config({ path: path.resolve() + "/.env" });

  /**
  * Get the current rate for the given ticker. Axios is set in order to pass a different instance for testing
  */
 
   export async function getRateFor(ticker, axios) {
    try {
      const response = await axios.request({
        method: "GET",
        url: `${process.env.BASE_URL}/v0/ticker/${ticker}`
      });
  
      return response.data.ask;
    } catch (error) {
      format(error);
    }
  }
 
 /**
  * Format API error response for printing in console.
  */
 
 function format(error) {
   console.log(error);
   const responseStatus = `${error.response.status} (${error.response.statusText})`;
 
   throw { error : `Request failed with HTTP status ${responseStatus}` };
 }
 