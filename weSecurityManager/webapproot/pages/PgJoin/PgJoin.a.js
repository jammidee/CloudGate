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
* Special thanks to Francis Limbo and Rea Javier for the initial codes
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
*
*/
/*
Created by Jammi Dee 04/15/2012
This is a sample page that can used as template
*/
dojo.declare("PgJoin", wm.Page, {
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
this.lblUserInfo.setCaption("N/A");
this.lblTitle.setCaption("Wave ERP Template System 1.0");
this.lblEntity.setCaption("N/A");
app.varModuleId.setValue("dataValue","MDLJOIN");
// Added by Jammi Dee 05/01/2012
// Initially hide the Joining button until the right password is entered.
this.btnPropertyAction.setShowing(false);
// Added by Jammi Dee 05/12/2012
this.pnlEntity.setShowing(false);
this.pnlJoinButton02.setShowing(false);
// Initialize the application - Jammi Dee 03/25/2012
this.initApplication();
// Added by Jammi Dee 06/01/2012
// Read the property file for information
this.svarReadFromPropertyDriverClass.setValue("input.pKey","dbwaveerp.driverClassName");
this.svarReadFromPropertyDriverClass.update();
this.svarReadFromPropertyUsername.setValue("input.pKey","dbwaveerp.username");
this.svarReadFromPropertyUsername.update();
this.svarReadFromPropertyConnectionUrl.setValue("input.pKey","dbwaveerp.connectionUrl");
this.svarReadFromPropertyConnectionUrl.update();
this.svarReadFromPropertyPassword.setValue("input.pKey","dbwaveerp.password");
this.svarReadFromPropertyPassword.update();
this.svarReadFromPropertyNamingStrategy.setValue("input.pKey","dbwaveerp.reverseNamingStrategy");
this.svarReadFromPropertyNamingStrategy.update();
this.svarReadFromPropertyDialect.setValue("input.pKey","dbwaveerp.dialect");
this.svarReadFromPropertyDialect.update();
app.pdWaitLoadPage.hide();
} catch (e) {
app.toastError(this.name + ".start() Failed: " + e.toString());
}
},
// Added by Jammi Dee 06/01/2012
svarReadFromPropertyDriverClassResult: function(inSender, inDeprecated) {
try {
this.txtDriverClass.setValue("dataValue", inSender.getValue("dataValue"));
} catch(e) {
console.error('ERROR IN svarReadFromPropertyDriverClassResult: ' + e);
}
},
svarReadFromPropertyUsernameResult: function(inSender, inDeprecated) {
try {
this.txtUsername.setValue("dataValue", inSender.getValue("dataValue"));
} catch(e) {
console.error('ERROR IN svarReadFromPropertyUsernameResult: ' + e);
}
},
svarReadFromPropertyConnectionUrlResult: function(inSender, inDeprecated) {
try {
this.txtConnectionUrl.setValue("dataValue", inSender.getValue("dataValue"));
} catch(e) {
console.error('ERROR IN svarReadFromPropertyConnectionUrlResult: ' + e);
}
},
svarReadFromPropertyPasswordResult: function(inSender, inDeprecated) {
try {
this.txtPasswd.setValue("dataValue", inSender.getValue("dataValue"));
} catch(e) {
console.error('ERROR IN svarReadFromPropertyPasswordResult: ' + e);
}
},
svarReadFromPropertyNamingStrategyResult: function(inSender, inDeprecated) {
try {
this.txtNamingStrat.setValue("dataValue", inSender.getValue("dataValue"));
} catch(e) {
console.error('ERROR IN svarReadFromPropertyNamingStrategyResult: ' + e);
}
},
svarReadFromPropertyDialectResult: function(inSender, inDeprecated) {
try {
this.txtDialect.setValue("dataValue", inSender.getValue("dataValue"));
} catch(e) {
console.error('ERROR IN svarReadFromPropertyDialectResult: ' + e);
}
},
/*
* 03/25/2012 - Jammi Dee
* Initialize the template variables here
*/
initApplication: function() {
this.lblTitle.setCaption("Join : Wave ERP" );
this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
},
btnJoinClick: function(inSender) {
try {
// added by Jammi Dee 04/21/2012
// Read the global password for joining the Wave ERP
this.svarReadFromRegistryJoinPass.setValue("input.pAppId","NA");
this.svarReadFromRegistryJoinPass.setValue("input.pEntity","NA");
this.svarReadFromRegistryJoinPass.setValue("input.pUserId","NA");
this.svarReadFromRegistryJoinPass.setValue("input.pVarname","JOINPASS");
this.svarReadFromRegistryJoinPass.update();
// Added by Jammi Dee 05/01/2012
// Read the encrypted Join Password
this.svarReadFromRegistryJoinPassEnc.setValue("input.pAppId","NA");
this.svarReadFromRegistryJoinPassEnc.setValue("input.pEntity","NA");
this.svarReadFromRegistryJoinPassEnc.setValue("input.pUserId","NA");
this.svarReadFromRegistryJoinPassEnc.setValue("input.pVarname","JOINPASSENC");
this.svarReadFromRegistryJoinPassEnc.update();
} catch(e) {
console.error('ERROR IN btnJoinClick: ' + e);
}
},
// Addded by Jammi Dee 04/21/2012
// Check is the passed password is correct.
svarReadFromRegistryJoinPassResult: function(inSender, inDeprecated) {
try {
if(inSender.getValue("dataValue") == this.txtPassword.getValue("dataValue")){
// alert( this.txtPassword.getValue("dataValue") );
// Register the Application here
// Insert all Application Rights here
} else {
alert( "Your joining password does not match the Global Joining Password. Please ask your administrator." );
}
} catch(e) {
console.error('ERROR IN svarReadFromRegistryJoinPassResult: ' + e);
}
},
// Added by Jammi Dee 05/01/2012
svarReadFromRegistryJoinPassEncResult: function(inSender, inDeprecated) {
try {
// Keep the retrieved encrypted password
this.varJoinPassEnc.setValue("dataValue", inSender.getValue("dataValue") );
// Encrypt the plain text password from the user
this.svarEncryptMD5.setValue("input.code",this.txtPassword.getValue("dataValue") );
this.svarEncryptMD5.update();
} catch(e) {
console.error('ERROR IN svarReadFromRegistryJoinPassEncResult: ' + e);
}
},
// Added by Jammi Dee 05/01/2012
// Compare the encrypted password with the registry encrypted password
svarEncryptMD5Result: function(inSender, inDeprecated) {
try {
if ( inSender.getValue("dataValue") == this.varJoinPassEnc.getValue("dataValue") ) {
this.btnPropertyAction.setShowing(true);
this.pnlEntity.setShowing(true);
this.pnlJoinButton02.setShowing(true);
// alert( "The encrypted password matched." );
} else {
alert( "Your encrypted joining password does not match. Please ask your administrator." );
}
} catch(e) {
console.error('ERROR IN svarEncryptMD5Result: ' + e);
}
},
// Added by Jammi Dee 06/02/2012
btnPropertyActionClick: function(inSender) {
try {
this.svarWriteToPropertyUsername.setValue("input.pKey","dbwaveerp.username" );
this.svarWriteToPropertyUsername.setValue("input.pValue",this.txtUsername.getValue("dataValue") );
this.svarWriteToPropertyUsername.update();
this.svarWriteToPropertyConnectionUrl.setValue("input.pKey","dbwaveerp.connectionUrl" );
this.svarWriteToPropertyConnectionUrl.setValue("input.pValue",this.txtConnectionUrl.getValue("dataValue") );
this.svarWriteToPropertyConnectionUrl.update();
this.svarWriteToPropertyPasswd.setValue("input.pKey","dbwaveerp.password" );
this.svarWriteToPropertyPasswd.setValue("input.pValue",this.txtPasswd.getValue("dataValue") );
this.svarWriteToPropertyPasswd.update();
} catch(e) {
console.error('ERROR IN btnPropertyActionClick: ' + e);
}
},
svarWriteToPropertyUsernameResult: function(inSender, inDeprecated) {
try {
alert( inSender.getValue("dataValue") );
} catch(e) {
console.error('ERROR IN svarWriteToPropertyUsernameResult: ' + e);
}
},
//Added by Jammi Dee 08/20/2012
btnRegisterClick: function(inSender) {
try {
//If the key is a special code, a key is generated by the system else
//the key being passed is simply saved.
this.svarMakeLicenseKey.setValue("input.pKey",        this.txtRegisterKey.getValue("dataValue") );
this.svarMakeLicenseKey.setValue("input.pKeySource",  window.location.hostname + ":" + window.location.port );
this.svarMakeLicenseKey.update();
} catch(e) {
console.error('ERROR IN btnRegisterClick: ' + e);
}
},
svarMakeLicenseKeyResult: function(inSender, inDeprecated) {
try {
if( inSender.getValue("dataValue") === "OK" ){
app.toastSuccess("License Key has been successfully saved for " + window.location.hostname + ":" + window.location.port + ".");
//Update the missing folders if any.
this.svarCreateMissingFolder.update();
} else {
alert( "The KEY for this site is : " + inSender.getValue("dataValue") );
}
} catch(e) {
console.error('ERROR IN svarMakeLicenseKeyResult: ' + e);
}
},
// Added by Jammi Dee 12/20/2012
btnJoin02Click: function(inSender) {
try {
// Added by Jammi Dee 12/20/2012
if ( this.txtEntity.getValue("dataValue") === "NONE" ) {
alert("Entity to Join To is required.");
} else {
var response = confirm("Warning! This action deletes existing data in the database! Are you sure?");
if (response) {
this.svarAppJoinToERP.setValue("input.pAppId", app.varAppId.getValue("dataValue") );
this.svarAppJoinToERP.setValue("input.pEntityId", this.txtEntity.getValue("dataValue") ); // added 05/12/2012
this.svarAppJoinToERP.setValue("input.pDesc", app.varAppName.getValue("dataValue") );
this.svarAppJoinToERP.update();
}
}
} catch(e) {
console.error('ERROR IN btnJoin02Click: ' + e);
alert( 'ERROR IN btnJoin02Click: ' + e );
}
},
_end: 0
});

