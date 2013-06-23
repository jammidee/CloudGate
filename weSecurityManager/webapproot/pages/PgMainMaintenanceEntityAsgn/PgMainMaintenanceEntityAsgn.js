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
 * Date: 09/06/2012
 * Modified by: Jammi Dee 09/06/2012
 * 
*/

/*
 This is a sample page that can used as template
*/

dojo.declare("PgMainMaintenanceEntityAsgn", wm.Page, {
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
            // Added by Jammi Dee 08/10/2012
            //this.selAsgnType.setOptions("GROUP,SINGLE");
            
            //this.selOverride.setOptions("OFF,READONLY");
            
            //Added by Jammi Dee 07/25/2012
            //alert( this.dgSelectSite.selectedItem.getData().siteid );
            //this.svarSitesAsgnView.setValue("input.pSiteId", this.dgSelectSite.selectedItem.getData().siteid );
            //this.svarSitesAsgnView.setValue("input.pEntity", app.varEntity.getValue("dataValue") );
            //this.svarSitesAsgnView.update();     
            
            
            // Added by Jammi Dee 05/06/2012 
            app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
            app.svarLogging.setValue("input.pMsg","Manage Entity Assignment Page.");
            app.svarLogging.setValue("input.pModuleId","MAINTENANCE");
            app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
            app.svarLogging.setValue("input.pProcess","PAGELOAD");
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
        
        this.lblTitle.setCaption("Maintenance : Entity Assignment" );
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
//  ddSelectSiteShow: function(inSender) {
//	  try {
		  
//            this.svarSiteView.setValue("input.pEntity", app.varEntity.getValue("dataValue") );
//            this.svarSiteView.update(); 
		  
//	  } catch(e) {
          
//		  console.error('ERROR IN ddSelectSiteShow: ' + e); 
 //         alert( 'ERROR IN ddSelectSiteShow: ' + e );
//	  } 
//  },
  
  //Added by Jammi Dee 07/23/2012
  //btnSelectSiteSelectClick: function(inSender) {
	//  try {

      //    this.txtSite.setValue("dataValue", this.dgSelectSite.selectedItem.getData().siteid ); 
    //      this.lblSite.setCaption(this.dgSelectSite.selectedItem.getData().description);
          
          
          //alert( this.dgSelectSite.selectedItem.getData().siteid + " | " + app.varEntity.getValue("dataValue") );
    //      this.svarSitesAsgnView.setValue("input.pSiteId", this.dgSelectSite.selectedItem.getData().siteid );
    //      this.svarSitesAsgnView.setValue("input.pEntity", app.varEntity.getValue("dataValue") );
    //      this.svarSitesAsgnView.update();          
          
          
     //     this.ddSelectSite.hide();
		  
	 // } catch(e) {
          
	//	  console.error('ERROR IN btnSelectSiteSelectClick: ' + e); 
    //      alert( 'ERROR IN btnSelectSiteSelectClick: ' + e );
	//  } 
 // },
  
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
  
  //Added by Jammi Dee 07/23/2012
  btnSelectUserAddClick: function(inSender) {
	  try {
		  
            var currdate    = new Date();
            var currmonth   = currdate.getMonth() + 1;
            var currday     = currdate.getDate();
            var curryear    = currdate.getFullYear();
            var sdate       = curryear + "-" + currmonth + "-" + currday;
            var edate       = sdate;          
          
            var userid      = this.dgSelectUser.selectedItem.getData().userid;
            var username    = this.dgSelectUser.selectedItem.getData().username;
        
          
            var eQuery =          "insert into tblEntityAsgn( " + 
                                   "entityid, " + 
                                   "userid, " +
                                   "username, " +
                                   "description, " +
                                   "startdate, " + 
                                   "enddate, " + 
                                   "sstatus " + 
                                   ")" +
                                   "values( " + 
                                   "'" + this.txtEntity.getValue("dataValue") + "', " + 
                                   "'" + userid + "', " + 
                                   "'" + username + "', " +
                                   "'" + this.lblSite.caption + "', " +
                                   "'" + sdate + "', " + 
                                   "'" + edate + "', " + 
                                   "'" + "ACTIVE" + "' " + 
                                   ");";
                                   
            //alert( eQuery );                       
            this.svarExecGenericNonQuery.setValue("input.eQuery", eQuery);
            this.svarExecGenericNonQuery.update();                     
          
            this.ddSelectUser.hide();
		  
	  } catch(e) {
          
		  console.error('ERROR IN btnSelectUserAddClick: ' + e); 
          alert( 'ERROR IN btnSelectUserAddClick: ' + e );
          
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
  
  //Added by Jammi Dee 08/10/2012
  //dgSelectSiteCellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
  //    try {
		  
//          this.btnSelectSiteSelectClick( inSender );
//		  
//	  } catch(e) {
//		  console.error('ERROR IN dgSelectSiteCellDblClick: ' + e); 
//	  } 
  //},  
  
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
  
  //Added by Jammi Dee 07/27/2012
  pic_deleteClick: function(inSender) {
	  try {
		  
          var juid      = this.dgData.selectedItem.getData().juid;
          
          if( juid !== "" || juid !== null ){
              
                var response = confirm("Delete: Are you sure to delete this item?");
            
                if (response) {
                    
                    this.svarEntityAsgnDelete.setValue("input.pJuId", juid );
                    this.svarEntityAsgnDelete.setValue("input.pEntity", this.txtEntity.getValue("dataValue") );
                    this.svarEntityAsgnDelete.update(); 
                    
                }    
       
          } else {
              
              alert( "No item selected for deletion." );
              
          }

          
          
	  } catch(e) {
          
		  console.error('ERROR IN pic_deleteClick: ' + e); 
          alert( 'ERROR IN pic_deleteClick: ' + e );
	  } 
  },
  
  //Added by Jammi Dee 07/28/2012
  svarEntityAsgnDeleteResult: function(inSender, inDeprecated) {
	  try {

          this.svarEntityAsgnView.setValue("input.pEntity", this.txtEntity.getValue("dataValue") );
          this.svarEntityAsgnView.update();  
		  
	  } catch(e) {
		  console.error('ERROR IN svarEntityAsgnDeleteResult: ' + e); 
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
  
  //Added by Jammi Dee 08/10/2012
  btnUpdateActionClick: function(inSender) {
	  try {

          this.svarEntityAsgnUpdate.setValue("input.pJuid",          this.dgData.selectedItem.getData().juid );
          this.svarEntityAsgnUpdate.setValue("input.pEntity",        this.txtEntity.getValue("dataValue") );
          this.svarEntityAsgnUpdate.setValue("input.pStatus",        this.selStatus.getValue("dataValue") );
          this.svarEntityAsgnUpdate.update(); 
          
	  } catch(e) {
          
		  console.error('ERROR IN btnUpdateActionClick: ' + e); 
          alert( 'ERROR IN btnUpdateActionClick: ' + e );
	  } 
  },
  
  //Added by Jammi Dee 08/13/2012
  svarEntityAsgnUpdateResult: function(inSender, inDeprecated) {
	  try {

          this.svarEntityAsgnView.setValue("input.pEntity", this.txtEntity.getValue("dataValue") );
          this.svarEntityAsgnView.update(); 
		  
	  } catch(e) {
          
		  console.error('ERROR IN svarEntityAsgnUpdateResult: ' + e); 
          alert( "No data selected." );
          
	  } 
  },

  //Added by Jammi Dee 09/08/2012
  btnSelectSelectClick: function(inSender) {
	  try {
	
          this.txtEntity.setValue("dataValue", this.dgDataSelect.selectedItem.getData().entityid ); 
          this.lblSite.setCaption(this.dgDataSelect.selectedItem.getData().company );
          
          this.svarEntityAsgnView.setValue("input.pEntity",     this.dgDataSelect.selectedItem.getData().entityid );
          this.svarEntityAsgnView.update();          
          
          this.ddSelectEntity.hide();    
    
		  
	  } catch(e) {
          
		  console.error('ERROR IN btnSelectSelectClick: ' + e); 
          aalert( 'ERROR IN btnSelectSelectClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 09/08/2012
  svarEntityAsgnViewResult: function(inSender, inDeprecated) {
	  try {
		  
          
		  
	  } catch(e) {
		  console.error('ERROR IN svarEntityAsgnViewResult: ' + e); 
	  } 
  },
  
  //Added by Jammi Dee 09/08/2012
  dgDataSelectCellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
	  try {
		  
          this.btnSelectSelectClick( inSender );
		  
	  } catch(e) {
		  console.error('ERROR IN dgDataSelectCellDblClick: ' + e); 
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