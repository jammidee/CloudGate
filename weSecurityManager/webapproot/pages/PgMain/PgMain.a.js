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
* Special thanks to Francis Limbo and Rea Javier for the initial codes
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
*
*/
dojo.declare("PgMain", wm.Page, {
"preferredDevice": "desktop",
linkrea  : "http://" + window.location.hostname + ":" + window.location.port + "/tksLookUp",
linkjammi: "http://" + window.location.hostname + ":" + window.location.port + "/tksTicket",
linklimbo: "http://" + window.location.hostname + ":" + window.location.port + "/tksUserMgt",
start: function() {
try {
// Added by JMD 06/03/2012
// Set up the date for the header here
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
if(dd<10){dd='0'+dd;}
if(mm<10){mm='0'+mm;}
var ctoday = mm+'/'+dd+'/'+yyyy;
this.lblDate.setCaption(ctoday);
this.lblUserInfo.setCaption(app.varUserInfo.getValue("dataValue"));
this.lblTitle.setCaption("Wave ERP Copyright 2012");
this.lblEntity.setCaption(app.varEntity.getValue("dataValue"));
app.varModuleId.setValue("dataValue","MDLMAIN");
// Added by Jammi Dee 04/28/2012
this.initApplication();
//Added by Jammi Dee 11/25/2012
//alert( app.varSessionId.getValue("dataValue") );
app.svarUpdateSessionApp.setValue("input.pJuid",app.varSessionId.getValue("dataValue"));
app.svarUpdateSessionApp.update();
////////////////////////////////////////////////////////////////
// Check if the user have a valid Party ID
// Activate this only if it is required that the User must have
// a valid Employee Information requirements.
////////////////////////////////////////////////////////////////
//this.svarEmployeeInfo.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
//this.svarEmployeeInfo.setValue("input.pField","PARTYID" );
//this.svarEmployeeInfo.update();
// Initialize the application access.
// Added by Jammi Dee 11/04/2012
this.initAccess();
// Added by Jammi Dee 05/31/2012
// This is how a Counter is read
this.svarReadCounter.setValue("input.pPrefix",app.varAppPrefix.getValue("dataValue"));
this.svarReadCounter.setValue("input.pKey","LOG");
this.svarReadCounter.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
this.svarReadCounter.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
this.svarReadCounter.update();
/**
* READ the GLOBAL Registry here to control the settings of the application
* Create by: Jammi Dee
* Date : 05/31/2012
*/
//-------------------------------
// LOGGING TO FILE
// Added by Jammi Dee 05/31/2012
// Read the log to file status
//-------------------------------
this.svarReadFromRegistryLogging.setValue("input.pAppId","NA");
this.svarReadFromRegistryLogging.setValue("input.pEntity","NA");
this.svarReadFromRegistryLogging.setValue("input.pUserId","NA");
this.svarReadFromRegistryLogging.setValue("input.pVarname","LOGTOFILE");
this.svarReadFromRegistryLogging.setValue("input.pDefa","OFF");
this.svarReadFromRegistryLogging.update();
/**
* Detect if the user is about to close the page. Warn
* the user about this activity.
* Added by Jammi Dee 07/08/2012
*/
dojo.connect(window, "onbeforeunload", this, "windowUnload");
app.pdWaitLoadPage.hide();
} catch (e) {
app.toastError(this.name + ".start() Failed: " + e.toString());
}
},
/*
* 04/28/2012 - Jammi Dee
* Initialize the template variables here
*/
initApplication: function() {
this.lblTitle.setCaption("Main : " + app.varAppName.getValue("dataValue") + " : " + app.varAppVersion.getValue("dataValue"));
this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
},
/**
* Detect if the user is about to close the page. Warn
* the user about this activity.
* Added by Jammi Dee 07/08/2012
*/
windowUnload: function(e) {
var mesg =  "Are you sure you want to leave?";
// For IE
e.returnValue = mesg;
// For all others
return mesg;
},
// Added by Jammi Dee 11/04/2012
initAccess: function() {
//Initially hide all controls
this.hideAllControls();
//Load the original rights given to the user
this.reloadRights();
},
// Added by Jammi Dee 11/04/2012
reloadRights: function() {
var rights;
//alert(app.varArrayRights.getCount());
this.varHasRight.setValue("dataValue", "NO");
for (i = 0; i < app.varArrayRights.getCount(); i++) {
rights = app.varArrayRights.getItem(i).getValue("dataValue");
//alert( rights + " = = = " + app.varAppPrefix.getValue("dataValue") + "USERADMIN" + "|" +  app.varAppId.getValue("dataValue") );
if( rights === app.varAppPrefix.getValue("dataValue") + "USERMENU" + "|" +  app.varAppId.getValue("dataValue") ){
this.lblManageUser.setShowing(true);
this.lblSep2.setShowing(true);
} else if(rights === app.varAppPrefix.getValue("dataValue") + "PARTYMENU" + "|" +  app.varAppId.getValue("dataValue") ){
this.lblParty.setShowing(true);
this.lblSep6.setShowing(true);
} else if(rights === app.varAppPrefix.getValue("dataValue") + "MAINTENANCEMENU" + "|" +  app.varAppId.getValue("dataValue") ){
this.lblMaintenance.setShowing(true);
this.lblSep3.setShowing(true);
} else if(rights === app.varAppPrefix.getValue("dataValue") + "REPORTMENU" + "|" +  app.varAppId.getValue("dataValue") ){
this.lblReport.setShowing(true);
this.lblSep4.setShowing(true);
} else if(rights === app.varAppPrefix.getValue("dataValue") + "CONFIGMENU" + "|" +  app.varAppId.getValue("dataValue") ){
this.lblConfigure2.setShowing(true);
this.lblSep5.setShowing(true);
} else if(rights === app.varAppPrefix.getValue("dataValue") + "TOOLSMENU" + "|" +  app.varAppId.getValue("dataValue") ){
this.lblTools.setShowing(true);
}
}
},
// Added by Jammi Dee 11/04/2012
hideAllControls: function() {
//Hide all the menu initially
this.lblManageUser.setShowing(false);
this.lblSep2.setShowing(false);
this.lblParty.setShowing(false);
this.lblSep6.setShowing(false);
this.lblMaintenance.setShowing(false);
this.lblSep3.setShowing(false);
this.lblReport.setShowing(false);
this.lblSep4.setShowing(false);
this.lblConfigure2.setShowing(false);
this.lblSep5.setShowing(false);
this.lblTools.setShowing(false);
},
//Added by Jammi Dee 11/25/2012
lblLogoutClick: function(inSender, inEvent) {
try {
var response = confirm("Are you sure you want to logout?");
if (response) {
//Added by Jammi Dee 11/14/2012
app.svarLogoutApp.setValue("input.pJuid", app.varSessionId.getValue("dataValue") );
app.svarLogoutApp.update();
}
} catch (e) {
console.error('ERROR IN lblLogoutClick: ' + e);
}
},
// Added by Jammi Dee 05/31/2012
// Get the global logging to file variable to memory
svarReadFromRegistryLoggingResult: function(inSender, inDeprecated) {
try {
app.varLogToFile.setValue("dataValue", inSender.getValue("dataValue"));
} catch(e) {
console.error('ERROR IN svarReadFromRegistryLoggingResult: ' + e);
}
},
lblManageUserClick: function(inSender, inEvent) {
try {
app.pdWaitLoadPage.show();
this.navPgMainUser.update();
} catch(e) {
console.error('ERROR IN lblEntityMaintenanceClick: ' + e);
}
},
svarPara01Result: function(inSender, inDeprecated) {
try {
this.pdLoading.setShowing(true);
if(this.varOps.getValue("dataValue") == "tksUserMgt"){
window.location.href = this.linklimbo;
}else if(this.varOps.getValue("dataValue") == "tksLookUp"){
window.location.href = this.linkrea;
}else if(this.varOps.getValue("dataValue") == "tksTicket"){
window.location.href = this.linkjammi;
}
} catch(e) {
console.error('ERROR IN svarPara01Result: ' + e);
}
},
lblManageLookUpClick: function(inSender, inEvent) {
try {
this.svarPara01.setValue("input.pIdNum",app.varUserId.getValue("dataValue"));
this.svarPara01.setValue("input.pPassword",app.varPassword.getValue("dataValue"));
this.svarPara01.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
this.svarPara01.update();
this.varOps.setValue("dataValue","tksLookUp");
} catch(e) {
console.error('ERROR IN lblManageLookUpClick: ' + e);
}
},
lblManageTicketClick: function(inSender, inEvent) {
try {
this.svarPara01.setValue("input.pIdNum",app.varUserId.getValue("dataValue"));
this.svarPara01.setValue("input.pPassword",app.varPassword.getValue("dataValue"));
this.svarPara01.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
this.svarPara01.update();
this.varOps.setValue("dataValue","tksTicket");
} catch(e) {
console.error('ERROR IN lblManageTicketClick: ' + e);
}
},
lblRoleClick: function(inSender, inEvent) {
try {
//this.lblManageLookUpClick(inSender, inEvent);
} catch(e) {
console.error('ERROR IN lblManageLookUp1Click: ' + e);
}
},
// Added by Jammi Dee 05/30/2012
svarReadCounterResult: function(inSender, inDeprecated) {
try {
this.lblCounter.setCaption( inSender.getValue("dataValue") );
} catch(e) {
console.error('ERROR IN svarReadCounterResult: ' + e);
}
},
//Added by Jammi Dee 11/25/2012
pic_exitClick: function(inSender) {
try {
this.lblLogoutClick( inSender );
} catch(e) {
console.error('ERROR IN pic_exitClick: ' + e);
alert( 'ERROR IN pic_exitClick: ' + e );
}
},
//Added by Jammi Dee 01/14/2013
svarEmployeeInfoResult: function(inSender, inDeprecated) {
try {
if( inSender.getValue("dataValue") == "NULL" ){
alert("Logging you out. This system requires an Employee Party!");
//Added by Jammi Dee 01/14/2013
app.svarLogoutApp.setValue("input.pJuid", app.varSessionId.getValue("dataValue") );
app.svarLogoutApp.update();
} else {
app.varPartyId.setValue("dataValue", inSender.getValue("dataValue") );
}
} catch(e) {
console.error('ERROR IN svarEmployeeInfoResult: ' + e);
alert( 'ERROR IN svarEmployeeInfoResult: ' + e );
}
},
//Added by Jammi Dee 03/23/2013
lblPartyClick: function(inSender, inEvent) {
try {
app.pdWaitLoadPage.show();
this.navPgMainParty.update();
} catch(e) {
console.error('ERROR IN lblPartyClick: ' + e);
}
},
//Added by Jammi Dee 03/23/2013
lblMaintenanceClick: function(inSender, inEvent) {
try {
app.pdWaitLoadPage.show();
this.navPgMainMaintenance.update();
} catch(e) {
console.error('ERROR IN lblMaintenanceClick: ' + e);
}
},
//Added by Jammi Dee 03/23/2013
lblReportClick: function(inSender, inEvent) {
try {
app.pdWaitLoadPage.show();
this.navPgMainReport.update();
} catch(e) {
console.error('ERROR IN lblReportClick: ' + e);
}
},
//Added by Jammi Dee 03/23/2013
lblConfigure2Click: function(inSender, inEvent) {
try {
app.pdWaitLoadPage.show();
this.navPgMainConfig.update();
} catch(e) {
console.error('ERROR IN lblConfigure2Click: ' + e);
}
},
_end: 0
});

