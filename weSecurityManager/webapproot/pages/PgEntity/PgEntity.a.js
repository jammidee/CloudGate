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
dojo.declare("PgEntity", wm.Page, {
"preferredDevice": "desktop",
start: function() {
try {
this.lblUserInfo.setCaption(app.varUserInfo.getValue("dataValue"));
this.lblTitle.setCaption("Entity Maintenance");
this.gridEntity.dataSet.update();
app.pdWaitLoadPage.hide();
} catch (e) {
app.toastError(this.name + ".start() Failed: " + e.toString());
}
},
lblConfigClick: function(inSender, inEvent) {
try {
this.navConfig.update();
} catch (e) {
console.error('ERROR IN lblConfigClick: ' + e);
}
},
lblLogoutClick: function(inSender, inEvent) {
try {
this.navBackToLogin.update();
} catch (e) {
console.error('ERROR IN lblLogoutClick: ' + e);
}
},
lblMainClick: function(inSender, inEvent) {
try {
this.navBackToMain.update();
} catch(e) {
console.error('ERROR IN lblMainClick: ' + e);
}
},
btnAddClick: function(inSender) {
try {
this.pnlButtons.setValue("showing",false);
this.pnlSave.setValue("showing",true);
} catch(e) {
console.error('ERROR IN btnAddClick: ' + e);
}
},
btnEditClick: function(inSender) {
try {
this.pnlButtons.setValue("showing",false);
this.pnlSave.setValue("showing",true);
} catch(e) {
console.error('ERROR IN btnEditClick: ' + e);
}
},
btnSaveClick: function(inSender) {
try {
this.pnlButtons.setValue("showing",true);
this.pnlSave.setValue("showing",false);
} catch(e) {
console.error('ERROR IN btnSaveClick: ' + e);
}
},
btnCancelClick: function(inSender) {
try {
this.pnlButtons.setValue("showing",true);
this.pnlSave.setValue("showing",false);
} catch(e) {
console.error('ERROR IN btnCancelClick: ' + e);
}
},
gridEntityClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
try {
this.txtEntityId.setValue("dataValue", this.gridEntity.selectedItem.getData().entityid);
this.txtCompany.setValue("dataValue", this.gridEntity.selectedItem.getData().company);
this.txtDesc.setValue("dataValue", this.gridEntity.selectedItem.getData().description);
this.txtAddr01.setValue("dataValue", this.gridEntity.selectedItem.getData().addr01);
this.txtAddr02.setValue("dataValue", this.gridEntity.selectedItem.getData().addr02);
this.txtAddr03.setValue("dataValue", this.gridEntity.selectedItem.getData().addr03);
this.txtStartDate.setValue("dataValue", this.gridEntity.selectedItem.getData().startdate);
this.txtEndDate.setValue("dataValue", this.gridEntity.selectedItem.getData().enddate);
this.txtStatus.setValue("dataValue", this.dojoGrid2.selectedItem.getData().sstatus);
} catch(e) {
console.error('ERROR IN gridEntityClick: ' + e);
}
},
_end: 0
});

