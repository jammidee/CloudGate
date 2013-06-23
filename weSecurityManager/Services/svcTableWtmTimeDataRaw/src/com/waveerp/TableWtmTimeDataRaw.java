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
 * Create by: Jammi Dee
 * Date: 01/19/2013
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

public class TableWtmTimeDataRaw extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {

    private Dbwaveerp dbServices = (Dbwaveerp) RuntimeAccess.getInstance().getService(Dbwaveerp.class);
    
    public TableWtmTimeDataRaw() {
       super(INFO);
    }

    //Added by Jammi Dee 01/19/2013
    public String getTableValue( String pJuid, String pField ){

        List<Wtmtimedataraw> myList = null;
        Iterator<Wtmtimedataraw> iterator = null;     
        Wtmtimedataraw item = null;   
        
        String strResult = "ERROR";
        
        try{    
            dbServices.begin();
        
            Session session = dbServices.getDataServiceManager().getSession();
            String sQuery = "select * from Wtmtimedataraw where juid = '" + pJuid + "' ;";   
        
            SQLQuery query = session.createSQLQuery(sQuery);
            query.addEntity(Wtmtimedataraw.class);
            
            myList = query.list();
         
            dbServices.commit(); 
       
            iterator = myList.iterator();
        
            /**
             * At this point, only one record should be retrieved
            */
            while (iterator.hasNext()) {
                
                item = (Wtmtimedataraw) iterator.next();
                
                if( pField.compareTo("DEVICEID") == 0 ){
                    
                    strResult = (String) item.getDeviceid();

                } else if( pField.compareTo("BADGE") == 0 ){
                    
                    strResult = (String) item.getBadge();
                    
                } else if( pField.compareTo("AXING") == 0 ){
                    
                    strResult = (String) item.getAxing();

                } else if( pField.compareTo("DATASRC") == 0 ){
                    
                    strResult = (String) item.getDatasrc();
                    
                } else if( pField.compareTo("DATASTAT") == 0 ){
                    
                    strResult = (String) item.getDatastat();
                    
                } else if( pField.compareTo("USEINOUT") == 0 ){
                    
                    strResult = (String) item.getUseinout();

                } else if( pField.compareTo("MAPLOCID") == 0 ){
                    
                    strResult = (String) item.getMaplocid();
                  
                } else if( pField.compareTo("MAPENTITY") == 0 ){
                    
                    strResult = (String) item.getMapentity();
                  
                } else if( pField.compareTo("MAPSITEID") == 0 ){
                    
                    strResult = (String) item.getMapsiteid();
                     
                } else if( pField.compareTo("MAPUSERID") == 0 ){
                    
                    strResult = (String) item.getMapuserid();
                    
                } else if( pField.compareTo("MAPEMPID") == 0 ){
                    
                    strResult = (String) item.getMapempid();
                    
                } else if( pField.compareTo("MAPFNAME") == 0 ){
                    
                    strResult = (String) item.getMapfname();
                   
                } else if( pField.compareTo("MAPMNAME") == 0 ){
                    
                    strResult = (String) item.getMapmname();
    
                } else if( pField.compareTo("MAPLNAME") == 0 ){
                    
                    strResult = (String) item.getMaplname();
                           
                } else if( pField.compareTo("MAPDIV") == 0 ){
                    
                    strResult = (String) item.getMapdiv();
                  
                } else if( pField.compareTo("MAPDEPT") == 0 ){
                    
                    strResult = (String) item.getMapdept();
                      
                } else if( pField.compareTo("MAPSECT") == 0 ){
                    
                    strResult = (String) item.getMapsect();
                                                       
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


    //Added by Jammi Dee 01/19/2013
    public String changeDataStatus( String pJuid, String pField, String pData ){

        List<Wtmtimedataraw> myList = null;
        Iterator<Wtmtimedataraw> iterator = null;     
        Wtmtimedataraw item = null;   
        
        String strResult = "ERROR";
        
        try{    
            dbServices.begin();
        
            Session session = dbServices.getDataServiceManager().getSession();
            String sQuery = "select * from Wtmtimedataraw where juid = '" + pJuid + "' ;";   
        
            SQLQuery query = session.createSQLQuery(sQuery);
            query.addEntity(Wtmtimedataraw.class);
            
            myList = query.list();
         
            dbServices.commit(); 
       
            iterator = myList.iterator();
        
            /**
             * At this point, only one record should be retrieved
            */
            while (iterator.hasNext()) {
                
                item = (Wtmtimedataraw) iterator.next();
                
            }
            
        }catch (Exception e){
            
            dbServices.rollback();
            return "FAIL";
            
        }
        
        // Update the object
        if( item == null ){  
            //Do nothing
            strResult = "FAIL";
        } else {
            
            if( pField.compareTo("DATASTAT") == 0 ){
                    
                item.setDatastat( pData );

            } else if( pField.compareTo("DATASRC") == 0 ){
                    
                item.setDatasrc( pData );
                            
            } else if( pField.compareTo("AXING") == 0 ){
                    
                item.setAxing( pData );
                
            } else if( pField.compareTo("USEINOUT") == 0 ){
                    
                item.setUseinout( pData );
                                      
            } else {
                    
                strResult = "FAIL";

            }
            
            //Do the update now.  
            try{

                dbServices.begin();
                    dbServices.update(item);
                dbServices.commit();
      
                strResult = "OK";
      
            } catch (Exception e) {
            
                strResult = "FAIL";
                return e.getMessage();
            
            }                
            
        }
        
        return strResult;
     
    }





}
