import nconf from 'nconf';

function getConfig()
{
  //
//  Setup nconf to use (in-order):
//   1. Command-line arguments
//   2. Environment variables
//   3. A file located at 'src/config/config.json'
//
  nconf.argv().env('__').file('src/Config/config.json');
  let config = { isValid: true, error: '' };

  const currencyPairsParam = nconf.get('currencyPairs');
  if (!currencyPairsParam)
  {
    config.error += 'Invalid currencyPairs configuration.';
    config.isValid = false;
  }
  config.currencyPairs = currencyPairsParam.split(',');
  
  const fetchIntervalInSeconds = nconf.get('fetchIntervalInSeconds');
  if (!fetchIntervalInSeconds)
  {
    config.error += 'Invalid fetch interval configuration.\n';
    config.isValid = false;
  }
  const fetchIntervalInMilliseconds = fetchIntervalInSeconds * 1000;
  console.log(`Fetch Interval set to ${fetchIntervalInMilliseconds} Ms.`);
  config.fetchInterval = fetchIntervalInMilliseconds;
  
  const priceOscilationPercentage = nconf.get('priceOscilationPercentage');
  if (!priceOscilationPercentage)
  {
    config.error += 'Invalid price oscilation percentage configuration.\n';
    config.isValid = false;
  }
  const priceOscilation = priceOscilationPercentage / 100;
  console.log(`Price oscilation set to ${priceOscilation}`);
  config.priceOscilation = priceOscilation;

  return config;
}

export const config  = getConfig();