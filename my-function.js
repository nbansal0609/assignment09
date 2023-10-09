exports.handler = async (event) => {
    const keyword = (event.queryStringParameters && event.queryStringParameters.keyword) || 'deafult';
    return {
        statusCode: 200,
        body: `Nikhil Bansal says ${keyword}`
    };
};
