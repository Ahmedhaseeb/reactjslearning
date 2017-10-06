module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname+"/public",
        filename: "bundle.js",
        publicPath: "assets"
    },
    module: {
        loaders: [
            { 
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {
                    presets:["latest", "react", "stage-0"]
                }
            }
        ]
    }
};