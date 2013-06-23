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
* Date: 09/30/2012
* Modified by: Jammi Dee 09/30/2012 10:00AM
*
*/
/*
This is a sample page that can used as template
*/
dojo.declare("PgMainMaintenanceOrg", wm.Page, {
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
//Added by Jammi Dee 10/01/2012
this.svarOrgDivisionView.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
this.svarOrgDivisionView.update();
this.svarOrgDepartmentView.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
this.svarOrgDepartmentView.update();
this.svarOrgSectionView.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
this.svarOrgSectionView.update();
this.svarOrgLocationView.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
this.svarOrgLocationView.update();
//Added by Jammi Dee 01/06/2013
this.svarOrgShiftView.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
this.svarOrgShiftView.update();
//Added by Jammi Dee 01/06/2013
this.svarOrgRestdayView.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
this.svarOrgRestdayView.update();
// Added by Jammi Dee 05/06/2012
app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarLogging.setValue("input.pMsg","Manage Organization Page.");
app.svarLogging.setValue("input.pModuleId","ORGLOOKUP");
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
this.lblTitle.setCaption("Maintenance : Organization" );
this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
},
//Added by Jammi Dee 10/01/2012
dgDivClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
this.txtDivId.setValue("dataValue",           this.dgDiv.selectedItem.getData().orgid );
this.txtDivDescription.setValue("dataValue",  this.dgDiv.selectedItem.getData().description );
} catch(e) {
//console.error('ERROR IN dgDivClick: ' + e);
//alert( 'ERROR IN dgDivClick: ' + e );
}
},
//Added by Jammi Dee 10/01/2012
dgDepClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
this.txtDepId.setValue("dataValue",           this.dgDep.selectedItem.getData().orgid );
this.txtDepDescription.setValue("dataValue",  this.dgDep.selectedItem.getData().description );
} catch(e) {
//console.error('ERROR IN dgDepClick: ' + e);
//alert( 'ERROR IN dgDepClick: ' + e );
}
},
//Added by Jammi Dee 10/01/2012
dgSecClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
this.txtSecId.setValue("dataValue",           this.dgSec.selectedItem.getData().orgid );
this.txtSecDescription.setValue("dataValue",  this.dgSec.selectedItem.getData().description );
} catch(e) {
//console.error('ERROR IN dgSecClick: ' + e);
//alert( 'ERROR IN dgSecClick: ' + e );
}
},
//Added by Jammi Dee 10/01/2012
dgLocClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
this.txtLocId.setValue("dataValue",           this.dgLoc.selectedItem.getData().orgid );
this.txtLocDescription.setValue("dataValue",  this.dgLoc.selectedItem.getData().description );
} catch(e) {
//console.error('ERROR IN dgLocClick: ' + e);
//alert( 'ERROR IN dgLocClick: ' + e );
}
},
//Added by Jammi Dee 10/02/2012
ddNewDivisionShow: function(inSender) {
try {
} catch(e) {
console.error('ERROR IN ddNewDivisionShow: ' + e);
alert( 'ERROR IN ddNewDivisionShow: ' + e );
}
},
//Added by Jammi Dee 10/02/2012
btnDivCreateClick: function(inSender) {
try {
//Used this UUID generation when database UUID is not available
var UUID = app.uuid4();
var eQuery =           "insert into tblOrgdivision( " +
"juid, " +
"entityid, " +
"orgid, " +
"description, " +
"pid, " +
"contact01, " +
"contact02, " +
"sstatus " +
")" +
"values( " +
"'" + UUID + "', " +
"'" + app.varEntity.getValue("dataValue") + "', " +
"'" + this.txtDivNew.getValue("dataValue") + "', " +
"'" + this.txtDivNewDescription.getValue("dataValue") + "', " +
"'" + "_NA_" + "', " +
"'" + this.txtDivNewContact01.getValue("dataValue") + "', " +
"'" + this.txtDivNewContact02.getValue("dataValue") + "', " +
"'" + this.selDivNewStatus.getValue("dataValue") + "' " +
");";
//alert( eQuery );
this.svarExecGenericNonQueryDiv.setValue("input.eQuery", eQuery);
this.svarExecGenericNonQueryDiv.update();
//Update the display
this.svarOrgDivisionView.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
this.svarOrgDivisionView.update();
this.dgDiv.dataSet.update();
this.ddNewDivision.hide();
} catch(e) {
console.error('ERROR IN btnDivCreateClick: ' + e);
alert( 'ERROR IN btnDivCreateClick: ' + e );
}
},
//Added by Jammi Dee 10/02/2012
pic_DivDeleteClick: function(inSender) {
try {
var response = confirm("Delete: Are you sure to delete this item?");
if (response) {
var eQuery = "delete from tblOrgDivision where juid = '" + this.dgDiv.selectedItem.getData().juid + "' ";
this.svarExecGenericNonQueryDiv.setValue("input.eQuery", eQuery);
this.svarExecGenericNonQueryDiv.update();
//Update the display
this.svarOrgDivisionView.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
this.svarOrgDivisionView.update();
this.dgDiv.dataSet.update();
}
} catch(e) {
console.error('ERROR IN pic_DivDeleteClick: ' + e);
alert( 'ERROR IN pic_DivDeleteClick: ' + e );
}
},
//Added by Jammi Dee 10/02/2012
ddNewDepartmentShow: function(inSender) {
try {
} catch(e) {
console.error('ERROR IN ddNewDepartmentShow: ' + e);
alert( 'ERROR IN ddNewDepartmentShow: ' + e );
}
},
//Added by Jammi Dee 10/02/2012
btnDepCreateClick: function(inSender) {
try {
//Used this UUID generation when database UUID is not available
var UUID = app.uuid4();
var eQuery =           "insert into tblOrgDepartment( " +
"juid, " +
"entityid, " +
"orgid, " +
"description, " +
"pid, " +
"itmgrid, " +
"itmgrname, " +
"contact01, " +
"contact02, " +
"location, " +
"sstatus " +
")" +
"values( " +
"'" + UUID + "', " +
"'" + app.varEntity.getValue("dataValue") + "', " +
"'" + this.txtDepNew.getValue("dataValue") + "', " +
"'" + this.txtDepNewDescription.getValue("dataValue") + "', " +
"'" + this.txtDepNewParent.getValue("dataValue") + "', " +
"'" + this.txtDepNewItmgrId.getValue("dataValue") + "', " +
"'" + this.txtDepNewItmgrName.getValue("dataValue") + "', " +
"'" + this.txtDepNewContact01.getValue("dataValue") + "', " +
"'" + this.txtDepNewContact02.getValue("dataValue") + "', " +
"'" + this.txtDepNewLocation.getValue("dataValue") + "', " +
"'" + this.selDepNewStatus.getValue("dataValue") + "' " +
");";
// alert( eQuery );
this.svarExecGenericNonQueryDep.setValue("input.eQuery", eQuery);
this.svarExecGenericNonQueryDep.update();
//Update the display
this.svarOrgDepartmentView.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
this.svarOrgDepartmentView.update();
this.dgDep.dataSet.update();
this.ddNewDepartment.hide();
} catch(e) {
console.error('ERROR IN btnDepCreateClick: ' + e);
alert( 'ERROR IN btnDepCreateClick: ' + e );
}
},
//Added by Jammi Dee 10/02/2012
pic_DepDeleteClick: function(inSender) {
try {
var response = confirm("Delete: Are you sure to delete this item?");
if (response) {
var eQuery = "delete from tblOrgDepartment where juid = '" + this.dgDep.selectedItem.getData().juid + "' ";
this.svarExecGenericNonQueryDep.setValue("input.eQuery", eQuery);
this.svarExecGenericNonQueryDep.update();
//Update the display
this.svarOrgDepartmentView.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
this.svarOrgDepartmentView.update();
this.dgDep.dataSet.update();
}
} catch(e) {
console.error('ERROR IN pic_DepDeleteClick: ' + e);
alert( 'ERROR IN pic_DepDeleteClick: ' + e );
}
},
//Added by Jammi Dee 10/03/2012
ddNewSectionShow: function(inSender) {
try {
} catch(e) {
console.error('ERROR IN ddNewSectionShow: ' + e);
alert( 'ERROR IN ddNewSectionShow: ' + e );
}
},
//Added by Jammi Dee 10/03/2012
btnSecCreateClick: function(inSender) {
try {
//Used this UUID generation when database UUID is not available
var UUID = app.uuid4();
var eQuery =           "insert into tblOrgSection( " +
"juid, " +
"entityid, " +
"orgid, " +
"description, " +
"pid, " +
"contact01, " +
"contact02, " +
"sstatus " +
")" +
"values( " +
"'" + UUID + "', " +
"'" + app.varEntity.getValue("dataValue") + "', " +
"'" + this.txtSecNew.getValue("dataValue") + "', " +
"'" + this.txtSecNewDescription.getValue("dataValue") + "', " +
"'" + "_NA_" + "', " +
"'" + this.txtSecNewContact01.getValue("dataValue") + "', " +
"'" + this.txtSecNewContact02.getValue("dataValue") + "', " +
"'" + this.selSecNewStatus.getValue("dataValue") + "' " +
");";
//alert( eQuery );
this.svarExecGenericNonQuerySec.setValue("input.eQuery", eQuery);
this.svarExecGenericNonQuerySec.update();
//Update the display
this.svarOrgSectionView.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
this.svarOrgSectionView.update();
this.dgSec.dataSet.update();
this.ddNewSection.hide();
} catch(e) {
console.error('ERROR IN btnSecCreateClick: ' + e);
alert( 'ERROR IN btnSecCreateClick: ' + e );
}
},
//Added by Jammi Dee 10/04/2012
pic_SecDeleteClick: function(inSender) {
try {
var response = confirm("Delete: Are you sure to delete this item?");
if (response) {
var eQuery = "delete from tblOrgSection where juid = '" + this.dgSec.selectedItem.getData().juid + "' ";
this.svarExecGenericNonQuerySec.setValue("input.eQuery", eQuery);
this.svarExecGenericNonQuerySec.update();
//Update the display
this.svarOrgSectionView.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
this.svarOrgSectionView.update();
this.dgSec.dataSet.update();
}
} catch(e) {
console.error('ERROR IN pic_SecDeleteClick: ' + e);
alert( 'ERROR IN pic_SecDeleteClick: ' + e );
}
},
//Added by Jammi Dee 10/04/2012
ddNewLocationShow: function(inSender) {
try {
} catch(e) {
console.error('ERROR IN ddNewLocationShow: ' + e);
alert( 'ERROR IN ddNewLocationShow: ' + e );
}
},
//Added by Jammi Dee 10/04/2012
btnLocCreateClick: function(inSender) {
try {
//Used this UUID generation when database UUID is not available
var UUID = app.uuid4();
var eQuery =           "insert into tblOrgLocation( " +
"juid, " +
"entityid, " +
"orgid, " +
"description, " +
"pid, " +
"contact01, " +
"contact02, " +
"geodesc, " +
"geolon, " +
"geolat, " +
"sstatus " +
")" +
"values( " +
"'" + UUID + "', " +
"'" + app.varEntity.getValue("dataValue") + "', " +
"'" + this.txtLocNew.getValue("dataValue") + "', " +
"'" + this.txtLocNewDescription.getValue("dataValue") + "', " +
"'" + "_NA_" + "', " +
"'" + this.txtLocNewContact01.getValue("dataValue") + "', " +
"'" + this.txtLocNewContact02.getValue("dataValue") + "', " +
"'" + this.txtLocNewGeoDesc.getValue("dataValue") + "', " +
"'" + this.txtLocNewGeoLon.getValue("dataValue") + "', " +
"'" + this.txtLocNewGeoLat.getValue("dataValue") + "', " +
"'" + this.selLocNewStatus.getValue("dataValue") + "' " +
");";
//alert( eQuery );
this.svarExecGenericNonQueryLoc.setValue("input.eQuery", eQuery);
this.svarExecGenericNonQueryLoc.update();
//Update the display
this.svarOrgLocationView.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
this.svarOrgLocationView.update();
this.dgLoc.dataSet.update();
this.ddNewLocation.hide();
} catch(e) {
console.error('ERROR IN btnLocCreateClick: ' + e);
alert( 'ERROR IN btnLocCreateClick: ' + e );
}
},
//Added by Jammi Dee 10/04/2012
pic_LocDeleteClick: function(inSender) {
try {
var response = confirm("Delete: Are you sure to delete this item?");
if (response) {
var eQuery = "delete from tblOrgLocation where juid = '" + this.dgLoc.selectedItem.getData().juid + "' ";
this.svarExecGenericNonQueryLoc.setValue("input.eQuery", eQuery);
this.svarExecGenericNonQueryLoc.update();
//Update the display
this.svarOrgLocationView.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
this.svarOrgLocationView.update();
this.dgLoc.dataSet.update();
}
} catch(e) {
console.error('ERROR IN pic_LocDeleteClick: ' + e);
alert( 'ERROR IN pic_LocDeleteClick: ' + e );
}
},
pic_ShiftDeleteClick: function(inSender) {
try {
this.pic_LocDeleteClick(inSender);
} catch(e) {
console.error('ERROR IN pic_ShiftDeleteClick: ' + e);
}
},
pic_RestDeleteClick: function(inSender) {
try {
this.pic_LocDeleteClick(inSender);
} catch(e) {
console.error('ERROR IN pic_RestDeleteClick: ' + e);
}
},
//Added by Jammi Dee 01/07/2013
dgShiftClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
this.txtShiftId.setValue("dataValue",           this.dgShift.selectedItem.getData().orgid );
this.txtshiftDescription.setValue("dataValue",  this.dgShift.selectedItem.getData().description );
} catch(e) {
console.error('ERROR IN dgShiftClick: ' + e);
alert( 'ERROR IN dgShiftClick: ' + e );
}
},
//Added by Jammi Dee 01/07/2013
dgRestdayClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
this.txtRestId.setValue("dataValue",           this.dgRestday.selectedItem.getData().orgid );
this.txtRestDescription.setValue("dataValue",  this.dgRestday.selectedItem.getData().description );
} catch(e) {
console.error('ERROR IN dgRestdayClick: ' + e);
alert( 'ERROR IN dgRestdayClick: ' + e );
}
},
//Added by Jammi Dee 01/07/2013
btnShiftCreateClick: function(inSender) {
try {
//Used this UUID generation when database UUID is not available
var UUID = app.uuid4();
var eQuery =           "insert into tblOrgShift( " +
"juid, " +
"entityid, " +
"orgid, " +
"description, " +
"pid, " +
"contact01, " +
"contact02, " +
"geodesc, " +
"geolon, " +
"geolat, " +
"sstatus " +
")" +
"values( " +
"'" + UUID + "', " +
"'" + app.varEntity.getValue("dataValue") + "', " +
"'" + this.txtLocNew.getValue("dataValue") + "', " +
"'" + this.txtLocNewDescription.getValue("dataValue") + "', " +
"'" + "_NA_" + "', " +
"'" + this.txtLocNewContact01.getValue("dataValue") + "', " +
"'" + this.txtLocNewContact02.getValue("dataValue") + "', " +
"'" + this.txtLocNewGeoDesc.getValue("dataValue") + "', " +
"'" + this.txtLocNewGeoLon.getValue("dataValue") + "', " +
"'" + this.txtLocNewGeoLat.getValue("dataValue") + "', " +
"'" + this.selLocNewStatus.getValue("dataValue") + "' " +
");";
//alert( eQuery );
this.svarExecGenericNonQueryLoc.setValue("input.eQuery", eQuery);
this.svarExecGenericNonQueryLoc.update();
//Update the display
this.svarOrgShiftView.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
this.svarOrgShiftView.update();
this.dgShift.dataSet.update();
this.ddNewShift.hide();
} catch(e) {
console.error('ERROR IN btnShiftCreateClick: ' + e);
alert( 'ERROR IN btnShiftCreateClick: ' + e );
}
},
//Added by Jammi Dee 01/07/2013
btnRestdayCreateClick: function(inSender) {
try {
//Used this UUID generation when database UUID is not available
var UUID = app.uuid4();
var eQuery =           "insert into tblOrgRestday( " +
"juid, " +
"entityid, " +
"orgid, " +
"description, " +
"pid, " +
"contact01, " +
"contact02, " +
"geodesc, " +
"geolon, " +
"geolat, " +
"sstatus " +
")" +
"values( " +
"'" + UUID + "', " +
"'" + app.varEntity.getValue("dataValue") + "', " +
"'" + this.txtLocNew.getValue("dataValue") + "', " +
"'" + this.txtLocNewDescription.getValue("dataValue") + "', " +
"'" + "_NA_" + "', " +
"'" + this.txtLocNewContact01.getValue("dataValue") + "', " +
"'" + this.txtLocNewContact02.getValue("dataValue") + "', " +
"'" + this.txtLocNewGeoDesc.getValue("dataValue") + "', " +
"'" + this.txtLocNewGeoLon.getValue("dataValue") + "', " +
"'" + this.txtLocNewGeoLat.getValue("dataValue") + "', " +
"'" + this.selLocNewStatus.getValue("dataValue") + "' " +
");";
//alert( eQuery );
this.svarExecGenericNonQueryLoc.setValue("input.eQuery", eQuery);
this.svarExecGenericNonQueryLoc.update();
//Update the display
this.svarOrgRestdayView.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
this.svarOrgRestdayView.update();
this.dgRestday.dataSet.update();
this.ddNewRestday.hide();
} catch(e) {
console.error('ERROR IN btnRestdayCreateClick: ' + e);
alert( 'ERROR IN btnRestdayCreateClick: ' + e );
}
},
//Added by Jammi Dee 01/07/2013
pic_ShiftAddClick: function(inSender) {
try {
this.ddNewShift.show();
} catch(e) {
console.error('ERROR IN pic_ShiftAddClick: ' + e);
alert( 'ERROR IN pic_ShiftAddClick: ' + e );
}
},
//Added by Jammi Dee 01/07/2013
pic_RestAddClick: function(inSender) {
try {
this.ddNewRestday
.show();
} catch(e) {
console.error('ERROR IN pic_RestAddClick: ' + e);
alert( 'ERROR IN pic_RestAddClick: ' + e );
}
},
//Added by Jammi Dee 05/05/2013
pic_backClick: function(inSender) {
try {
app.pdWaitLoadPage.show();
this.navPgMainMaintenance.update();
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
console.error('ERROR IN lblBackClick: ' + e);
}
},
_end: 0
});

