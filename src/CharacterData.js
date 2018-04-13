//this will replace gets all character data from user input
import React, { Component } from 'react';

class CharacterData extends Component {
    constructor(props) {

        super(props);
        this.state = {
            upgrades: "none",
            output: 0,
            damage: 0,
            elemental: 0,
            attribute: 0,
            weaponskill: 0,
            other: 0,
            highground: 0,
            crit: 0
            // level: 0,
            // strength: 0,
            // finesse: 0,
            // intelligence: 0,
            // constitution: 0,
            // memory: 0,
            // wits: 0
        }
        this.handleAverageDamage = this.handleAverageDamage.bind(this);
        this.getAverageDamage = this.getAverageDamage.bind(this);
        this.handleNextUpgrades = this.handleNextUpgrades.bind(this);
        this.getNextUpgrades = this.getNextUpgrades.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    getAverageDamage() {
        const { damage, elemental, attribute, weaponskill, other, highground, crit } = this.state;

        var averageDamage = Math.floor(damage * (1 + (elemental / 100)) * (1 + (attribute / 100) + (weaponskill / 100) + (other / 100)) * (1 + (highground / 100) + (crit / 100)));
        //console.log("hello");
        return averageDamage;
    }
    getNextUpgrades() {
        const { level, strength, finesse, intelligence, constitution, memory, wits, dualWeilding, ranged, singleHanded, twoHanded, leadership, perserverance, retribution, aerotheurge, geomancer, huntsman, hydrosophist, necromancer, polymorph, pyrokinetic, scoundrel, summoning, warfare } = this.state;
        // figure out next upgrades
        var y = level * strength;
        return y;
        //return next upgrades as string
    }

    handleNextUpgrades(event) {
        var nextUpgrades = {};
        nextUpgrades["upgrades"] = this. getNextUpgrades();
        this.setState(nextUpgrades);
        event.preventDefault();
    }

    handleAverageDamage(event) {
        var newOutput = {};
        newOutput["output"] = this.getAverageDamage();
        this.setState(newOutput);
        event.preventDefault();
    }

    handleInputChange(event) {
        var newVal = {};
        newVal[event.target.id] = Number(event.target.value);
        this.setState(newVal);
    }

    render() {
        return (
            <div id='master'>
                <div id='damageCalculator'>
                    <h1>Damage Calculator</h1>
                    <p id="output" value={this.state.output}>Average Damage: {this.state.output}</p>
                    <form onSubmit={this.handleAverageDamage}>
                        <label>
                            Base Weapon Damage: <input type="number" id="damage" value={this.state.damage} onChange={this.handleInputChange} />
                        </label><br />
                        <label>
                            Elemental Bonus: <input type="number" id="elemental" value={this.state.elemental} onChange={this.handleInputChange} />%
                    </label><br />
                        <label>
                            Attribute Bonus: <input type="number" id="attribute" value={this.state.attribute} onChange={this.handleInputChange} />%
                    </label><br />
                        <label>
                            Weapon Skill Bonus: <input type="number" id="weaponskill" value={this.state.weaponskill} onChange={this.handleInputChange} />%
                    </label><br />
                        <label>
                            Other Bonus: <input type="number" id="other" value={this.state.other} onChange={this.handleInputChange} />%
                    </label><br />
                        <label>
                            Highground Bonus: <input type="number" id="highground" value={this.state.highground} onChange={this.handleInputChange} />%
                    </label><br />
                        <label>
                            Crit Multiplier: <input type="number" id="crit" value={this.state.crit} onChange={this.handleInputChange} />%
                    </label><br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div id='attributes'>
                    <h1>Attributes</h1>
                    <p id="upgrades" value={this.state.upgrades}>Next Upgrades: {this.state.upgrades}</p>
                    <form onSubmit={this.handleNextUpgrades}>
                        <label>
                            Character Level: <input type='number' id='level' value={this.state.level} onChange={this.handleInputChange} />
                        </label><br />
                        <label>
                            Strength: <input type='number' id='strength' value={this.state.strength} onChange={this.handleInputChange} />
                        </label><br />
                        <label>
                            Finesse: <input type='number' id='finesse' value={this.state.finesse} onChange={this.handleInputChange} />
                        </label><br />
                        <label>
                            Intelligence: <input type='number' id='intelligence' value={this.state.intelligence} onChange={this.handleInputChange} />
                        </label><br />
                        <label>
                            Constitution: <input type='number' id='constitution' value={this.state.constitution} onChange={this.handleInputChange} />
                        </label><br />
                        <label>
                            Memory: <input type='number' id='memory' value={this.state.memory} onChange={this.handleInputChange} />
                        </label><br />
                        <label>
                            Wits: <input type='number' id='wits' value={this.state.wits} onChange={this.handleInputChange} />
                        </label><br />
                        {/* <input type="submit" value="Submit" /> */}
                    </form>
                </div>
                <div id='abilities'>
                    <h1>Combat Abilities</h1>
                    <form onSubmit={this.handleNextUpgrades}>
                        <h2>Weapons</h2>
                        <label>
                            Dual Weilding: <input type='number' id='dualWeilding' value={this.state.dualWeilding} onChange={this.handleInputChange} />
                        </label><br />
                        <label>
                            Ranged: <input type='number' id='ranged' value={this.state.ranged} onChange={this.handleInputChange} />
                        </label><br />
                        <label>
                            Single-Handed: <input type='number' id='singleHanded' value={this.state.singleHanded} onChange={this.handleInputChange} />
                        </label><br />
                        <label>
                            Two-Handed: <input type='number' id='twoHanded' value={this.state.twoHanded} onChange={this.handleInputChange} />
                        </label><br />
                        <h2>Defence</h2>
                        <label>
                            Leadership: <input type='number' id='leadership' value={this.state.leadership} onChange={this.handleInputChange} />
                        </label><br />
                        <label>
                            Perserverance: <input type='number' id='perserverance' value={this.state.perserverance} onChange={this.handleInputChange} />
                        </label><br />
                        <label>
                            Retribution: <input type='number' id='retribution' value={this.state.retribution} onChange={this.handleInputChange} />
                        </label><br />
                        <h2>Skills</h2>
                        <label>
                            Aerotheurge: <input type='number' id='aerotheurge' value={this.state.aerotheurge} onChange={this.handleInputChange} />
                        </label><br />
                        <label>
                            Geomancer: <input type='number' id='geomancer' value={this.state.geomancer} onChange={this.handleInputChange} />
                        </label><br />
                        <label>
                            Huntsman: <input type='number' id='huntsman' value={this.state.huntsman} onChange={this.handleInputChange} />
                        </label><br />
                        <label>
                            Hydrosophist: <input type='number' id='hydtosophist' value={this.state.hydrosophist} onChange={this.handleInputChange} />
                        </label><br />
                        <label>
                            Necromancer: <input type='number' id='necromancer' value={this.state.necromancer} onChange={this.handleInputChange} />
                        </label><br />
                        <label>
                            Polymorph: <input type='number' id='polymorph' value={this.state.polymorph} onChange={this.handleInputChange} />
                        </label><br />
                        <label>
                            Pyrokinetic: <input type='number' id='pyrokinetic' value={this.state.pyrokinetic} onChange={this.handleInputChange} />
                        </label><br />
                        <label>
                            Scoundrel: <input type='number' id='scoundrel' value={this.state.scoundrel} onChange={this.handleInputChange} />
                        </label><br />
                        <label>
                            Summoning: <input type='number' id='summoning' value={this.state.summoning} onChange={this.handleInputChange} />
                        </label><br />
                        <label>
                            Warfare: <input type='number' id='warfare' value={this.state.warfare} onChange={this.handleInputChange} />
                        </label><br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }

}
export default CharacterData;