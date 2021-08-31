'use strict'

import assert from 'assert';
import { 
    config
   } from "../../src/Config/config.js";

describe('Configuration', () =>{

    it( 'should create a valid configuration', () => {
        assert.strictEqual(true, config.isValid);
    });

});