'use strict';
import LogRocket from "logrocket";
const { IncomingWebhook } = require('@slack/webhook');
require('dotenv/config') 

const url = process.env.SLACK_WEBHOOK_URL;
const webhook = new IncomingWebhook(url);

const sendMessage2Slack = async (message) => {
  await webhook.send({
    text: `Error provided is: ${message}`,
  });
}

module.exports.logRock2Slack = async event => {
  let logRocketError = `LogRocket Error: ${event.queryStringParameters.logrkerr}`;
  console.log(logRocketError);

    // Posting the message to slack.
  sendMessage2Slack(logRocketError);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello Edmundo from my serverless application.',
        input: event,
      },
      null,
      2
    ),
  };

};
