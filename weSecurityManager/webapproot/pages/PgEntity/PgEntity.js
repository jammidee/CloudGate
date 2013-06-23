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