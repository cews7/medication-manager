import { APIGatewayProxyHandler } from 'aws-lambda';
import { configure } from '@codegenie/serverless-express';
import { app } from './index.js';

export const lambdaHandler: APIGatewayProxyHandler = configure({ app });
