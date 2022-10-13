const path = require("path");

// we did require("path") to configure the path where our output files will be saved

// after downloading the htmlWebpackPlugin, let us now update this file to work with this dependency: NOTE: by now 
// we ought to have moved our index.html file away from the dist directory



const HtmlWebpackPlugin = require("html-webpack-plugin");

// update the configuration file to work with the clean up plugin we just downloaded
// we first require the new plugin and save it in a variable
// then we add it to module.exports in the plugin section below
// lastly we create a new instance of the plug in and then specify that we would like our dist folder cleaned out
// now when we run npm run build, webpack will automatically clean out the contents of our dist folder before creating new bundle files.... once again THIS IS ALL THANKS TO the webpack Cleanup plug in


const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// we need CleanWebpackPlugin because as we add more assets to our application , our "dist" folder will get cluttered and webpack won't automatically clean itself to avoid cluttering.... and that is why we need CleanWebpackPlugin

// the ESLint configuration
const ESLintPlugin = require('eslint-webpack-plugin');

/*
module.exports = {

    
    // update the webpack.config.js file for working with our HtmlWebPackPlugin

    plugins: [
        // instantiation a new CleanWebPackPlugin

        new CleanWebpackPlugin(),
        // we specify here that we want our dist folder cleaned out.... Now webpack will automatically clean out the contents of our dist folder before creating new bundle files all thanks to a Clean Webpack Plugin
        // note we can configure this plugin to clean out multiple directories and exclude specific files


        // working with our ESLint and the plugin for eslint

        new ESLintPlugin({
            context: "compiler.context",
            eslintPath: "eslint",
            extensions: 'js',
            exclude: 'node_modules',
            fix: false,
            formatter: 'stylish',
            lintDirtyModulesOnly: false,
            threads: false,
            emitError: true,
            emitWarning: true,
            failOnError: true,
            failOnWarning: false,
            quiet: false,
            outputReport: false
        }),

        // instantiating a new HtmlWebpackPlugin
        //  we need HtmlWebpackPlugin because there might be different entry points and someone can even add a new entry point or change the output configuration
        // so if we have many html files all with different entry points we only have to update our configuration file and then webpack does the rest for us
        new HtmlWebpackPlugin({
            title: "Shape Tracker",
            /* title of our bundled HTML file 

            template: "./src/index.html",
            /* this is the HTML file we will bundle..... Here we specify it should be the index.html file we just moved to the src folder, if we didnt specify a template
            webpack would just generate a file with a <head>, <title>, and <script> tags 

            inject: "body"
            // THe inject is a nice little option: with this, webpack will inject(move) our script at the bottom of our html for us.... all of this is just to make our code more performant in production 
        })
    ],

*/

module.exports = {   
    
    entry: "./src/main.js",
    // entry is the JS file where webpack will enter our application and then use a dependency graph all other required JS files for our application to work
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },

    
    //  the updated code for hosting

    devtool: 'eval-source-map',
    devServer: {
        static: './dist'

        // the eval-source-map shows us the error of our code in our code and not in our bundled code that's concatenated, minified and unreadable. So the error can be easily traceable, the eval-source-map is slower than other source-maps but so far it shows the error in our code and not in our bundled code, we're good to go with it
    },
    
    plugins: [

    new CleanWebpackPlugin(),
    new ESLintPlugin({
      context: "compiler.context",
      eslintPath: "eslint",
      extensions: 'js',
      exclude: 'node_modules',
      fix: false,
      formatter: 'stylish',
      lintDirtyModulesOnly: false,
      threads: false,
      emitError: true,
      emitWarning: true,
      failOnError: true,
      failOnWarning: false,
      quiet: false,
      outputReport: false
    }),
    new HtmlWebpackPlugin({
      title: 'Shape Tracker',
      template: './src/index.html',
      inject: 'body'
    })
  ],
  
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }

  
};
