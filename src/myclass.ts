import { MyType } from './mytype';

export class MyClass {
    private myInfo: MyType = {
        name: '',
        age: 0
    };

    constructor(name : string, age: number) {
        this.myInfo.name = name;
        this.myInfo.age = age;
    }

    myName(): string {
        return this.myInfo.name;
    }

    myAge(): number {
        return this.myInfo.age;
    }

    isMaggiorenne(): boolean {
        return this.myInfo.age >= 18;
    }
}
