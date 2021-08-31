'use strict'

import assert from 'assert';
import { getRateFor } from "../../src/Helpers/rate-retriever.js";

describe('Rate retriever', () =>{

    let axios = {
        request: (data) => 
        {
                if (data.url.includes("BTCUSD"))
                {
                    return Promise.resolve({ data: { ask : 45 }});
                }
                throw { response : { status : 403, statusText: 'Unauthorized'} };
        }
    }

    it( 'request a ticker', async () => {
        assert.strictEqual(45, await getRateFor('BTCUSD', axios) );
    });

    it( 'should throw an error', async () => {
        try
        {
            await getRateFor('ERROR', axios);
        } catch(error)
        {
            assert.strictEqual("Request failed with HTTP status 403 (Unauthorized)", error.error);
        }
    });    

});