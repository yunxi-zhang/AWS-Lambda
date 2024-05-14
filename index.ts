import { APIGatewayAuthorizerCallback, APIGatewayProxyCallbackV2, APIGatewayProxyStructuredResultV2 } from "aws-lambda";

interface Input {
    url: string;
    name: string;
}

interface Output {
    title: string;
    s3_url: string;
}

export const handler = async (event: APIGatewayProxyCallbackV2): Promise<APIGatewayProxyStructuredResultV2> => {
    
    const body: Output = {
        title: 'hello',
        s3_url: 'url'
    }
    return {
        statusCode: 200,
        body: JSON.stringify(body)
    }
};