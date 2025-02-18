import { APIGatewayProxyHandler } from 'aws-lambda';
import awsServerlessExpress from 'aws-serverless-express';
import { app } from './index';

const server = awsServerlessExpress.createServer(app);

export const lambdaHandler: APIGatewayProxyHandler = async (event, context) => {
  return await awsServerlessExpress.proxy(server, event, context) as any;
};
