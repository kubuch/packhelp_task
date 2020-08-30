import { LoginPage, BoardsPage, LoggedOutPage } from '../pages'

let loginPage = new LoginPage();
let boards = new BoardsPage();
let loggedOutPage = new LoggedOutPage();

fixture`Login`
    .page`https://trello.com/login`;

test('Login with success', async t => {
    await loginPage.inputEmail('testmail@cloud-mail.top');
    await loginPage.inputPassword('Test123!');
    await loginPage.clickLoginButton();
    await boards.assertIsLogged();
});

test('Check logging without email address', async t => {
    await loginPage.passwordInput('Test123!');
    await loginPage.clickLoginButton();
    await loginPage.assertMissingEmail();

});

test('Correcting email address', async t => {
    await loginPage.inputEmail('nonexistingemailaddress@funnydomain.com');
    await loginPage.inputPassword('Test123!');
    await loginPage.clickLoginButton();
    await loginPage.assertWrongEmail();
    await loginPage.inputEmail('testmail@cloud-mail.top');
    await loginPage.clickLoginButton();
    await boards.assertIsLogged();

});

test('Logout with success', async t => {
    await loginPage.inputEmail('testmail@cloud-mail.top');
    await loginPage.inputPassword('Test123!');
    await loginPage.clickLoginButton();
    await boards.assertIsLogged();
    await boards.cliclSignedUserButton();
    await boards.clickLogoutUserButton();
    await loggedOutPage.assertUserLoggedout();
});



