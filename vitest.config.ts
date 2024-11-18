import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		exclude: [...configDefaults.exclude, "**/*sometimes.test.ts"],
		includeSource: ["src/**/*.ts"],
	},
});