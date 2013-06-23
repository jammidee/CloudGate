dojo.declare("weSecurityManager", wm.Application, {
	"dialogAnimationTime": 350, 
	"disableDirtyEditorTracking": false, 
	"i18n": false, 
	"main": "PgWaiting", 
	"projectSubVersion": 6941, 
	"projectVersion": 1, 
	"saveCounter": 2131, 
	"studioVersion": "6.4.6GA", 
	"theme": "wm_default", 
	"toastPosition": "br",
	"widgets": {
		silkIconList: ["wm.ImageList", {"colCount":39,"height":16,"iconCount":90,"url":"lib/images/silkIcons/silk.png","width":16}, {}], 
		tblattachmentLiveView1: ["wm.LiveView", {"dataType":"com.dbwaveerp.data.Tblattachment","related":[],"service":"dbwaveerp","view":[{"caption":"Seqid","sortable":true,"dataIndex":"seqid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Entityid","sortable":true,"dataIndex":"entityid","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Filename","sortable":true,"dataIndex":"filename","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null}]}, {}], 
		navBackToLogin: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
			input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"\"PgLogin\"","targetProperty":"pageName"}, {}]
				}]
			}]
		}], 
		svarGetRole: ["wm.ServiceVariable", {"operation":"getUserRoles","service":"svcSecurity"}, {"onResult":"svarGetRoleResult"}, {
			input: ["wm.ServiceInput", {"type":"getUserRolesInputs"}, {}]
		}], 
		svarLoadUserRights: ["wm.ServiceVariable", {"operation":"loadUserRight","service":"svcSecurity"}, {"onResult":"svarLoadUserRightsResult"}, {
			input: ["wm.ServiceInput", {"type":"loadUserRightInputs"}, {}]
		}], 
		svarLogging: ["wm.ServiceVariable", {"operation":"writeAppLog","service":"svcLogging"}, {}, {
			input: ["wm.ServiceInput", {"type":"writeAppLogInputs"}, {}]
		}], 
		svarLogoutApp: ["wm.ServiceVariable", {"operation":"deleteSession","service":"svcSessionFunction"}, {"onResult":"svarLogoutAppResult"}, {
			input: ["wm.ServiceInput", {"type":"deleteSessionInputs"}, {}]
		}], 
		svarResetRegistry: ["wm.ServiceVariable", {"operation":"resetRegistry","service":"svcRegistry"}, {}, {
			input: ["wm.ServiceInput", {"type":"resetRegistryInputs"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"\"ENTITY\"","targetProperty":"pEntity"}, {}],
					wire1: ["wm.Wire", {"expression":"\"PASSWORD\"","targetProperty":"pPassword"}, {}],
					wire2: ["wm.Wire", {"expression":"\"USERID\"","targetProperty":"pUserId"}, {}],
					wire3: ["wm.Wire", {"expression":"\"USERNAME\"","targetProperty":"pUsername"}, {}]
				}]
			}]
		}], 
		svarUpdateSessionApp: ["wm.ServiceVariable", {"operation":"updateSession","service":"svcSessionFunction"}, {"onResult":"svarUpdateSessionAppResult"}, {
			input: ["wm.ServiceInput", {"type":"updateSessionInputs"}, {}]
		}], 
		svarWriteToRegistry: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {}, {
			input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
		}], 
		varAppContext: ["wm.Variable", {"type":"StringData"}, {}], 
		varAppCopyright: ["wm.Variable", {"type":"StringData"}, {}], 
		varAppId: ["wm.Variable", {"type":"StringData"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"TKSUSRMGT\"","source":false,"targetProperty":"dataValue"}, {}]
			}]
		}], 
		varAppName: ["wm.Variable", {"type":"StringData"}, {}], 
		varAppPrefix: ["wm.Variable", {"type":"StringData"}, {}], 
		varAppVersion: ["wm.Variable", {"type":"StringData"}, {}], 
		varArray: ["wm.Variable", {"isList":true,"json":"[]","type":"EntryData"}, {}], 
		varArrayRights: ["wm.Variable", {"isList":true,"json":"[]","type":"EntryData"}, {}], 
		varBrowserName: ["wm.Variable", {"type":"StringData"}, {}], 
		varBrowserOS: ["wm.Variable", {"type":"StringData"}, {}], 
		varBrowserVersion: ["wm.Variable", {"type":"StringData"}, {}], 
		varEmail: ["wm.Variable", {"type":"StringData"}, {}], 
		varEntity: ["wm.Variable", {"type":"StringData"}, {}], 
		varFlag: ["wm.Variable", {"type":"StringData"}, {}], 
		varGetUserID: ["wm.Variable", {"type":"StringData"}, {}], 
		varLogToFile: ["wm.Variable", {"type":"StringData"}, {}], 
		varModuleId: ["wm.Variable", {"type":"StringData"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"TKSUSRMGT\"","targetProperty":"dataValue"}, {}]
			}]
		}], 
		varPartyId: ["wm.Variable", {"type":"StringData"}, {}], 
		varPassword: ["wm.Variable", {"type":"StringData"}, {}], 
		varSessionId: ["wm.Variable", {"type":"StringData"}, {}], 
		varStrParam01: ["wm.Variable", {"type":"StringData"}, {}], 
		varStrParam02: ["wm.Variable", {"type":"StringData"}, {}], 
		varUserId: ["wm.Variable", {"type":"StringData"}, {}], 
		varUserInfo: ["wm.Variable", {"type":"StringData"}, {}], 
		varUsername: ["wm.Variable", {"type":"StringData"}, {}]
	},
	_end: 0
});