PgEntity.widgets = {
navConfig: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgConfig\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navBackToLogin: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgLogin\"","targetProperty":"pageName"}, {}]
}]
}]
}],
svarEntity: ["wm.ServiceVariable", {"operation":"getValue","service":"svcMaintenance"}, {}, {
input: ["wm.ServiceInput", {"type":"getValueInputs"}, {}]
}],
navBackToMain: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMain\"","targetProperty":"pageName"}, {}]
}]
}]
}],
varFlag: ["wm.Variable", {"type":"NumberData"}, {}],
pnlLayoutMain: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"autoScroll":false,"horizontalAlign":"left","scrollX":true,"scrollY":true,"verticalAlign":"top"}, {}, {
pnlHeader: ["wm.Panel", {"height":"45px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
imgLogo: ["wm.Picture", {"height":"45px","source":"resources/images/logos/waveerplogo.jpg","width":"275px"}, {}],
pnlTitle: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","styles":{"backgroundImage":"url(resources/images/logos/waveerpbar.jpg)"},"verticalAlign":"middle","width":"100%"}, {}, {
lblTitle: ["wm.Label", {"align":"right","autoSizeHeight":true,"caption":"Ticket System","height":"23px","padding":"4","singleLine":false,"width":"600px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}],
pnlMenuBar: ["wm.Panel", {"height":"20px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#00008b"},"verticalAlign":"top","width":"100%"}, {}, {
pnlSubMenu: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"75%"}, {}, {
lblMain: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Main","height":"100%","padding":"4","width":"36px"}, {"onclick":"lblMainClick"}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblSep: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"align":"center","caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblConfig: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Configuration","height":"100%","padding":"4","width":"87px"}, {"onclick":"lblConfigClick"}, {
format: ["wm.DataFormatter", {}, {}]
}]
}],
pnlSystemInfo: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"25%"}, {}, {
lblUserInfo: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"autoSizeWidth":true,"height":"100%","padding":"4","width":"40px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblBorder: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"align":"center","caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblLogout: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Logout","height":"100%","padding":"4","width":"48px"}, {"onclick":"lblLogoutClick"}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}],
pnlMenuButton: ["wm.HeaderContentPanel", {"border":"0","height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
pnlMenuButtonLeft: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"50%"}, {}, {
pic_back: ["wm.Picture", {"height":"24px","source":"resources/images/buttons/arrowleft24.png","width":"24px"}, {}]
}],
pnlMenuButtonRight: ["wm.Panel", {"height":"24px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"50%"}, {}]
}],
spacer1: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
pnlGridArea: ["wm.Panel", {"height":"40%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
pnlEntityGrid: ["wm.Panel", {"autoScroll":true,"height":"85%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
gridEntity: ["wm.DojoGrid", {"columns":[{"show":true,"title":"No","width":"3%","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"seqid"},{"show":true,"title":"Entity ID","width":"10%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":true,"title":"Company Name","width":"27%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"company"},{"show":true,"title":"Description","width":"27%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"description"},{"show":false,"title":"Addr01","width":"0%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"addr01"},{"show":false,"title":"Addr02","width":"0%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"addr02"},{"show":false,"title":"Addr03","width":"0%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"addr03"},{"show":true,"title":"Status","width":"11%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"show":true,"title":"Start Date","width":"11%","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"startdate"},{"show":true,"title":"End Date","width":"11%","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"enddate"},{"show":false,"title":"Deleted","width":"0%","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"deleted"},{"show":true,"title":"Juid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"juid"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>No: \" + ${seqid} + \"</div>\"\n+ \"<div class='MobileRow'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Company Name: \" + ${company} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n+ \"<div class='MobileRow'>Status: \" + ${sstatus} + \"</div>\"\n+ \"<div class='MobileRow'>Start Date: \" + wm.List.prototype.dateFormatter({}, null,null,null,${startdate}) + \"</div>\"\n+ \"<div class='MobileRow'>End Date: \" + wm.List.prototype.dateFormatter({}, null,null,null,${enddate}) + \"</div>\"\n+ \"<div class='MobileRow'>Juid: \" + ${juid} + \"</div>\"\n"}],"height":"100%","localizationStructure":{},"margin":"4"}, {"onClick":"gridEntityClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svarEntity","targetProperty":"dataSet"}, {}]
}]
}]
}],
pnlSave: ["wm.Panel", {"height":"15%","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"bottom","width":"100%"}, {}, {
btnSave: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Save Entity","margin":"4","width":"120px"}, {"onclick":"btnSaveClick"}],
btnCancel: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Cancel","margin":"4"}, {"onclick":"btnCancelClick"}]
}],
pnlButtons: ["wm.Panel", {"height":"15%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"bottom","width":"100%"}, {}, {
btnAdd: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Add Entity","margin":"4","width":"120px"}, {"onclick":"btnAddClick"}],
btnEdit: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Edit Entity","margin":"4","width":"120px"}, {"onclick":"btnEditClick"}],
button3: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Delete Entity","margin":"4","width":"122px"}, {}]
}]
}],
pnlInput: ["wm.Panel", {"height":"60%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
txtEntityId: ["wm.Text", {"caption":"Entity ID :","captionAlign":"left","captionSize":"112px","dataValue":undefined,"displayValue":"","width":"20%"}, {}],
txtCompany: ["wm.Text", {"caption":"Company Name :","captionAlign":"left","captionSize":"112px","dataValue":undefined,"displayValue":"","width":"50%"}, {}],
txtDesc: ["wm.LargeTextArea", {"caption":"Description :","captionSize":"15px","dataValue":undefined,"desktopHeight":"40px","displayValue":"","height":"40px","width":"100%"}, {}],
txtAddr01: ["wm.LargeTextArea", {"caption":"Address01 :","captionSize":"15px","dataValue":undefined,"desktopHeight":"40px","displayValue":"","height":"40px","width":"100%"}, {}],
txtAddr02: ["wm.LargeTextArea", {"caption":"Address02 :","captionSize":"15px","dataValue":undefined,"desktopHeight":"40px","displayValue":"","height":"40px","width":"100%"}, {}],
txtAddr03: ["wm.LargeTextArea", {"caption":"Address03 :","captionSize":"15px","dataValue":undefined,"desktopHeight":"40px","displayValue":"","height":"40px","width":"100%"}, {}],
txtStartDate: ["wm.Date", {"caption":"Start Date :","captionAlign":"left","captionSize":"112px","dataValue":undefined,"displayValue":"","width":"30%"}, {}],
txtEndDate: ["wm.Date", {"caption":"End Date :","captionAlign":"left","captionSize":"112px","dataValue":undefined,"displayValue":"","width":"30%"}, {}],
txtStatus: ["wm.SelectMenu", {"caption":"Status :","captionAlign":"left","captionSize":"112px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","options":"ACTIVE,INACTIVE","showing":false,"width":"30%"}, {}]
}]
}],
pnlFooter: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundChromeBar_LightBlue","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
lblFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"...","height":"20px","padding":"4","styles":{"backgroundGradient":{"direction":"horizontal","startColor":"#03036d","endColor":"#d8cbf2","colorStop":31},"backgroundColor":"#ffffff"},"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}]
};

