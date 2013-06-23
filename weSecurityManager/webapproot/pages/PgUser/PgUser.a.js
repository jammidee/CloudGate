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
dojo.declare("PgUser", wm.Page, {
"preferredDevice": "desktop",
start: function() {
// Added by Jammi Dee 03/11/2012
this.picNewStatus(false);
this.picEditStatus(false);
this.picSaveStatus(false);
this.picDeleteStatus(false);
// Added by Jammi Dee 03/11/2012
// Hide the SAVE buttons first
this.pnlSaveButton.setValue("showing", false);
try {
this.lblTitle.setCaption("Manage User");
app.varModuleId.setValue("dataValue", "MDLUSER");
this.txtUserStatus.setValue("dataValue","ACTIVE");
var rights;
for (i = 0; i < app.varArrayRights.getCount(); i++) {
rights = app.varArrayRights.getItem(i).getValue("dataValue");
this.checkRights(rights);
}
//Added by Jammi Dee 11/25/2012
app.svarUpdateSessionApp.setValue("input.pJuid",app.varSessionId.getValue("dataValue"));
app.svarUpdateSessionApp.update();
// Initialize the application - Jammi Dee 03/25/2012
this.initApplication();
// Added by Jammi Dee 05/06/2012
app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarLogging.setValue("input.pMsg","Manage System Users.");
app.svarLogging.setValue("input.pModuleId","MANAGEUSER");
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
this.lblTitle.setCaption("User : " + app.varAppName.getValue("dataValue") + " : " + app.varAppVersion.getValue("dataValue"));
this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
},
checkRights: function(rights) {
var appid = app.varAppId.getValue("dataValue");
var rightid = rights;
switch (rightid){
case app.varAppPrefix.getValue("dataValue") + "USERADD" + "|" + app.varAppId.getValue("dataValue"):
this.btnAdd.setShowing(true);
this.picNewStatus(true); // added by Jammi Dee 03/11/2012
break;
case app.varAppPrefix.getValue("dataValue") + "USERDEL" + "|" + app.varAppId.getValue("dataValue"):
this.btnDelete.setShowing(true);
this.picDeleteStatus(true); // added by Jammi Dee 03/11/2012
break;
case app.varAppPrefix.getValue("dataValue") + "USEREDIT" + "|" + app.varAppId.getValue("dataValue"):
this.btnEdit.setShowing(true);
this.picEditStatus(true); // added by Jammi Dee 03/11/2012
break;
case app.varAppPrefix.getValue("dataValue") + "USERVIEWS" + "|" + app.varAppId.getValue("dataValue"):
this.btnView.setShowing(true);
break;
case app.varAppPrefix.getValue("dataValue") + "USERSTATUS" + "|" + app.varAppId.getValue("dataValue"):
this.txtUserStatus.setShowing(true);
break;
default:break;
}
},
// Added by Jammi Dee 03/11/2012
picNewStatus: function(inStatus) {
if (inStatus===true){
this.pic_new.setValue("source", "resources/images/buttons/addball24.png");
this.pic_new.setValue("disabled", false);
}
else
{
this.pic_new.setValue("source", "resources/images/buttons/addball24bw.png");
this.pic_new.setValue("disabled", true);
}
},
picEditStatus: function(inStatus) {
if (inStatus===true){
this.pic_edit.setValue("source", "resources/images/buttons/editnote24.png");
this.pic_edit.setValue("disabled", false);
}
else
{
this.pic_edit.setValue("source", "resources/images/buttons/editnote24bw.png");
this.pic_edit.setValue("disabled", true);
}
},
picSaveStatus: function(inStatus) {
if (inStatus===true){
this.pic_save.setValue("source", "resources/images/buttons/save24.png");
this.pic_save.setValue("disabled", false);
}
else
{
this.pic_save.setValue("source", "resources/images/buttons/save24bw.png");
this.pic_save.setValue("disabled", true);
}
},
picDeleteStatus: function(inStatus) {
if (inStatus===true){
this.pic_delete.setValue("source", "resources/images/buttons/Recyclebin24.png");
this.pic_delete.setValue("disabled", false);
}
else
{
this.pic_delete.setValue("source", "resources/images/buttons/Recyclebin24bw.png");
this.pic_delete.setValue("disabled", true);
}
},
// Added by Jammi Dee 03/11/2012
verifyEmail: function(email) {
return (email.indexOf(".") > 2) && (email.indexOf("@") > 0);
},
convertDateToSqlDateFormat: function(stringdate) {
var currdate = new Date(stringdate);
var currmonth = currdate.getMonth() + 1;
var currday = currdate.getDate();
var curryear = currdate.getFullYear();
var sqlDateFormat = curryear + "-" + currmonth + "-" + currday;
return sqlDateFormat;
},
editButtonEnable: function() {
this.btnSearch.setShowing(false);
this.txtEntityId.setValue("disabled", false);
this.txtUserId.setValue("disabled", false);
this.txtPassword.setValue("disabled", false);
this.txtUsername.setValue("disabled", false);
this.txtFname.setValue("disabled", false);
this.txtMname.setValue("disabled", false);
this.txtLname.setValue("disabled", false);
this.txtEmail.setValue("disabled", false);
this.txtSdate.setValue("disabled", false);
this.txtEdate.setValue("disabled", false);
this.txtParent.setValue("disabled", false);
this.txtUserId.setValue("disabled", true);
this.txtEntityId.setValue("disabled", true);
this.pnlStatus.setValue("showing", true);
},
createButtonEnable: function() {
//this.btnEntityId.setValue("showing", true);
this.btnSearch.setShowing(false);
this.txtEntityId.setValue("dataValue", app.varEntity.getValue("dataValue"));
this.txtUserId.setValue("dataValue", "");
this.txtPassword.setValue("dataValue", "");
this.txtUsername.setValue("dataValue", "");
this.txtFname.setValue("dataValue", "");
this.txtMname.setValue("dataValue", "");
this.txtLname.setValue("dataValue", "");
this.txtEmail.setValue("dataValue", "");
this.txtSdate.setValue("dataValue", "");
this.txtEdate.setValue("dataValue", "");
this.txtParent.setValue("dataValue", "");
this.txtEntityId.setValue("disabled", false);
this.txtUserId.setValue("disabled", false);
this.txtPassword.setValue("disabled", false);
this.txtUsername.setValue("disabled", false);
this.txtFname.setValue("disabled", false);
this.txtMname.setValue("disabled", false);
this.txtLname.setValue("disabled", false);
this.txtEmail.setValue("disabled", false);
this.txtSdate.setValue("disabled", false);
this.txtEdate.setValue("disabled", false);
this.txtParent.setValue("disabled", false);
this.txtEntityId.setValue("disabled", true);
},
createButtonDisable: function() {
this.btnSearch.setShowing(true);
this.btnEntityId.setValue("showing", false);
this.txtEntityId.setValue("dataValue", "");
this.txtUserId.setValue("dataValue", "");
this.txtPassword.setValue("dataValue", "");
this.txtUsername.setValue("dataValue", "");
this.txtFname.setValue("dataValue", "");
this.txtMname.setValue("dataValue", "");
this.txtLname.setValue("dataValue", "");
this.txtEmail.setValue("dataValue", "");
this.txtSdate.setValue("dataValue", "");
this.txtEdate.setValue("dataValue", "");
this.txtParent.setValue("dataValue", "");
this.txtEntityId.setValue("disabled", true);
this.txtUserId.setValue("disabled", false);
this.txtPassword.setValue("disabled", true);
this.txtUsername.setValue("disabled", true);
this.txtFname.setValue("disabled", true);
this.txtMname.setValue("disabled", true);
this.txtLname.setValue("disabled", true);
this.txtEmail.setValue("disabled", true);
this.txtSdate.setValue("disabled", true);
this.txtEdate.setValue("disabled", true);
this.txtParent.setValue("disabled", true);
this.txtEntityId.setValue("disabled", true);
this.pnlStatus.setValue("showing", false);
},
btnEntityIdClick: function(inSender) {
try {
this.svarEntityID.update();
this.dgEntityID.dataSet.update();
this.ddEntityID.setShowing(true);
} catch (e) {
console.error('ERROR IN btnEntityIdClick: ' + e);
}
},
btnCloseClick: function(inSender) {
try {
this.ddEntityID.setShowing(false);
} catch (e) {
console.error('ERROR IN btnCloseClick: ' + e);
}
},
btnAddClick: function(inSender) {
try {
//Added by Jammi Dee 12/02/2012
this.svarCheckUserLicense.update();
} catch (e) {
console.error('ERROR IN btnAddClick: ' + e);
alert( 'ERROR IN btnAddClick: ' + e );
}
},
//Added by Jammi Dee 12/02/2012
svarCheckUserLicenseResult: function(inSender, inDeprecated) {
try {
//alert( inSender.getValue("dataValue") );
if( inSender.getValue("dataValue") === "OK" ){
this.pnlButtons.setValue("showing", false);
this.pnlSaveButton.setValue("showing", true);
this.createButtonEnable();
this.varFlag.setValue("dataValue", "ADD");
} else {
alert("Maximum number of USERS allowed has been reached!");
}
} catch(e) {
console.error('ERROR IN svarCheckUserLicenseResult: ' + e);
alert( 'ERROR IN svarCheckUserLicenseResult: ' + e );
}
},
//Added by Jammi Dee 12/02/2012
pic_newClick: function(inSender) {
try {
this.btnAddClick( inSender );
} catch(e) {
console.error('ERROR IN pic_newClick: ' + e);
alert( 'ERROR IN pic_newClick: ' + e );
}
},
btnCancelClick: function(inSender) {
try {
this.pnlButtons.setValue("showing", true);
this.pnlSaveButton.setValue("showing", false);
this.createButtonDisable();
} catch (e) {
console.error('ERROR IN btnCancelClick: ' + e);
}
},
dgEntityIDClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
this.varGridSelect.setValue("dataValue", this.dgEntityID.selectedItem.getData().entityid);
} catch (e) {
console.error('ERROR IN dgEntityIDClick: ' + e);
}
},
btnSelectClick: function(inSender) {
try {
this.txtEntityId.setValue("dataValue", this.varGridSelect.getValue("dataValue"));
this.ddEntityID.setShowing(false);
} catch (e) {
console.error('ERROR IN btnSelectClick: ' + e);
}
},
btnSaveClick: function(inSender) {
// Added by Jammi Dee 08/14/2012
// Encrypt the password
this.svarDESInit.setValue("input.ivString", "");
this.svarDESInit.setValue("input.keyString", "");
this.svarDESInit.update();
},
// Added by Jammi Dee 08/14/2012
svarDESInitResult: function(inSender, inDeprecated) {
try {
this.svarDESEncrypt.setValue("input.value", this.txtPassword.getValue("dataValue") );
this.svarDESEncrypt.update();
} catch(e) {
console.error('ERROR IN svarDESInitResult: ' + e);
}
},
// Added by Jammi Dee 08/14/2012
svarDESEncryptResult: function(inSender, inDeprecated) {
try {
var entityid    = this.txtEntityId.getValue("dataValue");
var userid      = this.txtUserId.getValue("dataValue");
var password    = this.txtPassword.getValue("dataValue");
var password02  = inSender.getValue("dataValue");
var uname       = this.txtUsername.getValue("dataValue");
var fname       = this.txtFname.getValue("dataValue");
var mname       = this.txtMname.getValue("dataValue");
var lname       = this.txtLname.getValue("dataValue");
var email       = this.txtEmail.getValue("dataValue");
var parnt       = this.txtParent.getValue("dataValue");
var sdate       = "";
var edate       = "";
//Pass the encrypted password
this.varPassword02.setValue("dataValue", password02 );
//alert(parnt);
var status = this.txtStatus.getValue("dataValue");
sdate = this.convertDateToSqlDateFormat(this.txtSdate.getValue("dataValue"));
edate = this.convertDateToSqlDateFormat(this.txtEdate.getValue("dataValue"));
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
"password = '" + password + "',firstname = '" + fname + "',middlename = '" + mname + "',lastname = '" + lname + "'," +
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
} catch (e) {
console.error('ERROR IN btnSaveClick: ' + e);
}
},
//Modified by Jammi Dee 08/13/2012
//This is where the actual adding of the user occurs.
svarTblUserResult: function(inSender, inDeprecated) {
try {
var entityid    = this.txtEntityId.getValue("dataValue");
var userid      = this.txtUserId.getValue("dataValue");
var password    = this.txtPassword.getValue("dataValue");
var password02  = this.varPassword02.getValue("dataValue");
var uname       = this.txtUsername.getValue("dataValue");
var fname       = this.txtFname.getValue("dataValue");
var mname       = this.txtMname.getValue("dataValue");
var lname       = this.txtLname.getValue("dataValue");
var email       = this.txtEmail.getValue("dataValue");
var mpid        = this.txtParent.getValue("dataValue");
var sdate       = "";
var edate       = "";
var sQueryFinal1;
var status      = this.txtStatus.getValue("dataValue");
sdate = this.convertDateToSqlDateFormat(this.txtSdate.getValue("dataValue"));
edate = this.convertDateToSqlDateFormat(this.txtEdate.getValue("dataValue"));
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
sQuery = sQuery + ",'" + password + "','" + fname + "'";
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
} catch (e) {
console.error('ERROR IN svarTblRoleAsgnResult: ' + e);
alert( 'ERROR IN svarTblRoleAsgnResult: ' + e );
}
},
//Modified by Jammi Dee 08/13/2012
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
alert("Successfuly edited.");
} else if (this.varFlag.getValue("dataValue") == "DELETE") {
alert("Successfuly deleted.");
}
this.pnlButtons.setValue("showing", true);
this.pnlSaveButton.setValue("showing", false);
this.createButtonDisable();
//this.updateDgRightAsgnID();
this.svarReload.update();
}
} catch (e) {
console.error('ERROR IN svarExecGenericNonQueryResult: ' + e);
alert( 'ERROR IN svarExecGenericNonQueryResult: ' + e );
}
},
btnSearchClick: function(inSender) {
try {
this.svarSearchUserId.setValue("input.pUserId", this.txtUserId.getValue("dataValue"));
this.svarSearchUserId.update();
this.dgUser.dataSet.update();
} catch (e) {
console.error('ERROR IN btnSearchClick: ' + e);
alert( 'ERROR IN btnSearchClick: ' + e );
}
},
btnEditClick: function(inSender) {
try {
this.pnlButtons.setValue("showing", false);
this.pnlSaveButton.setValue("showing", true);
this.varFlag.setValue("dataValue", "EDIT");
this.editButtonEnable();
} catch (e) {
console.error('ERROR IN btnEditClick: ' + e);
alert( 'ERROR IN btnEditClick: ' + e );
}
},
btnDeleteClick: function(inSender) {
try {
var entityid = this.txtEntityId.getValue("dataValue");
var userid = this.txtUserId.getValue("dataValue");
var response = confirm("Are you sure you want to delete?");
if (response) {
var eQuery = "update tbluser set deleted = 1 where entityid = '" + entityid + "' and " + "userid = '" + userid + "';";
//alert(eQuery);
this.svarExecGenericNonQuerySimple.setValue("input.eQuery", eQuery);
this.svarExecGenericNonQuerySimple.update();
this.varFlag.setValue("dataValue", "DELETE");
}
else {
//do nothing
}
} catch (e) {
console.error('ERROR IN btnDeleteClick: ' + e);
alert( 'ERROR IN btnDeleteClick: ' + e );
}
},
svarSearchUserIdResult: function(inSender, inDeprecated) {
try {
//this.dgUser.dataSet.update();
//alert(this.svarSearchUserId.getCount());
if (this.svarSearchUserId.getCount() > 0) {
if (this.dgUser.getRow(0).sstatus == "ACTIVE") {
this.txtEntityId.setValue("dataValue",  this.dgUser.getRow(0).entityid);
this.txtPassword.setValue("dataValue",  this.dgUser.getRow(0).password);
this.txtUsername.setValue("dataValue",  this.dgUser.getRow(0).username);
this.txtFname.setValue("dataValue",     this.dgUser.getRow(0).firstname);
this.txtMname.setValue("dataValue",     this.dgUser.getRow(0).middlename);
this.txtLname.setValue("dataValue",     this.dgUser.getRow(0).lastname);
this.txtEmail.setValue("dataValue",     this.dgUser.getRow(0).email);
this.txtSdate.setValue("dataValue",     this.dgUser.getRow(0).startdate);
//alert(this.txtSdate.getValue("dataValue"));
this.txtEdate.setValue("dataValue",     this.dgUser.getRow(0).enddate);
this.txtStatus.setValue("dataValue",    this.dgUser.getRow(0).sstatus);
// Added by Jammi Dee 05/06/2012
this.txtParent.setValue("dataValue",    this.dgUser.getRow(0).pid);
} else if (this.dgUser.getRow(0).sstatus == "INACTIVE") {
alert("Inactive data.");
} else if (this.dgUser.getRow(0).deleted == 1) {
alert("deleted data.");
}
} else {
alert("No data found");
}
} catch (e) {
console.error('ERROR IN svarSearchUserIdResult: ' + e);
alert( 'ERROR IN svarSearchUserIdResult: ' + e );
}
},
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
}
this.pnlButtons.setValue("showing", true);
this.pnlSaveButton.setValue("showing", false);
this.createButtonDisable();
this.svarReload.update();
//this.updateDgRightAsgnID();
}
} catch (e) {
console.error('ERROR IN svaExecGenericNonQuerySimpleResult: ' + e);
alert( 'ERROR IN svaExecGenericNonQuerySimpleResult: ' + e );
}
},
btnViewClick: function(inSender) {
try {
//this.svarUserView.setValue("input.pUserId", "%");
//this.svarUserView.update();
this.ddUser.setShowing(true);
} catch (e) {
console.error('ERROR IN btnViewClick: ' + e);
alert( 'ERROR IN btnViewClick: ' + e );
}
},
btnSearchUserIDClick: function(inSender) {
try {
var s;
/*if (this.txtSearch.getValue("dataValue") !== "") {
this.svarUserView.setValue("input.pUserId", this.txtSearch.getValue("dataValue"));
} else {
s = this.txtSearch.getValue("dataValue");
}
//alert(s);
//alert(this.txtSearch.getValue("dataValue"));
if (this.txtSearch.getValue("dataValue") == s) {
this.svarUserView.setValue("input.pUserId", "%");
this.svarUserView.getValue("dataValue");
}*/
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
} catch (e) {
console.error('ERROR IN btnSearchUserIDClick: ' + e);
alert( 'ERROR IN btnSearchUserIDClick: ' + e );
}
},
btnSelectUserClick: function(inSender) {
try {
// Added by Jammi Dee 08/14/2012
// Encrypt the password
this.svarDESInit02.setValue("input.ivString", "");
this.svarDESInit02.setValue("input.keyString", "");
this.svarDESInit02.update();
} catch (e) {
console.error('ERROR IN btnSelectUserClick: ' + e);
alert( 'ERROR IN btnSelectUserClick: ' + e );
}
},
svarDESInit02Result: function(inSender, inDeprecated) {
try {
//alert(this.dgUserView.selectedItem.getData().passwdenc );
this.svarDESDecrypt.setValue("input.value", this.dgUserView.selectedItem.getData().passwdenc );
this.svarDESDecrypt.update();
} catch(e) {
console.error('ERROR IN svarDESInit02Result: ' + e);
}
},
svarDESDecryptResult: function(inSender, inDeprecated) {
try {
this.txtUserId.setValue("dataValue",    this.dgUserView.selectedItem.getData().userid);
this.txtEntityId.setValue("dataValue",  this.dgUserView.selectedItem.getData().entityid);
this.txtPassword.setValue("dataValue",  inSender.getValue("dataValue") );
this.txtUsername.setValue("dataValue",  this.dgUserView.selectedItem.getData().username);
this.txtFname.setValue("dataValue",     this.dgUserView.selectedItem.getData().firstname);
this.txtMname.setValue("dataValue",     this.dgUserView.selectedItem.getData().middlename);
this.txtLname.setValue("dataValue",     this.dgUserView.selectedItem.getData().lastname);
this.txtEmail.setValue("dataValue",     this.dgUserView.selectedItem.getData().email);
this.txtSdate.setValue("dataValue",     this.dgUserView.selectedItem.getData().startdate);
//alert(this.txtSdate.getValue("dataValue"));
this.txtEdate.setValue("dataValue",     this.dgUserView.selectedItem.getData().enddate);
this.txtStatus.setValue("dataValue",    this.dgUserView.selectedItem.getData().sstatus);
// Added by Jammi Dee 05/06/2012
this.txtParent.setValue("dataValue",    this.dgUserView.selectedItem.getData().pid);
this.ddUser.setShowing(false);
} catch(e) {
console.error('ERROR IN svarDESDecryptResult: ' + e);
}
},
btnCloseUserClick: function(inSender) {
try {
this.ddUser.setShowing(false);
} catch (e) {
console.error('ERROR IN btnCloseUserClick: ' + e);
alert( 'ERROR IN btnCloseUserClick: ' + e );
}
},
txtUserStatusChange: function(inSender) {
try {
var s = "";
if(typeof this.txtUserStatus.getValue("dataValue") !== 'undefined'){
this.svarUserView.setValue("input.pStatus",this.txtUserStatus.getValue("dataValue"));
}else{
s = this.txtUserStatus.getValue("dataValue");
}
//alert(s);
//alert(this.txtSearch.getValue("dataValue"));
if(this.txtUserStatus.getValue("dataValue") == s){
this.svarUserView.setValue("input.pStatus", "%");
//this.svarRoleAsgnID.getValue("dataValue");
}
this.svarUserView.update();
} catch(e) {
console.error('ERROR IN txtUserStatusChange: ' + e);
alert( 'ERROR IN txtUserStatusChange: ' + e );
}
},
//Added by Jammi Dee 08/13/2012
dgUserViewCellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
this.btnSelectUserClick( inSender );
} catch(e) {
console.error('ERROR IN dgUserViewCellDblClick: ' + e);
}
},
_end: 0
});

