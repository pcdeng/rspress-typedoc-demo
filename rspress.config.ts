import * as path from "path";
import { defineConfig } from "rspress/config";
import { pluginTypeDoc } from "@rspress/plugin-typedoc";

export default defineConfig({
  plugins: [
    pluginTypeDoc({
      entryPoints: [path.join(__dirname, "src", "foo.ts")],
    }),
  ],
  root: path.join(__dirname, "docs"),
  title: "Rspress",
  description: "Rspack-based Static Site Generator",
  icon: "/rspress-icon.png",
  logo: {
    light: "/rspress-light-logo.png",
    dark: "/rspress-dark-logo.png",
  },
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/web-infra-dev/rspress",
      },
    ],
  },
});
