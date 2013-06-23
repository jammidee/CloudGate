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
 * Date: 08/20/2012
 * Modified by: Jammi Dee 08/20/2012
 * 
*/

/*
 This is a sample page that can used as template
*/

dojo.declare("PgMainConfigLicense", wm.Page, {
	"preferredDevice": "desktop",
    
    start: function() {
        try {
            
            // Added by JMD 04/27/2012
            // Set up the date for the header here
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1; //January is 0!
            var yyyy = today.getFullYear();
            
            if(dd<10){dd='0'+dd;} 
            if(mm<10){mm='0'+mm;}
            var ctoday = mm+'/'+dd+'/'+yyyy;
            this.lblDate.setCaption(ctoday);
            
            // Set up the header information here
            this.lblUserInfo.setCaption(app.varUserInfo.getValue("dataValue"));
            this.lblTitle.setCaption("Wave ERP Copyright 2012");
            this.lblEntity.setCaption(app.varEntity.getValue("dataValue"));
            app.varModuleId.setValue("dataValue","MDLMAIN");
            
            // Initialize the application - Jammi Dee 03/25/2012
            this.initApplication();      
            
            //Added by Jammi Dee 11/25/2012
            app.svarUpdateSessionApp.setValue("input.pJuid",app.varSessionId.getValue("dataValue"));
            app.svarUpdateSessionApp.update();    
            
            //Added by Jammi Dee 08/20/2012
            this.txtSourceKey.setValue("dataValue", window.location.hostname + ":" + window.location.port );
            
            // Added by Jammi Dee 05/06/2012 
            app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
            app.svarLogging.setValue("input.pMsg","License key generation.");
            app.svarLogging.setValue("input.pModuleId","CONFIG");
            app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
            app.svarLogging.setValue("input.pProcess","KEYGEN");
            app.svarLogging.setValue("input.pScopeId","NA");
            app.svarLogging.setValue("input.pStype","USER");            
            app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
            app.svarLogging.update();
            
            //Update the URL Access Table
            this.svarUrlAccess.update();
            
            //Added by Jammi Dee 11/25/2012
            this.svarReadFromRegistryLicTo.setValue("input.pEntity", "NA" ); 
            this.svarReadFromRegistryLicTo.setValue("input.pAppId", "NA" ); 
            this.svarReadFromRegistryLicTo.setValue("input.pUserId","NA");  
            this.svarReadFromRegistryLicTo.setValue("input.pVarname","LICENSETO"); 
            this.svarReadFromRegistryLicTo.setValue("input.pDefa","CloudGate Inc."); 
            this.svarReadFromRegistryLicTo.update();  
            
            //Added by Jammi Dee 11/25/2012
            this.svarReadFromRegistryConUsers.setValue("input.pEntity", "NA" ); 
            this.svarReadFromRegistryConUsers.setValue("input.pAppId", "NA" ); 
            this.svarReadFromRegistryConUsers.setValue("input.pUserId","NA");  
            this.svarReadFromRegistryConUsers.setValue("input.pVarname","CONCURRENTUSERS"); 
            this.svarReadFromRegistryConUsers.setValue("input.pDefa","10"); 
            this.svarReadFromRegistryConUsers.update();  

            //Added by Jammi Dee 11/25/2012
            this.svarReadFromRegistryNoUsers.setValue("input.pEntity", "NA" ); 
            this.svarReadFromRegistryNoUsers.setValue("input.pAppId", "NA" ); 
            this.svarReadFromRegistryNoUsers.setValue("input.pUserId","NA");  
            this.svarReadFromRegistryNoUsers.setValue("input.pVarname","NOUSERS"); 
            this.svarReadFromRegistryNoUsers.setValue("input.pDefa","1000"); 
            this.svarReadFromRegistryNoUsers.update();              

            //Added by Jammi Dee 11/25/2012
            this.svarReadFromRegistryNoEntities.setValue("input.pEntity", "NA" ); 
            this.svarReadFromRegistryNoEntities.setValue("input.pAppId", "NA" ); 
            this.svarReadFromRegistryNoEntities.setValue("input.pUserId","NA");  
            this.svarReadFromRegistryNoEntities.setValue("input.pVarname","NOENTITIES"); 
            this.svarReadFromRegistryNoEntities.setValue("input.pDefa","3"); 
            this.svarReadFromRegistryNoEntities.update();   

            //Added by Jammi Dee 12/08/2012
            this.svarReadFromRegistryEdition.setValue("input.pEntity", "NA" ); 
            this.svarReadFromRegistryEdition.setValue("input.pAppId", "NA" ); 
            this.svarReadFromRegistryEdition.setValue("input.pUserId","NA");  
            this.svarReadFromRegistryEdition.setValue("input.pVarname","EDITION"); 
            this.svarReadFromRegistryEdition.setValue("input.pDefa","STANDARD"); 
            this.svarReadFromRegistryEdition.update();   
            
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
        
        this.lblTitle.setCaption("Config : License Key" );
        this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
    
    },  

  //Added by Jammi Dee 08/20/2012
  btnGenerateClick: function(inSender) {
	  try {

          //Generate key here.
          this.svarGenerateKey.setValue("input.pKey",        this.txtPasswordKey.getValue("dataValue") );
          this.svarGenerateKey.setValue("input.pKeySource",  this.txtSourceKey.getValue("dataValue") );
          this.svarGenerateKey.update();
		  
	  } catch(e) {
		  console.error('ERROR IN btnGenerateClick: ' + e); 
	  } 
  },
  
  //Added by Jammi Dee 08/20/2012
  svarGenerateKeyResult: function(inSender, inDeprecated) {
	  try {
		  
          this.txtGenKey.setValue("dataValue", inSender.getValue("dataValue") );
		  
	  } catch(e) {
          
		  console.error('ERROR IN svarGenerateKeyResult: ' + e);
          alert( 'ERROR IN svarGenerateKeyResult: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 09/11/2012
  pic_addClick: function(inSender) {
	  try {
		  
          this.ddNewUrlAccess.show();
		  
	  } catch(e) {
          
		  console.error('ERROR IN pic_addClick: ' + e); 
          alert( 'ERROR IN pic_addClick: ' + e );
          
	  } 
  },

  //Added by Jammi Dee 09/11/2012
  btnUrlAddClick: function(inSender) {
	  try {   
          
          
         //Generate key here.
         this.svarGenerateURLKey.setValue("input.pKey",        this.txtUrlPass.getValue("dataValue") );
         this.svarGenerateURLKey.setValue("input.pKeySource",  this.txtUrl.getValue("dataValue") );          
         this.svarGenerateURLKey.update();   
         
          //Added by Jammi Dee 04/14/2013
          //Get the encrypted URL password
          //this.svarReadFromRegistryUrlKey.setValue("input.pEntity", "NA" ); 
          //this.svarReadFromRegistryUrlKey.setValue("input.pAppId", "NA" ); 
          //this.svarReadFromRegistryUrlKey.setValue("input.pUserId","NA");  
          //this.svarReadFromRegistryUrlKey.setValue("input.pVarname","URLPASS"); 
          //this.svarReadFromRegistryUrlKey.setValue("input.pDefa","Nothing"); 
          //this.svarReadFromRegistryUrlKey.update();            

	  } catch(e) {
          
		  console.error('ERROR IN btnUrlAddClick: ' + e);
          alert( 'ERROR IN btnUrlAddClick: ' + e );
          
	  } 
  },
  
  svarReadFromRegistryUrlKeyResult: function(inSender, inDeprecated) {
      try {   
          
         //Generate key here.
         this.svarGenerateURLKey.setValue("input.pKey",        this.txtUrlPass.getValue("dataValue") );
         this.svarGenerateURLKey.setValue("input.pKeySource",  this.txtUrl.getValue("dataValue") );          
         this.svarGenerateURLKey.update();              

	  } catch(e) {
          
		  console.error('ERROR IN svarReadFromRegistryUrlKeyResult: ' + e);
          alert( 'ERROR IN btnUrlAddClick: ' + e );
          
	  }
          
  },  
  
  //Added by Jammi Dee 09/11/2012
  svarGenerateURLKeyResult: function(inSender, inDeprecated) {
	  try {
            
            //Used this UUID generation when database UUID is not available
            var UUID = app.uuid4();
            
            var eQuery =           "insert into tblAccessUrl( " + 
                                   "juid, " +
                                   "urlid, " + 
                                   "urlpassword, " + 
                                   "sstatus " + 
                                   ")" +
                                   "values( " + 
                                   "'" + UUID + "', " +
                                   "'" + this.txtUrl.getValue("dataValue") + "', " + 
                                   "'" + inSender.getValue("dataValue") + "', " + 
                                   "'ACTIVE' " + 
                                   ");";
            //alert( eQuery );                       
            this.svarExecGenericNonQuery.setValue("input.eQuery", eQuery);
            this.svarExecGenericNonQuery.update();
            
            app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
            app.svarLogging.setValue("input.pMsg","Added new URL Access " + this.txtUrl.getValue("dataValue") + "." );
            app.svarLogging.setValue("input.pModuleId","LICENSE");
            app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
            app.svarLogging.setValue("input.pProcess","KEYGEN");
            app.svarLogging.setValue("input.pScopeId","NA");
            app.svarLogging.setValue("input.pStype","USER");            
            app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
            app.svarLogging.update();            
            
            //Hide the popup window
            this.ddNewUrlAccess.hide();
		  
	  } catch(e) {
          
		  console.error('ERROR IN svarGenerateURLKeyResult: ' + e); 
          alert( 'ERROR IN svarGenerateURLKeyResult: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 09/11/2012
  svarExecGenericNonQueryResult: function(inSender, inDeprecated) {
	  try {

            //Update the URL Access Table
            this.svarUrlAccess.update();
		  
	  } catch(e) {
		  console.error('ERROR IN svarExecGenericNonQueryResult: ' + e); 
	  } 
  },
  
  //Added by Jammi Dee 09/11/2012
  pic_deleteClick: function(inSender) {
	  try {
          
            var response = confirm("Delete: Are you sure to delete this item?");
            
            if (response) {
             
                var eQuery = "delete from tblAccessUrl where urlid ='" + this.dgData.selectedItem.getData().urlid + "'; " ;
                //alert( eQuery );                       
                this.svarExecGenericNonQueryDelete.setValue("input.eQuery", eQuery);
                this.svarExecGenericNonQueryDelete.update();
             
            }    

	  } catch(e) {
          
		  console.error('ERROR IN pic_deleteClick: ' + e);
          alert( 'ERROR IN pic_deleteClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 09/11/2012
  svarExecGenericNonQueryDeleteResult: function(inSender, inDeprecated) {
	  try {
		  
          app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
          app.svarLogging.setValue("input.pMsg","Deleted URL Access " + this.txtUrl.getValue("dataValue") + "." );
          app.svarLogging.setValue("input.pModuleId","LICENSE");
          app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
          app.svarLogging.setValue("input.pProcess","KEYGEN");
          app.svarLogging.setValue("input.pScopeId","NA");
          app.svarLogging.setValue("input.pStype","USER");            
          app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
          app.svarLogging.update();            
          
          //Update the URL Access Table
          this.svarUrlAccess.update();          
          
          //alert("URL Access has been deleted.");
		  
	  } catch(e) {
		  console.error('ERROR IN svarExecGenericNonQueryDeleteResult: ' + e); 
	  } 
  },
  
  //Added by Jammi Dee 11/25/2012
  btnGenerateLicClick: function(inSender) {
	  try {
          
          //Generate key here.
          this.svarGenerateKeyConUsers.setValue("input.pKey",        this.txtPasswordKey.getValue("dataValue") );
          this.svarGenerateKeyConUsers.setValue("input.pKeySource",  this.txtLicTo.getValue("dataValue") + "|" + this.txtConcurrentUsers.getValue("dataValue") );
          this.svarGenerateKeyConUsers.update();		  
		  
	  } catch(e) {
		  console.error('ERROR IN btnGenerateLicClick: ' + e); 
	  } 
  },
  
  //Added by Jammi Dee 11/25/2012
  svarGenerateKeyConUsersResult: function(inSender, inDeprecated) {
      try {
		  
          this.txtConcurrentUsers.setValue("dataValue", inSender.getValue("dataValue") );
          
           //Generate key here.
          this.svarGenerateKeyNoUsers.setValue("input.pKey",        this.txtPasswordKey.getValue("dataValue") );
          this.svarGenerateKeyNoUsers.setValue("input.pKeySource",  this.txtLicTo.getValue("dataValue") + "|" + this.txtNoUsers.getValue("dataValue") );
          this.svarGenerateKeyNoUsers.update();         
		  
	  } catch(e) {
		  console.error('ERROR IN svarGenerateKeyConUsersResult: ' + e); 
	  } 
  },  
  
  //Added by Jammi Dee 11/25/2012
  svarGenerateKeyNoUsersResult: function(inSender, inDeprecated) {
      try {
		  
          this.txtNoUsers.setValue("dataValue", inSender.getValue("dataValue") );
            
          //Generate key here.
          this.svarGenerateKeyNoEntities.setValue("input.pKey",        this.txtPasswordKey.getValue("dataValue") );
          this.svarGenerateKeyNoEntities.setValue("input.pKeySource",  this.txtLicTo.getValue("dataValue") + "|" + this.txtNoEntity.getValue("dataValue") );
          this.svarGenerateKeyNoEntities.update();             

	  } catch(e) {
		  console.error('ERROR IN svarGenerateKeyNoUsersResult: ' + e); 
	  } 
  },
  
  //Added by Jammi Dee 11/25/2012
  svarGenerateKeyNoEntitiesResult: function(inSender, inDeprecated) {
      try {

          this.txtNoEntity.setValue("dataValue", inSender.getValue("dataValue") );
          
          //Generate key here.
          this.svarGenerateKeyEdition.setValue("input.pKey",        this.txtPasswordKey.getValue("dataValue") );
          this.svarGenerateKeyEdition.setValue("input.pKeySource",  this.txtLicTo.getValue("dataValue") + "|" + this.txtEdition.getValue("dataValue") );
          this.svarGenerateKeyEdition.update();             
		  
	  } catch(e) {
		  console.error('ERROR IN svarGenerateKeyNoEntitiesResult: ' + e); 
	  } 
  },
  
  //Added by Jammi Dee 12/08/2012
  svarGenerateKeyEditionResult: function(inSender, inDeprecated) {
      try {
		  
		  this.txtEdition.setValue("dataValue", inSender.getValue("dataValue") );
          
	  } catch(e) {
		  console.error('ERROR IN svarGenerateKeyEditionResult: ' + e); 
	  } 
  },  
  


  //Added by Jammi Dee 11/25/2012
  btnSaveLicClick: function(inSender) {
	  try {
		  
          this.svarWriteToRegistryLicTo.setValue("input.pAppId","NA"); 
          this.svarWriteToRegistryLicTo.setValue("input.pEntity","NA"); 
          this.svarWriteToRegistryLicTo.setValue("input.pUserId","NA"); // Application wide registry 
          this.svarWriteToRegistryLicTo.setValue("input.pVarname","LICENSETO"); // Background URL
          this.svarWriteToRegistryLicTo.setValue("input.pVarvalue",this.txtLicTo.getValue("dataValue"));
          this.svarWriteToRegistryLicTo.update();             
		  
	  } catch(e) {
		  console.error('ERROR IN btnSaveLicClick: ' + e); 
	  } 
  },
  
  svarWriteToRegistryLicToResult: function(inSender, inDeprecated) {
      try {
		  
          this.svarWriteToRegistryConUsers.setValue("input.pAppId","NA"); 
          this.svarWriteToRegistryConUsers.setValue("input.pEntity","NA"); 
          this.svarWriteToRegistryConUsers.setValue("input.pUserId","NA"); // Application wide registry 
          this.svarWriteToRegistryConUsers.setValue("input.pVarname","CONCURRENTUSERS"); // Background URL
          this.svarWriteToRegistryConUsers.setValue("input.pVarvalue",this.txtConcurrentUsers.getValue("dataValue"));
          this.svarWriteToRegistryConUsers.update();   
          
	  } catch(e) {
		  console.error('ERROR IN svarWriteToRegistryLicToResult: ' + e); 
	  } 
  },  
  
  svarWriteToRegistryConUsersResult: function(inSender, inDeprecated) {
      try {
		  
          this.svarWriteToRegistryNoUsers.setValue("input.pAppId","NA"); 
          this.svarWriteToRegistryNoUsers.setValue("input.pEntity","NA"); 
          this.svarWriteToRegistryNoUsers.setValue("input.pUserId","NA"); // Application wide registry 
          this.svarWriteToRegistryNoUsers.setValue("input.pVarname","NOUSERS"); // Background URL
          this.svarWriteToRegistryNoUsers.setValue("input.pVarvalue",this.txtNoUsers.getValue("dataValue"));
          this.svarWriteToRegistryNoUsers.update();   

	  } catch(e) {
		  console.error('ERROR IN svarWriteToRegistryConUsersResult: ' + e); 
	  } 
  },
  
  svarWriteToRegistryNoUsersResult: function(inSender, inDeprecated) {
      try {
		  
          this.svarWriteToRegistryNoEntities.setValue("input.pAppId","NA"); 
          this.svarWriteToRegistryNoEntities.setValue("input.pEntity","NA"); 
          this.svarWriteToRegistryNoEntities.setValue("input.pUserId","NA"); // Application wide registry 
          this.svarWriteToRegistryNoEntities.setValue("input.pVarname","NOENTITIES"); // Background URL
          this.svarWriteToRegistryNoEntities.setValue("input.pVarvalue",this.txtNoEntity.getValue("dataValue"));
          this.svarWriteToRegistryNoEntities.update();  
          
          //alert("License codes has been saved!");
          
	  } catch(e) {
		  console.error('ERROR IN svarWriteToRegistryNoUsersResult: ' + e); 
	  } 
  }, 
 
  //Added by Jammi Dee 12/08/2012
  svarWriteToRegistryNoEntitiesResult: function(inSender, inDeprecated) {
      try {
		  
          this.svarWriteToRegistryEdition.setValue("input.pAppId","NA"); 
          this.svarWriteToRegistryEdition.setValue("input.pEntity","NA"); 
          this.svarWriteToRegistryEdition.setValue("input.pUserId","NA"); // Application wide registry 
          this.svarWriteToRegistryEdition.setValue("input.pVarname","EDITION"); // Background URL
          this.svarWriteToRegistryEdition.setValue("input.pVarvalue",this.txtEdition.getValue("dataValue"));
          this.svarWriteToRegistryEdition.update();  
          
          alert("License codes has been saved!");		  
          
          
	  } catch(e) {
		  console.error('ERROR IN svarWriteToRegistryNoEntitiesResult: ' + e); 
	  } 
  }, 
  
  
  
  btnImportLicClick: function(inSender) {
	  try {
		  
          
		  
	  } catch(e) {
		  console.error('ERROR IN btnImportLicClick: ' + e); 
	  } 
  },
  
  //Added by Jammi Dee 11/25/2012
  svarReadFromRegistryLicToResult: function(inSender, inDeprecated) {
	  try {
		  
          this.varLicTo.setValue("dataValue", inSender.getValue("dataValue") );
          this.txtLicTo.setValue("dataValue", inSender.getValue("dataValue") );
		  
	  } catch(e) {
		  console.error('ERROR IN svarReadFromRegistryLicToResult: ' + e); 
	  } 
  },
  svarReadFromRegistryConUsersResult: function(inSender, inDeprecated) {
	  try {
		  
          this.txtConcurrentUsers.setValue("dataValue", inSender.getValue("dataValue") );
		  
	  } catch(e) {
		  console.error('ERROR IN svarReadFromRegistryConUsersResult: ' + e); 
	  } 
  },
  svarReadFromRegistryNoUsersResult: function(inSender, inDeprecated) {
	  try {
		  
          this.txtNoUsers.setValue("dataValue", inSender.getValue("dataValue") );
		  
	  } catch(e) {
		  console.error('ERROR IN svarReadFromRegistryNoUsersResult: ' + e); 
	  } 
  },
  svarReadFromRegistryNoEntitiesResult: function(inSender, inDeprecated) {
	  try {
		  
          this.txtNoEntity.setValue("dataValue", inSender.getValue("dataValue") );
		  
	  } catch(e) {
		  console.error('ERROR IN svarReadFromRegistryNoEntitiesResult: ' + e); 
	  } 
  },

  //Added by Jammi Dee 12/08/2012
  svarReadFromRegistryEditionResult: function(inSender, inDeprecated) {
      try {
		  
          this.txtEdition.setValue("dataValue", inSender.getValue("dataValue") );
		  
	  } catch(e) {
          
		  console.error('ERROR IN svarReadFromRegistryEditionResult: ' + e); 
          alert( 'ERROR IN svarReadFromRegistryEditionResult: ' + e );
	  } 
  },

  //Added by Jammi Dee 11/25/2012
  btnExportLicClick: function(inSender) {
	  try {
		  
          
          this.svarExportLicense.setValue("input.pLicTo",this.txtLicTo.getValue("dataValue"));
          this.svarExportLicense.setValue("input.pConUsers",this.txtConcurrentUsers.getValue("dataValue"));
          this.svarExportLicense.setValue("input.pNoUsers",this.txtNoUsers.getValue("dataValue"));
          this.svarExportLicense.setValue("input.pNoEntity",this.txtNoEntity.getValue("dataValue"));
          this.svarExportLicense.setValue("input.pEdition",this.txtEdition.getValue("dataValue"));
          this.svarExportLicense.update();            
          
		  
	  } catch(e) {
		  console.error('ERROR IN btnExportLicClick: ' + e); 
	  } 
  },

  //Added by Jammi Dee 11/25/2012
  svarExportLicenseResult: function(inSender, inDeprecated) {
      try {
          
          var UUID = app.uuid4();		  
          
          //window.open( "http://" + window.location.hostname + ":" + window.location.port + "/" + app.varAppContext.getValue("dataValue") + "/" + inSender.getValue("dataValue") + "?pagemode=none#toolbar=0&statusbar=0messages=0&navpanes=0&jmdid=" + UUID , 'resizable,scrollbars' );
          alert( "http://" + window.location.hostname + ":" + window.location.port + "/" + app.varAppContext.getValue("dataValue") + "/" + inSender.getValue("dataValue") );
		  
	  } catch(e) {
          
		  console.error('ERROR IN svarExportLicenseResult: ' + e); 
          alert( 'ERROR IN svarExportLicenseResult: ' + e );
          
	  } 
  },


  //Added by Jammi Dee 11/30/2012
  btnTestLicClick: function(inSender) {
	  try {

          //UnGenerate key here.
          this.svarUnGenerateKeyConUsers.setValue("input.pRegSource",  "CONCURRENTUSERS" );
          this.svarUnGenerateKeyConUsers.update();
		  
	  } catch(e) {
          
		  console.error('ERROR IN btnTestLicClick: ' + e);
          alert( 'ERROR IN btnTestLicClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 11/30/2012
  svarUnGenerateKeyConUsersResult: function(inSender, inDeprecated) {
	  try {
          
          this.lblConcurrentUsers.setCaption( inSender.getValue("dataValue") );
          
          //UnGenerate key here.
          this.svarUnGenerateKeyNoUsers.setValue("input.pRegSource",  "NOUSERS" );
          this.svarUnGenerateKeyNoUsers.update();          
		  
	  } catch(e) {
		  console.error('ERROR IN svarUnGenerateKeyConUsersResult: ' + e); 
	  } 
  },
  svarUnGenerateKeyNoUsersResult: function(inSender, inDeprecated) {
	  try {
		  
          this.lblNoUsers.setCaption( inSender.getValue("dataValue") );
          
          this.svarUnGenerateKeyNoEntities.setValue("input.pRegSource",  "NOENTITIES" );
          this.svarUnGenerateKeyNoEntities.update();             
          
		  
	  } catch(e) {
		  console.error('ERROR IN svarUnGenerateKeyNoUsersResult: ' + e); 
	  } 
  },
  svarUnGenerateKeyNoEntitiesResult: function(inSender, inDeprecated) {
	  try {
		  
          this.lblNoEntity.setCaption( inSender.getValue("dataValue") );
          
          this.svarUnGenerateKeyEdition.setValue("input.pRegSource",  "EDITION" );
          this.svarUnGenerateKeyEdition.update();              
		  
	  } catch(e) {
		  console.error('ERROR IN svarUnGenerateKeyNoEntitiesResult: ' + e); 
	  } 
  },

  //Added by Jammi Dee 12/08/2012
  svarUnGenerateKeyEditionResult: function(inSender, inDeprecated) {
	  try {
		  
           this.lblEdition.setCaption( inSender.getValue("dataValue") );
		  
	  } catch(e) {
		  console.error('ERROR IN svarUnGenerateKeyEditionResult: ' + e); 
	  } 
  },
  
  //Added by Jammi Dee 04/14/2012
  pic_urlKeyClick: function(inSender) {
      try {
		  
           this.ddUrlPassword.show();
		  
	  } catch(e) {
		  console.error('ERROR IN pic_urlKeyClick: ' + e); 
	  }       
  },
  
  
  btnSetUrlSetClick: function(inSender) {
      try {

          this.svarGenerateURLPass.setValue("input.pKey",        this.txtUrlPassKey.getValue("dataValue") );
          this.svarGenerateURLPass.setValue("input.pKeySource",  this.txtUrlPassword.getValue("dataValue") );          
          this.svarGenerateURLPass.update();    
		  
	  } catch(e) {
		  console.error('ERROR IN btnSetUrlSetClick: ' + e); 
	  }         
	
  },
  
  svarGenerateURLPassResult: function(inSender, inDeprecated) {
      try {

        alert( "URL Password has been set!" );  
        
        this.ddUrlPassword.hide();

	  } catch(e) {
		  console.error('ERROR IN svarGenerateURLPassResult: ' + e); 
	  }
  },

  //Added by Jammi Dee 05/05/2013
  pic_backClick: function(inSender) {
      try {
          
          app.pdWaitLoadPage.show();
          this.navPgMainConfig.update();
          
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
	_end: 0
});