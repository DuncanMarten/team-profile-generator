const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('George', 123, '123@123.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("gets employee's name", () => {
    const employee = new Employee('George', 123, '123@123.com');

    expect(employee.getName()).toBe(employee.name);
});

test("gets employee's id", () => {
    const employee = new Employee('George', 123, '123@123.com');

    expect(employee.getId()).toBe(employee.id);
});

test("gets employee's email", () => {
    const employee = new Employee('George', 123, '123@123.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
    expect(employee.getEmail()).toEqual(expect.stringContaining('@'));
    expect(employee.getEmail()).toEqual(expect.stringContaining('.com'));
});

test("gets employee's role", () => {
    const george = new Employee('George', 123, '123@123.com');

    expect(george.getRole(george.role)).toBe('employee');
});