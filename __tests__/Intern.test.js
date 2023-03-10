//Import Intern class
const Intern = require('../lib/Intern');

//Test object
test('Intern object can be rendered', () => {
    const employeeObject = new Intern();
    expect(typeof employeeObject).toBe('object');
});

//Test for school property
test('School property can be added to Intern object', () => {
    const testSchool = 'University of California, Los Angeles';
    const employeeInstance = new Intern(
        'Castiel Novak',
        6789,
        'clarencewithwings32@hotmail.com',
        './../assets/sample_imgs/cass.jpg',
        testSchool
    );
    expect(employeeInstance.school).toBe('University of California, Los Angeles');
});

//Test for Intern value in role property
test('Intern value added for property of role', () => {
    const returnValue = 'Intern';
    const employeeInstance = new Intern(
        'Castiel Novak',
        6789,
        'clarencewithwings32@hotmail.com',
        './../assets/sample_imgs/cass.jpg',
        'University of California, Los Angeles'
    );
    expect(employeeInstance.getRole()).toBe(returnValue);
});

//Test getSchool() method
test('School retrieved through getSchool() method', () => {
    const testSchool = 'University of California, Los Angeles';
    const employeeInstance = new Intern(
        'Castiel Novak',
        6789,
        'clarencewithwings32@hotmail.com',
        './../assets/sample_imgs/cass.jpg',
        testSchool
    );
    expect(employeeInstance.getSchool()).toBe(testSchool);
});