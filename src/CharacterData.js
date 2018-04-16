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
            crit: 0,
            weaponSkill: "default",
            spellSkill: "default",
            level: 0,
            strength: 0,
            finesse: 0,
            intelligence: 0,
            constitution: 0,
            memory: 0,
            wits: 0,
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
            warfare: 0
        }
        // this.handleAverageDamage = this.handleAverageDamage.bind(this);
        // this.getAverageDamage = this.getAverageDamage.bind(this);
        this.handleNextUpgrades = this.handleNextUpgrades.bind(this);
        this.getNextUpgrades = this.getNextUpgrades.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.changeWeapon = this.changeWeapon.bind(this);
        this.changeSpell = this.changeSpell.bind(this);
    }

    handleInputChange(event) {
        var newVal = {};
        newVal[event.target.id] = Number(event.target.value);
        this.setState(newVal);
    }

    changeWeapon(event) {
        var newWeapon = {};
        newWeapon[event.target.id] = event.target.value;
        this.setState(newWeapon);
        console.log(newWeapon.weaponSkill);
        return (newWeapon);
    }

    changeSpell(event) {
        var newSpell = {};
        newSpell[event.target.id] = event.target.value;
        this.setState(newSpell);
        console.log(newSpell.spellSkill);
        return (newSpell);
    }

    getNextUpgrades() {
        const { level, weaponSkill, spellSkill, damage, strength, finesse, intelligence, constitution, memory, wits, dualWeilding, ranged, singleHanded, twoHanded, leadership, perserverance, retribution, aerotheurge, geomancer, huntsman, hydrosophist, necromancer, polymorph, pyrokinetic, scoundrel, summoning, warfare } = this.state;
        //take the weapon skill and spell skill and decide point dispersal.
        // console.log(weaponSkill);
        // console.log(spellSkill);
        //this is the basics for changing the values. make a function above to get the level and weapon and class to decide where to allocate the points
        // switch (level) {
        //     case 1:
        //         this.setState({
        //             strength: (Number(strength) + 10), //this is the same =>
        //             finesse: 10,
        //             intelligence: 10,
        //             constitution: 10, //=> as this
        //             memory: 10,
        //             wits: 10
        //         });
        //         break;
        //     case 2:
        //         this.setState({
        //             strength: (Number(strength) + 11), //this is the same =>
        //             finesse: 10,
        //             intelligence: 10,
        //             constitution: 11, //=> as this
        //             memory: 10,
        //             wits: 10
        //         });
        //         break;
        // }
    }

    handleNextUpgrades(event) {
        var nextUpgrades = {};
        nextUpgrades["upgrades"] = this.getNextUpgrades();
        this.setState(nextUpgrades);
        event.preventDefault();
    }

    // getAverageDamage() {
    //     const { damage, elemental, attribute, weaponskill, other, highground, crit } = this.state;
    //     var averageDamage = Math.floor(damage * (1 + (elemental / 100)) * (1 + (attribute / 100) + (weaponskill / 100) + (other / 100)) * (1 + (highground / 100) + (crit / 100)));
    //     return averageDamage;
    // }

    // handleAverageDamage(event) {
    //     var newOutput = {}; 0
    //     newOutput["output"] = this.getAverageDamage();
    //     this.setState(newOutput);
    //     event.preventDefault();
    // }



    render() {
        return (
            <div id='master'>
                {/* <div id='damageCalculator'>
                    <h1>Damage Calculator</h1>
                    <p id="output" value={this.state.output}>Average Damage: {this.state.output}</p>
                    <form onSubmit={this.handleAverageDamage}>
                        <label>Base Weapon Damage: <input type="number" id="damage" value={this.state.damage} onChange={this.handleInputChange} /></label><br />
                        <label>Elemental Bonus: <input type="number" id="elemental" value={this.state.elemental} onChange={this.handleInputChange} />%</label><br />
                        <label>Attribute Bonus: <input type="number" id="attribute" value={this.state.attribute} onChange={this.handleInputChange} />%</label><br />
                        <label> Weapon Skill Bonus: <input type="number" id="weaponskill" value={this.state.weaponskill} onChange={this.handleInputChange} />% </label><br />
                        <label>Other Bonus: <input type="number" id="other" value={this.state.other} onChange={this.handleInputChange} />%</label><br />
                        <label>Highground Bonus: <input type="number" id="highground" value={this.state.highground} onChange={this.handleInputChange} />%</label><br />
                        <label>Crit Multiplier: <input type="number" id="crit" value={this.state.crit} onChange={this.handleInputChange} />%</label><br />
                        <input type="submit" value="Submit" />
                    </form><br /><br />
                </div> */}
                <div id='attributes'>
                    <div id='build'>
                        <br />
                        <label>Weapon Skill: </label>
                        <select onChange={this.changeWeapon} id="weaponSkill">
                            <option value="null">Select Weapon...</option>
                            <option value="finesse">Bow</option>
                            <option value="finesse">Crossbow</option>
                            <option value="intelligence">Staff</option>
                            <option value="finesse">Spear</option>
                            <option value="strength">Club</option>
                            <option value="finesse">Dual-weild Dagger</option>
                            <option value="intelligence">Dual-weild Wand</option>
                            <option value="strength">One-handed Sword</option>
                            <option value="strength">Two-handed Sword</option>
                            <option value="strength">One-handed Axe</option>
                            <option value="strength">Two-handed Axe</option>
                            <option value="strength">one-handed Mace</option>
                            <option value="strength">Two-handed Mace</option>
                        </select><br />
                        <label>Spell Skill: </label>
                        <select onChange={this.changeSpell} id="spellSkill">
                            <option value="null">Select Spell Type...</option>
                            <option value="intelligence">Aerotheurge</option>
                            <option value="intelligence">Geomancy</option>
                            <option value="finesse">Huntsman</option>
                            <option value="intelligence">Hydrosophist</option>
                            <option value="intelligence">Necromancer</option>
                            <option value="strength">Polymorph</option>
                            <option value="intelligence">Pyrokinetic</option>
                            <option value="finesse">Scoundrel</option>
                            <option value="summoning">Summoning</option>
                            <option value="strength">Warfare</option>
                        </select><br />
                        <label>Character Level: <input type='number' id='level' value={this.state.level} onChange={this.handleInputChange} /></label><br /><br />
                    </div>
                    <h2>Attributes</h2>
                    <p id="upgrades" value={this.state.upgrades}>Next Upgrades: {this.state.upgrades}</p>
                    <form onSubmit={this.handleNextUpgrades}>

                        <label>Strength: <input type='number' id='strength' value={this.state.strength} onChange={this.handleInputChange} readOnly /></label><br />
                        <label>Finesse: <input type='number' id='finesse' value={this.state.finesse} onChange={this.handleInputChange} readOnly /></label><br />
                        <label>Intelligence: <input type='number' id='intelligence' value={this.state.intelligence} onChange={this.handleInputChange} readOnly /></label><br />
                        <label>Constitution: <input type='number' id='constitution' value={this.state.constitution} onChange={this.handleInputChange} readOnly /></label><br />
                        <label>Memory: <input type='number' id='memory' value={this.state.memory} onChange={this.handleInputChange} readOnly /></label><br />
                        <label>Wits: <input type='number' id='wits' value={this.state.wits} onChange={this.handleInputChange} readOnly /></label><br />
                        {/* <input type="submit" value="Submit" /> */}
                    </form>
                </div>
                <div id='abilities'>
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
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }

}
export default CharacterData;