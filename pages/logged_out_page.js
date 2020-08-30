import { Selector, t, ClientFunction } from 'testcafe';

export class LoggedOutPage {

    async assertUserLoggedout() {
        const getLocation = ClientFunction(() => document.location.href);
        await t
            .expect(getLocation()).contains('https://trello.com/logged-out');
    }

}

