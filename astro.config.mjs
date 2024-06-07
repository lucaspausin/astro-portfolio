import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	site: "https://lucaspausin.up.railway.app/",

	integrations: [tailwind(), react(), robotsTxt()],
});
