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
dojo.declare("PgMainMaintenanceApplist", wm.Page, {
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
// Added by Jammi Dee 04/27/2012
this.svarAppList.setValue("input.pEntity", "%");
this.svarAppList.update();
this.dgLookup.dataSet.update();
// Added by Jammi Dee 05/06/2012
app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarLogging.setValue("input.pMsg","View application list.");
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
this.lblTitle.setCaption("Maintenance : Applist" );
this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
},
svarAppListResult: function(inSender, inDeprecated) {
try {
//           this.dgLookup.dataSet.update();
} catch(e) {
console.error('ERROR IN svarAppListResult: ' + e);
}
},
// Added by Jammi Dee 06/11/2012
pic_toCsvClick: function(inSender) {
try {
this.dgLookup.showCSVData();
} catch(e) {
console.error('ERROR IN pic_toCsvClick: ' + e);
}
},
dgLookupClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
this.txtAppId.setValue("dataValue", this.dgLookup.selectedItem.getData().appid );
this.selStatus.setValue("dataValue", this.dgLookup.selectedItem.getData().status );
} catch(e) {
console.error('ERROR IN dgLookupClick: ' + e);
}
},
// Added by Jammi Dee 06/17/2012
btnUpdateClick: function(inSender) {
try {
this.svarAppListUpdate.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
this.svarAppListUpdate.setValue("input.pAppId", this.txtAppId.getValue("dataValue"));
this.svarAppListUpdate.setValue("input.pStatus", this.selStatus.getValue("dataValue"));
this.svarAppListUpdate.update();
} catch(e) {
console.error('ERROR IN btnUpdateClick: ' + e);
alert( 'ERROR IN btnUpdateClick: ' + e );
}
},
//Added by Jammi Dee 04/18/2013
svarAppListUpdateResult: function(inSender, inDeprecated) {
try {
this.svarAppList.setValue("input.pEntity", "%");
this.svarAppList.update();
this.dgLookup.dataSet.update();
} catch(e) {
console.error('ERROR IN svarAppListUpdateResult: ' + e);
alert( 'ERROR IN svarAppListUpdateResult: ' + e );
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

PgMainMaintenanceApplist.widgets = {
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
svarAppListUpdate: ["wm.ServiceVariable", {"operation":"updAppList","service":"dbwaveerp"}, {"onResult":"svarAppListUpdateResult"}, {
input: ["wm.ServiceInput", {"type":"updAppListInputs"}, {}]
}],
pdLoading: ["wm.PageDialog", {"desktopHeight":"100px","height":"100px","hideControls":true,"pageName":"Main","width":"280px"}, {}],
ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","corner":"cr","modal":false,"title":"Application List"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgMainMaintenanceApplist.html"}, {}]
}],
buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnClose: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddPgMainConfigHelp.hide"}]
}]
}],
pdAbout: ["wm.PageDialog", {"desktopHeight":"341px","height":"341px","noEscape":true,"noMaxify":true,"noMinify":true,"pageName":"PgAbout","width":"616px"}, {}],
pnlLayoutMain: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"horizontalAlign":"left","styles":{"backgroundGradient":{"direction":"horizontal","startColor":"#03036d","endColor":"#d8cbf2","colorStop":31}},"verticalAlign":"top","width":"829px"}, {}, {
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
pic_delete: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Delete Application Entry","source":"resources/images/buttons/Recyclebin24.png","width":"30px"}, {}]
}],
pnlMenuButtonRight: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
pic_help: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Help","source":"resources/images/buttons/helpred24.png","width":"24px"}, {"onclick":"ddPgMainConfigHelp.show"}],
pic_about: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"About","source":"resources/images/buttons/aboutblue24.png","width":"24px"}, {"onclick":"pdAbout.show"}]
}]
}],
spacer1: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
pnlLookup: ["wm.FancyPanel", {"title":"Application List ( Cross-Entity List )"}, {}, {
dgLookup: ["wm.DojoGrid", {"columns":[{"show":false,"title":"ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"seqid"},{"isCustomField":true,"expression":"if (${status}==\"ACTIVE\"){    '<img src =\"resources/images/buttons/grid-green-icon.png\"/>'    } else {    '<img src =\"resources/images/buttons/grid-gray-icon.png\"/>'    }","show":true,"width":"20px","title":"..","align":"left","formatFunc":"","fieldType":"","field":"customField"},{"show":true,"title":"ENTITY","width":"80px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":true,"title":"APP ID","width":"80px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"appid"},{"show":true,"title":"Description","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"appdesc"},{"show":true,"title":"Start Date","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"startdate"},{"show":true,"title":"End Date","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"enddate"},{"show":true,"title":"Status","width":"80px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"status"},{"show":false,"title":"Juid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"juid"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>ENTITY: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>APP ID: \" + ${appid} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${appdesc} + \"</div>\"\n+ \"<div class='MobileRow'>Start Date: \" + wm.List.prototype.dateFormatter({}, null,null,null,${startdate}) + \"</div>\"\n+ \"<div class='MobileRow'>End Date: \" + wm.List.prototype.dateFormatter({}, null,null,null,${enddate}) + \"</div>\"\n+ \"<div class='MobileRow'>Status: \" + ${status} + \"</div>\"\n"}],"height":"100%","localizationStructure":{},"margin":"4"}, {"onClick":"dgLookupClick","onSelect":"dgLookupClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarAppList","targetProperty":"dataSet"}, {}]
}]
}],
pnlControl: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"middle","width":"100%"}, {}, {
txtAppId: ["wm.Text", {"caption":"App ID:","captionAlign":"left","captionSize":"60px","dataValue":undefined,"disabled":true,"displayValue":"","width":"180px"}, {}],
selStatus: ["wm.SelectMenu", {"caption":"Status:","captionAlign":"left","captionSize":"60px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","options":"ACTIVE,LOCKED","width":"200px"}, {}],
btnUpdate: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Update","margin":"4"}, {"onclick":"btnUpdateClick"}]
}]
}]
}],
pnlFooter: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel","wm_BackgroundChromeBar_LightBlue"]},"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
lblFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"...","height":"20px","padding":"4","width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}]
};