PgMain.widgets = {
svarAuthenticate: ["wm.ServiceVariable", {"operation":"authenticate","service":"svcLogin"}, {"onResult":"svarAuthenticateResult"}, {
input: ["wm.ServiceInput", {"type":"authenticateInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":false,"source":"txtPassword.dataValue","targetProperty":"pPass"}, {}],
wire1: ["wm.Wire", {"expression":false,"source":"txtUserId.dataValue","targetProperty":"pUserId"}, {}]
}]
}]
}],
navConfig: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgConfig\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navBackToLogin: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgLogin\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navEntity: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgWaiting\"","source":false,"targetProperty":"pageName"}, {}]
}]
}]
}],
svarPara01: ["wm.ServiceVariable", {"operation":"saveToRegistry","service":"svcRegistry"}, {"onResult":"svarPara01Result"}, {
input: ["wm.ServiceInput", {"type":"saveToRegistryInputs"}, {}]
}],
varOps: ["wm.Variable", {"type":"StringData"}, {}],
navPgRole: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgRole\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navPgManageUser: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgManageUser\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navPgMainConfig: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMainConfig\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navPgMainMaintenance: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMainMaintenance\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navPgMainReport: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMainReport\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navPgMainTools: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMainTools\"","targetProperty":"pageName"}, {}]
}]
}]
}],
svarReadCounter: ["wm.ServiceVariable", {"operation":"readCounter","service":"svcRegistry"}, {"onResult":"svarReadCounterResult"}, {
input: ["wm.ServiceInput", {"type":"readCounterInputs"}, {}]
}],
svarReadFromRegistryLogging: ["wm.ServiceVariable", {"operation":"readRegistryDefault","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryLoggingResult"}, {
input: ["wm.ServiceInput", {"type":"readRegistryDefaultInputs"}, {}]
}],
varHasRight: ["wm.Variable", {"type":"StringData"}, {}],
navPgMainParty: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMainParty\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navPgMainUserProfile: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMainUserProfile\"","targetProperty":"pageName"}, {}]
}]
}]
}],
svarEmployeeInfo: ["wm.ServiceVariable", {"operation":"getUserValue","service":"svcLogin"}, {"onResult":"svarEmployeeInfoResult"}, {
input: ["wm.ServiceInput", {"type":"getUserValueInputs"}, {}]
}],
navPgMainUser: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMainUser\"","targetProperty":"pageName"}, {}]
}]
}]
}],
pdLoading: ["wm.PageDialog", {"desktopHeight":"100px","height":"100px","hideControls":true,"pageName":"Main","width":"280px"}, {}],
ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","title":"Main Help"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgMain.html"}, {}]
}],
buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnClose: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddPgMainConfigHelp.hide"}]
}]
}],
pdAbout: ["wm.PageDialog", {"desktopHeight":"341px","height":"341px","noEscape":true,"noMaxify":true,"noMinify":true,"pageName":"PgAbout","width":"616px"}, {}],
pnlLayoutMain: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"horizontalAlign":"left","verticalAlign":"top"}, {}, {
pnlHeader: ["wm.Panel", {"height":"45px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
imgLogo: ["wm.Picture", {"height":"45px","source":"resources/images/logos/waveerplogo.jpg","width":"275px"}, {}],
pnlTitle: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","styles":{"backgroundImage":"url(resources/images/logos/waveerpbar.jpg)"},"verticalAlign":"middle","width":"100%"}, {}, {
lblTitle: ["wm.Label", {"align":"right","autoSizeHeight":true,"caption":"Ticket System","height":"36px","padding":"4","singleLine":false,"width":"600px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}],
pnlMenuBar: ["wm.Panel", {"height":"20px","horizontalAlign":"right","layoutKind":"left-to-right","styles":{"backgroundColor":"#00008b"},"verticalAlign":"top","width":"100%"}, {}, {
pnlSubMenu: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"50%"}, {}, {
lblManageTicket: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Manage Ticket","height":"100%","padding":"4","showing":false,"width":"92px"}, {"onclick":"lblManageTicketClick"}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblSep: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"align":"center","caption":"|","height":"100%","padding":"4","showing":false,"width":"16px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblManageUser: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"align":"center","autoSizeWidth":true,"caption":"Manage Users","height":"100%","padding":"4","width":"90px"}, {"onclick":"lblManageUserClick"}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblSep1: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"align":"center","caption":"|","height":"100%","padding":"4","showing":false,"width":"16px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblManageLookUp: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Manage Lookup","height":"100%","padding":"4","showing":false,"width":"99px"}, {"onclick":"lblManageLookUpClick"}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblSep2: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblParty: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_Mouse_pointer","wm_TextDecoration_Underline"]},"autoSizeWidth":true,"caption":"Manage Parties","height":"100%","padding":"4","width":"97px"}, {"onclick":"lblPartyClick"}],
lblSep6: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblMaintenance: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Maintenance","height":"100%","padding":"4","width":"81px"}, {"onclick":"lblMaintenanceClick"}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblSep3: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblReport: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Report","height":"100%","padding":"4","width":"48px"}, {"onclick":"lblReportClick"}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblSep4: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblConfigure2: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Configure","height":"100%","padding":"4","width":"66px"}, {"onclick":"lblConfigure2Click"}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblSep5: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblTools: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Tools","height":"100%","padding":"4","width":"39px"}, {"onclick":"navPgMainTools"}, {
format: ["wm.DataFormatter", {}, {}]
}]
}],
pnlSystemInfo: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
lbldDate: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Bold"]},"autoSizeWidth":true,"caption":"DATE:","height":"100%","padding":"4","width":"48px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblDate: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_Yellow"]},"autoSizeWidth":true,"caption":"- - -","height":"100%","padding":"4","width":"33px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblBorder3: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"align":"center","caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblEntityLabel: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Bold"]},"caption":"ENTITY: ","height":"100%","padding":"4","width":"55px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblEntity: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_Yellow"]},"autoSizeWidth":true,"height":"100%","padding":"4","width":"40px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblBorder2: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"align":"center","caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblUserInfo: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_Mouse_pointer","wm_TextDecoration_Underline"]},"autoSizeWidth":true,"height":"100%","padding":"4","width":"40px"}, {"onclick":"navPgMainUserProfile"}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblBorder1: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"align":"center","caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblHelp: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Underline","wm_FontColor_White"]},"autoSizeWidth":true,"caption":"Help","height":"100%","padding":"4","width":"35px"}, {}, {
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
pnlMenuButton: ["wm.HeaderContentPanel", {"border":"0","height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
pnlMenuButtonLeft: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
pic_exit: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Exit App","source":"resources/images/buttons/exit24.png","width":"24px"}, {"onclick":"pic_exitClick"}]
}],
pnlMenuButtonRight: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
lblCounterLabel: ["wm.Label", {"_classes":{"domNode":["wm_FontFamily_Arial","wm_FontColor_Blue","wm_TextDecoration_Bold","wm_FontSizePx_14px"]},"align":"left","caption":"Access Count:","height":"100%","padding":"4","width":"106px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblCounter: ["wm.Label", {"_classes":{"domNode":["wm_FontFamily_Arial","wm_FontColor_Evergreen","wm_TextDecoration_Bold","wm_FontSizePx_14px"]},"align":"right","caption":"0000","height":"100%","padding":"4","width":"112px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
pic_help: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Help","source":"resources/images/buttons/helpred24.png","width":"24px"}, {"onclick":"ddPgMainConfigHelp.show"}],
pic_about: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"About","source":"resources/images/buttons/aboutblue24.png","width":"24px"}, {"onclick":"pdAbout.show"}]
}]
}],
spacer1: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
pnlBody: ["wm.Panel", {"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","styles":{"backgroundImage":"url(resources/images/logos/wavebgnd.gif) !important; background-repeat:no-repeat !important;"},"verticalAlign":"middle","width":"100%"}, {}, {
pnlIcons: ["wm.Panel", {"fitToContentHeight":true,"fitToContentWidth":true,"height":"292px","horizontalAlign":"center","verticalAlign":"middle","width":"606px"}, {}, {
pnlMain1: ["wm.Panel", {"fitToContentHeight":true,"fitToContentWidth":true,"height":"130px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"604px"}, {}, {
pic_manageuser: ["wm.Picture", {"height":"128px","hint":"Manage User","source":"resources/images/buttons/manageuser128Free.png","width":"128px"}, {"onclick":"navPgMainUser"}],
spacer5: ["wm.Spacer", {"height":"48px","width":"30px"}, {}],
pic_manageparties: ["wm.Picture", {"height":"128px","hint":"Manage Parties","source":"resources/images/buttons/manageparties.png","width":"128px"}, {"onclick":"navPgMainParty"}],
spacer6: ["wm.Spacer", {"height":"48px","width":"30px"}, {}],
pic_free01: ["wm.Picture", {"height":"128px","hint":"Lookup menu","source":"resources/images/buttons/lookup128f.png","width":"128px"}, {}],
spacer7: ["wm.Spacer", {"height":"48px","width":"30px"}, {}],
pic_Free02: ["wm.Picture", {"height":"128px","hint":"Go to cofiguration menu","width":"128px"}, {}]
}],
spacer8: ["wm.Spacer", {"height":"30px","width":"47px"}, {}],
pnlMain: ["wm.Panel", {"fitToContentHeight":true,"fitToContentWidth":true,"height":"130px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"604px"}, {}, {
pic_maintenance: ["wm.Picture", {"height":"128px","hint":"Go to maintenance","source":"resources/images/buttons/maintenance128.png","width":"128px"}, {"onclick":"navPgMainMaintenance"}],
spacer2: ["wm.Spacer", {"height":"48px","width":"30px"}, {}],
pic_Reports: ["wm.Picture", {"height":"128px","hint":"Go to report page","source":"resources/images/buttons/report128.png","width":"128px"}, {"onclick":"navPgMainReport"}],
spacer3: ["wm.Spacer", {"height":"48px","width":"30px"}, {}],
pic_Config: ["wm.Picture", {"height":"128px","hint":"Go to cofiguration menu","source":"resources/images/buttons/settingsgear128f.png","width":"128px"}, {"onclick":"navPgMainConfig"}],
spacer4: ["wm.Spacer", {"height":"48px","width":"30px"}, {}],
pic_Tools: ["wm.Picture", {"height":"128px","hint":"Go to tools menu","source":"resources/images/buttons/tools128f.png","width":"128px"}, {"onclick":"navPgMainTools"}]
}]
}]
}],
pnlFooter: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundChromeBar_LightBlue","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
lblFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"...","height":"20px","padding":"4","styles":{"backgroundGradient":{"direction":"horizontal","startColor":"#03036d","endColor":"#d8cbf2","colorStop":31}},"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}]
};

