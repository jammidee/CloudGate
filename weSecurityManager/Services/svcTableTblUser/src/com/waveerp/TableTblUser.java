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

/**
 * Created by: Jammi Dee
 * 12/23/2012

 */
 
/**
 * Created by Jammi Dee
 * Modified by Jammi Dee
 * 12/23/2012 09:20 PM
 * 
*/ 

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

public class TableTblUser extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {

    private Dbwaveerp dbServices = (Dbwaveerp) RuntimeAccess.getInstance().getService(Dbwaveerp.class);


    public TableTblUser() {
       super(INFO);
    }


    //Added by Jammi Dee 12/23/2012
    public String updateUserPassword(String pUserId, String pOldPassword, String pNewPassword){

        //Execute the SQL script using this object
        execGenericNonQuery enq = new execGenericNonQuery();
        //For the SQL Escape
        systemTextUtils stu = new systemTextUtils();    

        // Call the registry management system                    
        registrySystem rs = new registrySystem();
        
        // Call the encryption management system
        desEncryption  de = new desEncryption();
        de.Encrypter("","");  
        
        // Return the key to be encoded
        String strEnc = de.encrypt( pNewPassword );
    
        String isValid = "NO";
        String strMsg  = "Password has been updated.";
    
        List<Tbluser> myList = null;
        Iterator<Tbluser> iterator = null;     
        Tbluser item = null;    
    
        try{
 
            dbServices.begin();
        
                Session session = dbServices.getDataServiceManager().getSession();
                String sQuery = "select * from Tbluser where userid = '" + pUserId + "';";   
        
                SQLQuery query = session.createSQLQuery(sQuery);
                query.addEntity(Tbluser.class);
                myList = query.list();
         
            dbServices.commit(); 
            
            iterator = myList.iterator();
            
            // At this stage, a single record should be retrieve
            // else we have issue with uniqueness
            while (iterator.hasNext()) {
                
                item = (Tbluser) iterator.next();
                
                String pass   = (String) item.getPassword();
                String passe  = (String) item.getPasswdenc();
                passe = de.decrypt( passe );
                
                if(passe.compareTo(pOldPassword) == 0){
                    
                    isValid = "YES";
                    
                } else if(pass.compareTo(pOldPassword) == 0) {
                    
                    isValid = "YES";
                    
                } else {
                    
                    isValid = "NO";
                    
                }    
                

            }                        
            
        }catch (Exception e){
            
            dbServices.rollback();
            return "FAIL";
            
        } 
    
        // Update the object
        if( item != null ){
            
            item.setPassword("LOCKED!");
            item.setPasswdenc(strEnc);
            
        }     
  
        //Update the back-end database with the changes
        try{

            if(isValid.compareTo("YES") == 0){
                
                dbServices.begin();
                    dbServices.update(item);
                dbServices.commit();
                
                String sQL = "";
                sQL = sQL + "update Tbluser set ";
                sQL = sQL + "password = '" +            stu.mySQLEscape("LOCKED!")                 + "', ";
                sQL = sQL + "passwdenc = '" +           stu.mySQLEscape(strEnc)                    + "' ";

                sQL = sQL + "where userid = '" +        stu.mySQLEscape(pUserId)                   + "' ;";
                
                enq.execNonQuery( sQL );                  
                
                
            } else {
                
                strMsg = "Old password does not match!";
                
            }
      
        } catch (Exception e) {
            
            return e.getMessage();
            //strMsg = "Function error!";
            
        }       
    
        return strMsg;
    
    }


    //Added by Jammi Dee 12/25/2012
    public String encryptUserPasswordAll(){

        //Execute the SQL script using this object
        execGenericNonQuery enq = new execGenericNonQuery();
        //For the SQL Escape
        systemTextUtils stu = new systemTextUtils();  
        
        // Call the encryption management system
        desEncryption  de = new desEncryption();
        de.Encrypter("","");  
        
        String strMsg  = "Passwords had been updated.";
    
        List<Tbluser> myList = null;
        Iterator<Tbluser> iterator = null;     
        Tbluser item = null;    
    
        try{
 
            dbServices.begin();
        
                Session session = dbServices.getDataServiceManager().getSession();
                String sQuery = "select * from Tbluser;";   
        
                SQLQuery query = session.createSQLQuery(sQuery);
                query.addEntity(Tbluser.class);
                myList = query.list();
         
            dbServices.commit(); 
            
            iterator = myList.iterator();
            
            // Loop and generate an encrypted password
            while (iterator.hasNext()) {
                
                item = (Tbluser) iterator.next();
                
                String pass             = (String) item.getPassword();
                String strUserid        = (String) item.getUserid();
                
                //Create encryption only on unlocked items.
                if(pass.compareTo("LOCKED!") != 0 ){
                    
                    //Generate the encrypted password
                    String strEnc = de.encrypt( pass );
                    //Save the encrypted password to 
                    item.setPasswdenc(strEnc);
                    item.setPassword("LOCKED!");
                
                    //Update the database record
                    dbServices.begin();
                        dbServices.update(item);
                    dbServices.commit(); 
                    
                    String sQL = "";
                    sQL = sQL + "update Tbluser set ";
                    sQL = sQL + "password = '" +            stu.mySQLEscape("LOCKED!")                 + "', ";
                    sQL = sQL + "passwdenc = '" +           stu.mySQLEscape(strEnc)                    + "' ";

                    sQL = sQL + "where userid = '" +        stu.mySQLEscape(strUserid)                 + "' ;";
                
                    enq.execNonQuery( sQL );                        

                }

            }                        
            
        }catch (Exception e){
            
            dbServices.rollback();
            return "FAIL";
            
        }     
    
        return strMsg;
    
    }

