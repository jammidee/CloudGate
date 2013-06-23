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

dojo.declare("PgUserView", wm.Page, {
	"preferredDevice": "desktop",
	start: function() {
		try {
			this.svarTblUserView.update();
            this.dgUserView.dataSet.update();
            this.svarTblUserView.setValue("input.pUserId","%");
            
            //Added by Jammi Dee 11/25/2012
            app.svarUpdateSessionApp.setValue("input.pJuid",app.varSessionId.getValue("dataValue"));
            app.svarUpdateSessionApp.update();
            
            app.pdWaitLoadPage.hide();
            
        } catch(e) {
			app.toastError(this.name + ".start() Failed: " + e.toString()); 
		}
	},

	btnSearchClick: function(inSender) {
	  try {
          var s;
		  if(this.txtSearch.getValue("dataValue") !== ""){
           this.svarTblUserView.setValue("input.pUserId",this.txtSearch.getValue("dataValue"));
          }else{
             s = this.txtSearch.getValue("dataValue");
          }
          //alert(s);
          //alert(this.txtSearch.getValue("dataValue"));          
          if(this.txtSearch.getValue("dataValue") == s){
              this.svarTblUserView.setValue("input.pUserId","%");
              this.svarTblUserView.getValue("dataValue");
          }
          
          this.svarTblUserView.update(); 
          this.dgUserView.dataSet.update();
          
        
		  
	  } catch(e) {
		  console.error('ERROR IN btnSearchClick: ' + e); 
	  } 
  },

  dgUserViewClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
	  try {
		   app.varGetUserID.setValue("dataValue",this.dgUserView.selectedItem.getData().userid);
		  
	  } catch(e) {
		  console.error('ERROR IN dgUserViewClick: ' + e); 
	  } 
  },
  _end: 0
});