/**
*  Copyright (C) 2012 Wave ERP, Inc. All rights reserved.
*  This file is part of Wave ERP System.
*
* Wave ERP System is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* Wave ERP System is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with Wave ERP System.  If not, see <http://www.gnu.org/licenses/>.
*
* The source code used in Wave ERP Framework is available at www.baligyaan.com.
*
* Framework Designed by: Jammi Dee (jammi_dee@yahoo.com)
*
* The code still needs to be improved in the future. If you want to HELP, lets
* us know so that changes can be monitored, controlled and credits can be
* given to you being kind enough to share your expertise. For the road map and
* design of the system you can email me.
*
* Some of the codes are based on the codes found in the Internet but we
* modified it in order to fit in the Wave ERP framework. If you think that
* it is your code and you want to be credited, let us know. If you want
* it removed in the system, let us know also. And if you find a defect in
* our code, please let me know so that we can fix it immediately! I can be
* contacted at jammi_dee@yahoo.com.
*
* Created by Jammi Dee
* Date: 05/28/2012
* Modified by: Jammi Dee 05/28/2012
*
*/
dojo.declare("PgConfig", wm.Page, {
"preferredDevice": "desktop",
start: function() {
try {
this.svarEntityId.update();
this.lblUserInfo.setCaption(app.varUserInfo.getValue("dataValue"));
this.lblTitle.setCaption("Configuration");
app.varModuleId.setValue("dataValue","MDLCONFIG");
this.svarReadConfigUserId.setValue("input.pAppid", "TKSUSRMGT");
this.svarReadConfigUserId.setValue("input.pVarname", "USERID");
this.svarReadConfigUserId.update();
this.svarReadConfigComId.setValue("input.pAppid", "TKSUSRMGT");
this.svarReadConfigComId.setValue("input.pVarname", "COMPANYID");
this.svarReadConfigComId.update();
this.svarReadConfigComAdd.setValue("input.pAppid", "TKSUSRMGT");
this.svarReadConfigComAdd.setValue("input.pVarname", "ADDRESS");
this.svarReadConfigComAdd.update();
this.svarReadConfigEntId.setValue("input.pAppid", "TKSUSRMGT");
this.svarReadConfigEntId.setValue("input.pVarname", "ENTITY");
this.svarReadConfigEntId.update();
app.pdWaitLoadPage.hide();
} catch (e) {
app.toastError(this.name + ".start() Failed: " + e.toString());
}
},
btnSaveClick: function(inSender) {
try {
if(this.txtEntId.getInvalid() === true){
alert("Invalid Entity ID");
}
else{
this.svarSaveConfigUserId.setValue("input.pAppid", "TKSUSRMGT");
this.svarSaveConfigUserId.setValue("input.pVarname", "USERID");
this.svarSaveConfigUserId.setValue("input.pVarvalue", this.txtUserId.getValue("dataValue"));
this.svarSaveConfigUserId.update();
this.svarSaveConfigComId.setValue("input.pAppid", "TKSUSRMGT");
this.svarSaveConfigComId.setValue("input.pVarname", "COMPANYID");
this.svarSaveConfigComId.setValue("input.pVarvalue", this.txtComId.getValue("dataValue"));
this.svarSaveConfigComId.update();
this.svarSaveConfigComAdd.setValue("input.pAppid", "TKSUSRMGT");
this.svarSaveConfigComAdd.setValue("input.pVarname", "ADDRESS");
this.svarSaveConfigComAdd.setValue("input.pVarvalue", this.txtComAdd.getValue("dataValue"));
this.svarSaveConfigComAdd.update();
this.svarSaveConfigEntId.setValue("input.pAppid", "TKSUSRMGT");
this.svarSaveConfigEntId.setValue("input.pVarname", "ENTITY");
this.svarSaveConfigEntId.setValue("input.pVarvalue", this.txtEntId.getValue("dataValue"));
this.svarSaveConfigEntId.update();
app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarLogging.setValue("input.pMsg","Edit Configuration");
app.svarLogging.setValue("input.pModuleId",app.varModuleId.getValue("dataValue"));
app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
app.svarLogging.setValue("input.pProcess","CONFIGURATION");
app.svarLogging.setValue("input.pScopeId","NA");
app.svarLogging.setValue("input.pStype","USER");
app.svarLogging.update();
this.navBackToMain.update();
}
} catch (e) {
console.error('ERROR IN btnSaveClick: ' + e);
}
},
svarReadConfigComIdResult: function(inSender, inDeprecated) {
try {
//alert(this.svarReadConfigComId.getValue("dataValue"));
if (this.svarReadConfigComId.getValue("dataValue") != "undefined" || this.svarReadConfigComId.getValue("dataValue") != "FAIL") {
this.txtComId.setValue("dataValue", this.svarReadConfigComId.getValue("dataValue"));
} else {
this.txtComId.setValue("dataValue", "");
}
} catch (e) {
console.error('ERROR IN svarReadConfigComIdResult: ' + e);
}
},
svarReadConfigEntIdResult: function(inSender, inDeprecated) {
try {
if (this.svarReadConfigEntId.getValue("dataValue") != "undefined" || this.svarReadConfigEntId.getValue("dataValue") != "FAIL") {
this.txtEntId.setValue("displayValue", this.svarReadConfigEntId.getValue("dataValue"));
} else {
this.txtEntId.setValue("dataValue", "");
}
} catch (e) {
console.error('ERROR IN svarReadConfigEntIdResult: ' + e);
}
},
svarReadConfigComAddResult: function(inSender, inDeprecated) {
try {
if (this.svarReadConfigComAdd.getValue("dataValue") != "undefined" || this.svarReadConfigComAdd.getValue("dataValue") != "FAIL") {
this.txtComAdd.setValue("dataValue", this.svarReadConfigComAdd.getValue("dataValue"));
} else {
this.txtComAdd.setValue("dataValue", "");
}
} catch (e) {
console.error('ERROR IN svarReadConfigComAddResult: ' + e);
}
},
btnCancelClick: function(inSender) {
try {
this.navBackToMain.update();
} catch(e) {
console.error('ERROR IN btnCancelClick: ' + e);
}
},
lblMainClick: function(inSender, inEvent) {
try {
this.navBackToMain.update();
} catch(e) {
console.error('ERROR IN lblMainClick: ' + e);
}
},
svarReadConfigUserIdResult: function(inSender, inDeprecated) {
try {
if (this.svarReadConfigUserId.getValue("dataValue") != "undefined" || this.svarReadConfigUserId.getValue("dataValue") != "FAIL") {
this.txtUserId.setValue("dataValue", this.svarReadConfigUserId.getValue("dataValue"));
} else {
this.txtUserId.setValue("dataValue", "");
}
} catch(e) {
console.error('ERROR IN svarReadConfigUserIdResult: ' + e);
}
},
_end: 0
});

