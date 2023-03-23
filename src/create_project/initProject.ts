import * as vscode from "vscode";
import { readFileSync, copyFileSync, writeFileSync, mkdirSync} from "node:fs";
import * as path from 'path';
export function createInitProject(filepath : string, context: vscode.ExtensionContext) {
   vscode.window.showInformationMessage("createInitProject");
   filepath = filepath.replace(/\\/g, '\/');
   filepath = "file:///" + filepath;
   vscode.window.showInformationMessage("path is :" + path);
   let fileName = "PRBS.xml";
   let pyName = "fiber.py";
   let tomlName = "class.toml";
   let copyPyPath = context.asAbsolutePath(path.join('py_tomls', pyName));
   let copyTomlPath = context.asAbsolutePath(path.join('py_tomls', tomlName));
   mkdirSync(new URL(filepath));
   mkdirSync(new URL(filepath + '\/src'));
   mkdirSync(new URL(filepath + '\/src\/test'));
   mkdirSync(new URL(filepath + '\/.vscode'));
   //copyFileSync(copyFromPath, filepath);
   //get local resource URI used in webview 
   //let data = readFileSync(copyFromPath);
   let optiDevPyName = "opti_dev.py";
   let optiDevTomlName = "opti_dev.toml";
   copyFileSync(copyPyPath, new URL(filepath + "\/src\/" + optiDevPyName));
   copyFileSync(copyTomlPath, new URL(filepath + "\/" + optiDevTomlName));
}
