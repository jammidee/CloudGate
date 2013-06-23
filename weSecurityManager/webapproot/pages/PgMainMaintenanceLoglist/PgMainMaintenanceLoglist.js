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

/*
 Created by Jammi Dee 04/15/2012
 This is a sample page that can used as template
*/

dojo.declare("PgMainMaintenanceLoglist", wm.Page, {
	"preferredDevice": "desktop",
    
    start: function() {
        try {
            
            // Added by JMD 04/11/2012
            // Set up the date for the header here
            var today = new Date();
            var startdate = new Date();
            
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
            
            // Initilaise the filters here 05/13/2012
            startdate.setDate(1);
            this.dtStartDate.setValue("dataValue", startdate  );
            this.dtEndDate.setValue("dataValue",today );

            // Added by Jammi Dee 05/13/2012
            this.svarLogList.setValue("input.pEntity", "%");
            this.svarLogList.update();
            this.dgLookup.dataSet.update();
            
            
            // Added by Jammi Dee 05/06/2012 
            app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
            app.svarLogging.setValue("input.pMsg","View log list.");
            app.svarLogging.setValue("input.pModuleId","MAINTENANCE");
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
        
        this.lblTitle.setCaption("Maintenance : Loglist" );
        this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
    
    },  

  svarAppListResult: function(inSender, inDeprecated) {
	  try {

//           this.dgLookup.dataSet.update();
		  
	  } catch(e) {
		  console.error('ERROR IN svarAppListResult: ' + e); 
	  } 
  },

  pic_refreshClick: function(inSender) {
	  try {

         // Added by Jammi Dee 05/13/2012
         this.svarLogList.setValue("input.pEntity", "%");
         this.svarLogList.update();
         this.dgLookup.dataSet.update();
		  
	  } catch(e) {
		  console.error('ERROR IN pic_refreshClick: ' + e); 
	  } 
  },
  pic_toCsvClick: function(inSender) {
	  try {
		  
          this.dgLookup.showCSVData();
		  
	  } catch(e) {
		  console.error('ERROR IN pic_toCsvClick: ' + e); 
	  } 
  },
  
  //Added by Jammi Dee 08/12/2012
  pic_deleteClick: function(inSender) {
	  try {
		  
          var response = confirm("Delete: Are you sure to delete this log?");
            
          if (response) {
              
              alert( this.dgLookup.selectedItem.getData().juid );
              this.svarLogDelete.setValue("input.pJuid", this.dgLookup.selectedItem.getData().juid );
              this.svarLogDelete.update();           
              
          }		  
          
	  } catch(e) {
          
		  console.error('ERROR IN pic_deleteClick: ' + e); 
          alert( 'ERROR IN pic_deleteClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 08/12/2012
  btnDeletePriorClick: function(inSender) {
	  try {

          var response = confirm("Delete: Are you sure to delete all logs prior to start date?");
            
          if (response) {
              
              //alert(this.dgLookup.selectedItem.getData().juid);
              this.svarLogDeletePrior.setValue("input.pEntity", app.varEntity.getValue("dataValue") );
              this.svarLogDeletePrior.setValue("input.pStart",  this.dgLookup.selectedItem.getData().logdatetime );
              this.svarLogDeletePrior.update();   
              
              this.svarLogList.setValue("input.pEntity", app.varEntity.getValue("dataValue"));
              this.svarLogList.update();
              this.dgLookup.dataSet.update();                 
              
          }  
		  
	  } catch(e) {
          
		  console.error('ERROR IN btnDeletePriorClick: ' + e); 
          alert( 'ERROR IN btnDeletePriorClick: ' + e );
          
	  } 
  },
  svarLogDeleteResult: function(inSender, inDeprecated) {
	  try {

              this.svarLogList.setValue("input.pEntity", app.varEntity.getValue("dataValue"));
              this.svarLogList.update();
              this.dgLookup.dataSet.update(); 
		  
	  } catch(e) {
		  console.error('ERROR IN svarLogDeleteResult: ' + e); 
	  } 
  },
  
  //Added by Jammi Dee 12/25/2012
  svarLogListResult: function(inSender, inDeprecated) {
	  try {
		  
		   //this.dgLookup.dijit.setSortIndex(1);
          
	  } catch(e) {
          
		  console.error('ERROR IN svarLogListResult: ' + e);
          alert( 'ERROR IN svarLogListResult: ' + e );
          
	  } 
  },
  
  
  //Added by Jammi Dee 05/05/2013
  pic_backClick: function(inSender) {
      try {
          
          app.pdWaitLoadPage.show();
          this.navPgMainMaintenance.update();
          
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
          
          console.error('ERROR IN lblBackClick: ' + e);
          
	  }
  },
	_end: 0
});