import webpack from 'webpack';
import path from 'path';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(
    options: BuildOptions,
): webpack.Configuration {
    const { paths, mode, isDev } = options;

    return {
        mode,
        entry: paths.entry,

        plugins: buildPlugins(options),

        module: {
            rules: buildLoaders(options),
        },

        resolve: buildResolvers(options),

        devServer: isDev ? buildDevServer(options) : undefined,

        devtool: isDev ? 'inline-source-map' : undefined,

        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
    };
}
