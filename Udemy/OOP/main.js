class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating!`;
    }
}


class Cat extends Pet {
    constructor(name, age, gender) {
        super(name, age);
        this.gender = gender;
    }
    meow() {
        return 'MEOWWWW!!';
    }
}


class Dog extends Pet {
    bark() {
        return `WOOOFF!!`;
    }
}

const kong = new Cat('kong', 10, 'man');
console.log(kong);