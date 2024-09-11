import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/api/users/currentuser', (req: any, res: any) => {
  res.send('Hello from the auth service!');
});

// Start the server
app.listen(port, () => {
  console.log(`Auth service listening on port ${port}!!!`);
});