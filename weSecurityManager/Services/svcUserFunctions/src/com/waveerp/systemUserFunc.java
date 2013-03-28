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
 * Date: 10/12/2012
 * Modified by: Jammi Dee 10/12/2012 04:43pm
 * 
*/

package com.waveerp;

import com.wavemaker.runtime.RuntimeAccess;

import com.wavemaker.runtime.service.annotations.ExposeToClient;
import com.wavemaker.runtime.service.annotations.HideFromClient;
import com.wavemaker.runtime.service.response.LiveDataServiceResponse;
import com.wavemaker.runtime.service.PagingOptions;
import com.wavemaker.runtime.service.PropertyOptions;
import com.wavemaker.runtime.service.TypedServiceReturn;
import com.wavemaker.runtime.service.RuntimeService;

//Required for database
import com.dbwaveerp.Dbwaveerp;
import com.dbwaveerp.data.*; 
import com.dbwaveerp.data.Tblperson;

// List management libraries
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList; 

// Hibernate management libraries
import org.hibernate.Session;
import org.hibernate.SQLQuery;

//import java.sql.Date;
import java.util.Date;
import java.util.UUID;


public class systemUserFunc extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {

   private RuntimeService runtimeSvc;

    //private Dbwaveerp dbServices = (Dbwaveerp) RuntimeAccess.getInstance().getService(Dbwaveerp.class);
    private Dbwaveerp dbServices = (Dbwaveerp) RuntimeAccess.getInstance().getServiceBean("dbwaveerp");

    public systemUserFunc() {
       super(INFO);
       //dbServices = (Dbwaveerp) RuntimeAccess.getInstance().getServiceBean("dbwaveerp");
    }

    // Added by Jammi Dee 10/12/2012
    // No longer used
    public String copyRoleRights( String pSrcRole, String pDstRole, String pEntityId ){
        
        String strJuid = "FAIL";
        
        List<Tblrightasgn> myList       = null;
        Iterator<Tblrightasgn> iterator = null;        
        
        try{
            dbServices.begin();
        
            Session session = dbServices.getDataServiceManager().getSession();
            String sQuery = "select * from Tblrightasgn where entityid = '" + pEntityId + "' and roleid = '" + pSrcRole + "' ;";   
        
            SQLQuery query = session.createSQLQuery(sQuery);
            query.addEntity(Tblrightasgn.class);
            
            myList = query.list();
         
            dbServices.commit(); 
       
            iterator = myList.iterator();
        
            String strEntityId  = "";
            String strRightId   = "";
            String strRoleId    = "";
            String strAppId     = "";
            String strStatus    = "";
            String strDesc      = "";
        
            while (iterator.hasNext()) {
                
                Tblrightasgn rightsAsgn = (Tblrightasgn) iterator.next();
                
                strJuid         = (String) rightsAsgn.getJuid();
                strEntityId     = (String) rightsAsgn.getEntityid();
                strRightId      = (String) rightsAsgn.getRightid();
                strRoleId       = (String) rightsAsgn.getRoleid();
                strAppId        = (String) rightsAsgn.getAppid();
                strStatus       = (String) rightsAsgn.getSstatus();
                strDesc         = (String) rightsAsgn.getDescription();
                
                //Create a new right
                Tblrightasgn addEntry = new Tblrightasgn();
                
                Date date = new Date();
                UUID guid = UUID.randomUUID();        
                
                addEntry.setJuid( guid.toString() );
                addEntry.setEntityid(pEntityId);
                addEntry.setRightid(strRightId);   
                addEntry.setRoleid(pDstRole); 
                addEntry.setAppid(strAppId); 
                addEntry.setSstatus(strStatus); 
                addEntry.setDescription(strDesc);
                
                dbServices.insert(addEntry);
                dbServices.commit();                
                
            }
            
        }catch (Exception e){
            
            dbServices.rollback();
            return "FAIL";
            
        }         
        
        return "OK";
        
    }

