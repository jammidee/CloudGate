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
* Date: 12/31/2012
* Modified by: Jammi Dee 12/31/2012 11:30PM
*
*/
/*
This is a sample page that can used as template
*/
dojo.declare("PgMainUserManageUser", wm.Page, {
"preferredDevice": "desktop",
start: function() {
try {
// Added by JMD 04/27/2012
// Set up the date for the header here
var today   = new Date();
var dd      = today.getDate();
var mm      = today.getMonth()+1; //January is 0!
var yyyy    = today.getFullYear();
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
// Added by Jammi Dee 08/10/2012
this.selStatus.setOptions("ACTIVE,LOCKED");
// Added by Jammi Dee 01/01/2013
//this.selDbEngine.setOptions("MYSQL,MSSQL,ORACLE,DB2,ODBC,OTHERS");
//Added by Jammi Dee 05/05/2013
this.svarUserView01.setValue("input.pEntity", app.varEntity.getValue("dataValue") );
this.svarUserView01.update();
this.txtEntity.setValue("dataValue", app.varEntity.getValue("dataValue"));
// Added by Jammi Dee 05/06/2012
app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarLogging.setValue("input.pMsg","Manage Connection Profile Page.");
app.svarLogging.setValue("input.pModuleId","USER");
app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
app.svarLogging.setValue("input.pProcess","MANAGE");
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
} catch (e) {
app.toastError(this.name + ".start() Failed: " + e.toString());
}
},
/*
* 03/25/2012 - Jammi Dee
* Initialize the template variables here
*/
initApplication: function() {
this.lblTitle.setCaption("User : Manage" );
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
//Added by Jammi Dee 07/23/2012
ddSelectUserShow: function(inSender) {
try {
this.svarUserView.setValue("input.pEntity", app.varEntity.getValue("dataValue") );
this.svarUserView.update();
} catch(e) {
console.error('ERROR IN ddSelectUserShow: ' + e);
alert( 'ERROR IN btnSelectSiteSelectClick: ' + e );
}
},
//Added by Jammi Dee 08/13/2012
dgSelectUserCellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
this.btnSelectUserAddClick( inSender );
} catch(e) {
console.error('ERROR IN dgSelectUserCellDblClick: ' + e);
}
},
//Added by Jammi Dee 07/28/2012
svarExecGenericNonQueryResult: function(inSender, inDeprecated) {
try {
this.svarEntityAsgnView.setValue("input.pEntity", this.txtEntity.getValue("dataValue") );
this.svarEntityAsgnView.update();
} catch(e) {
console.error('ERROR IN svarExecGenericNonQueryResult: ' + e);
alert( 'ERROR IN svarExecGenericNonQueryResult: ' + e );
}
},
//Added by Jammi Dee 08/10/2012
dgDataClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
this.selStatus.setValue("dataValue",      this.dgData.selectedItem.getData().sstatus );
} catch(e) {
console.error('ERROR IN dgDataClick: ' + e);
alert( 'No data selected.' );
}
},
//Added by Jammi Dee 01/01/2013
btnUpdateActionClick: function(inSender) {
try {
this.svarUserView01Update.setValue("input.pUserId",        this.dgData.selectedItem.getData().userid );
this.svarUserView01Update.setValue("input.pEntity",        this.txtEntity.getValue("dataValue") );
this.svarUserView01Update.setValue("input.pStatus",        this.selStatus.getValue("dataValue") );
this.svarUserView01Update.update();
} catch(e) {
console.error('ERROR IN btnUpdateActionClick: ' + e);
alert( 'Please select an item!' );
}
},
//Added by Jammi Dee 05/05/2013
svarUserView01UpdateResult: function(inSender, inDeprecated) {
try {
this.svarUserView01.setValue("input.pEntity", this.txtEntity.getValue("dataValue") );
this.svarUserView01.update();
} catch(e) {
console.error('ERROR IN svarUserView01UpdateResult: ' + e);
alert( 'ERROR IN svarUserView01UpdateResult: ' + e );
}
},
//Added by Jammi Dee 01/01/2013
btnSelectSelectClick: function(inSender) {
try {
this.txtEntity.setValue("dataValue", this.dgDataSelect.selectedItem.getData().entityid );
this.svarUserView01.setValue("input.pEntity",     this.dgDataSelect.selectedItem.getData().entityid );
this.svarUserView01.update();
this.ddSelectEntity.hide();
} catch(e) {
console.error('ERROR IN btnSelectSelectClick: ' + e);
alert( 'ERROR IN btnSelectSelectClick: ' + e );
}
},
//Added by Jammi Dee 09/08/2012
dgDataSelectCellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
this.btnSelectSelectClick( inSender );
} catch(e) {
console.error('ERROR IN dgDataSelectCellDblClick: ' + e);
alert( 'ERROR IN dgDataSelectCellDblClick: ' + e );
}
},
///////////////////////////////////////
//         Adding new user           //
///////////////////////////////////////
//Added by Jammi Dee 05/05/2013
pic_newClick: function(inSender) {
try {
//Added by Jammi Dee 05/05/2013
this.svarCheckUserLicense.update();
} catch(e) {
console.error('ERROR IN pic_newClick: ' + e);
alert( 'ERROR IN pic_newClick: ' + e );
}
},
svarCheckUserLicenseResult: function(inSender, inDeprecated) {
try {
//alert( inSender.getValue("dataValue") );
if( inSender.getValue("dataValue") === "OK" ){
this.ddUserCreate.show();
} else {
alert("Maximum number of USERS allowed has been reached!");
}
} catch(e) {
console.error('ERROR IN pic_newClick: ' + e);
alert( 'ERROR IN pic_newClick: ' + e );
}
},
//Added by Jammi Dee 05/05/2013
ddUserCreateShow: function(inSender) {
try {
// Set up the date for the header here
var today   = new Date();
var dd      = today.getDate();
var mm      = today.getMonth()+1; //January is 0!
var yyyy    = today.getFullYear();
if(dd<10){dd='0'+dd;}
if(mm<10){mm='0'+mm;}
var ctoday = mm+'/'+dd+'/'+yyyy;
this.dtStart.setValue("dataValue",    ctoday);
this.dtEnd.setValue("dataValue",      ctoday);
} catch(e) {
console.error('ERROR IN ddUserCreateShow: ' + e);
alert( 'ERROR IN ddUserCreateShow: ' + e );
}
},
convertDateToSqlDateFormat: function(stringdate) {
var currdate = new Date(stringdate);
var currmonth = currdate.getMonth() + 1;
var currday = currdate.getDate();
var curryear = currdate.getFullYear();
var sqlDateFormat = curryear + "-" + currmonth + "-" + currday;
return sqlDateFormat;
},
// Added by Jammi Dee 03/11/2012
verifyEmail: function(email) {
return (email.indexOf(".") > 2) && (email.indexOf("@") > 0);
},
//Added by Jammi Dee 05/05/2013
btnCreateUserCreateClick: function(inSender) {
try {
this.varFlag.setValue("dataValue", "ADD");
// Added by Jammi Dee 08/14/2012
// Encrypt the password
this.svarDESInit.setValue("input.ivString", "");
this.svarDESInit.setValue("input.keyString", "");
this.svarDESInit.update();
} catch(e) {
console.error('ERROR IN btnCreateUserCreateClick: ' + e);
alert( 'ERROR IN btnCreateUserCreateClick: ' + e );
}
},
//Added by Jammi Dee 05/05/2013
svarDESInitResult: function(inSender, inDeprecated) {
try {
this.svarDESEncrypt.setValue("input.value", this.txtPasswd.getValue("dataValue") );
this.svarDESEncrypt.update();
} catch(e) {
console.error('ERROR IN svarDESInitResult: ' + e);
alert( 'ERROR IN svarDESInitResult: ' + e );
}
},
//Added by Jammi Dee 05/05/2013
svarDESEncryptResult: function(inSender, inDeprecated) {
try {
var entityid    = this.txtEntity.getValue("dataValue");
var userid      = this.txtUserId.getValue("dataValue");
var password    = this.txtPasswd.getValue("dataValue");
var password02  = inSender.getValue("dataValue");
var uname       = this.txtUserName.getValue("dataValue");
var fname       = this.txtFname.getValue("dataValue");
var mname       = this.txtMname.getValue("dataValue");
var lname       = this.txtLname.getValue("dataValue");
var email       = this.txtEmail.getValue("dataValue");
var parnt       = this.txtParent.getValue("dataValue");
var sdate       = "";
var edate       = "";
//Pass the encrypted password
this.varPassword02.setValue("dataValue", password02 );
//alert(password);
var status = "ACTIVE"; //this.txtStatus.getValue("dataValue");
sdate = this.convertDateToSqlDateFormat(this.dtStart.getValue("dataValue"));
edate = this.convertDateToSqlDateFormat(this.dtEnd.getValue("dataValue"));
if (entityid !== "" && userid !== "" && uname !== "" && password !== "" && fname !== "" && mname !== "" && lname !== "" && email !== "" && sdate !== "" && edate !== "" && parnt !== "") {
if (password.length > 5) {
if (this.varFlag.getValue("dataValue") == "ADD") {
///////////////////////////////////////////
//Check if the USER ID Exist,it NOT EXIST,
//Add the current data as NEW USER
//Modified by Jammi Dee 08/13/2012
///////////////////////////////////////////
this.svarTblUser.setValue("input.pEntityId", entityid);
this.svarTblUser.setValue("input.pUserId", userid);
this.svarTblUser.update();
} else if (this.varFlag.getValue("dataValue") == "EDIT") {
if (this.verifyEmail(email) === true) {
var eQuery = "update tbluser set username = '" + uname + "'," +
"password = '" + 'LOCKED!' + "',firstname = '" + fname + "',middlename = '" + mname + "',lastname = '" + lname + "'," +
"email = '" + email + "',startdate = '" + sdate + "',enddate = '" + edate + "',sstatus = '" + status + "', pid = '" + parnt + "', passwdenc = '" + password02 + "' " +
"where entityid = '" + entityid + "' and userid = '" + userid + "';";
//alert(eQuery);
this.svarExecGenericNonQuerySimple.setValue("input.eQuery", eQuery);
this.svarExecGenericNonQuerySimple.update();
} else {
alert("Invalid email format");
}
}
} else {
alert("Password must be more than 5 characters");
}
} else {
alert("Fill up all fields");
}
} catch(e) {
console.error('ERROR IN svarDESEncryptResult: ' + e);
alert( 'ERROR IN svarDESEncryptResult: ' + e );
}
},
//Added by Jammi Dee 05/05/2013
svarTblUserResult: function(inSender, inDeprecated) {
try {
var entityid    = this.txtEntity.getValue("dataValue");
var userid      = this.txtUserId.getValue("dataValue");
var password    = this.txtPasswd.getValue("dataValue");
var password02  = this.varPassword02.getValue("dataValue");
var uname       = this.txtUserName.getValue("dataValue");
var fname       = this.txtFname.getValue("dataValue");
var mname       = this.txtMname.getValue("dataValue");
var lname       = this.txtLname.getValue("dataValue");
var email       = this.txtEmail.getValue("dataValue");
var mpid        = this.txtParent.getValue("dataValue");
var sdate       = "";
var edate       = "";
var sQueryFinal1;
var status      = "ACTIVE"; //this.txtStatus.getValue("dataValue");
sdate = this.convertDateToSqlDateFormat(this.dtStart.getValue("dataValue"));
edate = this.convertDateToSqlDateFormat(this.dtEnd.getValue("dataValue"));
if (inSender.getValue("dataValue") == "exists" || inSender.getValue("dataValue") === null) {
// alert(inSender.getValue("dataValue"));
alert("Userid already used.");
} else {
if (this.verifyEmail(email) === true) {
//Notes for Jammi Dee: Modify the code below. Its not stable
//08/13/2012
var sQuery = "insert into Tbluser(entityid,userid,username,password,firstname,middlename,lastname,email,startdate,enddate, pid, passwdenc) ";
sQuery = sQuery + "values('" + entityid + "','" + userid + "'";
sQuery = sQuery + ",'" + uname + "'";
sQuery = sQuery + ",'" + 'LOCKED!' + "','" + fname + "'";
sQuery = sQuery + ",'" + mname + "'";
sQuery = sQuery + ",'" + lname + "','" + email + "'";
sQuery = sQuery + ",'" + sdate + "','" + edate + "', '" + mpid + "', '" + password02 + "');";
sQueryFinal1 = sQuery;
//alert(sQueryFinal1);
this.svarExecGenericNonQueryComplex.setValue("input.sQuery", sQueryFinal1);
this.svarExecGenericNonQueryComplex.update();
} else {
alert("Invalid email format");
}
}
} catch(e) {
console.error('ERROR IN svarTblUserResult: ' + e);
alert( 'ERROR IN svarTblUserResult: ' + e );
}
},
//Added by Jammi Dee 05/05/2013
svarExecGenericNonQueryComplexResult: function(inSender, inDeprecated) {
try {
if (inSender.getValue("dataValue") === false) {
alert("Error occured during the process");
} else {
if (this.varFlag.getValue("dataValue") == "ADD") {
// Added by Jammi Dee 08/13/2012
app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarLogging.setValue("input.pMsg","Added new user ID " + this.txtUserId.getValue("dataValue") + "."  );
app.svarLogging.setValue("input.pModuleId","MANAGEUSER");
app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
app.svarLogging.setValue("input.pProcess","ADD");
app.svarLogging.setValue("input.pScopeId","NA");
app.svarLogging.setValue("input.pStype","USER");
app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
app.svarLogging.update();
alert("Successfuly added.");
} else if (this.varFlag.getValue("dataValue") == "EDIT") {
// Added by Jammi Dee 05/06/2013
app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarLogging.setValue("input.pMsg","Edit user ID " + this.dgData.selectedItem.getData().userid + "."  );
app.svarLogging.setValue("input.pModuleId","MANAGEUSER");
app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
app.svarLogging.setValue("input.pProcess","EDIT");
app.svarLogging.setValue("input.pScopeId","NA");
app.svarLogging.setValue("input.pStype","USER");
app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
app.svarLogging.update();
alert("Successfuly edited.");
} else if (this.varFlag.getValue("dataValue") == "DELETE") {
// Added by Jammi Dee 05/06/2013
app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarLogging.setValue("input.pMsg","Delete user ID " + this.dgData.selectedItem.getData().userid + "."  );
app.svarLogging.setValue("input.pModuleId","MANAGEUSER");
app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
app.svarLogging.setValue("input.pProcess","DELETE");
app.svarLogging.setValue("input.pScopeId","NA");
app.svarLogging.setValue("input.pStype","USER");
app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
app.svarLogging.update();
alert("Successfuly deleted.");
}
}
this.svarUserView01.setValue("input.pEntity",     this.txtEntity.getValue("dataValue") );
this.svarUserView01.update();
this.ddUserCreate.hide();
} catch(e) {
console.error('ERROR IN svarExecGenericNonQueryComplexResult: ' + e);
alert( 'ERROR IN svarExecGenericNonQueryComplexResult: ' + e );
}
},
//Added by Jammi Dee 05/05/2013
svarExecGenericNonQuerySimpleResult: function(inSender, inDeprecated) {
try {
if (inSender.getValue("dataValue") === false) {
alert("Error occured during the process");
} else {
if (this.varFlag.getValue("dataValue") == "EDIT") {
// Added by Jammi Dee 08/13/2012
app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarLogging.setValue("input.pMsg","Edit user ID " + this.txtUserId.getValue("dataValue") + "."  );
app.svarLogging.setValue("input.pModuleId","MANAGEUSER");
app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
app.svarLogging.setValue("input.pProcess","EDIT");
app.svarLogging.setValue("input.pScopeId","NA");
app.svarLogging.setValue("input.pStype","USER");
app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
app.svarLogging.update();
alert("Successfuly edited.");
this.ddUserEdit.hide();
} else if (this.varFlag.getValue("dataValue") == "DELETE") {
// Added by Jammi Dee 08/13/2012
app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarLogging.setValue("input.pMsg","Delete user ID " + this.txtUserId.getValue("dataValue") + "."  );
app.svarLogging.setValue("input.pModuleId","MANAGEUSER");
app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
app.svarLogging.setValue("input.pProcess","DELETE");
app.svarLogging.setValue("input.pScopeId","NA");
app.svarLogging.setValue("input.pStype","USER");
app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
app.svarLogging.update();
alert("Successfuly deleted.");
this.ddUserEdit.hide();
}
}
this.svarUserView01.setValue("input.pEntity",     this.txtEntity.getValue("dataValue") );
this.svarUserView01.update();
} catch(e) {
console.error('ERROR IN svarExecGenericNonQuerySimpleResult: ' + e);
alert( 'ERROR IN svarExecGenericNonQuerySimpleResult: ' + e );
}
},
///////////////////////////////////////
//           Delete user             //
///////////////////////////////////////
//Added by Jammi Dee 01/01/2013
pic_deleteClick: function(inSender) {
try {
this.varFlag.setValue("dataValue", "DELETE");
var userid      = this.dgData.selectedItem.getData().userid;
if( userid !== "" || userid !== null ){
var response = confirm("Delete: Are you sure to delete this item?");
if (response) {
this.svarUserView01Delete.setValue("input.pUserId", userid );
this.svarUserView01Delete.setValue("input.pEntity", this.txtEntity.getValue("dataValue") );
this.svarUserView01Delete.update();
}
} else {
alert( "No item selected for deletion." );
}
} catch(e) {
console.error('ERROR IN pic_deleteClick: ' + e);
alert( 'ERROR IN pic_deleteClick: ' + e );
}
},
svarUserView01DeleteResult: function(inSender, inDeprecated) {
try {
if (inSender.getValue("dataValue") === false) {
alert("Error occured during the process");
} else {
if (this.varFlag.getValue("dataValue") == "EDIT") {
// Added by Jammi Dee 08/13/2012
app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarLogging.setValue("input.pMsg","Edit user ID " + this.txtUserId.getValue("dataValue") + "."  );
app.svarLogging.setValue("input.pModuleId","MANAGEUSER");
app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
app.svarLogging.setValue("input.pProcess","EDIT");
app.svarLogging.setValue("input.pScopeId","NA");
app.svarLogging.setValue("input.pStype","USER");
app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
app.svarLogging.update();
alert("Successfuly edited.");
} else if (this.varFlag.getValue("dataValue") == "DELETE") {
// Added by Jammi Dee 08/13/2012
app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarLogging.setValue("input.pMsg","Delete user ID " + this.dgData.selectedItem.getData().userid + "."  );
app.svarLogging.setValue("input.pModuleId","MANAGEUSER");
app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
app.svarLogging.setValue("input.pProcess","DELETE");
app.svarLogging.setValue("input.pScopeId","NA");
app.svarLogging.setValue("input.pStype","USER");
app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
app.svarLogging.update();
alert("Successfuly deleted.");
}
}
this.svarUserView01.setValue("input.pEntity", this.txtEntity.getValue("dataValue") );
this.svarUserView01.update();
} catch(e) {
console.error('ERROR IN svarUserView01DeleteResult: ' + e);
alert( 'ERROR IN svarUserView01DeleteResult: ' + e );
}
},
//Added by Jammi Dee 05/05/2013
pic_editClick: function(inSender) {
try {
this.varFlag.setValue("dataValue", "EDIT");
this.txtUserIdEdit.setValue("dataValue",          this.dgData.selectedItem.getData().userid );
this.txtUserNameEdit.setValue("dataValue",        this.dgData.selectedItem.getData().username );
this.txtPasswdEdit.setValue("dataValue",          this.dgData.selectedItem.getData().password );
this.txtPasswordEncEdit.setValue("dataValue",     this.dgData.selectedItem.getData().passwdenc );
this.txtFnameEdit.setValue("dataValue",           this.dgData.selectedItem.getData().firstname );
this.txtMnameEdit.setValue("dataValue",           this.dgData.selectedItem.getData().middlename );
this.txtLnameEdit.setValue("dataValue",           this.dgData.selectedItem.getData().lastname );
this.txtEmailEdit.setValue("dataValue",           this.dgData.selectedItem.getData().email );
this.dtStartEdit.setValue("dataValue",            this.dgData.selectedItem.getData().startdate );
this.dtEndEdit.setValue("dataValue",              this.dgData.selectedItem.getData().enddate );
this.txtParentEdit.setValue("dataValue",          this.dgData.selectedItem.getData().pid );
this.ddUserEdit.show();
} catch(e) {
console.error('ERROR IN pic_editClick: ' + e);
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
ddUserEditShow: function(inSender) {
this.ddUserCreateShow(inSender);
},
//Added by Jammi Dee 05/05/2013
btnCreateUserCreateEditClick: function(inSender) {
try {
this.varFlag.setValue("dataValue", "EDIT");
this.txtUserId.setValue("dataValue",          this.txtUserIdEdit.getValue("dataValue") );
this.txtUserName.setValue("dataValue",        this.txtUserNameEdit.getValue("dataValue") );
this.txtPasswd.setValue("dataValue",          this.txtPasswdEdit.getValue("dataValue") );
this.txtPasswordEnc.setValue("dataValue",     this.txtPasswordEncEdit.getValue("dataValue") );
this.txtFname.setValue("dataValue",           this.txtFnameEdit.getValue("dataValue") );
this.txtMname.setValue("dataValue",           this.txtMnameEdit.getValue("dataValue") );
this.txtLname.setValue("dataValue",           this.txtLnameEdit.getValue("dataValue") );
this.txtEmail.setValue("dataValue",           this.txtEmailEdit.getValue("dataValue") );
this.dtStart.setValue("dataValue",            this.dtStartEdit.getValue("dataValue") );
this.dtEnd.setValue("dataValue",              this.dtEndEdit.getValue("dataValue") );
this.txtParent.setValue("dataValue",          this.txtParentEdit.getValue("dataValue") );
//alert( this.txtPasswdEdit.getValue("dataValue") + " help" );
// Added by Jammi Dee 08/14/2012
// Encrypt the password
this.svarDESInit.setValue("input.ivString", "");
this.svarDESInit.setValue("input.keyString", "");
this.svarDESInit.update();
} catch(e) {
console.error('ERROR IN btnCreateUserCreateClick: ' + e);
alert( 'ERROR IN btnCreateUserCreateClick: ' + e );
}
},
_end: 0
});

