"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode_1 = require("vscode");
const vscode = require("vscode");
const HelloWorldPanel_1 = require("./panels/HelloWorldPanel");
const initProject_1 = require("./create_project/initProject");
const xmlParser_1 = require("./code_generator/xmlParser");
function activate(context) {
    // Create the show hello world command
    const showHelloWorldCommand = vscode_1.commands.registerCommand("hello-world.showHelloWorld", () => {
        HelloWorldPanel_1.HelloWorldPanel.render(context.extensionUri);
    });
    const createProjectQuickPick = vscode_1.commands.registerCommand("create-project.createProjectQuickPick", () => {
        vscode_1.window.showQuickPick(["创建空白工程", "创建模板工程"], {
            placeHolder: "选择创建项目的方式"
        }).then((value) => {
            if (value != null) {
                vscode_1.window.showInformationMessage(value);
            }
        });
    });
    //create templateProject
    const templateProject = vscode_1.commands.registerCommand("create-project.templateProject", () => __awaiter(this, void 0, void 0, function* () {
        const openDialogOptions = {
            canSelectMany: false,
            filters: { 'xml files': ['xml'] },
            openLabel: '选择解析的XML文件',
            title: '以XML文件为基础创建模板工程'
        };
        let xmlUri = yield vscode_1.window.showOpenDialog(openDialogOptions);
        if (xmlUri && xmlUri[0]) {
            let xmlPath = xmlUri[0].fsPath;
            vscode_1.window.showInformationMessage("xmlPath is : " + xmlPath);
            (0, xmlParser_1.xmlParse)();
        }
    }));
    //create initProject
    const initProject = vscode_1.commands.registerCommand("create-project.initProject", () => __awaiter(this, void 0, void 0, function* () {
        const saveDialogOptions = {
            saveLabel: '选择空白工程的存放地址',
            title: '选择空白工程文件的存放目录',
            filters: { '文件夹': ['*'] }
        };
        const savePathUri = yield vscode_1.window.showSaveDialog(saveDialogOptions);
        if (savePathUri) {
            let savePath = savePathUri.fsPath;
            vscode_1.window.showInformationMessage("savePath is : " + savePath);
            (0, initProject_1.createInitProject)(savePath, context);
            savePath = savePath.replace(/\\/g, '\/');
            let folderUri = vscode.Uri.file(savePath);
            vscode.commands.executeCommand('vscode.openFolder', folderUri);
        }
    }));
    // Add command to the extension context
    context.subscriptions.push(showHelloWorldCommand, createProjectQuickPick, initProject, templateProject);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map