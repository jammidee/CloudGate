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
 * Date: 08/20/2012
 * Modified by: Jammi Dee 08/20/2012 02:09pm
 * 
*/

package com.waveerp;

import com.wavemaker.runtime.RuntimeAccess;
import org.hibernate.Session;
import org.hibernate.SQLQuery;

import java.io.*;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;

// List management libraries
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList; 

import java.io.IOException;
import java.sql.SQLException;

import java.net.URL;
import java.net.URLDecoder;

//Required for database
import com.dbwaveerp.Dbwaveerp;
import com.dbwaveerp.data.*; 

public class systemLicense extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {

    private Dbwaveerp dbServices = (Dbwaveerp) RuntimeAccess.getInstance().getService(Dbwaveerp.class); 
    
    public static final String UPLOAD_DIR   = "customdata/uploads/" ;
    public static final String TEMP_DIR     = "customdata/temp/" ;
    public static final String REPO_DIR     = "customdata/repository/" ;
    
    URL fileUrl;   
    
    public systemLicense() {
       super(INFO);
    }
    
    //Added by Jammi Dee 08/20/2012
    //pKey = passed key
    //pKeySource = source of key to generate
    public String makeLicenseKey(String pKey, String pKeySource ){
  
        // Call the registry management system                    
        registrySystem rs = new registrySystem();
        
        // Call the encryption management system
        desEncryption  de = new desEncryption();
        de.Encrypter("","");  
  
        String strEnc = "";
        String result = "OK";
    
        if( pKey.equals("gloriainexcelsisdeo") ){
            
           // Return the key to be encoded
           strEnc = de.encrypt( pKeySource );
           result = strEnc ;
           
        } else if( pKey.equals("admajoremdeigloriam") ) {    
            
           // Return the key to be encoded
           strEnc = de.encrypt( pKeySource );
           result = strEnc ;

        } else if( pKey.equals("cloudgate") ) {    
            
           // Return the key to be encoded
           strEnc = de.encrypt( pKeySource );
           result = strEnc ;
           
        } else {
            
            //Write the generated key
            //Just write to registry
            rs.writeRegistry("NA", "NA", "NA", "LICKEY", pKey );
            result = "OK";
        }
    
        return result;
        
    }    
    
    //Added by Jammi Dee 08/20/2012
    public String generateKey(String pKey, String pKeySource ){
  
        // Call the registry management system                    
        registrySystem rs = new registrySystem();
        
        // Call the encryption management system
        desEncryption  de = new desEncryption();
        de.Encrypter("","");  
  
        String strEnc = "";
        String result = "OK";
    
        if( pKey.equals("gloriainexcelsisdeo") ){
            
           // Return the key to be encoded
           strEnc = de.encrypt( pKeySource );
           result = strEnc ;
           
        } else if( pKey.equals("admajoremdeigloriam") ) {    
            
           // Return the key to be encoded
           strEnc = de.encrypt( pKeySource );
           result = strEnc ;
           
        } else {
            
            //Write the generated key
            result = "FAILED";
        }
    
        return result;
        
    }        
    
    //Added by Jammi Dee 08/20/2012
    public String generateURLKey(String pKey, String pKeySource ){
  
        // Call the registry management system                    
        registrySystem rs = new registrySystem();
        
        // Call the encryption management system
        desEncryption  de = new desEncryption();
        de.Encrypter("","");  
  
        String strEnc = "";
        String result = "OK";
    
        if( pKey.equals("gloriainexcelsisdeo") ){
            
           // Return the key to be encoded
           strEnc = de.encrypt( pKeySource );
           result = strEnc ;
           
        } else if( pKey.equals("admajoremdeigloriam") ) {    
            
           // Return the key to be encoded
           strEnc = de.encrypt( pKeySource );
           result = strEnc ;
           
        } else {
            
            //Write the generated key
            result = "FAILED";
        }
    
        //Write the URL password
        rs.writeRegistry("NA", "NA", "NA", "URLPASS" , result );    
    
        return result;
    
    }       
    
