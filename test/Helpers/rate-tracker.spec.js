'use strict'

import assert, { doesNotMatch } from 'assert';
import { RateTracker } from "../../src/Helpers/rate-tracker.js";

describe('Rate tracker', () =>{

    let rateTracker = {};

    // A class to simulate mongoose schemas
    class TickerRate{
        save(){}
    }

    it( 'should create a new rate tracker', () => {
        rateTracker = new RateTracker('BTCUSD', 0.0001);
        assert.strictEqual('BTCUSD', rateTracker.ticker);
    });

    it( 'should set an initial base price', async () => {
        assert.strictEqual(false, await rateTracker.process(30));
    });

    it( 'should not have enough change', async () => {
        // this is less than 0.01% = 0.003
        assert.strictEqual(false, await rateTracker.process(30.002));
    });

    it( 'should have enough change and update the base price', async () => {
        // this is equals to than 0.01% = 0.003
        assert.strictEqual(true, await rateTracker.process(30.003, TickerRate));
        assert.strictEqual(30.003, rateTracker.basePrice);
    });

});