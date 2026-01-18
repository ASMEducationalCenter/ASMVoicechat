import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: [
      "asmvoicechat.onrender.com",
      "asmvoicechat1-17-2026.onrender.com",
      "www.asmed.com",
      "asmed.com"
    ]
  }
});
