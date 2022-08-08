const Manager = require('../lib/Manager')

const manager1 = new Manager ('name', 3, 'man@mail', 'Manager', 10)

// test for name
test ('has a name', () => {
    expect(manager1.name).toEqual(expect.any(String))
    expect(manager1.name.length).toBeGreaterThan(2)
})
// test for email
test ('has an email', () =>{
    expect(manager1.email).toEqual(expect.stringContaining('@'))
})
// test for id
test ('has an id number', () => {
    expect(manager1.id).toEqual(expect.any(Number))
})
// test for role
test('has a role of Manager', () => {
    expect(manager1.role).toBe('Manager')
})
// test for office number
test ('has an office number', () => {
    expect(manager1.office).toEqual(expect.any(Number));
})



// test for getRole -- Overridden to retun 'Manager'