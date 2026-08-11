import { defineConfig } from "@playwright/test";

const baseURL =
  process.env.PLAYWRIGHT_BASE_URL || "http://127.0.0.1:3000";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  reporter: "line",
  use: {
    baseURL,
    channel: "chrome",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  webServer: {
    command: "npm start -- --hostname 127.0.0.1 --port 3000",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: true,
    timeout: 30_000,
  },
});
