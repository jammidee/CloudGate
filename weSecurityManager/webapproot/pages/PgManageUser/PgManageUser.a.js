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
dojo.declare("PgManageUser", wm.Page, {
"preferredDevice": "desktop",
start: function() {
try {
//            dojo.connect(window, "onbeforeunload", this, "windowUnload");
this.lblUserInfo.setCaption(app.varUserInfo.getValue("dataValue"));
this.lblTitle.setCaption("User Management");
this.lblEntity.setCaption("Entity :" + app.varEntity.getValue("dataValue"));
app.varModuleId.setValue("dataValue", "MDLMANAGEUSER");
//Added by Jammi Dee 11/25/2012
app.svarUpdateSessionApp.setValue("input.pJuid",app.varSessionId.getValue("dataValue"));
app.svarUpdateSessionApp.update();
//Added by Jammi Dee 12/02/2012
this.initAccess();
// Initialize the application - Jammi Dee 03/25/2012
this.initApplication();
// Added by Jammi Dee 06/14/2012
app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
app.svarLogging.setValue("input.pMsg","Loaded User Management Menu.");
app.svarLogging.setValue("input.pModuleId","CONFIG");
app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
app.svarLogging.setValue("input.pProcess","PAGELOAD");
app.svarLogging.setValue("input.pScopeId","NA");
app.svarLogging.setValue("input.pStype","USER");
app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue") );
app.svarLogging.update();
app.pdWaitLoadPage.hide();
} catch (e) {
app.toastError(this.name + ".start() Failed: " + e.toString());
}
},
// Added by Jammi Dee 11/04/2012
initAccess: function() {
//Initially hide all controls
this.hideAllControls();
//Load the original rights given to the user
this.reloadRights();
},
/*
* 03/25/2012 - Jammi Dee
* Initialize the template variables here
*/
initApplication: function() {
this.lblTitle.setCaption("Tools : " + app.varAppName.getValue("dataValue") + " : " + app.varAppVersion.getValue("dataValue"));
this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
},
// Added by Jammi Dee 11/04/2012
hideAllControls: function() {
//Hide all the menu initially
this.lblUser.setShowing(false);
this.lblSep.setShowing(false);
this.lblAsgnRole.setShowing(false);
this.lblSep1.setShowing(false);
this.lblRoles.setShowing(false);
this.lblSep2.setShowing(false);
this.lblRightsAsgn.setShowing(false);
this.lblSep3.setShowing(false);
this.lblRights.setShowing(false);
this.lblSep4.setShowing(false);
this.lblADMapping.setShowing(false);
},
// Added by Jammi Dee 11/04/2012
reloadRights: function() {
var rights;
//alert(app.varArrayRights.getCount());
this.varHasRight.setValue("dataValue", "NO");
for (i = 0; i < app.varArrayRights.getCount(); i++) {
rights = app.varArrayRights.getItem(i).getValue("dataValue");
//alert( rights + " = = = " + app.varAppPrefix.getValue("dataValue") + "USERADMIN" + "|" +  app.varAppId.getValue("dataValue") );
if( rights === app.varAppPrefix.getValue("dataValue") + "USERADMIN" + "|" +  app.varAppId.getValue("dataValue") ){
this.lblUser.setShowing(true);
this.lblSep.setShowing(true);
} else if(rights === app.varAppPrefix.getValue("dataValue") + "ASGNROLEADMIN" + "|" +  app.varAppId.getValue("dataValue") ){
this.lblAsgnRole.setShowing(true);
this.lblSep1.setShowing(true);
} else if(rights === app.varAppPrefix.getValue("dataValue") + "ROLEADMIN" + "|" +  app.varAppId.getValue("dataValue") ){
this.lblRoles.setShowing(true);
this.lblSep2.setShowing(true);
} else if(rights === app.varAppPrefix.getValue("dataValue") + "RIGHTSADMIN" + "|" +  app.varAppId.getValue("dataValue") ){
this.lblRightsAsgn.setShowing(true);
this.lblSep3.setShowing(true);
} else if(rights === app.varAppPrefix.getValue("dataValue") + "RIGHTSSTATUS" + "|" +  app.varAppId.getValue("dataValue") ){
this.lblRights.setShowing(true);
this.lblSep4.setShowing(true);
} else if(rights === app.varAppPrefix.getValue("dataValue") + "ADRIGHTS" + "|" +  app.varAppId.getValue("dataValue") ){
this.lblADMapping.setShowing(true);
}
}
},
lblLogoutClick: function(inSender, inEvent) {
try {
this.svarPara01.setValue("input.pIdNum",app.varUserId.getValue("dataValue"));
this.svarPara01.setValue("input.pPassword",app.varPassword.getValue("dataValue"));
this.svarPara01.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
this.svarPara01.update();
this.navBackToMain.update();
} catch (e) {
console.error('ERROR IN lblLogoutClick: ' + e);
}
},
lblUserClick: function(inSender, inEvent) {
try {
//this.varPageName.setValue("dataValue","PgUser");
//this.authenticateRights("MGTUSERADMIN");
app.pdWaitLoadPage.show();
this.navPgUser.update();
} catch (e) {
console.error('ERROR IN lblUserClick: ' + e);
alert( 'ERROR IN lblUserClick: ' + e );
}
},
lblRolesClick: function(inSender, inEvent) {
try {
app.pdWaitLoadPage.show();
this.PgMainUserManageRoles.update();
} catch (e) {
console.error('ERROR IN lblRolesClick: ' + e);
alert( 'ERROR IN lblRolesClick: ' + e );
}
},
lblAsgnRoleClick: function(inSender, inEvent) {
try {
//this.varPageName.setValue("dataValue","PgAsgnRole");
//this.authenticateRights("MGTASGNROLEADMIN");
app.pdWaitLoadPage.show();
this.navPgMainUserAsgnRoles.update();
} catch(e) {
console.error('ERROR IN lblAsgnRoleClick: ' + e);
alert( 'ERROR IN lblAsgnRoleClick: ' + e );
}
},
lblRightsAsgnClick: function(inSender, inEvent) {
try {
//this.varPageName.setValue("dataValue","PgRightAsgn");
//this.authenticateRights("MGTASGNRIGHTSADMIN");
app.pdWaitLoadPage.show();
this.navPgMainUserAsgnRights.update();
} catch(e) {
console.error('ERROR IN lblRightsAsgnClick: ' + e);
alert( 'ERROR IN lblRightsAsgnClick: ' + e );
}
},
lblRightsClick: function(inSender, inEvent) {
try {
//this.varPageName.setValue("dataValue","PgRights");
//this.authenticateRights("MGTRIGHTSADMIN");
//this.lblRolesClick(inSender, inEvent);
app.pdWaitLoadPage.show();
this.navPgMainUserManageRights.update();
} catch (e) {
console.error('ERROR IN lblRoles1Click: ' + e);
alert( 'ERROR IN lblRoles1Click: ' + e );
}
},
//
lblADMappingClick: function(inSender, inEvent) {
try {
app.pdWaitLoadPage.show();
this.navPgMainUserAdMapping.update();
} catch(e) {
console.error('ERROR IN lblADMappingClick: ' + e);
alert( 'ERROR IN lblADMappingClick: ' + e );
}
},
//    authenticateRights: function(rights,views) {
//        var x;
//        for (i = 0; i < app.varArrayRights.getCount(); i++) {
//            rightid = app.varArrayRights.getItem(i).getValue("dataValue").split("|", 2);
//            //alert(rights[0] + "-" + rights[1]);
//            if (rightid[0] == rights && rightid[1] == app.varAppId.getValue("dataValue")) {
//               if(this.varPageName.getValue("dataValue") == "PgUser"){
//                  this.navPgUser.update();
//               }else if(this.varPageName.getValue("dataValue") == "PgRole"){
//                  this.navPgRole.update();
//               }else if(this.varPageName.getValue("dataValue") == "PgAsgnRole"){
//                  this.navPgAsgnRole.update();
//               }else if(this.varPageName.getValue("dataValue") == "PgRights"){
//                  this.navPgRights.update();
//               }else if(this.varPageName.getValue("dataValue") == "PgRightAsgn"){
//                   this.navPgRightAsgn.update();
//               }
//               x = 1;
//               break;
//            } else {
//                x = 0;
//            }
//        }
//        if (x === 0) {
//            alert("Access Denied");
//        }
//    },
//
// Added by Jammi Dee 04/16/2012
// This are the events for the images for the toolbar.
pic_asgnrightsClick: function(inSender) {
try {
this.lblRightsAsgnClick(inSender, null);
} catch(e) {
console.error('ERROR IN pic_asgnrightsClick: ' + e);
}
},
pic_managerightsClick: function(inSender) {
try {
this.lblRightsClick(inSender, null);
} catch(e) {
console.error('ERROR IN pic_managerightsClick: ' + e);
}
},
pic_manageroleClick: function(inSender) {
try {
this.lblRolesClick(inSender, null);
} catch(e) {
console.error('ERROR IN pic_manageroleClick: ' + e);
}
},
pic_asgnroleClick: function(inSender) {
try {
this.lblAsgnRoleClick(inSender, null);
} catch(e) {
console.error('ERROR IN pic_asgnroleClick: ' + e);
}
},
pic_userClick: function(inSender) {
try {
this.lblUserClick(inSender, null);
} catch(e) {
console.error('ERROR IN pic_userClick: ' + e);
}
},
pic_userTreeClick: function(inSender) {
try {
this.pic_userClick(inSender);
} catch(e) {
console.error('ERROR IN pic_user1Click: ' + e);
}
},
//Added by Jammi Dee 03/23/2013
lblUserToolsClick: function(inSender, inEvent) {
try {
app.pdWaitLoadPage.show();
this.navPgMainUserTools.update();
} catch(e) {
console.error('ERROR IN lblUserToolsClick: ' + e);
}
},
_end: 0
});

