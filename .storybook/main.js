module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    // config.module.rules.push({
    //   test: /\.css$/i,
    //   use: ["style-loader", "css-loader"],
    // });

    config.module.rules.push({
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: "babel-loader",
        options: {
          plugins: [
            [
              "@babel/plugin-proposal-decorators",
              {
                legacy: true,
              },
            ],
            [
              "@babel/plugin-proposal-class-properties",
              {
                loose: true,
              },
            ],
          ],
        },
      },
    });

    return config;
  },
};
