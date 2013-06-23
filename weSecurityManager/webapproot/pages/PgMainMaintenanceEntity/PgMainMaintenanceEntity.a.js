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
dojo.declare("PgMainMaintenanceEntity", wm.Page, {
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
this.splitEntity.setWidth( 2 );
// Initialize the application - Jammi Dee 03/25/2012
this.initApplication();
//Added by Jammi Dee 11/25/2012
app.svarUpdateSessionApp.setValue("input.pJuid",app.varSessionId.getValue("dataValue"));
app.svarUpdateSessionApp.update();
// Added by Jammi Dee 06/09/2012
this.svarEntity.update();
this.dgLookup.dataSet.update();
// Added by Jammi Dee 05/06/2012
app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarLogging.setValue("input.pMsg","Manage Entity.");
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
this.lblTitle.setCaption("Maintenance : Entity" );
this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
},
svarAppListResult: function(inSender, inDeprecated) {
try {
//           this.dgLookup.dataSet.update();
} catch(e) {
console.error('ERROR IN svarAppListResult: ' + e);
alert( 'ERROR IN svarAppListResult: ' + e );
}
},
// Added by Jammi Dee 06/09/2012
dgLookupClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
this.txtEntity.setValue("dataValue", this.dgLookup.selectedItem.getData().entityid );
this.txtCompany.setValue("dataValue", this.dgLookup.selectedItem.getData().company );
this.txtDescription.setValue("dataValue", this.dgLookup.selectedItem.getData().description );
this.txtaAddr01.setValue("dataValue", this.dgLookup.selectedItem.getData().addr01 );
this.txtaAddr02.setValue("dataValue", this.dgLookup.selectedItem.getData().addr02 );
this.txtaAddr03.setValue("dataValue", this.dgLookup.selectedItem.getData().addr03 );
} catch(e) {
console.error('ERROR IN dgLookupClick: ' + e);
alert( 'ERROR IN dgLookupClick: ' + e );
}
},
//Added by Jammi Dee 08/15/2012
pic_addClick: function(inSender) {
try {
//Added by Jammi Dee 12/01/2012
this.svarCheckEntityLicense.update();
} catch(e) {
console.error('ERROR IN pic_addClick: ' + e);
alert( 'ERROR IN pic_addClick: ' + e );
}
},
//Added by Jammi Dee 11/30/2012
svarCheckEntityLicenseResult: function(inSender, inDeprecated) {
try {
if( inSender.getValue("dataValue") === "OK" ){
this.ddNewEntity.show();
} else {
alert("Maximum number of ENTITIES allowed has been reached!");
}
} catch(e) {
console.error('ERROR IN svarCheckEntityLicenseResult: ' + e);
alert( 'ERROR IN svarCheckEntityLicenseResult: ' + e );
}
},
//Added by Jammi Dee 08/15/2012
btnActionAddClick: function(inSender) {
try {
var currdate    = new Date();
var currmonth   = currdate.getMonth() + 1;
var currday     = currdate.getDate();
var curryear    = currdate.getFullYear();
var sdate       = curryear + "-" + currmonth + "-" + currday;
var edate       = sdate;
//Used this UUID generation when database UUID is not available
var UUID = this.uuid4();
//alert( UUID );
var eQuery =           "insert into tblentity( " +
"juid, " +
"entityid, " +
"company, " +
"description, " +
"addr01, " +
"addr02, " +
"addr03, " +
"sstatus, " +
"startdate, " +
"enddate, " +
"deleted " +
")" +
"values( " +
"'" + UUID + "', " +
"'" + this.txtEntityNew.getValue("dataValue") + "', " +
"'" + this.txtCompanyNew.getValue("dataValue") + "', " +
"'" + this.txtDescriptionNew.getValue("dataValue") + "', " +
"'" + this.txtaAddress01.getValue("dataValue") + "', " +
"'" + this.txtaAddress02.getValue("dataValue") + "', " +
"'" + this.txtaAddress03.getValue("dataValue") + "', " +
"'" + "ACTIVE" + "', " +
"'" + sdate + "', " +
"'" + edate + "', " +
"0 " +
");";
//alert( eQuery );
this.svarExecGenericNonQuery.setValue("input.eQuery", eQuery);
this.svarExecGenericNonQuery.update();
this.ddNewEntity.hide();
} catch(e) {
console.error('ERROR IN btnActionAddClick: ' + e);
alert( 'ERROR IN btnActionAddClick: ' + e );
}
},
//http://blogs.cozi.com/tech/2010/04/generating-uuids-in-javascript.html
uuid4: function()
{
return this._uuid( this.randomInt(), this.randomInt(), this.randomInt(), this.randomInt(), 4);
},
// Create a versioned UUID from w1..w4, 32-bit non-negative ints
_uuid: function(w1, w2, w3, w4, version)
{
//var uuid = new Array(36);
var uuid = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
var data = [
(w1 & 0xFFFFFFFF),
(w2 & 0xFFFF0FFF) | ((version || 4) << 12), // version (1-5)
(w3 & 0x3FFFFFFF) | 0x80000000,    // rfc 4122 variant
(w4 & 0xFFFFFFFF)
];
for (var i = 0, k = 0; i < 4; i++)
{
var rnd = data[i];
for (var j = 0; j < 8; j++)
{
if (k == 8 || k == 13 || k == 18 || k == 23) {
uuid[k++] = '-';
}
var r = (rnd >>> 28) & 0xf; // Take the high-order nybble
rnd = (rnd & 0x0FFFFFFF) << 4;
uuid[k++] = this.hex.charAt(r);
}
}
return uuid.join('');
},
hex: '0123456789abcdef',
// Return a random integer in [0, 2^32).
randomInt: function()
{
return Math.floor(0x100000000 * Math.random());
},
//Added by Jammi Dee 08/15/2012
svarExecGenericNonQueryResult: function(inSender, inDeprecated) {
try {
this.svarEntity.update();
this.dgLookup.dataSet.update();
alert( "New Entity has been added." );
} catch(e) {
console.error('ERROR IN svarExecGenericNonQueryResult: ' + e);
alert( 'ERROR IN svarExecGenericNonQueryResult: ' + e );
}
},
//Added by Jammi Dee 08/15/2012
ddNewEntityShow: function(inSender) {
try {
} catch(e) {
console.error('ERROR IN ddNewEntityShow: ' + e);
alert( 'ERROR IN ddNewEntityShow: ' + e );
}
},
pic_deleteClick: function(inSender) {
try {
var response = confirm("Delete: Are you sure to delete this ENTITY?");
if (response) {
this.svarEntityDelete.setValue("input.pEntity", this.dgLookup.selectedItem.getData().entityid );
this.svarEntityDelete.update();
}
} catch(e) {
console.error('ERROR IN pic_deleteClick: ' + e);
alert( 'ERROR IN pic_deleteClick: ' + e );
}
},
svarEntityDeleteResult: function(inSender, inDeprecated) {
try {
// Added by Jammi Dee 06/09/2012
this.svarEntity.update();
this.dgLookup.dataSet.update();
alert("Entity has been deleted.");
} catch(e) {
console.error('ERROR IN svarEntityDeleteResult: ' + e);
alert( 'ERROR IN svarEntityDeleteResult: ' + e );
}
},
//Added by Jammi Dee 05/05/2013
pic_backClick: function(inSender) {
try {
app.pdWaitLoadPage.show();
this.navPgMainMaintenance.update();
} catch(e) {
console.error('ERROR IN pic_backClick: ' + e);
alert( 'ERROR IN pic_backClick: ' + e );
}
},
//Added by Jammi Dee 05/05/2013
pic_homeClick: function(inSender) {
try {
app.pdWaitLoadPage.show();
this.navPgMain.update();
} catch(e) {
console.error('ERROR IN pic_homeClick: ' + e);
alert( 'ERROR IN pic_homeClick: ' + e );
}
},
//Added by Jammi Dee 05/05/2013
lblBackClick: function(inSender, inEvent) {
try {
app.pdWaitLoadPage.show();
this.navPgMain.update();
} catch(e) {
console.error('ERROR IN lblBackClick: ' + e);
alert( 'ERROR IN lblBackClick: ' + e );
}
},
_end: 0
});

