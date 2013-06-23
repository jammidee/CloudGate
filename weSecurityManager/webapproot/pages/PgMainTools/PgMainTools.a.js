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
dojo.declare("PgMainTools", wm.Page, {
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
// Added by Jammi Dee 06/14/2012
app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarLogging.setValue("input.pMsg","Loaded Tools Menu.");
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
this.lblTitle.setCaption("Tools : " + app.varAppName.getValue("dataValue") + " : " + app.varAppVersion.getValue("dataValue"));
this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
},
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
//Added by Jammi Dee 05/05/2013
lblWorkDirClick: function(inSender, inEvent) {
try {
app.pdWaitLoadPage.show();
this.navPgMainToolsWorkDir.update();
} catch(e) {
console.error('ERROR IN lblWorkDirClick: ' + e);
}
},
lblMediaClick: function(inSender, inEvent) {
try {
app.pdWaitLoadPage.show();
this.navPgMainToolsMedia.update();
} catch(e) {
console.error('ERROR IN lblMediaClick: ' + e);
}
},
lblTimeClick: function(inSender, inEvent) {
try {
/**
* Added by Jammi Dee 06/09/2013
*/
var rights;
this.varHasRight.setValue("dataValue", "NO");
for (i = 0; i < app.varArrayRights.getCount(); i++) {
rights = app.varArrayRights.getItem(i).getValue("dataValue");
if( rights == app.varAppPrefix.getValue("dataValue") + "TOOLSTIMERIGHTS" + "|" +  app.varAppId.getValue("dataValue") ){
this.varHasRight.setValue("dataValue", "YES");
}
}
// Act on the determined rights
//if( this.varHasRight.getValue("dataValue") == "YES"){
app.pdWaitLoadPage.show();
this.navPgMainToolsTime.update();
//} else {
//    alert("You havew no rights on this page. Please consult your system administrator.");
//}
} catch(e) {
console.error('ERROR IN lblTimeClick: ' + e);
}
},
lblQRCodeGenClick: function(inSender, inEvent) {
try {
app.pdWaitLoadPage.show();
this.navPgMainToolsQRCode.update();
} catch(e) {
console.error('ERROR IN lblQRCodeGenClick: ' + e);
}
},
_end: 0
});

