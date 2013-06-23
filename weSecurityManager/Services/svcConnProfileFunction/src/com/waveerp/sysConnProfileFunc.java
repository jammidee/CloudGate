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
 * Date: 12/31/2012
 * Modified by: Jammi Dee 12/31/2012 11:09 pm
 * 
*/

package com.waveerp;

import com.wavemaker.runtime.RuntimeAccess;

//Required for database
import com.dbwaveerp.Dbwaveerp;
import org.hibernate.Session;
import org.hibernate.SQLQuery;


//import com.dbwaveerp.data.Tbluser;
import com.dbwaveerp.data.*;

import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

//import java.sql.Date;
import java.util.Date;
import java.util.UUID;

public class sysConnProfileFunc extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {

    private Dbwaveerp dbServices = (Dbwaveerp) RuntimeAccess.getInstance().getService(Dbwaveerp.class);


    public sysConnProfileFunc() {
       super(INFO);
    }

    //Added by Jammi Dee 01/01/2013
    public String createConnProfile( 
                                    String pEntityId, 
                                    String pConnId,
                                    String pDescription,
                                    String pDbEngine,
                                    String pDbUrl,
                                    String pDbDriver,
                                    String pDbUsername,
                                    String pDbPassword
                             ){
                                 
        String strJuid = "";                         
                        
        //Added by Jammi Dee 10/22/2012                
        //Check for all the nulls here, fill them up.                
        //if( pMiddleName == null ){
        //    pMiddleName = "";
        //}                         
        
        try{
            
            dbServices.begin();

            //Prepare data for insertion
            Tblconnprofile addEntry = new Tblconnprofile();
            UUID guid = UUID.randomUUID();
            strJuid   = guid.toString();

            addEntry.setJuid( guid.toString() );  
            addEntry.setEntityid( pEntityId );
            addEntry.setConnid( pConnId );
            addEntry.setDescription( pDescription );
            addEntry.setDbengine( pDbEngine );
            addEntry.setDburl( pDbUrl );
            addEntry.setDbdriver( pDbDriver );
            addEntry.setDbusername( pDbUsername );
            addEntry.setDbpassword( pDbPassword );
            addEntry.setSstatus("ACTIVE" );

            dbServices.insert(addEntry);
            dbServices.commit();     
            
        }catch (Exception e){
            
            dbServices.rollback();
            return "FAIL";
            
        }              
        
        return strJuid ;
        
    }    


    //Added by Jammi Dee 01/01/2013
    public String updateConnProfile(    String pJuid,
                                        String pDescription,
                                        String pDbEngine,
                                        String pDbUrl,
                                        String pDbDriver,
                                        String pDbUsername,
                                        String pDbPassword,
                                        String pStatus

                                ){
                                          
        List<Tblconnprofile> myList = null;
        Iterator<Tblconnprofile> iterator = null;     
        Tblconnprofile item = null;    
        
        try{
            dbServices.begin();
        
                Session session = dbServices.getDataServiceManager().getSession();
                String sQuery = "select * from Tblconnprofile where juid = '" + pJuid + "' ;";   
        
                SQLQuery query = session.createSQLQuery(sQuery);
                query.addEntity(Tblconnprofile.class);
                myList = query.list();
         
            dbServices.commit(); 
       
            iterator = myList.iterator();
        
            /**
             * At this point, only one record should be retrieved
            */
            while (iterator.hasNext()) {
                
                item        = (Tblconnprofile) iterator.next();
                
            }
            
        }catch (Exception e){
            
            dbServices.rollback();
            return "FAIL";
            
        }          
             
        // Update the object
        if( item == null ){
            
            //Do nothing for NULL
            
        } else {    
            
            //Do the update now.  
            try{

                //item.setEntityid(       pEntityId );
                //item.setConnid(         pConnId );
                item.setDescription(    pDescription );
                item.setDbengine(       pDbEngine );
                item.setDburl(          pDbUrl );
                item.setDbdriver(       pDbDriver );
                item.setDbusername(     pDbUsername );
                item.setDbpassword(     pDbPassword );
                item.setSstatus(        pStatus );

                dbServices.begin();
                    dbServices.update(item);
                dbServices.commit();
      
            } catch (Exception e) {
            
                return e.getMessage();
            
            }    
           
        }               
          
        return "OK";                                          
    }                                      

    //Added by Jammi Dee 01/01/2013
    public String getConnProfileValue( String pConn, String pField ){

        List<Tblconnprofile> myList = null;
        Iterator<Tblconnprofile> iterator = null;     
        Tblconnprofile item = null;   
        
        String strResult = "ERROR";
        
        try{    
            dbServices.begin();
        
            Session session = dbServices.getDataServiceManager().getSession();
            String sQuery = "select * from Tblconnprofile where connid = '" + pConn + "' ;";   
        
            SQLQuery query = session.createSQLQuery(sQuery);
            query.addEntity(Tblconnprofile.class);
            
            myList = query.list();
         
            dbServices.commit(); 
       
            iterator = myList.iterator();
        
            /**
             * At this point, only one record should be retrieved
            */
            while (iterator.hasNext()) {
                
                item = (Tblconnprofile) iterator.next();
                
                if( pField.compareTo("DESCRIPTION") == 0 ){
                    
                    strResult = (String) item.getDescription();
                    
                } else if( pField.compareTo("DBENGINE") == 0 ) {
                    
                    strResult = (String) item.getDbengine();

                } else if( pField.compareTo("DBURL") == 0 ) {
                    
                    strResult = (String) item.getDburl();

                } else if( pField.compareTo("DBDRIVER") == 0 ) {
                    
                    strResult = (String) item.getDbdriver();

                } else if( pField.compareTo("DBUSERNAME") == 0 ) {
                    
                    strResult = (String) item.getDbusername();

                } else if( pField.compareTo("DBPASSWORD") == 0 ) {
                    
                    strResult = (String) item.getDbpassword();

                } else if( pField.compareTo("STATUS") == 0 ) {
                    
                    strResult = (String) item.getSstatus();

                }
                
                
            }
            
        }catch (Exception e){
            
            dbServices.rollback();
            return "FAIL";
            
        }
        
        return strResult;
     
    }

}
