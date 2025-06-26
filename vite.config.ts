import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { installGlobals } from "@remix-run/node";
import { netlifyPlugin } from "@netlify/remix-adapter/plugin";

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}
installGlobals();
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
    netlifyPlugin(),
    tsconfigPaths(),
  ],
  css: {
    devSourcemap: true,
  },
});
