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
* Date: 08/20/2012
* Modified by: Jammi Dee 08/20/2012
*
*/
/*
This is a sample page that can used as template
*/
dojo.declare("PgMainConfigLicense", wm.Page, {
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
//Added by Jammi Dee 08/20/2012
this.txtSourceKey.setValue("dataValue", window.location.hostname + ":" + window.location.port );
// Added by Jammi Dee 05/06/2012
app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarLogging.setValue("input.pMsg","License key generation.");
app.svarLogging.setValue("input.pModuleId","CONFIG");
app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
app.svarLogging.setValue("input.pProcess","KEYGEN");
app.svarLogging.setValue("input.pScopeId","NA");
app.svarLogging.setValue("input.pStype","USER");
app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
app.svarLogging.update();
//Update the URL Access Table
this.svarUrlAccess.update();
//Added by Jammi Dee 11/25/2012
this.svarReadFromRegistryLicTo.setValue("input.pEntity", "NA" );
this.svarReadFromRegistryLicTo.setValue("input.pAppId", "NA" );
this.svarReadFromRegistryLicTo.setValue("input.pUserId","NA");
this.svarReadFromRegistryLicTo.setValue("input.pVarname","LICENSETO");
this.svarReadFromRegistryLicTo.setValue("input.pDefa","CloudGate Inc.");
this.svarReadFromRegistryLicTo.update();
//Added by Jammi Dee 11/25/2012
this.svarReadFromRegistryConUsers.setValue("input.pEntity", "NA" );
this.svarReadFromRegistryConUsers.setValue("input.pAppId", "NA" );
this.svarReadFromRegistryConUsers.setValue("input.pUserId","NA");
this.svarReadFromRegistryConUsers.setValue("input.pVarname","CONCURRENTUSERS");
this.svarReadFromRegistryConUsers.setValue("input.pDefa","10");
this.svarReadFromRegistryConUsers.update();
//Added by Jammi Dee 11/25/2012
this.svarReadFromRegistryNoUsers.setValue("input.pEntity", "NA" );
this.svarReadFromRegistryNoUsers.setValue("input.pAppId", "NA" );
this.svarReadFromRegistryNoUsers.setValue("input.pUserId","NA");
this.svarReadFromRegistryNoUsers.setValue("input.pVarname","NOUSERS");
this.svarReadFromRegistryNoUsers.setValue("input.pDefa","1000");
this.svarReadFromRegistryNoUsers.update();
//Added by Jammi Dee 11/25/2012
this.svarReadFromRegistryNoEntities.setValue("input.pEntity", "NA" );
this.svarReadFromRegistryNoEntities.setValue("input.pAppId", "NA" );
this.svarReadFromRegistryNoEntities.setValue("input.pUserId","NA");
this.svarReadFromRegistryNoEntities.setValue("input.pVarname","NOENTITIES");
this.svarReadFromRegistryNoEntities.setValue("input.pDefa","3");
this.svarReadFromRegistryNoEntities.update();
//Added by Jammi Dee 12/08/2012
this.svarReadFromRegistryEdition.setValue("input.pEntity", "NA" );
this.svarReadFromRegistryEdition.setValue("input.pAppId", "NA" );
this.svarReadFromRegistryEdition.setValue("input.pUserId","NA");
this.svarReadFromRegistryEdition.setValue("input.pVarname","EDITION");
this.svarReadFromRegistryEdition.setValue("input.pDefa","STANDARD");
this.svarReadFromRegistryEdition.update();
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
this.lblTitle.setCaption("Config : License Key" );
this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
},
//Added by Jammi Dee 08/20/2012
btnGenerateClick: function(inSender) {
try {
//Generate key here.
this.svarGenerateKey.setValue("input.pKey",        this.txtPasswordKey.getValue("dataValue") );
this.svarGenerateKey.setValue("input.pKeySource",  this.txtSourceKey.getValue("dataValue") );
this.svarGenerateKey.update();
} catch(e) {
console.error('ERROR IN btnGenerateClick: ' + e);
}
},
//Added by Jammi Dee 08/20/2012
svarGenerateKeyResult: function(inSender, inDeprecated) {
try {
this.txtGenKey.setValue("dataValue", inSender.getValue("dataValue") );
} catch(e) {
console.error('ERROR IN svarGenerateKeyResult: ' + e);
alert( 'ERROR IN svarGenerateKeyResult: ' + e );
}
},
//Added by Jammi Dee 09/11/2012
pic_addClick: function(inSender) {
try {
this.ddNewUrlAccess.show();
} catch(e) {
console.error('ERROR IN pic_addClick: ' + e);
alert( 'ERROR IN pic_addClick: ' + e );
}
},
//Added by Jammi Dee 09/11/2012
btnUrlAddClick: function(inSender) {
try {
//Generate key here.
this.svarGenerateURLKey.setValue("input.pKey",        this.txtUrlPass.getValue("dataValue") );
this.svarGenerateURLKey.setValue("input.pKeySource",  this.txtUrl.getValue("dataValue") );
this.svarGenerateURLKey.update();
//Added by Jammi Dee 04/14/2013
//Get the encrypted URL password
//this.svarReadFromRegistryUrlKey.setValue("input.pEntity", "NA" );
//this.svarReadFromRegistryUrlKey.setValue("input.pAppId", "NA" );
//this.svarReadFromRegistryUrlKey.setValue("input.pUserId","NA");
//this.svarReadFromRegistryUrlKey.setValue("input.pVarname","URLPASS");
//this.svarReadFromRegistryUrlKey.setValue("input.pDefa","Nothing");
//this.svarReadFromRegistryUrlKey.update();
} catch(e) {
console.error('ERROR IN btnUrlAddClick: ' + e);
alert( 'ERROR IN btnUrlAddClick: ' + e );
}
},
svarReadFromRegistryUrlKeyResult: function(inSender, inDeprecated) {
try {
//Generate key here.
this.svarGenerateURLKey.setValue("input.pKey",        this.txtUrlPass.getValue("dataValue") );
this.svarGenerateURLKey.setValue("input.pKeySource",  this.txtUrl.getValue("dataValue") );
this.svarGenerateURLKey.update();
} catch(e) {
console.error('ERROR IN svarReadFromRegistryUrlKeyResult: ' + e);
alert( 'ERROR IN btnUrlAddClick: ' + e );
}
},
//Added by Jammi Dee 09/11/2012
svarGenerateURLKeyResult: function(inSender, inDeprecated) {
try {
//Used this UUID generation when database UUID is not available
var UUID = app.uuid4();
var eQuery =           "insert into tblAccessUrl( " +
"juid, " +
"urlid, " +
"urlpassword, " +
"sstatus " +
")" +
"values( " +
"'" + UUID + "', " +
"'" + this.txtUrl.getValue("dataValue") + "', " +
"'" + inSender.getValue("dataValue") + "', " +
"'ACTIVE' " +
");";
//alert( eQuery );
this.svarExecGenericNonQuery.setValue("input.eQuery", eQuery);
this.svarExecGenericNonQuery.update();
app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarLogging.setValue("input.pMsg","Added new URL Access " + this.txtUrl.getValue("dataValue") + "." );
app.svarLogging.setValue("input.pModuleId","LICENSE");
app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
app.svarLogging.setValue("input.pProcess","KEYGEN");
app.svarLogging.setValue("input.pScopeId","NA");
app.svarLogging.setValue("input.pStype","USER");
app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
app.svarLogging.update();
//Hide the popup window
this.ddNewUrlAccess.hide();
} catch(e) {
console.error('ERROR IN svarGenerateURLKeyResult: ' + e);
alert( 'ERROR IN svarGenerateURLKeyResult: ' + e );
}
},
//Added by Jammi Dee 09/11/2012
svarExecGenericNonQueryResult: function(inSender, inDeprecated) {
try {
//Update the URL Access Table
this.svarUrlAccess.update();
} catch(e) {
console.error('ERROR IN svarExecGenericNonQueryResult: ' + e);
}
},
//Added by Jammi Dee 09/11/2012
pic_deleteClick: function(inSender) {
try {
var response = confirm("Delete: Are you sure to delete this item?");
if (response) {
var eQuery = "delete from tblAccessUrl where urlid ='" + this.dgData.selectedItem.getData().urlid + "'; " ;
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
app.svarLogging.setValue("input.pMsg","Deleted URL Access " + this.txtUrl.getValue("dataValue") + "." );
app.svarLogging.setValue("input.pModuleId","LICENSE");
app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
app.svarLogging.setValue("input.pProcess","KEYGEN");
app.svarLogging.setValue("input.pScopeId","NA");
app.svarLogging.setValue("input.pStype","USER");
app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
app.svarLogging.update();
//Update the URL Access Table
this.svarUrlAccess.update();
//alert("URL Access has been deleted.");
} catch(e) {
console.error('ERROR IN svarExecGenericNonQueryDeleteResult: ' + e);
}
},
//Added by Jammi Dee 11/25/2012
btnGenerateLicClick: function(inSender) {
try {
//Generate key here.
this.svarGenerateKeyConUsers.setValue("input.pKey",        this.txtPasswordKey.getValue("dataValue") );
this.svarGenerateKeyConUsers.setValue("input.pKeySource",  this.txtLicTo.getValue("dataValue") + "|" + this.txtConcurrentUsers.getValue("dataValue") );
this.svarGenerateKeyConUsers.update();
} catch(e) {
console.error('ERROR IN btnGenerateLicClick: ' + e);
}
},
//Added by Jammi Dee 11/25/2012
svarGenerateKeyConUsersResult: function(inSender, inDeprecated) {
try {
this.txtConcurrentUsers.setValue("dataValue", inSender.getValue("dataValue") );
//Generate key here.
this.svarGenerateKeyNoUsers.setValue("input.pKey",        this.txtPasswordKey.getValue("dataValue") );
this.svarGenerateKeyNoUsers.setValue("input.pKeySource",  this.txtLicTo.getValue("dataValue") + "|" + this.txtNoUsers.getValue("dataValue") );
this.svarGenerateKeyNoUsers.update();
} catch(e) {
console.error('ERROR IN svarGenerateKeyConUsersResult: ' + e);
}
},
//Added by Jammi Dee 11/25/2012
svarGenerateKeyNoUsersResult: function(inSender, inDeprecated) {
try {
this.txtNoUsers.setValue("dataValue", inSender.getValue("dataValue") );
//Generate key here.
this.svarGenerateKeyNoEntities.setValue("input.pKey",        this.txtPasswordKey.getValue("dataValue") );
this.svarGenerateKeyNoEntities.setValue("input.pKeySource",  this.txtLicTo.getValue("dataValue") + "|" + this.txtNoEntity.getValue("dataValue") );
this.svarGenerateKeyNoEntities.update();
} catch(e) {
console.error('ERROR IN svarGenerateKeyNoUsersResult: ' + e);
}
},
//Added by Jammi Dee 11/25/2012
svarGenerateKeyNoEntitiesResult: function(inSender, inDeprecated) {
try {
this.txtNoEntity.setValue("dataValue", inSender.getValue("dataValue") );
//Generate key here.
this.svarGenerateKeyEdition.setValue("input.pKey",        this.txtPasswordKey.getValue("dataValue") );
this.svarGenerateKeyEdition.setValue("input.pKeySource",  this.txtLicTo.getValue("dataValue") + "|" + this.txtEdition.getValue("dataValue") );
this.svarGenerateKeyEdition.update();
} catch(e) {
console.error('ERROR IN svarGenerateKeyNoEntitiesResult: ' + e);
}
},
//Added by Jammi Dee 12/08/2012
svarGenerateKeyEditionResult: function(inSender, inDeprecated) {
try {
this.txtEdition.setValue("dataValue", inSender.getValue("dataValue") );
} catch(e) {
console.error('ERROR IN svarGenerateKeyEditionResult: ' + e);
}
},
//Added by Jammi Dee 11/25/2012
btnSaveLicClick: function(inSender) {
try {
this.svarWriteToRegistryLicTo.setValue("input.pAppId","NA");
this.svarWriteToRegistryLicTo.setValue("input.pEntity","NA");
this.svarWriteToRegistryLicTo.setValue("input.pUserId","NA"); // Application wide registry
this.svarWriteToRegistryLicTo.setValue("input.pVarname","LICENSETO"); // Background URL
this.svarWriteToRegistryLicTo.setValue("input.pVarvalue",this.txtLicTo.getValue("dataValue"));
this.svarWriteToRegistryLicTo.update();
} catch(e) {
console.error('ERROR IN btnSaveLicClick: ' + e);
}
},
svarWriteToRegistryLicToResult: function(inSender, inDeprecated) {
try {
this.svarWriteToRegistryConUsers.setValue("input.pAppId","NA");
this.svarWriteToRegistryConUsers.setValue("input.pEntity","NA");
this.svarWriteToRegistryConUsers.setValue("input.pUserId","NA"); // Application wide registry
this.svarWriteToRegistryConUsers.setValue("input.pVarname","CONCURRENTUSERS"); // Background URL
this.svarWriteToRegistryConUsers.setValue("input.pVarvalue",this.txtConcurrentUsers.getValue("dataValue"));
this.svarWriteToRegistryConUsers.update();
} catch(e) {
console.error('ERROR IN svarWriteToRegistryLicToResult: ' + e);
}
},
svarWriteToRegistryConUsersResult: function(inSender, inDeprecated) {
try {
this.svarWriteToRegistryNoUsers.setValue("input.pAppId","NA");
this.svarWriteToRegistryNoUsers.setValue("input.pEntity","NA");
this.svarWriteToRegistryNoUsers.setValue("input.pUserId","NA"); // Application wide registry
this.svarWriteToRegistryNoUsers.setValue("input.pVarname","NOUSERS"); // Background URL
this.svarWriteToRegistryNoUsers.setValue("input.pVarvalue",this.txtNoUsers.getValue("dataValue"));
this.svarWriteToRegistryNoUsers.update();
} catch(e) {
console.error('ERROR IN svarWriteToRegistryConUsersResult: ' + e);
}
},
svarWriteToRegistryNoUsersResult: function(inSender, inDeprecated) {
try {
this.svarWriteToRegistryNoEntities.setValue("input.pAppId","NA");
this.svarWriteToRegistryNoEntities.setValue("input.pEntity","NA");
this.svarWriteToRegistryNoEntities.setValue("input.pUserId","NA"); // Application wide registry
this.svarWriteToRegistryNoEntities.setValue("input.pVarname","NOENTITIES"); // Background URL
this.svarWriteToRegistryNoEntities.setValue("input.pVarvalue",this.txtNoEntity.getValue("dataValue"));
this.svarWriteToRegistryNoEntities.update();
//alert("License codes has been saved!");
} catch(e) {
console.error('ERROR IN svarWriteToRegistryNoUsersResult: ' + e);
}
},
//Added by Jammi Dee 12/08/2012
svarWriteToRegistryNoEntitiesResult: function(inSender, inDeprecated) {
try {
this.svarWriteToRegistryEdition.setValue("input.pAppId","NA");
this.svarWriteToRegistryEdition.setValue("input.pEntity","NA");
this.svarWriteToRegistryEdition.setValue("input.pUserId","NA"); // Application wide registry
this.svarWriteToRegistryEdition.setValue("input.pVarname","EDITION"); // Background URL
this.svarWriteToRegistryEdition.setValue("input.pVarvalue",this.txtEdition.getValue("dataValue"));
this.svarWriteToRegistryEdition.update();
alert("License codes has been saved!");
} catch(e) {
console.error('ERROR IN svarWriteToRegistryNoEntitiesResult: ' + e);
}
},
btnImportLicClick: function(inSender) {
try {
} catch(e) {
console.error('ERROR IN btnImportLicClick: ' + e);
}
},
//Added by Jammi Dee 11/25/2012
svarReadFromRegistryLicToResult: function(inSender, inDeprecated) {
try {
this.varLicTo.setValue("dataValue", inSender.getValue("dataValue") );
this.txtLicTo.setValue("dataValue", inSender.getValue("dataValue") );
} catch(e) {
console.error('ERROR IN svarReadFromRegistryLicToResult: ' + e);
}
},
svarReadFromRegistryConUsersResult: function(inSender, inDeprecated) {
try {
this.txtConcurrentUsers.setValue("dataValue", inSender.getValue("dataValue") );
} catch(e) {
console.error('ERROR IN svarReadFromRegistryConUsersResult: ' + e);
}
},
svarReadFromRegistryNoUsersResult: function(inSender, inDeprecated) {
try {
this.txtNoUsers.setValue("dataValue", inSender.getValue("dataValue") );
} catch(e) {
console.error('ERROR IN svarReadFromRegistryNoUsersResult: ' + e);
}
},
svarReadFromRegistryNoEntitiesResult: function(inSender, inDeprecated) {
try {
this.txtNoEntity.setValue("dataValue", inSender.getValue("dataValue") );
} catch(e) {
console.error('ERROR IN svarReadFromRegistryNoEntitiesResult: ' + e);
}
},
//Added by Jammi Dee 12/08/2012
svarReadFromRegistryEditionResult: function(inSender, inDeprecated) {
try {
this.txtEdition.setValue("dataValue", inSender.getValue("dataValue") );
} catch(e) {
console.error('ERROR IN svarReadFromRegistryEditionResult: ' + e);
alert( 'ERROR IN svarReadFromRegistryEditionResult: ' + e );
}
},
//Added by Jammi Dee 11/25/2012
btnExportLicClick: function(inSender) {
try {
this.svarExportLicense.setValue("input.pLicTo",this.txtLicTo.getValue("dataValue"));
this.svarExportLicense.setValue("input.pConUsers",this.txtConcurrentUsers.getValue("dataValue"));
this.svarExportLicense.setValue("input.pNoUsers",this.txtNoUsers.getValue("dataValue"));
this.svarExportLicense.setValue("input.pNoEntity",this.txtNoEntity.getValue("dataValue"));
this.svarExportLicense.setValue("input.pEdition",this.txtEdition.getValue("dataValue"));
this.svarExportLicense.update();
} catch(e) {
console.error('ERROR IN btnExportLicClick: ' + e);
}
},
//Added by Jammi Dee 11/25/2012
svarExportLicenseResult: function(inSender, inDeprecated) {
try {
var UUID = app.uuid4();
//window.open( "http://" + window.location.hostname + ":" + window.location.port + "/" + app.varAppContext.getValue("dataValue") + "/" + inSender.getValue("dataValue") + "?pagemode=none#toolbar=0&statusbar=0messages=0&navpanes=0&jmdid=" + UUID , 'resizable,scrollbars' );
alert( "http://" + window.location.hostname + ":" + window.location.port + "/" + app.varAppContext.getValue("dataValue") + "/" + inSender.getValue("dataValue") );
} catch(e) {
console.error('ERROR IN svarExportLicenseResult: ' + e);
alert( 'ERROR IN svarExportLicenseResult: ' + e );
}
},
//Added by Jammi Dee 11/30/2012
btnTestLicClick: function(inSender) {
try {
//UnGenerate key here.
this.svarUnGenerateKeyConUsers.setValue("input.pRegSource",  "CONCURRENTUSERS" );
this.svarUnGenerateKeyConUsers.update();
} catch(e) {
console.error('ERROR IN btnTestLicClick: ' + e);
alert( 'ERROR IN btnTestLicClick: ' + e );
}
},
//Added by Jammi Dee 11/30/2012
svarUnGenerateKeyConUsersResult: function(inSender, inDeprecated) {
try {
this.lblConcurrentUsers.setCaption( inSender.getValue("dataValue") );
//UnGenerate key here.
this.svarUnGenerateKeyNoUsers.setValue("input.pRegSource",  "NOUSERS" );
this.svarUnGenerateKeyNoUsers.update();
} catch(e) {
console.error('ERROR IN svarUnGenerateKeyConUsersResult: ' + e);
}
},
svarUnGenerateKeyNoUsersResult: function(inSender, inDeprecated) {
try {
this.lblNoUsers.setCaption( inSender.getValue("dataValue") );
this.svarUnGenerateKeyNoEntities.setValue("input.pRegSource",  "NOENTITIES" );
this.svarUnGenerateKeyNoEntities.update();
} catch(e) {
console.error('ERROR IN svarUnGenerateKeyNoUsersResult: ' + e);
}
},
svarUnGenerateKeyNoEntitiesResult: function(inSender, inDeprecated) {
try {
this.lblNoEntity.setCaption( inSender.getValue("dataValue") );
this.svarUnGenerateKeyEdition.setValue("input.pRegSource",  "EDITION" );
this.svarUnGenerateKeyEdition.update();
} catch(e) {
console.error('ERROR IN svarUnGenerateKeyNoEntitiesResult: ' + e);
}
},
//Added by Jammi Dee 12/08/2012
svarUnGenerateKeyEditionResult: function(inSender, inDeprecated) {
try {
this.lblEdition.setCaption( inSender.getValue("dataValue") );
} catch(e) {
console.error('ERROR IN svarUnGenerateKeyEditionResult: ' + e);
}
},
//Added by Jammi Dee 04/14/2012
pic_urlKeyClick: function(inSender) {
try {
this.ddUrlPassword.show();
} catch(e) {
console.error('ERROR IN pic_urlKeyClick: ' + e);
}
},
btnSetUrlSetClick: function(inSender) {
try {
this.svarGenerateURLPass.setValue("input.pKey",        this.txtUrlPassKey.getValue("dataValue") );
this.svarGenerateURLPass.setValue("input.pKeySource",  this.txtUrlPassword.getValue("dataValue") );
this.svarGenerateURLPass.update();
} catch(e) {
console.error('ERROR IN btnSetUrlSetClick: ' + e);
}
},
svarGenerateURLPassResult: function(inSender, inDeprecated) {
try {
alert( "URL Password has been set!" );
this.ddUrlPassword.hide();
} catch(e) {
console.error('ERROR IN svarGenerateURLPassResult: ' + e);
}
},
//Added by Jammi Dee 05/05/2013
pic_backClick: function(inSender) {
try {
app.pdWaitLoadPage.show();
this.navPgMainConfig.update();
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
console.error('ERROR IN pic_homeClick: ' + e);
}
},
_end: 0
});

