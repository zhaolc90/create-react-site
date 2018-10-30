import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import globals from 'rollup-plugin-node-globals'
import jsx from 'rollup-plugin-jsx'
import pkg from './package.json';

export default [
	// CommonJS (for Node) and ES module (for bundlers) build.
	// (We could have three entries in the configuration array
	// instead of two, but it's quicker to generate multiple
	// builds from a single configuration where possible, using
	// an array for the `output` option, where we can specify 
	// `file` and `format` for each target)
	{
		input: 'src/index.js',
		external: [
			'ms',
			'react',
			'react-dom',
			'd3'
		],
		output: [
			{ file: pkg.module, format: 'es' }
		],
		plugins: [
			resolve(), // so Rollup can find `ms`
			jsx( {factory: 'React.createElement'} ),
			globals(),
			commonjs() // so Rollup can convert `ms` to an ES module
		]
	}
];
