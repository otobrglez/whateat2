import _ = require('lodash')

interface Born {
    bornOn:number
    age():number
}

class Person implements Born {
    firstName:string;
    lastName:string;
    bornOn:number;

    constructor(firstName:string,
                lastName?:string,
                bornOn?:number) {
        this.firstName = firstName;
        if (lastName) this.lastName = lastName;
        if (bornOn) this.bornOn = bornOn
    }

    age():number {
        return (new Date().getFullYear()) - this.bornOn;
    }
}

class ListOf<T> {
    public elements:Array<T>;

    add(element:T):void {
        this.elements = this.elements || [];
        this.elements.push(element)
    }
}

class PhoneBook extends ListOf<Person> {
    oldest():Person {
        return _.minBy(this.elements, 'bornOn')
    }

    youngest():Person {
        return _.maxBy(this.elements, 'bornOn')
    }
}

var phoneBook = new PhoneBook();
phoneBook.add(new Person("Oto", "Brglez", 1987));
phoneBook.add(new Person("Martina", null, 1988));
phoneBook.add(new Person("Tinkara", null, 2016));

for (let element of phoneBook.elements) {
    console.log(element);
}

console.log("Oldest person is ", phoneBook.oldest(), "with age", phoneBook.oldest().age());
console.log("Youngest person is", phoneBook.youngest(), "with age", phoneBook.youngest().age());

