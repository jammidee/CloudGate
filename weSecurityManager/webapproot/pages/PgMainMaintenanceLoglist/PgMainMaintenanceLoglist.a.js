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
/*
Created by Jammi Dee 04/15/2012
This is a sample page that can used as template
*/
dojo.declare("PgMainMaintenanceLoglist", wm.Page, {
"preferredDevice": "desktop",
start: function() {
try {
// Added by JMD 04/11/2012
// Set up the date for the header here
var today = new Date();
var startdate = new Date();
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
// Initilaise the filters here 05/13/2012
startdate.setDate(1);
this.dtStartDate.setValue("dataValue", startdate  );
this.dtEndDate.setValue("dataValue",today );
// Added by Jammi Dee 05/13/2012
this.svarLogList.setValue("input.pEntity", "%");
this.svarLogList.update();
this.dgLookup.dataSet.update();
// Added by Jammi Dee 05/06/2012
app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarLogging.setValue("input.pMsg","View log list.");
app.svarLogging.setValue("input.pModuleId","MAINTENANCE");
app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
app.svarLogging.setValue("input.pProcess","PAGELOAD");
app.svarLogging.setValue("input.pScopeId","NA");
app.svarLogging.setValue("input.pStype","USER");
app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
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
this.lblTitle.setCaption("Maintenance : Loglist" );
this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
},
svarAppListResult: function(inSender, inDeprecated) {
try {
//           this.dgLookup.dataSet.update();
} catch(e) {
console.error('ERROR IN svarAppListResult: ' + e);
}
},
pic_refreshClick: function(inSender) {
try {
// Added by Jammi Dee 05/13/2012
this.svarLogList.setValue("input.pEntity", "%");
this.svarLogList.update();
this.dgLookup.dataSet.update();
} catch(e) {
console.error('ERROR IN pic_refreshClick: ' + e);
}
},
pic_toCsvClick: function(inSender) {
try {
this.dgLookup.showCSVData();
} catch(e) {
console.error('ERROR IN pic_toCsvClick: ' + e);
}
},
//Added by Jammi Dee 08/12/2012
pic_deleteClick: function(inSender) {
try {
var response = confirm("Delete: Are you sure to delete this log?");
if (response) {
alert( this.dgLookup.selectedItem.getData().juid );
this.svarLogDelete.setValue("input.pJuid", this.dgLookup.selectedItem.getData().juid );
this.svarLogDelete.update();
}
} catch(e) {
console.error('ERROR IN pic_deleteClick: ' + e);
alert( 'ERROR IN pic_deleteClick: ' + e );
}
},
//Added by Jammi Dee 08/12/2012
btnDeletePriorClick: function(inSender) {
try {
var response = confirm("Delete: Are you sure to delete all logs prior to start date?");
if (response) {
//alert(this.dgLookup.selectedItem.getData().juid);
this.svarLogDeletePrior.setValue("input.pEntity", app.varEntity.getValue("dataValue") );
this.svarLogDeletePrior.setValue("input.pStart",  this.dgLookup.selectedItem.getData().logdatetime );
this.svarLogDeletePrior.update();
this.svarLogList.setValue("input.pEntity", app.varEntity.getValue("dataValue"));
this.svarLogList.update();
this.dgLookup.dataSet.update();
}
} catch(e) {
console.error('ERROR IN btnDeletePriorClick: ' + e);
alert( 'ERROR IN btnDeletePriorClick: ' + e );
}
},
svarLogDeleteResult: function(inSender, inDeprecated) {
try {
this.svarLogList.setValue("input.pEntity", app.varEntity.getValue("dataValue"));
this.svarLogList.update();
this.dgLookup.dataSet.update();
} catch(e) {
console.error('ERROR IN svarLogDeleteResult: ' + e);
}
},
//Added by Jammi Dee 12/25/2012
svarLogListResult: function(inSender, inDeprecated) {
try {
//this.dgLookup.dijit.setSortIndex(1);
} catch(e) {
console.error('ERROR IN svarLogListResult: ' + e);
alert( 'ERROR IN svarLogListResult: ' + e );
}
},
//Added by Jammi Dee 05/05/2013
pic_backClick: function(inSender) {
try {
app.pdWaitLoadPage.show();
this.navPgMainMaintenance.update();
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
_end: 0
});

PgMainMaintenanceLoglist.widgets = {
varOps: ["wm.Variable", {"type":"StringData"}, {}],
navPgMain: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMain\"","targetProperty":"pageName"}, {}]
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
svarAppList: ["wm.ServiceVariable", {"operation":"qryAppList","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryAppListInputs"}, {}]
}],
svarLogList: ["wm.ServiceVariable", {"operation":"qryLogList","service":"dbwaveerp"}, {"onResult":"svarLogListResult"}, {
input: ["wm.ServiceInput", {"type":"qryLogListInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":false,"source":"dtStartDate.dataValue","targetProperty":"pStart"}, {}],
wire1: ["wm.Wire", {"expression":false,"source":"dtEndDate.dataValue","targetProperty":"pEnd"}, {}],
wire2: ["wm.Wire", {"expression":false,"source":"txtAppId.dataValue","targetProperty":"pAppId"}, {}]
}]
}]
}],
svarLogDelete: ["wm.ServiceVariable", {"operation":"qryLogDelete","service":"dbwaveerp"}, {"onResult":"svarLogDeleteResult"}, {
input: ["wm.ServiceInput", {"type":"qryLogDeleteInputs"}, {}]
}],
svarLogDeletePrior: ["wm.ServiceVariable", {"operation":"qryLogDeletePrior","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryLogDeletePriorInputs"}, {}]
}],
pdLoading: ["wm.PageDialog", {"desktopHeight":"100px","height":"100px","hideControls":true,"pageName":"Main","width":"280px"}, {}],
ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","corner":"cr","modal":false,"title":"Log List Help"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgMainMaintenanceLoglist.html"}, {}]
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
lblTitle: ["wm.Label", {"align":"right","autoSizeHeight":true,"caption":"Wave ERP System","height":"23px","padding":"4","singleLine":false,"width":"600px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}],
pnlMenuBar: ["wm.Panel", {"height":"20px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#00008b"},"verticalAlign":"top","width":"100%"}, {}, {
pnlSubMenu: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"70%"}, {}, {
lblBack: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"caption":"Back","padding":"4","width":"40px"}, {"onclick":"lblBackClick"}, {
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
lblUserInfo: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"autoSizeWidth":true,"height":"100%","padding":"4","width":"40px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}],
pnlMenuButton: ["wm.HeaderContentPanel", {"border":"0","height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
pnlMenuButtonLeft: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"50%"}, {}, {
pic_home: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Home","source":"resources/images/buttons/home0224.png","width":"24px"}, {"onclick":"pic_homeClick"}],
Sep01: ["wm.Spacer", {"height":"24px","width":"5px"}, {}],
pic_back: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Back","source":"resources/images/buttons/arrowleft24.png","width":"24px"}, {"onclick":"pic_backClick"}],
Sep2: ["wm.Spacer", {"height":"24px","width":"5px"}, {}],
pic_toCsv: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Export Grid to CSV","source":"resources/images/buttons/csv24.png","width":"30px"}, {"onclick":"pic_toCsvClick"}],
pic_delete: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Delete Application Entry","source":"resources/images/buttons/Recyclebin24.png","width":"30px"}, {"onclick":"pic_deleteClick"}],
btnDeletePrior: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Delete Prior","desktopHeight":"28px","height":"28px","hint":"Delete logs prior to select log.","margin":"4","mobileHeight":"28px","width":"120px"}, {"onclick":"btnDeletePriorClick"}]
}],
pnlMenuButtonRight: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
pic_help: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Help","source":"resources/images/buttons/helpred24.png","width":"24px"}, {"onclick":"ddPgMainConfigHelp.show"}],
pic_about: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"About","source":"resources/images/buttons/aboutblue24.png","width":"24px"}, {"onclick":"pdAbout.show"}]
}]
}],
spacer1: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
pnlLookup: ["wm.FancyPanel", {"title":"Log List ( Cross-Entity List )"}, {}, {
dgLookup: ["wm.DojoGrid", {"columns":[{"show":true,"title":"Created","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"logdatetime"},{"show":true,"title":"Userid","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"userid"},{"show":true,"title":"Msg","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"msg"},{"show":true,"title":"Moduleid","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"moduleid"},{"show":true,"title":"Proccess","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"proccess"},{"show":true,"title":"Appid","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"appid"},{"show":true,"title":"Scopeid","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"scopeid"},{"show":true,"title":"Stype","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"stype"},{"show":true,"title":"Entity","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entity"},{"show":false,"title":"Juid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"juid"},{"show":true,"title":"Serverid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"serverid"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Created: \" + wm.List.prototype.dateFormatter({}, null,null,null,${logdatetime}) + \"</div>\"\n+ \"<div class='MobileRow'>Userid: \" + ${userid} + \"</div>\"\n+ \"<div class='MobileRow'>Msg: \" + ${msg} + \"</div>\"\n+ \"<div class='MobileRow'>Moduleid: \" + ${moduleid} + \"</div>\"\n+ \"<div class='MobileRow'>Proccess: \" + ${proccess} + \"</div>\"\n+ \"<div class='MobileRow'>Appid: \" + ${appid} + \"</div>\"\n+ \"<div class='MobileRow'>Scopeid: \" + ${scopeid} + \"</div>\"\n+ \"<div class='MobileRow'>Stype: \" + ${stype} + \"</div>\"\n+ \"<div class='MobileRow'>Entity: \" + ${entity} + \"</div>\"\n+ \"<div class='MobileRow'>Serverid: \" + ${serverid} + \"</div>\"\n"}],"height":"100%","margin":"4"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarLogList","targetProperty":"dataSet"}, {}]
}]
}],
pnlControl: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"35px","verticalAlign":"middle","width":"678px"}, {}, {
lblFilter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_Blue","wm_TextDecoration_Bold"]},"caption":"Filter:","padding":"4","width":"46px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
dtStartDate: ["wm.DateTime", {"caption":"Start Date","captionSize":"80px","displayValue":"","width":"260px"}, {}],
dtEndDate: ["wm.DateTime", {"caption":"End Date","captionSize":"80px","displayValue":"","width":"260px"}, {}],
txtAppId: ["wm.Text", {"caption":"App ID:","captionSize":"80px","dataValue":"%","displayValue":"%","placeHolder":"%","width":"200px"}, {}],
pic_refresh: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Refresh","source":"resources/images/buttons/refresh24.png","width":"30px"}, {"onclick":"pic_refreshClick"}]
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

PgMainMaintenanceLoglist.prototype._cssText = 'body.tundra .PgMainMaintenanceLoglist .wmlayout .PgMainMaintenanceLoglist-pnlHeader {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainMaintenanceLoglist .wmlayout .PgMainMaintenanceLoglist-pnlTitle {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainMaintenanceLoglist .wmlayout .PgMainMaintenanceLoglist-lblTitle {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:14pt;\
}\
body.tundra .PgMainMaintenanceLoglist .wmlayout .PgMainMaintenanceLoglist-pnlMenuBar {\
background-color:#00008B;\
}\
body.tundra .PgMainMaintenanceLoglist .wmlayout .PgMainMaintenanceLoglist-pnlFooter {\
background-color:#00008B;\
}\
body.tundra .PgMainMaintenanceLoglist .wmlayout .PgMainMaintenanceLoglist-txtUserId {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainMaintenanceLoglist .PgMainMaintenanceLoglist-pnlLayoutMain.wmlayout {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainMaintenanceLoglist .wmlayout .PgMainMaintenanceLoglist-txtPassword {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainMaintenanceLoglist .wmlayout .PgMainMaintenanceLoglist-lblManageTicket {\
font-family: Tahoma;\
}\
body.tundra .PgMainMaintenanceLoglist .wmlayout .PgMainMaintenanceLoglist-lblUserInfo {\
font-family:Tahoma;\
}\
body.tundra .PgMainMaintenanceLoglist .wmlayout .PgMainMaintenanceLoglist-lblBorder {\
font-family:Tahoma;\
}\
body.tundra .PgMainMaintenanceLoglist .wmlayout .PgMainMaintenanceLoglist-lblLogout {\
font-family:Tahoma;\
}\
body.tundra .PgMainMaintenanceLoglist .wmlayout .PgMainMaintenanceLoglist-lblSep {\
font-family:Tahoma;\
}\
body.tundra .PgMainMaintenanceLoglist .wmlayout .PgMainMaintenanceLoglist-lblManageUser {\
font-family:Tahoma;\
}\
body.tundra .PgMainMaintenanceLoglist .wmlayout .PgMainMaintenanceLoglist-pnlBody {\
}\
body.tundra .PgMainMaintenanceLoglist .wmlayout .PgMainMaintenanceLoglist-lblManageLookUp {\
font-family:Tahoma;\
}\
';
PgMainMaintenanceLoglist.prototype._htmlText = '';