const Intern = require('../lib/Intern');

test('Intern object', () => {
    const intern = new Intern('Intern', '4', 'intern@email.com', 'school');

    expect(intern.name).toBe('Intern');
    expect(intern.id).toBe('4')
    expect(intern.email).toBe('intern@email.com')
    expect(intern.school).toBe('school');
})

test('Intern information', () => {
    const intern = new Intern('Intern', '4', 'intern@email.com', 'school');

    expect(intern.getSchool()).toEqual(expect.stringContaining('school'))
    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'))
})