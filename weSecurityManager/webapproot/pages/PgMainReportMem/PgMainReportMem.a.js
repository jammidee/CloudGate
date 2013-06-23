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
* Date: 07/20/2012
* Modified by: Jammi Dee 06/10/2013
*
*/
/*
This is a sample page that can used as template
*/
dojo.declare("PgMainReportMem", wm.Page, {
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
app.svarLogging.setValue("input.pMsg","View Report / Memory Status Page.");
app.svarLogging.setValue("input.pModuleId","REPORT");
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
app.pdWaitLoadPage.hide();
//Added by Jammi Dee 06/10/2013
this.svarGetFreeVsUsedVsAvail.update();
//Activate timer
this.tmrTime.update();
} catch (e) {
app.toastError(this.name + ".start() Failed: " + e.toString());
}
},
/*
* 03/25/2012 - Jammi Dee
* Initialize the template variables here
*/
initApplication: function() {
this.lblTitle.setCaption("Report : Memory Status" );
this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
},
// Added by Jammi Dee 05/31/2012
ddSelectEntityShow: function(inSender) {
try {
this.svarSelectEntity.update();
} catch(e) {
console.error('ERROR IN ddSelectEntityShow: ' + e);
}
},
Left: function(str, n) {
if (n <= 0)
return "";
else if (n > String(str).length)
return str;
else
return String(str).substring(0,n);
},
Right: function(str, n) {
if (n <= 0)
return "";
else if (n > String(str).length)
return str;
else {
var iLen = String(str).length;
return String(str).substring(iLen, iLen - n);
}
},
//Added by Jammi Dee 06/10/2013
svarGetFreeVsUsedVsAvailResult: function(inSender, inDeprecated) {
try {
//alert(inSender.getValue("dataValue"));
// Contains a value pair data
// Example: Celtics,56,Bostom,30,Rockets,89, = must end in ","
var newdata = [];
var strArr = inSender.getValue("dataValue");
var iloops   = 0;  // protection from runaway loop
var strName  = "";
var strValue = "";
while( strArr.indexOf(",") > 0 || strName !== "" ){
strName   = this.Left(strArr, strArr.indexOf(",") );
strArr    = strArr.substring( strArr.indexOf(",") + 1, strArr.length );
strValue  = this.Left(strArr, strArr.indexOf(",") );
strArr    = strArr.substring( strArr.indexOf(",") + 1, strArr.length );
//alert( strName + ":" + strValue );
if (strName !== ""){
newdata.push({name: strName, dataValue: parseInt(strValue, 10) });
} else {
}
iloops++;
}
this.varChart.setData(newdata);
this.dcAllocAvail.renderDojoObj();
//Call the Free vs Used memory
this.svarGetFreeVsUsed.update();
} catch(e) {
console.error('ERROR IN svarGetFileTypeGraphResult: ' + e);
alert( 'ERROR IN svarGetFileTypeGraphResult: ' + e );
}
},
//Added by Jammi Dee 06/10/2013
svarGetFreeVsUsedResult: function(inSender, inDeprecated) {
try {
var newdata = [];
var strArr = inSender.getValue("dataValue");
var iloops   = 0;  // protection from runaway loop
var strName  = "";
var strValue = "";
while( strArr.indexOf(",") > 0 || strName !== "" ){
strName   = this.Left(strArr, strArr.indexOf(",") );
strArr    = strArr.substring( strArr.indexOf(",") + 1, strArr.length );
strValue  = this.Left(strArr, strArr.indexOf(",") );
strArr    = strArr.substring( strArr.indexOf(",") + 1, strArr.length );
//alert( strName + ":" + strValue );
if (strName !== ""){
newdata.push({name: strName, dataValue: parseInt(strValue, 10) });
} else {
}
iloops++;
}
this.varChartBar.setData(newdata);
this.dcFreeUsed.renderDojoObj();
} catch(e) {
console.error('ERROR IN svarGetFreeVsUsedResult: ' + e);
}
},
//Update the dynamic memory display
tmrTimeTimerFire: function(inSender) {
try {
//Added by Jammi Dee 06/10/2013
this.svarGetFreeVsUsedVsAvail.update();
} catch(e) {
console.error('ERROR IN tmrTimeTimerFire: ' + e);
}
},
_end: 0
});

