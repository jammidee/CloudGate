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
 * 04/24/2012
  
  This services is use to generate all the possible rights of the application after
  it has successfully been allowed to join the Wave ERP.
  
  Based on the sample codes of Francis Limbo

 */
 
/**
 * Created by Francis Limbo
 * Modified by Jammi Dee
 * 05/11/2012
 * 
 * This service is used in executing rights generation statements directly into the database
 * 
*/ 
 
import com.wavemaker.runtime.RuntimeAccess;
import org.hibernate.Session;
import org.hibernate.SQLQuery;
import java.util.Calendar;
import java.sql.Timestamp;
import javax.servlet.http.HttpSession;

import com.dbwaveerp.Dbwaveerp;
import com.dbwaveerp.data.Tblrights;

import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

public class generateAppRights extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {

    private Dbwaveerp dbServices = (Dbwaveerp) RuntimeAccess.getInstance().getService(Dbwaveerp.class);
    
    private execGenericNonQuery eQuery = new execGenericNonQuery();


    public generateAppRights() {
       super(INFO);
    }

    // Generate all the possoble rights of this application in the target
    // database. Delete first if it exist.
    public boolean generateApplicationRights(String pAppId, String pPrefix, String pEntityId){
        try{
           String sQuery;

             // Delete the existing rights
             eQuery.execNonQuery("delete from tblRights where appid = '" + pAppId + "';");    
             
             // Generate here all the possible rights of the application.
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "OPENAPP','General right to access this application.');");   
             
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "CONFIGSYS','Allows configuration of the system.');");               
             
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "USERADMIN','Manage User.');");               
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "USERADD','Allows to Add User.');");               
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "USERDEL','Allows to Delete User.');");               
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "USEREDIT','Allows to Edit User.');");               
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "USERVIEWS','Allows to View.');");               
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "USERSTATUS','Allows to View Status.');");               

             //ROLE ASGN MODULE RIGHTS
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "ASGNROLEADMIN','Allows to Asgn Role.');");               
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "ASGNROLEADD','Allows to Assign Rights.');");               
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "ASGNROLEEDIT','Allows to Edit Assigned Rights.');");               
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "ASGNROLEDELETE','Allows to Delete Assigned Rights.');");               
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "ASGNROLEVIEW','Allows to View Assigned Rights.');");               
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "ASGNROLESTATUS','Allows to View Status.');");               

             //ROLE MODULE RIGHTS
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "ROLEADMIN','Allows to Manage Role.');");               
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "ROLEADD','Allows to Assign Rights.');");               
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "ROLEEDIT','Allows to Edit Assigned Rights.');");               
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "ROLEDELETE','Allows to Delete Assigned Rights.');");               
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "ROLEVIEW','Allows to View Assigned Rights.');");               
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "ROLESTATUS','Allows to View Status.');");               

             //RIGHTS MODULE RIGHTS
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "RIGHTSADMIN','Allows to Manage Rights.');");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "RIGHTSADD','Allows to Assign Rights.');");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "RIGHTSEDIT','Allows to Edit Assigned Rights.');");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "RIGHTSDELETE','Allows to Delete Assigned Rights.');");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "RIGHTSVIEW','Allows to View Assigned Rights.');");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "RIGHTSSTATUS','Allows to View Status.');");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "RIGHTSGENERATE','Allows to View Status.');");
             
             //GENERATES RIGHTS
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "GENERATESUSERMGTRIGHTS','Generate User Management Rights.');");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "GENERATESTKSTKS','Generate Ticket Rights.');");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "GENERATESLOOKUP','Generate Lookup Rights.');");
             
             //RIGHTS ASSIGN MODULE RIGHTS          
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "ASGNRIGHTSADMIN','Manage Assign Rights.');");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "ASGNRIGHTSADD','Allows to Assign Rights.');");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "ASGNRIGHTSEDIT','Allows to Edit Assigned Rights.');");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "ASGNRIGHTSDELETE','Allows to Delete Assigned Rights.');");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "ASGNRIGHTSVIEW','Allows to View Assigned Rights.');");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "ASGNRIGHTSSTATUS','Allows to View Status.');");
             
             //OTHER RIGHTS
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "SADMIN','User Management Super Admin.');");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "ADMIN','User Management Admin.');");
             eQuery.execNonQuery("insert into tblRights(entityid,appid,rightid,description)values ('" + pEntityId + "','" + pAppId + "', '" + pPrefix + "OPENAPP','Rights for User Management.');");
             
             
             // Initial data, assign all possible access to the default admin SADMIN
             eQuery.execNonQuery("delete from tblRightAsgn where appid = '" + pAppId + "' and entityid = '" + pEntityId + "' ;");  
             eQuery.execNonQuery("insert into tblRightAsgn(entityid,roleid,rightid,description,appid) values ('" + pEntityId + "','SADMIN', '" + pPrefix + "OPENAPP','General right to access this application.', '" + pAppId + "' );");   
             eQuery.execNonQuery("insert into tblRightAsgn(entityid,roleid,rightid,description,appid) values ('" + pEntityId + "','SADMIN', '" + pPrefix + "CONFIGSYS','Allows configuration of the system.', '" + pAppId + "' );");               
             
             
        }catch (Exception e){
          dbServices.rollback();
          return false;
        }
        return true;
    }

    public boolean registerApplicationToERP( String pAppId ,String pEntityId, String pDesc ){
        try{
           String sQuery;

             // Delete the existing rights
             eQuery.execNonQuery("delete from tblAppList where appid = '" + pAppId + "';");    
             
             // Generate here all the possible rights of the application.
             eQuery.execNonQuery("insert into tblAppList(entityid, appid, appdesc, startdate, enddate, status ) values ('" + pEntityId + "','" + pAppId + "','" + pDesc + "', curdate(), DATE_ADD( curdate() , INTERVAL 365 DAY), 'ACTIVE' );");               
             
        }catch (Exception e){
          dbServices.rollback();
          return false;
        }
        return true;
    }



}