PgMain.prototype._cssText = 'body.tundra .PgMain .wmlayout .PgMain-pnlHeader {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMain .wmlayout .PgMain-pnlTitle {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMain .wmlayout .PgMain-lblTitle {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:14pt;\
}\
body.tundra .PgMain .wmlayout .PgMain-pnlMenuBar {\
background-color:#00008B;\
}\
body.tundra .PgMain .wmlayout .PgMain-pnlFooter {\
background-color:#00008B;\
}\
body.tundra .PgMain .wmlayout .PgMain-txtUserId {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMain .PgMain-pnlLayoutMain.wmlayout {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMain .wmlayout .PgMain-txtPassword {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMain .wmlayout .PgMain-lblManageTicket {\
font-family: Tahoma;\
}\
body.tundra .PgMain .wmlayout .PgMain-lblUserInfo {\
font-family:Tahoma;\
}\
body.tundra .PgMain .wmlayout .PgMain-lblBorder {\
font-family:Tahoma;\
}\
body.tundra .PgMain .wmlayout .PgMain-lblLogout {\
font-family:Tahoma;\
}\
body.tundra .PgMain .wmlayout .PgMain-lblSep {\
font-family:Tahoma;\
}\
body.tundra .PgMain .wmlayout .PgMain-lblManageUser {\
font-family:Tahoma;\
}\
body.tundra .PgMain .wmlayout .PgMain-pnlBody {\
background-image:url(resources/images/logos/wavebgnd.gif) !important;\
background-repeat:no-repeat !important;\
}\
body.tundra .PgMain .wmlayout .PgMain-lblManageLookUp {\
font-family:Tahoma;\
}\
';
PgMain.prototype._htmlText = '';