PgUser.widgets = {
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
lvEntityID: ["wm.LiveVariable", {"liveSource":"com.dbwaveerp.data.Tblentity","type":"com.dbwaveerp.data.Tblentity"}, {}],
svarEntityID: ["wm.ServiceVariable", {"operation":"qryEntityView","service":"dbwaveerp"}, {"onResult":"svarEntityIDResult"}, {
input: ["wm.ServiceInput", {"type":"qryEntityViewInputs"}, {}]
}],
tblattachmentLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.tblattachmentLiveView1","type":"com.dbwaveerp.data.Tblattachment"}, {}],
varGridSelect: ["wm.Variable", {"type":"StringData"}, {}],
varQuery: ["wm.Variable", {"type":"StringData"}, {}],
varFlag: ["wm.Variable", {"type":"StringData"}, {}],
svarRightAsgnID: ["wm.ServiceVariable", {"operation":"qryRightAsgnView","service":"dbwaveerp"}, {"onResult":"svarRightAsgnIDResult"}, {
input: ["wm.ServiceInput", {"type":"qryRightAsgnViewInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"%\"","targetProperty":"pRoleId"}, {}],
wire1: ["wm.Wire", {"expression":"\"%\"","targetProperty":"pRightId"}, {}]
}]
}]
}],
svarRightID: ["wm.ServiceVariable", {"operation":"qryRightsView","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryRightsViewInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"%\"","targetProperty":"pUserId"}, {}],
wire1: ["wm.Wire", {"expression":"\"%\"","targetProperty":"pRightId"}, {}]
}]
}]
}],
svarSearchUserId: ["wm.ServiceVariable", {"operation":"qryTblUser","service":"dbwaveerp"}, {"onResult":"svarSearchUserIdResult"}, {
input: ["wm.ServiceInput", {"type":"qryTblUserInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":"\"ACTIVE\"","targetProperty":"pStatus"}, {}]
}]
}]
}],
svarTblUser: ["wm.ServiceVariable", {"operation":"checkUserIdExist","service":"svcExecQueryTksUsrMgt"}, {"onResult":"svarTblUserResult"}, {
input: ["wm.ServiceInput", {"type":"checkUserIdExistInputs"}, {}]
}],
svarExecGenericNonQueryComplex: ["wm.ServiceVariable", {"operation":"execNonQueryLong","service":"svcExecGenericNonQuery"}, {"onResult":"svarExecGenericNonQueryComplexResult"}, {
input: ["wm.ServiceInput", {"type":"execNonQueryLongInputs"}, {}]
}],
svarExecGenericNonQuerySimple: ["wm.ServiceVariable", {"operation":"execNonQuery","service":"svcExecGenericNonQuery"}, {"onResult":"svarExecGenericNonQuerySimpleResult"}, {
input: ["wm.ServiceInput", {"type":"execNonQueryInputs"}, {}]
}],
svarReload: ["wm.ServiceVariable", {"operation":"qryUserView","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryUserViewInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"%\"","targetProperty":"pUserId"}, {}]
}]
}]
}],
svarUserView: ["wm.ServiceVariable", {"operation":"qryUserView","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryUserViewInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"%\"","targetProperty":"pRoleId"}, {}],
wire2: ["wm.Wire", {"expression":false,"source":"app.varEntity.dataValue","targetProperty":"pEntityId"}, {}],
wire3: ["wm.Wire", {"expression":"\"ACTIVE\"","targetProperty":"pStatus"}, {}]
}]
}]
}],
navPgMain: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMain\"","targetProperty":"pageName"}, {}]
}]
}]
}],
svarDESInit: ["wm.ServiceVariable", {"operation":"Encrypter","service":"svcDESEncryption"}, {"onResult":"svarDESInitResult"}, {
input: ["wm.ServiceInput", {"type":"EncrypterInputs"}, {}]
}],
svarDESEncrypt: ["wm.ServiceVariable", {"operation":"encrypt","service":"svcDESEncryption"}, {"onResult":"svarDESEncryptResult"}, {
input: ["wm.ServiceInput", {"type":"encryptInputs"}, {}]
}],
varPassword02: ["wm.Variable", {"type":"StringData"}, {}],
svarDESInit02: ["wm.ServiceVariable", {"operation":"Encrypter","service":"svcDESEncryption"}, {"onResult":"svarDESInit02Result"}, {
input: ["wm.ServiceInput", {"type":"EncrypterInputs"}, {}]
}],
svarDESDecrypt: ["wm.ServiceVariable", {"operation":"decrypt","service":"svcDESEncryption"}, {"onResult":"svarDESDecryptResult"}, {
input: ["wm.ServiceInput", {"type":"decryptInputs"}, {}]
}],
svarCheckUserLicense: ["wm.ServiceVariable", {"operation":"checkUserLicense","service":"svcLicenseSystem"}, {"onResult":"svarCheckUserLicenseResult"}, {
input: ["wm.ServiceInput", {"type":"checkUserLicenseInputs"}, {}]
}],
navPgMainUser: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMainUser\"","targetProperty":"pageName"}, {}]
}]
}]
}],
ddEntityID: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","title":"Select Entity ID"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
dgEntityID: ["wm.DojoGrid", {"columns":[{"show":true,"title":"Entity ID","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":true,"title":"Company","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"company"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Company: \" + ${company} + \"</div>\"\n"}],"height":"100%","localizationStructure":{},"margin":"4"}, {"onClick":"dgEntityIDClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarEntityID","targetProperty":"dataSet"}, {}]
}]
}]
}],
buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnSelect: ["wm.Button", {"caption":"Select","margin":"4"}, {"onclick":"btnSelectClick"}],
btnClose: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"btnCloseClick"}]
}]
}],
ddRightID: ["wm.DesignableDialog", {"buttonBarId":"buttonBar2","containerWidgetId":"containerWidget2","title":"Right List"}, {}, {
containerWidget2: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
dgRightID: ["wm.DojoGrid", {"columns":[{"show":false,"title":"Seqid","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"seqid"},{"show":true,"title":"Entity ID","width":"13%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":false,"title":"Sstatus","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"show":true,"title":"Right ID","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"rightid"},{"show":true,"title":"Application ID","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"appid"},{"show":true,"title":"Description","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"description"},{"show":true,"title":"Juid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"juid"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Right ID: \" + ${rightid} + \"</div>\"\n+ \"<div class='MobileRow'>Application ID: \" + ${appid} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n+ \"<div class='MobileRow'>Juid: \" + ${juid} + \"</div>\"\n"}],"height":"100%","margin":"4"}, {"onClick":"dgRightIDClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarRightID","targetProperty":"dataSet"}, {}]
}]
}]
}],
buttonBar2: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnSelectRight: ["wm.Button", {"caption":"Select","margin":"4"}, {"onclick":"btnSelectRightClick"}],
btnCloseRight: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"btnCloseRightClick"}]
}]
}],
pgUserView: ["wm.PageDialog", {"desktopHeight":"450px","height":"450px","noEscape":true,"noMaxify":true,"noMinify":true,"title":"User View","width":"700px"}, {"onClose":"pgUserViewClose"}],
ddUser: ["wm.DesignableDialog", {"buttonBarId":"buttonBar1","containerWidgetId":"containerWidget1","desktopHeight":"450px","height":"450px","title":"User List","width":"900px"}, {}, {
containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
dgUserView: ["wm.DojoGrid", {"columns":[{"show":true,"field":"entityid","title":"Entity ID","width":"80px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"sstatus","title":"Sstatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"userid","title":"User ID","width":"80px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"password","title":"Password","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"username","title":"Username","width":"80px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"firstname","title":"First Name","width":"100px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"middlename","title":"Middle Name","width":"100px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"lastname","title":"Last Name","width":"100px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"email","title":"Email","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"deleted","title":"Deleted","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"roleid","title":"Roleid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"startdate","title":"Startdate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"enddate","title":"Enddate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"userimgext","title":"Userimgext","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"pid","title":"PID","width":"100px","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"passwdenc","title":"Passwdenc","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"parentPerson","title":"ParentPerson","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"id","title":"Id","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"id.seqid","title":"Id.seqid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"id.juid","title":"Id.juid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>User ID: \" + ${userid} + \"</div>\"\n+ \"<div class='MobileRow'>Username: \" + ${username} + \"</div>\"\n+ \"<div class='MobileRow'>First Name: \" + ${firstname} + \"</div>\"\n+ \"<div class='MobileRow'>Middle Name: \" + ${middlename} + \"</div>\"\n+ \"<div class='MobileRow'>Last Name: \" + ${lastname} + \"</div>\"\n+ \"<div class='MobileRow'>Email: \" + ${email} + \"</div>\"\n","mobileColumn":true}],"height":"90%","margin":"4"}, {"onCellDblClick":"dgUserViewCellDblClick","onClick":"dgUserViewClick"}, {
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
buttonBar1: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnSelectUser: ["wm.Button", {"caption":"Select","margin":"4"}, {"onclick":"btnSelectUserClick"}],
btnCloseUser: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"btnCloseUserClick"}]
}]
}],
pdAbout: ["wm.PageDialog", {"desktopHeight":"341px","height":"341px","noEscape":true,"noMaxify":true,"noMinify":true,"pageName":"PgAbout","width":"616px"}, {}],
ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar3","containerWidgetId":"containerWidget3","corner":"cr","modal":false,"title":"Manage User Help"}, {}, {
containerWidget3: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgUser.html"}, {}]
}],
buttonBar3: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnClose1: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddPgMainConfigHelp.hide"}]
}]
}],
pnlLayoutMain: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"horizontalAlign":"left","verticalAlign":"top"}, {"onEnterKeyPress":"navManageUser"}, {
pnlHeader: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"45px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
imgLogo: ["wm.Picture", {"height":"45px","source":"resources/images/logos/waveerplogo.jpg","width":"275px"}, {}],
pnlTitle: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","styles":{"backgroundImage":"url(resources/images/logos/waveerpbar.jpg)"},"verticalAlign":"middle","width":"100%"}, {}, {
lblTitle: ["wm.Label", {"align":"right","autoSizeHeight":true,"caption":"Ticket System","height":"23px","padding":"4","singleLine":false,"width":"600px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}],
pnlMenuBar: ["wm.Panel", {"height":"20px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#00008b"},"verticalAlign":"top","width":"100%"}, {}],
pnlMenuButton: ["wm.HeaderContentPanel", {"border":"0","height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
pnlMenuButtonLeft: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
pic_home: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Home","source":"resources/images/buttons/home0224.png","width":"24px"}, {"onclick":"navPgMain"}],
pic_back: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Back","source":"resources/images/buttons/arrowleft24.png","width":"24px"}, {"onclick":"navPgMainUser"}],
spacer16: ["wm.Spacer", {"height":"24px","width":"12px"}, {}],
pic_new: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"New","source":"resources/images/buttons/addball24.png","width":"30px"}, {"onclick":"pic_newClick"}],
pic_edit: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Edit","source":"resources/images/buttons/editnote24.png","width":"30px"}, {}],
pic_save: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Save","source":"resources/images/buttons/save24.png","width":"30px"}, {}],
pic_delete: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Delete","source":"resources/images/buttons/Recyclebin24.png","width":"30px"}, {}]
}],
pnlMenuButtonRight: ["wm.Panel", {"height":"24px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
pic_help: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Help","source":"resources/images/buttons/helpred24.png","width":"24px"}, {"onclick":"ddPgMainConfigHelp.show"}],
pic_about: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"About","source":"resources/images/buttons/aboutblue24.png","width":"24px"}, {"onclick":"pdAbout.show"}]
}]
}],
spacer15: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
pnlInputFields: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
spacer1: ["wm.Spacer", {"height":"5px","width":"96px"}, {}],
pnlUserId: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spacer4: ["wm.Spacer", {"height":"19px","width":"40px"}, {}],
txtUserId: ["wm.Text", {"caption":"User ID : ","captionAlign":"left","captionSize":"95px","dataValue":undefined,"displayValue":"","width":"277px"}, {"onEnterKeyPress":"txtUserIdEnterKeyPress"}],
btnSearch: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Search","iconHeight":"14px","margin":"4"}, {"onclick":"btnSearchClick"}]
}],
pnlEntityId: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spacer2: ["wm.Spacer", {"height":"21px","width":"40px"}, {}],
txtEntityId: ["wm.Text", {"caption":"Entity ID : ","captionAlign":"left","captionSize":"95px","dataValue":undefined,"disabled":true,"displayValue":"","width":"277px"}, {}],
btnEntityId: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"..","margin":"4","showing":false,"width":"35px"}, {"onclick":"btnEntityIdClick"}],
btnEntity: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"..","disabled":true,"margin":"4","width":"30px"}, {}]
}],
pnlUsername: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spacer5: ["wm.Spacer", {"height":"21px","width":"40px"}, {}],
txtUsername: ["wm.Text", {"caption":"Username : ","captionAlign":"left","captionSize":"95px","dataValue":undefined,"disabled":true,"displayValue":"","width":"430px"}, {}]
}],
pnlPassword: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spacer3: ["wm.Spacer", {"height":"23px","width":"40px"}, {}],
txtPassword: ["wm.Text", {"caption":"Password : ","captionAlign":"left","captionSize":"95px","dataValue":undefined,"disabled":true,"displayValue":"","password":true,"width":"430px"}, {}]
}],
pnlFname: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spacer6: ["wm.Spacer", {"height":"24px","width":"40px"}, {}],
txtFname: ["wm.Text", {"caption":"Firstname : ","captionAlign":"left","captionSize":"95px","dataValue":undefined,"disabled":true,"displayValue":"","width":"430px"}, {}]
}],
pnlMname: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spacer7: ["wm.Spacer", {"height":"20px","width":"40px"}, {}],
txtMname: ["wm.Text", {"caption":"Middlename : ","captionAlign":"left","captionSize":"95px","dataValue":undefined,"disabled":true,"displayValue":"","width":"430px"}, {}]
}],
pnlLname: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spacer8: ["wm.Spacer", {"height":"22px","width":"40px"}, {}],
txtLname: ["wm.Text", {"caption":"Lastname : ","captionAlign":"left","captionSize":"95px","dataValue":undefined,"disabled":true,"displayValue":"","width":"430px"}, {}]
}],
pnlEmail: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spacer11: ["wm.Spacer", {"height":"18px","width":"40px"}, {}],
txtEmail: ["wm.Text", {"caption":"Email : ","captionAlign":"left","captionSize":"95px","dataValue":undefined,"disabled":true,"displayValue":"","width":"430px"}, {}]
}],
pnlSdate: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spacer12: ["wm.Spacer", {"height":"24px","width":"40px"}, {}],
txtSdate: ["wm.Date", {"caption":"Start Date :","captionAlign":"left","captionSize":"95px","dataValue":undefined,"disabled":true,"displayValue":""}, {}]
}],
pnlEdate: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spacer13: ["wm.Spacer", {"height":"23px","width":"40px"}, {}],
txtEdate: ["wm.Date", {"caption":"End Date :","captionAlign":"left","captionSize":"95px","dataValue":undefined,"disabled":true,"displayValue":""}, {}],
pnlStatus: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
spacer14: ["wm.Spacer", {"height":"48px","width":"25px"}, {}],
txtStatus: ["wm.SelectMenu", {"caption":"Status :","captionAlign":"left","captionSize":"60px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","options":"ACTIVE,INACTIVE","width":"200px"}, {}]
}]
}],
pnlParent: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spacer17: ["wm.Spacer", {"height":"12px","width":"40px"}, {}],
txtParent: ["wm.Text", {"caption":"Parent","captionAlign":"left","captionSize":"95px","dataValue":undefined,"disabled":true,"displayValue":""}, {}]
}],
pnlButtons: ["wm.Panel", {"fitToContentHeight":true,"height":"36px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
pnlCrud: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"656px"}, {}, {
spacer10: ["wm.Spacer", {"height":"23px","width":"40px"}, {}],
btnAdd: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Create","margin":"4","width":"120px"}, {"onclick":"btnAddClick"}],
btnEdit: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Edit","margin":"4","width":"120px"}, {"onclick":"btnEditClick"}],
btnDelete: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Delete","margin":"4","width":"120px"}, {"onclick":"btnDeleteClick"}],
btnView: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Select","margin":"4","width":"120px"}, {"onclick":"btnViewClick"}],
btnExit: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Close","margin":"4","width":"120px"}, {"onclick":"navManageUser"}]
}]
}],
pnlSaveButton: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spacer9: ["wm.Spacer", {"height":"22px","width":"40px"}, {}],
btnSave: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Save","margin":"4"}, {"onclick":"btnSaveClick"}],
btnCancel: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Cancel","margin":"4"}, {"onclick":"btnCancelClick"}]
}],
pnlDgUser: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White","wm_BorderShadow_NoShadow","wm_BorderTopStyle_NoCurve","wm_TextDecoration_None"]},"borderColor":"#ffffff","fitToContentHeight":true,"height":"15px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
dgUser: ["wm.DojoGrid", {"_classes":{"domNode":["wm_BackgroundColor_White","wm_FontColor_White"]},"borderColor":"#FFFFFF","columns":[{"show":true,"title":"Userid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"userid"},{"show":true,"title":"Entityid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":true,"title":"Password","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"password"},{"show":true,"title":"Username","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"username"},{"show":true,"title":"Firstname","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"firstname"},{"show":true,"title":"Middlename","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"middlename"},{"show":true,"title":"Lastname","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"lastname"},{"show":true,"title":"Sstatus","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"show":true,"title":"Email","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"email"},{"show":true,"title":"Roleid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"roleid"},{"show":true,"title":"Startdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","fieldType":"","field":"startdate"},{"show":true,"title":"Enddate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","fieldType":"","field":"enddate"},{"show":true,"title":"Deleted","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"deleted"},{"show":true,"title":"Userimgext","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"userimgext"},{"show":true,"title":"Pid","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"pid"},{"show":true,"title":"Passwdenc","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"passwdenc"},{"show":false,"title":"ParentPerson","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"parentPerson"},{"show":false,"field":"id","title":"Id","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"id.seqid","title":"Id.seqid","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"id.juid","title":"Id.juid","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Userid: \" + ${userid} + \"</div>\"\n+ \"<div class='MobileRow'>Entityid: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Password: \" + ${password} + \"</div>\"\n+ \"<div class='MobileRow'>Username: \" + ${username} + \"</div>\"\n+ \"<div class='MobileRow'>Firstname: \" + ${firstname} + \"</div>\"\n+ \"<div class='MobileRow'>Middlename: \" + ${middlename} + \"</div>\"\n+ \"<div class='MobileRow'>Lastname: \" + ${lastname} + \"</div>\"\n+ \"<div class='MobileRow'>Sstatus: \" + ${sstatus} + \"</div>\"\n+ \"<div class='MobileRow'>Email: \" + ${email} + \"</div>\"\n+ \"<div class='MobileRow'>Roleid: \" + ${roleid} + \"</div>\"\n+ \"<div class='MobileRow'>Startdate: \" + wm.List.prototype.dateFormatter({}, null,null,null,${startdate}) + \"</div>\"\n+ \"<div class='MobileRow'>Enddate: \" + wm.List.prototype.dateFormatter({}, null,null,null,${enddate}) + \"</div>\"\n+ \"<div class='MobileRow'>Deleted: \" + ${deleted} + \"</div>\"\n+ \"<div class='MobileRow'>Userimgext: \" + ${userimgext} + \"</div>\"\n+ \"<div class='MobileRow'>Pid: \" + ${pid} + \"</div>\"\n+ \"<div class='MobileRow'>Passwdenc: \" + ${passwdenc} + \"</div>\"\n"}],"height":"0px","margin":"0","minDesktopHeight":60,"width":"249px"}, {"onClick":"dgUserClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarSearchUserId","targetProperty":"dataSet"}, {}]
}]
}]
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

