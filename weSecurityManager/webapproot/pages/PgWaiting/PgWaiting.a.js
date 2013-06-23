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
dojo.declare("PgWaiting", wm.Page, {
"preferredDevice": "desktop",
start: function() {
try {
//========================================
//Added by Jammi Dee 12/18/2012
//Get the passed parameter to the system.
//========================================
var page_name=this.getParam('page');
if(page_name === "") page_name = "NOPARAM";
this.lblFooter.setCaption( "Cloud Gate Systems." );
//Detect the Browser to determine device
//this.getMobileDevice();
app.varModuleId.setValue("dataValue","MDLWAITING");
//Added by Jammi Dee 09/11/2012
if( window.location.hostname === "localhost"){
// Execute authetication
//Ignore local host
this.svarStrApp01.update();
} else {
//Added by Jammi Dee 09/11/2012
//Get the current connection information
this.svarGenerateKeyNoKey.setValue("input.pKeySource", window.location.hostname + ":" + window.location.port );
this.svarGenerateKeyNoKey.update();
}
} catch (e) {
app.toastError(this.name + ".start() Failed: " + e.toString());
}
},
//Added by Jammi Dee 12/18/2012
/**
* This is an important feature that will be used by all apps.
*/
getParam: function (param) {
name = param.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
var regexS = "[\\?&]" + name + "=([^&#]*)";
var regex = new RegExp( regexS );
var results = regex.exec( window.location.href );
if( results === null )
return "";
else
return results[1];
},
/**
* ====================================================
* Added by Jammi Dee 03/23/2013
* This will pre-detect the browser so that later, the
* system can adjust.
* ====================================================
*/
getMobileDevice: function ( ) {
var isMobile = navigator.userAgent.match(/mobile|android/i) || "onorientationchange" in window || navigator.msMaxTouchPoints > 0;
var device;
if (!isMobile) {
device = "desktop";
} else {
device =  (window.screen && (window.screen.width > 450 && window.screen.height > 450)) ? "tablet" : "phone";
}
//Set the mobile device here
app.varDevice.setValue("dataValue", device );
switch(device) {
case "desktop":
//this.pageContainer1.setPageName("MainDesktop");
break;
case "tablet":
//this.pageContainer1.setPageName("MainTablet");
break;
case "phone":
//this.pageContainer1.setPageName("MainPhone");
alert("This application GUI is not yet designed on small devices! - " + device);
break;
}
},
//Added by Jammi Dee 09/11/2012
svarGenerateKeyNoKeyResult: function(inSender, inDeprecated) {
try {
//Get the value of the password
this.varPassword.setValue("dataValue", inSender.getValue("dataValue") );
//Check for other license key
this.svarUrlAccess.update();
} catch(e) {
console.error('ERROR IN svarGenerateKeyNoKeyResult: ' + e);
}
},
//Added by Jammi Dee 09/11/2012
svarUrlAccessResult: function(inSender, inDeprecated) {
try {
var numRows = inSender.getCount();
var imatch = 0;
if (numRows > 0) {
for (i=0; i < numRows; i++) {
var aRow    = inSender.getItem(i);
var upasswd = aRow.data.urlpassword;
var uurl    = aRow.data.urlid;
//Compare the strings
if( window.location.hostname + ":" + window.location.port === uurl &&  this.varPassword.getValue("dataValue") === upasswd ){
//alert(window.location.hostname + ":" + window.location.port + " = " + uurl + "|" + this.varPassword.getValue("dataValue") + " = " + upasswd );
imatch = imatch + 1;
}
}
//Check for match
if( parseInt(imatch, 10) > 0 ){
app.varModuleId.setValue("dataValue","MDLWAITING");
// ( 1 ) Execute authetication and detect AUTOLOGIN
this.svarStrApp01.update();
} else {
//No License
this.navPgNoLicenseKey.update();
}
} else {
//No License
this.navPgNoLicenseKey.update();
}
} catch(e) {
console.error('ERROR IN svarUrlAccessResult: ' + e);
}
},
svarStrApp01Result: function(inSender, inDeprecated) {
try {
// Check if during the authentication we are in autlogin mode
if (inSender.getValue("dataValue") == "autologin" ) {
// Login, we are ready
this.svarGetUserID.update();
//alert(inSender.getValue("dataValue"));
} else {
// Display the normal login page
this.navLogin.update();
//alert(inSender.getValue("dataValue"));
}
} catch (e) {
console.error('ERROR IN svarStrApp01Result: ' + e);
}
},
svarGetUserIDResult: function(inSender, inDeprecated) {
try {
app.varUserId.setValue("dataValue",               this.svarGetUserID.getValue("dataValue"));
this.svarGetUserInfo.setValue("input.pUserId",    this.svarGetUserID.getValue("dataValue"));
this.svarGetUserInfo.update();
} catch(e) {
console.error('ERROR IN svarGetUserIDResult: ' + e);
}
},
svarGetUserInfoResult: function(inSender, inDeprecated) {
try {
var registry;
registry = this.svarGetUserInfo.getValue("dataValue").split("|");
app.varEntity.setValue("dataValue",      registry[0]);
app.varEmail.setValue("dataValue",       registry[1]);
app.varUserInfo.setValue("dataValue",    registry[2]);
app.varUserId.setValue("dataValue",      registry[3]);
app.varPassword.setValue("dataValue",    registry[4]);
app.varUsername.setValue("dataValue",    registry[5]);
//alert(app.varEntity.getValue("dataValue"));
app.svarGetRole.setValue("input.pUserId",    app.varUserId.getValue("dataValue"));
app.svarGetRole.setValue("input.pEntityId",  app.varEntity.getValue("dataValue"));
app.svarGetRole.update();
//alert(app.varFlag.getValue("dataValue"));
//app.varUserInfo.setValue("dataValue",this.svarGetUserInfo.getValue("dataValue"));
//this.navManageUser.update();
app.svarResetRegistry.setValue("input.pEntity",       "ENTITY");
app.svarResetRegistry.setValue("input.pPassword",     "PASSWORD");
app.svarResetRegistry.setValue("input.pUserid",       "USERID");
app.svarResetRegistry.setValue("input.pUsername",     "USERNAME");
app.svarResetRegistry.update();
} catch(e) {
console.error('ERROR IN svarGetUserInfoResult: ' + e);
}
},
_end: 0
});

