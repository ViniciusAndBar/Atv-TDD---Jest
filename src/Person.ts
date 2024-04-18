import { Email } from "./Email";

export class Person {
    constructor(public id: number, public name: string, public age: number) {
      this.emails = [];
    }
  
    public emails: Email[];
  }
  