PgUser.prototype._cssText = 'body.tundra .PgUser .wmlayout .PgUser-pnlHeader {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgUser .wmlayout .PgUser-pnlTitle {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgUser .wmlayout .PgUser-lblTitle {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:14pt;\
}\
body.tundra .PgUser .wmlayout .PgUser-pnlMenuBar {\
background-color:#00008B;\
}\
body.tundra .PgUser .wmlayout .PgUser-pnlFooter {\
background-color:#00008B;\
}\
body.tundra .PgUser .PgUser-pnlLayoutMain.wmlayout {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgUser .wmlayout .PgUser-pnlInputFields {\
}\
body.tundra .PgUser .wmlayout .PgUser-pnlBody {\
background-color:#FFFFFF;\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:10pt;\
font-weight:bold;\
}\
body.tundra  .PgUser-txtSearch {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:9pt;\
font-weight:bold;\
}\
body.tundra  .PgUser-txtUserStatus {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:9pt;\
font-weight:bold;\
}\
body.tundra  .PgUser-txtUname {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:9pt;\
font-weight:bold;\
}\
body.tundra  .PgUser-txtEMail {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:9pt;\
font-weight:bold;\
}\
body.tundra  .PgUser-txtSearch {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:9pt;\
font-weight:bold;\
}\
';
PgUser.prototype._htmlText = '';