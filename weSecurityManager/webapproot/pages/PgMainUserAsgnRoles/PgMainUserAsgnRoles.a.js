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
dojo.declare("PgMainUserAsgnRoles", wm.Page, {
"preferredDevice": "desktop",
start: function() {
try {
this.lblTitle.setCaption("Assign Role");
this.updateDgRoleAsgnID();
app.varModuleId.setValue("dataValue","MDLROLEASGN");
this.txtSearchStatus.setValue("dataValue","ACTIVE");
var rights;
//for (i = 0; i < app.varArrayRights.getCount(); i++) {
//        rights = app.varArrayRights.getItem(i).getValue("dataValue");
//        this.checkRights(rights);
//}
//Initially Hide OBjects
//this.btnAdd.setShowing(false);
//this.btnEdit.setShowing(false);
//this.btnDelete.setShowing(false);
//this.btnView.setShowing(false);
this.btnRoleId.setShowing( false );
this.pnlSaveButton.setShowing( false );
// Initialize the application - Jammi Dee 03/25/2012
this.initApplication();
//Retrieve all the data for Entity.
this.svarEntityID.update();
this.selEntity.setValue("dataValue", app.varEntity.getValue("dataValue") );
//Added by Jammi Dee 11/25/2012
app.svarUpdateSessionApp.setValue("input.pJuid",app.varSessionId.getValue("dataValue"));
app.svarUpdateSessionApp.update();
// Added by Jammi Dee 05/06/2012
app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarLogging.setValue("input.pMsg","Manage System Roles Assignment.");
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
this.lblTitle.setCaption("Asgn Role : " + app.varAppName.getValue("dataValue") + " : " + app.varAppVersion.getValue("dataValue"));
this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
},
updateDgRoleAsgnID: function() {
this.svarRoleAsgnID.update();
this.dgRoleAsgnID.dataSet.update();
},
checkRights: function(rights) {
var appid = app.varAppId.getValue("dataValue");
var rightid = rights;
switch (rightid){
case "MGTASGNROLESTATUS" + "|" + appid:
this.txtSearchStatus.setShowing(true);
break;
case "MGTASGNROLEADD" + "|" + appid:
this.btnAdd.setShowing(true);
break;
case "MGTASGNROLEEDIT" + "|" + appid:
this.btnEdit.setShowing(true);
break;
case "MGTASGNROLEDELETE" + "|" + appid:
this.btnDelete.setShowing(true);
break;
default:break;
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
editButtonEnable: function() {
//this.btnEntityId.setValue("showing", true);
//this.btnRoleId.setValue("showing", true);
//this.btnUserId.setValue("showing", true);
this.txtEntityId.setValue("readonly", false);
this.txtRoleId.setValue("readonly", false);
this.txtUserId.setValue("readonly", false);
this.txtDesc.setValue("readonly", false);
this.txtEntityId.setValue("disabled", true);
this.txtRoleId.setValue("disabled", true);
this.txtUserId.setValue("disabled", true);
this.pnlStatus.setValue("showing", true);
},
createButtonEnable: function() {
//this.btnEntityId.setValue("showing", true);
this.btnRoleId.setValue("showing", true);
//this.btnUserId.setValue("showing", true);
this.txtEntityId.setValue("dataValue", this.selEntity.getValue("dataValue"));
this.txtRoleId.setValue("dataValue", "");
this.txtUserId.setValue("dataValue",this.varGridSelect.getValue("dataValue"));
this.txtDesc.setValue("dataValue", "");
this.txtEntityId.setValue("readonly", false);
this.txtRoleId.setValue("readonly", false);
this.txtUserId.setValue("readonly", false);
this.txtDesc.setValue("readonly", false);
this.txtEntityId.setValue("disabled", true);
this.txtRoleId.setValue("disabled", true);
this.txtUserId.setValue("disabled", true);
},
createButtonDisable: function() {
this.btnEntityId.setValue("showing", false);
this.btnRoleId.setValue("showing", false);
//this.btnUserId.setValue("showing", false);
this.txtEntityId.setValue("dataValue", this.dgRoleAsgnID.getRow(0).entityid);
this.txtRoleId.setValue("dataValue", this.dgRoleAsgnID.getRow(0).roleid);
this.txtUserId.setValue("dataValue", this.dgRoleAsgnID.getRow(0).userid);
this.txtDesc.setValue("dataValue", this.dgRoleAsgnID.getRow(0).description);
this.txtStatus.setValue("dataValue", this.dgRoleAsgnID.getRow(0).sstatus);
this.txtEntityId.setValue("readonly", true);
this.txtRoleId.setValue("readonly", true);
this.txtUserId.setValue("readonly", true);
this.txtDesc.setValue("readonly", true);
this.txtRoleId.setValue("disabled", false);
this.pnlStatus.setValue("showing", false);
},
roleAsgnViewSelect: function() {
this.txtEntityId.setValue("dataValue", this.dgRoleAsgnID.selectedItem.getData().entityid);
this.txtRoleId.setValue("dataValue", this.dgRoleAsgnID.selectedItem.getData().roleid);
this.txtUserId.setValue("dataValue", this.dgRoleAsgnID.selectedItem.getData().userid);
this.txtDesc.setValue("dataValue", this.dgRoleAsgnID.selectedItem.getData().description);
this.txtStatus.setValue("dataValue", this.dgRoleAsgnID.selectedItem.getData().sstatus);
},
btnViewClick: function(inSender) {
try {
this.svarRoleID.update();
this.dgRoleID.dataSet.update();
this.pnlView.setValue("showing", true);
} catch (e) {
console.error('ERROR IN btnViewClick: ' + e);
}
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
btnCloseRoleViewClick: function(inSender) {
try {
this.pnlView.setValue("showing", false);
} catch (e) {
console.error('ERROR IN btnCloseRoleViewClick: ' + e);
}
},
btnAddClick: function(inSender) {
try {
this.pnlButtons.setValue("showing", false);
this.pnlSaveButton.setValue("showing", true);
this.createButtonEnable();
this.varFlag.setValue("dataValue", "ADD");
} catch (e) {
console.error('ERROR IN btnAddClick: ' + e);
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
try {
var entityid = this.txtEntityId.getValue("dataValue");
var roleid = this.txtRoleId.getValue("dataValue");
var userid = this.txtUserId.getValue("dataValue");
var sstatus = this.txtStatus.getValue("dataValue");
if (entityid !== "" && roleid !== "" && userid !== "") {
if (this.varFlag.getValue("dataValue") == "ADD") {
this.svarTblRoleAsgn.setValue("input.pEntityId", entityid);
this.svarTblRoleAsgn.setValue("input.pRoleId", roleid);
this.svarTblRoleAsgn.setValue("input.pUserId", userid);
this.svarTblRoleAsgn.update();
} else if (this.varFlag.getValue("dataValue") == "EDIT") {
var desc = this.txtDesc.getValue("dataValue");
var eQuery = "update tblroleasgn set description = '" + desc + "', "+
"sstatus = '" + sstatus + "' "+
"where(entityid = '" + entityid + "' and "+
"roleid = '" + roleid + "' and userid = '" + userid + "');";
this.varQuery.setValue("dataValue", eQuery);
//alert(this.varQuery.getValue("dataValue"));
this.svarExecGenericNonQuery.setValue("input.eQuery", this.varQuery.getValue("dataValue"));
this.svarExecGenericNonQuery.update();
}
} else {
alert("Fill up all fields");
}
} catch (e) {
console.error('ERROR IN btnSaveClick: ' + e);
}
},
svarExecGenericNonQueryResult: function(inSender, inDeprecated) {
try {
if (inSender.getValue("dataValue") === false) {
//alert("FAIL");
} else {
if(this.varFlag.getValue("dataValue") == "ADD"){
// Added by Jammi Dee 05/06/2013
app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarLogging.setValue("input.pMsg","Role assignment.");
app.svarLogging.setValue("input.pModuleId","MANAGEUSER");
app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
app.svarLogging.setValue("input.pProcess","ROLEASGN");
app.svarLogging.setValue("input.pScopeId","NA");
app.svarLogging.setValue("input.pStype","USER");
app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
app.svarLogging.update();
alert("Successfuly added");
}else if(this.varFlag.getValue("dataValue") == "EDIT"){
// Added by Jammi Dee 05/06/2013
app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarLogging.setValue("input.pMsg","Role Edit.");
app.svarLogging.setValue("input.pModuleId","MANAGEUSER");
app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
app.svarLogging.setValue("input.pProcess","ROLEEDIT");
app.svarLogging.setValue("input.pScopeId","NA");
app.svarLogging.setValue("input.pStype","USER");
app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
app.svarLogging.update();
alert("Successfuly edited");
}else if(this.varFlag.getValue("dataValue") == "DELETE"){
// Added by Jammi Dee 05/06/2013
app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarLogging.setValue("input.pMsg","Role Delete.");
app.svarLogging.setValue("input.pModuleId","MANAGEUSER");
app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
app.svarLogging.setValue("input.pProcess","ROLEDELETE");
app.svarLogging.setValue("input.pScopeId","NA");
app.svarLogging.setValue("input.pStype","USER");
app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
app.svarLogging.update();
alert("Successfuly deleted");
}
this.pnlButtons.setValue("showing", true);
this.pnlSaveButton.setValue("showing", false);
this.createButtonDisable();
this.updateDgRoleAsgnID();
app.svarGetRole.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarGetRole.setValue("input.pEntityId",app.varEntity.getValue("dataValue"));
app.svarGetRole.update();
this.svarRoleAsgnID.setValue("input.pEntityId",   this.selEntity.getValue("dataValue"));
this.svarRoleAsgnID.setValue("input.pUserId",     this.txtSearchUser.getValue("dataValue"));
this.svarRoleAsgnID.update();
}
} catch (e) {
console.error('ERROR IN svarExecGenericNonQueryResult: ' + e);
alert( 'ERROR IN svarExecGenericNonQueryResult: ' + e );
}
},
btnRoleIdClick: function(inSender) {
try {
this.svarRoleID.update();
this.dgRoleID.dataSet.update();
this.ddRoleID.setShowing(true);
} catch (e) {
console.error('ERROR IN btnEntityId1Click: ' + e);
}
},
btnSearchRoleClick: function(inSender) {
try {
this.svarRoleID.update();
this.dgRoleID.dataSet.update();
this.ddRoleID.setShowing(true);
/*var s;
if(this.txtSearch.getValue("dataValue") !== ""){
this.svarRoleAsgnID.setValue("input.pRoleId", this.txtSearch.getValue("dataValue"));
}else{
s = this.txtSearch.getValue("dataValue");
}
//alert(s);
//alert(this.txtSearch.getValue("dataValue"));
if(this.txtSearch.getValue("dataValue") == s){
this.svarRoleAsgnID.setValue("input.pRoleId","%");
//this.svarRoleAsgnID.getValue("dataValue");
}
this.svarRoleAsgnID.update();
this.dgRoleID.dataSet.update();*/
} catch (e) {
console.error('ERROR IN btnSearchClick: ' + e);
}
},
svarRoleAsgnIDResult: function(inSender, inDeprecated) {
try {
this.txtEntityId.setValue("dataValue", this.dgRoleAsgnID.getRow(0).entityid);
this.txtRoleId.setValue("dataValue", this.dgRoleAsgnID.getRow(0).roleid);
this.txtUserId.setValue("dataValue", this.dgRoleAsgnID.getRow(0).userid);
this.txtDesc.setValue("dataValue", this.dgRoleAsgnID.getRow(0).description);
this.txtStatus.setValue("dataValue", this.dgRoleAsgnID.getRow(0).sstatus);
} catch (e) {
console.error('ERROR IN svarRoleIDResult: ' + e);
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
}
},
btnDeleteClick: function(inSender) {
try {
var entityid = this.txtEntityId.getValue("dataValue");
var roleid = this.txtRoleId.getValue("dataValue");
var userid = this.txtUserId.getValue("dataValue");
var response = confirm("Are you sure you want to delete?");
if (response) {
var eQuery = "update tblroleasgn set sstatus = 'INACTIVE' "+
"where(entityid = '" + entityid + "' and "+
"roleid = '" + roleid + "' and userid = '" + userid + "');";
this.varQuery.setValue("dataValue", eQuery);
// alert(this.varQuery.getValue("dataValue"));
this.svarExecGenericNonQuery.setValue("input.eQuery", this.varQuery.getValue("dataValue"));
this.svarExecGenericNonQuery.update();
this.varFlag.setValue("dataValue","DELETE") ;
}
else{
//do nothing
}
} catch(e) {
console.error('ERROR IN btnDeleteClick: ' + e);
}
},
dgRoleAsgnIDClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
this.roleAsgnViewSelect();
} catch(e) {
console.error('ERROR IN dgRoleAsgnIDClick: ' + e);
alert( 'ERROR IN dgRoleAsgnIDClick: ' + e );
}
},
//Modified by Jammi Dee 10/12/2012
btnSelectRoleClick: function(inSender) {
try {
this.txtRoleId.setValue("dataValue",     this.varGridSelect.getValue("dataValue"));
this.txtDesc.setValue("dataValue",       this.dgRoleID.selectedItem.getData().description );
this.ddRoleID.setShowing(false);
} catch(e) {
console.error('ERROR IN btnSelect1Click: ' + e);
alert( 'ERROR IN btnSelect1Click: ' + e );
}
},
btnCloseUserClick: function(inSender) {
try {
this.ddUserID.setShowing(false);
} catch(e) {
console.error('ERROR IN btnClose1Click: ' + e);
alert( 'ERROR IN btnClose1Click: ' + e );
}
},
dgRoleIDClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
this.varGridSelect.setValue("dataValue", this.dgRoleID.selectedItem.getData().roleid);
} catch(e) {
console.error('ERROR IN dgRoleIDClick: ' + e);
alert( 'ERROR IN dgRoleIDClick: ' + e );
}
},
btnUserIdClick: function(inSender) {
try {
this.svarUserID.setValue("input.pEntityId",     this.selEntity.getValue("dataValue"));
this.svarUserID.update();
this.dgUserID.dataSet.update();
this.ddUserID.setShowing(true);
} catch(e) {
console.error('ERROR IN btnRoleId1Click: ' + e);
alert( 'ERROR IN btnRoleId1Click: ' + e );
}
},
dgUserIDClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
this.varGridSelect.setValue("dataValue", this.dgUserID.selectedItem.getData().userid);
} catch(e) {
console.error('ERROR IN dgRoleID1Click: ' + e);
alert( 'ERROR IN dgRoleID1Click: ' + e );
}
},
btnSelectUserClick: function(inSender) {
try {
//this.txtUserId.setValue("dataValue", this.varGridSelect.getValue("dataValue"));
this.txtSearchUser.setValue("dataValue",          this.varGridSelect.getValue("dataValue"));
this.ddUserID.setShowing(false);
this.svarRoleAsgnID.setValue("input.pEntityId",   app.varEntity.getValue("dataValue"));
this.svarRoleAsgnID.setValue("input.pUserId",     this.txtSearchUser.getValue("dataValue"));
this.svarRoleAsgnID.update();
this.ddUserID.setShowing(false);
this.ddUserID.dataSet.update();
} catch(e) {
console.error('ERROR IN btnSelectRole1Click: ' + e);
}
},
svarTblRoleAsgnResult: function(inSender, inDeprecated) {
try {
var entityid = this.txtEntityId.getValue("dataValue");
var roleid = this.txtRoleId.getValue("dataValue");
var userid = this.txtUserId.getValue("dataValue");
var desc = this.txtDesc.getValue("dataValue");
if (inSender.getValue("dataValue") == "exists" || inSender.getValue("dataValue") === null) {
//alert(inSender.getValue("dataValue"));
alert("Role Id already exists");
} else {
var eQuery = "insert into tblroleasgn(entityid,roleid,userid,description)" +
"values (UCASE('" + entityid + "')," +
"UCASE('" + roleid + "')," +
"'" + userid + "','" + desc + "');";
this.varQuery.setValue("dataValue", eQuery);
//  alert(this.varQuery.getValue("dataValue"));
this.svarExecGenericNonQuery.setValue("input.eQuery", this.varQuery.getValue("dataValue"));
this.svarExecGenericNonQuery.update();
}
} catch(e) {
console.error('ERROR IN svarTblRoleAsgnResult: ' + e);
}
},
btnCloseRoleClick: function(inSender) {
try {
this.ddRoleID.setShowing(false);
} catch(e) {
console.error('ERROR IN btnCloseRoleClick: ' + e);
}
},
txtSearchStatusChange: function(inSender) {
try {
var s = "";
if(typeof this.txtSearchStatus.getValue("dataValue") !== 'undefined'){
this.svarRoleAsgnID.setValue("input.pStatus",this.txtSearchStatus.getValue("dataValue"));
}else{
s = this.txtSearchStatus.getValue("dataValue");
}
if(this.txtSearchStatus.getValue("dataValue") == s){
this.svarRoleAsgnID.setValue("input.pStatus","%");
}
//this.svarRoleID.setValue("input.pRoleId",this.txtSearchRole.getValue("dataValue"));
this.svarRoleAsgnID.update();
} catch(e) {
console.error('ERROR IN txtSearchStatusChange: ' + e);
}
},
btnSearchRoleViewClick: function(inSender) {
try {
var s = "";
if(typeof this.txtSearchRole.getValue("dataValue") !== 'undefined'){
this.svarRoleID.setValue("input.pRoleId",this.txtSearchRole.getValue("dataValue"));
}else{
s = this.txtSearchRole.getValue("dataValue");
}
//alert(s);
//alert(this.txtSearch.getValue("dataValue"));
if(this.txtSearchRole.getValue("dataValue") == s){
this.svarRoleID.setValue("input.pRoleId","%");
//this.svarRoleAsgnID.getValue("dataValue");
}
//this.svarRoleID.setValue("input.pRoleId",this.txtSearchRole.getValue("dataValue"));
this.svarRoleID.update();
} catch(e) {
console.error('ERROR IN btnSearchRoleViewClick: ' + e);
}
},
btnUserSearchClick: function(inSender) {
try {
var s = "";
if(typeof this.txtUserSearch.getValue("dataValue") !== 'undefined'){
this.svarUserID.setValue("input.pUserId",this.txtUserSearch.getValue("dataValue"));
}else{
s = this.txtUserSearch.getValue("dataValue");
}
//alert(s);
//alert(this.txtSearch.getValue("dataValue"));
if(this.txtUserSearch.getValue("dataValue") == s){
this.svarUserID.setValue("input.pUserId","%");
//this.svarRoleAsgnID.getValue("dataValue");
}
//this.svarRoleID.setValue("input.pRoleId",this.txtSearchRole.getValue("dataValue"));
this.svarUserID.update();
} catch(e) {
console.error('ERROR IN btnUserSearchClick: ' + e);
}
},
//Added by Jammi Dee 08/13/2012
dgUserIDCellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
this.varGridSelect.setValue("dataValue", this.dgUserID.selectedItem.getData().userid);
this.btnSelectUserClick( inSender );
} catch(e) {
console.error('ERROR IN dgUserIDCellDblClick: ' + e);
}
},
pic_backClick: function(inSender) {
try {
app.pdWaitLoadPage.show();
this.navPgMainUser.update();
} catch(e) {
console.error('ERROR IN pic_backClick: ' + e);
}
},
ddUserIDShow: function(inSender) {
try {
//Retrieve all the data for Entity.
//this.svarEntityID.update();
//this.selEntity.setValue("dataValue", app.varEntity.getValue("dataValue") );
} catch(e) {
console.error('ERROR IN ddUserIDShow: ' + e);
}
},
//Added by Jammi Dee 05/06/2013
selEntityChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
try {
this.svarRoleAsgnID.setValue("input.pEntityId",   this.selEntity.getValue("dataValue"));
this.svarRoleAsgnID.setValue("input.pUserId",     this.txtSearchUser.getValue("dataValue"));
this.svarRoleAsgnID.update();
} catch(e) {
console.error('ERROR IN selEntityChange: ' + e);
alert( 'ERROR IN selEntityChange: ' + e );
}
},
_end: 0
});