    // Added by Jammi Dee 10/12/2012
    // No longer used
    public String deleteRoleRights( String pSrcRole, String pEntityId ){
        
        List<Tblrightasgn> myList       = null;
        Iterator<Tblrightasgn> iterator = null;        
        
        try{
            dbServices.begin();
        
            Session session = dbServices.getDataServiceManager().getSession();
            String sQuery = "delete from Tblrightasgn where entityid = '" + pEntityId + "' and roleid = '" + pSrcRole + "' ;";   
        
            SQLQuery query = session.createSQLQuery(sQuery);
            query.executeUpdate();
         
            dbServices.commit(); 
            
        }catch (Exception e){
            
            dbServices.rollback();
            return "FAIL";
            
        }         
        
        return "OK";
        
    }

    public String createParty( 
                                    String pEntityId, 
                                    String pPartyId, 
                                    String pTitle, 
                                    String pFirstName,
                                    String pMiddleName,
                                    String pLastName,
                                    String pSuffix,
                                    String pAddr01,
                                    String pAddr02,
                                    String pCity,
                                    String pEmpState,
                                    String pZipCode,
                                    String pCountry,
                                    String pEmail,
                                    String pCountryCodeHome,
                                    String pAreaCodeHome,
                                    String pPhoneHome,
                                    String pExtensionHome,
                                    String pCountryCodeWork,
                                    String pAreaCodeWork,
                                    String pPhoneWork,
                                    String pExtensionWork,      
                                    String pCountryCodeMobile,
                                    String pAreaCodeMobile,
                                    String pPhoneMobile,
                                    String pExtensionMobile,      
                                    String pCountryCodeFax,
                                    String pAreaCodeFax,
                                    String pPhoneFax,
                                    String pExtensionFax,   
                                    String pRoleType,
                                    String pUserJuid,
                                    String pStatus,
                                    String pPid
                             ){
                                 
        String strJuid = "";                         
                        
        //Added by Jammi Dee 10/22/2012                
        //Check for all the nulls here, fill them up.                
        if( pMiddleName == null ){
            pMiddleName = "";
        }                         
        if( pSuffix == null ){
            pSuffix = "";
        }          
        if( pAddr01 == null ){
            pAddr01 = "";
        }          
        if( pAddr02 == null ){
            pAddr02 = "";
        }           
        if( pCity == null ){
            pCity = "";
        }         
        if( pEmpState == null ){
            pEmpState = "";
        }           
        if( pZipCode == null ){
            pZipCode = "";
        }         
        if( pCountry == null ){
            pCountry = "";
        }        
        if( pEmail == null ){
            pEmail = "";
        }          

        if( pCountryCodeHome == null ){
            pCountryCodeHome = "63";
        }  
        if( pAreaCodeHome == null ){
            pAreaCodeHome = "2";
        }  
        if( pPhoneHome == null ){
            pPhoneHome = "000-0000";
        }          
        if( pExtensionHome == null ){
            pExtensionHome = "0000";
        }  

        if( pCountryCodeWork == null ){
            pCountryCodeWork = "63";
        }  
        if( pAreaCodeWork == null ){
            pAreaCodeWork = "2";
        }  
        if( pPhoneWork == null ){
            pPhoneWork = "000-0000";
        }          
        if( pExtensionWork == null ){
            pExtensionWork = "0000";
        }  
        
        if( pCountryCodeMobile == null ){
            pCountryCodeMobile = "63";
        }  
        if( pAreaCodeMobile == null ){
            pAreaCodeMobile = "2";
        }  
        if( pPhoneMobile == null ){
            pPhoneMobile = "000-0000";
        }          
        if( pExtensionMobile == null ){
            pExtensionMobile = "0000";
        }          
        
        if( pCountryCodeFax == null ){
            pCountryCodeFax = "63";
        }  
        if( pAreaCodeFax == null ){
            pAreaCodeFax = "2";
        }  
        if( pPhoneFax == null ){
            pPhoneFax = "000-0000";
        }          
        if( pExtensionFax == null ){
            pExtensionFax = "0000";
        }   
 
        
        try{
            
            dbServices.begin();

            //Prepare data for insertion
            Tblperson addEntry = new Tblperson();
            UUID guid = UUID.randomUUID();
            strJuid   = guid.toString();

            addEntry.setJuid( guid.toString() );  
            addEntry.setEntityid( pEntityId );
            addEntry.setPartyid( pPartyId );
            addEntry.setTitle( pTitle );
            addEntry.setFirstname( pFirstName );
            addEntry.setMiddlename( pMiddleName );
            addEntry.setLastname( pLastName );
            addEntry.setSuffix( pSuffix );
            addEntry.setAddr01( pAddr01 );
            addEntry.setAddr02( pAddr02 );
            addEntry.setCity( pCity );
            addEntry.setEmpstate( pEmpState );
            addEntry.setZipcode( pZipCode );
            addEntry.setCountry( pCountry );
            addEntry.setEmail( pEmail );
            
            addEntry.setCountrycodehome( pCountryCodeHome );
            addEntry.setAreacodehome( pAreaCodeHome );
            addEntry.setPhonehome( pPhoneHome );
            addEntry.setExtensionhome( pExtensionHome );
            
            addEntry.setCountrycodework( pCountryCodeWork );
            addEntry.setAreacodework( pAreaCodeWork );
            addEntry.setPhonework( pPhoneWork );
            addEntry.setExtensionwork( pExtensionWork );
            
            addEntry.setCountrycodefax( pCountryCodeFax );
            addEntry.setAreacodefax( pAreaCodeFax );
            addEntry.setPhonefax( pPhoneFax );
            addEntry.setExtensionfax( pExtensionFax );
            
            addEntry.setCountrycodemobile( pCountryCodeMobile );
            addEntry.setAreacodemobile( pAreaCodeMobile );
            addEntry.setPhonemobile( pPhoneMobile );
            addEntry.setExtensionmobile( pExtensionMobile );

            addEntry.setRoletype( pRoleType );
            addEntry.setUserjuid( pUserJuid );
            addEntry.setSstatus( pStatus );
            addEntry.setPid( pPid );
            addEntry.setDeleted( 0 );

            dbServices.insert(addEntry);
            dbServices.commit();     
            
        }catch (Exception e){
            
            dbServices.rollback();
            return "FAIL";
            
        }              
        
        return strJuid ;
        
    }    
    
