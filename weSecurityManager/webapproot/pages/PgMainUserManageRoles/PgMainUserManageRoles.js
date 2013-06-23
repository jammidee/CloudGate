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

dojo.declare("PgMainUserManageRoles", wm.Page, {
	"preferredDevice": "desktop",
    start: function() { 
        
        try {
            
            //Added by Jammi Dee 01/10/2013
            this.btnAdd.setShowing(false);
            this.btnEdit.setShowing(false);
            this.btnDelete.setShowing(false);
            this.btnView.setShowing(false);         
            
            this.lblTitle.setCaption("Manage Role");
            this.updateDgRoleID();
            app.varModuleId.setValue("dataValue","MDLROLE");
            this.txtSearchStatus.setValue("dataValue","ACTIVE");
            var rights;
            for (i = 0; i < app.varArrayRights.getCount(); i++) {
             rights = app.varArrayRights.getItem(i).getValue("dataValue");
             this.checkRights(rights);
            }  
            
            //Added by Jammi Dee 05/06/2013
            this.svarEntityID.update();
            this.selEntity.setValue("dataValue",        app.varEntity.getValue("dataValue") );            
            
            // Initialize the application - Jammi Dee 03/25/2012
            this.initApplication();               
            
            //Added by Jammi Dee 11/25/2012
            app.svarUpdateSessionApp.setValue("input.pJuid",app.varSessionId.getValue("dataValue"));
            app.svarUpdateSessionApp.update();                
            
            // Added by Jammi Dee 05/06/2012 
            app.svarLogging.setValue("input.pUserId",       app.varUserId.getValue("dataValue"));
            app.svarLogging.setValue("input.pMsg",          "Manage System Roles.");
            app.svarLogging.setValue("input.pModuleId",     "MANAGEUSER");
            app.svarLogging.setValue("input.pAppId",        app.varAppId.getValue("dataValue"));
            app.svarLogging.setValue("input.pProcess",      "PAGELOAD");
            app.svarLogging.setValue("input.pScopeId",      "NA");
            app.svarLogging.setValue("input.pStype",        "USER");             
            app.svarLogging.setValue("input.pEntity",       app.varEntity.getValue("dataValue"));
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
        
        this.lblTitle.setCaption("Manage Roles : " + app.varAppName.getValue("dataValue") + " : " + app.varAppVersion.getValue("dataValue"));
        this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
    
    },      
    
    checkRights: function(rights) {
        var appid = app.varAppId.getValue("dataValue");
        var rightid = rights;
        
        switch (rightid){
            case app.varAppPrefix.getValue("dataValue") + "ROLESTATUS" + "|" + app.varAppId.getValue("dataValue"):
            
               this.txtSearchStatus.setShowing(true);
               break;
               
            case app.varAppPrefix.getValue("dataValue") + "ROLEADD" + "|" + app.varAppId.getValue("dataValue"):
            
               this.btnAdd.setShowing(true);
               break;
               
            case app.varAppPrefix.getValue("dataValue") + "ROLEEDIT" + "|" + app.varAppId.getValue("dataValue"):
            
               this.btnEdit.setShowing(true);
               break;
               
            case app.varAppPrefix.getValue("dataValue") + "ROLEDELETE" + "|" + app.varAppId.getValue("dataValue"):
            
               this.btnDelete.setShowing(true);
               break;
               
            default:break;
        }
    },
     
    updateDgRoleID: function() {
        this.svarRoleID.update();
        this.dgRoleID.dataSet.update();
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
        //this.btnEntityId.setValue("showing", true);
        //this.btnRoleId.setValue("showing", true);

        /*this.txtEntityId.setValue("dataValue", "");
        this.txtRoleId.setValue("dataValue", "");
        this.txtShortDesc.setValue("dataValue", "");
        this.txtDesc.setValue("dataValue", "");
        this.txtStartDate.setValue("dataValue", "");
        this.txtEndDate.setValue("dataValue", "");*/

        this.txtEntityId.setValue("readonly",   false);
        this.txtRoleId.setValue("readonly",     false);
        this.txtShortDesc.setValue("readonly",  false);
        this.txtDesc.setValue("readonly",       false);
        this.txtStartDate.setValue("readonly",  false);
        this.txtEndDate.setValue("readonly",    false);

        this.txtRoleId.setValue("disabled",     true);
        this.pnlStatus.setValue("showing",      true);
    },




    createButtonEnable: function() {
        //this.btnEntityId.setValue("showing", true);

        this.txtEntityId.setValue("dataValue",      this.txtEntityId.getValue("dataValue"));
        this.txtRoleId.setValue("dataValue",        "");
        this.txtShortDesc.setValue("dataValue",     "");
        this.txtDesc.setValue("dataValue",          "");
        this.txtStartDate.setValue("dataValue",     "");
        this.txtEndDate.setValue("dataValue",       "");

        this.txtEntityId.setValue("readonly",       false);
        this.txtRoleId.setValue("readonly",         false);
        this.txtShortDesc.setValue("readonly",      false);
        this.txtDesc.setValue("readonly",           false);
        this.txtStartDate.setValue("readonly",      false);
        this.txtEndDate.setValue("readonly",        false);
    },

    createButtonDisable: function() {
        this.btnEntityId.setValue("showing",        false);
        this.btnRoleId.setValue("showing",          false);

        this.txtEntityId.setValue("dataValue",      this.dgRoleID.getRow(0).entityid);
        this.txtRoleId.setValue("dataValue",        this.dgRoleID.getRow(0).roleid);
        this.txtShortDesc.setValue("dataValue",     this.dgRoleID.getRow(0).shortdesc);
        this.txtDesc.setValue("dataValue",          this.dgRoleID.getRow(0).description);
        this.txtStartDate.setValue("dataValue",     this.dgRoleID.getRow(0).startdate);
        this.txtEndDate.setValue("dataValue",       this.dgRoleID.getRow(0).enddate);
        this.txtStatus.setValue("dataValue",        this.dgRoleID.getRow(0).sstatus);
        
        this.txtEntityId.setValue("readonly",       true);
        this.txtRoleId.setValue("readonly",         true);
        this.txtShortDesc.setValue("readonly",      true);
        this.txtDesc.setValue("readonly",           true);
        this.txtStartDate.setValue("readonly",      true);
        this.txtEndDate.setValue("readonly",        true);

        this.txtRoleId.setValue("disabled",         false);
        this.pnlStatus.setValue("showing",          false);
    },

    roleViewSelect: function() {
        this.txtEntityId.setValue("dataValue",      this.dgRoleID.selectedItem.getData().entityid);
        this.txtRoleId.setValue("dataValue",        this.dgRoleID.selectedItem.getData().roleid);
        this.txtShortDesc.setValue("dataValue",     this.dgRoleID.selectedItem.getData().shortdesc);
        this.txtDesc.setValue("dataValue",          this.dgRoleID.selectedItem.getData().description);
        this.txtStartDate.setValue("dataValue",     this.dgRoleID.selectedItem.getData().startdate);
        this.txtEndDate.setValue("dataValue",       this.dgRoleID.selectedItem.getData().enddate);
        this.txtStatus.setValue("dataValue",        this.dgRoleID.selectedItem.getData().sstatus);
    },


    btnViewClick: function(inSender) {
        try {
            this.svarRoleID.update();
            this.dgRoleID.dataSet.update();
            this.pnlView.setValue("showing", true);

        } catch (e) {
            console.error('ERROR IN btnViewClick: ' + e);
        }
    },


    btnEntityIdClick: function(inSender) {
        try {
            this.svarEntityID.update();

            this.dgEntityID.dataSet.update();
            this.ddEntityID.setShowing(true);
        } catch (e) {
            console.error('ERROR IN btnEntityIdClick: ' + e);
        }
    },
    btnCloseClick: function(inSender) {
        try {
            this.ddEntityID.setShowing(false);
        } catch (e) {
            console.error('ERROR IN btnCloseClick: ' + e);
        }
    },
    btnCloseRoleViewClick: function(inSender) {
        try {
            this.pnlView.setValue("showing", false);

        } catch (e) {
            console.error('ERROR IN btnCloseRoleViewClick: ' + e);
        }
    },
    btnAddClick: function(inSender) {
        try {
            
            this.pnlButtons.setValue("showing", false);
            this.pnlSaveButton.setValue("showing", true);
            this.createButtonEnable();
            this.varFlag.setValue("dataValue", "ADD");
            
        } catch (e) {
            console.error('ERROR IN btnAddClick: ' + e);
        }
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
    dgEntityIDClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
        try {
            this.varGridSelect.setValue("dataValue", this.dgEntityID.selectedItem.getData().entityid);
        } catch (e) {
            console.error('ERROR IN dgEntityIDClick: ' + e);
        }
    },
    btnSelectClick: function(inSender) {
        try {
            this.txtEntityId.setValue("dataValue", this.varGridSelect.getValue("dataValue"));
            this.ddEntityID.setShowing(false);
        } catch (e) {
            console.error('ERROR IN btnSelectClick: ' + e);
        }
    },
    btnSaveClick: function(inSender) {
        try {
            var entityid = this.txtEntityId.getValue("dataValue");
            var roleid = this.txtRoleId.getValue("dataValue");
            var sdate = this.txtStartDate.getValue("dataValue");
            var edate = this.txtEndDate.getValue("dataValue");
            var sstatus = this.txtStatus.getValue("dataValue");

            if (typeof entityid !== 'undefined' && typeof roleid !== 'undefined' && typeof sdate !== 'undefined' && typeof edate !== 'undefined') {
              
                if (this.varFlag.getValue("dataValue") == "ADD") {
                    
                    this.svarQueryTksUsrMgt.setValue("input.pEntityId", entityid);
                    this.svarQueryTksUsrMgt.setValue("input.pRoleId", roleid);
                    this.svarQueryTksUsrMgt.update();
                    
                } else if (this.varFlag.getValue("dataValue") == "EDIT") {
                    
                    var sdesc = this.txtShortDesc.getValue("dataValue");
                    var desc = this.txtDesc.getValue("dataValue");
                    
                    var startresult = this.convertDateToSqlDateFormat(sdate);
                    var endresult = this.convertDateToSqlDateFormat(edate);
                    var eQuery = "update tblrole set shortdesc = '" + sdesc + "', "+
                                 "description = '" + desc + "', "+
                                 "sstatus = '" + sstatus + "', "+
                                 "startdate = '" + startresult + "', "+
                                 "enddate = '" + endresult + "'"+
                                 "where(entityid = '" + entityid + "' and "+
                                 "roleid = '" + roleid + "');";
                    
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

    svarQueryTksUsrMgtResult: function(inSender, inDeprecated) {
        try {
            
            var entityid = this.txtEntityId.getValue("dataValue");
            var roleid   = this.txtRoleId.getValue("dataValue");
            var sdate    = this.txtStartDate.getValue("dataValue");
            var edate    = this.txtEndDate.getValue("dataValue");
            var sdesc    = this.txtShortDesc.getValue("dataValue");
            var desc     = this.txtDesc.getValue("dataValue");

            var startresult = this.convertDateToSqlDateFormat(sdate);
            var endresult = this.convertDateToSqlDateFormat(edate);

                if (inSender.getValue("dataValue") == "exists" || inSender.getValue("dataValue") === null) {
                    
                    alert("Role Id already exists");
                    
                } else {
                    
                    var eQuery = "insert into tblrole(entityid,roleid,shortdesc,description,startdate,enddate)" + 
                                 "values (UCASE('" + entityid + "')," + 
                                 "UCASE('" + roleid + "')," + 
                                 "'" + sdesc + "'," + 
                                 "'" + desc + "'," + 
                                 "'" + startresult + "'," + 
                                 "'" + endresult + "');";

                    this.varQuery.setValue("dataValue", eQuery);

                    this.svarExecGenericNonQuery.setValue("input.eQuery", this.varQuery.getValue("dataValue"));
                    this.svarExecGenericNonQuery.update();
                }


        } catch (e) {
            
            console.error('ERROR IN svarQueryTksUsrMgtResult: ' + e);
            alert( 'ERROR IN svarQueryTksUsrMgtResult: ' + e );
            
        }
        
    },
    
    svarExecGenericNonQueryResult: function(inSender, inDeprecated) {
        try {
            var entityid = this.txtEntityId.getValue("dataValue");
            var roleid = this.txtRoleId.getValue("dataValue");
            var sdate = this.txtStartDate.getValue("dataValue");
            var edate = this.txtEndDate.getValue("dataValue");
            var sdesc = this.txtShortDesc.getValue("dataValue");
            var desc = this.txtDesc.getValue("dataValue");
            var sstatus = this.txtStatus.getValue("dataValue");
            var eQuery = "";
            
            if (inSender.getValue("dataValue") === false) {
                
                //alert("FAIL"); 
                
            } else {
                
                if(this.varFlag.getValue("dataValue") == "ADD"){
                    
                  alert("Successfuly added");
                  
                }else if(this.varFlag.getValue("dataValue") == "EDIT"){
                    
                   alert("Successfuly edited");
                   this.varFlag.setValue("dataValue","x");
                   
                   eQuery = "update tblroleasgn set sstatus = '" + sstatus + "' where roleid = '" + roleid + "';";
                   this.varQuery.setValue("dataValue", eQuery);
                   this.svarExecGenericNonQuery.setValue("input.eQuery", this.varQuery.getValue("dataValue"));
                   this.svarExecGenericNonQuery.update();
                
                }else if(this.varFlag.getValue("dataValue") == "DELETE"){
                    
                   alert("Successfuly deleted");
                   this.varFlag.setValue("dataValue","x");
                   
                   eQuery = "update tblroleasgn set sstatus = '" + sstatus + "' where roleid = '" + roleid + "';";
                   this.varQuery.setValue("dataValue", eQuery);
                   this.svarExecGenericNonQuery.setValue("input.eQuery", this.varQuery.getValue("dataValue"));
                   this.svarExecGenericNonQuery.update();
                   
                } 
                
                this.pnlButtons.setShowing(true);
                this.pnlSaveButton.setShowing(false);
                this.createButtonDisable();
                this.updateDgRoleID();
                
                app.svarGetRole.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
                app.svarGetRole.setValue("input.pEntityId",app.varEntity.getValue("dataValue"));
                app.svarGetRole.update();
            }

        } catch (e) {
            
            console.error('ERROR IN svarExecGenericNonQueryResult: ' + e);
            alert( 'ERROR IN svarExecGenericNonQueryResult: ' + e );
            
        }
    },
    
    btnRoleIdClick: function(inSender) {
        try {
            
            this.btnEntityIdClick(inSender);

        } catch (e) {
            
            console.error('ERROR IN btnEntityId1Click: ' + e);
            alert( 'ERROR IN btnEntityId1Click: ' + e );
            
        }
    },
    
    btnSearchClick: function(inSender) {
        try {
            var s;
            if(this.txtSearch.getValue("dataValue") !== ""){
                
              this.svarRoleID.setValue("input.pRoleId", this.txtSearch.getValue("dataValue"));
              
            }else{
                
               s = this.txtSearch.getValue("dataValue");
               
            }
            if(this.txtSearch.getValue("dataValue") == s){
                
                this.svarRoleID.setValue("input.pRoleId", "%");

            }
            
            this.svarRoleID.update();
            this.dgRoleID.dataSet.update();

        } catch (e) {
            
            console.error('ERROR IN btnSearchClick: ' + e);
            alert( 'ERROR IN btnSearchClick: ' + e );
            
        }
    },
    
    dgRoleIDClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
        try {
            
            this.roleViewSelect();

        } catch (e) {
            
            console.error('ERROR IN dgRoleIDClick: ' + e);
            alert( 'ERROR IN dgRoleIDClick: ' + e );
            
        }
    },
    
    svarRoleIDResult: function(inSender, inDeprecated) {
        try {
            
            this.txtEntityId.setValue("dataValue",      this.dgRoleID.getRow(0).entityid);
            this.txtRoleId.setValue("dataValue",        this.dgRoleID.getRow(0).roleid);
            this.txtShortDesc.setValue("dataValue",     this.dgRoleID.getRow(0).shortdesc);
            this.txtDesc.setValue("dataValue",          this.dgRoleID.getRow(0).description);
            this.txtStartDate.setValue("dataValue",     this.dgRoleID.getRow(0).startdate);
            this.txtEndDate.setValue("dataValue",       this.dgRoleID.getRow(0).enddate);
            this.txtStatus.setValue("dataValue",        this.dgRoleID.getRow(0).sstatus);
            
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
          var roleid = this.txtRoleId.getValue("dataValue");
          
		  var response = confirm("Are you sure you want to delete?");
          
          if (response) {
                
                //var eQuery = "update tblrole set sstatus = 'INACTIVE' "+
                //             "where(entityid = '" + entityid + "' and "+
                //             "roleid = '" + roleid + "');";

                var eQuery = "delete from tblrole  "+
                             "where(entityid = '" + entityid + "' and "+
                             "roleid = '" + roleid + "');";

                    this.varQuery.setValue("dataValue", eQuery);
                    //alert(this.varQuery.getValue("dataValue"));

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
  
  txtSearchStatusChange: function(inSender) {
	  try {
          
          this.svarRoleID.setValue("input.pStatus",         this.txtSearchStatus.getValue("dataValue"));
          this.svarRoleID.setValue("input.pEntityId",       this.selEntity.getValue("dataValue"));
		  this.svarRoleID.update(); 
          
	  } catch(e) {
          
		  console.error('ERROR IN txtSearchStatusChange: ' + e);
          alert( 'ERROR IN txtSearchStatusChange: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 05/06/2013
  pic_backClick: function(inSender) {
      try {
          
          app.pdWaitLoadPage.show();
          this.navPgMainUser.update();
          
	  } catch(e) {
          
		  console.error('ERROR IN pic_backClick: ' + e);
          
	  }		
  },
    
  //Added by Jammi Dee 05/06/2013
  selEntityChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
      try {
          
          this.svarRoleID.setValue("input.pStatus",         this.txtSearchStatus.getValue("dataValue"));
          this.svarRoleID.setValue("input.pEntityId",       this.selEntity.getValue("dataValue"));
		  this.svarRoleID.update(); 
          
          this.txtEntityId.setValue("dataValue",            this.selEntity.getValue("dataValue") );
          
	  } catch(e) {
          
		  console.error('ERROR IN selEntityChange: ' + e);
          alert( 'ERROR IN selEntityChange: ' + e );
          
	  }
  },
  
	_end: 0
});