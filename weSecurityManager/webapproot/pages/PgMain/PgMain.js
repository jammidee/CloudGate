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


dojo.declare("PgMain", wm.Page, {
	"preferredDevice": "desktop",
    
    linkrea  : "http://" + window.location.hostname + ":" + window.location.port + "/tksLookUp",
    linkjammi: "http://" + window.location.hostname + ":" + window.location.port + "/tksTicket",
    linklimbo: "http://" + window.location.hostname + ":" + window.location.port + "/tksUserMgt",
    
    start: function() {
        try {
            
            // Added by JMD 06/03/2012
            // Set up the date for the header here
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1; //January is 0!
            var yyyy = today.getFullYear();
            
            if(dd<10){dd='0'+dd;} 
            if(mm<10){mm='0'+mm;}
            var ctoday = mm+'/'+dd+'/'+yyyy;
            this.lblDate.setCaption(ctoday);            
            
            this.lblUserInfo.setCaption(app.varUserInfo.getValue("dataValue"));
            this.lblTitle.setCaption("Wave ERP Copyright 2012");
            this.lblEntity.setCaption(app.varEntity.getValue("dataValue"));
            app.varModuleId.setValue("dataValue","MDLMAIN");
            
            // Added by Jammi Dee 04/28/2012
            this.initApplication();
            
            //Added by Jammi Dee 11/25/2012
            //alert( app.varSessionId.getValue("dataValue") );
            app.svarUpdateSessionApp.setValue("input.pJuid",app.varSessionId.getValue("dataValue"));
            app.svarUpdateSessionApp.update();              
            
            ////////////////////////////////////////////////////////////////
            // Check if the user have a valid Party ID
            // Activate this only if it is required that the User must have
            // a valid Employee Information requirements.
            ////////////////////////////////////////////////////////////////
            
            //this.svarEmployeeInfo.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
            //this.svarEmployeeInfo.setValue("input.pField","PARTYID" );
            //this.svarEmployeeInfo.update();               
            
            // Initialize the application access.
            // Added by Jammi Dee 11/04/2012
            this.initAccess();                     
            
            // Added by Jammi Dee 05/31/2012
            // This is how a Counter is read
            this.svarReadCounter.setValue("input.pPrefix",app.varAppPrefix.getValue("dataValue"));
            this.svarReadCounter.setValue("input.pKey","LOG");
            this.svarReadCounter.setValue("input.pAppId",app.varAppId.getValue("dataValue")); 
            this.svarReadCounter.setValue("input.pEntity",app.varEntity.getValue("dataValue")); 
            this.svarReadCounter.update();               
            
            /**
             * READ the GLOBAL Registry here to control the settings of the application
             * Create by: Jammi Dee
             * Date : 05/31/2012
            */            

            //-------------------------------
            // LOGGING TO FILE 
            // Added by Jammi Dee 05/31/2012
            // Read the log to file status
            //-------------------------------
            this.svarReadFromRegistryLogging.setValue("input.pAppId","NA"); 
            this.svarReadFromRegistryLogging.setValue("input.pEntity","NA"); 
            this.svarReadFromRegistryLogging.setValue("input.pUserId","NA");  
            this.svarReadFromRegistryLogging.setValue("input.pVarname","LOGTOFILE"); 
            this.svarReadFromRegistryLogging.setValue("input.pDefa","OFF"); 
            this.svarReadFromRegistryLogging.update();  

            /**
             * Detect if the user is about to close the page. Warn
             * the user about this activity.
             * Added by Jammi Dee 07/08/2012
            */
            dojo.connect(window, "onbeforeunload", this, "windowUnload"); 
            
            app.pdWaitLoadPage.hide();
            
        } catch (e) {
            app.toastError(this.name + ".start() Failed: " + e.toString());
        }
    },
    
    /*
     * 04/28/2012 - Jammi Dee
     * Initialize the template variables here
    */
    initApplication: function() {
        
        this.lblTitle.setCaption("Main : " + app.varAppName.getValue("dataValue") + " : " + app.varAppVersion.getValue("dataValue"));
        this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
    
    },     
    
    /**
     * Detect if the user is about to close the page. Warn
     * the user about this activity.
     * Added by Jammi Dee 07/08/2012
    */
    windowUnload: function(e) {
        
        var mesg =  "Are you sure you want to leave?";
            // For IE
            e.returnValue = mesg;
            // For all others
        return mesg;
    
    },    
    
    // Added by Jammi Dee 11/04/2012
    initAccess: function() {
        
        //Initially hide all controls
        this.hideAllControls();
        //Load the original rights given to the user
        this.reloadRights();     
    
    },      
    

    // Added by Jammi Dee 11/04/2012
    reloadRights: function() {
        
        var rights;
        //alert(app.varArrayRights.getCount());
        this.varHasRight.setValue("dataValue", "NO");
        for (i = 0; i < app.varArrayRights.getCount(); i++) {
            rights = app.varArrayRights.getItem(i).getValue("dataValue");
            
            //alert( rights + " = = = " + app.varAppPrefix.getValue("dataValue") + "USERADMIN" + "|" +  app.varAppId.getValue("dataValue") );
            if( rights === app.varAppPrefix.getValue("dataValue") + "USERMENU" + "|" +  app.varAppId.getValue("dataValue") ){

                this.lblManageUser.setShowing(true);
                this.lblSep2.setShowing(true);          

            } else if(rights === app.varAppPrefix.getValue("dataValue") + "PARTYMENU" + "|" +  app.varAppId.getValue("dataValue") ){

                this.lblParty.setShowing(true);
                this.lblSep6.setShowing(true);

            } else if(rights === app.varAppPrefix.getValue("dataValue") + "MAINTENANCEMENU" + "|" +  app.varAppId.getValue("dataValue") ){

                this.lblMaintenance.setShowing(true);
                this.lblSep3.setShowing(true);

            } else if(rights === app.varAppPrefix.getValue("dataValue") + "REPORTMENU" + "|" +  app.varAppId.getValue("dataValue") ){

                this.lblReport.setShowing(true);
                this.lblSep4.setShowing(true);
                
            } else if(rights === app.varAppPrefix.getValue("dataValue") + "CONFIGMENU" + "|" +  app.varAppId.getValue("dataValue") ){
                
                this.lblConfigure2.setShowing(true);
                this.lblSep5.setShowing(true); 
                
            } else if(rights === app.varAppPrefix.getValue("dataValue") + "TOOLSMENU" + "|" +  app.varAppId.getValue("dataValue") ){

                this.lblTools.setShowing(true);
                
            }  
            
        }
        
    },    

    // Added by Jammi Dee 11/04/2012
    hideAllControls: function() {
        
        //Hide all the menu initially
        this.lblManageUser.setShowing(false);
        this.lblSep2.setShowing(false);
        this.lblParty.setShowing(false);
        this.lblSep6.setShowing(false);
        this.lblMaintenance.setShowing(false);
        this.lblSep3.setShowing(false);
        this.lblReport.setShowing(false);
        this.lblSep4.setShowing(false);
        this.lblConfigure2.setShowing(false);
        this.lblSep5.setShowing(false);        
        this.lblTools.setShowing(false);
        
    },    
   
    //Added by Jammi Dee 11/25/2012
    lblLogoutClick: function(inSender, inEvent) {
        try {
            
            var response = confirm("Are you sure you want to logout?");
            
            if (response) {
             
                //Added by Jammi Dee 11/14/2012
                app.svarLogoutApp.setValue("input.pJuid", app.varSessionId.getValue("dataValue") );
                app.svarLogoutApp.update();             
             
            }                          
            
        } catch (e) {
            
            console.error('ERROR IN lblLogoutClick: ' + e);
            
        }
    },
    
  // Added by Jammi Dee 05/31/2012    
  // Get the global logging to file variable to memory
  svarReadFromRegistryLoggingResult: function(inSender, inDeprecated) {
      try {
		  
          app.varLogToFile.setValue("dataValue", inSender.getValue("dataValue"));
		  
	  } catch(e) {
		  console.error('ERROR IN svarReadFromRegistryLoggingResult: ' + e); 
	  } 
  },    
    
    lblManageUserClick: function(inSender, inEvent) {
	  try {
          
          app.pdWaitLoadPage.show();
          this.navPgMainUser.update();
          
	  } catch(e) {
          
		  console.error('ERROR IN lblEntityMaintenanceClick: ' + e);
          
	  } 
  },

  svarPara01Result: function(inSender, inDeprecated) {
	  try {
              
              this.pdLoading.setShowing(true);
		      if(this.varOps.getValue("dataValue") == "tksUserMgt"){
                  window.location.href = this.linklimbo;
              }else if(this.varOps.getValue("dataValue") == "tksLookUp"){
                  window.location.href = this.linkrea;
              }else if(this.varOps.getValue("dataValue") == "tksTicket"){
                  window.location.href = this.linkjammi;
              }
              
	  } catch(e) {
		  console.error('ERROR IN svarPara01Result: ' + e); 
	  } 
  },
  lblManageLookUpClick: function(inSender, inEvent) {
	  try {
          this.svarPara01.setValue("input.pIdNum",app.varUserId.getValue("dataValue")); 
          this.svarPara01.setValue("input.pPassword",app.varPassword.getValue("dataValue"));
          this.svarPara01.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
          this.svarPara01.update();
          this.varOps.setValue("dataValue","tksLookUp"); 
	  } catch(e) {
		  console.error('ERROR IN lblManageLookUpClick: ' + e); 
	  } 
  },
  lblManageTicketClick: function(inSender, inEvent) {
	  try {
          this.svarPara01.setValue("input.pIdNum",app.varUserId.getValue("dataValue")); 
          this.svarPara01.setValue("input.pPassword",app.varPassword.getValue("dataValue"));
          this.svarPara01.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
          this.svarPara01.update();
          this.varOps.setValue("dataValue","tksTicket");  
		  
	  } catch(e) {
		  console.error('ERROR IN lblManageTicketClick: ' + e); 
	  } 
  },
  lblRoleClick: function(inSender, inEvent) {
	  try {
		  //this.lblManageLookUpClick(inSender, inEvent);
		  
	  } catch(e) {
		  console.error('ERROR IN lblManageLookUp1Click: ' + e); 
	  } 
  },
  
  // Added by Jammi Dee 05/30/2012
  svarReadCounterResult: function(inSender, inDeprecated) {
      try {
		  
        this.lblCounter.setCaption( inSender.getValue("dataValue") );
            
	  } catch(e) {
		  console.error('ERROR IN svarReadCounterResult: ' + e); 
	  } 
  },
  
  //Added by Jammi Dee 11/25/2012
  pic_exitClick: function(inSender) {
	  try {

            this.lblLogoutClick( inSender );
		  
	  } catch(e) {
          
		  console.error('ERROR IN pic_exitClick: ' + e);
          alert( 'ERROR IN pic_exitClick: ' + e );
	  } 
  },

  //Added by Jammi Dee 01/14/2013
  svarEmployeeInfoResult: function(inSender, inDeprecated) {
	  try {
		
          if( inSender.getValue("dataValue") == "NULL" ){
              
              alert("Logging you out. This system requires an Employee Party!");
              
              //Added by Jammi Dee 01/14/2013
              app.svarLogoutApp.setValue("input.pJuid", app.varSessionId.getValue("dataValue") );
              app.svarLogoutApp.update(); 
          } else {
              
              app.varPartyId.setValue("dataValue", inSender.getValue("dataValue") );
              
          }               
		  
	  } catch(e) {
          
		  console.error('ERROR IN svarEmployeeInfoResult: ' + e);
          alert( 'ERROR IN svarEmployeeInfoResult: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 03/23/2013
  lblPartyClick: function(inSender, inEvent) {
		
      try {
          
          app.pdWaitLoadPage.show();
          this.navPgMainParty.update();
          
	  } catch(e) {
          
		  console.error('ERROR IN lblPartyClick: ' + e);
          
	  }         
        
  },
  
  //Added by Jammi Dee 03/23/2013
  lblMaintenanceClick: function(inSender, inEvent) {
      
      try {
          
          app.pdWaitLoadPage.show();
          this.navPgMainMaintenance.update();
          
	  } catch(e) {
          
		  console.error('ERROR IN lblMaintenanceClick: ' + e);
          
	  }
      
  },
  
  //Added by Jammi Dee 03/23/2013
  lblReportClick: function(inSender, inEvent) {
      
      try {
          
          app.pdWaitLoadPage.show();
          this.navPgMainReport.update();
          
      } catch(e) {
          
		  console.error('ERROR IN lblReportClick: ' + e);
          
	  }
      
  },
    
  //Added by Jammi Dee 03/23/2013
  lblConfigure2Click: function(inSender, inEvent) {
      
      try {
          
          app.pdWaitLoadPage.show();
          this.navPgMainConfig.update();
          
      } catch(e) {
          
          console.error('ERROR IN lblConfigure2Click: ' + e);
          
	  }
		
  },
  
  
	_end: 0
});