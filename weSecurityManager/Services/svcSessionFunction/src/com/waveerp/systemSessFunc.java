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
 * Date: 11/13/2012
 * Modified by: Jammi Dee 11/13/2012 05:10pm
 * 
*/

package com.waveerp;

import com.wavemaker.runtime.RuntimeAccess;
import org.hibernate.Session;
import org.hibernate.SQLQuery;

// List management libraries
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList; 

//Added by Jammi Dee 11/22/2012
import java.net.InetAddress;
import java.net.UnknownHostException;


//Required for database
import com.dbwaveerp.Dbwaveerp;
import com.dbwaveerp.data.*; 

// Needed for reading Wave ERP registry
import com.waveerp.registrySystem;

import java.sql.Timestamp;
import java.util.Date;

import java.util.UUID;

public class systemSessFunc extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {

    private Dbwaveerp dbServices = (Dbwaveerp) RuntimeAccess.getInstance().getService(Dbwaveerp.class); 

    public systemSessFunc() {
       super(INFO);
    }
    
    // Added by Jammi Dee 11/06/2012
    public String createNewSession( String pEntityId, String pAppId, String pUserId, String pUserName){
        
        // Call the encryption management system
        desEncryption  de = new desEncryption();
        de.Encrypter("","");                  
        
        // Try to get the INET information of the
        // server here
        InetAddress iServerIp;
        String strServerIp = "";
        String strServerName = "";
        
        try {
 
    		iServerIp       = InetAddress.getLocalHost();
            strServerIp     = iServerIp.getHostAddress();
            strServerName   = iServerIp.getHostName();
            
			//System.out.println("Current IP address : " + ip.getHostAddress());
 
		} catch (UnknownHostException e) {
 
			e.printStackTrace();
 
		}

        // Call the registry management system                    
        registrySystem rgs          = new registrySystem();          
        String strTimeToLive        = rgs.readRegistryDefault(pEntityId, "NA", "NA", "TIMETOLIVE", "300000");
        int intTimeToLive           = Integer.parseInt(strTimeToLive);        
        
        //String strSessionSwitch     = rgs.readRegistryDefault(pEntityId, "NA", "NA", "SESSIONSWITCH", "ON");

        //Get the number of concurrent users here
        String strConUsers      = rgs.readRegistryDefault("NA", "NA", "NA", "CONCURRENTUSERS", "1KfiXRM0OT4QBENjKVTyJo3yRnLjki3s");
        if( strConUsers.equals("") ){
            
            strConUsers = "1KfiXRM0OT4QBENjKVTyJo3yRnLjki3s";
            
        }
        if( strConUsers == null ){
            
            strConUsers = "1KfiXRM0OT4QBENjKVTyJo3yRnLjki3s";
            
        }            
        
        String strDecrypt       = "";
        strDecrypt              = de.decrypt( strConUsers ); 
        String[] para           = strDecrypt.split("\\|");  
        String strConUserLicTo  = para[0];
        String strConUser       = para[1]; //para[0] = license to, para[1] = number of concurrent
        
        //Get the license to infomation
        String strLicTo         = rgs.readRegistryDefault("NA", "NA", "NA", "LICENSETO", "---");
        int intNoUsers = 10;
        
        if(strLicTo.equals( strConUserLicTo ) ) {
            
            intNoUsers              = Integer.parseInt(strConUser);
            
        } else {
            
            intNoUsers          = 10;
            
        }
        
        //Clean session of expired content
        deleteExpiredSession( pEntityId  );

        
        //Check if we exceed the max users
        int iSessions = countSession( pEntityId  );
        if( iSessions >= intNoUsers  ){
            
            return "MAXUSERS";
            
        }
        
        UUID guid = UUID.randomUUID();
        
        java.util.Date date= new java.util.Date();
        Timestamp ts = new Timestamp(date.getTime());
        
        Tblsessions addEntry = new Tblsessions();
        
        dbServices.begin();
            
            //============================
            // Required fields
            //============================
            addEntry.setJuid( guid.toString() );
            addEntry.setEntityid(pEntityId);
            addEntry.setAppid(pAppId); 
            addEntry.setUserid(pUserId); 
            addEntry.setServerid(strServerIp); 
            addEntry.setUsername(pUserName); 
            
            //==============================
            // Payload area of the document
            addEntry.setTimecreate(ts);
            addEntry.setTimemodify(ts);
            addEntry.setTimetolive(intTimeToLive);
            addEntry.setTimeleft(intTimeToLive);
            addEntry.setSstatus("ACTIVE");
        
        try{
            
            dbServices.insert(addEntry);
            dbServices.commit();
            
        } catch (Exception e) {
            
            return e.getMessage();
            
        }        
        
        return guid.toString();                              
                                    
    }                                
    
