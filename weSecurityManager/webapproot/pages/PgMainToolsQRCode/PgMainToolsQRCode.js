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
 * Date: 06/15/2013
 * Modified by: Jammi Dee 06/15/2013
 * 
*/

/*
 This is a sample page that can used as template
*/

dojo.declare("PgMainToolsQRCode", wm.Page, {
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
            app.svarLogging.setValue("input.pMsg","View Leaf Template Page.");
            app.svarLogging.setValue("input.pModuleId","LEAF");
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

            this.selContent.setOptions("Contact Information, Email Address, URL, Phone Number, SMS, WIFI Network, Text");
            this.pic_sendQRCode.setShowing(false);
            
            //Added by Jammi Dee 06/17/2013
            this.hideAllInput();
            this.showContactInformationInput();                

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
        
        this.lblTitle.setCaption("Tools : QR Code Generator" );
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
  
  
  btnSearchUserIDClick: function(inSender) {
      try {

        var s;
            
        this.svarUserView.setValue("input.pStatus", "ACTIVE");
        this.svarUserView.setValue("input.pEntityId", app.varEntity.getValue("dataValue") );               
            
        if(typeof this.txtSearch.getValue("dataValue") !== "undefined" && typeof this.txtUname.getValue("dataValue") == "undefined" && typeof this.txtEMail.getValue("dataValue") == "undefined"){
             
            this.svarUserView.setValue("input.pUserId", this.txtSearch.getValue("dataValue"));
            this.svarUserView.setValue("input.pUsername", "%");
            this.svarUserView.setValue("input.pEmail", "%");
             
        }else if(typeof this.txtSearch.getValue("dataValue") == "undefined" && typeof this.txtUname.getValue("dataValue") !== "undefined" && typeof this.txtEMail.getValue("dataValue") == "undefined"){
             
            this.svarUserView.setValue("input.pUserId", "%");
            this.svarUserView.setValue("input.pUsername", this.txtUname.getValue("dataValue"));
            this.svarUserView.setValue("input.pEmail", "%");
           
        }else if(typeof this.txtSearch.getValue("dataValue") == "undefined" && typeof this.txtUname.getValue("dataValue") == "undefined" && typeof this.txtEMail.getValue("dataValue") !== "undefined"){
             
            this.svarUserView.setValue("input.pUserId", "%");
            this.svarUserView.setValue("input.pUsername", "%");
            this.svarUserView.setValue("input.pEmail", this.txtEMail.getValue("dataValue"));    
         
        }else if(typeof this.txtSearch.getValue("dataValue") !== "undefined" && typeof this.txtUname.getValue("dataValue") !== "undefined" && typeof this.txtEMail.getValue("dataValue") == "undefined"){
             
            this.svarUserView.setValue("input.pUserId", this.txtSearch.getValue("dataValue"));
            this.svarUserView.setValue("input.pUsername", this.txtUname.getValue("dataValue"));
            this.svarUserView.setValue("input.pEmail", "%"); 
         
        }else if(typeof this.txtSearch.getValue("dataValue") !== "undefined" && typeof this.txtUname.getValue("dataValue") == "undefined" && typeof this.txtEMail.getValue("dataValue") !== "undefined"){
             
            this.svarUserView.setValue("input.pUserId", this.txtSearch.getValue("dataValue"));
            this.svarUserView.setValue("input.pUsername", "%");
            this.svarUserView.setValue("input.pEmail", this.txtEMail.getValue("dataValue")); 
         
        }else if(typeof this.txtSearch.getValue("dataValue") == "undefined" && typeof this.txtUname.getValue("dataValue") !== "undefined" && typeof this.txtEMail.getValue("dataValue") !== "undefined"){
             
            this.svarUserView.setValue("input.pUserId", "%");
            this.svarUserView.setValue("input.pUsername", this.txtUname.getValue("dataValue"));
            this.svarUserView.setValue("input.pEmail", this.txtEMail.getValue("dataValue")); 
                  
        }else{
             
            //s = this.txtSearch.getValue("dataValue");
            this.svarUserView.setValue("input.pUserId", "%");
            this.svarUserView.setValue("input.pUsername", "%");
            this.svarUserView.setValue("input.pEmail", "%");
                
        }

        this.svarUserView.update();
        this.dgUserView.dataSet.update();
		  
	  } catch(e) {
          
		  console.error('ERROR IN btnSearchUserIDClick: ' + e);
          alert( 'ERROR IN btnSearchUserIDClick: ' + e );
          
	  } 
  },  
  




  //Added by Jammi Dee 05/01/2013
  pic_backClick: function(inSender) {
      try {
          
          app.pdWaitLoadPage.show();
          this.navPgMainTools.update();
          
	  } catch(e) {
          
		  console.error('ERROR IN pic_backClick: ' + e);
          
	  }		
  },
  
  //Added by Jammi Dee 05/01/2013
  pic_homeClick: function(inSender) {
      try {
          
          app.pdWaitLoadPage.show();
          this.navPgMain.update();
          
	  } catch(e) {
          
		  console.error('ERROR IN pic_homeClick: ' + e);
          
	  }		
  },
  
  //Added by Jammi Dee 05/01/2013
  lblBackClick: function(inSender, inEvent) {
      try {
          
          app.pdWaitLoadPage.show();
          this.navPgMain.update();
          
      } catch(e) {
          
		  console.error('ERROR IN lblBackClick: ' + e);
          
	  }		
  },

  //Added by Jammi Dee 06/15/2013
  selContentChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
      try {
         
         
          if( this.selContent.getValue("dataValue") === "Contact Information" ){
              
              this.hideAllInput();
              this.showContactInformationInput();
              
              
          } else if( this.selContent.getValue("dataValue") === "Email Address" ){
              
              this.hideAllInput();
              this.showEmailAddressInput();
              
          } else if( this.selContent.getValue("dataValue") === "URL" ){
            
              this.hideAllInput();
              this.showURLInput();
              
          } else if( this.selContent.getValue("dataValue") === "Phone Number" ){
            
              this.hideAllInput();
              this.showPhoneNumberInput();
              
          } else if( this.selContent.getValue("dataValue") === "SMS" ){
            
              this.hideAllInput();
              this.showSMSInput();
              
          } else if( this.selContent.getValue("dataValue") === "WIFI Network" ){
            
              this.hideAllInput();
              this.showWIFINetworkInput();
              
          } else if( this.selContent.getValue("dataValue") === "Text" ){
            
              this.hideAllInput();
              this.showTextInput();
              
          } else {
              
              this.hideAllInput();
              
          }
          
      } catch(e) {
          
            console.error('ERROR IN selContentChange: ' + e);
          
      }	
  },

  //Added by Jammi Dee 06/15/2013
  btnGenerateQRCodeClick: function(inSender) {
      try {
         
          var strData = "";
         
          if( this.selContent.getValue("dataValue") === "Contact Information" ){
              
              if( this.selEncoding.getValue("dataValue") === "MECARD" ){
                  
                    strData = strData + "MECARD:";
                    strData = strData + "N:" + this.txtName.getValue("dataValue") + ";";
                    strData = strData + "ORG:" + this.txtCompany.getValue("dataValue") + ";";
                    strData = strData + "TEL:" + this.txtPhoneNo.getValue("dataValue") + ";";
                    strData = strData + "URL:" + this.txtWebsite.getValue("dataValue") + ";";
                    strData = strData + "EMAIL:" + this.txtEmail.getValue("dataValue") + ";";
                    strData = strData + "ADR:" + this.txtAddress01.getValue("dataValue") + " " + this.txtAddress02.getValue("dataValue") + ";";
                    strData = strData + "NOTE:" + this.txtMemo.getValue("dataValue") + ";;";

              
              } else {
                  
                    strData = strData + "BEGIN:VCARD\r\n";
                    strData = strData + "N:" + this.txtName.getValue("dataValue") + "\r\n";
                    strData = strData + "ORG:" + this.txtCompany.getValue("dataValue") + "\r\n";
                    strData = strData + "TEL:" + this.txtPhoneNo.getValue("dataValue") + "\r\n";
                    strData = strData + "URL:" + this.txtWebsite.getValue("dataValue") + "\r\n";
                    strData = strData + "EMAIL:" + this.txtEmail.getValue("dataValue") + "\r\n";
                    strData = strData + "ADR:" + this.txtAddress01.getValue("dataValue") + " " + this.txtAddress02.getValue("dataValue") + "\r\n";
                    strData = strData + "NOTE:" + this.txtMemo.getValue("dataValue") + "\r\n";
                    strData = strData + "END:VCARD\r\n";
                  
              }
              
          } else if( this.selContent.getValue("dataValue") === "Email Address" ){
              
                    strData = strData + "mailto:" + this.txtEmail.getValue("dataValue") + "";             
              
          } else if( this.selContent.getValue("dataValue") === "URL" ){
              
                    strData = strData + this.txtWebsite.getValue("dataValue") + "";
              
          } else if( this.selContent.getValue("dataValue") === "Phone Number" ){
              
                    strData = strData + "tel:" + this.txtPhoneNo.getValue("dataValue") + "";
              
          } else if( this.selContent.getValue("dataValue") === "SMS" ){
              
                    strData = strData + "smsto:" + this.txtPhoneNo.getValue("dataValue") + ":" + this.txtMemo.getValue("dataValue");
              
          } else if( this.selContent.getValue("dataValue") === "WIFI Network" ){
              
                    strData = strData + "WIFI:S" + this.txtSSID.getValue("dataValue") + ";T:" + this.selNetwork.getValue("dataValue") + ";P:" + this.txtPasswd.getValue("dataValue") + ";;";
              
          } else if( this.selContent.getValue("dataValue") === "Text" ){
              
                    strData = strData + this.txtMemo.getValue("dataValue");
              
          } else {
              
          }
          
          this.fraQRCode.setSource("");
          this.txtaData.setValue("dataValue", strData );
          
          //Added by Jammi Dee 06/16/2013
          this.svarCreateQRCode.setValue("input.sourceData", strData );
          this.svarCreateQRCode.setValue("input.targetFile", app.varUserId.getValue("dataValue") + "qrcode.png" );
          this.svarCreateQRCode.setValue("input.targetSize", this.selBarSize.getValue("dataValue") );
          this.svarCreateQRCode.update();            
          
          //User can now send this QR Code
          this.pic_sendQRCode.setShowing(true);
          
      } catch(e) {
          
            console.error('ERROR IN btnGenerateQRCodeClick: ' + e);
          
	  }	
  },
  
  //Added by Jammi Dee 06/16/2013
  svarCreateQRCodeResult: function(inSender, inDeprecated) {
      try {
 
          var UUID = app.uuid4();
          
          //Update the QR-Code view
          this.fraQRCode.setSource("http://" + window.location.hostname + ":" + window.location.port + "/" + app.varAppContext.getValue("dataValue") + "/" + inSender.getValue("dataValue") + "?pagemode=none#toolbar=0&statusbar=0messages=0&navpanes=0&jmdid=" + UUID );
          
          
      } catch(e) {

          console.error('ERROR IN svarCreateQRCodeResult: ' + e);
          alert( 'ERROR IN svarCreateQRCodeResult: ' + e );
          
      }
  },  
  
  hideAllInput: function(){
      
      this.txtName.setShowing(false);
      this.txtCompany.setShowing(false);
      this.txtTitle.setShowing(false);
      this.txtPhoneNo.setShowing(false);
      this.txtEmail.setShowing(false);
      this.txtAddress01.setShowing(false);
      this.txtAddress02.setShowing(false);
      this.txtWebsite.setShowing(false);
      this.txtMemo.setShowing(false);
      this.txtSSID.setShowing(false);
      this.selNetwork.setShowing(false);
      this.txtPasswd.setShowing(false);
      this.selEncoding.setShowing(false);
      
  },  
  
  showContactInformationInput: function(){
      
      this.txtName.setShowing(true);
      this.txtCompany.setShowing(true);
      this.txtTitle.setShowing(true);
      this.txtPhoneNo.setShowing(true);
      this.txtEmail.setShowing(true);
      this.txtAddress01.setShowing(true);
      this.txtAddress02.setShowing(true);
      this.txtWebsite.setShowing(true);
      this.txtMemo.setShowing(true);
      this.selEncoding.setShowing(true);
      
  },    

  showEmailAddressInput: function(){
      
      this.txtEmail.setShowing(true);
      
  }, 

  showURLInput: function(){

      this.txtWebsite.setShowing(true);
      
  }, 
  
  //Added by Jammi Dee 06/16/2013
  showPhoneNumberInput: function(){

      this.txtPhoneNo.setShowing(true);
      
  },
  
  //Added by Jammi Dee 06/16/2013
  showSMSInput: function(){

      this.txtPhoneNo.setShowing(true);
      this.txtMemo.setShowing(true);
      
  },  
  
  //Added by Jammi Dee 06/16/2013
  showWIFINetworkInput: function(){

      this.txtSSID.setShowing(true);
      this.selNetwork.setShowing(true);
      this.txtPasswd.setShowing(true);
      
  },
  
  //Added by Jammi Dee 06/18/2013
  showTextInput: function(){

      this.txtMemo.setShowing(true);
      
  },
  

  //Added by Jammi Dee 06/16/2013
  pic_sendQRCodeClick: function(inSender) {
      try {
          
            this.ddSendFile.show();
          
      } catch(e) {
          
          console.error('ERROR IN pic_sendQRCodeClick: ' + e);
          
	  }	
  },
  
  
  btnSendFileSendClick: function(inSender) {
      try {

            app.pdWaitLoadPage.show();
            
            this.svarSendEmailWithAttach.setValue("input.strSource",           app.varEmail.getValue("dataValue") );
            this.svarSendEmailWithAttach.setValue("input.strSourceDesc",       app.varEmail.getValue("dataValue") );
            this.svarSendEmailWithAttach.setValue("input.strDestination",      this.txtEmail01.getValue("dataValue") );
            this.svarSendEmailWithAttach.setValue("input.strDestDesc",         this.txtEmail01.getValue("dataValue") );
            this.svarSendEmailWithAttach.setValue("input.strSubject",          "Cloud Gate DMS Document Sharing - QR Code.");
            this.svarSendEmailWithAttach.setValue("input.strMsg",              "Hi [" + this.txtEmail01.getValue("dataValue") + "]. [" + app.varEmail.getValue("dataValue") + "] shares a QR-Code for you.");
            this.svarSendEmailWithAttach.setValue("input.strPath",             "/customdata/temp/" + app.varUserId.getValue("dataValue") + "qrcode.png" );
          
            this.svarSendEmailWithAttach.update();  
          
      } catch(e) {
          
          console.error('ERROR IN pic_sendQRCodeClick: ' + e);
          
      }	
  },
  
  svarSendEmailWithAttachResult: function(inSender, inDeprecated) {
      try {

            app.pdWaitLoadPage.hide();
            
            this.ddSendFile.hide();
            app.toastSuccess("QR-Code has been sent...");
          
      } catch(e) {
          
          console.error('ERROR IN svarSendEmailWithAttachResult: ' + e);
          
      }
	
  },
  
	_end: 0
});