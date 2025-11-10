/* Supabase client configuration */

// For Vite, environment variables are accessed via import.meta.env
// In production (Vercel), these should be set as environment variables
// In Figma Make, import.meta.env might not be available, so we use fallbacks

export const projectId = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_PROJECT_ID) || "hbjzkzuybzkiyqufhjac";
export const publicAnonKey = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_ANON_KEY) || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhianprenV5YnpraXlxdWZoamFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2MzU0NTAsImV4cCI6MjA3NjIxMTQ1MH0.zgLtk5B8cXwehzSPxLZGLcnjQlExLJct_OpUYGtEcaM";