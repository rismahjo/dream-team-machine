//Import Manager class
const Manager = require('../lib/Manager');

//Test object
test('Manager object can be rendered', () => {
    const employeeObject = new Manager();
    expect(typeof employeeObject).toBe('object');
});

//Test for officeNumber property
test('Office number can be added to Manager object', () => {
    const testOfficeNumber = 32;
    const employeeInstance = new Manager(
        'Dean Winchester',
        5389,
        'impala67@hotmail.com',
        './../assets/sample_imgs/deanw.jpg',
        testOfficeNumber
    );
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

//Test for Manager value in role property
test('Manager value added for property of role', () => {
    const returnValue = 'Manager';
    const employeeInstance = new Manager(
        'Dean Winchester',
        5389,
        'impala67@hotmail.com',
        './../assets/sample_imgs/deanw.jpg',
        32
    );
    expect(employeeInstance.getRole()).toBe(returnValue);
});

//Test getOfficeNumber() method
test('Office number retrieved through getOfficeNumber() method', () => {
    const testOfficeNumber = 32;
    const employeeInstance = new Manager(
        'Dean Winchester',
        5389,
        'impala67@hotmail.com',
        './../assets/sample_imgs/deanw.jpg',
        testOfficeNumber
    );
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});