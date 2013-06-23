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
* Date: 06/15/2013
* Modified by: Jammi Dee 06/15/2013
*
*/
/*
This is a sample page that can used as template
*/
dojo.declare("PgMainToolsQRCode", wm.Page, {
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
app.svarLogging.setValue("input.pMsg","View Leaf Template Page.");
app.svarLogging.setValue("input.pModuleId","LEAF");
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
this.selContent.setOptions("Contact Information, Email Address, URL, Phone Number, SMS, WIFI Network, Text");
this.pic_sendQRCode.setShowing(false);
//Added by Jammi Dee 06/17/2013
this.hideAllInput();
this.showContactInformationInput();
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
this.lblTitle.setCaption("Tools : QR Code Generator" );
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
btnSearchUserIDClick: function(inSender) {
try {
var s;
this.svarUserView.setValue("input.pStatus", "ACTIVE");
this.svarUserView.setValue("input.pEntityId", app.varEntity.getValue("dataValue") );
if(typeof this.txtSearch.getValue("dataValue") !== "undefined" && typeof this.txtUname.getValue("dataValue") == "undefined" && typeof this.txtEMail.getValue("dataValue") == "undefined"){
this.svarUserView.setValue("input.pUserId", this.txtSearch.getValue("dataValue"));
this.svarUserView.setValue("input.pUsername", "%");
this.svarUserView.setValue("input.pEmail", "%");
}else if(typeof this.txtSearch.getValue("dataValue") == "undefined" && typeof this.txtUname.getValue("dataValue") !== "undefined" && typeof this.txtEMail.getValue("dataValue") == "undefined"){
this.svarUserView.setValue("input.pUserId", "%");
this.svarUserView.setValue("input.pUsername", this.txtUname.getValue("dataValue"));
this.svarUserView.setValue("input.pEmail", "%");
}else if(typeof this.txtSearch.getValue("dataValue") == "undefined" && typeof this.txtUname.getValue("dataValue") == "undefined" && typeof this.txtEMail.getValue("dataValue") !== "undefined"){
this.svarUserView.setValue("input.pUserId", "%");
this.svarUserView.setValue("input.pUsername", "%");
this.svarUserView.setValue("input.pEmail", this.txtEMail.getValue("dataValue"));
}else if(typeof this.txtSearch.getValue("dataValue") !== "undefined" && typeof this.txtUname.getValue("dataValue") !== "undefined" && typeof this.txtEMail.getValue("dataValue") == "undefined"){
this.svarUserView.setValue("input.pUserId", this.txtSearch.getValue("dataValue"));
this.svarUserView.setValue("input.pUsername", this.txtUname.getValue("dataValue"));
this.svarUserView.setValue("input.pEmail", "%");
}else if(typeof this.txtSearch.getValue("dataValue") !== "undefined" && typeof this.txtUname.getValue("dataValue") == "undefined" && typeof this.txtEMail.getValue("dataValue") !== "undefined"){
this.svarUserView.setValue("input.pUserId", this.txtSearch.getValue("dataValue"));
this.svarUserView.setValue("input.pUsername", "%");
this.svarUserView.setValue("input.pEmail", this.txtEMail.getValue("dataValue"));
}else if(typeof this.txtSearch.getValue("dataValue") == "undefined" && typeof this.txtUname.getValue("dataValue") !== "undefined" && typeof this.txtEMail.getValue("dataValue") !== "undefined"){
this.svarUserView.setValue("input.pUserId", "%");
this.svarUserView.setValue("input.pUsername", this.txtUname.getValue("dataValue"));
this.svarUserView.setValue("input.pEmail", this.txtEMail.getValue("dataValue"));
}else{
//s = this.txtSearch.getValue("dataValue");
this.svarUserView.setValue("input.pUserId", "%");
this.svarUserView.setValue("input.pUsername", "%");
this.svarUserView.setValue("input.pEmail", "%");
}
this.svarUserView.update();
this.dgUserView.dataSet.update();
} catch(e) {
console.error('ERROR IN btnSearchUserIDClick: ' + e);
alert( 'ERROR IN btnSearchUserIDClick: ' + e );
}
},
//Added by Jammi Dee 05/01/2013
pic_backClick: function(inSender) {
try {
app.pdWaitLoadPage.show();
this.navPgMainTools.update();
} catch(e) {
console.error('ERROR IN pic_backClick: ' + e);
}
},
//Added by Jammi Dee 05/01/2013
pic_homeClick: function(inSender) {
try {
app.pdWaitLoadPage.show();
this.navPgMain.update();
} catch(e) {
console.error('ERROR IN pic_homeClick: ' + e);
}
},
//Added by Jammi Dee 05/01/2013
lblBackClick: function(inSender, inEvent) {
try {
app.pdWaitLoadPage.show();
this.navPgMain.update();
} catch(e) {
console.error('ERROR IN lblBackClick: ' + e);
}
},
//Added by Jammi Dee 06/15/2013
selContentChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
try {
if( this.selContent.getValue("dataValue") === "Contact Information" ){
this.hideAllInput();
this.showContactInformationInput();
} else if( this.selContent.getValue("dataValue") === "Email Address" ){
this.hideAllInput();
this.showEmailAddressInput();
} else if( this.selContent.getValue("dataValue") === "URL" ){
this.hideAllInput();
this.showURLInput();
} else if( this.selContent.getValue("dataValue") === "Phone Number" ){
this.hideAllInput();
this.showPhoneNumberInput();
} else if( this.selContent.getValue("dataValue") === "SMS" ){
this.hideAllInput();
this.showSMSInput();
} else if( this.selContent.getValue("dataValue") === "WIFI Network" ){
this.hideAllInput();
this.showWIFINetworkInput();
} else if( this.selContent.getValue("dataValue") === "Text" ){
this.hideAllInput();
this.showTextInput();
} else {
this.hideAllInput();
}
} catch(e) {
console.error('ERROR IN selContentChange: ' + e);
}
},
//Added by Jammi Dee 06/15/2013
btnGenerateQRCodeClick: function(inSender) {
try {
var strData = "";
if( this.selContent.getValue("dataValue") === "Contact Information" ){
if( this.selEncoding.getValue("dataValue") === "MECARD" ){
strData = strData + "MECARD:";
strData = strData + "N:" + this.txtName.getValue("dataValue") + ";";
strData = strData + "ORG:" + this.txtCompany.getValue("dataValue") + ";";
strData = strData + "TEL:" + this.txtPhoneNo.getValue("dataValue") + ";";
strData = strData + "URL:" + this.txtWebsite.getValue("dataValue") + ";";
strData = strData + "EMAIL:" + this.txtEmail.getValue("dataValue") + ";";
strData = strData + "ADR:" + this.txtAddress01.getValue("dataValue") + " " + this.txtAddress02.getValue("dataValue") + ";";
strData = strData + "NOTE:" + this.txtMemo.getValue("dataValue") + ";;";
} else {
strData = strData + "BEGIN:VCARD\r\n";
strData = strData + "N:" + this.txtName.getValue("dataValue") + "\r\n";
strData = strData + "ORG:" + this.txtCompany.getValue("dataValue") + "\r\n";
strData = strData + "TEL:" + this.txtPhoneNo.getValue("dataValue") + "\r\n";
strData = strData + "URL:" + this.txtWebsite.getValue("dataValue") + "\r\n";
strData = strData + "EMAIL:" + this.txtEmail.getValue("dataValue") + "\r\n";
strData = strData + "ADR:" + this.txtAddress01.getValue("dataValue") + " " + this.txtAddress02.getValue("dataValue") + "\r\n";
strData = strData + "NOTE:" + this.txtMemo.getValue("dataValue") + "\r\n";
strData = strData + "END:VCARD\r\n";
}
} else if( this.selContent.getValue("dataValue") === "Email Address" ){
strData = strData + "mailto:" + this.txtEmail.getValue("dataValue") + "";
} else if( this.selContent.getValue("dataValue") === "URL" ){
strData = strData + this.txtWebsite.getValue("dataValue") + "";
} else if( this.selContent.getValue("dataValue") === "Phone Number" ){
strData = strData + "tel:" + this.txtPhoneNo.getValue("dataValue") + "";
} else if( this.selContent.getValue("dataValue") === "SMS" ){
strData = strData + "smsto:" + this.txtPhoneNo.getValue("dataValue") + ":" + this.txtMemo.getValue("dataValue");
} else if( this.selContent.getValue("dataValue") === "WIFI Network" ){
strData = strData + "WIFI:S" + this.txtSSID.getValue("dataValue") + ";T:" + this.selNetwork.getValue("dataValue") + ";P:" + this.txtPasswd.getValue("dataValue") + ";;";
} else if( this.selContent.getValue("dataValue") === "Text" ){
strData = strData + this.txtMemo.getValue("dataValue");
} else {
}
this.fraQRCode.setSource("");
this.txtaData.setValue("dataValue", strData );
//Added by Jammi Dee 06/16/2013
this.svarCreateQRCode.setValue("input.sourceData", strData );
this.svarCreateQRCode.setValue("input.targetFile", app.varUserId.getValue("dataValue") + "qrcode.png" );
this.svarCreateQRCode.setValue("input.targetSize", this.selBarSize.getValue("dataValue") );
this.svarCreateQRCode.update();
//User can now send this QR Code
this.pic_sendQRCode.setShowing(true);
} catch(e) {
console.error('ERROR IN btnGenerateQRCodeClick: ' + e);
}
},
//Added by Jammi Dee 06/16/2013
svarCreateQRCodeResult: function(inSender, inDeprecated) {
try {
var UUID = app.uuid4();
//Update the QR-Code view
this.fraQRCode.setSource("http://" + window.location.hostname + ":" + window.location.port + "/" + app.varAppContext.getValue("dataValue") + "/" + inSender.getValue("dataValue") + "?pagemode=none#toolbar=0&statusbar=0messages=0&navpanes=0&jmdid=" + UUID );
} catch(e) {
console.error('ERROR IN svarCreateQRCodeResult: ' + e);
alert( 'ERROR IN svarCreateQRCodeResult: ' + e );
}
},
hideAllInput: function(){
this.txtName.setShowing(false);
this.txtCompany.setShowing(false);
this.txtTitle.setShowing(false);
this.txtPhoneNo.setShowing(false);
this.txtEmail.setShowing(false);
this.txtAddress01.setShowing(false);
this.txtAddress02.setShowing(false);
this.txtWebsite.setShowing(false);
this.txtMemo.setShowing(false);
this.txtSSID.setShowing(false);
this.selNetwork.setShowing(false);
this.txtPasswd.setShowing(false);
this.selEncoding.setShowing(false);
},
showContactInformationInput: function(){
this.txtName.setShowing(true);
this.txtCompany.setShowing(true);
this.txtTitle.setShowing(true);
this.txtPhoneNo.setShowing(true);
this.txtEmail.setShowing(true);
this.txtAddress01.setShowing(true);
this.txtAddress02.setShowing(true);
this.txtWebsite.setShowing(true);
this.txtMemo.setShowing(true);
this.selEncoding.setShowing(true);
},
showEmailAddressInput: function(){
this.txtEmail.setShowing(true);
},
showURLInput: function(){
this.txtWebsite.setShowing(true);
},
//Added by Jammi Dee 06/16/2013
showPhoneNumberInput: function(){
this.txtPhoneNo.setShowing(true);
},
//Added by Jammi Dee 06/16/2013
showSMSInput: function(){
this.txtPhoneNo.setShowing(true);
this.txtMemo.setShowing(true);
},
//Added by Jammi Dee 06/16/2013
showWIFINetworkInput: function(){
this.txtSSID.setShowing(true);
this.selNetwork.setShowing(true);
this.txtPasswd.setShowing(true);
},
//Added by Jammi Dee 06/18/2013
showTextInput: function(){
this.txtMemo.setShowing(true);
},
//Added by Jammi Dee 06/16/2013
pic_sendQRCodeClick: function(inSender) {
try {
this.ddSendFile.show();
} catch(e) {
console.error('ERROR IN pic_sendQRCodeClick: ' + e);
}
},
btnSendFileSendClick: function(inSender) {
try {
app.pdWaitLoadPage.show();
this.svarSendEmailWithAttach.setValue("input.strSource",           app.varEmail.getValue("dataValue") );
this.svarSendEmailWithAttach.setValue("input.strSourceDesc",       app.varEmail.getValue("dataValue") );
this.svarSendEmailWithAttach.setValue("input.strDestination",      this.txtEmail01.getValue("dataValue") );
this.svarSendEmailWithAttach.setValue("input.strDestDesc",         this.txtEmail01.getValue("dataValue") );
this.svarSendEmailWithAttach.setValue("input.strSubject",          "Cloud Gate DMS Document Sharing - QR Code.");
this.svarSendEmailWithAttach.setValue("input.strMsg",              "Hi [" + this.txtEmail01.getValue("dataValue") + "]. [" + app.varEmail.getValue("dataValue") + "] shares a QR-Code for you.");
this.svarSendEmailWithAttach.setValue("input.strPath",             "/customdata/temp/" + app.varUserId.getValue("dataValue") + "qrcode.png" );
this.svarSendEmailWithAttach.update();
} catch(e) {
console.error('ERROR IN pic_sendQRCodeClick: ' + e);
}
},
svarSendEmailWithAttachResult: function(inSender, inDeprecated) {
try {
app.pdWaitLoadPage.hide();
this.ddSendFile.hide();
app.toastSuccess("QR-Code has been sent...");
} catch(e) {
console.error('ERROR IN svarSendEmailWithAttachResult: ' + e);
}
},
_end: 0
});

