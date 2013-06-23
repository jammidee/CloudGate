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


dojo.declare("PgWaiting", wm.Page, {
	"preferredDevice": "desktop",
    start: function() {
        try {
            
             //========================================
            //Added by Jammi Dee 12/18/2012
            //Get the passed parameter to the system.
            //========================================
            var page_name=this.getParam('page');
            if(page_name === "") page_name = "NOPARAM";       
            
            this.lblFooter.setCaption( "Cloud Gate Systems." );
            
            //Detect the Browser to determine device
            //this.getMobileDevice();            
            
            
            app.varModuleId.setValue("dataValue","MDLWAITING");
            
            //Added by Jammi Dee 09/11/2012
            if( window.location.hostname === "localhost"){
                
                // Execute authetication
                //Ignore local host
                this.svarStrApp01.update();                
                
            } else {
                
              //Added by Jammi Dee 09/11/2012
              //Get the current connection information
              this.svarGenerateKeyNoKey.setValue("input.pKeySource", window.location.hostname + ":" + window.location.port );
              this.svarGenerateKeyNoKey.update();                   
                
            }
            

        } catch (e) {
            app.toastError(this.name + ".start() Failed: " + e.toString());
        }
    },

    //Added by Jammi Dee 12/18/2012
    /**
     * This is an important feature that will be used by all apps.
    */
    getParam: function (param) {
        
        name = param.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
        
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp( regexS );
        var results = regex.exec( window.location.href );
        
        if( results === null )
            return "";
        else
            return results[1];
    },
    
    /**
     * ====================================================
     * Added by Jammi Dee 03/23/2013
     * This will pre-detect the browser so that later, the
     * system can adjust.
     * ====================================================
    */
    getMobileDevice: function ( ) {
        
        var isMobile = navigator.userAgent.match(/mobile|android/i) || "onorientationchange" in window || navigator.msMaxTouchPoints > 0;
        
        var device;
    
        if (!isMobile) {
        
            device = "desktop";
       
        } else {
        
            device =  (window.screen && (window.screen.width > 450 && window.screen.height > 450)) ? "tablet" : "phone";
       
        }        
     
        //Set the mobile device here
        app.varDevice.setValue("dataValue", device );
     
        switch(device) {
            case "desktop":
            
                //this.pageContainer1.setPageName("MainDesktop");
                break;
                
            case "tablet":
            
                //this.pageContainer1.setPageName("MainTablet");
                break;
                
            case "phone":
            
                //this.pageContainer1.setPageName("MainPhone");
                alert("This application GUI is not yet designed on small devices! - " + device);
                break;
                
        }     
     
        
    },    


  //Added by Jammi Dee 09/11/2012
  svarGenerateKeyNoKeyResult: function(inSender, inDeprecated) {
      try {
          
          //Get the value of the password
          this.varPassword.setValue("dataValue", inSender.getValue("dataValue") );
          
          //Check for other license key
          this.svarUrlAccess.update();   

	  } catch(e) {
		  console.error('ERROR IN svarGenerateKeyNoKeyResult: ' + e); 
	  } 
  },

  //Added by Jammi Dee 09/11/2012
  svarUrlAccessResult: function(inSender, inDeprecated) {
      try {
		  
            var numRows = inSender.getCount();
            var imatch = 0;
            
            if (numRows > 0) {
                
                for (i=0; i < numRows; i++) {
                    
                    var aRow    = inSender.getItem(i);
                    var upasswd = aRow.data.urlpassword;
                    var uurl    = aRow.data.urlid;
                    
                    //Compare the strings
                    if( window.location.hostname + ":" + window.location.port === uurl &&  this.varPassword.getValue("dataValue") === upasswd ){
                        //alert(window.location.hostname + ":" + window.location.port + " = " + uurl + "|" + this.varPassword.getValue("dataValue") + " = " + upasswd );
                        
                        imatch = imatch + 1;
                        
                    }
                    
                } 
            
                //Check for match
                if( parseInt(imatch, 10) > 0 ){
            
                    app.varModuleId.setValue("dataValue","MDLWAITING");
            
                    // ( 1 ) Execute authetication and detect AUTOLOGIN
                    this.svarStrApp01.update();                     
                    
                } else {
                    
                    //No License 
                    this.navPgNoLicenseKey.update();
                    
                }
                
            } else {
                
                //No License
                this.navPgNoLicenseKey.update();
                
            }

	  } catch(e) {
		  console.error('ERROR IN svarUrlAccessResult: ' + e); 
	  } 
  },

    svarStrApp01Result: function(inSender, inDeprecated) {
        try {
            
            // Check if during the authentication we are in autlogin mode
            if (inSender.getValue("dataValue") == "autologin" ) {
                // Login, we are ready
                this.svarGetUserID.update();
                //alert(inSender.getValue("dataValue"));
            } else {
                
                // Display the normal login page
                this.navLogin.update();
                //alert(inSender.getValue("dataValue"));
            }

        } catch (e) {
            console.error('ERROR IN svarStrApp01Result: ' + e);
        }
    },
    svarGetUserIDResult: function(inSender, inDeprecated) {
	  try {
          app.varUserId.setValue("dataValue",               this.svarGetUserID.getValue("dataValue"));
          this.svarGetUserInfo.setValue("input.pUserId",    this.svarGetUserID.getValue("dataValue"));
          this.svarGetUserInfo.update();

	  } catch(e) {
		  console.error('ERROR IN svarGetUserIDResult: ' + e); 
	  } 
  },
  svarGetUserInfoResult: function(inSender, inDeprecated) {
	  try {
           var registry;
                
           registry = this.svarGetUserInfo.getValue("dataValue").split("|");
           
           app.varEntity.setValue("dataValue",      registry[0]);
           app.varEmail.setValue("dataValue",       registry[1]);
           app.varUserInfo.setValue("dataValue",    registry[2]);
           app.varUserId.setValue("dataValue",      registry[3]);
           app.varPassword.setValue("dataValue",    registry[4]);
           app.varUsername.setValue("dataValue",    registry[5]);
           //alert(app.varEntity.getValue("dataValue"));
          
           app.svarGetRole.setValue("input.pUserId",    app.varUserId.getValue("dataValue"));
           app.svarGetRole.setValue("input.pEntityId",  app.varEntity.getValue("dataValue"));
           app.svarGetRole.update();
           //alert(app.varFlag.getValue("dataValue"));       
          //app.varUserInfo.setValue("dataValue",this.svarGetUserInfo.getValue("dataValue"));
		  //this.navManageUser.update();
          
          app.svarResetRegistry.setValue("input.pEntity",       "ENTITY");
          app.svarResetRegistry.setValue("input.pPassword",     "PASSWORD");
          app.svarResetRegistry.setValue("input.pUserid",       "USERID");
          app.svarResetRegistry.setValue("input.pUsername",     "USERNAME");
          app.svarResetRegistry.update();
		  
	  } catch(e) {
		  console.error('ERROR IN svarGetUserInfoResult: ' + e); 
	  } 
  },


  _end: 0
});