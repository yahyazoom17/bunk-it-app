import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // or use '0.0.0.0'
    port: 5173, // you can change the port if needed
  },
  plugins: [react(), tailwindcss()],
});
