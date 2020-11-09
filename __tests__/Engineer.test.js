const Engineer = require('../lib/Engineer');

test('Engineer object and update', () => {
    const engineer = new Engineer('Engineer', '4', 'engineer@email.com', 'username');

    expect(engineer.name).toBe('Engineer');
    expect(engineer.id).toBe('4')
    expect(engineer.email).toBe('engineer@email.com')
    expect(engineer.github).toBe('username')

})


test('Engineer information', () => {
    const engineer = new Engineer('Engineer', '4', 'engineer@email.com', 'username');

    expect(engineer.getGithub()).toEqual(expect.stringMatching('username'))
    expect(engineer.getRole()).toEqual(expect.stringMatching('Engineer'))

})