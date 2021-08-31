
export class RateTracker 
{
    constructor(ticker){
        this.ticker = ticker;
    }

    process(lastPrice)
    {
        if (!this.basePrice)
        {
            this.basePrice = lastPrice;
        }

        const percentageDifference = this.basePrice * 0.0001;
        const priceChange = Math.abs(lastPrice - this.basePrice);
        var enoughChange = priceChange >= percentageDifference;
        console.log(`Percentage change: ${priceChange}, percentage difference: ${percentageDifference}, enough: ${enoughChange}`);
        
        if ( enoughChange )
        {
            console.log(`${this.ticker} price changed!!`);
        }
    }
}