    //Added by Jammi Dee 08/27/2012
    public String updateParty(      String pJuid,
                                    String pEntityId, 
                                    String pPartyId, 
                                    String pTitle, 
                                    String pFirstName,
                                    String pMiddleName,
                                    String pLastName,
                                    String pSuffix,
                                    String pAddr01,
                                    String pAddr02,
                                    String pCity,
                                    String pEmpState,
                                    String pZipCode,
                                    String pCountry,
                                    String pEmail,
                                    String pCountryCodeHome,
                                    String pAreaCodeHome,
                                    String pPhoneHome,
                                    String pExtensionHome,
                                    String pCountryCodeWork,
                                    String pAreaCodeWork,
                                    String pPhoneWork,
                                    String pExtensionWork,      
                                    String pCountryCodeMobile,
                                    String pAreaCodeMobile,
                                    String pPhoneMobile,
                                    String pExtensionMobile,      
                                    String pCountryCodeFax,
                                    String pAreaCodeFax,
                                    String pPhoneFax,
                                    String pExtensionFax,   
                                    String pRoleType,
                                    String pUserJuid,
                                    String pStatus,
                                    String pPid

                                ){
                                   
        String retVal = "OK"; 

        List<Tblperson> myList = null;
        Iterator<Tblperson> iterator = null;     
        Tblperson tblPerson = null;    
        
        try{
            dbServices.begin();
        
                Session session = dbServices.getDataServiceManager().getSession();
                String sQuery = "select * from Tblperson where juid = '" + pJuid + "'";   
        
                SQLQuery query = session.createSQLQuery(sQuery);
                query.addEntity(Tblperson.class);
                myList = query.list();
         
            dbServices.commit(); 
       
            iterator = myList.iterator();
        
            /**
             * At this point, only one record should be retrieved
            */
            while (iterator.hasNext()) {
                
                tblPerson        = (Tblperson) iterator.next();
                
            }
            
        }catch (Exception e){
            
            dbServices.rollback();
            return e.getMessage(); //"FAIL";
            
        }          
             
        // Update the object
        if( tblPerson == null ){
            
            //Do nothing for NULL
            retVal = "NULL";
            
        } else {    
            
            //Do the update now.  
            try{

                if( pTitle == null ){
                    pTitle = "";
                } 
                if( pFirstName == null ){
                    pFirstName = "";
                } 
                if( pMiddleName == null ){
                    pMiddleName = "";
                }                 
                if( pLastName == null ){
                    pLastName = "";
                }                  
                if( pSuffix == null ){
                    pSuffix = "";
                }   
                if( pAddr01 == null ){
                    pAddr01 = "";
                }                 
                if( pAddr02 == null ){
                    pAddr02 = "";
                }                   
                if( pCity == null ){
                    pCity = "";
                }     
                if( pEmpState == null ){
                    pEmpState = "";
                }                    
                if( pZipCode == null ){
                    pZipCode = "";
                }                    
                if( pCountry == null ){
                    pCountry = "";
                }                  
                if( pEmail == null ){
                    pEmail = "";
                }                         
                
                
                tblPerson.setJuid( pJuid );  //originally comments, not required for update
                tblPerson.setEntityid( pEntityId ); //originally comments, not required for update
                tblPerson.setPartyid( pPartyId ); //originally comments, not required for update
                tblPerson.setTitle( pTitle );
                tblPerson.setFirstname( pFirstName );
                tblPerson.setMiddlename( pMiddleName );
                tblPerson.setLastname( pLastName );
                tblPerson.setSuffix( pSuffix );
                tblPerson.setAddr01( pAddr01 );
                tblPerson.setAddr02( pAddr02 );
                tblPerson.setCity( pCity );
                tblPerson.setEmpstate( pEmpState );
                tblPerson.setZipcode( pZipCode );
                tblPerson.setCountry( pCountry );
                tblPerson.setEmail( pEmail );
            
                tblPerson.setCountrycodehome( pCountryCodeHome );
                tblPerson.setAreacodehome( pAreaCodeHome );
                tblPerson.setPhonehome( pPhoneHome );
                tblPerson.setExtensionhome( pExtensionHome );
            
                tblPerson.setCountrycodework( pCountryCodeWork );
                tblPerson.setAreacodework( pAreaCodeWork );
                tblPerson.setPhonework( pPhoneWork );
                tblPerson.setExtensionwork( pExtensionWork );
                
                tblPerson.setCountrycodefax( pCountryCodeFax );
                tblPerson.setAreacodefax( pAreaCodeFax );
                tblPerson.setPhonefax( pPhoneFax );
                tblPerson.setExtensionfax( pExtensionFax );
            
                tblPerson.setCountrycodemobile( pCountryCodeMobile );
                tblPerson.setAreacodemobile( pAreaCodeMobile );
                tblPerson.setPhonemobile( pPhoneMobile );
                tblPerson.setExtensionmobile( pExtensionMobile );

                tblPerson.setRoletype( pRoleType );
                tblPerson.setUserjuid( pUserJuid );
                tblPerson.setSstatus( pStatus );
                tblPerson.setPid( pPid );
                tblPerson.setDeleted( 0 ); //originally comments, not required for update
                
                //dbServices.begin();
                
                //    dbServices.update(tblPerson);
                    
                //dbServices.commit();
                
                updatePerson( tblPerson ); //just to test another method of update.
                
                
            } catch (Exception e) {
            
                return e.getMessage();
            
            }    
           
        }               
          
        return retVal;                                          
    }                                      

