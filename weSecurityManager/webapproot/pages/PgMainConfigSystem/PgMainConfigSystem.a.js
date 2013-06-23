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
dojo.declare("PgMainConfigSystem", wm.Page, {
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
//Hide this Object. Not yet used.
this.pnlSessionSwitch.setShowing(false);
// Initialize the application - Jammi Dee 03/25/2012
this.initApplication();
//Added by Jammi Dee 11/25/2012
app.svarUpdateSessionApp.setValue("input.pJuid",app.varSessionId.getValue("dataValue"));
app.svarUpdateSessionApp.update();
// Added by Jammi Dee 05/02/2012
// Encrypt the password
this.svarDESInit.setValue("input.ivString", "");
this.svarDESInit.setValue("input.keyString", "");
this.svarDESInit.update();
// Added by Jammi Dee 04/17/22012
// Read data from Registry
this.svarReadFromRegistry.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
this.svarReadFromRegistry.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
this.svarReadFromRegistry.setValue("input.pUserId","NA"); // Application wide registry
this.svarReadFromRegistry.setValue("input.pVarname","BGNDURL"); // Background URL
this.svarReadFromRegistry.update();
//Added by Jammi Dee 11/16/2012
this.svarReadFromRegistryTimeout.setValue("input.pEntity", app.varEntity.getValue("dataValue") );
this.svarReadFromRegistryTimeout.setValue("input.pAppId", "NA" );
this.svarReadFromRegistryTimeout.setValue("input.pUserId","NA");
this.svarReadFromRegistryTimeout.setValue("input.pVarname","TIMETOLIVE");
this.svarReadFromRegistryTimeout.setValue("input.pDefa","300000");
this.svarReadFromRegistryTimeout.update();
//Added by Jammi Dee 04/04/2013
this.svarReadFromRegistryTimeoutSwitch.setValue("input.pEntity", app.varEntity.getValue("dataValue") );
this.svarReadFromRegistryTimeoutSwitch.setValue("input.pAppId", "NA" );
this.svarReadFromRegistryTimeoutSwitch.setValue("input.pUserId","NA");
this.svarReadFromRegistryTimeoutSwitch.setValue("input.pVarname","SESSIONSWITCH");
this.svarReadFromRegistryTimeoutSwitch.setValue("input.pDefa","ON");
this.svarReadFromRegistryTimeoutSwitch.update();
this.svarReadFromRegistryJoinPass.setValue("input.pAppId","NA");
this.svarReadFromRegistryJoinPass.setValue("input.pEntity","NA");
this.svarReadFromRegistryJoinPass.setValue("input.pUserId","NA");
this.svarReadFromRegistryJoinPass.setValue("input.pVarname","JOINPASS");
this.svarReadFromRegistryJoinPass.update();
// Added by Jammi Dee 04/28/2012
// Get the OBDC information from the registry
this.svarReadFromRegistryDbUrl.setValue("input.pAppId","NA");
this.svarReadFromRegistryDbUrl.setValue("input.pEntity","NA");
this.svarReadFromRegistryDbUrl.setValue("input.pUserId","NA");
this.svarReadFromRegistryDbUrl.setValue("input.pVarname","DBURL");
this.svarReadFromRegistryDbUrl.update();
this.svarReadFromRegistryDbDatabase.setValue("input.pAppId","NA");
this.svarReadFromRegistryDbDatabase.setValue("input.pEntity","NA");
this.svarReadFromRegistryDbDatabase.setValue("input.pUserId","NA");
this.svarReadFromRegistryDbDatabase.setValue("input.pVarname","DBDATABASE");
this.svarReadFromRegistryDbDatabase.update();
this.svarReadFromRegistryDbDriver.setValue("input.pAppId","NA");
this.svarReadFromRegistryDbDriver.setValue("input.pEntity","NA");
this.svarReadFromRegistryDbDriver.setValue("input.pUserId","NA");
this.svarReadFromRegistryDbDriver.setValue("input.pVarname","DBDRIVER");
this.svarReadFromRegistryDbDriver.update();
this.svarReadFromRegistryDbUser.setValue("input.pAppId","NA");
this.svarReadFromRegistryDbUser.setValue("input.pEntity","NA");
this.svarReadFromRegistryDbUser.setValue("input.pUserId","NA");
this.svarReadFromRegistryDbUser.setValue("input.pVarname","DBUSER");
this.svarReadFromRegistryDbUser.update();
this.svarReadFromRegistryDbPassword.setValue("input.pAppId","NA");
this.svarReadFromRegistryDbPassword.setValue("input.pEntity","NA");
this.svarReadFromRegistryDbPassword.setValue("input.pUserId","NA");
this.svarReadFromRegistryDbPassword.setValue("input.pVarname","DBPASSWORD");
this.svarReadFromRegistryDbPassword.update();
// Added by Jammi Dee 04/30/2012
// Load from registry all the Email Config.
this.svarReadFromRegistryEmailHost.setValue("input.pAppId","NA");
this.svarReadFromRegistryEmailHost.setValue("input.pEntity","NA");
this.svarReadFromRegistryEmailHost.setValue("input.pUserId","NA");
this.svarReadFromRegistryEmailHost.setValue("input.pVarname","EMAILHOST");
this.svarReadFromRegistryEmailHost.update();
this.svarReadFromRegistryEmailPort.setValue("input.pAppId","NA");
this.svarReadFromRegistryEmailPort.setValue("input.pEntity","NA");
this.svarReadFromRegistryEmailPort.setValue("input.pUserId","NA");
this.svarReadFromRegistryEmailPort.setValue("input.pVarname","EMAILPORT");
this.svarReadFromRegistryEmailPort.update();
this.svarReadFromRegistryEmailUser.setValue("input.pAppId","NA");
this.svarReadFromRegistryEmailUser.setValue("input.pEntity","NA");
this.svarReadFromRegistryEmailUser.setValue("input.pUserId","NA");
this.svarReadFromRegistryEmailUser.setValue("input.pVarname","EMAILUSER");
this.svarReadFromRegistryEmailUser.update();
this.svarReadFromRegistryEmailPassword.setValue("input.pAppId","NA");
this.svarReadFromRegistryEmailPassword.setValue("input.pEntity","NA");
this.svarReadFromRegistryEmailPassword.setValue("input.pUserId","NA");
this.svarReadFromRegistryEmailPassword.setValue("input.pVarname","EMAILPASSWORD");
this.svarReadFromRegistryEmailPassword.update();
//-------------------------------
// LOGGING TO FILE
// Added by Jammi Dee 05/31/2012
// Read the log to file status
//-------------------------------
this.svarReadFromRegistryLogging.setValue("input.pAppId","NA");
this.svarReadFromRegistryLogging.setValue("input.pEntity","NA");
this.svarReadFromRegistryLogging.setValue("input.pUserId","NA");
this.svarReadFromRegistryLogging.setValue("input.pVarname","LOGTOFILE");
this.svarReadFromRegistryLogging.setValue("input.pDefa","OFF");
this.svarReadFromRegistryLogging.update();
//-------------------------------
// CENTRAL REPOSITORY
// Added by Jammi Dee 09/08/2012
// Read the cemtral repository status
//-------------------------------
this.svarReadFromRegistryCentralRepo.setValue("input.pAppId","NA");
this.svarReadFromRegistryCentralRepo.setValue("input.pEntity","NA");
this.svarReadFromRegistryCentralRepo.setValue("input.pUserId","NA");
this.svarReadFromRegistryCentralRepo.setValue("input.pVarname","CENTRALREPO");
this.svarReadFromRegistryCentralRepo.setValue("input.pDefa","OFF");
this.svarReadFromRegistryCentralRepo.update();
//-------------------------------
// READ data for the Site Phrase
// Added by Jammi Dee 08/19/2012
//-------------------------------
this.svarReadFromRegistrySitePhrase.setValue("input.pAppId","NA");
this.svarReadFromRegistrySitePhrase.setValue("input.pEntity","NA");
this.svarReadFromRegistrySitePhrase.setValue("input.pUserId","NA");
this.svarReadFromRegistrySitePhrase.setValue("input.pVarname","SITEPHRASE");
this.svarReadFromRegistrySitePhrase.setValue("input.pDefa","Welcome to Cloud Gate Systems!");
this.svarReadFromRegistrySitePhrase.update();
//-------------------------------
// READ data for the required browser
// Added by Jammi Dee 08/19/2012
//-------------------------------
this.svarReadFromRegistryReqBrowser.setValue("input.pAppId","NA");
this.svarReadFromRegistryReqBrowser.setValue("input.pEntity","NA");
this.svarReadFromRegistryReqBrowser.setValue("input.pUserId","NA");
this.svarReadFromRegistryReqBrowser.setValue("input.pVarname","REQBROWSE");
this.svarReadFromRegistryReqBrowser.setValue("input.pDefa"," ");
this.svarReadFromRegistryReqBrowser.update();
//-------------------------------
// READ data for the OO Integration
// Added by Jammi Dee 05/23/2013
//-------------------------------
this.svarReadFromRegistryJRXMLFormat.setValue("input.pAppId", "NA");
this.svarReadFromRegistryJRXMLFormat.setValue("input.pEntity",app.varEntity.getValue("dataValue") );
this.svarReadFromRegistryJRXMLFormat.setValue("input.pUserId","NA");
this.svarReadFromRegistryJRXMLFormat.setValue("input.pVarname","JRXMLFORMAT");
this.svarReadFromRegistryJRXMLFormat.setValue("input.pDefa","PDF");
this.svarReadFromRegistryJRXMLFormat.update();
// Added by Jammi Dee 05/06/2012
app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarLogging.setValue("input.pMsg","Configure the system.");
app.svarLogging.setValue("input.pModuleId","CONFIG");
app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
app.svarLogging.setValue("input.pProcess","PAGELOAD");
app.svarLogging.setValue("input.pScopeId","NA");
app.svarLogging.setValue("input.pStype","USER");
app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
app.svarLogging.update();
// Added by Jammi Dee 05/31/2012
this.selLogging.setOptions("ON,OFF");
// Added by Jammi Dee 09/08/2012
this.selRepo.setOptions("ON,OFF");
//alert( app.varBrowserName.getValue("dataValue") );
// Added by Jammi Dee 08/19/2012
this.lblBrowser.setCaption( app.varBrowserName.getValue("dataValue") );
app.pdWaitLoadPage.hide();
} catch (e) {
app.toastError(this.name + ".start() Failed: " + e.toString());
}
},
// Added by Jammi Dee 04/17/2012
// This is the result of the registry reading
svarReadFromRegistryResult: function(inSender, inDeprecated) {
try {
this.txtUrl.setValue("dataValue", inSender.getValue("dataValue"));
} catch(e) {
console.error('ERROR IN svarReadFromRegistryResult: ' + e);
}
},
svarReadFromRegistryJoinPassResult: function(inSender, inDeprecated) {
try {
this.txtJoinPassword.setValue("dataValue", inSender.getValue("dataValue"));
} catch(e) {
console.error('ERROR IN svarReadFromRegistryJoinPassResult: ' + e);
}
},
// Added by Jammi Dee 05/31/2012
svarReadFromRegistryLoggingResult: function(inSender, inDeprecated) {
try {
this.selLogging.setValue("dataValue", inSender.getValue("dataValue"));
} catch(e) {
console.error('ERROR IN svarReadFromRegistryLoggingResult: ' + e);
}
},
//Added by Jammi Dee 09/08/2012
svarReadFromRegistryCentralRepoResult: function(inSender, inDeprecated) {
try {
this.selRepo.setValue("dataValue", inSender.getValue("dataValue"));
} catch(e) {
console.error('ERROR IN svarReadFromRegistryCentralRepoResult: ' + e);
}
},
/*
* 03/25/2012 - Jammi Dee
* Initialize the template variables here
*/
initApplication: function() {
this.lblTitle.setCaption("Configure : System" );
this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
},
/*
Added by JMD 04/15/2012
Save the site URL of the Application.
*/
btnSaveSiteClick: function(inSender) {
try {
//alert(this.txtUrl.getValue("dataValue"));
app.svarWriteToRegistry.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
app.svarWriteToRegistry.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
app.svarWriteToRegistry.setValue("input.pUserId","NA"); // Application wide registry
app.svarWriteToRegistry.setValue("input.pVarname","BGNDURL"); // Background URL
app.svarWriteToRegistry.setValue("input.pVarvalue",this.txtUrl.getValue("dataValue"));
app.svarWriteToRegistry.update();
alert("Background information has been SAVED.");
} catch(e) {
console.error('ERROR IN btnSaveSiteClick: ' + e);
}
},
/*
Added by Jammi Dee 04/17/2012
This function will save the Global Joining Password of the ERP
*/
btnJoinClick: function(inSender) {
try {
// Added by Jammi Dee 05/01/2012
// Encrypt the data
this.svarEncryptMD5.setValue("input.code",this.txtJoinPassword.getValue("dataValue") );
this.svarEncryptMD5.update();
//alert(this.txtUrl.getValue("dataValue"));
app.svarWriteToRegistry.setValue("input.pAppId","NA");
app.svarWriteToRegistry.setValue("input.pEntity","NA");
app.svarWriteToRegistry.setValue("input.pUserId","NA");
app.svarWriteToRegistry.setValue("input.pVarname","JOINPASS");
app.svarWriteToRegistry.setValue("input.pVarvalue",this.txtJoinPassword.getValue("dataValue"));
app.svarWriteToRegistry.update();
alert("Password has been successfully SAVED.");
} catch(e) {
console.error('ERROR IN btnJoinClick: ' + e);
}
},
// Added Jammi Dee 05/01/2012
svarEncryptMD5Result: function(inSender, inDeprecated) {
try {
this.svarWriteToRegistryJoinPassEnc.setValue("input.pAppId","NA");
this.svarWriteToRegistryJoinPassEnc.setValue("input.pEntity","NA");
this.svarWriteToRegistryJoinPassEnc.setValue("input.pUserId","NA");
this.svarWriteToRegistryJoinPassEnc.setValue("input.pVarname","JOINPASSENC");
this.svarWriteToRegistryJoinPassEnc.setValue("input.pVarvalue",inSender.getValue("dataValue") );
this.svarWriteToRegistryJoinPassEnc.update();
//alert( inSender.getValue("dataValue") );
} catch(e) {
console.error('ERROR IN svarEncryptMD5Result: ' + e);
}
},
// Added by Jammi Dee 04/28/22012
btnDbSaveClick: function(inSender) {
try {
app.svarWriteToRegistry.setValue("input.pAppId","NA");
app.svarWriteToRegistry.setValue("input.pEntity","NA");
app.svarWriteToRegistry.setValue("input.pUserId","NA");
app.svarWriteToRegistry.setValue("input.pVarname","DBURL");
app.svarWriteToRegistry.setValue("input.pVarvalue",this.txtDbUrl.getValue("dataValue"));
app.svarWriteToRegistry.update();
this.svarWriteToRegistryDbDatabase.setValue("input.pAppId","NA");
this.svarWriteToRegistryDbDatabase.setValue("input.pEntity","NA");
this.svarWriteToRegistryDbDatabase.setValue("input.pUserId","NA");
this.svarWriteToRegistryDbDatabase.setValue("input.pVarname","DBDATABASE");
this.svarWriteToRegistryDbDatabase.setValue("input.pVarvalue",this.txtDbDatabase.getValue("dataValue"));
this.svarWriteToRegistryDbDatabase.update();
this.svarWriteToRegistryDbDriver.setValue("input.pAppId","NA");
this.svarWriteToRegistryDbDriver.setValue("input.pEntity","NA");
this.svarWriteToRegistryDbDriver.setValue("input.pUserId","NA");
this.svarWriteToRegistryDbDriver.setValue("input.pVarname","DBDRIVER");
this.svarWriteToRegistryDbDriver.setValue("input.pVarvalue",this.txtDbDriver.getValue("dataValue"));
this.svarWriteToRegistryDbDriver.update();
this.svarWriteToRegistryDbUser.setValue("input.pAppId","NA");
this.svarWriteToRegistryDbUser.setValue("input.pEntity","NA");
this.svarWriteToRegistryDbUser.setValue("input.pUserId","NA");
this.svarWriteToRegistryDbUser.setValue("input.pVarname","DBUSER");
this.svarWriteToRegistryDbUser.setValue("input.pVarvalue",this.txtDbUser.getValue("dataValue"));
this.svarWriteToRegistryDbUser.update();
this.svarWriteToRegistryDbPassword.setValue("input.pAppId","NA");
this.svarWriteToRegistryDbPassword.setValue("input.pEntity","NA");
this.svarWriteToRegistryDbPassword.setValue("input.pUserId","NA");
this.svarWriteToRegistryDbPassword.setValue("input.pVarname","DBPASSWORD");
this.svarWriteToRegistryDbPassword.setValue("input.pVarvalue",this.txtDbPassword.getValue("dataValue"));
this.svarWriteToRegistryDbPassword.update();
alert("System Service ODBC has been SAVED.");
} catch(e) {
console.error('ERROR IN btnDbSaveClick: ' + e);
}
},
// Added by Jammi Dee 04/28/2012
svarReadFromRegistryDbDriverResult: function(inSender, inDeprecated) {
try {
this.txtDbDriver.setValue("dataValue", inSender.getValue("dataValue"));
} catch(e) {
console.error('ERROR IN svarReadFromRegistryDbDriverResult: ' + e);
}
},
svarReadFromRegistryDbPasswordResult: function(inSender, inDeprecated) {
try {
this.txtDbPassword.setValue("dataValue", inSender.getValue("dataValue"));
} catch(e) {
console.error('ERROR IN svarReadFromRegistryDbPasswordResult: ' + e);
}
},
svarReadFromRegistryDbUrlResult: function(inSender, inDeprecated) {
try {
this.txtDbUrl.setValue("dataValue", inSender.getValue("dataValue"));
} catch(e) {
console.error('ERROR IN svarReadFromRegistryDbUrlResult: ' + e);
}
},
svarReadFromRegistryDbUserResult: function(inSender, inDeprecated) {
try {
this.txtDbUser.setValue("dataValue", inSender.getValue("dataValue"));
} catch(e) {
console.error('ERROR IN svarReadFromRegistryDbUserResult: ' + e);
}
},
svarReadFromRegistryDbDatabaseResult: function(inSender, inDeprecated) {
try {
this.txtDbDatabase.setValue("dataValue", inSender.getValue("dataValue"));
} catch(e) {
console.error('ERROR IN svarReadFromRegistryDbDatabaseResult: ' + e);
}
},
// Added by Jammi Dee 04/30/20/12
btnEmailSaveClick: function(inSender) {
try {
// this.btnDbSaveClick(inSender);
this.svarWriteToRegistryEmailHost.setValue("input.pAppId","NA");
this.svarWriteToRegistryEmailHost.setValue("input.pEntity","NA");
this.svarWriteToRegistryEmailHost.setValue("input.pUserId","NA");
this.svarWriteToRegistryEmailHost.setValue("input.pVarname","EMAILHOST");
this.svarWriteToRegistryEmailHost.setValue("input.pVarvalue",this.txtEmailHost.getValue("dataValue"));
this.svarWriteToRegistryEmailHost.update();
this.svarWriteToRegistryEmailPort.setValue("input.pAppId","NA");
this.svarWriteToRegistryEmailPort.setValue("input.pEntity","NA");
this.svarWriteToRegistryEmailPort.setValue("input.pUserId","NA");
this.svarWriteToRegistryEmailPort.setValue("input.pVarname","EMAILPORT");
this.svarWriteToRegistryEmailPort.setValue("input.pVarvalue",this.txtEmailPort.getValue("dataValue"));
this.svarWriteToRegistryEmailPort.update();
this.svarWriteToRegistryEmailUser.setValue("input.pAppId","NA");
this.svarWriteToRegistryEmailUser.setValue("input.pEntity","NA");
this.svarWriteToRegistryEmailUser.setValue("input.pUserId","NA");
this.svarWriteToRegistryEmailUser.setValue("input.pVarname","EMAILUSER");
this.svarWriteToRegistryEmailUser.setValue("input.pVarvalue",this.txtEmailUser.getValue("dataValue"));
this.svarWriteToRegistryEmailUser.update();
//this.svarWriteToRegistryEmailPassword.setValue("input.pAppId","NA");
//this.svarWriteToRegistryEmailPassword.setValue("input.pEntity","NA");
//this.svarWriteToRegistryEmailPassword.setValue("input.pUserId","NA");
//this.svarWriteToRegistryEmailPassword.setValue("input.pVarname","EMAILPASSWORD");
//this.svarWriteToRegistryEmailPassword.setValue("input.pVarvalue",this.txtEmailPassword.getValue("dataValue"));
//this.svarWriteToRegistryEmailPassword.update();
this.svarDESEncrypt.setValue("input.value", this.txtEmailPassword.getValue("dataValue") );
this.svarDESEncrypt.update();
} catch(e) {
console.error('ERROR IN btnDbSave1Click: ' + e);
}
},
// Added by Jammi Dee 05/02/2012
// Encrypt the password
svarDESEncryptResult: function(inSender, inDeprecated) {
try {
//alert( inSender.getValue("dataValue") );
this.svarWriteToRegistryEmailPassword.setValue("input.pAppId","NA");
this.svarWriteToRegistryEmailPassword.setValue("input.pEntity","NA");
this.svarWriteToRegistryEmailPassword.setValue("input.pUserId","NA");
this.svarWriteToRegistryEmailPassword.setValue("input.pVarname","EMAILPASSWORD");
this.svarWriteToRegistryEmailPassword.setValue("input.pVarvalue",inSender.getValue("dataValue"));
this.svarWriteToRegistryEmailPassword.update();
alert("System Service EMAIL has been SAVED.");
} catch(e) {
console.error('ERROR IN svarDESEncryptResult: ' + e);
}
},
// Added by Jammi Dee 04/30/2012
svarReadFromRegistryEmailHostResult: function(inSender, inDeprecated) {
try {
this.txtEmailHost.setValue("dataValue", inSender.getValue("dataValue"));
} catch(e) {
console.error('ERROR IN svarReadFromRegistryEmailHostResult: ' + e);
}
},
svarReadFromRegistryEmailPortResult: function(inSender, inDeprecated) {
try {
this.txtEmailPort.setValue("dataValue", inSender.getValue("dataValue"));
} catch(e) {
console.error('ERROR IN svarReadFromRegistryEmailPortResult: ' + e);
}
},
svarReadFromRegistryEmailUserResult: function(inSender, inDeprecated) {
try {
this.txtEmailUser.setValue("dataValue", inSender.getValue("dataValue"));
} catch(e) {
console.error('ERROR IN svarReadFromRegistryEmailUserResult: ' + e);
}
},
// Added by Jammi Dee 05/02/2012
svarReadFromRegistryEmailPasswordResult: function(inSender, inDeprecated) {
try {
this.svarDESDecrypt.setValue("input.value", inSender.getValue("dataValue")) ;
this.svarDESDecrypt.update();
} catch(e) {
console.error('ERROR IN svarReadFromRegistryEmailPasswordResult: ' + e);
}
},
svarDESDecryptResult: function(inSender, inDeprecated) {
try {
this.txtEmailPassword.setValue("dataValue", inSender.getValue("dataValue"));
} catch(e) {
console.error('ERROR IN svarDESDecryptResult: ' + e);
}
},
// Added by Jammi Dee 05/01/2012
btnTestEmailClick: function(inSender) {
try {
this.ddTestMail.show();
} catch(e) {
console.error('ERROR IN btnTestEmailClick: ' + e);
alert( 'ERROR IN btnTestEmailClick: ' + e );
}
},
btnTestSendClick: function(inSender) {
try {
this.ddTestMail.hide();
this.svarSendEmail.setValue("input.strSource",                "cgdms@connext-ph.com");
this.svarSendEmail.setValue("input.strSourceDesc",            "CloudGate DMS System");
this.svarSendEmail.setValue("input.strDestination",           this.txtSendTo.getValue("dataValue") );
this.svarSendEmail.setValue("input.strDestDesc",              this.txtSendTo.getValue("dataValue") );
this.svarSendEmail.setValue("input.strSubject",               this.txtSubject.getValue("dataValue") );
this.svarSendEmail.setValue("input.strMsg",                   this.txtMessage.getValue("dataValue"));
app.pdWaitLoadPage.show();
this.svarSendEmail.update();
} catch(e) {
console.error('ERROR IN btnTestSendClick: ' + e);
}
},
//Added by Jammi Dee 04/13/2013
svarSendEmailResult: function(inSender, inDeprecated) {
try {
app.pdWaitLoadPage.hide();
alert( "Test Email has been sent." );
} catch(e) {
console.error('ERROR IN svarSendEmailResult: ' + e);
}
},
svarGetJasonResult: function(inSender, inDeprecated) {
try {
alert(inSender.getValue("dataValue"));
//this.otData.setValue("data", inSender.getValue("dataValue") );
} catch(e) {
console.error('ERROR IN svarGetJasonResult: ' + e);
}
},
svarGetJason2Result: function(inSender, inDeprecated) {
try {
//alert(inSender.getValue("dataValue"));
this.otData.setValue("data", inSender.getValue("dataValue") );
} catch(e) {
console.error('ERROR IN svarGetJason2Result: ' + e);
}
},
// Added by Jammi Dee
// 05/26/2012
btnTestDbClick: function(inSender) {
try {
// Test the database connectivity
this.svarTestDb.update();
} catch(e) {
console.error('ERROR IN btnTestDbClick: ' + e);
}
},
svarTestDbResult: function(inSender, inDeprecated) {
try {
alert("Test Database Result: " + inSender.getValue("dataValue"));
} catch(e) {
console.error('ERROR IN svarTestDbResult: ' + e);
}
},
// Added by Jammi Dee 05/31/2012
btnLogSaveClick: function(inSender) {
try {
this.svarWriteToRegistryLogging.setValue("input.pAppId","NA");
this.svarWriteToRegistryLogging.setValue("input.pEntity","NA");
this.svarWriteToRegistryLogging.setValue("input.pUserId","NA");
this.svarWriteToRegistryLogging.setValue("input.pVarname","LOGTOFILE");
this.svarWriteToRegistryLogging.setValue("input.pVarvalue",this.selLogging.getValue("dataValue"));
this.svarWriteToRegistryLogging.update();
} catch(e) {
console.error('ERROR IN btnLogSaveClick: ' + e);
}
},
// Added by Jammi Dee 05/31/2012
svarWriteToRegistryLoggingResult: function(inSender, inDeprecated) {
try {
alert("System Service Logging to File setting has been SAVED.");
} catch(e) {
console.error('ERROR IN svarWriteToRegistryLoggingResult: ' + e);
}
},
// Added by Jammi Dee 09/08/2012
btnRepoSaveClick: function(inSender) {
try {
this.svarWriteToRegistryRepo.setValue("input.pAppId","NA");
this.svarWriteToRegistryRepo.setValue("input.pEntity","NA");
this.svarWriteToRegistryRepo.setValue("input.pUserId","NA");
this.svarWriteToRegistryRepo.setValue("input.pVarname","CENTRALREPO");
this.svarWriteToRegistryRepo.setValue("input.pVarvalue",this.selRepo.getValue("dataValue"));
this.svarWriteToRegistryRepo.update();
} catch(e) {
console.error('ERROR IN btnRepoSaveClick: ' + e);
}
},
//Added by Jammi Dee 09/08/22012
svarWriteToRegistryRepoResult: function(inSender, inDeprecated) {
try {
alert("Central Repository setting has been SAVED.");
} catch(e) {
console.error('ERROR IN svarWriteToRegistryRepoResult: ' + e);
}
},
btnTestLogViewClick: function(inSender) {
try {
this.svarTestLog.update();
} catch(e) {
console.error('ERROR IN button1Click: ' + e);
}
},
svarTestLogResult: function(inSender, inDeprecated) {
try {
this.fraLogView.setSource("http://" + window.location.hostname + ":" + window.location.port + "/" + app.varAppContext.getValue("dataValue") + inSender.getValue("dataValue") );
this.fraLogView.update();
} catch(e) {
console.error('ERROR IN svarTestLogResult: ' + e);
}
},
btnLogViewOnlyClick: function(inSender) {
try {
this.svarLogView.setValue("input.pFile","dbwaveerp.html");
this.svarLogView.update();
} catch(e) {
console.error('ERROR IN btnLogViewOnlyClick: ' + e);
}
},
svarLogViewResult: function(inSender, inDeprecated) {
try {
this.fraLogView.setSource("http://" + window.location.hostname + ":" + window.location.port + "/" + app.varAppContext.getValue("dataValue") + inSender.getValue("dataValue") );
this.fraLogView.update();
} catch(e) {
console.error('ERROR IN svarLogViewResult: ' + e);
}
},
//Added by Jammi Dee 08/19/2012
btnSavePhraseClick: function(inSender) {
try {
//alert(this.txtUrl.getValue("dataValue"));
this.svarWriteToRegistrySitePhrase.setValue("input.pAppId","NA");
this.svarWriteToRegistrySitePhrase.setValue("input.pEntity","NA");
this.svarWriteToRegistrySitePhrase.setValue("input.pUserId","NA"); // Application wide registry
this.svarWriteToRegistrySitePhrase.setValue("input.pVarname","SITEPHRASE"); // Site Phrase
this.svarWriteToRegistrySitePhrase.setValue("input.pVarvalue",this.txtSitePhrase.getValue("dataValue"));
this.svarWriteToRegistrySitePhrase.update();
alert("Site Phrase has been SAVED.");
} catch(e) {
console.error('ERROR IN btnSavePhraseClick: ' + e);
alert( 'ERROR IN btnSavePhraseClick: ' + e );
}
},
svarReadFromRegistrySitePhraseResult: function(inSender, inDeprecated) {
try {
this.txtSitePhrase.setValue("dataValue", inSender.getValue("dataValue"));
} catch(e) {
console.error('ERROR IN svarReadFromRegistrySitePhraseResult: ' + e);
}
},
//Added by Jammi Dee 08/19/2012
btnReqBrowserClick: function(inSender) {
try {
//alert(this.txtUrl.getValue("dataValue"));
this.svarWriteToRegistryReqBrowser.setValue("input.pAppId","NA");
this.svarWriteToRegistryReqBrowser.setValue("input.pEntity","NA");
this.svarWriteToRegistryReqBrowser.setValue("input.pUserId","NA"); // Application wide registry
this.svarWriteToRegistryReqBrowser.setValue("input.pVarname","REQBROWSE"); // Required Browser
this.svarWriteToRegistryReqBrowser.setValue("input.pVarvalue",this.txtBrowser.getValue("dataValue"));
this.svarWriteToRegistryReqBrowser.update();
alert("Required Browser has been SAVED.");
} catch(e) {
console.error('ERROR IN btnReqBrowserClick: ' + e);
}
},
//Added by Jammi Dee 08/19/2012
svarReadFromRegistryReqBrowserResult: function(inSender, inDeprecated) {
try {
this.txtBrowser.setValue("dataValue", inSender.getValue("dataValue"));
} catch(e) {
console.error('ERROR IN svarReadFromRegistryReqBrowserResult: ' + e);
}
},
//Added by Jammi Dee 11/16/2012
svarReadFromRegistryTimeoutResult: function(inSender, inDeprecated) {
try {
this.txtTimeToLive.setValue("dataValue", inSender.getValue("dataValue"));
} catch(e) {
console.error('ERROR IN svarReadFromRegistryTimeoutResult: ' + e);
}
},
//Added by Jammi Dee 11/16/2012
btnTimeoutClick: function(inSender) {
try {
this.svarWriteToRegistryTimeout.setValue("input.pEntity", app.varEntity.getValue("dataValue") );
this.svarWriteToRegistryTimeout.setValue("input.pAppId","NA");
this.svarWriteToRegistryTimeout.setValue("input.pUserId","NA"); // Application wide registry
this.svarWriteToRegistryTimeout.setValue("input.pVarname","TIMETOLIVE"); // Required Browser
this.svarWriteToRegistryTimeout.setValue("input.pVarvalue",this.txtTimeToLive.getValue("dataValue"));
this.svarWriteToRegistryTimeout.update();
} catch(e) {
console.error('ERROR IN btnTimeoutClick: ' + e);
}
},
//Added by Jammi Dee 04/06/2013
svarWriteToRegistryTimeoutResult: function(inSender, inDeprecated) {
try {
alert("Timeout data has been saved!");
} catch(e) {
console.error('ERROR IN svarWriteToRegistryTimeoutResult: ' + e);
}
},
//Added by Jammi Dee 04/04/2013
svarReadFromRegistryTimeoutSwitchResult: function(inSender, inDeprecated) {
try {
this.selTimeoutStatus.setValue("dataValue", inSender.getValue("dataValue") );
} catch(e) {
console.error('ERROR IN svarReadFromRegistryTimeoutSwitchResult: ' + e);
}
},
btnTimeoutSwitchClick: function(inSender) {
this.svarWriteToRegistryTimeoutSwitch.setValue("input.pEntity", app.varEntity.getValue("dataValue") );
this.svarWriteToRegistryTimeoutSwitch.setValue("input.pAppId","NA");
this.svarWriteToRegistryTimeoutSwitch.setValue("input.pUserId","NA"); // Application wide registry
this.svarWriteToRegistryTimeoutSwitch.setValue("input.pVarname","SESSIONSWITCH");
this.svarWriteToRegistryTimeoutSwitch.setValue("input.pVarvalue",this.selTimeoutStatus.getValue("dataValue"));
this.svarWriteToRegistryTimeoutSwitch.update();
},
//Added by Jammi Dee 04/06/2013
btnTimeouthalfClick: function(inSender) {
this.txtTimeToLive.setValue("dataValue", "1800000"); // Half hour session expiraton
},
//Added by Jammi Dee 04/06/2013
btnTimeoutwholeClick: function(inSender) {
this.txtTimeToLive.setValue("dataValue", "3600000"); // 1 hour session expiraton
},
svarReadFromRegistryJRXMLFormatResult: function(inSender, inDeprecated) {
this.selJRXMLFormat.setValue("dataValue", "3600000");
},
//Added by Jammi Dee 04/10/2013
pic_backClick: function(inSender) {
try {
app.pdWaitLoadPage.show();
this.navPgMainConfig.update();
} catch(e) {
console.error('ERROR IN pic_backClick: ' + e);
}
},
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
//Added by Jammi Dee 05/24/2013
btnJRXMLFormatClick: function(inSender) {
try {
this.svarWriteToRegistryTimeoutSwitch.setValue("input.pEntity", app.varEntity.getValue("dataValue") );
this.svarWriteToRegistryTimeoutSwitch.setValue("input.pAppId","NA");
this.svarWriteToRegistryTimeoutSwitch.setValue("input.pUserId","NA"); // Application wide registry
this.svarWriteToRegistryTimeoutSwitch.setValue("input.pVarname","JRXMLFORMAT");
this.svarWriteToRegistryTimeoutSwitch.setValue("input.pVarvalue",this.selJRXMLFormat.getValue("dataValue"));
this.svarWriteToRegistryTimeoutSwitch.update();
} catch(e) {
console.error('ERROR IN btnJRXMLFormatClick: ' + e);
}
},
_end: 0
});