PgMainMaintenanceEntity.widgets = {
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
svarEntity: ["wm.ServiceVariable", {"operation":"qryEntity","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryEntityInputs"}, {}]
}],
svarExecGenericNonQuery: ["wm.ServiceVariable", {"operation":"execNonQuery","service":"svcExecGenericNonQuery"}, {"onResult":"svarExecGenericNonQueryResult"}, {
input: ["wm.ServiceInput", {"type":"execNonQueryInputs"}, {}]
}],
svarEntityDelete: ["wm.ServiceVariable", {"operation":"qryEntityDelete","service":"dbwaveerp"}, {"onResult":"svarEntityDeleteResult"}, {
input: ["wm.ServiceInput", {"type":"qryEntityDeleteInputs"}, {}]
}],
svarCheckEntityLicense: ["wm.ServiceVariable", {"operation":"checkEntityLicense","service":"svcLicenseSystem"}, {"onResult":"svarCheckEntityLicenseResult"}, {
input: ["wm.ServiceInput", {"type":"checkEntityLicenseInputs"}, {}]
}],
pdLoading: ["wm.PageDialog", {"desktopHeight":"100px","height":"100px","hideControls":true,"pageName":"Main","width":"280px"}, {}],
ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","corner":"cr","modal":false,"title":"Entity List Help"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgMainMaintenanceEntity.html"}, {}]
}],
buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnClose: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddPgMainConfigHelp.hide"}]
}]
}],
pdAbout: ["wm.PageDialog", {"desktopHeight":"341px","height":"341px","noEscape":true,"noMaxify":true,"noMinify":true,"pageName":"PgAbout","width":"616px"}, {}],
ddNewEntity: ["wm.DesignableDialog", {"buttonBarId":"buttonBar1","containerWidgetId":"containerWidget1","title":"Add New Entity","width":"550px"}, {"onShow":"ddNewEntityShow"}, {
containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
txtEntityNew: ["wm.Text", {"caption":"Entity:","captionAlign":"left","dataValue":undefined,"displayValue":"","placeHolder":"Entity ID","width":"250px"}, {}],
txtCompanyNew: ["wm.Text", {"caption":"Company:","captionAlign":"left","dataValue":undefined,"displayValue":"","placeHolder":"Your company name","width":"400px"}, {}],
txtDescriptionNew: ["wm.Text", {"caption":"Description:","captionAlign":"left","dataValue":undefined,"displayValue":"","placeHolder":"Description","width":"500px"}, {}],
txtaAddress01: ["wm.LargeTextArea", {"caption":"Address 01","captionPosition":"left","captionSize":"100px","dataValue":undefined,"desktopHeight":"72px","displayValue":"","height":"72px","width":"500px"}, {}],
txtaAddress02: ["wm.LargeTextArea", {"caption":"Address 02","captionPosition":"left","captionSize":"100px","dataValue":undefined,"desktopHeight":"72px","displayValue":"","height":"72px","width":"500px"}, {}],
txtaAddress03: ["wm.LargeTextArea", {"caption":"Address 03","captionPosition":"left","captionSize":"100px","dataValue":undefined,"desktopHeight":"72px","displayValue":"","height":"72px","width":"500px"}, {}],
pnlDate: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
dtStartNew: ["wm.Date", {"caption":"Start Date:","captionAlign":"left","dataValue":undefined,"displayValue":"","width":"250px"}, {}],
dtEndNew: ["wm.Date", {"caption":"End Date:","captionAlign":"left","captionSize":"80px","dataValue":undefined,"displayValue":"","width":"250px"}, {}]
}]
}],
buttonBar1: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","fitToContentHeight":true,"height":"33px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnActionAdd: ["wm.Button", {"caption":"Add","margin":"4"}, {"onclick":"btnActionAddClick"}],
btnActionCancel: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"ddNewEntity.hide"}]
}]
}],
pnlLayoutMain: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"horizontalAlign":"left","verticalAlign":"top","width":"829px"}, {}, {
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
pic_add: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Add new Entity","source":"resources/images/buttons/addball24.png","width":"30px"}, {"onclick":"pic_addClick"}],
pic_delete: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Delete Application Entry","source":"resources/images/buttons/Recyclebin24.png","width":"30px"}, {"onclick":"pic_deleteClick"}]
}],
pnlMenuButtonRight: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
pic_help: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Help","source":"resources/images/buttons/helpred24.png","width":"24px"}, {"onclick":"ddPgMainConfigHelp.show"}],
pic_about: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"About","source":"resources/images/buttons/aboutblue24.png","width":"24px"}, {"onclick":"pdAbout.show"}]
}]
}],
spacer1: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
pnlLookup: ["wm.FancyPanel", {"innerLayoutKind":"left-to-right","title":"Entity ( Cross-Entity List )"}, {}, {
pnlLookupGrid: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"180px"}, {}, {
dgLookup: ["wm.DojoGrid", {"columns":[{"show":false,"title":"ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"seqid"},{"show":true,"title":"ENTITY","width":"150px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":false,"title":"Start Date","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"startdate"},{"show":false,"title":"End Date","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"enddate"},{"show":false,"title":"Juid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"juid"},{"show":false,"title":"Company","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"company"},{"show":false,"title":"Description","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"description"},{"show":false,"title":"Addr01","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"addr01"},{"show":false,"title":"Addr02","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"addr02"},{"show":false,"title":"Addr03","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"addr03"},{"show":false,"title":"Sstatus","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"show":false,"title":"Deleted","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"deleted"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>ENTITY: \" + ${entityid} + \"</div>\"\n"}],"height":"100%","localizationStructure":{},"margin":"4"}, {"onClick":"dgLookupClick","onSelect":"dgLookupClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarEntity","targetProperty":"dataSet"}, {}]
}]
}]
}],
splitEntity: ["wm.Splitter", {"_classes":{"domNode":["wm_BackgroundColor_LightGray"]},"height":"100%","width":"4px"}, {}],
pnlControl: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
spacer2: ["wm.Spacer", {"height":"22px","width":"96px"}, {}],
txtEntity: ["wm.Text", {"caption":"Entity","captionAlign":"left","dataValue":undefined,"displayValue":"","placeHolder":"WAVEERP","width":"250px"}, {}],
txtCompany: ["wm.Text", {"caption":"Company","captionAlign":"left","dataValue":undefined,"displayValue":"","placeHolder":"Wave ERP","width":"400px"}, {}],
txtDescription: ["wm.Text", {"caption":"Description","captionAlign":"left","dataValue":undefined,"displayValue":"","placeHolder":"Wave Enterprise","width":"400px"}, {}],
txtaAddr01: ["wm.LargeTextArea", {"caption":"Address 01","captionPosition":"left","captionSize":"100px","dataValue":undefined,"desktopHeight":"60px","displayValue":"","height":"60px","width":"600px"}, {}],
txtaAddr02: ["wm.LargeTextArea", {"caption":"Address 02","captionPosition":"left","captionSize":"100px","dataValue":undefined,"desktopHeight":"60px","displayValue":"","height":"60px","width":"600px"}, {}],
txtaAddr03: ["wm.LargeTextArea", {"caption":"Address 03","captionPosition":"left","captionSize":"100px","dataValue":undefined,"desktopHeight":"60px","displayValue":"","height":"60px","width":"600px"}, {}],
pnlDates: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
dtStart: ["wm.DateTime", {"caption":"Start Date","captionAlign":"left","displayValue":""}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":false,"source":"dgLookup.selectedItem.startdate","targetProperty":"dataValue"}, {}]
}]
}],
dtEnd: ["wm.DateTime", {"caption":"End Date","captionAlign":"left","displayValue":""}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":false,"source":"dgLookup.selectedItem.enddate","targetProperty":"dataValue"}, {}]
}]
}]
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

