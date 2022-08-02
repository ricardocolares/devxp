import express from 'express';
import payload from 'payload';

require('dotenv').config();
const app = express();

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

// Initialize Payload
payload.init({
  secret: 'test',
  mongoURL: 'mongodb+srv://ricardoccolares:isolina68@devmates.c9ufhdx.mongodb.net/?retryWrites=true&w=majority',
  express: app,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
  },
})

// Add your own express routes here

app.listen(process.env.PORT || 3000);