    //Added by Jammi Dee 12/25/2012
    public String decryptUserPasswordAll(){
        
        //Execute the SQL script using this object
        execGenericNonQuery enq = new execGenericNonQuery();
        //For the SQL Escape
        systemTextUtils stu = new systemTextUtils();  
        
        // Call the encryption management system
        desEncryption  de = new desEncryption();
        de.Encrypter("","");  
        
        String strMsg  = "Passwords had been updated.";
    
        List<Tbluser> myList = null;
        Iterator<Tbluser> iterator = null;     
        Tbluser item = null;    
    
        try{
 
            dbServices.begin();
        
                Session session = dbServices.getDataServiceManager().getSession();
                String sQuery = "select * from Tbluser;";   
        
                SQLQuery query = session.createSQLQuery(sQuery);
                query.addEntity(Tbluser.class);
                myList = query.list();
         
            dbServices.commit(); 
            
            iterator = myList.iterator();
            
            // Loop and generate an encrypted password
            while (iterator.hasNext()) {
                
                item = (Tbluser) iterator.next();
                
                String strUserid        = (String) item.getUserid();
                String passe            = (String) item.getPasswdenc();
                    
                //Generate the encrypted password
                String strDec = de.decrypt( passe );
                //Save the encrypted password to 
                item.setPassword(strDec);
                
                //Update the database record
                dbServices.begin();
                    dbServices.update(item);
                dbServices.commit();
                
                String sQL = "";
                sQL = sQL + "update Tbluser set ";
                sQL = sQL + "password = '" +            stu.mySQLEscape(strDec)                 + "' ";

                sQL = sQL + "where userid = '" +        stu.mySQLEscape(strUserid)              + "' ;";
                
                enq.execNonQuery( sQL );                 

            }                        
            
        }catch (Exception e){
            
            dbServices.rollback();
            return "FAIL";
            
        }     
    
        return strMsg;
    
    }

    //Added by Jammi Dee 01/10/2013
    public String getTableValue( String pUserId, String pField ){

        // Call the encryption management system
        desEncryption  de = new desEncryption();
        de.Encrypter("","");  

        List<Tbluser> myList = null;
        Iterator<Tbluser> iterator = null;     
        Tbluser item = null;   
        
        String strResult = "ERROR";
        
        try{    
            dbServices.begin();
        
            Session session = dbServices.getDataServiceManager().getSession();
            String sQuery = "select * from Tbluser where userid = '" + pUserId + "' ;";   
        
            SQLQuery query = session.createSQLQuery(sQuery);
            query.addEntity(Tbluser.class);
            
            myList = query.list();
         
            dbServices.commit(); 
       
            iterator = myList.iterator();
        
            /**
             * At this point, only one record should be retrieved
            */
            while (iterator.hasNext()) {
                
                item = (Tbluser) iterator.next();
                
                if( pField.compareTo("ENTITYID") == 0 ){
                    
                    strResult = (String) item.getEntityid();

                } else if( pField.compareTo("USERNAME") == 0 ){
                    
                        strResult = (String) item.getUsername();

                } else if( pField.compareTo("FIRSTNAME") == 0 ){
                    
                        strResult = (String) item.getFirstname();

                } else if( pField.compareTo("MIDDLENAME") == 0 ){
                    
                        strResult = (String) item.getMiddlename();

                } else if( pField.compareTo("LASTNAME") == 0 ){
                    
                        strResult = (String) item.getLastname();

                } else if( pField.compareTo("STATUS") == 0 ) {
                    
                    strResult = (String) item.getSstatus();
                
                } else if( pField.compareTo("EMAIL") == 0 ) {
                    
                    strResult = (String) item.getEmail();
                    
                } else if( pField.compareTo("PARENTPERSON") == 0 ) {
                    
                    strResult = (String) item.getParentPerson();
                         
                } else if( pField.compareTo("PASSWORD") == 0 ) {
                    
                    strResult = (String) item.getPassword();
                       
                } else if( pField.compareTo("PASSWDENC") == 0 ) {
                    
                    strResult = (String) item.getPasswdenc();
                    //Generate the encrypted password
                    String strDec = de.decrypt( strResult );
                    strResult = strDec;
                                 
                } else {
                    
                    strResult = "NULL";

                }
                
                
            }
            
        }catch (Exception e){
            
            dbServices.rollback();
            return "FAIL";
            
        }
        
        if( item == null ){
            
            return "FAIL";
            
        }        
        
        return strResult;
     
    }


