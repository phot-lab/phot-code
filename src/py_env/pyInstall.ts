import { window } from 'vscode';
export function checkPyEnv(extName : string) {
    let pathEnv : string = process.env['PATH'] || "";
    let strPath : string = pathEnv;

    let nodePath = strPath.split(';').filter((str) => {

        if (str.toLowerCase().indexOf(extName.toLowerCase()) > 0) {

            return true

        }

    }) || []

    return nodePath[0]

}