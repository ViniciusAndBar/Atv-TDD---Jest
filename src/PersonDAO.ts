import { Person } from './Person';
import { Email } from './Email';

export class PersonDAO {
  private persons: Person[] = [];

  public save(person: Person): void {
    const errors = this.isValidToInclude(person);
    if (errors.length === 0) {
      this.persons.push(person);
    } else {
      throw new Error(errors.join('\n'));
    }
  }

  public isValidToInclude(person: Person): string[] {
    const errors: string[] = [];
    if (!this.isNameValid(person.name)) {
      errors.push('Name is invalid');
    }
    if (!this.isAgeValid(person.age)) {
      errors.push('Age is invalid');
    }
    if (!this.personHasEmail(person.emails)) {
      errors.push('Person must have at least one email');
    }
    for (const email of person.emails) {
      if (!this.isEmailValid(email.name)) {
        errors.push('Email is invalid, it must be in the format _____@____._____');
      }
    }
    return errors;
  }

  private isNameValid(name: string): boolean {
    const names = name.split(' ');
    const hasDigit = /\d/.test(name);
    return names.length >= 2 && !hasDigit;
  }

  private isAgeValid(age: number): boolean {
    return age >= 1 && age <= 200;
  }

  private personHasEmail(emails: Email[]): boolean {
    return emails.length >= 1;
  }

  private isEmailValid(email: string): boolean {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  }
}
