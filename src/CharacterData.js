//this will replace gets all character data from user input
import React, { Component } from 'react';
import './index.css';
const classes = {
    knight: {
        //Attribute point distros
        strength: [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        constitution: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        //Combat point distros
        twoHanded: [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        warfare: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        //civil point distros
        bartering: [1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0]
    },
    metamorph: {
        strength: [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
        finesse: [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

        twoHanded: [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        polymorph: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],

        persuasion: [1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0]
    },
    ranger: {
        finesse: [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        wits: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        //Combat point distros
        huntsman: [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        pyrokinetic: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        //civil point distros
        luckyCharm: [1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0]
    },
    rogue: {
        finesse: [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        constitution: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        //Combat point distros
        dualWeilding: [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        scoundrel: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        //civil point distros
        sneaking: [1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0]
    },
    shadowblade: {
        finesse: [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
        wits: [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

        scoundrel: [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        polymorph: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],

        thievery: [1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0]
    },
    wayfarer: {
        finesse: [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        intelligence: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        //Combat point distros
        ranged: [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        geomancer: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        //civil point distros
        bartering: [1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0]
    },
    witch: {
        finesse: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        intelligence: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        constitution: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        //Combat point distros
        scoundrel: [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        necromancer: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        //civil point distros
        persuasion: [1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0]
    },
    wizard: {
        intelligence: [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        constitution: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        //Combat point distros
        pyrokinetic: [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        geomancer: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        //civil point distros
        loremaster: [1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0]
    },
    battlemage: {
        strength: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        intelligence: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        constitution: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        //Combat point distros
        warfare: [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        aerotheurge: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        //civil point distros
        persuasion: [1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0]
    },
    cleric: {
        strength: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        intelligence: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        constitution: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        //Combat point distros
        hydrosophist: [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        necromancer: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        //civil point distros
        bartering: [1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0]
    },
    conjurer: {
        intelligence: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        constitution: [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        //Combat point distros
        summoning: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        //civil point distros
        loremaster: [1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0]
    },
    enchanter: {
        intelligence: [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        constitution: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        //Combat point distros
        hydrosophist: [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        aerotheurge: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        //civil point distros
        loremaster: [1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0]
    },
    fighter: {
        strength: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        constitution: [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        //Combat point distros
        warfare: [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        geomancer: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        //civil point distros
        bartering: [1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0]
    },
    inquisitor: {
        strength: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        intelligence: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        constitution: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        //Combat point distros
        warfare: [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        necromancer: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        //civil point distros
        telekinesis: [1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0]
    }
}

class CharacterData extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.changeClass = this.changeClass.bind(this);
        this.pointsDistro = this.pointsDistro.bind(this);
        this.drop = this.drop.bind(this);
        this.allowDrop = this.allowDrop.bind(this);
        this.dragEnd = this.dragEnd.bind(this);
        this.dragStart = this.dragStart.bind(this);

    }
    getInitialState = () => {
        const initial_loadout = {
            characterClass: "",
            levels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
            strength: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            finesse: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            intelligence: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            constitution: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            memory: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            wits: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

            //Combat point distros
            dualWeilding: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ranged: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            singleHanded: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            twoHanded: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            leadership: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            perserverance: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            retribution: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            aerotheurge: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            geomancer: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            huntsman: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            hydrosophist: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            necromancer: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            polymorph: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            pyrokinetic: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            scoundrel: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            summoning: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            warfare: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

            // civil skill points
            bartering: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            luckyCharm: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            persuasion: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            loremaster: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            telekinesis: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            sneaking: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            thievery: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        };
        return initial_loadout;

    }

    handleInputChange(event) {
        var newVal = {};
        newVal[event.target.id] = Number(event.target.value);
        this.setState(newVal);
    }

    changeClass(event) {
        var newClass = {};
        newClass[event.target.id] = event.target.value;
        this.setState(newClass);
    }

    pointsDistro() {
        let initialState = JSON.parse(JSON.stringify(this.state));
        let classObj = JSON.parse(JSON.stringify(classes));
        this.setState(classObj[initialState['characterClass']]);

    }

    allowDrop(allowdropevent) {
        var id = allowdropevent.currentTarget.getAttribute('id');
        var pointType = allowdropevent.target.getAttribute('className');
        if (id === 'attributeDropZone' && pointType === 'attributeDot') {
            allowdropevent.preventDefault();
            console.log('can drop attribute');
        }else if (id === 'combatDropZone' && pointType === 'combatDot') {
            allowdropevent.preventDefault();
            console.log('can drop combat');
        }else if (id === 'civilDropZone' && pointType === 'civilDot') {
            allowdropevent.preventDefault();
            console.log('can drop civil');
        }else {
            console.log('cannot drop');
        }
    }

    drop(dropevent) {
        dropevent.preventDefault();
        var index = dropevent.target.getAttribute('data-index');
        var point2 = dropevent.target.getAttribute('data-attribute');
        //gets attribure of dot being dropped
        var point1 = dropevent.dataTransfer.getData("text/html");
        this.setState((prevState) => {
            let newState = prevState;
            newState[point1][index] = Number(prevState[point1][index]) - 1;
            newState[point2][index] = Number(prevState[point2][index]) + 1;
            return newState;
        });
    }

    dragEnd(dragendevent) {
        // subtract one from the array containing the point being moved
        var index = dragendevent.target.getAttribute('data-index');
        var attribute = dragendevent.target.getAttribute('data-attribute');
        var id = dragendevent.currentTarget.getAttribute('id');
    }
    dragStart(dragstartevent) {
        dragstartevent.dataTransfer.setData('text/html', dragstartevent.target.getAttribute('data-attribute'));

    }

    render() {
        return (
            <div id='master'>
                <div id='attributes'>
                    <div id='build'>
                        <br />
                        <h2>Character Class & Point Distrobution</h2>
                        <label>Character Class: </label>
                        <select onChange={this.changeClass} id="characterClass">
                            <option value="null">Select Class...</option>
                            <option value="knight">Knight</option>
                            <option value="metamorph">Metamorph</option>
                            <option value="ranger">Ranger</option>
                            <option value="rogue">Rogue</option>
                            <option value="shadowblade">Shadowblade</option>
                            <option value="wayfarer">Wayfarer</option>
                            <option value="witch">Witch</option>
                            <option value="wizard">Wizard</option>
                            <option value="battlemage">Battlemage</option>
                            <option value="cleric">Cleric</option>
                            <option value="conjurer">Conjurer</option>
                            <option value="enchanter">Enchanter</option>
                            <option value="fighter">Fighter</option>
                            <option value="inquisitor">Inquisitor</option>
                        </select>
                        <input type="submit" value="Submit" onClick={this.pointsDistro} />
                        <hr />
                        <div id='attributes'>
                            <div id='label'>Level: </div>
                            <div className='levels' id='level' >
                                {this.state.levels.map((value, index) => {
                                    return <div id='levelsOuter'><div className='levelsDot' data-index={index}>{value}</div></div>
                                })}
                            </div><br /><hr />
                            <div id='label'>Strength: </div>
                            <div className='attributes' id='strength' >
                                {this.state.strength.map((value, index) => {
                                    return <div id='attributeDropZone' onDragEnd={this.dragEnd} onDrop={this.drop} onDragOver={this.allowDrop} data-attribute='strength'><div id="drag" draggable="true" onDragStart={this.dragStart} className='attributeDot' data-attribute='strength' data-index={index}>{value}</div></div>
                                })}
                            </div><br /><br />
                            <div id='label'>Finesse: </div>
                            <div className='attributes' id='finesse' >
                                {this.state.finesse.map((value, index) => {
                                    return <div id='attributeDropZone' onDragEnd={this.dragEnd} onDrop={this.drop} onDragOver={this.allowDrop} data-attribute='finesse'><div id="drag" draggable="true" onDragStart={this.dragStart} className='attributeDot' data-attribute='finesse' data-index={index}>{value}</div></div>
                                })}
                            </div><br /><br />
                            <div id='label'>Intelligence: </div>
                            <div className='attributes' id='intelligence' >
                                {this.state.intelligence.map((value, index) => {
                                    return <div id='attributeDropZone' onDragEnd={this.dragEnd} onDrop={this.drop} onDragOver={this.allowDrop} data-attribute='intelligence'><div id="drag" draggable="true" onDragStart={this.dragStart} className='attributeDot' data-attribute='intelligence' data-index={index}>{value}</div></div>
                                })}
                            </div><br /><br />
                            <div id='label'>Constitution: </div>
                            <div className='attributes' id='constitution' >
                                {this.state.constitution.map((value, index) => {
                                    return <div id='attributeDropZone' onDragEnd={this.dragEnd} onDrop={this.drop} onDragOver={this.allowDrop} data-attribute='constitution'><div id="drag" draggable="true" onDragStart={this.dragStart} className='attributeDot' data-attribute='constitution' data-index={index}>{value}</div></div>
                                })}
                            </div><br /><br />
                            <div id='label'>Memory: </div>
                            <div className='attributes' id='memory' >
                                {this.state.memory.map((value, index) => {
                                    return <div id='attributeDropZone' onDragEnd={this.dragEnd} onDrop={this.drop} onDragOver={this.allowDrop} data-attribute='memory'><div id="drag" draggable="true" onDragStart={this.dragStart} className='attributeDot' data-attribute='memory' data-index={index}>{value}</div></div>
                                })}
                            </div><br /><br />
                            <div id='label'>Wits: </div>
                            <div className='attributes' id='wits' >
                                {this.state.wits.map((value, index) => {
                                    return <div id='attributeDropZone' onDragEnd={this.dragEnd} onDrop={this.drop} onDragOver={this.allowDrop} data-attribute='wits'><div id="drag" draggable="true" onDragStart={this.dragStart} className='attributeDot' data-attribute='wits' data-index={index}>{value}</div></div>
                                })}
                            </div><br /><br />
                            <hr />
                        </div>
                        <div id='combat'>
                            <div id='label'>Dual Weilding: </div>
                            <div className='combat' id='dualWeilding' >
                                {this.state.dualWeilding.map((value, index) => {
                                    return <div id='combatDropZone' onDragEnd={this.dragEnd} onDrop={this.drop} onDragOver={this.allowDrop} data-attribute='dualWeilding'><div id="drag" draggable="true" onDragStart={this.dragStart} className='combatDot' data-attribute='dualWeilding' data-index={index}>{value}</div></div>
                                })}
                            </div><br /><br />
                            <div id='label'>Ranged: </div>
                            <div className='combat' id='ranged' >
                                {this.state.ranged.map((value, index) => {
                                    return <div id='combatDropZone' onDragEnd={this.dragEnd} onDrop={this.drop} onDragOver={this.allowDrop} data-attribute='ranged'><div id="drag" draggable="true" onDragStart={this.dragStart} className='combatDot' data-attribute='ranged' data-index={index}>{value}</div></div>
                                })}
                            </div><br /><br />
                            <div id='label'>Single Handed: </div>
                            <div className='combat' id='singleHanded' >
                                {this.state.singleHanded.map((value, index) => {
                                    return <div id='combatDropZone' onDragEnd={this.dragEnd} onDrop={this.drop} onDragOver={this.allowDrop} data-attribute='singleHanded'><div id="drag" draggable="true" onDragStart={this.dragStart} className='combatDot' data-attribute='singleHanded' data-index={index}>{value}</div></div>
                                })}
                            </div><br /><br />
                            <div id='label'>Two Handed: </div>
                            <div className='combat' id='twoHanded' >
                                {this.state.twoHanded.map((value, index) => {
                                    return <div id='combatDropZone' onDragEnd={this.dragEnd} onDrop={this.drop} onDragOver={this.allowDrop} data-attribute='twoHanded'><div id="drag" draggable="true" onDragStart={this.dragStart} className='combatDot' data-attribute='twoHanded' data-index={index}>{value}</div></div>
                                })}
                            </div><br /><br />
                            <div id='label'>Leadership: </div>
                            <div className='combat' id='leadership' >
                                {this.state.leadership.map((value, index) => {
                                    return <div id='combatDropZone' onDragEnd={this.dragEnd} onDrop={this.drop} onDragOver={this.allowDrop} data-attribute='leadership'><div id="drag" draggable="true" onDragStart={this.dragStart} className='combatDot' data-attribute='leadership' data-index={index}>{value}</div></div>
                                })}
                            </div><br /><br />
                            <div id='label'>Perserverance: </div>
                            <div className='combat' id='perserverance' >
                                {this.state.perserverance.map((value, index) => {
                                    return <div id='combatDropZone' onDragEnd={this.dragEnd} onDrop={this.drop} onDragOver={this.allowDrop} data-attribute='perserverance'><div id="drag" draggable="true" onDragStart={this.dragStart} className='combatDot' data-attribute='perserverance' data-index={index}>{value}</div></div>
                                })}
                            </div><br /><br />
                            <div id='label'>Retribution: </div>
                            <div className='combat' id='retribution' >
                                {this.state.retribution.map((value, index) => {
                                    return <div id='combatDropZone' onDragEnd={this.dragEnd} onDrop={this.drop} onDragOver={this.allowDrop} data-attribute='retribution'><div id="drag" draggable="true" onDragStart={this.dragStart} className='combatDot' data-attribute='retribution' data-index={index}>{value}</div></div>
                                })}
                            </div><br /><br />
                            <div id='label'>Aerotheurge: </div>
                            <div className='combat' id='aerotheurge' >
                                {this.state.aerotheurge.map((value, index) => {
                                    return <div id='combatDropZone' onDragEnd={this.dragEnd} onDrop={this.drop} onDragOver={this.allowDrop} data-attribute='aerotheurge'><div id="drag" draggable="true" onDragStart={this.dragStart} className='combatDot' data-attribute='aerotheurge' data-index={index}>{value}</div></div>
                                })}
                            </div><br /><br />
                            <div id='label'>Geomancer: </div>
                            <div className='combat' id='geomancer' >
                                {this.state.geomancer.map((value, index) => {
                                    return <div id='combatDropZone' onDragEnd={this.dragEnd} onDrop={this.drop} onDragOver={this.allowDrop} data-attribute='geomancer'><div id="drag" draggable="true" onDragStart={this.dragStart} className='combatDot' data-attribute='geomancer' data-index={index}>{value}</div></div>
                                })}
                            </div><br /><br />
                            <div id='label'>Huntsman: </div>
                            <div className='combat' id='huntsman' >
                                {this.state.huntsman.map((value, index) => {
                                    return <div id='combatDropZone' onDragEnd={this.dragEnd} onDrop={this.drop} onDragOver={this.allowDrop} data-attribute='huntsman'><div id="drag" draggable="true" onDragStart={this.dragStart} className='combatDot' data-attribute='huntsman' data-index={index}>{value}</div></div>
                                })}
                            </div><br /><br />
                            <div id='label'>Hydrosophist: </div>
                            <div className='combat' id='hydrosophist' >
                                {this.state.hydrosophist.map((value, index) => {
                                    return <div id='combatDropZone' onDragEnd={this.dragEnd} onDrop={this.drop} onDragOver={this.allowDrop} data-attribute='hydrosophist'><div id="drag" draggable="true" onDragStart={this.dragStart} className='combatDot' data-attribute='hydrosophist' data-index={index}>{value}</div></div>
                                })}
                            </div><br /><br />
                            <div id='label'>Necromancer: </div>
                            <div className='combat' id='necromancer' >
                                {this.state.necromancer.map((value, index) => {
                                    return <div id='combatDropZone' onDragEnd={this.dragEnd} onDrop={this.drop} onDragOver={this.allowDrop} data-attribute='necromancer'><div id="drag" draggable="true" onDragStart={this.dragStart} className='combatDot' data-attribute='necromancer' data-index={index}>{value}</div></div>
                                })}
                            </div><br /><br />
                            <div id='label'>Polymorph: </div>
                            <div className='combat' id='polymorph' >
                                {this.state.polymorph.map((value, index) => {
                                    return <div id='combatDropZone' onDragEnd={this.dragEnd} onDrop={this.drop} onDragOver={this.allowDrop} data-attribute='polymorph'><div id="drag" draggable="true" onDragStart={this.dragStart} className='combatDot' data-attribute='polymorph' data-index={index}>{value}</div></div>
                                })}
                            </div><br /><br />
                            <div id='label'>Pyrokinetic: </div>
                            <div className='combat' id='pyrokinetic' >
                                {this.state.pyrokinetic.map((value, index) => {
                                    return <div id='combatDropZone' onDragEnd={this.dragEnd} onDrop={this.drop} onDragOver={this.allowDrop} data-attribute='pyrokinetic'><div id="drag" draggable="true" onDragStart={this.dragStart} className='combatDot' data-attribute='pyrokinetic' data-index={index}>{value}</div></div>
                                })}
                            </div><br /><br />
                            <div id='label'>Scoundrel: </div>
                            <div className='combat' id='scoundrel' >
                                {this.state.scoundrel.map((value, index) => {
                                    return <div id='combatDropZone' onDragEnd={this.dragEnd} onDrop={this.drop} onDragOver={this.allowDrop} data-attribute='scoundrel'><div id="drag" draggable="true" onDragStart={this.dragStart} className='combatDot' data-attribute='scoundrel' data-index={index}>{value}</div></div>
                                })}
                            </div><br /><br />
                            <div id='label'>Summoning: </div>
                            <div className='combat' id='summoning' >
                                {this.state.summoning.map((value, index) => {
                                    return <div id='combatDropZone' onDragEnd={this.dragEnd} onDrop={this.drop} onDragOver={this.allowDrop} data-attribute='summoning'><div id="drag" draggable="true" onDragStart={this.dragStart} className='combatDot' data-attribute='summoning' data-index={index}>{value}</div></div>
                                })}
                            </div><br /><br />
                            <div id='label'>Warfare: </div>
                            <div className='combat' id='warfare' >
                                {this.state.warfare.map((value, index) => {
                                    return <div id='combatDropZone' onDragEnd={this.dragEnd} onDrop={this.drop} onDragOver={this.allowDrop} data-attribute='warfare'><div id="drag" draggable="true" onDragStart={this.dragStart} className='combatDot' data-attribute='warfare' data-index={index}>{value}</div></div>
                                })}
                            </div><br /><br /><hr />
                        </div>
                        <div id='civil'>
                            <div id='label'>Bartering: </div>
                            <div className='civil' id='bartering' >
                                {this.state.bartering.map((value, index) => {
                                    return <div id='civilDropZone' onDragEnd={this.dragEnd} onDrop={this.drop} onDragOver={this.allowDrop} data-attribute='bartering'><div id="drag" draggable="true" onDragStart={this.dragStart} className='civilDot' data-attribute='bartering' data-index={index}>{value}</div></div>
                                })}
                            </div><br /><br />
                            <div id='label'>Lucky Charm: </div>
                            <div className='civil' id='luckyCharm' >
                                {this.state.luckyCharm.map((value, index) => {
                                    return <div id='civilDropZone' onDragEnd={this.dragEnd} onDrop={this.drop} onDragOver={this.allowDrop} data-attribute='luckyCharm'><div id="drag" draggable="true" onDragStart={this.dragStart} className='civilDot' data-attribute='luckyCharm' data-index={index}>{value}</div></div>
                                })}
                            </div><br /><br />
                            <div id='label'>Persuasion: </div>
                            <div className='civil' id='persuasion' >
                                {this.state.persuasion.map((value, index) => {
                                    return <div id='civilDropZone' onDragEnd={this.dragEnd} onDrop={this.drop} onDragOver={this.allowDrop} data-attribute='persuasion'><div id="drag" draggable="true" onDragStart={this.dragStart} className='civilDot' data-attribute='persuasion' data-index={index}>{value}</div></div>
                                })}
                            </div><br /><br />
                            <div id='label'>Loremaster: </div>
                            <div className='civil' id='loremaster' >
                                {this.state.loremaster.map((value, index) => {
                                    return <div id='civilDropZone' onDragEnd={this.dragEnd} onDrop={this.drop} onDragOver={this.allowDrop} data-attribute='loremaster'><div id="drag" draggable="true" onDragStart={this.dragStart} className='civilDot' data-attribute='loremaster' data-index={index}>{value}</div></div>
                                })}
                            </div><br /><br />
                            <div id='label'>Telekinesis: </div>
                            <div className='civil' id='telekinesis' >
                                {this.state.telekinesis.map((value, index) => {
                                    return <div id='civilDropZone' onDragEnd={this.dragEnd} onDrop={this.drop} onDragOver={this.allowDrop} data-attribute='telekinesis'><div id="drag" draggable="true" onDragStart={this.dragStart} className='civilDot' data-attribute='telekinesis' data-index={index}>{value}</div></div>
                                })}
                            </div><br /><br />
                            <div id='label'>Sneaking: </div>
                            <div className='civil' id='sneaking' >
                                {this.state.sneaking.map((value, index) => {
                                    return <div id='civilDropZone' onDragEnd={this.dragEnd} onDrop={this.drop} onDragOver={this.allowDrop} data-attribute='sneaking'><div id="drag" draggable="true" onDragStart={this.dragStart} className='civilDot' data-attribute='sneaking' data-index={index}>{value}</div></div>
                                })}
                            </div><br /><br />
                            <div id='label'>Thievery: </div>
                            <div className='civil' id='thievery' >
                                {this.state.thievery.map((value, index) => {
                                    return <div id='civilDropZone' onDragEnd={this.dragEnd} onDrop={this.drop} onDragOver={this.allowDrop} data-attribute='thievery'><div id="drag" draggable="true" onDragStart={this.dragStart} className='civilDot' data-attribute='thievery' data-index={index}>{value}</div></div>
                                })}
                            </div><br /><br />
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}
export default CharacterData;