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

public class TableTblPerson extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {

    private Dbwaveerp dbServices = (Dbwaveerp) RuntimeAccess.getInstance().getService(Dbwaveerp.class);

    public TableTblPerson() {
       super(INFO);
    }

    //Added by Jammi Dee 01/10/2013
    public String getTableValue( String pPartyId, String pField ){

        List<Tblperson> myList = null;
        Iterator<Tblperson> iterator = null;     
        Tblperson item = null;   
        
        String strResult = "ERROR";
        
        try{    
            dbServices.begin();
        
            Session session = dbServices.getDataServiceManager().getSession();
            String sQuery = "select * from Tblperson where partyid = '" + pPartyId + "' ;";   
        
            SQLQuery query = session.createSQLQuery(sQuery);
            query.addEntity(Tblperson.class);
            
            myList = query.list();
         
            dbServices.commit(); 
       
            iterator = myList.iterator();
        
            /**
             * At this point, only one record should be retrieved
            */
            while (iterator.hasNext()) {
                
                item = (Tblperson) iterator.next();
                
                if( pField.compareTo("ENTITYID") == 0 ){
                    
                    strResult = (String) item.getEntityid();

                } else if( pField.compareTo("TITLE") == 0 ){
                    
                        strResult = (String) item.getTitle();

                } else if( pField.compareTo("FIRSTNAME") == 0 ){
                    
                        strResult = (String) item.getFirstname();

                } else if( pField.compareTo("MIDDLENAME") == 0 ){
                    
                        strResult = (String) item.getMiddlename();

                } else if( pField.compareTo("LASTNAME") == 0 ){
                    
                        strResult = (String) item.getLastname();

                } else if( pField.compareTo("SUFFIX") == 0 ){
                    
                        strResult = (String) item.getSuffix();

                } else if( pField.compareTo("ADDR01") == 0 ){
                    
                        strResult = (String) item.getAddr01();
                        
                } else if( pField.compareTo("ADDR02") == 0 ){
                    
                        strResult = (String) item.getAddr02();

                } else if( pField.compareTo("CITY") == 0 ){
                    
                        strResult = (String) item.getCity();

                } else if( pField.compareTo("EMPSTATE") == 0 ){
                    
                        strResult = (String) item.getEmpstate();

                } else if( pField.compareTo("ZIPCODE") == 0 ){
                    
                        strResult = (String) item.getZipcode();

                } else if( pField.compareTo("COUNTRY") == 0 ){
                    
                        strResult = (String) item.getCountry();

                } else if( pField.compareTo("EMAIL") == 0 ){
                    
                        strResult = (String) item.getEmail();

                } else if( pField.compareTo("COUNTRYCODEHOME") == 0 ){
                    
                        strResult = (String) item.getCountrycodehome();

                } else if( pField.compareTo("AREACODEHOME") == 0 ){
                    
                        strResult = (String) item.getAreacodehome();
                        
                } else if( pField.compareTo("PHONEHOME") == 0 ){
                    
                        strResult = (String) item.getPhonehome();                        

                } else if( pField.compareTo("EXTENSIONHOME") == 0 ){
                    
                        strResult = (String) item.getExtensionhome();     

                } else if( pField.compareTo("COUNTRYCODEWORK") == 0 ){
                    
                        strResult = (String) item.getCountrycodework();

                } else if( pField.compareTo("AREACODEWORK") == 0 ){
                    
                        strResult = (String) item.getAreacodework();
                        
                } else if( pField.compareTo("PHONEWORK") == 0 ){
                    
                        strResult = (String) item.getPhonework();                        

                } else if( pField.compareTo("EXTENSIONWORK") == 0 ){
                    
                        strResult = (String) item.getExtensionwork();   

                } else if( pField.compareTo("COUNTRYCODEFAX") == 0 ){
                    
                        strResult = (String) item.getCountrycodefax();

                } else if( pField.compareTo("AREACODEFAX") == 0 ){
                    
                        strResult = (String) item.getAreacodefax();
                        
                } else if( pField.compareTo("PHONEFAX") == 0 ){
                    
                        strResult = (String) item.getPhonefax();                        

                } else if( pField.compareTo("EXTENSIONFAX") == 0 ){
                    
                        strResult = (String) item.getExtensionfax();   

                } else if( pField.compareTo("COUNTRYCODEMOBILE") == 0 ){
                    
                        strResult = (String) item.getCountrycodemobile();

                } else if( pField.compareTo("AREACODEMOBILE") == 0 ){
                    
                        strResult = (String) item.getAreacodemobile();
                        
                } else if( pField.compareTo("PHONEMOBILE") == 0 ){
                    
                        strResult = (String) item.getPhonemobile();                        

                } else if( pField.compareTo("EXTENSIONMOBILE") == 0 ){
                    
                        strResult = (String) item.getExtensionmobile();   

                } else if( pField.compareTo("ROLETYPE") == 0 ){
                    
                        strResult = (String) item.getRoletype();   

                } else if( pField.compareTo("USERJUID") == 0 ){
                    
                        strResult = (String) item.getUserjuid();   

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