PgMainUserManageUser.widgets = {
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
svarExecGenericNonQuery: ["wm.ServiceVariable", {"operation":"execNonQuery","service":"svcExecGenericNonQuery"}, {"onResult":"svarExecGenericNonQueryResult"}, {
input: ["wm.ServiceInput", {"type":"execNonQueryInputs"}, {}]
}],
navPgMainConfig: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMainConfig\"","targetProperty":"pageName"}, {}]
}]
}]
}],
svarConnProfileView: ["wm.ServiceVariable", {"operation":"qryConnProfileView","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryConnProfileViewInputs"}, {}]
}],
svarConnProfileCreate: ["wm.ServiceVariable", {"operation":"createConnProfile","service":"svcConnProfileFunction"}, {"onResult":"svarConnProfileCreateResult"}, {
input: ["wm.ServiceInput", {"type":"createConnProfileInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"txtConnId.dataValue","targetProperty":"pConnId"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"txtDbDriver.dataValue","targetProperty":"pDbDriver"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selDbEngine.selectedItem.dataValue","targetProperty":"pDbEngine"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"txtPassword.dataValue","targetProperty":"pDbPassword"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"txtDbUrl.dataValue","targetProperty":"pDbUrl"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"txtUsername.dataValue","targetProperty":"pDbUsername"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"txtDescription.dataValue","targetProperty":"pDescription"}, {}]
}]
}]
}],
svarUserView01: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"qryUserView01","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryUserView01Inputs"}, {}]
}],
navPgMainUser: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMainUser\"","targetProperty":"pageName"}, {}]
}]
}]
}],
svarUserView01Update: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"updUserView01","service":"dbwaveerp"}, {"onResult":"svarUserView01UpdateResult"}, {
input: ["wm.ServiceInput", {"type":"updUserView01Inputs"}, {}]
}],
svarUserView01Delete: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"qryUserView01Delete","service":"dbwaveerp"}, {"onResult":"svarUserView01DeleteResult"}, {
input: ["wm.ServiceInput", {"type":"qryUserView01DeleteInputs"}, {}]
}],
svarDESInit: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"Encrypter","service":"svcDESEncryption"}, {"onResult":"svarDESInitResult"}, {
input: ["wm.ServiceInput", {"type":"EncrypterInputs"}, {}]
}],
svarDESEncrypt: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"encrypt","service":"svcDESEncryption"}, {"onResult":"svarDESEncryptResult"}, {
input: ["wm.ServiceInput", {"type":"encryptInputs"}, {}]
}],
varPassword02: ["wm.Variable", {"type":"StringData"}, {}],
varFlag: ["wm.Variable", {"type":"StringData"}, {}],
svarTblUser: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"checkUserIdExist","service":"svcExecQueryTksUsrMgt"}, {"onResult":"svarTblUserResult"}, {
input: ["wm.ServiceInput", {"type":"checkUserIdExistInputs"}, {}]
}],
svarExecGenericNonQueryComplex: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"execNonQueryLong","service":"svcExecGenericNonQuery"}, {"onResult":"svarExecGenericNonQueryComplexResult"}, {
input: ["wm.ServiceInput", {"type":"execNonQueryLongInputs"}, {}]
}],
svarExecGenericNonQuerySimple: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"execNonQuery","service":"svcExecGenericNonQuery"}, {"onResult":"svarExecGenericNonQuerySimpleResult"}, {
input: ["wm.ServiceInput", {"type":"execNonQueryInputs"}, {}]
}],
svarCheckUserLicense: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"checkUserLicense","service":"svcLicenseSystem"}, {"onResult":"svarCheckUserLicenseResult"}, {
input: ["wm.ServiceInput", {"type":"checkUserLicenseInputs"}, {}]
}],
pdLoading: ["wm.PageDialog", {"desktopHeight":"100px","height":"100px","hideControls":true,"pageName":"Main","width":"280px"}, {}],
ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","corner":"cr","modal":false,"title":"Manage Users Help"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgMainUserManageUser.html"}, {}]
}],
buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnClose: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddPgMainConfigHelp.hide"}]
}]
}],
pdAbout: ["wm.PageDialog", {"desktopHeight":"341px","height":"341px","noEscape":true,"noMaxify":true,"noMinify":true,"pageName":"PgAbout","width":"616px"}, {}],
ddSelectEntity: ["wm.DesignableDialog", {"buttonBarId":"buttonBar1","containerWidgetId":"containerWidget1","title":"Select Entity","width":"800px"}, {"onShow":"ddSelectEntityShow"}, {
containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
dgDataSelect: ["wm.DojoGrid", {"columns":[{"show":false,"title":"Seqid","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"seqid"},{"show":false,"title":"Juid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"juid"},{"show":true,"title":"Entity ID","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":true,"title":"Company","width":"200px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"company"},{"show":true,"title":"Description","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"description"},{"show":false,"title":"Addr01","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"addr01"},{"show":false,"title":"Addr02","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"addr02"},{"show":false,"title":"Addr03","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"addr03"},{"show":false,"title":"Sstatus","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"show":false,"title":"Startdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"startdate"},{"show":false,"title":"Enddate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"enddate"},{"show":false,"title":"Deleted","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"deleted"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Company: \" + ${company} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n"}],"height":"100%","localizationStructure":{},"margin":"4"}, {"onCellDblClick":"dgDataSelectCellDblClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarSelectEntity","targetProperty":"dataSet"}, {}]
}]
}]
}],
buttonBar1: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","fitToContentHeight":true,"height":"33px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnSelectSelect: ["wm.Button", {"caption":"Select","margin":"4"}, {"onclick":"btnSelectSelectClick"}],
btnSelectClose: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddSelectEntity.hide"}]
}]
}],
ddSelectUser: ["wm.DesignableDialog", {"buttonBarId":"buttonBar3","containerWidgetId":"containerWidget2","title":"Select User to Add"}, {"onShow":"ddSelectUserShow"}, {
containerWidget2: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
dgSelectUser: ["wm.DojoGrid", {"columns":[{"show":true,"title":"User ID","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"userid"},{"show":false,"title":"Entityid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":false,"title":"Password","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"password"},{"show":true,"title":"Username","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"username"},{"show":true,"title":"Firstname","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"firstname"},{"show":true,"title":"Middlename","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"middlename"},{"show":true,"title":"Lastname","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"lastname"},{"show":true,"title":"Status","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"show":false,"title":"Email","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"email"},{"show":false,"title":"Roleid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"roleid"},{"show":false,"title":"Startdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"startdate"},{"show":false,"title":"Enddate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"enddate"},{"show":false,"title":"Userimgext","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"userimgext"},{"show":false,"title":"Pid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"pid"},{"show":false,"title":"Deleted","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"deleted"},{"show":false,"title":"Passwdenc","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"passwdenc"},{"show":false,"title":"ParentPerson","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"parentPerson"}],"height":"100%","margin":"4"}, {"onCellDblClick":"dgSelectUserCellDblClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarUserView","targetProperty":"dataSet"}, {}]
}]
}]
}],
buttonBar3: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","fitToContentHeight":true,"height":"33px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnSelectUserAdd: ["wm.Button", {"caption":"Add","margin":"4"}, {"onclick":"btnSelectUserAddClick"}],
btnSelectUserCancel: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"ddSelectUser.hide"}]
}]
}],
ddUserCreate: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget4","desktopHeight":"360px","height":"360px","title":"New User","width":"400px"}, {"onShow":"ddUserCreateShow"}, {
containerWidget4: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
txtUserId: ["wm.Text", {"caption":"User ID:","captionAlign":"left","captionSize":"120px","dataValue":undefined,"displayValue":""}, {}],
txtUserName: ["wm.Text", {"caption":"Username:","captionAlign":"left","captionSize":"120px","dataValue":undefined,"displayValue":""}, {}],
txtPasswd: ["wm.Text", {"caption":"Password:","captionAlign":"left","captionSize":"120px","dataValue":undefined,"displayValue":"","password":true}, {}],
txtPasswordEnc: ["wm.Text", {"caption":"Pass Encrypted:","captionAlign":"left","captionSize":"120px","dataValue":undefined,"disabled":true,"displayValue":""}, {}],
txtFname: ["wm.Text", {"caption":"Firstname:","captionAlign":"left","captionSize":"120px","dataValue":undefined,"displayValue":""}, {}],
txtMname: ["wm.Text", {"caption":"Middlename:","captionAlign":"left","captionSize":"120px","dataValue":undefined,"displayValue":""}, {}],
txtLname: ["wm.Text", {"caption":"Lastname:","captionAlign":"left","captionSize":"120px","dataValue":undefined,"displayValue":""}, {}],
txtEmail: ["wm.Text", {"caption":"Email:","captionAlign":"left","captionSize":"120px","dataValue":undefined,"displayValue":""}, {}],
dtStart: ["wm.Date", {"caption":"Start Date:","captionAlign":"left","captionSize":"120px","dataValue":undefined,"displayValue":"","width":"250px"}, {}],
dtEnd: ["wm.Date", {"caption":"End Date:","captionAlign":"left","captionSize":"120px","dataValue":undefined,"displayValue":"","width":"250px"}, {}],
txtParent: ["wm.Text", {"caption":"Parent:","captionAlign":"left","captionSize":"120px","dataValue":"00000000","displayValue":"00000000"}, {}]
}],
buttonBar4: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","desktopHeight":"32px","enableTouchHeight":true,"fitToContentHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
btnCreateUserCreate: ["wm.Button", {"caption":"Create","margin":"4"}, {"onclick":"btnCreateUserCreateClick"}],
btnCreateUserCancel: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"ddUserCreate.hide"}]
}]
}],
ddUserEdit: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget4","desktopHeight":"360px","height":"360px","title":"Edit User","width":"400px"}, {"onShow":"ddUserEditShow"}, {
containerWidget5: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
txtUserIdEdit: ["wm.Text", {"caption":"User ID:","captionAlign":"left","captionSize":"120px","dataValue":undefined,"displayValue":"","readonly":true}, {}],
txtUserNameEdit: ["wm.Text", {"caption":"Username:","captionAlign":"left","captionSize":"120px","dataValue":undefined,"displayValue":""}, {}],
txtPasswdEdit: ["wm.Text", {"caption":"Password:","captionAlign":"left","captionSize":"120px","dataValue":undefined,"displayValue":"","password":true}, {}],
txtPasswordEncEdit: ["wm.Text", {"caption":"Pass Encrypted:","captionAlign":"left","captionSize":"120px","dataValue":undefined,"disabled":true,"displayValue":"","width":"350px"}, {}],
txtFnameEdit: ["wm.Text", {"caption":"Firstname:","captionAlign":"left","captionSize":"120px","dataValue":undefined,"displayValue":"","width":"350px"}, {}],
txtMnameEdit: ["wm.Text", {"caption":"Middlename:","captionAlign":"left","captionSize":"120px","dataValue":undefined,"displayValue":"","width":"350px"}, {}],
txtLnameEdit: ["wm.Text", {"caption":"Lastname:","captionAlign":"left","captionSize":"120px","dataValue":undefined,"displayValue":"","width":"350px"}, {}],
txtEmailEdit: ["wm.Text", {"caption":"Email:","captionAlign":"left","captionSize":"120px","dataValue":undefined,"displayValue":"","width":"350px"}, {}],
dtStartEdit: ["wm.Date", {"caption":"Start Date:","captionAlign":"left","captionSize":"120px","dataValue":undefined,"displayValue":"","width":"250px"}, {}],
dtEndEdit: ["wm.Date", {"caption":"End Date:","captionAlign":"left","captionSize":"120px","dataValue":undefined,"displayValue":"","width":"250px"}, {}],
txtParentEdit: ["wm.Text", {"caption":"Parent:","captionAlign":"left","captionSize":"120px","dataValue":"00000000","displayValue":"00000000"}, {}]
}],
buttonBar5: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","desktopHeight":"32px","enableTouchHeight":true,"fitToContentHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
btnCreateUserCreateEdit: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"btnCreateUserCreateEditClick"}],
btnCreateUserCancelEdit: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"ddUserEdit.hide"}]
}]
}],
pnlLayoutMain: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"horizontalAlign":"left","styles":{"backgroundImage":"url(resources/images/logos/waveerpbar.jpg)","color":"#ffffff"},"verticalAlign":"top"}, {}, {
pnlHeader: ["wm.Panel", {"height":"45px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
imgLogo: ["wm.Picture", {"height":"45px","source":"resources/images/logos/waveerplogo.jpg","width":"275px"}, {}],
pnlTitle: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","styles":{"backgroundImage":"url(resources/images/logos/waveerpbar.jpg)","backgroundGradient":""},"verticalAlign":"middle","width":"100%"}, {}, {
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
pic_new: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"New","source":"resources/images/buttons/addball24.png","width":"30px"}, {"onclick":"pic_newClick"}],
pic_edit: ["wm.Picture", {"height":"24px","hint":"Edit","source":"resources/images/buttons/editnote24.png","width":"30px"}, {"onclick":"pic_editClick"}],
pic_delete: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Delete","source":"resources/images/buttons/Recyclebin24.png","width":"30px"}, {"onclick":"pic_deleteClick"}]
}],
pnlMenuButtonRight: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
pic_help: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Help","source":"resources/images/buttons/helpred24.png","width":"24px"}, {"onclick":"ddPgMainConfigHelp.show"}],
pic_about: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"About","source":"resources/images/buttons/aboutblue24.png","width":"24px"}, {"onclick":"pdAbout.show"}]
}]
}],
spacer1: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
pnlConnProfile: ["wm.FancyPanel", {"title":"Manage Users ( Cross-Entity List )"}, {}, {
pnlSelSite: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
txtEntity: ["wm.Text", {"caption":"Select Entity:","captionAlign":"left","dataValue":undefined,"displayValue":"","styles":{"color":"#000000"},"width":"250px"}, {}],
btnEntitySelect: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"..","margin":"4","width":"29px"}, {"onclick":"ddSelectEntity.show"}],
lblSite: ["wm.Label", {"caption":"---","padding":"4","width":"336px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}],
dgData: ["wm.DojoGrid", {"columns":[{"show":false,"field":"entityid","title":"Entity ID","width":"100px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"customField01","title":"..","width":"15px","align":"left","editorProps":{"restrictValues":true},"expression":"if (${sstatus}==\"ACTIVE\"){    '<img src =\"resources/images/buttons/grid-green-icon.png\"/>'    } else {    '<img src =\"resources/images/buttons/grid-gray-icon.png\"/>'    }","isCustomField":true},{"show":true,"field":"userid","title":"User ID","width":"100px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"username","title":"Username","width":"100px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"firstname","title":"Firstname","width":"100px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"middlename","title":"Middlename","width":"100px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"lastname","title":"Lastname","width":"100px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"password","title":"Password","width":"200px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"passwdenc","title":"Encrypted","width":"200px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"email","title":"Email","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"roleid","title":"Roleid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"startdate","title":"Startdate","width":"80px","align":"left","formatFunc":"wm_date_formatter","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"enddate","title":"End Date","width":"80px","align":"left","formatFunc":"wm_date_formatter","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"sstatus","title":"Status","width":"80px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"userimgext","title":"Userimgext","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"pid","title":"Pid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"parentPerson","title":"ParentPerson","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","editorProps":{"restrictValues":true},"expression":"\"<div class='MobileRowTitle'>User ID: \" + ${userid} + \"</div>\"\n+ \"<div class='MobileRow'>Username: \" + ${username} + \"</div>\"\n+ \"<div class='MobileRow'>Firstname: \" + ${firstname} + \"</div>\"\n+ \"<div class='MobileRow'>Middlename: \" + ${middlename} + \"</div>\"\n+ \"<div class='MobileRow'>Lastname: \" + ${lastname} + \"</div>\"\n+ \"<div class='MobileRow'>Password: \" + ${password} + \"</div>\"\n+ \"<div class='MobileRow'>Encrypted: \" + ${passwdenc} + \"</div>\"\n+ \"<div class='MobileRow'>Email: \" + ${email} + \"</div>\"\n+ \"<div class='MobileRow'>End Date: \" + wm.List.prototype.dateFormatter({}, null,null,null,${enddate}) + \"</div>\"\n+ \"<div class='MobileRow'>Status: \" + ${sstatus} + \"</div>\"\n","mobileColumn":true},{"show":false,"field":"deleted","title":"Deleted","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"id","title":"Id","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"id.seqid","title":"Id.seqid","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"id.juid","title":"Id.juid","width":"100%","align":"left","formatFunc":"","mobileColumn":false}],"height":"100%","margin":"4"}, {"onClick":"dgDataClick","onSelect":"dgDataClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarUserView01","targetProperty":"dataSet"}, {}]
}]
}]
}]
}],
pnlControl: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"middle","width":"100%"}, {}, {
selStatus: ["wm.SelectMenu", {"caption":"Status:","captionAlign":"left","captionSize":"60px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","options":"ACTIVE, LOCKED","styles":{"color":"#000000"},"width":"200px"}, {}],
btnUpdateAction: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Update","margin":"4"}, {"onclick":"btnUpdateActionClick"}]
}],
pnlFooter: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel","wm_BackgroundChromeBar_LightBlue"]},"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
lblFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"...","height":"20px","padding":"4","styles":{"backgroundGradient":{"direction":"horizontal","startColor":"#03036d","endColor":"#d8cbf2","colorStop":31}},"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}]
};