PgMainTools.widgets = {
varOps: ["wm.Variable", {"type":"StringData"}, {}],
navPgMain: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMain\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navPgMainToolsMedia: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMainToolsMedia\"","targetProperty":"pageName"}, {}]
}]
}]
}],
varHasRight: ["wm.Variable", {"type":"StringData"}, {}],
navPgMainToolsWorkDir: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMainToolsWorkDir\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navPgMainToolsTime: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMainToolsTime\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navPgMainToolsQRCode: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMainToolsQRCode\"","targetProperty":"pageName"}, {}]
}]
}]
}],
pdLoading: ["wm.PageDialog", {"desktopHeight":"100px","height":"100px","hideControls":true,"pageName":"Main","width":"280px"}, {}],
ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","modal":false,"title":"Tools Help"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgMainTools.html"}, {}]
}],
buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnClose: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddPgMainConfigHelp.hide"}]
}]
}],
pdAbout: ["wm.PageDialog", {"desktopHeight":"341px","height":"341px","noEscape":true,"noMaxify":true,"noMinify":true,"pageName":"PgAbout","width":"616px"}, {}],
pnlLayoutMain: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"horizontalAlign":"left","verticalAlign":"top"}, {}, {
pnlHeader: ["wm.Panel", {"height":"45px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
imgLogo: ["wm.Picture", {"height":"45px","source":"resources/images/logos/waveerplogo.jpg","width":"275px"}, {}],
pnlTitle: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","styles":{"backgroundImage":"url(resources/images/logos/waveerpbar.jpg)"},"verticalAlign":"middle","width":"100%"}, {}, {
lblTitle: ["wm.Label", {"align":"right","autoSizeHeight":true,"caption":"Wave ERP System","padding":"4","singleLine":false,"width":"400px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}],
pnlMenuBar: ["wm.Panel", {"height":"20px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#00008b"},"verticalAlign":"top","width":"100%"}, {}, {
pnlSubMenu: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"50%"}, {}, {
lblBack: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"caption":"Back","height":"100%","padding":"4","width":"40px"}, {"onclick":"lblBackClick"}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblSep01: ["wm.Label", {"_classes":{"domNode":["wm_Mouse_pointer","wm_FontColor_White"]},"caption":"|","height":"100%","padding":"4","width":"14px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblMedia: ["wm.Label", {"_classes":{"domNode":["wm_Mouse_pointer","wm_FontColor_White","wm_TextDecoration_Underline"]},"autoSizeWidth":true,"caption":"Media","height":"100%","padding":"4","width":"43px"}, {"onclick":"lblMediaClick"}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblSep2: ["wm.Label", {"_classes":{"domNode":["wm_Mouse_pointer","wm_FontColor_White"]},"caption":"|","height":"100%","padding":"4","width":"14px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblWorkDir: ["wm.Label", {"_classes":{"domNode":["wm_Mouse_pointer","wm_FontColor_White","wm_TextDecoration_Underline"]},"autoSizeWidth":true,"caption":"Work Dir","height":"100%","padding":"4","width":"60px"}, {"onclick":"lblWorkDirClick"}],
lblSep3: ["wm.Label", {"_classes":{"domNode":["wm_Mouse_pointer","wm_FontColor_White"]},"caption":"|","height":"100%","padding":"4","width":"14px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblTime: ["wm.Label", {"_classes":{"domNode":["wm_Mouse_pointer","wm_FontColor_White","wm_TextDecoration_Underline"]},"autoSizeWidth":true,"caption":"Time","height":"100%","padding":"4","width":"38px"}, {"onclick":"lblTimeClick"}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblSep4: ["wm.Label", {"_classes":{"domNode":["wm_Mouse_pointer","wm_FontColor_White"]},"caption":"|","height":"100%","padding":"4","width":"14px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblQRCodeGen: ["wm.Label", {"_classes":{"domNode":["wm_Mouse_pointer","wm_FontColor_White","wm_TextDecoration_Underline"]},"autoSizeWidth":true,"caption":"QR Code","height":"100%","padding":"4","width":"61px"}, {"onclick":"lblQRCodeGenClick"}, {
format: ["wm.DataFormatter", {}, {}]
}]
}],
pnlSystemInfo: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
lbldDate: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Bold"]},"align":"left","caption":"DATE:","height":"100%","padding":"4","width":"48px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblDate: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_Yellow"]},"caption":"- - -","height":"100%","padding":"4","width":"66px"}, {}, {
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
pic_Tools: ["wm.Picture", {"height":"128px","hint":"Go to cofiguration menu","source":"resources/images/buttons/tools128f.png","width":"128px"}, {}]
}],
pnlFooter: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel","wm_BackgroundChromeBar_LightBlue"]},"height":"20px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
lblFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"...","height":"100%","padding":"4","styles":{"backgroundGradient":{"direction":"horizontal","startColor":"#03036d","endColor":"#d8cbf2","colorStop":31}},"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}]
};

PgMainTools.prototype._cssText = 'body.tundra .PgMainTools .wmlayout .PgMainTools-pnlHeader {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainTools .wmlayout .PgMainTools-pnlTitle {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainTools .wmlayout .PgMainTools-lblTitle {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainTools .wmlayout .PgMainTools-pnlMenuBar {\
background-color:#00008B;\
}\
body.tundra .PgMainTools .wmlayout .PgMainTools-pnlFooter {\
background-color:#00008B;\
}\
body.tundra .PgMainTools .wmlayout .PgMainTools-txtUserId {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainTools .PgMainTools-pnlLayoutMain.wmlayout {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainTools .wmlayout .PgMainTools-txtPassword {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainTools .wmlayout .PgMainTools-lblManageTicket {\
font-family: Tahoma;\
}\
body.tundra .PgMainTools .wmlayout .PgMainTools-lblUserInfo {\
font-family:Tahoma;\
}\
body.tundra .PgMainTools .wmlayout .PgMainTools-lblBorder {\
font-family:Tahoma;\
}\
body.tundra .PgMainTools .wmlayout .PgMainTools-lblLogout {\
font-family:Tahoma;\
}\
body.tundra .PgMainTools .wmlayout .PgMainTools-lblSep {\
font-family:Tahoma;\
}\
body.tundra .PgMainTools .wmlayout .PgMainTools-lblManageUser {\
font-family:Tahoma;\
}\
body.tundra .PgMainTools .wmlayout .PgMainTools-pnlBody {\
background-image:url(resources/images/logos/wavebgnd.gif) !important;\
background-repeat:no-repeat !important;\
}\
body.tundra .PgMainTools .wmlayout .PgMainTools-lblManageLookUp {\
font-family:Tahoma;\
}\
';
PgMainTools.prototype._htmlText = '';