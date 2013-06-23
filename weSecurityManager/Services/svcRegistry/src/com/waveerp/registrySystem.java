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
 * Created by Francis Angelo Limbo
 * Date: 02/24/2012
 * Modified by: Jammi Dee 05/02/2012
 * 
*/

package com.waveerp;

import com.wavemaker.runtime.RuntimeAccess;
import org.hibernate.Session;
import org.hibernate.SQLQuery;
import java.util.Calendar;
import java.sql.Timestamp;
import javax.servlet.http.HttpSession;

//Required for database
import com.dbwaveerp.Dbwaveerp;
import com.dbwaveerp.data.Tbluser;
import com.dbwaveerp.data.Tblregistry;
//Required for Date data type

import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

public class registrySystem extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {
    
    // Use Wavemaker database Service
    private Dbwaveerp dbServices = (Dbwaveerp) RuntimeAccess.getInstance().getService(Dbwaveerp.class);
    
    public registrySystem() {
        super(INFO);
    }

    // Function for reading the AUTOLOGIN registry
    public String readAppRegistry(String pAppid, String pVarname) {
        String result = null;
        String varvalue;
        try {
            varvalue = readRegistry("NA", pAppid, "NA", pVarname);
            result = varvalue;
        } catch (Exception e) {
            e.printStackTrace();
            dbServices.rollback();
            result = "FAIL";
        }
        return result;
    }

    public boolean writeAppRegistry(String pAppid, String pVarname, String pVarvalue) {
        try {
            writeRegistry("NA", pAppid, "NA", pVarname, pVarvalue);
        } catch (Exception e) {
            e.printStackTrace();
            dbServices.rollback();
            return false;
        }
        return true;
    }

    public boolean writeRegistry(String pEntity, String pAppId, String pUserId, String pVarname, String pVarvalue) {
        String sQuery;

        try {
            if (checkRegistry(pEntity, pAppId, pUserId, pVarname)) {
                sQuery = "update Tblregistry set varvalue = '" + pVarvalue + "',regdate = NOW() where" + 
                       " (entity = '" + pEntity + "' and appid = '" + pAppId + "' and" + 
                        " userid = '" + pUserId + "' and varname = '" + pVarname + "');";
            } else {
                sQuery = "insert into Tblregistry(entity , appid, userid, varname, varvalue, regdate)" + 
                         " values ('" + pEntity + "','" + pAppId + "','" + pUserId + "','" + pVarname + "','" + pVarvalue + "', NOW());";
            }

            execNonQuery(sQuery);

        } catch (Exception e) {
            e.printStackTrace();
            dbServices.rollback();
            return false;
        }
        return true;
    }

    public boolean checkRegistry(String pEntity, String pAppId, String pUserId, String pVarname) {

        List < Tblregistry > myList = null;
        boolean bResult = false;

        try {
            dbServices.begin();

            Session session = dbServices.getDataServiceManager().getSession();
            String sQuery = "select * from Tblregistry where" + 
                            " entity  = '" + pEntity + "' and" + 
                            " appid   = '" + pAppId + "' and" +  
                            " userid  = '" + pUserId + "' and" + 
                            " varname = '" + pVarname + "';";

            SQLQuery query = session.createSQLQuery(sQuery);
            query.addEntity(Tblregistry.class);
            myList = query.list();
            dbServices.commit();


            if (myList.size() > 0 && myList != null) {
                bResult = true;
            }

        } catch (Exception e) {
            dbServices.rollback();
            return bResult;
        }
        return bResult;
    }

    // Generic function in reading the Wave ERP registry table
    public String readRegistry(String pEntity, String pAppId, String pUserId, String pVarname) {

        return readRegistryDefault(pEntity, pAppId, pUserId, pVarname, "");

    }


    // Generic function in reading the Wave ERP registry table
    // Added by Jammi Dee 05/17/2012
    public String readRegistryDefault(String pEntity, String pAppId, String pUserId, String pVarname, String pDefa) {

        List < Tblregistry > myList = null;
        Iterator < Tblregistry > iterator = null;
        String result = null;
        
        if ( pDefa == null){
        } else {
            result = pDefa;
        }
        
        try {
            dbServices.begin();

            Session session = dbServices.getDataServiceManager().getSession();
            String sQuery = "select * from Tblregistry where" + 
                             " entity = '" + pEntity + "' and appid = '" + pAppId + "' and" + 
                             " userid = '" + pUserId + "' and varname = '" + pVarname + "';";

            SQLQuery query = session.createSQLQuery(sQuery);
            query.addEntity(Tblregistry.class);
            myList = query.list();
            dbServices.commit();

            iterator = myList.iterator();

            while (iterator.hasNext()) {
                Tblregistry registry = (Tblregistry) iterator.next();

                String varvalue = (String) registry.getVarvalue();
                result = varvalue;
            }

        } catch (Exception e) {
            dbServices.rollback();
            result = "FAIL";
        }
        return result;
    }