PgMainConfigLicense.widgets = {
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
svarGenerateKey: ["wm.ServiceVariable", {"operation":"generateKey","service":"svcLicenseSystem"}, {"onResult":"svarGenerateKeyResult"}, {
input: ["wm.ServiceInput", {"type":"generateKeyInputs"}, {}]
}],
svarUrlAccess: ["wm.ServiceVariable", {"operation":"qryUrlAccess","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryUrlAccessInputs"}, {}]
}],
svarExecGenericNonQuery: ["wm.ServiceVariable", {"operation":"execNonQuery","service":"svcExecGenericNonQuery"}, {"onResult":"svarExecGenericNonQueryResult"}, {
input: ["wm.ServiceInput", {"type":"execNonQueryInputs"}, {}]
}],
svarGenerateURLKey: ["wm.ServiceVariable", {"operation":"readURLKey","service":"svcLicenseSystem"}, {"onResult":"svarGenerateURLKeyResult"}, {
input: ["wm.ServiceInput", {"type":"readURLKeyInputs"}, {}]
}],
svarExecGenericNonQueryDelete: ["wm.ServiceVariable", {"operation":"execNonQuery","service":"svcExecGenericNonQuery"}, {"onResult":"svarExecGenericNonQueryDeleteResult"}, {
input: ["wm.ServiceInput", {"type":"execNonQueryInputs"}, {}]
}],
svarReadFromRegistryLicTo: ["wm.ServiceVariable", {"operation":"readRegistryDefault","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryLicToResult"}, {
input: ["wm.ServiceInput", {"type":"readRegistryDefaultInputs"}, {}]
}],
svarReadFromRegistryConUsers: ["wm.ServiceVariable", {"operation":"readRegistryDefault","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryConUsersResult"}, {
input: ["wm.ServiceInput", {"type":"readRegistryDefaultInputs"}, {}]
}],
svarReadFromRegistryNoUsers: ["wm.ServiceVariable", {"operation":"readRegistryDefault","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryNoUsersResult"}, {
input: ["wm.ServiceInput", {"type":"readRegistryDefaultInputs"}, {}]
}],
svarGenerateKeyLicTo: ["wm.ServiceVariable", {"operation":"generateKey","service":"svcLicenseSystem"}, {}, {
input: ["wm.ServiceInput", {"type":"generateKeyInputs"}, {}]
}],
svarGenerateKeyConUsers: ["wm.ServiceVariable", {"operation":"generateKey","service":"svcLicenseSystem"}, {"onResult":"svarGenerateKeyConUsersResult"}, {
input: ["wm.ServiceInput", {"type":"generateKeyInputs"}, {}]
}],
svarGenerateKeyNoUsers: ["wm.ServiceVariable", {"operation":"generateKey","service":"svcLicenseSystem"}, {"onResult":"svarGenerateKeyNoUsersResult"}, {
input: ["wm.ServiceInput", {"type":"generateKeyInputs"}, {}]
}],
svarReadFromRegistryNoEntities: ["wm.ServiceVariable", {"operation":"readRegistryDefault","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryNoEntitiesResult"}, {
input: ["wm.ServiceInput", {"type":"readRegistryDefaultInputs"}, {}]
}],
svarGenerateKeyNoEntities: ["wm.ServiceVariable", {"operation":"generateKey","service":"svcLicenseSystem"}, {"onResult":"svarGenerateKeyNoEntitiesResult"}, {
input: ["wm.ServiceInput", {"type":"generateKeyInputs"}, {}]
}],
svarWriteToRegistryLicTo: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {"onResult":"svarWriteToRegistryLicToResult"}, {
input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
}],
svarWriteToRegistryConUsers: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {"onResult":"svarWriteToRegistryConUsersResult"}, {
input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
}],
svarWriteToRegistryNoUsers: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {"onResult":"svarWriteToRegistryNoUsersResult"}, {
input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
}],
svarWriteToRegistryNoEntities: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {"onResult":"svarWriteToRegistryNoEntitiesResult"}, {
input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
}],
svarExportLicense: ["wm.ServiceVariable", {"operation":"writeToFileKey","service":"svcLicenseSystem"}, {"onResult":"svarExportLicenseResult"}, {
input: ["wm.ServiceInput", {"type":"writeToFileKeyInputs"}, {}]
}],
svarUnGenerateKeyConUsers: ["wm.ServiceVariable", {"operation":"unGenerateKey","service":"svcLicenseSystem"}, {"onResult":"svarUnGenerateKeyConUsersResult"}, {
input: ["wm.ServiceInput", {"type":"unGenerateKeyInputs"}, {}]
}],
varLicTo: ["wm.Variable", {"type":"StringData"}, {}],
svarUnGenerateKeyNoUsers: ["wm.ServiceVariable", {"operation":"unGenerateKey","service":"svcLicenseSystem"}, {"onResult":"svarUnGenerateKeyNoUsersResult"}, {
input: ["wm.ServiceInput", {"type":"unGenerateKeyInputs"}, {}]
}],
svarUnGenerateKeyNoEntities: ["wm.ServiceVariable", {"operation":"unGenerateKey","service":"svcLicenseSystem"}, {"onResult":"svarUnGenerateKeyNoEntitiesResult"}, {
input: ["wm.ServiceInput", {"type":"unGenerateKeyInputs"}, {}]
}],
svarReadFromRegistryEdition: ["wm.ServiceVariable", {"operation":"readRegistryDefault","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryEditionResult"}, {
input: ["wm.ServiceInput", {"type":"readRegistryDefaultInputs"}, {}]
}],
svarGenerateKeyEdition: ["wm.ServiceVariable", {"operation":"generateKey","service":"svcLicenseSystem"}, {"onResult":"svarGenerateKeyEditionResult"}, {
input: ["wm.ServiceInput", {"type":"generateKeyInputs"}, {}]
}],
svarWriteToRegistryEdition: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {}, {
input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
}],
svarUnGenerateKeyEdition: ["wm.ServiceVariable", {"operation":"unGenerateKey","service":"svcLicenseSystem"}, {"onResult":"svarUnGenerateKeyEditionResult"}, {
input: ["wm.ServiceInput", {"type":"unGenerateKeyInputs"}, {}]
}],
svarGenerateURLPass: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"generateURLKey","service":"svcLicenseSystem"}, {"onResult":"svarGenerateURLPassResult"}, {
input: ["wm.ServiceInput", {"type":"generateURLKeyInputs"}, {}]
}],
svarReadFromRegistryUrlKey: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"readRegistryDefault","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryUrlKeyResult"}, {
input: ["wm.ServiceInput", {"type":"readRegistryDefaultInputs"}, {}]
}],
pdLoading: ["wm.PageDialog", {"desktopHeight":"100px","height":"100px","hideControls":true,"pageName":"Main","width":"280px"}, {}],
ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","corner":"cr","modal":false,"title":"License Help"}, {}, {
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
ddNewUrlAccess: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget2","desktopHeight":"150px","height":"150px","title":"New URL Access","width":"450px"}, {}, {
containerWidget2: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
txtUrl: ["wm.Text", {"caption":"URL:","captionAlign":"left","dataValue":undefined,"displayValue":"","placeHolder":"localhost:8094","width":"400px"}, {}],
txtUrlPass: ["wm.Text", {"caption":"Password Key:","captionAlign":"left","dataValue":undefined,"displayValue":"","password":true,"width":"400px"}, {}]
}],
buttonBar2: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","fitToContentHeight":true,"height":"33px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnUrlAdd: ["wm.Button", {"caption":"Add","margin":"4"}, {"onclick":"btnUrlAddClick"}],
btnUrlCancel: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"ddNewUrlAccess.hide"}]
}]
}],
ddUrlPassword: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget3","desktopHeight":"150px","height":"150px","title":"Set URL Password","width":"450px"}, {}, {
containerWidget3: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
txtUrlPassword: ["wm.Text", {"caption":"URL Password:","captionAlign":"left","dataValue":undefined,"displayValue":"","password":true,"width":"400px"}, {}],
txtUrlPassKey: ["wm.Text", {"caption":"Password Key:","captionAlign":"left","dataValue":undefined,"displayValue":"","password":true,"width":"400px"}, {}]
}],
buttonBar3: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","desktopHeight":"32px","enableTouchHeight":true,"fitToContentHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
btnSetUrlSet: ["wm.Button", {"caption":"Set","margin":"4"}, {"onclick":"btnSetUrlSetClick"}],
btnSetUrlCancel: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"ddUrlPassword.hide"}]
}]
}],
pnlLayoutMain: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"horizontalAlign":"left","verticalAlign":"top"}, {}, {
pnlHeader: ["wm.Panel", {"height":"45px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
imgLogo: ["wm.Picture", {"height":"45px","source":"resources/images/logos/waveerplogo.jpg","width":"275px"}, {}],
pnlTitle: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","styles":{"backgroundImage":"url(resources/images/logos/waveerpbar.jpg)","color":"#ffffff","backgroundGradient":""},"verticalAlign":"middle","width":"100%"}, {}, {
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
pic_help: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Help","source":"resources/images/buttons/helpred24.png","width":"24px"}, {"onclick":"ddPgMainConfigHelp.show"}],
pic_about: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"About","source":"resources/images/buttons/aboutblue24.png","width":"24px"}, {"onclick":"pdAbout.show"}]
}]
}],
spacer1: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"100%"}, {}, {
pnlTop: ["wm.Panel", {"fitToContentHeight":true,"height":"134px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
pnlLicenseKey: ["wm.Panel", {"fitToContentHeight":true,"height":"132px","horizontalAlign":"left","verticalAlign":"top","width":"497px"}, {}, {
lblKeyDesc: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"caption":"This is a cross-ENTITY settings.","padding":"4","width":"100%"}, {}],
txtSourceKey: ["wm.Text", {"caption":"Source Key:","captionAlign":"left","captionSize":"120px","dataValue":undefined,"displayValue":"","width":"420px"}, {}],
txtPasswordKey: ["wm.Text", {"caption":"Password Key:","captionAlign":"left","captionSize":"120px","dataValue":undefined,"displayValue":"","password":true,"width":"420px"}, {}],
txtGenKey: ["wm.Text", {"caption":"Generated Key:","captionAlign":"left","captionSize":"120px","dataValue":undefined,"displayValue":"","width":"420px"}, {}],
pnlAction: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
spacer2: ["wm.Spacer", {"height":"19px","width":"120px"}, {}],
btnGenerate: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Generate Key","margin":"4","width":"140px"}, {"onclick":"btnGenerateClick"}]
}]
}]
}],
tabLicense: ["wm.TabLayers", {}, {}, {
layUrl: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"URL Access","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
pnlUrlAccess: ["wm.FancyPanel", {"title":"Putting an entry here will limit access to listed URLs below only."}, {}, {
pnlCommand: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
pic_urlKey: ["wm.Picture", {"height":"28px","hint":"Set URL key.","source":"resources/images/buttons/rightsasgn24.png","width":"30px"}, {"onclick":"pic_urlKeyClick"}],
pic_add: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Add URL Access Rights","source":"resources/images/buttons/addball24.png","width":"30px"}, {"onclick":"pic_addClick"}],
pic_delete: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Delete Selected URL Access","source":"resources/images/buttons/Recyclebin24.png","width":"30px"}, {"onclick":"pic_deleteClick"}]
}],
dgData: ["wm.DojoGrid", {"columns":[{"show":false,"title":"Juid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"juid"},{"show":true,"title":"URL ID","width":"300px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"urlid"},{"show":true,"title":"URL Access Password","width":"300px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"urlpassword"},{"show":true,"title":"Status","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>URL ID: \" + ${urlid} + \"</div>\"\n+ \"<div class='MobileRow'>URL Access Password: \" + ${urlpassword} + \"</div>\"\n+ \"<div class='MobileRow'>Status: \" + ${sstatus} + \"</div>\"\n"}],"height":"100%","margin":"4"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarUrlAccess","targetProperty":"dataSet"}, {}]
}]
}]
}]
}],
layUserLic: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"User License","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
lblDesc: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"caption":"This is a cross-ENTITY settings.","height":"34px","padding":"4","width":"100%"}, {}],
pnlLicTo: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtLicTo: ["wm.Text", {"caption":"License To:","captionAlign":"left","captionSize":"200px","dataValue":undefined,"displayValue":"","placeHolder":"CloudGate Inc.","width":"700px"}, {}],
spacer4: ["wm.Spacer", {"height":"19px","width":"24px"}, {}],
lblLicTo: ["wm.Label", {"caption":"Please do not edit.","padding":"4","width":"143px"}, {}]
}],
pnlConcurrentUsers: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtConcurrentUsers: ["wm.Text", {"caption":"Number of Concurrent Users To:","captionAlign":"left","captionSize":"200px","dataValue":undefined,"displayValue":"","placeHolder":"10","width":"700px"}, {}],
spacer5: ["wm.Spacer", {"height":"19px","width":"24px"}, {}],
lblConcurrentUsers: ["wm.Label", {"caption":"---","padding":"4","width":"100px"}, {}]
}],
pnlNoUsers: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtNoUsers: ["wm.Text", {"caption":"Number of  Users:","captionAlign":"left","captionSize":"200px","dataValue":undefined,"displayValue":"","placeHolder":"1000","width":"700px"}, {}],
spacer6: ["wm.Spacer", {"height":"19px","width":"24px"}, {}],
lblNoUsers: ["wm.Label", {"caption":"---","padding":"4","width":"100px"}, {}]
}],
pnlNoEntity: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtNoEntity: ["wm.Text", {"caption":"Number of Entity:","captionAlign":"left","captionSize":"200px","dataValue":undefined,"displayValue":"","placeHolder":"3","width":"700px"}, {}],
spacer7: ["wm.Spacer", {"height":"19px","width":"24px"}, {}],
lblNoEntity: ["wm.Label", {"caption":"---","padding":"4","width":"100px"}, {}]
}],
pnlEdition: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtEdition: ["wm.Text", {"caption":"Edition:","captionAlign":"left","captionSize":"200px","dataValue":undefined,"displayValue":"","placeHolder":"STANDARD","width":"700px"}, {}],
spacer8: ["wm.Spacer", {"height":"19px","width":"24px"}, {}],
lblEdition: ["wm.Label", {"caption":"---","padding":"4","width":"100px"}, {}]
}],
pnlGen: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
spacer3: ["wm.Spacer", {"height":"19px","width":"200px"}, {}],
btnGenerateLic: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Generate License","margin":"4","width":"180px"}, {"onclick":"btnGenerateLicClick"}],
btnSaveLic: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Save","margin":"4"}, {"onclick":"btnSaveLicClick"}],
btnImportLic: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Import","margin":"4"}, {"onclick":"btnImportLicClick"}],
btnExportLic: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Export","margin":"4"}, {"onclick":"btnExportLicClick"}],
btnTestLic: ["wm.Button", {"_classes":{"domNode":["wm_Mouse_pointer","wm_BackgroundColor_SteelBlue"]},"caption":"Test","margin":"4"}, {"onclick":"btnTestLicClick"}]
}]
}]
}],
pnlBottom: ["wm.Panel", {"height":"16px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}]
}],
pnlFooter: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel","wm_BackgroundChromeBar_LightBlue"]},"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
lblFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"...","height":"20px","padding":"4","styles":{"backgroundGradient":{"direction":"horizontal","startColor":"#03036d","endColor":"#d8cbf2","colorStop":31}},"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}]
};

