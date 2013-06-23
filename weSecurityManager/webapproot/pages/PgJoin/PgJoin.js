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
 * Special thanks to Francis Limbo and Rea Javier for the initial codes
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
 * 
*/

/*

 Created by Jammi Dee 04/15/2012
 
 This is a sample page that can used as template
*/

dojo.declare("PgJoin", wm.Page, {
	"preferredDevice": "desktop",
    
    start: function() {
        try {
            
            // Added by JMD 04/11/2012
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
            this.lblUserInfo.setCaption("N/A");
            this.lblTitle.setCaption("Wave ERP Template System 1.0");
            this.lblEntity.setCaption("N/A");
            app.varModuleId.setValue("dataValue","MDLJOIN");
            
            // Added by Jammi Dee 05/01/2012
            // Initially hide the Joining button until the right password is entered.
            this.btnPropertyAction.setShowing(false);
            
            // Added by Jammi Dee 05/12/2012
            this.pnlEntity.setShowing(false);
            this.pnlJoinButton02.setShowing(false);
            
            // Initialize the application - Jammi Dee 03/25/2012
            this.initApplication();   
            
            // Added by Jammi Dee 06/01/2012
            // Read the property file for information
            this.svarReadFromPropertyDriverClass.setValue("input.pKey","dbwaveerp.driverClassName"); 
            this.svarReadFromPropertyDriverClass.update();
            
            this.svarReadFromPropertyUsername.setValue("input.pKey","dbwaveerp.username"); 
            this.svarReadFromPropertyUsername.update();   
            
            this.svarReadFromPropertyConnectionUrl.setValue("input.pKey","dbwaveerp.connectionUrl"); 
            this.svarReadFromPropertyConnectionUrl.update();
            
            this.svarReadFromPropertyPassword.setValue("input.pKey","dbwaveerp.password"); 
            this.svarReadFromPropertyPassword.update();   
            
            this.svarReadFromPropertyNamingStrategy.setValue("input.pKey","dbwaveerp.reverseNamingStrategy"); 
            this.svarReadFromPropertyNamingStrategy.update(); 
            
            this.svarReadFromPropertyDialect.setValue("input.pKey","dbwaveerp.dialect"); 
            this.svarReadFromPropertyDialect.update(); 
            
            app.pdWaitLoadPage.hide();
            
        } catch (e) {
            app.toastError(this.name + ".start() Failed: " + e.toString());
        }
        
    },
    
  // Added by Jammi Dee 06/01/2012
  svarReadFromPropertyDriverClassResult: function(inSender, inDeprecated) {
      try {
		  
		  this.txtDriverClass.setValue("dataValue", inSender.getValue("dataValue"));
          
	  } catch(e) {
		  console.error('ERROR IN svarReadFromPropertyDriverClassResult: ' + e); 
	  } 
  },

  svarReadFromPropertyUsernameResult: function(inSender, inDeprecated) {
      try {
		  
		  this.txtUsername.setValue("dataValue", inSender.getValue("dataValue"));
          
	  } catch(e) {
		  console.error('ERROR IN svarReadFromPropertyUsernameResult: ' + e); 
	  } 
  },
  svarReadFromPropertyConnectionUrlResult: function(inSender, inDeprecated) {
	  try {
		  
		  this.txtConnectionUrl.setValue("dataValue", inSender.getValue("dataValue"));
          
	  } catch(e) {
		  console.error('ERROR IN svarReadFromPropertyConnectionUrlResult: ' + e); 
	  } 
  },
  svarReadFromPropertyPasswordResult: function(inSender, inDeprecated) {
	  try {
		  
          this.txtPasswd.setValue("dataValue", inSender.getValue("dataValue"));
		  
	  } catch(e) {
		  console.error('ERROR IN svarReadFromPropertyPasswordResult: ' + e); 
	  } 
  },
  svarReadFromPropertyNamingStrategyResult: function(inSender, inDeprecated) {
	  try {
		  
          this.txtNamingStrat.setValue("dataValue", inSender.getValue("dataValue"));
		  
	  } catch(e) {
		  console.error('ERROR IN svarReadFromPropertyNamingStrategyResult: ' + e); 
	  } 
  },
  svarReadFromPropertyDialectResult: function(inSender, inDeprecated) {
	  try {
		  
          this.txtDialect.setValue("dataValue", inSender.getValue("dataValue"));
		  
	  } catch(e) {
		  console.error('ERROR IN svarReadFromPropertyDialectResult: ' + e); 
	  } 
  },


    /*
     * 03/25/2012 - Jammi Dee
     * Initialize the template variables here
    */
    initApplication: function() {
        
        this.lblTitle.setCaption("Join : Wave ERP" );
        this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
    
    },  

  btnJoinClick: function(inSender) {
	  try {

            // added by Jammi Dee 04/21/2012
            // Read the global password for joining the Wave ERP
            this.svarReadFromRegistryJoinPass.setValue("input.pAppId","NA"); 
            this.svarReadFromRegistryJoinPass.setValue("input.pEntity","NA"); 
            this.svarReadFromRegistryJoinPass.setValue("input.pUserId","NA");  
            this.svarReadFromRegistryJoinPass.setValue("input.pVarname","JOINPASS"); 
            this.svarReadFromRegistryJoinPass.update(); 
            
            // Added by Jammi Dee 05/01/2012
            // Read the encrypted Join Password
            this.svarReadFromRegistryJoinPassEnc.setValue("input.pAppId","NA"); 
            this.svarReadFromRegistryJoinPassEnc.setValue("input.pEntity","NA"); 
            this.svarReadFromRegistryJoinPassEnc.setValue("input.pUserId","NA");  
            this.svarReadFromRegistryJoinPassEnc.setValue("input.pVarname","JOINPASSENC"); 
            this.svarReadFromRegistryJoinPassEnc.update();            
            
            
		  
	  } catch(e) {
		  console.error('ERROR IN btnJoinClick: ' + e); 
	  } 
  },
  
  // Addded by Jammi Dee 04/21/2012
  // Check is the passed password is correct.
  svarReadFromRegistryJoinPassResult: function(inSender, inDeprecated) {
	  try {
		  
          if(inSender.getValue("dataValue") == this.txtPassword.getValue("dataValue")){
              
                // alert( this.txtPassword.getValue("dataValue") );
                // Register the Application here
                // Insert all Application Rights here
                
          } else {
              
              alert( "Your joining password does not match the Global Joining Password. Please ask your administrator." );
              
          }
		  
	  } catch(e) {
		  console.error('ERROR IN svarReadFromRegistryJoinPassResult: ' + e); 
	  } 
  },
  
  // Added by Jammi Dee 05/01/2012
  svarReadFromRegistryJoinPassEncResult: function(inSender, inDeprecated) {
	  try {
          
          // Keep the retrieved encrypted password
          this.varJoinPassEnc.setValue("dataValue", inSender.getValue("dataValue") );
          
          // Encrypt the plain text password from the user
          this.svarEncryptMD5.setValue("input.code",this.txtPassword.getValue("dataValue") );
          this.svarEncryptMD5.update();     
		  
	  } catch(e) {
		  console.error('ERROR IN svarReadFromRegistryJoinPassEncResult: ' + e); 
	  } 
  },
  
  // Added by Jammi Dee 05/01/2012
  // Compare the encrypted password with the registry encrypted password
  svarEncryptMD5Result: function(inSender, inDeprecated) {
	  try {
		  
          if ( inSender.getValue("dataValue") == this.varJoinPassEnc.getValue("dataValue") ) {
              
              this.btnPropertyAction.setShowing(true);
              this.pnlEntity.setShowing(true);
              this.pnlJoinButton02.setShowing(true);
              
              // alert( "The encrypted password matched." );
              
          } else {
              
              alert( "Your encrypted joining password does not match. Please ask your administrator." );
              
          }
		  
	  } catch(e) {
          
		  console.error('ERROR IN svarEncryptMD5Result: ' + e); 
          
	  } 
  },
  
  // Added by Jammi Dee 06/02/2012
  btnPropertyActionClick: function(inSender) {
	  try {

            this.svarWriteToPropertyUsername.setValue("input.pKey","dbwaveerp.username" );
            this.svarWriteToPropertyUsername.setValue("input.pValue",this.txtUsername.getValue("dataValue") );
            this.svarWriteToPropertyUsername.update();

            this.svarWriteToPropertyConnectionUrl.setValue("input.pKey","dbwaveerp.connectionUrl" );
            this.svarWriteToPropertyConnectionUrl.setValue("input.pValue",this.txtConnectionUrl.getValue("dataValue") );
            this.svarWriteToPropertyConnectionUrl.update();

            this.svarWriteToPropertyPasswd.setValue("input.pKey","dbwaveerp.password" );
            this.svarWriteToPropertyPasswd.setValue("input.pValue",this.txtPasswd.getValue("dataValue") );
            this.svarWriteToPropertyPasswd.update();


	  } catch(e) {
          
		  console.error('ERROR IN btnPropertyActionClick: ' + e); 
          
	  } 
  },
  svarWriteToPropertyUsernameResult: function(inSender, inDeprecated) {
      
	  try {

            alert( inSender.getValue("dataValue") );
		  
	  } catch(e) {
          
		  console.error('ERROR IN svarWriteToPropertyUsernameResult: ' + e); 
          
	  } 
  },
  
  //Added by Jammi Dee 08/20/2012
  btnRegisterClick: function(inSender) {
	  try {
		  
          //If the key is a special code, a key is generated by the system else
          //the key being passed is simply saved.
          this.svarMakeLicenseKey.setValue("input.pKey",        this.txtRegisterKey.getValue("dataValue") );
          this.svarMakeLicenseKey.setValue("input.pKeySource",  window.location.hostname + ":" + window.location.port );
          this.svarMakeLicenseKey.update();
		  
	  } catch(e) {
		  console.error('ERROR IN btnRegisterClick: ' + e); 
	  } 
  },
  svarMakeLicenseKeyResult: function(inSender, inDeprecated) {
	  try {

          if( inSender.getValue("dataValue") === "OK" ){
              
              app.toastSuccess("License Key has been successfully saved for " + window.location.hostname + ":" + window.location.port + ".");
              
              //Update the missing folders if any.
              this.svarCreateMissingFolder.update();              
              
          } else {
              
              alert( "The KEY for this site is : " + inSender.getValue("dataValue") );
              
          }
		  
	  } catch(e) {
		  console.error('ERROR IN svarMakeLicenseKeyResult: ' + e); 
	  } 
  },
  
  // Added by Jammi Dee 12/20/2012
  btnJoin02Click: function(inSender) {
	  try {
          
           // Added by Jammi Dee 12/20/2012
           if ( this.txtEntity.getValue("dataValue") === "NONE" ) {
               
                alert("Entity to Join To is required.");   
                   
           } else {
               
                var response = confirm("Warning! This action deletes existing data in the database! Are you sure?");
            
                if (response) {
                    
                    this.svarAppJoinToERP.setValue("input.pAppId", app.varAppId.getValue("dataValue") );
                    this.svarAppJoinToERP.setValue("input.pEntityId", this.txtEntity.getValue("dataValue") ); // added 05/12/2012
                    this.svarAppJoinToERP.setValue("input.pDesc", app.varAppName.getValue("dataValue") );
                    this.svarAppJoinToERP.update();     
                }    
           }
           
          
	  } catch(e) {
          
		  console.error('ERROR IN btnJoin02Click: ' + e);
          alert( 'ERROR IN btnJoin02Click: ' + e );
          
	  } 
  },
  _end: 0
});