    public boolean saveToRegistry(String pIdNum, String pPassword, String pAppId) {
        List < Tbluser > myList = null;
        Iterator < Tbluser > iterator = null;

        try {
            String sQuery = "select * from Tbluser where userid = '" + pIdNum + "' and password = '" + pPassword + "'";
            myList = getQueryResult(sQuery);

            iterator = myList.iterator();

            while (iterator.hasNext()) {
                Tbluser user = (Tbluser) iterator.next();

                String userid       = (String) user.getUserid();
                String pass         = (String) user.getPassword();
                String username     = (String) user.getUsername();
                String entityid     = (String) user.getEntityid();


                writeRegistry("GLOBAL",pAppId,"NA","USERID",userid);
                writeRegistry("GLOBAL",pAppId,"NA","PASSWORD",pass);
                writeRegistry("GLOBAL",pAppId,"NA","USERNAME",username);
                writeRegistry("GLOBAL",pAppId,"NA","ENTITY",entityid);
            }

        } catch (Exception e) {
            dbServices.rollback();
            return false;
        }
        return true;
    }

    public boolean execNonQuery(String eQuery) {
        try {
            dbServices.begin();

            Session session = dbServices.getDataServiceManager().getSession();
            SQLQuery query = session.createSQLQuery(eQuery);
            query.executeUpdate();

            dbServices.commit();

        } catch (Exception e) {
            dbServices.rollback();
            return false;
        }
        return true;
    }

    public List < Tbluser > getQueryResult(String sQuery) {

        List < Tbluser > myList = null;
        try {
            dbServices.begin();

            Session session = dbServices.getDataServiceManager().getSession();

            SQLQuery query = session.createSQLQuery(sQuery);
            query.addEntity(Tbluser.class);
            myList = query.list();

            dbServices.commit();

        } catch (Exception e) {
            dbServices.rollback();
        }
        return myList;
    }

    public String authenticateRegistry() {
        
        List < Tblregistry > myList = null;
        String result = null;
        String sQuery = null;
        
        try {
            sQuery = "select * from Tblregistry where entity = 'GLOBAL' and varname = 'USERID' and varvalue != ''";
            
            myList = execQuery(sQuery);
            
            if (myList.size() > 0 && myList != null) {
             sQuery = "select * from Tblregistry where entity = 'GLOBAL' and varname = 'PASSWORD' and varvalue != ''";
                         
                myList = execQuery(sQuery);
                if (myList.size() > 0 && myList != null) {
                    result = "autologin";
                } else {
                    result = "login";
                }
            } else {
                result = "login";
            }

        } catch (Exception e) {
            dbServices.rollback();
            result = "FAILED";
        }
        return result;
    }

    public List <Tblregistry> execQuery(String sQuery) {
        List <Tblregistry> myList = null;
        try {
            dbServices.begin();
            Session session = dbServices.getDataServiceManager().getSession();

            SQLQuery query = session.createSQLQuery(sQuery);
            query.addEntity(Tblregistry.class);
            myList = query.list();

            dbServices.commit();

        } catch (Exception e) {
            dbServices.rollback();
        }
        return myList;
    }
    
    public boolean resetRegistry(String pEntity, String pUserId, String pPassword, String pUsername){
        String sQuery = null;
      try{
          sQuery = "update Tblregistry set varvalue = '' where varname = '" + pEntity + "';";
          execNonQuery(sQuery);
          sQuery = "update Tblregistry set varvalue = '' where varname = '" + pUserId + "';";
          execNonQuery(sQuery);
          sQuery = "update Tblregistry set varvalue = '' where varname = '" + pPassword + "';";
          execNonQuery(sQuery);
          sQuery = "update Tblregistry set varvalue = '' where varname = '" + pUsername + "';";
          execNonQuery(sQuery);
      }catch(Exception e){
        dbServices.rollback();
        return false;
      }
       return true;
    }
    
    public String getUserId(){
        List<Tblregistry> myList = null;
        Iterator<Tblregistry> iterator = null;
        String result = null;
        
    try{
         dbServices.begin();
        
          Session session = dbServices.getDataServiceManager().getSession();
          String sQuery = "select * from Tblregistry where varname = 'USERID';";   
        
          SQLQuery query = session.createSQLQuery(sQuery);
          query.addEntity(Tblregistry.class);
          myList = query.list();
         
         dbServices.commit(); 
       
        iterator = myList.iterator();
        
        while (iterator.hasNext()) {
            Tblregistry user = (Tblregistry) iterator.next();            
            String userid  = (String) user.getVarvalue();            
            result = userid;
        }
        return result;
    }catch (Exception e){
      dbServices.rollback();
      return "FAIL";
    }          
  }
  
  /**
   * This code is used for reading and writing to the virtual counter of
   * each application that is connected to Wave ERP.
  */
  
