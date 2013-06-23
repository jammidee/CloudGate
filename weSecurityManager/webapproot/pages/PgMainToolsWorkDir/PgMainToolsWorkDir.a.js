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
* Date: 09/01/2012
* Modified by: Jammi Dee 09/01/2012
*
*/
/*
This is a sample page that can used as template
*/
dojo.declare("PgMainToolsWorkDir", wm.Page, {
"preferredDevice": "desktop",
start: function() {
try {
// Added by JMD 04/27/2012
// Set up the date for the header here
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
if(dd<10){dd='0'+dd;}
if(mm<10){mm='0'+mm;}
var ctoday = mm+'/'+dd+'/'+yyyy;
this.lblDate.setCaption(ctoday);
// Set up the header information here
this.lblUserInfo.setCaption(app.varUserInfo.getValue("dataValue"));
this.lblTitle.setCaption("Wave ERP Template System 1.0");
this.lblEntity.setCaption(app.varEntity.getValue("dataValue"));
app.varModuleId.setValue("dataValue","MDLMAIN");
// Initialize the application - Jammi Dee 03/25/2012
this.initApplication();
//Added by Jammi Dee 11/25/2012
app.svarUpdateSessionApp.setValue("input.pJuid",app.varSessionId.getValue("dataValue"));
app.svarUpdateSessionApp.update();
// Added by Jammi Dee 05/06/2012
app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarLogging.setValue("input.pMsg","Loaded Working Dir Page.");
app.svarLogging.setValue("input.pModuleId","WORKDIR");
app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
app.svarLogging.setValue("input.pProcess","PAGELOAD");
app.svarLogging.setValue("input.pScopeId","NA");
app.svarLogging.setValue("input.pStype","USER");
app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
app.svarLogging.update();
//Added by Jammi Dee 07/07/2012
//Determine if we have to show or hide the header
//if( app.varShowHeader.getValue("dataValue") === "ON" ){
//    this.pnlHeader.setShowing(true); // show header
//} else {
//    this.pnlHeader.setShowing(false); // hide header
//}
// Added by Jammi Dee 05/30/2012
this.tmrTime.update();
app.pdWaitLoadPage.hide();
} catch (e) {
app.toastError(this.name + ".start() Failed: " + e.toString());
}
},
/*
* 03/25/2012 - Jammi Dee
* Initialize the template variables here
*/
initApplication: function() {
this.lblTitle.setCaption("Tools : Work Dir" );
this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
},
// Added by Jammi Dee 05/30/2012
tmrTimeTimerFire: function(inSender) {
try {
var time = new Date();
var hours = time.getHours();
var minutes = time.getMinutes();
minutes=((minutes < 10) ? "0" : "") + minutes;
var seconds = time.getSeconds();
seconds=((seconds < 10) ? "0" : "") + seconds;
var clock = hours + ":" + minutes + ":" + seconds   ;
this.lblTime.setCaption(clock);
} catch(e) {
console.error('ERROR IN tmrTimeTimerFire: ' + e);
}
},
//Added by Jammi Dee 09/01/2012
pic_refreshClick: function(inSender) {
try {
//this.svarMediaTempDirList.update();
this.svarMediaTempDirListTree.update();
this.svarMediaUploadDirListTree.update();
} catch(e) {
console.error('ERROR IN pic_refreshClick: ' + e);
alert( 'ERROR IN pic_refreshClick: ' + e );
}
},
//Added by Jammi Dee 09/01/2012
svarMediaTempDirListTreeResult: function(inSender, inDeprecated) {
try {
this.otTemp.setValue("data", inSender.getValue("dataValue"));
} catch(e) {
console.error('ERROR IN svarMediaTempDirListTreeResult: ' + e);
alert( 'ERROR IN svarMediaTempDirListTreeResult: ' + e );
}
},
//Added by Jammi Dee 09/01/2012
svarMediaUploadDirListTreeResult: function(inSender, inDeprecated) {
try {
this.otUpload.setValue("data", inSender.getValue("dataValue"));
} catch(e) {
console.error('ERROR IN svarMediaUploadDirListTreeResult: ' + e);
alert( 'ERROR IN svarMediaUploadDirListTreeResult: ' + e );
}
},
//Added by Jammi Dee 09/01/2012
pic_deleteClick: function(inSender) {
try {
var response = confirm("Delete: Are you sure to delete all files in the temporary folders?");
if (response) {
this.svarDeleteTempFolder.update();
this.svarDeleteUploadFolder.update();
this.svarMediaTempDirListTree.update();
this.svarMediaUploadDirListTree.update();
}
} catch(e) {
console.error('ERROR IN pic_deleteClick: ' + e);
alert( 'ERROR IN pic_deleteClick: ' + e );
}
},
//Added by Jammi Dee 05/05/2013
pic_backClick: function(inSender) {
try {
app.pdWaitLoadPage.show();
this.navPgMainTools.update();
} catch(e) {
console.error('ERROR IN pic_backClick: ' + e);
}
},
//Added by Jammi Dee 05/05/2013
pic_homeClick: function(inSender) {
try {
app.pdWaitLoadPage.show();
this.navPgMain.update();
} catch(e) {
console.error('ERROR IN pic_homeClick: ' + e);
}
},
//Added by Jammi Dee 05/05/2013
lblBackClick: function(inSender, inEvent) {
try {
app.pdWaitLoadPage.show();
this.navPgMain.update();
} catch(e) {
console.error('ERROR IN lblBackClick: ' + e);
}
},
//Added by Jammi Dee 05/28/2013
pic_CreateDirClick: function(inSender) {
try {
this.svarCreateMissingFolder.update();
} catch(e) {
console.error('ERROR IN pic_CreateDirClick: ' + e);
}
},
//Added by Jammi Dee 05/28/2013
svarCreateMissingFolderResult: function(inSender, inDeprecated) {
try {
alert("Missing folders has been recreated!");
} catch(e) {
console.error('ERROR IN svarCreateMissingFolderResult: ' + e);
}
},
_end: 0
});