PgEntity.prototype._cssText = 'body.tundra .PgEntity  .wmlayout .PgEntity-pnlHeader {\
background-color:#FFFFFF;\
}\
body.tundra .PgEntity  .wmlayout .PgEntity-pnlTitle {\
background-color:#FFFFFF;\
}\
body.tundra .PgEntity  .wmlayout .PgEntity-lblTitle {\
background-color:#FFFFFF;\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:20pt;\
}\
body.tundra .PgEntity .wmlayout .PgEntity-pnlMenuBar {\
background-color:#00008B;\
}\
body.tundra .PgEntity .wmlayout .PgEntity-pnlFooter {\
background-color:#00008B;\
}\
body.tundra .PgEntity .wmlayout .PgEntity-txtUserId {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgEntity .PgEntity-pnlLayoutMain.wmlayout {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgEntity .wmlayout .PgEntity-txtPassword {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgEntity .wmlayout .PgEntity-lblConfig {\
font-family: Tahoma;\
}\
body.tundra .PgEntity .wmlayout .PgEntity-lblUserInfo {\
font-family:Tahoma;\
}\
body.tundra .PgEntity .wmlayout .PgEntity-lblBorder {\
font-family:Tahoma;\
}\
body.tundra .PgEntity .wmlayout .PgEntity-lblLogout {\
font-family:Tahoma;\
}\
body.tundra .PgEntity .wmlayout .PgEntity-txtEntityId {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:10pt;\
font-weight:bold;\
}\
body.tundra .PgEntity .wmlayout .PgEntity-txtCompany {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:10pt;\
font-weight:bold;\
}\
body.tundra .PgEntity .wmlayout .PgEntity-txtDesc {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:10pt;\
font-weight:bold;\
}\
body.tundra .PgEntity .wmlayout .PgEntity-txtAddr01 {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:10pt;\
font-weight:bold;\
}\
body.tundra .PgEntity .wmlayout .PgEntity-txtAddr02 {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:10pt;\
font-weight:bold;\
}\
body.tundra .PgEntity .wmlayout .PgEntity-txtAddr03 {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:10pt;\
font-weight:bold;\
}\
body.tundra .PgEntity .wmlayout .PgEntity-txtStartDate {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:10pt;\
font-weight:bold;\
}\
body.tundra .PgEntity .wmlayout .PgEntity-txtStatus {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:10pt;\
font-weight:bold;\
}\
body.tundra .PgEntity .wmlayout .PgEntity-lblMain {\
font-family: Tahoma;\
}\
body.tundra .PgEntity .wmlayout .PgEntity-lblSep {\
font-family:Tahoma;\
}\
body.tundra .PgEntity .wmlayout .PgEntity-pnlBody {\
}\
body.tundra .PgEntity .wmlayout .PgEntity-txtEndDate {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:10pt;\
font-weight:bold;\
}\
body.tundra .PgEntity .wmlayout .PgEntity-pnlHeader {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgEntity .wmlayout .PgEntity-pnlTitle {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgEntity .wmlayout .PgEntity-lblTitle {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:14pt;\
}\
';
PgEntity.prototype._htmlText = '';