PgConfig.widgets = {
svarSaveConfigComAdd: ["wm.ServiceVariable", {"operation":"writeAppRegistry","service":"svcRegistry"}, {}, {
input: ["wm.ServiceInput", {"type":"writeAppRegistryInputs"}, {}]
}],
svarSaveConfigComId: ["wm.ServiceVariable", {"operation":"writeAppRegistry","service":"svcRegistry"}, {}, {
input: ["wm.ServiceInput", {"type":"writeAppRegistryInputs"}, {}]
}],
svarSaveConfigEntId: ["wm.ServiceVariable", {"operation":"writeAppRegistry","service":"svcRegistry"}, {}, {
input: ["wm.ServiceInput", {"type":"writeAppRegistryInputs"}, {}]
}],
svarReadConfigComId: ["wm.ServiceVariable", {"operation":"readAppRegistry","service":"svcRegistry"}, {"onResult":"svarReadConfigComIdResult","onSuccess":"svarReadConfigComIdSuccess"}, {
input: ["wm.ServiceInput", {"type":"readAppRegistryInputs"}, {}]
}],
svarReadConfigComAdd: ["wm.ServiceVariable", {"operation":"readAppRegistry","service":"svcRegistry"}, {"onResult":"svarReadConfigComAddResult"}, {
input: ["wm.ServiceInput", {"type":"readAppRegistryInputs"}, {}]
}],
svarReadConfigEntId: ["wm.ServiceVariable", {"operation":"readAppRegistry","service":"svcRegistry"}, {"onResult":"svarReadConfigEntIdResult"}, {
input: ["wm.ServiceInput", {"type":"readAppRegistryInputs"}, {}]
}],
navBackToMain: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMain\"","targetProperty":"pageName"}, {}]
}]
}]
}],
svarSaveConfigUserId: ["wm.ServiceVariable", {"operation":"writeAppRegistry","service":"svcRegistry"}, {}, {
input: ["wm.ServiceInput", {"type":"writeAppRegistryInputs"}, {}]
}],
svarReadConfigUserId: ["wm.ServiceVariable", {"operation":"readAppRegistry","service":"svcRegistry"}, {"onResult":"svarReadConfigUserIdResult"}, {
input: ["wm.ServiceInput", {"type":"readAppRegistryInputs"}, {}]
}],
svarEntityId: ["wm.ServiceVariable", {"operation":"getEntityID","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"getEntityIDInputs"}, {}]
}],
pnlLayoutMain: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"horizontalAlign":"left","verticalAlign":"top"}, {}, {
pnlHeader: ["wm.Panel", {"height":"45px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
imgLogo: ["wm.Picture", {"height":"45px","source":"resources/images/logos/waveerplogo.jpg","width":"275px"}, {}],
pnlTitle: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","styles":{"backgroundImage":"url(resources/images/logos/waveerpbar.jpg)","backgroundGradient":"","backgroundColor":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
lblTitle: ["wm.Label", {"align":"right","autoSizeHeight":true,"caption":"Ticket System","height":"23px","padding":"4","singleLine":false,"width":"600px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}],
pnlMenuBar: ["wm.Panel", {"height":"20px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#00008b"},"verticalAlign":"top","width":"100%"}, {}, {
pnlSubMenu: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"75%"}, {}, {
lblMain: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Main","height":"100%","padding":"4","width":"36px"}, {"onclick":"lblMainClick"}, {
format: ["wm.DataFormatter", {}, {}]
}]
}],
pnlSystemInfo: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"25%"}, {}, {
lblUserInfo: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"autoSizeWidth":true,"height":"100%","padding":"4","width":"40px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblBorder: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"align":"center","caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblLogout: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Logout","height":"100%","padding":"4","width":"48px"}, {"onclick":"lblLogoutClick"}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}],
pnlMenuButton: ["wm.HeaderContentPanel", {"border":"0","height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
pnlMenuButtonLeft: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"50%"}, {}, {
pic_back: ["wm.Picture", {"height":"24px","hint":"Back","source":"resources/images/buttons/arrowleft24.png","width":"24px"}, {}]
}],
pnlMenuButtonRight: ["wm.Panel", {"height":"24px","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}]
}],
spacer2: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
pnlConfig: ["wm.Panel", {"height":"70%","horizontalAlign":"left","verticalAlign":"top","width":"80%"}, {}, {
spcConfig: ["wm.Spacer", {"height":"48px","width":"96px"}, {}],
pnlUserId: ["wm.Panel", {"height":"30px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtUserId: ["wm.Text", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"caption":"User ID :","captionAlign":"left","captionSize":"114px","dataValue":undefined,"displayValue":"","width":"450px"}, {}]
}],
pnlComId: ["wm.Panel", {"height":"30px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtComId: ["wm.Text", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"caption":"Company ID :","captionAlign":"left","captionSize":"116px","dataValue":undefined,"displayValue":"","width":"450px"}, {}]
}],
pnlComAdd: ["wm.Panel", {"height":"127px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtComAdd: ["wm.LargeTextArea", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"caption":"Company Address :","dataValue":undefined,"desktopHeight":"121px","displayValue":"","height":"121px","width":"450px"}, {}]
}],
pnlEntId: ["wm.Panel", {"height":"29px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtEntId: ["wm.SelectMenu", {"allowNone":true,"caption":"Entity ID :","captionAlign":"left","captionSize":"114px","dataField":"c0","dataType":"com.dbwaveerp.data.output.GetEntityIDRtnType","dataValue":undefined,"displayField":"c0","displayValue":"","restrictValues":"on","width":"450px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarEntityId","targetProperty":"dataSet"}, {}]
}]
}]
}],
pnlButtons: ["wm.Panel", {"height":"48px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spacer1: ["wm.Spacer", {"height":"48px","width":"301px"}, {}],
btnSave: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Save","margin":"4"}, {"onclick":"btnSaveClick"}],
btnCancel: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Cancel","margin":"4"}, {"onclick":"btnCancelClick"}]
}]
}]
}],
pnlFooter: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundChromeBar_LightBlue","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
lblFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"...","height":"20px","padding":"4","styles":{"backgroundGradient":{"direction":"horizontal","startColor":"#03036d","endColor":"#d8cbf2","colorStop":31},"backgroundColor":"#ffffff"},"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}]
};