PgMainToolsWorkDir.widgets = {
varOps: ["wm.Variable", {"type":"StringData"}, {}],
navPgMain: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMain\"","targetProperty":"pageName"}, {}]
}]
}]
}],
tmrTime: ["wm.Timer", {"delay":1000}, {"onTimerFire":"tmrTimeTimerFire"}],
navPgMainTools: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMainTools\"","targetProperty":"pageName"}, {}]
}]
}]
}],
svarMediaTempDirList: ["wm.ServiceVariable", {"operation":"listTempDir","service":"svcMediaLibFunction"}, {}, {
input: ["wm.ServiceInput", {"type":"listTempDirInputs"}, {}]
}],
svarMediaTempDirListTree: ["wm.ServiceVariable", {"operation":"listTempDirForObjectTree","service":"svcMediaLibFunction"}, {"onResult":"svarMediaTempDirListTreeResult"}, {
input: ["wm.ServiceInput", {"type":"listTempDirForObjectTreeInputs"}, {}]
}],
svarMediaUploadDirListTree: ["wm.ServiceVariable", {"operation":"listUploadDirForObjectTree","service":"svcMediaLibFunction"}, {"onResult":"svarMediaUploadDirListTreeResult"}, {
input: ["wm.ServiceInput", {"type":"listUploadDirForObjectTreeInputs"}, {}]
}],
svarDeleteTempFolder: ["wm.ServiceVariable", {"operation":"deleteTempDir","service":"svcMediaLibFunction"}, {}, {
input: ["wm.ServiceInput", {"type":"deleteTempDirInputs"}, {}]
}],
svarDeleteUploadFolder: ["wm.ServiceVariable", {"operation":"deleteUploadDir","service":"svcMediaLibFunction"}, {}, {
input: ["wm.ServiceInput", {"type":"deleteUploadDirInputs"}, {}]
}],
svarCreateMissingFolder: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"makeSystemDir","service":"svcMediaLibFunction"}, {"onResult":"svarCreateMissingFolderResult"}, {
input: ["wm.ServiceInput", {"type":"makeSystemDirInputs"}, {}]
}],
pdLoading: ["wm.PageDialog", {"desktopHeight":"100px","height":"100px","hideControls":true,"pageName":"Main","width":"280px"}, {}],
ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","corner":"cr","modal":false,"title":"Configuration Help"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgMainToolsWorkDir.html"}, {}]
}],
buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnClose: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddPgMainConfigHelp.hide"}]
}]
}],
pdAbout: ["wm.PageDialog", {"desktopHeight":"341px","height":"341px","noEscape":true,"noMaxify":true,"noMinify":true,"pageName":"PgAbout","width":"616px"}, {}],
ddSelectEntity: ["wm.DesignableDialog", {"buttonBarId":"buttonBar1","containerWidgetId":"containerWidget1","title":"Select Entity","width":"800px"}, {"onShow":"ddSelectEntityShow"}, {
containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
dgDataSelect: ["wm.DojoGrid", {"height":"100%","localizationStructure":{},"margin":"4"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarSelectEntity","targetProperty":"dataSet"}, {}]
}]
}]
}],
buttonBar1: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnSelectSelect: ["wm.Button", {"caption":"Select","margin":"4"}, {"onclick":"btnSelectSelectClick"}],
btnSelectClose: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddSelectEntity.hide"}]
}]
}],
pnlLayoutMain: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"horizontalAlign":"left","verticalAlign":"top"}, {}, {
pnlHeader: ["wm.Panel", {"height":"45px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
imgLogo: ["wm.Picture", {"height":"45px","source":"resources/images/logos/waveerplogo.jpg","width":"275px"}, {}],
pnlTitle: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
lblTitle: ["wm.Label", {"align":"right","autoSizeHeight":true,"caption":"Wave ERP System","height":"23px","padding":"4","singleLine":false,"width":"600px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}],
pnlMenuBar: ["wm.Panel", {"height":"20px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
pnlSubMenu: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"70%"}, {}, {
lblBack: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"caption":"Back","height":"100%","padding":"4","width":"40px"}, {"onclick":"lblBackClick"}, {
format: ["wm.DataFormatter", {}, {}]
}]
}],
pnlSystemInfo: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"30%"}, {}, {
lbldDate: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Bold"]},"autoSizeWidth":true,"caption":"DATE:","height":"100%","padding":"4","width":"48px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblDate: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_Yellow"]},"autoSizeWidth":true,"caption":"- - -","height":"100%","padding":"4","width":"33px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblBorder2: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"align":"center","caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblEntityLabel: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Bold"]},"caption":"ENTITY: ","height":"100%","padding":"4","width":"55px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblEntity: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_Yellow"]},"autoSizeWidth":true,"height":"100%","padding":"4","width":"40px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblBorder1: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"align":"center","caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblUserInfo: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"autoSizeWidth":true,"height":"100%","padding":"4","width":"35px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}],
pnlMenuButton: ["wm.HeaderContentPanel", {"border":"0","height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
pnlMenuButtonLeft: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"50%"}, {}, {
pic_home: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Home","source":"resources/images/buttons/home0224.png","width":"24px"}, {"onclick":"pic_homeClick"}],
Sep01: ["wm.Spacer", {"height":"24px","width":"5px"}, {}],
pic_back: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Back","source":"resources/images/buttons/arrowleft24.png","width":"24px"}, {"onclick":"pic_backClick"}],
pic_CreateDir: ["wm.Picture", {"height":"28px","hint":"Create missing system folder","source":"resources/images/buttons/newfolder24.png","width":"30px"}, {"onclick":"pic_CreateDirClick"}],
pic_refresh: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Reload Folders","source":"resources/images/buttons/refresh24.png","width":"30px"}, {"onclick":"pic_refreshClick"}],
pic_delete: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Clean Folders","source":"resources/images/buttons/Recyclebin24.png","width":"30px"}, {"onclick":"pic_deleteClick"}]
}],
pnlMenuButtonRight: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
lblTime: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_LightBlue","wm_TextAlign_Center","wm_FontFamily_Verdana","wm_TextDecoration_Bold","wm_FontSizePx_12px"]},"autoSizeHeight":true,"caption":"00:00:00","padding":"4","singleLine":false,"width":"74px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
pic_help: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Help","source":"resources/images/buttons/helpred24.png","width":"24px"}, {"onclick":"ddPgMainConfigHelp.show"}],
pic_about: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"About","source":"resources/images/buttons/aboutblue24.png","width":"24px"}, {"onclick":"pdAbout.show"}]
}]
}],
spacer1: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"100%"}, {}, {
pnl: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
lblFolderDesc: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"caption":"This is a temporary folder management page. Undeleted temporary files can be deleted here. This is a cross-Entity process.","padding":"4","width":"100%"}, {}]
}],
pnlMain: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
pnlLeft: ["wm.FancyPanel", {"title":"Upload Folder","width":"50%"}, {}, {
otUpload: ["wm.ObjectTree", {"height":"100%"}, {}]
}],
pnlRight: ["wm.FancyPanel", {"title":"Temporary Folder","width":"50%"}, {}, {
otTemp: ["wm.ObjectTree", {"height":"100%"}, {}]
}]
}]
}],
pnlFooter: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel","wm_BackgroundChromeBar_LightBlue"]},"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
lblFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"...","height":"20px","padding":"4","styles":{"backgroundGradient":{"direction":"horizontal","startColor":"#03036d","endColor":"#d8cbf2","colorStop":31}},"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}]
};

