import nconf from 'nconf';

//
//  Setup nconf to use (in-order):
//   1. Command-line arguments
//   2. Environment variables
//   3. A file located at 'src/config/config.json'
//
nconf.argv().env('__').file('src/Config/config.json');

export function getCurrencyPairs()
{
    const currencyPairsParam = nconf.get('currencyPairs');
    if (!currencyPairsParam)
    {
      console.error('Invalid currencyPairs configuration');
      return null;
    }
    return currencyPairsParam.split(',');    
}

export function getFetchInterval()
{
    const fetchIntervalInSeconds = nconf.get('fetchIntervalInSeconds');
    if (!fetchIntervalInSeconds)
    {
      console.error('Invalid fetch interval configuration');
      return null;
    }
    const fetchIntervalInMilliseconds = fetchIntervalInSeconds * 1000;
    console.log(`Fetch Interval set to ${fetchIntervalInMilliseconds} Ms.`);
    return fetchIntervalInMilliseconds;    
}

export function getPriceOscilationPercentage()
{
    const priceOscilationPercentage = nconf.get('priceOscilationPercentage');
    if (!priceOscilationPercentage)
    {
      console.error('Invalid price oscilation percentage configuration');
      return null;
    }
    const priceOscilation = priceOscilationPercentage / 100;
    console.log(`Price oscilation set to ${priceOscilation}`);
    return priceOscilation;
}