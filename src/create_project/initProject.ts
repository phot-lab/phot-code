import * as vscode from "vscode";
import { readFileSync, copyFileSync } from "node:fs";
import * as path from 'path';
export function createInitProject(filepath : string, context: vscode.ExtensionContext) {
   vscode.window.showInformationMessage("createInitProject");
   filepath = filepath.replace(/\\/g, '\/');
   filepath = "file:///" + filepath;
   vscode.window.showInformationMessage("path is :" + path);
   let fileName = "PRBS.xml";
   let copyFromPath : string = context.asAbsolutePath(path.join('xmls', fileName));
   vscode.window.showInformationMessage(copyFromPath);
   copyFileSync(copyFromPath, filepath);
   // 获取在webview中使用的特殊URI
}
