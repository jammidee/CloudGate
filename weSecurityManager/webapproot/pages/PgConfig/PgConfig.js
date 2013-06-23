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

dojo.declare("PgConfig", wm.Page, {
	"preferredDevice": "desktop",
    start: function() {
        try {
            this.svarEntityId.update();
            this.lblUserInfo.setCaption(app.varUserInfo.getValue("dataValue"));
            this.lblTitle.setCaption("Configuration");
            app.varModuleId.setValue("dataValue","MDLCONFIG");
            
            this.svarReadConfigUserId.setValue("input.pAppid", "TKSUSRMGT");
            this.svarReadConfigUserId.setValue("input.pVarname", "USERID");
            this.svarReadConfigUserId.update();
            
            this.svarReadConfigComId.setValue("input.pAppid", "TKSUSRMGT");
            this.svarReadConfigComId.setValue("input.pVarname", "COMPANYID");
            this.svarReadConfigComId.update();

            this.svarReadConfigComAdd.setValue("input.pAppid", "TKSUSRMGT");
            this.svarReadConfigComAdd.setValue("input.pVarname", "ADDRESS");
            this.svarReadConfigComAdd.update();

            this.svarReadConfigEntId.setValue("input.pAppid", "TKSUSRMGT");
            this.svarReadConfigEntId.setValue("input.pVarname", "ENTITY");
            this.svarReadConfigEntId.update();
            
            app.pdWaitLoadPage.hide();
            
        } catch (e) {
            app.toastError(this.name + ".start() Failed: " + e.toString());
        }
    },


    btnSaveClick: function(inSender) {
        try {
            
            if(this.txtEntId.getInvalid() === true){
              alert("Invalid Entity ID");
            }
            else{    
            this.svarSaveConfigUserId.setValue("input.pAppid", "TKSUSRMGT");
            this.svarSaveConfigUserId.setValue("input.pVarname", "USERID");
            this.svarSaveConfigUserId.setValue("input.pVarvalue", this.txtUserId.getValue("dataValue"));
            this.svarSaveConfigUserId.update();
            
            this.svarSaveConfigComId.setValue("input.pAppid", "TKSUSRMGT");
            this.svarSaveConfigComId.setValue("input.pVarname", "COMPANYID");
            this.svarSaveConfigComId.setValue("input.pVarvalue", this.txtComId.getValue("dataValue"));
            this.svarSaveConfigComId.update();

            this.svarSaveConfigComAdd.setValue("input.pAppid", "TKSUSRMGT");
            this.svarSaveConfigComAdd.setValue("input.pVarname", "ADDRESS");
            this.svarSaveConfigComAdd.setValue("input.pVarvalue", this.txtComAdd.getValue("dataValue"));
            this.svarSaveConfigComAdd.update();

            this.svarSaveConfigEntId.setValue("input.pAppid", "TKSUSRMGT");
            this.svarSaveConfigEntId.setValue("input.pVarname", "ENTITY");
            this.svarSaveConfigEntId.setValue("input.pVarvalue", this.txtEntId.getValue("dataValue"));
            this.svarSaveConfigEntId.update();
            
            app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
            app.svarLogging.setValue("input.pMsg","Edit Configuration");
            app.svarLogging.setValue("input.pModuleId",app.varModuleId.getValue("dataValue"));
            app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
            app.svarLogging.setValue("input.pProcess","CONFIGURATION");
            app.svarLogging.setValue("input.pScopeId","NA");
            app.svarLogging.setValue("input.pStype","USER");
                
            app.svarLogging.update();
                
            this.navBackToMain.update();
            }
        } catch (e) {
            console.error('ERROR IN btnSaveClick: ' + e);
        }
    },

    svarReadConfigComIdResult: function(inSender, inDeprecated) {
        try {
            //alert(this.svarReadConfigComId.getValue("dataValue"));
            if (this.svarReadConfigComId.getValue("dataValue") != "undefined" || this.svarReadConfigComId.getValue("dataValue") != "FAIL") {
                this.txtComId.setValue("dataValue", this.svarReadConfigComId.getValue("dataValue"));
            } else {
                this.txtComId.setValue("dataValue", "");
            }

        } catch (e) {
            console.error('ERROR IN svarReadConfigComIdResult: ' + e);
        }
    },
    svarReadConfigEntIdResult: function(inSender, inDeprecated) {
        try {
            if (this.svarReadConfigEntId.getValue("dataValue") != "undefined" || this.svarReadConfigEntId.getValue("dataValue") != "FAIL") {
                this.txtEntId.setValue("displayValue", this.svarReadConfigEntId.getValue("dataValue"));
            } else {
                this.txtEntId.setValue("dataValue", "");
            }

        } catch (e) {
            console.error('ERROR IN svarReadConfigEntIdResult: ' + e);
        }
    },
    svarReadConfigComAddResult: function(inSender, inDeprecated) {
        try {
            if (this.svarReadConfigComAdd.getValue("dataValue") != "undefined" || this.svarReadConfigComAdd.getValue("dataValue") != "FAIL") {
                this.txtComAdd.setValue("dataValue", this.svarReadConfigComAdd.getValue("dataValue"));
            } else {
                this.txtComAdd.setValue("dataValue", "");
            }
        } catch (e) {
            console.error('ERROR IN svarReadConfigComAddResult: ' + e);
        }
    },

    btnCancelClick: function(inSender) {
	  try {
		  
		   this.navBackToMain.update();
	  } catch(e) {
		  console.error('ERROR IN btnCancelClick: ' + e); 
	  } 
  },
  lblMainClick: function(inSender, inEvent) {
	  try {
		  this.navBackToMain.update();
		  
	  } catch(e) {
		  console.error('ERROR IN lblMainClick: ' + e); 
	  } 
  },
  
  svarReadConfigUserIdResult: function(inSender, inDeprecated) {
	  try {
		     if (this.svarReadConfigUserId.getValue("dataValue") != "undefined" || this.svarReadConfigUserId.getValue("dataValue") != "FAIL") {
                this.txtUserId.setValue("dataValue", this.svarReadConfigUserId.getValue("dataValue"));
            } else {
                this.txtUserId.setValue("dataValue", "");
            }
		   
	  } catch(e) {
		  console.error('ERROR IN svarReadConfigUserIdResult: ' + e); 
	  } 
  },
  _end: 0
});