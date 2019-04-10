const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
//导出配置
module.exports = {
	//模式
	mode:'development',
	//指定入口文件
	entry:{
		index:'./src/index.js'
	},
	//制定出口
	output:{
		//出口文件名称
		filename:'[name].[chunkhash].bundle.js',
		//出口文件存储路径
		path:path.resolve(__dirname,'dist')
	},
	module:{
		rules:[
			{//CSS文件
				test:/\.css$/,
				use:[
					'style-loader',
					'css-loader'
				]
			},
			{//图片
				test:/\.(png|svg|jpg|gif)$/,
				use:[{
					loader:'url-loader'
				}]
			},
			{//babel
			    test:/\.js$/,
			    exclude: /(node_modules)/,//过滤
			    use: {
			        loader: 'babel-loader',
			        options: {
			            presets: ['env', 'react'],
			            plugins: [
            						["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }] 
        				]
			        }
			    }               
			}
		]
	},
	devServer: {
     	contentBase: './dist',
     	port:3000
   	},
	plugins:[
		new HtmlWebpackPlugin({
			template:'./src/index.html',
			filename:'index.html',
			inject:true,
			hash:true
		}),
		new CleanWebpackPlugin(['dist'])
	]






}