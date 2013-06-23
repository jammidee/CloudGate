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

dojo.declare("PgUser", wm.Page, {
	"preferredDevice": "desktop",
    start: function() {
        
        // Added by Jammi Dee 03/11/2012
        this.picNewStatus(false);
        this.picEditStatus(false);
        this.picSaveStatus(false);
        this.picDeleteStatus(false);
        // Added by Jammi Dee 03/11/2012       
        
        // Hide the SAVE buttons first
        this.pnlSaveButton.setValue("showing", false);
        
        try {
            this.lblTitle.setCaption("Manage User");
            app.varModuleId.setValue("dataValue", "MDLUSER");
            this.txtUserStatus.setValue("dataValue","ACTIVE");
            var rights;
            for (i = 0; i < app.varArrayRights.getCount(); i++) {
                rights = app.varArrayRights.getItem(i).getValue("dataValue");
                this.checkRights(rights);
            }

            //Added by Jammi Dee 11/25/2012
            app.svarUpdateSessionApp.setValue("input.pJuid",app.varSessionId.getValue("dataValue"));
            app.svarUpdateSessionApp.update();    

            // Initialize the application - Jammi Dee 03/25/2012
            this.initApplication();
            
            // Added by Jammi Dee 05/06/2012 
            app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
            app.svarLogging.setValue("input.pMsg","Manage System Users.");
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
        
        this.lblTitle.setCaption("User : " + app.varAppName.getValue("dataValue") + " : " + app.varAppVersion.getValue("dataValue"));
        this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
    
    },  

    checkRights: function(rights) {
        var appid = app.varAppId.getValue("dataValue");
        var rightid = rights;
        
        switch (rightid){
            case app.varAppPrefix.getValue("dataValue") + "USERADD" + "|" + app.varAppId.getValue("dataValue"):
               this.btnAdd.setShowing(true);
               this.picNewStatus(true); // added by Jammi Dee 03/11/2012
               break;
            case app.varAppPrefix.getValue("dataValue") + "USERDEL" + "|" + app.varAppId.getValue("dataValue"):
               this.btnDelete.setShowing(true);
               this.picDeleteStatus(true); // added by Jammi Dee 03/11/2012
               break;
            case app.varAppPrefix.getValue("dataValue") + "USEREDIT" + "|" + app.varAppId.getValue("dataValue"):
               this.btnEdit.setShowing(true);
               this.picEditStatus(true); // added by Jammi Dee 03/11/2012
               break;
            case app.varAppPrefix.getValue("dataValue") + "USERVIEWS" + "|" + app.varAppId.getValue("dataValue"):
               this.btnView.setShowing(true);
               break;
            case app.varAppPrefix.getValue("dataValue") + "USERSTATUS" + "|" + app.varAppId.getValue("dataValue"):
               this.txtUserStatus.setShowing(true);
               break;    
            default:break;
        }
    },

  // Added by Jammi Dee 03/11/2012
  picNewStatus: function(inStatus) {
        if (inStatus===true){
            this.pic_new.setValue("source", "resources/images/buttons/addball24.png");
            this.pic_new.setValue("disabled", false);
        }
        else
        {
           this.pic_new.setValue("source", "resources/images/buttons/addball24bw.png");
           this.pic_new.setValue("disabled", true);
        }
  },

  picEditStatus: function(inStatus) {
        if (inStatus===true){
            this.pic_edit.setValue("source", "resources/images/buttons/editnote24.png");
            this.pic_edit.setValue("disabled", false);
        }
        else
        {
           this.pic_edit.setValue("source", "resources/images/buttons/editnote24bw.png");
           this.pic_edit.setValue("disabled", true);
        }
  },

  picSaveStatus: function(inStatus) {
        if (inStatus===true){
            this.pic_save.setValue("source", "resources/images/buttons/save24.png");
            this.pic_save.setValue("disabled", false);
        }
        else
        {
           this.pic_save.setValue("source", "resources/images/buttons/save24bw.png");
           this.pic_save.setValue("disabled", true);
        }
  },

  picDeleteStatus: function(inStatus) {
        if (inStatus===true){
            this.pic_delete.setValue("source", "resources/images/buttons/Recyclebin24.png");
            this.pic_delete.setValue("disabled", false);
        }
        else
        {
           this.pic_delete.setValue("source", "resources/images/buttons/Recyclebin24bw.png");
           this.pic_delete.setValue("disabled", true);
        }
  },
  // Added by Jammi Dee 03/11/2012

    verifyEmail: function(email) {
        return (email.indexOf(".") > 2) && (email.indexOf("@") > 0);
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
        this.btnSearch.setShowing(false);

        this.txtEntityId.setValue("disabled", false);
        this.txtUserId.setValue("disabled", false);
        this.txtPassword.setValue("disabled", false);
        this.txtUsername.setValue("disabled", false);
        this.txtFname.setValue("disabled", false);
        this.txtMname.setValue("disabled", false);
        this.txtLname.setValue("disabled", false);
        this.txtEmail.setValue("disabled", false);
        this.txtSdate.setValue("disabled", false);
        this.txtEdate.setValue("disabled", false);
        this.txtParent.setValue("disabled", false);

        this.txtUserId.setValue("disabled", true);
        this.txtEntityId.setValue("disabled", true);
        this.pnlStatus.setValue("showing", true);
    },


    createButtonEnable: function() {
        //this.btnEntityId.setValue("showing", true);
        this.btnSearch.setShowing(false);
        this.txtEntityId.setValue("dataValue", app.varEntity.getValue("dataValue"));
        this.txtUserId.setValue("dataValue", "");
        this.txtPassword.setValue("dataValue", "");
        this.txtUsername.setValue("dataValue", "");
        this.txtFname.setValue("dataValue", "");
        this.txtMname.setValue("dataValue", "");
        this.txtLname.setValue("dataValue", "");
        this.txtEmail.setValue("dataValue", "");
        this.txtSdate.setValue("dataValue", "");
        this.txtEdate.setValue("dataValue", "");
        this.txtParent.setValue("dataValue", "");

        this.txtEntityId.setValue("disabled", false);
        this.txtUserId.setValue("disabled", false);
        this.txtPassword.setValue("disabled", false);
        this.txtUsername.setValue("disabled", false);
        this.txtFname.setValue("disabled", false);
        this.txtMname.setValue("disabled", false);
        this.txtLname.setValue("disabled", false);
        this.txtEmail.setValue("disabled", false);
        this.txtSdate.setValue("disabled", false);
        this.txtEdate.setValue("disabled", false);
        this.txtParent.setValue("disabled", false);

        this.txtEntityId.setValue("disabled", true);

    },

    createButtonDisable: function() {
        this.btnSearch.setShowing(true);
        this.btnEntityId.setValue("showing", false);

        this.txtEntityId.setValue("dataValue", "");
        this.txtUserId.setValue("dataValue", "");
        this.txtPassword.setValue("dataValue", "");
        this.txtUsername.setValue("dataValue", "");
        this.txtFname.setValue("dataValue", "");
        this.txtMname.setValue("dataValue", "");
        this.txtLname.setValue("dataValue", "");
        this.txtEmail.setValue("dataValue", "");
        this.txtSdate.setValue("dataValue", "");
        this.txtEdate.setValue("dataValue", "");
        this.txtParent.setValue("dataValue", "");

        this.txtEntityId.setValue("disabled", true);
        this.txtUserId.setValue("disabled", false);
        this.txtPassword.setValue("disabled", true);
        this.txtUsername.setValue("disabled", true);
        this.txtFname.setValue("disabled", true);
        this.txtMname.setValue("disabled", true);
        this.txtLname.setValue("disabled", true);
        this.txtEmail.setValue("disabled", true);
        this.txtSdate.setValue("disabled", true);
        this.txtEdate.setValue("disabled", true);
        this.txtParent.setValue("disabled", true);

        this.txtEntityId.setValue("disabled", true);
        this.pnlStatus.setValue("showing", false);
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

    btnAddClick: function(inSender) {
        try {
            
            //Added by Jammi Dee 12/02/2012
            this.svarCheckUserLicense.update();
            
        } catch (e) {
            
            console.error('ERROR IN btnAddClick: ' + e);
            alert( 'ERROR IN btnAddClick: ' + e );
            
        }
    },

  //Added by Jammi Dee 12/02/2012
  svarCheckUserLicenseResult: function(inSender, inDeprecated) {
      try {
		  
          //alert( inSender.getValue("dataValue") );
          if( inSender.getValue("dataValue") === "OK" ){
              
                this.pnlButtons.setValue("showing", false);
                this.pnlSaveButton.setValue("showing", true);
                this.createButtonEnable();
                this.varFlag.setValue("dataValue", "ADD");               
              
          } else {
              
                alert("Maximum number of USERS allowed has been reached!");              
              
          }          
          
	  } catch(e) {
          
		  console.error('ERROR IN svarCheckUserLicenseResult: ' + e);
          alert( 'ERROR IN svarCheckUserLicenseResult: ' + e );
          
	  } 
  },

  //Added by Jammi Dee 12/02/2012
  pic_newClick: function(inSender) {
      try {
		  
          this.btnAddClick( inSender );
		  
	  } catch(e) {
          
		  console.error('ERROR IN pic_newClick: ' + e); 
          alert( 'ERROR IN pic_newClick: ' + e );
          
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
        
            // Added by Jammi Dee 08/14/2012
            // Encrypt the password
            this.svarDESInit.setValue("input.ivString", "");
            this.svarDESInit.setValue("input.keyString", "");
            this.svarDESInit.update();               
           
    },

  // Added by Jammi Dee 08/14/2012
  svarDESInitResult: function(inSender, inDeprecated) {
      try {

            this.svarDESEncrypt.setValue("input.value", this.txtPassword.getValue("dataValue") );
            this.svarDESEncrypt.update();
		  
	  } catch(e) {
		  console.error('ERROR IN svarDESInitResult: ' + e); 
	  } 
  },
  
  // Added by Jammi Dee 08/14/2012
  svarDESEncryptResult: function(inSender, inDeprecated) {

         try {

            var entityid    = this.txtEntityId.getValue("dataValue");
            var userid      = this.txtUserId.getValue("dataValue");
            var password    = this.txtPassword.getValue("dataValue");
            var password02  = inSender.getValue("dataValue");
            var uname       = this.txtUsername.getValue("dataValue");
            var fname       = this.txtFname.getValue("dataValue");
            var mname       = this.txtMname.getValue("dataValue");
            var lname       = this.txtLname.getValue("dataValue");
            var email       = this.txtEmail.getValue("dataValue");
            var parnt       = this.txtParent.getValue("dataValue");
            var sdate       = "";
            var edate       = "";

            //Pass the encrypted password
            this.varPassword02.setValue("dataValue", password02 );
            //alert(parnt);

            var status = this.txtStatus.getValue("dataValue");
            sdate = this.convertDateToSqlDateFormat(this.txtSdate.getValue("dataValue"));
            edate = this.convertDateToSqlDateFormat(this.txtEdate.getValue("dataValue"));

            if (entityid !== "" && userid !== "" && uname !== "" && password !== "" && fname !== "" && mname !== "" && lname !== "" && email !== "" && sdate !== "" && edate !== "" && parnt !== "") {
                if (password.length > 5) {
                        if (this.varFlag.getValue("dataValue") == "ADD") {
                            
                            ///////////////////////////////////////////
                            //Check if the USER ID Exist,it NOT EXIST, 
                            //Add the current data as NEW USER
                            //Modified by Jammi Dee 08/13/2012
                            ///////////////////////////////////////////
                            this.svarTblUser.setValue("input.pEntityId", entityid);
                            this.svarTblUser.setValue("input.pUserId", userid);
                            this.svarTblUser.update();

                        } else if (this.varFlag.getValue("dataValue") == "EDIT") {
                            
                            if (this.verifyEmail(email) === true) {
                                
                                var eQuery = "update tbluser set username = '" + uname + "'," + 
                                 "password = '" + password + "',firstname = '" + fname + "',middlename = '" + mname + "',lastname = '" + lname + "'," + 
                                 "email = '" + email + "',startdate = '" + sdate + "',enddate = '" + edate + "',sstatus = '" + status + "', pid = '" + parnt + "', passwdenc = '" + password02 + "' " + 
                                 "where entityid = '" + entityid + "' and userid = '" + userid + "';";

                                //alert(eQuery);

                                this.svarExecGenericNonQuerySimple.setValue("input.eQuery", eQuery);
                                this.svarExecGenericNonQuerySimple.update();
                                
                            } else {
                                
                                alert("Invalid email format");
                                
                            }
                        }       
                } else {
                    alert("Password must be more than 5 characters");
                }
            } else {
                alert("Fill up all fields");
            }

        } catch (e) {
            console.error('ERROR IN btnSaveClick: ' + e);
        }         
		
  },  
  
    //Modified by Jammi Dee 08/13/2012
    //This is where the actual adding of the user occurs.
    svarTblUserResult: function(inSender, inDeprecated) {
        try {
            
            var entityid    = this.txtEntityId.getValue("dataValue");
            var userid      = this.txtUserId.getValue("dataValue");
            var password    = this.txtPassword.getValue("dataValue");
            var password02  = this.varPassword02.getValue("dataValue");
            var uname       = this.txtUsername.getValue("dataValue");
            var fname       = this.txtFname.getValue("dataValue");
            var mname       = this.txtMname.getValue("dataValue");
            var lname       = this.txtLname.getValue("dataValue");
            var email       = this.txtEmail.getValue("dataValue");
            var mpid        = this.txtParent.getValue("dataValue");
            var sdate       = "";
            var edate       = "";
            var sQueryFinal1;
            var status      = this.txtStatus.getValue("dataValue");

            sdate = this.convertDateToSqlDateFormat(this.txtSdate.getValue("dataValue"));
            edate = this.convertDateToSqlDateFormat(this.txtEdate.getValue("dataValue"));

            if (inSender.getValue("dataValue") == "exists" || inSender.getValue("dataValue") === null) {
                
               // alert(inSender.getValue("dataValue"));
                alert("Userid already used.");
                
            } else {
                
                if (this.verifyEmail(email) === true) {

                    //Notes for Jammi Dee: Modify the code below. Its not stable
                    //08/13/2012
                    var sQuery = "insert into Tbluser(entityid,userid,username,password,firstname,middlename,lastname,email,startdate,enddate, pid, passwdenc) ";
                    sQuery = sQuery + "values('" + entityid + "','" + userid + "'";
                    sQuery = sQuery + ",'" + uname + "'";
                    sQuery = sQuery + ",'" + password + "','" + fname + "'";
                    sQuery = sQuery + ",'" + mname + "'";
                    sQuery = sQuery + ",'" + lname + "','" + email + "'";
                    sQuery = sQuery + ",'" + sdate + "','" + edate + "', '" + mpid + "', '" + password02 + "');";

                    sQueryFinal1 = sQuery;
                    //alert(sQueryFinal1);

                    this.svarExecGenericNonQueryComplex.setValue("input.sQuery", sQueryFinal1);
                    this.svarExecGenericNonQueryComplex.update();
                    
                } else {
                    
                    alert("Invalid email format");
                    
                }
            }

        } catch (e) {
            
            console.error('ERROR IN svarTblRoleAsgnResult: ' + e);
            alert( 'ERROR IN svarTblRoleAsgnResult: ' + e );
            
        }
    },

    //Modified by Jammi Dee 08/13/2012
    svarExecGenericNonQueryComplexResult: function(inSender, inDeprecated) {
        try {
            if (inSender.getValue("dataValue") === false) {
                
                alert("Error occured during the process");
                
            } else {
                if (this.varFlag.getValue("dataValue") == "ADD") {
                    
                        // Added by Jammi Dee 08/13/2012
                        app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
                        app.svarLogging.setValue("input.pMsg","Added new user ID " + this.txtUserId.getValue("dataValue") + "."  );
                        app.svarLogging.setValue("input.pModuleId","MANAGEUSER");
                        app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
                        app.svarLogging.setValue("input.pProcess","ADD");
                        app.svarLogging.setValue("input.pScopeId","NA");
                        app.svarLogging.setValue("input.pStype","USER");  
                        app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
                        app.svarLogging.update();                    
                    
                    alert("Successfuly added.");
                    
                } else if (this.varFlag.getValue("dataValue") == "EDIT") {
                    
                    alert("Successfuly edited.");
                    
                } else if (this.varFlag.getValue("dataValue") == "DELETE") {
                    
                    alert("Successfuly deleted.");
                    
                }
                
                this.pnlButtons.setValue("showing", true);
                this.pnlSaveButton.setValue("showing", false);
                this.createButtonDisable();
                //this.updateDgRightAsgnID();
                this.svarReload.update();
            }

        } catch (e) {
            
            console.error('ERROR IN svarExecGenericNonQueryResult: ' + e);
            alert( 'ERROR IN svarExecGenericNonQueryResult: ' + e );
            
        }
    },

    btnSearchClick: function(inSender) {
        try {
            
            this.svarSearchUserId.setValue("input.pUserId", this.txtUserId.getValue("dataValue"));
            this.svarSearchUserId.update();
            this.dgUser.dataSet.update();

        } catch (e) {
            
            console.error('ERROR IN btnSearchClick: ' + e);
            alert( 'ERROR IN btnSearchClick: ' + e );
            
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
            var userid = this.txtUserId.getValue("dataValue");

            var response = confirm("Are you sure you want to delete?");
            if (response) {
                var eQuery = "update tbluser set deleted = 1 where entityid = '" + entityid + "' and " + "userid = '" + userid + "';";

                //alert(eQuery);
                this.svarExecGenericNonQuerySimple.setValue("input.eQuery", eQuery);
                this.svarExecGenericNonQuerySimple.update();
                this.varFlag.setValue("dataValue", "DELETE");
            }
            else {
                //do nothing
            }

        } catch (e) {
            
            console.error('ERROR IN btnDeleteClick: ' + e);
            alert( 'ERROR IN btnDeleteClick: ' + e );
            
        }
    },
    
    svarSearchUserIdResult: function(inSender, inDeprecated) {
        try {
            //this.dgUser.dataSet.update();
            //alert(this.svarSearchUserId.getCount());  
            if (this.svarSearchUserId.getCount() > 0) {
                if (this.dgUser.getRow(0).sstatus == "ACTIVE") {
                    this.txtEntityId.setValue("dataValue",  this.dgUser.getRow(0).entityid);
                    this.txtPassword.setValue("dataValue",  this.dgUser.getRow(0).password);
                    this.txtUsername.setValue("dataValue",  this.dgUser.getRow(0).username);
                    this.txtFname.setValue("dataValue",     this.dgUser.getRow(0).firstname);
                    this.txtMname.setValue("dataValue",     this.dgUser.getRow(0).middlename);
                    this.txtLname.setValue("dataValue",     this.dgUser.getRow(0).lastname);
                    this.txtEmail.setValue("dataValue",     this.dgUser.getRow(0).email);

                    this.txtSdate.setValue("dataValue",     this.dgUser.getRow(0).startdate);
                    //alert(this.txtSdate.getValue("dataValue"));
                    this.txtEdate.setValue("dataValue",     this.dgUser.getRow(0).enddate);
                    this.txtStatus.setValue("dataValue",    this.dgUser.getRow(0).sstatus);
                    // Added by Jammi Dee 05/06/2012
                    this.txtParent.setValue("dataValue",    this.dgUser.getRow(0).pid);
                    
                } else if (this.dgUser.getRow(0).sstatus == "INACTIVE") {
                    
                    alert("Inactive data.");
                    
                } else if (this.dgUser.getRow(0).deleted == 1) {
                    
                    alert("deleted data.");
                    
                }
            } else {
                
                alert("No data found");
                
            }

        } catch (e) {
            
            console.error('ERROR IN svarSearchUserIdResult: ' + e);
            alert( 'ERROR IN svarSearchUserIdResult: ' + e );
            
        }
    },

    svarExecGenericNonQuerySimpleResult: function(inSender, inDeprecated) {
        try {
            if (inSender.getValue("dataValue") === false) {
                alert("Error occured during the process");
            } else {
                
                if (this.varFlag.getValue("dataValue") == "EDIT") {
                    
                    // Added by Jammi Dee 08/13/2012
                    app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
                    app.svarLogging.setValue("input.pMsg","Edit user ID " + this.txtUserId.getValue("dataValue") + "."  );
                    app.svarLogging.setValue("input.pModuleId","MANAGEUSER");
                    app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
                    app.svarLogging.setValue("input.pProcess","EDIT");
                    app.svarLogging.setValue("input.pScopeId","NA");
                    app.svarLogging.setValue("input.pStype","USER");  
                    app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
                    app.svarLogging.update();                                          
                    
                    alert("Successfuly edited.");
                    
                } else if (this.varFlag.getValue("dataValue") == "DELETE") {
                    
                    // Added by Jammi Dee 08/13/2012
                    app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
                    app.svarLogging.setValue("input.pMsg","Delete user ID " + this.txtUserId.getValue("dataValue") + "."  );
                    app.svarLogging.setValue("input.pModuleId","MANAGEUSER");
                    app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
                    app.svarLogging.setValue("input.pProcess","DELETE");
                    app.svarLogging.setValue("input.pScopeId","NA");
                    app.svarLogging.setValue("input.pStype","USER");  
                    app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
                    app.svarLogging.update();                      
                    
                    alert("Successfuly deleted.");
                    
                }
                this.pnlButtons.setValue("showing", true);
                this.pnlSaveButton.setValue("showing", false);
                this.createButtonDisable();
                this.svarReload.update();
                //this.updateDgRightAsgnID();
            }

        } catch (e) {
            
            console.error('ERROR IN svaExecGenericNonQuerySimpleResult: ' + e);
            alert( 'ERROR IN svaExecGenericNonQuerySimpleResult: ' + e );
            
        }
    },
    btnViewClick: function(inSender) {
        try {
            
            //this.svarUserView.setValue("input.pUserId", "%");
            //this.svarUserView.update();
            this.ddUser.setShowing(true);
            
        } catch (e) {
            
            console.error('ERROR IN btnViewClick: ' + e);
            alert( 'ERROR IN btnViewClick: ' + e );
            
        }
    },

    btnSearchUserIDClick: function(inSender) {
        try {
            var s;
            /*if (this.txtSearch.getValue("dataValue") !== "") {
                this.svarUserView.setValue("input.pUserId", this.txtSearch.getValue("dataValue"));
            } else {
                s = this.txtSearch.getValue("dataValue");
            }
            //alert(s);
            //alert(this.txtSearch.getValue("dataValue"));          
            if (this.txtSearch.getValue("dataValue") == s) {
                this.svarUserView.setValue("input.pUserId", "%");
                this.svarUserView.getValue("dataValue");
            }*/
            
           if(typeof this.txtSearch.getValue("dataValue") !== "undefined" && typeof this.txtUname.getValue("dataValue") == "undefined" && typeof this.txtEMail.getValue("dataValue") == "undefined"){
             this.svarUserView.setValue("input.pUserId", this.txtSearch.getValue("dataValue"));
             this.svarUserView.setValue("input.pUsername", "%");
             this.svarUserView.setValue("input.pEmail", "%");
             
           }else if(typeof this.txtSearch.getValue("dataValue") == "undefined" && typeof this.txtUname.getValue("dataValue") !== "undefined" && typeof this.txtEMail.getValue("dataValue") == "undefined"){
             this.svarUserView.setValue("input.pUserId", "%");
             this.svarUserView.setValue("input.pUsername", this.txtUname.getValue("dataValue"));
             this.svarUserView.setValue("input.pEmail", "%");
           
           }else if(typeof this.txtSearch.getValue("dataValue") == "undefined" && typeof this.txtUname.getValue("dataValue") == "undefined" && typeof this.txtEMail.getValue("dataValue") !== "undefined"){
             this.svarUserView.setValue("input.pUserId", "%");
             this.svarUserView.setValue("input.pUsername", "%");
             this.svarUserView.setValue("input.pEmail", this.txtEMail.getValue("dataValue"));    
         
           }else if(typeof this.txtSearch.getValue("dataValue") !== "undefined" && typeof this.txtUname.getValue("dataValue") !== "undefined" && typeof this.txtEMail.getValue("dataValue") == "undefined"){
             this.svarUserView.setValue("input.pUserId", this.txtSearch.getValue("dataValue"));
             this.svarUserView.setValue("input.pUsername", this.txtUname.getValue("dataValue"));
             this.svarUserView.setValue("input.pEmail", "%"); 
         
           }else if(typeof this.txtSearch.getValue("dataValue") !== "undefined" && typeof this.txtUname.getValue("dataValue") == "undefined" && typeof this.txtEMail.getValue("dataValue") !== "undefined"){
             this.svarUserView.setValue("input.pUserId", this.txtSearch.getValue("dataValue"));
             this.svarUserView.setValue("input.pUsername", "%");
             this.svarUserView.setValue("input.pEmail", this.txtEMail.getValue("dataValue")); 
         
           }else if(typeof this.txtSearch.getValue("dataValue") == "undefined" && typeof this.txtUname.getValue("dataValue") !== "undefined" && typeof this.txtEMail.getValue("dataValue") !== "undefined"){
             this.svarUserView.setValue("input.pUserId", "%");
             this.svarUserView.setValue("input.pUsername", this.txtUname.getValue("dataValue"));
             this.svarUserView.setValue("input.pEmail", this.txtEMail.getValue("dataValue")); 
                  
           }else{
             //s = this.txtSearch.getValue("dataValue");
             this.svarUserView.setValue("input.pUserId", "%");
             this.svarUserView.setValue("input.pUsername", "%");
             this.svarUserView.setValue("input.pEmail", "%"); 
           }

            this.svarUserView.update();
            this.dgUserView.dataSet.update();

        } catch (e) {
            
            console.error('ERROR IN btnSearchUserIDClick: ' + e);
            alert( 'ERROR IN btnSearchUserIDClick: ' + e );
            
        }
    },
    btnSelectUserClick: function(inSender) {
        try {

            // Added by Jammi Dee 08/14/2012
            // Encrypt the password
            this.svarDESInit02.setValue("input.ivString", "");
            this.svarDESInit02.setValue("input.keyString", "");
            this.svarDESInit02.update();    

        } catch (e) {
            
            console.error('ERROR IN btnSelectUserClick: ' + e);
            alert( 'ERROR IN btnSelectUserClick: ' + e );
        }
    },
    
  svarDESInit02Result: function(inSender, inDeprecated) {
      try {
		  
            //alert(this.dgUserView.selectedItem.getData().passwdenc );
          
            this.svarDESDecrypt.setValue("input.value", this.dgUserView.selectedItem.getData().passwdenc );
            this.svarDESDecrypt.update();

	  } catch(e) {
		  console.error('ERROR IN svarDESInit02Result: ' + e); 
	  } 
  },    
    
  svarDESDecryptResult: function(inSender, inDeprecated) {
      try {
		  
            this.txtUserId.setValue("dataValue",    this.dgUserView.selectedItem.getData().userid);
            this.txtEntityId.setValue("dataValue",  this.dgUserView.selectedItem.getData().entityid);
            this.txtPassword.setValue("dataValue",  inSender.getValue("dataValue") );
            this.txtUsername.setValue("dataValue",  this.dgUserView.selectedItem.getData().username);
            this.txtFname.setValue("dataValue",     this.dgUserView.selectedItem.getData().firstname);
            this.txtMname.setValue("dataValue",     this.dgUserView.selectedItem.getData().middlename);
            this.txtLname.setValue("dataValue",     this.dgUserView.selectedItem.getData().lastname);
            this.txtEmail.setValue("dataValue",     this.dgUserView.selectedItem.getData().email);

            this.txtSdate.setValue("dataValue",     this.dgUserView.selectedItem.getData().startdate);
            //alert(this.txtSdate.getValue("dataValue"));
            this.txtEdate.setValue("dataValue",     this.dgUserView.selectedItem.getData().enddate);
            this.txtStatus.setValue("dataValue",    this.dgUserView.selectedItem.getData().sstatus);
            // Added by Jammi Dee 05/06/2012
            this.txtParent.setValue("dataValue",    this.dgUserView.selectedItem.getData().pid);
            
            this.ddUser.setShowing(false);		  
	  } catch(e) {
		  console.error('ERROR IN svarDESDecryptResult: ' + e); 
	  } 
  },    
    
    
    btnCloseUserClick: function(inSender) {
        try {
            this.ddUser.setShowing(false);

        } catch (e) {
            
            console.error('ERROR IN btnCloseUserClick: ' + e);
            alert( 'ERROR IN btnCloseUserClick: ' + e );
            
        }
    },
    txtUserStatusChange: function(inSender) {
	  try {
		  
          var s = "";
          if(typeof this.txtUserStatus.getValue("dataValue") !== 'undefined'){
            this.svarUserView.setValue("input.pStatus",this.txtUserStatus.getValue("dataValue"));
          }else{
             s = this.txtUserStatus.getValue("dataValue");
          }
          //alert(s);
          //alert(this.txtSearch.getValue("dataValue"));
          if(this.txtUserStatus.getValue("dataValue") == s){
              this.svarUserView.setValue("input.pStatus", "%");
              //this.svarRoleAsgnID.getValue("dataValue");
          }
          this.svarUserView.update();
          
	  } catch(e) {
          
		  console.error('ERROR IN txtUserStatusChange: ' + e); 
          alert( 'ERROR IN txtUserStatusChange: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 08/13/2012
  dgUserViewCellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
	  try {
		  
		  this.btnSelectUserClick( inSender );
          
	  } catch(e) {
		  console.error('ERROR IN dgUserViewCellDblClick: ' + e); 
	  } 
  },



  _end: 0
});