const fs = require('fs');
const {join} = require('path');
const {promisify} = require('util');
const copyFile = promisify(fs.copyFile);

const filesToCopy = new Map();
filesToCopy.set('build/CNAME', 'CNAME');
filesToCopy.set('build/.nojekyll', '.nojekyll');
filesToCopy.set('build/_config.yml', '_config.yml');
filesToCopy.set('static/icons.css', 'static/icons.css');

module.exports = {
	exportPathMap: async function (defaultPathMap, {dev, dir, outDir, distDir, buildId}) {
		if (dev) {
			return defaultPathMap
		}

		filesToCopy.forEach((value, key) => {
			copyFile(join(dir, key), join(outDir, value));
		});

		return defaultPathMap
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.md$/,
			use: "raw-loader"
		});
		return config;
	},
};