// Parent Class for other classes (Manager, Engineer, Intern)

// test for name, id, email
const Employee = require('../lib/Employee')

const employeeTest = new Employee ('Chris', 3, 'vik@gmail.com', 'Employee');

// test for name
test ('has a name', () => {
    expect(employeeTest.name).toEqual(expect.any(String))
    expect(employeeTest.name.length).toBeGreaterThan(2)
})
// test for email
test ('has an email', () =>{
    expect(employeeTest.email).toEqual(expect.stringContaining('@'))
})
// test for id
test ('has an id number', () => {
    expect(employeeTest.id).toEqual(expect.any(Number))
})
// test for role
test('has a role of employee', () => {
    expect(employeeTest.role).toBe('Employee')
})






// test getName()


// test for getID()


// test for getEmail()


// test for getRole() --- Returns 'Employee'

