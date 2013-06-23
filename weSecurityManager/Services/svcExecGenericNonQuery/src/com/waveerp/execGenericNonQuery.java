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

public class execGenericNonQuery extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {
    private Dbwaveerp dbServices = (Dbwaveerp) RuntimeAccess.getInstance().getService(Dbwaveerp.class);
    public execGenericNonQuery() {
       super(INFO);
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
    
    public boolean execNonQueryLong(String sQuery) {
        String eQuery = null;
        try {
            
            eQuery = sQuery;
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
