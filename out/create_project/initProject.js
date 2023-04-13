"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInitProject = void 0;
const vscode = require("vscode");
const node_fs_1 = require("node:fs");
const path = require("path");
function createInitProject(filepath, context) {
    vscode.window.showInformationMessage("createInitProject");
    //filepath = filepath.replace(/\\/g, '\/');
    let urlPrefix = "file:///";
    filepath = path.join(urlPrefix, filepath);
    //filepath = "file:///" + filepath;
    vscode.window.showInformationMessage("path is :" + path + "filepath is : " + filepath);
    let fileName = "PRBS.xml";
    let pyName = "fiber.py";
    let tomlName = "class.toml";
    let copyPyPath = context.asAbsolutePath(path.join('py_tomls', pyName));
    let copyTomlPath = context.asAbsolutePath(path.join('py_tomls', tomlName));
    (0, node_fs_1.mkdirSync)(new URL(filepath));
    //mkdirSync(new URL(filepath + '\/src'));
    (0, node_fs_1.mkdirSync)(new URL(path.join(filepath, "src")));
    //mkdirSync(new URL(filepath + '\/src\/test'));
    (0, node_fs_1.mkdirSync)(new URL(path.join(filepath, "src", "test")));
    //mkdirSync(new URL(filepath + '\/.
    //copyFileSync(copyFromPath, filepath);vscode'));
    (0, node_fs_1.mkdirSync)(new URL(path.join(filepath, ".vscode")));
    //get local resource URI used in webview 
    //let data = readFileSync(copyFromPath);
    let optiDevPyName = "opti_dev.py";
    let optiDevTomlName = "opti_dev.toml";
    (0, node_fs_1.copyFileSync)(copyPyPath, new URL(path.join(filepath, "src", optiDevPyName)));
    (0, node_fs_1.copyFileSync)(copyTomlPath, new URL(path.join(filepath, optiDevTomlName)));
}
exports.createInitProject = createInitProject;
//# sourceMappingURL=initProject.js.map