    public Tblperson updatePerson(Tblperson tblperson){
        
        String com_db_data_table    = "com.dbwaveerp.data.Tblperson";
        String table_db             = "dbwaveerp";
        
        Tblperson updatedPerson = null;
        log(INFO, "Updating Tblperson: " );
        try{

            //Use zero for index when calling update from java service
            TypedServiceReturn tsrPerson = runtimeSvc.update(table_db, com_db_data_table,tblperson,0);
            updatedPerson = (Tblperson)tsrPerson.getReturnValue();
            
        } catch(Exception e) {
            log(ERROR, "There was a problem updating person");
            e.printStackTrace();
        }
        return updatedPerson;
    }

    public String createEmployeeExt( 
                                    String pJuid,
                                    String pEntityId, 
                                    String pParent, 
                                    String pBadgeId,
                                    String pDivisionId,
                                    String pDivisionDesc,
                                    String pDepartmentId,
                                    String pDepartmentDesc,
                                    String pSectionId,
                                    String pSectionDesc,
                                    String pLocationId,
                                    String pLocationDesc,
                                    String pRestDayId,
                                    String pRestDayDesc,
                                    String pShiftId,
                                    String pShiftDesc,
                                    String pManagerId,
                                    String pManagerDesc,
                                    String pDeviceIn,
                                    String pDeviceOut,
                                    String pStatus
                             ){
                                 
        List<Tblemployeeext> myList = null;
        Iterator<Tblemployeeext> iterator = null;     
        Tblemployeeext tblEmployeeX = null;    
        
        try{
            dbServices.begin();
        
            Session session = dbServices.getDataServiceManager().getSession();
            String sQuery = "select * from Tblemployeeext where parentPerson = '" + pParent + "' ;";   
        
            SQLQuery query = session.createSQLQuery(sQuery);
            query.addEntity(Tblemployeeext.class);
            
            myList = query.list();
         
            dbServices.commit(); 
       
            iterator = myList.iterator();
        
            /**
             * At this point, only one record should be retrieved
            */
            while (iterator.hasNext()) {
                
                tblEmployeeX        = (Tblemployeeext) iterator.next();
                
            }
            
        }catch (Exception e){
            
            dbServices.rollback();
            return "FAIL";
            
        }     
        
                                 
                                 
        String strJuid = "";                         
 
        // Update the object
        if( tblEmployeeX == null ){
  
            try{
            
                dbServices.begin();

                //Prepare data for insertion
                Tblemployeeext addEntry = new Tblemployeeext();
                UUID guid = UUID.randomUUID();
                strJuid   = guid.toString();

                addEntry.setJuid( guid.toString() );  
                addEntry.setEntityid( pEntityId );
                addEntry.setParentPerson( pParent );
                addEntry.setBadgeid( pBadgeId );
            
                addEntry.setDivisionid( pDivisionId );
                addEntry.setDivisiondesc( pDivisionDesc );
                addEntry.setDepartmentid( pDepartmentId );
                addEntry.setDepartmentdesc( pDepartmentDesc ); 
                addEntry.setSectionid( pSectionId );
                addEntry.setSectiondesc( pSectionDesc );
                addEntry.setLocationid( pLocationId );
                addEntry.setLocationdesc( pLocationDesc );  
                addEntry.setRestdayid( pRestDayId );
                addEntry.setRestdaydesc( pRestDayDesc );             
                addEntry.setShiftid( pShiftId );
                addEntry.setShiftdesc( pShiftDesc );  
                addEntry.setManagerid( pManagerId );
                addEntry.setManagerdesc( pManagerDesc ); 
                addEntry.setDevicein( pDeviceIn );
                addEntry.setDeviceout( pDeviceOut );
                addEntry.setSstatus( pStatus );


                dbServices.insert(addEntry);
                dbServices.commit();     
            
            }catch (Exception e){
            
                dbServices.rollback();
                return "FAIL";
            
            }    
            
        } else {
            
            //Just update the object here
            tblEmployeeX.setEntityid( pEntityId );
            //tblEmployeeX.setParentPerson( pParent );
            tblEmployeeX.setBadgeid( pBadgeId );
            
            tblEmployeeX.setDivisionid( pDivisionId );
            tblEmployeeX.setDivisiondesc( pDivisionDesc );
            tblEmployeeX.setDepartmentid( pDepartmentId );
            tblEmployeeX.setDepartmentdesc( pDepartmentDesc ); 
            tblEmployeeX.setSectionid( pSectionId );
            tblEmployeeX.setSectiondesc( pSectionDesc );
            tblEmployeeX.setLocationid( pLocationId );
            tblEmployeeX.setLocationdesc( pLocationDesc );  
            tblEmployeeX.setRestdayid( pRestDayId );
            tblEmployeeX.setRestdaydesc( pRestDayDesc );             
            tblEmployeeX.setShiftid( pShiftId );
            tblEmployeeX.setShiftdesc( pShiftDesc );  
            tblEmployeeX.setManagerid( pManagerId );
            tblEmployeeX.setManagerdesc( pManagerDesc );
            tblEmployeeX.setDevicein( pDeviceIn );
            tblEmployeeX.setDeviceout( pDeviceOut );
            tblEmployeeX.setSstatus( pStatus );            
            
            //Do the update now.  
            try{

                dbServices.begin();
                    dbServices.update(tblEmployeeX);
                dbServices.commit();
      
            } catch (Exception e) {
            
                return e.getMessage();
            
            }                
         
        }    
        
        return strJuid ;
        
    }    


