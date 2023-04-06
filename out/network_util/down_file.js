"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downFileByUrl = exports.getfileByUrl = void 0;
//import packages
const fs = require("fs");
const path = require("path");
const request = require("request");
const https = require("https");
const vscode = require("vscode");
const pyInstall_1 = require("../py_env/pyInstall");
/**
 *
 * @param {*} url
 * @param {*} fileName
 * @param {*} dir
 */
function getfileByUrl(url, fileName, dir, context) {
    vscode.window.showInformationMessage("检测本机是否存在python安装包");
    console.log('------------------------------------------------');
    console.log(url);
    console.log(fileName);
    console.log(dir);
    if (fs.existsSync(new URL("file:///" + dir + fileName))) {
        vscode.window.showInformationMessage("本机已有python安装包");
        vscode.window.showInformationMessage("正在安装python安装包");
        (0, pyInstall_1.cmd_exec_install)("C:\\downloads\\python-install.exe", ["\/passive,InstallAllUsers=1,PrependPath=1"]);
        return;
    }
    vscode.window.showInformationMessage("正在下载python安装包");
    vscode.window.showInformationMessage("下载路径为: " + dir + fileName);
    vscode.window.showInformationMessage("正在下载中~ ，请您稍等~");
    //new URL("file:///" + dir + fileName)
    let copyPyPath = context.asAbsolutePath(path.join('py_tomls', fileName));
    let stream = fs.createWriteStream(new URL("file:///" + dir + fileName));
    request(url).pipe(stream).on("close", () => {
        vscode.window.showInformationMessage("python安装包: " + fileName + " 下载完毕");
        console.log("文件: " + fileName + " 下载完毕");
        vscode.window.showInformationMessage("开始安装python环境，请稍等~");
        (0, pyInstall_1.cmd_exec_install)("C:\\downloads\\python-install.exe", ["\/passive,InstallAllUsers=1,PrependPath=1"]);
    });
}
exports.getfileByUrl = getfileByUrl;
function downFileByUrl(url, fileName, dir) {
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
exports.downFileByUrl = downFileByUrl;
//# sourceMappingURL=down_file.js.map