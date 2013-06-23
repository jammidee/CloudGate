package com.waveerp;

import com.wavemaker.runtime.RuntimeAccess;
import org.hibernate.Session;
import org.hibernate.SQLQuery;
import java.util.Calendar;
import java.sql.Timestamp;
import javax.servlet.http.HttpSession;

//import com.waveerp.execGenericNonQuery;
import com.dbwaveerp.Dbwaveerp;
import com.dbwaveerp.data.Tblrights;

import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

public class generateRights extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {    
    private Dbwaveerp dbServices = (Dbwaveerp) RuntimeAccess.getInstance().getService(Dbwaveerp.class);
    
    private execGenericNonQuery eQuery = new execGenericNonQuery();
    
    public generateRights() {
       super(INFO);
    }
    
    public boolean genRights(String pGenerate,String pEntityId){
        try{
           String sQuery;
           if(pGenerate.compareTo("TKSUSRMGT") == 0){
             //USER MODULE RIGHTS
             eQuery.execNonQuery("delete from tblRights where appid = 'TKSUSRMGT';");
                                 
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pGenerate + "','MGTUSERADMIN','Manage User');");               
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pGenerate + "','MGTUSERADD','Allows to Add User');");            
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pGenerate + "','MGTUSERDEL','Allows to Delete User');");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pGenerate + "','MGTUSEREDIT','Allows to Edit User');");                                      
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pGenerate + "','MGTUSERVIEWS','Allows to View');");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pGenerate + "','MGTUSERSTATUS','Allows to View Status');");
             
             //ROLE ASGN MODULE RIGHTS
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pGenerate + "','MGTASGNROLEADMIN','Allows to Asgn Role');");                       
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pGenerate + "','MGTASGNROLEADD','Allows to Assign Rights');");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pGenerate + "','MGTASGNROLEEDIT','Allows to Edit Assigned Rights');");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pGenerate + "','MGTASGNROLEDELETE','Allows to Delete Assigned Rights');");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pGenerate + "','MGTASGNROLEVIEW','Allows to View Assigned Rights');");                      
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pGenerate + "','MGTASGNROLESTATUS','Allows to View Status');");                      

             //ROLE MODULE RIGHTS
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pGenerate + "','MGTROLEADMIN','Allows to Manage Role');");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pGenerate + "','MGTROLEADD','Allows to Assign Rights');");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pGenerate + "','MGTROLEEDIT','Allows to Edit Assigned Rights');");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pGenerate + "','MGTROLEDELETE','Allows to Delete Assigned Rights');");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pGenerate + "','MGTROLEVIEW','Allows to View Assigned Rights');");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pGenerate + "','MGTROLESTATUS','Allows to View Status');");
             
             //RIGHTS MODULE RIGHTS
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pGenerate + "','MGTRIGHTSADMIN','Allows to Manage Rights');");      
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pGenerate + "','MGTRIGHTSADD','Allows to Assign Rights');");  
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pGenerate + "','MGTRIGHTSEDIT','Allows to Edit Assigned Rights');");  
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pGenerate + "','MGTRIGHTSDELETE','Allows to Delete Assigned Rights');");  
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pGenerate + "','MGTRIGHTSVIEW','Allows to View Assigned Rights');");  
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pGenerate + "','MGTRIGHTSSTATUS','Allows to View Status');");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pGenerate + "','MGTRIGHTSGENERATE','Allows to View Status');");
             //GENERATES RIGHTS
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pGenerate + "','GENERATESUSERMGTRIGHTS','Generate User Management Rights');");      
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pGenerate + "','GENERATESTKSTKS','Generate Ticket Rights');");  
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pGenerate + "','GENERATESLOOKUP','Generate Lookup Rights');");
             //RIGHTS ASSIGN MODULE RIGHTS          
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pGenerate + "','MGTASGNRIGHTSADMIN','Manage Assign Rights');");  
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pGenerate + "','MGTASGNRIGHTSADD','Allows to Assign Rights');");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pGenerate + "','MGTASGNRIGHTSEDIT','Allows to Edit Assigned Rights');");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pGenerate + "','MGTASGNRIGHTSDELETE','Allows to Delete Assigned Rights');");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pGenerate + "','MGTASGNRIGHTSVIEW','Allows to View Assigned Rights');");                     
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pGenerate + "','MGTASGNRIGHTSSTATUS','Allows to View Status');");                     
                    
             //OTHER RIGHTS
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pGenerate + "','SADMIN','User Management Super Admin');");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pGenerate + "','ADMIN','User Management Admin');");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pGenerate + "','OPENAPP','Rights for User Management');");                     
              
           } else if(pGenerate.compareTo("TKSTICKET") == 0){
             eQuery.execNonQuery("delete from tblRights where appid = 'TKSTICKET';");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSTICKET','OPENAPP','Rights for Ticket Management');");
                                 
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSTICKET','OPENAPP','Rights for Ticket Management');");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSTICKET','TKSADMIN','Manage Lookup');");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSTICKET','TKSADD','Allows to Add');");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSTICKET','TKSEDIT','Allows to Edit');");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSTICKET','TKSSAVE','Allows to Save');");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSTICKET','TKSVIEW','Allows to View');");       
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSTICKET','TKSALLOWASGNTO','Allows to Assign To');");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSTICKET','TKSSTATUSCHANGE','Allows to View');"); 
           
           } else if(pGenerate.compareTo("TKSLOOKUP") == 0){
            eQuery.execNonQuery("delete from tblRights where appid = 'TKSLOOKUP';");
            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','OPENAPP','Rights for Lookup Management');");
             
            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','TYPEREQADMIN','Allows to Manage LookUps');");
            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','TYPEREQVIEW','Allows to View');");
            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','TYPEREQADD','Allows to Add');");
            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','TYPEREQEDIT','Allows to Edit');");
            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','TYPEREQDELETE','Allows to Delete');");
            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','TYPEREQSAVE','Allows to Save');");


            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','SOLNADMIN','Allows to Manage LookUps');");
            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','SOLNVIEW','Allows to View');");
            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','SOLNADD','Allows to Add');");
            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','SOLNEDIT','Allows to Edit');");
            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','SOLNDELETE','Allows to Delete');");
            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','SOLNSAVE','Allows to Save');");


            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','COMPADMIN','Allows to Manage LookUps');");
            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','COMPVIEW','Allows to View');");
            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','COMPADD','Allows to Add');");
            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','COMPEDIT','Allows to Edit');");
            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','COMPDELETE','Allows to Delete');");
            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','COMPSAVE','Allows to Save');");


            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','ENTITYADMIN','Allows to Manage LookUps');");
            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','ENTITYVIEW','Allows to View');");
            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','ENTITYADD','Allows to Add');");
            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','ENTITYEDIT','Allows to Edit');");
            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','ENTITYDELETE','Allows to Delete');");
            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','ENTITYSAVE','Allows to Save');");


            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','SEVERITYADMIN','Allows to Manage LookUps');");
            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','SEVERITYVIEW','Allows to View');");
            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','SEVERITYADD','Allows to Add');");
            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','SEVERITYEDIT','Allows to Edit');");
            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','SEVERITYDELETE','Allows to Delete');");
            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','SEVERITYSAVE','Allows to Save');");


            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','STATUSADMIN','Allows to Manage LookUps');");
            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','STATUSVIEW','Allows to View');");
            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','STATUSADD','Allows to Add');");
            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','STATUSEDIT','Allows to Edit');");
            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','STATUSDELETE','Allows to Delete');");
            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','STATUSSAVE','Allows to Save');");


            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','CHARGECODEADMIN','Allows to Manage LookUps');");
            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','CHARGECODEVIEW','Allows to View');");
            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','CHARGECODEADD','Allows to Add');");
            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','CHARGECODEEDIT','Allows to Edit');");
            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','CHARGECODEDELETE','Allows to Delete');");
            eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','TKSLOOKUP','CHARGECODESAVE','Allows to Save');");
            
             
           }
                
        }catch (Exception e){
          dbServices.rollback();
          return false;
        }
        return true;
    }

}
