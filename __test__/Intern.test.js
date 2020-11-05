const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('creates a school for intern', () => {
    const intern = new Intern('George', 123, '123@123.com', 'Wisconsin');

    expect(intern.school).toEqual(expect.any(String));
});

test("gets intern's school", () => {
    const intern = new Intern('George', 123, '123@123.com', 'Wisconsin');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test("gets engineer's role", () => {
    const george = new Intern('George', 123, '123@123.com', 'Wisconsin');

    expect(george.getRole(george.role)).toBe('intern');
});