PgMainToolsQRCode.widgets = {
varOps: ["wm.Variable", {"type":"StringData"}, {}],
navPgMain: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMain\"","targetProperty":"pageName"}, {}]
}]
}]
}],
svarSelectEntity: ["wm.ServiceVariable", {"operation":"qryEntitySelect","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryEntitySelectInputs"}, {}]
}],
svarUserView: ["wm.ServiceVariable", {"operation":"qryUserView","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryUserViewInputs"}, {}]
}],
navPgMainTools: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMainTools\"","targetProperty":"pageName"}, {}]
}]
}]
}],
svarCreateQRCode: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"createQRCode","service":"scvQRCodeFunction"}, {"onResult":"svarCreateQRCodeResult"}, {
input: ["wm.ServiceInput", {"type":"createQRCodeInputs"}, {}]
}],
svarSendEmailWithAttach: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"sendMsgWithAttach","service":"svcSendMail"}, {"onResult":"svarSendEmailWithAttachResult"}, {
input: ["wm.ServiceInput", {"type":"sendMsgWithAttachInputs"}, {}]
}],
pdLoading: ["wm.PageDialog", {"desktopHeight":"100px","height":"100px","hideControls":true,"pageName":"Main","width":"280px"}, {}],
ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","title":"Configuration Help"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgMainConfig.html"}, {}]
}],
buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"fitToContentHeight":true,"height":"34px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
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
ddSelectUser: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget2","title":"Select User","width":"900px"}, {}, {
containerWidget2: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
dgUserView: ["wm.DojoGrid", {"columns":[{"show":true,"title":"Userid","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"userid"},{"show":false,"title":"Entityid","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":false,"title":"Password","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"password"},{"show":false,"title":"Passwdenc","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"passwdenc"},{"show":true,"title":"Username","width":"80px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"username"},{"show":true,"title":"Firstname","width":"18%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"firstname"},{"show":true,"title":"Middlename","width":"18%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"middlename"},{"show":true,"title":"Lastname","width":"18%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"lastname"},{"show":true,"title":"Email","width":"18%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"email"},{"show":true,"title":"Status","width":"60px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"show":false,"title":"Roleid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"roleid"},{"show":false,"title":"Startdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"startdate"},{"show":false,"title":"Enddate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"enddate"},{"show":false,"title":"Userimgext","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"userimgext"},{"show":false,"title":"Pid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"pid"},{"show":false,"title":"ParentPerson","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"parentPerson"},{"show":false,"title":"Deleted","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"deleted"},{"show":false,"field":"id","title":"Id","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"id.seqid","title":"Id.seqid","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"id.juid","title":"Id.juid","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Userid: \" + ${userid} + \"</div>\"\n+ \"<div class='MobileRow'>Username: \" + ${username} + \"</div>\"\n+ \"<div class='MobileRow'>Firstname: \" + ${firstname} + \"</div>\"\n+ \"<div class='MobileRow'>Middlename: \" + ${middlename} + \"</div>\"\n+ \"<div class='MobileRow'>Lastname: \" + ${lastname} + \"</div>\"\n+ \"<div class='MobileRow'>Email: \" + ${email} + \"</div>\"\n+ \"<div class='MobileRow'>Status: \" + ${sstatus} + \"</div>\"\n"}],"height":"100%","margin":"4"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarUserView","targetProperty":"dataSet"}, {}]
}]
}],
pnlSearch: ["wm.Panel", {"height":"10%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
txtSearch: ["wm.Text", {"caption":"Search by User:","captionAlign":"left","dataValue":undefined,"displayValue":"","width":"200px"}, {}],
txtUname: ["wm.Text", {"caption":"Username : ","captionAlign":"left","captionSize":"75px","dataValue":undefined,"displayValue":"","width":"200px"}, {}],
txtEMail: ["wm.Text", {"caption":"Email :","captionAlign":"left","captionSize":"50px","dataValue":undefined,"displayValue":"","width":"240px"}, {}],
txtUserStatus: ["wm.SelectMenu", {"caption":"Status :","captionAlign":"left","captionSize":"55px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","options":"ACTIVE,INACTIVE","width":"155px"}, {"onchange":"txtUserStatusChange"}],
btnSearchUserID: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue","wm_FontColor_White"]},"caption":"Search","margin":"4"}, {"onclick":"btnSearchUserIDClick"}]
}]
}],
buttonBar2: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnSelectUserSelect: ["wm.Button", {"caption":"Select","margin":"4"}, {}],
btnSelectUserCancel: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"ddSelectUser.hide"}]
}]
}],
ddSendFile: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget3","desktopHeight":"180px","height":"180px","title":"Send File","width":"450px"}, {}, {
containerWidget3: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
lblWarn: ["wm.Label", {"caption":"Warning!","padding":"4","styles":{"color":"#f20019","fontSize":"18px"}}, {}],
lblMsg: ["wm.Label", {"caption":"Sending this file will create copies on receiver's mailbox.","padding":"4","width":"100%"}, {}],
txtEmail01: ["wm.Text", {"caption":"Email Address:","captionAlign":"left","captionSize":"110px","dataValue":undefined,"displayValue":"","width":"100%"}, {}]
}],
buttonBar3: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","desktopHeight":"32px","enableTouchHeight":true,"fitToContentHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
btnSendFileSend: ["wm.Button", {"caption":"Send","margin":"4"}, {"onclick":"btnSendFileSendClick"}],
btnSendFileCancel: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"ddSendFile.hide"}]
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
pic_back: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Back","source":"resources/images/buttons/arrowleft24.png","width":"24px"}, {"onclick":"pic_backClick"}]
}],
pnlMenuButtonRight: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
pic_help: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Help","source":"resources/images/buttons/helpred24.png","width":"24px"}, {"onclick":"ddPgMainConfigHelp.show"}],
pic_about: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"About","source":"resources/images/buttons/aboutblue24.png","width":"24px"}, {"onclick":"pdAbout.show"}]
}]
}],
spacer1: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
pnlLeft: ["wm.Panel", {"fitToContentWidth":true,"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"102px"}, {}, {
pic_createQRCode: ["wm.Picture", {"hint":"Generate QR-Code","source":"resources/images/buttons/qrcode96.png"}, {}],
pic_sendQRCode: ["wm.Picture", {"hint":"Send QR-Code as attachment","source":"resources/images/buttons/sendemail96.png"}, {"onclick":"pic_sendQRCodeClick"}]
}],
pnlRight: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
pnlForm: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"400px"}, {}, {
selContent: ["wm.SelectMenu", {"caption":"Contents:","captionAlign":"left","captionSize":"140px","dataField":"dataValue","dataValue":"Contact Information","displayField":"dataValue","displayValue":"Contact Information","options":"Contact Information, Email Address, URL","width":"100%"}, {"onchange":"selContentChange"}],
txtName: ["wm.Text", {"caption":"Name:","captionAlign":"left","captionSize":"140px","dataValue":undefined,"displayValue":"","placeHolder":"Jammi Dee","width":"100%"}, {}],
txtCompany: ["wm.Text", {"caption":"Company:","captionAlign":"left","captionSize":"140px","dataValue":undefined,"displayValue":"","placeHolder":"Connext-PH","width":"100%"}, {}],
txtTitle: ["wm.Text", {"caption":"Title:","captionAlign":"left","captionSize":"140px","dataValue":undefined,"displayValue":"","placeHolder":"System Engineer","width":"100%"}, {}],
txtPhoneNo: ["wm.Text", {"caption":"Phone No:","captionAlign":"left","captionSize":"140px","dataValue":undefined,"displayValue":"","placeHolder":"+632","width":"100%"}, {}],
txtEmail: ["wm.Text", {"caption":"Email:","captionAlign":"left","captionSize":"140px","dataValue":undefined,"displayValue":"","placeHolder":"jammi_dee@yahoo.com","width":"100%"}, {}],
txtAddress01: ["wm.Text", {"caption":"Address 01:","captionAlign":"left","captionSize":"140px","dataValue":undefined,"displayValue":"","width":"100%"}, {}],
txtAddress02: ["wm.Text", {"caption":"Address 02:","captionAlign":"left","captionSize":"140px","dataValue":undefined,"displayValue":"","width":"100%"}, {}],
txtWebsite: ["wm.Text", {"caption":"Website:","captionAlign":"left","captionSize":"140px","dataValue":undefined,"displayValue":"","placeHolder":"http://www.connext-ph.com","width":"100%"}, {}],
txtMemo: ["wm.LargeTextArea", {"caption":"Memo:","captionPosition":"left","captionSize":"140px","dataValue":undefined,"displayValue":"","width":"100%"}, {}],
txtSSID: ["wm.Text", {"caption":"SSID:","captionAlign":"left","captionSize":"140px","dataValue":undefined,"displayValue":"","placeHolder":"AccessDenied!","width":"100%"}, {}],
txtPasswd: ["wm.Text", {"caption":"Password:","captionAlign":"left","captionSize":"140px","dataValue":undefined,"displayValue":"","placeHolder":"cloudgate","width":"100%"}, {}],
selNetwork: ["wm.SelectMenu", {"caption":"Network:","captionAlign":"left","captionSize":"140px","dataField":"dataValue","dataValue":"WEP","displayField":"dataValue","displayValue":"WEP","options":"WEP","width":"250px"}, {}],
selEncoding: ["wm.SelectMenu", {"caption":"Encoding:","captionAlign":"left","captionSize":"140px","dataField":"dataValue","dataValue":"MECARD","displayField":"dataValue","displayValue":"MECARD","options":"MECARD,vCARD","width":"250px"}, {}],
selBarSize: ["wm.SelectMenu", {"caption":"Barcode Size:","captionAlign":"left","captionSize":"140px","dataField":"dataValue","dataValue":"LARGE","displayField":"dataValue","displayValue":"LARGE","options":"SMALL,MEDIUM,LARGE","width":"250px"}, {}],
btnGenerateQRCode: ["wm.Button", {"caption":"Generate QR Code","margin":"4","styles":{"backgroundGradient":"","backgroundColor":"#797272","color":"","textAlign":"center"},"width":"100%"}, {"onclick":"btnGenerateQRCodeClick"}]
}],
bevSep: ["wm.Bevel", {"bevelSize":5,"height":"100%","styles":{"backgroundColor":"#c6bebe","backgroundGradient":""},"width":"5px"}, {}],
pnlQRView: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{"backgroundColor":""},"verticalAlign":"top","width":"100%"}, {}, {
fraQRCode: ["wm.IFrame", {"height":"300px","width":"100%"}, {}],
pnlTextData: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtaData: ["wm.LargeTextArea", {"caption":undefined,"dataValue":undefined,"displayValue":"","height":"99%","width":"95%"}, {}]
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

PgMainToolsQRCode.prototype._cssText = 'body.tundra .PgMainToolsQRCode .wmlayout .PgMainToolsQRCode-pnlHeader {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainToolsQRCode .wmlayout .PgMainToolsQRCode-pnlTitle {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainToolsQRCode .wmlayout .PgMainToolsQRCode-lblTitle {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:14pt;\
}\
body.tundra .PgMainToolsQRCode .wmlayout .PgMainToolsQRCode-pnlMenuBar {\
background-color:#00008B;\
}\
body.tundra .PgMainToolsQRCode .wmlayout .PgMainToolsQRCode-pnlFooter {\
background-color:#00008B;\
}\
body.tundra .PgMainToolsQRCode .wmlayout .PgMainToolsQRCode-txtUserId {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainToolsQRCode .PgMainToolsQRCode-pnlLayoutMain.wmlayout {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainToolsQRCode .wmlayout .PgMainToolsQRCode-txtPassword {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainToolsQRCode .wmlayout .PgMainToolsQRCode-lblManageTicket {\
font-family: Tahoma;\
}\
body.tundra .PgMainToolsQRCode .wmlayout .PgMainToolsQRCode-lblUserInfo {\
font-family:Tahoma;\
}\
body.tundra .PgMainToolsQRCode .wmlayout .PgMainToolsQRCode-lblBorder {\
font-family:Tahoma;\
}\
body.tundra .PgMainToolsQRCode .wmlayout .PgMainToolsQRCode-lblLogout {\
font-family:Tahoma;\
}\
body.tundra .PgMainToolsQRCode .wmlayout .PgMainToolsQRCode-lblSep {\
font-family:Tahoma;\
}\
body.tundra .PgMainToolsQRCode .wmlayout .PgMainToolsQRCode-lblManageUser {\
font-family:Tahoma;\
}\
body.tundra .PgMainToolsQRCode .wmlayout .PgMainToolsQRCode-pnlBody {\
}\
body.tundra .PgMainToolsQRCode .wmlayout .PgMainToolsQRCode-lblManageLookUp {\
font-family:Tahoma;\
}\
';
PgMainToolsQRCode.prototype._htmlText = '';