PgMainConfigSystem.widgets = {
varOps: ["wm.Variable", {"type":"StringData"}, {}],
navPgMain: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMain\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navPgMainConfig: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMainConfig\"","targetProperty":"pageName"}, {}]
}]
}]
}],
svarReadFromRegistry: ["wm.ServiceVariable", {"operation":"readRegistry","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryResult"}, {
input: ["wm.ServiceInput", {"type":"readRegistryInputs"}, {}]
}],
svarReadFromRegistryJoinPass: ["wm.ServiceVariable", {"operation":"readRegistry","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryJoinPassResult"}, {
input: ["wm.ServiceInput", {"type":"readRegistryInputs"}, {}]
}],
svarReadFromRegistryDbUrl: ["wm.ServiceVariable", {"operation":"readRegistry","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryDbUrlResult"}, {
input: ["wm.ServiceInput", {"type":"readRegistryInputs"}, {}]
}],
svarReadFromRegistryDbDriver: ["wm.ServiceVariable", {"operation":"readRegistry","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryDbDriverResult"}, {
input: ["wm.ServiceInput", {"type":"readRegistryInputs"}, {}]
}],
svarReadFromRegistryDbUser: ["wm.ServiceVariable", {"operation":"readRegistry","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryDbUserResult"}, {
input: ["wm.ServiceInput", {"type":"readRegistryInputs"}, {}]
}],
svarReadFromRegistryDbPassword: ["wm.ServiceVariable", {"operation":"readRegistry","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryDbPasswordResult"}, {
input: ["wm.ServiceInput", {"type":"readRegistryInputs"}, {}]
}],
svarWriteToRegistryDbDriver: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {}, {
input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
}],
svarWriteToRegistryDbUser: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {}, {
input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
}],
svarWriteToRegistryDbPassword: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {}, {
input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
}],
svarReadFromRegistryDbDatabase: ["wm.ServiceVariable", {"operation":"readRegistry","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryDbDatabaseResult"}, {
input: ["wm.ServiceInput", {"type":"readRegistryInputs"}, {}]
}],
svarWriteToRegistryDbDatabase: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {}, {
input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
}],
svarWriteToRegistryEmailHost: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {}, {
input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
}],
svarWriteToRegistryEmailPort: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {}, {
input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
}],
svarWriteToRegistryEmailUser: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {}, {
input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
}],
svarWriteToRegistryEmailPassword: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {}, {
input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
}],
svarReadFromRegistryEmailHost: ["wm.ServiceVariable", {"operation":"readRegistry","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryEmailHostResult"}, {
input: ["wm.ServiceInput", {"type":"readRegistryInputs"}, {}]
}],
svarReadFromRegistryEmailPort: ["wm.ServiceVariable", {"operation":"readRegistry","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryEmailPortResult"}, {
input: ["wm.ServiceInput", {"type":"readRegistryInputs"}, {}]
}],
svarReadFromRegistryEmailUser: ["wm.ServiceVariable", {"operation":"readRegistry","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryEmailUserResult"}, {
input: ["wm.ServiceInput", {"type":"readRegistryInputs"}, {}]
}],
svarReadFromRegistryEmailPassword: ["wm.ServiceVariable", {"operation":"readRegistry","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryEmailPasswordResult"}, {
input: ["wm.ServiceInput", {"type":"readRegistryInputs"}, {}]
}],
svarEncryptMD5: ["wm.ServiceVariable", {"operation":"encryptMD5","service":"svcUtility"}, {"onResult":"svarEncryptMD5Result"}, {
input: ["wm.ServiceInput", {"type":"encryptMD5Inputs"}, {}]
}],
svarWriteToRegistryJoinPassEnc: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {}, {
input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
}],
svarSendEmail: ["wm.ServiceVariable", {"operation":"sendMsg","service":"svcSendMail"}, {"onResult":"svarSendEmailResult"}, {
input: ["wm.ServiceInput", {"type":"sendMsgInputs"}, {}]
}],
svarDESEncrypt: ["wm.ServiceVariable", {"operation":"encrypt","service":"svcDESEncryption"}, {"onResult":"svarDESEncryptResult"}, {
input: ["wm.ServiceInput", {"type":"encryptInputs"}, {}]
}],
svarDESInit: ["wm.ServiceVariable", {"operation":"Encrypter","service":"svcDESEncryption"}, {}, {
input: ["wm.ServiceInput", {"type":"EncrypterInputs"}, {}]
}],
svarDESDecrypt: ["wm.ServiceVariable", {"operation":"decrypt","service":"svcDESEncryption"}, {"onResult":"svarDESDecryptResult"}, {
input: ["wm.ServiceInput", {"type":"decryptInputs"}, {}]
}],
svarGetJason: ["wm.ServiceVariable", {"operation":"getJSONTree","service":"svcJSONLibrary"}, {"onResult":"svarGetJasonResult"}, {
input: ["wm.ServiceInput", {"type":"getJSONTreeInputs"}, {}]
}],
svarGetJason2: ["wm.ServiceVariable", {"operation":"loadData","service":"svcJSONLibrary02"}, {"onResult":"svarGetJason2Result"}, {
input: ["wm.ServiceInput", {"type":"loadDataInputs"}, {}]
}],
svarTestDb: ["wm.ServiceVariable", {"operation":"testDatabase","service":"svcDbDirect"}, {"onResult":"svarTestDbResult"}, {
input: ["wm.ServiceInput", {"type":"testDatabaseInputs"}, {}]
}],
svarWriteToRegistryLogging: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {"onResult":"svarWriteToRegistryLoggingResult"}, {
input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
}],
svarReadFromRegistryLogging: ["wm.ServiceVariable", {"operation":"readRegistryDefault","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryLoggingResult"}, {
input: ["wm.ServiceInput", {"type":"readRegistryDefaultInputs"}, {}]
}],
svarTestLog: ["wm.ServiceVariable", {"operation":"erpLog","service":"svcLogger"}, {"onResult":"svarTestLogResult"}, {
input: ["wm.ServiceInput", {"type":"erpLogInputs"}, {}]
}],
svarLogView: ["wm.ServiceVariable", {"operation":"erpLogFileRelativePath","service":"svcLogger"}, {"onResult":"svarLogViewResult"}, {
input: ["wm.ServiceInput", {"type":"erpLogFileRelativePathInputs"}, {}]
}],
svarReadFromRegistrySitePhrase: ["wm.ServiceVariable", {"operation":"readRegistryDefault","service":"svcRegistry"}, {"onResult":"svarReadFromRegistrySitePhraseResult"}, {
input: ["wm.ServiceInput", {"type":"readRegistryDefaultInputs"}, {}]
}],
svarWriteToRegistrySitePhrase: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {}, {
input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
}],
svarWriteToRegistryReqBrowser: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {}, {
input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
}],
svarReadFromRegistryReqBrowser: ["wm.ServiceVariable", {"operation":"readRegistryDefault","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryReqBrowserResult"}, {
input: ["wm.ServiceInput", {"type":"readRegistryDefaultInputs"}, {}]
}],
svarReadFromRegistryCentralRepo: ["wm.ServiceVariable", {"operation":"readRegistryDefault","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryCentralRepoResult"}, {
input: ["wm.ServiceInput", {"type":"readRegistryDefaultInputs"}, {}]
}],
svarWriteToRegistryRepo: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {"onResult":"svarWriteToRegistryRepoResult"}, {
input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
}],
svarReadFromRegistryTimeout: ["wm.ServiceVariable", {"operation":"readRegistryDefault","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryTimeoutResult"}, {
input: ["wm.ServiceInput", {"type":"readRegistryDefaultInputs"}, {}]
}],
svarWriteToRegistryTimeout: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {"onResult":"svarWriteToRegistryTimeoutResult"}, {
input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
}],
svarReadFromRegistryTimeoutSwitch: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"readRegistryDefault","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryTimeoutSwitchResult"}, {
input: ["wm.ServiceInput", {"type":"readRegistryDefaultInputs"}, {}]
}],
svarWriteToRegistryTimeoutSwitch: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"writeRegistry","service":"svcRegistry"}, {}, {
input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
}],
svarReadFromRegistryJRXMLFormat: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"readRegistryDefault","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryJRXMLFormatResult"}, {
input: ["wm.ServiceInput", {"type":"readRegistryDefaultInputs"}, {}]
}],
pdLoading: ["wm.PageDialog", {"desktopHeight":"100px","height":"100px","hideControls":true,"pageName":"Main","width":"280px"}, {}],
ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","corner":"cr","modal":false,"title":"Configure System Help"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgMainConfigSystem.html"}, {}]
}],
buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnClose: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddPgMainConfigHelp.hide"}]
}]
}],
pdAbout: ["wm.PageDialog", {"desktopHeight":"341px","height":"341px","noEscape":true,"noMaxify":true,"noMinify":true,"pageName":"PgAbout","width":"616px"}, {}],
ddTestMail: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget1","desktopHeight":"250px","height":"250px","title":"Test Email","width":"400px"}, {}, {
containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
txtSendTo: ["wm.Text", {"caption":"Send Email To:","captionAlign":"left","captionSize":"120px","dataValue":"jammi.dee@baligyaan.com","displayValue":"jammi.dee@baligyaan.com","width":"100%"}, {}],
txtSubject: ["wm.Text", {"caption":"Email Subject:","captionAlign":"left","captionSize":"120px","dataValue":"Test email from CloudGate DMS","displayValue":"Test email from CloudGate DMS","width":"100%"}, {}],
txtMessage: ["wm.LargeTextArea", {"caption":"Test Message:","captionPosition":"left","captionSize":"120px","dataValue":"This is a test email from CG DMS system.","displayValue":"This is a test email from CG DMS system.","width":"100%"}, {}]
}],
buttonBar1: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","desktopHeight":"32px","enableTouchHeight":true,"fitToContentHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
btnTestSend: ["wm.Button", {"caption":"Send","margin":"4"}, {"onclick":"btnTestSendClick"}],
btnTestCancel: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"ddTestMail.hide"}]
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
pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
accSystem: ["wm.TabLayers", {}, {}, {
layApp: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"App Config","horizontalAlign":"left","verticalAlign":"top"}, {}, {
pnlSiteBgnd: ["wm.FancyPanel", {"height":"90px","title":"Application Website Background"}, {}, {
pnlSite: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
txtUrl: ["wm.Text", {"caption":"Background URL","captionSize":"120px","dataValue":undefined,"displayValue":"","placeHolder":"Background URL","width":"500px"}, {}],
btnSaveSite: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Save","margin":"4"}, {"onclick":"btnSaveSiteClick"}]
}]
}],
fancyPanel1: ["wm.FancyPanel", {"title":"More Site Configuration"}, {}, {
pnlLoginPhrase: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
txtSitePhrase: ["wm.Text", {"caption":"Site Phrase","captionAlign":"left","captionSize":"120px","dataValue":undefined,"displayValue":"","placeHolder":"Welcome to Cloud Gate System","width":"500px"}, {}],
btnSavePhrase: ["wm.Button", {"_classes":{"domNode":["wm_Mouse_pointer","wm_BackgroundColor_SteelBlue"]},"caption":"Save","margin":"4"}, {"onclick":"btnSavePhraseClick"}]
}],
pnlBrowser: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
txtBrowser: ["wm.Text", {"caption":"Req. Browser","captionAlign":"left","captionSize":"120px","dataValue":undefined,"displayValue":"","placeHolder":"Required browser","width":"320px"}, {}],
btnReqBrowser: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Req. Browser","margin":"4","width":"135px"}, {"onclick":"btnReqBrowserClick"}],
lblBrowser: ["wm.Label", {"caption":"-","padding":"4","width":"300px"}, {}]
}],
pnlSession: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
txtTimeToLive: ["wm.Text", {"caption":"Sess. Timeout","captionAlign":"left","captionSize":"120px","dataValue":undefined,"displayValue":"","placeHolder":"300000","width":"320px"}, {}],
btnTimeouthalf: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"1/2hr","margin":"4"}, {"onclick":"btnTimeouthalfClick"}],
btnTimeoutwhole: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"1 hr","margin":"4"}, {"onclick":"btnTimeoutwholeClick"}],
btnTimeout: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Save","margin":"4"}, {"onclick":"btnTimeoutClick"}],
lblSession: ["wm.Label", {"caption":"Session timeout in milliseconds.","padding":"4"}, {}]
}],
pnlSessionSwitch: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
selTimeoutStatus: ["wm.SelectMenu", {"caption":"Timeout Status:","captionAlign":"left","captionSize":"120px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","options":"ON,OFF","width":"220px"}, {}],
spacer5: ["wm.Spacer", {"height":"17px","width":"100px"}, {}],
btnTimeoutSwitch: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Save","margin":"4"}, {"onclick":"btnTimeoutSwitchClick"}]
}],
pnlJRXMLFormat: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
selJRXMLFormat: ["wm.SelectMenu", {"caption":"JRXML Format:","captionAlign":"left","captionSize":"120px","dataField":"dataValue","dataValue":"PDF","displayField":"dataValue","displayValue":"PDF","options":"PDF,HTML","width":"220px"}, {}],
spacer6: ["wm.Spacer", {"height":"17px","width":"100px"}, {}],
btnJRXMLFormat: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Save","margin":"4"}, {"onclick":"btnJRXMLFormatClick"}]
}]
}]
}],
layErp: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ERP Config","horizontalAlign":"left","verticalAlign":"top"}, {}, {
pnlJoin: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
txtJoinPassword: ["wm.Text", {"caption":"Join Password","dataValue":undefined,"displayValue":"","password":true}, {}],
btnJoin: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Set","margin":"4","width":"60px"}, {"onclick":"btnJoinClick"}],
lblJoinDesc: ["wm.Label", {"caption":"Needed by Apps in order to join the Wave ERP System.","padding":"4","width":"339px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}],
pnlServiceODBC: ["wm.Panel", {"fitToContentHeight":true,"height":"215px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
fnlServiceODBC: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"213px","title":"System Service ODBC (This is a cross-Entity settings)"}, {}, {
spacer2: ["wm.Spacer", {"height":"17px","width":"96px"}, {}],
pnlUrl: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtDbUrl: ["wm.Text", {"caption":"Database URL","captionAlign":"left","captionSize":"150px","dataValue":undefined,"displayValue":"","placeHolder":"jdbc:mysql://localhost:3306/","width":"500px"}, {}]
}],
pnlDatabase: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtDbDatabase: ["wm.Text", {"caption":"Database","captionAlign":"left","captionSize":"150px","dataValue":undefined,"displayValue":"","placeHolder":"dbwaveerp","width":"400px"}, {}]
}],
pnlDriver: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtDbDriver: ["wm.Text", {"caption":"Database Driver","captionAlign":"left","captionSize":"150px","dataValue":undefined,"displayValue":"","placeHolder":"com.mysql.jdbc.Driver","width":"500px"}, {}]
}],
pnlDbUser: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtDbUser: ["wm.Text", {"caption":"Database User","captionAlign":"left","captionSize":"150px","dataValue":undefined,"displayValue":"","placeHolder":"username","width":"400px"}, {}]
}],
pnlDbPassword: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtDbPassword: ["wm.Text", {"caption":"Database Password","captionAlign":"left","captionSize":"150px","dataValue":undefined,"displayValue":"","password":true,"placeHolder":"password","width":"400px"}, {}]
}],
pnlDbAction: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
spcDbSave: ["wm.Spacer", {"height":"20px","width":"350px"}, {}],
btnTestDb: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Test","margin":"4"}, {"onclick":"btnTestDbClick"}],
btnDbSave: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Save","margin":"4"}, {"onclick":"btnDbSaveClick"}]
}]
}]
}],
pnlServiceEmail: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
fnlServiceEmail: ["wm.FancyPanel", {"title":"System Service Email (This is a cross-Entity settings)"}, {}, {
spacer3: ["wm.Spacer", {"height":"17px","width":"96px"}, {}],
pnlEmailHost: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtEmailHost: ["wm.Text", {"caption":"Email Host","captionAlign":"left","captionSize":"150px","dataValue":undefined,"displayValue":"","placeHolder":"smtp.gmail.com","width":"400px"}, {}]
}],
pnlEmailPort: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtEmailPort: ["wm.Text", {"caption":"Email Port","captionAlign":"left","captionSize":"150px","dataValue":undefined,"displayValue":"","placeHolder":"587","width":"200px"}, {}]
}],
pnlEmailUser: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtEmailUser: ["wm.Text", {"caption":"Email User","captionAlign":"left","captionSize":"150px","dataValue":undefined,"displayValue":"","placeHolder":"username","width":"400px"}, {}]
}],
pnlEmailPassword: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtEmailPassword: ["wm.Text", {"caption":"Email Password","captionAlign":"left","captionSize":"150px","dataValue":undefined,"displayValue":"","password":true,"placeHolder":"password","width":"400px"}, {}]
}],
pnlEmailAction: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spcDbSave1: ["wm.Spacer", {"height":"20px","width":"350px"}, {}],
btnTestEmail: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Test","margin":"4"}, {"onclick":"btnTestEmailClick"}],
btnEmailSave: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Save","margin":"4"}, {"onclick":"btnEmailSaveClick"}]
}]
}]
}]
}],
layLogs: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Logging","horizontalAlign":"left","verticalAlign":"top"}, {}, {
pnlLogging: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
selLogging: ["wm.SelectMenu", {"caption":"Logging Status:","captionSize":"120px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","options":"ON,OFF","width":"200px"}, {}],
btnLogSave: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Save","margin":"4"}, {"onclick":"btnLogSaveClick"}],
lblLogging: ["wm.Label", {"caption":"Turn ON / OFF the file logging system.","padding":"4","width":"233px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}],
pnlLog4j: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
btnTestLogView: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Test Log","margin":"4","width":"130px"}, {"onclick":"btnTestLogViewClick"}],
spacer4: ["wm.Spacer", {"height":"20px","width":"20px"}, {}],
btnLogViewOnly: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"View Only","margin":"4","width":"130px"}, {"onclick":"btnLogViewOnlyClick"}]
}],
pnlLogView: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
fraLogView: ["wm.IFrame", {"height":"100%","width":"100%"}, {}]
}]
}],
layRepo: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Repository","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
pnlRepo: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
selRepo: ["wm.SelectMenu", {"caption":"Centralize Repo:","captionAlign":"left","captionSize":"110px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","options":"ON,OFF","width":"210px"}, {}],
btnRepoSave: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Save","margin":"4"}, {"onclick":"btnRepoSaveClick"}],
lblRepo: ["wm.Label", {"caption":"Turn ON / OFF the centralize Repository scheme.","padding":"4","width":"291px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
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

PgMainConfigSystem.prototype._cssText = 'body.tundra .PgMainConfigSystem .wmlayout .PgMainConfigSystem-pnlHeader {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainConfigSystem .wmlayout .PgMainConfigSystem-pnlTitle {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainConfigSystem .wmlayout .PgMainConfigSystem-lblTitle {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:14pt;\
}\
body.tundra .PgMainConfigSystem .wmlayout .PgMainConfigSystem-pnlMenuBar {\
background-color:#00008B;\
}\
body.tundra .PgMainConfigSystem .wmlayout .PgMainConfigSystem-pnlFooter {\
background-color:#00008B;\
}\
body.tundra .PgMainConfigSystem .wmlayout .PgMainConfigSystem-txtUserId {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainConfigSystem .PgMainConfigSystem-pnlLayoutMain.wmlayout {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:14pt;\
}\
body.tundra .PgMainConfigSystem .wmlayout .PgMainConfigSystem-txtPassword {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainConfigSystem .wmlayout .PgMainConfigSystem-lblManageTicket {\
font-family: Tahoma;\
}\
body.tundra .PgMainConfigSystem .wmlayout .PgMainConfigSystem-lblUserInfo {\
font-family:Tahoma;\
}\
body.tundra .PgMainConfigSystem .wmlayout .PgMainConfigSystem-lblBorder {\
font-family:Tahoma;\
}\
body.tundra .PgMainConfigSystem .wmlayout .PgMainConfigSystem-lblLogout {\
font-family:Tahoma;\
}\
body.tundra .PgMainConfigSystem .wmlayout .PgMainConfigSystem-lblSep {\
font-family:Tahoma;\
}\
body.tundra .PgMainConfigSystem .wmlayout .PgMainConfigSystem-lblManageUser {\
font-family:Tahoma;\
}\
body.tundra .PgMainConfigSystem .wmlayout .PgMainConfigSystem-pnlBody {\
}\
body.tundra .PgMainConfigSystem .wmlayout .PgMainConfigSystem-lblManageLookUp {\
font-family:Tahoma;\
}\
';
PgMainConfigSystem.prototype._htmlText = '';