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
This is a sample page that can used as template
*/
dojo.declare("PgMainUserProfile", wm.Page, {
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
app.svarLogging.setValue("input.pMsg","View User Profile Page.");
app.svarLogging.setValue("input.pModuleId","USERPROFILE");
app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
app.svarLogging.setValue("input.pProcess","UPDATE");
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
//Added by Jammi Dee 12/24/2012
this.svarUserProfileView.update();
this.txtUserID.setValue("dataValue", app.varUserId.getValue("dataValue") );
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
this.lblTitle.setCaption("Main : User Profile" );
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
//Added by Jammi Dee 12/23/2012
btnUpdatePasswordClick: function(inSender) {
try {
//alert(app.varUserId.getValue("dataValue"));
this.svarUpdatePassword.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
this.svarUpdatePassword.update();
} catch(e) {
console.error('ERROR IN btnUpdatePasswordClick: ' + e);
alert( 'ERROR IN btnUpdatePasswordClick: ' + e );
}
},
//Added by Jammi Dee 12/23/2012
svarUpdatePasswordResult: function(inSender, inDeprecated) {
try {
alert(inSender.getValue("dataValue"));
} catch(e) {
console.error('ERROR IN svarUpdatePasswordResult: ' + e);
alert( 'ERROR IN svarUpdatePasswordResult: ' + e );
}
},
//Added by Jammi Dee 12/24/2012
btnUpdateUserInfoClick: function(inSender) {
try {
this.svarUserProfileUpdate.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
this.svarUserProfileUpdate.update();
app.varUserInfo.setValue("dataValue", this.txtLastName.getValue("dataValue") + ", " + this.txtFirstName.getValue("dataValue")  );
} catch(e) {
console.error('ERROR IN btnUpdateUserInfoClick: ' + e);
alert( 'ERROR IN btnUpdateUserInfoClick: ' + e );
}
},
svarUserProfileUpdateResult: function(inSender, inDeprecated) {
try {
alert("User profile has been updated.");
} catch(e) {
console.error('ERROR IN svarUserProfileUpdateResult: ' + e);
alert( 'ERROR IN svarUserProfileUpdateResult: ' + e );
}
},
_end: 0
});

