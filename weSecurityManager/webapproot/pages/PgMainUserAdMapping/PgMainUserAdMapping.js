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
 * Date: 09/24/2012
 * Modified by: Jammi Dee 09/24/2012 10:00PM
 * 
*/

/*
 This is a sample page that can used as template
*/

dojo.declare("PgMainUserAdMapping", wm.Page, {
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
            
            // Added by Jammi Dee 09/24/2012 
            app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
            app.svarLogging.setValue("input.pMsg","Manage User-AD Mapping.");
            app.svarLogging.setValue("input.pModuleId","ADMAPPING");
            app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
            app.svarLogging.setValue("input.pProcess","MANAGE");
            app.svarLogging.setValue("input.pScopeId","NA");
            app.svarLogging.setValue("input.pStype","USER");            
            app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
            app.svarLogging.update();
            
            //Update the AD Mapping View
            //Added by Jammi Dee 09/24/2012
            this.svarADMappingView.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
            this.svarADMappingView.update();
            
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
        
        this.lblTitle.setCaption("User : AD Mapping" );
        this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
    
    },  
  
  //Added by Jammi Dee 09/24/2012
  pic_addClick: function(inSender) {
	  try {
		  
          this.ddNewADMapping.show();
		  
	  } catch(e) {
          
		  console.error('ERROR IN pic_addClick: ' + e); 
          alert( 'ERROR IN pic_addClick: ' + e );
          
	  } 
  },

  //Added by Jammi Dee 09/24/2012
  btnADMappingAddClick: function(inSender) {
	  try {   
          
            //Used this UUID generation when database UUID is not available
            var UUID = app.uuid4();
            
            var eQuery =           "insert into tbladmapping( " + 
                                   "juid, " +
                                   "entityid, " +
                                   "urlid, " + 
                                   "userid, " + 
                                   "aduserid, " +
                                   "sstatus " + 
                                   ")" +
                                   "values( " + 
                                   "'" + UUID + "', " +
                                   "'" + app.varEntity.getValue("dataValue") + "', " + 
                                   "'" + this.txtUrl.getValue("dataValue") + "', " + 
                                   "'" + this.txtUserId.getValue("dataValue") + "', " +
                                   "'" + this.txtAdUserId.getValue("dataValue") + "', " +
                                   "'ACTIVE' " + 
                                   ");";
            //alert( eQuery );                       
            this.svarExecGenericNonQuery.setValue("input.eQuery", eQuery);
            this.svarExecGenericNonQuery.update();
            
            app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
            app.svarLogging.setValue("input.pMsg","Added new Mapping " + this.txtUserId.getValue("dataValue") + " and " + this.txtAdUserId.getValue("dataValue") );
            app.svarLogging.setValue("input.pModuleId","ADMAPPING");
            app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
            app.svarLogging.setValue("input.pProcess","MAPPING");
            app.svarLogging.setValue("input.pScopeId","NA");
            app.svarLogging.setValue("input.pStype","USER");            
            app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
            app.svarLogging.update();    
            
            //Hide the popup window
            this.ddNewADMapping.hide();            

	  } catch(e) {
          
		  console.error('ERROR IN btnADMappingAddClick: ' + e);
          alert( 'ERROR IN btnUrlAddClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 09/11/2012
  svarExecGenericNonQueryResult: function(inSender, inDeprecated) {
	  try {

            //Update the Mapping Grid 09/25/2012
            this.svarADMappingView.setValue("input.pEntity", app.varEntity.getValue("dataValue") );
            this.svarADMappingView.update();
		  
	  } catch(e) {
          
		  console.error('ERROR IN svarExecGenericNonQueryResult: ' + e);
          alert( 'ERROR IN svarExecGenericNonQueryResult: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 09/24/2012
  pic_deleteClick: function(inSender) {
	  try {
          
            var response = confirm("Delete: Are you sure to delete this item?");
            
            if (response) {
             
                var eQuery = "delete from tbladmapping where juid ='" + this.dgData.selectedItem.getData().juid + "'; " ;
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
          app.svarLogging.setValue("input.pMsg","Deleted Mapping " + this.txtUserId.getValue("dataValue") + " and " + this.txtAdUserId.getValue("dataValue") );
          app.svarLogging.setValue("input.pModuleId","ADMAPPING");
          app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
          app.svarLogging.setValue("input.pProcess","MAPPING");
          app.svarLogging.setValue("input.pScopeId","NA");
          app.svarLogging.setValue("input.pStype","USER");            
          app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
          app.svarLogging.update();            
          
          //Update the Mapping Grid 09/25/2012
          this.svarADMappingView.setValue("input.pEntity", app.varEntity.getValue("dataValue") );
          this.svarADMappingView.update();        
		  
	  } catch(e) {
          
		  console.error('ERROR IN svarExecGenericNonQueryDeleteResult: ' + e); 
          alert( 'ERROR IN svarExecGenericNonQueryDeleteResult: ' + e );
          
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
  lblBackClick: function(inSender, inEvent) {
      try {
          
          app.pdWaitLoadPage.show();
          this.navPgMain.update();
          
      } catch(e) {
          
		  console.error('ERROR IN lblBackClick: ' + e);
          
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