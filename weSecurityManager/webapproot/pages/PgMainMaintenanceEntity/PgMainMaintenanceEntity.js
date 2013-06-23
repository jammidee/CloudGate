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

dojo.declare("PgMainMaintenanceEntity", wm.Page, {
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
            
            this.splitEntity.setWidth( 2 );
            
            // Initialize the application - Jammi Dee 03/25/2012
            this.initApplication();      
            
            //Added by Jammi Dee 11/25/2012
            app.svarUpdateSessionApp.setValue("input.pJuid",app.varSessionId.getValue("dataValue"));
            app.svarUpdateSessionApp.update();    
            
            // Added by Jammi Dee 06/09/2012
            this.svarEntity.update();
            this.dgLookup.dataSet.update();
            
            // Added by Jammi Dee 05/06/2012 
            app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
            app.svarLogging.setValue("input.pMsg","Manage Entity.");
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
        
        this.lblTitle.setCaption("Maintenance : Entity" );
        this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
    
    },  

  svarAppListResult: function(inSender, inDeprecated) {
	  try {

//           this.dgLookup.dataSet.update();
		  
	  } catch(e) {
          
		  console.error('ERROR IN svarAppListResult: ' + e);
          alert( 'ERROR IN svarAppListResult: ' + e );
          
	  } 
  },

  // Added by Jammi Dee 06/09/2012
  dgLookupClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
	  try {
		  
          this.txtEntity.setValue("dataValue", this.dgLookup.selectedItem.getData().entityid );
          this.txtCompany.setValue("dataValue", this.dgLookup.selectedItem.getData().company );
          this.txtDescription.setValue("dataValue", this.dgLookup.selectedItem.getData().description );
          this.txtaAddr01.setValue("dataValue", this.dgLookup.selectedItem.getData().addr01 );
          this.txtaAddr02.setValue("dataValue", this.dgLookup.selectedItem.getData().addr02 );
          this.txtaAddr03.setValue("dataValue", this.dgLookup.selectedItem.getData().addr03 );
		  
	  } catch(e) {
          
		  console.error('ERROR IN dgLookupClick: ' + e);
          alert( 'ERROR IN dgLookupClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 08/15/2012
  pic_addClick: function(inSender) {
	  try {
		  
          //Added by Jammi Dee 12/01/2012
          this.svarCheckEntityLicense.update();
		  
	  } catch(e) {
          
		  console.error('ERROR IN pic_addClick: ' + e);
          alert( 'ERROR IN pic_addClick: ' + e );
	  } 
  },
  
  //Added by Jammi Dee 11/30/2012
  svarCheckEntityLicenseResult: function(inSender, inDeprecated) {
      try {
		  
          if( inSender.getValue("dataValue") === "OK" ){
              
                this.ddNewEntity.show();             
              
          } else {
              
                alert("Maximum number of ENTITIES allowed has been reached!");              
              
          }
          

		  
	  } catch(e) {
          
		  console.error('ERROR IN svarCheckEntityLicenseResult: ' + e);
          alert( 'ERROR IN svarCheckEntityLicenseResult: ' + e );
          
	  } 
  },  
  
  //Added by Jammi Dee 08/15/2012
  btnActionAddClick: function(inSender) {
	  try {

            var currdate    = new Date();
            var currmonth   = currdate.getMonth() + 1;
            var currday     = currdate.getDate();
            var curryear    = currdate.getFullYear();
            var sdate       = curryear + "-" + currmonth + "-" + currday;
            var edate       = sdate;  
            
            //Used this UUID generation when database UUID is not available
            var UUID = this.uuid4();
            //alert( UUID );
          
            var eQuery =           "insert into tblentity( " + 
                                   "juid, " +
                                   "entityid, " + 
                                   "company, " + 
                                   "description, " + 
                                   "addr01, " + 
                                   "addr02, " + 
                                   "addr03, " + 
                                   "sstatus, " + 
                                   "startdate, " + 
                                   "enddate, " + 
                                   "deleted " + 
                                   ")" +
                                   "values( " + 
                                   "'" + UUID + "', " +
                                   "'" + this.txtEntityNew.getValue("dataValue") + "', " + 
                                   "'" + this.txtCompanyNew.getValue("dataValue") + "', " + 
                                   "'" + this.txtDescriptionNew.getValue("dataValue") + "', " +
                                   "'" + this.txtaAddress01.getValue("dataValue") + "', " + 
                                   "'" + this.txtaAddress02.getValue("dataValue") + "', " +
                                   "'" + this.txtaAddress03.getValue("dataValue") + "', " +
                                   "'" + "ACTIVE" + "', " + 
                                   "'" + sdate + "', " + 
                                   "'" + edate + "', " + 
                                   "0 " + 
                                   ");";
        
        //alert( eQuery );                       
        this.svarExecGenericNonQuery.setValue("input.eQuery", eQuery);
        this.svarExecGenericNonQuery.update();

         this.ddNewEntity.hide();
		  
	  } catch(e) {
          
		  console.error('ERROR IN btnActionAddClick: ' + e); 
          alert( 'ERROR IN btnActionAddClick: ' + e );
          
	  } 
  },
  
 //http://blogs.cozi.com/tech/2010/04/generating-uuids-in-javascript.html 
 uuid4: function()
    {
        return this._uuid( this.randomInt(), this.randomInt(), this.randomInt(), this.randomInt(), 4);
    },  
  
  // Create a versioned UUID from w1..w4, 32-bit non-negative ints
 _uuid: function(w1, w2, w3, w4, version)
    {
        //var uuid = new Array(36);
        var uuid = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
        var data = [
                    (w1 & 0xFFFFFFFF),
                    (w2 & 0xFFFF0FFF) | ((version || 4) << 12), // version (1-5)
                    (w3 & 0x3FFFFFFF) | 0x80000000,    // rfc 4122 variant
                    (w4 & 0xFFFFFFFF)
                    ];
        for (var i = 0, k = 0; i < 4; i++)
            {
                var rnd = data[i];
                for (var j = 0; j < 8; j++)
                {
                    if (k == 8 || k == 13 || k == 18 || k == 23) {
                        uuid[k++] = '-';
                    }
                var r = (rnd >>> 28) & 0xf; // Take the high-order nybble
                rnd = (rnd & 0x0FFFFFFF) << 4;
                uuid[k++] = this.hex.charAt(r);
            }
        }
        return uuid.join('');
    },

 hex: '0123456789abcdef',

 // Return a random integer in [0, 2^32).
 randomInt: function()
    {
        return Math.floor(0x100000000 * Math.random());
    },  
  
  //Added by Jammi Dee 08/15/2012
  svarExecGenericNonQueryResult: function(inSender, inDeprecated) {
	  try {

        this.svarEntity.update();
        this.dgLookup.dataSet.update();
        
        alert( "New Entity has been added." );
		  
	  } catch(e) {
          
		  console.error('ERROR IN svarExecGenericNonQueryResult: ' + e);
          alert( 'ERROR IN svarExecGenericNonQueryResult: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 08/15/2012
  ddNewEntityShow: function(inSender) {
	  try {
		  
	  } catch(e) {
          
		  console.error('ERROR IN ddNewEntityShow: ' + e);
          alert( 'ERROR IN ddNewEntityShow: ' + e );
          
	  } 
  },
  
  pic_deleteClick: function(inSender) {
	  try {

           var response = confirm("Delete: Are you sure to delete this ENTITY?");
            
           if (response) {
               
                this.svarEntityDelete.setValue("input.pEntity", this.dgLookup.selectedItem.getData().entityid );
                this.svarEntityDelete.update();               
               
           }   

		  
	  } catch(e) {
          
		  console.error('ERROR IN pic_deleteClick: ' + e);
          alert( 'ERROR IN pic_deleteClick: ' + e );
          
	  } 
  },
  
  svarEntityDeleteResult: function(inSender, inDeprecated) {
	  try {

            // Added by Jammi Dee 06/09/2012
            this.svarEntity.update();
            this.dgLookup.dataSet.update();

            alert("Entity has been deleted.");
		  
	  } catch(e) {
          
		  console.error('ERROR IN svarEntityDeleteResult: ' + e);
          alert( 'ERROR IN svarEntityDeleteResult: ' + e );
          
	  } 
  },

  //Added by Jammi Dee 05/05/2013
  pic_backClick: function(inSender) {
      try {
          
          app.pdWaitLoadPage.show();
          this.navPgMainMaintenance.update();
          
      } catch(e) {
          
          console.error('ERROR IN pic_backClick: ' + e);
          alert( 'ERROR IN pic_backClick: ' + e );
          
          
	  }		
  },
  
  //Added by Jammi Dee 05/05/2013
  pic_homeClick: function(inSender) {
      try {
          
          app.pdWaitLoadPage.show();
          this.navPgMain.update();
          
      } catch(e) {
          
		  console.error('ERROR IN pic_homeClick: ' + e);
          alert( 'ERROR IN pic_homeClick: ' + e );
          
          
	  }		
  },
  
  //Added by Jammi Dee 05/05/2013
  lblBackClick: function(inSender, inEvent) {
      try {
          
          app.pdWaitLoadPage.show();
          this.navPgMain.update();
          
      } catch(e) {
          
          console.error('ERROR IN lblBackClick: ' + e);
          alert( 'ERROR IN lblBackClick: ' + e );
          
          
	  }
  },
  
	_end: 0
});