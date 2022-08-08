//  test for github -- github username
const Engineer = require('../lib/Engineer');

const engineer1= new Engineer ('chris', 2, 'c@c', 'Engineer', 'ericksonvik')

// test for name
test ('has a name', () => {
    expect(engineer1.name).toEqual(expect.any(String))
    expect(engineer1.name.length).toBeGreaterThan(2)
})
// test for email
test ('has an email', () =>{
    expect(engineer1.email).toEqual(expect.stringContaining('@'))
})
// test for id
test ('has an id number', () => {
    expect(engineer1.id).toEqual(expect.any(Number))
})
// test for role
test('has a role of engineer', () => {
    expect(engineer1.role).toBe('Engineer')
})
// test for github
test ('has a github', () => {
    expect(engineer1.github).toEqual(expect.any(String));
});



// test for getRole -- overridden to return Engineer