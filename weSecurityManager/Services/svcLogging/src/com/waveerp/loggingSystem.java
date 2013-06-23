/**
 * Modified by Jammi Dee 05/06/2012
 * 
*/

package com.waveerp;

import com.wavemaker.runtime.RuntimeAccess;
import org.hibernate.Session;
import org.hibernate.SQLQuery;
import java.util.Calendar;
import java.sql.Timestamp;
import javax.servlet.http.HttpSession;

//Added by Jammi Dee 11/25/2012
import java.net.InetAddress;
import java.net.UnknownHostException;

//Required for database
import com.dbwaveerp.Dbwaveerp;
import com.dbwaveerp.data.Tbllogging;
import com.dbwaveerp.data.Tbllog;
//Required for Date data type

import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

import java.util.UUID;

public class loggingSystem extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {
   private Dbwaveerp dbServices = (Dbwaveerp) RuntimeAccess.getInstance().getService(Dbwaveerp.class);
   
   public loggingSystem() {
       super(INFO);
   }
   
   // Added Entity 05/06/2012 - Jammi Dee
   public boolean writeAppLog(String pUserId, String pMsg, String pModuleId, String pAppId, 
                              String pProcess, String pScopeId, String pStype, String pEntity){
                                  
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
           

     try{
       
       String sQuery;
       int logLevel;
       
       if(pStype.compareTo("SYSTEM") == 0){
          logLevel = 1;
       }else{
          logLevel = 2;    
       }

       UUID guid = UUID.randomUUID();
       String suid = guid.toString();
       
       sQuery = "insert into tbllog(juid,logdatetime,userid,msg,moduleid,appid,serverid,proccess,scopeid,stype, entity)"+
                "values('" + suid + "', NOW(), '" + pUserId + "', '" + pMsg + "', '" + pModuleId + "', '" + pAppId + "', '" + strServerIp + "', '" + pProcess + "', '" + pScopeId + "', " + logLevel + ", '" + pEntity + "');";
                
       execNonQuery(sQuery);
       
     }catch(Exception e){
        dbServices.rollback(); 
        return false;
     }
     return true;
   }
   
   
   public boolean execNonQuery(String eQuery){
     try{
          dbServices.begin();
           
           Session session = dbServices.getDataServiceManager().getSession();
           SQLQuery query = session.createSQLQuery(eQuery);  
           query.executeUpdate();   
         
          dbServices.commit(); 
     
      }catch(Exception e){ 
       dbServices.rollback();
       return false;
      }
     return true; 
   }
}