PgWaiting.widgets = {
sv_authenticate: ["wm.ServiceVariable", {"operation":"authenticate","service":"services"}, {"onResult":"sv_authenticateResult","onSuccess":"sv_authenticateSuccess"}, {
input: ["wm.ServiceInput", {"type":"authenticateInputs"}, {}]
}],
svarStrApp01: ["wm.ServiceVariable", {"operation":"authenticateRegistry","service":"svcRegistry"}, {"onResult":"svarStrApp01Result"}, {
input: ["wm.ServiceInput", {"type":"authenticateRegistryInputs"}, {}]
}],
navLogin: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgLogin\"","source":false,"targetProperty":"pageName"}, {}]
}]
}]
}],
navManageUser: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgManageUser\"","source":false,"targetProperty":"pageName"}, {}]
}]
}]
}],
svarGetUserID: ["wm.ServiceVariable", {"operation":"getUserId","service":"svcRegistry"}, {"onResult":"svarGetUserIDResult"}, {
input: ["wm.ServiceInput", {"type":"getUserIdInputs"}, {}]
}],
svarGetUserInfo: ["wm.ServiceVariable", {"operation":"getUserInfo","service":"svcLogin"}, {"onResult":"svarGetUserInfoResult"}, {
input: ["wm.ServiceInput", {"type":"getUserInfoInputs"}, {}]
}],
svarBrowserList: ["wm.ServiceVariable", {"operation":"qryBrowserList","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryBrowserListInputs"}, {}]
}],
varPassword: ["wm.Variable", {"type":"StringData"}, {}],
svarGenerateKeyNoKey: ["wm.ServiceVariable", {"operation":"generateKeyNoKey","service":"svcLicenseSystem"}, {"onResult":"svarGenerateKeyNoKeyResult"}, {
input: ["wm.ServiceInput", {"type":"generateKeyNoKeyInputs"}, {}]
}],
svarUrlAccess: ["wm.ServiceVariable", {"operation":"qryUrlAccess","service":"dbwaveerp"}, {"onResult":"svarUrlAccessResult"}, {
input: ["wm.ServiceInput", {"type":"qryUrlAccessInputs"}, {}]
}],
pnlLayoutMain: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"horizontalAlign":"left","verticalAlign":"top"}, {}, {
pnlHeader: ["wm.Panel", {"height":"40px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
imgLogo: ["wm.Picture", {"height":"45px","source":"resources/images/logos/waveerplogo.jpg","width":"275px"}, {}],
pnlTitle: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","styles":{"color":"#ffffff","backgroundGradient":"","backgroundImage":"url(resources/images/logos/waveerpbar.jpg)"},"verticalAlign":"middle","width":"100%"}, {}, {
lblTitle: ["wm.Label", {"align":"right","autoSizeHeight":true,"caption":"Wave ERP Security Manager","height":"34px","padding":"4","singleLine":false,"styles":{"backgroundImage":"url(resources/images/logos/waveerpbar.jpg)","backgroundGradient":"","backgroundColor":"#ffffff"},"width":"600px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}],
pnlMenuBar: ["wm.Panel", {"height":"20px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#00008b"},"verticalAlign":"top","width":"100%"}, {}],
pnlMenuButton: ["wm.HeaderContentPanel", {"border":"0","height":"28px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}],
spacer1: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","styles":{"backgroundImage":"url(resources/images/logos/wavebgnd.gif) !important; background-repeat:no-repeat !important;"},"verticalAlign":"middle","width":"100%"}, {}, {
pnlLoading: ["wm.Panel", {"height":"89px","horizontalAlign":"center","verticalAlign":"top","width":"362px"}, {}, {
loading: ["wm.Picture", {"height":"58px","source":"resources/images/imagelists/loadingblue.gif","width":"186px"}, {}],
label2: ["wm.Label", {"_classes":{"domNode":["wm_FontFamily_Courier","wm_FontSizePx_14px","wm_FontColor_SteelBlue"]},"align":"center","caption":"Please wait for a while...","padding":"4","width":"251px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}],
pnlFooter: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundChromeBar_LightBlue","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"20px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
lblFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"...","height":"100%","padding":"4","styles":{"backgroundGradient":{"direction":"horizontal","startColor":"#03036d","endColor":"#d8cbf2","colorStop":31}},"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}]
};

PgWaiting.prototype._cssText = 'body.tundra .PgWaiting .wmlayout .PgWaiting-pnlHeader {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgWaiting .wmlayout .PgWaiting-pnlTitle {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgWaiting .wmlayout .PgWaiting-lblTitle {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:14pt;\
}\
body.tundra .PgWaiting .wmlayout .PgWaiting-pnlMenuBar {\
background-color:#00008B;\
}\
body.tundra .PgWaiting .wmlayout .PgWaiting-pnlFooter {\
background-color:#00008B;\
}\
body.tundra .PgWaiting .PgWaiting-pnlLayoutMain.wmlayout {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgWaiting .wmlayout .PgWaiting-pnlBody {\
background-image:url(resources/images/logos/wavebgnd.gif) !important;\
background-repeat:no-repeat !important;\
}\
';
PgWaiting.prototype._htmlText = '';