    //Added by Jammi Dee 01/10/2013
    public String getTableValueByEmail( String pEmail, String pField ){

        // Call the encryption management system
        desEncryption  de = new desEncryption();
        de.Encrypter("","");  

        List<Tbluser> myList = null;
        Iterator<Tbluser> iterator = null;     
        Tbluser item = null;   
        
        String strResult = "ERROR";
        
        try{    
            dbServices.begin();
        
            Session session = dbServices.getDataServiceManager().getSession();
            String sQuery = "select * from Tbluser where email = '" + pEmail + "' ;";   
        
            SQLQuery query = session.createSQLQuery(sQuery);
            query.addEntity(Tbluser.class);
            
            myList = query.list();
         
            dbServices.commit(); 
       
            iterator = myList.iterator();
        
            /**
             * At this point, only one record should be retrieved
            */
            while (iterator.hasNext()) {
                
                item = (Tbluser) iterator.next();
                
                if( pField.compareTo("ENTITYID") == 0 ){
                    
                    strResult = (String) item.getEntityid();

                } else if( pField.compareTo("USERNAME") == 0 ){
                    
                        strResult = (String) item.getUsername();

                } else if( pField.compareTo("FIRSTNAME") == 0 ){
                    
                        strResult = (String) item.getFirstname();

                } else if( pField.compareTo("MIDDLENAME") == 0 ){
                    
                        strResult = (String) item.getMiddlename();

                } else if( pField.compareTo("LASTNAME") == 0 ){
                    
                        strResult = (String) item.getLastname();

                } else if( pField.compareTo("STATUS") == 0 ) {
                    
                    strResult = (String) item.getSstatus();
                
                } else if( pField.compareTo("EMAIL") == 0 ) {
                    
                    strResult = (String) item.getEmail();
                    
                } else if( pField.compareTo("PARENTPERSON") == 0 ) {
                    
                    strResult = (String) item.getParentPerson();
                         
                } else if( pField.compareTo("PASSWORD") == 0 ) {
                    
                    strResult = (String) item.getPassword();
                       
                } else if( pField.compareTo("PASSWDENC") == 0 ) {
                    
                    strResult = (String) item.getPasswdenc();
                    //Generate the encrypted password
                    String strDec = de.decrypt( strResult );
                    strResult = strDec;
                                 
                } else {
                    
                    strResult = "NULL";

                }
                
                
            }
            
        }catch (Exception e){
            
            dbServices.rollback();
            return "FAIL";
            
        }
        
        if( item == null ){
            
            return "FAIL";
            
        }        
        
        return strResult;
     
    }


    //Added by Jammi Dee 02/10/2013
    public String findEmail( String pEntity, String pEmail ){

        List<Tbluser> myList = null;
        Iterator<Tbluser> iterator = null;     
        Tbluser item = null;   
        
        String strResult = "ERROR";
        
        try{    
            
            dbServices.begin();
        
            Session session = dbServices.getDataServiceManager().getSession();
            String sQuery = "select * from Tbluser where entityid = '" + pEntity + "' and email ='" + pEmail + "' ;";   
        
            SQLQuery query = session.createSQLQuery(sQuery);
            query.addEntity(Tbluser.class);
            
            myList = query.list();
         
            dbServices.commit(); 
       
            iterator = myList.iterator();
        
            /**
             * At this point, only one record should be retrieved
            */
            while (iterator.hasNext()) {
                
                item = (Tbluser) iterator.next();

            }
            
        }catch (Exception e){
            
            dbServices.rollback();
            return "FAIL";
            
        }
        
        if( item == null ){
            
            return "FAIL";
            
        }
        
        return "OK";
     
    }



}

