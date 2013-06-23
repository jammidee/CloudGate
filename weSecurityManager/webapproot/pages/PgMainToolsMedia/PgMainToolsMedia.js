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
 * 
*/


/*

 Created by Jammi Dee 05/22/2012
 
 This is a sample page that can used as template
*/

dojo.declare("PgMainToolsMedia", wm.Page, {
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
            
            // Added by Jammi Dee 05/22/2012
            this.svarMediaLib.setValue("input.pAppId", app.varAppId.getValue("dataValue") );
            this.svarMediaLib.setValue("input.pEntity", "%");
            this.svarMediaLib.update();
            this.dgLookup.dataSet.update();
            
            // Added by Jammi Dee 05/06/2012 
            app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue") );
            app.svarLogging.setValue("input.pMsg","Manage Media.");
            app.svarLogging.setValue("input.pModuleId","TOOLS");
            app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue") );
            app.svarLogging.setValue("input.pProcess","PAGELOAD");
            app.svarLogging.setValue("input.pScopeId","NA");
            app.svarLogging.setValue("input.pStype","USER");
            app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue") );
            app.svarLogging.update();
            
            this.splitData.setWidth( 5 );
            this.splitUpload.setWidth( 5 );

            
            // for some reasons dojo.io is not loaded in 6.1.9
            dojo.require("dojo.io.iframe");
            // create an array to hold objects
            objArray = [];
            // assign HTML input to
            // panHolders (in this case we have 3)
            for (var ii = 1; ii<=1; ii++) {
                this.initForm(ii);
            }        
            
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
        
        this.lblTitle.setCaption("Tools : Media" );
        this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
    
    },  


    // Added by Jammi Dee 05/22/2012
    // class that holds the form objects
    formObj: function(inNode, inChild, inButton) {
        this.node = inNode;
        this.child = inChild;
        this.button = inButton;
    },
  
    // returns a array object
    retArr: function(inNum) {
        try {
            return objArray[inNum];
        } catch(e) {
            alert('ERROR IN retArr: ' + e); 
        }
    },
  
    // init HTML input field
    initForm: function(inID) {
        var htmlContent = ['<form flex="1" box="v" enctype="multipart/form-data" method="post">',
      '<div class="fileinputs">',
      '<input type="hidden" name="method" value="uploading" />',
      '<input id="hiddenButton' + inID +'" type="file" name="file" size="55" />',
      '</div>',
      '</form>'];
    try{ 
        var node = this["panHolder" + inID].domNode;
        node.innerHTML = htmlContent.join('');
        var child = node.firstChild;
        var button = dojo.byId("hiddenButton" + inID);
        objArray[inID] = new this.formObj(node, child, button);
        } catch(e) {
            alert('ERROR IN initForm: ' + e); 
        }
    },     
    
  // ********* UPLOAD EVENTS **********
  
  // ( 3 ) Starting the File Transfer process
  // invoke upload 
  doTheUpload: function(inID) {
      try {
          
        app.pdWaitLoadPage.show();  
          
        // saves the scope of 'this'
        dojo.setObject("scope", this);
        
        // retrives the form nodes
        var vBtn = this.retArr(inID).button;
        var vForm = this.retArr(inID).child;
        
        if (!vBtn.value) {
          alert("Please specify a file to upload.");
          return;
        }    
        // url: is very important, must match the service name
        dojo.io.iframe.send({
          url: "services/svcUpload.upload",
          form: vForm,
          handleAs: "json",
          // Callback on successful call:
          load: function(response, ioArgs) {
            scope.onComplete(inID);
            return response;
          },
          // Callback on errors:
          error: function(response, ioArgs){
            debug.dir(response);
            scope.onError(inID);
            return response;
          }
        });
    } catch(e) {
      alert('ERROR IN picUploadClick: ' + e); 
    } 
  },    
    
  // ( 4 ) Upon upload, copy the file to database as binary.    
  // invoked after successful upload
  onComplete: function(inID) {
    try {
      this["labUpload" + inID].setCaption("File uploaded ...");
      
      //Added by Jammi Dee 03/18/2013
      this.varFileName.setValue("dataValue",dojo.byId("hiddenButton1").value);
      //Get the filename
      this.varFileName.setValue("dataValue", this.varFileName.getValue("dataValue").substr( this.varFileName.getValue("dataValue").lastIndexOf('\\') + 1  ) );
      this.varFileName.setValue("dataValue", this.varFileName.getValue("dataValue").substr( this.varFileName.getValue("dataValue").lastIndexOf('/') + 1  ) );            
      
      // Added by Jammi Dee 05/25/2012
      // Insert the uploaded image to database
      this.svarMediaLibInsert.setValue("input.pAppId",      app.varAppId.getValue("dataValue"));
      this.svarMediaLibInsert.setValue("input.pEntity",     app.varEntity.getValue("dataValue"));
      this.svarMediaLibInsert.setValue("input.pUserId",     app.varUserId.getValue("dataValue"));
      this.svarMediaLibInsert.setValue("input.pFileName",   this.varFileName.getValue("dataValue"));
      
      // alert("Inserting" + this.varFileName.getValue("dataValue") );
      
      this.svarMediaLibInsert.setValue("input.pFilext","ZIP");
      this.svarMediaLibInsert.update();
      
      
    } catch(e) {
      alert('ERROR IN onComplete: ' + e); 
    }
  },  
  
  // invoked after error
  onError: function(inID) {
    try {
      this["labUpload" + inID].setCaption("Something went wrong ...");
    } catch(e) {
      alert('ERROR IN onComplete: ' + e); 
    }
  }, 
  
  // ( 1 ) Get the file name of the files to be uploaded
  picUpload1Click: function(inSender) {
      try {
        var attachfile;
        
        // Added by Jammi Dee 05/25/2012
        // Pass the file to be loaded here
        this.varFileName.setValue("dataValue",dojo.byId("hiddenButton1").value);
        //alert(this.varFileName.getValue("dataValue"));
        //this.txtAttach.setValue("dataValue",attachfile);
        
        // ( 2 ) Execute the loading process
        this.doTheUpload(1);
        
      } catch(e) {
		  alert('ERROR IN picUpload1Click: ' + e); 
	  } 
  },  

  // Added by Jammi Dee 05/25/2012
  svarMediaLibInsertResult: function(inSender, inDeprecated) {
      try {
		  
		  //alert( inSender.getValue("dataValue") );
          this.svarMediaLib.setValue("input.pEntity", "%");
          this.svarMediaLib.update();          
          this.dgLookup.update();
          
          app.pdWaitLoadPage.hide();
          
          app.toastSuccess( "New item has been uploaded!" );
          
	  } catch(e) {
		  console.error('ERROR IN svarMediaLibInsertResult: ' + e); 
	  } 
  },

  svarAppListResult: function(inSender, inDeprecated) {
	  try {

//           this.dgLookup.dataSet.update();
		  
	  } catch(e) {
		  console.error('ERROR IN svarAppListResult: ' + e); 
	  } 
  },

  // Added by Jammi Dee 05/25/2012
  dgLookupCellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
	  try {
		  
            // Show the waiting dialog
            this.pdLoading.setShowing(true);  
            
            this.svarMediaLibRead.setValue("input.pAppId",      app.varAppId.getValue("dataValue"));
            this.svarMediaLibRead.setValue("input.pEntity",     app.varEntity.getValue("dataValue"));
            this.svarMediaLibRead.setValue("input.pUserId",     app.varUserId.getValue("dataValue"));
            this.svarMediaLibRead.setValue("input.pFileName",   this.dgLookup.selectedItem.getData().c3 );
            
            //alert( this.dgLookup.selectedItem.getData().c3 );
            
            this.svarMediaLibRead.update();
          
	  } catch(e) {
		  console.error('ERROR IN dgLookupCellDblClick: ' + e); 
	  } 
  },
  svarMediaLibReadResult: function(inSender, inDeprecated) {
	  try {

          // Hide the waiting dialog
          this.pdLoading.setShowing(false); 
            
          //alert( inSender.getValue("dataValue") );
          this.layView.setCaption("View - " + inSender.getValue("dataValue") );
          this.layView.update();
          
          //alert( "http://" + window.location.hostname + ":" + window.location.port + "/weSecurityManager/" + inSender.getValue("dataValue") );
          this.fraView.setSource("http://" + window.location.hostname + ":" + window.location.port + "/weSecurityManager/" + inSender.getValue("dataValue") );
          this.fraView.update();            
		            
         
	  } catch(e) {
		  console.error('ERROR IN svarMediaLibReadResult: ' + e); 
	  } 
  },
  
  // Added by Jammi Dee 05/27/2012
  pic_deleteClick: function(inSender) {
	  try {

            var response = confirm("Delete: Are you sure?");
            
            if (response) {
                
                this.svarMediaLibDelete.setValue("input.pAppId",      app.varAppId.getValue("dataValue"));
                this.svarMediaLibDelete.setValue("input.pEntity",     app.varEntity.getValue("dataValue"));
                this.svarMediaLibDelete.setValue("input.pUserId",     app.varUserId.getValue("dataValue"));
                this.svarMediaLibDelete.setValue("input.pFileName",   this.dgLookup.selectedItem.getData().c3 );
            
                this.svarMediaLibDelete.update();     
                
            }

		  
	  } catch(e) {
          
		  console.error('ERROR IN pic_deleteClick: ' + e);
          alert( 'ERROR IN pic_deleteClick: ' + e );
          
	  } 
  },
  svarMediaLibDeleteResult: function(inSender, inDeprecated) {
	  try {

            // alert( inSender.getValue("dataValue") );
            
            // Update the grid
            this.svarMediaLib.setValue("input.pEntity", app.varEntity.getValue("dataValue") );
            this.svarMediaLib.setValue("input.pAppId", app.varAppId.getValue("dataValue") );
            this.svarMediaLib.update();          
            this.dgLookup.dataSet.update();
            
            app.toastSuccess( "Selected item has been deleted!" );
		  
	  } catch(e) {
          
		  console.error('ERROR IN svarMediaLibDeleteResult: ' + e);
          alert( 'ERROR IN svarMediaLibDeleteResult: ' + e );
          
	  } 
  },
  
  // Added by Jammi Dee 06/09/2012
  svarMediaTempDirListResult: function(inSender, inDeprecated) {
	  try {

                this.txtaTempDir.setValue( "dataValue", inSender.getValue("dataValue") );
		  
	  } catch(e) {
		  console.error('ERROR IN svarMediaTempDirListResult: ' + e); 
	  } 
  },
  pic_refreshClick: function(inSender) {
	  try {

            this.svarMediaTempDirList.update();
            this.svarMediaTempDirListTree.update();
            this.svarMediaUploadDirListTree.update();
		  
	  } catch(e) {
		  console.error('ERROR IN pic_refreshClick: ' + e); 
	  } 
  },
  // Added by Jammi Dee 06/09/2012
  svarMediaTempDirListTreeResult: function(inSender, inDeprecated) {
	  try {

                this.otData.setValue("data", inSender.getValue("dataValue"));
		  
	  } catch(e) {
		  console.error('ERROR IN svarMediaTempDirListTreeResult: ' + e); 
	  } 
  },
  svarMediaUploadDirListTreeResult: function(inSender, inDeprecated) {
	  try {
		  
          this.otUpload.setValue("data", inSender.getValue("dataValue"));
		  
	  } catch(e) {
		  console.error('ERROR IN svarMediaUploadDirListTreeResult: ' + e); 
	  } 
  },
  
  // Added by Jammi Dee 06/11/2012
  pic_toCsvClick: function(inSender) {
	  try {
        
        this.dgLookup.showCSVData();
		  
	  } catch(e) {
		  console.error('ERROR IN pic_toCsvClick: ' + e); 
	  } 
  },
  
  
  //Added by Jammi Dee 03/20/2013
  pic_ViewClick: function(inSender) {

       // Show the waiting dialog
       this.pdLoading.setShowing(true);  
            
       this.svarMediaLibRead.setValue("input.pAppId",      app.varAppId.getValue("dataValue"));
       this.svarMediaLibRead.setValue("input.pEntity",     app.varEntity.getValue("dataValue"));
       this.svarMediaLibRead.setValue("input.pUserId",     app.varUserId.getValue("dataValue"));
       this.svarMediaLibRead.setValue("input.pFileName",   this.dgLookup.selectedItem.getData().c3 );
            
       //alert( this.dgLookup.selectedItem.getData().c3 );
        
       this.svarMediaLibRead.update();
        
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
  
	_end: 0
});