PgJoin.widgets = {
navBackToLogin: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgLogin\"","targetProperty":"pageName"}, {}]
}]
}]
}],
varOps: ["wm.Variable", {"type":"StringData"}, {}],
svarReadFromRegistryJoinPass: ["wm.ServiceVariable", {"operation":"readRegistry","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryJoinPassResult"}, {
input: ["wm.ServiceInput", {"type":"readRegistryInputs"}, {}]
}],
svarReadFromRegistryJoinPassEnc: ["wm.ServiceVariable", {"operation":"readRegistry","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryJoinPassEncResult"}, {
input: ["wm.ServiceInput", {"type":"readRegistryInputs"}, {}]
}],
svarEncryptMD5: ["wm.ServiceVariable", {"operation":"encryptMD5","service":"svcUtility"}, {"onResult":"svarEncryptMD5Result"}, {
input: ["wm.ServiceInput", {"type":"encryptMD5Inputs"}, {}]
}],
varJoinPassEnc: ["wm.Variable", {"type":"StringData"}, {}],
svarAppJoinToERP: ["wm.ServiceVariable", {"operation":"registerApplicationToERP","service":"svcGenerateAppRights"}, {"onResult":"svarAppJoinToERPResult"}, {
input: ["wm.ServiceInput", {"type":"registerApplicationToERPInputs"}, {}]
}],
svarAppGenerateRights: ["wm.ServiceVariable", {"operation":"generateApplicationRights","service":"svcGenerateAppRights"}, {"onResult":"svarAppGenerateRightsResult"}, {
input: ["wm.ServiceInput", {"type":"generateApplicationRightsInputs"}, {}]
}],
svarEntitySelect: ["wm.ServiceVariable", {"operation":"qryEntitySelect","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryEntitySelectInputs"}, {}]
}],
svarReadFromPropertyDriverClass: ["wm.ServiceVariable", {"operation":"ReadProperty","service":"svcProperties"}, {"onResult":"svarReadFromPropertyDriverClassResult"}, {
input: ["wm.ServiceInput", {"type":"ReadPropertyInputs"}, {}]
}],
svarReadFromPropertyUsername: ["wm.ServiceVariable", {"operation":"ReadProperty","service":"svcProperties"}, {"onResult":"svarReadFromPropertyUsernameResult"}, {
input: ["wm.ServiceInput", {"type":"ReadPropertyInputs"}, {}]
}],
svarReadFromPropertyConnectionUrl: ["wm.ServiceVariable", {"operation":"ReadProperty","service":"svcProperties"}, {"onResult":"svarReadFromPropertyConnectionUrlResult"}, {
input: ["wm.ServiceInput", {"type":"ReadPropertyInputs"}, {}]
}],
svarReadFromPropertyPassword: ["wm.ServiceVariable", {"operation":"ReadProperty","service":"svcProperties"}, {"onResult":"svarReadFromPropertyPasswordResult"}, {
input: ["wm.ServiceInput", {"type":"ReadPropertyInputs"}, {}]
}],
svarReadFromPropertyNamingStrategy: ["wm.ServiceVariable", {"operation":"ReadProperty","service":"svcProperties"}, {"onResult":"svarReadFromPropertyNamingStrategyResult"}, {
input: ["wm.ServiceInput", {"type":"ReadPropertyInputs"}, {}]
}],
svarReadFromPropertyDialect: ["wm.ServiceVariable", {"operation":"ReadProperty","service":"svcProperties"}, {"onResult":"svarReadFromPropertyDialectResult"}, {
input: ["wm.ServiceInput", {"type":"ReadPropertyInputs"}, {}]
}],
svarWriteToPropertyUsername: ["wm.ServiceVariable", {"operation":"WriteProperty","service":"svcProperties"}, {"onResult":"svarWriteToPropertyUsernameResult"}, {
input: ["wm.ServiceInput", {"type":"WritePropertyInputs"}, {}]
}],
svarWriteToPropertyConnectionUrl: ["wm.ServiceVariable", {"operation":"WriteProperty","service":"svcProperties"}, {}, {
input: ["wm.ServiceInput", {"type":"WritePropertyInputs"}, {}]
}],
svarWriteToPropertyPasswd: ["wm.ServiceVariable", {"operation":"WriteProperty","service":"svcProperties"}, {}, {
input: ["wm.ServiceInput", {"type":"WritePropertyInputs"}, {}]
}],
svarMakeLicenseKey: ["wm.ServiceVariable", {"operation":"makeLicenseKey","service":"svcLicenseSystem"}, {"onResult":"svarMakeLicenseKeyResult"}, {
input: ["wm.ServiceInput", {"type":"makeLicenseKeyInputs"}, {}]
}],
serviceVariable1: ["wm.ServiceVariable", {}, {}, {
input: ["wm.ServiceInput", {"type":"Inputs"}, {}]
}],
svarCreateMissingFolder: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"makeSystemDir","service":"svcMediaLibFunction"}, {}, {
input: ["wm.ServiceInput", {"type":"makeSystemDirInputs"}, {}]
}],
pdLoading: ["wm.PageDialog", {"desktopHeight":"100px","height":"100px","hideControls":true,"pageName":"Main","width":"280px"}, {}],
pdAbout: ["wm.PageDialog", {"desktopHeight":"341px","height":"341px","noEscape":true,"noMaxify":true,"noMinify":true,"pageName":"PgAbout","width":"616px"}, {}],
ddPgJoinHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","corner":"cr","modal":false,"title":"Join Help"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgJoin.html"}, {}]
}],
buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnClose: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddPgJoinHelp.hide"}]
}]
}],
ddSelectEntity: ["wm.DesignableDialog", {"buttonBarId":"buttonBar1","containerWidgetId":"containerWidget1","title":"Select Entity","width":"800px"}, {}, {
containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
dgEntity: ["wm.DojoGrid", {"columns":[{"show":false,"title":"Seqid","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"seqid"},{"show":true,"title":"Entity ID","width":"80px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":true,"title":"Company","width":"200px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"company"},{"show":true,"title":"Description","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"description"},{"show":false,"title":"Addr01","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"addr01"},{"show":false,"title":"Addr02","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"addr02"},{"show":false,"title":"Addr03","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"addr03"},{"show":false,"title":"Sstatus","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"show":false,"title":"Startdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"startdate"},{"show":false,"title":"Enddate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"enddate"},{"show":false,"title":"Deleted","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"deleted"},{"show":false,"title":"Juid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"juid"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Company: \" + ${company} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n"}],"height":"100%","localizationStructure":{},"margin":"4"}, {}, {
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
lblTitle: ["wm.Label", {"align":"right","autoSizeHeight":true,"caption":"Wave ERP System","height":"23px","padding":"4","singleLine":false,"width":"400px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}],
pnlMenuBar: ["wm.Panel", {"height":"20px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#00008b"},"verticalAlign":"top","width":"100%"}, {}, {
pnlSubMenu: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"70%"}, {}, {
lblBack: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"caption":"Back","height":"100%","padding":"4","width":"40px"}, {"onclick":"navBackToLogin"}, {
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
pic_back: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Back","source":"resources/images/buttons/arrowleft24.png","width":"24px"}, {"onclick":"navBackToLogin"}]
}],
pnlMenuButtonRight: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
pic_help: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Help","source":"resources/images/buttons/helpred24.png","width":"24px"}, {"onclick":"ddPgJoinHelp.show"}],
pic_about: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"About","source":"resources/images/buttons/aboutblue24.png","width":"24px"}, {"onclick":"pdAbout.show"}]
}]
}],
spacer1: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
fpJoin: ["wm.FancyPanel", {"title":"Join to Wave ERP"}, {}, {
pnlJoinPass: ["wm.Panel", {"fitToContentHeight":true,"height":"57px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spcJoin: ["wm.Spacer", {"height":"48px","width":"150px"}, {}],
lblDescription: ["wm.Label", {"align":"left","caption":"This page will setup Wave ERP System database connection parameters. Make sure you have the correct password to be allowed.","height":"55px","padding":"4","singleLine":false,"width":"250px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}],
pnlJoinP: ["wm.Panel", {"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtPassword: ["wm.Text", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"caption":"Updating Password","captionSize":"150px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","password":true,"placeHolder":"Updating password","promptMessage":"This is required.","width":"400px"}, {}]
}],
pnlJoinButton: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spcJoin1: ["wm.Spacer", {"height":"24px","width":"150px"}, {}],
btnJoin: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Show Property","margin":"4","width":"166px"}, {"onclick":"btnJoinClick"}]
}],
spcJoin2: ["wm.Spacer", {"height":"27px","width":"150px"}, {}],
pnlEntity: ["wm.Panel", {"fitToContentHeight":true,"height":"158px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
pnlProp: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtDriverClass: ["wm.Text", {"caption":"Driver Class:","captionSize":"150px","dataValue":undefined,"disabled":true,"displayValue":"","placeHolder":"com.mysql.jdbc.Driver","width":"480px"}, {}]
}],
pnlProp1: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtUsername: ["wm.Text", {"caption":"Username:","captionSize":"150px","dataValue":undefined,"displayValue":"","placeHolder":"root","width":"330px"}, {}]
}],
pnlProp2: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtConnectionUrl: ["wm.Text", {"caption":"Connection URL:","captionSize":"150px","dataValue":undefined,"displayValue":"","placeHolder":"jdbc\\:mysql\\://localhost\\:3307/dbwaveerp","width":"480px"}, {}]
}],
pnlProp3: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtPasswd: ["wm.Text", {"caption":"Password:","captionSize":"150px","dataValue":undefined,"displayValue":"","placeHolder":"7b6a43524a352c09787b686e1b5c783a172653-jmd","width":"480px"}, {}]
}],
pnlProp4: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtNamingStrat: ["wm.Text", {"caption":"Naming Strategy:","captionSize":"150px","dataValue":undefined,"disabled":true,"displayValue":"","placeHolder":"com.wavemaker.tools.data.reveng.DefaultRevengNamingStrategy","width":"630px"}, {}]
}],
pnlProp5: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtDialect: ["wm.Text", {"caption":"Dialect:","captionSize":"150px","dataValue":undefined,"disabled":true,"displayValue":"","placeHolder":"com.wavemaker.runtime.data.dialect.MySQLDialect","width":"480px"}, {}]
}]
}],
pnlJoinButton02: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
spcJoin3: ["wm.Spacer", {"height":"24px","width":"150px"}, {}],
btnJoin02: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Join This App to Wave ERP.","margin":"4","width":"270px"}, {"onclick":"btnJoin02Click"}],
txtEntity: ["wm.Text", {"caption":"Entity:","captionSize":"50px","dataValue":"DEFAULT","displayValue":"DEFAULT","placeHolder":"DEFAULT","promptMessage":"Entity is required.","width":"150px"}, {}],
lbldesc: ["wm.Label", {"caption":"Generate rights for security manager.","padding":"4","width":"232px"}, {}]
}],
pnlJoinAction: ["wm.Panel", {"height":"57px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
spacer2: ["wm.Spacer", {"height":"20px","width":"150px"}, {}],
btnPropertyAction: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Update Database Connection","margin":"4","width":"250px"}, {"onclick":"btnPropertyActionClick"}]
}],
pnlGenKey: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
txtRegisterKey: ["wm.Text", {"caption":"Registration Key:","captionSize":"150px","dataValue":undefined,"displayValue":"","password":true,"placeHolder":"Enter the registration / license key here.","promptMessage":"Allows local connection.","width":"630px"}, {}],
btnRegister: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Register","margin":"4"}, {"onclick":"btnRegisterClick"}]
}]
}]
}],
pnlFooter: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel","wm_BackgroundChromeBar_LightBlue"]},"height":"20px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
lblFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"...","height":"100%","padding":"4","styles":{"backgroundGradient":{"direction":"horizontal","startColor":"#03036d","endColor":"#d8cbf2","colorStop":31}},"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}]
};

