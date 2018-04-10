import React, { Component } from 'react';

class FirstChar extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getValues = this.getValues.bind(this);
        //var averageDamage = 0;
    }

    getValues() {
        var baseDamage = document.getElementById("damage").value;
        var elementalBonus = document.getElementById("elemental").value;
        var attributeBonus = document.getElementById("attribute").value;
        var weaponSkillBonus = document.getElementById("weapon skill").value;
        var otherBonus = document.getElementById("other").value;
        var highgroundBonus = document.getElementById("highground").value;
        var critMultiplier = document.getElementById("crit").value;
            
        var averageDamage = Math.floor(Number(baseDamage)*(1.0 + (Number(elementalBonus)/100))*(1.0 + (Number(attributeBonus)/100) + (Number(weaponSkillBonus)/100) + (Number(otherBonus)/100))*(1.0 + (Number(highgroundBonus)/100) + (Number(critMultiplier)/100)));
        return averageDamage;
    }

    handleSubmit(textbox) {
        //alert("Average Damage: " + this.getValues());
        document.getElementById("output").innerHTML = "Average Damage: " + this.getValues();
        textbox.preventDefault();
    }

    render(averageDamage) {
        var i;
        var array = [];
        for (i = 1; i <= 50; i++) {
            array.push(i);
        }
       // var averageDamage = this.getValues();
        return (
            <div>
                <h1>Damage Calculator</h1>
                {console.log(this.getValues)}
                <p id="output">Average Damage: </p>
                <form onSubmit={this.handleSubmit}>

                    <label>
                        Base Weapon Damage: <input type="text" id="damage" />
                    </label><br />
                    <label>
                        Elemental Bonus: <input type="text" id="elemental" />%
                    </label><br />
                    <label>
                        Attribute Bonus: <input type="text" id="attribute" />%
                    </label><br />
                    <label>
                        Weapon Skill Bonus: <input type="text" id="weapon skill" />%
                    </label><br />
                    <label>
                        Other Bonus: <input type="text" id="other" />%
                    </label><br />
                    <label>
                        Highground Bonus: <input type="text" id="highground" />%
                    </label><br />
                    <label>
                        Crit Multiplier: <input type="text" id="crit" />%
                    </label><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
export default FirstChar;