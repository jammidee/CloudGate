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

dojo.declare("PgMainConfigConnProfile", wm.Page, {
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
            this.selDbEngine.setOptions("MYSQL,MSSQL,ORACLE,DB2,ODBC,OTHERS");            
            
            //Added by Jammi Dee 01/01/2013
            this.svarConnProfileView.setValue("input.pEntity", app.varEntity.getValue("dataValue") );
            this.svarConnProfileView.update();  
            
            this.txtEntity.setValue("dataValue", app.varEntity.getValue("dataValue"));
            
            
            // Added by Jammi Dee 05/06/2012 
            app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
            app.svarLogging.setValue("input.pMsg","Manage Connection Profile Page.");
            app.svarLogging.setValue("input.pModuleId","CONNPROFILE");
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
        
        this.lblTitle.setCaption("Configure : Connection Profile" );
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
  
  //Added by Jammi Dee 01/01/2013
  pic_deleteClick: function(inSender) {
	  try {
		  
          var juid      = this.dgData.selectedItem.getData().juid;
          
          if( juid !== "" || juid !== null ){
              
                var response = confirm("Delete: Are you sure to delete this item?");
            
                if (response) {
                    
                    this.svarConnProfileDelete.setValue("input.pJuId", juid );
                    this.svarConnProfileDelete.setValue("input.pEntity", this.txtEntity.getValue("dataValue") );
                    this.svarConnProfileDelete.update(); 
                    
                }    
       
          } else {
              
              alert( "No item selected for deletion." );
              
          }

          
          
	  } catch(e) {
          
		  console.error('ERROR IN pic_deleteClick: ' + e); 
          alert( 'ERROR IN pic_deleteClick: ' + e );
	  } 
  },
  
  //Added by Jammi Dee 01/01/2013
  svarConnProfileDeleteResult: function(inSender, inDeprecated) {
      try {
		  
            this.svarConnProfileView.setValue("input.pEntity", app.varEntity.getValue("dataValue") );
            this.svarConnProfileView.update();           
		  
	  } catch(e) {
          
		  console.error('ERROR IN svarConnProfileDeleteResult: ' + e);
          alert( 'ERROR IN svarConnProfileDeleteResult: ' + e );
          
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

          this.svarConnProfileUpdate.setValue("input.pJuid",          this.dgData.selectedItem.getData().juid );
          this.svarConnProfileUpdate.setValue("input.pEntity",        this.txtEntity.getValue("dataValue") );
          this.svarConnProfileUpdate.setValue("input.pStatus",        this.selStatus.getValue("dataValue") );
          this.svarConnProfileUpdate.update(); 
          
	  } catch(e) {
          
		  console.error('ERROR IN btnUpdateActionClick: ' + e); 
          alert( 'ERROR IN btnUpdateActionClick: ' + e );
	  } 
  },
  
  //Added by Jammi Dee 01/01/2013
  svarConnProfileUpdateResult: function(inSender, inDeprecated) {
      try {
		  
            this.svarConnProfileView.setValue("input.pEntity", app.varEntity.getValue("dataValue") );
            this.svarConnProfileView.update();    

	  } catch(e) {
          
		  console.error('ERROR IN svarConnProfileUpdateResult: ' + e);
          alert( 'ERROR IN svarConnProfileUpdateResult: ' + e );
          
	  } 
  },  

  //Added by Jammi Dee 01/01/2013
  btnSelectSelectClick: function(inSender) {
	  try {
	
          this.txtEntity.setValue("dataValue", this.dgDataSelect.selectedItem.getData().entityid );
          
          this.svarConnProfileView.setValue("input.pEntity",     this.dgDataSelect.selectedItem.getData().entityid );
          this.svarConnProfileView.update();          
          
          this.ddSelectEntity.hide();    
    
		  
	  } catch(e) {
          
		  console.error('ERROR IN btnSelectSelectClick: ' + e); 
          aalert( 'ERROR IN btnSelectSelectClick: ' + e );
          
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
  
  //Added by Jammi Dee 01/01/2013
  pic_newClick: function(inSender) {
	  try {
		  
          this.ddConnProfileCreate.show();
		  
	  } catch(e) {
          
		  console.error('ERROR IN pic_newClick: ' + e);
          alert( 'ERROR IN pic_newClick: ' + e );
	  } 
  },
  
  //Added by Jammi Dee 01/01/2013
  ddConnProfileCreateShow: function(inSender) {
      try {

            this.selDbEngine.setValue("dataValue", "MYSQL");
		  
	  } catch(e) {
          
		  console.error('ERROR IN ddConnProfileCreateShow: ' + e);
          alert( 'ERROR IN ddConnProfileCreateShow: ' + e );
          
	  } 
  },  
  
  //Added by Jammi Dee 01/01/2013
  btnConnProfileCreateClick: function(inSender) {
	  try {
		  
          this.svarConnProfileCreate.setValue("input.pEntityId",     this.txtEntity.getValue("dataValue") );
          this.svarConnProfileCreate.update();             
		  
	  } catch(e) {
          
		  console.error('ERROR IN btnConnProfileCreateClick: ' + e);
          alert( 'ERROR IN btnConnProfileCreateClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 01/01/2013
  svarConnProfileCreateResult: function(inSender, inDeprecated) {
	  try {
		  
          //alert( inSender.getValue("dataValue") );
          
          this.svarConnProfileView.setValue("input.pEntity",     this.txtEntity.getValue("dataValue") );
          this.svarConnProfileView.update();          
          
          this.ddConnProfileCreate.hide();    

	  } catch(e) {
          
		  console.error('ERROR IN svarConnProfileCreateResult: ' + e);
          alert( 'ERROR IN svarConnProfileCreateResult: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 01/01/2013
  btnSelectEngineClick: function(inSender) {
	  try {

          var strEngine = this.selDbEngine.getValue("dataValue");
          
          if( strEngine === "MYSQL" ){
              
              this.txtDbDriver.setValue("dataValue",    "com.mysql.jdbc.Driver");
              this.txtDbUrl.setValue("dataValue",       "jdbc:mysql://<SERVER>:3306/<DATABASE>");
              
              this.txtUsername.setValue("dataValue",    "root");
              this.txtPassword.setValue("dataValue",    "password");
              
          } else if ( strEngine === "MSSQL" ) {

              this.txtDbDriver.setValue("dataValue",    "net.sourceforge.jtds.jdbc.Driver");
              this.txtDbUrl.setValue("dataValue",       "jdbc:jtds:sqlserver://<SERVER>:1433/<DATABASE>;instance=SQLEXPRESS");
              
              this.txtUsername.setValue("dataValue",    "root");
              this.txtPassword.setValue("dataValue",    "password");

          } else if ( strEngine === "ORACLE" ) {
           
              this.txtDbDriver.setValue("dataValue",    "oracle.jdbc.driver.OracleDriver");
              this.txtDbUrl.setValue("dataValue",       "jdbc:oracle:thin:@<SERVER>:1521:<DATABASE>");
              
              this.txtUsername.setValue("dataValue",    "root");
              this.txtPassword.setValue("dataValue",    "password");
              
          } else if ( strEngine === "ODBC" ) {
           
              this.txtDbDriver.setValue("dataValue",    "sun.jdbc.odbc.JdbcOdbcDriver");
              this.txtDbUrl.setValue("dataValue",       "jdbc:odbc:<Defined_DSN>");
              
              this.txtUsername.setValue("dataValue",    "root");
              this.txtPassword.setValue("dataValue",    "password");
              
          } else {
              
              alert("The database engine that you provided have no pattern yet.");
           
          }

		  
	  } catch(e) {
          
		  console.error('ERROR IN btnSelectEngineClick: ' + e);
          alert( 'ERROR IN btnSelectEngineClick: ' + e );
          
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