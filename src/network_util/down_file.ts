//import packages
import * as fs from 'fs';
import * as path from 'path';
import * as request from 'request';
import * as https from 'https';
import * as vscode from 'vscode';
import { cmd_exec_install } from '../py_env/pyInstall';
/**
 * 
 * @param {*} url  
 * @param {*} fileName 	
 * @param {*} dir 
 */
export function getfileByUrl(url: string, fileName: string, dir: string, context: vscode.ExtensionContext) {
    vscode.window.showInformationMessage("检测本机是否存在python安装包")
    console.log('------------------------------------------------')
    console.log(url)
    console.log(fileName)
    console.log(dir)
    if (fs.existsSync(new URL("file:///" + dir + fileName))) {
        vscode.window.showInformationMessage("本机已有python安装包")
        vscode.window.showInformationMessage("正在安装python安装包")
        cmd_exec_install("C:\\downloads\\python-install.exe", ["\/passive,InstallAllUsers=1,PrependPath=1"]);
        return;
    }
    vscode.window.showInformationMessage("正在下载python安装包")
    vscode.window.showInformationMessage("下载路径为: " + dir + fileName);
    vscode.window.showInformationMessage("正在下载中~ ，请您稍等~");
    //new URL("file:///" + dir + fileName)
    let copyPyPath = context.asAbsolutePath(path.join('py_tomls', fileName));
    let stream = fs.createWriteStream(new URL("file:///" + dir + fileName));
    request(url).pipe(stream).on("close", () => {
        vscode.window.showInformationMessage("python安装包: " + fileName + " 下载完毕");
        console.log("文件: " + fileName + " 下载完毕");
        vscode.window.showInformationMessage("开始安装python环境，请稍等~");
        cmd_exec_install("C:\\downloads\\python-install.exe", ["\/passive,InstallAllUsers=1,PrependPath=1"]);
    });
}
export function downFileByUrl(url: string, fileName : string, dir : string) {
    // Download the file
    https.get(url, (res) => {
        // Open file in local filesystem
        let file = fs.createWriteStream("logo.png");
        // Write data into local file
        res.pipe(file);
        // Close the file
        file.on('finish', () => {
            let path = file.path;
            file.close();
            console.log('File downloaded!' + path);
        });
    }).on("error", (err) => {
        console.log("Error: ", err.message);
    });
}