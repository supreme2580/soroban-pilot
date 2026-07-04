import express from 'express';

const app = express();
const port = process.env.PORT ?? 3001;

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', network: 'testnet' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
