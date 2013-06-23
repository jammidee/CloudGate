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
* Date: 10/04/2012
* Modified by: Jammi Dee 10/04/2012
*
*/
/*
This is a sample page that can used as template
*/
dojo.declare("PgMainParty", wm.Page, {
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
//Added by Jammi Dee 10/17/2012
this.varOps.setValue("dataValue", "NOP");
this.selRoleType.setOptions("EMPLOYEE,CUSTOMER,SUBCON,PROSPECT");
this.layEmployee.setShowing(false);
this.tabParty.setShowing(false);
//Initialize the form
this.clearForm();
// Initialize the application - Jammi Dee 03/25/2012
this.initApplication();
//Added by Jammi Dee 11/25/2012
app.svarUpdateSessionApp.setValue("input.pJuid",app.varSessionId.getValue("dataValue"));
app.svarUpdateSessionApp.update();
// Added by Jammi Dee 05/06/2012
app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarLogging.setValue("input.pMsg","Manage Parties Page.");
app.svarLogging.setValue("input.pModuleId","PARTY");
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
this.lblTitle.setCaption("Party : Manager" );
this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
},
//Added by Jammi Dee 10/22/2012
clearForm: function() {
//Added by Jammi Dee 10/22/2012
//Initialize objects. This will be used for comparison of a BLANK content
this.txtPartyId.setValue("dataValue", "-");
this.selRoleType.setValue("dataValue", "EMPLOYEE");
this.selStatus.setValue("dataValue", "ACTIVE");
this.selTitle.setValue("dataValue", "MR");
this.txtFirstName.setValue("dataValue", "-");
this.txtMiddleName.setValue("dataValue", "-");
this.txtLastName.setValue("dataValue", "-");
this.txtSuffix.setValue("dataValue", "-");
this.txtParent.setValue("dataValue", "-");
this.txtattachuser.setValue("dataValue", "-");
this.txtAddress01.setValue("dataValue", "-");
this.txtAddress02.setValue("dataValue", "-");
this.txtCity.setValue("dataValue", "-");
this.txtState.setValue("dataValue", "-");
this.txtZipCode.setValue("dataValue", "-");
this.selCountry.setValue("dataValue", "Philippines");
this.txtEmail.setValue("dataValue", "-");
this.txtCountryCodeHome.setValue("dataValue", "63");
this.txtAreaCodeHome.setValue("dataValue", "2");
this.txtPhoneHome.setValue("dataValue", "000-0000");
this.txtExtHome.setValue("dataValue", "0000");
this.txtCountryCodeWork.setValue("dataValue", "63");
this.txtAreaCodeWork.setValue("dataValue", "2");
this.txtPhoneWork.setValue("dataValue", "000-0000");
this.txtExtWork.setValue("dataValue", "0000");
this.txtCountryCodeMobile.setValue("dataValue", "63");
this.txtAreaCodeMobile.setValue("dataValue", "2");
this.txtPhoneMobile.setValue("dataValue", "000-0000");
this.txtExtMobile.setValue("dataValue", "0000");
this.txtCountryCodeFax.setValue("dataValue", "63");
this.txtAreaCodeFax.setValue("dataValue", "2");
this.txtPhoneFax.setValue("dataValue", "000-0000");
this.txtExtFax.setValue("dataValue", "0000");
},
//Added by Jammi Dee 12/29/2012
clearEmployeeForm: function() {
this.txtBadgeId.setValue("dataValue", "-");
this.txtDivision.setValue("dataValue", "-");
this.txtDepartment.setValue("dataValue", "-");
this.txtSection.setValue("dataValue", "-");
this.txtLocation.setValue("dataValue", "-");
this.txtRestDay.setValue("dataValue", "-");
this.txtShift.setValue("dataValue", "-");
this.txtManager.setValue("dataValue", "-");
this.txtDivisionDesc.setValue("dataValue", "-");
this.txtDepartmentDesc.setValue("dataValue", "-");
this.txtSectionDesc.setValue("dataValue", "-");
this.txtLocationDesc.setValue("dataValue", "-");
this.txtRestDayDesc.setValue("dataValue", "-");
this.txtShiftDesc.setValue("dataValue", "-");
this.txtManagerDesc.setValue("dataValue", "-");
},
//Added by Jammi Dee 12/28/2012
pic_NewPartyClick: function(inSender) {
try {
this.ddNewPartyRole.show();
} catch(e) {
console.error('ERROR IN pic_NewPartyClick: ' + e);
alert( 'ERROR IN pic_NewPartyClick: ' + e );
}
},
//Added by Jammi Dee 10/17/2012
ddNewPartyRoleShow: function(inSender) {
try {
this.selNewPartyRole.setOptions("EMPLOYEE,CUSTOMER,SUBCON,PROSPECT");
} catch(e) {
console.error('ERROR IN ddNewPartyRoleShow: ' + e);
alert( 'ERROR IN ddNewPartyRoleShow: ' + e );
}
},
//Added by Jammi Dee 10/17/2012
btnNewPartyRoleCreateClick: function(inSender) {
try {
this.varOps.setValue("dataValue", "NEW");
//Show the appropriate tab of the party
if( this.selNewPartyRole.getValue("dataValue") === "EMPLOYEE" ){
this.layEmployee.setShowing(true);
this.varRole.setValue("dataValue",            this.selNewPartyRole.getValue("dataValue") );
this.selRoleType.setValue("dataValue",        this.selNewPartyRole.getValue("dataValue") );
//Added by Jammi Dee 10/22/2012
//Check if the ID already exist. If exist go to EDIT mode
this.svarPersonCheck.setValue("input.pPartyId",    this.txtNewPartyId.getValue("dataValue") );
this.svarPersonCheck.setValue("input.pEntity",     app.varEntity.getValue("dataValue"));
this.svarPersonCheck.update();
}
} catch(e) {
console.error('ERROR IN btnNewPartyRoleCreateClick: ' + e);
alert( 'ERROR IN btnNewPartyRoleCreateClick: ' + e );
}
},
svarPersonCheckResult: function(inSender, inDeprecated) {
try {
var numRows = inSender.getCount();
var imatch = 0;
if (numRows > 0) {
//Edit mode
this.varOps.setValue("dataValue", "EDIT");
this.txtPartyId.setValue("dataValue", this.txtNewPartyId.getValue("dataValue") );
alert(" Supplied Party ID already exist. Switching to EDIT mode.");
this.svarPersonView.setValue("input.pPartyId",    this.txtNewPartyId.getValue("dataValue") );
this.svarPersonView.setValue("input.pEntity",     app.varEntity.getValue("dataValue"));
this.svarPersonView.update();
} else {
//New mode
this.varOps.setValue("dataValue", "NEW");
//Clean Form
this.clearForm();
this.clearEmployeeForm();
this.txtPartyId.setValue("dataValue", this.txtNewPartyId.getValue("dataValue") );
this.selRoleType.setValue("dataValue", this.selNewPartyRole.getValue("dataValue") );
//New mode
this.varOps.setValue("dataValue", "NEW");
}
this.ddNewPartyRole.hide();
this.tabParty.setShowing(true);
} catch(e) {
console.error('ERROR IN svarPersonCheckResult: ' + e);
alert( 'ERROR IN svarPersonCheckResult: ' + e );
}
},
//Added by Jammi Dee 10/22/2012
svarPersonViewResult: function(inSender, inDeprecated) {
try {
} catch(e) {
console.error('ERROR IN svarPersonViewResult: ' + e);
alert( 'ERROR IN svarPersonViewResult: ' + e );
}
},
//Added by Jammi Dee 10/17/2012
btnNewPartyRoleCancelClick: function(inSender) {
try {
this.varOps.setValue("dataValue", "NOP");
this.ddNewPartyRole.hide();
} catch(e) {
console.error('ERROR IN btnNewPartyRoleCancelClick: ' + e);
alert( 'ERROR IN btnNewPartyRoleCancelClick: ' + e );
}
},
//Added by Jammi Dee 12/29/2012
pic_EditClick: function(inSender) {
try {
this.varOps.setValue("dataValue", "EDIT");
this.ddEditParty.show();
} catch(e) {
console.error('ERROR IN pic_EditClick: ' + e);
alert( 'ERROR IN pic_EditClick: ' + e );
}
},
//Added by Jammi Dee 10/17/2012
ddEditPartyShow: function(inSender) {
try {
this.varOps.setValue("dataValue", "EDIT");
} catch(e) {
console.error('ERROR IN ddEditPartyShow: ' + e);
alert( 'ERROR IN ddEditPartyShow: ' + e );
}
},
//Added by Jammi Dee 10/17/2012
btnEditPartySelectClick: function(inSender) {
try {
this.ddEditParty.hide();
//alert( this.dgPartyView.selectedItem.getData().partyid );
//Added by Jammi Dee 12/28/2012
this.txtPartyId.setValue("dataValue",             this.dgPartyView.selectedItem.getValue("partyid") );
this.selRoleType.setValue("dataValue",            this.dgPartyView.selectedItem.getValue("roletype") );
this.selStatus.setValue("dataValue",              this.dgPartyView.selectedItem.getValue("sstatus") );
this.selTitle.setValue("dataValue",               this.dgPartyView.selectedItem.getValue("title") );
this.txtFirstName.setValue("dataValue",           this.dgPartyView.selectedItem.getValue("firstname") );
this.txtMiddleName.setValue("dataValue",          this.dgPartyView.selectedItem.getValue("middlename") );
this.txtLastName.setValue("dataValue",            this.dgPartyView.selectedItem.getValue("lastname") );
this.txtSuffix.setValue("dataValue",              this.dgPartyView.selectedItem.getValue("suffix") );
this.txtParent.setValue("dataValue",              this.dgPartyView.selectedItem.getValue("pid") );
this.txtattachuser.setValue("dataValue",          this.dgPartyView.selectedItem.getValue("userjuid") );
this.txtAddress01.setValue("dataValue",           this.dgPartyView.selectedItem.getValue("addr01") );
this.txtAddress02.setValue("dataValue",           this.dgPartyView.selectedItem.getValue("addr02") );
this.txtCity.setValue("dataValue",                this.dgPartyView.selectedItem.getValue("city") );
this.txtState.setValue("dataValue",               this.dgPartyView.selectedItem.getValue("empstate") );
this.txtZipCode.setValue("dataValue",             this.dgPartyView.selectedItem.getValue("zipcode") );
this.selCountry.setValue("dataValue",             this.dgPartyView.selectedItem.getValue("country") );
this.txtEmail.setValue("dataValue",               this.dgPartyView.selectedItem.getValue("email") );
this.txtCountryCodeHome.setValue("dataValue",     this.dgPartyView.selectedItem.getValue("countrycodehome") );
this.txtAreaCodeHome.setValue("dataValue",        this.dgPartyView.selectedItem.getValue("areacodehome") );
this.txtPhoneHome.setValue("dataValue",           this.dgPartyView.selectedItem.getValue("phonehome") );
this.txtExtHome.setValue("dataValue",             this.dgPartyView.selectedItem.getValue("extensionhome") );
this.txtCountryCodeWork.setValue("dataValue",     this.dgPartyView.selectedItem.getValue("countrycodework") );
this.txtAreaCodeWork.setValue("dataValue",        this.dgPartyView.selectedItem.getValue("areacodework") );
this.txtPhoneWork.setValue("dataValue",           this.dgPartyView.selectedItem.getValue("phonework") );
this.txtExtWork.setValue("dataValue",             this.dgPartyView.selectedItem.getValue("extensionwork") );
this.txtCountryCodeMobile.setValue("dataValue",   this.dgPartyView.selectedItem.getValue("countrycodemobile") );
this.txtAreaCodeMobile.setValue("dataValue",      this.dgPartyView.selectedItem.getValue("areacodemobile") );
this.txtPhoneMobile.setValue("dataValue",         this.dgPartyView.selectedItem.getValue("phonemobile") );
this.txtExtMobile.setValue("dataValue",           this.dgPartyView.selectedItem.getValue("extensionmobile") );
this.txtCountryCodeFax.setValue("dataValue",      this.dgPartyView.selectedItem.getValue("countrycodefax") );
this.txtAreaCodeFax.setValue("dataValue",         this.dgPartyView.selectedItem.getValue("areacodefax") );
this.txtPhoneFax.setValue("dataValue",            this.dgPartyView.selectedItem.getValue("phonefax") );
this.txtExtFax.setValue("dataValue",              this.dgPartyView.selectedItem.getValue("extensionfax") );
//Hold the JUID as reference
this.varJuid.setValue("dataValue", this.dgPartyView.selectedItem.getValue("juid") );
this.tabParty.setShowing(true);
//Check for the roletype and show appropriate tab
if( this.dgPartyView.selectedItem.getValue("roletype") === "EMPLOYEE"){
this.layEmployee.setShowing(true);
this.svarEmployeeExtView.setValue("input.pParent", this.dgPartyView.selectedItem.getValue("partyid") );
this.svarEmployeeExtView.update();
}
} catch(e) {
console.error('ERROR IN btnEditPartySelectClick: ' + e);
alert( 'ERROR IN btnEditPartySelectClick: ' + e );
}
},
//Added by Jammi Dee 10/17/2012
btnEditPartyCancelClick: function(inSender) {
try {
this.varOps.setValue("dataValue", "NOP");
this.ddEditParty.hide();
} catch(e) {
console.error('ERROR IN btnEditPartyCancelClick: ' + e);
alert( 'ERROR IN btnEditPartyCancelClick: ' + e );
}
},
//Added by Jammi Dee 10/17/2012
pic_SaveClick: function(inSender) {
try {
if(this.varOps.getValue("dataValue") === "NEW" ){
if( this.txtPartyId.getValue("dataValue") === "-" ){
alert("Party ID cannot be Blank.");
} else if( this.selRoleType.getValue("dataValue") === "-" ) {
alert("Role ID cannot be Blank.");
} else if( this.txtFirstName.getValue("dataValue") === "-" ) {
alert("First name cannot be Blank.");
} else if( this.txtLastName.getValue("dataValue") === "-" ) {
alert("Last name cannot be Blank.");
} else if( this.txtEmail.getValue("dataValue") === "-" ) {
alert("Email cannot be Blank.");
} else {
this.svarCreateParty.update();
}
} else if( this.varOps.getValue("dataValue") === "EDIT" ){
//alert(this.varJuid.getValue("dataValue"));
//This does not work for unknown reason.
this.svarUpdateParty.setValue("input.pJuid", this.varJuid.getValue("dataValue") );
this.svarUpdateParty.update();
//Alternate solution
//this.svarPersonViewUpdate.setValue("input.pJuid",   this.varJuid.getValue("dataValue") );
//this.svarPersonViewUpdate.setValue("input.pEntity", app.varEntity.getValue("dataValue") );
//this.svarPersonViewUpdate.update();
} else {
alert("No operation specified yet.");
}
} catch(e) {
console.error('ERROR IN pic_SaveClick: ' + e);
alert( 'ERROR IN pic_SaveClick: ' + e );
}
},
//Added by Jammi Dee 12/28/2012
svarCreatePartyResult: function(inSender, inDeprecated) {
try {
this.varJuid.setValue("dataValue", inSender.getValue("dataValue"));
if( this.selRoleType.getValue("dataValue") === "EMPLOYEE"){
//////////////////////////////////////////////
// Update the EmployeeExtension information
//////////////////////////////////////////////
this.svarCreateEmployeeExt.setValue("input.pParent", this.txtPartyId.getValue("dataValue") );
this.svarCreateEmployeeExt.update();
}
alert("New party has been created.");
//After saving, switch to edit mode.
this.varOps.setValue("dataValue", "EDIT");
this.tabParty.setShowing(true);
// Added by Jammi Dee 12/28/2012
app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarLogging.setValue("input.pMsg","New Party Created. ID = "  + this.txtPartyId.getValue("dataValue") );
app.svarLogging.setValue("input.pModuleId","PARTY");
app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
app.svarLogging.setValue("input.pProcess","CREATE");
app.svarLogging.setValue("input.pScopeId","NA");
app.svarLogging.setValue("input.pStype","USER");
app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
app.svarLogging.update();
} catch(e) {
console.error('ERROR IN svarCreatePartyResult: ' + e);
alert( 'ERROR IN svarCreatePartyResult: ' + e );
}
},
//Added by Jammi Dee 12/28/2012
svarUpdatePartyResult: function(inSender, inDeprecated) {
try {
if( this.selRoleType.getValue("dataValue") === "EMPLOYEE"){
alert(inSender.getValue("dataValue"));
//////////////////////////////////////////////
// Update the EmployeeExtension information
//////////////////////////////////////////////
this.svarCreateEmployeeExt.setValue("input.pParent", this.txtPartyId.getValue("dataValue") );
this.svarCreateEmployeeExt.update();
if( this.txtBadgeId.getValue("dataValue") === "-" ){
alert("Your Badge ID is incomplete. Please check values.");
} else if( this.txtDepartment.getValue("dataValue") === "-" ) {
alert("Your Department data is incomplete. Please check values.");
}
}
alert( "Edited data has been saved." );
//After saving, switch to edit mode.
this.varOps.setValue("dataValue", "EDIT");
// Added by Jammi Dee 12/28/2012
app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarLogging.setValue("input.pMsg","Party Updated. ID= " + this.txtPartyId.getValue("dataValue"));
app.svarLogging.setValue("input.pModuleId","PARTY");
app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
app.svarLogging.setValue("input.pProcess","UPDATE");
app.svarLogging.setValue("input.pScopeId","NA");
app.svarLogging.setValue("input.pStype","USER");
app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
app.svarLogging.update();
} catch(e) {
console.error('ERROR IN svarUpdatePartyResult: ' + e);
alert( 'ERROR IN svarUpdatePartyResult: ' + e );
}
},
//Added by Jammi Dee 03/23/2013
svarPersonViewUpdateResult: function(inSender, inDeprecated) {
try {
if( this.selRoleType.getValue("dataValue") === "EMPLOYEE"){
//alert(inSender.getValue("dataValue"));
//////////////////////////////////////////////
// Update the EmployeeExtension information
//////////////////////////////////////////////
//This does not work in the latest wavemaker version
//this.svarCreateEmployeeExt.setValue("input.pParent", this.txtPartyId.getValue("dataValue") );
//this.svarCreateEmployeeExt.update();
//Alternate solution
this.svarEmployeeExtViewUpdate.setValue("input.pParent", this.txtPartyId.getValue("dataValue") );
this.svarEmployeeExtViewUpdate.update();
if( this.txtBadgeId.getValue("dataValue") === "-" ){
alert("Your Badge ID is incomplete. Please check values.");
} else if( this.txtDepartment.getValue("dataValue") === "-" ) {
alert("Your Department data is incomplete. Please check values.");
}
}
alert( "Edited data has been saved." );
//After saving, switch to edit mode.
this.varOps.setValue("dataValue", "EDIT");
// Added by Jammi Dee 12/28/2012
app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarLogging.setValue("input.pMsg","Party Updated. ID= " + this.txtPartyId.getValue("dataValue"));
app.svarLogging.setValue("input.pModuleId","PARTY");
app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
app.svarLogging.setValue("input.pProcess","UPDATE");
app.svarLogging.setValue("input.pScopeId","NA");
app.svarLogging.setValue("input.pStype","USER");
app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
app.svarLogging.update();
} catch(e) {
console.error('ERROR IN svarPersonViewUpdateResult: ' + e);
alert( 'ERROR IN svarPersonViewUpdateResult: ' + e );
}
},
//Added by Jammi Dee 12/30/2012
btnSelectUserIdClick: function(inSender) {
try {
app.varStrParam01.setValue("dataValue", "SELECTUSER"  ) ;
this.ddSelectUser.show();
} catch(e) {
console.error('ERROR IN btnSelectUserIdClick: ' + e);
}
},
//Added by Jammi Dee 12/30/2012
btnManagerSelectClick: function(inSender) {
try {
app.varStrParam01.setValue("dataValue", "SELECTMANAGER"  ) ;
this.ddSelectUser.show();
} catch(e) {
console.error('ERROR IN btnManagerSelectClick: ' + e);
alert( 'ERROR IN btnManagerSelectClick: ' + e );
}
},
//Added by Jammi Dee 10/25/2012
ddSelectUserShow: function(inSender) {
try {
this.svarUserView.setValue("input.pEntity", app.varEntity.getValue("dataValue") );
this.svarUserView.update();
} catch(e) {
console.error('ERROR IN ddSelectUserShow: ' + e);
alert( 'ERROR IN ddSelectUserShow: ' + e );
}
},
//Added by Jammi Dee 10/25/2012
btnSelectUserSelectClick: function(inSender) {
try {
var strUser         = this.dgSelectUser.selectedItem.getData().userid;
var strUsername     = this.dgSelectUser.selectedItem.getData().username;
if( app.varStrParam01.getValue("dataValue") === "SELECTUSER" ){
this.txtattachuser.setValue("dataValue", strUser );
}
if( app.varStrParam01.getValue("dataValue") === "SELECTMANAGER" ){
this.txtManager.setValue("dataValue",       strUser );
this.txtManagerDesc.setValue("dataValue",   strUsername );
}
this.ddSelectUser.hide();
} catch(e) {
console.error('ERROR IN btnSelectUserSelectClick: ' + e);
alert( 'ERROR IN btnSelectUserSelectClick: ' + e );
}
},
//Added by Jammi Dee 10/25/2012
btnSrcSearchClick: function(inSender) {
try {
this.svarPartyView.setValue("input.pEntityId",       app.varEntity.getValue("dataValue") );
this.svarPartyView.setValue("input.pPartyId",        this.txtSrcPartyId.getValue("dataValue") );
this.svarPartyView.setValue("input.pFirstName",      this.txtSrcFirst.getValue("dataValue") );
this.svarPartyView.setValue("input.pMiddleName",     this.txtSrcMiddle.getValue("dataValue") );
this.svarPartyView.setValue("input.pLastName",       this.txtSrclast.getValue("dataValue") );
this.svarPartyView.setValue("input.pEmail",          "" );
this.svarPartyView.setValue("input.pStatus",         "ACTIVE" );
this.svarPartyView.update();
} catch(e) {
console.error('ERROR IN btnSrcSearchClick: ' + e);
alert( 'ERROR IN btnSrcSearchClick: ' + e );
}
},
pic_deleteClick: function(inSender) {
try {
if( this.varOps.getValue("dataValue") === "NEW" || this.varOps.getValue("dataValue") === "EDIT" ){
var response = confirm("Delete: Are you sure to delete this item?");
if (response) {
this.svarPartyDelete.setValue("input.pPartyId", this.txtPartyId.getValue("dataValue") );
this.svarPartyDelete.setValue("input.pEntity", app.varEntity.getValue("dataValue") );
this.svarPartyDelete.update();
}
} else {
alert("No data to delete.");
}
} catch(e) {
console.error('ERROR IN pic_deleteClick: ' + e);
alert( 'ERROR IN pic_deleteClick: ' + e );
}
},
//Added by Jammi Dee 12/28/2012
svarPartyDeleteResult: function(inSender, inDeprecated) {
try {
//Added by Jammi Dee 01/14/2013
//Delete also the extended information
this.svarEmployeeExtDelete.setValue("input.pPartyId", this.txtPartyId.getValue("dataValue") );
this.svarEmployeeExtDelete.setValue("input.pEntity", app.varEntity.getValue("dataValue") );
this.svarEmployeeExtDelete.update();
// Added by Jammi Dee 12/28/2012
app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarLogging.setValue("input.pMsg","Party Deleted. ID= " + this.txtPartyId.getValue("dataValue"));
app.svarLogging.setValue("input.pModuleId","PARTY");
app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
app.svarLogging.setValue("input.pProcess","DELETE");
app.svarLogging.setValue("input.pScopeId","NA");
app.svarLogging.setValue("input.pStype","USER");
app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
app.svarLogging.update();
alert("A Party has been successfully deleted.");
this.clearForm();
} catch(e) {
console.error('ERROR IN svarPartyDeleteResult: ' + e);
alert( 'ERROR IN svarPartyDeleteResult: ' + e );
}
},
//Added by Jammi Dee 12/28/2012
btnSrcSearch02Click: function(inSender) {
try {
this.svarPartyView02.setValue("input.pEntityId",       app.varEntity.getValue("dataValue") );
this.svarPartyView02.setValue("input.pPartyId",        this.txtSrcPartyId02.getValue("dataValue") );
this.svarPartyView02.setValue("input.pFirstName",      this.txtSrcFirst02.getValue("dataValue") );
this.svarPartyView02.setValue("input.pMiddleName",     this.txtSrcMiddle02.getValue("dataValue") );
this.svarPartyView02.setValue("input.pLastName",       this.txtSrclast02.getValue("dataValue") );
this.svarPartyView02.setValue("input.pEmail",          "" );
this.svarPartyView02.setValue("input.pStatus",         "ACTIVE" );
this.svarPartyView02.update();
} catch(e) {
console.error('ERROR IN btnSrcSearch02Click: ' + e);
alert( 'ERROR IN btnSrcSearch02Click: ' + e );
}
},
//Added by Jammi Dee 12/28/2012
btnSelectPartyCancelClick: function(inSender) {
try {
this.varOps.setValue("dataValue", "NOP");
this.ddSelectParty.hide();
} catch(e) {
console.error('ERROR IN btnSelectPartyCancelClick: ' + e);
alert( 'ERROR IN btnSelectPartyCancelClick: ' + e );
}
},
//Added by Jammi Dee 12/28/2012
btnSelectParentClick: function(inSender) {
try {
this.ddSelectParty.show();
} catch(e) {
console.error('ERROR IN btnSelectParentClick: ' + e);
alert( 'ERROR IN btnSelectParentClick: ' + e );
}
},
//Added by Jammi Dee 12/28/2012
ddSelectPartyShow: function(inSender) {
try {
//this.varOps.setValue("dataValue", "EDIT");
} catch(e) {
console.error('ERROR IN ddSelectPartyShow: ' + e);
alert( 'ERROR IN ddSelectPartyShow: ' + e );
}
},
//Added by Jammi Dee 12/28/2012
btnSelectPartySelectClick: function(inSender) {
try {
this.ddSelectParty.hide();
//Hold the JUID as reference
this.txtParent.setValue("dataValue", this.dgPartySelect.selectedItem.getData().partyid );
} catch(e) {
console.error('ERROR IN btnSelectPartySelectClick: ' + e);
alert( 'ERROR IN btnSelectPartySelectClick: ' + e );
}
},
//Added by Jammi Dee 01/01/2013
btnDivisionClick: function(inSender) {
try {
this.svarSelectDiv.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
this.svarSelectDiv.update();
this.ddSelectDiv.show();
} catch(e) {
console.error('ERROR IN btnDivisionClick: ' + e);
alert( 'ERROR IN btnDivisionClick: ' + e );
}
},
//Added by Jammi Dee 01/01/2013
btnDepartmentClick: function(inSender) {
try {
this.svarSelectDept.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
this.svarSelectDept.update();
this.ddSelectDept.show();
} catch(e) {
console.error('ERROR IN btnDepartmentClick: ' + e);
alert( 'ERROR IN btnDepartmentClick: ' + e );
}
},
//Added by Jammi Dee 01/01/2013
btnSectionClick: function(inSender) {
try {
this.svarSelectSect.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
this.svarSelectSect.update();
this.ddSelectSect.show();
} catch(e) {
console.error('ERROR IN btnSectionClick: ' + e);
alert( 'ERROR IN btnSectionClick: ' + e );
}
},
//Added by Jammi Dee 01/01/2013
btnLocationClick: function(inSender) {
try {
this.svarSelectLoc.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
this.svarSelectLoc.update();
this.ddSelectLoc.show();
} catch(e) {
console.error('ERROR IN btnLocationClick: ' + e);
alert( 'ERROR IN btnLocationClick: ' + e );
}
},
//Added by Jammi Dee 01/01/2013
btnRestdayClick: function(inSender) {
try {
this.svarSelectRestday.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
this.svarSelectRestday.update();
this.ddSelectRestday.show();
} catch(e) {
console.error('ERROR IN btnRestdayClick: ' + e);
alert( 'ERROR IN btnRestdayClick: ' + e );
}
},
//Added by Jammi Dee 01/01/2013
btnShiftClick: function(inSender) {
try {
this.svarSelectShift.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
this.svarSelectShift.update();
this.ddSelectShift.show();
} catch(e) {
console.error('ERROR IN btnShiftClick: ' + e);
alert( 'ERROR IN btnShiftClick: ' + e );
}
},
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
ddSelectDivShow: function(inSender) {
try {
} catch(e) {
console.error('ERROR IN ddSelectDivShow: ' + e);
}
},
ddSelectDeptShow: function(inSender) {
try {
} catch(e) {
console.error('ERROR IN ddSelectDeptShow: ' + e);
}
},
ddSelectSectShow: function(inSender) {
try {
} catch(e) {
console.error('ERROR IN ddSelectSectShow: ' + e);
}
},
ddSelectLocShow: function(inSender) {
try {
} catch(e) {
console.error('ERROR IN ddSelectLocShow: ' + e);
}
},
ddSelectRestdayShow: function(inSender) {
try {
} catch(e) {
console.error('ERROR IN ddSelectRestdayShow: ' + e);
}
},
ddSelectShiftShow: function(inSender) {
try {
} catch(e) {
console.error('ERROR IN ddSelectShiftShow: ' + e);
}
},
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
dgSelectDivClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
} catch(e) {
console.error('ERROR IN dgSelectDivClick: ' + e);
}
},
dgSelectDeptClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
} catch(e) {
console.error('ERROR IN dgSelectDeptClick: ' + e);
}
},
dgSelectSectClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
} catch(e) {
console.error('ERROR IN dgSelectSectClick: ' + e);
}
},
dgSelectLocClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
} catch(e) {
console.error('ERROR IN dgSelectLocClick: ' + e);
}
},
dgSelectRestdayClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
} catch(e) {
console.error('ERROR IN dgSelectRestdayClick: ' + e);
}
},
dgSelectShiftClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
} catch(e) {
console.error('ERROR IN dgSelectShiftClick: ' + e);
}
},
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
btnSelectDivSelectClick: function(inSender) {
try {
this.txtDivision.setValue("dataValue",       this.dgSelectDiv.selectedItem.getData().orgid );
this.txtDivisionDesc.setValue("dataValue",   this.dgSelectDiv.selectedItem.getData().description );
this.ddSelectDiv.hide();
} catch(e) {
console.error('ERROR IN btnSelectDivSelectClick: ' + e);
}
},
//Added by Jammi Dee 01/11/2013
dgSelectDivCellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
this.btnSelectDivSelectClick( inSender );
} catch(e) {
console.error('ERROR IN dgSelectDivCellDblClick: ' + e);
alert( 'ERROR IN dgSelectDivCellDblClick: ' + e );
}
},
btnSelectDeptSelectClick: function(inSender) {
try {
this.txtDepartment.setValue("dataValue",       this.dgSelectDept.selectedItem.getData().orgid );
this.txtDepartmentDesc.setValue("dataValue",   this.dgSelectDept.selectedItem.getData().description );
this.ddSelectDept.hide();
} catch(e) {
console.error('ERROR IN btnSelectDeptSelectClick: ' + e);
}
},
btnSelectSectSelectClick: function(inSender) {
try {
this.txtSection.setValue("dataValue",       this.dgSelectSect.selectedItem.getData().orgid );
this.txtSectionDesc.setValue("dataValue",   this.dgSelectSect.selectedItem.getData().description );
this.ddSelectSect.hide();
} catch(e) {
console.error('ERROR IN btnSelectSectSelectClick: ' + e);
}
},
btnSelectLocSelectClick: function(inSender) {
try {
this.txtLocation.setValue("dataValue",       this.dgSelectLoc.selectedItem.getData().orgid );
this.txtLocationDesc.setValue("dataValue",   this.dgSelectLoc.selectedItem.getData().description );
this.ddSelectLoc.hide();
} catch(e) {
console.error('ERROR IN btnSelectLocSelectClick: ' + e);
}
},
btnSelectRestdaySelectClick: function(inSender) {
try {
this.txtRestDay.setValue("dataValue",           this.dgSelectRestday.selectedItem.getData().orgid );
this.txtRestDayDesc.setValue("dataValue",       this.dgSelectRestday.selectedItem.getData().description );
this.ddSelectRestday.hide();
} catch(e) {
console.error('ERROR IN btnSelectRestdaySelectClick: ' + e);
}
},
btnSelectShiftSelectClick: function(inSender) {
try {
this.txtShift.setValue("dataValue",           this.dgSelectShift.selectedItem.getData().orgid );
this.txtShiftDesc.setValue("dataValue",       this.dgSelectShift.selectedItem.getData().description );
this.ddSelectShift.hide();
} catch(e) {
console.error('ERROR IN btnSelectShiftSelectClick: ' + e);
}
},
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
dgSelectDeptCellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
this.btnSelectDeptSelectClick( inSender );
} catch(e) {
console.error('ERROR IN dgSelectDeptCellDblClick: ' + e);
alert( 'ERROR IN dgSelectDeptCellDblClick: ' + e );
}
},
dgSelectSectCellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
this.btnSelectSectSelectClick( inSender );
} catch(e) {
console.error('ERROR IN dgSelectSectCellDblClick: ' + e);
alert( 'ERROR IN dgSelectSectCellDblClick: ' + e );
}
},
dgSelectLocCellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
this.btnSelectLocSelectClick( inSender );
} catch(e) {
console.error('ERROR IN dgSelectLocCellDblClick: ' + e);
alert( 'ERROR IN dgSelectLocCellDblClick: ' + e );
}
},
dgSelectRestdayCellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
this.btnSelectRestdaySelectClick( inSender );
} catch(e) {
console.error('ERROR IN dgSelectRestdayCellDblClick: ' + e);
alert( 'ERROR IN dgSelectRestdayCellDblClick: ' + e );
}
},
dgSelectShiftCellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
this.btnSelectShiftSelectClick( inSender );
} catch(e) {
console.error('ERROR IN dgSelectShiftCellDblClick: ' + e);
alert( 'ERROR IN dgSelectShiftCellDblClick: ' + e );
}
},
//Added by Jammi Dee 03/23/2013
pic_backClick: function(inSender) {
try {
app.pdWaitLoadPage.show();
this.navPgMain.update();
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

PgMainParty.widgets = {
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
varRole: ["wm.Variable", {"type":"StringData"}, {}],
svarCreateParty: ["wm.ServiceVariable", {"operation":"createParty","service":"svcUserFunctions"}, {"onResult":"svarCreatePartyResult"}, {
input: ["wm.ServiceInput", {"type":"createPartyInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire2: ["wm.Wire", {"expression":undefined,"source":"txtFirstName.dataValue","targetProperty":"pFirstName"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"txtMiddleName.dataValue","targetProperty":"pMiddleName"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"txtLastName.dataValue","targetProperty":"pLastName"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"txtSuffix.dataValue","targetProperty":"pSuffix"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"txtAddress01.dataValue","targetProperty":"pAddr01"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"txtAddress02.dataValue","targetProperty":"pAddr02"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"txtCity.dataValue","targetProperty":"pCity"}, {}],
wire9: ["wm.Wire", {"expression":undefined,"source":"txtState.dataValue","targetProperty":"pEmpState"}, {}],
wire10: ["wm.Wire", {"expression":undefined,"source":"txtZipCode.dataValue","targetProperty":"pZipCode"}, {}],
wire11: ["wm.Wire", {"expression":undefined,"source":"txtEmail.dataValue","targetProperty":"pEmail"}, {}],
wire12: ["wm.Wire", {"expression":undefined,"source":"txtCountryCodeHome.dataValue","targetProperty":"pCountryCodeHome"}, {}],
wire13: ["wm.Wire", {"expression":undefined,"source":"txtAreaCodeHome.dataValue","targetProperty":"pAreaCodeHome"}, {}],
wire14: ["wm.Wire", {"expression":undefined,"source":"txtPhoneHome.dataValue","targetProperty":"pPhoneHome"}, {}],
wire15: ["wm.Wire", {"expression":undefined,"source":"txtExtHome.dataValue","targetProperty":"pExtensionHome"}, {}],
wire16: ["wm.Wire", {"expression":undefined,"source":"txtCountryCodeWork.dataValue","targetProperty":"pCountryCodeWork"}, {}],
wire17: ["wm.Wire", {"expression":undefined,"source":"txtAreaCodeWork.dataValue","targetProperty":"pAreaCodeWork"}, {}],
wire18: ["wm.Wire", {"expression":undefined,"source":"txtPhoneWork.dataValue","targetProperty":"pPhoneWork"}, {}],
wire19: ["wm.Wire", {"expression":undefined,"source":"txtExtWork.dataValue","targetProperty":"pExtensionWork"}, {}],
wire20: ["wm.Wire", {"expression":undefined,"source":"txtAreaCodeMobile.dataValue","targetProperty":"pAreaCodeMobile"}, {}],
wire21: ["wm.Wire", {"expression":undefined,"source":"txtCountryCodeMobile.dataValue","targetProperty":"pCountryCodeMobile"}, {}],
wire22: ["wm.Wire", {"expression":undefined,"source":"txtExtMobile.dataValue","targetProperty":"pExtensionMobile"}, {}],
wire23: ["wm.Wire", {"expression":undefined,"source":"txtPhoneMobile.dataValue","targetProperty":"pPhoneMobile"}, {}],
wire25: ["wm.Wire", {"expression":undefined,"source":"app.varEntity.dataValue","targetProperty":"pEntityId"}, {}],
wire26: ["wm.Wire", {"expression":undefined,"source":"selEmpStatus.dataValue","targetProperty":"pStatus"}, {}],
wire27: ["wm.Wire", {"expression":undefined,"source":"txtPartyId.dataValue","targetProperty":"pPartyId"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"selTitle.dataValue","targetProperty":"pTitle"}, {}],
wire28: ["wm.Wire", {"expression":undefined,"source":"txtAreaCodeFax.dataValue","targetProperty":"pAreaCodeFax"}, {}],
wire29: ["wm.Wire", {"expression":undefined,"source":"txtCountryCodeFax.dataValue","targetProperty":"pCountryCodeFax"}, {}],
wire30: ["wm.Wire", {"expression":undefined,"source":"txtExtFax.dataValue","targetProperty":"pExtensionFax"}, {}],
wire31: ["wm.Wire", {"expression":undefined,"source":"txtPhoneFax.dataValue","targetProperty":"pPhoneFax"}, {}],
wire24: ["wm.Wire", {"expression":undefined,"source":"selCountry.selectedItem.dataValue","targetProperty":"pCountry"}, {}],
wire32: ["wm.Wire", {"expression":undefined,"source":"txtattachuser.dataValue","targetProperty":"pUserJuid"}, {}],
wire33: ["wm.Wire", {"expression":undefined,"source":"txtParent.dataValue","targetProperty":"pPid"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selRoleType.selectedItem.dataValue","targetProperty":"pRoleType"}, {}]
}]
}]
}],
svarPersonView: ["wm.ServiceVariable", {"operation":"qryPersonView","service":"dbwaveerp"}, {"onResult":"svarPersonViewResult"}, {
input: ["wm.ServiceInput", {"type":"qryPersonViewInputs"}, {}]
}],
svarPersonCheck: ["wm.ServiceVariable", {"operation":"qryPersonView","service":"dbwaveerp"}, {"onResult":"svarPersonCheckResult"}, {
input: ["wm.ServiceInput", {"type":"qryPersonViewInputs"}, {}]
}],
varCountryList: ["wm.Variable", {"isList":true,"json":"[{dataValue:\"United States\"},{dataValue:\"United Kingdom\"},{dataValue:\"Afghanistan\"},{dataValue:\"Albania\"},{dataValue:\"Algeria\"},{dataValue:\"American Samoa\"},{dataValue:\"Andorra\"},{dataValue:\"Angola\"},{dataValue:\"Anguilla\"},{dataValue:\"Antarctica\"},{dataValue:\"Antigua and Barbuda\"},{dataValue:\"Argentina\"},{dataValue:\"Armenia\"},{dataValue:\"Aruba\"},{dataValue:\"Australia\"},{dataValue:\"Austria\"},{dataValue:\"Azerbaijan\"},{dataValue:\"Bahamas\"},{dataValue:\"Bahrain\"},{dataValue:\"Bangladesh\"},{dataValue:\"Barbados\"},{dataValue:\"Belarus\"},{dataValue:\"Belgium\"},{dataValue:\"Belize\"},{dataValue:\"Benin\"},{dataValue:\"Bermuda\"},{dataValue:\"Bhutan\"},{dataValue:\"Bolivia\"},{dataValue:\"Bosnia and Herzegovina\"},{dataValue:\"Botswana\"},{dataValue:\"Bouvet Island\"},{dataValue:\"Brazil\"},{dataValue:\"British Indian Ocean Territory\"},{dataValue:\"Brunei Darussalam\"},{dataValue:\"Bulgaria\"},{dataValue:\"Burkina Faso\"},{dataValue:\"Burundi\"},{dataValue:\"Cambodia\"},{dataValue:\"Cameroon\"},{dataValue:\"Canada\"},{dataValue:\"Cape Verde\"},{dataValue:\"Cayman Islands\"},{dataValue:\"Central African Republic\"},{dataValue:\"Chad\"},{dataValue:\"Chile\"},{dataValue:\"China\"},{dataValue:\"Christmas Island\"},{dataValue:\"Cocos (Keeling) Islands\"},{dataValue:\"Colombia\"},{dataValue:\"Comoros\"},{dataValue:\"Congo\"},{dataValue:\"Congo, The Democratic Republic of The\"},{dataValue:\"Cook Islands\"},{dataValue:\"Costa Rica\"},{dataValue:\"Cote D'ivoire\"},{dataValue:\"Croatia\"},{dataValue:\"Cuba\"},{dataValue:\"Cyprus\"},{dataValue:\"Czech Republic\"},{dataValue:\"Denmark\"},{dataValue:\"Djibouti\"},{dataValue:\"Dominica\"},{dataValue:\"Dominican Republic\"},{dataValue:\"Ecuador\"},{dataValue:\"Egypt\"},{dataValue:\"El Salvador\"},{dataValue:\"Equatorial Guinea\"},{dataValue:\"Eritrea\"},{dataValue:\"Estonia\"},{dataValue:\"Ethiopia\"},{dataValue:\"Falkland Islands (Malvinas)\"},{dataValue:\"Faroe Islands\"},{dataValue:\"Fiji\"},{dataValue:\"Finland\"},{dataValue:\"France\"},{dataValue:\"French Guiana\"},{dataValue:\"French Polynesia\"},{dataValue:\"French Southern Territories\"},{dataValue:\"Gabon\"},{dataValue:\"Gambia\"},{dataValue:\"Georgia\"},{dataValue:\"Germany\"},{dataValue:\"Ghana\"},{dataValue:\"Gibraltar\"},{dataValue:\"Greece\"},{dataValue:\"Greenland\"},{dataValue:\"Grenada\"},{dataValue:\"Guadeloupe\"},{dataValue:\"Guam\"},{dataValue:\"Guatemala\"},{dataValue:\"Guinea\"},{dataValue:\"Guinea-bissau\"},{dataValue:\"Guyana\"},{dataValue:\"Haiti\"},{dataValue:\"Heard Island and Mcdonald Islands\"},{dataValue:\"Holy See (Vatican City State)\"},{dataValue:\"Honduras\"},{dataValue:\"Hong Kong\"},{dataValue:\"Hungary\"},{dataValue:\"Iceland\"},{dataValue:\"India\"},{dataValue:\"Indonesia\"},{dataValue:\"Iran, Islamic Republic of\"},{dataValue:\"Iraq\"},{dataValue:\"Ireland\"},{dataValue:\"Israel\"},{dataValue:\"Italy\"},{dataValue:\"Jamaica\"},{dataValue:\"Japan\"},{dataValue:\"Jordan\"},{dataValue:\"Kazakhstan\"},{dataValue:\"Kenya\"},{dataValue:\"Kiribati\"},{dataValue:\"Korea, Democratic People's Republic of\"},{dataValue:\"Korea, Republic of\"},{dataValue:\"Kuwait\"},{dataValue:\"Kyrgyzstan\"},{dataValue:\"Lao People's Democratic Republic\"},{dataValue:\"Latvia\"},{dataValue:\"Lebanon\"},{dataValue:\"Lesotho\"},{dataValue:\"Liberia\"},{dataValue:\"Libyan Arab Jamahiriya\"},{dataValue:\"Liechtenstein\"},{dataValue:\"Lithuania\"},{dataValue:\"Luxembourg\"},{dataValue:\"Macao\"},{dataValue:\"Macedonia, The Former Yugoslav Republic of\"},{dataValue:\"Madagascar\"},{dataValue:\"Malawi\"},{dataValue:\"Malaysia\"},{dataValue:\"Maldives\"},{dataValue:\"Mali\"},{dataValue:\"Malta\"},{dataValue:\"Marshall Islands\"},{dataValue:\"Martinique\"},{dataValue:\"Mauritania\"},{dataValue:\"Mauritius\"},{dataValue:\"Mayotte\"},{dataValue:\"Mexico\"},{dataValue:\"Micronesia, Federated States of\"},{dataValue:\"Moldova, Republic of\"},{dataValue:\"Monaco\"},{dataValue:\"Mongolia\"},{dataValue:\"Montserrat\"},{dataValue:\"Morocco\"},{dataValue:\"Mozambique\"},{dataValue:\"Myanmar\"},{dataValue:\"Namibia\"},{dataValue:\"Nauru\"},{dataValue:\"Nepal\"},{dataValue:\"Netherlands\"},{dataValue:\"Netherlands Antilles\"},{dataValue:\"New Caledonia\"},{dataValue:\"New Zealand\"},{dataValue:\"Nicaragua\"},{dataValue:\"Niger\"},{dataValue:\"Nigeria\"},{dataValue:\"Niue\"},{dataValue:\"Norfolk Island\"},{dataValue:\"Northern Mariana Islands\"},{dataValue:\"Norway\"},{dataValue:\"Oman\"},{dataValue:\"Pakistan\"},{dataValue:\"Palau\"},{dataValue:\"Palestinian Territory, Occupied\"},{dataValue:\"Panama\"},{dataValue:\"Papua New Guinea\"},{dataValue:\"Paraguay\"},{dataValue:\"Peru\"},{dataValue:\"Philippines\"},{dataValue:\"Pitcairn\"},{dataValue:\"Poland\"},{dataValue:\"Portugal\"},{dataValue:\"Puerto Rico\"},{dataValue:\"Qatar\"},{dataValue:\"Reunion\"},{dataValue:\"Romania\"},{dataValue:\"Russian Federation\"},{dataValue:\"Rwanda\"},{dataValue:\"Saint Helena\"},{dataValue:\"Saint Kitts and Nevis\"},{dataValue:\"Saint Lucia\"},{dataValue:\"Saint Pierre and Miquelon\"},{dataValue:\"Saint Vincent and The Grenadines\"},{dataValue:\"Samoa\"},{dataValue:\"San Marino\"},{dataValue:\"Sao Tome and Principe\"},{dataValue:\"Saudi Arabia\"},{dataValue:\"Senegal\"},{dataValue:\"Serbia and Montenegro\"},{dataValue:\"Seychelles\"},{dataValue:\"Sierra Leone\"},{dataValue:\"Singapore\"},{dataValue:\"Slovakia\"},{dataValue:\"Slovenia\"},{dataValue:\"Solomon Islands\"},{dataValue:\"Somalia\"},{dataValue:\"South Africa\"},{dataValue:\"South Georgia and The South Sandwich Islands\"},{dataValue:\"Spain\"},{dataValue:\"Sri Lanka\"},{dataValue:\"Sudan\"},{dataValue:\"Suriname\"},{dataValue:\"Svalbard and Jan Mayen\"},{dataValue:\"Swaziland\"},{dataValue:\"Sweden\"},{dataValue:\"Switzerland\"},{dataValue:\"Syrian Arab Republic\"},{dataValue:\"Taiwan, Province of China\"},{dataValue:\"Tajikistan\"},{dataValue:\"Tanzania, United Republic of\"},{dataValue:\"Thailand\"},{dataValue:\"Timor-leste\"},{dataValue:\"Togo\"},{dataValue:\"Tokelau\"},{dataValue:\"Tonga\"},{dataValue:\"Trinidad and Tobago\"},{dataValue:\"Tunisia\"},{dataValue:\"Turkey\"},{dataValue:\"Turkmenistan\"},{dataValue:\"Turks and Caicos Islands\"},{dataValue:\"Tuvalu\"},{dataValue:\"Uganda\"},{dataValue:\"Ukraine\"},{dataValue:\"United Arab Emirates\"},{dataValue:\"United Kingdom\"},{dataValue:\"United States\"},{dataValue:\"United States Minor Outlying Islands\"},{dataValue:\"Uruguay\"},{dataValue:\"Uzbekistan\"},{dataValue:\"Vanuatu\"},{dataValue:\"Venezuela\"},{dataValue:\"Viet Nam\"},{dataValue:\"Virgin Islands, British\"},{dataValue:\"Virgin Islands, U.S.\"},{dataValue:\"Wallis and Futuna\"},{dataValue:\"Western Sahara\"},{dataValue:\"Yemen\"},{dataValue:\"Zambia\"},{dataValue:\"Zimbabwe\"}]","type":"StringData"}, {}],
svarUserView: ["wm.ServiceVariable", {"operation":"qryUserView01","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryUserView01Inputs"}, {}]
}],
svarPartyView: ["wm.ServiceVariable", {"operation":"qryPartyView","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryPartyViewInputs"}, {}]
}],
svarPartyDelete: ["wm.ServiceVariable", {"operation":"qryPartyDelete","service":"dbwaveerp"}, {"onResult":"svarPartyDeleteResult"}, {
input: ["wm.ServiceInput", {"type":"qryPartyDeleteInputs"}, {}]
}],
svarUpdateParty: ["wm.ServiceVariable", {"operation":"updateParty","service":"svcUserFunctions"}, {"onResult":"svarUpdatePartyResult"}, {
input: ["wm.ServiceInput", {"type":"updatePartyInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"txtAddress01.dataValue","targetProperty":"pAddr01"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"txtAddress02.dataValue","targetProperty":"pAddr02"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"txtAreaCodeFax.dataValue","targetProperty":"pAreaCodeFax"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"txtAreaCodeHome.dataValue","targetProperty":"pAreaCodeHome"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"txtAreaCodeMobile.dataValue","targetProperty":"pAreaCodeMobile"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"txtAreaCodeWork.dataValue","targetProperty":"pAreaCodeWork"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"txtCity.dataValue","targetProperty":"pCity"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"txtCountryCodeFax.dataValue","targetProperty":"pCountryCodeFax"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"txtCountryCodeHome.dataValue","targetProperty":"pCountryCodeHome"}, {}],
wire9: ["wm.Wire", {"expression":undefined,"source":"txtCountryCodeMobile.dataValue","targetProperty":"pCountryCodeMobile"}, {}],
wire10: ["wm.Wire", {"expression":undefined,"source":"txtCountryCodeWork.dataValue","targetProperty":"pCountryCodeWork"}, {}],
wire11: ["wm.Wire", {"expression":undefined,"source":"txtEmail.dataValue","targetProperty":"pEmail"}, {}],
wire12: ["wm.Wire", {"expression":undefined,"source":"app.varEntity","targetProperty":"pEntityId"}, {}],
wire13: ["wm.Wire", {"expression":undefined,"source":"txtExtFax.dataValue","targetProperty":"pExtensionFax"}, {}],
wire14: ["wm.Wire", {"expression":undefined,"source":"txtExtHome.dataValue","targetProperty":"pExtensionHome"}, {}],
wire15: ["wm.Wire", {"expression":undefined,"source":"txtExtMobile.dataValue","targetProperty":"pExtensionMobile"}, {}],
wire16: ["wm.Wire", {"expression":undefined,"source":"txtExtWork.dataValue","targetProperty":"pExtensionWork"}, {}],
wire17: ["wm.Wire", {"expression":undefined,"source":"txtFirstName.dataValue","targetProperty":"pFirstName"}, {}],
wire18: ["wm.Wire", {"expression":undefined,"source":"txtLastName.dataValue","targetProperty":"pLastName"}, {}],
wire19: ["wm.Wire", {"expression":undefined,"source":"txtMiddleName.dataValue","targetProperty":"pMiddleName"}, {}],
wire20: ["wm.Wire", {"expression":undefined,"source":"txtPartyId.dataValue","targetProperty":"pPartyId"}, {}],
wire21: ["wm.Wire", {"expression":undefined,"source":"txtPhoneFax.dataValue","targetProperty":"pPhoneFax"}, {}],
wire22: ["wm.Wire", {"expression":undefined,"source":"txtPhoneHome.dataValue","targetProperty":"pPhoneHome"}, {}],
wire23: ["wm.Wire", {"expression":undefined,"source":"txtPhoneMobile.dataValue","targetProperty":"pPhoneMobile"}, {}],
wire24: ["wm.Wire", {"expression":undefined,"source":"txtPhoneWork.dataValue","targetProperty":"pPhoneWork"}, {}],
wire26: ["wm.Wire", {"expression":undefined,"source":"selStatus.dataValue","targetProperty":"pStatus"}, {}],
wire27: ["wm.Wire", {"expression":undefined,"source":"txtSuffix.dataValue","targetProperty":"pSuffix"}, {}],
wire28: ["wm.Wire", {"expression":undefined,"source":"selTitle.dataValue","targetProperty":"pTitle"}, {}],
wire29: ["wm.Wire", {"expression":undefined,"source":"txtZipCode.dataValue","targetProperty":"pZipCode"}, {}],
wire32: ["wm.Wire", {"expression":undefined,"source":"txtState.dataValue","targetProperty":"pEmpState"}, {}],
wire34: ["wm.Wire", {"expression":undefined,"source":"txtParent.dataValue","targetProperty":"pPid"}, {}],
wire25: ["wm.Wire", {"expression":undefined,"source":"selRoleType.selectedItem.dataValue","targetProperty":"pRoleType"}, {}],
wire30: ["wm.Wire", {"expression":undefined,"source":"txtattachuser.dataValue","targetProperty":"pUserJuid"}, {}],
wire31: ["wm.Wire", {"expression":undefined,"source":"selCountry.selectedItem.dataValue","targetProperty":"pCountry"}, {}]
}]
}]
}],
varJuid: ["wm.Variable", {"type":"StringData"}, {}],
svarPartyView02: ["wm.ServiceVariable", {"operation":"qryPartyView","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryPartyViewInputs"}, {}]
}],
svarCreateEmployeeExt: ["wm.ServiceVariable", {"operation":"createEmployeeExt","service":"svcUserFunctions"}, {}, {
input: ["wm.ServiceInput", {"type":"createEmployeeExtInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"txtBadgeId.dataValue","targetProperty":"pBadgeId"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"txtDivision.dataValue","targetProperty":"pDivisionId"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"txtDivisionDesc.dataValue","targetProperty":"pDivisionDesc"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"txtDepartment.dataValue","targetProperty":"pDepartmentId"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"txtDepartmentDesc.dataValue","targetProperty":"pDepartmentDesc"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"app.varEntity.dataValue","targetProperty":"pEntityId"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"varJuid.dataValue","targetProperty":"pJuid"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"txtLocation.dataValue","targetProperty":"pLocationId"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"txtLocationDesc.dataValue","targetProperty":"pLocationDesc"}, {}],
wire9: ["wm.Wire", {"expression":undefined,"source":"txtManager.dataValue","targetProperty":"pManagerId"}, {}],
wire10: ["wm.Wire", {"expression":undefined,"source":"txtManagerDesc.dataValue","targetProperty":"pManagerDesc"}, {}],
wire11: ["wm.Wire", {"expression":undefined,"source":"txtRestDay.dataValue","targetProperty":"pRestDayId"}, {}],
wire12: ["wm.Wire", {"expression":undefined,"source":"txtRestDayDesc.dataValue","targetProperty":"pRestDayDesc"}, {}],
wire13: ["wm.Wire", {"expression":undefined,"source":"txtSection.dataValue","targetProperty":"pSectionId"}, {}],
wire14: ["wm.Wire", {"expression":undefined,"source":"txtSectionDesc.dataValue","targetProperty":"pSectionDesc"}, {}],
wire15: ["wm.Wire", {"expression":undefined,"source":"txtShift.dataValue","targetProperty":"pShiftId"}, {}],
wire16: ["wm.Wire", {"expression":undefined,"source":"txtShiftDesc.dataValue","targetProperty":"pShiftDesc"}, {}],
wire17: ["wm.Wire", {"expression":undefined,"source":"selEmpStatus.dataValue","targetProperty":"pStatus"}, {}],
wire18: ["wm.Wire", {"expression":undefined,"source":"txtDeviceIn.dataValue","targetProperty":"pDeviceIn"}, {}],
wire19: ["wm.Wire", {"expression":undefined,"source":"txtDeviceOut.dataValue","targetProperty":"pDeviceOut"}, {}]
}]
}]
}],
svarEmployeeExtView: ["wm.ServiceVariable", {"operation":"qryEmployeeExt","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryEmployeeExtInputs"}, {}]
}],
svarSelectDiv: ["wm.ServiceVariable", {"operation":"qryTblOrgDivisionView","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryTblOrgDivisionViewInputs"}, {}]
}],
svarSelectDept: ["wm.ServiceVariable", {"operation":"qryTblOrgDepartmentView","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryTblOrgDepartmentViewInputs"}, {}]
}],
svarSelectSect: ["wm.ServiceVariable", {"operation":"qryTblOrgSectionView","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryTblOrgSectionViewInputs"}, {}]
}],
svarSelectLoc: ["wm.ServiceVariable", {"operation":"qryTblOrgLocationView","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryTblOrgLocationViewInputs"}, {}]
}],
svarEmployeeExtDelete: ["wm.ServiceVariable", {"operation":"qryEmployeeExtDelete","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryEmployeeExtDeleteInputs"}, {}]
}],
svarSelectRestday: ["wm.ServiceVariable", {"operation":"qryTblOrgRestdayView","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryTblOrgRestdayViewInputs"}, {}]
}],
svarSelectShift: ["wm.ServiceVariable", {"operation":"qryTblOrgShiftView","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryTblOrgShiftViewInputs"}, {}]
}],
svarPersonViewUpdate: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"qryPersonViewUpdate","service":"dbwaveerp"}, {"onResult":"svarPersonViewUpdateResult"}, {
input: ["wm.ServiceInput", {"type":"qryPersonViewUpdateInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"txtattachuser.dataValue","targetProperty":"pUserjuid"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"selTitle.dataValue","targetProperty":"pTitle"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"txtFirstName.dataValue","targetProperty":"pFirstName"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"txtMiddleName.dataValue","targetProperty":"pMiddleName"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"txtLastName.dataValue","targetProperty":"pLastName"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"txtSuffix.dataValue","targetProperty":"pSuffix"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"txtAddress01.dataValue","targetProperty":"pAddr01"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"txtAddress02.dataValue","targetProperty":"pAddr02"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"txtCity.dataValue","targetProperty":"pCity"}, {}],
wire9: ["wm.Wire", {"expression":undefined,"source":"txtState.dataValue","targetProperty":"pEmpState"}, {}],
wire10: ["wm.Wire", {"expression":undefined,"source":"txtZipCode.dataValue","targetProperty":"pZipCode"}, {}],
wire11: ["wm.Wire", {"expression":undefined,"source":"selCountry.selectedItem.dataValue","targetProperty":"pCountry"}, {}],
wire12: ["wm.Wire", {"expression":undefined,"source":"txtEmail.dataValue","targetProperty":"pEmail"}, {}],
wire13: ["wm.Wire", {"expression":undefined,"source":"txtCountryCodeHome.dataValue","targetProperty":"pCountryCodeHome"}, {}],
wire14: ["wm.Wire", {"expression":undefined,"source":"txtCountryCodeFax.dataValue","targetProperty":"pCountryCodeFax"}, {}],
wire15: ["wm.Wire", {"expression":undefined,"source":"txtCountryCodeMobile.dataValue","targetProperty":"pCountryCodeMobile"}, {}],
wire16: ["wm.Wire", {"expression":undefined,"source":"txtCountryCodeWork.dataValue","targetProperty":"pCountryCodeWork"}, {}],
wire17: ["wm.Wire", {"expression":undefined,"source":"txtAreaCodeHome.dataValue","targetProperty":"pAreaCodeHome"}, {}],
wire18: ["wm.Wire", {"expression":undefined,"source":"txtAreaCodeWork.dataValue","targetProperty":"pAreaCodeWork"}, {}],
wire19: ["wm.Wire", {"expression":undefined,"source":"txtAreaCodeFax.dataValue","targetProperty":"pAreaCodeFax"}, {}],
wire20: ["wm.Wire", {"expression":undefined,"source":"txtAreaCodeMobile.dataValue","targetProperty":"pAreaCodeMobile"}, {}],
wire21: ["wm.Wire", {"expression":undefined,"source":"txtPhoneHome.dataValue","targetProperty":"pPhoneHome"}, {}],
wire22: ["wm.Wire", {"expression":undefined,"source":"txtPhoneWork.dataValue","targetProperty":"pPhoneWork"}, {}],
wire23: ["wm.Wire", {"expression":undefined,"source":"txtPhoneFax.dataValue","targetProperty":"pPhoneFax"}, {}],
wire24: ["wm.Wire", {"expression":undefined,"source":"txtPhoneMobile.dataValue","targetProperty":"pPhoneMobile"}, {}],
wire25: ["wm.Wire", {"expression":undefined,"source":"txtExtHome.dataValue","targetProperty":"pExtensionHome"}, {}],
wire26: ["wm.Wire", {"expression":undefined,"source":"txtExtWork.dataValue","targetProperty":"pExtensionWork"}, {}],
wire27: ["wm.Wire", {"expression":undefined,"source":"txtExtFax.dataValue","targetProperty":"pExtensionFax"}, {}],
wire28: ["wm.Wire", {"expression":undefined,"source":"txtExtMobile.dataValue","targetProperty":"pExtensionMobile"}, {}],
wire29: ["wm.Wire", {"expression":undefined,"source":"txtParent.dataValue","targetProperty":"pPid"}, {}]
}]
}]
}],
svarEmployeeExtViewUpdate: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"qryEmployeeExtUpdate","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryEmployeeExtUpdateInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"txtBadgeId.dataValue","targetProperty":"pBadgeId"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"txtDivision.dataValue","targetProperty":"pDivisionId"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"txtDivisionDesc.dataValue","targetProperty":"pDivisionDesc"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"txtDepartment.dataValue","targetProperty":"pDepartmentId"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"txtDepartmentDesc.dataValue","targetProperty":"pDepartmentDesc"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"txtSection.dataValue","targetProperty":"pSectionId"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"txtSectionDesc.dataValue","targetProperty":"pSectionDesc"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"txtLocation.dataValue","targetProperty":"pLocationId"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"txtLocationDesc.dataValue","targetProperty":"pLocationDesc"}, {}],
wire9: ["wm.Wire", {"expression":undefined,"source":"txtRestDay.dataValue","targetProperty":"pRestdayId"}, {}],
wire10: ["wm.Wire", {"expression":undefined,"source":"txtRestDayDesc.dataValue","targetProperty":"pRestdayDesc"}, {}],
wire11: ["wm.Wire", {"expression":undefined,"source":"txtShift.dataValue","targetProperty":"pShiftId"}, {}],
wire12: ["wm.Wire", {"expression":undefined,"source":"txtShiftDesc.dataValue","targetProperty":"pShiftDesc"}, {}],
wire13: ["wm.Wire", {"expression":undefined,"source":"txtManager.dataValue","targetProperty":"pManagerId"}, {}],
wire14: ["wm.Wire", {"expression":undefined,"source":"txtManagerDesc.dataValue","targetProperty":"pManagerDesc"}, {}],
wire15: ["wm.Wire", {"expression":undefined,"source":"txtDeviceIn.dataValue","targetProperty":"pDeviceIn"}, {}],
wire16: ["wm.Wire", {"expression":undefined,"source":"txtDeviceOut.dataValue","targetProperty":"pDeviceOut"}, {}],
wire17: ["wm.Wire", {"expression":undefined,"source":"selEmpStatus.dataValue","targetProperty":"pStatus"}, {}]
}]
}]
}],
pdLoading: ["wm.PageDialog", {"desktopHeight":"100px","height":"100px","hideControls":true,"pageName":"Main","width":"280px"}, {}],
ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","corner":"cr","height":"95%","modal":false,"positionNear":"","title":"Party Management Help","width":"20%"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgMainParty.html"}, {}]
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
ddNewPartyRole: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget2","desktopHeight":"150px","height":"150px","title":"New Party ID / Select Role","width":"350px"}, {"onShow":"ddNewPartyRoleShow"}, {
containerWidget2: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"center","padding":"5","verticalAlign":"middle","width":"100%"}, {}, {
txtNewPartyId: ["wm.Text", {"caption":"New ID:","captionAlign":"left","dataValue":undefined,"displayValue":""}, {}],
selNewPartyRole: ["wm.SelectMenu", {"caption":"Select Role:","captionAlign":"left","dataField":"dataValue","dataValue":"EMPLOYEE","displayField":"dataValue","displayValue":"EMPLOYEE","options":"EMPLOYEE,SUBCON,CUSTOMER"}, {}]
}],
buttonBar2: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","fitToContentHeight":true,"height":"33px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnNewPartyRoleCreate: ["wm.Button", {"caption":"Create","margin":"4"}, {"onclick":"btnNewPartyRoleCreateClick"}],
btnNewPartyRoleCancel: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"btnNewPartyRoleCancelClick"}]
}]
}],
ddEditParty: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget3","title":"Edit Party","width":"800px"}, {"onShow":"ddEditPartyShow"}, {
containerWidget3: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
dgPartyView: ["wm.DojoGrid", {"columns":[{"show":false,"title":"Juid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"juid"},{"show":false,"title":"Entityid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":true,"title":"Party ID","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"partyid"},{"show":true,"title":"Title","width":"60px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"title"},{"show":true,"title":"Firstname","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"firstname"},{"show":true,"title":"Middlename","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"middlename"},{"show":true,"title":"Lastname","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"lastname"},{"show":false,"title":"Suffix","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"suffix"},{"show":false,"title":"Addr01","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"addr01"},{"show":false,"title":"Addr02","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"addr02"},{"show":false,"title":"City","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"city"},{"show":false,"title":"State","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"empstate"},{"show":false,"title":"Zipcode","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"zipcode"},{"show":false,"title":"Country","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"country"},{"show":true,"title":"Email","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"email"},{"show":false,"title":"Countrycodehome","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"countrycodehome"},{"show":false,"title":"Areacodehome","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"areacodehome"},{"show":false,"title":"Phonehome","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"phonehome"},{"show":false,"title":"Extensionhome","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"extensionhome"},{"show":false,"title":"Countrycodework","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"countrycodework"},{"show":false,"title":"Areacodework","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"areacodework"},{"show":false,"title":"Phonework","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"phonework"},{"show":false,"title":"Extensionwork","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"extensionwork"},{"show":false,"title":"Countrycodefax","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"countrycodefax"},{"show":false,"title":"Areacodefax","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"areacodefax"},{"show":false,"title":"Phonefax","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"phonefax"},{"show":false,"title":"Extensionfax","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"extensionfax"},{"show":false,"title":"Countrycodemobile","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"countrycodemobile"},{"show":false,"title":"Areacodemobile","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"areacodemobile"},{"show":false,"title":"Phonemobile","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"phonemobile"},{"show":false,"title":"Extensionmobile","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"extensionmobile"},{"show":false,"title":"Roletype","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"roletype"},{"show":false,"title":"Userjuid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"userjuid"},{"show":false,"title":"Sstatus","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"show":false,"title":"Pid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"pid"},{"show":false,"title":"Deleted","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"deleted"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Party ID: \" + ${partyid} + \"</div>\"\n+ \"<div class='MobileRow'>Title: \" + ${title} + \"</div>\"\n+ \"<div class='MobileRow'>Firstname: \" + ${firstname} + \"</div>\"\n+ \"<div class='MobileRow'>Middlename: \" + ${middlename} + \"</div>\"\n+ \"<div class='MobileRow'>Lastname: \" + ${lastname} + \"</div>\"\n+ \"<div class='MobileRow'>Email: \" + ${email} + \"</div>\"\n"}],"height":"100%","margin":"4"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarPartyView","targetProperty":"dataSet"}, {}]
}]
}],
pnlFilter: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
lblFilter: ["wm.Label", {"caption":"Filter:","padding":"4","width":"45px"}, {}],
txtSrcPartyId: ["wm.Text", {"caption":"Party ID:","captionAlign":"left","captionSize":"60px","dataValue":"%","displayValue":"%","width":"160px"}, {}],
txtSrcFirst: ["wm.Text", {"caption":"First:","captionAlign":"left","captionSize":"40px","dataValue":"%","displayValue":"%","width":"170px"}, {}],
txtSrcMiddle: ["wm.Text", {"caption":"Mid:","captionAlign":"left","captionSize":"40px","dataValue":"%","displayValue":"%","width":"170px"}, {}],
txtSrclast: ["wm.Text", {"caption":"Last:","captionAlign":"left","captionSize":"40px","dataValue":"%","displayValue":"%","width":"170px"}, {}],
btnSrcSearch: ["wm.Button", {"caption":"Search","margin":"4","width":"60px"}, {"onclick":"btnSrcSearchClick"}]
}]
}],
buttonBar3: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","fitToContentHeight":true,"height":"33px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnEditPartySelect: ["wm.Button", {"caption":"Select","margin":"4"}, {"onclick":"btnEditPartySelectClick"}],
btnEditPartyCancel: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"btnEditPartyCancelClick"}]
}]
}],
ddSelectUser: ["wm.DesignableDialog", {"buttonBarId":"buttonBar3","containerWidgetId":"containerWidget2","modal":false,"title":"Select User to Add"}, {"onShow":"ddSelectUserShow"}, {
containerWidget4: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
dgSelectUser: ["wm.DojoGrid", {"columns":[{"show":true,"title":"User ID","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"userid"},{"show":false,"title":"Entityid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":false,"title":"Password","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"password"},{"show":true,"title":"Username","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"username"},{"show":true,"title":"Firstname","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"firstname"},{"show":true,"title":"Middlename","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"middlename"},{"show":true,"title":"Lastname","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"lastname"},{"show":true,"title":"Status","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"show":false,"title":"Email","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"email"},{"show":false,"title":"Roleid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"roleid"},{"show":false,"title":"Startdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"startdate"},{"show":false,"title":"Enddate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"enddate"},{"show":false,"title":"Userimgext","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"userimgext"},{"show":false,"title":"Pid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"pid"},{"show":false,"title":"Deleted","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"deleted"},{"show":false,"title":"Passwdenc","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"passwdenc"},{"show":false,"title":"ParentPerson","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"parentPerson"},{"show":false,"field":"id","title":"Id","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"id.seqid","title":"Id.seqid","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"id.juid","title":"Id.juid","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>User ID: \" + ${userid} + \"</div>\"\n+ \"<div class='MobileRow'>Username: \" + ${username} + \"</div>\"\n+ \"<div class='MobileRow'>Firstname: \" + ${firstname} + \"</div>\"\n+ \"<div class='MobileRow'>Middlename: \" + ${middlename} + \"</div>\"\n+ \"<div class='MobileRow'>Lastname: \" + ${lastname} + \"</div>\"\n+ \"<div class='MobileRow'>Status: \" + ${sstatus} + \"</div>\"\n"}],"height":"100%","margin":"4"}, {"onCellDblClick":"dgSelectUserCellDblClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarUserView","targetProperty":"dataSet"}, {}]
}]
}]
}],
buttonBar4: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","fitToContentHeight":true,"height":"33px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnSelectUserSelect: ["wm.Button", {"caption":"Select","margin":"4"}, {"onclick":"btnSelectUserSelectClick"}],
btnSelectUserCancel: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"ddSelectUser.hide"}]
}]
}],
ddSelectParty: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget5","modal":false,"title":"Select Party","width":"800px"}, {"onShow":"ddSelectPartyShow"}, {
containerWidget5: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
dgPartySelect: ["wm.DojoGrid", {"columns":[{"show":false,"title":"Juid","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"juid"},{"show":false,"title":"Entityid","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":true,"title":"Party ID","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"partyid"},{"show":true,"title":"Title","width":"60px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"title"},{"show":true,"title":"Firstname","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"firstname"},{"show":true,"title":"Middlename","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"middlename"},{"show":true,"title":"Lastname","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"lastname"},{"show":false,"title":"Suffix","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"suffix"},{"show":false,"title":"Addr01","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"addr01"},{"show":false,"title":"Addr02","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"addr02"},{"show":false,"title":"City","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"city"},{"show":false,"title":"Empstate","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"empstate"},{"show":false,"title":"Zipcode","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"zipcode"},{"show":false,"title":"Country","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"country"},{"show":true,"title":"Email","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"email"},{"show":false,"title":"Countrycodehome","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"countrycodehome"},{"show":false,"title":"Areacodehome","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"areacodehome"},{"show":false,"title":"Phonehome","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"phonehome"},{"show":false,"title":"Extensionhome","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"extensionhome"},{"show":false,"title":"Countrycodework","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"countrycodework"},{"show":false,"title":"Areacodework","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"areacodework"},{"show":false,"title":"Phonework","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"phonework"},{"show":false,"title":"Extensionwork","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"extensionwork"},{"show":false,"title":"Countrycodefax","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"countrycodefax"},{"show":false,"title":"Areacodefax","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"areacodefax"},{"show":false,"title":"Phonefax","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"phonefax"},{"show":false,"title":"Extensionfax","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"extensionfax"},{"show":false,"title":"Countrycodemobile","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"countrycodemobile"},{"show":false,"title":"Areacodemobile","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"areacodemobile"},{"show":false,"title":"Phonemobile","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"phonemobile"},{"show":false,"title":"Extensionmobile","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"extensionmobile"},{"show":false,"title":"Roletype","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"roletype"},{"show":false,"title":"Userjuid","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"userjuid"},{"show":false,"title":"Sstatus","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"show":false,"title":"Pid","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"pid"},{"show":false,"title":"Deleted","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"deleted"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Party ID: \" + ${partyid} + \"</div>\"\n+ \"<div class='MobileRow'>Title: \" + ${title} + \"</div>\"\n+ \"<div class='MobileRow'>Firstname: \" + ${firstname} + \"</div>\"\n+ \"<div class='MobileRow'>Middlename: \" + ${middlename} + \"</div>\"\n+ \"<div class='MobileRow'>Lastname: \" + ${lastname} + \"</div>\"\n+ \"<div class='MobileRow'>Email: \" + ${email} + \"</div>\"\n"}],"height":"100%","margin":"4"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarPartyView02","targetProperty":"dataSet"}, {}]
}]
}],
pnlFilter02: ["wm.Panel", {"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
lblFilter02: ["wm.Label", {"caption":"Filter:","padding":"4","width":"45px"}, {}],
txtSrcPartyId02: ["wm.Text", {"caption":"Party ID:","captionAlign":"left","captionSize":"60px","dataValue":"%","displayValue":"%","width":"160px"}, {}],
txtSrcFirst02: ["wm.Text", {"caption":"First:","captionAlign":"left","captionSize":"40px","dataValue":"%","displayValue":"%","width":"170px"}, {}],
txtSrcMiddle02: ["wm.Text", {"caption":"Mid:","captionAlign":"left","captionSize":"40px","dataValue":"%","displayValue":"%","width":"170px"}, {}],
txtSrclast02: ["wm.Text", {"caption":"Last:","captionAlign":"left","captionSize":"40px","dataValue":"%","displayValue":"%","width":"170px"}, {}],
btnSrcSearch02: ["wm.Button", {"caption":"Search","margin":"4","width":"60px"}, {"onclick":"btnSrcSearch02Click"}]
}]
}],
buttonBar5: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","fitToContentHeight":true,"height":"33px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnSelectPartySelect: ["wm.Button", {"caption":"Select","margin":"4"}, {"onclick":"btnSelectPartySelectClick"}],
btnSelectPartyCancel: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"btnSelectPartyCancelClick"}]
}]
}],
ddSelectDiv: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget6","modal":false,"title":"Select Division"}, {"onShow":"ddSelectDivShow"}, {
containerWidget6: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
dgSelectDiv: ["wm.DojoGrid", {"columns":[{"show":false,"title":"Juid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"juid"},{"show":false,"title":"Entityid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":true,"title":"Division ID","width":"140px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"orgid"},{"show":true,"title":"Description","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"description"},{"show":false,"title":"Pid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"pid"},{"show":false,"title":"Contact01","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"contact01"},{"show":false,"title":"Contact02","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"contact02"},{"show":true,"title":"Status","width":"120px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Division ID: \" + ${orgid} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n+ \"<div class='MobileRow'>Status: \" + ${sstatus} + \"</div>\"\n"}],"height":"100%","margin":"4"}, {"onCellDblClick":"dgSelectDivCellDblClick","onClick":"dgSelectDivClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarSelectDiv","targetProperty":"dataSet"}, {}]
}]
}]
}],
buttonBar6: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","fitToContentHeight":true,"height":"33px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnSelectDivSelect: ["wm.Button", {"caption":"Select","margin":"4"}, {"onclick":"btnSelectDivSelectClick"}],
btnSelectDivCancel: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"ddSelectDiv.hide"}]
}]
}],
ddSelectDept: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget7","modal":false,"title":"Select Department"}, {"onShow":"ddSelectDeptShow"}, {
containerWidget7: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
dgSelectDept: ["wm.DojoGrid", {"columns":[{"show":false,"title":"Juid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"juid"},{"show":false,"title":"Entityid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":true,"title":"Department ID","width":"140px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"orgid"},{"show":true,"title":"Description","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"description"},{"show":false,"title":"Pid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"pid"},{"show":false,"title":"Itmgrid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"itmgrid"},{"show":false,"title":"Itmgrname","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"itmgrname"},{"show":false,"title":"Contact01","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"contact01"},{"show":false,"title":"Contact02","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"contact02"},{"show":false,"title":"Location","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"location"},{"show":true,"title":"Status","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Department ID: \" + ${orgid} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n+ \"<div class='MobileRow'>Status: \" + ${sstatus} + \"</div>\"\n"}],"height":"100%","margin":"4"}, {"onCellDblClick":"dgSelectDeptCellDblClick","onClick":"dgSelectDeptClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarSelectDept","targetProperty":"dataSet"}, {}]
}]
}]
}],
buttonBar7: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","fitToContentHeight":true,"height":"33px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnSelectDeptSelect: ["wm.Button", {"caption":"Select","margin":"4"}, {"onclick":"btnSelectDeptSelectClick"}],
btnSelectDeptCancel: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"ddSelectDept.hide"}]
}]
}],
ddSelectSect: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget8","modal":false,"title":"Select Section"}, {"onShow":"ddSelectSectShow"}, {
containerWidget8: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
dgSelectSect: ["wm.DojoGrid", {"columns":[{"show":false,"title":"Juid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"juid"},{"show":false,"title":"Entityid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":true,"title":"Section ID","width":"140px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"orgid"},{"show":true,"title":"Description","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"description"},{"show":false,"title":"Pid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"pid"},{"show":false,"title":"Contact01","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"contact01"},{"show":false,"title":"Contact02","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"contact02"},{"show":true,"title":"Status","width":"120px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Section ID: \" + ${orgid} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n+ \"<div class='MobileRow'>Status: \" + ${sstatus} + \"</div>\"\n"}],"height":"100%","margin":"4"}, {"onCellDblClick":"dgSelectSectCellDblClick","onClick":"dgSelectSectClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarSelectSect","targetProperty":"dataSet"}, {}]
}]
}]
}],
buttonBar8: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","fitToContentHeight":true,"height":"33px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnSelectSectSelect: ["wm.Button", {"caption":"Select","margin":"4"}, {"onclick":"btnSelectSectSelectClick"}],
btnSelectSectCancel: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"ddSelectSect.hide"}]
}]
}],
ddSelectLoc: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget9","modal":false,"title":"Select Location"}, {"onShow":"ddSelectLocShow"}, {
containerWidget9: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
dgSelectLoc: ["wm.DojoGrid", {"columns":[{"show":false,"title":"Juid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"juid"},{"show":false,"title":"Entityid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":true,"title":"Location ID","width":"140px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"orgid"},{"show":true,"title":"Description","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"description"},{"show":false,"title":"Pid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"pid"},{"show":false,"title":"Contact01","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"contact01"},{"show":false,"title":"Contact02","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"contact02"},{"show":false,"title":"Geodesc","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"geodesc"},{"show":false,"title":"Geolon","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"geolon"},{"show":false,"title":"Geolat","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"geolat"},{"show":true,"title":"Status","width":"120px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"show":true,"title":"Category","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"category"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Location ID: \" + ${orgid} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n+ \"<div class='MobileRow'>Status: \" + ${sstatus} + \"</div>\"\n+ \"<div class='MobileRow'>Category: \" + ${category} + \"</div>\"\n"}],"height":"100%","margin":"4"}, {"onCellDblClick":"dgSelectLocCellDblClick","onClick":"dgSelectLocClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarSelectLoc","targetProperty":"dataSet"}, {}]
}]
}]
}],
buttonBar9: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","fitToContentHeight":true,"height":"33px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnSelectLocSelect: ["wm.Button", {"caption":"Select","margin":"4"}, {"onclick":"btnSelectLocSelectClick"}],
btnSelectLocCancel: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"ddSelectLoc.hide"}]
}]
}],
ddSelectRestday: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget10","modal":false,"title":"Select Rest Day","width":"800px"}, {"onShow":"ddSelectRestdayShow"}, {
containerWidget10: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
dgSelectRestday: ["wm.DojoGrid", {"columns":[{"show":false,"title":"Juid","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"juid"},{"show":false,"title":"Entity ID","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":true,"title":"ID","width":"60px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"orgid"},{"show":true,"title":"Description","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"description"},{"show":false,"title":"Pid","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"pid"},{"show":true,"title":"Sun","width":"60px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"dsun"},{"show":true,"title":"Mon","width":"60px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"dmon"},{"show":true,"title":"Tues","width":"60px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"dtues"},{"show":true,"title":"Wed","width":"60px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"dwed"},{"show":true,"title":"Thu","width":"60px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"dthu"},{"show":true,"title":"Fri","width":"60px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"dfri"},{"show":true,"title":"Sat","width":"60px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"dsat"},{"show":true,"title":"Status","width":"60px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>ID: \" + ${orgid} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n+ \"<div class='MobileRow'>Sun: \" + ${dsun} + \"</div>\"\n+ \"<div class='MobileRow'>Mon: \" + ${dmon} + \"</div>\"\n+ \"<div class='MobileRow'>Tues: \" + ${dtues} + \"</div>\"\n+ \"<div class='MobileRow'>Wed: \" + ${dwed} + \"</div>\"\n+ \"<div class='MobileRow'>Thu: \" + ${dthu} + \"</div>\"\n+ \"<div class='MobileRow'>Fri: \" + ${dfri} + \"</div>\"\n+ \"<div class='MobileRow'>Sat: \" + ${dsat} + \"</div>\"\n+ \"<div class='MobileRow'>Status: \" + ${sstatus} + \"</div>\"\n"}],"height":"100%","margin":"4"}, {"onCellDblClick":"dgSelectRestdayCellDblClick","onClick":"dgSelectRestdayClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarSelectRestday","targetProperty":"dataSet"}, {}]
}]
}]
}],
buttonBar10: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","fitToContentHeight":true,"height":"33px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnSelectRestdaySelect: ["wm.Button", {"caption":"Select","margin":"4"}, {"onclick":"btnSelectRestdaySelectClick"}],
btnSelectRestdayCancel: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"ddSelectRestday.hide"}]
}]
}],
ddSelectShift: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget11","modal":false,"title":"Select Shift","width":"800px"}, {"onShow":"ddSelectShiftShow"}, {
containerWidget11: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
dgSelectShift: ["wm.DojoGrid", {"columns":[{"show":false,"title":"Juid","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"juid"},{"show":false,"title":"Entity ID","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":true,"title":"ID","width":"60px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"orgid"},{"show":true,"title":"Description","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"description"},{"show":false,"title":"Pid","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"pid"},{"show":true,"title":"Timefrom","width":"70px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_time_formatter","field":"timefrom"},{"show":true,"title":"Timeto","width":"70px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_time_formatter","field":"timeto"},{"show":true,"title":"Brk. Min.","width":"70px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"breaktime"},{"show":true,"title":"Brk. Start","width":"70px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_time_formatter","field":"breakstart"},{"show":true,"title":"Brk. End","width":"70px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_time_formatter","field":"breakend"},{"show":true,"title":"Swipe Pol.","width":"80px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"swipepolicy"},{"show":false,"title":"FlexAllow","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"flexAllow"},{"show":false,"title":"FlexIn","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"flexIn"},{"show":false,"title":"FlexOut","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"flexOut"},{"show":false,"title":"OtAllow","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"otAllow"},{"show":false,"title":"OtMinimum","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"otMinimum"},{"show":false,"title":"OtStart","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"otStart"},{"show":false,"title":"OtEnd01","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"otEnd01"},{"show":false,"title":"OtEnd02","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"otEnd02"},{"show":false,"title":"OtEnd03","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"otEnd03"},{"show":false,"title":"DiffAllow","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"diffAllow"},{"show":false,"title":"DiffStart","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"diffStart"},{"show":false,"title":"DiffEnd01","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"diffEnd01"},{"show":false,"title":"DiffEnd02","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"diffEnd02"},{"show":false,"title":"DiffEnd03","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"diffEnd03"},{"show":true,"title":"Status","width":"80px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"show":true,"title":"Axing","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"axing"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>ID: \" + ${orgid} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n+ \"<div class='MobileRow'>Timefrom: \" + ${timefrom} + \"</div>\"\n+ \"<div class='MobileRow'>Timeto: \" + ${timeto} + \"</div>\"\n+ \"<div class='MobileRow'>Brk. Min.: \" + ${breaktime} + \"</div>\"\n+ \"<div class='MobileRow'>Brk. Start: \" + ${breakstart} + \"</div>\"\n+ \"<div class='MobileRow'>Brk. End: \" + ${breakend} + \"</div>\"\n+ \"<div class='MobileRow'>Swipe Pol.: \" + ${swipepolicy} + \"</div>\"\n+ \"<div class='MobileRow'>Status: \" + ${sstatus} + \"</div>\"\n+ \"<div class='MobileRow'>Axing: \" + ${axing} + \"</div>\"\n"}],"height":"100%","margin":"4"}, {"onCellDblClick":"dgSelectShiftCellDblClick","onClick":"dgSelectShiftClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarSelectShift","targetProperty":"dataSet"}, {}]
}]
}]
}],
buttonBar11: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","fitToContentHeight":true,"height":"33px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnSelectShiftSelect: ["wm.Button", {"caption":"Select","margin":"4"}, {"onclick":"btnSelectShiftSelectClick"}],
btnSelectShiftCancel: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"ddSelectShift.hide"}]
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
lblBack: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"caption":"Back","height":"100%","padding":"4","width":"40px"}, {"onclick":"navPgMain"}, {
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
Sep2: ["wm.Spacer", {"height":"24px","width":"5px"}, {}],
pic_NewParty: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Add new party","source":"resources/images/buttons/addball24.png","width":"24px"}, {"onclick":"pic_NewPartyClick"}],
Sep3: ["wm.Spacer", {"height":"24px","width":"5px"}, {}],
pic_Edit: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Edit Party Information","source":"resources/images/buttons/edit24.png","width":"24px"}, {"onclick":"pic_EditClick"}],
Sep4: ["wm.Spacer", {"height":"24px","width":"5px"}, {}],
pic_Save: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Save party information","source":"resources/images/buttons/save24.png","width":"24px"}, {"onclick":"pic_SaveClick"}],
Sep5: ["wm.Spacer", {"height":"24px","width":"5px"}, {}],
pic_delete: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Delete Current Party","source":"resources/images/buttons/Recyclebin24.png","width":"24px"}, {"onclick":"pic_deleteClick"}]
}],
pnlMenuButtonRight: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
pic_help: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Help","source":"resources/images/buttons/helpred24.png","width":"24px"}, {"onclick":"ddPgMainConfigHelp.show"}],
pic_about: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"About","source":"resources/images/buttons/aboutblue24.png","width":"24px"}, {"onclick":"pdAbout.show"}]
}]
}],
spacer1: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
tabParty: ["wm.TabLayers", {}, {}, {
layParty: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Party","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
pnlRoleType: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtPartyId: ["wm.Text", {"caption":"*Party ID:","captionAlign":"left","displayValue":"","maxChars":"20","readonly":true,"width":"250px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarPersonView.partyid","targetProperty":"dataValue"}, {}]
}]
}],
selRoleType: ["wm.SelectMenu", {"caption":"*Role Type","captionAlign":"left","dataValue":undefined,"displayValue":"","width":"250px"}, {}],
selStatus: ["wm.SelectMenu", {"caption":"Status:","captionAlign":"left","dataField":"dataValue","displayField":"dataValue","displayValue":"","options":"ACTIVE,","width":"200px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarPersonView.sstatus","targetProperty":"dataValue"}, {}]
}]
}],
spacer3: ["wm.Spacer", {"height":"20px","width":"50px"}, {}]
}],
pnlName: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
selTitle: ["wm.SelectMenu", {"caption":"Title:","captionAlign":"left","dataField":"dataValue","displayField":"dataValue","displayValue":"","options":"MR,MS,DR","width":"200px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarPersonView.title","targetProperty":"dataValue"}, {}]
}]
}],
spacer2: ["wm.Spacer", {"height":"20px","width":"50px"}, {}],
txtFirstName: ["wm.Text", {"caption":"*First Name:","captionAlign":"left","displayValue":"","width":"250px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarPersonView.firstname","targetProperty":"dataValue"}, {}]
}]
}],
txtMiddleName: ["wm.Text", {"caption":"Middle Name:","captionAlign":"left","displayValue":"","width":"250px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarPersonView.middlename","targetProperty":"dataValue"}, {}]
}]
}],
txtLastName: ["wm.Text", {"caption":"*Last Name:","captionAlign":"left","displayValue":"","width":"250px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarPersonView.lastname","targetProperty":"dataValue"}, {}]
}]
}]
}],
pnlAttr: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtSuffix: ["wm.Text", {"caption":"Suffix:","captionAlign":"left","displayValue":"","width":"250px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarPersonView.suffix","targetProperty":"dataValue"}, {}]
}]
}],
txtattachuser: ["wm.Text", {"caption":"User ID:","captionAlign":"left","dataValue":undefined,"displayValue":"","width":"250px"}, {}],
btnSelectUserId: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_LightBlue"]},"caption":"..","margin":"4","width":"30px"}, {"onclick":"btnSelectUserIdClick"}],
spacer4: ["wm.Spacer", {"height":"19px","width":"220px"}, {}],
txtParent: ["wm.Text", {"caption":"Parent:","captionAlign":"left","displayValue":"","width":"250px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarPersonView.suffix","targetProperty":"dataValue"}, {}]
}]
}],
btnSelectParent: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_LightBlue"]},"caption":"..","margin":"4","width":"30px"}, {"onclick":"btnSelectParentClick"}]
}],
pnlAddress: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"130px","title":"Address"}, {}, {
txtAddress01: ["wm.Text", {"caption":"Address 01:","captionAlign":"left","displayValue":"","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarPersonView.addr01","targetProperty":"dataValue"}, {}]
}]
}],
txtAddress02: ["wm.Text", {"caption":"Address 02:","captionAlign":"left","displayValue":"","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarPersonView.addr02","targetProperty":"dataValue"}, {}]
}]
}],
pnlAddress02: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtCity: ["wm.Text", {"caption":"City:","captionAlign":"left","displayValue":"","width":"250px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarPersonView.city","targetProperty":"dataValue"}, {}]
}]
}],
txtState: ["wm.Text", {"caption":"State:","captionAlign":"left","captionSize":"60px","displayValue":"","width":"190px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarPersonView.empstate","targetProperty":"dataValue"}, {}]
}]
}],
txtZipCode: ["wm.Text", {"caption":"Zip Code:","captionAlign":"left","captionSize":"60px","displayValue":"","width":"190px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarPersonView.zipcode","targetProperty":"dataValue"}, {}]
}]
}],
selCountry: ["wm.SelectMenu", {"caption":"Country:","captionAlign":"left","dataType":"StringData","displayField":"dataValue","displayValue":"","width":"250px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varCountryList","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"svarPersonView.country","targetProperty":"dataValue"}, {}]
}]
}]
}],
txtEmail: ["wm.Text", {"caption":"*Email:","captionAlign":"left","displayValue":"","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarPersonView.email","targetProperty":"dataValue"}, {}]
}]
}]
}],
pnlContact: ["wm.FancyPanel", {"innerLayoutKind":"left-to-right","title":"Contact Details"}, {}, {
tabContact: ["wm.TabLayers", {}, {}, {
layHome: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Home","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
txtCountryCodeHome: ["wm.Text", {"caption":"Country Code:","captionAlign":"left","displayValue":"","width":"200px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarPersonView.countrycodehome","targetProperty":"dataValue"}, {}]
}]
}],
txtAreaCodeHome: ["wm.Text", {"caption":"Area Code:","captionAlign":"left","displayValue":"","width":"200px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarPersonView.areacodehome","targetProperty":"dataValue"}, {}]
}]
}],
txtPhoneHome: ["wm.Text", {"caption":"Phone No.:","captionAlign":"left","displayValue":""}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarPersonView.phonehome","targetProperty":"dataValue"}, {}]
}]
}],
txtExtHome: ["wm.Text", {"caption":"Ext. No.:","captionAlign":"left","displayValue":"","width":"200px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarPersonView.extensionhome","targetProperty":"dataValue"}, {}]
}]
}]
}],
layWork: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Work","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
txtCountryCodeWork: ["wm.Text", {"caption":"Country Code:","captionAlign":"left","displayValue":"","width":"200px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarPersonView.countrycodework","targetProperty":"dataValue"}, {}]
}]
}],
txtAreaCodeWork: ["wm.Text", {"caption":"Area Code:","captionAlign":"left","displayValue":"","width":"200px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarPersonView.areacodework","targetProperty":"dataValue"}, {}]
}]
}],
txtPhoneWork: ["wm.Text", {"caption":"Phone No.:","captionAlign":"left","displayValue":""}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarPersonView.phonework","targetProperty":"dataValue"}, {}]
}]
}],
txtExtWork: ["wm.Text", {"caption":"Ext. No.:","captionAlign":"left","displayValue":"","width":"200px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarPersonView.extensionwork","targetProperty":"dataValue"}, {}]
}]
}]
}],
layMobile: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Mobile","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
txtCountryCodeMobile: ["wm.Text", {"caption":"Country Code:","captionAlign":"left","displayValue":"","width":"200px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarPersonView.countrycodemobile","targetProperty":"dataValue"}, {}]
}]
}],
txtAreaCodeMobile: ["wm.Text", {"caption":"Area Code:","captionAlign":"left","displayValue":"","width":"200px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarPersonView.areacodemobile","targetProperty":"dataValue"}, {}]
}]
}],
txtPhoneMobile: ["wm.Text", {"caption":"Phone No.:","captionAlign":"left","displayValue":""}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarPersonView.phonemobile","targetProperty":"dataValue"}, {}]
}]
}],
txtExtMobile: ["wm.Text", {"caption":"Ext. No.:","captionAlign":"left","displayValue":"","width":"200px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarPersonView.extensionmobile","targetProperty":"dataValue"}, {}]
}]
}]
}],
layFax: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Fax","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
txtCountryCodeFax: ["wm.Text", {"caption":"Country Code:","captionAlign":"left","displayValue":"","width":"200px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarPersonView.countrycodefax","targetProperty":"dataValue"}, {}]
}]
}],
txtAreaCodeFax: ["wm.Text", {"caption":"Area Code:","captionAlign":"left","displayValue":"","width":"200px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarPersonView.areacodefax","targetProperty":"dataValue"}, {}]
}]
}],
txtPhoneFax: ["wm.Text", {"caption":"Phone No.:","captionAlign":"left","displayValue":""}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarPersonView.phonefax","targetProperty":"dataValue"}, {}]
}]
}],
txtExtFax: ["wm.Text", {"caption":"Ext. No.:","captionAlign":"left","displayValue":"","width":"200px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarPersonView.extensionfax","targetProperty":"dataValue"}, {}]
}]
}]
}]
}]
}]
}],
layEmployee: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Employment","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtBadgeId: ["wm.Text", {"caption":"Badge:","captionAlign":"left","displayValue":"","placeHolder":"100001","width":"250px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarEmployeeExtView.badgeid","targetProperty":"dataValue"}, {}]
}]
}]
}],
pnlDivision: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtDivision: ["wm.Text", {"caption":"Division:","captionAlign":"left","displayValue":"","placeHolder":"DIV01","width":"250px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarEmployeeExtView.divisionid","targetProperty":"dataValue"}, {}]
}]
}],
btnDivision: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_LightBlue"]},"caption":"..","margin":"4","width":"30px"}, {"onclick":"btnDivisionClick"}],
txtDivisionDesc: ["wm.Text", {"captionAlign":"left","displayValue":"","readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarEmployeeExtView.divisiondesc","targetProperty":"dataValue"}, {}]
}]
}]
}],
pnlDepartment: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtDepartment: ["wm.Text", {"caption":"Department:","captionAlign":"left","displayValue":"","placeHolder":"DEPT01","width":"250px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarEmployeeExtView.departmentid","targetProperty":"dataValue"}, {}]
}]
}],
btnDepartment: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_LightBlue"]},"caption":"..","margin":"4","width":"30px"}, {"onclick":"btnDepartmentClick"}],
txtDepartmentDesc: ["wm.Text", {"captionAlign":"left","displayValue":"","readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarEmployeeExtView.departmentdesc","targetProperty":"dataValue"}, {}]
}]
}]
}],
pnlSection: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtSection: ["wm.Text", {"caption":"Section:","captionAlign":"left","displayValue":"","width":"250px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarEmployeeExtView.sectionid","targetProperty":"dataValue"}, {}]
}]
}],
btnSection: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_LightBlue"]},"caption":"..","margin":"4","width":"30px"}, {"onclick":"btnSectionClick"}],
txtSectionDesc: ["wm.Text", {"captionAlign":"left","displayValue":"","readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarEmployeeExtView.sectiondesc","targetProperty":"dataValue"}, {}]
}]
}]
}],
pnlLocation: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtLocation: ["wm.Text", {"caption":"Location:","captionAlign":"left","displayValue":"","placeHolder":"DEFAULT","width":"250px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarEmployeeExtView.locationid","targetProperty":"dataValue"}, {}]
}]
}],
btnLocation: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_LightBlue"]},"caption":"..","margin":"4","width":"30px"}, {"onclick":"btnLocationClick"}],
txtLocationDesc: ["wm.Text", {"captionAlign":"left","displayValue":"","readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarEmployeeExtView.locationdesc","targetProperty":"dataValue"}, {}]
}]
}]
}],
pnlRestDay: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtRestDay: ["wm.Text", {"caption":"Rest Day:","captionAlign":"left","displayValue":"","placeHolder":"DEFAULT","width":"250px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarEmployeeExtView.restdayid","targetProperty":"dataValue"}, {}]
}]
}],
btnRestday: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_LightBlue"]},"caption":"..","margin":"4","width":"30px"}, {"onclick":"btnRestdayClick"}],
txtRestDayDesc: ["wm.Text", {"captionAlign":"left","displayValue":"","readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarEmployeeExtView.restdaydesc","targetProperty":"dataValue"}, {}]
}]
}]
}],
pnlShift: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtShift: ["wm.Text", {"caption":"Shift:","captionAlign":"left","displayValue":"","placeHolder":"DEFAULT","width":"250px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarEmployeeExtView.shiftid","targetProperty":"dataValue"}, {}]
}]
}],
btnShift: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_LightBlue"]},"caption":"..","margin":"4","width":"30px"}, {"onclick":"btnShiftClick"}],
txtShiftDesc: ["wm.Text", {"captionAlign":"left","displayValue":"","readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarEmployeeExtView.shiftdesc","targetProperty":"dataValue"}, {}]
}]
}]
}],
pnlManager: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtManager: ["wm.Text", {"caption":"Manager:","captionAlign":"left","displayValue":"","placeHolder":"100001","width":"250px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarEmployeeExtView.managerid","targetProperty":"dataValue"}, {}]
}]
}],
btnManagerSelect: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_LightBlue"]},"caption":"..","margin":"4","width":"30px"}, {"onclick":"btnManagerSelectClick"}],
txtManagerDesc: ["wm.Text", {"captionAlign":"left","displayValue":"","readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarEmployeeExtView.managerdesc","targetProperty":"dataValue"}, {}]
}]
}]
}],
pnlDeviceIn: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtDeviceIn: ["wm.Text", {"caption":"Device IN:","captionAlign":"left","displayValue":"","placeHolder":"03","width":"250px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarEmployeeExtView.devicein","targetProperty":"dataValue"}, {}]
}]
}]
}],
pnlDeviceIOut: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txtDeviceOut: ["wm.Text", {"caption":"Device Out:","captionAlign":"left","displayValue":"","placeHolder":"04","width":"250px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarEmployeeExtView.deviceout","targetProperty":"dataValue"}, {}]
}]
}]
}],
pnlEmpStatus: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
selEmpStatus: ["wm.SelectMenu", {"caption":"Status:","captionAlign":"left","dataField":"dataValue","dataValue":"ACTIVE","displayField":"dataValue","displayValue":"ACTIVE","options":"ACTIVE,DISABLED","width":"200px"}, {}]
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

