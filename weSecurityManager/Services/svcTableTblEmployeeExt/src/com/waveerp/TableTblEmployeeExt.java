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


public class TableTblEmployeeExt extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {

    private Dbwaveerp dbServices = (Dbwaveerp) RuntimeAccess.getInstance().getService(Dbwaveerp.class);

    public TableTblEmployeeExt() {
       super(INFO);
    }


    //Added by Jammi Dee 01/10/2013
    public String getTableValue( String pPartyId, String pField ){

        List<Tblemployeeext> myList = null;
        Iterator<Tblemployeeext> iterator = null;     
        Tblemployeeext item = null;   
        
        String strResult = "ERROR";
        
        try{    
            dbServices.begin();
        
            Session session = dbServices.getDataServiceManager().getSession();
            String sQuery = "select * from Tblemployeeext where partyid = '" + pPartyId + "' ;";   
        
            SQLQuery query = session.createSQLQuery(sQuery);
            query.addEntity(Tblemployeeext.class);
            
            myList = query.list();
         
            dbServices.commit(); 
       
            iterator = myList.iterator();
        
            /**
             * At this point, only one record should be retrieved
            */
            while (iterator.hasNext()) {
                
                item = (Tblemployeeext) iterator.next();
                
                if( pField.compareTo("ENTITYID") == 0 ){
                    
                    strResult = (String) item.getEntityid();

                } else if( pField.compareTo("PARENTPERSON") == 0 ){
                    
                        strResult = (String) item.getParentPerson();

                } else if( pField.compareTo("BADGEID") == 0 ){
                    
                        strResult = (String) item.getBadgeid();

                } else if( pField.compareTo("DIVISIONID") == 0 ){
                    
                        strResult = (String) item.getDivisionid();

                } else if( pField.compareTo("DIVISIONDESC") == 0 ){
                    
                        strResult = (String) item.getDivisiondesc();

                } else if( pField.compareTo("DEPARTMENTID") == 0 ){
                    
                        strResult = (String) item.getDepartmentid();

                } else if( pField.compareTo("DEPARTMENTDESC") == 0 ){
                    
                        strResult = (String) item.getDepartmentdesc();

                } else if( pField.compareTo("SECTIONID") == 0 ){
                    
                        strResult = (String) item.getSectionid();

                } else if( pField.compareTo("SECTIONDESC") == 0 ){
                    
                        strResult = (String) item.getSectiondesc();

                } else if( pField.compareTo("LOCATIONID") == 0 ){
                    
                        strResult = (String) item.getLocationid();

                } else if( pField.compareTo("LOCATIONDESC") == 0 ){
                    
                        strResult = (String) item.getLocationdesc();

                } else if( pField.compareTo("RESTDAYID") == 0 ){
                    
                        strResult = (String) item.getRestdayid();

                } else if( pField.compareTo("RESTDAYDESC") == 0 ){
                    
                        strResult = (String) item.getRestdaydesc();

                } else if( pField.compareTo("SHIFTID") == 0 ){
                    
                        strResult = (String) item.getShiftid();

                } else if( pField.compareTo("SHIFTDESC") == 0 ){
                    
                        strResult = (String) item.getShiftdesc();

                } else if( pField.compareTo("MANAGERID") == 0 ){
                    
                        strResult = (String) item.getManagerid();

                } else if( pField.compareTo("MANAGERDESC") == 0 ){
                    
                        strResult = (String) item.getManagerdesc();

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