    //Added by Jammi Dee 08/20/2012
    /**
     * This function reads the URL and the password. check if
     * the supplied password match the stored URLPASS in the
     * registry and returns the encrypted URL address
    */
    public String readURLKey(String pKey, String pKeySource ){
  
        // Call the registry management system                    
        registrySystem rs = new registrySystem();
        
        // Call the encryption management system
        desEncryption  de = new desEncryption();
        de.Encrypter("","");  
  
        String strEnc = "";
        String result = "OK";
        
        String strUrlKey = rs.readRegistryDefault("NA", "NA", "NA", "URLPASS" , "1KfiXRM0OT4QBENjKVTyJo3yRnLjki3s");        
        strUrlKey = de.decrypt( strUrlKey );
    
    
        if( pKey.equals( strUrlKey ) ){
            
           // Return the key to be encoded
           strEnc = de.encrypt( pKeySource );
           result = strEnc ;
           
        } else {
            
            //Write the generated key
            result = "FAILED";
        }  
    
        return result;
    
    }       
    
    
    //Added by Jammi Dee 11/30/2012
    public String unGenerateKey(String pRegSource ){
  
        // Call the encryption management system
        desEncryption  de = new desEncryption();
        de.Encrypter("",""); 
        
        // Call the registry management system                    
        registrySystem rs = new registrySystem();
        
        String strConUsers      = rs.readRegistryDefault("NA", "NA", "NA", pRegSource , "1KfiXRM0OT4QBENjKVTyJo3yRnLjki3s");
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

        String strLicTo         = rs.readRegistryDefault("NA", "NA", "NA", "LICENSETO", "CloudGate Lives");

        String strEnc = "";
        String result = "OK";
    
        if(strLicTo.equals( strConUserLicTo ) ) {
            
           result = para[1];
            
        } else {
            
            result = "5";
            
        }    
     
        return result;
        
    }        
    
    //Added by Jammi Dee 11/30/2012
    public String checkEntityLicense( ){
  
        // Call the encryption management system
        desEncryption  de = new desEncryption();
        de.Encrypter("",""); 
        
        // Call the registry management system                    
        registrySystem rs = new registrySystem();
        
        String strConUsers      = rs.readRegistryDefault("NA", "NA", "NA", "NOENTITIES" , "1KfiXRM0OT4QBENjKVTyJo3yRnLjki3s");
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

        String strLicTo         = rs.readRegistryDefault("NA", "NA", "NA", "LICENSETO", "CloudGate Lives");

        String strEnc = "";
        String result = "OK";
    
        if(strLicTo.equals( strConUserLicTo ) ) {
            
           result = para[1];
            
        } else {
            
            result = "5";
            
        }    
 
        String strResult    = "OK";
        int    iCount       = 0;
        int    iLic         = Integer.parseInt(result);
        
        //Load Entity Table
        List<Tblentity> myList          = null;
        Iterator<Tblentity> iterator    = null;     
        Tblentity sess                  = null;     
        
        try {       
                
                dbServices.begin();

                    Session session = dbServices.getDataServiceManager().getSession();
                    String sQuery = "select * from Tblentity ;";   
        
                    SQLQuery query = session.createSQLQuery(sQuery);
                    query.addEntity(Tblentity.class);
            
                    myList = query.list();
         
                dbServices.commit(); 
       
                iterator = myList.iterator();
        
                while (iterator.hasNext()) {
                
                    sess = (Tblentity) iterator.next();
                    iCount++; 
                
                }

        } catch (Exception e) {
            
            dbServices.rollback();
            return "FAIL";
            
        }          
     
        if(iCount < iLic){
            result = "OK";
        } else {
            return "MAXENTITY";
        }
      
      return "OK";
      
    }        
    
