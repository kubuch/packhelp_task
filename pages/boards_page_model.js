import { Selector, t, ClientFunction } from 'testcafe';

export class BoardsPage {
    constructor() {
        this.userButton = Selector('._1FekJJAz6Hu32v');
        this.logoutButton = Selector('[data-test-id="header-member-menu-logout"]');
    }

    async cliclSignedUserButton() {
        await t
            .click(this.userButton)
    }

    async clickLogoutUserButton() {
        await t.click(this.logoutButton);
    }

    async assertIsLogged() {
        const getLocation = ClientFunction(() => document.location.href);
        await t
            .expect(getLocation()).contains('https://trello.com/testtest81545645/boards');
    }

}

