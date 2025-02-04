const { log } = require("console");

class APIUser
{

    constructor(context){
        this.context = context;
    }


    async getPosts()
    {
        const response = await this.context.get("https://reqres.in/api/users?page=https://jsonplaceholder.typicode.com/posts",
                )
            let JsonResponse = await response.json();
            console.log(JsonResponse)
            return JsonResponse;
    }



}


module.exports = {APIUser};