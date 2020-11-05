const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates a github username for engineer', () => {
    const engineer = new Engineer('George', 123, '123@123.com', 'GeorgeG');

    expect(engineer.github).toEqual(expect.any(String));
});

test("gets engineer's github username", () => {
    const engineer = new Engineer('George', 123, '123@123.com', 'GeorgeG');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test("gets engineer's role", () => {
    const george = new Engineer('George', 123, '123@123.com', 'GeorgeG');

    expect(george.getRole(george.role)).toBe('engineer');
});