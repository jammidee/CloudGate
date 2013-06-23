package com.waveerp;
import com.wavemaker.runtime.RuntimeAccess;
import org.hibernate.Session;
import org.hibernate.SQLQuery;
import java.util.Calendar;
import java.sql.Timestamp;
import javax.servlet.http.HttpSession;

//Required for database
import com.dbwaveerp.Dbwaveerp;
import com.dbwaveerp.data.*;
//Required for Date data type

import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

public class ExecQueryTksUsrMgt extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {
    private Dbwaveerp dbServices = (Dbwaveerp) RuntimeAccess.getInstance().getService(Dbwaveerp.class);
    public ExecQueryTksUsrMgt() {
       super(INFO);
    }
    public String checkRoleExist(String pEntityId, String pRoleId) {
        List <Tblrole> myList = null;
        String bResult = null;
        try {
            dbServices.begin();
            
            Session session = dbServices.getDataServiceManager().getSession();
            String sQuery = "select * from Tblrole where entityid = '" + pEntityId + "' and roleid = '" + pRoleId + "';";
                            
            SQLQuery query = session.createSQLQuery(sQuery);
            query.addEntity(Tblrole.class);
            myList = query.list();
            dbServices.commit();
            if (myList.size() > 0 && myList != null) {
                bResult = "exists";
            }else{
                bResult = "not exists";
            }
        } catch (Exception e) {
            dbServices.rollback();
            return bResult;
        }
        return bResult;
    }
    
    public String checkRoleAsgnExist(String pEntityId, String pRoleId,String pUserId) {
        List <Tblroleasgn> myList = null;
        String bResult = null;
        try {
            dbServices.begin();
            
            Session session = dbServices.getDataServiceManager().getSession();
            String sQuery = "select * from Tblroleasgn where entityid = '" + pEntityId + "' and roleid = '" + pRoleId + "' and userid = '" + pUserId + "';";
                            
            SQLQuery query = session.createSQLQuery(sQuery);
            query.addEntity(Tblroleasgn.class);
            myList = query.list();
            dbServices.commit();
            if (myList.size() > 0 && myList != null) {
                bResult = "exists";
            }else{
                bResult = "not exists";
            }
        } catch (Exception e) {
            dbServices.rollback();
            return bResult;
        }
        return bResult;
    }
    
    public String checkRightAsgnExist(String pEntityId, String pRoleId,String pRightId) {
        List <Tblrightasgn> myList = null;
        String bResult = null;
        try {
            dbServices.begin();
            
            Session session = dbServices.getDataServiceManager().getSession();
            String sQuery = "select * from Tblrightasgn where entityid = '" + pEntityId + "' and roleid = '" + pRoleId + "' and rightid = '" + pRightId + "';";
                            
            SQLQuery query = session.createSQLQuery(sQuery);
            query.addEntity(Tblrightasgn.class);
            myList = query.list();
            dbServices.commit();
            if (myList.size() > 0 && myList != null) {
                bResult = "exists";
            }else{
                bResult = "not exists";
            }
        } catch (Exception e) {
            dbServices.rollback();
            return bResult;
        }
        return bResult;
    }
    
    public String checkUserIdExist(String pEntityId, String pUserId) {
        List <Tbluser> myList = null;
        String bResult = null;
        try {
            dbServices.begin();
            
            Session session = dbServices.getDataServiceManager().getSession();
            String sQuery = "select * from Tbluser where entityid = '" + pEntityId + "' and userid = '" + pUserId + "';";
                            
            SQLQuery query = session.createSQLQuery(sQuery);
            query.addEntity(Tbluser.class);
            myList = query.list();
            dbServices.commit();
            if (myList.size() > 0 && myList != null) {
                bResult = "exists";
            }else{
                bResult = "not exists";
            }
        } catch (Exception e) {
            dbServices.rollback();
            return bResult;
        }
        return bResult;
    }
}
