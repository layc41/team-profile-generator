const Manager = require('../lib/Manager');

test('Manager Object and Update', () => {
    const manager = new Manager('Manager', '20', 'manager@email.com', '1');
    
    expect(manager.officeNumber).toBe('1');
})

test('returns Manager information', () => {
    const manager = new Manager('Manager', '20', 'manager@email.com', '1');
    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining('1'))
    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'))
})