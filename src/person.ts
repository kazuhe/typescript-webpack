export class Person {
  constructor(public name: string, public age: number) {
  }

  public greeting(this: Person) {
    document.write(`私の名前は${this.name}です。 年齢は${this.age}歳です。`);
  }

}