const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
const withPlugins = require("next-compose-plugins");
const withCSS = require("@zeit/next-css");
const webpackConfig = {
	webpack: config => {
		config.plugins.push(
			new SWPrecacheWebpackPlugin({
				minify: true,
				staticFileGlobsIgnorePatterns: [/\.next\//],
				runtimeCaching: [
					{
						handler: "networkFirst",
						urlPattern: /^https?.*/
					}
				]
			})
		);
		return config;
	}
};

module.exports = withPlugins([withCSS], webpackConfig);
