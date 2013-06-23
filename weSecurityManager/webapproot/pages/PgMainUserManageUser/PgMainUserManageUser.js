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
 * Date: 12/31/2012
 * Modified by: Jammi Dee 12/31/2012 11:30PM
 * 
*/

/*
 This is a sample page that can used as template
*/

dojo.declare("PgMainUserManageUser", wm.Page, {
	"preferredDevice": "desktop",
    
    start: function() {
        try {
            
            // Added by JMD 04/27/2012
            // Set up the date for the header here
            var today   = new Date();
            var dd      = today.getDate();
            var mm      = today.getMonth()+1; //January is 0!
            var yyyy    = today.getFullYear();
            
            if(dd<10){dd='0'+dd;} 
            if(mm<10){mm='0'+mm;}
            var ctoday = mm+'/'+dd+'/'+yyyy;
            this.lblDate.setCaption(ctoday);
            
            // Set up the header information here
            this.lblUserInfo.setCaption(app.varUserInfo.getValue("dataValue"));
            this.lblTitle.setCaption("Wave ERP Template System 1.0");
            this.lblEntity.setCaption(app.varEntity.getValue("dataValue"));
            app.varModuleId.setValue("dataValue","MDLMAIN");
            
            // Initialize the application - Jammi Dee 03/25/2012
            this.initApplication();    
            
            //Added by Jammi Dee 11/25/2012
            app.svarUpdateSessionApp.setValue("input.pJuid",app.varSessionId.getValue("dataValue"));
            app.svarUpdateSessionApp.update();    
            
            // Added by Jammi Dee 08/10/2012
            this.selStatus.setOptions("ACTIVE,LOCKED");
            
            // Added by Jammi Dee 01/01/2013
            //this.selDbEngine.setOptions("MYSQL,MSSQL,ORACLE,DB2,ODBC,OTHERS");            
            
            //Added by Jammi Dee 05/05/2013
            this.svarUserView01.setValue("input.pEntity", app.varEntity.getValue("dataValue") );
            this.svarUserView01.update();  
            
            this.txtEntity.setValue("dataValue", app.varEntity.getValue("dataValue"));
            
            
            // Added by Jammi Dee 05/06/2012 
            app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
            app.svarLogging.setValue("input.pMsg","Manage Connection Profile Page.");
            app.svarLogging.setValue("input.pModuleId","USER");
            app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
            app.svarLogging.setValue("input.pProcess","MANAGE");
            app.svarLogging.setValue("input.pScopeId","NA");
            app.svarLogging.setValue("input.pStype","USER");            
            app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
            app.svarLogging.update();
            
            //Added by Jammi Dee 07/07/2012
            //Determine if we have to show or hide the header
            //if( app.varShowHeader.getValue("dataValue") === "ON" ){
                
            //    this.pnlHeader.setShowing(true); // show header
                
            //} else {
                
            //    this.pnlHeader.setShowing(false); // hide header
                
            //}             
            
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
        
        this.lblTitle.setCaption("User : Manage" );
        this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
    
    },  


  // Added by Jammi Dee 05/31/2012
  ddSelectEntityShow: function(inSender) {
	  try {

            this.svarSelectEntity.update();
            
		  
	  } catch(e) {
		  console.error('ERROR IN ddSelectEntityShow: ' + e); 
	  } 
  },
  

  //Added by Jammi Dee 07/23/2012
  ddSelectUserShow: function(inSender) {
	  try {
		  
            this.svarUserView.setValue("input.pEntity", app.varEntity.getValue("dataValue") );
            this.svarUserView.update(); 

	  } catch(e) {
          
		  console.error('ERROR IN ddSelectUserShow: ' + e); 
          alert( 'ERROR IN btnSelectSiteSelectClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 08/13/2012
  dgSelectUserCellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
      try {

          this.btnSelectUserAddClick( inSender );
		  
	  } catch(e) {
		  console.error('ERROR IN dgSelectUserCellDblClick: ' + e); 
	  } 
  },
  
  
  //Added by Jammi Dee 07/28/2012
  svarExecGenericNonQueryResult: function(inSender, inDeprecated) {
      try {
		  
         this.svarEntityAsgnView.setValue("input.pEntity", this.txtEntity.getValue("dataValue") );
         this.svarEntityAsgnView.update();           
            
	  } catch(e) {
          
		  console.error('ERROR IN svarExecGenericNonQueryResult: ' + e); 
          alert( 'ERROR IN svarExecGenericNonQueryResult: ' + e );
          
	  } 
  },  
  
  

  //Added by Jammi Dee 08/10/2012
  dgDataClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
	  try {

          this.selStatus.setValue("dataValue",      this.dgData.selectedItem.getData().sstatus );
		  
	  } catch(e) {
          
		  console.error('ERROR IN dgDataClick: ' + e); 
          alert( 'No data selected.' );
          
	  } 
  },
  
  //Added by Jammi Dee 01/01/2013
  btnUpdateActionClick: function(inSender) {
	  try {

          this.svarUserView01Update.setValue("input.pUserId",        this.dgData.selectedItem.getData().userid );
          this.svarUserView01Update.setValue("input.pEntity",        this.txtEntity.getValue("dataValue") );
          this.svarUserView01Update.setValue("input.pStatus",        this.selStatus.getValue("dataValue") );
          this.svarUserView01Update.update(); 
          
	  } catch(e) {
          
		  console.error('ERROR IN btnUpdateActionClick: ' + e); 
          alert( 'Please select an item!' );
	  } 
  },
  
  //Added by Jammi Dee 05/05/2013
  svarUserView01UpdateResult: function(inSender, inDeprecated) {
      try {

            this.svarUserView01.setValue("input.pEntity", this.txtEntity.getValue("dataValue") );
            this.svarUserView01.update();    

	  } catch(e) {
          
		  console.error('ERROR IN svarUserView01UpdateResult: ' + e);
          alert( 'ERROR IN svarUserView01UpdateResult: ' + e );
          
	  }
  },  


  //Added by Jammi Dee 01/01/2013
  btnSelectSelectClick: function(inSender) {
	  try {
	
          this.txtEntity.setValue("dataValue", this.dgDataSelect.selectedItem.getData().entityid );
          
          this.svarUserView01.setValue("input.pEntity",     this.dgDataSelect.selectedItem.getData().entityid );
          this.svarUserView01.update();          
          
          this.ddSelectEntity.hide();    
    
		  
	  } catch(e) {
          
		  console.error('ERROR IN btnSelectSelectClick: ' + e); 
          alert( 'ERROR IN btnSelectSelectClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 09/08/2012
  dgDataSelectCellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
      try {
		  
          this.btnSelectSelectClick( inSender );
		  
	  } catch(e) {
          
		  console.error('ERROR IN dgDataSelectCellDblClick: ' + e);
          alert( 'ERROR IN dgDataSelectCellDblClick: ' + e );
          
	  } 
  },  
  
  
  ///////////////////////////////////////
  //         Adding new user           //
  ///////////////////////////////////////
  
  
  
  //Added by Jammi Dee 05/05/2013
  pic_newClick: function(inSender) {
	  try {
		  
          //Added by Jammi Dee 05/05/2013
          this.svarCheckUserLicense.update();
		  
	  } catch(e) {
          
		  console.error('ERROR IN pic_newClick: ' + e);
          alert( 'ERROR IN pic_newClick: ' + e );
	  } 
  },
  
  svarCheckUserLicenseResult: function(inSender, inDeprecated) {
      try {
          
          //alert( inSender.getValue("dataValue") );
          if( inSender.getValue("dataValue") === "OK" ){
              
             this.ddUserCreate.show();              
              
          } else {
              
                alert("Maximum number of USERS allowed has been reached!");              
              
          }
		  
	  } catch(e) {
          
		  console.error('ERROR IN pic_newClick: ' + e);
          alert( 'ERROR IN pic_newClick: ' + e );
	  }
  },  
  
  //Added by Jammi Dee 05/05/2013
  ddUserCreateShow: function(inSender) {
      try {
          
          // Set up the date for the header here
          var today   = new Date();
          var dd      = today.getDate();
          var mm      = today.getMonth()+1; //January is 0!
          var yyyy    = today.getFullYear();
            
          if(dd<10){dd='0'+dd;} 
          if(mm<10){mm='0'+mm;}
          var ctoday = mm+'/'+dd+'/'+yyyy;          
          
          this.dtStart.setValue("dataValue",    ctoday);
          this.dtEnd.setValue("dataValue",      ctoday);

          
      } catch(e) {
          
          console.error('ERROR IN ddUserCreateShow: ' + e);
          alert( 'ERROR IN ddUserCreateShow: ' + e );
          
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

  // Added by Jammi Dee 03/11/2012
  verifyEmail: function(email) {
      return (email.indexOf(".") > 2) && (email.indexOf("@") > 0);
  },
    

  //Added by Jammi Dee 05/05/2013
  btnCreateUserCreateClick: function(inSender) {
      try {

            this.varFlag.setValue("dataValue", "ADD");

            // Added by Jammi Dee 08/14/2012
            // Encrypt the password
            this.svarDESInit.setValue("input.ivString", "");
            this.svarDESInit.setValue("input.keyString", "");
            this.svarDESInit.update(); 
            
          
      } catch(e) {
          
          console.error('ERROR IN btnCreateUserCreateClick: ' + e);
          alert( 'ERROR IN btnCreateUserCreateClick: ' + e );
          
      }
  },

  //Added by Jammi Dee 05/05/2013
  svarDESInitResult: function(inSender, inDeprecated) {
      try {
            
        this.svarDESEncrypt.setValue("input.value", this.txtPasswd.getValue("dataValue") );
        this.svarDESEncrypt.update();


      } catch(e) {
          
          console.error('ERROR IN svarDESInitResult: ' + e);
          alert( 'ERROR IN svarDESInitResult: ' + e );
          
      }
  },

  //Added by Jammi Dee 05/05/2013
  svarDESEncryptResult: function(inSender, inDeprecated) {
      try {

            var entityid    = this.txtEntity.getValue("dataValue");
            var userid      = this.txtUserId.getValue("dataValue");
            var password    = this.txtPasswd.getValue("dataValue");
            var password02  = inSender.getValue("dataValue");
            var uname       = this.txtUserName.getValue("dataValue");
            var fname       = this.txtFname.getValue("dataValue");
            var mname       = this.txtMname.getValue("dataValue");
            var lname       = this.txtLname.getValue("dataValue");
            var email       = this.txtEmail.getValue("dataValue");
            var parnt       = this.txtParent.getValue("dataValue");
            var sdate       = "";
            var edate       = "";

            //Pass the encrypted password
            this.varPassword02.setValue("dataValue", password02 );
            //alert(password);
            
            var status = "ACTIVE"; //this.txtStatus.getValue("dataValue");
            sdate = this.convertDateToSqlDateFormat(this.dtStart.getValue("dataValue"));
            edate = this.convertDateToSqlDateFormat(this.dtEnd.getValue("dataValue"));
            

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
                                 "password = '" + 'LOCKED!' + "',firstname = '" + fname + "',middlename = '" + mname + "',lastname = '" + lname + "'," + 
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




      } catch(e) {
          
          console.error('ERROR IN svarDESEncryptResult: ' + e);
          alert( 'ERROR IN svarDESEncryptResult: ' + e );
          
      }
  },

  //Added by Jammi Dee 05/05/2013
  svarTblUserResult: function(inSender, inDeprecated) {
      try {

            var entityid    = this.txtEntity.getValue("dataValue");
            var userid      = this.txtUserId.getValue("dataValue");
            var password    = this.txtPasswd.getValue("dataValue");
            var password02  = this.varPassword02.getValue("dataValue");
            var uname       = this.txtUserName.getValue("dataValue");
            var fname       = this.txtFname.getValue("dataValue");
            var mname       = this.txtMname.getValue("dataValue");
            var lname       = this.txtLname.getValue("dataValue");
            var email       = this.txtEmail.getValue("dataValue");
            var mpid        = this.txtParent.getValue("dataValue");
            var sdate       = "";
            var edate       = "";
            var sQueryFinal1;
            var status      = "ACTIVE"; //this.txtStatus.getValue("dataValue");

            sdate = this.convertDateToSqlDateFormat(this.dtStart.getValue("dataValue"));
            edate = this.convertDateToSqlDateFormat(this.dtEnd.getValue("dataValue"));

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
                    sQuery = sQuery + ",'" + 'LOCKED!' + "','" + fname + "'";
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

          
      } catch(e) {
          
          console.error('ERROR IN svarTblUserResult: ' + e);
          alert( 'ERROR IN svarTblUserResult: ' + e );
          
      }
  },

  //Added by Jammi Dee 05/05/2013
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
                    
                    // Added by Jammi Dee 05/06/2013
                    app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
                    app.svarLogging.setValue("input.pMsg","Edit user ID " + this.dgData.selectedItem.getData().userid + "."  );
                    app.svarLogging.setValue("input.pModuleId","MANAGEUSER");
                    app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
                    app.svarLogging.setValue("input.pProcess","EDIT");
                    app.svarLogging.setValue("input.pScopeId","NA");
                    app.svarLogging.setValue("input.pStype","USER");  
                    app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
                    app.svarLogging.update();                      
                    
                    alert("Successfuly edited.");
                    
                } else if (this.varFlag.getValue("dataValue") == "DELETE") {
                    
                    // Added by Jammi Dee 05/06/2013
                    app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
                    app.svarLogging.setValue("input.pMsg","Delete user ID " + this.dgData.selectedItem.getData().userid + "."  );
                    app.svarLogging.setValue("input.pModuleId","MANAGEUSER");
                    app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
                    app.svarLogging.setValue("input.pProcess","DELETE");
                    app.svarLogging.setValue("input.pScopeId","NA");
                    app.svarLogging.setValue("input.pStype","USER");  
                    app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
                    app.svarLogging.update();                     
                    
                    alert("Successfuly deleted.");
                    
                }
            }

            this.svarUserView01.setValue("input.pEntity",     this.txtEntity.getValue("dataValue") );
            this.svarUserView01.update();   
            
            this.ddUserCreate.hide();

          
      } catch(e) {
          
          console.error('ERROR IN svarExecGenericNonQueryComplexResult: ' + e);
          alert( 'ERROR IN svarExecGenericNonQueryComplexResult: ' + e );
          
      }
  },
  
  //Added by Jammi Dee 05/05/2013
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
                    
                    this.ddUserEdit.hide();
                    
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
                    
                    this.ddUserEdit.hide();
                    
                    
                }

            }

            this.svarUserView01.setValue("input.pEntity",     this.txtEntity.getValue("dataValue") );
            this.svarUserView01.update();          
          
          
      } catch(e) {
          
          console.error('ERROR IN svarExecGenericNonQuerySimpleResult: ' + e);
          alert( 'ERROR IN svarExecGenericNonQuerySimpleResult: ' + e );
          
      }
  },


  ///////////////////////////////////////
  //           Delete user             //
  ///////////////////////////////////////

  //Added by Jammi Dee 01/01/2013
  pic_deleteClick: function(inSender) {
      try {
		  
          this.varFlag.setValue("dataValue", "DELETE");
          
          var userid      = this.dgData.selectedItem.getData().userid;
          
          if( userid !== "" || userid !== null ){
              
                var response = confirm("Delete: Are you sure to delete this item?");
            
                if (response) {
                    
                    this.svarUserView01Delete.setValue("input.pUserId", userid );
                    this.svarUserView01Delete.setValue("input.pEntity", this.txtEntity.getValue("dataValue") );
                    this.svarUserView01Delete.update(); 
                    
                }    
       
          } else {
              
              alert( "No item selected for deletion." );
              
          }

          
          
	  } catch(e) {
          
		  console.error('ERROR IN pic_deleteClick: ' + e); 
          alert( 'ERROR IN pic_deleteClick: ' + e );
	  } 
  },
  
  svarUserView01DeleteResult: function(inSender, inDeprecated) {
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
                    app.svarLogging.setValue("input.pMsg","Delete user ID " + this.dgData.selectedItem.getData().userid + "."  );
                    app.svarLogging.setValue("input.pModuleId","MANAGEUSER");
                    app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
                    app.svarLogging.setValue("input.pProcess","DELETE");
                    app.svarLogging.setValue("input.pScopeId","NA");
                    app.svarLogging.setValue("input.pStype","USER");  
                    app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
                    app.svarLogging.update();                      
                    
                    alert("Successfuly deleted.");
                    
                }

            }          

            this.svarUserView01.setValue("input.pEntity", this.txtEntity.getValue("dataValue") );
            this.svarUserView01.update();           
		  
	  } catch(e) {
          
		  console.error('ERROR IN svarUserView01DeleteResult: ' + e);
          alert( 'ERROR IN svarUserView01DeleteResult: ' + e );
          
	  }		
  }, 


  //Added by Jammi Dee 05/05/2013
  pic_editClick: function(inSender) {
      try {
          
          this.varFlag.setValue("dataValue", "EDIT");
          
          this.txtUserIdEdit.setValue("dataValue",          this.dgData.selectedItem.getData().userid );
          this.txtUserNameEdit.setValue("dataValue",        this.dgData.selectedItem.getData().username );
          this.txtPasswdEdit.setValue("dataValue",          this.dgData.selectedItem.getData().password );
          this.txtPasswordEncEdit.setValue("dataValue",     this.dgData.selectedItem.getData().passwdenc );
          this.txtFnameEdit.setValue("dataValue",           this.dgData.selectedItem.getData().firstname );
          this.txtMnameEdit.setValue("dataValue",           this.dgData.selectedItem.getData().middlename );
          this.txtLnameEdit.setValue("dataValue",           this.dgData.selectedItem.getData().lastname );
          this.txtEmailEdit.setValue("dataValue",           this.dgData.selectedItem.getData().email );
          this.dtStartEdit.setValue("dataValue",            this.dgData.selectedItem.getData().startdate );
          this.dtEndEdit.setValue("dataValue",              this.dgData.selectedItem.getData().enddate );
          this.txtParentEdit.setValue("dataValue",          this.dgData.selectedItem.getData().pid );
          
          this.ddUserEdit.show();
          
          
      } catch(e) {
          
          console.error('ERROR IN pic_editClick: ' + e);
          
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
  lblBackClick: function(inSender, inEvent) {
      try {
          
          app.pdWaitLoadPage.show();
          this.navPgMain.update();
          
      } catch(e) {
          
          console.error('ERROR IN pic_homeClick: ' + e);
          
	  }		
  },
  

  ddUserEditShow: function(inSender) {
	  this.ddUserCreateShow(inSender);
  },
  
  //Added by Jammi Dee 05/05/2013
  btnCreateUserCreateEditClick: function(inSender) {
      try {

            this.varFlag.setValue("dataValue", "EDIT");

            this.txtUserId.setValue("dataValue",          this.txtUserIdEdit.getValue("dataValue") );
            this.txtUserName.setValue("dataValue",        this.txtUserNameEdit.getValue("dataValue") );
            this.txtPasswd.setValue("dataValue",          this.txtPasswdEdit.getValue("dataValue") );
            this.txtPasswordEnc.setValue("dataValue",     this.txtPasswordEncEdit.getValue("dataValue") );
            this.txtFname.setValue("dataValue",           this.txtFnameEdit.getValue("dataValue") );
            this.txtMname.setValue("dataValue",           this.txtMnameEdit.getValue("dataValue") );
            this.txtLname.setValue("dataValue",           this.txtLnameEdit.getValue("dataValue") );
            this.txtEmail.setValue("dataValue",           this.txtEmailEdit.getValue("dataValue") );
            this.dtStart.setValue("dataValue",            this.dtStartEdit.getValue("dataValue") );
            this.dtEnd.setValue("dataValue",              this.dtEndEdit.getValue("dataValue") );
            this.txtParent.setValue("dataValue",          this.txtParentEdit.getValue("dataValue") );

            //alert( this.txtPasswdEdit.getValue("dataValue") + " help" );

            // Added by Jammi Dee 08/14/2012
            // Encrypt the password
            this.svarDESInit.setValue("input.ivString", "");
            this.svarDESInit.setValue("input.keyString", "");
            this.svarDESInit.update(); 
            
          
      } catch(e) {
          
          console.error('ERROR IN btnCreateUserCreateClick: ' + e);
          alert( 'ERROR IN btnCreateUserCreateClick: ' + e );
          
      }
	},
    

	_end: 0
});