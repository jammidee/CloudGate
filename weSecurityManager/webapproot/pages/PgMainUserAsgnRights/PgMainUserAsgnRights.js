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

dojo.declare("PgMainUserAsgnRights", wm.Page, {
	"preferredDevice": "desktop",
    start: function() {
        try {
            this.lblTitle.setCaption("User : Assign Rights");
            app.varModuleId.setValue("dataValue","MDLRIGHTASGN");
            this.txtSearchStatus.setValue("dataValue","ACTIVE");
            this.txtRoleIDSearch.setValue("dataValue", "");
            
            // Initialize the application - Jammi Dee 03/25/2012
            this.initApplication();            
            
            //Added by Jammi Dee 10/13/2012
            this.btnRightId.setShowing(false);
            this.pnlSaveButton.setShowing(false);
            
            var rights;
            for (i = 0; i < app.varArrayRights.getCount(); i++) {
                rights = app.varArrayRights.getItem(i).getValue("dataValue");
                this.checkRights(rights);
            }
            //this.txtRoleId.setValue("dataValue","");
            //this.txtRightId.setValue("dataValue","");
            
            //Added  by Jammi Dee 10/29/2012
            //Retrieve all the data for Entity.
            this.svarEntityID.update();
            this.txtRoleIDSearch.setValue("dataValue",  "SADMIN" + "-" + "NONE");
            this.selEntity.setValue("dataValue",        app.varEntity.getValue("dataValue") );
            
            //Added by Jammi Dee 11/25/2012
            app.svarUpdateSessionApp.setValue("input.pJuid",app.varSessionId.getValue("dataValue"));
            app.svarUpdateSessionApp.update();                
            
            // Added by Jammi Dee 05/06/2012 
            app.svarLogging.setValue("input.pUserId",       app.varUserId.getValue("dataValue"));
            app.svarLogging.setValue("input.pMsg",          "Manage rights assignment.");
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
        
        this.lblTitle.setCaption("Assign Rights : " + app.varAppName.getValue("dataValue") + " : " + app.varAppVersion.getValue("dataValue"));
        this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
    
    },     
    
    checkRights: function(rights) {
        var appid = app.varAppId.getValue("dataValue");
        var rightid = rights;
        
        switch (rightid){
            case "MGTASGNRIGHTSSTATUS" + "|" + appid:
               this.txtSearchStatus.setShowing(true);
               break;
            case "MGTASGNRIGHTSADD" + "|" + appid:
               this.btnAdd.setShowing(true);
               break;
            case "MGTASGNRIGHTSEDIT" + "|" + appid:
               this.btnEdit.setShowing(true);
               break;
            case "MGTASGNRIGHTSDELETE" + "|" + appid:
               this.btnDelete.setShowing(true);
               break;
            default:break;
        }
    },
    
    updateDgRightAsgnID: function() {
        this.svarRightAsgnID.update();
        this.dgRightAsgnID.dataSet.update();
    },

    convertDateToSqlDateFormat: function(stringdate) {
        var currdate        = new Date(stringdate);
        var currmonth       = currdate.getMonth() + 1;
        var currday         = currdate.getDate();
        var curryear        = currdate.getFullYear();
        var sqlDateFormat   = curryear + "-" + currmonth + "-" + currday;

        return sqlDateFormat;
    },

    editButtonEnable: function() {
        //this.btnEntityId.setValue("showing", true);
        //this.btnRoleId.setValue("showing", true);
        //this.btnRightId.setValue("showing", true);
        
        this.txtEntityId.setValue("readonly",   false);
        this.txtRoleId.setValue("readonly",     false);
        this.txtRightId.setValue("readonly",    false);
        this.txtDesc.setValue("readonly",       false);

        this.txtEntityId.setValue("disabled",   true);
        this.txtRoleId.setValue("disabled",     true);
        this.txtRightId.setValue("disabled",    true);
        this.pnlStatus.setValue("showing",      true);
    },


    createButtonEnable: function() {
        var roleid = this.txtRoleIDSearch.getValue("dataValue").split("-");
        //this.btnEntityId.setValue("showing", true);
        //this.btnRoleId.setValue("showing", true);
        this.btnRightId.setValue("showing", true);
        
        this.txtEntityId.setValue("dataValue",  app.varEntity.getValue("dataValue"));
        this.txtRoleId.setValue("dataValue",    roleid[0]);
        this.txtRightId.setValue("dataValue",   "");
        this.txtDesc.setValue("dataValue",      "");

        this.txtEntityId.setValue("readonly",   false);
        this.txtRoleId.setValue("readonly",     false);
        this.txtRightId.setValue("readonly",    false);
        this.txtDesc.setValue("readonly",       false);
        
        this.txtEntityId.setValue("disabled",   true);
        this.txtRoleId.setValue("disabled",     true);
        this.txtRightId.setValue("disabled",    true);
    },

    createButtonDisable: function() {
        var roleid = this.txtRoleIDSearch.getValue("dataValue").split("-");
        this.btnEntityId.setValue("showing",    false);
        this.btnRoleId.setValue("showing",      false);
        this.btnRightId.setValue("showing",     false);

        this.txtEntityId.setValue("dataValue",  this.dgRightAsgnID.getRow(0).entityid);
        this.txtRoleId.setValue("dataValue",    roleid[0]);
        this.txtRightId.setValue("dataValue",   this.dgRightAsgnID.getRow(0).rightid);
        this.txtDesc.setValue("dataValue",      this.dgRightAsgnID.getRow(0).description);
        this.txtStatus.setValue("dataValue",    this.dgRightAsgnID.getRow(0).sstatus);

        this.txtEntityId.setValue("readonly",   true);
        this.txtRoleId.setValue("readonly",     true);
        this.txtRightId.setValue("readonly",    true);
        this.txtDesc.setValue("readonly",       true);

        this.txtRightId.setValue("disabled",    false);
        this.pnlStatus.setValue("showing",      false);
    },

    rightAsgnViewSelect: function() {
        
        var roleid = this.txtRoleIDSearch.getValue("dataValue").split("-");
        this.txtEntityId.setValue("dataValue",  this.dgRightAsgnID.selectedItem.getData().entityid);
        this.txtRoleId.setValue("dataValue",    roleid[0]);
        this.txtRightId.setValue("dataValue",   this.dgRightAsgnID.selectedItem.getData().rightid);
        this.txtDesc.setValue("dataValue",      this.dgRightAsgnID.selectedItem.getData().description);
        this.txtStatus.setValue("dataValue",    this.dgRightAsgnID.selectedItem.getData().sstatus);
        this.varAppid.setValue("dataValue",     this.dgRightAsgnID.selectedItem.getData().appid);
        
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
            this.pnlButtons.setValue("showing",     false);
            this.pnlSaveButton.setValue("showing",  true);
            this.createButtonEnable();
            this.varFlag.setValue("dataValue",      "ADD");
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
            var roleid   = this.txtRoleId.getValue("dataValue");
            var rightid  = this.txtRightId.getValue("dataValue");
            var appid    = this.varAppid.getValue("dataValue");
            var sstatus  = this.txtStatus.getValue("dataValue");
            
            //if (typeof rightid == 'undefined') {
            //  alert(rightid);
            //}        
            if (typeof rightid !== 'undefined') {
                if (this.varFlag.getValue("dataValue") == "ADD") {
                    
                    this.svarTblRightAsgn.setValue("input.pEntityId",   entityid);
                    this.svarTblRightAsgn.setValue("input.pRoleId",     roleid);
                    this.svarTblRightAsgn.setValue("input.pRightId",    rightid);
                    this.svarTblRightAsgn.update();     
                    
                } else if (this.varFlag.getValue("dataValue") == "EDIT") { 
                    
                    var desc = this.txtDesc.getValue("dataValue");
                    var eQuery = "update tblrightasgn set description = '" + desc + "', "+
                                 "sstatus = '" + sstatus + "', appid = '" + appid + "' "+
                                 "where(entityid = '" + entityid + "' and "+
                                 "roleid = '" + roleid + "' and rightid = '" + rightid + "');";
                    
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
               // alert("FAIL"); 
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
                this.updateDgRightAsgnID();
                
                
                
                app.svarGetRole.setValue("input.pUserId",       app.varUserId.getValue("dataValue"));
                app.svarGetRole.setValue("input.pEntityId",     app.varEntity.getValue("dataValue"));
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
    
    btnSearchClick: function(inSender) {
        try {
          var s;
        if(this.txtSearch.getValue("dataValue") !== ""){
           this.svarRightAsgnID.setValue("input.pRightId", this.txtSearch.getValue("dataValue"));
           this.svarRightAsgnID.setValue("input.pRoleId", "%");
        }else{
             s = this.txtSearch.getValue("dataValue");
        }
          //alert(s);
          //alert(this.txtSearch.getValue("dataValue"));
          if(this.txtSearch.getValue("dataValue") == s){
              this.svarRightAsgnID.setValue("input.pRightId", "%");
              this.svarRightAsgnID.setValue("input.pRoleId", "%");  
              //this.svarTblUserView.getValue("dataValue");
          }
    
            this.svarRightAsgnID.update();
            this.dgRightAsgnID.dataSet.update();

        } catch (e) {
            
            console.error('ERROR IN btnSearchClick: ' + e);
            alert( 'ERROR IN btnSearchClick: ' + e );
            
        }
    },

    svarRightAsgnIDResult: function(inSender, inDeprecated) {
        try {
            
            //this.txtEntityId.setValue("dataValue",  this.dgRightAsgnID.getRow(0).entityid);
            //this.txtRoleId.setValue("dataValue",    this.dgRightAsgnID.getRow(0).roleid);
            //this.txtRightId.setValue("dataValue",   this.dgRightAsgnID.getRow(0).rightid);
            //this.txtDesc.setValue("dataValue",      this.dgRightAsgnID.getRow(0).description);
            //this.txtStatus.setValue("dataValue",    this.dgRightAsgnID.getRow(0).sstatus);
            //this.varAppid.setValue("dataValue",     this.dgRightAsgnID.getRow(0).appid);
            
        } catch (e) {
            
            console.error('ERROR IN svarRoleIDResult: ' + e);
            alert( 'ERROR IN svarRoleIDResult: ' + e );
            
        }
    },
    
    btnEditClick: function(inSender) {
        try {
            
            this.pnlButtons.setValue("showing",     false);
            this.pnlSaveButton.setValue("showing",  true);
            this.varFlag.setValue("dataValue",      "EDIT");
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
          var rightid = this.txtRightId.getValue("dataValue");
          
		  var response = confirm("Are you sure you want to delete?");
            if (response) {
                var eQuery = "update tblrightasgn set sstatus = 'INACTIVE' "+
                             "where(entityid = '" + entityid + "' and "+
                             "roleid = '" + roleid + "' and rightid = '" + rightid + "');";
                    
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
  
  //Modified by Jammi Dee 08/13/2012
  dgRightAsgnIDClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
	  try {
          
		  this.rightAsgnViewSelect();
          
	  } catch(e) {
          
		  console.error('ERROR IN dgRoleAsgnIDClick: ' + e); 
          //alert( 'ERROR IN dgRoleAsgnIDClick: ' + e );
          alert( 'No data selected.' );
          
	  } 
  },
  
  //Added by Jammi Dee 10/13/2012
  btnSearchRoleClick: function(inSender) {
      try {
          
          //Update the Role ID list, get all Roles
          //for this ENTITY
          this.svarRoleID.setValue("input.pEntityId", this.selEntity.getValue("dataValue"));
          this.svarRoleID.update();
          this.dgRoleID.dataSet.update();
          this.ddRoleID.setShowing(true);
          
		  this.vartest.setValue("dataValue","filter"); 
          
	  } catch(e) {
          
		  console.error('ERROR IN button1Click: ' + e); 
          alert( 'ERROR IN button1Click: ' + e );
          
	  } 
  },
  
  
  btnCloseRoleClick: function(inSender) {
	  try {
          
          this.ddRoleID.setShowing(false); 
          this.svarRoleID.setValue("input.pRoleId", "%");

	  } catch(e) {
          
		  console.error('ERROR IN btnCloseRoleClick: ' + e); 
          alert( 'ERROR IN btnCloseRoleClick: ' + e );
          
	  } 
  },
  
 
  btnSelectRoleClick: function(inSender) {
	  try {
          
        if(this.vartest.getValue("dataValue") == "filter"){
            //alert(this.txtSelectStatus.getValue("dataValue"));
            this.txtRoleIDSearch.setValue("dataValue",          this.varGridSelect.getValue("dataValue"));
            
            this.svarRightAsgnID.setValue("input.pRightId", "%");
            this.svarRightAsgnID.setValue("input.pRoleId",      this.txtRoleIDSearch.getValue("dataValue"));
            this.svarRightAsgnID.setValue("input.pStatus",      this.txtSearchStatus.getValue("dataValue"));
            this.svarRightAsgnID.setValue("input.pEntity",      this.selEntity.getValue("dataValue"));
            this.svarRightAsgnID.update();    
            this.dgRightAsgnID.dataSet.update();
            
            this.txtRoleIDSearch.setValue("dataValue",      this.varGridSelect.getValue("dataValue") + "-" + this.dgRoleID.selectedItem.getData().description);
            
            this.varSrcRole.setValue("dataValue", this.dgRoleID.selectedItem.getData().roleid );
            
        }else{
            
            this.txtRoleId.setValue("dataValue", this.varGridSelect.getValue("dataValue"));
            
        }
        
        this.ddRoleID.setShowing(false);
        this.svarRoleID.setValue("input.pRoleId", "%");
           
	  } catch(e) {
          
		  console.error('ERROR IN btnSelect1Click: ' + e);
          alert( 'ERROR IN btnSelect1Click: ' + e );
          
	  } 
  },
  btnCloseRightClick: function(inSender) {
	  try {
          
          this.ddRightID.setShowing(false);	
             
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
  
  btnRightIdClick: function(inSender) {
	  try {
          
	      this.svarRightID.update();
          this.dgRightID.dataSet.update();
          this.ddRightID.setShowing(true);
          
	  } catch(e) {
          
		  console.error('ERROR IN btnRoleId1Click: ' + e); 
          alert( 'ERROR IN btnRoleId1Click: ' + e );
          
	  } 
  },
  
  dgRightIDClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
	  try {
		  this.varGridSelect.setValue("dataValue", this.dgRightID.selectedItem.getData().rightid);	  
	  } catch(e) {
		  console.error('ERROR IN dgRoleID1Click: ' + e); 
	  } 
  },
  
  btnSelectRightClick: function(inSender) {
	  try {
          
		  this.txtRightId.setValue("dataValue",     this.varGridSelect.getValue("dataValue"));
          this.txtDesc.setValue("dataValue",        this.dgRightID.selectedItem.getData().description );
          this.ddRightID.setShowing(false);
		  
	  } catch(e) {
          
		  console.error('ERROR IN btnSelectRole1Click: ' + e); 
          alert( 'ERROR IN btnSelectRole1Click: ' + e );
          
	  } 
  },

  svarTblRightAsgnResult: function(inSender, inDeprecated) {
      
	  try {
          
		  var entityid  = this.txtEntityId.getValue("dataValue");
          var roleid    = this.txtRoleId.getValue("dataValue");
          var rightid   = this.txtRightId.getValue("dataValue");
          var desc      = this.txtDesc.getValue("dataValue");
          var appid     = this.dgRightID.selectedItem.getData().appid;

           
                if (inSender.getValue("dataValue") == "exists" || inSender.getValue("dataValue") === null) {
                    //alert(inSender.getValue("dataValue"));
                    alert("Data already exists");
                } else {
                    var eQuery = "insert into tblrightasgn(entityid,roleid,rightid,description,appid)" + 
                                 "values (UCASE('" + entityid + "')," + 
                                 "UCASE('" + roleid + "')," + 
                                 "'" + rightid + "','" + desc + "','" + appid + "');";

                    this.varQuery.setValue("dataValue", eQuery);
                    //alert(this.varQuery.getValue("dataValue"));


                    this.svarExecGenericNonQuery.setValue("input.eQuery", this.varQuery.getValue("dataValue"));
                    this.svarExecGenericNonQuery.update();
                }
		  
	  } catch(e) {
          
		  console.error('ERROR IN svarTblRoleAsgnResult: ' + e); 
          alert( 'ERROR IN svarTblRoleAsgnResult: ' + e );
          
	  } 
  },
  
  
  //Modified by Jammi Dee 10/29/2012
  txtSearchStatusChange: function(inSender) {
	  try {
          
          var result;
          
        //alert( this.txtAppId.getValue("dataValue") );
        if(this.txtRoleIDSearch.getValue("dataValue") === ''){
            
          alert("You must select a Role ID first");
          
        }else{
            
          if( this.txtRoleIDSearch.getValue("dataValue").split("-") === undefined ){
              
              result = "SADMIN";
              
          } else {
              
              result = this.txtRoleIDSearch.getValue("dataValue").split("-");
              
          }    
            
          
          this.svarRightAsgnID.setValue("input.pStatus",    this.txtSearchStatus.getValue("dataValue"));
          this.svarRightAsgnID.setValue("input.pEntity",    this.selEntity.getValue("dataValue"));
          this.svarRightAsgnID.setValue("input.pAppId",     this.txtAppId.getValue("dataValue"));
          this.svarRightAsgnID.setValue("input.pRightId",   "%");
          this.svarRightAsgnID.setValue("input.pRoleId",    result[0]);
          this.svarRightAsgnID.update(); 
          
         }
	  } catch(e) {
          
		  console.error('ERROR IN txtSelectStatusChange: ' + e); 
          //alert( 'ERROR IN txtSelectStatusChange: ' + e );

	  } 
  },
  
  //Added by Jammi Dee 10/29/2012
  selEntityChange: function(inSender) {
      try {
		  
          var result;
          
          result = this.txtRoleIDSearch.getValue("dataValue").split("-");
          this.svarRightAsgnID.setValue("input.pStatus",    this.txtSearchStatus.getValue("dataValue"));
          this.svarRightAsgnID.setValue("input.pEntity",    this.selEntity.getValue("dataValue"));
          this.svarRightAsgnID.setValue("input.pRightId",   "%");
          this.svarRightAsgnID.setValue("input.pRoleId",    result[0]);
          this.svarRightAsgnID.update();           
          
		  
	  } catch(e) {
          
		  console.error('ERROR IN selEntityChange: ' + e);
          alert( 'ERROR IN selEntityChange: ' + e );
          
	  } 
  },  
  
  
  btnSearchRightClick: function(inSender) {
	  try {
          var s = "";
          /*if(typeof this.txtSearchRight.getValue("dataValue") !== 'undefined'){
            this.svarRightID.setValue("input.pRightId",this.txtSearchRight.getValue("dataValue"));
          }else{
             s = this.txtSearchRight.getValue("dataValue");
          }
          //alert(s);
          //alert(this.txtSearch.getValue("dataValue"));
          if(this.txtSearchRight.getValue("dataValue") == s){
              this.svarRightID.setValue("input.pRightId","%");
              //this.svarRoleAsgnID.getValue("dataValue");
          }
          this.svarRightID.update();*/
          
          
          if(typeof this.txtSearchRight.getValue("dataValue") !== "undefined" && typeof this.txtSearchAppId.getValue("dataValue") == "undefined"){
           this.svarRightID.setValue("input.pRightId", this.txtSearchRight.getValue("dataValue"));
           this.svarRightID.setValue("input.pAppId", "%");
          }else if(typeof this.txtSearchAppId.getValue("dataValue") !== "undefined" && typeof this.txtSearchRight.getValue("dataValue") == "undefined"){
           this.svarRightID.setValue("input.pAppId", this.txtSearchAppId.getValue("dataValue"));
           this.svarRightID.setValue("input.pRightId", "%");
          }else if(typeof this.txtSearchAppId.getValue("dataValue") !== "undefined" && typeof this.txtSearchRight.getValue("dataValue") !== "undefined"){ 
           this.svarRightID.setValue("input.pAppId", this.txtSearchAppId.getValue("dataValue"));
           this.svarRightID.setValue("input.pRightId", this.txtSearchRight.getValue("dataValue"));
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
            //this.dgRightsID.dataSet.update();
          
	  } catch(e) {
          
		  console.error('ERROR IN btnSearchRightClick: ' + e); 
          alert( 'ERROR IN btnSearchRightClick: ' + e );
          
	  } 
  },
  btnRoleSearchClick: function(inSender) {
	  try {
		  var s = "";
          if(typeof this.txtRoleSearch.getValue("dataValue") !== 'undefined'){
            this.svarRoleID.setValue("input.pRoleId",this.txtRoleSearch.getValue("dataValue"));
          }else{
             s = this.txtRoleSearch.getValue("dataValue");
          }
          //alert(s);
          //alert(this.txtSearch.getValue("dataValue"));
          if(this.txtRoleSearch.getValue("dataValue") == s){
              this.svarRoleID.setValue("input.pRoleId","%");
          }
          
          this.svarRoleID.update();
		  
	  } catch(e) {
          
		  console.error('ERROR IN btnRoleSearchClick: ' + e); 
          alert( 'ERROR IN btnRoleSearchClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 08/13/2012
  dgRightAsgnIDCellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
	  try {
          
            app.pdWaitLoadPage.show();

            var eQuery = "";

            if( this.dgRightAsgnID.selectedItem.getData().sstatus === 'DISABLE'){
                
                eQuery = "update tblrightasgn set sstatus ='ACTIVE' where seqid ='" + this.dgRightAsgnID.selectedItem.getData().seqid + "'";
                
            } else {
                
                eQuery = "update tblrightasgn set sstatus ='DISABLE' where seqid ='" + this.dgRightAsgnID.selectedItem.getData().seqid + "'";
                
            }

            //alert( eQuery );

            //eQuery = "update tblrightasgn set sstatus ='DISABLED' where juid ='" + this.dgRightAsgnID.selectedItem.getData().juid + "'";

            this.svarExecGenericNonQueryUpdate.setValue("input.eQuery", eQuery );
            this.svarExecGenericNonQueryUpdate.update();            
            
            
		  
	  } catch(e) {
          
		  console.error('ERROR IN dgRightAsgnIDCellDblClick: ' + e); 
          alert( 'ERROR IN dgRightAsgnIDCellDblClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 05/14/2013
  svarExecGenericNonQueryUpdateResult: function(inSender, inDeprecated) {
      try {

            this.rightAsgnViewSelect();
            
            this.svarRightAsgnID.update();
            this.dgRightAsgnID.dataSet.update();   
            
            app.pdWaitLoadPage.hide();
            
		  
	  } catch(e) {
          
		  console.error('ERROR IN btnCopyRightsClick: ' + e);
          alert( 'ERROR IN btnCopyRightsClick: ' + e );
          
	  }      
      
		
  },  
  
  
  //Added by Jammi Dee 08/21/2012
  btnCopyRightsClick: function(inSender) {
	  try {
		  
          this.ldLoading.show();
          this.ddCopyRights.show();
		  
	  } catch(e) {
          
		  console.error('ERROR IN btnCopyRightsClick: ' + e);
          alert( 'ERROR IN btnCopyRightsClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 08/21/2012
  ddCopyRightsShow: function(inSender) {
	  try {
		  
          
          this.svarDestRole.setValue("input.pEntityId", app.varEntity.getValue("dataValue") );
          this.svarDestRole.setValue("input.pStatus",   "ACTIVE" );
          this.svarDestRole.setValue("input.pRoleId",   "%" );
          this.svarDestRole.update();
		  
	  } catch(e) {
          
		  console.error('ERROR IN ddCopyRightsShow: ' + e);
          alert( 'ERROR IN ddCopyRightsShow: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 08/21/2012
  btnDestRoleSelectClick: function(inSender) {
	  try {
          
           //this.svarRightAsgnSource.setValue("input.pRightId",  "%");
           //this.svarRightAsgnSource.setValue("input.pRoleId",   this.varGridSelect.getValue("dataValue"));
           //this.svarRightAsgnSource.setValue("input.pStatus",   "ACTIVE");
           //this.svarRightAsgnSource.update();              
            
           //alert( this.varSrcRole.getValue("dataValue") + "|" + this.dgDestRole.selectedItem.getData().roleid );
           
           app.pdWaitLoadPage.show();
           
           this.svarRightAsgnCopy.setValue("input.pSrcRole",      this.varSrcRole.getValue("dataValue") );
           this.svarRightAsgnCopy.setValue("input.pDstRole",      this.dgDestRole.selectedItem.getData().roleid );
           this.svarRightAsgnCopy.setValue("input.pEntityId",     app.varEntity.getValue("dataValue") );
           this.svarRightAsgnCopy.update();   

	  } catch(e) {
          
		  console.error('ERROR IN btnDestRoleSelectClick: ' + e); 
          alert( 'ERROR IN btnDestRoleSelectClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 10/12/2012
  svarRightAsgnCopyResult: function(inSender, inDeprecated) {
      try {
		  
            app.pdWaitLoadPage.hide();
            
            this.ldLoading.hide();
            this.ddCopyRights.hide();
            alert( "Rights has been successfully copied." );		  
          
	  } catch(e) {
          
		  console.error('ERROR IN svarRightAsgnCopyResult: ' + e); 
          alert( 'ERROR IN svarRightAsgnCopyResult: ' + e );
          
	  } 
  },  
  
  //Added by Jammi Dee 08/21/2012
  svarRightAsgnSourceResult: function(inSender, inDeprecated) {
      
      try {
		  
          //Loop and copy all the rights here
          var count = inSender.getCount();
          
          var strEntity = app.varEntity.getValue("dataValue");
          var strRole   = this.dgDestRole.selectedItem.getData().roleid;
          var strAppId  = app.varAppId.getValue("dataValue");
          var strStatus = "ACTIVE";
          
          if( count > 0 ){
              
                for (var i = 0; i < count; i++) {
                    
                    var aRow = inSender.getItem(i);
              
                    var strRightID  = aRow.data.rightid;
                    var strDesc     = aRow.data.description; 
                    
                    var eQuery = "insert into tblrightasgn(entityid, roleid, rightid, description, sstatus, appid)" + 
                                 "values (UCASE('" + strEntity + "')," + 
                                 "UCASE('" + strRole + "')," + "'" + 
                                 strRightID + "','" + 
                                 strDesc + "','" + 
                                 strStatus + "','" + 
                                 strAppId + "');";                    
                    
                    this.svarExecGenericSQL.setValue("input.eQuery", eQuery );
                    this.svarExecGenericSQL.update();  
                    
                    alert( eQuery );
            
                }               
              
                this.ddCopyRights.hide();
              
          } else {
              
              alert("No rights to process.");
              
          }


	  } catch(e) {
          
		  console.error('ERROR IN svarRightAsgnSourceResult: ' + e); 
          alert( 'ERROR IN svarRightAsgnSourceResult: ' + e );
          
	  } 
  },  
  
  //Added by Jammi Dee 08/21/2012
  btnDeleteAllClick: function(inSender) {
	  try {

          this.ldLoading.show();
          var strEntity = app.varEntity.getValue("dataValue");
          var strRole   = this.varSrcRole.getValue("dataValue");
          var strAppId  = app.varAppId.getValue("dataValue");
          
          var response = confirm("Delete: Are you sure to delete assigned rights for this Role?");
            
          if (response) {
                
              var eQuery = "delete from tblrightasgn where entityid ='" + strEntity + "' and roleid = '" + strRole + "' ;";                 
              this.svarExecGenericSQL.setValue("input.eQuery", eQuery );
              this.svarExecGenericSQL.update();  
                    
          }    
		  
          this.svarRightAsgnID.setValue("input.pRightId", "%");
          this.svarRightAsgnID.setValue("input.pRoleId",  this.varSrcRole.getValue("dataValue"));
          this.svarRightAsgnID.setValue("input.pStatus",  this.txtSearchStatus.getValue("dataValue"));
          this.svarRightAsgnID.update();    
          this.dgRightAsgnID.dataSet.update();   
          
          this.ldLoading.hide();
          
	  } catch(e) {
          
		  console.error('ERROR IN btnDeleteAllClick: ' + e); 
          alert( 'ERROR IN btnDeleteAllClick: ' + e );
          
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
  

	_end: 0
});