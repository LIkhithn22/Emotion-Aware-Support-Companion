/**
 * Axios HTTP client — configured for the EASC backend API.
 *
 * Base URL reads from the VITE_API_BASE_URL env variable (set via .env).
 * JWT token is attached as a Bearer header once UC01 auth is implemented.
 *
 * TODO: Add request/response interceptors for JWT refresh in UC01 phase.
 */
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:3001/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10_000,
});

// ── Auth interceptor (stub) ───────────────────────────────────────────────────
// TODO: Attach JWT from localStorage / context once UC01 is implemented.
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('easc_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
