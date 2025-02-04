class loginPage {


    constructor(page) 
    {
        this.page = page;
        this.userName = page.locator("input#username");
        this.password = page.locator("input#password");
        this.loginBtn = page.locator("button.radius");
    }

    async openApp(url)
    {
        await this.page.goto(url)
        await this.page.waitForLoadState('networkidle')
    }


    async loginToApplication(uname, pwd)
    {
        await this.userName.fill(uname);
        await this.password.fill(pwd);
        await this.loginBtn.click();
        await this.page.waitForLoadState('networkidle')
    }



}
module.exports={loginPage}