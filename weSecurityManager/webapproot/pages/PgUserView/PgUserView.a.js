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
dojo.declare("PgUserView", wm.Page, {
"preferredDevice": "desktop",
start: function() {
try {
this.svarTblUserView.update();
this.dgUserView.dataSet.update();
this.svarTblUserView.setValue("input.pUserId","%");
//Added by Jammi Dee 11/25/2012
app.svarUpdateSessionApp.setValue("input.pJuid",app.varSessionId.getValue("dataValue"));
app.svarUpdateSessionApp.update();
app.pdWaitLoadPage.hide();
} catch(e) {
app.toastError(this.name + ".start() Failed: " + e.toString());
}
},
btnSearchClick: function(inSender) {
try {
var s;
if(this.txtSearch.getValue("dataValue") !== ""){
this.svarTblUserView.setValue("input.pUserId",this.txtSearch.getValue("dataValue"));
}else{
s = this.txtSearch.getValue("dataValue");
}
//alert(s);
//alert(this.txtSearch.getValue("dataValue"));
if(this.txtSearch.getValue("dataValue") == s){
this.svarTblUserView.setValue("input.pUserId","%");
this.svarTblUserView.getValue("dataValue");
}
this.svarTblUserView.update();
this.dgUserView.dataSet.update();
} catch(e) {
console.error('ERROR IN btnSearchClick: ' + e);
}
},
dgUserViewClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
app.varGetUserID.setValue("dataValue",this.dgUserView.selectedItem.getData().userid);
} catch(e) {
console.error('ERROR IN dgUserViewClick: ' + e);
}
},
_end: 0
});

PgUserView.widgets = {
svarTblUserView: ["wm.ServiceVariable", {"autoUpdate":true,"operation":"qryUserView","service":"dbwaveerp","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"qryUserViewInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"%\"","targetProperty":"pUserId"}, {}],
wire1: ["wm.Wire", {"expression":"\"ACTIVE\"","targetProperty":"pStatus"}, {}]
}]
}]
}],
pnlLayoutMain: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"horizontalAlign":"center","verticalAlign":"top"}, {}, {
pnlSearch: ["wm.Panel", {"height":"7%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
txtSearch: ["wm.Text", {"caption":"Search by User ID :","captionAlign":"left","captionSize":"127px","dataValue":undefined,"displayValue":""}, {}],
btnSearch: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Search","margin":"4"}, {"onclick":"btnSearchClick"}]
}],
pnlUserView: ["wm.Panel", {"height":"93%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
dgUserView: ["wm.DojoGrid", {"columns":[{"show":true,"field":"userid","title":"User ID","width":"7%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"entityid","title":"Entity ID","width":"8%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"password","title":"Password","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"username","title":"Username","width":"13%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"firstname","title":"First Name","width":"18%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"middlename","title":"Middle Name","width":"18%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"lastname","title":"Last Name","width":"18%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"sstatus","title":"Sstatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"email","title":"Email","width":"18%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"roleid","title":"Roleid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"startdate","title":"Startdate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"enddate","title":"Enddate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"deleted","title":"Deleted","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"userimgext","title":"Userimgext","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"pid","title":"Pid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"passwdenc","title":"Passwdenc","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"parentPerson","title":"ParentPerson","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"id","title":"Id","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"id.seqid","title":"Id.seqid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"id.juid","title":"Id.juid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>User ID: \" + ${userid} + \"</div>\"\n+ \"<div class='MobileRow'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Username: \" + ${username} + \"</div>\"\n+ \"<div class='MobileRow'>First Name: \" + ${firstname} + \"</div>\"\n+ \"<div class='MobileRow'>Middle Name: \" + ${middlename} + \"</div>\"\n+ \"<div class='MobileRow'>Last Name: \" + ${lastname} + \"</div>\"\n","mobileColumn":true}],"height":"100%","margin":"4"}, {"onClick":"dgUserViewClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarTblUserView","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
};

PgUserView.prototype._cssText = 'body.tundra .PgUserView .PgUserView-pnlLayoutMain.wmlayout {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
font-weight:bold;\
}\
body.tundra .PgUserView .wmlayout .PgUserView-txtSearch {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:9pt;\
font-weight:bold;\
}\
';
PgUserView.prototype._htmlText = '';