PgMainConfigLicense.prototype._cssText = 'body.tundra .PgMainConfigLicense .wmlayout .PgMainConfigLicense-pnlHeader {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainConfigLicense .wmlayout .PgMainConfigLicense-pnlTitle {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainConfigLicense .wmlayout .PgMainConfigLicense-lblTitle {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:14pt;\
}\
body.tundra .PgMainConfigLicense .wmlayout .PgMainConfigLicense-pnlMenuBar {\
background-color:#00008B;\
}\
body.tundra .PgMainConfigLicense .wmlayout .PgMainConfigLicense-pnlFooter {\
background-color:#00008B;\
}\
body.tundra .PgMainConfigLicense .wmlayout .PgMainConfigLicense-txtUserId {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainConfigLicense .PgMainConfigLicense-pnlLayoutMain.wmlayout {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainConfigLicense .wmlayout .PgMainConfigLicense-txtPassword {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainConfigLicense .wmlayout .PgMainConfigLicense-lblManageTicket {\
font-family: Tahoma;\
}\
body.tundra .PgMainConfigLicense .wmlayout .PgMainConfigLicense-lblUserInfo {\
font-family:Tahoma;\
}\
body.tundra .PgMainConfigLicense .wmlayout .PgMainConfigLicense-lblBorder {\
font-family:Tahoma;\
}\
body.tundra .PgMainConfigLicense .wmlayout .PgMainConfigLicense-lblLogout {\
font-family:Tahoma;\
}\
body.tundra .PgMainConfigLicense .wmlayout .PgMainConfigLicense-lblSep {\
font-family:Tahoma;\
}\
body.tundra .PgMainConfigLicense .wmlayout .PgMainConfigLicense-lblManageUser {\
font-family:Tahoma;\
}\
body.tundra .PgMainConfigLicense .wmlayout .PgMainConfigLicense-pnlBody {\
}\
body.tundra .PgMainConfigLicense .wmlayout .PgMainConfigLicense-lblManageLookUp {\
font-family:Tahoma;\
}\
';
PgMainConfigLicense.prototype._htmlText = '';