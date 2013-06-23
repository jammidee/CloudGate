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
 * Date: 07/20/2012
 * Modified by: Jammi Dee 06/10/2013
 * 
*/

/*
 This is a sample page that can used as template
*/

dojo.declare("PgMainReportMem", wm.Page, {
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
            app.svarLogging.setValue("input.pMsg","View Report / Memory Status Page.");
            app.svarLogging.setValue("input.pModuleId","REPORT");
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
            
            //Added by Jammi Dee 06/10/2013
            this.svarGetFreeVsUsedVsAvail.update();            
            
            //Activate timer
            this.tmrTime.update();

        } catch (e) {
            app.toastError(this.name + ".start() Failed: " + e.toString());
        }
        
    },
  
    /*
     * 03/25/2012 - Jammi Dee
     * Initialize the template variables here
    */
    initApplication: function() {
        
        this.lblTitle.setCaption("Report : Memory Status" );
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
  
    Left: function(str, n) {
        if (n <= 0)
            return "";
        else if (n > String(str).length)
            return str;
        else
           return String(str).substring(0,n);    
    },
    
    Right: function(str, n) {
        if (n <= 0)
            return "";
        else if (n > String(str).length)
            return str;
        else {
                var iLen = String(str).length;
                return String(str).substring(iLen, iLen - n);
            }  
    },
  
  
  //Added by Jammi Dee 06/10/2013
  svarGetFreeVsUsedVsAvailResult: function(inSender, inDeprecated) {
      try {
		  
              //alert(inSender.getValue("dataValue"));
              // Contains a value pair data 
              // Example: Celtics,56,Bostom,30,Rockets,89, = must end in ","
              var newdata = [];
              var strArr = inSender.getValue("dataValue");
              
              var iloops   = 0;  // protection from runaway loop
              var strName  = "";
              var strValue = "";
              
              while( strArr.indexOf(",") > 0 || strName !== "" ){
                  
                  strName   = this.Left(strArr, strArr.indexOf(",") );
                  strArr    = strArr.substring( strArr.indexOf(",") + 1, strArr.length );
                  strValue  = this.Left(strArr, strArr.indexOf(",") );              
                  strArr    = strArr.substring( strArr.indexOf(",") + 1, strArr.length );
                  
                  //alert( strName + ":" + strValue );
                  if (strName !== ""){
                        newdata.push({name: strName, dataValue: parseInt(strValue, 10) });
                  } else {
                  }
                  iloops++;
              }
              
              this.varChart.setData(newdata);
              this.dcAllocAvail.renderDojoObj();	
              
              //Call the Free vs Used memory
              this.svarGetFreeVsUsed.update();
          
          
	  } catch(e) {
          
		  console.error('ERROR IN svarGetFileTypeGraphResult: ' + e); 
          alert( 'ERROR IN svarGetFileTypeGraphResult: ' + e );
	  } 
  },
  
  //Added by Jammi Dee 06/10/2013
  svarGetFreeVsUsedResult: function(inSender, inDeprecated) {
      try {
	
              var newdata = [];
              var strArr = inSender.getValue("dataValue");
              
              var iloops   = 0;  // protection from runaway loop
              var strName  = "";
              var strValue = "";
              
              while( strArr.indexOf(",") > 0 || strName !== "" ){
                  
                  strName   = this.Left(strArr, strArr.indexOf(",") );
                  strArr    = strArr.substring( strArr.indexOf(",") + 1, strArr.length );
                  strValue  = this.Left(strArr, strArr.indexOf(",") );              
                  strArr    = strArr.substring( strArr.indexOf(",") + 1, strArr.length );
                  
                  //alert( strName + ":" + strValue );
                  if (strName !== ""){
                        newdata.push({name: strName, dataValue: parseInt(strValue, 10) });
                  } else {
                  }
                  iloops++;
              }
              
              this.varChartBar.setData(newdata);
              this.dcFreeUsed.renderDojoObj();                 
      
		  
	  } catch(e) {
		  console.error('ERROR IN svarGetFreeVsUsedResult: ' + e); 
	  }
  },
  
  //Update the dynamic memory display
  tmrTimeTimerFire: function(inSender) {
      try {

            //Added by Jammi Dee 06/10/2013
            this.svarGetFreeVsUsedVsAvail.update();
            
		  
	  } catch(e) {
		  console.error('ERROR IN tmrTimeTimerFire: ' + e); 
	  } 
  },
    

	_end: 0
});