class Key {
    private signature: number = Math.random();
  
    getSignature(): number {
      return this.signature;
    }
  }

class Person {
    constructor(private key: Key) {}
  
    getKey(): Key {
      return this.key;
    }
  }

abstract class House {
    protected door: boolean = false;
    private tenants: Person[] = [];
    constructor(protected key: Key) {}
  
    comeIn(person: Person): void {
      if (this.door) {
        this.tenants.push(person);
      }
    }
  
    abstract openDoor(key: Key): void;
  }
  
  class MyHouse extends House {
    openDoor(key: Key): void {
      if (key.getSignature() === this.key.getSignature()) {
        this.door = true;
      } else {
        console.log("Closed! Find a normal key");
      }
    }
  }



const key = new Key();
const ke1 = new Key();

const house = new MyHouse(key);
const person = new Person(ke1);

house.openDoor(person.getKey());

house.comeIn(person);


export {};