PgMainMaintenanceApplist.prototype._cssText = 'body.tundra .PgMainMaintenanceApplist .wmlayout .PgMainMaintenanceApplist-pnlHeader {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainMaintenanceApplist .wmlayout .PgMainMaintenanceApplist-pnlTitle {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainMaintenanceApplist .wmlayout .PgMainMaintenanceApplist-lblTitle {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:14pt;\
}\
body.tundra .PgMainMaintenanceApplist .wmlayout .PgMainMaintenanceApplist-pnlMenuBar {\
background-color:#00008B;\
}\
body.tundra .PgMainMaintenanceApplist .wmlayout .PgMainMaintenanceApplist-pnlFooter {\
background-color:#00008B;\
}\
body.tundra .PgMainMaintenanceApplist .wmlayout .PgMainMaintenanceApplist-txtUserId {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainMaintenanceApplist .PgMainMaintenanceApplist-pnlLayoutMain.wmlayout {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainMaintenanceApplist .wmlayout .PgMainMaintenanceApplist-txtPassword {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainMaintenanceApplist .wmlayout .PgMainMaintenanceApplist-lblManageTicket {\
font-family: Tahoma;\
}\
body.tundra .PgMainMaintenanceApplist .wmlayout .PgMainMaintenanceApplist-lblUserInfo {\
font-family:Tahoma;\
}\
body.tundra .PgMainMaintenanceApplist .wmlayout .PgMainMaintenanceApplist-lblBorder {\
font-family:Tahoma;\
}\
body.tundra .PgMainMaintenanceApplist .wmlayout .PgMainMaintenanceApplist-lblLogout {\
font-family:Tahoma;\
}\
body.tundra .PgMainMaintenanceApplist .wmlayout .PgMainMaintenanceApplist-lblSep {\
font-family:Tahoma;\
}\
body.tundra .PgMainMaintenanceApplist .wmlayout .PgMainMaintenanceApplist-lblManageUser {\
font-family:Tahoma;\
}\
body.tundra .PgMainMaintenanceApplist .wmlayout .PgMainMaintenanceApplist-pnlBody {\
}\
body.tundra .PgMainMaintenanceApplist .wmlayout .PgMainMaintenanceApplist-lblManageLookUp {\
font-family:Tahoma;\
}\
';
PgMainMaintenanceApplist.prototype._htmlText = '';