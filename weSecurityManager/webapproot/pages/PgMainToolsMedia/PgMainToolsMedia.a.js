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
*
*/
/*
Created by Jammi Dee 05/22/2012
This is a sample page that can used as template
*/
dojo.declare("PgMainToolsMedia", wm.Page, {
"preferredDevice": "desktop",
start: function() {
try {
// Added by JMD 04/11/2012
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
// Added by Jammi Dee 05/22/2012
this.svarMediaLib.setValue("input.pAppId", app.varAppId.getValue("dataValue") );
this.svarMediaLib.setValue("input.pEntity", "%");
this.svarMediaLib.update();
this.dgLookup.dataSet.update();
// Added by Jammi Dee 05/06/2012
app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue") );
app.svarLogging.setValue("input.pMsg","Manage Media.");
app.svarLogging.setValue("input.pModuleId","TOOLS");
app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue") );
app.svarLogging.setValue("input.pProcess","PAGELOAD");
app.svarLogging.setValue("input.pScopeId","NA");
app.svarLogging.setValue("input.pStype","USER");
app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue") );
app.svarLogging.update();
this.splitData.setWidth( 5 );
this.splitUpload.setWidth( 5 );
// for some reasons dojo.io is not loaded in 6.1.9
dojo.require("dojo.io.iframe");
// create an array to hold objects
objArray = [];
// assign HTML input to
// panHolders (in this case we have 3)
for (var ii = 1; ii<=1; ii++) {
this.initForm(ii);
}
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
this.lblTitle.setCaption("Tools : Media" );
this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
},
// Added by Jammi Dee 05/22/2012
// class that holds the form objects
formObj: function(inNode, inChild, inButton) {
this.node = inNode;
this.child = inChild;
this.button = inButton;
},
// returns a array object
retArr: function(inNum) {
try {
return objArray[inNum];
} catch(e) {
alert('ERROR IN retArr: ' + e);
}
},
// init HTML input field
initForm: function(inID) {
var htmlContent = ['<form flex="1" box="v" enctype="multipart/form-data" method="post">',
'<div class="fileinputs">',
'<input type="hidden" name="method" value="uploading" />',
'<input id="hiddenButton' + inID +'" type="file" name="file" size="55" />',
'</div>',
'</form>'];
try{
var node = this["panHolder" + inID].domNode;
node.innerHTML = htmlContent.join('');
var child = node.firstChild;
var button = dojo.byId("hiddenButton" + inID);
objArray[inID] = new this.formObj(node, child, button);
} catch(e) {
alert('ERROR IN initForm: ' + e);
}
},
// ********* UPLOAD EVENTS **********
// ( 3 ) Starting the File Transfer process
// invoke upload
doTheUpload: function(inID) {
try {
app.pdWaitLoadPage.show();
// saves the scope of 'this'
dojo.setObject("scope", this);
// retrives the form nodes
var vBtn = this.retArr(inID).button;
var vForm = this.retArr(inID).child;
if (!vBtn.value) {
alert("Please specify a file to upload.");
return;
}
// url: is very important, must match the service name
dojo.io.iframe.send({
url: "services/svcUpload.upload",
form: vForm,
handleAs: "json",
// Callback on successful call:
load: function(response, ioArgs) {
scope.onComplete(inID);
return response;
},
// Callback on errors:
error: function(response, ioArgs){
debug.dir(response);
scope.onError(inID);
return response;
}
});
} catch(e) {
alert('ERROR IN picUploadClick: ' + e);
}
},
// ( 4 ) Upon upload, copy the file to database as binary.
// invoked after successful upload
onComplete: function(inID) {
try {
this["labUpload" + inID].setCaption("File uploaded ...");
//Added by Jammi Dee 03/18/2013
this.varFileName.setValue("dataValue",dojo.byId("hiddenButton1").value);
//Get the filename
this.varFileName.setValue("dataValue", this.varFileName.getValue("dataValue").substr( this.varFileName.getValue("dataValue").lastIndexOf('\\') + 1  ) );
this.varFileName.setValue("dataValue", this.varFileName.getValue("dataValue").substr( this.varFileName.getValue("dataValue").lastIndexOf('/') + 1  ) );
// Added by Jammi Dee 05/25/2012
// Insert the uploaded image to database
this.svarMediaLibInsert.setValue("input.pAppId",      app.varAppId.getValue("dataValue"));
this.svarMediaLibInsert.setValue("input.pEntity",     app.varEntity.getValue("dataValue"));
this.svarMediaLibInsert.setValue("input.pUserId",     app.varUserId.getValue("dataValue"));
this.svarMediaLibInsert.setValue("input.pFileName",   this.varFileName.getValue("dataValue"));
// alert("Inserting" + this.varFileName.getValue("dataValue") );
this.svarMediaLibInsert.setValue("input.pFilext","ZIP");
this.svarMediaLibInsert.update();
} catch(e) {
alert('ERROR IN onComplete: ' + e);
}
},
// invoked after error
onError: function(inID) {
try {
this["labUpload" + inID].setCaption("Something went wrong ...");
} catch(e) {
alert('ERROR IN onComplete: ' + e);
}
},
// ( 1 ) Get the file name of the files to be uploaded
picUpload1Click: function(inSender) {
try {
var attachfile;
// Added by Jammi Dee 05/25/2012
// Pass the file to be loaded here
this.varFileName.setValue("dataValue",dojo.byId("hiddenButton1").value);
//alert(this.varFileName.getValue("dataValue"));
//this.txtAttach.setValue("dataValue",attachfile);
// ( 2 ) Execute the loading process
this.doTheUpload(1);
} catch(e) {
alert('ERROR IN picUpload1Click: ' + e);
}
},
// Added by Jammi Dee 05/25/2012
svarMediaLibInsertResult: function(inSender, inDeprecated) {
try {
//alert( inSender.getValue("dataValue") );
this.svarMediaLib.setValue("input.pEntity", "%");
this.svarMediaLib.update();
this.dgLookup.update();
app.pdWaitLoadPage.hide();
app.toastSuccess( "New item has been uploaded!" );
} catch(e) {
console.error('ERROR IN svarMediaLibInsertResult: ' + e);
}
},
svarAppListResult: function(inSender, inDeprecated) {
try {
//           this.dgLookup.dataSet.update();
} catch(e) {
console.error('ERROR IN svarAppListResult: ' + e);
}
},
// Added by Jammi Dee 05/25/2012
dgLookupCellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
// Show the waiting dialog
this.pdLoading.setShowing(true);
this.svarMediaLibRead.setValue("input.pAppId",      app.varAppId.getValue("dataValue"));
this.svarMediaLibRead.setValue("input.pEntity",     app.varEntity.getValue("dataValue"));
this.svarMediaLibRead.setValue("input.pUserId",     app.varUserId.getValue("dataValue"));
this.svarMediaLibRead.setValue("input.pFileName",   this.dgLookup.selectedItem.getData().c3 );
//alert( this.dgLookup.selectedItem.getData().c3 );
this.svarMediaLibRead.update();
} catch(e) {
console.error('ERROR IN dgLookupCellDblClick: ' + e);
}
},
svarMediaLibReadResult: function(inSender, inDeprecated) {
try {
// Hide the waiting dialog
this.pdLoading.setShowing(false);
//alert( inSender.getValue("dataValue") );
this.layView.setCaption("View - " + inSender.getValue("dataValue") );
this.layView.update();
//alert( "http://" + window.location.hostname + ":" + window.location.port + "/weSecurityManager/" + inSender.getValue("dataValue") );
this.fraView.setSource("http://" + window.location.hostname + ":" + window.location.port + "/weSecurityManager/" + inSender.getValue("dataValue") );
this.fraView.update();
} catch(e) {
console.error('ERROR IN svarMediaLibReadResult: ' + e);
}
},
// Added by Jammi Dee 05/27/2012
pic_deleteClick: function(inSender) {
try {
var response = confirm("Delete: Are you sure?");
if (response) {
this.svarMediaLibDelete.setValue("input.pAppId",      app.varAppId.getValue("dataValue"));
this.svarMediaLibDelete.setValue("input.pEntity",     app.varEntity.getValue("dataValue"));
this.svarMediaLibDelete.setValue("input.pUserId",     app.varUserId.getValue("dataValue"));
this.svarMediaLibDelete.setValue("input.pFileName",   this.dgLookup.selectedItem.getData().c3 );
this.svarMediaLibDelete.update();
}
} catch(e) {
console.error('ERROR IN pic_deleteClick: ' + e);
alert( 'ERROR IN pic_deleteClick: ' + e );
}
},
svarMediaLibDeleteResult: function(inSender, inDeprecated) {
try {
// alert( inSender.getValue("dataValue") );
// Update the grid
this.svarMediaLib.setValue("input.pEntity", app.varEntity.getValue("dataValue") );
this.svarMediaLib.setValue("input.pAppId", app.varAppId.getValue("dataValue") );
this.svarMediaLib.update();
this.dgLookup.dataSet.update();
app.toastSuccess( "Selected item has been deleted!" );
} catch(e) {
console.error('ERROR IN svarMediaLibDeleteResult: ' + e);
alert( 'ERROR IN svarMediaLibDeleteResult: ' + e );
}
},
// Added by Jammi Dee 06/09/2012
svarMediaTempDirListResult: function(inSender, inDeprecated) {
try {
this.txtaTempDir.setValue( "dataValue", inSender.getValue("dataValue") );
} catch(e) {
console.error('ERROR IN svarMediaTempDirListResult: ' + e);
}
},
pic_refreshClick: function(inSender) {
try {
this.svarMediaTempDirList.update();
this.svarMediaTempDirListTree.update();
this.svarMediaUploadDirListTree.update();
} catch(e) {
console.error('ERROR IN pic_refreshClick: ' + e);
}
},
// Added by Jammi Dee 06/09/2012
svarMediaTempDirListTreeResult: function(inSender, inDeprecated) {
try {
this.otData.setValue("data", inSender.getValue("dataValue"));
} catch(e) {
console.error('ERROR IN svarMediaTempDirListTreeResult: ' + e);
}
},
svarMediaUploadDirListTreeResult: function(inSender, inDeprecated) {
try {
this.otUpload.setValue("data", inSender.getValue("dataValue"));
} catch(e) {
console.error('ERROR IN svarMediaUploadDirListTreeResult: ' + e);
}
},
// Added by Jammi Dee 06/11/2012
pic_toCsvClick: function(inSender) {
try {
this.dgLookup.showCSVData();
} catch(e) {
console.error('ERROR IN pic_toCsvClick: ' + e);
}
},
//Added by Jammi Dee 03/20/2013
pic_ViewClick: function(inSender) {
// Show the waiting dialog
this.pdLoading.setShowing(true);
this.svarMediaLibRead.setValue("input.pAppId",      app.varAppId.getValue("dataValue"));
this.svarMediaLibRead.setValue("input.pEntity",     app.varEntity.getValue("dataValue"));
this.svarMediaLibRead.setValue("input.pUserId",     app.varUserId.getValue("dataValue"));
this.svarMediaLibRead.setValue("input.pFileName",   this.dgLookup.selectedItem.getData().c3 );
//alert( this.dgLookup.selectedItem.getData().c3 );
this.svarMediaLibRead.update();
},
//Added by Jammi Dee 05/05/2013
pic_backClick: function(inSender) {
try {
app.pdWaitLoadPage.show();
this.navPgMainTools.update();
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

PgMainToolsMedia.widgets = {
varOps: ["wm.Variable", {"type":"StringData"}, {}],
navPgMain: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMain\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navPgMainMaintenance: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMainMaintenance\"","targetProperty":"pageName"}, {}]
}]
}]
}],
svarMediaLib: ["wm.ServiceVariable", {"operation":"qryMediaLib","service":"dbwaveerp"}, {}, {
input: ["wm.ServiceInput", {"type":"qryMediaLibInputs"}, {}]
}],
svarMediaLibInsert: ["wm.ServiceVariable", {"operation":"InsertMediaToMySql","service":"svcMediaLibFunction"}, {"onResult":"svarMediaLibInsertResult"}, {
input: ["wm.ServiceInput", {"type":"InsertMediaToMySqlInputs"}, {}]
}],
varFileName: ["wm.Variable", {"type":"StringData"}, {}],
svarMediaLibRead: ["wm.ServiceVariable", {"operation":"ReadMediaToFile","service":"svcMediaLibFunction"}, {"onResult":"svarMediaLibReadResult"}, {
input: ["wm.ServiceInput", {"type":"ReadMediaToFileInputs"}, {}]
}],
navPgMainTools: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMainTools\"","targetProperty":"pageName"}, {}]
}]
}]
}],
svarMediaLibDelete: ["wm.ServiceVariable", {"operation":"DeleteMediaFromMysql","service":"svcMediaLibFunction"}, {"onResult":"svarMediaLibDeleteResult"}, {
input: ["wm.ServiceInput", {"type":"DeleteMediaFromMysqlInputs"}, {}]
}],
svarMediaTempDirList: ["wm.ServiceVariable", {"operation":"listTempDir","service":"svcMediaLibFunction"}, {"onResult":"svarMediaTempDirListResult"}, {
input: ["wm.ServiceInput", {"type":"listTempDirInputs"}, {}]
}],
svarMediaTempDirListTree: ["wm.ServiceVariable", {"operation":"listTempDirForObjectTree","service":"svcMediaLibFunction"}, {"onResult":"svarMediaTempDirListTreeResult"}, {
input: ["wm.ServiceInput", {"type":"listTempDirForObjectTreeInputs"}, {}]
}],
svarMediaUploadDirListTree: ["wm.ServiceVariable", {"operation":"listUploadDirForObjectTree","service":"svcMediaLibFunction"}, {"onResult":"svarMediaUploadDirListTreeResult"}, {
input: ["wm.ServiceInput", {"type":"listUploadDirForObjectTreeInputs"}, {}]
}],
pdLoading: ["wm.PageDialog", {"desktopHeight":"100px","height":"100px","hideControls":true,"pageName":"Main","width":"280px"}, {}],
ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","corner":"cr","modal":false,"title":"Media Help"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgMainToolsMedia.html"}, {}]
}],
buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnClose: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddPgMainConfigHelp.hide"}]
}]
}],
pdAbout: ["wm.PageDialog", {"desktopHeight":"341px","height":"341px","noEscape":true,"noMaxify":true,"noMinify":true,"pageName":"PgAbout","width":"616px"}, {}],
pnlLayoutMain: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"horizontalAlign":"left","verticalAlign":"top"}, {}, {
pnlHeader: ["wm.Panel", {"height":"45px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundImage":"url(resources/images/logos/waveerpbar.jpg)"},"verticalAlign":"top","width":"100%"}, {}, {
imgLogo: ["wm.Picture", {"height":"45px","source":"resources/images/logos/waveerplogo.jpg","width":"275px"}, {}],
pnlTitle: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","styles":{"backgroundImage":"url(resources/images/logos/waveerpbar.jpg)","backgroundGradient":"","backgroundColor":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
lblTitle: ["wm.Label", {"align":"right","autoSizeHeight":true,"caption":"Wave ERP System","padding":"4","singleLine":false,"width":"600px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}],
pnlMenuBar: ["wm.Panel", {"height":"20px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
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
pic_back: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Back","source":"resources/images/buttons/arrowleft24.png","width":"24px"}, {"onclick":"pic_backClick"}]
}],
pnlMenuButtonRight: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
pic_help: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Help","source":"resources/images/buttons/helpred24.png","width":"24px"}, {"onclick":"ddPgMainConfigHelp.show"}],
pic_about: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"About","source":"resources/images/buttons/aboutblue24.png","width":"24px"}, {"onclick":"pdAbout.show"}]
}]
}],
spacer1: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
tabMain: ["wm.TabLayers", {}, {}, {
layList: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"File List","horizontalAlign":"left","verticalAlign":"top"}, {}, {
pnlLookup: ["wm.FancyPanel", {"title":"Media Library"}, {}, {
pnlFileAction: ["wm.Panel", {"fitToContentHeight":true,"height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
pic_View: ["wm.Picture", {"height":"26px","hint":"View selected item.","source":"resources/images/buttons/view24.png","width":"30px"}, {"onclick":"pic_ViewClick"}],
pic_toCsv: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"26px","hint":"Export Grid to CSV","source":"resources/images/buttons/csv24.png","width":"30px"}, {"onclick":"pic_toCsvClick"}],
pic_delete: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"26px","hint":"Delete Application Entry","source":"resources/images/buttons/Recyclebin24.png","width":"30px"}, {"onclick":"pic_deleteClick"}]
}],
dgLookup: ["wm.DojoGrid", {"columns":[{"show":true,"field":"c0","title":"Entity","width":"100px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"c1","title":"App ID","width":"100px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"c2","title":"User ID","width":"100px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"c3","title":"Filename","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"c4","title":"Extension","width":"100px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"c5","title":"Size","width":"80px","align":"right","formatFunc":"wm_number_formatter","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"c6","title":"Date","width":"80px","align":"right","formatFunc":"wm_date_formatter","formatProps":{"formatLength":"medium"},"editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"c7","title":"Src","width":"40px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"c8","title":"Is Image","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"c9","title":"Is PDF","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"c10","title":"Has Viewer","width":"100px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Entity: \" + ${c0} + \"</div>\"\n+ \"<div class='MobileRow'>App ID: \" + ${c1} + \"</div>\"\n+ \"<div class='MobileRow'>User ID: \" + ${c2} + \"</div>\"\n+ \"<div class='MobileRow'>Filename: \" + ${c3} + \"</div>\"\n+ \"<div class='MobileRow'>Extension: \" + ${c4} + \"</div>\"\n+ \"<div class='MobileRow'>Size: \" + wm.List.prototype.numberFormatter({}, null,null,null,${c5}) + \"</div>\"\n+ \"<div class='MobileRow'>Date: \" + wm.List.prototype.dateFormatter({\"formatLength\":\"medium\"}, null,null,null,${c6}) + \"</div>\"\n+ \"<div class='MobileRow'>Src: \" + ${c7} + \"</div>\"\n+ \"<div class='MobileRow'>Is Image: \" + ${c8} + \"</div>\"\n+ \"<div class='MobileRow'>Is PDF: \" + ${c9} + \"</div>\"\n+ \"<div class='MobileRow'>Has Viewer: \" + ${c10} + \"</div>\"\n","mobileColumn":true}],"height":"100%","localizationStructure":{},"margin":"4"}, {"onCellDblClick":"dgLookupCellDblClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarMediaLib","targetProperty":"dataSet"}, {}]
}]
}],
pnlControl: ["wm.Panel", {"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
panUploadFrame1: ["wm.Panel", {"fitToContentHeight":true,"height":"32px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
panUpload1: ["wm.Panel", {"fitToContentHeight":true,"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
panHolder1: ["wm.Panel", {"height":"28px","horizontalAlign":"left","verticalAlign":"top","width":"455px"}, {}],
picUpload1: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"27px","source":"resources/images/buttons/load24.png","width":"36px"}, {"onclick":"picUpload1Click"}],
labUpload1: ["wm.Label", {"caption":"---","padding":"4","width":"322px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}],
panMessage1: ["wm.Panel", {"height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}]
}]
}]
}]
}],
layView: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"View","horizontalAlign":"left","verticalAlign":"top"}, {}, {
fraView: ["wm.IFrame", {"height":"100%","width":"100%"}, {}]
}],
layWorkDir: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Working DIR","horizontalAlign":"left","verticalAlign":"top"}, {}, {
pnlAction: ["wm.Panel", {"fitToContentHeight":true,"height":"29px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
lblReload: ["wm.Label", {"caption":"Click here to reload informartion.","padding":"4"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
pic_refresh: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"27px","hint":"Refresh data","source":"resources/images/buttons/refresh24.png","width":"36px"}, {"onclick":"pic_refreshClick"}],
lblReload1: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"caption":"This is a cross-Entity tab.","padding":"4","width":"175px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}],
pnlTempDir: ["wm.FancyPanel", {"innerLayoutKind":"left-to-right","title":"Temporary Folder"}, {}, {
otData: ["wm.ObjectTree", {"height":"100%","width":"300px"}, {}],
splitData: ["wm.Splitter", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"height":"100%","width":"4px"}, {}],
txtaTempDir: ["wm.LargeTextArea", {"dataValue":undefined,"displayValue":"","height":"100%","width":"100%"}, {}]
}],
pnlUploadDir: ["wm.FancyPanel", {"innerLayoutKind":"left-to-right","title":"Upload Folder"}, {}, {
otUpload: ["wm.ObjectTree", {"height":"100%","width":"300px"}, {}],
splitUpload: ["wm.Splitter", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"bevelSize":"5","height":"100%","width":"5px"}, {}],
txtaUploadDir: ["wm.LargeTextArea", {"dataValue":undefined,"displayValue":"","height":"100%","width":"100%"}, {}]
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

PgMainToolsMedia.prototype._cssText = 'body.tundra .PgMainToolsMedia .wmlayout .PgMainToolsMedia-pnlHeader {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainToolsMedia .wmlayout .PgMainToolsMedia-pnlTitle {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgMainToolsMedia .wmlayout .PgMainToolsMedia-lblTitle {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:14pt;\
}\
body.tundra .PgMainToolsMedia .wmlayout .PgMainToolsMedia-pnlMenuBar {\
background-color:#00008B;\
}\
body.tundra .PgMainToolsMedia .wmlayout .PgMainToolsMedia-pnlFooter {\
background-color:#00008B;\
}\
body.tundra .PgMainToolsMedia .wmlayout .PgMainToolsMedia-txtUserId {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainToolsMedia .PgMainToolsMedia-pnlLayoutMain.wmlayout {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainToolsMedia .wmlayout .PgMainToolsMedia-txtPassword {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgMainToolsMedia .wmlayout .PgMainToolsMedia-lblManageTicket {\
font-family: Tahoma;\
}\
body.tundra .PgMainToolsMedia .wmlayout .PgMainToolsMedia-lblUserInfo {\
font-family:Tahoma;\
}\
body.tundra .PgMainToolsMedia .wmlayout .PgMainToolsMedia-lblBorder {\
font-family:Tahoma;\
}\
body.tundra .PgMainToolsMedia .wmlayout .PgMainToolsMedia-lblLogout {\
font-family:Tahoma;\
}\
body.tundra .PgMainToolsMedia .wmlayout .PgMainToolsMedia-lblSep {\
font-family:Tahoma;\
}\
body.tundra .PgMainToolsMedia .wmlayout .PgMainToolsMedia-lblManageUser {\
font-family:Tahoma;\
}\
body.tundra .PgMainToolsMedia .wmlayout .PgMainToolsMedia-pnlBody {\
}\
body.tundra .PgMainToolsMedia .wmlayout .PgMainToolsMedia-lblManageLookUp {\
font-family:Tahoma;\
}\
';
PgMainToolsMedia.prototype._htmlText = '';