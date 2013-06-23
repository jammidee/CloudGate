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
Created by Jammi Dee 05/17/2012
This is a sample page that can used as template
*/
dojo.declare("PgMainMaintenanceReglist", wm.Page, {
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
// Added by Jammi Dee 05/13/2012
this.svarRegList.setValue("input.pEntity", this.txtEntity.getValue("dataValue"));
//this.svarRegList.setValue("input.pEntity", app.varEntity.getValue("dataValue") );
this.svarRegList.update();
this.dgLookup.dataSet.update();
this.pic_delete.setShowing(false);
// Added by Jammi Dee 05/06/2012
app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarLogging.setValue("input.pMsg","View registry list.");
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
this.lblTitle.setCaption("Maintenance : Reglist" );
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
this.svarRegList.setValue("input.pEntity", "%");
this.svarRegList.update();
this.dgLookup.dataSet.update();
} catch(e) {
console.error('ERROR IN pic_refreshClick: ' + e);
}
},
// Added by Jammi Dee 05/17/2012
dgLookupClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
this.txtVarName.setValue("dataValue", this.dgLookup.selectedItem.getData().varname );
this.txtVarValue.setValue("dataValue", this.dgLookup.selectedItem.getData().varvalue );
} catch(e) {
console.error('ERROR IN dgLookupClick: ' + e);
}
},
// Added by Jammi Dee 05/21/2012
btnSelectSelectClick: function(inSender) {
try {
this.txtEntity.setValue("dataValue", this.dgEntity.selectedItem.getData().entityid);
this.svarRegList.setValue("input.pEntity", this.txtEntity.getValue("dataValue"));
this.svarRegList.update();
} catch(e) {
console.error('ERROR IN btnSelectSelectClick: ' + e);
alert( 'ERROR IN btnSelectSelectClick: ' + e );
}
},
//Added by Jammi Dee 03/07/2013
dgEntityCellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
this.btnSelectSelectClick( inSender );
} catch(e) {
console.error('ERROR IN dgEntityCellDblClick: ' + e);
alert( 'ERROR IN dgEntityCellDblClick: ' + e );
}
},
// Added by Jammi Dee 05/21/2012
ddSelectEntityShow: function(inSender) {
try {
this.svarEntitySelect.update();
} catch(e) {
console.error('ERROR IN ddSelectEntityShow: ' + e);
alert( 'ERROR IN ddSelectEntityShow: ' + e );
}
},
btnEntityClick: function(inSender) {
try {
} catch(e) {
console.error('ERROR IN btnEntityClick: ' + e);
alert( 'ERROR IN btnEntityClick: ' + e );
}
},
svarRegListResult: function(inSender, inDeprecated) {
try {
this.ddSelectEntity.hide();
} catch(e) {
console.error('ERROR IN svarRegListResult: ' + e);
}
},
txtEntityEnterKeyPress: function(inSender) {
try {
this.svarRegList.setValue("input.pEntity", this.txtEntity.getValue("dataValue"));
this.svarRegList.update();
} catch(e) {
console.error('ERROR IN txtEntityEnterKeyPress: ' + e);
alert( 'ERROR IN txtEntityEnterKeyPress: ' + e );
}
},
pic_toCsvClick: function(inSender) {
try {
this.dgLookup.showCSVData();
} catch(e) {
console.error('ERROR IN pic_toCsvClick: ' + e);
alert( 'ERROR IN pic_toCsvClick: ' + e );
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

PgMainMaintenanceReglist.widgets = {
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
svarRegList: ["wm.ServiceVariable", {"operation":"qryRegList","service":"dbwaveerp"}, {"onResult":"svarRegListResult"}, {
input: ["wm.ServiceInput", {"type":"qryRegListInputs"}, {}]
}],
svarEntitySelect: ["wm.ServiceVariable", {"operation":"qryEntitySelect","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryEntitySelectInputs"}, {}]
}],
pdLoading: ["wm.PageDialog", {"desktopHeight":"100px","height":"100px","hideControls":true,"pageName":"Main","width":"280px"}, {}],
ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","corner":"cr","modal":false,"title":"Registry List Help"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgMainMaintenanceReglist.html"}, {}]
}],
buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnClose: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddPgMainConfigHelp.hide"}]
}]
}],
pdAbout: ["wm.PageDialog", {"desktopHeight":"341px","height":"341px","noEscape":true,"noMaxify":true,"noMinify":true,"pageName":"PgAbout","width":"616px"}, {}],
ddSelectEntity: ["wm.DesignableDialog", {"buttonBarId":"buttonBar1","containerWidgetId":"containerWidget1","desktopHeight":"300px","height":"300px","title":"Select Entity","width":"600px"}, {"onShow":"ddSelectEntityShow"}, {
containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
dgEntity: ["wm.DojoGrid", {"columns":[{"show":false,"title":"Seqid","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"seqid"},{"show":true,"title":"Entity ID","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":true,"title":"Company","width":"200px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"company"},{"show":true,"title":"Description","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"description"},{"show":false,"title":"Addr01","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"addr01"},{"show":false,"title":"Addr02","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"addr02"},{"show":false,"title":"Addr03","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"addr03"},{"show":false,"title":"Sstatus","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"show":false,"title":"Startdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"startdate"},{"show":false,"title":"Enddate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"enddate"},{"show":false,"title":"Deleted","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"deleted"},{"show":false,"title":"Juid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"juid"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Company: \" + ${company} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n"}],"height":"100%","margin":"4"}, {"onCellDblClick":"dgEntityCellDblClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarEntitySelect","targetProperty":"dataSet"}, {}]
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
pnlLookup: ["wm.FancyPanel", {"title":"Registry Variables ( Cross-Entity List )"}, {}, {
dgLookup: ["wm.DojoGrid", {"columns":[{"show":true,"title":"Userid","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"userid"},{"show":true,"title":"Appid","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"appid"},{"show":true,"title":"Entity","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entity"},{"show":true,"title":"Regdate","width":"100px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"regdate"},{"show":true,"title":"Varname","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"varname"},{"show":true,"title":"Varvalue","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"varvalue"},{"show":false,"field":"id","title":"Id","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"id.seqid","title":"Id.seqid","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"id.juid","title":"Id.juid","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Userid: \" + ${userid} + \"</div>\"\n+ \"<div class='MobileRow'>Appid: \" + ${appid} + \"</div>\"\n+ \"<div class='MobileRow'>Entity: \" + ${entity} + \"</div>\"\n+ \"<div class='MobileRow'>Regdate: \" + wm.List.prototype.dateFormatter({}, null,null,null,${regdate}) + \"</div>\"\n+ \"<div class='MobileRow'>Varname: \" + ${varname} + \"</div>\"\n+ \"<div class='MobileRow'>Varvalue: \" + ${varvalue} + \"</div>\"\n"}],"height":"100%","margin":"4"}, {"onClick":"dgLookupClick","onSelect":"dgLookupClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarRegList","targetProperty":"dataSet"}, {}]
}]
}],
pnlControl: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"middle","width":"100%"}, {}, {
lblFilter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_Blue","wm_TextDecoration_Bold"]},"caption":"Filter:","padding":"4","width":"46px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
txtEntity: ["wm.Text", {"caption":"Entity","captionAlign":"left","captionSize":"50px","dataValue":"%","displayValue":"%","width":"150px"}, {"onEnterKeyPress":"txtEntityEnterKeyPress"}],
btnEntity: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"..","margin":"4","width":"29px"}, {"onclick":"ddSelectEntity.show"}],
spacer3: ["wm.Spacer", {"height":"16px","width":"17px"}, {}],
lblEdit: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_Blue","wm_TextDecoration_Bold"]},"caption":"Edit:","padding":"4","width":"46px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
txtVarName: ["wm.Text", {"caption":"Var. Name","captionAlign":"left","captionSize":"80px","dataValue":undefined,"displayValue":"","width":"250px"}, {}],
spacer2: ["wm.Spacer", {"height":"16px","width":"17px"}, {}],
txtVarValue: ["wm.Text", {"caption":"Var. Value","captionAlign":"left","captionSize":"80px","dataValue":undefined,"displayValue":"","width":"350px"}, {}],
pic_refresh: ["wm.Picture", {"height":"24px","hint":"Save / Update","source":"resources/images/buttons/ok24.png","width":"30px"}, {"onclick":"pic_refreshClick"}]
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

