'use strict'

import assert from 'assert';
import { RateTracker } from "../../src/Helpers/rate-tracker.js";

describe('Rate tracker', () =>{

    let rateTracker = {};

    it( 'should create a new rate tracker', () => {
        rateTracker = new RateTracker('BTCUSD', 0.0001);
        assert.strictEqual('BTCUSD', rateTracker.ticker);
    });

    it( 'should set an initial base price', () => {
        assert.strictEqual(false, rateTracker.process(30));
    });

    it( 'should not have enough change', () => {
        // this is less than 0.01% = 0.003
        assert.strictEqual(false, rateTracker.process(30.002));
    });

    it( 'should have enough change and update the base price', () => {
        // this is equals to than 0.01% = 0.003
        assert.strictEqual(true, rateTracker.process(30.003));
        assert.strictEqual(30.003, rateTracker.basePrice);
    });

});