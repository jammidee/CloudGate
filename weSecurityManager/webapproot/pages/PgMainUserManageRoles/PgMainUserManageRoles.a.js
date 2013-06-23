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
dojo.declare("PgMainUserManageRoles", wm.Page, {
"preferredDevice": "desktop",
start: function() {
try {
//Added by Jammi Dee 01/10/2013
this.btnAdd.setShowing(false);
this.btnEdit.setShowing(false);
this.btnDelete.setShowing(false);
this.btnView.setShowing(false);
this.lblTitle.setCaption("Manage Role");
this.updateDgRoleID();
app.varModuleId.setValue("dataValue","MDLROLE");
this.txtSearchStatus.setValue("dataValue","ACTIVE");
var rights;
for (i = 0; i < app.varArrayRights.getCount(); i++) {
rights = app.varArrayRights.getItem(i).getValue("dataValue");
this.checkRights(rights);
}
//Added by Jammi Dee 05/06/2013
this.svarEntityID.update();
this.selEntity.setValue("dataValue",        app.varEntity.getValue("dataValue") );
// Initialize the application - Jammi Dee 03/25/2012
this.initApplication();
//Added by Jammi Dee 11/25/2012
app.svarUpdateSessionApp.setValue("input.pJuid",app.varSessionId.getValue("dataValue"));
app.svarUpdateSessionApp.update();
// Added by Jammi Dee 05/06/2012
app.svarLogging.setValue("input.pUserId",       app.varUserId.getValue("dataValue"));
app.svarLogging.setValue("input.pMsg",          "Manage System Roles.");
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
this.lblTitle.setCaption("Manage Roles : " + app.varAppName.getValue("dataValue") + " : " + app.varAppVersion.getValue("dataValue"));
this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
},
checkRights: function(rights) {
var appid = app.varAppId.getValue("dataValue");
var rightid = rights;
switch (rightid){
case app.varAppPrefix.getValue("dataValue") + "ROLESTATUS" + "|" + app.varAppId.getValue("dataValue"):
this.txtSearchStatus.setShowing(true);
break;
case app.varAppPrefix.getValue("dataValue") + "ROLEADD" + "|" + app.varAppId.getValue("dataValue"):
this.btnAdd.setShowing(true);
break;
case app.varAppPrefix.getValue("dataValue") + "ROLEEDIT" + "|" + app.varAppId.getValue("dataValue"):
this.btnEdit.setShowing(true);
break;
case app.varAppPrefix.getValue("dataValue") + "ROLEDELETE" + "|" + app.varAppId.getValue("dataValue"):
this.btnDelete.setShowing(true);
break;
default:break;
}
},
updateDgRoleID: function() {
this.svarRoleID.update();
this.dgRoleID.dataSet.update();
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
/*this.txtEntityId.setValue("dataValue", "");
this.txtRoleId.setValue("dataValue", "");
this.txtShortDesc.setValue("dataValue", "");
this.txtDesc.setValue("dataValue", "");
this.txtStartDate.setValue("dataValue", "");
this.txtEndDate.setValue("dataValue", "");*/
this.txtEntityId.setValue("readonly",   false);
this.txtRoleId.setValue("readonly",     false);
this.txtShortDesc.setValue("readonly",  false);
this.txtDesc.setValue("readonly",       false);
this.txtStartDate.setValue("readonly",  false);
this.txtEndDate.setValue("readonly",    false);
this.txtRoleId.setValue("disabled",     true);
this.pnlStatus.setValue("showing",      true);
},
createButtonEnable: function() {
//this.btnEntityId.setValue("showing", true);
this.txtEntityId.setValue("dataValue",      this.txtEntityId.getValue("dataValue"));
this.txtRoleId.setValue("dataValue",        "");
this.txtShortDesc.setValue("dataValue",     "");
this.txtDesc.setValue("dataValue",          "");
this.txtStartDate.setValue("dataValue",     "");
this.txtEndDate.setValue("dataValue",       "");
this.txtEntityId.setValue("readonly",       false);
this.txtRoleId.setValue("readonly",         false);
this.txtShortDesc.setValue("readonly",      false);
this.txtDesc.setValue("readonly",           false);
this.txtStartDate.setValue("readonly",      false);
this.txtEndDate.setValue("readonly",        false);
},
createButtonDisable: function() {
this.btnEntityId.setValue("showing",        false);
this.btnRoleId.setValue("showing",          false);
this.txtEntityId.setValue("dataValue",      this.dgRoleID.getRow(0).entityid);
this.txtRoleId.setValue("dataValue",        this.dgRoleID.getRow(0).roleid);
this.txtShortDesc.setValue("dataValue",     this.dgRoleID.getRow(0).shortdesc);
this.txtDesc.setValue("dataValue",          this.dgRoleID.getRow(0).description);
this.txtStartDate.setValue("dataValue",     this.dgRoleID.getRow(0).startdate);
this.txtEndDate.setValue("dataValue",       this.dgRoleID.getRow(0).enddate);
this.txtStatus.setValue("dataValue",        this.dgRoleID.getRow(0).sstatus);
this.txtEntityId.setValue("readonly",       true);
this.txtRoleId.setValue("readonly",         true);
this.txtShortDesc.setValue("readonly",      true);
this.txtDesc.setValue("readonly",           true);
this.txtStartDate.setValue("readonly",      true);
this.txtEndDate.setValue("readonly",        true);
this.txtRoleId.setValue("disabled",         false);
this.pnlStatus.setValue("showing",          false);
},
roleViewSelect: function() {
this.txtEntityId.setValue("dataValue",      this.dgRoleID.selectedItem.getData().entityid);
this.txtRoleId.setValue("dataValue",        this.dgRoleID.selectedItem.getData().roleid);
this.txtShortDesc.setValue("dataValue",     this.dgRoleID.selectedItem.getData().shortdesc);
this.txtDesc.setValue("dataValue",          this.dgRoleID.selectedItem.getData().description);
this.txtStartDate.setValue("dataValue",     this.dgRoleID.selectedItem.getData().startdate);
this.txtEndDate.setValue("dataValue",       this.dgRoleID.selectedItem.getData().enddate);
this.txtStatus.setValue("dataValue",        this.dgRoleID.selectedItem.getData().sstatus);
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
var sdate = this.txtStartDate.getValue("dataValue");
var edate = this.txtEndDate.getValue("dataValue");
var sstatus = this.txtStatus.getValue("dataValue");
if (typeof entityid !== 'undefined' && typeof roleid !== 'undefined' && typeof sdate !== 'undefined' && typeof edate !== 'undefined') {
if (this.varFlag.getValue("dataValue") == "ADD") {
this.svarQueryTksUsrMgt.setValue("input.pEntityId", entityid);
this.svarQueryTksUsrMgt.setValue("input.pRoleId", roleid);
this.svarQueryTksUsrMgt.update();
} else if (this.varFlag.getValue("dataValue") == "EDIT") {
var sdesc = this.txtShortDesc.getValue("dataValue");
var desc = this.txtDesc.getValue("dataValue");
var startresult = this.convertDateToSqlDateFormat(sdate);
var endresult = this.convertDateToSqlDateFormat(edate);
var eQuery = "update tblrole set shortdesc = '" + sdesc + "', "+
"description = '" + desc + "', "+
"sstatus = '" + sstatus + "', "+
"startdate = '" + startresult + "', "+
"enddate = '" + endresult + "'"+
"where(entityid = '" + entityid + "' and "+
"roleid = '" + roleid + "');";
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
svarQueryTksUsrMgtResult: function(inSender, inDeprecated) {
try {
var entityid = this.txtEntityId.getValue("dataValue");
var roleid   = this.txtRoleId.getValue("dataValue");
var sdate    = this.txtStartDate.getValue("dataValue");
var edate    = this.txtEndDate.getValue("dataValue");
var sdesc    = this.txtShortDesc.getValue("dataValue");
var desc     = this.txtDesc.getValue("dataValue");
var startresult = this.convertDateToSqlDateFormat(sdate);
var endresult = this.convertDateToSqlDateFormat(edate);
if (inSender.getValue("dataValue") == "exists" || inSender.getValue("dataValue") === null) {
alert("Role Id already exists");
} else {
var eQuery = "insert into tblrole(entityid,roleid,shortdesc,description,startdate,enddate)" +
"values (UCASE('" + entityid + "')," +
"UCASE('" + roleid + "')," +
"'" + sdesc + "'," +
"'" + desc + "'," +
"'" + startresult + "'," +
"'" + endresult + "');";
this.varQuery.setValue("dataValue", eQuery);
this.svarExecGenericNonQuery.setValue("input.eQuery", this.varQuery.getValue("dataValue"));
this.svarExecGenericNonQuery.update();
}
} catch (e) {
console.error('ERROR IN svarQueryTksUsrMgtResult: ' + e);
alert( 'ERROR IN svarQueryTksUsrMgtResult: ' + e );
}
},
svarExecGenericNonQueryResult: function(inSender, inDeprecated) {
try {
var entityid = this.txtEntityId.getValue("dataValue");
var roleid = this.txtRoleId.getValue("dataValue");
var sdate = this.txtStartDate.getValue("dataValue");
var edate = this.txtEndDate.getValue("dataValue");
var sdesc = this.txtShortDesc.getValue("dataValue");
var desc = this.txtDesc.getValue("dataValue");
var sstatus = this.txtStatus.getValue("dataValue");
var eQuery = "";
if (inSender.getValue("dataValue") === false) {
//alert("FAIL");
} else {
if(this.varFlag.getValue("dataValue") == "ADD"){
alert("Successfuly added");
}else if(this.varFlag.getValue("dataValue") == "EDIT"){
alert("Successfuly edited");
this.varFlag.setValue("dataValue","x");
eQuery = "update tblroleasgn set sstatus = '" + sstatus + "' where roleid = '" + roleid + "';";
this.varQuery.setValue("dataValue", eQuery);
this.svarExecGenericNonQuery.setValue("input.eQuery", this.varQuery.getValue("dataValue"));
this.svarExecGenericNonQuery.update();
}else if(this.varFlag.getValue("dataValue") == "DELETE"){
alert("Successfuly deleted");
this.varFlag.setValue("dataValue","x");
eQuery = "update tblroleasgn set sstatus = '" + sstatus + "' where roleid = '" + roleid + "';";
this.varQuery.setValue("dataValue", eQuery);
this.svarExecGenericNonQuery.setValue("input.eQuery", this.varQuery.getValue("dataValue"));
this.svarExecGenericNonQuery.update();
}
this.pnlButtons.setShowing(true);
this.pnlSaveButton.setShowing(false);
this.createButtonDisable();
this.updateDgRoleID();
app.svarGetRole.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarGetRole.setValue("input.pEntityId",app.varEntity.getValue("dataValue"));
app.svarGetRole.update();
}
} catch (e) {
console.error('ERROR IN svarExecGenericNonQueryResult: ' + e);
alert( 'ERROR IN svarExecGenericNonQueryResult: ' + e );
}
},
btnRoleIdClick: function(inSender) {
try {
this.btnEntityIdClick(inSender);
} catch (e) {
console.error('ERROR IN btnEntityId1Click: ' + e);
alert( 'ERROR IN btnEntityId1Click: ' + e );
}
},
btnSearchClick: function(inSender) {
try {
var s;
if(this.txtSearch.getValue("dataValue") !== ""){
this.svarRoleID.setValue("input.pRoleId", this.txtSearch.getValue("dataValue"));
}else{
s = this.txtSearch.getValue("dataValue");
}
if(this.txtSearch.getValue("dataValue") == s){
this.svarRoleID.setValue("input.pRoleId", "%");
}
this.svarRoleID.update();
this.dgRoleID.dataSet.update();
} catch (e) {
console.error('ERROR IN btnSearchClick: ' + e);
alert( 'ERROR IN btnSearchClick: ' + e );
}
},
dgRoleIDClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
this.roleViewSelect();
} catch (e) {
console.error('ERROR IN dgRoleIDClick: ' + e);
alert( 'ERROR IN dgRoleIDClick: ' + e );
}
},
svarRoleIDResult: function(inSender, inDeprecated) {
try {
this.txtEntityId.setValue("dataValue",      this.dgRoleID.getRow(0).entityid);
this.txtRoleId.setValue("dataValue",        this.dgRoleID.getRow(0).roleid);
this.txtShortDesc.setValue("dataValue",     this.dgRoleID.getRow(0).shortdesc);
this.txtDesc.setValue("dataValue",          this.dgRoleID.getRow(0).description);
this.txtStartDate.setValue("dataValue",     this.dgRoleID.getRow(0).startdate);
this.txtEndDate.setValue("dataValue",       this.dgRoleID.getRow(0).enddate);
this.txtStatus.setValue("dataValue",        this.dgRoleID.getRow(0).sstatus);
} catch (e) {
console.error('ERROR IN svarRoleIDResult: ' + e);
alert( 'ERROR IN svarRoleIDResult: ' + e );
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
var roleid = this.txtRoleId.getValue("dataValue");
var response = confirm("Are you sure you want to delete?");
if (response) {
//var eQuery = "update tblrole set sstatus = 'INACTIVE' "+
//             "where(entityid = '" + entityid + "' and "+
//             "roleid = '" + roleid + "');";
var eQuery = "delete from tblrole  "+
"where(entityid = '" + entityid + "' and "+
"roleid = '" + roleid + "');";
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
txtSearchStatusChange: function(inSender) {
try {
this.svarRoleID.setValue("input.pStatus",         this.txtSearchStatus.getValue("dataValue"));
this.svarRoleID.setValue("input.pEntityId",       this.selEntity.getValue("dataValue"));
this.svarRoleID.update();
} catch(e) {
console.error('ERROR IN txtSearchStatusChange: ' + e);
alert( 'ERROR IN txtSearchStatusChange: ' + e );
}
},
//Added by Jammi Dee 05/06/2013
pic_backClick: function(inSender) {
try {
app.pdWaitLoadPage.show();
this.navPgMainUser.update();
} catch(e) {
console.error('ERROR IN pic_backClick: ' + e);
}
},
//Added by Jammi Dee 05/06/2013
selEntityChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
try {
this.svarRoleID.setValue("input.pStatus",         this.txtSearchStatus.getValue("dataValue"));
this.svarRoleID.setValue("input.pEntityId",       this.selEntity.getValue("dataValue"));
this.svarRoleID.update();
this.txtEntityId.setValue("dataValue",            this.selEntity.getValue("dataValue") );
} catch(e) {
console.error('ERROR IN selEntityChange: ' + e);
alert( 'ERROR IN selEntityChange: ' + e );
}
},
_end: 0
});

PgMainUserManageRoles.widgets = {
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
svarRoleID: ["wm.ServiceVariable", {"operation":"qryRoleView","service":"dbwaveerp"}, {"onResult":"svarRoleIDResult"}, {
input: ["wm.ServiceInput", {"type":"qryRoleViewInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"%\"","targetProperty":"pRoleId"}, {}],
wire1: ["wm.Wire", {"expression":false,"source":"app.varEntity.dataValue","targetProperty":"pEntityId"}, {}],
wire2: ["wm.Wire", {"expression":"\"ACTIVE\"","targetProperty":"pStatus"}, {}]
}]
}]
}],
tblattachmentLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.tblattachmentLiveView1","type":"com.dbwaveerp.data.Tblattachment"}, {}],
varGridSelect: ["wm.Variable", {"type":"StringData"}, {}],
svarQueryTksUsrMgt: ["wm.ServiceVariable", {"operation":"checkRoleExist","service":"svcExecQueryTksUsrMgt"}, {"onResult":"svarQueryTksUsrMgtResult"}, {
input: ["wm.ServiceInput", {"type":"checkRoleExistInputs"}, {}]
}],
svarExecGenericNonQuery: ["wm.ServiceVariable", {"operation":"execNonQuery","service":"svcExecGenericNonQuery"}, {"onResult":"svarExecGenericNonQueryResult"}, {
input: ["wm.ServiceInput", {"type":"execNonQueryInputs"}, {}]
}],
varQuery: ["wm.Variable", {"type":"StringData"}, {}],
varFlag: ["wm.Variable", {"type":"StringData"}, {}],
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
dgEntityID: ["wm.DojoGrid", {"columns":[{"show":true,"title":"Entity ID","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":true,"title":"Company","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"company"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Company: \" + ${company} + \"</div>\"\n"}],"height":"100%","margin":"4"}, {"onClick":"dgEntityIDClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarEntityID","targetProperty":"dataSet"}, {}]
}]
}]
}],
buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnSelect: ["wm.Button", {"caption":"Select","margin":"4"}, {"onclick":"btnSelectClick"}],
btnClose: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"btnCloseClick"}]
}]
}],
pdAbout: ["wm.PageDialog", {"desktopHeight":"341px","height":"341px","noEscape":true,"noMaxify":true,"noMinify":true,"pageName":"PgAbout","width":"616px"}, {}],
ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar1","containerWidgetId":"containerWidget1","corner":"cr","modal":false,"title":"Role List Help"}, {}, {
containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgMainUserManageRoles.html"}, {}]
}],
buttonBar1: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnClose1: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddPgMainConfigHelp.hide"}]
}]
}],
pnlLayoutMain: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"horizontalAlign":"left","verticalAlign":"top","width":"80%"}, {}, {
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
spacer12: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
pnlInputFields: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
pnlView: ["wm.Panel", {"height":"50%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
pnlButtonHide: ["wm.Panel", {"height":"15%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
btnCloseRoleView: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Close","margin":"4"}, {"onclick":"btnCloseRoleViewClick"}]
}],
fpTitle: ["wm.FancyPanel", {"title":"Role List ( Cross-Entity List )"}, {}, {
pnlSearch: ["wm.Panel", {"height":"15%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
txtSearch: ["wm.Text", {"caption":"Search by Role ID : ","captionAlign":"left","captionSize":"110px","dataValue":undefined,"displayValue":"","placeHolder":"Role ID","width":"250px"}, {}],
btnSearch: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Search","margin":"4"}, {"onclick":"btnSearchClick"}],
spacer11: ["wm.Spacer", {"height":"48px","width":"12px"}, {}],
txtSearchStatus: ["wm.SelectMenu", {"caption":"Status : ","captionAlign":"left","captionSize":"60px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","options":"ACTIVE,INACTIVE","width":"200px"}, {"onchange":"txtSearchStatusChange"}],
selEntity: ["wm.SelectMenu", {"caption":"Entity:","captionAlign":"left","captionSize":"55px","dataField":"entityid","dataType":"com.dbwaveerp.data.output.QryEntityViewRtnType","dataValue":undefined,"displayField":"entityid","displayValue":"","width":"160px"}, {"onchange":"selEntityChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarEntityID","targetProperty":"dataSet"}, {}]
}]
}]
}],
dgRoleID: ["wm.DojoGrid", {"columns":[{"show":false,"field":"seqid","title":"Seqid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"customField01","title":"..","width":"15px","align":"left","editorProps":{"restrictValues":true},"expression":"if (${sstatus}==\"ACTIVE\"){    '<img src =\"resources/images/buttons/grid-green-icon.png\"/>'    } else {    '<img src =\"resources/images/buttons/grid-gray-icon.png\"/>'    }","isCustomField":true},{"show":true,"field":"entityid","title":"Entity ID","width":"120px","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"roleid","title":"Role ID","width":"120px","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"shortdesc","title":"Shortdesc","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"description","title":"Description","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"sstatus","title":"Sstatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"startdate","title":"Startdate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"enddate","title":"Enddate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"juid","title":"Juid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Role ID: \" + ${roleid} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n","mobileColumn":true}],"height":"85%","margin":"4"}, {"onClick":"dgRoleIDClick","onSelect":"dgRoleIDClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarRoleID","targetProperty":"dataSet"}, {}]
}]
}]
}]
}],
spacer1: ["wm.Spacer", {"height":"5%","width":"96px"}, {}],
pnlEntityId: ["wm.Panel", {"height":"6%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spacer2: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
txtEntityId: ["wm.Text", {"caption":"Entity ID : ","captionAlign":"left","captionSize":"127px","disabled":true,"displayValue":"","readonly":true,"width":"254px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":false,"source":"app.varEntity.dataValue","targetProperty":"dataValue"}, {}]
}]
}],
btnEntityId: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"..","margin":"4","showing":false,"width":"35px"}, {"onclick":"btnEntityIdClick"}]
}],
pnlRoleId: ["wm.Panel", {"height":"6%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spacer3: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
txtRoleId: ["wm.Text", {"caption":"Role ID : ","captionAlign":"left","captionSize":"127px","dataValue":undefined,"displayValue":"","readonly":true,"width":"280px"}, {}],
btnRoleId: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"..","margin":"4","showing":false,"width":"35px"}, {"onclick":"btnRoleIdClick"}]
}],
pnlShortDesc: ["wm.Panel", {"height":"6%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spacer4: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
txtShortDesc: ["wm.Text", {"caption":"Short Description : ","captionAlign":"left","captionSize":"127px","dataValue":undefined,"displayValue":"","readonly":true,"width":"500px"}, {}]
}],
pnlDescription: ["wm.Panel", {"height":"6%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spacer5: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
txtDesc: ["wm.Text", {"caption":"Description : ","captionAlign":"left","captionSize":"127px","dataValue":undefined,"displayValue":"","readonly":true,"width":"800px"}, {}]
}],
pnlStartDate: ["wm.Panel", {"height":"6%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spacer6: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
txtStartDate: ["wm.Date", {"caption":"Start Date :","captionAlign":"left","captionSize":"127px","dataValue":undefined,"displayValue":"","readonly":true,"width":"320px"}, {}]
}],
pnlEndDate: ["wm.Panel", {"height":"6%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spacer7: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
txtEndDate: ["wm.Date", {"caption":"End Date :","captionAlign":"left","captionSize":"127px","dataValue":undefined,"displayValue":"","readonly":true,"width":"320px"}, {}],
pnlStatus: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
spacer8: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
txtStatus: ["wm.SelectMenu", {"caption":"Status : ","captionAlign":"left","captionSize":"60px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","options":"ACTIVE, INACTIVE","width":"200px"}, {}]
}]
}],
pnlSaveButton: ["wm.Panel", {"height":"9%","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
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
btnExit: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Close","margin":"4","width":"120px"}, {"onclick":"navPgMainUser"}]
}]
}]
}]
}],
pnlFooter: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundChromeBar_LightBlue","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"20px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
lblFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"...","height":"100px","padding":"4","styles":{"backgroundGradient":{"direction":"horizontal","startColor":"#03036d","endColor":"#d8cbf2","colorStop":31}},"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}]
};

PgMainUserManageRoles.prototype._cssText = 'body.tundra .PgMainUserManageRoles .wmlayout .PgMainUserManageRoles-pnlHeader {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainUserManageRoles .wmlayout .PgMainUserManageRoles-pnlTitle {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainUserManageRoles .wmlayout .PgMainUserManageRoles-lblTitle {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:14pt;\
}\
body.tundra .PgMainUserManageRoles .wmlayout .PgMainUserManageRoles-pnlMenuBar {\
background-color:#00008B;\
}\
body.tundra .PgMainUserManageRoles .wmlayout .PgMainUserManageRoles-pnlFooter {\
background-color:#00008B;\
}\
body.tundra .PgMainUserManageRoles .PgMainUserManageRoles-pnlLayoutMain.wmlayout {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainUserManageRoles .wmlayout .PgMainUserManageRoles-pnlInputFields {\
}\
body.tundra .PgMainUserManageRoles .wmlayout .PgMainUserManageRoles-pnlBody {\
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
PgMainUserManageRoles.prototype._htmlText = '';