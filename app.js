"use strict";
const _ = require('lodash');
class Person {
    constructor(firstName, lastName, bornOn) {
        this.firstName = firstName;
        if (lastName)
            this.lastName = lastName;
        if (bornOn)
            this.bornOn = bornOn;
    }
    age() {
        return (new Date().getFullYear()) - this.bornOn;
    }
    ;
}
class ListOf {
    add(element) {
        this.elements = this.elements || [];
        this.elements.push(element);
    }
}
class PhoneBook extends ListOf {
    oldest() {
        return _.minBy(this.elements, 'bornOn');
    }
    youngest() {
        return _.maxBy(this.elements, 'bornOn');
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
//# sourceMappingURL=app.js.map