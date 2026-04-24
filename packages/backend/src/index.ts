import 'dotenv/config';
import { app } from './app';

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3001;

app.listen(PORT, () => {
  console.log(`[EASC Backend] Server running on http://localhost:${PORT}`);
  console.log(`[EASC Backend] Environment: ${process.env.NODE_ENV ?? 'development'}`);
});
