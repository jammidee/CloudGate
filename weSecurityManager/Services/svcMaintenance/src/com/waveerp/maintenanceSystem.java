package com.waveerp;
import com.wavemaker.runtime.RuntimeAccess;
import org.hibernate.Session;
import org.hibernate.SQLQuery;
import java.util.Calendar;
import java.sql.Timestamp;
import java.util.Date;
import javax.servlet.http.HttpSession;

//Required for database
import com.dbwaveerp.Dbwaveerp;
import com.dbwaveerp.data.Tbluser;
import com.dbwaveerp.data.Tblregistry;
import com.dbwaveerp.data.Tblentity;
//Required for Date data type

import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;


public class maintenanceSystem extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {
    private Dbwaveerp dbServices = (Dbwaveerp) RuntimeAccess.getInstance().getService(Dbwaveerp.class);
    public maintenanceSystem() {
       super(INFO);
    }
 
    public List<Tblentity> getValue(){
     List<Tblentity> myList = null;
    
     try{
         dbServices.begin();
        
          Session session = dbServices.getDataServiceManager().getSession();
          String sQuery = "select * from Tblentity where sstatus = 'ACTIVE';";   
        
          SQLQuery query = session.createSQLQuery(sQuery);
          query.addEntity(Tblentity.class);
          myList = query.list();
         
         dbServices.commit(); 
       
        
     }catch (Exception e){
      dbServices.rollback();
      return myList;
     }  
     return myList;
    }
    
    public boolean insertEntity(String pEntityId,String pCompany,String pDesc,String pAddr01,
                                String pAddr02,String pAddr03,Date pStartDate,Date pEndDate){
      try{ 
         String sQuery;
         sQuery = "insert into tblentity(entityid,company,description,addr01,addr02,addr03,startdate,enddate)"+
                  "values('" + pEntityId + "','" + pCompany + "','" + pDesc + "','" + pAddr01 + "',"+
                  "'" + pAddr02 + "','" + pAddr03 + "','" + pStartDate + "','" + pEndDate + "');";
         execNonQuery(sQuery);
       }catch(Exception e){ 
        return false;
       }
     return true; 
    }
    
    public boolean updateEntity(){
      try{ 
         String sQuery;
         sQuery = "update tblentity set <columns>=<values> where <columns>=<values>;";
         execNonQuery(sQuery);
       }catch(Exception e){ 
        return false;
       }
     return true; 
    }
    
    public boolean deleteEntity(){
      try{ 
         String sQuery;
         sQuery = "update tblentity set <columns>=<values> where <columns>=<values>;";
         execNonQuery(sQuery);
       }catch(Exception e){ 
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
