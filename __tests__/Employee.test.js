// Parent Class for other classes (Manager, Engineer, Intern)

// test for name

test ('creates an Employee object', () => {
    const employee = new Employee ('Chris')

    expect(employee.name).toBe('Chris');
    expect(employee.id).toBe(expect.any(Number));
    expect(employee.email).toBe(expect.any(''));
})



// test for id


// test for email 


// test getName()


// test for getID()


// test for getEmail()


// test for getRole() --- Returns 'Employee'