PgManageUser.widgets = {
svarAuthenticate: ["wm.ServiceVariable", {"operation":"authenticate","service":"svcLogin"}, {"onResult":"svarAuthenticateResult"}, {
input: ["wm.ServiceInput", {"type":"authenticateInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":false,"source":"txtPassword.dataValue","targetProperty":"pPass"}, {}],
wire1: ["wm.Wire", {"expression":false,"source":"txtUserId.dataValue","targetProperty":"pUserId"}, {}]
}]
}]
}],
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
navEntity: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgEntity\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navManageUser: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navPgRole: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgRole\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navPgRights: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgRights\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navPgAsgnRole: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgRoleAsgn\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navPgRightAsgn: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgRightAsgn\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navBackToMain: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMain\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navPgUser: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgUser\"","targetProperty":"pageName"}, {}]
}]
}]
}],
varPageName: ["wm.Variable", {"type":"StringData"}, {}],
svarPara01: ["wm.ServiceVariable", {"operation":"saveToRegistry","service":"svcRegistry"}, {}, {
input: ["wm.ServiceInput", {"type":"saveToRegistryInputs"}, {}]
}],
navPgMainUserTree: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMainUserTree\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navPgMainUserAdMapping: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMainUserAdMapping\"","targetProperty":"pageName"}, {}]
}]
}]
}],
varHasRight: ["wm.Variable", {"type":"StringData"}, {}],
navPgMainUserTools: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMainUserTools\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navPgMainUserManageRights: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMainUserManageRights\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navPgMainUserAsgnRights: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMainUserAsgnRights\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navPgMainUserManageRoles: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMainUserManageRoles\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navPgMainUserAsgnRoles: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PgMainUserAsgnRoles\"","targetProperty":"pageName"}, {}]
}]
}]
}],
pdAbout: ["wm.PageDialog", {"desktopHeight":"341px","height":"341px","noEscape":true,"noMaxify":true,"noMinify":true,"pageName":"PgAbout","width":"616px"}, {}],
ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","title":"Configure System Help"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgMainConfigSystem.html"}, {}]
}],
buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnClose: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddPgMainConfigHelp.hide"}]
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
pnlMenuBar: ["wm.Panel", {"height":"20px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#00008b"},"verticalAlign":"top","width":"100%"}, {}, {
pnlSubMenu: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"70%"}, {}, {
lblUser: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Users","height":"100%","padding":"4","width":"42px"}, {"onclick":"lblUserClick"}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblSep: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"align":"center","caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblAsgnRole: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Assign Role","height":"100%","padding":"4","width":"76px"}, {"onclick":"lblAsgnRoleClick"}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblSep1: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"align":"center","caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblRoles: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Manage Role","height":"100%","padding":"4","width":"83px"}, {"onclick":"lblRolesClick"}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblSep2: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"align":"center","caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblRightsAsgn: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Assign Rights","height":"100%","padding":"4","width":"86px"}, {"onclick":"lblRightsAsgnClick"}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblSep3: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"align":"center","caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblRights: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Manage Rights","height":"100%","padding":"4","width":"93px"}, {"onclick":"lblRightsClick"}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblSep4: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"align":"center","caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblADMapping: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"caption":"AD Mapping","height":"100%","padding":"4","width":"85px"}, {"onclick":"lblADMappingClick"}],
lblSep5: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"align":"center","caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblUserTools: ["wm.Label", {"_classes":{"domNode":["wm_Mouse_pointer","wm_FontColor_White","wm_TextDecoration_Underline"]},"align":"center","autoSizeHeight":true,"caption":"User Tools","height":"23px","padding":"4","singleLine":false,"width":"86px"}, {"onclick":"lblUserToolsClick"}]
}],
pnlSystemInfo: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"30%"}, {}, {
lblHelp: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Help","height":"100%","padding":"4","width":"35px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblBorder1: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"align":"center","caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblEntity: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Help","height":"100%","padding":"4","width":"35px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
lblBorder2: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"align":"center","caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
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
pnlMenuButtonLeft: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
pic_back: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Back","source":"resources/images/buttons/arrowleft24.png","width":"24px"}, {"onclick":"navBackToMain"}],
spacer2: ["wm.Spacer", {"height":"24px","width":"20px"}, {}],
pic_userTree: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"User Tree","source":"resources/images/buttons/tree24.png","width":"24px"}, {"onclick":"navPgMainUserTree"}],
spacer7: ["wm.Spacer", {"height":"24px","width":"10px"}, {}],
pic_user: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Manage User","source":"resources/images/buttons/user24.png","width":"24px"}, {"onclick":"pic_userClick"}],
spacer3: ["wm.Spacer", {"height":"24px","width":"10px"}, {}],
pic_asgnrole: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Assign Role","source":"resources/images/buttons/roleasgn24.png","width":"24px"}, {"onclick":"pic_asgnroleClick"}],
spacer4: ["wm.Spacer", {"height":"24px","width":"10px"}, {}],
pic_managerole: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Manage Role","source":"resources/images/buttons/role24.png","width":"24px"}, {"onclick":"pic_manageroleClick"}],
spacer5: ["wm.Spacer", {"height":"24px","width":"10px"}, {}],
pic_asgnrights: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Assign Rights to Roles","source":"resources/images/buttons/rightsasgn24.png","width":"24px"}, {"onclick":"pic_asgnrightsClick"}],
spacer6: ["wm.Spacer", {"height":"24px","width":"10px"}, {}],
pic_managerights: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Manage Rights","source":"resources/images/buttons/rights24.png","width":"24px"}, {"onclick":"pic_managerightsClick"}]
}],
pnlMenuButtonRight: ["wm.Panel", {"height":"24px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
pic_help: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Help","source":"resources/images/buttons/helpred24.png","width":"24px"}, {"onclick":"ddPgMainConfigHelp.show"}],
pic_about: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"About","source":"resources/images/buttons/aboutblue24.png","width":"24px"}, {"onclick":"pdAbout.show"}]
}]
}],
spacer1: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
pnlBody: ["wm.Panel", {"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","styles":{"backgroundImage":"url(resources/images/logos/wavebgnd.gif) !important; background-repeat:no-repeat !important;"},"verticalAlign":"middle","width":"100%"}, {}],
pnlFooter: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel","wm_BackgroundChromeBar_LightBlue"]},"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
lblFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"...","height":"20px","padding":"4","styles":{"backgroundGradient":{"direction":"horizontal","startColor":"#03036d","endColor":"#d8cbf2","colorStop":31}},"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}]
};

