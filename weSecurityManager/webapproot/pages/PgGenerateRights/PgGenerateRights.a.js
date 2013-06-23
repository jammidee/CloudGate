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
dojo.declare("PgGenerateRights", wm.Page, {
"preferredDevice": "desktop",
start: function() {
try {
app.varModuleId.setValue("dataValue", "MDLGENRIGHTS");
this.lblTitle.setCaption("Generate Rights");
var rights;
for (i = 0; i < app.varArrayRights.getCount(); i++) {
rights = app.varArrayRights.getItem(i).getValue("dataValue");
this.checkRights(rights);
}
app.pdWaitLoadPage.hide();
} catch (e) {
app.toastError(this.name + ".start() Failed: " + e.toString());
}
},
checkRights: function(rights) {
var appid = app.varAppId.getValue("dataValue");
var rightid = rights;
switch (rightid){
case "GENERATESUSERMGTRIGHTS" + "|" + appid:
this.btnUsrMgtRights.setShowing(true);
break;
case "GENERATESTKSTKS" + "|" + appid:
this.btnTicketRights.setShowing(true);
break;
case "GENERATESLOOKUP" + "|" + appid:
this.btnLookupRights.setShowing(true);
break;
default:break;
}
},
//Modified by Jammi Dee 11/04/2012
btnUsrMgtRightsClick: function(inSender) {
try {
this.svarGenerateRights.setValue("input.pGenerate", "TKSUSRMGT");
this.svarGenerateRights.update();
this.pdLoading.setShowing(true);
} catch (e) {
console.error('ERROR IN btnUsrMgtRightsClick: ' + e);
}
},
svarGenerateRightsResult: function(inSender, inDeprecated) {
try {
this.pdLoading.setShowing(false);
} catch (e) {
console.error('ERROR IN svarGenerateRightsResult: ' + e);
}
},
btnTicketRightsClick: function(inSender) {
try {
this.svarGenerateRights.setValue("input.pGenerate", "TKSTICKET");
this.svarGenerateRights.update();
this.pdLoading.setShowing(true);
} catch (e) {
console.error('ERROR IN btnUsrMgtRights1Click: ' + e);
}
},
btnLookupRightsClick: function(inSender) {
try {
this.svarGenerateRights.setValue("input.pGenerate", "TKSLOOKUP");
this.svarGenerateRights.update();
this.pdLoading.setShowing(true);
} catch (e) {
console.error('ERROR IN btnUsrMgtRights2Click: ' + e);
}
},
_end: 0
});

PgGenerateRights.widgets = {
svarAuthenticate: ["wm.ServiceVariable", {"operation":"authenticate","service":"svcLogin"}, {"onResult":"svarAuthenticateResult"}, {
input: ["wm.ServiceInput", {"type":"authenticateInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":false,"source":"txtPassword.dataValue","targetProperty":"pPass"}, {}],
wire1: ["wm.Wire", {"expression":false,"source":"txtUserId.dataValue","targetProperty":"pUserId"}, {}]
}]
}]
}],
navAuthenticate: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMain\"","targetProperty":"pageName"}, {}]
}]
}]
}],
svarGenerateRights: ["wm.ServiceVariable", {"operation":"genRights","service":"svcGenerateRights"}, {"onResult":"svarGenerateRightsResult"}, {
input: ["wm.ServiceInput", {"type":"genRightsInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":false,"source":"app.varEntity.dataValue","targetProperty":"pEntityId"}, {}]
}]
}]
}],
navPgRights: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgRights\"","targetProperty":"pageName"}, {}]
}]
}]
}],
pdLoading: ["wm.PageDialog", {"desktopHeight":"100px","footerBorder":"0,0,0,0","height":"100px","hideControls":true,"pageName":"Main","titlebarBorder":"0,0,0,0","width":"280px"}, {}],
pnlLayoutMain: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"horizontalAlign":"left","styles":{"backgroundImage":"url(resources/images/logos/waveerpbar.jpg)"},"verticalAlign":"top"}, {}, {
pnlHeader: ["wm.Panel", {"customGetValidate":"","height":"45px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
imgLogo: ["wm.Picture", {"height":"45px","source":"resources/images/logos/waveerplogo.jpg","width":"275px"}, {}],
pnlTitle: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
lblTitle: ["wm.Label", {"align":"right","autoSizeHeight":true,"caption":"Ticket System","height":"23px","padding":"4","singleLine":false,"width":"600px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}],
pnlMenuBar: ["wm.Panel", {"height":"20px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#00008b"},"verticalAlign":"top","width":"100%"}, {}, {
lblBack: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Back To Manage Rights","height":"100%","padding":"4","width":"142px"}, {"onclick":"navPgRights"}, {
format: ["wm.DataFormatter", {}, {}]
}]
}],
pnlMenuButton: ["wm.HeaderContentPanel", {"border":"0","height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
pnlMenuButtonLeft: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
pic_back: ["wm.Picture", {"height":"24px","hint":"Back","source":"resources/images/buttons/arrowleft24.png","width":"24px"}, {"onclick":"navPgRights"}]
}],
pnlMenuButtonRight: ["wm.Panel", {"height":"24px","horizontalAlign":"left","verticalAlign":"middle","width":"50%"}, {}]
}],
spacer1: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
pnlGenRights1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"34%"}, {}, {
pnlUsrMgtRights: ["wm.Panel", {"height":"71px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnUsrMgtRights: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"User Management Rights","margin":"4","width":"111px"}, {"onclick":"btnUsrMgtRightsClick"}]
}],
pnlTicketRights: ["wm.Panel", {"height":"71px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnTicketRights: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Ticket Rights","margin":"4","width":"111px"}, {"onclick":"btnTicketRightsClick"}]
}],
pnlLookupRights: ["wm.Panel", {"height":"71px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnLookupRights: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Lookup Rights","margin":"4","width":"111px"}, {"onclick":"btnLookupRightsClick"}]
}]
}],
pnlGenRights2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"33%"}, {}],
pnlGenRights3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"33%"}, {}]
}],
pnlFooter: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundChromeBar_LightBlue","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
lblFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"...","height":"20px","padding":"4","styles":{"backgroundGradient":{"direction":"horizontal","startColor":"#03036d","endColor":"#d8cbf2","colorStop":31},"backgroundColor":"#ffffff"},"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}]
};

PgGenerateRights.prototype._cssText = 'body.tundra .PgGenerateRights .wmlayout .PgGenerateRights-pnlHeader {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgGenerateRights .wmlayout .PgGenerateRights-pnlTitle {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgGenerateRights .wmlayout .PgGenerateRights-lblTitle {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:14pt;\
}\
body.tundra .PgGenerateRights .wmlayout .PgGenerateRights-pnlMenuBar {\
background-color:#00008B;\
}\
body.tundra .PgGenerateRights .wmlayout .PgGenerateRights-pnlFooter {\
background-color:#00008B;\
}\
body.tundra .PgGenerateRights .wmlayout .PgGenerateRights-txtUserId {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
font-weight:bold;\
}\
body.tundra .PgGenerateRights .PgGenerateRights-pnlLayoutMain.wmlayout {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgGenerateRights .wmlayout .PgGenerateRights-txtPassword {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
font-weight:bold;\
}\
body.tundra .PgGenerateRights .wmlayout .PgGenerateRights-pnlBody {\
background-color:#FFFFFF;\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
font-weight:bold;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:9pt;\
}\
';
PgGenerateRights.prototype._htmlText = '';