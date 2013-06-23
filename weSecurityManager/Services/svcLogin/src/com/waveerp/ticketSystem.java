package com.waveerp;

import com.wavemaker.runtime.RuntimeAccess;
import org.hibernate.Session;
import org.hibernate.SQLQuery;
import java.util.Calendar;
import java.sql.Timestamp;
import javax.servlet.http.HttpSession;

//Required for database
import com.dbwaveerp.Dbwaveerp;
//import com.dbwaveerp.data.Tbluser;
import com.dbwaveerp.data.*;
//import com.dbwaveerp.data.Tblregistry;
//Required for Date data type

import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

public class ticketSystem extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {
    
    private Dbwaveerp dbServices = (Dbwaveerp) RuntimeAccess.getInstance().getService(Dbwaveerp.class);
    public ticketSystem() {
       super(INFO);
    }

    //Modified by Jammi Dee 12/23/2012
    public String authenticate(String pUserId, String pPass){
        
        List<Tbluser> myList = null;
        Iterator<Tbluser> iterator = null;
        String result = null;
        
        // Call the registry management system                    
        registrySystem rs = new registrySystem();
        
        // Call the encryption management system
        desEncryption  de = new desEncryption();
        de.Encrypter("","");          
        
        try{
            
            dbServices.begin();
        
                Session session = dbServices.getDataServiceManager().getSession();
                String sQuery = "select * from Tbluser;";   
        
                SQLQuery query = session.createSQLQuery(sQuery);
                query.addEntity(Tbluser.class);
                myList = query.list();
         
            dbServices.commit(); 
       
            iterator = myList.iterator();
        
            while (iterator.hasNext()) {
                
                Tbluser user = (Tbluser) iterator.next();
            
                String userid = (String) user.getUserid();
                String pass   = (String) user.getPassword();
                String passe  = (String) user.getPasswdenc();
                passe = de.decrypt( passe );
            
                //Authenticate using the encrypted password
                if(userid.compareTo(pUserId) == 0 && passe.compareTo(pPass) == 0){
                    
                    result = getUserInfo(pUserId);
                    break;
                    
                //Authenticate using the non-encrypted password, must be 10 chars    
                } else if( userid.compareTo(pUserId) == 0 && pass.compareTo(pPass) == 0 ) {
                    
                    if(pass.length() == 10 ){
                        
                        result = getUserInfo(pUserId);
                        
                    } else {
                        
                        result = "INVALID";
                        
                    }
                    
                    break;                
                    
                }else{
                    
                    result = "INVALID";
                    
                }
                
            } //while (iterator.hasNext())
            
            return result;
            
        }catch (Exception e){
            
            dbServices.rollback();
            return "FAIL";
            
        }          
  }
  
  
  public String getUserInfo(String pUserId){
        List<Tbluser> myList = null;
        Iterator<Tbluser> iterator = null;
        String result = null;
        
    try{
         dbServices.begin();
        
          Session session = dbServices.getDataServiceManager().getSession();
          String sQuery = "select * from Tbluser where sstatus = 'ACTIVE' and userid = '" + pUserId + "';";   
        
          SQLQuery query = session.createSQLQuery(sQuery);
          query.addEntity(Tbluser.class);
          myList = query.list();
         
         dbServices.commit(); 
       
        iterator = myList.iterator();
        
        while (iterator.hasNext()) {
            Tbluser user = (Tbluser) iterator.next();
            
            String password   = (String) user.getPassword();
            String username   = (String) user.getUsername();
            String entityid   = (String) user.getEntityid();
            String firstname  = (String) user.getFirstname();
            String lastname   = (String) user.getLastname();
            String email      = (String) user.getEmail();
          
            result =  entityid + "|" + email + "|" + lastname + ", " + firstname + "|" + pUserId + "|" + password + "|" + username;
        }
        return result;
    }catch (Exception e){
      dbServices.rollback();
      return "FAIL";
    }          
  }
  
