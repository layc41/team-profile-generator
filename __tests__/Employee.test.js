const Employee = require('../lib/Employee');

test('Employee name', () => {
    const employee = new Employee('employee', '1', 'employee@email.com');

    expect(employee.name).toBe('employee');
    expect(employee.id).toBe('1')
    expect(employee.email).toBe('employee@email.com')
});

test('Employee information', () => {
    const employee = new Employee('employee', '1', 'employee@email.com');

    expect(employee.getName()).toEqual(expect.stringContaining('employee'));
    expect(employee.getId()).toEqual(expect.stringContaining('1'))
    expect(employee.getEmail()).toEqual(expect.stringContaining('employee@email.com'))
    expect(employee.getRole()).toEqual(expect.stringMatching('Employee'))
});