PgMainMaintenanceOrg.widgets = {
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
navPgMainMaintenance: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMainMaintenance\"","targetProperty":"pageName"}, {}]
}]
}]
}],
svarOrgDivisionView: ["wm.ServiceVariable", {"operation":"qryTblOrgDivisionView","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryTblOrgDivisionViewInputs"}, {}]
}],
svarOrgDepartmentView: ["wm.ServiceVariable", {"operation":"qryTblOrgDepartmentView","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryTblOrgDepartmentViewInputs"}, {}]
}],
svarOrgSectionView: ["wm.ServiceVariable", {"operation":"qryTblOrgSectionView","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryTblOrgSectionViewInputs"}, {}]
}],
svarOrgLocationView: ["wm.ServiceVariable", {"operation":"qryTblOrgLocationView","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryTblOrgLocationViewInputs"}, {}]
}],
svarExecGenericNonQueryDiv: ["wm.ServiceVariable", {"operation":"execNonQuery","service":"svcExecGenericNonQuery"}, {}, {
input: ["wm.ServiceInput", {"type":"execNonQueryInputs"}, {}]
}],
svarExecGenericNonQueryDep: ["wm.ServiceVariable", {"operation":"execNonQuery","service":"svcExecGenericNonQuery"}, {}, {
input: ["wm.ServiceInput", {"type":"execNonQueryInputs"}, {}]
}],
svarExecGenericNonQuerySec: ["wm.ServiceVariable", {"operation":"execNonQuery","service":"svcExecGenericNonQuery"}, {}, {
input: ["wm.ServiceInput", {"type":"execNonQueryInputs"}, {}]
}],
svarExecGenericNonQueryLoc: ["wm.ServiceVariable", {"operation":"execNonQuery","service":"svcExecGenericNonQuery"}, {}, {
input: ["wm.ServiceInput", {"type":"execNonQueryInputs"}, {}]
}],
svarOrgShiftView: ["wm.ServiceVariable", {"operation":"qryTblOrgShiftView","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryTblOrgShiftViewInputs"}, {}]
}],
svarOrgRestdayView: ["wm.ServiceVariable", {"operation":"qryTblOrgRestdayView","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryTblOrgRestdayViewInputs"}, {}]
}],
pdLoading: ["wm.PageDialog", {"desktopHeight":"100px","height":"100px","hideControls":true,"pageName":"Main","width":"280px"}, {}],
ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","corner":"cr","modal":false,"title":"Organization Lookup Help"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgMainMaintenanceOrg.html"}, {}]
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
buttonBar1: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","fitToContentHeight":true,"height":"33px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnSelectSelect: ["wm.Button", {"caption":"Select","margin":"4"}, {"onclick":"btnSelectSelectClick"}],
btnSelectClose: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddSelectEntity.hide"}]
}]
}],
ddNewDivision: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget2","desktopHeight":"200px","height":"200px","title":"New Division","width":"500px"}, {"onShow":"ddNewDivisionShow"}, {
containerWidget2: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
txtDivNew: ["wm.Text", {"caption":"ID:","captionAlign":"left","dataValue":undefined,"displayValue":"","width":"250px"}, {}],
txtDivNewDescription: ["wm.Text", {"caption":"Description:","captionAlign":"left","dataValue":undefined,"displayValue":"","width":"400px"}, {}],
txtDivNewContact01: ["wm.Text", {"caption":"Contact #1:","captionAlign":"left","dataValue":undefined,"displayValue":"","width":"250px"}, {}],
txtDivNewContact02: ["wm.Text", {"caption":"Contact #2:","captionAlign":"left","dataValue":undefined,"displayValue":"","width":"250px"}, {}],
selDivNewStatus: ["wm.SelectMenu", {"caption":"Status:","captionAlign":"left","dataField":"dataValue","dataValue":"ACTIVE","displayField":"dataValue","displayValue":"ACTIVE","options":"ACTIVE,LOCKED","width":"250px"}, {}]
}],
buttonBar2: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","fitToContentHeight":true,"height":"33px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnDivCreate: ["wm.Button", {"caption":"Create","margin":"4"}, {"onclick":"btnDivCreateClick"}],
btnDivCancel: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"ddNewDivision.hide"}]
}]
}],
ddNewDepartment: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget3","desktopHeight":"310px","height":"310px","title":"New Department","width":"500px"}, {"onShow":"ddNewDepartmentShow"}, {
containerWidget3: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
txtDepNew: ["wm.Text", {"caption":"ID:","captionAlign":"left","dataValue":undefined,"displayValue":"","width":"250px"}, {}],
txtDepNewDescription: ["wm.Text", {"caption":"Description:","captionAlign":"left","dataValue":undefined,"displayValue":"","width":"400px"}, {}],
txtDepNewItmgrId: ["wm.Text", {"caption":"Itmgr ID:","captionAlign":"left","dataValue":undefined,"displayValue":"","width":"250px"}, {}],
txtDepNewItmgrName: ["wm.Text", {"caption":"IT Mgr Name::","captionAlign":"left","dataValue":undefined,"displayValue":"","width":"400px"}, {}],
txtDepNewContact01: ["wm.Text", {"caption":"Contact #1:","captionAlign":"left","dataValue":undefined,"displayValue":"","width":"250px"}, {}],
txtDepNewContact02: ["wm.Text", {"caption":"Contact #2:","captionAlign":"left","dataValue":undefined,"displayValue":"","width":"250px"}, {}],
txtDepNewLocation: ["wm.Text", {"caption":"Location:","captionAlign":"left","dataValue":"_NA_","displayValue":"_NA_","width":"250px"}, {}],
selDepNewStatus: ["wm.SelectMenu", {"caption":"Status:","captionAlign":"left","dataField":"dataValue","dataValue":"ACTIVE","displayField":"dataValue","displayValue":"ACTIVE","options":"ACTIVE,LOCKED","width":"250px"}, {}],
txtDepNewParent: ["wm.Text", {"caption":"Parent ID:","captionAlign":"left","dataValue":"_NA_","displayValue":"_NA_","width":"400px"}, {}]
}],
buttonBar3: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","fitToContentHeight":true,"height":"33px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnDepCreate: ["wm.Button", {"caption":"Create","margin":"4"}, {"onclick":"btnDepCreateClick"}],
btnDepCancel: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"ddNewDepartment.hide"}]
}]
}],
ddNewSection: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget4","desktopHeight":"200px","height":"200px","title":"New Section","width":"500px"}, {"onShow":"ddNewSectionShow"}, {
containerWidget4: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
txtSecNew: ["wm.Text", {"caption":"ID:","captionAlign":"left","dataValue":undefined,"displayValue":"","width":"250px"}, {}],
txtSecNewDescription: ["wm.Text", {"caption":"Description:","captionAlign":"left","dataValue":undefined,"displayValue":"","width":"400px"}, {}],
txtSecNewContact01: ["wm.Text", {"caption":"Contact #1:","captionAlign":"left","dataValue":undefined,"displayValue":"","width":"250px"}, {}],
txtSecNewContact02: ["wm.Text", {"caption":"Contact #2:","captionAlign":"left","dataValue":undefined,"displayValue":"","width":"250px"}, {}],
selSecNewStatus: ["wm.SelectMenu", {"caption":"Status:","captionAlign":"left","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","options":"ACTIVE,LOCKED","width":"250px"}, {}]
}],
buttonBar4: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","fitToContentHeight":true,"height":"33px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnSecCreate: ["wm.Button", {"caption":"Create","margin":"4"}, {"onclick":"btnSecCreateClick"}],
btnSecCancel: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"ddNewSection.hide"}]
}]
}],
ddNewLocation: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget5","desktopHeight":"280px","height":"280px","title":"New Location","width":"500px"}, {"onShow":"ddNewLocationShow"}, {
containerWidget5: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
txtLocNew: ["wm.Text", {"caption":"ID:","captionAlign":"left","dataValue":undefined,"displayValue":"","width":"250px"}, {}],
txtLocNewDescription: ["wm.Text", {"caption":"Description:","captionAlign":"left","dataValue":undefined,"displayValue":"","width":"400px"}, {}],
txtLocNewContact01: ["wm.Text", {"caption":"Contact #1:","captionAlign":"left","dataValue":undefined,"displayValue":"","width":"250px"}, {}],
txtLocNewContact02: ["wm.Text", {"caption":"Contact #2:","captionAlign":"left","dataValue":undefined,"displayValue":"","width":"250px"}, {}],
txtLocNewGeoDesc: ["wm.Text", {"caption":"Geo Description:","captionAlign":"left","dataValue":undefined,"displayValue":"","width":"400px"}, {}],
txtLocNewGeoLon: ["wm.Text", {"caption":"Longitude:","captionAlign":"left","dataValue":"0.0","displayValue":"0.0","width":"250px"}, {}],
txtLocNewGeoLat: ["wm.Text", {"caption":"Latitude:","captionAlign":"left","dataValue":"0.0","displayValue":"0.0","width":"250px"}, {}],
selLocNewStatus: ["wm.SelectMenu", {"caption":"Status:","captionAlign":"left","dataField":"dataValue","dataValue":"ACTIVE","displayField":"dataValue","displayValue":"ACTIVE","options":"ACTIVE,LOCKED","width":"250px"}, {}]
}],
buttonBar5: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","fitToContentHeight":true,"height":"33px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnLocCreate: ["wm.Button", {"caption":"Create","margin":"4"}, {"onclick":"btnLocCreateClick"}],
btnLocCancel: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"ddNewLocation.hide"}]
}]
}],
ddNewShift: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget6","positionNear":"","title":"New Shift","width":"700px"}, {}, {
containerWidget6: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
txtShiftNew: ["wm.Text", {"caption":"ID:","captionAlign":"left","dataValue":undefined,"displayValue":"","width":"250px"}, {}],
txtShiftNewDescription: ["wm.Text", {"caption":"Description:","captionAlign":"left","dataValue":undefined,"displayValue":"","width":"400px"}, {}],
pnlTime: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
tmFrom: ["wm.Time", {"caption":"From:","captionAlign":"left","captionSize":"60px","dataValue":undefined,"displayValue":"","width":"200px"}, {}],
tmTo: ["wm.Time", {"caption":"To:","captionAlign":"left","captionSize":"60px","dataValue":undefined,"displayValue":"","width":"200px"}, {}],
selPolicy: ["wm.SelectMenu", {"caption":"Policy:","captionAlign":"left","captionSize":"60px","dataValue":undefined,"displayValue":"","width":"200px"}, {}]
}],
lblFlexi: ["wm.Label", {"caption":"Flex Time","padding":"4"}, {}],
pnlFlex: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
selAllowFlex: ["wm.SelectMenu", {"caption":"Allow:","captionAlign":"left","captionSize":"60px","dataValue":undefined,"displayValue":"","width":"200px"}, {}],
txtFlexIn: ["wm.Text", {"caption":"Flex IN in Minutes:","captionAlign":"left","captionSize":"120px","dataValue":undefined,"displayValue":"","width":"200px"}, {}],
txtFlexOut: ["wm.Text", {"caption":"Flex OUT in Minutes:","captionAlign":"left","captionSize":"130px","dataValue":undefined,"displayValue":"","width":"210px"}, {}]
}],
lblBreak: ["wm.Label", {"caption":"Break Information","padding":"4"}, {}],
pnlBreak: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
tmBrkFrom: ["wm.Time", {"caption":"From:","captionAlign":"left","captionSize":"60px","dataValue":undefined,"displayValue":"","width":"200px"}, {}],
tmBrkTo: ["wm.Time", {"caption":"To:","captionAlign":"left","captionSize":"60px","dataValue":undefined,"displayValue":"","width":"200px"}, {}],
txtBrkMinutes: ["wm.Text", {"caption":"Minutes:","captionAlign":"left","captionSize":"60px","dataValue":undefined,"displayValue":"","width":"200px"}, {}]
}],
lblOT: ["wm.Label", {"caption":"OT Information","padding":"4"}, {}],
pnlOT: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
selAllowOT: ["wm.SelectMenu", {"caption":"Allow:","captionAlign":"left","captionSize":"60px","dataValue":undefined,"displayValue":"","width":"200px"}, {}],
txtOTMinimum: ["wm.Text", {"caption":"Minimum Minutes:","captionAlign":"left","captionSize":"120px","dataValue":undefined,"displayValue":"","width":"200px"}, {}],
tmOTStart: ["wm.Time", {"caption":"OT Start:","captionAlign":"left","captionSize":"60px","dataValue":undefined,"displayValue":"","width":"200px"}, {}]
}],
pnlOT2: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
tmOT01: ["wm.Time", {"caption":"OT 01:","captionAlign":"left","captionSize":"60px","dataValue":undefined,"displayValue":"","width":"200px"}, {}],
tmOT02: ["wm.Time", {"caption":"OT 02:","captionAlign":"left","captionSize":"60px","dataValue":undefined,"displayValue":"","width":"200px"}, {}],
tmOT03: ["wm.Time", {"caption":"OT 03:","captionAlign":"left","captionSize":"60px","dataValue":undefined,"displayValue":"","width":"200px"}, {}]
}],
lblDiff: ["wm.Label", {"caption":"Differential Information","padding":"4"}, {}],
pnlDiff: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
selAllowDiff: ["wm.SelectMenu", {"caption":"Allow:","captionAlign":"left","captionSize":"60px","dataValue":undefined,"displayValue":"","width":"200px"}, {}],
txtDiffMinimum: ["wm.Text", {"caption":"Minimum Minutes:","captionAlign":"left","captionSize":"120px","dataValue":undefined,"displayValue":"","width":"200px"}, {}],
tmDiffStart: ["wm.Time", {"caption":"Diff Start:","captionAlign":"left","captionSize":"60px","dataValue":undefined,"displayValue":"","width":"200px"}, {}]
}],
pnlDiff02: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
tmDiff01: ["wm.Time", {"caption":"Diff 01:","captionAlign":"left","captionSize":"60px","dataValue":undefined,"displayValue":"","width":"200px"}, {}],
tmDiff02: ["wm.Time", {"caption":"Diff 02:","captionAlign":"left","captionSize":"60px","dataValue":undefined,"displayValue":"","width":"200px"}, {}],
tmDiff03: ["wm.Time", {"caption":"Diff 03:","captionAlign":"left","captionSize":"60px","dataValue":undefined,"displayValue":"","width":"200px"}, {}]
}]
}],
buttonBar6: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","fitToContentHeight":true,"height":"33px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnShiftCreate: ["wm.Button", {"caption":"Create","margin":"4"}, {"onclick":"btnShiftCreateClick"}],
btnShiftCancel: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"ddNewShift.hide"}]
}]
}],
ddNewRestday: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget7","desktopHeight":"340px","height":"340px","title":"New Restday","width":"500px"}, {}, {
containerWidget7: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
txtShiftNew1: ["wm.Text", {"caption":"ID:","captionAlign":"left","dataValue":undefined,"displayValue":"","width":"250px"}, {}],
txtLocNewDescription1: ["wm.Text", {"caption":"Description:","captionAlign":"left","dataValue":undefined,"displayValue":"","width":"400px"}, {}],
selSun: ["wm.SelectMenu", {"caption":"Sunday:","captionAlign":"left","dataField":"dataValue","dataValue":"YES","displayField":"dataValue","displayValue":"YES","options":"YES,NO","width":"200px"}, {}],
selMon: ["wm.SelectMenu", {"caption":"Monday:","captionAlign":"left","dataField":"dataValue","dataValue":"NO","displayField":"dataValue","displayValue":"NO","options":"YES,NO","width":"200px"}, {}],
selTues: ["wm.SelectMenu", {"caption":"Tuesday:","captionAlign":"left","dataField":"dataValue","dataValue":"NO","displayField":"dataValue","displayValue":"NO","options":"YES,NO","width":"200px"}, {}],
selWed: ["wm.SelectMenu", {"caption":"Wednesday:","captionAlign":"left","dataField":"dataValue","dataValue":"NO","displayField":"dataValue","displayValue":"NO","options":"YES,NO","width":"200px"}, {}],
selThu: ["wm.SelectMenu", {"caption":"Thursday:","captionAlign":"left","dataField":"dataValue","dataValue":"NO","displayField":"dataValue","displayValue":"NO","options":"YES,NO","width":"200px"}, {}],
selFri: ["wm.SelectMenu", {"caption":"Friday:","captionAlign":"left","dataField":"dataValue","dataValue":"NO","displayField":"dataValue","displayValue":"NO","options":"YES,NO","width":"200px"}, {}],
selSat: ["wm.SelectMenu", {"caption":"Saturday:","captionAlign":"left","dataField":"dataValue","dataValue":"YES","displayField":"dataValue","displayValue":"YES","options":"YES,NO","width":"200px"}, {}],
selDivNewStatus1: ["wm.SelectMenu", {"caption":"Status:","captionAlign":"left","dataField":"dataValue","dataValue":"ACTIVE","displayField":"dataValue","displayValue":"ACTIVE","options":"ACTIVE,LOCKED","width":"250px"}, {}]
}],
buttonBar7: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","fitToContentHeight":true,"height":"33px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnRestdayCreate: ["wm.Button", {"caption":"Create","margin":"4"}, {"onclick":"btnRestdayCreateClick"}],
btnRestdayCancel: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"ddNewRestday.hide"}]
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
pic_back: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Back","source":"resources/images/buttons/arrowleft24.png","width":"24px"}, {"onclick":"pic_backClick"}],
Sep2: ["wm.Spacer", {"height":"24px","width":"5px"}, {}]
}],
pnlMenuButtonRight: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
pic_help: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Help","source":"resources/images/buttons/helpred24.png","width":"24px"}, {"onclick":"ddPgMainConfigHelp.show"}],
pic_about: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"About","source":"resources/images/buttons/aboutblue24.png","width":"24px"}, {"onclick":"pdAbout.show"}]
}]
}],
spacer1: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
tabOrg: ["wm.TabLayers", {}, {}, {
layDivision: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Division","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
pnlDivTop: ["wm.Panel", {"desktopHeight":"28px","enableTouchHeight":true,"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"35px","verticalAlign":"middle","width":"100%"}, {}, {
txtDivId: ["wm.Text", {"caption":"ID:","captionAlign":"left","captionSize":"40px","dataValue":undefined,"displayValue":"","width":"160px"}, {}],
txtDivDescription: ["wm.Text", {"caption":"Description:","captionAlign":"left","captionSize":"80px","dataValue":undefined,"displayValue":"","width":"400px"}, {}],
pic_DivAdd: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Add new Division","source":"resources/images/buttons/addball24.png","width":"30px"}, {"onclick":"ddNewDivision.show"}],
pic_DivDelete: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Delete selected item!","source":"resources/images/buttons/Recyclebin24.png","width":"30px"}, {"onclick":"pic_DivDeleteClick"}]
}],
pnlDivBody: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
dgDiv: ["wm.DojoGrid", {"columns":[{"show":false,"field":"juid","title":"Juid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"entityid","title":"Entity","width":"100px","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"orgid","title":"Division ID","width":"100px","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"description","title":"Description","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"pid","title":"Parent ID","width":"100px","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"contact01","title":"Contact Number 1","width":"200px","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"contact02","title":"Contact Number 2","width":"200px","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"sstatus","title":"Status","width":"100px","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Entity: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Division ID: \" + ${orgid} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n+ \"<div class='MobileRow'>Contact Number 1: \" + ${contact01} + \"</div>\"\n+ \"<div class='MobileRow'>Contact Number 2: \" + ${contact02} + \"</div>\"\n+ \"<div class='MobileRow'>Status: \" + ${sstatus} + \"</div>\"\n","mobileColumn":true}],"height":"100%","margin":"4"}, {"onClick":"dgDivClick","onSelect":"dgDivClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarOrgDivisionView","targetProperty":"dataSet"}, {}]
}]
}]
}]
}],
layDepartment: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Department","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
pnlDepTop: ["wm.Panel", {"desktopHeight":"28px","enableTouchHeight":true,"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"35px","verticalAlign":"middle","width":"100%"}, {}, {
txtDepId: ["wm.Text", {"caption":"ID:","captionAlign":"left","captionSize":"40px","dataValue":undefined,"displayValue":"","width":"160px"}, {}],
txtDepDescription: ["wm.Text", {"caption":"Description:","captionAlign":"left","captionSize":"80px","dataValue":undefined,"displayValue":"","width":"400px"}, {}],
pic_DepAdd: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Add new Department","source":"resources/images/buttons/addball24.png","width":"30px"}, {"onclick":"ddNewDepartment.show"}],
pic_DepDelete: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Delete selected item!","source":"resources/images/buttons/Recyclebin24.png","width":"30px"}, {"onclick":"pic_DepDeleteClick"}]
}],
pnlDepBody: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
dgDep: ["wm.DojoGrid", {"columns":[{"show":false,"field":"juid","title":"Juid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"entityid","title":"Entity","width":"100px","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"orgid","title":"Department ID","width":"120px","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"description","title":"Description","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"pid","title":"Parent ID","width":"100px","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"contact01","title":"Contact # 1","width":"150px","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"contact02","title":"Contact # 2","width":"150px","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"sstatus","title":"Status","width":"100px","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"itmgrid","title":"Mgr. ID.","width":"100px","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"itmgrname","title":"Mgr. Name","width":"100px","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"location","title":"Location","width":"100px","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Entity: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Department ID: \" + ${orgid} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n+ \"<div class='MobileRow'>Contact # 1: \" + ${contact01} + \"</div>\"\n+ \"<div class='MobileRow'>Contact # 2: \" + ${contact02} + \"</div>\"\n+ \"<div class='MobileRow'>Status: \" + ${sstatus} + \"</div>\"\n+ \"<div class='MobileRow'>Mgr. ID.: \" + ${itmgrid} + \"</div>\"\n+ \"<div class='MobileRow'>Mgr. Name: \" + ${itmgrname} + \"</div>\"\n","mobileColumn":true}],"height":"100%","margin":"4"}, {"onClick":"dgDepClick","onSelect":"dgDepClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarOrgDepartmentView","targetProperty":"dataSet"}, {}]
}]
}]
}]
}],
laySection: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Section","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
pnlSecTop: ["wm.Panel", {"desktopHeight":"28px","enableTouchHeight":true,"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"35px","verticalAlign":"middle","width":"100%"}, {}, {
txtSecId: ["wm.Text", {"caption":"ID:","captionAlign":"left","captionSize":"40px","dataValue":undefined,"displayValue":"","width":"160px"}, {}],
txtSecDescription: ["wm.Text", {"caption":"Description:","captionAlign":"left","captionSize":"80px","dataValue":undefined,"displayValue":"","width":"400px"}, {}],
pic_SecAdd: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Add new Section","source":"resources/images/buttons/addball24.png","width":"30px"}, {"onclick":"ddNewSection.show"}],
pic_SecDelete: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Delete selected item!","source":"resources/images/buttons/Recyclebin24.png","width":"30px"}, {"onclick":"pic_SecDeleteClick"}]
}],
pnlSecBody: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
dgSec: ["wm.DojoGrid", {"columns":[{"show":false,"field":"juid","title":"Juid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"entityid","title":"Entity","width":"100px","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"orgid","title":"Section ID","width":"100px","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"description","title":"Description","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"pid","title":"Parent ID","width":"100px","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"contact01","title":"Contact # 1","width":"150px","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"contact02","title":"Contact # 2","width":"150px","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"sstatus","title":"Status","width":"100px","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Entity: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Section ID: \" + ${orgid} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n+ \"<div class='MobileRow'>Contact # 1: \" + ${contact01} + \"</div>\"\n+ \"<div class='MobileRow'>Contact # 2: \" + ${contact02} + \"</div>\"\n+ \"<div class='MobileRow'>Status: \" + ${sstatus} + \"</div>\"\n","mobileColumn":true}],"height":"100%","margin":"4"}, {"onClick":"dgSecClick","onSelect":"dgSecClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarOrgSectionView","targetProperty":"dataSet"}, {}]
}]
}]
}]
}],
layLocation: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Location","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
pnlLocTop: ["wm.Panel", {"desktopHeight":"28px","enableTouchHeight":true,"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"35px","verticalAlign":"middle","width":"100%"}, {}, {
txtLocId: ["wm.Text", {"caption":"ID:","captionAlign":"left","captionSize":"40px","dataValue":undefined,"displayValue":"","width":"160px"}, {}],
txtLocDescription: ["wm.Text", {"caption":"Description:","captionAlign":"left","captionSize":"80px","dataValue":undefined,"displayValue":"","width":"400px"}, {}],
pic_LocAdd: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Add new Location","source":"resources/images/buttons/addball24.png","width":"30px"}, {"onclick":"ddNewLocation.show"}],
pic_LocDelete: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Delete selected item!","source":"resources/images/buttons/Recyclebin24.png","width":"30px"}, {"onclick":"pic_LocDeleteClick"}]
}],
pnlLocBody: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
dgLoc: ["wm.DojoGrid", {"columns":[{"show":false,"field":"juid","title":"Juid","width":"100px","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"entityid","title":"Entity","width":"100px","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"orgid","title":"Location ID","width":"100px","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"description","title":"Description","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"pid","title":"Parent ID","width":"100px","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"contact01","title":"Contact # 1","width":"150px","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"contact02","title":"Contact # 2","width":"150px","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"sstatus","title":"Status","width":"100px","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"geodesc","title":"Geodesc","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"geolon","title":"Geolon","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"geolat","title":"Geolat","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"category","title":"Category","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Entity: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Location ID: \" + ${orgid} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n+ \"<div class='MobileRow'>Contact # 1: \" + ${contact01} + \"</div>\"\n+ \"<div class='MobileRow'>Contact # 2: \" + ${contact02} + \"</div>\"\n+ \"<div class='MobileRow'>Status: \" + ${sstatus} + \"</div>\"\n+ \"<div class='MobileRow'>Category: \" + ${category} + \"</div>\"\n","mobileColumn":true}],"height":"100%","margin":"4"}, {"onClick":"dgLocClick","onSelect":"dgLocClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarOrgLocationView","targetProperty":"dataSet"}, {}]
}]
}]
}]
}],
layShift: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Shift","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
pnlShiftTop: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtShiftId: ["wm.Text", {"caption":"ID:","captionAlign":"left","captionSize":"40px","dataValue":undefined,"displayValue":"","width":"160px"}, {}],
txtshiftDescription: ["wm.Text", {"caption":"Description:","captionAlign":"left","captionSize":"80px","dataValue":undefined,"displayValue":"","width":"400px"}, {}],
pic_ShiftAdd: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Add new Shift","source":"resources/images/buttons/addball24.png","width":"30px"}, {"onclick":"pic_ShiftAddClick"}],
pic_ShiftDelete: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Delete selected item!","source":"resources/images/buttons/Recyclebin24.png","width":"30px"}, {"onclick":"pic_ShiftDeleteClick"}]
}],
dgShift: ["wm.DojoGrid", {"columns":[{"show":false,"field":"juid","title":"Juid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"entityid","title":"Entity ID","width":"100px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"orgid","title":"Shift ID","width":"100px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"description","title":"Description","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"pid","title":"Pid","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"timefrom","title":"Timefrom","width":"80px","align":"left","formatFunc":"wm_date_formatter","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"timeto","title":"Timeto","width":"80px","align":"left","formatFunc":"wm_date_formatter","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"breaktime","title":"Breaktime","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"breakstart","title":"Breakstart","width":"80px","align":"left","formatFunc":"wm_date_formatter","formatProps":{"formatLength":"medium","dateType":"time"},"editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"breakend","title":"Breakend","width":"80px","align":"left","formatFunc":"wm_date_formatter","formatProps":{"formatLength":"medium","dateType":"time"},"editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"axing","title":"Xd","width":"60px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"swipepolicy","title":"S Policy","width":"100px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"flexAllow","title":"FlexAllow","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"flexIn","title":"FlexIn","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"flexOut","title":"FlexOut","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"otAllow","title":"OtAllow","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"otMinimum","title":"OtMinimum","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"otStart","title":"OtStart","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"otEnd01","title":"OtEnd01","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"otEnd02","title":"OtEnd02","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"otEnd03","title":"OtEnd03","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"diffAllow","title":"DiffAllow","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"diffStart","title":"DiffStart","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"diffEnd01","title":"DiffEnd01","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"diffEnd02","title":"DiffEnd02","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"diffEnd03","title":"DiffEnd03","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":true,"field":"sstatus","title":"Status","width":"100px","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Shift ID: \" + ${orgid} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n+ \"<div class='MobileRow'>Timefrom: \" + wm.List.prototype.dateFormatter({}, null,null,null,${timefrom}) + \"</div>\"\n+ \"<div class='MobileRow'>Timeto: \" + wm.List.prototype.dateFormatter({}, null,null,null,${timeto}) + \"</div>\"\n+ \"<div class='MobileRow'>Breaktime: \" + ${breaktime} + \"</div>\"\n+ \"<div class='MobileRow'>Breakstart: \" + wm.List.prototype.dateFormatter({\"formatLength\":\"medium\",\"dateType\":\"time\"}, null,null,null,${breakstart}) + \"</div>\"\n+ \"<div class='MobileRow'>Breakend: \" + wm.List.prototype.dateFormatter({\"formatLength\":\"medium\",\"dateType\":\"time\"}, null,null,null,${breakend}) + \"</div>\"\n+ \"<div class='MobileRow'>Xd: \" + ${axing} + \"</div>\"\n+ \"<div class='MobileRow'>S Policy: \" + ${swipepolicy} + \"</div>\"\n+ \"<div class='MobileRow'>Status: \" + ${sstatus} + \"</div>\"\n","mobileColumn":true}],"height":"100%","margin":"4"}, {"onClick":"dgShiftClick","onSelect":"dgShiftClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarOrgShiftView","targetProperty":"dataSet"}, {}]
}]
}]
}],
layRestday: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Restday","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
pnlRestdayTop: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtRestId: ["wm.Text", {"caption":"ID:","captionAlign":"left","captionSize":"40px","dataValue":undefined,"displayValue":"","width":"160px"}, {}],
txtRestDescription: ["wm.Text", {"caption":"Description:","captionAlign":"left","captionSize":"80px","dataValue":undefined,"displayValue":"","width":"400px"}, {}],
pic_RestAdd: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Add new restday","source":"resources/images/buttons/addball24.png","width":"30px"}, {"onclick":"pic_RestAddClick"}],
pic_RestDelete: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Delete selected item!","source":"resources/images/buttons/Recyclebin24.png","width":"30px"}, {"onclick":"pic_RestDeleteClick"}]
}],
dgRestday: ["wm.DojoGrid", {"columns":[{"show":false,"title":"Juid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"juid"},{"show":true,"title":"Entity ID","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":true,"title":"Restday ID","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"orgid"},{"show":true,"title":"Description","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"description"},{"show":false,"title":"Pid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"pid"},{"show":true,"title":"Sun","width":"80px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"dsun"},{"show":true,"title":"Mon","width":"80px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"dmon"},{"show":true,"title":"Tues","width":"80px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"dtues"},{"show":true,"title":"Wed","width":"80px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"dwed"},{"show":true,"title":"Thu","width":"80px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"dthu"},{"show":true,"title":"Fri","width":"80px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"dfri"},{"show":true,"title":"Sat","width":"80px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"dsat"},{"show":true,"title":"Status","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Restday ID: \" + ${orgid} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n+ \"<div class='MobileRow'>Sun: \" + ${dsun} + \"</div>\"\n+ \"<div class='MobileRow'>Mon: \" + ${dmon} + \"</div>\"\n+ \"<div class='MobileRow'>Tues: \" + ${dtues} + \"</div>\"\n+ \"<div class='MobileRow'>Wed: \" + ${dwed} + \"</div>\"\n+ \"<div class='MobileRow'>Thu: \" + ${dthu} + \"</div>\"\n+ \"<div class='MobileRow'>Fri: \" + ${dfri} + \"</div>\"\n+ \"<div class='MobileRow'>Sat: \" + ${dsat} + \"</div>\"\n+ \"<div class='MobileRow'>Status: \" + ${sstatus} + \"</div>\"\n"}],"height":"100%","margin":"4"}, {"onClick":"dgRestdayClick","onSelect":"dgRestdayClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarOrgRestdayView","targetProperty":"dataSet"}, {}]
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

