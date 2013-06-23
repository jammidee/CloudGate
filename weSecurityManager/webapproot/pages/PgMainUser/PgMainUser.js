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

dojo.declare("PgMainUser", wm.Page, {
	"preferredDevice": "desktop",
    start: function() {
        try {
//            dojo.connect(window, "onbeforeunload", this, "windowUnload");
            this.lblUserInfo.setCaption(app.varUserInfo.getValue("dataValue"));
            this.lblTitle.setCaption("User Management");
            this.lblEntity.setCaption("Entity :" + app.varEntity.getValue("dataValue"));
            app.varModuleId.setValue("dataValue", "MDLMANAGEUSER");
            
            //Added by Jammi Dee 11/25/2012
            app.svarUpdateSessionApp.setValue("input.pJuid",app.varSessionId.getValue("dataValue"));
            app.svarUpdateSessionApp.update();                
            
            //Added by Jammi Dee 12/02/2012
            this.initAccess();
            
            // Initialize the application - Jammi Dee 03/25/2012
            this.initApplication();            
            
            // Added by Jammi Dee 06/14/2012 
            app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
            app.svarLogging.setValue("input.pMsg","Loaded User Management Menu.");
            app.svarLogging.setValue("input.pModuleId","CONFIG");
            app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
            app.svarLogging.setValue("input.pProcess","PAGELOAD");
            app.svarLogging.setValue("input.pScopeId","NA");
            app.svarLogging.setValue("input.pStype","USER");  
            app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue") );
            app.svarLogging.update();
            
            app.pdWaitLoadPage.hide();

        } catch (e) {
            app.toastError(this.name + ".start() Failed: " + e.toString());
        }
    },

    // Added by Jammi Dee 11/04/2012
    initAccess: function() {
        
        //Initially hide all controls
        this.hideAllControls();
        //Load the original rights given to the user
        this.reloadRights();     
    
    },      


    /*
     * 03/25/2012 - Jammi Dee
     * Initialize the template variables here
    */
    initApplication: function() {
        
        this.lblTitle.setCaption("Tools : " + app.varAppName.getValue("dataValue") + " : " + app.varAppVersion.getValue("dataValue"));
        this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
    
    },  
    
    
    // Added by Jammi Dee 11/04/2012
    hideAllControls: function() {
        
        //Hide all the menu initially
        this.lblUser.setShowing(false);
        this.lblSep.setShowing(false);
        this.lblAsgnRole.setShowing(false);
        this.lblSep1.setShowing(false);
        this.lblRoles.setShowing(false);
        this.lblSep2.setShowing(false);
        this.lblRightsAsgn.setShowing(false);
        this.lblSep3.setShowing(false);
        this.lblRights.setShowing(false);
        this.lblSep4.setShowing(false);        
        this.lblADMapping.setShowing(false);
        
    },      
    
    // Added by Jammi Dee 11/04/2012
    reloadRights: function() {
        
        var rights;
        //alert(app.varArrayRights.getCount());
        this.varHasRight.setValue("dataValue", "NO");
        for (i = 0; i < app.varArrayRights.getCount(); i++) {
            rights = app.varArrayRights.getItem(i).getValue("dataValue");
            
            //alert( rights + " = = = " + app.varAppPrefix.getValue("dataValue") + "USERADMIN" + "|" +  app.varAppId.getValue("dataValue") );
            if( rights === app.varAppPrefix.getValue("dataValue") + "USERADMIN" + "|" +  app.varAppId.getValue("dataValue") ){

                this.lblUser.setShowing(true);
                this.lblSep.setShowing(true);          

            } else if(rights === app.varAppPrefix.getValue("dataValue") + "ASGNROLEADMIN" + "|" +  app.varAppId.getValue("dataValue") ){

                this.lblAsgnRole.setShowing(true);
                this.lblSep1.setShowing(true);

            } else if(rights === app.varAppPrefix.getValue("dataValue") + "ROLEADMIN" + "|" +  app.varAppId.getValue("dataValue") ){

                this.lblRoles.setShowing(true);
                this.lblSep2.setShowing(true);

            } else if(rights === app.varAppPrefix.getValue("dataValue") + "RIGHTSADMIN" + "|" +  app.varAppId.getValue("dataValue") ){

                this.lblRightsAsgn.setShowing(true);
                this.lblSep3.setShowing(true);
                
            } else if(rights === app.varAppPrefix.getValue("dataValue") + "RIGHTSSTATUS" + "|" +  app.varAppId.getValue("dataValue") ){
                
                this.lblRights.setShowing(true);
                this.lblSep4.setShowing(true); 
                
            } else if(rights === app.varAppPrefix.getValue("dataValue") + "ADRIGHTS" + "|" +  app.varAppId.getValue("dataValue") ){

                this.lblADMapping.setShowing(true);
                
            }  
            
        }
        
    },        
    
    
    lblLogoutClick: function(inSender, inEvent) {
        try {
           this.svarPara01.setValue("input.pIdNum",app.varUserId.getValue("dataValue")); 
           this.svarPara01.setValue("input.pPassword",app.varPassword.getValue("dataValue"));
           this.svarPara01.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
           this.svarPara01.update();
           this.navBackToMain.update();
           
        } catch (e) {
            console.error('ERROR IN lblLogoutClick: ' + e);
        }
    },


    lblUserClick: function(inSender, inEvent) {
        try {
            
             //this.varPageName.setValue("dataValue","PgUser");
             //this.authenticateRights("MGTUSERADMIN");
             
             app.pdWaitLoadPage.show();
             this.navPgUser.update();
             
        } catch (e) {
            
            console.error('ERROR IN lblUserClick: ' + e);
            alert( 'ERROR IN lblUserClick: ' + e );
            
        }
    },

  lblRolesClick: function(inSender, inEvent) {
        try {
            
             app.pdWaitLoadPage.show();
             this.navPgMainUserManageRoles.update(); 
            
            
        } catch (e) {
            
            console.error('ERROR IN lblRolesClick: ' + e);
            alert( 'ERROR IN lblRolesClick: ' + e );
            
        }
    },

  lblAsgnRoleClick: function(inSender, inEvent) {
      try {
          
         //this.varPageName.setValue("dataValue","PgAsgnRole");
         //this.authenticateRights("MGTASGNROLEADMIN");
         
         app.pdWaitLoadPage.show();
         this.navPgMainUserAsgnRoles.update();         
         
	  } catch(e) {
          
		  console.error('ERROR IN lblAsgnRoleClick: ' + e);
          alert( 'ERROR IN lblAsgnRoleClick: ' + e );
          
	  } 
  },


  lblRightsAsgnClick: function(inSender, inEvent) {
      try {
          
          //this.varPageName.setValue("dataValue","PgRightAsgn");
		  //this.authenticateRights("MGTASGNRIGHTSADMIN");
          
          app.pdWaitLoadPage.show();
          this.navPgMainUserAsgnRights.update();
          
	  } catch(e) {
          
		  console.error('ERROR IN lblRightsAsgnClick: ' + e);
          alert( 'ERROR IN lblRightsAsgnClick: ' + e );
          
	  } 
  },


  lblRightsClick: function(inSender, inEvent) {
        try {
            
            //this.varPageName.setValue("dataValue","PgRights");
            //this.authenticateRights("MGTRIGHTSADMIN");
            //this.lblRolesClick(inSender, inEvent);
            
            app.pdWaitLoadPage.show();
            this.navPgMainUserManageRights.update();
            
        } catch (e) {
            
            console.error('ERROR IN lblRoles1Click: ' + e);
            alert( 'ERROR IN lblRoles1Click: ' + e );
        }
        
   },

  //
  lblADMappingClick: function(inSender, inEvent) {
      try {
		  
          app.pdWaitLoadPage.show();
		  this.navPgMainUserAdMapping.update();
          
	  } catch(e) {
          
		  console.error('ERROR IN lblADMappingClick: ' + e);
          alert( 'ERROR IN lblADMappingClick: ' + e );
          
	  } 
  },

//    authenticateRights: function(rights,views) {
//        var x;
//        for (i = 0; i < app.varArrayRights.getCount(); i++) {
//            rightid = app.varArrayRights.getItem(i).getValue("dataValue").split("|", 2);
//            //alert(rights[0] + "-" + rights[1]);
//            if (rightid[0] == rights && rightid[1] == app.varAppId.getValue("dataValue")) {
//               if(this.varPageName.getValue("dataValue") == "PgUser"){
//                  this.navPgUser.update();
//               }else if(this.varPageName.getValue("dataValue") == "PgRole"){
//                  this.navPgRole.update(); 
//               }else if(this.varPageName.getValue("dataValue") == "PgAsgnRole"){
//                  this.navPgAsgnRole.update();
//               }else if(this.varPageName.getValue("dataValue") == "PgRights"){
//                  this.navPgRights.update();
//               }else if(this.varPageName.getValue("dataValue") == "PgRightAsgn"){
//                   this.navPgRightAsgn.update();
//               }          
//               x = 1;
//               break;
//            } else {
//                x = 0;
//            }
//        }
//        if (x === 0) {
//            alert("Access Denied");
//        }
//    },
//


  // Added by Jammi Dee 04/16/2012
  // This are the events for the images for the toolbar.
  
  pic_asgnrightsClick: function(inSender) {
	  try {

            this.lblRightsAsgnClick(inSender, null);
		  
	  } catch(e) {
		  console.error('ERROR IN pic_asgnrightsClick: ' + e); 
	  } 
  },
  pic_managerightsClick: function(inSender) {
	  try {

           this.lblRightsClick(inSender, null);
		  
	  } catch(e) {
		  console.error('ERROR IN pic_managerightsClick: ' + e); 
	  } 
  },
  pic_manageroleClick: function(inSender) {
	  try {

            this.lblRolesClick(inSender, null);
		  
	  } catch(e) {
		  console.error('ERROR IN pic_manageroleClick: ' + e); 
	  } 
  },
  pic_asgnroleClick: function(inSender) {
	  try {

            this.lblAsgnRoleClick(inSender, null);
		  
	  } catch(e) {
		  console.error('ERROR IN pic_asgnroleClick: ' + e); 
	  } 
  },
  
  pic_userClick: function(inSender) {
	  try {

            //this.lblUserClick(inSender, null);
            //Added by Jammi Dee 05/05/2013
            app.pdWaitLoadPage.show();
            this.navPgMainUserManageUser.update();
		  
	  } catch(e) {
		  console.error('ERROR IN pic_userClick: ' + e); 
	  } 
  },
  
  pic_userTreeClick: function(inSender) {
	  try {
		  this.pic_userClick(inSender);
		  
	  } catch(e) {
		  console.error('ERROR IN pic_user1Click: ' + e); 
	  } 
  },

  //Added by Jammi Dee 03/23/2013
  lblUserToolsClick: function(inSender, inEvent) {
      try {
          
          app.pdWaitLoadPage.show();
          this.navPgMainUserTools.update();
          
	  } catch(e) {
          
		  console.error('ERROR IN lblUserToolsClick: ' + e);
          
	  } 
      
  },
	_end: 0
});