PgMainUserAsgnRoles.widgets = {
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
svarExecGenericNonQuery: ["wm.ServiceVariable", {"operation":"execNonQuery","service":"svcExecGenericNonQuery"}, {"onResult":"svarExecGenericNonQueryResult"}, {
input: ["wm.ServiceInput", {"type":"execNonQueryInputs"}, {}]
}],
varQuery: ["wm.Variable", {"type":"StringData"}, {}],
varFlag: ["wm.Variable", {"type":"StringData"}, {}],
svarRoleAsgnID: ["wm.ServiceVariable", {"operation":"qryRoleAsgnView","service":"dbwaveerp"}, {"onResult":"svarRoleAsgnIDResult"}, {
input: ["wm.ServiceInput", {"type":"qryRoleAsgnViewInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"%\"","targetProperty":"pRoleId"}, {}],
wire1: ["wm.Wire", {"expression":"\"ACTIVE\"","targetProperty":"pStatus"}, {}],
wire2: ["wm.Wire", {"expression":false,"source":"app.varEntity.dataValue","targetProperty":"pEntityId"}, {}],
wire3: ["wm.Wire", {"expression":false,"source":"txtSearchUser.dataValue","targetProperty":"pUserId"}, {}]
}]
}]
}],
svarRoleID: ["wm.ServiceVariable", {"operation":"qryRoleView","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryRoleViewInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"%\"","targetProperty":"pRoleId"}, {}],
wire1: ["wm.Wire", {"expression":false,"source":"app.varEntity.dataValue","targetProperty":"pEntityId"}, {}],
wire2: ["wm.Wire", {"expression":"\"ACTIVE\"","targetProperty":"pStatus"}, {}]
}]
}]
}],
svarUserID: ["wm.ServiceVariable", {"operation":"qryUserView","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryUserViewInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"%\"","targetProperty":"pUserId"}, {}],
wire1: ["wm.Wire", {"expression":false,"source":"app.varEntity.dataValue","targetProperty":"pEntityId"}, {}],
wire2: ["wm.Wire", {"expression":"\"ACTIVE\"","targetProperty":"pStatus"}, {}],
wire3: ["wm.Wire", {"expression":"\"%\"","targetProperty":"pEmail"}, {}],
wire4: ["wm.Wire", {"expression":"\"%\"","targetProperty":"pUsername"}, {}]
}]
}]
}],
svarTblRoleAsgn: ["wm.ServiceVariable", {"operation":"checkRoleAsgnExist","service":"svcExecQueryTksUsrMgt"}, {"onResult":"svarTblRoleAsgnResult"}, {
input: ["wm.ServiceInput", {"type":"checkRoleAsgnExistInputs"}, {}]
}],
navPgMain: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMain\"","targetProperty":"pageName"}, {}]
}]
}]
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
dgEntityID: ["wm.DojoGrid", {"columns":[{"show":true,"title":"Entityid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":true,"title":"Company","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"company"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Entityid: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Company: \" + ${company} + \"</div>\"\n"}],"height":"100%","margin":"4"}, {"onClick":"dgEntityIDClick"}, {
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
ddRoleID: ["wm.DesignableDialog", {"buttonBarId":"buttonBar1","containerWidgetId":"containerWidget1","title":"Role List"}, {}, {
containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
dgRoleID: ["wm.DojoGrid", {"columns":[{"show":false,"field":"seqid","title":"Seqid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"entityid","title":"Entity ID","width":"20%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"roleid","title":"Role ID","width":"20%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"shortdesc","title":"Shortdesc","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"description","title":"Description","width":"60%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"sstatus","title":"Sstatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"startdate","title":"Startdate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"enddate","title":"Enddate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"juid","title":"Juid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Role ID: \" + ${roleid} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n","mobileColumn":true}],"height":"100%","margin":"4"}, {"onClick":"dgRoleIDClick","onSelect":"dgRoleIDClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarRoleID","targetProperty":"dataSet"}, {}]
}]
}]
}],
buttonBar1: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"470px"}, {}, {
txtSearchRole: ["wm.Text", {"caption":"Search Role :","captionAlign":"left","captionSize":"95px","dataValue":undefined,"displayValue":"","width":"250px"}, {}],
btnSearchRoleView: ["wm.Button", {"caption":"Search","margin":"4"}, {"onclick":"btnSearchRoleViewClick"}]
}],
btnSelectRole: ["wm.Button", {"caption":"Select","margin":"4"}, {"onclick":"btnSelectRoleClick"}],
btnCloseRole: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"btnCloseRoleClick"}]
}]
}],
ddUserID: ["wm.DesignableDialog", {"buttonBarId":"buttonBar2","containerWidgetId":"containerWidget2","title":"User List","width":"700px"}, {"onShow":"ddUserIDShow"}, {
containerWidget2: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
dgUserID: ["wm.DojoGrid", {"columns":[{"show":true,"field":"userid","title":"User ID","width":"12%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"entityid","title":"Entity ID","width":"13%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"password","title":"Password","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"username","title":"Username","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"firstname","title":"First Name","width":"25%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"middlename","title":"Middle Name","width":"25%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"lastname","title":"Last Name","width":"25%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"sstatus","title":"Sstatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"email","title":"Email","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"roleid","title":"Roleid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"startdate","title":"Startdate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"enddate","title":"Enddate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"deleted","title":"Deleted","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"userimgext","title":"Userimgext","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"pid","title":"Pid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"passwdenc","title":"Passwdenc","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"parentPerson","title":"ParentPerson","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"id","title":"Id","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"id.seqid","title":"Id.seqid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"id.juid","title":"Id.juid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>User ID: \" + ${userid} + \"</div>\"\n+ \"<div class='MobileRow'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>First Name: \" + ${firstname} + \"</div>\"\n+ \"<div class='MobileRow'>Middle Name: \" + ${middlename} + \"</div>\"\n+ \"<div class='MobileRow'>Last Name: \" + ${lastname} + \"</div>\"\n","mobileColumn":true}],"height":"100%","margin":"4"}, {"onCellDblClick":"dgUserIDCellDblClick","onClick":"dgUserIDClick","onSelect":"dgUserIDClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarUserID","targetProperty":"dataSet"}, {}]
}]
}]
}],
buttonBar2: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
panel2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
txtUserSearch: ["wm.Text", {"caption":"Search by User ID :","captionAlign":"left","captionSize":"135px","dataValue":undefined,"displayValue":"","width":"292px"}, {}],
btnUserSearch: ["wm.Button", {"caption":"Search","margin":"4"}, {"onclick":"btnUserSearchClick"}]
}],
btnSelectUser: ["wm.Button", {"caption":"Select","margin":"4"}, {"onclick":"btnSelectUserClick"}],
btnCloseUser: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"btnCloseUserClick"}]
}]
}],
pdAbout: ["wm.PageDialog", {"desktopHeight":"341px","height":"341px","noEscape":true,"noMaxify":true,"noMinify":true,"pageName":"PgAbout","width":"616px"}, {}],
ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar3","containerWidgetId":"containerWidget3","corner":"cr","modal":false,"title":"User / Role Assignment Help"}, {}, {
containerWidget3: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgMainUserAsgnRoles.html"}, {}]
}],
buttonBar3: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnClose1: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddPgMainConfigHelp.hide"}]
}]
}],
pnlLayoutMain: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"horizontalAlign":"left","verticalAlign":"top"}, {}, {
pnlHeader: ["wm.Panel", {"height":"45px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
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
Sep01: ["wm.Spacer", {"height":"24px","width":"5px"}, {}],
pic_back: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Back","source":"resources/images/buttons/arrowleft24.png","width":"24px"}, {"onclick":"pic_backClick"}]
}],
pnlMenuButtonRight: ["wm.Panel", {"height":"24px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
pic_help: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Help","source":"resources/images/buttons/helpred24.png","width":"24px"}, {"onclick":"ddPgMainConfigHelp.show"}],
pic_about: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"About","source":"resources/images/buttons/aboutblue24.png","width":"24px"}, {"onclick":"pdAbout.show"}]
}]
}],
spacer7: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
pnlInputFields: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
pnlView: ["wm.Panel", {"height":"62%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
pnlButtonHide: ["wm.Panel", {"height":"15%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
btnCloseRoleView: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Close","margin":"4"}, {"onclick":"btnCloseRoleViewClick"}]
}],
fpTitle: ["wm.FancyPanel", {"title":"Role Assignment ( Cross-Entity List )"}, {}, {
pnlSearch: ["wm.Panel", {"height":"12%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
txtSearchUser: ["wm.Text", {"caption":"Search by User ID : ","captionAlign":"left","captionSize":"130px","dataValue":undefined,"disabled":true,"displayValue":"","placeHolder":"User ID","width":"280px"}, {}],
btnUserId: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"..","desktopHeight":"28px","height":"28px","margin":"4","width":"30px"}, {"onclick":"btnUserIdClick"}],
btnSearchRole: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"..","margin":"4","showing":false,"width":"36px"}, {"onclick":"btnSearchRoleClick"}],
spacer6: ["wm.Spacer", {"height":"48px","width":"13px"}, {}],
txtSearchStatus: ["wm.SelectMenu", {"caption":"Select Status : ","captionAlign":"left","captionSize":"115px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","options":"ACTIVE,INACTIVE","showing":false}, {"onchange":"txtSearchStatusChange"}],
selEntity: ["wm.SelectMenu", {"caption":"Entity:","captionAlign":"left","captionSize":"55px","dataField":"entityid","dataType":"com.dbwaveerp.data.output.QryEntityViewRtnType","dataValue":undefined,"displayField":"entityid","displayValue":"","width":"160px"}, {"onchange":"selEntityChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarEntityID","targetProperty":"dataSet"}, {}]
}]
}]
}],
dgRoleAsgnID: ["wm.DojoGrid", {"columns":[{"show":false,"field":"seqid","title":"Seqid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"entityid","title":"Entity ID","width":"15%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"roleid","title":"Role ID","width":"15%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"userid","title":"User ID","width":"15%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"description","title":"Description","width":"55%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"sstatus","title":"Sstatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"isdefault","title":"Isdefault","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"juid","title":"Juid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Role ID: \" + ${roleid} + \"</div>\"\n+ \"<div class='MobileRow'>User ID: \" + ${userid} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n","mobileColumn":true}],"height":"91%","margin":"4"}, {"onClick":"dgRoleAsgnIDClick","onSelect":"dgRoleAsgnIDClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarRoleAsgnID","targetProperty":"dataSet"}, {}]
}]
}]
}]
}],
spacer1: ["wm.Spacer", {"height":"5%","width":"96px"}, {}],
pnlEntityId: ["wm.Panel", {"height":"6%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spacer2: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
txtEntityId: ["wm.Text", {"caption":"Entity ID : ","captionAlign":"left","captionSize":"127px","dataValue":undefined,"disabled":true,"displayValue":"","readonly":true,"width":"254px"}, {}],
btnEntityId: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"..","margin":"4","showing":false,"width":"35px"}, {"onclick":"btnEntityIdClick"}]
}],
pnlUserId: ["wm.Panel", {"height":"6%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spacer4: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
txtUserId: ["wm.Text", {"caption":"User ID : ","captionAlign":"left","captionSize":"127px","dataValue":undefined,"displayValue":"","readonly":true,"width":"280px"}, {}]
}],
pnlRoleId: ["wm.Panel", {"height":"6%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spacer3: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
txtRoleId: ["wm.Text", {"caption":"Role ID : ","captionAlign":"left","captionSize":"127px","dataValue":undefined,"displayValue":"","readonly":true,"width":"280px"}, {}],
btnRoleId: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"..","desktopHeight":"28px","height":"28px","margin":"4","width":"30px"}, {"onclick":"btnRoleIdClick"}]
}],
pnlDescription: ["wm.Panel", {"height":"6%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spacer5: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
txtDesc: ["wm.Text", {"caption":"Description : ","captionAlign":"left","captionSize":"127px","dataValue":undefined,"displayValue":"","readonly":true,"width":"400px"}, {}],
pnlStatus: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"235px"}, {}, {
txtStatus: ["wm.SelectMenu", {"caption":"Status : ","captionAlign":"left","captionSize":"60px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","options":"ACTIVE,INACTIVE","width":"200px"}, {}]
}]
}],
pnlSaveButton: ["wm.Panel", {"height":"9%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spacer9: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
btnSave: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Save","margin":"4"}, {"onclick":"btnSaveClick"}],
btnCancel: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Cancel","margin":"4"}, {"onclick":"btnCancelClick"}]
}],
pnlButtons: ["wm.Panel", {"height":"9%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
pnlCrud: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"717px"}, {}, {
spacer10: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
btnAdd: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Add","margin":"4","width":"120px"}, {"onclick":"btnAddClick"}],
btnEdit: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Edit","margin":"4","width":"120px"}, {"onclick":"btnEditClick"}],
btnDelete: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Delete","margin":"4","width":"120px"}, {"onclick":"btnDeleteClick"}],
btnView: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"View Role","margin":"4","width":"120px"}, {"onclick":"btnViewClick"}],
btnExit: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Close","margin":"4","width":"120px"}, {"onclick":"navPgMainUser"}]
}]
}]
}]
}],
pnlFooter: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundChromeBar_LightBlue","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"20px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
lblFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"...","height":"20px","padding":"4","styles":{"backgroundGradient":{"direction":"horizontal","startColor":"#03036d","endColor":"#d8cbf2","colorStop":31}},"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}]
};

PgMainUserAsgnRoles.prototype._cssText = 'body.tundra .PgMainUserAsgnRoles .wmlayout .PgMainUserAsgnRoles-pnlHeader {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainUserAsgnRoles .wmlayout .PgMainUserAsgnRoles-pnlTitle {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainUserAsgnRoles .wmlayout .PgMainUserAsgnRoles-lblTitle {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:14pt;\
}\
body.tundra .PgMainUserAsgnRoles .wmlayout .PgMainUserAsgnRoles-pnlMenuBar {\
background-color:#00008B;\
}\
body.tundra .PgMainUserAsgnRoles .wmlayout .PgMainUserAsgnRoles-pnlFooter {\
background-color:#00008B;\
}\
body.tundra .PgMainUserAsgnRoles .PgMainUserAsgnRoles-pnlLayoutMain.wmlayout {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainUserAsgnRoles .wmlayout .PgMainUserAsgnRoles-pnlInputFields {\
}\
body.tundra .PgMainUserAsgnRoles .wmlayout .PgMainUserAsgnRoles-pnlBody {\
background-color:#FFFFFF;\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:10pt;\
font-weight:bold;\
}\
';
PgMainUserAsgnRoles.prototype._htmlText = '';