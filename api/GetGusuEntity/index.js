module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));

    var responseMessage;
    if(name){
        if(name == "dominique"){
            responseMessage = {
                data: [
                    {
                        id: 1,
                        name: "dominique"
                    }
                ]
            }
        }else if(name == "kai"){
            responseMessage = {
                data: [
                    {   
                    id: 2,
                    name: "kai"
                    }
                ]
            }
        }
    }else{
        responseMessage = {
            data: [
                {
                    id: 1,
                    name: "dominique"
                },
                {   
                id: 2,
                name: "kai"
                }
            ]
        }
    }
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {
            text: responseMessage
        }
    };
}