    //Added by Jammi Dee 02/09/2013
    public String createUser( 
                                    String pJuid,
                                    String pEntityId, 
                                    String pUserId,
                                    String pPassword,
                                    String pUsername,
                                    String pFirstname,
                                    String pMiddlename,
                                    String pLastname,
                                    String pStatus,
                                    String pEmail,
                                    String pRoleId,
                                    Date pStartDate,
                                    Date pEndDate,
                                    String pPid
                                    
                             ){
          
        // Call the encryption management system
        desEncryption  de = new desEncryption();
        de.Encrypter("","");          
          
        List<Tbluser> myList = null;
        Iterator<Tbluser> iterator = null;     
        Tbluser item = null;   
        
        try{
 
            dbServices.begin();
        
                Session session = dbServices.getDataServiceManager().getSession();
                String sQuery = "select * from Tbluser where userid = '" + pUserId + "' ;";   
        
                SQLQuery query = session.createSQLQuery(sQuery);
                query.addEntity(Tbluser.class);
                myList = query.list();
         
            dbServices.commit(); 
            
            iterator = myList.iterator();
            
            // Loop and generate an encrypted password
            while (iterator.hasNext()) {
                
                item = (Tbluser) iterator.next();          

            }                        
            
        }catch (Exception e){
            
            dbServices.rollback();
            return "FAIL";
            
        }     
        
        String strJuid = "";
        // Update the object
        if( item == null ){
  
            try{
            
                dbServices.begin();

                //Prepare data for insertion
                Tbluser addEntry = new Tbluser();
                
                UUID guid = UUID.randomUUID();
                strJuid   = guid.toString();
                TbluserId newid = new TbluserId();
                newid.setJuid( guid.toString() );
                newid.setSeqid( 0 );

                addEntry.setId( newid ); 
                
                addEntry.setUserid( pUserId );
                addEntry.setEntityid( pEntityId );
                
                // Return the key to be encoded
                addEntry.setPassword( "LOCKED!" );
                String strEnc = de.encrypt( pPassword );                  
                addEntry.setPasswdenc( strEnc );
                
                addEntry.setUsername( pUsername );
                addEntry.setFirstname( pUsername );
                addEntry.setMiddlename( pMiddlename );
                addEntry.setLastname( pLastname );
                addEntry.setSstatus( pStatus );
                addEntry.setEmail( pEmail );
                addEntry.setRoleid( pRoleId );
                addEntry.setStartdate( pStartDate );
                addEntry.setEnddate( pEndDate );
                addEntry.setPid( pPid );
                addEntry.setParentPerson( "000000" );
                addEntry.setDeleted( 0 );
            
                dbServices.insert(addEntry);
                dbServices.commit();     
            
            }catch (Exception e){
            
                dbServices.rollback();
                return "FAIL";
            
            }    
            
        } else {
            
            //Just update the object here
            //item.setEntityid( pEntityId );        
            
            //Do the update now.  
            //try{

                //dbServices.begin();
                //    dbServices.update(item);
                //dbServices.commit();
      
            //} catch (Exception e) {
            
                //return e.getMessage();
            
            //}                
         
            return "FAIL";
         
        }    

        return "OK";      
        
        
    }    


    //Used by Spring to set runtimeSvc member
    //See also SecureDbSvc.spring.xml
    @HideFromClient
    public void setRuntimeSvc(RuntimeService runtimeSvc){
        this.runtimeSvc = runtimeSvc;
    }




}
