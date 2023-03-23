import { commands, ExtensionContext,window} from "vscode";
import * as vscode  from "vscode";
import { HelloWorldPanel } from "./panels/HelloWorldPanel";
import {createInitProject} from "./create_project/initProject";
import {xmlParse} from "./code_generator/xmlParser";
import {checkPyEnv}  from "./py_env/pyInstall";
export function activate(context: ExtensionContext) {
  // Create the show hello world command
  const showHelloWorldCommand = commands.registerCommand("hello-world.showHelloWorld", () => {
    HelloWorldPanel.render(context.extensionUri);
  });
  const createProjectQuickPick = commands.registerCommand("create-project.createProjectQuickPick", () => { 
  window.showQuickPick(["创建空白工程","创建模板工程"], {
     placeHolder : "选择创建项目的方式"
   }).then((value) => {
      if (value != null) {
        window.showInformationMessage(<string> value);
      }
    })
  })
  //create templateProject
  const templateProject = commands.registerCommand("create-project.templateProject", async () => {
    const openDialogOptions : vscode.OpenDialogOptions = {
      canSelectMany : false,
      filters : {'xml files': ['xml']},
      openLabel : '选择解析的XML文件',
      title : '以XML文件为基础创建模板工程'
    }
    let xmlUri = await window.showOpenDialog(openDialogOptions);
    if (xmlUri && xmlUri[0]) {
      let xmlPath : string = xmlUri[0].fsPath;
      window.showInformationMessage("xmlPath is : " + xmlPath);
      xmlParse();
    }
  })
  //create initProject
  const initProject = commands.registerCommand("create-project.initProject", async () => {
    const saveDialogOptions : vscode.SaveDialogOptions = {
      saveLabel : '选择空白工程的存放地址',
      title : '选择空白工程文件的存放目录',
      filters: {'文件夹':['*']}
    }
    const savePathUri = await window.showSaveDialog(saveDialogOptions);
    if (savePathUri) {
      let savePath : string = savePathUri.fsPath;
      window.showInformationMessage("savePath is : " + savePath);
      createInitProject(savePath, context);
      savePath = savePath.replace(/\\/g, '\/');
      let folderUri = vscode.Uri.file(savePath);
      vscode.commands.executeCommand('vscode.openFolder', folderUri);
    }
  })

  //check python env
  const pythonEnv = commands.registerCommand("py-env.checkPyEnv", () => {
      if (checkPyEnv("python")) {
        window.showInformationMessage("pyhton环境成功安装");
      } else {
        window.showErrorMessage("pyhton环境未安装");
      }
  })
  // Add command to the extension context
  context.subscriptions.push(showHelloWorldCommand,createProjectQuickPick, initProject, templateProject, pythonEnv);
}
