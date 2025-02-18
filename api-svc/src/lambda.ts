import { APIGatewayProxyHandler } from 'aws-lambda';
import serverless from 'serverless-http';
import { app } from './index';

export const handler: APIGatewayProxyHandler = serverless(app); 