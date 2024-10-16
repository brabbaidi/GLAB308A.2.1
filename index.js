// Part 1: Humble Beginnings
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
      name: "Leo",
      type: "Cat",
      companion: {
        name: "Frank",
        type: "Flea",
        belongings: ["small hat", "sunglasses"]
      }
    },
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    }
  };
  
  // Accessing and looping through Robin's inventory
  console.log(adventurer.inventory[0]); // logs "sword"
  adventurer.inventory.forEach(item => console.log(item));
  
  // Testing the roll method
  adventurer.roll();
  
  // Part 2: Class Fantasy
  class Character {
    static MAX_HEALTH = 100;
  
    constructor(name) {
      this.name = name;
      this.health = Character.MAX_HEALTH;
      this.inventory = [];
    }
  
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
      return result;
    }
  }
  
  // Create Robin using the Character class
  const robin = new Character("Robin");
  robin.inventory = ["sword", "potion", "artifact"];
  robin.companion = new Character("Leo");
  robin.companion.type = "Cat";
  robin.companion.companion = new Character("Frank");
  robin.companion.companion.type = "Flea";
  robin.companion.companion.inventory = ["small hat", "sunglasses"];
  
  // Testing the roll method for Robin's companion
  robin.companion.roll();
  
  // Part 3: Class Features
  class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard"];
  
    constructor(name, role) {
      super(name);
      if (!Adventurer.ROLES.includes(role)) {
        throw new Error("Invalid role");
      }
      this.role = role;
      this.inventory.push("bedroll", "50 gold coins");
    }
  
    scout() {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  
    duel(opponent) {
      while (this.health > 50 && opponent.health > 50) {
        const myRoll = this.roll();
        const opponentRoll = opponent.roll();
        if (myRoll > opponentRoll) {
          opponent.health -= 1;
        } else {
          this.health -= 1;
        }
        console.log(`${this.name} health: ${this.health}, ${opponent.name} health: ${opponent.health}`);
      }
      const winner = this.health > 50 ? this.name : opponent.name;
      console.log(`${winner} wins the duel!`);
    }
  }
  
  // Create a Companion class
  class Companion extends Character {
    constructor(name, type) {
      super(name);
      this.type = type;
    }
  }
  
  // Re-create Robin and companions using the new classes
  const robinAdventurer = new Adventurer("Robin", "Fighter");
  const leoCompanion = new Companion("Leo", "Cat");
  const frankCompanion = new Companion("Frank", "Flea");
  leoCompanion.companion = frankCompanion;
  robinAdventurer.companion = leoCompanion;
  
  // Part 4: Class Uniforms
  // Testing static properties
  console.log(Character.MAX_HEALTH); // 100
  console.log(Adventurer.ROLES); // ["Fighter", "Healer", "Wizard"]
  
  // Part 5: Gather Your Party
  class AdventurerFactory {
    constructor(role) {
      this.role = role;
      this.adventurers = [];
    }
  
    generate(name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
    }
  
    findByName(name) {
      return this.adventurers.find(adventurer => adventurer.name === name);
    }
  }
  
  // Creating a factory to generate Healers
  const healers = new AdventurerFactory("Healer");
  healers.generate("Robin");
  
  // Finding Robin in the healer factory
  console.log(healers.findByName("Robin"));
  
  // Part 6: Developing Skills
  // Create duel method in Adventurer class (already included above)
  // Let's have Robin duel another adventurer
  const anotherAdventurer = new Adventurer("Marian", "Healer");
  robinAdventurer.duel(anotherAdventurer);
  
  // Part 7: Adventure Forth
  // You can continue creating more adventurers, companions, and interactions
  const wizard = new Adventurer("Gandalf", "Wizard");
  const fighter = new Adventurer("Aragorn", "Fighter");
  wizard.duel(fighter);
  