PgMainReportMem.widgets = {
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
svarSelectEntity: ["wm.ServiceVariable", {"operation":"qryEntitySelect","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryEntitySelectInputs"}, {}]
}],
navPgMainReport: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMainReport\"","targetProperty":"pageName"}, {}]
}]
}]
}],
svarGetFileTypeGraph: ["wm.ServiceVariable", {"operation":"loadGraphData","service":"svcDocGraphFunctions"}, {"onResult":"svarGetFileTypeGraphResult"}, {
input: ["wm.ServiceInput", {"type":"loadGraphDataInputs"}, {}]
}],
varChart: ["wm.Variable", {"isList":true,"type":"EntryData"}, {}],
varChartBar: ["wm.Variable", {"isList":true,"type":"EntryData"}, {}],
svarGetDocTypeGraph: ["wm.ServiceVariable", {"operation":"loadGraphData","service":"svcDocGraphFunctions"}, {"onResult":"svarGetDocTypeGraphResult"}, {
input: ["wm.ServiceInput", {"type":"loadGraphDataInputs"}, {}]
}],
varChartStatus: ["wm.Variable", {"isList":true,"type":"EntryData"}, {}],
svarGetStatusType: ["wm.ServiceVariable", {"operation":"loadGraphData","service":"svcDocGraphFunctions"}, {"onResult":"svarGetStatusTypeResult"}, {
input: ["wm.ServiceInput", {"type":"loadGraphDataInputs"}, {}]
}],
svarGetFreeVsUsed: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getFreeVsUsedMemory","service":"svcUtility"}, {"onResult":"svarGetFreeVsUsedResult"}, {
input: ["wm.ServiceInput", {"type":"getFreeVsUsedMemoryInputs"}, {}]
}],
tmrTime: ["wm.Timer", {"delay":2000}, {"onTimerFire":"tmrTimeTimerFire"}],
svarGetFreeVsUsedVsAvail: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getAvailableVsFreeVsUsedMemory","service":"svcUtility"}, {"onResult":"svarGetFreeVsUsedVsAvailResult"}, {
input: ["wm.ServiceInput", {"type":"getAvailableVsFreeVsUsedMemoryInputs"}, {}]
}],
pdLoading: ["wm.PageDialog", {"desktopHeight":"100px","height":"100px","hideControls":true,"pageName":"Main","width":"280px"}, {}],
ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","title":"System Statistics Help"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgMainReportStats.html"}, {}]
}],
buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnClose: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddPgMainConfigHelp.hide"}]
}]
}],
pdAbout: ["wm.PageDialog", {"desktopHeight":"341px","height":"341px","noEscape":true,"noMaxify":true,"noMinify":true,"pageName":"PgAbout","width":"616px"}, {}],
ddSelectEntity: ["wm.DesignableDialog", {"buttonBarId":"buttonBar1","containerWidgetId":"containerWidget1","title":"Select Entity","width":"800px"}, {"onShow":"ddSelectEntityShow"}, {
containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
dgDataSelect: ["wm.DojoGrid", {"columns":[{"show":false,"title":"Seqid","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"seqid"},{"show":false,"title":"Juid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"juid"},{"show":true,"title":"Entity ID","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":true,"title":"Company","width":"200px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"company"},{"show":true,"title":"Description","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"description"},{"show":false,"title":"Addr01","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"addr01"},{"show":false,"title":"Addr02","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"addr02"},{"show":false,"title":"Addr03","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"addr03"},{"show":false,"title":"Sstatus","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"show":false,"title":"Startdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"startdate"},{"show":false,"title":"Enddate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"enddate"},{"show":false,"title":"Deleted","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"deleted"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Company: \" + ${company} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n"}],"height":"100%","localizationStructure":{},"margin":"4"}, {}, {
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
pnlTitle: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","styles":{"backgroundImage":"url(resources/images/logos/waveerpbar.jpg)"},"verticalAlign":"middle","width":"100%"}, {}, {
lblTitle: ["wm.Label", {"align":"right","autoSizeHeight":true,"caption":"Wave ERP System","height":"23px","padding":"4","singleLine":false,"width":"600px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}],
pnlMenuBar: ["wm.Panel", {"height":"20px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#00008b"},"verticalAlign":"top","width":"100%"}, {}, {
pnlSubMenu: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"70%"}, {}, {
lblBack: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"caption":"Back","height":"100%","padding":"4","width":"40px"}, {"onclick":"navPgMain"}, {
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
pic_home: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Home","source":"resources/images/buttons/home0224.png","width":"24px"}, {"onclick":"navPgMain"}],
Sep01: ["wm.Spacer", {"height":"24px","width":"5px"}, {}],
pic_back: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Back","source":"resources/images/buttons/arrowleft24.png","width":"24px"}, {"onclick":"navPgMainReport"}]
}],
pnlMenuButtonRight: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
pic_help: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Help","source":"resources/images/buttons/helpred24.png","width":"24px"}, {"onclick":"ddPgMainConfigHelp.show"}],
pic_about: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"About","source":"resources/images/buttons/aboutblue24.png","width":"24px"}, {"onclick":"pdAbout.show"}]
}]
}],
spacer1: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
pnlLeft: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
pnlAllocUsed: ["wm.FancyPanel", {"title":"Maximum Memory = (Free + Used) + Avail"}, {}, {
dcAllocAvail: ["wm.DojoChart", {"chartType":"Pie","height":"100%","padding":"4","theme":"Minty","width":"100%","xAxis":"name","yAxis":"dataValue"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":false,"source":"varChart","targetProperty":"dataSet"}, {}]
}]
}]
}]
}],
pnlRight: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
pnlFreeVsUsed: ["wm.FancyPanel", {"title":"Allocated Memory = Free + Used"}, {}, {
dcFreeUsed: ["wm.DojoChart", {"chartType":"Pie","height":"100%","padding":"4","theme":"MiamiNice","width":"100%","xAxis":"name","yAxis":"dataValue"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":false,"source":"varChartBar","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
}],
pnlControl: ["wm.Panel", {"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}],
pnlFooter: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel","wm_BackgroundChromeBar_LightBlue"]},"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
lblFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"...","height":"20px","padding":"4","styles":{"backgroundGradient":{"direction":"horizontal","startColor":"#03036d","endColor":"#d8cbf2","colorStop":31}},"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}]
};

PgMainReportMem.prototype._cssText = 'body.tundra .PgMainReportMem .wmlayout .PgMainReportMem-pnlHeader {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainReportMem .wmlayout .PgMainReportMem-pnlTitle {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainReportMem .wmlayout .PgMainReportMem-lblTitle {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:14pt;\
}\
body.tundra .PgMainReportMem .wmlayout .PgMainReportMem-pnlMenuBar {\
background-color:#00008B;\
}\
body.tundra .PgMainReportMem .wmlayout .PgMainReportMem-pnlFooter {\
background-color:#00008B;\
}\
body.tundra .PgMainReportMem .wmlayout .PgMainReportMem-txtUserId {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainReportMem .PgMainReportMem-pnlLayoutMain.wmlayout {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainReportMem .wmlayout .PgMainReportMem-txtPassword {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainReportMem .wmlayout .PgMainReportMem-lblManageTicket {\
font-family: Tahoma;\
}\
body.tundra .PgMainReportMem .wmlayout .PgMainReportMem-lblUserInfo {\
font-family:Tahoma;\
}\
body.tundra .PgMainReportMem .wmlayout .PgMainReportMem-lblBorder {\
font-family:Tahoma;\
}\
body.tundra .PgMainReportMem .wmlayout .PgMainReportMem-lblLogout {\
font-family:Tahoma;\
}\
body.tundra .PgMainReportMem .wmlayout .PgMainReportMem-lblSep {\
font-family:Tahoma;\
}\
body.tundra .PgMainReportMem .wmlayout .PgMainReportMem-lblManageUser {\
font-family:Tahoma;\
}\
body.tundra .PgMainReportMem .wmlayout .PgMainReportMem-pnlBody {\
}\
body.tundra .PgMainReportMem .wmlayout .PgMainReportMem-lblManageLookUp {\
font-family:Tahoma;\
}\
';
PgMainReportMem.prototype._htmlText = '';