export default {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-uploads-user"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://es9wvbgwm1.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_5oTzDttHL",
    APP_CLIENT_ID: "77p66hojsvurkfhp3jt5q9a7nr",
    IDENTITY_POOL_ID: "us-east-1:2cc2c6ea-6b75-4c63-bae3-d5c8cd6c03c8"
  }
};