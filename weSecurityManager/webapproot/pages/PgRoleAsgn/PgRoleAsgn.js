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

dojo.declare("PgRoleAsgn", wm.Page, {
	"preferredDevice": "desktop",
    start: function() {
        try {
            
            this.lblTitle.setCaption("Assign Role");
            this.updateDgRoleAsgnID();
            app.varModuleId.setValue("dataValue","MDLROLEASGN");
            this.txtSearchStatus.setValue("dataValue","ACTIVE");
            var rights;
            
            //for (i = 0; i < app.varArrayRights.getCount(); i++) {
            //        rights = app.varArrayRights.getItem(i).getValue("dataValue");
            //        this.checkRights(rights);
            //}
            
            //Initially Hide OBjects
            //this.btnAdd.setShowing(false);
            //this.btnEdit.setShowing(false);
            //this.btnDelete.setShowing(false);
            //this.btnView.setShowing(false);
            this.btnRoleId.setShowing( false );
            this.pnlSaveButton.setShowing( false );
            
            // Initialize the application - Jammi Dee 03/25/2012
            this.initApplication();            

            //Added by Jammi Dee 11/25/2012
            app.svarUpdateSessionApp.setValue("input.pJuid",app.varSessionId.getValue("dataValue"));
            app.svarUpdateSessionApp.update();    
            
            // Added by Jammi Dee 05/06/2012 
            app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
            app.svarLogging.setValue("input.pMsg","Manage System Roles Assignment.");
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
        
        this.lblTitle.setCaption("Asgn Role : " + app.varAppName.getValue("dataValue") + " : " + app.varAppVersion.getValue("dataValue"));
        this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
    
    },  

    updateDgRoleAsgnID: function() {
        
        this.svarRoleAsgnID.update();
        this.dgRoleAsgnID.dataSet.update();
        
    },
    
      checkRights: function(rights) {
        var appid = app.varAppId.getValue("dataValue");
        var rightid = rights;
        
        switch (rightid){
            case "MGTASGNROLESTATUS" + "|" + appid:
               this.txtSearchStatus.setShowing(true);
               break;
            case "MGTASGNROLEADD" + "|" + appid:
               this.btnAdd.setShowing(true);
               break;
            case "MGTASGNROLEEDIT" + "|" + appid:
               this.btnEdit.setShowing(true);
               break;
            case "MGTASGNROLEDELETE" + "|" + appid:
               this.btnDelete.setShowing(true);
               break;
            default:break;
        }
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
        //this.btnUserId.setValue("showing", true);
        
        this.txtEntityId.setValue("readonly", false);
        this.txtRoleId.setValue("readonly", false);
        this.txtUserId.setValue("readonly", false);
        this.txtDesc.setValue("readonly", false);

        this.txtEntityId.setValue("disabled", true);
        this.txtRoleId.setValue("disabled", true);
        this.txtUserId.setValue("disabled", true);
        this.pnlStatus.setValue("showing", true);
        
    },


    createButtonEnable: function() {
        
        //this.btnEntityId.setValue("showing", true);
        this.btnRoleId.setValue("showing", true);
        //this.btnUserId.setValue("showing", true);
        
        this.txtEntityId.setValue("dataValue", app.varEntity.getValue("dataValue"));
        this.txtRoleId.setValue("dataValue", "");
        this.txtUserId.setValue("dataValue",this.varGridSelect.getValue("dataValue"));
        this.txtDesc.setValue("dataValue", "");

        this.txtEntityId.setValue("readonly", false);
        this.txtRoleId.setValue("readonly", false);
        this.txtUserId.setValue("readonly", false);
        this.txtDesc.setValue("readonly", false);
        
        this.txtEntityId.setValue("disabled", true);
        this.txtRoleId.setValue("disabled", true);
        this.txtUserId.setValue("disabled", true);
        
    },

    createButtonDisable: function() {
        
        this.btnEntityId.setValue("showing", false);
        this.btnRoleId.setValue("showing", false);
        //this.btnUserId.setValue("showing", false);

        this.txtEntityId.setValue("dataValue", this.dgRoleAsgnID.getRow(0).entityid);
        this.txtRoleId.setValue("dataValue", this.dgRoleAsgnID.getRow(0).roleid);
        this.txtUserId.setValue("dataValue", this.dgRoleAsgnID.getRow(0).userid);
        this.txtDesc.setValue("dataValue", this.dgRoleAsgnID.getRow(0).description);
        this.txtStatus.setValue("dataValue", this.dgRoleAsgnID.getRow(0).sstatus); 

        this.txtEntityId.setValue("readonly", true);
        this.txtRoleId.setValue("readonly", true);
        this.txtUserId.setValue("readonly", true);
        this.txtDesc.setValue("readonly", true);

        this.txtRoleId.setValue("disabled", false);
        this.pnlStatus.setValue("showing", false);
        
    },

    roleAsgnViewSelect: function() {
        
        this.txtEntityId.setValue("dataValue", this.dgRoleAsgnID.selectedItem.getData().entityid);
        this.txtRoleId.setValue("dataValue", this.dgRoleAsgnID.selectedItem.getData().roleid);
        this.txtUserId.setValue("dataValue", this.dgRoleAsgnID.selectedItem.getData().userid);
        this.txtDesc.setValue("dataValue", this.dgRoleAsgnID.selectedItem.getData().description);
        this.txtStatus.setValue("dataValue", this.dgRoleAsgnID.selectedItem.getData().sstatus);
        
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
            var userid = this.txtUserId.getValue("dataValue");
            var sstatus = this.txtStatus.getValue("dataValue");
            
            if (entityid !== "" && roleid !== "" && userid !== "") {
                if (this.varFlag.getValue("dataValue") == "ADD") {
                    this.svarTblRoleAsgn.setValue("input.pEntityId", entityid);
                    this.svarTblRoleAsgn.setValue("input.pRoleId", roleid);
                    this.svarTblRoleAsgn.setValue("input.pUserId", userid);
                    this.svarTblRoleAsgn.update();
                } else if (this.varFlag.getValue("dataValue") == "EDIT") {
                    var desc = this.txtDesc.getValue("dataValue");
                    
                    var eQuery = "update tblroleasgn set description = '" + desc + "', "+
                                 "sstatus = '" + sstatus + "' "+
                                 "where(entityid = '" + entityid + "' and "+
                                 "roleid = '" + roleid + "' and userid = '" + userid + "');";
                    
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
            if (inSender.getValue("dataValue") === false) {
                //alert("FAIL"); 
            } else {
                if(this.varFlag.getValue("dataValue") == "ADD"){
                  alert("Successfuly added");
                  
                }else if(this.varFlag.getValue("dataValue") == "EDIT"){
                   alert("Successfuly edited");
                }else if(this.varFlag.getValue("dataValue") == "DELETE"){
                   alert("Successfuly deleted");
                }
                this.pnlButtons.setValue("showing", true);
                this.pnlSaveButton.setValue("showing", false);
                this.createButtonDisable();
                this.updateDgRoleAsgnID();
                
                app.svarGetRole.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
                app.svarGetRole.setValue("input.pEntityId",app.varEntity.getValue("dataValue"));
                app.svarGetRole.update();
            }

        } catch (e) {
            console.error('ERROR IN svarExecGenericNonQueryResult: ' + e);
        }
    },
    
    btnRoleIdClick: function(inSender) {
        try {
            
            this.svarRoleID.update();
            this.dgRoleID.dataSet.update();
            this.ddRoleID.setShowing(true);

        } catch (e) {
            
            console.error('ERROR IN btnEntityId1Click: ' + e);
            
        }
    },
    
    btnSearchRoleClick: function(inSender) {
        try {
            
          this.svarRoleID.update();
          this.dgRoleID.dataSet.update();
          this.ddRoleID.setShowing(true);    
           
          /*var s;
          
    	  if(this.txtSearch.getValue("dataValue") !== ""){
            this.svarRoleAsgnID.setValue("input.pRoleId", this.txtSearch.getValue("dataValue"));
          }else{
             s = this.txtSearch.getValue("dataValue");
          }
          //alert(s);
          //alert(this.txtSearch.getValue("dataValue"));
          if(this.txtSearch.getValue("dataValue") == s){
              this.svarRoleAsgnID.setValue("input.pRoleId","%");
              //this.svarRoleAsgnID.getValue("dataValue");
          }
            this.svarRoleAsgnID.update();
            this.dgRoleID.dataSet.update();*/

        } catch (e) {
            console.error('ERROR IN btnSearchClick: ' + e);
        }
    },

    svarRoleAsgnIDResult: function(inSender, inDeprecated) {
        try {
            this.txtEntityId.setValue("dataValue", this.dgRoleAsgnID.getRow(0).entityid);
            this.txtRoleId.setValue("dataValue", this.dgRoleAsgnID.getRow(0).roleid);
            this.txtUserId.setValue("dataValue", this.dgRoleAsgnID.getRow(0).userid);
            this.txtDesc.setValue("dataValue", this.dgRoleAsgnID.getRow(0).description);
            this.txtStatus.setValue("dataValue", this.dgRoleAsgnID.getRow(0).sstatus);
        } catch (e) {
            console.error('ERROR IN svarRoleIDResult: ' + e);
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
        }
    },
    
    btnDeleteClick: function(inSender) {
	  try {
          var entityid = this.txtEntityId.getValue("dataValue");
          var roleid = this.txtRoleId.getValue("dataValue");
          var userid = this.txtUserId.getValue("dataValue");
		  var response = confirm("Are you sure you want to delete?");
          
            if (response) {
                var eQuery = "update tblroleasgn set sstatus = 'INACTIVE' "+
                             "where(entityid = '" + entityid + "' and "+
                             "roleid = '" + roleid + "' and userid = '" + userid + "');";
                    
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
	  } 
  },
  dgRoleAsgnIDClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
	  try {
          
		  this.roleAsgnViewSelect();
          
	  } catch(e) {
          
		  console.error('ERROR IN dgRoleAsgnIDClick: ' + e); 
          alert( 'ERROR IN dgRoleAsgnIDClick: ' + e );
          
	  } 
  },
  
  //Modified by Jammi Dee 10/12/2012
  btnSelectRoleClick: function(inSender) {
	  try {
          
	       this.txtRoleId.setValue("dataValue",     this.varGridSelect.getValue("dataValue"));
           this.txtDesc.setValue("dataValue",       this.dgRoleID.selectedItem.getData().description );
           this.ddRoleID.setShowing(false);

	  } catch(e) {
          
		  console.error('ERROR IN btnSelect1Click: ' + e); 
          alert( 'ERROR IN btnSelect1Click: ' + e );
          
	  } 
  },
  
  btnCloseUserClick: function(inSender) {
	  try {
          
             this.ddUserID.setShowing(false);
             
	  } catch(e) {
          
		  console.error('ERROR IN btnClose1Click: ' + e); 
          alert( 'ERROR IN btnClose1Click: ' + e );
          
	  } 
  },
  
  dgRoleIDClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
	  try {
          
           this.varGridSelect.setValue("dataValue", this.dgRoleID.selectedItem.getData().roleid);
           
	  } catch(e) {
          
		  console.error('ERROR IN dgRoleIDClick: ' + e);
          alert( 'ERROR IN dgRoleIDClick: ' + e );
          
	  } 
  },
  btnUserIdClick: function(inSender) {
	  try {
          
	      this.svarUserID.update();

          this.dgUserID.dataSet.update();
          this.ddUserID.setShowing(true);	
          
	  } catch(e) {
          
		  console.error('ERROR IN btnRoleId1Click: ' + e); 
          alert( 'ERROR IN btnRoleId1Click: ' + e );
          
	  } 
  },
  dgUserIDClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
	  try {
          
		  this.varGridSelect.setValue("dataValue", this.dgUserID.selectedItem.getData().userid);
          
	  } catch(e) {
          
		  console.error('ERROR IN dgRoleID1Click: ' + e); 
          alert( 'ERROR IN dgRoleID1Click: ' + e );
          
	  } 
  },
  
  btnSelectUserClick: function(inSender) {
	  try {
          
		  //this.txtUserId.setValue("dataValue", this.varGridSelect.getValue("dataValue"));
	      this.txtSearchUser.setValue("dataValue",          this.varGridSelect.getValue("dataValue"));
          this.ddUserID.setShowing(false);
           
          this.svarRoleAsgnID.setValue("input.pEntityId",   app.varEntity.getValue("dataValue"));
          this.svarRoleAsgnID.setValue("input.pUserId",     this.txtSearchUser.getValue("dataValue"));
          this.svarRoleAsgnID.update();   
           
           this.ddUserID.setShowing(false);
           this.ddUserID.dataSet.update();
           
      } catch(e) {
		  console.error('ERROR IN btnSelectRole1Click: ' + e); 
	  } 
  },

  svarTblRoleAsgnResult: function(inSender, inDeprecated) {
	  try {
		  var entityid = this.txtEntityId.getValue("dataValue");
          var roleid = this.txtRoleId.getValue("dataValue");
          var userid = this.txtUserId.getValue("dataValue");
          var desc = this.txtDesc.getValue("dataValue");

           
                if (inSender.getValue("dataValue") == "exists" || inSender.getValue("dataValue") === null) {
                    //alert(inSender.getValue("dataValue"));
                    alert("Role Id already exists");
                } else {
                    var eQuery = "insert into tblroleasgn(entityid,roleid,userid,description)" + 
                                 "values (UCASE('" + entityid + "')," + 
                                 "UCASE('" + roleid + "')," + 
                                 "'" + userid + "','" + desc + "');";

                    this.varQuery.setValue("dataValue", eQuery);
                  //  alert(this.varQuery.getValue("dataValue"));


                    this.svarExecGenericNonQuery.setValue("input.eQuery", this.varQuery.getValue("dataValue"));
                    this.svarExecGenericNonQuery.update();
                }
		  
	  } catch(e) {
		  console.error('ERROR IN svarTblRoleAsgnResult: ' + e); 
	  } 
  },
  btnCloseRoleClick: function(inSender) {
	  try {
		   this.ddRoleID.setShowing(false);	  
	  } catch(e) {
		  console.error('ERROR IN btnCloseRoleClick: ' + e); 
	  } 
  },
  txtSearchStatusChange: function(inSender) {
	  try {
          var s = "";
          if(typeof this.txtSearchStatus.getValue("dataValue") !== 'undefined'){
              this.svarRoleAsgnID.setValue("input.pStatus",this.txtSearchStatus.getValue("dataValue"));
          }else{
             s = this.txtSearchStatus.getValue("dataValue");
          }
          if(this.txtSearchStatus.getValue("dataValue") == s){
               this.svarRoleAsgnID.setValue("input.pStatus","%");
          }
          //this.svarRoleID.setValue("input.pRoleId",this.txtSearchRole.getValue("dataValue"));
		  this.svarRoleAsgnID.update();
	  } catch(e) {
		  console.error('ERROR IN txtSearchStatusChange: ' + e); 
	  } 
  },
  btnSearchRoleViewClick: function(inSender) {
	  try {
          var s = "";
          if(typeof this.txtSearchRole.getValue("dataValue") !== 'undefined'){
            this.svarRoleID.setValue("input.pRoleId",this.txtSearchRole.getValue("dataValue"));
          }else{
             s = this.txtSearchRole.getValue("dataValue");
          }
          //alert(s);
          //alert(this.txtSearch.getValue("dataValue"));
          if(this.txtSearchRole.getValue("dataValue") == s){
              this.svarRoleID.setValue("input.pRoleId","%");
              //this.svarRoleAsgnID.getValue("dataValue");
          }
          //this.svarRoleID.setValue("input.pRoleId",this.txtSearchRole.getValue("dataValue"));
		  this.svarRoleID.update();
		  
	  } catch(e) {
		  console.error('ERROR IN btnSearchRoleViewClick: ' + e); 
	  } 
  },
  btnUserSearchClick: function(inSender) {
	  try {
		   var s = "";
          if(typeof this.txtUserSearch.getValue("dataValue") !== 'undefined'){
            this.svarUserID.setValue("input.pUserId",this.txtUserSearch.getValue("dataValue"));
          }else{
             s = this.txtUserSearch.getValue("dataValue");
          }
          //alert(s);
          //alert(this.txtSearch.getValue("dataValue"));
          if(this.txtUserSearch.getValue("dataValue") == s){
              this.svarUserID.setValue("input.pUserId","%");
              //this.svarRoleAsgnID.getValue("dataValue");
          }
          //this.svarRoleID.setValue("input.pRoleId",this.txtSearchRole.getValue("dataValue"));
		  this.svarUserID.update();
		  
	  } catch(e) {
		  console.error('ERROR IN btnUserSearchClick: ' + e); 
	  } 
  },
  
  //Added by Jammi Dee 08/13/2012
  dgUserIDCellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
	  try {

        this.varGridSelect.setValue("dataValue", this.dgUserID.selectedItem.getData().userid);
        this.btnSelectUserClick( inSender );
		  
	  } catch(e) {
		  console.error('ERROR IN dgUserIDCellDblClick: ' + e); 
	  } 
  },
  _end: 0
});