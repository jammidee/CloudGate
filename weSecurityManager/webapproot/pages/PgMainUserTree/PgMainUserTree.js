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
 * Date: 06/10/2012
 * Modified by: Jammi Dee 06/16/2012 12:20
 * 
*/

/*
 Created by Jammi Dee 04/15/2012
 This is a sample page that can used as template
*/

dojo.declare("PgMainUserTree", wm.Page, {
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
            
            //Added by Jammi Dee 08/13/2012
            //Temporary only until allowed deleting here
            this.pic_delete.setShowing(false);
            
            // Added by Jammi Dee 06/10/2012
            //this.svarUserTree.setValue("input.sqlScript","select userid, firstname, pid from tbluser where entityid = 'NGLCSL'" );
            //this.svarUserTree.update();
            this.pnlLookupGrid.setShowing(false);

            // Added by Jammi Dee 06/16/2012
            this.svarUserProp.setValue("input.sqlScript","select userid, firstname, pid from tbluser where entityid = '" + app.varEntity.getValue("dataValue") + "'" );
            this.svarUserProp.setValue("input.treeType","FILE" );
            this.svarUserProp.update();

            // Added by Jammi Dee 05/06/2012 
            app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
            app.svarLogging.setValue("input.pMsg","View User Tree.");
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
        
        this.lblTitle.setCaption("User : Tree" );
        this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
    
    },  

  svarAppListResult: function(inSender, inDeprecated) {
	  try {

//           this.dgLookup.dataSet.update();
		  
	  } catch(e) {
		  console.error('ERROR IN svarAppListResult: ' + e); 
	  } 
  },

  // Added by Jammi Dee 06/10/2012
  svarUserTreeResult: function(inSender, inDeprecated) {
	  try {
		  
		 this.otData.setValue("data", inSender.getValue("dataValue") ); 
          
	  } catch(e) {
		  console.error('ERROR IN svarUserTreeResult: ' + e); 
	  } 
  },
  
  // Added by Jammi Dee 06/10/2012
  otDataClick: function(inSender, inNode) {
	  try {

          var strNode  = inNode.content;
          strNode = strNode.substring(0, strNode.indexOf(":"));
          
          // alert(strNode.replace(/^\s+|\s+$/g, ''));
          // strNode.replace(/^\s+|\s+$/g, '') -- trim command
          
          this.svarUserTreeQry.setValue("input.pUserId", strNode.replace(/^\s+|\s+$/g, '') );
          this.svarUserTreeQry.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
          this.svarUserTreeQry.update();  
          
          // Expand the root node
          this.otData.forEachNode(
              function(node) {
                    //if (node.content == "000000:TOP") 
                        this.otData.select(node);
                    }
          );
		  
	  } catch(e) {
		  console.error('ERROR IN otDataClick: ' + e); 
	  } 
  },
  svarUserTreeQryResult: function(inSender, inDeprecated) {
	  try {

           var aRow = inSender.getItem(0);   
           this.txtUserId.setValue("dataValue", aRow.data.userid);
           this.txtUserName.setValue("dataValue", aRow.data.username);
           this.txtFirstName.setValue("dataValue", aRow.data.firstname);
           this.txtMiddleName.setValue("dataValue", aRow.data.middlename);
           this.txtLastName.setValue("dataValue", aRow.data.lastname);
           this.txtEmail.setValue("dataValue", aRow.data.email);
           this.txtParent.setValue("dataValue", aRow.data.pid);
		  
	  } catch(e) {
		  console.error('ERROR IN svarUserTreeQryResult: ' + e); 
	  } 
  },
  
  // Added by Jammi Dee 06/16/2012
  svarUserPropResult: function(inSender, inDeprecated) {
	  try {
		  
          //alert( inSender.getValue("dataValue"));
          this.ptTree.renderData(eval( inSender.getValue("dataValue") ));
          
	  } catch(e) {
		  console.error('ERROR IN svarUserPropResult: ' + e); 
	  } 
  },
  
  // Added by Jammi Dee 06/16/2012
  ptTreeSelect: function(inSender, inNode, inSelectedDataList, inSelectedPropertyName, inSelectedPropertyValue) {
	  try {

            //alert(inNode._data.eid );
            this.svarUserTreeQry.setValue("input.pUserId", inNode._data.eid );
            this.svarUserTreeQry.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
            this.svarUserTreeQry.update();  
          
	  } catch(e) {
		  console.error('ERROR IN ptTreeSelect: ' + e); 
	  } 
  },
  
  //Added by Jammi Dee 05/06/2013
  pic_backClick: function(inSender) {
      try {
          
          app.pdWaitLoadPage.show();
          this.navPgManageUser.update();
          
	  } catch(e) {
          
		  console.error('ERROR IN pic_backClick: ' + e);
          
	  }		
  },
  
  //Added by Jammi Dee 05/06/2013
  pic_homeClick: function(inSender) {
      try {
          
          app.pdWaitLoadPage.show();
          this.navPgMain.update();
          
	  } catch(e) {
          
		  console.error('ERROR IN pic_homeClick: ' + e);
          
	  }
  },
  
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