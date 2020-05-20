function Fighter(obj) {
    const firstHp = obj.hp;
    let wins = 0;
    let loss = 0;

    function getName() {
        return obj.name;
    }

    function getDamage() {
        return obj.damage;
    }

    function getStrength() {
        return obj.strength;
    }

    function getAgility() {
        return obj.agility;
    }

    function getHealth() {
        return obj.hp;
    }

    function random(min, max) {
        return parseInt(Math.random() * (max - min) + min);
    }

    function dealDamage(damagePoint) {
        obj.hp = obj.hp - damagePoint;
        if (obj.hp < 0) {
            obj.hp = 0;
        }
        return obj.hp;
    }

    function attack(fighter2) {
        let power = fighter2.getStrength() + fighter2.getAgility();
        let change = random(0, 100);
        if (change > power) {
            fighter2.dealDamage(obj.damage);
            console.log(`${obj.name} makes ${obj.damage} damage to ${fighter2.getName()}`);
            return fighter2.currentHp;
        } else {
            console.log(`${obj.name} attack missed`);
        }
    }

    function logCombatHistory() {
        return `name: ${obj.name}, Wins: ${wins}, Losses: ${loss} `
    }

    function heal(healthPoints) {
        obj.hp += healthPoints;
        if (obj.hp > firstHp) {
            obj.hp = firstHp;
        }
        return obj.hp;
    }

    function addLoss() {
        return ++loss;
    }

    function addWins() {
        return ++wins;
    }

    return {
        getName,
        getDamage,
        getStrength,
        getAgility,
        getHealth,
        logCombatHistory,
        heal,
        dealDamage,
        addLoss,
        addWins,
        attack

    };
}

function battle(fighter, fighter2) {
    if (fighter.getHealth() === 0) {
        console.log(`${fighter.getName()}  is dead and cant fight!`);
    } else if (fighter2.getHealth() === 0) {
        console.log(`${fighter2.getName()}  is dead and cant fight!`);
    } else {
        while (fighter.getHealth() > 0 && fighter2.getHealth() > 0) {
            fighter.attack(fighter2);
            if (fighter2.getHealth() > 0) {
                fighter2.attack(fighter);
            }
        }
        if (fighter.getHealth() === 0) {
            fighter.addLoss();
            fighter2.addWins();
            console.log(`${fighter2.getName()} has won!`);
        } else {
            fighter2.addLoss();
            fighter.addWins();
            console.log(`${fighter.getName()} has won!`);
        }

    }
}
