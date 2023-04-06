"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmd_exec_install = exports.checkPyEnv = void 0;
const vscode_1 = require("vscode");
function checkPyEnv(extName) {
    let pathEnv = process.env['PATH'] || "";
    let strPath = pathEnv;
    let nodePath = strPath.split(';').filter((str) => {
        //console.log(str);
        if (str.toLowerCase().indexOf(extName.toLowerCase()) > 0) {
            vscode_1.window.showInformationMessage("python安装地址为：" + str);
            return true;
        }
    }) || [];
    return nodePath[0];
}
exports.checkPyEnv = checkPyEnv;
function cmd_exec_install(file, args) {
    const { execFile, execFileSync } = require('child_process');
    execFile(file, args[0], args[1], args[2], (err, stdout, stderr) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
    const stdout = execFileSync('node', ['-v']);
    console.log(stdout);
}
exports.cmd_exec_install = cmd_exec_install;
//# sourceMappingURL=pyInstall.js.map