weSecurityManager.extend({

    svarGetRoleResult: function(inSender, inDeprecated) {
        try {
            var strProleId = "";
            var strLen;
            app.varArray.clearData(); 
            for (i = 0; i < inSender.getCount(); i++) {
                var aRow = inSender.getItem(i);
                app.varArray.addItem({dataValue:aRow.data.roleid});
                //alert(app.varArray.getItem(i).getValue("dataValue")); 
                strProleId = strProleId + "'" + app.varArray.getItem(i).getValue("dataValue") + "'" + ",";
            }

            strLen = strProleId.length;
            strProleId = strProleId.slice(0, strLen - 1);
            //alert(strProleId);
            //alert("select * from Tblrightasgn where sstatus = 'ACTIVE'" + " and roleid IN ( " + strProleId + " );");
            app.svarLoadUserRights.setValue("input.pRoleId", strProleId);
            app.svarLoadUserRights.update();

        } catch (e) {
            console.error('ERROR IN svarGetRoleResult: ' + e);
        }
    },

svarLoadUserRightsResult: function(inSender, inDeprecated) {
	  try {        
               var i;
               var x;
               var rights;
               var check = "";
               var flag = "";
               var rtnString = '';
               
              app.varArrayRights.clearData();
               var numRows = inSender.getCount();     
               //alert(numRows);
               if (numRows > 0) {
                  for (i=0; i < numRows; i++) {
                      var aRow = inSender.getItem(i);
                         app.varArrayRights.addItem({dataValue:aRow.data.rightid + "|" + aRow.data.appid});
                  }
               }
               
               if(app.varModuleId.getValue("dataValue") == "MDLWAITING"){
                for (i=0; i < app.varArrayRights.getCount(); i++) {
                   rights = app.varArrayRights.getItem(i).getValue("dataValue").split("|",2);       
                   //alert(rights[0] + "-" + rights[1]);
                   if(rights[0] == "OPENAPP" && rights[1] == app.varAppId.getValue("dataValue")){
                       //alert("flag");                  
                       flag = "access";
                   }
                }
                app.varFlag.setValue("dataValue",flag);
                  if(app.varFlag.getValue("dataValue") == "access"){
                    //alert(app.varFlag.getValue("dataValue"));
                    app.loadPage("PgManageUser");
                  }else{
                    alert("Access Denied");
                    app.loadPage("PgLogin");
                    //window.location.href = this.linklimbo; 
                  }
               }
	  } catch(e) {
		  console.error('ERROR IN svarLoadUserRightsResult: ' + e); 
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
  
  //Added by Jammi Dee 11/25/2012
  svarLogoutAppResult: function(inSender, inDeprecated) {
	  try {
		  
            app.svarResetRegistry.setValue("input.pEntity",     "ENTITY");
            app.svarResetRegistry.setValue("input.pPassword",   "PASSWORD");
            app.svarResetRegistry.setValue("input.pUserid",     "USERID");
            app.svarResetRegistry.setValue("input.pUsername",   "USERNAME");
            app.svarResetRegistry.update();
            app.navBackToLogin.update();

	  } catch(e) {
          
		  console.error('ERROR IN svarLogoutAppResult: ' + e);
          alert( 'ERROR IN svarLogoutAppResult: ' + e );
          
	  } 
  },
  svarUpdateSessionAppResult: function(inSender, inDeprecated) {
	  try {
		  
            //alert( inSender.getValue("dataValue") );
            if(inSender.getValue("dataValue") === "EXPIRE"){
                
                alert( "Your have been logged out due to inactivity!" );
                app.loadPage("PgLogin");
                return;
                
            }	
    
	  } catch(e) {
          
		  console.error('ERROR IN svarUpdateSessionAppResult: ' + e);
          alert( 'ERROR IN svarUpdateSessionAppResult: ' + e );
          
	  } 
  },
  _end: 0
});