  public String readCounter(String pPrefix, String pKey, String pAppId, String pEntity){
        
      List < Tblregistry > myList = null;
      Iterator < Tblregistry > iterator = null;
      
      String result     = (String) "";
      String noChar     = (String) "";
      String prefix     = (String) "";
      String sequence   = (String) "";
        
      int x = 1;
      int y;
      int z = 0;
      
      try {
          
          dbServices.begin();

          Session session = dbServices.getDataServiceManager().getSession();
          String sQuery = "select * from Tblregistry where entity = '" + pEntity + "' and appid = '" + pAppId + "' and varname like '" + pPrefix + pKey + "%';";

          SQLQuery query = session.createSQLQuery(sQuery);
          query.addEntity(Tblregistry.class);
          myList = query.list();
          dbServices.commit();

          iterator = myList.iterator();

          while (iterator.hasNext()) {
              
              Tblregistry registry  = (Tblregistry) iterator.next();
              String varvalue       = (String) registry.getVarvalue();
              String varname        = (String) registry.getVarname();
                
                                
              if(varvalue.compareTo("BLANK") == 0){
                  
                 varvalue = "";
                 
              } else {
                  
                    if(varname.compareTo( pPrefix + pKey + "PREFIX") == 0){
                        
                        prefix = varvalue;
                        
                    } else if (varname.compareTo( pPrefix + pKey + "NOCHAR") == 0){
                        
                        y = Integer.parseInt(varvalue);
                        z = y;
                        varvalue = "";
                        
                        for(x = 1; x <= y; x++){
                            varvalue = varvalue + "0";
                        }    
                        
                        noChar = varvalue;
                        
                    } else if(varname.compareTo( pPrefix + pKey + "SEQUENCE") == 0){
                        
                        if(varvalue.length() > z){
                      
                            return "Maximum Ticket series already reached";
                     
                        }else{
                      
                            result = result.substring(0, result.length() - varvalue.length());
                            z = Integer.parseInt(varvalue) + 1;
                            varvalue = Integer.toString(z);
                            
                            sequence =  varvalue;
                            
                        }
                    }
              }
              
              result = prefix + noChar + sequence;     
          }

      } catch (Exception e) {
          dbServices.rollback();
          result = "FAIL";
      }
        
      //if (result == ""){
      //    result = "0";
      //}
        
      return result;
  }
    
  // Modified by Jammi Dee 05/13/2012    
  public boolean saveCounter(String pPrefix, String pAppId, String pKey, String pEntity){
      List < Tblregistry > myList = null;
      Iterator < Tblregistry > iterator = null;
      
      int weHaveSeq         = 0;
      int weHaveNoChar      = 0;
      int weHaveNoPrefix    = 0;
      
      int y;
      
      try {
          dbServices.begin();

          Session session = dbServices.getDataServiceManager().getSession();
          String sQuery = "select * from Tblregistry where entity = '" + pEntity + "' and appid = '" + pAppId + "' and varname like '" + pPrefix + pKey + "%';";
            
          SQLQuery query = session.createSQLQuery(sQuery);
          query.addEntity(Tblregistry.class);
          myList = query.list();
          dbServices.commit();

          iterator = myList.iterator();
          while (iterator.hasNext()) {
              
              Tblregistry registry = (Tblregistry) iterator.next();
              String varvalue = (String) registry.getVarvalue();
              String varname  = (String) registry.getVarname();

              if(varname.compareTo( pPrefix + pKey + "PREFIX") == 0){
                  weHaveNoPrefix = 1;
              }      


              if(varname.compareTo( pPrefix + pKey + "NOCHAR") == 0){
                  weHaveNoChar = 1;
              }      
                
              if(varname.compareTo( pPrefix + pKey + "SEQUENCE") == 0){
                 sQuery = "update Tblregistry set varvalue = '" + varvalue + "' + 1 where varname = '" +  pPrefix + pKey + "SEQUENCE' and entity = '" + pEntity + "';";
                 execNonQuery(sQuery);  
                 
                 weHaveSeq = 1; // Wa have a match
                 
              }
          
          }
          
          // Added by Jammi Dee 06/02/2012
          // If we have no match, create an entry
          if( weHaveNoPrefix == 0 ){
              
                // Default number of characters = 6
                sQuery = "insert into Tblregistry(entity , appid, userid, varname, varvalue, regdate)" + 
                         " values ('" + pEntity + "','" + pAppId + "','" + "NA" + "','" + pPrefix + pKey + "PREFIX" + "','" + "" + "', NOW());";
              execNonQuery(sQuery);  
              
          }

          if( weHaveNoChar == 0 ){
              
                // Default number of characters = 6
                sQuery = "insert into Tblregistry(entity , appid, userid, varname, varvalue, regdate)" + 
                         " values ('" + pEntity + "','" + pAppId + "','" + "NA" + "','" + pPrefix + pKey + "NOCHAR" + "','" + "8" + "', NOW());";
              execNonQuery(sQuery);  
              
          }
          
          if( weHaveSeq == 0 ){
              
                // Default Counter starts at 1
                sQuery = "insert into Tblregistry(entity , appid, userid, varname, varvalue, regdate)" + 
                         " values ('" + pEntity + "','" + pAppId + "','" + "NA" + "','" + pPrefix + pKey + "SEQUENCE" + "','" + "1" + "', NOW());";
              execNonQuery(sQuery); 
              
          }
          
      } catch (Exception e) {
          dbServices.rollback();
          return false;
      }
      
      return true;
      
  }    
    
    
    
}