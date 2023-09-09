/*
    This script connect to the target and run the 
    functions needed to get the htb flag
*/

const { expect } = require('chai');
require('dotenv').config();

// .Env data to interact with the smart contracts
const {
    PRIV_KEY,
    ADDRESS,
    TARGET_ADDRESS,
    SETUP_ADDRESS
} = process.env;

// Smart contract names
const SETUP = 'Setup';
const TARGET = 'TargetName';

describe("HTB flag flow :)", function () {

    let contractSetup;
    let contractTarget;

    it('[ Instantiate ] Setup.sol', async () => {

        const chainID = ethers
        expect(contractSetup.target).to.be.equal(SETUP_ADDRESS);

    })

});