PgJoin.prototype._cssText = 'body.tundra .PgJoin .wmlayout .PgJoin-pnlHeader {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgJoin .wmlayout .PgJoin-pnlTitle {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgJoin .wmlayout .PgJoin-lblTitle {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgJoin .wmlayout .PgJoin-pnlMenuBar {\
background-color:#00008B;\
}\
body.tundra .PgJoin .wmlayout .PgJoin-pnlFooter {\
background-color:#00008B;\
}\
body.tundra .PgJoin .wmlayout .PgJoin-txtUserId {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgJoin .PgJoin-pnlLayoutMain.wmlayout {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgJoin .wmlayout .PgJoin-txtPassword {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgJoin .wmlayout .PgJoin-lblManageTicket {\
font-family: Tahoma;\
}\
body.tundra .PgJoin .wmlayout .PgJoin-lblUserInfo {\
font-family:Tahoma;\
}\
body.tundra .PgJoin .wmlayout .PgJoin-lblBorder {\
font-family:Tahoma;\
}\
body.tundra .PgJoin .wmlayout .PgJoin-lblLogout {\
font-family:Tahoma;\
}\
body.tundra .PgJoin .wmlayout .PgJoin-lblSep {\
font-family:Tahoma;\
}\
body.tundra .PgJoin .wmlayout .PgJoin-lblManageUser {\
font-family:Tahoma;\
}\
body.tundra .PgJoin .wmlayout .PgJoin-pnlBody {\
}\
body.tundra .PgJoin .wmlayout .PgJoin-lblManageLookUp {\
font-family:Tahoma;\
}\
';
PgJoin.prototype._htmlText = '';