    //Added by Jammi Dee 01/10/2013
    public String getUserValue( String pUserId, String pField ){

        List<Tblperson> myList = null;
        Iterator<Tblperson> iterator = null;     
        Tblperson item = null;


        String strResult    = "ERROR";
        String strPartyId   = "";
        
        
        try{    
            dbServices.begin();
        
            Session session = dbServices.getDataServiceManager().getSession();
            String sQuery = "select * from Tblperson where userjuid = '" + pUserId + "' ;";   
        
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

                strPartyId = (String) item.getPartyid();

            }
            
        }catch (Exception e){
            
            dbServices.rollback();
            return "FAIL";
            
        }
        
        // Update the object
        if( item == null ){
            
            //Do nothing for NULL
            strResult = "NULL";
            
        } else {    
            
            List<Tblemployeeext>        myList01 = null;
            Iterator<Tblemployeeext>    iterator01 = null;     
            Tblemployeeext              item01 = null;              
            
 
            try{    
                dbServices.begin();
        
                    Session session = dbServices.getDataServiceManager().getSession();
                    String sQuery = "select * from Tblemployeeext where parentperson = '" + strPartyId + "' ;";   
        
                    SQLQuery query = session.createSQLQuery(sQuery);
                    query.addEntity(Tblemployeeext.class);
            
                    myList01 = query.list();
         
                dbServices.commit(); 
       
                iterator01 = myList01.iterator();
        
                /**
                * At this point, only one record should be retrieved
                */
                while (iterator01.hasNext()) {
                
                    item01 = (Tblemployeeext) iterator01.next();

                    if( pField.compareTo("ENTITYID") == 0 ){
                    
                        strResult = (String) item01.getEntityid();

                    } else if( pField.compareTo("PARENTPERSON") == 0 ){
                    
                        strResult = (String) item01.getParentPerson();

                    } else if( pField.compareTo("BADGEID") == 0 ){
                    
                        strResult = (String) item01.getBadgeid();

                    } else if( pField.compareTo("DIVISIONID") == 0 ){
                    
                        strResult = (String) item01.getDivisionid();

                    } else if( pField.compareTo("DIVISIONDESC") == 0 ){
                    
                        strResult = (String) item01.getDivisiondesc();

                    } else if( pField.compareTo("DEPARTMENTID") == 0 ){
                    
                        strResult = (String) item01.getDepartmentid();

                    } else if( pField.compareTo("DEPARTMENTDESC") == 0 ){
                    
                        strResult = (String) item01.getDepartmentdesc();

                    } else if( pField.compareTo("SECTIONID") == 0 ){
                    
                        strResult = (String) item01.getSectionid();

                    } else if( pField.compareTo("SECTIONDESC") == 0 ){
                    
                        strResult = (String) item01.getSectiondesc();

                    } else if( pField.compareTo("LOCATIONID") == 0 ){
                    
                        strResult = (String) item01.getLocationid();

                    } else if( pField.compareTo("LOCATIONDESC") == 0 ){
                    
                        strResult = (String) item01.getLocationdesc();

                    } else if( pField.compareTo("RESTDAYID") == 0 ){
                    
                        strResult = (String) item01.getRestdayid();

                    } else if( pField.compareTo("RESTDAYDESC") == 0 ){
                    
                        strResult = (String) item01.getRestdaydesc();

                    } else if( pField.compareTo("SHIFTID") == 0 ){
                    
                        strResult = (String) item01.getShiftid();

                    } else if( pField.compareTo("SHIFTDESC") == 0 ){
                    
                        strResult = (String) item01.getShiftdesc();

                    } else if( pField.compareTo("MANAGERID") == 0 ){
                    
                        strResult = (String) item01.getManagerid();

                    } else if( pField.compareTo("MANAGERDESC") == 0 ){
                    
                        strResult = (String) item01.getManagerdesc();

                    } else if( pField.compareTo("JUID") == 0 ){
                    
                        strResult = (String) item01.getJuid();

                    } else if( pField.compareTo("STATUS") == 0 ) {
                    
                        strResult = (String) item01.getSstatus();
                
                    } else if( pField.compareTo("PARTYID") == 0 ) {
                    
                        strResult = strPartyId ;
                        
                    } else {
                    
                        strResult = "NULL";

                    }


                }
            
            }catch (Exception e){
            
                dbServices.rollback();
                return "FAIL";
            
            }
  
            
        }    
        
        return strResult;
     
    }

  

}
