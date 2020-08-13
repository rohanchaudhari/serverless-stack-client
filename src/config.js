export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51HEH6BDkSVeBHyIgL0hLd3I6wNbdbCKk6H2r6dl1TOZmo3awlXtCDHoCKYSQxub2A0hDkZRd0DcRB9xF2mF5ocbf00WrJCrIUN",
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