PgManageUser.prototype._cssText = 'body.tundra .PgManageUser .wmlayout .PgManageUser-pnlHeader {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgManageUser .wmlayout .PgManageUser-pnlTitle {\
background-image:url(resources/images/logos/waveerpbar.jpg) !important;\
}\
body.tundra .PgManageUser .wmlayout .PgManageUser-lblTitle {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:14pt;\
}\
body.tundra .PgManageUser .wmlayout .PgManageUser-pnlMenuBar {\
background-color:#00008B;\
}\
body.tundra .PgManageUser .wmlayout .PgManageUser-pnlFooter {\
background-color:#00008B;\
}\
body.tundra .PgManageUser .wmlayout .PgManageUser-txtUserId {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgManageUser .PgManageUser-pnlLayoutMain.wmlayout {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgManageUser .wmlayout .PgManageUser-txtPassword {\
color:#666666;\
border: solid #CCCCCC 0;\
padding:5px;\
border-bottom-width: 0px;\
font-family: Tahoma;\
font-size:12pt;\
}\
body.tundra .PgManageUser .wmlayout .PgManageUser-lblUser {\
font-family: Tahoma;\
}\
body.tundra .PgManageUser .wmlayout .PgManageUser-lblUserInfo {\
font-family:Tahoma;\
}\
body.tundra .PgManageUser .wmlayout .PgManageUser-lblBorder {\
font-family:Tahoma;\
}\
body.tundra .PgManageUser .wmlayout .PgManageUser-lblLogout {\
font-family:Tahoma;\
}\
body.tundra .PgManageUser .wmlayout .PgManageUser-lblSep {\
font-family:Tahoma;\
}\
body.tundra .PgManageUser .wmlayout .PgManageUser-lblAsgnRole {\
font-family:Tahoma;\
}\
body.tundra .PgManageUser .wmlayout .PgManageUser-pnlBody {\
background-image:url(resources/images/logos/wavebgnd.gif) !important;\
background-repeat:no-repeat !important;\
}\
body.tundra .PgManageUser .wmlayout .PgManageUser-lblHelp {\
font-family:Tahoma;\
}\
body.tundra .PgManageUser .wmlayout .PgManageUser-lblBorder2 {\
font-family:Tahoma;\
}\
';
PgManageUser.prototype._htmlText = '';