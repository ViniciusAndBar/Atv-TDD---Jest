import { PersonDAO } from '../src/PersonDAO';
import { Person } from '../src/Person';
import { Email } from '../src/Email';

describe('PersonDAO', () => {
  let personDAO: PersonDAO;

  beforeEach(() => {
    personDAO = new PersonDAO();
  });

  test('save should throw error when person name is invalid', () => {
    const person = new Person(1, 'John123', 30);
    expect(() => personDAO.save(person)).toThrowError('Name is invalid');
  });

  test('save should throw error when person age is invalid', () => {
    const person = new Person(1, 'John Doe', 0);
    expect(() => personDAO.save(person)).toThrowError('Age is invalid');
  });

  test('save should throw error when person has no email', () => {
    const person = new Person(1, 'John Doe', 30);
    expect(() => personDAO.save(person)).toThrowError('Person must have at least one email');
  });

  test('save should throw error when person email is invalid', () => {
    const person = new Person(1, 'John Doe', 30);
    person.emails = [new Email(1, 'invalid-email')];
    expect(() => personDAO.save(person)).toThrowError('Email is invalid, it must be in the format _____@____._____');
  });

  test('save should add person to database when all data is valid', () => {
    const person = new Person(1, 'John Doe', 30);
    person.emails = [new Email(1, 'john.doe@example.com')];
    expect(() => personDAO.save(person)).not.toThrow();
    expect(personDAO['persons']).toContain(person);
  });
});