    // Added by Jammi Dee 11/14/2012
    public String updateSession( String pJuid ){
        
        String strResult = "OK";
        
        //Execute the SQL script using this object
        execGenericNonQuery enq = new execGenericNonQuery();
        //For the SQL Escape
        systemTextUtils stu = new systemTextUtils();          
        
        List<Tblsessions> myList        = null;
        Iterator<Tblsessions> iterator  = null;     
        Tblsessions sess                = null;             
        
        //Get the current time of the system
        java.util.Date dnow = new java.util.Date();
        Timestamp now           = new Timestamp(dnow.getTime());    
        Timestamp lastTime      = new Timestamp(dnow.getTime());
        long duration           = 0;
        long tdiff              = 0;
        
        try {       
                
                dbServices.begin();

                    Session session = dbServices.getDataServiceManager().getSession();
                    String sQuery = "select * from Tblsessions where juid = '" + pJuid + "' ;";   
        
                    SQLQuery query = session.createSQLQuery(sQuery);
                    query.addEntity(Tblsessions.class);
            
                    myList = query.list();
         
                dbServices.commit(); 
       
                iterator = myList.iterator();
        
                /**
                * At this point, only one record should be retrieved
                */
                while (iterator.hasNext()) {
                
                    sess = (Tblsessions) iterator.next();
                
                }

        } catch (Exception e) {
            
            dbServices.rollback();
            strResult = "FAIL";
            
        }
        
        // Get all possible values from the selection
        if( sess != null ){
       
            lastTime  = (Timestamp) sess.getTimemodify();
            duration  = (int) sess.getTimetolive();
            
            tdiff = now.getTime() - lastTime.getTime();
            
            strResult = tdiff + "";
            
            //Check if this session is expired already
            if(tdiff <= duration){
        
                // Update the object
                if( sess != null ){
       
                    sess.setTimemodify( now );
                    sess.setTimeleft( (int) duration );
            
                }          
        
                //Update the session here
                try{

                    //dbServices.begin();
                    //    dbServices.update(sess);
                    //dbServices.commit();
                    
                    String sQL = "";
                    sQL = sQL + "update Tblsessions set ";
                    sQL = sQL + "timemodify = " +            stu.mySQLEscape(now.toString())            + ", ";
                    sQL = sQL + "timeleft = " +              stu.mySQLEscape(strResult)                 + " ";

                    sQL = sQL + "where juid = '" +            stu.mySQLEscape(pJuid)                    + "' ;";
                
                    enq.execNonQuery( sQL );                      
                    
                    
                    strResult = "OK";
      
                } catch (Exception e) {
            
                    return "FAIL"; //e.getMessage();
            
                }             
        
            }else { 
            
                //Expired session because it
                //exceeds its duration or time to live.
                deleteSession(pJuid);
                
                strResult = "EXPIRE";
            
            }//if(tdiff <= duration)
                 
        } else {
            
            //Cannot find the session, then assumed
            //that it had expired already.
            strResult = "EXPIRE";

        }//if( sess != null )               
        
       
        
        return strResult;
        
    }       
    
    // Added by Jammi Dee 11/14/2012
    public int countSession( String pEntityId  ){
        
        String strResult    = "OK";
        int    iCount       = 0;
        
        List<Tblsessions> myList        = null;
        Iterator<Tblsessions> iterator  = null;     
        Tblsessions sess                = null;             
        
        
        try {       
                
                dbServices.begin();

                    Session session = dbServices.getDataServiceManager().getSession();
                    String sQuery = "select * from Tblsessions where entityid = '" + pEntityId + "' ;";   
        
                    SQLQuery query = session.createSQLQuery(sQuery);
                    query.addEntity(Tblsessions.class);
            
                    myList = query.list();
         
                dbServices.commit(); 
       
                iterator = myList.iterator();
        
                while (iterator.hasNext()) {
                
                    sess = (Tblsessions) iterator.next();
                    iCount++; 
                
                }

        } catch (Exception e) {
            
            dbServices.rollback();
            return 0;
            
        }              
        
        return iCount;
        
    }       
    
    
    // Added by Jammi Dee 11/14/2012
    public String deleteExpiredSession( String pEntityId  ){
        
        String strResult = "OK";
        
        List<Tblsessions> myList        = null;
        Iterator<Tblsessions> iterator  = null;     
        Tblsessions sess                = null;             
        
        //Get the current time of the system
        java.util.Date dnow = new java.util.Date();
        Timestamp now           = new Timestamp(dnow.getTime());    
        Timestamp lastTime      = new Timestamp(dnow.getTime());
        long duration           = 0;
        long tdiff              = 0;
        
        try {       
                
                dbServices.begin();

                    Session session = dbServices.getDataServiceManager().getSession();
                    String sQuery = "select * from Tblsessions where entityid = '" + pEntityId + "' ;";   
        
                    SQLQuery query = session.createSQLQuery(sQuery);
                    query.addEntity(Tblsessions.class);
            
                    myList = query.list();
         
                dbServices.commit(); 
       
                iterator = myList.iterator();
        
                /**
                * At this point, only one record should be retrieved
                */
                while (iterator.hasNext()) {
                
                    sess = (Tblsessions) iterator.next();
                    
                    String strJuid = (String) sess.getJuid();
                    
                    lastTime  = (Timestamp) sess.getTimemodify();
                    duration  = (int) sess.getTimetolive();  
                    
                    tdiff = now.getTime() - lastTime.getTime();
                    
                    //Expired Sessions
                    if(tdiff > duration){
                        
                        deleteSession(strJuid);
                        
                    } else {
                        
                        //Just update the time left
                        timeleftSession(strJuid, duration - tdiff);
                        
                    }    
                    
                
                }

        } catch (Exception e) {
            
            dbServices.rollback();
            return "FAIL";
            
        }              
        
        return strResult;
        
    }       
    
    
    // Added by Jammi Dee 11/14/2012
    public boolean deleteSession( String pJuid ){
        
        String eQuery = "delete from tblsessions where juid ='" + pJuid + "' ";
        
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
      
    // Added by Jammi Dee 11/14/2012
    public boolean timeleftSession( String pJuid, long timeLeft ){
        
        String strTimeLeft = Long.toString(timeLeft);
        
        String eQuery = "update tblsessions set timeleft = " + strTimeLeft + " where juid ='" + pJuid + "' ";
        
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
   
   
   

}
