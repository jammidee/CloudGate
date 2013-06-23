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
dojo.declare("PgRightAsgn", wm.Page, {
"preferredDevice": "desktop",
start: function() {
try {
this.lblTitle.setCaption("User : Assign Rights");
app.varModuleId.setValue("dataValue","MDLRIGHTASGN");
this.txtSearchStatus.setValue("dataValue","ACTIVE");
this.txtRoleIDSearch.setValue("dataValue", "");
// Initialize the application - Jammi Dee 03/25/2012
this.initApplication();
//Added by Jammi Dee 10/13/2012
this.btnRightId.setShowing(false);
this.pnlSaveButton.setShowing(false);
var rights;
for (i = 0; i < app.varArrayRights.getCount(); i++) {
rights = app.varArrayRights.getItem(i).getValue("dataValue");
this.checkRights(rights);
}
//this.txtRoleId.setValue("dataValue","");
//this.txtRightId.setValue("dataValue","");
//Added  by Jammi Dee 10/29/2012
//Retrieve all the data for Entity.
this.svarEntityID.update();
this.txtRoleIDSearch.setValue("dataValue",  "SADMIN" + "-" + "NONE");
this.selEntity.setValue("dataValue",        app.varEntity.getValue("dataValue") );
//Added by Jammi Dee 11/25/2012
app.svarUpdateSessionApp.setValue("input.pJuid",app.varSessionId.getValue("dataValue"));
app.svarUpdateSessionApp.update();
// Added by Jammi Dee 05/06/2012
app.svarLogging.setValue("input.pUserId",       app.varUserId.getValue("dataValue"));
app.svarLogging.setValue("input.pMsg",          "Manage rights assignment.");
app.svarLogging.setValue("input.pModuleId",     "MANAGEUSER");
app.svarLogging.setValue("input.pAppId",        app.varAppId.getValue("dataValue"));
app.svarLogging.setValue("input.pProcess",      "PAGELOAD");
app.svarLogging.setValue("input.pScopeId",      "NA");
app.svarLogging.setValue("input.pStype",        "USER");
app.svarLogging.setValue("input.pEntity",       app.varEntity.getValue("dataValue"));
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
this.lblTitle.setCaption("Assign Rights : " + app.varAppName.getValue("dataValue") + " : " + app.varAppVersion.getValue("dataValue"));
this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
},
checkRights: function(rights) {
var appid = app.varAppId.getValue("dataValue");
var rightid = rights;
switch (rightid){
case "MGTASGNRIGHTSSTATUS" + "|" + appid:
this.txtSearchStatus.setShowing(true);
break;
case "MGTASGNRIGHTSADD" + "|" + appid:
this.btnAdd.setShowing(true);
break;
case "MGTASGNRIGHTSEDIT" + "|" + appid:
this.btnEdit.setShowing(true);
break;
case "MGTASGNRIGHTSDELETE" + "|" + appid:
this.btnDelete.setShowing(true);
break;
default:break;
}
},
updateDgRightAsgnID: function() {
this.svarRightAsgnID.update();
this.dgRightAsgnID.dataSet.update();
},
convertDateToSqlDateFormat: function(stringdate) {
var currdate        = new Date(stringdate);
var currmonth       = currdate.getMonth() + 1;
var currday         = currdate.getDate();
var curryear        = currdate.getFullYear();
var sqlDateFormat   = curryear + "-" + currmonth + "-" + currday;
return sqlDateFormat;
},
editButtonEnable: function() {
//this.btnEntityId.setValue("showing", true);
//this.btnRoleId.setValue("showing", true);
//this.btnRightId.setValue("showing", true);
this.txtEntityId.setValue("readonly",   false);
this.txtRoleId.setValue("readonly",     false);
this.txtRightId.setValue("readonly",    false);
this.txtDesc.setValue("readonly",       false);
this.txtEntityId.setValue("disabled",   true);
this.txtRoleId.setValue("disabled",     true);
this.txtRightId.setValue("disabled",    true);
this.pnlStatus.setValue("showing",      true);
},
createButtonEnable: function() {
var roleid = this.txtRoleIDSearch.getValue("dataValue").split("-");
//this.btnEntityId.setValue("showing", true);
//this.btnRoleId.setValue("showing", true);
this.btnRightId.setValue("showing", true);
this.txtEntityId.setValue("dataValue",  app.varEntity.getValue("dataValue"));
this.txtRoleId.setValue("dataValue",    roleid[0]);
this.txtRightId.setValue("dataValue",   "");
this.txtDesc.setValue("dataValue",      "");
this.txtEntityId.setValue("readonly",   false);
this.txtRoleId.setValue("readonly",     false);
this.txtRightId.setValue("readonly",    false);
this.txtDesc.setValue("readonly",       false);
this.txtEntityId.setValue("disabled",   true);
this.txtRoleId.setValue("disabled",     true);
this.txtRightId.setValue("disabled",    true);
},
createButtonDisable: function() {
var roleid = this.txtRoleIDSearch.getValue("dataValue").split("-");
this.btnEntityId.setValue("showing",    false);
this.btnRoleId.setValue("showing",      false);
this.btnRightId.setValue("showing",     false);
this.txtEntityId.setValue("dataValue",  this.dgRightAsgnID.getRow(0).entityid);
this.txtRoleId.setValue("dataValue",    roleid[0]);
this.txtRightId.setValue("dataValue",   this.dgRightAsgnID.getRow(0).rightid);
this.txtDesc.setValue("dataValue",      this.dgRightAsgnID.getRow(0).description);
this.txtStatus.setValue("dataValue",    this.dgRightAsgnID.getRow(0).sstatus);
this.txtEntityId.setValue("readonly",   true);
this.txtRoleId.setValue("readonly",     true);
this.txtRightId.setValue("readonly",    true);
this.txtDesc.setValue("readonly",       true);
this.txtRightId.setValue("disabled",    false);
this.pnlStatus.setValue("showing",      false);
},
rightAsgnViewSelect: function() {
var roleid = this.txtRoleIDSearch.getValue("dataValue").split("-");
this.txtEntityId.setValue("dataValue",  this.dgRightAsgnID.selectedItem.getData().entityid);
this.txtRoleId.setValue("dataValue",    roleid[0]);
this.txtRightId.setValue("dataValue",   this.dgRightAsgnID.selectedItem.getData().rightid);
this.txtDesc.setValue("dataValue",      this.dgRightAsgnID.selectedItem.getData().description);
this.txtStatus.setValue("dataValue",    this.dgRightAsgnID.selectedItem.getData().sstatus);
this.varAppid.setValue("dataValue",     this.dgRightAsgnID.selectedItem.getData().appid);
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
this.pnlButtons.setValue("showing",     false);
this.pnlSaveButton.setValue("showing",  true);
this.createButtonEnable();
this.varFlag.setValue("dataValue",      "ADD");
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
var roleid   = this.txtRoleId.getValue("dataValue");
var rightid  = this.txtRightId.getValue("dataValue");
var appid    = this.varAppid.getValue("dataValue");
var sstatus  = this.txtStatus.getValue("dataValue");
//if (typeof rightid == 'undefined') {
//  alert(rightid);
//}
if (typeof rightid !== 'undefined') {
if (this.varFlag.getValue("dataValue") == "ADD") {
this.svarTblRightAsgn.setValue("input.pEntityId",   entityid);
this.svarTblRightAsgn.setValue("input.pRoleId",     roleid);
this.svarTblRightAsgn.setValue("input.pRightId",    rightid);
this.svarTblRightAsgn.update();
} else if (this.varFlag.getValue("dataValue") == "EDIT") {
var desc = this.txtDesc.getValue("dataValue");
var eQuery = "update tblrightasgn set description = '" + desc + "', "+
"sstatus = '" + sstatus + "', appid = '" + appid + "' "+
"where(entityid = '" + entityid + "' and "+
"roleid = '" + roleid + "' and rightid = '" + rightid + "');";
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
// alert("FAIL");
} else {
if(this.varFlag.getValue("dataValue") == "ADD"){
alert("Successfuly added");
}else if(this.varFlag.getValue("dataValue") == "EDIT"){
alert("Successfuly edited");
}else if(this.varFlag.getValue("dataValue") == "DELETE"){
alert("Successfuly deleted");
}
this.pnlButtons.setValue("showing", true);
this.pnlSaveButton.setValue("showing", false);
this.createButtonDisable();
this.updateDgRightAsgnID();
app.svarGetRole.setValue("input.pUserId",       app.varUserId.getValue("dataValue"));
app.svarGetRole.setValue("input.pEntityId",     app.varEntity.getValue("dataValue"));
app.svarGetRole.update();
}
} catch (e) {
console.error('ERROR IN svarExecGenericNonQueryResult: ' + e);
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
btnSearchClick: function(inSender) {
try {
var s;
if(this.txtSearch.getValue("dataValue") !== ""){
this.svarRightAsgnID.setValue("input.pRightId", this.txtSearch.getValue("dataValue"));
this.svarRightAsgnID.setValue("input.pRoleId", "%");
}else{
s = this.txtSearch.getValue("dataValue");
}
//alert(s);
//alert(this.txtSearch.getValue("dataValue"));
if(this.txtSearch.getValue("dataValue") == s){
this.svarRightAsgnID.setValue("input.pRightId", "%");
this.svarRightAsgnID.setValue("input.pRoleId", "%");
//this.svarTblUserView.getValue("dataValue");
}
this.svarRightAsgnID.update();
this.dgRightAsgnID.dataSet.update();
} catch (e) {
console.error('ERROR IN btnSearchClick: ' + e);
alert( 'ERROR IN btnSearchClick: ' + e );
}
},
svarRightAsgnIDResult: function(inSender, inDeprecated) {
try {
//this.txtEntityId.setValue("dataValue",  this.dgRightAsgnID.getRow(0).entityid);
//this.txtRoleId.setValue("dataValue",    this.dgRightAsgnID.getRow(0).roleid);
//this.txtRightId.setValue("dataValue",   this.dgRightAsgnID.getRow(0).rightid);
//this.txtDesc.setValue("dataValue",      this.dgRightAsgnID.getRow(0).description);
//this.txtStatus.setValue("dataValue",    this.dgRightAsgnID.getRow(0).sstatus);
//this.varAppid.setValue("dataValue",     this.dgRightAsgnID.getRow(0).appid);
} catch (e) {
console.error('ERROR IN svarRoleIDResult: ' + e);
alert( 'ERROR IN svarRoleIDResult: ' + e );
}
},
btnEditClick: function(inSender) {
try {
this.pnlButtons.setValue("showing",     false);
this.pnlSaveButton.setValue("showing",  true);
this.varFlag.setValue("dataValue",      "EDIT");
this.editButtonEnable();
} catch (e) {
console.error('ERROR IN btnEditClick: ' + e);
alert( 'ERROR IN btnEditClick: ' + e );
}
},
btnDeleteClick: function(inSender) {
try {
var entityid = this.txtEntityId.getValue("dataValue");
var roleid = this.txtRoleId.getValue("dataValue");
var rightid = this.txtRightId.getValue("dataValue");
var response = confirm("Are you sure you want to delete?");
if (response) {
var eQuery = "update tblrightasgn set sstatus = 'INACTIVE' "+
"where(entityid = '" + entityid + "' and "+
"roleid = '" + roleid + "' and rightid = '" + rightid + "');";
this.varQuery.setValue("dataValue", eQuery);
//alert(this.varQuery.getValue("dataValue"));
this.svarExecGenericNonQuery.setValue("input.eQuery", this.varQuery.getValue("dataValue"));
this.svarExecGenericNonQuery.update();
this.varFlag.setValue("dataValue","DELETE") ;
}
else{
//do nothing
}
} catch(e) {
console.error('ERROR IN btnDeleteClick: ' + e);
alert( 'ERROR IN btnDeleteClick: ' + e );
}
},
//Modified by Jammi Dee 08/13/2012
dgRightAsgnIDClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
this.rightAsgnViewSelect();
} catch(e) {
console.error('ERROR IN dgRoleAsgnIDClick: ' + e);
//alert( 'ERROR IN dgRoleAsgnIDClick: ' + e );
alert( 'No data selected.' );
}
},
//Added by Jammi Dee 10/13/2012
btnSearchRoleClick: function(inSender) {
try {
//Update the Role ID list, get all Roles
//for this ENTITY
this.svarRoleID.update();
this.dgRoleID.dataSet.update();
this.ddRoleID.setShowing(true);
this.vartest.setValue("dataValue","filter");
} catch(e) {
console.error('ERROR IN button1Click: ' + e);
alert( 'ERROR IN button1Click: ' + e );
}
},
btnCloseRoleClick: function(inSender) {
try {
this.ddRoleID.setShowing(false);
this.svarRoleID.setValue("input.pRoleId", "%");
} catch(e) {
console.error('ERROR IN btnCloseRoleClick: ' + e);
alert( 'ERROR IN btnCloseRoleClick: ' + e );
}
},
btnSelectRoleClick: function(inSender) {
try {
if(this.vartest.getValue("dataValue") == "filter"){
//alert(this.txtSelectStatus.getValue("dataValue"));
this.txtRoleIDSearch.setValue("dataValue",          this.varGridSelect.getValue("dataValue"));
this.svarRightAsgnID.setValue("input.pRightId", "%");
this.svarRightAsgnID.setValue("input.pRoleId",      this.txtRoleIDSearch.getValue("dataValue"));
this.svarRightAsgnID.setValue("input.pStatus",      this.txtSearchStatus.getValue("dataValue"));
this.svarRightAsgnID.setValue("input.pEntity",      this.selEntity.getValue("dataValue"));
this.svarRightAsgnID.update();
this.dgRightAsgnID.dataSet.update();
this.txtRoleIDSearch.setValue("dataValue",      this.varGridSelect.getValue("dataValue") + "-" + this.dgRoleID.selectedItem.getData().description);
this.varSrcRole.setValue("dataValue", this.dgRoleID.selectedItem.getData().roleid );
}else{
this.txtRoleId.setValue("dataValue", this.varGridSelect.getValue("dataValue"));
}
this.ddRoleID.setShowing(false);
this.svarRoleID.setValue("input.pRoleId", "%");
} catch(e) {
console.error('ERROR IN btnSelect1Click: ' + e);
alert( 'ERROR IN btnSelect1Click: ' + e );
}
},
btnCloseRightClick: function(inSender) {
try {
this.ddRightID.setShowing(false);
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
btnRightIdClick: function(inSender) {
try {
this.svarRightID.update();
this.dgRightID.dataSet.update();
this.ddRightID.setShowing(true);
} catch(e) {
console.error('ERROR IN btnRoleId1Click: ' + e);
alert( 'ERROR IN btnRoleId1Click: ' + e );
}
},
dgRightIDClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
this.varGridSelect.setValue("dataValue", this.dgRightID.selectedItem.getData().rightid);
} catch(e) {
console.error('ERROR IN dgRoleID1Click: ' + e);
}
},
btnSelectRightClick: function(inSender) {
try {
this.txtRightId.setValue("dataValue",     this.varGridSelect.getValue("dataValue"));
this.txtDesc.setValue("dataValue",        this.dgRightID.selectedItem.getData().description );
this.ddRightID.setShowing(false);
} catch(e) {
console.error('ERROR IN btnSelectRole1Click: ' + e);
alert( 'ERROR IN btnSelectRole1Click: ' + e );
}
},
svarTblRightAsgnResult: function(inSender, inDeprecated) {
try {
var entityid  = this.txtEntityId.getValue("dataValue");
var roleid    = this.txtRoleId.getValue("dataValue");
var rightid   = this.txtRightId.getValue("dataValue");
var desc      = this.txtDesc.getValue("dataValue");
var appid     = this.dgRightID.selectedItem.getData().appid;
if (inSender.getValue("dataValue") == "exists" || inSender.getValue("dataValue") === null) {
//alert(inSender.getValue("dataValue"));
alert("Data already exists");
} else {
var eQuery = "insert into tblrightasgn(entityid,roleid,rightid,description,appid)" +
"values (UCASE('" + entityid + "')," +
"UCASE('" + roleid + "')," +
"'" + rightid + "','" + desc + "','" + appid + "');";
this.varQuery.setValue("dataValue", eQuery);
//alert(this.varQuery.getValue("dataValue"));
this.svarExecGenericNonQuery.setValue("input.eQuery", this.varQuery.getValue("dataValue"));
this.svarExecGenericNonQuery.update();
}
} catch(e) {
console.error('ERROR IN svarTblRoleAsgnResult: ' + e);
alert( 'ERROR IN svarTblRoleAsgnResult: ' + e );
}
},
//Modified by Jammi Dee 10/29/2012
txtSearchStatusChange: function(inSender) {
try {
var result;
//alert( this.txtAppId.getValue("dataValue") );
if(this.txtRoleIDSearch.getValue("dataValue") === ''){
alert("You must select a Role ID first");
}else{
if( this.txtRoleIDSearch.getValue("dataValue").split("-") === undefined ){
result = "SADMIN";
} else {
result = this.txtRoleIDSearch.getValue("dataValue").split("-");
}
this.svarRightAsgnID.setValue("input.pStatus",    this.txtSearchStatus.getValue("dataValue"));
this.svarRightAsgnID.setValue("input.pEntity",    this.selEntity.getValue("dataValue"));
this.svarRightAsgnID.setValue("input.pAppId",     this.txtAppId.getValue("dataValue"));
this.svarRightAsgnID.setValue("input.pRightId",   "%");
this.svarRightAsgnID.setValue("input.pRoleId",    result[0]);
this.svarRightAsgnID.update();
}
} catch(e) {
console.error('ERROR IN txtSelectStatusChange: ' + e);
//alert( 'ERROR IN txtSelectStatusChange: ' + e );
}
},
//Added by Jammi Dee 10/29/2012
selEntityChange: function(inSender) {
try {
var result;
result = this.txtRoleIDSearch.getValue("dataValue").split("-");
this.svarRightAsgnID.setValue("input.pStatus",    this.txtSearchStatus.getValue("dataValue"));
this.svarRightAsgnID.setValue("input.pEntity",    this.selEntity.getValue("dataValue"));
this.svarRightAsgnID.setValue("input.pRightId",   "%");
this.svarRightAsgnID.setValue("input.pRoleId",    result[0]);
this.svarRightAsgnID.update();
} catch(e) {
console.error('ERROR IN selEntityChange: ' + e);
alert( 'ERROR IN selEntityChange: ' + e );
}
},
btnSearchRightClick: function(inSender) {
try {
var s = "";
/*if(typeof this.txtSearchRight.getValue("dataValue") !== 'undefined'){
this.svarRightID.setValue("input.pRightId",this.txtSearchRight.getValue("dataValue"));
}else{
s = this.txtSearchRight.getValue("dataValue");
}
//alert(s);
//alert(this.txtSearch.getValue("dataValue"));
if(this.txtSearchRight.getValue("dataValue") == s){
this.svarRightID.setValue("input.pRightId","%");
//this.svarRoleAsgnID.getValue("dataValue");
}
this.svarRightID.update();*/
if(typeof this.txtSearchRight.getValue("dataValue") !== "undefined" && typeof this.txtSearchAppId.getValue("dataValue") == "undefined"){
this.svarRightID.setValue("input.pRightId", this.txtSearchRight.getValue("dataValue"));
this.svarRightID.setValue("input.pAppId", "%");
}else if(typeof this.txtSearchAppId.getValue("dataValue") !== "undefined" && typeof this.txtSearchRight.getValue("dataValue") == "undefined"){
this.svarRightID.setValue("input.pAppId", this.txtSearchAppId.getValue("dataValue"));
this.svarRightID.setValue("input.pRightId", "%");
}else if(typeof this.txtSearchAppId.getValue("dataValue") !== "undefined" && typeof this.txtSearchRight.getValue("dataValue") !== "undefined"){
this.svarRightID.setValue("input.pAppId", this.txtSearchAppId.getValue("dataValue"));
this.svarRightID.setValue("input.pRightId", this.txtSearchRight.getValue("dataValue"));
}else{
//s = this.txtSearch.getValue("dataValue");
this.svarRightID.setValue("input.pRightId", "%");
this.svarRightID.setValue("input.pAppId", "%");
}
//if(this.txtSearch.getValue("dataValue") == s){
//      this.svarRightID.setValue("input.pRightId", "%");
//     this.svarRightID.setValue("input.pAppId", "%");
//   this.svarTblUserView.getValue("dataValue");
//}
this.svarRightID.update();
//this.dgRightsID.dataSet.update();
} catch(e) {
console.error('ERROR IN btnSearchRightClick: ' + e);
alert( 'ERROR IN btnSearchRightClick: ' + e );
}
},
btnRoleSearchClick: function(inSender) {
try {
var s = "";
if(typeof this.txtRoleSearch.getValue("dataValue") !== 'undefined'){
this.svarRoleID.setValue("input.pRoleId",this.txtRoleSearch.getValue("dataValue"));
}else{
s = this.txtRoleSearch.getValue("dataValue");
}
//alert(s);
//alert(this.txtSearch.getValue("dataValue"));
if(this.txtRoleSearch.getValue("dataValue") == s){
this.svarRoleID.setValue("input.pRoleId","%");
}
this.svarRoleID.update();
} catch(e) {
console.error('ERROR IN btnRoleSearchClick: ' + e);
alert( 'ERROR IN btnRoleSearchClick: ' + e );
}
},
//Added by Jammi Dee 08/13/2012
dgRightAsgnIDCellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
this.rightAsgnViewSelect();
} catch(e) {
console.error('ERROR IN dgRightAsgnIDCellDblClick: ' + e);
alert( 'ERROR IN dgRightAsgnIDCellDblClick: ' + e );
}
},
//Added by Jammi Dee 08/21/2012
btnCopyRightsClick: function(inSender) {
try {
this.ldLoading.show();
this.ddCopyRights.show();
} catch(e) {
console.error('ERROR IN btnCopyRightsClick: ' + e);
alert( 'ERROR IN btnCopyRightsClick: ' + e );
}
},
//Added by Jammi Dee 08/21/2012
ddCopyRightsShow: function(inSender) {
try {
this.svarDestRole.setValue("input.pEntityId", app.varEntity.getValue("dataValue") );
this.svarDestRole.setValue("input.pStatus",   "ACTIVE" );
this.svarDestRole.setValue("input.pRoleId",   "%" );
this.svarDestRole.update();
} catch(e) {
console.error('ERROR IN ddCopyRightsShow: ' + e);
alert( 'ERROR IN ddCopyRightsShow: ' + e );
}
},
//Added by Jammi Dee 08/21/2012
btnDestRoleSelectClick: function(inSender) {
try {
//this.svarRightAsgnSource.setValue("input.pRightId",  "%");
//this.svarRightAsgnSource.setValue("input.pRoleId",   this.varGridSelect.getValue("dataValue"));
//this.svarRightAsgnSource.setValue("input.pStatus",   "ACTIVE");
//this.svarRightAsgnSource.update();
//alert( this.varSrcRole.getValue("dataValue") + "|" + this.dgDestRole.selectedItem.getData().roleid );
this.svarRightAsgnCopy.setValue("input.pSrcRole",      this.varSrcRole.getValue("dataValue") );
this.svarRightAsgnCopy.setValue("input.pDstRole",      this.dgDestRole.selectedItem.getData().roleid );
this.svarRightAsgnCopy.setValue("input.pEntityId",     app.varEntity.getValue("dataValue") );
this.svarRightAsgnCopy.update();
} catch(e) {
console.error('ERROR IN btnDestRoleSelectClick: ' + e);
alert( 'ERROR IN btnDestRoleSelectClick: ' + e );
}
},
//Added by Jammi Dee 10/12/2012
svarRightAsgnCopyResult: function(inSender, inDeprecated) {
try {
this.ldLoading.hide();
this.ddCopyRights.hide();
alert( "Rights has been successfully copied." );
} catch(e) {
console.error('ERROR IN svarRightAsgnCopyResult: ' + e);
alert( 'ERROR IN svarRightAsgnCopyResult: ' + e );
}
},
//Added by Jammi Dee 08/21/2012
svarRightAsgnSourceResult: function(inSender, inDeprecated) {
try {
//Loop and copy all the rights here
var count = inSender.getCount();
var strEntity = app.varEntity.getValue("dataValue");
var strRole   = this.dgDestRole.selectedItem.getData().roleid;
var strAppId  = app.varAppId.getValue("dataValue");
var strStatus = "ACTIVE";
if( count > 0 ){
for (var i = 0; i < count; i++) {
var aRow = inSender.getItem(i);
var strRightID  = aRow.data.rightid;
var strDesc     = aRow.data.description;
var eQuery = "insert into tblrightasgn(entityid, roleid, rightid, description, sstatus, appid)" +
"values (UCASE('" + strEntity + "')," +
"UCASE('" + strRole + "')," + "'" +
strRightID + "','" +
strDesc + "','" +
strStatus + "','" +
strAppId + "');";
this.svarExecGenericSQL.setValue("input.eQuery", eQuery );
this.svarExecGenericSQL.update();
alert( eQuery );
}
this.ddCopyRights.hide();
} else {
alert("No rights to process.");
}
} catch(e) {
console.error('ERROR IN svarRightAsgnSourceResult: ' + e);
alert( 'ERROR IN svarRightAsgnSourceResult: ' + e );
}
},
//Added by Jammi Dee 08/21/2012
btnDeleteAllClick: function(inSender) {
try {
this.ldLoading.show();
var strEntity = app.varEntity.getValue("dataValue");
var strRole   = this.varSrcRole.getValue("dataValue");
var strAppId  = app.varAppId.getValue("dataValue");
var response = confirm("Delete: Are you sure to delete assigned rights for this Role?");
if (response) {
var eQuery = "delete from tblrightasgn where entityid ='" + strEntity + "' and roleid = '" + strRole + "' ;";
this.svarExecGenericSQL.setValue("input.eQuery", eQuery );
this.svarExecGenericSQL.update();
}
this.svarRightAsgnID.setValue("input.pRightId", "%");
this.svarRightAsgnID.setValue("input.pRoleId",  this.varSrcRole.getValue("dataValue"));
this.svarRightAsgnID.setValue("input.pStatus",  this.txtSearchStatus.getValue("dataValue"));
this.svarRightAsgnID.update();
this.dgRightAsgnID.dataSet.update();
this.ldLoading.hide();
} catch(e) {
console.error('ERROR IN btnDeleteAllClick: ' + e);
alert( 'ERROR IN btnDeleteAllClick: ' + e );
}
},
//Added by Jammi Dee 05/05/2013
pic_backClick: function(inSender) {
try {
app.pdWaitLoadPage.show();
this.navManageUser.update();
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
_end: 0
});

PgRightAsgn.widgets = {
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
svarRoleID: ["wm.ServiceVariable", {"operation":"qryRoleView","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryRoleViewInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"%\"","targetProperty":"pRoleId"}, {}],
wire1: ["wm.Wire", {"expression":false,"source":"app.varEntity.dataValue","targetProperty":"pEntityId"}, {}],
wire2: ["wm.Wire", {"expression":"\"ACTIVE\"","targetProperty":"pStatus"}, {}]
}]
}]
}],
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
wire1: ["wm.Wire", {"expression":"\"%\"","targetProperty":"pRightId"}, {}],
wire2: ["wm.Wire", {"expression":false,"source":"app.varEntity.dataValue","targetProperty":"pEntityId"}, {}],
wire3: ["wm.Wire", {"expression":"\"ACTIVE\"","targetProperty":"pStatus"}, {}],
wire4: ["wm.Wire", {"expression":"\"%\"","targetProperty":"pAppId"}, {}]
}]
}]
}],
svarTblRightAsgn: ["wm.ServiceVariable", {"operation":"checkRightAsgnExist","service":"svcExecQueryTksUsrMgt"}, {"onResult":"svarTblRightAsgnResult"}, {
input: ["wm.ServiceInput", {"type":"checkRightAsgnExistInputs"}, {}]
}],
vartest: ["wm.Variable", {"type":"StringData"}, {}],
varAppid: ["wm.Variable", {"type":"StringData"}, {}],
navPgMain: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMain\"","targetProperty":"pageName"}, {}]
}]
}]
}],
svarDestRole: ["wm.ServiceVariable", {"operation":"qryRoleView","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryRoleViewInputs"}, {}]
}],
svarExecGenericSQL: ["wm.ServiceVariable", {"operation":"execNonQuery","service":"svcExecGenericNonQuery"}, {}, {
input: ["wm.ServiceInput", {"type":"execNonQueryInputs"}, {}]
}],
svarRightAsgnSource: ["wm.ServiceVariable", {"operation":"qryRightAsgnView","service":"dbwaveerp"}, {"onResult":"svarRightAsgnSourceResult"}, {
input: ["wm.ServiceInput", {"type":"qryRightAsgnViewInputs"}, {}]
}],
svarRightAsgnCopy: ["wm.ServiceVariable", {"operation":"copyRoleRights","service":"svcUserFunctions"}, {"onResult":"svarRightAsgnCopyResult"}, {
input: ["wm.ServiceInput", {"type":"copyRoleRightsInputs"}, {}]
}],
varSrcRole: ["wm.Variable", {"type":"StringData"}, {}],
varDstRole: ["wm.Variable", {"type":"StringData"}, {}],
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
ddRoleID: ["wm.DesignableDialog", {"buttonBarId":"buttonBar1","containerWidgetId":"containerWidget1","title":"Role List"}, {}, {
containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
dgRoleID: ["wm.DojoGrid", {"columns":[{"show":false,"field":"seqid","title":"Seqid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"entityid","title":"Entity ID","width":"20%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"roleid","title":"Role ID","width":"20%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"shortdesc","title":"Shortdesc","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"description","title":"Description","width":"60%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"sstatus","title":"Sstatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"startdate","title":"Startdate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"enddate","title":"Enddate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"juid","title":"Juid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Role ID: \" + ${roleid} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n","mobileColumn":true}],"height":"100%","margin":"4"}, {"onClick":"dgRoleIDClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarRoleID","targetProperty":"dataSet"}, {}]
}]
}]
}],
buttonBar1: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
panel2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"472px"}, {}, {
txtRoleSearch: ["wm.Text", {"caption":"Search Role :","captionAlign":"left","dataValue":undefined,"displayValue":"","width":"272px"}, {}],
btnRoleSearch: ["wm.Button", {"caption":"Search","margin":"4"}, {"onclick":"btnRoleSearchClick"}]
}],
btnSelectRole: ["wm.Button", {"caption":"Select","margin":"4"}, {"onclick":"btnSelectRoleClick"}],
btnCloseRole: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"btnCloseRoleClick"}]
}]
}],
ddRightID: ["wm.DesignableDialog", {"buttonBarId":"buttonBar2","containerWidgetId":"containerWidget2","title":"Right List","width":"1000px"}, {}, {
containerWidget2: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
dgRightID: ["wm.DojoGrid", {"columns":[{"show":false,"title":"Seqid","width":"100px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"seqid"},{"show":true,"title":"Entity ID","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":false,"title":"Sstatus","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"show":true,"title":"Right ID","width":"240px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"rightid"},{"show":true,"title":"Application ID","width":"240px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"appid"},{"show":true,"title":"Description","width":"400px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"description"},{"show":false,"title":"Juid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"juid"},{"isCustomField":true,"expression":"","show":true,"width":"100%","title":"...","field":"customField"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Right ID: \" + ${rightid} + \"</div>\"\n+ \"<div class='MobileRow'>Application ID: \" + ${appid} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n+ \"<div class='MobileRow'>...: \" + ${customField} + \"</div>\"\n"}],"height":"100%","margin":"4"}, {"onClick":"dgRightIDClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarRightID","targetProperty":"dataSet"}, {}]
}]
}]
}],
buttonBar2: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"644px"}, {}, {
txtSearchRight: ["wm.Text", {"caption":"Search Rights :","captionAlign":"left","captionSize":"111px","dataValue":undefined,"displayValue":"","width":"276px"}, {}],
txtSearchAppId: ["wm.Text", {"caption":"Search Application Id :","captionSize":"160px","dataValue":undefined,"displayValue":"","width":"290px"}, {}],
btnSearchRight: ["wm.Button", {"caption":"Search","margin":"4"}, {"onclick":"btnSearchRightClick"}]
}],
btnSelectRight: ["wm.Button", {"caption":"Select","margin":"4"}, {"onclick":"btnSelectRightClick"}],
btnCloseRight: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"btnCloseRightClick"}]
}]
}],
pdAbout: ["wm.PageDialog", {"desktopHeight":"341px","height":"341px","noEscape":true,"noMaxify":true,"noMinify":true,"pageName":"PgAbout","width":"616px"}, {}],
ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar3","containerWidgetId":"containerWidget3","corner":"cr","modal":false,"title":" Assign Rights to Role Help"}, {}, {
containerWidget3: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgRightAsgn.html"}, {}]
}],
buttonBar3: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnClose1: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddPgMainConfigHelp.hide"}]
}]
}],
ddCopyRights: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget4","title":"Select Destination Role"}, {"onShow":"ddCopyRightsShow"}, {
containerWidget4: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
dgDestRole: ["wm.DojoGrid", {"columns":[{"show":false,"title":"Seqid","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"seqid"},{"show":false,"title":"Juid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"juid"},{"show":true,"title":"Entity ID","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":true,"title":"Role ID","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"roleid"},{"show":false,"title":"Shortdesc","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"shortdesc"},{"show":true,"title":"Description","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"description"},{"show":true,"title":"Status","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"show":false,"title":"Startdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"startdate"},{"show":false,"title":"Enddate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"enddate"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Role ID: \" + ${roleid} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n+ \"<div class='MobileRow'>Status: \" + ${sstatus} + \"</div>\"\n"}],"height":"100%","margin":"4"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarDestRole","targetProperty":"dataSet"}, {}]
}]
}]
}],
buttonBar4: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnDestRoleSelect: ["wm.Button", {"caption":"Select","margin":"4"}, {"onclick":"btnDestRoleSelectClick"}],
btnDestRoleCancel: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"ddCopyRights.hide"}]
}]
}],
ldLoading: ["wm.LoadingDialog", {}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"pnlInputFields","targetProperty":"widgetToCover"}, {}]
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
pic_home: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Home","source":"resources/images/buttons/home0224.png","width":"24px"}, {"onclick":"pic_homeClick"}],
Sep01: ["wm.Spacer", {"height":"24px","width":"5px"}, {}],
pic_back: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Back","source":"resources/images/buttons/arrowleft24.png","width":"24px"}, {"onclick":"pic_backClick"}]
}],
pnlMenuButtonRight: ["wm.Panel", {"height":"24px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
pic_help: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Help","source":"resources/images/buttons/helpred24.png","width":"24px"}, {"onclick":"ddPgMainConfigHelp.show"}],
pic_about: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"About","source":"resources/images/buttons/aboutblue24.png","width":"24px"}, {"onclick":"pdAbout.show"}]
}]
}],
spacer6: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
pnlInputFields: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
pnlView: ["wm.Panel", {"height":"62%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
pnlButtonHide: ["wm.Panel", {"height":"15%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
btnCloseRoleView: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Close","margin":"4"}, {"onclick":"btnCloseRoleViewClick"}]
}],
pnlSearch: ["wm.Panel", {"height":"12%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
txtSearch: ["wm.Text", {"caption":"Search by Right ID : ","captionAlign":"left","captionSize":"135px","dataValue":undefined,"displayValue":"","placeHolder":"Right ID","showing":false,"width":"324px"}, {}],
btnSearch: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Search","margin":"4","showing":false}, {"onclick":"btnSearchClick"}],
pnlRoleSearch: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
txtRoleIDSearch: ["wm.Text", {"caption":"Select Role ID :","captionAlign":"left","captionSize":"105px","dataValue":undefined,"disabled":true,"displayValue":"","placeHolder":"Select Role ID","width":"250px"}, {}],
btnSearchRole: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"..","margin":"4","width":"30px"}, {"onclick":"btnSearchRoleClick"}],
txtSearchStatus: ["wm.SelectMenu", {"caption":"Status : ","captionAlign":"left","captionSize":"55px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","options":"ACTIVE,INACTIVE,%","width":"160px"}, {"onchange":"txtSearchStatusChange"}],
txtAppId: ["wm.Text", {"caption":"App ID:","captionAlign":"left","captionSize":"55px","dataValue":"%","displayValue":"%","width":"160px"}, {}],
selEntity: ["wm.SelectMenu", {"caption":"Entity:","captionAlign":"left","captionSize":"55px","dataField":"entityid","dataType":"com.dbwaveerp.data.output.QryEntityViewRtnType","dataValue":undefined,"displayField":"entityid","displayValue":"","width":"160px"}, {"onchange":"selEntityChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarEntityID","targetProperty":"dataSet"}, {}]
}]
}],
btnCopyRights: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Copy Rights","margin":"4","width":"120px"}, {"onclick":"btnCopyRightsClick"}],
btnDeleteAll: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Delete All","margin":"4","width":"120px"}, {"onclick":"btnDeleteAllClick"}]
}]
}],
fpTitle: ["wm.FancyPanel", {"title":"Right Assign List"}, {}, {
dgRightAsgnID: ["wm.DojoGrid", {"border":"2","borderColor":"#ffffff","columns":[{"show":false,"field":"seqid","title":"Seqid","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"customField","title":"..","width":"15px","editorProps":{"restrictValues":true},"expression":"if (${sstatus}==\"ACTIVE\"){    '<img src =\"resources/images/buttons/grid-green-icon.png\"/>'    } else {    '<img src =\"resources/images/buttons/grid-red-icon.png\"/>'    }","isCustomField":true,"mobileColumn":false},{"show":true,"field":"entityid","title":"Entity ID","width":"120px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"roleid","title":"Role ID","width":"120px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"appid","title":"Application","width":"140px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"rightid","title":"Right ID","width":"240px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"description","title":"Description","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"sstatus","title":"Sstatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"juid","title":"Juid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Role ID: \" + ${roleid} + \"</div>\"\n+ \"<div class='MobileRow'>Application: \" + ${appid} + \"</div>\"\n+ \"<div class='MobileRow'>Right ID: \" + ${rightid} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n","mobileColumn":true}],"height":"100%","margin":"0"}, {"onCellDblClick":"dgRightAsgnIDCellDblClick","onClick":"dgRightAsgnIDClick","onSelect":"dgRightAsgnIDClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarRightAsgnID","targetProperty":"dataSet"}, {}]
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
pnlRoleId: ["wm.Panel", {"height":"6%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spacer3: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
txtRoleId: ["wm.Text", {"caption":"Role ID : ","captionAlign":"left","captionSize":"127px","dataValue":undefined,"displayValue":"","readonly":true,"width":"280px"}, {}],
btnRoleId: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"..","margin":"4","showing":false,"width":"35px"}, {"onclick":"btnRoleIdClick"}]
}],
pnlUserId: ["wm.Panel", {"height":"6%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spacer4: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
txtRightId: ["wm.Text", {"caption":"Right ID : ","captionAlign":"left","captionSize":"127px","dataValue":undefined,"displayValue":"","readonly":true,"width":"340px"}, {}],
btnRightId: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"..","margin":"4","width":"35px"}, {"onclick":"btnRightIdClick"}]
}],
pnlDescription: ["wm.Panel", {"height":"6%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spacer5: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
txtDesc: ["wm.Text", {"caption":"Description : ","captionAlign":"left","captionSize":"127px","dataValue":undefined,"displayValue":"","readonly":true,"width":"466px"}, {}],
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
pnlCrud: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"656px"}, {}, {
spacer10: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
btnAdd: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Create","margin":"4","width":"120px"}, {"onclick":"btnAddClick"}],
btnEdit: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Edit","margin":"4","width":"120px"}, {"onclick":"btnEditClick"}],
btnDelete: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Delete","margin":"4","width":"120px"}, {"onclick":"btnDeleteClick"}],
btnView: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"View Role","margin":"4","width":"120px"}, {"onclick":"btnViewClick"}],
btnExit: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Close","margin":"4","width":"120px"}, {"onclick":"navManageUser"}]
}]
}]
}]
}],
pnlFooter: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundChromeBar_LightBlue","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundGradient":{"direction":"horizontal","startColor":"#03036d","endColor":"#d8cbf2","colorStop":31}},"verticalAlign":"top","width":"100%"}, {}, {
lblFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"...","height":"20px","padding":"4","styles":{"backgroundGradient":{"direction":"horizontal","startColor":"#03036d","endColor":"#d8cbf2","colorStop":31}},"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}]
};

PgRightAsgn.prototype._cssText = 'body.tundra .PgRoleAsgn .wmlayout .PgRightAsgn-pnlHeader {\
background-color:#FFFFFF;\
}\
body.tundra .PgRightAsgn .wmlayout .PgRightAsgn-pnlTitle {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgRightAsgn .wmlayout .PgRightAsgn-lblTitle {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:14pt;\
}\
body.tundra .PgRightAsgn .wmlayout .PgRightAsgn-pnlMenuBar {\
background-color:#00008B;\
}\
body.tundra .PgRightAsgn .wmlayout .PgRightAsgn-pnlFooter {\
background-color:#00008B;\
}\
body.tundra .PgRightAsgn .PgRightAsgn-pnlLayoutMain.wmlayout {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgRightAsgn .wmlayout .PgRightAsgn-pnlInputFields {\
}\
body.tundra .PgRightAsgn .wmlayout .PgRightAsgn-pnlBody {\
background-color:#FFFFFF;\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:10pt;\
font-weight:bold;\
}\
body.tundra .PgRightAsgn .wmlayout .PgRightAsgn-pnlHeader {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
';
PgRightAsgn.prototype._htmlText = '';