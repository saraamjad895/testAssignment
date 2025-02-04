const { loginPage } = require('./loginPage.spec');
const { securePage } = require('./securePage.spec');

class POManager {
    constructor(page) {
        this.page = page;
        this.loginPage = new loginPage(this.page);
        this.securePage = new securePage(this.page);
    }

    getLoginPage() {
        return this.loginPage;
    }

    getSecurePage() {
        return this.securePage;
    }
}
module.exports = {POManager};