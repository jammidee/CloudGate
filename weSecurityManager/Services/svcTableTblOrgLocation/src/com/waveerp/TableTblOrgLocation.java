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


public class TableTblOrgLocation extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {

    private Dbwaveerp dbServices = (Dbwaveerp) RuntimeAccess.getInstance().getService(Dbwaveerp.class);

    public TableTblOrgLocation() {
       super(INFO);
    }


    //Added by Jammi Dee 01/09/2013
    public String tableOptionData(String pEntityId){
        
        String strMsg  = "";
    
        List<Tblorglocation> myList = null;
        Iterator<Tblorglocation> iterator = null;     
        Tblorglocation item = null;    
    
        try{
 
            dbServices.begin();
        
                Session session = dbServices.getDataServiceManager().getSession();
                String sQuery = "select * from Tblorglocation where entityid ='" + pEntityId + "';";   
        
                SQLQuery query = session.createSQLQuery(sQuery);
                query.addEntity(Tblorglocation.class);
                myList = query.list();
         
            dbServices.commit(); 
            
            iterator = myList.iterator();
            
            while (iterator.hasNext()) {
                
                item = (Tblorglocation) iterator.next();
                
                String txtId = (String) item.getOrgid();
                
                strMsg   = strMsg + "," + txtId ;             

            }                        
            
        }catch (Exception e){
            
            dbServices.rollback();
            return "FAIL";
            
        }     
    
        return strMsg;
    
    }

    //Added by Jammi Dee 01/10/2013
    public String getTableValue( String pOrgId, String pField ){

        List<Tblorglocation> myList = null;
        Iterator<Tblorglocation> iterator = null;     
        Tblorglocation item = null;   
        
        String strResult = "ERROR";
        
        try{    
            dbServices.begin();
        
            Session session = dbServices.getDataServiceManager().getSession();
            String sQuery = "select * from Tblorglocation where orgid = '" + pOrgId + "' ;";   
        
            SQLQuery query = session.createSQLQuery(sQuery);
            query.addEntity(Tblorglocation.class);
            
            myList = query.list();
         
            dbServices.commit(); 
       
            iterator = myList.iterator();
        
            /**
             * At this point, only one record should be retrieved
            */
            while (iterator.hasNext()) {
                
                item = (Tblorglocation) iterator.next();
                
                if( pField.compareTo("ENTITYID") == 0 ){
                    
                    strResult = (String) item.getEntityid();

                } else if( pField.compareTo("DESCRIPTION") == 0 ){
                    
                        strResult = (String) item.getDescription();
                        
                } else if( pField.compareTo("PID") == 0 ){
                    
                        strResult = (String) item.getPid();

                } else if( pField.compareTo("CONTACT01") == 0 ){
                    
                        strResult = (String) item.getContact01();

                } else if( pField.compareTo("CONTACT02") == 0 ){
                    
                        strResult = (String) item.getContact02();

                } else if( pField.compareTo("GEODESC") == 0 ){
                    
                        strResult = (String) item.getGeodesc();
                        
                } else if( pField.compareTo("GEOLON") == 0 ){
                    
                        strResult = ((Double) item.getGeolon()).toString() ;
                                                
                } else if( pField.compareTo("GEOLAT") == 0 ){
                    
                        strResult = ((Double) item.getGeolat()).toString() ;
                                                                  
                } else if( pField.compareTo("CATEGORY") == 0 ){
                    
                        strResult = (String) item.getCategory();
                                                                                          
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
