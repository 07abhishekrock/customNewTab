const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
     mode : 'development',
     context : path.resolve(__dirname , ''),
     entry : path.resolve(__dirname , 'src/client.js'),
     output : {
          path : path.resolve(__dirname , 'build'),
          filename : 'js/bundle.js'
     },
     resolve : {
          extensions : ['.tsx' , '.ts' , '.js' , '.jsx' , '.css'],
          alias : {
               "components" : path.resolve(__dirname , 'src/components'),
               "utils" : path.resolve(__dirname , 'src/utils'),
               "assets" : path.resolve(__dirname , 'src/assets'),
          }
     },
     module : {
          rules : [
               {
                    test : /\.(ts|tsx|js|jsx)$/,
                    exclude: /node_modules/,
                    use : {
                         loader : 'babel-loader',
                         options : {
                              presets : [ "@babel/preset-typescript" , "@babel/preset-env", "@babel/preset-react"]
                         }
                    }
               },
               {
                    test : /\.css$/,
                    use : [
                         "style-loader",
                         {
                              loader : "css-loader",
                              options : {
                                   importLoaders : 1
                              }
                         },
                         "postcss-loader"
                    ],
               },
               {
                    test: /\.(gif|png|jpe?g|ico|mp3)$/i,
                    use: [
                         {
                              loader: "file-loader",
                              options: { name: "assets/[name].[ext]" },
                         },
                    ],
               },
               {
                    test : /\.svg$/i,
                    use : ['@svgr/webpack']
               }
          ]
     },
     plugins : [
          new CleanWebpackPlugin(),
          new HtmlWebpackPlugin({
               template : 'public/index.html',
          }),
          new ForkTsCheckerWebpackPlugin({
               typescript : {
                    diagnosticOptions : {
                         semantic : true,
                         syntactic : true
                    },
                    mode : 'write-references'
               }
          })
     ],
     devServer : {
          hot : true,
          historyApiFallback : true,
          port : 3001
     }
}