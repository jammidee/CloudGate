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
 * Date: 09/01/2012
 * Modified by: Jammi Dee 09/01/2012
 * 
*/

/*
 This is a sample page that can used as template
*/

dojo.declare("PgMainToolsWorkDir", wm.Page, {
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
            
            // Added by Jammi Dee 05/06/2012 
            app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
            app.svarLogging.setValue("input.pMsg","Loaded Working Dir Page.");
            app.svarLogging.setValue("input.pModuleId","WORKDIR");
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
            
            // Added by Jammi Dee 05/30/2012
            this.tmrTime.update();
            
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
        
        this.lblTitle.setCaption("Tools : Work Dir" );
        this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
    
    },  


  // Added by Jammi Dee 05/30/2012
  tmrTimeTimerFire: function(inSender) {
	  try {
		  
            var time = new Date();
            var hours = time.getHours();
            
            var minutes = time.getMinutes();
            minutes=((minutes < 10) ? "0" : "") + minutes;
            
            var seconds = time.getSeconds();
            seconds=((seconds < 10) ? "0" : "") + seconds;
            
            var clock = hours + ":" + minutes + ":" + seconds   ;       
          
          this.lblTime.setCaption(clock);
		  
	  } catch(e) {
		  console.error('ERROR IN tmrTimeTimerFire: ' + e); 
	  } 
  },
  
  //Added by Jammi Dee 09/01/2012
  pic_refreshClick: function(inSender) {
	  try {
	

            //this.svarMediaTempDirList.update();
            this.svarMediaTempDirListTree.update();
            this.svarMediaUploadDirListTree.update();    
		  
	  } catch(e) {
          
		  console.error('ERROR IN pic_refreshClick: ' + e); 
          alert( 'ERROR IN pic_refreshClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 09/01/2012
  svarMediaTempDirListTreeResult: function(inSender, inDeprecated) {
	  try {

            this.otTemp.setValue("data", inSender.getValue("dataValue"));
		  
	  } catch(e) {
          
		  console.error('ERROR IN svarMediaTempDirListTreeResult: ' + e); 
          alert( 'ERROR IN svarMediaTempDirListTreeResult: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 09/01/2012
  svarMediaUploadDirListTreeResult: function(inSender, inDeprecated) {
	  try {

            this.otUpload.setValue("data", inSender.getValue("dataValue"));
		  
	  } catch(e) {
          
		  console.error('ERROR IN svarMediaUploadDirListTreeResult: ' + e); 
          alert( 'ERROR IN svarMediaUploadDirListTreeResult: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 09/01/2012
  pic_deleteClick: function(inSender) {
	  try {
		  
            var response = confirm("Delete: Are you sure to delete all files in the temporary folders?");
            
            if (response) {
                
                this.svarDeleteTempFolder.update();
                this.svarDeleteUploadFolder.update();
                
                this.svarMediaTempDirListTree.update();
                this.svarMediaUploadDirListTree.update();                  
                
            }
          
		  
	  } catch(e) {
          
		  console.error('ERROR IN pic_deleteClick: ' + e);
          alert( 'ERROR IN pic_deleteClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 05/05/2013
  pic_backClick: function(inSender) {
      try {
          
          app.pdWaitLoadPage.show();
          this.navPgMainTools.update();
          
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
  
  
  //Added by Jammi Dee 05/28/2013
  pic_CreateDirClick: function(inSender) {
      try {
          
          this.svarCreateMissingFolder.update();
          
      } catch(e) {
          
          console.error('ERROR IN pic_CreateDirClick: ' + e);
          
      }  
  },
  
  //Added by Jammi Dee 05/28/2013
  svarCreateMissingFolderResult: function(inSender, inDeprecated) {
      try {
          
          alert("Missing folders has been recreated!");
          
      } catch(e) {
          
          console.error('ERROR IN svarCreateMissingFolderResult: ' + e);
          
      }  
  },
  
	_end: 0
});