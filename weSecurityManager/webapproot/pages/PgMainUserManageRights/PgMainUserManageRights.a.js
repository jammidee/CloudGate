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
dojo.declare("PgMainUserManageRights", wm.Page, {
"preferredDevice": "desktop",
start: function() {
try {
this.lblTitle.setCaption("Manage Rights");
this.updateDgRightsID();
app.varModuleId.setValue("dataValue","MDLRIGHTS");
this.txtSearchStatus.setValue("dataValue","ACTIVE");
// Initialize the application - Jammi Dee 03/25/2012
this.initApplication();
//Initially hide objects
this.lblGenRights.setShowing(false);
var rights;
for (i = 0; i < app.varArrayRights.getCount(); i++) {
rights = app.varArrayRights.getItem(i).getValue("dataValue");
this.checkRights(rights);
}
//Added by Jammi Dee 11/25/2012
app.svarUpdateSessionApp.setValue("input.pJuid",app.varSessionId.getValue("dataValue"));
app.svarUpdateSessionApp.update();
// Added by Jammi Dee 05/06/2012
app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarLogging.setValue("input.pMsg","Manage System Rights.");
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
this.lblTitle.setCaption("Manage Rights : " + app.varAppName.getValue("dataValue") + " : " + app.varAppVersion.getValue("dataValue"));
this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
},
checkRights: function(rights) {
var appid = app.varAppId.getValue("dataValue");
var rightid = rights;
switch (rightid){
case "MGTRIGHTSSTATUS" + "|" + appid:
this.txtSearchStatus.setShowing(true);
break;
case "MGTRIGHTSGENERATE" + "|" + appid:
this.lblGenRights.setShowing(true);
break;
case "MGTRIGHTSEDIT" + "|" + appid:
this.btnEdit.setShowing(true);
break;
case "MGTRIGHTSDELETE" + "|" + appid:
this.btnDelete.setShowing(true);
break;
default:break;
}
},
updateDgRightsID: function() {
this.svarRightID.update();
this.dgRightsID.dataSet.update();
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
this.txtEntityId.setValue("readonly", false);
this.txtRightsId.setValue("readonly", false);
this.txtAppId.setValue("readonly", false);
this.txtDesc.setValue("readonly", false);
this.txtEntityId.setValue("disabled", true);
this.txtRightsId.setValue("disabled", true);
this.txtAppId.setValue("disabled", true);
this.pnlStatus.setValue("showing", true);
},
/*    createButtonEnable: function() {
this.btnEntityId.setValue("showing", true);
this.btnRoleId.setValue("showing", true);
this.btnUserId.setValue("showing", true);
this.txtEntityId.setValue("dataValue", "");
this.txtRoleId.setValue("dataValue", "");
this.txtUserId.setValue("dataValue", "");
this.txtDesc.setValue("dataValue", "");
this.txtEntityId.setValue("readonly", false);
this.txtRoleId.setValue("readonly", false);
this.txtUserId.setValue("readonly", false);
this.txtDesc.setValue("readonly", false);
this.txtEntityId.setValue("disabled", true);
this.txtRoleId.setValue("disabled", true);
this.txtUserId.setValue("disabled", true);
},*/
createButtonDisable: function() {
this.txtEntityId.setValue("dataValue", this.dgRightsID.getRow(0).entityid);
this.txtRightsId.setValue("dataValue", this.dgRightsID.getRow(0).rightid);
this.txtAppId.setValue("dataValue", this.dgRightsID.getRow(0).appid);
this.txtDesc.setValue("dataValue", this.dgRightsID.getRow(0).description);
this.txtStatus.setValue("dataValue", this.dgRightsID.getRow(0).sstatus);
this.txtEntityId.setValue("readonly", true);
this.txtRightsId.setValue("readonly", true);
this.txtAppId.setValue("readonly", true);
this.txtDesc.setValue("readonly", true);
this.txtRightsId.setValue("disabled", false);
this.pnlStatus.setValue("showing", false);
},
rightsViewSelect: function() {
this.txtEntityId.setValue("dataValue", this.dgRightsID.selectedItem.getData().entityid);
this.txtRightsId.setValue("dataValue", this.dgRightsID.selectedItem.getData().rightid);
this.txtAppId.setValue("dataValue", this.dgRightsID.selectedItem.getData().appid);
this.txtDesc.setValue("dataValue",  this.dgRightsID.selectedItem.getData().description);
this.txtStatus.setValue("dataValue",  this.dgRightsID.selectedItem.getData().sstatus);
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
btnSaveClick: function(inSender) {
try {
var entityid = this.txtEntityId.getValue("dataValue");
var rightsid = this.txtRightsId.getValue("dataValue");
var appid    = this.txtAppId.getValue("dataValue");
var sstatus  = this.txtStatus.getValue("dataValue");
if (entityid !== "" && rightsid !== "" && appid !== "" && sstatus !== "") {
//alert(entityid + "|" + appid + "|" + rightsid + "|" + sstatus);
if (this.varFlag.getValue("dataValue") == "EDIT") {
var desc = this.txtDesc.getValue("dataValue");
//  alert(this.varFlag.getValue("dataValue"));
var eQuery = "update tblrights set description = '" + desc + "', "+
"sstatus = '" + sstatus + "' "+
"where(entityid = '" + entityid + "' and "+
"rightid = '" + rightsid + "' and appid = '" + appid + "');";
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
var entityid = this.txtEntityId.getValue("dataValue");
var rightsid = this.txtRightsId.getValue("dataValue");
var appid    = this.txtAppId.getValue("dataValue");
var sstatus  = this.txtStatus.getValue("dataValue");
var eQuery = "";
if (inSender.getValue("dataValue") === false) {
// alert("FAIL");
} else {
if(this.varFlag.getValue("dataValue") == "EDIT"){
alert("Successfuly edited");
this.varFlag.setValue("dataValue","x");
eQuery = "update tblrightasgn set sstatus = '" + sstatus + "' where rightid = '" + rightsid + "';";
this.varQuery.setValue("dataValue", eQuery);
this.svarExecGenericNonQuery.setValue("input.eQuery", this.varQuery.getValue("dataValue"));
this.svarExecGenericNonQuery.update();
}else if(this.varFlag.getValue("dataValue") == "DELETE"){
alert("Successfuly deleted");
this.varFlag.setValue("dataValue","x");
eQuery = "update tblrightasgn set sstatus = '" + sstatus + "' where rightid = '" + rightsid + "';";
this.varQuery.setValue("dataValue", eQuery);
this.svarExecGenericNonQuery.setValue("input.eQuery", this.varQuery.getValue("dataValue"));
this.svarExecGenericNonQuery.update();
}
this.pnlButtons.setValue("showing", true);
this.pnlSaveButton.setValue("showing", false);
this.createButtonDisable();
this.updateDgRightsID();
app.svarGetRole.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarGetRole.setValue("input.pEntityId",app.varEntity.getValue("dataValue"));
app.svarGetRole.update();
}
} catch (e) {
console.error('ERROR IN svarExecGenericNonQueryResult: ' + e);
}
},
btnSearchClick: function(inSender) {
try {
var s;
if(typeof this.txtSearch.getValue("dataValue") !== "undefined" && typeof this.txtSearchAppId.getValue("dataValue") == "undefined"){
this.svarRightID.setValue("input.pRightId", this.txtSearch.getValue("dataValue"));
this.svarRightID.setValue("input.pAppId", "%");
}else if(typeof this.txtSearchAppId.getValue("dataValue") !== "undefined" && typeof this.txtSearch.getValue("dataValue") == "undefined"){
this.svarRightID.setValue("input.pAppId", this.txtSearchAppId.getValue("dataValue"));
this.svarRightID.setValue("input.pRightId", "%");
}else if(typeof this.txtSearchAppId.getValue("dataValue") !== "undefined" && typeof this.txtSearch.getValue("dataValue") !== "undefined"){
this.svarRightID.setValue("input.pAppId", this.txtSearchAppId.getValue("dataValue"));
this.svarRightID.setValue("input.pRightId", this.txtSearch.getValue("dataValue"));
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
this.dgRightsID.dataSet.update();
} catch (e) {
console.error('ERROR IN btnSearchClick: ' + e);
}
},
svarRightIDResult: function(inSender, inDeprecated) {
try {
this.txtEntityId.setValue("dataValue",  this.dgRightsID.getRow(0).entityid);
this.txtRightsId.setValue("dataValue",  this.dgRightsID.getRow(0).rightid);
this.txtAppId.setValue("dataValue",     this.dgRightsID.getRow(0).appid);
this.txtDesc.setValue("dataValue",      this.dgRightsID.getRow(0).description);
this.txtStatus.setValue("dataValue",    this.dgRightsID.getRow(0).sstatus);
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
var rightsid = this.txtRightsId.getValue("dataValue");
var appid = this.txtAppId.getValue("dataValue");
var response = confirm("Are you sure you want to delete?");
if (response) {
var eQuery = "update tblrights set sstatus = 'INACTIVE' "+
"where(entityid = '" + entityid + "' and "+
"rightid = '" + rightsid + "' and appid = '" + appid + "');";
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
alert( 'ERROR IN btnDeleteClick: ' + e );
}
},
dgRightsIDClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
this.rightsViewSelect();
} catch(e) {
console.error('ERROR IN dgRoleAsgnIDClick: ' + e);
alert( 'ERROR IN dgRoleAsgnIDClick: ' + e );
}
},
btnCloseRoleClick: function(inSender) {
try {
this.ddRoleID.setShowing(false);
} catch(e) {
console.error('ERROR IN btnCloseRoleClick: ' + e);
alert( 'ERROR IN btnCloseRoleClick: ' + e );
}
},
btnCloseUserClick: function(inSender) {
try {
this.ddUserID.setShowing(false);
} catch(e) {
console.error('ERROR IN btnCloseUserClick: ' + e);
alert( 'ERROR IN btnCloseUserClick: ' + e );
}
},
txtSearchStatusChange: function(inSender) {
try {
this.svarRightID.setValue("input.pStatus",this.txtSearchStatus.getValue("dataValue"));
this.svarRightID.update();
} catch(e) {
console.error('ERROR IN txtSearchStatusChange: ' + e);
alert( 'ERROR IN txtSearchStatusChange: ' + e );
}
},
//Added by Jammi Dee 03/06/2013
btnSelectAppClick: function(inSender) {
try {
this.svarAppList.setValue("input.pEntity", app.varEntity.getValue("dataValue"));
this.svarAppList.update();
this.ddSelectApp.show();
} catch(e) {
console.error('ERROR IN btnSelectAppClick: ' + e);
alert( 'ERROR IN btnSelectAppClick: ' + e );
}
},
//Added by Jammi Dee 03/06/2013
btnSelectAppCancelClick: function(inSender) {
try {
this.ddSelectApp.hide();
} catch(e) {
console.error('ERROR IN btnSelectAppCancelClick: ' + e);
alert( 'ERROR IN btnSelectAppCancelClick: ' + e );
}
},
//Added by Jammi Dee 03/06/2013
btnSelectAppSelectClick: function(inSender) {
try {
this.txtSearchAppId.setValue("dataValue", this.dgData.selectedItem.getData().appid );
this.ddSelectApp.hide();
} catch(e) {
console.error('ERROR IN btnSelectAppSelectClick: ' + e);
alert( 'ERROR IN btnSelectAppSelectClick: ' + e );
}
},
//Added by Jammi Dee 03/06/2013
dgDataCellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
this.btnSelectAppSelectClick( inSender );
} catch(e) {
console.error('ERROR IN dgDataCellDblClick: ' + e);
alert( 'ERROR IN dgDataCellDblClick: ' + e );
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
lblGenRightsClick: function(inSender, inEvent) {
try {
app.pdWaitLoadPage.show();
this.navPgGenerateRights.update();
} catch(e) {
console.error('ERROR IN lblGenRightsClick: ' + e);
}
},
_end: 0
});

PgMainUserManageRights.widgets = {
sv_authenticate: ["wm.ServiceVariable", {"operation":"authenticate","service":"services"}, {"onResult":"sv_authenticateResult","onSuccess":"sv_authenticateSuccess"}, {
input: ["wm.ServiceInput", {"type":"authenticateInputs"}, {}]
}],
svarStrApp01: ["wm.ServiceVariable", {"operation":"authenticateRegistry","service":"svcRegistry"}, {"onResult":"svarStrApp01Result"}, {
input: ["wm.ServiceInput", {"type":"authenticateRegistryInputs"}, {}]
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
svarUserID: ["wm.ServiceVariable", {"operation":"qryUserView","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryUserViewInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"%\"","targetProperty":"pUserId"}, {}]
}]
}]
}],
svarTblRoleAsgn: ["wm.ServiceVariable", {"operation":"checkRoleAsgnExist","service":"svcExecQueryTksUsrMgt"}, {"onResult":"svarTblRoleAsgnResult"}, {
input: ["wm.ServiceInput", {"type":"checkRoleAsgnExistInputs"}, {}]
}],
svarRightID: ["wm.ServiceVariable", {"operation":"qryRightsView","service":"dbwaveerp"}, {"onResult":"svarRightIDResult"}, {
input: ["wm.ServiceInput", {"type":"qryRightsViewInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"%\"","targetProperty":"pRightId"}, {}],
wire1: ["wm.Wire", {"expression":false,"source":"app.varEntity.dataValue","targetProperty":"pEntityId"}, {}],
wire2: ["wm.Wire", {"expression":"\"ACTIVE\"","targetProperty":"pStatus"}, {}],
wire3: ["wm.Wire", {"expression":"\"%\"","targetProperty":"pAppId"}, {}]
}]
}]
}],
navPgGenerateRights: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgGenerateRights\"","targetProperty":"pageName"}, {}]
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
svarAppList: ["wm.ServiceVariable", {"operation":"qryAppList","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryAppListInputs"}, {}]
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
ddRoleID: ["wm.DesignableDialog", {"buttonBarId":"buttonBar1","containerWidgetId":"containerWidget1","title":"Role List"}, {}, {
containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
dgRoleID: ["wm.DojoGrid", {"columns":[{"show":false,"title":"Seqid","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"seqid"},{"show":true,"title":"Entity Id","width":"20%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":true,"title":"Description","width":"60%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"description"},{"show":false,"title":"Sstatus","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"show":true,"title":"Rightid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"rightid"},{"show":true,"title":"Appid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"appid"}],"dataSet":"","height":"100%","margin":"4"}, {"onClick":"dgRoleIDClick"}]
}],
buttonBar1: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnSelectRole: ["wm.Button", {"caption":"Select","margin":"4"}, {"onclick":"btnSelectRoleClick"}],
btnCloseRole: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"btnCloseRoleClick"}]
}]
}],
ddUserID: ["wm.DesignableDialog", {"buttonBarId":"buttonBar2","containerWidgetId":"containerWidget2","title":"User List"}, {}, {
containerWidget2: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
dgUserID: ["wm.DojoGrid", {"columns":[{"show":true,"title":"User ID","width":"12%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"userid"},{"show":true,"title":"Entity ID","width":"13%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":false,"title":"Password","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"password"},{"show":false,"title":"Username","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"username"},{"show":true,"title":"First Name","width":"25%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"firstname"},{"show":true,"title":"Middle Name","width":"25%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"middlename"},{"show":true,"title":"Last Name","width":"25%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"lastname"},{"show":false,"title":"Sstatus","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"show":false,"title":"Email","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"email"},{"show":false,"title":"Roleid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"roleid"},{"show":false,"title":"Startdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"startdate"},{"show":false,"title":"Enddate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"enddate"},{"show":false,"title":"Deleted","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"deleted"},{"show":false,"title":"Userimgext","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"userimgext"},{"show":true,"title":"Pid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"pid"},{"show":true,"title":"Passwdenc","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"passwdenc"},{"show":false,"title":"ParentPerson","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"parentPerson"},{"show":false,"field":"id","title":"Id","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"id.seqid","title":"Id.seqid","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"id.juid","title":"Id.juid","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>User ID: \" + ${userid} + \"</div>\"\n+ \"<div class='MobileRow'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>First Name: \" + ${firstname} + \"</div>\"\n+ \"<div class='MobileRow'>Middle Name: \" + ${middlename} + \"</div>\"\n+ \"<div class='MobileRow'>Last Name: \" + ${lastname} + \"</div>\"\n+ \"<div class='MobileRow'>Pid: \" + ${pid} + \"</div>\"\n+ \"<div class='MobileRow'>Passwdenc: \" + ${passwdenc} + \"</div>\"\n"}],"height":"100%","margin":"4"}, {"onClick":"dgUserIDClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarUserID","targetProperty":"dataSet"}, {}]
}]
}]
}],
buttonBar2: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnSelectUser: ["wm.Button", {"caption":"Select","margin":"4"}, {"onclick":"btnSelectUserClick"}],
btnCloseUser: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"btnCloseUserClick"}]
}]
}],
pdAbout: ["wm.PageDialog", {"desktopHeight":"341px","height":"341px","noEscape":true,"noMaxify":true,"noMinify":true,"pageName":"PgAbout","width":"616px"}, {}],
ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar3","containerWidgetId":"containerWidget3","corner":"cr","modal":false,"title":"Rights List Help"}, {}, {
containerWidget3: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgMainUserManageRights.html"}, {}]
}],
buttonBar3: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnClose1: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddPgMainConfigHelp.hide"}]
}]
}],
ddSelectApp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget4","desktopHeight":"300px","height":"300px","title":"Select Application","width":"500px"}, {}, {
containerWidget4: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
dgData: ["wm.DojoGrid", {"columns":[{"show":false,"title":"Seqid","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"seqid"},{"show":false,"title":"Juid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"juid"},{"show":false,"title":"Entityid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":true,"title":"Appid","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"appid"},{"show":true,"title":"Appdesc","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"appdesc"},{"show":false,"title":"Startdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"startdate"},{"show":false,"title":"Enddate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"enddate"},{"show":true,"title":"Status","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"status"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Appid: \" + ${appid} + \"</div>\"\n+ \"<div class='MobileRow'>Appdesc: \" + ${appdesc} + \"</div>\"\n+ \"<div class='MobileRow'>Status: \" + ${status} + \"</div>\"\n"}],"height":"100%","margin":"4"}, {"onCellDblClick":"dgDataCellDblClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarAppList","targetProperty":"dataSet"}, {}]
}]
}]
}],
buttonBar4: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnSelectAppSelect: ["wm.Button", {"caption":"Select","margin":"4"}, {"onclick":"btnSelectAppSelectClick"}],
btnSelectAppCancel: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"btnSelectAppCancelClick"}]
}]
}],
pnlLayoutMain: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"horizontalAlign":"left","verticalAlign":"top"}, {}, {
pnlHeader: ["wm.Panel", {"height":"45px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
imgLogo: ["wm.Picture", {"height":"45px","source":"resources/images/logos/waveerplogo.jpg","width":"275px"}, {}],
pnlTitle: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","styles":{"backgroundImage":"url(resources/images/logos/waveerpbar.jpg)"},"verticalAlign":"middle","width":"100%"}, {}, {
lblTitle: ["wm.Label", {"align":"right","autoSizeHeight":true,"caption":"Ticket System","padding":"4","singleLine":false,"width":"600px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}],
pnlMenuBar: ["wm.Panel", {"height":"20px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#00008b"},"verticalAlign":"top","width":"100%"}, {}, {
lblGenRights: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Generate Rights","height":"100%","padding":"4","width":"102px"}, {"onclick":"lblGenRightsClick"}, {
format: ["wm.DataFormatter", {}, {}]
}]
}],
pnlMenuButton: ["wm.HeaderContentPanel", {"border":"0","height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
pnlMenuButtonLeft: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
pic_home: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Home","source":"resources/images/buttons/home0224.png","width":"24px"}, {"onclick":"pic_homeClick"}],
Sep01: ["wm.Spacer", {"height":"24px","width":"5px"}, {}],
pic_back: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Back","source":"resources/images/buttons/arrowleft24.png","width":"24px"}, {"onclick":"pic_backClick"}]
}],
pnlMenuButtonRight: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"50%"}, {}, {
pic_help: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Help","source":"resources/images/buttons/helpred24.png","width":"24px"}, {"onclick":"ddPgMainConfigHelp.show"}],
pic_about: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"About","source":"resources/images/buttons/aboutblue24.png","width":"24px"}, {"onclick":"pdAbout.show"}]
}]
}],
spacer7: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
pnlInputFields: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
pnlView: ["wm.Panel", {"height":"62%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
pnlButtonHide: ["wm.Panel", {"height":"15%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
btnCloseRoleView: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Close","margin":"4"}, {"onclick":"btnCloseRoleViewClick"}]
}],
fpTitle: ["wm.FancyPanel", {"title":"Rights List"}, {}, {
pnlSearch: ["wm.Panel", {"height":"12%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
txtSearch: ["wm.Text", {"caption":"Search by Rights ID : ","captionAlign":"left","captionSize":"145px","dataValue":undefined,"displayValue":"","placeHolder":"Rights ID"}, {}],
spacer6: ["wm.Spacer", {"height":"48px","showing":false,"width":"62px"}, {}],
txtSearchAppId: ["wm.Text", {"caption":"Search by Application Id :","captionAlign":"left","captionSize":"175px","dataValue":undefined,"displayValue":""}, {}],
btnSearchApp: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Search","margin":"4","showing":false}, {}],
btnSelectApp: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"..","margin":"4","width":"30px"}, {"onclick":"btnSelectAppClick"}],
btnSearch: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Search","margin":"4"}, {"onclick":"btnSearchClick"}],
txtSearchStatus: ["wm.SelectMenu", {"caption":"Select Status : ","captionAlign":"left","captionSize":"105px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","options":"ACTIVE,INACTIVE","width":"250px"}, {"onchange":"txtSearchStatusChange"}]
}],
dgRightsID: ["wm.DojoGrid", {"columns":[{"show":false,"title":"Seqid","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"seqid"},{"show":true,"title":"Entity ID","width":"120px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":true,"title":"Rights ID","width":"240px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"rightid"},{"show":true,"title":"Application ID","width":"120px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"appid"},{"show":true,"title":"Description","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"description"},{"show":false,"title":"Sstatus","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"show":false,"title":"Juid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"juid"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Rights ID: \" + ${rightid} + \"</div>\"\n+ \"<div class='MobileRow'>Application ID: \" + ${appid} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n"}],"height":"91%","margin":"4"}, {"onClick":"dgRightsIDClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarRightID","targetProperty":"dataSet"}, {}]
}]
}]
}]
}],
spacer1: ["wm.Spacer", {"height":"5%","width":"96px"}, {}],
pnlEntityId: ["wm.Panel", {"height":"6%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spacer2: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
txtEntityId: ["wm.Text", {"caption":"Entity ID : ","captionAlign":"left","captionSize":"110px","dataValue":undefined,"displayValue":"","readonly":true,"width":"254px"}, {}]
}],
pnlRoleId: ["wm.Panel", {"height":"6%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spacer3: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
txtRightsId: ["wm.Text", {"caption":"Right ID : ","captionAlign":"left","captionSize":"110px","dataValue":undefined,"displayValue":"","readonly":true,"width":"313px"}, {}]
}],
pnlUserId: ["wm.Panel", {"height":"6%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spacer4: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
txtAppId: ["wm.Text", {"caption":"Application ID : ","captionAlign":"left","captionSize":"110px","dataValue":undefined,"displayValue":"","readonly":true,"singleLine":false,"width":"310px"}, {}]
}],
pnlDescription: ["wm.Panel", {"height":"6%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spacer5: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
txtDesc: ["wm.Text", {"caption":"Description : ","captionAlign":"left","captionSize":"110px","dataValue":undefined,"displayValue":"","readonly":true,"width":"436px"}, {}],
pnlStatus: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"235px"}, {}, {
txtStatus: ["wm.SelectMenu", {"caption":"Status : ","captionAlign":"left","captionSize":"60px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","options":"ACTIVE,INACTIVE","width":"200px"}, {}]
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
btnEdit: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Update","margin":"4","showing":false,"width":"120px"}, {"onclick":"btnEditClick"}],
btnView: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"View Role","margin":"4","showing":false,"width":"120px"}, {"onclick":"btnViewClick"}],
btnDelete: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Delete","margin":"4","showing":false,"width":"120px"}, {"onclick":"btnDeleteClick"}],
btnExit: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Close","margin":"4","width":"120px"}, {"onclick":"navPgMainUser"}]
}]
}]
}]
}],
pnlFooter: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundChromeBar_LightBlue","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
lblFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"...","height":"20px","padding":"4","styles":{"backgroundGradient":{"direction":"horizontal","startColor":"#03036d","endColor":"#d8cbf2","colorStop":31}},"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}]
};

PgMainUserManageRights.prototype._cssText = 'body.tundra .PgMainUserManageRights .wmlayout .PgMainUserManageRights-pnlHeader {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainUserManageRights .wmlayout .PgMainUserManageRights-pnlTitle {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainUserManageRights .wmlayout .PgMainUserManageRights-lblTitle {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:14pt;\
}\
body.tundra .PgMainUserManageRights .wmlayout .PgMainUserManageRights-pnlMenuBar {\
background-color:#00008B;\
}\
body.tundra .PgMainUserManageRights .wmlayout .PgMainUserManageRights-pnlFooter {\
background-color:#00008B;\
}\
body.tundra .PgMainUserManageRights .PgMainUserManageRights-pnlLayoutMain.wmlayout {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainUserManageRights .wmlayout .PgMainUserManageRights-pnlInputFields {\
}\
body.tundra .PgMainUserManageRights .wmlayout .PgMainUserManageRights-pnlBody {\
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
PgMainUserManageRights.prototype._htmlText = '';