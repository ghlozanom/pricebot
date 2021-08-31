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
    var currencyPairsParam = nconf.get('currencyPairs');
    if (!currencyPairsParam)
    {
      return null;
    }
    return currencyPairsParam.split(',');    
}