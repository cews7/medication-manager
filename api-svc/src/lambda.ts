import { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import serverless from 'serverless-http';
import { app } from './index';

const handler = serverless(app);

export const lambdaHandler: APIGatewayProxyHandler = async (event, context) => {
  const result = await handler(event, context);
  return result as APIGatewayProxyResult;
}; 