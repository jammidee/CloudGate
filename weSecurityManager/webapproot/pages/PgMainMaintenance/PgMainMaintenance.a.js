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
dojo.declare("PgMainMaintenance", wm.Page, {
"preferredDevice": "desktop",
start: function() {
try {
// Added by JMD 04/11/2012
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
this.lblTitle.setCaption("Wave ERP Copyright 2012");
this.lblEntity.setCaption(app.varEntity.getValue("dataValue"));
app.varModuleId.setValue("dataValue","MDLMAIN");
// Initialize the application - Jammi Dee 03/25/2012
this.initApplication();
//Added by Jammi Dee 11/25/2012
app.svarUpdateSessionApp.setValue("input.pJuid",app.varSessionId.getValue("dataValue"));
app.svarUpdateSessionApp.update();
// Added by Jammi Dee 04/16/2012
// Update the URL background based on the setting
this.svarReadFromRegistry.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
this.svarReadFromRegistry.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
this.svarReadFromRegistry.setValue("input.pUserId","NA"); // Application wide registry
this.svarReadFromRegistry.setValue("input.pVarname","BGNDURL"); // Background URL
this.svarReadFromRegistry.update();
// Added by Jammi Dee 06/14/2012
app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarLogging.setValue("input.pMsg","Loaded Maintenance Menu.");
app.svarLogging.setValue("input.pModuleId","CONFIG");
app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
app.svarLogging.setValue("input.pProcess","PAGELOAD");
app.svarLogging.setValue("input.pScopeId","NA");
app.svarLogging.setValue("input.pStype","USER");
app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue") );
app.svarLogging.update();
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
this.lblTitle.setCaption("Maintenance : " + app.varAppName.getValue("dataValue") + " : " + app.varAppVersion.getValue("dataValue"));
this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
},
// Added by Jammi Dee 04/17/2012
// Set the URL of the system.
svarReadFromRegistryResult: function(inSender, inDeprecated) {
try {
this.ifraUrl.setSource(inSender.getValue("dataValue"));
} catch(e) {
console.error('ERROR IN svarReadFromRegistryResult: ' + e);
}
},
//Added by Jammi Dee 03/23/2013
lblOrganizationClick: function(inSender, inEvent) {
try {
app.pdWaitLoadPage.show();
this.navPgMainMaintenanceOrg.update();
} catch(e) {
console.error('ERROR IN lblOrganizationClick: ' + e);
}
},
//Added by Jammi Dee 03/23/2013
lblAppListClick: function(inSender, inEvent) {
try {
app.pdWaitLoadPage.show();
this.navPgMainMaintenanceAppList.update();
} catch(e) {
console.error('ERROR IN lblAppListClick: ' + e);
}
},
//Added by Jammi Dee 03/23/2013
lblRegsClick: function(inSender, inEvent) {
try {
app.pdWaitLoadPage.show();
this.navPgMainMaintenanceRegList.update();
} catch(e) {
console.error('ERROR IN lblRegsClick: ' + e);
}
},
lblSessionClick: function(inSender, inEvent) {
try {
app.pdWaitLoadPage.show();
this.navPgMainMaintenanceSession.update();
} catch(e) {
console.error('ERROR IN lblSessionClick: ' + e);
}
},
lblLogsClick: function(inSender, inEvent) {
try {
app.pdWaitLoadPage.show();
this.navPgMainMaintenanceLogList.update();
} catch(e) {
console.error('ERROR IN lblLogsClick: ' + e);
}
},
lblEntityPageClick: function(inSender, inEvent) {
try {
app.pdWaitLoadPage.show();
this.navPgMainMaintenanceEntity.update();
} catch(e) {
console.error('ERROR IN lblEntityPageClick: ' + e);
}
},
lblEntityAsgnClick: function(inSender, inEvent) {
try {
app.pdWaitLoadPage.show();
this.navPgMaintenanceEntityAsgn.update();
} catch(e) {
console.error('ERROR IN lblEntityAsgnClick: ' + e);
}
},
//Added by Jammi Dee 05/05/2013
pic_backClick: function(inSender) {
try {
app.pdWaitLoadPage.show();
this.navPgMain.update();
} catch(e) {
console.error('ERROR IN pic_backClick: ' + e);
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
_end: 0
});

PgMainMaintenance.widgets = {
varOps: ["wm.Variable", {"type":"StringData"}, {}],
navPgMain: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMain\"","targetProperty":"pageName"}, {}]
}]
}]
}],
svarReadFromRegistry: ["wm.ServiceVariable", {"operation":"readRegistry","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryResult"}, {
input: ["wm.ServiceInput", {"type":"readRegistryInputs"}, {}]
}],
navPgMainMaintenanceAppList: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMainMaintenanceApplist\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navPgMainMaintenanceLogList: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMainMaintenanceLoglist\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navPgMainMaintenanceRegList: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMainMaintenanceReglist\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navPgMainMaintenanceEntity: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMainMaintenanceEntity\"","targetProperty":"pageName"}, {}]
}]
}]
}],
varHasRight: ["wm.Variable", {"type":"StringData"}, {}],
navPgMaintenanceEntityAsgn: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMainMaintenanceEntityAsgn\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navPgMainMaintenanceOrg: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMainMaintenanceOrg\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navPgMainMaintenanceSession: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMainMaintenanceSession\"","targetProperty":"pageName"}, {}]
}]
}]
}],
pdLoading: ["wm.PageDialog", {"desktopHeight":"100px","height":"100px","hideControls":true,"pageName":"Main","width":"280px"}, {}],
ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","title":"Maintenance Help"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgMainMaintenance.html"}, {}]
}],
buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnClose: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddPgMainConfigHelp.hide"}]
}]
}],
pdAbout: ["wm.PageDialog", {"desktopHeight":"341px","height":"341px","noEscape":true,"noMaxify":true,"noMinify":true,"pageName":"PgAbout","width":"616px"}, {}],
pnlLayoutMain: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"horizontalAlign":"left","verticalAlign":"top"}, {}, {
pnlHeader: ["wm.Panel", {"height":"45px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
imgLogo: ["wm.Picture", {"height":"45px","source":"resources/images/logos/waveerplogo.jpg","width":"275px"}, {}],
pnlTitle: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","styles":{"backgroundImage":"url(resources/images/logos/waveerpbar.jpg)"},"verticalAlign":"middle","width":"100%"}, {}, {
lblTitle: ["wm.Label", {"align":"right","autoSizeHeight":true,"caption":"Wave ERP System","height":"23px","padding":"4","singleLine":false,"width":"600px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}],
pnlMenuBar: ["wm.Panel", {"height":"20px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#00008b"},"verticalAlign":"top","width":"100%"}, {}, {
pnlSubMenu: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"70%"}, {}, {
lblBack: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"caption":"Back","height":"100%","padding":"4","width":"40px"}, {"onclick":"lblBackClick"}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblSep7: ["wm.Label", {"_classes":{"domNode":["wm_Mouse_pointer","wm_FontColor_White"]},"caption":"|","height":"100%","padding":"4","width":"14px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblOrganization: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"caption":"Organization","height":"100%","padding":"4","width":"83px"}, {"onclick":"lblOrganizationClick"}],
lblSep8: ["wm.Label", {"_classes":{"domNode":["wm_Mouse_pointer","wm_FontColor_White"]},"caption":"|","height":"100%","padding":"4","width":"14px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblAppList: ["wm.Label", {"_classes":{"domNode":["wm_Mouse_pointer","wm_FontColor_White","wm_TextDecoration_Underline"]},"caption":"App List","height":"100%","padding":"4","width":"53px"}, {"onclick":"lblAppListClick"}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblSep2: ["wm.Label", {"_classes":{"domNode":["wm_Mouse_pointer","wm_FontColor_White"]},"caption":"|","height":"100%","padding":"4","width":"14px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblRegs: ["wm.Label", {"_classes":{"domNode":["wm_Mouse_pointer","wm_FontColor_White","wm_TextDecoration_Underline"]},"caption":"Regs List","height":"100%","padding":"4","width":"64px"}, {"onclick":"lblRegsClick"}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblSep3: ["wm.Label", {"_classes":{"domNode":["wm_Mouse_pointer","wm_FontColor_White"]},"caption":"|","height":"100%","padding":"4","width":"14px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblSession: ["wm.Label", {"_classes":{"domNode":["wm_Mouse_pointer","wm_FontColor_White","wm_TextDecoration_Underline"]},"align":"center","autoSizeHeight":true,"caption":"Session","padding":"4","singleLine":false,"width":"57px"}, {"onclick":"lblSessionClick"}],
lblSep5: ["wm.Label", {"_classes":{"domNode":["wm_Mouse_pointer","wm_FontColor_White"]},"caption":"|","height":"100%","padding":"4","width":"14px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblLogs: ["wm.Label", {"_classes":{"domNode":["wm_Mouse_pointer","wm_FontColor_White","wm_TextDecoration_Underline"]},"caption":"Logs","height":"100%","padding":"4","width":"40px"}, {"onclick":"lblLogsClick"}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblSep4: ["wm.Label", {"_classes":{"domNode":["wm_Mouse_pointer","wm_FontColor_White"]},"caption":"|","height":"100%","padding":"4","width":"14px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblEntityPage: ["wm.Label", {"_classes":{"domNode":["wm_Mouse_pointer","wm_FontColor_White","wm_TextDecoration_Underline"]},"caption":"Entity","height":"100%","padding":"4","width":"41px"}, {"onclick":"lblEntityPageClick"}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblSep01: ["wm.Label", {"_classes":{"domNode":["wm_Mouse_pointer","wm_FontColor_White"]},"caption":"|","height":"100%","padding":"4","width":"14px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblEntityAsgn: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Entity Asgn","height":"100%","padding":"4","width":"74px"}, {"onclick":"lblEntityAsgnClick"}]
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
lblUserInfo: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"autoSizeWidth":true,"height":"100%","padding":"4","width":"40px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}],
pnlMenuButton: ["wm.HeaderContentPanel", {"border":"0","height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
pnlMenuButtonLeft: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
pic_back: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Back","source":"resources/images/buttons/arrowleft24.png","width":"24px"}, {"onclick":"pic_backClick"}]
}],
pnlMenuButtonRight: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
pic_help: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Help","source":"resources/images/buttons/helpred24.png","width":"24px"}, {"onclick":"ddPgMainConfigHelp.show"}],
pic_about: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"About","source":"resources/images/buttons/aboutblue24.png","width":"24px"}, {"onclick":"pdAbout.show"}]
}]
}],
spacer1: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
pnlBody: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","styles":{"backgroundImage":"url(resources/images/logos/wavebgnd.gif) !important; background-repeat:no-repeat !important;"},"verticalAlign":"bottom","width":"100%"}, {}, {
pic_maintenance: ["wm.Picture", {"height":"128px","hint":"Maintendance","source":"resources/images/buttons/maintenance128.png","width":"128px"}, {}]
}],
pnlFooter: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel","wm_BackgroundChromeBar_LightBlue"]},"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
lblFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"...","height":"20px","padding":"4","styles":{"backgroundGradient":{"direction":"horizontal","startColor":"#03036d","endColor":"#d8cbf2","colorStop":31}},"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}]
};

PgMainMaintenance.prototype._cssText = 'body.tundra .PgMainMaintenance .wmlayout .PgMainMaintenance-pnlHeader {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainMaintenance .wmlayout .PgMainMaintenance-pnlTitle {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainMaintenance .wmlayout .PgMainMaintenance-lblTitle {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:14pt;\
}\
body.tundra .PgMainMaintenance .wmlayout .PgMainMaintenance-pnlMenuBar {\
background-color:#00008B;\
}\
body.tundra .PgMainMaintenance .wmlayout .PgMainMaintenance-pnlFooter {\
background-color:#00008B;\
}\
body.tundra .PgMainMaintenance .wmlayout .PgMainMaintenance-txtUserId {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainMaintenance .PgMainMaintenance-pnlLayoutMain.wmlayout {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainMaintenance .wmlayout .PgMainMaintenance-txtPassword {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainMaintenance .wmlayout .PgMainMaintenance-lblManageTicket {\
font-family: Tahoma;\
}\
body.tundra .PgMainMaintenance .wmlayout .PgMainMaintenance-lblUserInfo {\
font-family:Tahoma;\
}\
body.tundra .PgMainMaintenance .wmlayout .PgMainMaintenance-lblBorder {\
font-family:Tahoma;\
}\
body.tundra .PgMainMaintenance .wmlayout .PgMainMaintenance-lblLogout {\
font-family:Tahoma;\
}\
body.tundra .PgMainMaintenance .wmlayout .PgMainMaintenance-lblSep {\
font-family:Tahoma;\
}\
body.tundra .PgMainMaintenance .wmlayout .PgMainMaintenance-lblManageUser {\
font-family:Tahoma;\
}\
body.tundra .PgMainMaintenance .wmlayout .PgMainMaintenance-pnlBody {\
background-image:url(resources/images/logos/wavebgnd.gif) !important;\
background-repeat:no-repeat !important;\
}\
body.tundra .PgMainMaintenance .wmlayout .PgMainMaintenance-lblManageLookUp {\
font-family:Tahoma;\
}\
';
PgMainMaintenance.prototype._htmlText = '';