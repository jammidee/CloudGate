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