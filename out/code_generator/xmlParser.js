"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlParse = void 0;
const parser = require("xmldoc");
const vscode_1 = require("vscode");
function xmlParse() {
    let document = new parser.XmlDocument("<xml>I love you forever!<xml>");
    let xmlVal = document.val;
    vscode_1.window.showInformationMessage("xmlVar is : " + xmlVal);
}
exports.xmlParse = xmlParse;
//# sourceMappingURL=xmlParser.js.map