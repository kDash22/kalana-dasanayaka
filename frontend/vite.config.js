import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],

  base: command === "serve" ? "/" : "/kalana-dasanayaka/",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
}));