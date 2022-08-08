const Intern = require('../lib/Intern')
// test for school

const intern1 = new Intern ('mel', 5, 'mel@mel', 'Intern', 'TIU')

// test for name
test ('has a name', () => {
    expect(intern1.name).toEqual(expect.any(String))
    expect(intern1.name.length).toBeGreaterThan(2)
})
// test for email
test ('has an email', () =>{
    expect(intern1.email).toEqual(expect.stringContaining('@'))
})
// test for id
test ('has an id number', () => {
    expect(intern1.id).toEqual(expect.any(Number))
})
// test for role
test('has a role of Intern', () => {
    expect(intern1.role).toBe('Intern')
})

test ('has selected a school', () => {
    expect(intern1.school).toEqual(expect.any(String));
})



// test for getRole -- overridden to return 'Intern'



// Format validation --- input is in proper expected format