import { defineConfig } from "vite"
import path from "path"

// Plugin
import react from "@vitejs/plugin-react-swc"
import tailwindcss from "@tailwindcss/vite"
import generouted from "@generouted/react-router/plugin"

// Self plugin
import { changeHtml } from "./plugins/changeHtml"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    generouted(),
    changeHtml()
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
})
