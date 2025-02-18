import { APIGatewayProxyHandler } from 'aws-lambda';
import awsServerlessExpress from 'aws-serverless-express';
import { app } from './index.js';

// Initialize server outside the handler to reuse across invocations
const server = awsServerlessExpress.createServer(app);

export const lambdaHandler: APIGatewayProxyHandler = async (event, context) => {
  // Set context.callbackWaitsForEmptyEventLoop = false to prevent hanging
  context.callbackWaitsForEmptyEventLoop = false;
  return await awsServerlessExpress.proxy(server, event, context) as any;
};
