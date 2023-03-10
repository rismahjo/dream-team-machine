//Import Employee class
const Employee = require('../lib/Employee');

//Test object
test('Employee object can be rendered', () => {
    const employeeObject = new Employee();
    expect(typeof employeeObject).toBe('object');
});

//Test name added to object
test('Name can be added as a property to Employee object', () => {
    const name = 'Sam Winchester';
    const employeeObject = new Employee(name);
    expect(employeeObject.name).toBe('Sam Winchester');
});

//Test id added to object
test('ID can be added as a property to Employee object', () => {
    const id = 3895;
    const employeeObject = new Employee('Sam Winchester', id);
    expect(employeeObject.id).toBe(3895);
});

//Test email added to object
test('Email can be added as a property to Employee object', () => {
    const email = 'swinchester38@gmail.com';
    const employeeObject = new Employee('Sam Winchester', 3895, email);
    expect(employeeObject.email).toBe('swinchester38@gmail.com');
});

//Test image added to object
test('Image can be added as a property to Employee object', () => {
    const imgSrc = './../assets/sample_imgs/samw.jpg';
    const employeeObject = new Employee('Sam Winchester', 3895, 'swinchester38@gmail.com', imgSrc);
    expect(employeeObject.imgSrc).toBe('./../assets/sample_imgs/samw.jpg');
});

//Test for correct role
test('Employee value added for property of role', () => {
    const returnValue = 'Employee';
    const employeeInstance = new Employee('Sam Winchester', 3895, 'swinchester38@gmail.com');
    expect(employeeInstance.getRole()).toBe(returnValue);
});

//Testing methods

//getName() method
test('name retrieved through getName() method', () => {
    const testName = 'Sam Winchester';
    const employeeObject = new Employee(testName);
    expect(employeeObject.getName()).toBe(testName);
});

//getId() method
test('id retrieved through getId() method', () => {
    const testID = 3895;
    const employeeInstance = new Employee('Sam Winchester', testID);
    expect(employeeInstance.getId()).toBe(testID);
});

//getEmail() method
test('email is retrieved through getEmail() method', () => {
    const testEmail = 'swinchester38@gmail.com';
    const employeeInstance = new Employee('Sam Winchester', 3895, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
});

//getImgSrc() method
test('Image is retrieved through getImgSrc() method', () => {
    const testImgSrc = './../assets/sample_imgs/samw.jpg';
    const employeeObject = new Employee('Sam Winchester', 3895, 'swinchester38@gmail.com', testImgSrc);
    expect(employeeObject.imgSrc).toBe('./../assets/sample_imgs/samw.jpg');
});