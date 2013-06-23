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
 * Date: 10/04/2012
 * Modified by: Jammi Dee 10/04/2012
 * 
*/

/*
 This is a sample page that can used as template
*/

dojo.declare("PgMainParty", wm.Page, {
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
            
            //Added by Jammi Dee 10/17/2012
            this.varOps.setValue("dataValue", "NOP");
            this.selRoleType.setOptions("EMPLOYEE,CUSTOMER,SUBCON,PROSPECT");
            this.layEmployee.setShowing(false);
            
            this.tabParty.setShowing(false);
            
            //Initialize the form
            this.clearForm();
            
            // Initialize the application - Jammi Dee 03/25/2012
            this.initApplication();     
            
            //Added by Jammi Dee 11/25/2012
            app.svarUpdateSessionApp.setValue("input.pJuid",app.varSessionId.getValue("dataValue"));
            app.svarUpdateSessionApp.update();                
            
            // Added by Jammi Dee 05/06/2012 
            app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
            app.svarLogging.setValue("input.pMsg","Manage Parties Page.");
            app.svarLogging.setValue("input.pModuleId","PARTY");
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
        
        this.lblTitle.setCaption("Party : Manager" );
        this.lblFooter.setCaption(app.varAppCopyright.getValue("dataValue"));
    
    },  
    
  //Added by Jammi Dee 10/22/2012    
  clearForm: function() {

        //Added by Jammi Dee 10/22/2012
        //Initialize objects. This will be used for comparison of a BLANK content
        this.txtPartyId.setValue("dataValue", "-");
        this.selRoleType.setValue("dataValue", "EMPLOYEE");
        this.selStatus.setValue("dataValue", "ACTIVE");
        
        this.selTitle.setValue("dataValue", "MR");
        this.txtFirstName.setValue("dataValue", "-");
        this.txtMiddleName.setValue("dataValue", "-");
        this.txtLastName.setValue("dataValue", "-");
        this.txtSuffix.setValue("dataValue", "-");
        this.txtParent.setValue("dataValue", "-");
        this.txtattachuser.setValue("dataValue", "-");
        
        this.txtAddress01.setValue("dataValue", "-");
        this.txtAddress02.setValue("dataValue", "-");
        this.txtCity.setValue("dataValue", "-");
        this.txtState.setValue("dataValue", "-");
        this.txtZipCode.setValue("dataValue", "-");
        this.selCountry.setValue("dataValue", "Philippines");
        this.txtEmail.setValue("dataValue", "-");
        
        this.txtCountryCodeHome.setValue("dataValue", "63");
        this.txtAreaCodeHome.setValue("dataValue", "2");
        this.txtPhoneHome.setValue("dataValue", "000-0000");
        this.txtExtHome.setValue("dataValue", "0000");
        
        this.txtCountryCodeWork.setValue("dataValue", "63");
        this.txtAreaCodeWork.setValue("dataValue", "2");
        this.txtPhoneWork.setValue("dataValue", "000-0000");
        this.txtExtWork.setValue("dataValue", "0000");    
        
        this.txtCountryCodeMobile.setValue("dataValue", "63");
        this.txtAreaCodeMobile.setValue("dataValue", "2");
        this.txtPhoneMobile.setValue("dataValue", "000-0000");
        this.txtExtMobile.setValue("dataValue", "0000");       
        
        this.txtCountryCodeFax.setValue("dataValue", "63");
        this.txtAreaCodeFax.setValue("dataValue", "2");
        this.txtPhoneFax.setValue("dataValue", "000-0000");
        this.txtExtFax.setValue("dataValue", "0000");          
      
  },      
    
  //Added by Jammi Dee 12/29/2012    
  clearEmployeeForm: function() {
      
        this.txtBadgeId.setValue("dataValue", "-");
        this.txtDivision.setValue("dataValue", "-");
        this.txtDepartment.setValue("dataValue", "-"); 
        this.txtSection.setValue("dataValue", "-");
        this.txtLocation.setValue("dataValue", "-");
        this.txtRestDay.setValue("dataValue", "-");
        this.txtShift.setValue("dataValue", "-");
        this.txtManager.setValue("dataValue", "-");
        
        this.txtDivisionDesc.setValue("dataValue", "-");
        this.txtDepartmentDesc.setValue("dataValue", "-");
        this.txtSectionDesc.setValue("dataValue", "-"); 
        this.txtLocationDesc.setValue("dataValue", "-");
        this.txtRestDayDesc.setValue("dataValue", "-");
        this.txtShiftDesc.setValue("dataValue", "-");
        this.txtManagerDesc.setValue("dataValue", "-");        
        
  },      
    
  //Added by Jammi Dee 12/28/2012
  pic_NewPartyClick: function(inSender) {
      try {
		  
          this.ddNewPartyRole.show();
		  
	  } catch(e) {
          
		  console.error('ERROR IN pic_NewPartyClick: ' + e); 
          alert( 'ERROR IN pic_NewPartyClick: ' + e );
          
	  } 
  },
      
    
  //Added by Jammi Dee 10/17/2012     
  ddNewPartyRoleShow: function(inSender) {
      try {
          
          this.selNewPartyRole.setOptions("EMPLOYEE,CUSTOMER,SUBCON,PROSPECT");
          
	  } catch(e) {
          
		  console.error('ERROR IN ddNewPartyRoleShow: ' + e);
          alert( 'ERROR IN ddNewPartyRoleShow: ' + e );
          
	  } 
  },    
    
  //Added by Jammi Dee 10/17/2012    
  btnNewPartyRoleCreateClick: function(inSender) {
      try {
          
          this.varOps.setValue("dataValue", "NEW");          
		  
          //Show the appropriate tab of the party
          if( this.selNewPartyRole.getValue("dataValue") === "EMPLOYEE" ){
              
              this.layEmployee.setShowing(true);
              this.varRole.setValue("dataValue",            this.selNewPartyRole.getValue("dataValue") );
              this.selRoleType.setValue("dataValue",        this.selNewPartyRole.getValue("dataValue") );
              
              //Added by Jammi Dee 10/22/2012
              //Check if the ID already exist. If exist go to EDIT mode
              this.svarPersonCheck.setValue("input.pPartyId",    this.txtNewPartyId.getValue("dataValue") );
              this.svarPersonCheck.setValue("input.pEntity",     app.varEntity.getValue("dataValue"));
              this.svarPersonCheck.update();
              
          }
		  
	  } catch(e) {
          
		  console.error('ERROR IN btnNewPartyRoleCreateClick: ' + e);
          alert( 'ERROR IN btnNewPartyRoleCreateClick: ' + e );
	  } 
  },    
  
  svarPersonCheckResult: function(inSender, inDeprecated) {
      try {

            var numRows = inSender.getCount();
            var imatch = 0;
            
            if (numRows > 0) {
            
                //Edit mode
                this.varOps.setValue("dataValue", "EDIT");
                this.txtPartyId.setValue("dataValue", this.txtNewPartyId.getValue("dataValue") );
                
                alert(" Supplied Party ID already exist. Switching to EDIT mode.");

                this.svarPersonView.setValue("input.pPartyId",    this.txtNewPartyId.getValue("dataValue") );
                this.svarPersonView.setValue("input.pEntity",     app.varEntity.getValue("dataValue"));
                this.svarPersonView.update();

            
            } else {
                
                //New mode
                this.varOps.setValue("dataValue", "NEW");
                //Clean Form
                this.clearForm();
                this.clearEmployeeForm();
                this.txtPartyId.setValue("dataValue", this.txtNewPartyId.getValue("dataValue") );
                this.selRoleType.setValue("dataValue", this.selNewPartyRole.getValue("dataValue") );
                
                //New mode
                this.varOps.setValue("dataValue", "NEW");                
                
            }    
            
            this.ddNewPartyRole.hide();
            
            this.tabParty.setShowing(true); 
		  
	  } catch(e) {
          
		  console.error('ERROR IN svarPersonCheckResult: ' + e);
          alert( 'ERROR IN svarPersonCheckResult: ' + e );
	  } 
  },  
  
  //Added by Jammi Dee 10/22/2012
  svarPersonViewResult: function(inSender, inDeprecated) {
      try {
		  

		  
	  } catch(e) {
          
		  console.error('ERROR IN svarPersonViewResult: ' + e); 
          alert( 'ERROR IN svarPersonViewResult: ' + e );
          
	  } 
  },                 
  
  //Added by Jammi Dee 10/17/2012
  btnNewPartyRoleCancelClick: function(inSender) {
      try {
		  
          this.varOps.setValue("dataValue", "NOP");
          this.ddNewPartyRole.hide();
		  
	  } catch(e) {
          
		  console.error('ERROR IN btnNewPartyRoleCancelClick: ' + e);
          alert( 'ERROR IN btnNewPartyRoleCancelClick: ' + e );
          
	  } 
  },  
    
  //Added by Jammi Dee 12/29/2012
  pic_EditClick: function(inSender) {
      try {
		  
          this.varOps.setValue("dataValue", "EDIT");
          this.ddEditParty.show();
		  
	  } catch(e) {
          
		  console.error('ERROR IN pic_EditClick: ' + e);
          alert( 'ERROR IN pic_EditClick: ' + e );
          
	  } 
  },    
    
  //Added by Jammi Dee 10/17/2012    
  ddEditPartyShow: function(inSender) {
      try {
		  
          this.varOps.setValue("dataValue", "EDIT");
		  
	  } catch(e) {
          
		  console.error('ERROR IN ddEditPartyShow: ' + e);
          alert( 'ERROR IN ddEditPartyShow: ' + e );
          
	  } 
  },

  //Added by Jammi Dee 10/17/2012
  btnEditPartySelectClick: function(inSender) {
      try {
		  
		  this.ddEditParty.hide();
          
          //alert( this.dgPartyView.selectedItem.getData().partyid );
          
          //Added by Jammi Dee 12/28/2012
          this.txtPartyId.setValue("dataValue",             this.dgPartyView.selectedItem.getValue("partyid") );
          this.selRoleType.setValue("dataValue",            this.dgPartyView.selectedItem.getValue("roletype") );
          this.selStatus.setValue("dataValue",              this.dgPartyView.selectedItem.getValue("sstatus") );
          this.selTitle.setValue("dataValue",               this.dgPartyView.selectedItem.getValue("title") );
          this.txtFirstName.setValue("dataValue",           this.dgPartyView.selectedItem.getValue("firstname") );
          this.txtMiddleName.setValue("dataValue",          this.dgPartyView.selectedItem.getValue("middlename") );
          this.txtLastName.setValue("dataValue",            this.dgPartyView.selectedItem.getValue("lastname") ); 
          this.txtSuffix.setValue("dataValue",              this.dgPartyView.selectedItem.getValue("suffix") );
          this.txtParent.setValue("dataValue",              this.dgPartyView.selectedItem.getValue("pid") );
          this.txtattachuser.setValue("dataValue",          this.dgPartyView.selectedItem.getValue("userjuid") );
          
          this.txtAddress01.setValue("dataValue",           this.dgPartyView.selectedItem.getValue("addr01") );
          this.txtAddress02.setValue("dataValue",           this.dgPartyView.selectedItem.getValue("addr02") );
          this.txtCity.setValue("dataValue",                this.dgPartyView.selectedItem.getValue("city") );
          this.txtState.setValue("dataValue",               this.dgPartyView.selectedItem.getValue("empstate") );
          this.txtZipCode.setValue("dataValue",             this.dgPartyView.selectedItem.getValue("zipcode") );
          this.selCountry.setValue("dataValue",             this.dgPartyView.selectedItem.getValue("country") );
          this.txtEmail.setValue("dataValue",               this.dgPartyView.selectedItem.getValue("email") );
          
          this.txtCountryCodeHome.setValue("dataValue",     this.dgPartyView.selectedItem.getValue("countrycodehome") );
          this.txtAreaCodeHome.setValue("dataValue",        this.dgPartyView.selectedItem.getValue("areacodehome") );
          this.txtPhoneHome.setValue("dataValue",           this.dgPartyView.selectedItem.getValue("phonehome") );
          this.txtExtHome.setValue("dataValue",             this.dgPartyView.selectedItem.getValue("extensionhome") );
          
          this.txtCountryCodeWork.setValue("dataValue",     this.dgPartyView.selectedItem.getValue("countrycodework") );
          this.txtAreaCodeWork.setValue("dataValue",        this.dgPartyView.selectedItem.getValue("areacodework") );
          this.txtPhoneWork.setValue("dataValue",           this.dgPartyView.selectedItem.getValue("phonework") );
          this.txtExtWork.setValue("dataValue",             this.dgPartyView.selectedItem.getValue("extensionwork") );     
          
          this.txtCountryCodeMobile.setValue("dataValue",   this.dgPartyView.selectedItem.getValue("countrycodemobile") );
          this.txtAreaCodeMobile.setValue("dataValue",      this.dgPartyView.selectedItem.getValue("areacodemobile") );
          this.txtPhoneMobile.setValue("dataValue",         this.dgPartyView.selectedItem.getValue("phonemobile") );
          this.txtExtMobile.setValue("dataValue",           this.dgPartyView.selectedItem.getValue("extensionmobile") );            
          
          this.txtCountryCodeFax.setValue("dataValue",      this.dgPartyView.selectedItem.getValue("countrycodefax") );
          this.txtAreaCodeFax.setValue("dataValue",         this.dgPartyView.selectedItem.getValue("areacodefax") );
          this.txtPhoneFax.setValue("dataValue",            this.dgPartyView.selectedItem.getValue("phonefax") );
          this.txtExtFax.setValue("dataValue",              this.dgPartyView.selectedItem.getValue("extensionfax") );             
          
          //Hold the JUID as reference
          this.varJuid.setValue("dataValue", this.dgPartyView.selectedItem.getValue("juid") );
          
          this.tabParty.setShowing(true);      
              
          //Check for the roletype and show appropriate tab
          if( this.dgPartyView.selectedItem.getValue("roletype") === "EMPLOYEE"){
              
              this.layEmployee.setShowing(true);
              
              this.svarEmployeeExtView.setValue("input.pParent", this.dgPartyView.selectedItem.getValue("partyid") );
              this.svarEmployeeExtView.update();
              
              
          }
          
          
	  } catch(e) {
          
		  console.error('ERROR IN btnEditPartySelectClick: ' + e);
          alert( 'ERROR IN btnEditPartySelectClick: ' + e );
          
	  } 
  },

  //Added by Jammi Dee 10/17/2012
  btnEditPartyCancelClick: function(inSender) {
      try {
		  
		  this.varOps.setValue("dataValue", "NOP");
          this.ddEditParty.hide();
          
	  } catch(e) {
          
		  console.error('ERROR IN btnEditPartyCancelClick: ' + e);
          alert( 'ERROR IN btnEditPartyCancelClick: ' + e );
          
	  } 
  },

  //Added by Jammi Dee 10/17/2012
  pic_SaveClick: function(inSender) {
	  try {

            if(this.varOps.getValue("dataValue") === "NEW" ){

                if( this.txtPartyId.getValue("dataValue") === "-" ){
                    alert("Party ID cannot be Blank.");
                } else if( this.selRoleType.getValue("dataValue") === "-" ) {
                    alert("Role ID cannot be Blank.");
                } else if( this.txtFirstName.getValue("dataValue") === "-" ) {
                    alert("First name cannot be Blank.");
                } else if( this.txtLastName.getValue("dataValue") === "-" ) {
                    alert("Last name cannot be Blank.");
                } else if( this.txtEmail.getValue("dataValue") === "-" ) {
                    alert("Email cannot be Blank.");
                } else {
                    
                    this.svarCreateParty.update();
                    
                }
                
            } else if( this.varOps.getValue("dataValue") === "EDIT" ){    
                
                //alert(this.varJuid.getValue("dataValue"));
                
                //This does not work for unknown reason.
                this.svarUpdateParty.setValue("input.pJuid", this.varJuid.getValue("dataValue") );
                this.svarUpdateParty.update();
                //Alternate solution
                //this.svarPersonViewUpdate.setValue("input.pJuid",   this.varJuid.getValue("dataValue") );
                //this.svarPersonViewUpdate.setValue("input.pEntity", app.varEntity.getValue("dataValue") );
                //this.svarPersonViewUpdate.update();
                
                
            } else {
                
                alert("No operation specified yet.");
                
            }
		  
	  } catch(e) {
          
		  console.error('ERROR IN pic_SaveClick: ' + e);
          alert( 'ERROR IN pic_SaveClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 12/28/2012
  svarCreatePartyResult: function(inSender, inDeprecated) {
      try {

            this.varJuid.setValue("dataValue", inSender.getValue("dataValue"));
            
            if( this.selRoleType.getValue("dataValue") === "EMPLOYEE"){
              
                //////////////////////////////////////////////
                // Update the EmployeeExtension information
                //////////////////////////////////////////////
                this.svarCreateEmployeeExt.setValue("input.pParent", this.txtPartyId.getValue("dataValue") );
                this.svarCreateEmployeeExt.update();
              
            }            
            
            
            alert("New party has been created.");
            //After saving, switch to edit mode.
            this.varOps.setValue("dataValue", "EDIT");
            
            this.tabParty.setShowing(true); 
            
            // Added by Jammi Dee 12/28/2012 
            app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
            app.svarLogging.setValue("input.pMsg","New Party Created. ID = "  + this.txtPartyId.getValue("dataValue") );
            app.svarLogging.setValue("input.pModuleId","PARTY");
            app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
            app.svarLogging.setValue("input.pProcess","CREATE");
            app.svarLogging.setValue("input.pScopeId","NA");
            app.svarLogging.setValue("input.pStype","USER");            
            app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
            app.svarLogging.update();            
            
		  
	  } catch(e) {
          
		  console.error('ERROR IN svarCreatePartyResult: ' + e);
          alert( 'ERROR IN svarCreatePartyResult: ' + e );
	  } 
  },  

  //Added by Jammi Dee 12/28/2012
  svarUpdatePartyResult: function(inSender, inDeprecated) {
      try {
          
            if( this.selRoleType.getValue("dataValue") === "EMPLOYEE"){
              
                alert(inSender.getValue("dataValue"));
                //////////////////////////////////////////////
                // Update the EmployeeExtension information
                //////////////////////////////////////////////
                this.svarCreateEmployeeExt.setValue("input.pParent", this.txtPartyId.getValue("dataValue") );
                this.svarCreateEmployeeExt.update();
                
                if( this.txtBadgeId.getValue("dataValue") === "-" ){
                    
                    alert("Your Badge ID is incomplete. Please check values.");
                    
                } else if( this.txtDepartment.getValue("dataValue") === "-" ) {
                    
                    alert("Your Department data is incomplete. Please check values.");
                    
                }    
              
            }                 
              
            alert( "Edited data has been saved." );
                
            //After saving, switch to edit mode.
            this.varOps.setValue("dataValue", "EDIT");   
            
            // Added by Jammi Dee 12/28/2012 
            app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
            app.svarLogging.setValue("input.pMsg","Party Updated. ID= " + this.txtPartyId.getValue("dataValue"));
            app.svarLogging.setValue("input.pModuleId","PARTY");
            app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
            app.svarLogging.setValue("input.pProcess","UPDATE");
            app.svarLogging.setValue("input.pScopeId","NA");
            app.svarLogging.setValue("input.pStype","USER");            
            app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
            app.svarLogging.update();               
		  
	  } catch(e) {
          
		  console.error('ERROR IN svarUpdatePartyResult: ' + e);
          alert( 'ERROR IN svarUpdatePartyResult: ' + e );
	  } 
  },

  //Added by Jammi Dee 03/23/2013
  svarPersonViewUpdateResult: function(inSender, inDeprecated) {
      try {
          
            if( this.selRoleType.getValue("dataValue") === "EMPLOYEE"){
              
                //alert(inSender.getValue("dataValue"));
                //////////////////////////////////////////////
                // Update the EmployeeExtension information
                //////////////////////////////////////////////
                
                //This does not work in the latest wavemaker version
                //this.svarCreateEmployeeExt.setValue("input.pParent", this.txtPartyId.getValue("dataValue") );
                //this.svarCreateEmployeeExt.update();
                //Alternate solution
                this.svarEmployeeExtViewUpdate.setValue("input.pParent", this.txtPartyId.getValue("dataValue") );
                this.svarEmployeeExtViewUpdate.update();                
                
                if( this.txtBadgeId.getValue("dataValue") === "-" ){
                    
                    alert("Your Badge ID is incomplete. Please check values.");
                    
                } else if( this.txtDepartment.getValue("dataValue") === "-" ) {
                    
                    alert("Your Department data is incomplete. Please check values.");
                    
                }    
              
            }                 
              
            alert( "Edited data has been saved." );
                
            //After saving, switch to edit mode.
            this.varOps.setValue("dataValue", "EDIT");   
            
            // Added by Jammi Dee 12/28/2012 
            app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
            app.svarLogging.setValue("input.pMsg","Party Updated. ID= " + this.txtPartyId.getValue("dataValue"));
            app.svarLogging.setValue("input.pModuleId","PARTY");
            app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
            app.svarLogging.setValue("input.pProcess","UPDATE");
            app.svarLogging.setValue("input.pScopeId","NA");
            app.svarLogging.setValue("input.pStype","USER");            
            app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
            app.svarLogging.update();               

	  } catch(e) {
          
		  console.error('ERROR IN svarPersonViewUpdateResult: ' + e);
          alert( 'ERROR IN svarPersonViewUpdateResult: ' + e );
	  } 
  },


  //Added by Jammi Dee 12/30/2012
  btnSelectUserIdClick: function(inSender) {
      try {
    
            app.varStrParam01.setValue("dataValue", "SELECTUSER"  ) ;
            this.ddSelectUser.show();
		  
	  } catch(e) {
		  console.error('ERROR IN btnSelectUserIdClick: ' + e); 
	  } 
  },

  //Added by Jammi Dee 12/30/2012
  btnManagerSelectClick: function(inSender) {
      try {
		  
            app.varStrParam01.setValue("dataValue", "SELECTMANAGER"  ) ;
            this.ddSelectUser.show();
          
	  } catch(e) {
          
		  console.error('ERROR IN btnManagerSelectClick: ' + e);
          alert( 'ERROR IN btnManagerSelectClick: ' + e );
          
	  } 
  },

  //Added by Jammi Dee 10/25/2012
  ddSelectUserShow: function(inSender) {
	  try {
		  
            this.svarUserView.setValue("input.pEntity", app.varEntity.getValue("dataValue") );
            this.svarUserView.update(); 
            
	  } catch(e) {
          
		  console.error('ERROR IN ddSelectUserShow: ' + e); 
          alert( 'ERROR IN ddSelectUserShow: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 10/25/2012
  btnSelectUserSelectClick: function(inSender) {
	  try {

            var strUser         = this.dgSelectUser.selectedItem.getData().userid;
            var strUsername     = this.dgSelectUser.selectedItem.getData().username;

            if( app.varStrParam01.getValue("dataValue") === "SELECTUSER" ){    
                this.txtattachuser.setValue("dataValue", strUser );
            }
            if( app.varStrParam01.getValue("dataValue") === "SELECTMANAGER" ){    
                this.txtManager.setValue("dataValue",       strUser );
                this.txtManagerDesc.setValue("dataValue",   strUsername );
            }

            this.ddSelectUser.hide();

	  } catch(e) {
          
		  console.error('ERROR IN btnSelectUserSelectClick: ' + e); 
          alert( 'ERROR IN btnSelectUserSelectClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 10/25/2012
  btnSrcSearchClick: function(inSender) {
      try {
		  
           this.svarPartyView.setValue("input.pEntityId",       app.varEntity.getValue("dataValue") );
           this.svarPartyView.setValue("input.pPartyId",        this.txtSrcPartyId.getValue("dataValue") );
           this.svarPartyView.setValue("input.pFirstName",      this.txtSrcFirst.getValue("dataValue") );
           this.svarPartyView.setValue("input.pMiddleName",     this.txtSrcMiddle.getValue("dataValue") );
           this.svarPartyView.setValue("input.pLastName",       this.txtSrclast.getValue("dataValue") );
           this.svarPartyView.setValue("input.pEmail",          "" );
           this.svarPartyView.setValue("input.pStatus",         "ACTIVE" );
           this.svarPartyView.update();   

	  } catch(e) {
          
		  console.error('ERROR IN btnSrcSearchClick: ' + e);
          alert( 'ERROR IN btnSrcSearchClick: ' + e );
          
	  } 
  },  
  
  pic_deleteClick: function(inSender) {
	  try {

            if( this.varOps.getValue("dataValue") === "NEW" || this.varOps.getValue("dataValue") === "EDIT" ){

                var response = confirm("Delete: Are you sure to delete this item?");
                if (response) {
                
                    this.svarPartyDelete.setValue("input.pPartyId", this.txtPartyId.getValue("dataValue") );
                    this.svarPartyDelete.setValue("input.pEntity", app.varEntity.getValue("dataValue") );
                    this.svarPartyDelete.update();   
                                        
                
                }  
            
            } else {
                
                alert("No data to delete.");
                
            }

 
	  } catch(e) {
          
		  console.error('ERROR IN pic_deleteClick: ' + e);
          alert( 'ERROR IN pic_deleteClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 12/28/2012
  svarPartyDeleteResult: function(inSender, inDeprecated) {
	  try {

            //Added by Jammi Dee 01/14/2013
            //Delete also the extended information
            this.svarEmployeeExtDelete.setValue("input.pPartyId", this.txtPartyId.getValue("dataValue") );
            this.svarEmployeeExtDelete.setValue("input.pEntity", app.varEntity.getValue("dataValue") );
            this.svarEmployeeExtDelete.update();

            // Added by Jammi Dee 12/28/2012 
            app.svarLogging.setValue("input.pUserId",app.varUserId.getValue("dataValue"));
            app.svarLogging.setValue("input.pMsg","Party Deleted. ID= " + this.txtPartyId.getValue("dataValue"));
            app.svarLogging.setValue("input.pModuleId","PARTY");
            app.svarLogging.setValue("input.pAppId",app.varAppId.getValue("dataValue"));
            app.svarLogging.setValue("input.pProcess","DELETE");
            app.svarLogging.setValue("input.pScopeId","NA");
            app.svarLogging.setValue("input.pStype","USER");            
            app.svarLogging.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
            app.svarLogging.update();   

            alert("A Party has been successfully deleted.");          
            
            this.clearForm();
          
	  } catch(e) {
          
		  console.error('ERROR IN svarPartyDeleteResult: ' + e);
          alert( 'ERROR IN svarPartyDeleteResult: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 12/28/2012
  btnSrcSearch02Click: function(inSender) {
	  try {
          
           this.svarPartyView02.setValue("input.pEntityId",       app.varEntity.getValue("dataValue") );
           this.svarPartyView02.setValue("input.pPartyId",        this.txtSrcPartyId02.getValue("dataValue") );
           this.svarPartyView02.setValue("input.pFirstName",      this.txtSrcFirst02.getValue("dataValue") );
           this.svarPartyView02.setValue("input.pMiddleName",     this.txtSrcMiddle02.getValue("dataValue") );
           this.svarPartyView02.setValue("input.pLastName",       this.txtSrclast02.getValue("dataValue") );
           this.svarPartyView02.setValue("input.pEmail",          "" );
           this.svarPartyView02.setValue("input.pStatus",         "ACTIVE" );
           this.svarPartyView02.update();   
		  
	  } catch(e) {
          
		  console.error('ERROR IN btnSrcSearch02Click: ' + e); 
          alert( 'ERROR IN btnSrcSearch02Click: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 12/28/2012
  btnSelectPartyCancelClick: function(inSender) {
	  try {

            this.varOps.setValue("dataValue", "NOP");
            this.ddSelectParty.hide();
		  
	  } catch(e) {
          
		  console.error('ERROR IN btnSelectPartyCancelClick: ' + e); 
          alert( 'ERROR IN btnSelectPartyCancelClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 12/28/2012
  btnSelectParentClick: function(inSender) {
	  try {
		  
          this.ddSelectParty.show();
		  
	  } catch(e) {
          
		  console.error('ERROR IN btnSelectParentClick: ' + e); 
          alert( 'ERROR IN btnSelectParentClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 12/28/2012
  ddSelectPartyShow: function(inSender) {
	  try {
		  
          //this.varOps.setValue("dataValue", "EDIT");
		  
	  } catch(e) {
          
		  console.error('ERROR IN ddSelectPartyShow: ' + e); 
          alert( 'ERROR IN ddSelectPartyShow: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 12/28/2012
  btnSelectPartySelectClick: function(inSender) {
	  try {
		  
            this.ddSelectParty.hide();          
          
            //Hold the JUID as reference
            this.txtParent.setValue("dataValue", this.dgPartySelect.selectedItem.getData().partyid );
		  
	  } catch(e) {
          
		  console.error('ERROR IN btnSelectPartySelectClick: ' + e);
          alert( 'ERROR IN btnSelectPartySelectClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 01/01/2013
  btnDivisionClick: function(inSender) {
	  try {
		  
          this.svarSelectDiv.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
          this.svarSelectDiv.update();             
          
		  this.ddSelectDiv.show();
          
	  } catch(e) {
          
		  console.error('ERROR IN btnDivisionClick: ' + e); 
          alert( 'ERROR IN btnDivisionClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 01/01/2013
  btnDepartmentClick: function(inSender) {
	  try {
		  
          this.svarSelectDept.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
          this.svarSelectDept.update();  
          
          this.ddSelectDept.show();
		  
	  } catch(e) {
          
		  console.error('ERROR IN btnDepartmentClick: ' + e);
          alert( 'ERROR IN btnDepartmentClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 01/01/2013
  btnSectionClick: function(inSender) {
	  try {
		  
          this.svarSelectSect.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
          this.svarSelectSect.update();  
          
          this.ddSelectSect.show();
		  
	  } catch(e) {
          
		  console.error('ERROR IN btnSectionClick: ' + e);
          alert( 'ERROR IN btnSectionClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 01/01/2013
  btnLocationClick: function(inSender) {
	  try {
		  
          this.svarSelectLoc.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
          this.svarSelectLoc.update();            
          
          this.ddSelectLoc.show();
		  
	  } catch(e) {
          
		  console.error('ERROR IN btnLocationClick: ' + e);
          alert( 'ERROR IN btnLocationClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 01/01/2013
  btnRestdayClick: function(inSender) {
	  try {

          this.svarSelectRestday.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
          this.svarSelectRestday.update();   
		  
          this.ddSelectRestday.show();
		  
	  } catch(e) {
          
		  console.error('ERROR IN btnRestdayClick: ' + e);
          alert( 'ERROR IN btnRestdayClick: ' + e );
          
	  } 
  },
  
  //Added by Jammi Dee 01/01/2013
  btnShiftClick: function(inSender) {
	  try {
		  
          this.svarSelectShift.setValue("input.pEntity",app.varEntity.getValue("dataValue"));
          this.svarSelectShift.update();             
          
		  this.ddSelectShift.show();
          
	  } catch(e) {
          
		  console.error('ERROR IN btnShiftClick: ' + e);
          alert( 'ERROR IN btnShiftClick: ' + e );

	  } 
  },
  
  
  
  ///////////////////////////////////////////
  ///////////////////////////////////////////
  ///////////////////////////////////////////
  
  
  ddSelectDivShow: function(inSender) {
	  try {
		  
		  
	  } catch(e) {
		  console.error('ERROR IN ddSelectDivShow: ' + e); 
	  } 
  },
  ddSelectDeptShow: function(inSender) {
	  try {
		  
		  
	  } catch(e) {
		  console.error('ERROR IN ddSelectDeptShow: ' + e); 
	  } 
  },
  ddSelectSectShow: function(inSender) {
	  try {
		  
		  
	  } catch(e) {
		  console.error('ERROR IN ddSelectSectShow: ' + e); 
	  } 
  },
  ddSelectLocShow: function(inSender) {
	  try {
		  
		  
	  } catch(e) {
		  console.error('ERROR IN ddSelectLocShow: ' + e); 
	  } 
  },
  ddSelectRestdayShow: function(inSender) {
	  try {
		  
		  
	  } catch(e) {
		  console.error('ERROR IN ddSelectRestdayShow: ' + e); 
	  } 
  },
  ddSelectShiftShow: function(inSender) {
	  try {
		  
		  
	  } catch(e) {
		  console.error('ERROR IN ddSelectShiftShow: ' + e); 
	  } 
  },
  
  
  ///////////////////////////////////////////
  ///////////////////////////////////////////
  ///////////////////////////////////////////
  
  
  dgSelectDivClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
	  try {
		  
		  
	  } catch(e) {
		  console.error('ERROR IN dgSelectDivClick: ' + e); 
	  } 
  },
  dgSelectDeptClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
	  try {
		  
		  
	  } catch(e) {
		  console.error('ERROR IN dgSelectDeptClick: ' + e); 
	  } 
  },
  dgSelectSectClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
	  try {
		  
		  
	  } catch(e) {
		  console.error('ERROR IN dgSelectSectClick: ' + e); 
	  } 
  },
  dgSelectLocClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
	  try {
		  
		  
	  } catch(e) {
		  console.error('ERROR IN dgSelectLocClick: ' + e); 
	  } 
  },
  dgSelectRestdayClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
	  try {
		  
		  
	  } catch(e) {
		  console.error('ERROR IN dgSelectRestdayClick: ' + e); 
	  } 
  },
  dgSelectShiftClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
	  try {
		  
		  
	  } catch(e) {
		  console.error('ERROR IN dgSelectShiftClick: ' + e); 
	  } 
  },
  
  ///////////////////////////////////////////
  ///////////////////////////////////////////
  ///////////////////////////////////////////
  
  btnSelectDivSelectClick: function(inSender) {
	  try {
		  
            this.txtDivision.setValue("dataValue",       this.dgSelectDiv.selectedItem.getData().orgid );
            this.txtDivisionDesc.setValue("dataValue",   this.dgSelectDiv.selectedItem.getData().description );
            this.ddSelectDiv.hide();          
		  
	  } catch(e) {
		  console.error('ERROR IN btnSelectDivSelectClick: ' + e); 
	  } 
  },
  
  //Added by Jammi Dee 01/11/2013
  dgSelectDivCellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
      try {

            this.btnSelectDivSelectClick( inSender );
		  
	  } catch(e) {
          
		  console.error('ERROR IN dgSelectDivCellDblClick: ' + e); 
          alert( 'ERROR IN dgSelectDivCellDblClick: ' + e );
	  } 
  },
  
  btnSelectDeptSelectClick: function(inSender) {
	  try {
		  
            this.txtDepartment.setValue("dataValue",       this.dgSelectDept.selectedItem.getData().orgid );
            this.txtDepartmentDesc.setValue("dataValue",   this.dgSelectDept.selectedItem.getData().description );
            this.ddSelectDept.hide();  
            
	  } catch(e) {
		  console.error('ERROR IN btnSelectDeptSelectClick: ' + e); 
	  } 
  },
  btnSelectSectSelectClick: function(inSender) {
	  try {
		  
            this.txtSection.setValue("dataValue",       this.dgSelectSect.selectedItem.getData().orgid );
            this.txtSectionDesc.setValue("dataValue",   this.dgSelectSect.selectedItem.getData().description );
            this.ddSelectSect.hide(); 
            
	  } catch(e) {
		  console.error('ERROR IN btnSelectSectSelectClick: ' + e); 
	  } 
  },
  btnSelectLocSelectClick: function(inSender) {
	  try {
		  
            this.txtLocation.setValue("dataValue",       this.dgSelectLoc.selectedItem.getData().orgid );
            this.txtLocationDesc.setValue("dataValue",   this.dgSelectLoc.selectedItem.getData().description );
            this.ddSelectLoc.hide(); 
            
	  } catch(e) {
		  console.error('ERROR IN btnSelectLocSelectClick: ' + e); 
	  } 
  },
  btnSelectRestdaySelectClick: function(inSender) {
	  try {
		  
            this.txtRestDay.setValue("dataValue",           this.dgSelectRestday.selectedItem.getData().orgid );
            this.txtRestDayDesc.setValue("dataValue",       this.dgSelectRestday.selectedItem.getData().description );
            this.ddSelectRestday.hide();		  
          
	  } catch(e) {
		  console.error('ERROR IN btnSelectRestdaySelectClick: ' + e); 
	  } 
  },
  btnSelectShiftSelectClick: function(inSender) {
	  try {
		  
            this.txtShift.setValue("dataValue",           this.dgSelectShift.selectedItem.getData().orgid );
            this.txtShiftDesc.setValue("dataValue",       this.dgSelectShift.selectedItem.getData().description );
            this.ddSelectShift.hide();

	  } catch(e) {
		  console.error('ERROR IN btnSelectShiftSelectClick: ' + e); 
	  } 
  },
  
  ///////////////////////////////////////////
  ///////////////////////////////////////////
  ///////////////////////////////////////////
  

  dgSelectDeptCellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
	  try {
		  
		  this.btnSelectDeptSelectClick( inSender );
          
	  } catch(e) {
          
		  console.error('ERROR IN dgSelectDeptCellDblClick: ' + e);
          alert( 'ERROR IN dgSelectDeptCellDblClick: ' + e );
          
	  } 
  },
  dgSelectSectCellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
	  try {
		  
          this.btnSelectSectSelectClick( inSender );
		  
	  } catch(e) {
          
		  console.error('ERROR IN dgSelectSectCellDblClick: ' + e);
          alert( 'ERROR IN dgSelectSectCellDblClick: ' + e ); 
	  } 
  },
  dgSelectLocCellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
	  try {
		  
		  this.btnSelectLocSelectClick( inSender );
          
	  } catch(e) {
          
		  console.error('ERROR IN dgSelectLocCellDblClick: ' + e); 
          alert( 'ERROR IN dgSelectLocCellDblClick: ' + e );
          
	  } 
  },
  dgSelectRestdayCellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
	  try {
		  
          this.btnSelectRestdaySelectClick( inSender );
		  
	  } catch(e) {
          
		  console.error('ERROR IN dgSelectRestdayCellDblClick: ' + e);
          alert( 'ERROR IN dgSelectRestdayCellDblClick: ' + e );
          
	  } 
  },
  dgSelectShiftCellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
	  try {
		  
		  this.btnSelectShiftSelectClick( inSender );
          
	  } catch(e) {
          
		  console.error('ERROR IN dgSelectShiftCellDblClick: ' + e);
          alert( 'ERROR IN dgSelectShiftCellDblClick: ' + e );
          
	  } 
  },

  //Added by Jammi Dee 03/23/2013
  pic_backClick: function(inSender) {
      try {
          
          app.pdWaitLoadPage.show();
          this.navPgMain.update();
          
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
	_end: 0
});