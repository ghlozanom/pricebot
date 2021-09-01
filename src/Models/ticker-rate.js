
import  mongoose  from 'mongoose';
const Schema = mongoose.Schema;

const TickerRateSchema = new Schema({
    price: Number,
    ticker: String,
    time: Date
});

export const TickerRate = mongoose.model('tickerRate', TickerRateSchema);