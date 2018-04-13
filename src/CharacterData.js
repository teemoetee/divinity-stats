//this will replace gets all character data from user input
import React, { Component } from 'react';

class CharacterData extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.getValues = this.getValues.bind(this);
        //var averageDamage = 0;
    }


    handleSubmit(output) {
        var baseDamage = document.getElementById("damage").value;
        var elementalBonus = document.getElementById("elemental").value;
        var attributeBonus = document.getElementById("attribute").value;
        var weaponSkillBonus = document.getElementById("weapon skill").value;
        var otherBonus = document.getElementById("other").value;
        var highgroundBonus = document.getElementById("highground").value;
        var critMultiplier = document.getElementById("crit").value;
        var strength = document.getElementById("strength").value;
        var finesse = document.getElementById("finesse").value;
        var intelligence = document.getElementById("intelligence").value;
        var constitution = document.getElementById("constitution").value;
        var memory = document.getElementById("memory").value;
        var wits = document.getElementById("wits").value;
        var dualWeilding = document.getElementById("dualWeilding").value;
        var ranged = document.getElementById("ranged").value;
        var singleHanded = document.getElementById("singleHanded").value;
        var twoHanded = document.getElementById("twoHanded").value;
        var leadership = document.getElementById("leadership").value;
        var perserverance = document.getElementById("perserverance").value;
        var retribution = document.getElementById("retribution").value;
        var aerotheurge = document.getElementById("aerotheurge").value;
        var geomancer = document.getElementById("geomancer").value;
        var huntsman = document.getElementById("huntsman").value;
        var hydrosophist = document.getElementById("hydrosophist").value;
        var necromancer = document.getElementById("necromancer").value;
        var polymorph = document.getElementById("polymorph").value;
        var pyrokinetic = document.getElementById("pyrokinetic").value;
        var scoundrel = document.getElementById("scoundrel").value;
        var summoning = document.getElementById("summoning").value;
        var warfare = document.getElementById("warfare").value;

        //return an object with all the values in it to be passed to another component for evaluation.
        //var averageDamage = Math.floor(Number(baseDamage)*(1.0 + (Number(elementalBonus)/100))*(1.0 + (Number(attributeBonus)/100) + (Number(weaponSkillBonus)/100) + (Number(otherBonus)/100))*(1.0 + (Number(highgroundBonus)/100) + (Number(critMultiplier)/100)));
        //return averageDamage;
        //console.log('average damage ' + averageDamage);
        //document.getElementById("output").innerHTML = "Average Damage: " + averageDamage;
        output.preventDefault();
    }

    render() {
        var i;
        var array = [];
        for (i = 1; i <= 50; i++) {
            array.push(i);
        }
        return (
            <div id='master'>
                <div id='damageCalculator'>
                    <h1>Damage Calculator</h1>
                    <p id="output">Average Damage: </p>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Base Weapon Damage: <input type="number" id="damage" />
                        </label><br />
                        <label>
                            Elemental Bonus: <input type="number" id="elemental" />%
                    </label><br />
                        <label>
                            Attribute Bonus: <input type="number" id="attribute" />%
                    </label><br />
                        <label>
                            Weapon Skill Bonus: <input type="number" id="weapon skill" />%
                    </label><br />
                        <label>
                            Other Bonus: <input type="number" id="other" />%
                    </label><br />
                        <label>
                            Highground Bonus: <input type="number" id="highground" />%
                    </label><br />
                        <label>
                            Crit Multiplier: <input type="number" id="crit" />%
                    </label><br />

                    </form>
                </div>
                <div id='attributes'>
                    <h1>Attributes</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Strength: <input type='number' id='strength' />
                        </label><br />
                        <label>
                            Finesse: <input type='number' id='finesse' />
                        </label><br />
                        <label>
                            Intelligence: <input type='number' id='intelligence' />
                        </label><br />
                        <label>
                            Constitution: <input type='number' id='constitution' />
                        </label><br />
                        <label>
                            Memory: <input type='number' id='memory' />
                        </label><br />
                        <label>
                            Wits: <input type='number' id='wits' />
                        </label><br />
                    </form>
                </div>
                <div id='abilities'>
                    <h1>Combat Abilities</h1>
                    <form onSubmit={this.handleSubmit}>
                        <h2>Weapons</h2>
                        <label>
                            Dual Weilding: <input type='number' id='dualWeilding' />
                        </label><br />
                        <label>
                            Ranged: <input type='number' id='ranged' />
                        </label><br />
                        <label>
                            Single-Handed: <input type='number' id='singleHanded' />
                        </label><br />
                        <label>
                            Two-Handed: <input type='number' id='twoHanded' />
                        </label><br />
                        <h2>Defence</h2>
                        <label>
                            Leadership: <input type='number' id='leadership' />
                        </label><br />
                        <label>
                            Perserverance: <input type='number' id='perserverance' />
                        </label><br />
                        <label>
                            Retribution: <input type='number' id='retribution' />
                        </label><br />
                        <h2>Skills</h2>
                        <label>
                            Aerotheurge: <input type='number' id='aerotheurge' />
                        </label><br />
                        <label>
                            Geomancer: <input type='number' id='geomancer' />
                        </label><br />
                        <label>
                            Huntsman: <input type='number' id='huntsman' />
                        </label><br />
                        <label>
                            Hydrosophist: <input type='number' id='hydtosophist' />
                        </label><br />
                        <label>
                            Necromancer: <input type='number' id='necromancer' />
                        </label><br />
                        <label>
                            Polymorph: <input type='number' id='polymorph' />
                        </label><br />
                        <label>
                            Pyrokinetic: <input type='number' id='pyrokinetic' />
                        </label><br />
                        <label>
                            Scoundrel: <input type='number' id='scoundrel' />
                        </label><br />
                        <label>
                            Summoning: <input type='number' id='summoning' />
                        </label><br />
                        <label>
                            Warfare: <input type='number' id='warfare' />
                        </label><br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }

}
export default CharacterData;