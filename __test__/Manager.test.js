const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates a manager office number', () => {
    const manager = new Manager('George', 123, '123@123.com', 42);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets manager's office number", () => {
    const manager = new Manager('George', 123, '123@123.com', 42);

    expect(manager.getOfficeNumber()).toEqual(manager.officeNumber)
});

test("gets manager's role", () => {
    const george = new Manager('George', 123, '123@123.com', 42);

    expect(george.getRole(george.role)).toBe('manager');
});