PgMainParty.prototype._cssText = 'body.tundra .PgMainParty .wmlayout .PgMainParty-pnlHeader {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainParty .wmlayout .PgMainParty-pnlTitle {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainParty .wmlayout .PgMainParty-lblTitle {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:14pt;\
}\
body.tundra .PgMainParty .wmlayout .PgMainParty-pnlMenuBar {\
background-color:#00008B;\
}\
body.tundra .PgMainParty .wmlayout .PgMainParty-pnlFooter {\
background-color:#00008B;\
}\
body.tundra .PgMainParty .wmlayout .PgMainParty-txtUserId {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainParty .PgMainParty-pnlLayoutMain.wmlayout {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainParty .wmlayout .PgMainParty-txtPassword {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainParty .wmlayout .PgMainParty-lblManageTicket {\
font-family: Tahoma;\
}\
body.tundra .PgMainParty .wmlayout .PgMainParty-lblUserInfo {\
font-family:Tahoma;\
}\
body.tundra .PgMainParty .wmlayout .PgMainParty-lblBorder {\
font-family:Tahoma;\
}\
body.tundra .PgMainParty .wmlayout .PgMainParty-lblLogout {\
font-family:Tahoma;\
}\
body.tundra .PgMainParty .wmlayout .PgMainParty-lblSep {\
font-family:Tahoma;\
}\
body.tundra .PgMainParty .wmlayout .PgMainParty-lblManageUser {\
font-family:Tahoma;\
}\
body.tundra .PgMainParty .wmlayout .PgMainParty-pnlBody {\
}\
body.tundra .PgMainParty .wmlayout .PgMainParty-lblManageLookUp {\
font-family:Tahoma;\
}\
';
PgMainParty.prototype._htmlText = '';