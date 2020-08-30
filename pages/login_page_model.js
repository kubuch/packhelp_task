import { Selector, t, ClientFunction } from 'testcafe';

export class LoginPage {
    constructor() {
        this.emailInput = Selector('#user');
        this.passwordInput = Selector('#password');
        this.loginButton = Selector('#login');
    }

    async inputEmail(email) {
        await t
            .typeText(this.emailInput, email);
    }

    async inputPassword(password) {
        await t
            .typeText(this.passwordInput, password);
    }

    async clickLoginButton() {
        await t
            .click(this.loginButton);
    }

    async assertMissingEmail() {
        await t
            .expect(Selector('#error').innerText).eql('Brakujący e-mail');
    }

    async assertWrongEmail() {
        await t
            .expect(Selector('#error').innerText).eql('To nie jest konto dla tego e-maila');
    }
};

