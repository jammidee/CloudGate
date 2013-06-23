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
* Date: 09/24/2012
* Modified by: Jammi Dee 09/24/2012 10:00PM
*
*/
/*
This is a sample page that can used as template
*/
dojo.declare("PgMainUserAdMapping", wm.Page, {
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
this.lblTitle.setCaption("Wave ERP Copyright 2012");
this.lblEntity.setCaption(app.varEntity.getValue("dataValue"));
app.varModuleId.setValue("dataValue","MDLMAIN");
// Initialize the application - Jammi Dee 03/25/2012
this.initApplication();
//Added by Jammi Dee 11/25/2012
app.svarUpdateSessionApp.setValue("input.pJuid",app.varSessionId.getValue("dataValue"));
app.svarUpdateSessionApp.update();
// Added by Jammi Dee 09/24/2012
app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarLogging.setValue("input.pMsg","Manage User-AD Mapping.");
app.svarLogging.setValue("input.pModuleId","ADMAPPING");
app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
app.svarLogging.setValue("input.pProcess","MANAGE");
app.svarLogging.setValue("input.pScopeId","NA");
app.svarLogging.setValue("input.pStype","USER");
app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
app.svarLogging.update();
//Update the AD Mapping View
//Added by Jammi Dee 09/24/2012
this.svarADMappingView.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
this.svarADMappingView.update();
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
this.lblTitle.setCaption("User : AD Mapping" );
this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
},
//Added by Jammi Dee 09/24/2012
pic_addClick: function(inSender) {
try {
this.ddNewADMapping.show();
} catch(e) {
console.error('ERROR IN pic_addClick: ' + e);
alert( 'ERROR IN pic_addClick: ' + e );
}
},
//Added by Jammi Dee 09/24/2012
btnADMappingAddClick: function(inSender) {
try {
//Used this UUID generation when database UUID is not available
var UUID = app.uuid4();
var eQuery =           "insert into tbladmapping( " +
"juid, " +
"entityid, " +
"urlid, " +
"userid, " +
"aduserid, " +
"sstatus " +
")" +
"values( " +
"'" + UUID + "', " +
"'" + app.varEntity.getValue("dataValue") + "', " +
"'" + this.txtUrl.getValue("dataValue") + "', " +
"'" + this.txtUserId.getValue("dataValue") + "', " +
"'" + this.txtAdUserId.getValue("dataValue") + "', " +
"'ACTIVE' " +
");";
//alert( eQuery );
this.svarExecGenericNonQuery.setValue("input.eQuery", eQuery);
this.svarExecGenericNonQuery.update();
app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarLogging.setValue("input.pMsg","Added new Mapping " + this.txtUserId.getValue("dataValue") + " and " + this.txtAdUserId.getValue("dataValue") );
app.svarLogging.setValue("input.pModuleId","ADMAPPING");
app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
app.svarLogging.setValue("input.pProcess","MAPPING");
app.svarLogging.setValue("input.pScopeId","NA");
app.svarLogging.setValue("input.pStype","USER");
app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
app.svarLogging.update();
//Hide the popup window
this.ddNewADMapping.hide();
} catch(e) {
console.error('ERROR IN btnADMappingAddClick: ' + e);
alert( 'ERROR IN btnUrlAddClick: ' + e );
}
},
//Added by Jammi Dee 09/11/2012
svarExecGenericNonQueryResult: function(inSender, inDeprecated) {
try {
//Update the Mapping Grid 09/25/2012
this.svarADMappingView.setValue("input.pEntity", app.varEntity.getValue("dataValue") );
this.svarADMappingView.update();
} catch(e) {
console.error('ERROR IN svarExecGenericNonQueryResult: ' + e);
alert( 'ERROR IN svarExecGenericNonQueryResult: ' + e );
}
},
//Added by Jammi Dee 09/24/2012
pic_deleteClick: function(inSender) {
try {
var response = confirm("Delete: Are you sure to delete this item?");
if (response) {
var eQuery = "delete from tbladmapping where juid ='" + this.dgData.selectedItem.getData().juid + "'; " ;
//alert( eQuery );
this.svarExecGenericNonQueryDelete.setValue("input.eQuery", eQuery);
this.svarExecGenericNonQueryDelete.update();
}
} catch(e) {
console.error('ERROR IN pic_deleteClick: ' + e);
alert( 'ERROR IN pic_deleteClick: ' + e );
}
},
//Added by Jammi Dee 09/11/2012
svarExecGenericNonQueryDeleteResult: function(inSender, inDeprecated) {
try {
app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarLogging.setValue("input.pMsg","Deleted Mapping " + this.txtUserId.getValue("dataValue") + " and " + this.txtAdUserId.getValue("dataValue") );
app.svarLogging.setValue("input.pModuleId","ADMAPPING");
app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
app.svarLogging.setValue("input.pProcess","MAPPING");
app.svarLogging.setValue("input.pScopeId","NA");
app.svarLogging.setValue("input.pStype","USER");
app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
app.svarLogging.update();
//Update the Mapping Grid 09/25/2012
this.svarADMappingView.setValue("input.pEntity", app.varEntity.getValue("dataValue") );
this.svarADMappingView.update();
} catch(e) {
console.error('ERROR IN svarExecGenericNonQueryDeleteResult: ' + e);
alert( 'ERROR IN svarExecGenericNonQueryDeleteResult: ' + e );
}
},
//Added by Jammi Dee 05/05/2013
pic_backClick: function(inSender) {
try {
app.pdWaitLoadPage.show();
this.navPgMainUser.update();
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
pic_homeClick: function(inSender) {
try {
app.pdWaitLoadPage.show();
this.navPgMain.update();
} catch(e) {
console.error('ERROR IN pic_homeClick: ' + e);
}
},
_end: 0
});

PgMainUserAdMapping.widgets = {
varOps: ["wm.Variable", {"type":"StringData"}, {}],
navPgMain: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMain\"","targetProperty":"pageName"}, {}]
}]
}]
}],
svarCreateReport: ["wm.ServiceVariable", {"operation":"getReport","service":"svcCreateReport"}, {"onResult":"svarCreateReportResult"}, {
input: ["wm.ServiceInput", {"type":"getReportInputs"}, {}]
}],
svarSelectEntity: ["wm.ServiceVariable", {"operation":"qryEntity","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryEntityInputs"}, {}]
}],
navPgMainConfig: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMainConfig\"","targetProperty":"pageName"}, {}]
}]
}]
}],
svarUrlAccess: ["wm.ServiceVariable", {"operation":"qryUrlAccess","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryUrlAccessInputs"}, {}]
}],
svarExecGenericNonQuery: ["wm.ServiceVariable", {"operation":"execNonQuery","service":"svcExecGenericNonQuery"}, {"onResult":"svarExecGenericNonQueryResult"}, {
input: ["wm.ServiceInput", {"type":"execNonQueryInputs"}, {}]
}],
svarExecGenericNonQueryDelete: ["wm.ServiceVariable", {"operation":"execNonQuery","service":"svcExecGenericNonQuery"}, {"onResult":"svarExecGenericNonQueryDeleteResult"}, {
input: ["wm.ServiceInput", {"type":"execNonQueryInputs"}, {}]
}],
navPgMainUser: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgManageUser\"","targetProperty":"pageName"}, {}]
}]
}]
}],
svarADMappingView: ["wm.ServiceVariable", {"operation":"qryADMappingView","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryADMappingViewInputs"}, {}]
}],
pdLoading: ["wm.PageDialog", {"desktopHeight":"100px","height":"100px","hideControls":true,"pageName":"Main","width":"280px"}, {}],
ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","corner":"cr","modal":false,"title":"user / AD Mapping Help"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgMainUserAdMapping.html"}, {}]
}],
buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnClose: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddPgMainConfigHelp.hide"}]
}]
}],
pdAbout: ["wm.PageDialog", {"desktopHeight":"341px","height":"341px","noEscape":true,"noMaxify":true,"noMinify":true,"pageName":"PgAbout","width":"616px"}, {}],
ddSelectEntity: ["wm.DesignableDialog", {"buttonBarId":"buttonBar1","containerWidgetId":"containerWidget1","title":"Select Entity","width":"800px"}, {"onShow":"ddSelectEntityShow"}, {
containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
dgDataSelect: ["wm.DojoGrid", {"columns":[{"show":false,"title":"Seqid","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"seqid"},{"show":true,"title":"Entity","width":"80px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":true,"title":"Company","width":"160px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"company"},{"show":true,"title":"Description","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"description"},{"show":false,"title":"Addr01","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"addr01"},{"show":false,"title":"Addr02","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"addr02"},{"show":false,"title":"Addr03","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"addr03"},{"show":true,"title":"Status","width":"80px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"show":false,"title":"Startdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"startdate"},{"show":false,"title":"Enddate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"enddate"},{"show":false,"title":"Deleted","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"deleted"},{"show":true,"title":"Juid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"juid"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Entity: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Company: \" + ${company} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n+ \"<div class='MobileRow'>Status: \" + ${sstatus} + \"</div>\"\n+ \"<div class='MobileRow'>Juid: \" + ${juid} + \"</div>\"\n"}],"height":"100%","localizationStructure":{},"margin":"4"}, {}, {
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
ddNewADMapping: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget2","desktopHeight":"150px","height":"150px","mobileHeight":"180px","title":"NewAD Mapping","width":"450px"}, {}, {
containerWidget2: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
txtUrl: ["wm.Text", {"caption":"URL:","captionAlign":"left","dataValue":undefined,"displayValue":"","placeHolder":"localhost:8094","width":"400px"}, {}],
txtUserId: ["wm.Text", {"caption":"User ID:","captionAlign":"left","dataValue":undefined,"displayValue":"","placeHolder":"100001","width":"400px"}, {}],
txtAdUserId: ["wm.Text", {"caption":"AD User ID:","captionAlign":"left","dataValue":undefined,"displayValue":"","placeHolder":"connx\\jmdee","width":"400px"}, {}]
}],
buttonBar2: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnADMappingAdd: ["wm.Button", {"caption":"Add","margin":"4"}, {"onclick":"btnADMappingAddClick"}],
btnADMappingCancel: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"ddNewADMapping.hide"}]
}]
}],
pnlLayoutMain: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"horizontalAlign":"left","styles":{"backgroundGradient":{"direction":"horizontal","startColor":"#03036d","endColor":"#d8cbf2","colorStop":31}},"verticalAlign":"top"}, {}, {
pnlHeader: ["wm.Panel", {"height":"45px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
imgLogo: ["wm.Picture", {"height":"45px","source":"resources/images/logos/waveerplogo.jpg","width":"275px"}, {}],
pnlTitle: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
lblTitle: ["wm.Label", {"align":"right","autoSizeHeight":true,"caption":"Wave ERP System","height":"23px","padding":"4","singleLine":false,"width":"600px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}],
pnlMenuBar: ["wm.Panel", {"height":"20px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#00008b"},"verticalAlign":"top","width":"100%"}, {}, {
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
Sep2: ["wm.Spacer", {"height":"24px","width":"5px"}, {}]
}],
pnlMenuButtonRight: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
pic_help: ["wm.Picture", {"height":"24px","hint":"Help","source":"resources/images/buttons/helpred24.png","width":"24px"}, {"onclick":"ddPgMainConfigHelp.show"}],
pic_about: ["wm.Picture", {"height":"24px","hint":"About","source":"resources/images/buttons/aboutblue24.png","width":"24px"}, {"onclick":"pdAbout.show"}]
}]
}],
spacer1: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"100%"}, {}, {
pnlAdMapping: ["wm.FancyPanel", {"title":"User / AD Mapping ( Cross-Entity List )"}, {}, {
pnlCommand: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
pic_add: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Add URL Access Rights","source":"resources/images/buttons/addball24.png","width":"30px"}, {"onclick":"pic_addClick"}],
pic_delete: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Delete Selected URL Access","source":"resources/images/buttons/Recyclebin24.png","width":"30px"}, {"onclick":"pic_deleteClick"}]
}],
dgData: ["wm.DojoGrid", {"columns":[{"show":false,"title":"Juid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"juid"},{"show":true,"title":"Entity ID","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":true,"title":"User ID","width":"160px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"userid"},{"show":true,"title":"AD User ID","width":"160px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"aduserid"},{"show":true,"title":"URL ID","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"urlid"},{"show":true,"title":"Status","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"show":true,"title":"Userpass","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"userpass"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>User ID: \" + ${userid} + \"</div>\"\n+ \"<div class='MobileRow'>AD User ID: \" + ${aduserid} + \"</div>\"\n+ \"<div class='MobileRow'>URL ID: \" + ${urlid} + \"</div>\"\n+ \"<div class='MobileRow'>Status: \" + ${sstatus} + \"</div>\"\n+ \"<div class='MobileRow'>Userpass: \" + ${userpass} + \"</div>\"\n"}],"height":"100%","margin":"4"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarADMappingView","targetProperty":"dataSet"}, {}]
}]
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

PgMainUserAdMapping.prototype._cssText = 'body.tundra .PgMainUserAdMapping .wmlayout .PgMainUserAdMapping-pnlHeader {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainUserAdMapping .wmlayout .PgMainUserAdMapping-pnlTitle {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainUserAdMapping .wmlayout .PgMainUserAdMapping-lblTitle {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:14pt;\
}\
body.tundra .PgMainUserAdMapping .wmlayout .PgMainUserAdMapping-pnlMenuBar {\
background-color:#00008B;\
}\
body.tundra .PgMainUserAdMapping .wmlayout .PgMainUserAdMapping-pnlFooter {\
background-color:#00008B;\
}\
body.tundra .PgMainUserAdMapping .wmlayout .PgMainUserAdMapping-txtUserId {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainUserAdMapping .PgMainUserAdMapping-pnlLayoutMain.wmlayout {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainUserAdMapping .wmlayout .PgMainUserAdMapping-txtPassword {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainUserAdMapping .wmlayout .PgMainUserAdMapping-lblManageTicket {\
font-family: Tahoma;\
}\
body.tundra .PgMainUserAdMapping .wmlayout .PgMainUserAdMapping-lblUserInfo {\
font-family:Tahoma;\
}\
body.tundra .PgMainUserAdMapping .wmlayout .PgMainUserAdMapping-lblBorder {\
font-family:Tahoma;\
}\
body.tundra .PgMainUserAdMapping .wmlayout .PgMainUserAdMapping-lblLogout {\
font-family:Tahoma;\
}\
body.tundra .PgMainUserAdMapping .wmlayout .PgMainUserAdMapping-lblSep {\
font-family:Tahoma;\
}\
body.tundra .PgMainUserAdMapping .wmlayout .PgMainUserAdMapping-lblManageUser {\
font-family:Tahoma;\
}\
body.tundra .PgMainUserAdMapping .wmlayout .PgMainUserAdMapping-pnlBody {\
}\
body.tundra .PgMainUserAdMapping .wmlayout .PgMainUserAdMapping-lblManageLookUp {\
font-family:Tahoma;\
}\
';
PgMainUserAdMapping.prototype._htmlText = '';