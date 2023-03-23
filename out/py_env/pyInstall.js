"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPyEnv = void 0;
function checkPyEnv(extName) {
    let pathEnv = process.env['PATH'] || "";
    let strPath = pathEnv;
    let nodePath = strPath.split(';').filter((str) => {
        if (str.toLowerCase().indexOf(extName.toLowerCase()) > 0) {
            return true;
        }
    }) || [];
    return nodePath[0];
}
exports.checkPyEnv = checkPyEnv;
//# sourceMappingURL=pyInstall.js.map