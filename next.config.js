/** @type {import('next').NextConfig} */

getNextConfig = () => {
    // if (process.env.GITHUB_ACTIONS || false) {
    //   let repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
    //
    //   return {
    //     assetPrefix: `/${repo}/`,
    //     basePath: `/${repo}`,
    //   };
    // }
    return {};
};

module.exports = {
    webpack: (config) => {
        config.resolve.alias.canvas = false;

        return config;
    },
}