PgMainToolsWorkDir.prototype._cssText = 'body.tundra .PgMainToolsWorkDir .wmlayout .PgMainToolsWorkDir-pnlHeader {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainToolsWorkDir .wmlayout .PgMainToolsWorkDir-pnlTitle {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainToolsWorkDir .wmlayout .PgMainToolsWorkDir-lblTitle {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:14pt;\
}\
body.tundra .PgMainToolsWorkDir .wmlayout .PgMainToolsWorkDir-pnlMenuBar {\
background-color:#00008B;\
}\
body.tundra .PgMainToolsWorkDir .wmlayout .PgMainToolsWorkDir-pnlFooter {\
background-color:#00008B;\
}\
body.tundra .PgMainToolsWorkDir .wmlayout .PgMainToolsWorkDir-txtUserId {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainToolsWorkDir .PgMainToolsWorkDir-pnlLayoutMain.wmlayout {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainToolsWorkDir .wmlayout .PgMainToolsWorkDir-txtPassword {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainToolsWorkDir .wmlayout .PgMainToolsWorkDir-lblManageTicket {\
font-family: Tahoma;\
}\
body.tundra .PgMainToolsWorkDir .wmlayout .PgMainToolsWorkDir-lblUserInfo {\
font-family:Tahoma;\
}\
body.tundra .PgMainToolsWorkDir .wmlayout .PgMainToolsWorkDir-lblBorder {\
font-family:Tahoma;\
}\
body.tundra .PgMainToolsWorkDir .wmlayout .PgMainToolsWorkDir-lblLogout {\
font-family:Tahoma;\
}\
body.tundra .PgMainToolsWorkDir .wmlayout .PgMainToolsWorkDir-lblSep {\
font-family:Tahoma;\
}\
body.tundra .PgMainToolsWorkDir .wmlayout .PgMainToolsWorkDir-lblManageUser {\
font-family:Tahoma;\
}\
body.tundra .PgMainToolsWorkDir .wmlayout .PgMainToolsWorkDir-pnlBody {\
}\
body.tundra .PgMainToolsWorkDir .wmlayout .PgMainToolsWorkDir-lblManageLookUp {\
font-family:Tahoma;\
}\
';
PgMainToolsWorkDir.prototype._htmlText = '';