PgMainUserProfile.widgets = {
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
svarUpdatePassword: ["wm.ServiceVariable", {"operation":"updateUserPassword","service":"svcTableTblUser"}, {"onResult":"svarUpdatePasswordResult"}, {
input: ["wm.ServiceInput", {"type":"updateUserPasswordInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"txtNewPassword.dataValue","targetProperty":"pNewPassword"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"txtOldPassword.dataValue","targetProperty":"pOldPassword"}, {}]
}]
}]
}],
svarUserProfileView: ["wm.ServiceVariable", {"operation":"qryUserProfileView","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryUserProfileViewInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"pUserId"}, {}]
}]
}]
}],
svarUserProfileUpdate: ["wm.ServiceVariable", {"operation":"qryUserProfileUpdate","service":"dbwaveerp"}, {"onResult":"svarUserProfileUpdateResult"}, {
input: ["wm.ServiceInput", {"type":"qryUserProfileUpdateInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"txtFirstName.dataValue","targetProperty":"pFirstname"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"txtLastName.dataValue","targetProperty":"pLastname"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"txtMiddleName.dataValue","targetProperty":"pMiddlename"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"txtUserID.dataValue","targetProperty":"pUserId"}, {}]
}]
}]
}],
pdLoading: ["wm.PageDialog", {"desktopHeight":"100px","height":"100px","hideControls":true,"pageName":"Main","width":"280px"}, {}],
ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","title":"Configuration Help"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgMainConfig.html"}, {}]
}],
buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
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
pnlTitle: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
lblTitle: ["wm.Label", {"align":"right","autoSizeHeight":true,"caption":"Wave ERP System","height":"23px","padding":"4","singleLine":false,"width":"600px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}],
pnlMenuBar: ["wm.Panel", {"height":"20px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
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
pic_back: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Back","source":"resources/images/buttons/arrowleft24.png","width":"24px"}, {"onclick":"navPgMain"}]
}],
pnlMenuButtonRight: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
pic_help: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Help","source":"resources/images/buttons/helpred24.png","width":"24px"}, {"onclick":"ddPgMainConfigHelp.show"}],
pic_about: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"About","source":"resources/images/buttons/aboutblue24.png","width":"24px"}, {"onclick":"pdAbout.show"}]
}]
}],
spacer1: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
lblChangeProfile: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px","wm_TextDecoration_Bold"]},"caption":"Change Profile","padding":"4"}, {}],
pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
pnlUserInfo: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
txtUserID: ["wm.Text", {"caption":"User ID:","captionAlign":"left","disabled":true,"displayValue":""}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"dataValue"}, {}]
}]
}],
txtFirstName: ["wm.Text", {"caption":"First Name:","captionAlign":"left","displayValue":"","width":"400px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarUserProfileView.firstname","targetProperty":"dataValue"}, {}]
}]
}],
txtMiddleName: ["wm.Text", {"caption":"Middle Name:","captionAlign":"left","displayValue":"","width":"400px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarUserProfileView.middlename","targetProperty":"dataValue"}, {}]
}]
}],
txtLastName: ["wm.Text", {"caption":"Last Name:","captionAlign":"left","displayValue":"","width":"400px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarUserProfileView.lastname","targetProperty":"dataValue"}, {}]
}]
}],
pnlUpdateUserInfo: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spacer2: ["wm.Spacer", {"height":"22px","width":"320px"}, {}],
btnUpdateUserInfo: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Update","margin":"4"}, {"onclick":"btnUpdateUserInfoClick"}]
}]
}],
pnlPassword: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
pnlChangePasswd: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
lblChangePasswd: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold","wm_FontSizePx_12px"]},"caption":"Change Password","padding":"4","width":"145px"}, {}]
}],
txtOldPassword: ["wm.Text", {"caption":"Old Password:","captionAlign":"left","dataValue":undefined,"displayValue":"","password":true,"width":"400px"}, {}],
txtNewPassword: ["wm.Text", {"caption":"New Password:","captionAlign":"left","dataValue":undefined,"displayValue":"","password":true,"width":"400px"}, {}],
pnlUpdatePassword: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spacer3: ["wm.Spacer", {"height":"22px","width":"320px"}, {}],
btnUpdatePassword: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Update","margin":"4"}, {"onclick":"btnUpdatePasswordClick"}]
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

PgMainUserProfile.prototype._cssText = 'body.tundra .PgMainUserProfile .wmlayout .PgMainUserProfile-pnlHeader {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainUserProfile .wmlayout .PgMainUserProfile-pnlTitle {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainUserProfile .wmlayout .PgMainUserProfile-lblTitle {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:14pt;\
}\
body.tundra .PgMainUserProfile .wmlayout .PgMainUserProfile-pnlMenuBar {\
background-color:#00008B;\
}\
body.tundra .PgMainUserProfile .wmlayout .PgMainUserProfile-pnlFooter {\
background-color:#00008B;\
}\
body.tundra .PgMainUserProfile .wmlayout .PgMainUserProfile-txtUserId {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainUserProfile .PgMainUserProfile-pnlLayoutMain.wmlayout {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainUserProfile .wmlayout .PgMainUserProfile-txtPassword {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainUserProfile .wmlayout .PgMainUserProfile-lblManageTicket {\
font-family: Tahoma;\
}\
body.tundra .PgMainUserProfile .wmlayout .PgMainUserProfile-lblUserInfo {\
font-family:Tahoma;\
}\
body.tundra .PgMainUserProfile .wmlayout .PgMainUserProfile-lblBorder {\
font-family:Tahoma;\
}\
body.tundra .PgMainUserProfile .wmlayout .PgMainUserProfile-lblLogout {\
font-family:Tahoma;\
}\
body.tundra .PgMainUserProfile .wmlayout .PgMainUserProfile-lblSep {\
font-family:Tahoma;\
}\
body.tundra .PgMainUserProfile .wmlayout .PgMainUserProfile-lblManageUser {\
font-family:Tahoma;\
}\
body.tundra .PgMainUserProfile .wmlayout .PgMainUserProfile-pnlBody {\
}\
body.tundra .PgMainUserProfile .wmlayout .PgMainUserProfile-lblManageLookUp {\
font-family:Tahoma;\
}\
';
PgMainUserProfile.prototype._htmlText = '';