PgMainMaintenanceEntity.prototype._cssText = 'body.tundra .PgMainMaintenanceEntity .wmlayout .PgMainMaintenanceEntity-pnlHeader {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainMaintenanceEntity .wmlayout .PgMainMaintenanceEntity-pnlTitle {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainMaintenanceEntity .wmlayout .PgMainMaintenanceEntity-lblTitle {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:14pt;\
}\
body.tundra .PgMainMaintenanceEntity .wmlayout .PgMainMaintenanceEntity-pnlMenuBar {\
background-color:#00008B;\
}\
body.tundra .PgMainMaintenanceEntity .wmlayout .PgMainMaintenanceEntity-pnlFooter {\
background-color:#00008B;\
}\
body.tundra .PgMainMaintenanceEntity .wmlayout .PgMainMaintenanceEntity-txtUserId {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainMaintenanceEntity .PgMainMaintenanceEntity-pnlLayoutMain.wmlayout {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainMaintenanceEntity .wmlayout .PgMainMaintenanceEntity-txtPassword {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainMaintenanceEntity .wmlayout .PgMainMaintenanceEntity-lblManageTicket {\
font-family: Tahoma;\
}\
body.tundra .PgMainMaintenanceEntity .wmlayout .PgMainMaintenanceEntity-lblUserInfo {\
font-family:Tahoma;\
}\
body.tundra .PgMainMaintenanceEntity .wmlayout .PgMainMaintenanceEntity-lblBorder {\
font-family:Tahoma;\
}\
body.tundra .PgMainMaintenanceEntity .wmlayout .PgMainMaintenanceEntity-lblLogout {\
font-family:Tahoma;\
}\
body.tundra .PgMainMaintenanceEntity .wmlayout .PgMainMaintenanceEntity-lblSep {\
font-family:Tahoma;\
}\
body.tundra .PgMainMaintenanceEntity .wmlayout .PgMainMaintenanceEntity-lblManageUser {\
font-family:Tahoma;\
}\
body.tundra .PgMainMaintenanceEntity .wmlayout .PgMainMaintenanceEntity-pnlBody {\
}\
body.tundra .PgMainMaintenanceEntity .wmlayout .PgMainMaintenanceEntity-lblManageLookUp {\
font-family:Tahoma;\
}\
';
PgMainMaintenanceEntity.prototype._htmlText = '';