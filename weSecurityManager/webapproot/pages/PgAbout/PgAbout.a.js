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
* Modified by: Jammi Dee 06/16/2012
*
*/
dojo.declare("PgAbout", wm.Page, {
"preferredDevice": "desktop",
start: function() {
try {
this.lblApp.setCaption(app.varAppName.getValue("dataValue"));
} catch(e) {
app.toastError(this.name + ".start() Failed: " + e.toString());
}
},
_end: 0
});

PgAbout.widgets = {
layoutBox1: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"customGetValidate":"","horizontalAlign":"center","verticalAlign":"middle"}, {}, {
pnlAbout: ["wm.Panel", {"height":"262px","horizontalAlign":"left","styles":{"backgroundImage":"url(resources/images/logos/wavebgnd.gif)"},"verticalAlign":"top","width":"597px"}, {}, {
lblApp: ["wm.Label", {"_classes":{"domNode":["wm_FontFamily_Courier","wm_FontSizePx_36px","wm_TextDecoration_Bold","wm_FontColor_BrightRed"]},"align":"center","caption":"Wave ERP","height":"44px","padding":"4","width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
pic_logo: ["wm.Picture", {"height":"100%","source":"resources/images/logos/wavebgnd.gif","width":"100%"}, {}]
}]
}]
};

PgAbout.prototype._cssText = 'body.tundra .PgAbout .wmlayout .PgAbout-pnlAbout {\
background-image:url(resources/images/logos/wavebgnd.gif) !important;\
background-repeat:no-repeat !important;\
}\
';
PgAbout.prototype._htmlText = '';