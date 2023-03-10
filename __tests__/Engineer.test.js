//Import Engineer class
const Engineer = require('../lib/Engineer');

//Test object
test('Engineer object can be rendered', () => {
    const employeeObject = new Engineer();
    expect(typeof employeeObject).toBe('object');
});

//Test for gitHub property
test('GitHub username can be added to the Engineer object', () => {
    const github = 'DeusExChuck';
    const employeeInstance = new Engineer(
        'Chuck Shurley',
        42,
        'dontcallmeshurley@hotmail.com',
        './../assets/sample_imgs/chuck.jpg',
        github
    );
    expect(employeeInstance.gitHub).toBe('DeusExChuck');
});

//Test for Engineer value in role property
test('Engineer value added for property of role', () => {
    const returnValue = 'Engineer';
    const employeeInstance = new Engineer(
        'Chuck Shurley',
        42,
        'dontcallmeshurley@hotmail.com',
        './../assets/sample_imgs/chuck.jpg',
        'DeusExChuck'
    );
    expect(employeeInstance.getRole()).toBe(returnValue);
});

//Test getGitHub() method
test('GitHub username retrieved through getGitHub() method', () => {
    const testGithub = 'DeusExChuck';
    const employeeInstance = new Engineer(
        'Chuck Shurley',
        42,
        'dontcallmeshurley@hotmail.com',
        './../assets/sample_imgs/chuck.jpg',
        testGithub
    );
    expect(employeeInstance.getGitHub()).toBe(testGithub);
});