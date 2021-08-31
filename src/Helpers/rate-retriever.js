
/**
 * Dependencies.
 */

 import axios from "axios";
 import dotenv from "dotenv";
 import path from "path";
 
 // Dotenv configuration.
 dotenv.config({ path: path.resolve() + "/.env" });
 
 /**
  * Format API error response for printing in console.
  */
 
 function formatError(error) {
   const responseStatus = `${error.response.status} (${error.response.statusText})`;
 
   console.log(
     `Request failed with HTTP status code ${responseStatus}`,
     JSON.stringify({
       url: error.config.url,
       response: error.response.data
     }, null, 2)
   );
 
   throw error;
 }
 
 /**
  * Get the current rate for the given ticker.
  */
 
 export async function getRateFor(ticker) {
   try {
     const response = await axios.request({
       method: "GET",
       url: `${process.env.BASE_URL}/v0/ticker/${ticker}`
     });
 
     return response.data.ask;
   } catch (error) {
     formatError(error);
   }
 }