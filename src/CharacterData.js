//this will replace gets all character data from user input
import React, { Component } from 'react';
let initialState = {
    errors: "",
    output: 0,
    damage: 0,
    elemental: 0,
    attribute: 0,
    weaponskill: 0,
    other: 0,
    highground: 0,
    crit: 0,
    characterClass: "default",
    level: 1,
    strength: 10,
    finesse: 10,
    intelligence: 10,
    constitution: 10,
    memory: 10,
    wits: 10,
    dualWeilding: 0,
    ranged: 0,
    singleHanded: 0,
    twoHanded: 0,
    leadership: 0,
    perserverance: 0,
    retribution: 0,
    aerotheurge: 0,
    geomancer: 0,
    huntsman: 0,
    hydrosophist: 0,
    necromancer: 0,
    polymorph: 0,
    pyrokinetic: 0,
    scoundrel: 0,
    summoning: 0,
    warfare: 0,
    bartering: 0,
    luckyCharm: 0,
    persuasion: 0,
    loremaster: 0,
    telekinesis: 0,
    sneaking: 0,
    thievery: 0
}



class CharacterData extends Component {
    constructor(props) {

        super(props);
        this.state = initialState;
        this.handleNextUpgrades = this.handleNextUpgrades.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.changeClass = this.changeClass.bind(this);
        this.reset = this.reset.bind(this);
    }
    reset() {
        this.setState({ initialState });
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

    handleNextUpgrades(event) {
        let newState = Object.assign({}, this.state);
        newState['level'] = this.state.level;

        switch (newState['characterClass']) {
            case 'knight':
                if (newState['level'] === 1) {
                    this.setState({
                        strength: (Number(initialState.strength) + 2),
                        constitution: (Number(initialState.constitution) + 1),
                        warfare: (Number(initialState.warfare) + 1),
                        twoHanded: (Number(initialState.twoHanded) + 1),
                        bartering: (Number(initialState.bartering) + 1)
                    });
                }
                else {
                    for (var i = 0; i <= newState['level'] && Number(i) <= 25; i++) {
                        this.setState({
                            strength: ((Number(initialState.strength) + 2) + i)//only using half of the attribute points generated...
                        });
                        this.setState({
                            constitution: ((Number(initialState.constitution) + 1) + i)//only using half of the attribute points generated...
                        });
                        if (Number(newState['level']) % 2 == 0) {
                            this.setState({
                                twoHanded: ((Number(initialState.twoHanded) + 1) + (Math.floor(i/2)))
                            });
                            
                        }else if (Number(newState['level']) % 2 != 0) {
                            this.setState({
                                twoHanded: ((Number(initialState.twoHanded) + 1) + (Math.floor(i/2)))
                            });
                            
                        }
                        if (Number(newState['level']) % 2 == 0) {
                            this.setState({
                                warfare: ((Number(initialState.warfare) + 1) + (Math.floor(i/2)))
                            });
                            
                        }else if (Number(newState['level']) % 2 != 0) {
                            this.setState({
                                warfare: ((Number(initialState.warfare) + 1) + (Math.floor(i/2)))
                            });
                            
                        }
                        if(Number(newState['level']) % 4 == 0){
                            this.setState({
                                bartering: ((Number(initialState.bartering) + 1) + (Math.floor(i/4)))
                            });
                            
                        }else if(Number(newState['level']) % 4 != 0){
                            this.setState({
                                bartering: ((Number(initialState.bartering) + 1) + (Math.floor(i/4)))
                            });
                            
                        }
                        if ((Number(newState['level'])) > 25){
                            this.setState({
                                errors: "Level must be less than or equal to 25"
                            });
                        }
                    }
                    //'next level' point dispersal here
                } break;
            case 'metamorph':
                if (newState['level'] === 1) {
                    this.setState({
                        strength: (Number(initialState.strength) + 2),
                        finesse: (Number(initialState.finesse) + 2),
                        polymorph: (Number(initialState.polymorph) + 1),
                        twoHanded: (Number(initialState.twoHanded) + 1),
                        persuasion: (Number(initialState.persuasion) + 1)
                    });
                }
                else {
                    for (var i = 0; i <= newState['level'] && Number(i) <= 25; i++) {
                        this.setState({
                            strength: ((Number(initialState.strength) + 2) + i)//only using half of the attribute points generated...
                        });
                        this.setState({
                            finesse: ((Number(initialState.finesse) + 2) + i)//only using half of the attribute points generated...
                        });
                        if (Number(newState['level']) % 2 == 0) {
                            this.setState({
                                twoHanded: ((Number(initialState.twoHanded) + 1) + (Math.floor(i/2)))
                            });
                            
                        }else if (Number(newState['level']) % 2 != 0) {
                            this.setState({
                                twoHanded: ((Number(initialState.twoHanded) + 1) + (Math.floor(i/2)))
                            });
                            
                        }
                        if (Number(newState['level']) % 2 == 0) {
                            this.setState({
                                polymorph: ((Number(initialState.polymorph) + 1) + (Math.floor(i/2)))
                            });
                            
                        }else if (Number(newState['level']) % 2 != 0) {
                            this.setState({
                                polymorph: ((Number(initialState.polymorph) + 1) + (Math.floor(i/2)))
                            });
                            
                        }
                        if(Number(newState['level']) % 4 == 0){
                            this.setState({
                                persuasion: ((Number(initialState.persuasion) + 1) + (Math.floor(i/4)))
                            });
                            
                        }else if(Number(newState['level']) % 4 != 0){
                            this.setState({
                                persuasion: ((Number(initialState.persuasion) + 1) + (Math.floor(i/4)))
                            });
                            
                        }
                        if ((Number(newState['level'])) > 25){
                            this.setState({
                                errors: "Level must be less than or equal to 25"
                            });
                        }
                    }
                } break;
            case 'ranger':
                if (newState['level'] === 1) {
                    this.setState({
                        finesse: (Number(initialState.finesse) + 2),
                        wits: (Number(initialState.wits) + 1),
                        huntsman: (Number(initialState.huntsman) + 1),
                        pyrokinetic: (Number(initialState.pyrokinetic) + 1),
                        luckyCharm: (Number(initialState.luckyCharm) + 1)
                    });
                }else {
                    for (var i = 0; i <= newState['level'] && Number(i) <= 25; i++) {
                        this.setState({
                            finesse: ((Number(initialState.finesse) + 2) + i)//only using half of the attribute points generated...
                        });
                        this.setState({
                            wits: ((Number(initialState.wits) + 1) + i)//only using half of the attribute points generated...
                        });
                        if (Number(newState['level']) % 2 == 0) {
                            this.setState({
                                ranged: ((Number(initialState.ranged) + 1) + (Math.floor(i/2)))
                            });
                            
                        }else if (Number(newState['level']) % 2 != 0) {
                            this.setState({
                                ranged: ((Number(initialState.ranged) + 1) + (Math.floor(i/2)))
                            });
                            
                        }
                        if (Number(newState['level']) % 2 == 0) {
                            this.setState({
                                pyrokinetic: ((Number(initialState.pyrokinetic) + 1) + (Math.floor(i/2)))
                            });
                            
                        }else if (Number(newState['level']) % 2 != 0) {
                            this.setState({
                                pyrokinetic: ((Number(initialState.pyrokinetic) + 1) + (Math.floor(i/2)))
                            });
                            
                        }
                        if(Number(newState['level']) % 4 == 0){
                            this.setState({
                                luckyCharm: ((Number(initialState.luckyCharm) + 1) + (Math.floor(i/4)))
                            });
                            
                        }else if(Number(newState['level']) % 4 != 0){
                            this.setState({
                                luckyCharm: ((Number(initialState.luckyCharm) + 1) + (Math.floor(i/4)))
                            });
                            
                        }
                        if ((Number(newState['level'])) > 25){
                            this.setState({
                                errors: "Level must be less than or equal to 25"
                            });
                        }
                    }
                } break;
            case 'rogue':
                if (newState['level'] === 1) {
                    this.setState({
                        finesse: (Number(initialState.finesse) + 2),
                        constitution: (Number(initialState.constitution) + 1),
                        scoundrel: (Number(initialState.scoundrel) + 1),
                        sneaking: (Number(initialState.sneaking) + 1),
                        dualWeilding: (Number(initialState.dualWeilding) + 1)
                    });
                }
                else {
                    for (var i = 0; i <= newState['level'] && Number(i) <= 25; i++) {
                        this.setState({
                            finesse: ((Number(initialState.finesse) + 2) + i)//only using half of the attribute points generated...
                        });
                        this.setState({
                            constitution: ((Number(initialState.constitution) + 1) + i)//only using half of the attribute points generated...
                        });
                        if (Number(newState['level']) % 2 == 0) {
                            this.setState({
                                dualWeilding: ((Number(initialState.dualWeilding) + 1) + (Math.floor(i/2)))
                            });
                            
                        }else if (Number(newState['level']) % 2 != 0) {
                            this.setState({
                                dualWeilding: ((Number(initialState.dualWeilding) + 1) + (Math.floor(i/2)))
                            });
                            
                        }
                        if (Number(newState['level']) % 2 == 0) {
                            this.setState({
                                scoundrel: ((Number(initialState.scoundrel) + 1) + (Math.floor(i/2)))
                            });
                            
                        }else if (Number(newState['level']) % 2 != 0) {
                            this.setState({
                                scoundrel: ((Number(initialState.scoundrel) + 1) + (Math.floor(i/2)))
                            });
                            
                        }
                        if(Number(newState['level']) % 4 == 0){
                            this.setState({
                                sneaking: ((Number(initialState.sneaking) + 1) + (Math.floor(i/4)))
                            });
                            
                        }else if(Number(newState['level']) % 4 != 0){
                            this.setState({
                                sneaking: ((Number(initialState.sneaking) + 1) + (Math.floor(i/4)))
                            });
                            
                        }
                        if ((Number(newState['level'])) > 25){
                            this.setState({
                                errors: "Level must be less than or equal to 25"
                            });
                        }
                    }
                } break;
            case 'shadowblade':
                if (newState['level'] === 1) {
                    this.setState({
                        finesse: (Number(initialState.finesse) + 2),
                        wits: (Number(initialState.wits) + 2),
                        scoundrel: (Number(initialState.scoundrel) + 1),
                        polymorph: (Number(initialState.polymorph) + 1),
                        thievery: (Number(initialState.thievery) + 1)
                    });
                }
                else {
                    for (var i = 0; i <= newState['level'] && Number(i) <= 25; i++) {
                        this.setState({
                            finesse: ((Number(initialState.finesse) + 2) + i)//only using half of the attribute points generated...
                        });
                        this.setState({
                            wits: ((Number(initialState.wits) + 2) + i)//only using half of the attribute points generated...
                        });
                        if (Number(newState['level']) % 2 == 0) {
                            this.setState({
                                scoundrel: ((Number(initialState.scoundrel) + 1) + (Math.floor(i/2)))
                            });
                            
                        }else if (Number(newState['level']) % 2 != 0) {
                            this.setState({
                                scoundrel: ((Number(initialState.scoundrel) + 1) + (Math.floor(i/2)))
                            });
                            
                        }
                        if (Number(newState['level']) % 2 == 0) {
                            this.setState({
                                polymorph: ((Number(initialState.polymorph) + 1) + (Math.floor(i/2)))
                            });
                            
                        }else if (Number(newState['level']) % 2 != 0) {
                            this.setState({
                                polymorph: ((Number(initialState.polymorph) + 1) + (Math.floor(i/2)))
                            });
                            
                        }
                        if(Number(newState['level']) % 4 == 0){
                            this.setState({
                                thievery: ((Number(initialState.thievery) + 1) + (Math.floor(i/4)))
                            });
                            
                        }else if(Number(newState['level']) % 4 != 0){
                            this.setState({
                                thievery: ((Number(initialState.thievery) + 1) + (Math.floor(i/4)))
                            });
                            
                        }
                        if ((Number(newState['level'])) > 25){
                            this.setState({
                                errors: "Level must be less than or equal to 25"
                            });
                        }
                    }
                } break;
                case 'wayfarer':
                if (newState['level'] === 1) {
                    this.setState({
                        finesse: (Number(initialState.finesse) + 2),
                        intelligence: (Number(initialState.intelligence) + 1),
                        huntsman: (Number(initialState.huntsman) + 1),
                        geomancer: (Number(initialState.geomancer) + 1),
                        bartering: (Number(initialState.bartering) + 1)
                    });
                }
                else {
                    for (var i = 0; i <= newState['level'] && Number(i) <= 25; i++) {
                        this.setState({
                            finesse: ((Number(initialState.finesse) + 2) + i)//only using half of the attribute points generated...
                        });
                        this.setState({
                            intelligence: ((Number(initialState.intelligence) + 1) + i)//only using half of the attribute points generated...
                        });
                        if (Number(newState['level']) % 2 == 0) {
                            this.setState({
                                huntsman: ((Number(initialState.huntsman) + 1) + (Math.floor(i/2)))
                            });
                            
                        }else if (Number(newState['level']) % 2 != 0) {
                            this.setState({
                                huntsman: ((Number(initialState.huntsman) + 1) + (Math.floor(i/2)))
                            });
                            
                        }
                        if (Number(newState['level']) % 2 == 0) {
                            this.setState({
                                geomancer: ((Number(initialState.geomancer) + 1) + (Math.floor(i/2)))
                            });
                            
                        }else if (Number(newState['level']) % 2 != 0) {
                            this.setState({
                                geomancer: ((Number(initialState.geomancer) + 1) + (Math.floor(i/2)))
                            });
                            
                        }
                        if(Number(newState['level']) % 4 == 0){
                            this.setState({
                                bartering: ((Number(initialState.bartering) + 1) + (Math.floor(i/4)))
                            });
                            
                        }else if(Number(newState['level']) % 4 != 0){
                            this.setState({
                                bartering: ((Number(initialState.bartering) + 1) + (Math.floor(i/4)))
                            });
                            
                        }
                        if ((Number(newState['level'])) > 25){
                            this.setState({
                                errors: "Level must be less than or equal to 25"
                            });
                        }
                    }
                } break;
                case 'witch':
                if (newState['level'] === 1) {
                    this.setState({
                        finesse: (Number(initialState.finesse) + 1),
                        intelligence: (Number(initialState.intelligence) + 1),
                        constitution: (Number(initialState.constitution) + 1),
                        scoundrel: (Number(initialState.scoundrel) + 1),
                        necromancer: (Number(initialState.luckyCharm) + 1),
                        persuasion: (Number(initialState.persuasion) + 1)
                    });
                }
                else {
                    for (var i = 0; i <= newState['level'] && Number(i) <= 25; i++) {
                        this.setState({
                            finesse: ((Number(initialState.finesse) + 1) + i)//only using half of the attribute points generated...
                        });
                        this.setState({
                            intelligence: ((Number(initialState.intelligence) + 1) + i)//only using half of the attribute points generated...
                        });
                        if (Number(newState['level']) % 2 == 0) {
                            this.setState({
                                scoundrel: ((Number(initialState.scoundrel) + 1) + (Math.floor(i/2)))
                            });
                            
                        }else if (Number(newState['level']) % 2 != 0) {
                            this.setState({
                                scoundrel: ((Number(initialState.scoundrel) + 1) + (Math.floor(i/2)))
                            });
                            
                        }
                        if (Number(newState['level']) % 2 == 0) {
                            this.setState({
                                necromancer: ((Number(initialState.necromancer) + 1) + (Math.floor(i/2)))
                            });
                            
                        }else if (Number(newState['level']) % 2 != 0) {
                            this.setState({
                                necromancer: ((Number(initialState.necromancer) + 1) + (Math.floor(i/2)))
                            });
                            
                        }
                        if(Number(newState['level']) % 4 == 0){
                            this.setState({
                                persuasion: ((Number(initialState.persuasion) + 1) + (Math.floor(i/4)))
                            });
                            
                        }else if(Number(newState['level']) % 4 != 0){
                            this.setState({
                                persuasion: ((Number(initialState.persuasion) + 1) + (Math.floor(i/4)))
                            });
                            
                        }
                        if ((Number(newState['level'])) > 25){
                            this.setState({
                                errors: "Level must be less than or equal to 25"
                            });
                        }
                    }
                } break;
                case 'wizard':
                if (newState['level'] === 1) {
                    this.setState({
                        intelligence: (Number(initialState.intelligence) + 2),
                        constitution: (Number(initialState.constitution) + 1),
                        pyrokinetic: (Number(initialState.pyrokinetic) + 1),
                        geomancer: (Number(initialState.geomancer) + 1),
                        loremaster: (Number(initialState.loremaster) + 1)
                    });
                }
                else {
                    for (var i = 0; i <= newState['level'] && Number(i) <= 25; i++) {
                        this.setState({
                            intelligence: ((Number(initialState.intelligence) + 2) + i)//only using half of the attribute points generated...
                        });
                        this.setState({
                            constitution: ((Number(initialState.constitution) + 1) + i)//only using half of the attribute points generated...
                        });
                        if (Number(newState['level']) % 2 == 0) {
                            this.setState({
                                pyrokinetic: ((Number(initialState.pyrokinetic) + 1) + (Math.floor(i/2)))
                            });
                            
                        }else if (Number(newState['level']) % 2 != 0) {
                            this.setState({
                                pyrokinetic: ((Number(initialState.pyrokinetic) + 1) + (Math.floor(i/2)))
                            });
                            
                        }
                        if (Number(newState['level']) % 2 == 0) {
                            this.setState({
                                geomancer: ((Number(initialState.geomancer) + 1) + (Math.floor(i/2)))
                            });
                            
                        }else if (Number(newState['level']) % 2 != 0) {
                            this.setState({
                                geomancer: ((Number(initialState.geomancer) + 1) + (Math.floor(i/2)))
                            });
                            
                        }
                        if(Number(newState['level']) % 4 == 0){
                            this.setState({
                                loremaster: ((Number(initialState.loremaster) + 1) + (Math.floor(i/4)))
                            });
                            
                        }else if(Number(newState['level']) % 4 != 0){
                            this.setState({
                                loremaster: ((Number(initialState.loremaster) + 1) + (Math.floor(i/4)))
                            });
                            
                        }
                        if ((Number(newState['level'])) > 25){
                            this.setState({
                                errors: "Level must be less than or equal to 25"
                            });
                        }
                    }
                } break;
                case 'battlemage':
                if (newState['level'] === 1) {
                    this.setState({
                        strength: (Number(initialState.strength) + 1),
                        intelligence: (Number(initialState.intelligence) + 1),
                        constitution: (Number(initialState.constitution) + 1),
                        warfare: (Number(initialState.warfare) + 1),
                        aerotheurge: (Number(initialState.aerotheurge) + 1),
                        persuasion: (Number(initialState.persuasion) + 1)
                    });
                }
                else {
                    for (var i = 0; i <= newState['level'] && Number(i) <= 25; i++) {
                        this.setState({
                            strength: ((Number(initialState.strength) + 1) + i)//only using half of the attribute points generated...
                        });
                        this.setState({
                            intelligence: ((Number(initialState.intelligence) + 1) + i)//only using half of the attribute points generated...
                        });
                        if (Number(newState['level']) % 2 == 0) {
                            this.setState({
                                warfare: ((Number(initialState.warfare) + 1) + (Math.floor(i/2)))
                            });
                            
                        }else if (Number(newState['level']) % 2 != 0) {
                            this.setState({
                                warfare: ((Number(initialState.warfare) + 1) + (Math.floor(i/2)))
                            });
                            
                        }
                        if (Number(newState['level']) % 2 == 0) {
                            this.setState({
                                aerotheurge: ((Number(initialState.aerotheurge) + 1) + (Math.floor(i/2)))
                            });
                            
                        }else if (Number(newState['level']) % 2 != 0) {
                            this.setState({
                                aerotheurge: ((Number(initialState.aerotheurge) + 1) + (Math.floor(i/2)))
                            });
                            
                        }
                        if(Number(newState['level']) % 4 == 0){
                            this.setState({
                                persuasion: ((Number(initialState.persuasion) + 1) + (Math.floor(i/4)))
                            });
                            
                        }else if(Number(newState['level']) % 4 != 0){
                            this.setState({
                                persuasion: ((Number(initialState.persuasion) + 1) + (Math.floor(i/4)))
                            });
                            
                        }
                        if ((Number(newState['level'])) > 25){
                            this.setState({
                                errors: "Level must be less than or equal to 25"
                            });
                        }
                    }
                } break;
                case 'cleric':
                if (newState['level'] === 1) {
                    this.setState({
                        strength: (Number(initialState.strength) + 1),
                        intelligence: (Number(initialState.intelligence) + 1),
                        constitution: (Number(initialState.constitution) + 1),
                        hydrosophist: (Number(initialState.hydrosophist) + 1),
                        necromancer: (Number(initialState.necromancer) + 1),
                        bartering: (Number(initialState.bartering) + 1)
                    });
                }
                else {
                    for (var i = 0; i <= newState['level'] && Number(i) <= 25; i++) {
                        this.setState({
                            strength: ((Number(initialState.strength) + 1) + i)//only using half of the attribute points generated...
                        });
                        this.setState({
                            intelligence: ((Number(initialState.intelligence) + 1) + i)//only using half of the attribute points generated...
                        });
                        if (Number(newState['level']) % 2 == 0) {
                            this.setState({
                                hydrosophist: ((Number(initialState.hydrosophist) + 1) + (Math.floor(i/2)))
                            });
                            
                        }else if (Number(newState['level']) % 2 != 0) {
                            this.setState({
                                hydrosophist: ((Number(initialState.hydrosophist) + 1) + (Math.floor(i/2)))
                            });
                            
                        }
                        if (Number(newState['level']) % 2 == 0) {
                            this.setState({
                                necromancer: ((Number(initialState.necromancer) + 1) + (Math.floor(i/2)))
                            });
                            
                        }else if (Number(newState['level']) % 2 != 0) {
                            this.setState({
                                necromancer: ((Number(initialState.necromancer) + 1) + (Math.floor(i/2)))
                            });
                            
                        }
                        if(Number(newState['level']) % 4 == 0){
                            this.setState({
                                bartering: ((Number(initialState.bartering) + 1) + (Math.floor(i/4)))
                            });
                            
                        }else if(Number(newState['level']) % 4 != 0){
                            this.setState({
                                bartering: ((Number(initialState.bartering) + 1) + (Math.floor(i/4)))
                            });
                            
                        }
                        if ((Number(newState['level'])) > 25){
                            this.setState({
                                errors: "Level must be less than or equal to 25"
                            });
                        }
                    }
                } break;
                case 'conjurer':
                if (newState['level'] === 1) {
                    this.setState({
                        intelligence: (Number(initialState.intelligence) + 1),
                        constitution: (Number(initialState.constitution) + 2),
                        summoning: (Number(initialState.summoning) + 1),
                        leadership: (Number(initialState.leadership) + 1),
                        loremaster: (Number(initialState.loremaster) + 1)
                    });
                }
                else {
                    for (var i = 0; i <= newState['level'] && Number(i) <= 25; i++) {
                        this.setState({
                            intelligence: ((Number(initialState.intelligence) + 2) + i)//only using half of the attribute points generated...
                        });
                        this.setState({
                            constitution: ((Number(initialState.constitution) + 1) + i)//only using half of the attribute points generated...
                        });
                        if (Number(newState['level']) % 2 == 0) {
                            this.setState({
                                summoning: ((Number(initialState.summoning) + 1) + (Math.floor(i/2)))
                            });
                            
                        }else if (Number(newState['level']) % 2 != 0) {
                            this.setState({
                                summoning: ((Number(initialState.summoning) + 1) + (Math.floor(i/2)))
                            });
                            
                        }
                        if (Number(newState['level']) % 2 == 0) {
                            this.setState({
                                summoning: ((Number(initialState.summoning) + 1) + (Math.floor(i/2)))
                            });
                            
                        }else if (Number(newState['level']) % 2 != 0) {
                            this.setState({
                                summoning: ((Number(initialState.summoning) + 1) + (Math.floor(i/2)))
                            });
                            
                        }
                        if(Number(newState['level']) % 4 == 0){
                            this.setState({
                                loremaster: ((Number(initialState.loremaster) + 1) + (Math.floor(i/4)))
                            });
                            
                        }else if(Number(newState['level']) % 4 != 0){
                            this.setState({
                                loremaster: ((Number(initialState.loremaster) + 1) + (Math.floor(i/4)))
                            });
                            
                        }
                        if ((Number(newState['level'])) > 25){
                            this.setState({
                                errors: "Level must be less than or equal to 25"
                            });
                        }
                    }
                } break;
                case 'enchanter':
                if (newState['level'] === 1) {
                    this.setState({
                        intelligence: (Number(initialState.intelligence) + 2),
                        constitution: (Number(initialState.constitution) + 1),
                        hydrosophist: (Number(initialState.hydrosophist) + 1),
                        aerotheurge: (Number(initialState.geomancer) + 1),
                        loremaster: (Number(initialState.loremaster) + 1)
                    });
                }
                else {
                    for (var i = 0; i <= newState['level'] && Number(i) <= 25; i++) {
                        this.setState({
                            intelligence: ((Number(initialState.intelligence) + 2) + i)//only using half of the attribute points generated...
                        });
                        this.setState({
                            constitution: ((Number(initialState.constitution) + 1) + i)//only using half of the attribute points generated...
                        });
                        if (Number(newState['level']) % 2 == 0) {
                            this.setState({
                                hydrosophist: ((Number(initialState.hydrosophist) + 1) + (Math.floor(i/2)))
                            });
                            
                        }else if (Number(newState['level']) % 2 != 0) {
                            this.setState({
                                hydrosophist: ((Number(initialState.hydrosophist) + 1) + (Math.floor(i/2)))
                            });
                            
                        }
                        if (Number(newState['level']) % 2 == 0) {
                            this.setState({
                                aerotheurge: ((Number(initialState.aerotheurge) + 1) + (Math.floor(i/2)))
                            });
                            
                        }else if (Number(newState['level']) % 2 != 0) {
                            this.setState({
                                aerotheurge: ((Number(initialState.aerotheurge) + 1) + (Math.floor(i/2)))
                            });
                            
                        }
                        if(Number(newState['level']) % 4 == 0){
                            this.setState({
                                loremaster: ((Number(initialState.loremaster) + 1) + (Math.floor(i/4)))
                            });
                            
                        }else if(Number(newState['level']) % 4 != 0){
                            this.setState({
                                loremaster: ((Number(initialState.loremaster) + 1) + (Math.floor(i/4)))
                            });
                            
                        }
                        if ((Number(newState['level'])) > 25){
                            this.setState({
                                errors: "Level must be less than or equal to 25"
                            });
                        }
                    }
                } break;
                case 'fighter':
                if (newState['level'] === 1) {
                    this.setState({
                        strength: (Number(initialState.strength) + 1),
                        constitution: (Number(initialState.constitution) + 2),
                        warfare: (Number(initialState.warfare) + 1),
                        geomancer: (Number(initialState.geomancer) + 1),
                        bartering: (Number(initialState.bartering) + 1)
                    });
                }
                else {
                    for (var i = 0; i <= newState['level'] && Number(i) <= 25; i++) {
                        this.setState({
                            strength: ((Number(initialState.strength) + 1) + i)//only using half of the attribute points generated...
                        });
                        this.setState({
                            constitution: ((Number(initialState.constitution) + 2) + i)//only using half of the attribute points generated...
                        });
                        if (Number(newState['level']) % 2 == 0) {
                            this.setState({
                                warfare: ((Number(initialState.warfare) + 1) + (Math.floor(i/2)))
                            });
                            
                        }else if (Number(newState['level']) % 2 != 0) {
                            this.setState({
                                warfare: ((Number(initialState.warfare) + 1) + (Math.floor(i/2)))
                            });
                            
                        }
                        if (Number(newState['level']) % 2 == 0) {
                            this.setState({
                                geomancer: ((Number(initialState.geomancer) + 1) + (Math.floor(i/2)))
                            });
                            
                        }else if (Number(newState['level']) % 2 != 0) {
                            this.setState({
                                geomancer: ((Number(initialState.geomancer) + 1) + (Math.floor(i/2)))
                            });
                            
                        }
                        if(Number(newState['level']) % 4 == 0){
                            this.setState({
                                bartering: ((Number(initialState.bartering) + 1) + (Math.floor(i/4)))
                            });
                            
                        }else if(Number(newState['level']) % 4 != 0){
                            this.setState({
                                bartering: ((Number(initialState.bartering) + 1) + (Math.floor(i/4)))
                            });
                            
                        }
                        if ((Number(newState['level'])) > 25){
                            this.setState({
                                errors: "Level must be less than or equal to 25"
                            });
                        }
                    }
                } break;
                case 'inquisitor':
                if (newState['level'] === 1) {
                    this.setState({
                        strength: (Number(initialState.strength) + 1),
                        intelligence: (Number(initialState.intelligence) + 1),
                        constitution: (Number(initialState.constitution) + 1),
                        warfare: (Number(initialState.warfare) + 1),
                        necromancer: (Number(initialState.necromancer) + 1),
                        telekinesis: (Number(initialState.telekinesis) + 1)
                    });
                }
                else {
                    for (var i = 0; i <= newState['level'] && Number(i) <= 25; i++) {
                        this.setState({
                            strength: ((Number(initialState.strength) + 1) + i)//only using half of the attribute points generated...
                        });
                        this.setState({
                            intelligence: ((Number(initialState.intelligence) + 1) + i)//only using half of the attribute points generated...
                        });
                        if (Number(newState['level']) % 2 == 0) {
                            this.setState({
                                warfare: ((Number(initialState.warfare) + 1) + (Math.floor(i/2)))
                            });
                            
                        }else if (Number(newState['level']) % 2 != 0) {
                            this.setState({
                                warfare: ((Number(initialState.warfare) + 1) + (Math.floor(i/2)))
                            });
                            
                        }
                        if (Number(newState['level']) % 2 == 0) {
                            this.setState({
                                necromancer: ((Number(initialState.necromancer) + 1) + (Math.floor(i/2)))
                            });
                            
                        }else if (Number(newState['level']) % 2 != 0) {
                            this.setState({
                                necromancer: ((Number(initialState.necromancer) + 1) + (Math.floor(i/2)))
                            });
                            
                        }
                        if(Number(newState['level']) % 4 == 0){
                            this.setState({
                                telekinesis: ((Number(initialState.telekinesis) + 1) + (Math.floor(i/4)))
                            });
                            
                        }else if(Number(newState['level']) % 4 != 0){
                            this.setState({
                                telekinesis: ((Number(initialState.telekinesis) + 1) + (Math.floor(i/4)))
                            });
                            
                        }
                        if ((Number(newState['level'])) > 25){
                            this.setState({
                                errors: "Level must be less than or equal to 25"
                            });
                        }
                    }
                } break;
        }
        event.preventDefault();
        this.reset();
    }

    render() {
        return (
            <div id='master'>
                <div id='attributes'>
                    <div id='build'>
                        <br />
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
                        </select><br />
                        <label>Character Level: <input type='number' id='level' value={this.state.level} onChange={this.handleInputChange} onSubmit={this.handleNextUpgrades} /></label><br /><br />
                        <p id="errors" value={this.state.errors}> {this.state.errors}</p>
                    </div>
                    <div id="attributePoints">
                        <h2>Attributes</h2>
                        
                        <form onSubmit={this.handleNextUpgrades}>
                            <label>Strength: <input type='number' id='strength' value={this.state.strength} onChange={this.handleInputChange} readOnly /></label><br />
                            <label>Finesse: <input type='number' id='finesse' value={this.state.finesse} onChange={this.handleInputChange} readOnly /></label><br />
                            <label>Intelligence: <input type='number' id='intelligence' value={this.state.intelligence} onChange={this.handleInputChange} readOnly /></label><br />
                            <label>Constitution: <input type='number' id='constitution' value={this.state.constitution} onChange={this.handleInputChange} readOnly /></label><br />
                            <label>Memory: <input type='number' id='memory' value={this.state.memory} onChange={this.handleInputChange} readOnly /></label><br />
                            <label>Wits: <input type='number' id='wits' value={this.state.wits} onChange={this.handleInputChange} readOnly /></label><br />
                        </form>
                    </div>
                    <div id='combatPoints'>
                        <h2>Combat Abilities</h2>
                        <form onSubmit={this.handleNextUpgrades}>
                            <h3>Weapons</h3>
                            <label>Dual Weilding: <input type='number' id='dualWeilding' value={this.state.dualWeilding} onChange={this.handleInputChange} readOnly /></label><br />
                            <label>Ranged: <input type='number' id='ranged' value={this.state.ranged} onChange={this.handleInputChange} readOnly /></label><br />
                            <label>Single-Handed: <input type='number' id='singleHanded' value={this.state.singleHanded} onChange={this.handleInputChange} readOnly /></label><br />
                            <label>Two-Handed: <input type='number' id='twoHanded' value={this.state.twoHanded} onChange={this.handleInputChange} readOnly /></label><br />
                            <h3>Defence</h3>
                            <label>Leadership: <input type='number' id='leadership' value={this.state.leadership} onChange={this.handleInputChange} readOnly /></label><br />
                            <label>Perserverance: <input type='number' id='perserverance' value={this.state.perserverance} onChange={this.handleInputChange} readOnly /></label><br />
                            <label>Retribution: <input type='number' id='retribution' value={this.state.retribution} onChange={this.handleInputChange} readOnly /></label><br />
                            <h3>Skills</h3>
                            <label>Aerotheurge: <input type='number' id='aerotheurge' value={this.state.aerotheurge} onChange={this.handleInputChange} readOnly /></label><br />
                            <label>Geomancer: <input type='number' id='geomancer' value={this.state.geomancer} onChange={this.handleInputChange} readOnly /></label><br />
                            <label>Huntsman: <input type='number' id='huntsman' value={this.state.huntsman} onChange={this.handleInputChange} readOnly /></label><br />
                            <label>Hydrosophist: <input type='number' id='hydtosophist' value={this.state.hydrosophist} onChange={this.handleInputChange} readOnly /></label><br />
                            <label>Necromancer: <input type='number' id='necromancer' value={this.state.necromancer} onChange={this.handleInputChange} readOnly /></label><br />
                            <label>Polymorph: <input type='number' id='polymorph' value={this.state.polymorph} onChange={this.handleInputChange} readOnly /></label><br />
                            <label>Pyrokinetic: <input type='number' id='pyrokinetic' value={this.state.pyrokinetic} onChange={this.handleInputChange} readOnly /></label><br />
                            <label>Scoundrel: <input type='number' id='scoundrel' value={this.state.scoundrel} onChange={this.handleInputChange} readOnly /></label><br />
                            <label>Summoning: <input type='number' id='summoning' value={this.state.summoning} onChange={this.handleInputChange} readOnly /></label><br />
                            <label>Warfare: <input type='number' id='warfare' value={this.state.warfare} onChange={this.handleInputChange} readOnly /></label><br />
                        </form>
                    </div>
                    <div id="civilPoints">
                        <h2>Civil Abilities</h2>
                        <form onSubmit={this.handleNextUpgrades}>
                            <h3>Personality</h3>
                            <label>Bartering: <input type='number' id='bartering' value={this.state.bartering} onChange={this.handleInputChange} readOnly /></label><br />
                            <label>Lucky Charm: <input type='number' id='luckyCharm' value={this.state.luckyCharm} onChange={this.handleInputChange} readOnly /></label><br />
                            <label>Persuasion: <input type='number' id='persuasion' value={this.state.persuasion} onChange={this.handleInputChange} readOnly /></label><br />
                            <h3>Craftsmanship</h3>
                            <label>Loremaster: <input type='number' id='loremaster' value={this.state.loremaster} onChange={this.handleInputChange} readOnly /></label><br />
                            <label>Telekinesis: <input type='number' id='telekinesis' value={this.state.telekinesis} onChange={this.handleInputChange} readOnly /></label><br />
                            <h3>Nasty Deeds</h3>
                            <label>Sneaking: <input type='number' id='sneaking' value={this.state.sneaking} onChange={this.handleInputChange} readOnly /></label><br />
                            <label>Thievery: <input type='number' id='thievery' value={this.state.thievery} onChange={this.handleInputChange} readOnly /></label><br />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}
export default CharacterData;