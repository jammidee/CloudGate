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

public class securitySystem extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {
private Dbwaveerp dbServices = (Dbwaveerp) RuntimeAccess.getInstance().getService(Dbwaveerp.class);
    public securitySystem() {
       super(INFO);
    }
    
    public List<Tblroleasgn> getUserRoles(String pUserId, String pEntityId){
        List<Tblroleasgn> myList = null;
        Iterator<Tblroleasgn> iterator = null;
        List<Tblroleasgn>  result = null;
        
    try{
         dbServices.begin();
        
          Session session = dbServices.getDataServiceManager().getSession();
          String sQuery = "select * from Tblroleasgn where sstatus = 'ACTIVE' and userid = '" + pUserId + "' and entityid = '" + pEntityId + "';";   
        
          SQLQuery query = session.createSQLQuery(sQuery);
          query.addEntity(Tblroleasgn.class);
          myList = query.list();
         
         dbServices.commit(); 
         iterator = myList.iterator();
         if (iterator.hasNext()) {
           result = myList;
         }
    }catch (Exception e){
      dbServices.rollback();
    } 
    return result; 
   }
   
   public List<Tblrightasgn> loadUserRight(String pRoleId){
        List<Tblrightasgn> myList = null;
        Iterator<Tblrightasgn> iterator = null;
        String[] result = null;
        int i = 0;
        
    try{
         dbServices.begin();
        
          Session session = dbServices.getDataServiceManager().getSession();
          String sQuery = "select * from Tblrightasgn where sstatus = 'ACTIVE'"+
                          "and roleid in ( " + pRoleId + " );";   
        
          SQLQuery query = session.createSQLQuery(sQuery);
          query.addEntity(Tblrightasgn.class);
          myList = query.list();
         
         dbServices.commit(); 

    }catch (Exception e){
      dbServices.rollback();
     // return "FAIL";
    }          
    return myList;
  }

}
