/**
 * Environment variables.
 */
const env = {
  isProduction: import.meta.env.NODE_ENV === 'production',
  publicHost: import.meta.env.VITE_PUBLIC_HOST,
  sanity: {
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_DATASET,
    apiVersion: '2022-03-07',
  },
  email: {
    host: process.env.SMTP_HOST ?? '',
    port: Number.isNaN(process.env.SMTP_PORT) ? Number(process.env.SMTP_PORT) : 587,
    email: process.env.SMTP_EMAIL ?? '',
    password: process.env.SMTP_PASSWORD ?? '',
    secure: Boolean(process.env.SMTP_SECURE),
  },
} as const;

export { env };
