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
 * Date: 08/19/2012
 * Modified by: Jammi Dee 08/19/2012
 * 
*/

/*
 Created by Jammi Dee 04/15/2012
 This is a sample page that can used as template
*/

dojo.declare("PgMainConfigBrowser", wm.Page, {
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
            this.lblUserInfo.setCaption(app.varUserInfo.getValue("dataValue"));
            this.lblTitle.setCaption("Wave ERP Copyright 2012");
            this.lblEntity.setCaption(app.varEntity.getValue("dataValue"));
            app.varModuleId.setValue("dataValue","MDLMAIN");
            
            // Initialize the application - Jammi Dee 03/25/2012
            this.initApplication();   
            
            //Added by Jammi Dee 11/25/2012
            app.svarUpdateSessionApp.setValue("input.pJuid",app.varSessionId.getValue("dataValue"));
            app.svarUpdateSessionApp.update();                
            
            // Added by Jammi Dee 05/31/2012
            this.selBrowser.setOptions("Chrome,OmniWeb,Safari,Opera,iCab,Konqueror,Firefox,Camino,Netscape,Explorer,Mozilla");            
            
            this.svarBrowserList.setValue("input.pEntity", "%" );
            this.svarBrowserList.update();
            this.dgLookup.dataSet.update();
            
            // Added by Jammi Dee 05/06/2012 
            app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
            app.svarLogging.setValue("input.pMsg","View supported browser list.");
            app.svarLogging.setValue("input.pModuleId","CONFIG");
            app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
            app.svarLogging.setValue("input.pProcess","MANAGE");
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
        
        this.lblTitle.setCaption("Configuration : Browser" );
        this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
    
    },  

  svarAppListResult: function(inSender, inDeprecated) {
	  try {

//           this.dgLookup.dataSet.update();
		  
	  } catch(e) {
		  console.error('ERROR IN svarAppListResult: ' + e); 
	  } 
  },

  // Added by Jammi Dee 06/11/2012
  pic_toCsvClick: function(inSender) {
	  try {

         this.dgLookup.showCSVData();
		  
	  } catch(e) {
          
		  console.error('ERROR IN pic_toCsvClick: ' + e); 
          alert( 'ERROR IN pic_toCsvClick: ' + e );
          
	  } 
  },
  dgLookupClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
	  try {

          //this.txtAppId.setValue("dataValue", this.dgLookup.selectedItem.getData().appid );
          //this.selStatus.setValue("dataValue", this.dgLookup.selectedItem.getData().status );
		  
	  } catch(e) {
          
		  console.error('ERROR IN dgLookupClick: ' + e); 
          alert( 'ERROR IN dgLookupClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 08/19/2012
  pic_addClick: function(inSender) {
	  try {
		  
            var eQuery =           "insert into tblbrowserlist( " +
                                   "entityid, " + 
                                   "browseid, " + 
                                   "sstatus " +
                                   ")" +
                                   "values( " + 
                                   "'" + app.varEntity.getValue("dataValue") + "', " + 
                                   "'" + this.selBrowser.getValue("dataValue") + "', " + 
                                   "'ACTIVE' " + 
                                   ");";
            //alert( eQuery );                       
            this.svarExecGenericNonQuery.setValue("input.eQuery", eQuery);
            this.svarExecGenericNonQuery.update();          
		  
	  } catch(e) {
          
		  console.error('ERROR IN pic_addClick: ' + e); 
          alert( 'ERROR IN pic_addClick: ' + e );
          
	  } 
  },
  svarExecGenericNonQueryResult: function(inSender, inDeprecated) {
	  try {

         this.svarBrowserList.setValue("input.pEntity", "%" );
         this.svarBrowserList.update();
         this.dgLookup.dataSet.update();
         
         //alert( "New browser support has been added." );
         app.toastSuccess( "New browser support has been added." );
		  
	  } catch(e) {
          
		  console.error('ERROR IN svarExecGenericNonQueryResult: ' + e);
          alert( 'ERROR IN svarExecGenericNonQueryResult: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 08/19/2012
  pic_deleteClick: function(inSender) {
	  try {
		  
		  var response = confirm("Delete: Are you sure to delete this browser support?");
          
          if (response) {
               
                //alert( this.dgLookup.selectedItem.getData().juid );
                this.svarBrowserListDelete.setValue("input.pJuid", this.dgLookup.selectedItem.getData().juid );
                this.svarBrowserListDelete.update();               
               
          }           
          
          
	  } catch(e) {
		  console.error('ERROR IN pic_deleteClick: ' + e); 
	  } 
  },
  
  svarBrowserListDeleteResult: function(inSender, inDeprecated) {
	  try {

         this.svarBrowserList.setValue("input.pEntity", "%" );
         this.svarBrowserList.update();
         this.dgLookup.dataSet.update();
         
         //alert( "New browser support has been deleted." );
         app.toastSuccess( "New browser support has been deleted." );
		  
	  } catch(e) {
		  console.error('ERROR IN svarBrowserListDeleteResult: ' + e); 
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
          
		  console.error('ERROR IN lblBackClick: ' + e);
          
	  }		
  },
  
	_end: 0
});