    //Added by Jammi Dee 12/02/2012
    public String checkUserLicense( ){
  
        // Call the encryption management system
        desEncryption  de = new desEncryption();
        de.Encrypter("",""); 
        
        // Call the registry management system                    
        registrySystem rs = new registrySystem();
        
        String strConUsers      = rs.readRegistryDefault("NA", "NA", "NA", "NOUSERS" , "1KfiXRM0OT4QBENjKVTyJo3yRnLjki3s");
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

        String strLicTo         = rs.readRegistryDefault("NA", "NA", "NA", "LICENSETO", "CloudGate Lives");

        String strEnc = "";
        String result = "OK";
    
        if(strLicTo.equals( strConUserLicTo ) ) {
            
           result = para[1];
            
        } else {
            
            result = "5";
            
        }    
 
        String strResult    = "OK";
        int    iCount       = 0;
        int    iLic         = Integer.parseInt(result);
        
        //Load Entity Table
        List<Tbluser> myList          = null;
        Iterator<Tbluser> iterator    = null;     
        Tbluser sess                  = null;     
        
        try {       
                
                dbServices.begin();

                    Session session = dbServices.getDataServiceManager().getSession();
                    String sQuery = "select * from Tbluser ;";   
        
                    SQLQuery query = session.createSQLQuery(sQuery);
                    query.addEntity(Tbluser.class);
            
                    myList = query.list();
         
                dbServices.commit(); 
       
                iterator = myList.iterator();
        
                while (iterator.hasNext()) {
                
                    sess = (Tbluser) iterator.next();
                    iCount++; 
                
                }

        } catch (Exception e) {
            
            dbServices.rollback();
            return "FAIL";
            
        }          
     
        if(iCount < iLic){
            result = "OK";
        } else {
            return "MAXUSER";
        }
      
      return "OK";
      
    }        
    
 
 
 
    
    //Added by Jammi Dee 09/11/2012
    public String generateKeyNoKey(String pKeySource ){
  
        // Call the registry management system                    
        registrySystem rs = new registrySystem();
        
        // Call the encryption management system
        desEncryption  de = new desEncryption();
        de.Encrypter("","");  
  
        String strEnc = "";
        String result = "FAILED";
        
        // Return the key to be encoded
        strEnc = de.encrypt( pKeySource );
        result = strEnc ;
    
        return result;
        
    }      
    
    //Added by Jammi Dee 08/20/2012
    public String compareKey(String pKeySource ){
  
        String result = "";
        
        // Call the registry management system                    
        registrySystem rs = new registrySystem();
        
        // Call the encryption management system
        desEncryption  de = new desEncryption();
        de.Encrypter("","");  
        
        //Encrypt the Source Key
        String strEnc = "";
        strEnc = de.encrypt( pKeySource );
        
        //Write the generated key
        //Just write to registry
        String strReg = "";
        strReg = rs.readRegistryDefault("NA", "NA", "NA", "LICKEY", "NONE" );        
        
        if( strEnc.equals(strReg) ){
            
            result = "OK";
            
        } else {
            
            result = "FAILED";
            
        }
        
        return result;
        
    }            


    //Added by Jammi Dee 08/20/2012
    public String writeToFileKey(String pLicTo, String pConUsers, String pNoUsers, String pNoEntity, String pEdition )
                  throws Exception, IOException, SQLException {
        
       String strLicenses = "";
        
       strLicenses = strLicenses + pLicTo + "\r\n" ;
       strLicenses = strLicenses + pConUsers + "\r\n" ;
       strLicenses = strLicenses + pNoUsers + "\r\n" ;
       strLicenses = strLicenses + pNoEntity + "\r\n" ;
       strLicenses = strLicenses + pEdition + "\r\n" ;

       // Get the path of the system here
       String fna = "";
       String fnb = "";
            
       fileUrl = null; 
       fileUrl = this.getClass().getResource("systemLicense.class");
       fna = fileUrl.getPath();
       fna = fna.substring(0, fna.indexOf("WEB-INF"));    
       fnb = TEMP_DIR + "CGLicense" + ".lic";
            
       fna = URLDecoder.decode( fna + TEMP_DIR + "CGLicense" + ".lic" );    
       
       FileWriter fhml     = new FileWriter(fna);
            BufferedWriter out  = new BufferedWriter( fhml );
            out.write(strLicenses);
       out.close();       
        
       return fnb;
        
    }    


}
