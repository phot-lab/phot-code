"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInitProject = void 0;
const vscode = require("vscode");
const node_fs_1 = require("node:fs");
const path = require("path");
function createInitProject(filepath, context) {
    vscode.window.showInformationMessage("createInitProject");
    filepath = filepath.replace(/\\/g, '\/');
    filepath = "file:///" + filepath;
    vscode.window.showInformationMessage("path is :" + path);
    let fileName = "PRBS.xml";
    let copyFromPath = context.asAbsolutePath(path.join('xmls', fileName));
    vscode.window.showInformationMessage(copyFromPath);
    (0, node_fs_1.copyFileSync)(copyFromPath, filepath);
    // 获取在webview中使用的特殊URI
}
exports.createInitProject = createInitProject;
//# sourceMappingURL=initProject.js.map