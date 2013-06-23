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


dojo.declare("PgLogin", wm.Page, {
	"preferredDevice": "desktop",
	start: function() {
		try {
            
            app.varModuleId.setValue("dataValue","MDLLOGIN");
			//alert(app.varAppId.getValue("dataValue") + "-" +  app.varModuleId.getValue("dataValue"));
            this.lblErrorMsg.setCaption("");
            
            // Added by Jammi Dee 06/30/2012
            this.bDetect();            
            
            // Added by Jammi Dee 05/15/2012
            // This is how a Counter is read
            
            /*this.svarReadCounter.setValue("input.pPrefix",app.varAppPrefix.getValue("dataValue"));
            this.svarReadCounter.setValue("input.pKey", "LOG" );
            this.svarReadCounter.setValue("input.pAppId",app.varAppId.getValue("dataValue")); 
            this.svarReadCounter.setValue("input.pEntity",app.varEntity.getValue("dataValue")); 
            this.svarReadCounter.update(); */   
            this.lblCounterLabel.setShowing(false);
            this.lblCounter.setShowing(false);      
            
            //-------------------------------
            // READ data for the Site Phrase
            // Added by Jammi Dee 08/19/2012
            //-------------------------------
            this.svarReadFromRegistrySitePhrase.setValue("input.pAppId","NA"); 
            this.svarReadFromRegistrySitePhrase.setValue("input.pEntity","NA"); 
            this.svarReadFromRegistrySitePhrase.setValue("input.pUserId","NA");  
            this.svarReadFromRegistrySitePhrase.setValue("input.pVarname","SITEPHRASE"); 
            this.svarReadFromRegistrySitePhrase.setValue("input.pDefa","Welcome to Cloud Gate Systems!"); 
            this.svarReadFromRegistrySitePhrase.update(); 
            
            //-------------------------------
            // READ data for the OO Integration
            // Added by Jammi Dee 05/23/2013
            //-------------------------------
            this.svarReadFromRegistryJRXMLFormat.setValue("input.pAppId", "NA"); 
            this.svarReadFromRegistryJRXMLFormat.setValue("input.pEntity",app.varEntity.getValue("dataValue") ); 
            this.svarReadFromRegistryJRXMLFormat.setValue("input.pUserId","NA");  
            this.svarReadFromRegistryJRXMLFormat.setValue("input.pVarname","JRXMLFORMAT"); 
            this.svarReadFromRegistryJRXMLFormat.setValue("input.pDefa","PDF"); 
            this.svarReadFromRegistryJRXMLFormat.update();            
            
            //Added by Jammi Dee 08/19/2012
            this.svarBrowserList.setValue("input.pEntity","%"); 
            this.svarBrowserList.update();  
            
            // Check for database direct connectivity
            this.svarTestDb.update();
            
            app.pdWaitLoadPage.hide();
            
		} catch(e) {
            
			app.toastError(this.name + ".start() Failed: " + e.toString()); 
            
		}
        
        // ( 1 ) Initialize the application - Jammi Dee 03/25/2012
        this.initApplication();            
	},

  // Added by Jammi Dee 05/26/2012
  svarReadCounterResult: function(inSender, inDeprecated) {
      try {

          this.lblCounter.setCaption( inSender.getValue("dataValue") );
		  
	  } catch(e) {
		  console.error('ERROR IN svarReadCounterResult: ' + e); 
	  } 
  },

  // Added by Jammi Dee 05/26/2012
  svarTestDbResult: function(inSender, inDeprecated) {
      try {
		  
          if ( inSender.getValue("dataValue") !== "SUCCESS"){
              
              this.lblErrorMsg.setCaption("Direct DB configuration is not properly set.");
              
          }
		  
	  } catch(e) {
		  console.error('ERROR IN svarTestDbResult: ' + e); 
	  } 
  },
  
  //Added by Jammi Dee
  svarBrowserListResult: function(inSender, inDeprecated) {
      try {
		  
          var supported = true;
          
          if( inSender.getCount() > 0 ){
              
              //Once there is a count, check if supported
              supported = false;
              
              for(i=0; i < inSender.getCount(); i++  ){
                  
                  var aRow = inSender.getItem(i);
                  if(aRow.data.browseid === app.varBrowserName.getValue("dataValue") ){
                      
                      supported = true;
                      
                  }
                  
              }
              
          }      
		  
          if(supported === false){
              
              alert("This browser version is not supported.");
              
          }
          
	  } catch(e) {
          
		  console.error('ERROR IN svarBrowserListResult: ' + e);
          alert( 'ERROR IN svarBrowserListResult: ' + e );
          
	  } 
  },  
  
    /*
     * 03/25/2012 - Jammi Dee
     * Initialize the template variables here
    */
    // ( 1 )
    initApplication: function() {

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        
        app.varAppName.setValue("dataValue",        "Wave ERP Security Manager");
        //app.varAppVersion.setValue("dataValue",     "v1.6941");
        app.varAppVersion.setValue("dataValue",     "v" + this.app.projectVersion + "." + this.app.projectSubVersion);
        app.varAppCopyright.setValue("dataValue",   "Cloud Gate Systems Copyright " + yyyy);
        
        /*
            varAppPrefix - a 3 character string  that will be prepended in variables that belongs to an application only
            Example of these variables are the logging variables, customised page links per apps
        */
        app.varAppPrefix.setValue("dataValue", "WSM"); // added by JMD 04/14/2012 Wave ERP Template
        
        /*
            varAppContext - Must be the same as the project name and is case-sensitive. Will be used by the
            system in referencing files in a browser..
        */
        app.varAppContext.setValue("dataValue", "weSecurityManager"); // added by JMD 06/03/2012       
        
        /*
        
            varAppId - represents a unique ID for the application. Every application must have its
            own unique ID in ordder to identify itself in the ERP.
            This ID is also used to retrieve user rights.
        
        */
        //app.varAppId.setValue("dataValue", "SECMANAGER"); // added by JMD 04/15/2012 Wave ERP Template
        app.varAppId.setValue("dataValue", "WSMUSRMGT"); // added by JMD 04/15/2012 Wave ERP Template
        
        /*
        
            varLog4jFile - hold the html filename where log4j will write its logs. The file will be created
            at the location /customdata/temp folder of the system
        
        */
        app.varLog4jFile.setValue("dataValue", "weSecurityManager.html"); // added by JMD 06/03/2012 File where log4j will write to.        
        
        // The header standard messges
        this.lblTitle.setCaption(app.varAppName.getValue("dataValue") + " : " + app.varAppVersion.getValue("dataValue"));
        this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
    
    },  

	btnLoginClick: function(inSender) {
	  try {
          
		  this.svarAuthenticate.update();
          
	      this.txtUserId.setValue("disabled",   true);
          this.txtPassword.setValue("disabled", true);
          this.btnLogin.setValue("disabled",    true); 
          
      } catch(e) {
		  console.error('ERROR IN btnLoginClick: ' + e); 
	  } 
  },
  svarAuthenticateResult: function(inSender, inDeprecated) {
	  try {
		  if (this.svarAuthenticate.getValue("dataValue") == "FAIL" ){
                this.lblErrorMsg.setCaption("Failed accessing the database...");
                
                app.svarLogging.setValue("input.pUserId",   this.txtUserId.getValue("dataValue"));
                app.svarLogging.setValue("input.pMsg",      "Failed accessing the database");
                app.svarLogging.setValue("input.pModuleId", app.varModuleId.getValue("dataValue"));
                app.svarLogging.setValue("input.pAppId",    app.varAppId.getValue("dataValue"));
                app.svarLogging.setValue("input.pProcess",  "LOGIN");
                app.svarLogging.setValue("input.pScopeId",  "NA");
                app.svarLogging.setValue("input.pStype",    "USER");
                app.svarLogging.setValue("input.pEntity",   "NA");
                app.svarLogging.update();
                
          }else if (this.svarAuthenticate.getValue("dataValue") == "INVALID") {
                this.lblErrorMsg.setCaption("Invalid User ID / Password...");
                
                app.svarLogging.setValue("input.pUserId",   this.txtUserId.getValue("dataValue"));
                app.svarLogging.setValue("input.pMsg",      "Failed to Login");
                app.svarLogging.setValue("input.pModuleId", app.varModuleId.getValue("dataValue"));
                app.svarLogging.setValue("input.pAppId",    app.varAppId.getValue("dataValue"));
                app.svarLogging.setValue("input.pProcess",  "LOGIN");
                app.svarLogging.setValue("input.pScopeId",  "NA");
                app.svarLogging.setValue("input.pStype",    "USER");
                app.svarLogging.setValue("input.pEntity",   "NA");
                app.svarLogging.update();
                
          }else {
              
                // successfull login
                var registry;                
                registry = this.svarAuthenticate.getValue("dataValue").split("|");
                app.varUserInfo.setValue("dataValue",   registry[2]);
                app.varUserId.setValue("dataValue",     this.txtUserId.getValue("dataValue"));
                app.varPassword.setValue("dataValue",   this.txtPassword.getValue("dataValue"));
                app.varEntity.setValue("dataValue",     registry[0]);
                app.varEmail.setValue("dataValue",      registry[1]);
                //alert(app.varEntity.getValue("dataValue"));
                //alert(this.txtPassword.getValue("dataValue"));
                //alert(registry[0] + "|" + registry[1]);
                //alert(entityid);
                app.svarLogging.setValue("input.pUserId",   app.varUserId.getValue("dataValue"));
                app.svarLogging.setValue("input.pMsg",      "Login into system");
                app.svarLogging.setValue("input.pModuleId", app.varModuleId.getValue("dataValue"));
                app.svarLogging.setValue("input.pAppId",    app.varAppId.getValue("dataValue"));
                app.svarLogging.setValue("input.pProcess",  "LOGIN");
                app.svarLogging.setValue("input.pScopeId",  "NA");
                app.svarLogging.setValue("input.pStype",    "USER");
                app.svarLogging.setValue("input.pEntity",   app.varEntity.getValue("dataValue") );
                app.svarLogging.update();
                
                // LONG PROCESSING GOES HERE
                this.svarCreateSession.setValue("input.pEntityId",      app.varEntity.getValue("dataValue"));
                this.svarCreateSession.setValue("input.pAppId",         app.varAppId.getValue("dataValue")); 
                this.svarCreateSession.setValue("input.pUserId",        app.varUserId.getValue("dataValue"));
                this.svarCreateSession.setValue("input.pUserName",      app.varUserInfo.getValue("dataValue"));
                this.svarCreateSession.update();                   
                 
                // Update the counter
                this.svarUpdateCounter.setValue("input.pPrefix",    app.varAppPrefix.getValue("dataValue"));
                this.svarUpdateCounter.setValue("input.pKey",       "LOG" );
                this.svarUpdateCounter.setValue("input.pAppId",     app.varAppId.getValue("dataValue")); 
                this.svarUpdateCounter.setValue("input.pEntity",    app.varEntity.getValue("dataValue")); 
                this.svarUpdateCounter.update(); 

                //this.dgUserRights.dataSet.update();
                //this.navAuthenticate.update();
                
          }
          
          this.txtUserId.setValue("disabled",   false);
          this.txtPassword.setValue("disabled", false);
          this.btnLogin.setValue("disabled",    false);
          
	  } catch(e) {
          
		  console.error('ERROR IN svarAuthenticateResult: ' + e);
          alert( 'ERROR IN svarAuthenticateResult: ' + e );
          
	  } 
  },
  txtPasswordEnterKeyPress: function(inSender) {
	  try {
          
            this.btnLogin.click();	
            
	  } catch(e) {
          
		  console.error('ERROR IN txtPasswordEnterKeyPress: ' + e);
          alert( 'ERROR IN txtPasswordEnterKeyPress: ' + e );
          
	  } 
  },
  
  /**
   * Added by Jammi Dee 06/30/2012
   * This is a browser detection script. I just copied it at
   * http://www.quirksmode.org/js/detect.html
   * I modified the script so that the result of this script can be used by
   * Wave ERP.
  */
  bDetect: function(){
      
        var BrowserDetect = {
            init: function () {
                this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
                this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
		        this.OS = this.searchString(this.dataOS) || "an unknown OS";
	        },
            
	        searchString: function (data) {
		        for (var i=0;i<data.length;i++)	{
			        var dataString = data[i].string;
			        var dataProp = data[i].prop;
			        this.versionSearchString = data[i].versionSearch || data[i].identity;
			        if (dataString) {
				        if (dataString.indexOf(data[i].subString) != -1)
					        return data[i].identity;
			        }
			        else if (dataProp)
				        return data[i].identity;
		            }
	        },
            
	        searchVersion: function (dataString) {
		        var index = dataString.indexOf(this.versionSearchString);
		        if (index == -1) return;
		            return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	        },
            
	        dataBrowser: [
		        {
			        string: navigator.userAgent,
			        subString: "Chrome",
			        identity: "Chrome"
                },
                {   string: navigator.userAgent,
			        subString: "OmniWeb",
			        versionSearch: "OmniWeb/",
			        identity: "OmniWeb"
		        },
		        {
			        string: navigator.vendor,
			        subString: "Apple",
			        identity: "Safari",
			        versionSearch: "Version"
		        },
		        {
			        prop: window.opera,
			        identity: "Opera",
			        versionSearch: "Version"
		        },
		        {
			        string: navigator.vendor,
			        subString: "iCab",
			        identity: "iCab"
		        },
		        {
			        string: navigator.vendor,
			        subString: "KDE",
			        identity: "Konqueror"
		        },
		        {
			        string: navigator.userAgent,
			        subString: "Firefox",
			        identity: "Firefox"
		        },
		        {
			        string: navigator.vendor,
			        subString: "Camino",
			        identity: "Camino"
		        },
		        {		// for newer Netscapes (6+)
			        string: navigator.userAgent,
			        subString: "Netscape",
			        identity: "Netscape"
		        },
		        {
			        string: navigator.userAgent,
			        subString: "MSIE",
			        identity: "Explorer",
			        versionSearch: "MSIE"
		        },
		        {
			        string: navigator.userAgent,
			        subString: "Gecko",
			        identity: "Mozilla",
			        versionSearch: "rv"
		        },
		        { // for older Netscapes (4-)
			        string: navigator.userAgent,
			        subString: "Mozilla",
			        identity: "Netscape",
			        versionSearch: "Mozilla"
		        }
	        ],
	    dataOS : [
		    {
			    string: navigator.platform,
			    subString: "Win",
			    identity: "Windows"
		    },
		    {
			    string: navigator.platform,
			    subString: "Mac",
			    identity: "Mac"
		    },
		    {
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
	        },
		    {
			    string: navigator.platform,
			    subString: "Linux",
			    identity: "Linux"
		    }
	        ]

    };      
      
    BrowserDetect.init();
    
    //alert( BrowserDetect.OS + " : " + BrowserDetect.browser + " : " + BrowserDetect.version );  

    app.varBrowserOS.setValue("dataValue",          BrowserDetect.OS) ;
    app.varBrowserName.setValue("dataValue",        BrowserDetect.browser );
    app.varBrowserVersion.setValue("dataValue",     BrowserDetect.version );
     
     
  },
  
  
  //Added by Jammi Dee 08/19/2012
  svarReadFromRegistrySitePhraseResult: function(inSender, inDeprecated) {
	  try {

            this.lblSitePhrase.setCaption(inSender.getValue("dataValue"));
		  
	  } catch(e) {
		  console.error('ERROR IN svarReadFromRegistrySitePhraseResult: ' + e); 
	  } 
  },

  //Added by Jammi Dee 11/25/2012
  svarCreateSessionResult: function(inSender, inDeprecated) {
	  try {
		  
            //alert( inSender.getValue("dataValue") );
            if( inSender.getValue("dataValue") === "MAXUSERS"  ){
                    
                alert("Maximum number of concurrent users reached!");
                    
            } else {
                    
                //Added  by Jammi Dee 11/14/2012
                //Keep the session inforamtion
                app.varSessionId.setValue("dataValue", inSender.getValue("dataValue"));
          
                this.svarGetRolePage.setValue("input.pUserId",   app.varUserId.getValue("dataValue"));
                this.svarGetRolePage.setValue("input.pEntityId", app.varEntity.getValue("dataValue"));
                this.svarGetRolePage.update();  
                    
            }          
          
		  
	  } catch(e) {
          
		  console.error('ERROR IN svarCreateSessionResult: ' + e);
          alert( 'ERROR IN svarCreateSessionResult: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 11/25/2012
  svarGetRolePageResult: function(inSender, inDeprecated) {
	  try {
		  
            var strProleId = "";
            var strLen;
            app.varArray.clearData(); 
            for (i = 0; i < inSender.getCount(); i++) {
                var aRow = inSender.getItem(i);
                app.varArray.addItem({dataValue:aRow.data.roleid});
                //alert(app.varArray.getItem(i).getValue("dataValue")); 
                strProleId = strProleId + "'" + app.varArray.getItem(i).getValue("dataValue") + "'" + ",";
            }

            strLen = strProleId.length;
            strProleId = strProleId.slice(0, strLen - 1);
            //alert(strProleId);
            //alert("select * from Tblrightasgn where sstatus = 'ACTIVE'" + " and roleid IN ( " + strProleId + " );");
            this.svarLoadUserRightsPage.setValue("input.pRoleId", strProleId);
            this.svarLoadUserRightsPage.update();   


	  } catch(e) {
          
		  console.error('ERROR IN svarGetRolePageResult: ' + e);
          alert( 'ERROR IN svarGetRolePageResult: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 11/25/2012
  svarLoadUserRightsPageResult: function(inSender, inDeprecated) {
	  try {

               var i;
               var x;
               var rights;
               var check = "";
               var flag = "";
               var rtnString = '';
               
              // Load all the rights to the array 
              app.varArrayRights.clearData();
               var numRows = inSender.getCount();     
               //alert(numRows);
               if (numRows > 0) {
                  for (i=0; i < numRows; i++) {
                      var aRow = inSender.getItem(i);
                         app.varArrayRights.addItem({dataValue:aRow.data.rightid + "|" + aRow.data.appid});
                  }
               }

            //Added by Jammi Dee 11/25/2012
            var bOpenApp = false;
            for (i = 0; i < app.varArrayRights.getCount(); i++) {
                
                    rights = app.varArrayRights.getItem(i).getValue("dataValue");
                    
                    //alert(rights);
                    
                    if( rights === app.varAppPrefix.getValue("dataValue") + "OPENAPP" + "|" +  app.varAppId.getValue("dataValue") ){
                        bOpenApp = true;
                    }
                    
                    // Look for this function and modify the code there.
                    //this.checkRights(rights);
            }  

            //Quit this app if the user have no rights
            if( bOpenApp === false ){
                
                alert("You have no rights in accessing this application.");
                
            } else {
        
                 this.navPgMain.update();
        
            }

		  
	  } catch(e) {
          
		  console.error('ERROR IN svarLoadUserRightsPageResult: ' + e);
          alert( 'ERROR IN svarLoadUserRightsPageResult: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 05/23/2013
  svarReadFromRegistryJRXMLFormatResult: function(inSender, inDeprecated) {
      try {

          app.varJRXMLFormat.setValue("dataValue", inSender.getValue("dataValue") );
          
      } catch(e) {
		  console.error('ERROR IN svarReadFromRegistryJRXMLFormatResult: ' + e); 
	  } 
  },
    
	_end: 0
});