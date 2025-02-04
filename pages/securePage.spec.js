class securePage
{

    constructor(page)
    {
        this.page = page;
    }

    async getCurrentUrl()
    {
        return await this.page.url();
    }

}
module.exports={securePage}