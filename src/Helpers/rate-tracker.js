
export class RateTracker 
{
    constructor(ticker, priceOscilation){
        this.ticker = ticker;
        this.priceOscilation = priceOscilation;
    }

    async process(lastPrice, TickerRate)
    {
        if (!this.basePrice)
        {
            this.basePrice = lastPrice;
        }

        const percentageDifference = this.basePrice * this.priceOscilation;
        const priceChange = lastPrice - this.basePrice;
        const absolutePriceChange = Math.abs(priceChange);
        const enoughChange = absolutePriceChange >= percentageDifference;
        // console.log(`${this.ticker} -  Price change: ${priceChange}, percentage difference: ${percentageDifference}, enough: ${enoughChange}`);
        
        if ( enoughChange )
        {
            console.log(`${this.ticker} price changed, from ${this.basePrice} to ${lastPrice} (${priceChange}, ${100*priceChange/this.basePrice}% ) at ${new Date().toISOString()}`);
            this.basePrice = lastPrice;
            await new TickerRate({
                price: lastPrice,
                ticker: this.ticker,
                time: Date.now()
            }).save();
            return true;    // just sending this for testing
        }

        return false;
    }
}