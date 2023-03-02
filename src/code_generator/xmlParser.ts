import * as parser from 'xmldoc';
import {window} from 'vscode';
export function xmlParse() {
    let document = new parser.XmlDocument("<xml>I love you forever!<xml>");
    let xmlVal = document.val;
    window.showInformationMessage("xmlVar is : " + xmlVal); 
}
