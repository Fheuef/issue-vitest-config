import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		include: ["**/*sometimes.test.ts"],
		includeSource: ["src/**/*.ts"],
	},
});
