const path=require('path')
const SRC_PATH=path.resolve(__dirname,"../src");

// src_path:path.resolve(__dirname,"../src"),
//     entry_path:'./src/index.tsx',
//     resolve_extensions_group:['.js','.ts','.tsx'],
//     resolve_alias:{'@':SRC_PATH},
//     rules:[],
//     development_devtool:'cheap-module-eval-source-map',
//     build_devtool:'cheap-module-source-map',
//     dev_port:15000,
//     dev_overlay:{
//         warnings:false,
//         errors:true
//     },
//     dev_host:"localhost",
//     dev_is_disabledcheckhost:true,
//     dev_auto_open:true,
//     dev_noinfo:true,
//     dev_is_https:false,
//     dev_is_hot:false,
//     dev_is_compress:true,
//     dev_is_progress:true,
//     dev_is_quiet:true,
//     dev_is_uselocalip:false,
//     dev_proxy:{
//         "/api":{
//             target:"http://localhost:8080",
//             changeOrigin:true,
//             pathRewrite:{"^api":"/api"}
//         }
//     },
//     dev_html_template_path:'./src/public/index.ejs',
//     dev_html_js_inject:'body',
//     dev_html_title:'吴家宝搭建的React简易项目',
//     dev_html_ico:'src/assets/favicon-flash.ico',
//     dev_is_useSourceMap:true

module.exports={
    entry:{
        main:"./src/index.ts"
    },
    resolve:{
        extensions:['.js','.jsx','.ts','.tsx'],
        alias:{
            "@":path.resolve(__dirname,"../src")
        }
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)/,
                loader:"babel-loader",
                include:SRC_PATH,
                exclude:/node_modules/
            },
            {
                test:/\.(ts|tsx)/,
                use:[
                    {
                        loader:"ts-loader",
                        options:{
                            transpileOnly:true
                        }
                    }
                ]
            }
        ]
    }
}