PgMainMaintenanceReglist.prototype._cssText = 'body.tundra .PgMainMaintenanceReglist .wmlayout .PgMainMaintenanceReglist-pnlHeader {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainMaintenanceReglist .wmlayout .PgMainMaintenanceReglist-pnlTitle {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainMaintenanceReglist .wmlayout .PgMainMaintenanceReglist-lblTitle {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:14pt;\
}\
body.tundra .PgMainMaintenanceReglist .wmlayout .PgMainMaintenanceReglist-pnlMenuBar {\
background-color:#00008B;\
}\
body.tundra .PgMainMaintenanceReglist .wmlayout .PgMainMaintenanceReglist-pnlFooter {\
background-color:#00008B;\
}\
body.tundra .PgMainMaintenanceReglist .wmlayout .PgMainMaintenanceReglist-txtUserId {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainMaintenanceReglist .PgMainMaintenanceReglist-pnlLayoutMain.wmlayout {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainMaintenanceReglist .wmlayout .PgMainMaintenanceReglist-txtPassword {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainMaintenanceReglist .wmlayout .PgMainMaintenanceReglist-lblManageTicket {\
font-family: Tahoma;\
}\
body.tundra .PgMainMaintenanceReglist .wmlayout .PgMainMaintenanceReglist-lblUserInfo {\
font-family:Tahoma;\
}\
body.tundra .PgMainMaintenanceReglist .wmlayout .PgMainMaintenanceReglist-lblBorder {\
font-family:Tahoma;\
}\
body.tundra .PgMainMaintenanceReglist .wmlayout .PgMainMaintenanceReglist-lblLogout {\
font-family:Tahoma;\
}\
body.tundra .PgMainMaintenanceReglist .wmlayout .PgMainMaintenanceReglist-lblSep {\
font-family:Tahoma;\
}\
body.tundra .PgMainMaintenanceReglist .wmlayout .PgMainMaintenanceReglist-lblManageUser {\
font-family:Tahoma;\
}\
body.tundra .PgMainMaintenanceReglist .wmlayout .PgMainMaintenanceReglist-pnlBody {\
}\
body.tundra .PgMainMaintenanceReglist .wmlayout .PgMainMaintenanceReglist-lblManageLookUp {\
font-family:Tahoma;\
}\
';
PgMainMaintenanceReglist.prototype._htmlText = '';