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

dojo.declare("PgGenerateRights", wm.Page, {
	"preferredDevice": "desktop",
    start: function() {
        try {
            app.varModuleId.setValue("dataValue", "MDLGENRIGHTS");
            this.lblTitle.setCaption("Generate Rights");
             var rights;
             for (i = 0; i < app.varArrayRights.getCount(); i++) {
                  rights = app.varArrayRights.getItem(i).getValue("dataValue");
                  this.checkRights(rights);
              }  
              
              app.pdWaitLoadPage.hide();
              
        } catch (e) {
            app.toastError(this.name + ".start() Failed: " + e.toString());
        }
    },
    
    
  checkRights: function(rights) {
        var appid = app.varAppId.getValue("dataValue");
        var rightid = rights;
        
        switch (rightid){
            case "GENERATESUSERMGTRIGHTS" + "|" + appid:
               this.btnUsrMgtRights.setShowing(true);
               break;
            case "GENERATESTKSTKS" + "|" + appid:
               this.btnTicketRights.setShowing(true);
               break;
            case "GENERATESLOOKUP" + "|" + appid:
               this.btnLookupRights.setShowing(true);
               break;
            default:break;
        }
    },
    
    //Modified by Jammi Dee 11/04/2012
    btnUsrMgtRightsClick: function(inSender) {
        try {
            
            this.svarGenerateRights.setValue("input.pGenerate", "TKSUSRMGT");
            this.svarGenerateRights.update();
            this.pdLoading.setShowing(true);
            
        } catch (e) {
            console.error('ERROR IN btnUsrMgtRightsClick: ' + e);
        }
    },
    svarGenerateRightsResult: function(inSender, inDeprecated) {
        try {
            this.pdLoading.setShowing(false);
        } catch (e) {
            console.error('ERROR IN svarGenerateRightsResult: ' + e);
        }
    },
    btnTicketRightsClick: function(inSender) {
        try {
            this.svarGenerateRights.setValue("input.pGenerate", "TKSTICKET");
            this.svarGenerateRights.update();
            this.pdLoading.setShowing(true);
            
            
        } catch (e) {
            console.error('ERROR IN btnUsrMgtRights1Click: ' + e);
        }
    },

    btnLookupRightsClick: function(inSender) {
        try {
            this.svarGenerateRights.setValue("input.pGenerate", "TKSLOOKUP");
            this.svarGenerateRights.update();
            this.pdLoading.setShowing(true);
            

        } catch (e) {
            console.error('ERROR IN btnUsrMgtRights2Click: ' + e);
        }
    },
    _end: 0
});