PgConfig.prototype._cssText = 'body.tundra .PgConfig .wmlayout .PgConfig-pnlHeader {\
background-color:#FFFFFF;\
}\
body.tundra .PgConfig .wmlayout .PgConfig-pnlTitle {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgConfig .wmlayout .PgConfig-lblTitle {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:14pt;\
}\
body.tundra .PgConfig .wmlayout .PgConfig-pnlMenuBar {\
background-color:#00008B;\
}\
body.tundra .PgConfig .wmlayout .PgConfig-pnlFooter {\
background-color:#00008B;\
}\
body.tundra .PgConfig .wmlayout .PgConfig-txtUserId {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:11pt;\
font-weight:bold;\
}\
body.tundra .PgConfig .PgConfig-pnlLayoutMain.wmlayout {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgConfig .wmlayout .PgConfig-txtPassword {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgConfig .wmlayout .PgConfig-txtComAdd {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
font-weight:bold;\
}\
body.tundra .PgConfig .wmlayout .PgConfig-txtEntId {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
font-weight:bold;\
}\
body.tundra .PgConfig .wmlayout .PgConfig-lblMain {\
font-family: Tahoma;\
}\
body.tundra .PgConfig .wmlayout .PgConfig-lblUserInfo {\
font-family:Tahoma;\
}\
body.tundra .PgConfig .wmlayout .PgConfig-lblBorder {\
font-family:Tahoma;\
}\
body.tundra .PgConfig .wmlayout .PgConfig-lblLogout {\
font-family:Tahoma;\
}\
body.tundra .PgConfig .wmlayout .PgConfig-txtUserId {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgConfig .wmlayout .PgConfig-txtComId {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
font-weight:bold;\
}\
';
PgConfig.prototype._htmlText = '';