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
 * Date: 09/30/2012
 * Modified by: Jammi Dee 09/30/2012 10:00AM
 * 
*/

/*
 This is a sample page that can used as template
*/

dojo.declare("PgMainMaintenanceOrg", wm.Page, {
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
            
            //Added by Jammi Dee 10/01/2012
            this.svarOrgDivisionView.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
            this.svarOrgDivisionView.update();

            this.svarOrgDepartmentView.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
            this.svarOrgDepartmentView.update();

            this.svarOrgSectionView.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
            this.svarOrgSectionView.update();

            this.svarOrgLocationView.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
            this.svarOrgLocationView.update();

            //Added by Jammi Dee 01/06/2013
            this.svarOrgShiftView.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
            this.svarOrgShiftView.update();

            //Added by Jammi Dee 01/06/2013
            this.svarOrgRestdayView.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
            this.svarOrgRestdayView.update();

            // Added by Jammi Dee 05/06/2012 
            app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
            app.svarLogging.setValue("input.pMsg","Manage Organization Page.");
            app.svarLogging.setValue("input.pModuleId","ORGLOOKUP");
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
        
        this.lblTitle.setCaption("Maintenance : Organization" );
        this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
    
    },  


  //Added by Jammi Dee 10/01/2012
  dgDivClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
	  try {
		  
          this.txtDivId.setValue("dataValue",           this.dgDiv.selectedItem.getData().orgid );
          this.txtDivDescription.setValue("dataValue",  this.dgDiv.selectedItem.getData().description );          
		  
	  } catch(e) {
          
		  //console.error('ERROR IN dgDivClick: ' + e);
          //alert( 'ERROR IN dgDivClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 10/01/2012
  dgDepClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
	  try {
		  
          this.txtDepId.setValue("dataValue",           this.dgDep.selectedItem.getData().orgid );
          this.txtDepDescription.setValue("dataValue",  this.dgDep.selectedItem.getData().description );  
          
	  } catch(e) {
          
		  //console.error('ERROR IN dgDepClick: ' + e); 
          //alert( 'ERROR IN dgDepClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 10/01/2012
  dgSecClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
	  try {
		  
          this.txtSecId.setValue("dataValue",           this.dgSec.selectedItem.getData().orgid );
          this.txtSecDescription.setValue("dataValue",  this.dgSec.selectedItem.getData().description );  
          
	  } catch(e) {
          
		  //console.error('ERROR IN dgSecClick: ' + e); 
          //alert( 'ERROR IN dgSecClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 10/01/2012
  dgLocClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
	  try {
		  
          this.txtLocId.setValue("dataValue",           this.dgLoc.selectedItem.getData().orgid );
          this.txtLocDescription.setValue("dataValue",  this.dgLoc.selectedItem.getData().description );  
          
	  } catch(e) {
          
		  //console.error('ERROR IN dgLocClick: ' + e); 
          //alert( 'ERROR IN dgLocClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 10/02/2012
  ddNewDivisionShow: function(inSender) {
      try {
		  
		  
          
	  } catch(e) {
          
		  console.error('ERROR IN ddNewDivisionShow: ' + e);
          alert( 'ERROR IN ddNewDivisionShow: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 10/02/2012
  btnDivCreateClick: function(inSender) {
	  try {
          
            //Used this UUID generation when database UUID is not available
            var UUID = app.uuid4();
            
            var eQuery =           "insert into tblOrgdivision( " + 
                                   "juid, " +
                                   "entityid, " + 
                                   "orgid, " + 
                                   "description, " + 
                                   "pid, " + 
                                   "contact01, " + 
                                   "contact02, " + 
                                   "sstatus " + 
                                   ")" +
                                   "values( " + 
                                   "'" + UUID + "', " +
                                   "'" + app.varEntity.getValue("dataValue") + "', " +
                                   "'" + this.txtDivNew.getValue("dataValue") + "', " + 
                                   "'" + this.txtDivNewDescription.getValue("dataValue") + "', " + 
                                   "'" + "_NA_" + "', " +
                                   "'" + this.txtDivNewContact01.getValue("dataValue") + "', " + 
                                   "'" + this.txtDivNewContact02.getValue("dataValue") + "', " +
                                   "'" + this.selDivNewStatus.getValue("dataValue") + "' " + 
                                   ");";
            //alert( eQuery );                       
            this.svarExecGenericNonQueryDiv.setValue("input.eQuery", eQuery);
            this.svarExecGenericNonQueryDiv.update();

            //Update the display
            this.svarOrgDivisionView.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
            this.svarOrgDivisionView.update();   
        
            this.dgDiv.dataSet.update();
            
            this.ddNewDivision.hide();
          
		  
	  } catch(e) {
          
		  console.error('ERROR IN btnDivCreateClick: ' + e);
          alert( 'ERROR IN btnDivCreateClick: ' + e );
          
	  } 
  },

  //Added by Jammi Dee 10/02/2012
  pic_DivDeleteClick: function(inSender) {
	  try {
		  
        var response = confirm("Delete: Are you sure to delete this item?");
            
        if (response) {  

            var eQuery = "delete from tblOrgDivision where juid = '" + this.dgDiv.selectedItem.getData().juid + "' ";
          
            this.svarExecGenericNonQueryDiv.setValue("input.eQuery", eQuery);
            this.svarExecGenericNonQueryDiv.update();  
        
            //Update the display
            this.svarOrgDivisionView.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
            this.svarOrgDivisionView.update();   
        
            this.dgDiv.dataSet.update();


        }    
          

		  
	  } catch(e) {
          
		  console.error('ERROR IN pic_DivDeleteClick: ' + e);
          alert( 'ERROR IN pic_DivDeleteClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 10/02/2012
  ddNewDepartmentShow: function(inSender) {
	  try {
		  
		  
	  } catch(e) {
          
		  console.error('ERROR IN ddNewDepartmentShow: ' + e); 
          alert( 'ERROR IN ddNewDepartmentShow: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 10/02/2012
  btnDepCreateClick: function(inSender) {
	  try {
		  
            //Used this UUID generation when database UUID is not available
            var UUID = app.uuid4();
            
            var eQuery =           "insert into tblOrgDepartment( " + 
                                   "juid, " +
                                   "entityid, " + 
                                   "orgid, " + 
                                   "description, " + 
                                   "pid, " + 
                                   "itmgrid, " +
                                   "itmgrname, " +
                                   "contact01, " + 
                                   "contact02, " + 
                                   "location, " + 
                                   "sstatus " + 
                                   ")" +
                                   "values( " + 
                                   "'" + UUID + "', " +
                                   "'" + app.varEntity.getValue("dataValue") + "', " +
                                   "'" + this.txtDepNew.getValue("dataValue") + "', " + 
                                   "'" + this.txtDepNewDescription.getValue("dataValue") + "', " + 
                                   "'" + this.txtDepNewParent.getValue("dataValue") + "', " +
                                   "'" + this.txtDepNewItmgrId.getValue("dataValue") + "', " +
                                   "'" + this.txtDepNewItmgrName.getValue("dataValue") + "', " +
                                   "'" + this.txtDepNewContact01.getValue("dataValue") + "', " + 
                                   "'" + this.txtDepNewContact02.getValue("dataValue") + "', " +
                                   "'" + this.txtDepNewLocation.getValue("dataValue") + "', " +
                                   "'" + this.selDepNewStatus.getValue("dataValue") + "' " + 
                                   ");";
            // alert( eQuery );                       
            this.svarExecGenericNonQueryDep.setValue("input.eQuery", eQuery);
            this.svarExecGenericNonQueryDep.update();

            //Update the display
            this.svarOrgDepartmentView.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
            this.svarOrgDepartmentView.update();   
        
            this.dgDep.dataSet.update();
            
            this.ddNewDepartment.hide();
    
	  } catch(e) {
          
		  console.error('ERROR IN btnDepCreateClick: ' + e);
          alert( 'ERROR IN btnDepCreateClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 10/02/2012
  pic_DepDeleteClick: function(inSender) {
	  try {
		  
        var response = confirm("Delete: Are you sure to delete this item?");
            
        if (response) {  

            var eQuery = "delete from tblOrgDepartment where juid = '" + this.dgDep.selectedItem.getData().juid + "' ";
          
            this.svarExecGenericNonQueryDep.setValue("input.eQuery", eQuery);
            this.svarExecGenericNonQueryDep.update();  
        
            //Update the display
            this.svarOrgDepartmentView.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
            this.svarOrgDepartmentView.update();   
        
            this.dgDep.dataSet.update();
        }    
    
	  } catch(e) {
          
		  console.error('ERROR IN pic_DepDeleteClick: ' + e);
          alert( 'ERROR IN pic_DepDeleteClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 10/03/2012
  ddNewSectionShow: function(inSender) {
	  try {
		  
		  
	  } catch(e) {
          
		  console.error('ERROR IN ddNewSectionShow: ' + e);
          alert( 'ERROR IN ddNewSectionShow: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 10/03/2012
  btnSecCreateClick: function(inSender) {
	  try {
		  
            //Used this UUID generation when database UUID is not available
            var UUID = app.uuid4();
            
            var eQuery =           "insert into tblOrgSection( " + 
                                   "juid, " +
                                   "entityid, " + 
                                   "orgid, " + 
                                   "description, " + 
                                   "pid, " + 
                                   "contact01, " + 
                                   "contact02, " + 
                                   "sstatus " + 
                                   ")" +
                                   "values( " + 
                                   "'" + UUID + "', " +
                                   "'" + app.varEntity.getValue("dataValue") + "', " +
                                   "'" + this.txtSecNew.getValue("dataValue") + "', " + 
                                   "'" + this.txtSecNewDescription.getValue("dataValue") + "', " + 
                                   "'" + "_NA_" + "', " +
                                   "'" + this.txtSecNewContact01.getValue("dataValue") + "', " + 
                                   "'" + this.txtSecNewContact02.getValue("dataValue") + "', " +
                                   "'" + this.selSecNewStatus.getValue("dataValue") + "' " + 
                                   ");";
            //alert( eQuery );                       
            this.svarExecGenericNonQuerySec.setValue("input.eQuery", eQuery);
            this.svarExecGenericNonQuerySec.update();

            //Update the display
            this.svarOrgSectionView.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
            this.svarOrgSectionView.update();   
        
            this.dgSec.dataSet.update();
            
            this.ddNewSection.hide();
          
		  
	  } catch(e) {
          
		  console.error('ERROR IN btnSecCreateClick: ' + e);
          alert( 'ERROR IN btnSecCreateClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 10/04/2012
  pic_SecDeleteClick: function(inSender) {
	  try {
		  
        var response = confirm("Delete: Are you sure to delete this item?");
            
        if (response) {  

            var eQuery = "delete from tblOrgSection where juid = '" + this.dgSec.selectedItem.getData().juid + "' ";
          
            this.svarExecGenericNonQuerySec.setValue("input.eQuery", eQuery);
            this.svarExecGenericNonQuerySec.update();  
        
            //Update the display
            this.svarOrgSectionView.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
            this.svarOrgSectionView.update();   
        
            this.dgSec.dataSet.update();
            
        }    
          
	  } catch(e) {
          
		  console.error('ERROR IN pic_SecDeleteClick: ' + e); 
          alert( 'ERROR IN pic_SecDeleteClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 10/04/2012
  ddNewLocationShow: function(inSender) {
	  try {
		  
		  
	  } catch(e) {
          
		  console.error('ERROR IN ddNewLocationShow: ' + e);
          alert( 'ERROR IN ddNewLocationShow: ' + e );
	  } 
  },
  
  //Added by Jammi Dee 10/04/2012
  btnLocCreateClick: function(inSender) {
	  try {
		  
            //Used this UUID generation when database UUID is not available
            var UUID = app.uuid4();
            
            var eQuery =           "insert into tblOrgLocation( " + 
                                   "juid, " +
                                   "entityid, " + 
                                   "orgid, " + 
                                   "description, " + 
                                   "pid, " + 
                                   "contact01, " + 
                                   "contact02, " + 
                                   "geodesc, " +
                                   "geolon, " +
                                   "geolat, " +
                                   "sstatus " + 
                                   ")" +
                                   "values( " + 
                                   "'" + UUID + "', " +
                                   "'" + app.varEntity.getValue("dataValue") + "', " +
                                   "'" + this.txtLocNew.getValue("dataValue") + "', " + 
                                   "'" + this.txtLocNewDescription.getValue("dataValue") + "', " + 
                                   "'" + "_NA_" + "', " +
                                   "'" + this.txtLocNewContact01.getValue("dataValue") + "', " + 
                                   "'" + this.txtLocNewContact02.getValue("dataValue") + "', " +
                                   "'" + this.txtLocNewGeoDesc.getValue("dataValue") + "', " +
                                   "'" + this.txtLocNewGeoLon.getValue("dataValue") + "', " +
                                   "'" + this.txtLocNewGeoLat.getValue("dataValue") + "', " +
                                   "'" + this.selLocNewStatus.getValue("dataValue") + "' " + 
                                   ");";
            //alert( eQuery );                       
            this.svarExecGenericNonQueryLoc.setValue("input.eQuery", eQuery);
            this.svarExecGenericNonQueryLoc.update();

            //Update the display
            this.svarOrgLocationView.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
            this.svarOrgLocationView.update();   
        
            this.dgLoc.dataSet.update();
            
            this.ddNewLocation.hide();
          

	  } catch(e) {
          
		  console.error('ERROR IN btnLocCreateClick: ' + e);
          alert( 'ERROR IN btnLocCreateClick: ' + e );
	  } 
  },
  
  //Added by Jammi Dee 10/04/2012
  pic_LocDeleteClick: function(inSender) {
	  try {

        var response = confirm("Delete: Are you sure to delete this item?");
            
        if (response) {  

            var eQuery = "delete from tblOrgLocation where juid = '" + this.dgLoc.selectedItem.getData().juid + "' ";
          
            this.svarExecGenericNonQueryLoc.setValue("input.eQuery", eQuery);
            this.svarExecGenericNonQueryLoc.update();  
        
            //Update the display
            this.svarOrgLocationView.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
            this.svarOrgLocationView.update();   
        
            this.dgLoc.dataSet.update();
            
        }    
		  
	  } catch(e) {
          
		  console.error('ERROR IN pic_LocDeleteClick: ' + e);
          alert( 'ERROR IN pic_LocDeleteClick: ' + e );
	  } 
  },
  pic_ShiftDeleteClick: function(inSender) {
	  try {
		  this.pic_LocDeleteClick(inSender);
		  
	  } catch(e) {
		  console.error('ERROR IN pic_ShiftDeleteClick: ' + e); 
	  } 
  },
  pic_RestDeleteClick: function(inSender) {
	  try {
		  this.pic_LocDeleteClick(inSender);
		  
	  } catch(e) {
		  console.error('ERROR IN pic_RestDeleteClick: ' + e); 
	  } 
  },
  
  //Added by Jammi Dee 01/07/2013
  dgShiftClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
	  try {
		  
          this.txtShiftId.setValue("dataValue",           this.dgShift.selectedItem.getData().orgid );
          this.txtshiftDescription.setValue("dataValue",  this.dgShift.selectedItem.getData().description );            
		  
	  } catch(e) {
          
		  console.error('ERROR IN dgShiftClick: ' + e);
          alert( 'ERROR IN dgShiftClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 01/07/2013
  dgRestdayClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
	  try {
		  
          this.txtRestId.setValue("dataValue",           this.dgRestday.selectedItem.getData().orgid );
          this.txtRestDescription.setValue("dataValue",  this.dgRestday.selectedItem.getData().description ); 

	  } catch(e) {
          
		  console.error('ERROR IN dgRestdayClick: ' + e);
          alert( 'ERROR IN dgRestdayClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 01/07/2013
  btnShiftCreateClick: function(inSender) {
	  try {
		  
            //Used this UUID generation when database UUID is not available
            var UUID = app.uuid4();
            
            var eQuery =           "insert into tblOrgShift( " + 
                                   "juid, " +
                                   "entityid, " + 
                                   "orgid, " + 
                                   "description, " + 
                                   "pid, " + 
                                   "contact01, " + 
                                   "contact02, " + 
                                   "geodesc, " +
                                   "geolon, " +
                                   "geolat, " +
                                   "sstatus " + 
                                   ")" +
                                   "values( " + 
                                   "'" + UUID + "', " +
                                   "'" + app.varEntity.getValue("dataValue") + "', " +
                                   "'" + this.txtLocNew.getValue("dataValue") + "', " + 
                                   "'" + this.txtLocNewDescription.getValue("dataValue") + "', " + 
                                   "'" + "_NA_" + "', " +
                                   "'" + this.txtLocNewContact01.getValue("dataValue") + "', " + 
                                   "'" + this.txtLocNewContact02.getValue("dataValue") + "', " +
                                   "'" + this.txtLocNewGeoDesc.getValue("dataValue") + "', " +
                                   "'" + this.txtLocNewGeoLon.getValue("dataValue") + "', " +
                                   "'" + this.txtLocNewGeoLat.getValue("dataValue") + "', " +
                                   "'" + this.selLocNewStatus.getValue("dataValue") + "' " + 
                                   ");";
            //alert( eQuery );                       
            this.svarExecGenericNonQueryLoc.setValue("input.eQuery", eQuery);
            this.svarExecGenericNonQueryLoc.update();

            //Update the display
            this.svarOrgShiftView.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
            this.svarOrgShiftView.update();   
        
            this.dgShift.dataSet.update();
            
            this.ddNewShift.hide();		  
          
          
	  } catch(e) {
          
		  console.error('ERROR IN btnShiftCreateClick: ' + e);
          alert( 'ERROR IN btnShiftCreateClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 01/07/2013
  btnRestdayCreateClick: function(inSender) {
	  try {
		  
            //Used this UUID generation when database UUID is not available
            var UUID = app.uuid4();
            
            var eQuery =           "insert into tblOrgRestday( " + 
                                   "juid, " +
                                   "entityid, " + 
                                   "orgid, " + 
                                   "description, " + 
                                   "pid, " + 
                                   "contact01, " + 
                                   "contact02, " + 
                                   "geodesc, " +
                                   "geolon, " +
                                   "geolat, " +
                                   "sstatus " + 
                                   ")" +
                                   "values( " + 
                                   "'" + UUID + "', " +
                                   "'" + app.varEntity.getValue("dataValue") + "', " +
                                   "'" + this.txtLocNew.getValue("dataValue") + "', " + 
                                   "'" + this.txtLocNewDescription.getValue("dataValue") + "', " + 
                                   "'" + "_NA_" + "', " +
                                   "'" + this.txtLocNewContact01.getValue("dataValue") + "', " + 
                                   "'" + this.txtLocNewContact02.getValue("dataValue") + "', " +
                                   "'" + this.txtLocNewGeoDesc.getValue("dataValue") + "', " +
                                   "'" + this.txtLocNewGeoLon.getValue("dataValue") + "', " +
                                   "'" + this.txtLocNewGeoLat.getValue("dataValue") + "', " +
                                   "'" + this.selLocNewStatus.getValue("dataValue") + "' " + 
                                   ");";
            //alert( eQuery );                       
            this.svarExecGenericNonQueryLoc.setValue("input.eQuery", eQuery);
            this.svarExecGenericNonQueryLoc.update();

            //Update the display
            this.svarOrgRestdayView.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
            this.svarOrgRestdayView.update();   
        
            this.dgRestday.dataSet.update();
            
            this.ddNewRestday.hide();


	  } catch(e) {
          
		  console.error('ERROR IN btnRestdayCreateClick: ' + e);
          alert( 'ERROR IN btnRestdayCreateClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 01/07/2013
  pic_ShiftAddClick: function(inSender) {
	  try {
		  
          this.ddNewShift.show();
		  
	  } catch(e) {
          
		  console.error('ERROR IN pic_ShiftAddClick: ' + e);
          alert( 'ERROR IN pic_ShiftAddClick: ' + e );
	  } 
  },
  
  //Added by Jammi Dee 01/07/2013
  pic_RestAddClick: function(inSender) {
	  try {
		  
          this.ddNewRestday
          .show();
		  
	  } catch(e) {
          
		  console.error('ERROR IN pic_RestAddClick: ' + e); 
          alert( 'ERROR IN pic_RestAddClick: ' + e );
          
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