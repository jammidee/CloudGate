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

package com.waveerp;

/*
Project: Wave ERP Framework
Service Name: Session Manager
Created : Joel M. Damaso
Date: 01/26/2012

*/

import javax.servlet.http.HttpSession;
import com.wavemaker.runtime.RuntimeAccess;

import java.util.ArrayList;

public class systemSession extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {

    public systemSession() {
       super(INFO);
    }


    public String setAttribute (String varName, String varValue) {

        HttpSession sess = RuntimeAccess.getInstance().getSession();
        sess.setAttribute(varName, varValue);
        return new String("OK");
    }
    
    public String setAttribute (String varName, ArrayList varValue) {

        HttpSession sess = RuntimeAccess.getInstance().getSession();
        sess.setAttribute(varName, varValue);
        return new String("OK");
    }    

    public String getAttribute (String varName) {

	   HttpSession sess = RuntimeAccess.getInstance().getSession();
	   String sessionValue = (String) sess.getAttribute(varName);
	   return sessionValue;

	}

    public ArrayList getAttributeArr (String varName) {

       HttpSession sess = RuntimeAccess.getInstance().getSession();
	   ArrayList sessionValue = (ArrayList) sess.getAttribute(varName);
	   return sessionValue;

	}


}
