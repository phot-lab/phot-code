import { window } from 'vscode';
import { execFile } from 'node:child_process';
export function checkPyEnv(extName: string) {
    let pathEnv: string = process.env['PATH'] || "";
    let strPath: string = pathEnv;

    let nodePath = strPath.split(';').filter((str) => {
        //console.log(str);
        if (str.toLowerCase().indexOf(extName.toLowerCase()) > 0) {
            window.showInformationMessage("python安装地址为：" + str);
            return true
        }

    }) || []

    return nodePath[0]

}
export function cmd_exec_install(file: string, args : string[]) {
    const { execFile, execFileSync } = require('child_process');

    execFile(file, args[0], args[1],args[2], (err: any, stdout: any, stderr: any) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });

    const stdout = execFileSync('node', ['-v']);
    console.log(stdout);
    
}