PgMainUserManageUser.prototype._cssText = 'body.tundra .PgMainUserManageUser .wmlayout .PgMainUserManageUser-pnlHeader {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainUserManageUser .wmlayout .PgMainUserManageUser-pnlTitle {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainUserManageUser .wmlayout .PgMainUserManageUser-lblTitle {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:14pt;\
}\
body.tundra .PgMainUserManageUser .wmlayout .PgMainUserManageUser-pnlMenuBar {\
background-color:#00008B;\
}\
body.tundra .PgMainUserManageUser .wmlayout .PgMainUserManageUser-pnlFooter {\
background-color:#00008B;\
}\
body.tundra .PgMainUserManageUser .wmlayout .PgMainUserManageUser-txtUserId {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainUserManageUser .PgMainUserManageUser-pnlLayoutMain.wmlayout {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainUserManageUser .wmlayout .PgMainUserManageUser-txtPassword {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainUserManageUser .wmlayout .PgMainUserManageUser-lblManageTicket {\
font-family: Tahoma;\
}\
body.tundra .PgMainUserManageUser .wmlayout .PgMainUserManageUser-lblUserInfo {\
font-family:Tahoma;\
}\
body.tundra .PgMainUserManageUser .wmlayout .PgMainUserManageUser-lblBorder {\
font-family:Tahoma;\
}\
body.tundra .PgMainUserManageUser .wmlayout .PgMainUserManageUser-lblLogout {\
font-family:Tahoma;\
}\
body.tundra .PgMainUserManageUser .wmlayout .PgMainUserManageUser-lblSep {\
font-family:Tahoma;\
}\
body.tundra .PgMainUserManageUser .wmlayout .PgMainUserManageUser-lblManageUser {\
font-family:Tahoma;\
}\
body.tundra .PgMainUserManageUser .wmlayout .PgMainUserManageUser-pnlBody {\
}\
body.tundra .PgMainUserManageUser .wmlayout .PgMainUserManageUser-lblManageLookUp {\
font-family:Tahoma;\
}\
';
PgMainUserManageUser.prototype._htmlText = '';