PgMainMaintenanceOrg.prototype._cssText = 'body.tundra .PgMainMaintenanceOrg .wmlayout .PgMainMaintenanceOrg-pnlHeader {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainMaintenanceOrg .wmlayout .PgMainMaintenanceOrg-pnlTitle {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainMaintenanceOrg .wmlayout .PgMainMaintenanceOrg-lblTitle {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:14pt;\
}\
body.tundra .PgMainMaintenanceOrg .wmlayout .PgMainMaintenanceOrg-pnlMenuBar {\
background-color:#00008B;\
}\
body.tundra .PgMainMaintenanceOrg .wmlayout .PgMainMaintenanceOrg-pnlFooter {\
background-color:#00008B;\
}\
body.tundra .PgMainMaintenanceOrg .wmlayout .PgMainMaintenanceOrg-txtUserId {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainMaintenanceOrg .PgMainMaintenanceOrg-pnlLayoutMain.wmlayout {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainMaintenanceOrg .wmlayout .PgMainMaintenanceOrg-txtPassword {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainMaintenanceOrg .wmlayout .PgMainMaintenanceOrg-lblManageTicket {\
font-family: Tahoma;\
}\
body.tundra .PgMainMaintenanceOrg .wmlayout .PgMainMaintenanceOrg-lblUserInfo {\
font-family:Tahoma;\
}\
body.tundra .PgMainMaintenanceOrg .wmlayout .PgMainMaintenanceOrg-lblBorder {\
font-family:Tahoma;\
}\
body.tundra .PgMainMaintenanceOrg .wmlayout .PgMainMaintenanceOrg-lblLogout {\
font-family:Tahoma;\
}\
body.tundra .PgMainMaintenanceOrg .wmlayout .PgMainMaintenanceOrg-lblSep {\
font-family:Tahoma;\
}\
body.tundra .PgMainMaintenanceOrg .wmlayout .PgMainMaintenanceOrg-lblManageUser {\
font-family:Tahoma;\
}\
body.tundra .PgMainMaintenanceOrg .wmlayout .PgMainMaintenanceOrg-pnlBody {\
}\
body.tundra .PgMainMaintenanceOrg .wmlayout .PgMainMaintenanceOrg-lblManageLookUp {\
font-family:Tahoma;\
}\
';
PgMainMaintenanceOrg.prototype._htmlText = '';