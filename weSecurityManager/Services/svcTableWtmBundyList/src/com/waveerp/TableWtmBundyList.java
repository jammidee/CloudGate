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
 * Special thanks to Francis Limbo and Rea Javier for the initial codes
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
 * Date 01/10/2013
 * Created by Jammi Dee
 * 
*/

package com.waveerp;

import com.wavemaker.runtime.RuntimeAccess;

//Required for database
import com.dbwaveerp.Dbwaveerp;
import org.hibernate.Session;
import org.hibernate.SQLQuery;

import com.dbwaveerp.data.*;

import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

public class TableWtmBundyList extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {

    private Dbwaveerp dbServices = (Dbwaveerp) RuntimeAccess.getInstance().getService(Dbwaveerp.class);
    
    public TableWtmBundyList() {
       super(INFO);
    }

    //Added by Jammi Dee 01/10/2013
    public String getTableValue( String pDevice, String pField ){

        List<Wtmbundylist> myList = null;
        Iterator<Wtmbundylist> iterator = null;     
        Wtmbundylist item = null;   
        
        String strResult = "ERROR";
        
        try{    
            dbServices.begin();
        
            Session session = dbServices.getDataServiceManager().getSession();
            String sQuery = "select * from Wtmbundylist where deviceid = '" + pDevice + "' ;";   
        
            SQLQuery query = session.createSQLQuery(sQuery);
            query.addEntity(Wtmbundylist.class);
            
            myList = query.list();
         
            dbServices.commit(); 
       
            iterator = myList.iterator();
        
            /**
             * At this point, only one record should be retrieved
            */
            while (iterator.hasNext()) {
                
                item = (Wtmbundylist) iterator.next();
                
                if( pField.compareTo("USEINOUT") == 0 ){
                    
                    strResult = (String) item.getUseinout();

                } else if( pField.compareTo("DESCRIPTION") == 0 ){
                    
                        strResult = (String) item.getDescription();

                } else if( pField.compareTo("LOCID") == 0 ){
                    
                        strResult = (String) item.getLocid();

                } else if( pField.compareTo("JUID") == 0 ){
                    
                        strResult = (String) item.getJuid();

                } else if( pField.compareTo("STATUS") == 0 ) {
                    
                    strResult = (String) item.getSstatus();
                    
                } else {
                    
                    strResult = "NULL";                    

                }
                
                
            }
            
        }catch (Exception e){
            
            dbServices.rollback();
            return "FAIL";
            
        }
        
        return strResult;
     
    }




}
