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
 * Date: 05/24/2012
 * Modified by: Jammi Dee 06/12/2012 02:30pm
 * 
*/


package com.waveerp;

// 05/24/2012 Created by Jammi Dee 00:10

import java.io.*;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Blob;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.Statement;
import java.net.URLDecoder;

import com.wavemaker.runtime.RuntimeAccess;
import org.hibernate.Session;
import org.hibernate.SQLQuery;
import java.util.Calendar;
import java.sql.Timestamp;
import javax.servlet.http.HttpSession;

import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;
import java.net.URL;

import com.dbwaveerp.Dbwaveerp;
import com.dbwaveerp.data.*;

// Needed for reading Wave ERP registry
import com.waveerp.registrySystem;

public class systemMediaLib extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {
    
    // Added by Jammi Dee 09/08/2012
    public static final String CENTRAL_DIR  = "C:/cgData" ;
    public static final String CUSTOM_DIR  = "customdata" ;
    // Added by Jammi Dee 05/27/2012
    public static final String UPLOAD_DIR   = "customdata/uploads/" ;
    public static final String TEMP_DIR     = "customdata/temp/" ;
    public static final String REPO_DIR     = "customdata/repository/" ;
    
    private Dbwaveerp dbServices = (Dbwaveerp) RuntimeAccess.getInstance().getService(Dbwaveerp.class);
    Connection con;
    Statement ps;
    ResultSet rs;
    
    URL fileUrl;   
    
	private String driver 		= "com.mysql.jdbc.Driver";
	private String db 			= "jdbc:mysql://localhost:3307/dbwaveerp";
	private String user 		= "root";
	private String pw 			= "password";
	private String tablename	= "tbltickets";
	
	private String querystring  = "select * from tbltickets ";	 
	private int colCount		=   Integer.parseInt("2");
	private String[] colTypes;	// keep here all the column types


    public systemMediaLib() {
       super(INFO);
    }

    // Added by Jammi Dee 05/24/2012
    /**
     * These functions are specific for the manipulation of media library
    */
    public String InsertMediaToMySql(
                                        String pUserId,
                                        String pEntity,
                                        String pAppId,
                                        String pFileName,
                                        String pFilext) 
                                        throws Exception, IOException, SQLException {
            
            // Call the registry management system                    
            registrySystem rgs = new registrySystem();            
 
            // Added by Jammi Dee 05/24/2012
            String url         = rgs.readRegistry("NA", "NA", "NA", "DBURL");
            String dbName      = rgs.readRegistry("NA", "NA", "NA", "DBDATABASE");
            String driver      = rgs.readRegistry("NA", "NA", "NA", "DBDRIVER");
            String userName    = rgs.readRegistry("NA", "NA", "NA", "DBUSER");
            String password    = rgs.readRegistry("NA", "NA", "NA", "DBPASSWORD"); 
 
            Class.forName(driver);
            Connection conn = DriverManager.getConnection(url+dbName,userName,password);
            String INSERT_ATTACHMENT = "insert tblmedialib(entity,appid,filename,filext,userid,filedata,filesize,filedate, filesrc)" +
                                       "values(?,?,?,?,?,?,?,?,?);";
            
            String fna;
            String fnb;
            String fnc;
            String fnd;
            String delRes;
            
            fileUrl = null; 
            fileUrl = this.getClass().getResource("systemMediaLib.class");
            fna = fileUrl.getPath();
            fna = fna.substring(0, fna.indexOf("WEB-INF"));
            fnd = fna;
            
            //Added by Jammi Dee 09/08/2012
            //Check for the central repository mode
            String centRepo = rgs.readRegistryDefault("NA", "NA", "NA", "CENTRALREPO", "OFF");
            if( centRepo.equals("ON") ){
                
                File file      = new File(CENTRAL_DIR);
                File filee     = new File(CENTRAL_DIR + "/" + CUSTOM_DIR);
                File filea     = new File(CENTRAL_DIR + "/" + UPLOAD_DIR.substring(0, UPLOAD_DIR.length()-1 ) );
                File fileb     = new File(CENTRAL_DIR + "/" + TEMP_DIR.substring(0, TEMP_DIR.length()-1 ) );
                File filec     = new File(CENTRAL_DIR + "/" + REPO_DIR.substring(0, REPO_DIR.length()-1 ) );
                
                if( !file.exists() ){
                    
                    file.mkdir();
                    filee.mkdir();
                    filea.mkdir();
                    fileb.mkdir();
                    filec.mkdir();
                    
                }
                
                fnd = CENTRAL_DIR + "/";    
                
            }
            
            fnb = URLDecoder.decode( fna + UPLOAD_DIR );
            fnc = URLDecoder.decode( fnd + REPO_DIR );
            
            fna = fna + UPLOAD_DIR + pFileName;
            fna = URLDecoder.decode(fna);
            
            // Added by Jammi Dee 05/27/2012
            // Detect the extension of the file here
            int mid;
            String ext;
            mid = pFileName.lastIndexOf(".");
            ext = pFileName.substring(mid + 1);
            pFilext = ext.toUpperCase();
            
            FileInputStream fis = null;
            PreparedStatement ps = null;
            
            try {
                
                conn.setAutoCommit(false);
                
                 File file      = new File(fna);
                 File tofile    = new File(fnc + pFileName );
                 
                 // Limit the size of the file to be saved in the database
                 if( file.length() < 100000 ){
                     
                    fis = new FileInputStream(file);
                    ps = conn.prepareStatement(INSERT_ATTACHMENT);
                    ps.setString(1,pEntity);
                    ps.setString(2,pAppId);
                    ps.setString(3,pFileName);
                    ps.setString(4,pFilext);
                    ps.setString(5,pUserId);
                    ps.setBinaryStream(6, fis, (int) file.length());
                    ps.setLong(7,file.length());
                 
                    Date date = new Date( file.lastModified() );
                    ps.setDate(8, date );
                    ps.setString(9,"I");
                    int s = ps.executeUpdate(); 
                    

                    fis.close();
                      
                 } else {
                     
                    //fis = new FileInputStream(file);
                    ps = conn.prepareStatement(INSERT_ATTACHMENT);
                    ps.setString(1,pEntity);
                    ps.setString(2,pAppId);
                    ps.setString(3,pFileName);
                    ps.setString(4,pFilext);
                    ps.setString(5,pUserId);
                    ps.setLong(6, 0 );
                    ps.setLong(7,file.length());
                 
                    Date date = new Date( file.lastModified() );
                    ps.setDate(8, date );
                    ps.setString(9,"X");
                    int s = ps.executeUpdate(); 
        
                    /**
                     * Move the file to the repository
                     * This file should be accessed externally
                    */ 
                    file.renameTo(tofile);                     
                     
                 }
                 

                 conn.commit();
                
                
                // Added by Jammi Dee 05/27/2012
                // Delete the physical file
                if( file.exists() ){
                    
                    fna = DeletFile( UPLOAD_DIR , pFileName );
                    
                }            
            
            } catch (Exception e) {
                
                 fna = "Catch 1: " + pFileName;
                 return fna;
                 
            } finally {
                
                ps.close();
                
            }
            
            return fna;
    }      
      

    // Added by Jammi Dee 05/25/2012
    /**
     * These functions are specific for the manipulation of media library
    */  
    public String ReadMediaToFile(
                                    String pUserId,
                                    String pEntity,
                                    String pAppId,        
                                    String pFileName)
                                    throws Exception, IOException, SQLException {
        
            ResultSet rs;
            Statement ss;
            
            // Call the registry management system                    
            registrySystem rgs = new registrySystem();            
 
            // Added by Jammi Dee 05/24/2012
            String url         = rgs.readRegistry("NA", "NA", "NA", "DBURL");
            String dbName      = rgs.readRegistry("NA", "NA", "NA", "DBDATABASE");
            String driver      = rgs.readRegistry("NA", "NA", "NA", "DBDRIVER");
            String userName    = rgs.readRegistry("NA", "NA", "NA", "DBUSER");
            String password    = rgs.readRegistry("NA", "NA", "NA", "DBPASSWORD");             
            
            Class.forName(this.getDriver());
            Connection conn = DriverManager.getConnection(url+dbName,userName,password);
            String READ_FILE = "select filedata, filesrc from tblmedialib where" +
                                  " appid ='" + pAppId + "' and userid = '" + pUserId + "' and "+
                                  " filename = '" + pFileName + "' and entity = '" + pEntity + "';";

            // Get the path of the system here
            String fna;
            String fnb;
            String fnc;
            
            fileUrl = null; 
            fileUrl = this.getClass().getResource("systemMediaLib.class");
            fna = fileUrl.getPath();
            fna = fna.substring(0, fna.indexOf("WEB-INF"));

            fna = fna + TEMP_DIR + pFileName;
            fnc = fna + REPO_DIR + pFileName;
            
            fna = URLDecoder.decode( fna );
            fnb = TEMP_DIR + pFileName;
            try {
                
                ss = conn.createStatement();
                rs = ss.executeQuery(READ_FILE);
                
                while (rs.next()) {
                    
                    String src = rs.getString("filesrc");
                    
                    // Added by Jammi Dee 06/12/2012
                    if( src.equals("I") ){
                        
                        int b;
                        InputStream bis = rs.getBinaryStream("filedata");
                        FileOutputStream f = new FileOutputStream(fna);
                        while ((b = bis.read()) >= 0) {
                            f.write(b);
                        }
                        f.close();
                        bis.close();                    
                        
                    } else {
                        
                        // Point to the repo only
                        fnb =  REPO_DIR + pFileName;
                        
                    }   
                    
                }    
                
                rs.close();
                ss.close();

            } catch (Exception e) {
                
                 fna = e.getMessage();
                 return fna;
                 
            } finally {
                
            }
            
            return fnb;
        }
  


    // Added by Jammi Dee 05/25/2012
    /**
     * These functions are specific for the manipulation of media library
    */  
    public String ReadMediaToFilesss(
                                    String pUserId,
                                    String pEntity,
                                    String pAppId,        
                                    String pFileName)
                                    throws Exception, IOException, SQLException {
        
            ResultSet rs;
            Statement ss;
            
            // Call the registry management system                    
            registrySystem rgs = new registrySystem();            
 
            // Added by Jammi Dee 05/24/2012
            String url         = rgs.readRegistry("NA", "NA", "NA", "DBURL");
            String dbName      = rgs.readRegistry("NA", "NA", "NA", "DBDATABASE");
            String driver      = rgs.readRegistry("NA", "NA", "NA", "DBDRIVER");
            String userName    = rgs.readRegistry("NA", "NA", "NA", "DBUSER");
            String password    = rgs.readRegistry("NA", "NA", "NA", "DBPASSWORD");             
            
            Class.forName(this.getDriver());
            Connection conn = DriverManager.getConnection(url+dbName,userName,password);
            String READ_FILE = "select filedata, filesrc from tblmedialib where" +
                                  " appid ='" + pAppId + "' and userid = '" + pUserId + "' and "+
                                  " filename = '" + pFileName + "' and entity = '" + pEntity + "';";

            // Get the path of the system here
            String fna;
            String fnb;
            String fnc;
            String fnd;
            
            fileUrl = null; 
            fileUrl = this.getClass().getResource("systemMediaLib.class");
            fna = fileUrl.getPath();
            fna = fna.substring(0, fna.indexOf("WEB-INF"));
            fnd = fna;

            //Added by Jammi Dee 09/08/2012
            //Check for the central repository mode
            String centRepo = rgs.readRegistryDefault("NA", "NA", "NA", "CENTRALREPO", "OFF");
            if( centRepo.equals("ON") ){
                
                File file      = new File(CENTRAL_DIR);
                File filee     = new File(CENTRAL_DIR + "/" + CUSTOM_DIR);
                File filea     = new File(CENTRAL_DIR + "/" + UPLOAD_DIR.substring(0, UPLOAD_DIR.length()-1 ) );
                File fileb     = new File(CENTRAL_DIR + "/" + TEMP_DIR.substring(0, TEMP_DIR.length()-1 ) );
                File filec     = new File(CENTRAL_DIR + "/" + REPO_DIR.substring(0, REPO_DIR.length()-1 ) );
                
                if( !file.exists() ){
                    
                    file.mkdir();
                    filee.mkdir();
                    filea.mkdir();
                    fileb.mkdir();
                    filec.mkdir();
                    
                }
                
                fnd = CENTRAL_DIR + "/";    
                
            }

            fna = fna + TEMP_DIR + pFileName;
            fnc = fna + REPO_DIR + pFileName;
            
            fna = URLDecoder.decode( fna );
            fnb = TEMP_DIR + pFileName;
            try {
                
                ss = conn.createStatement();
                rs = ss.executeQuery(READ_FILE);
                
                while (rs.next()) {
                    
                    String src = rs.getString("filesrc");
                    
                    // Added by Jammi Dee 06/12/2012
                    if( src.equals("I") ){
                        
                        int b;
                        InputStream bis = rs.getBinaryStream("filedata");
                        FileOutputStream f = new FileOutputStream(fna);
                        while ((b = bis.read()) >= 0) {
                            f.write(b);
                        }
                        f.close();
                        bis.close();                    
                        
                        fnb = fna;
                        
                    } else {
                        
                        // Point to the repo only
                        fnb =  REPO_DIR + pFileName;
                        
                    }   
                    
                }    
                
                rs.close();
                ss.close();

            } catch (Exception e) {
                
                 fna = e.getMessage();
                 return fna;
                 
            } finally {
                
            }
            
            return fnb;
        }
  

    // Added by Jammi Dee 05/25/2012
    /**
     * These functions are specific for the manipulation of media library
    */  
    public String DeleteMediaFromMysql(
        
                                        String pUserId,
                                        String pEntity,
                                        String pAppId,        
                                        String pFileName)
                                        throws Exception, IOException, SQLException {
        
            ResultSet rs;
            Statement ss;
            
            // Call the registry management system                    
            registrySystem rgs = new registrySystem();            
 
            // Added by Jammi Dee 05/24/2012
            String url         = rgs.readRegistry("NA", "NA", "NA", "DBURL");
            String dbName      = rgs.readRegistry("NA", "NA", "NA", "DBDATABASE");
            String driver      = rgs.readRegistry("NA", "NA", "NA", "DBDRIVER");
            String userName    = rgs.readRegistry("NA", "NA", "NA", "DBUSER");
            String password    = rgs.readRegistry("NA", "NA", "NA", "DBPASSWORD");             
            
            Class.forName(this.getDriver());
            Connection conn = DriverManager.getConnection(url+dbName,userName,password);
            String READ_FILE = "delete from tblmedialib where" +
                                  " appid ='" + pAppId + "' and userid = '" + pUserId + "' and "+
                                  " filename = '" + pFileName + "' and entity = '" + pEntity + "';";

            // Get the path of the system here
            String fna;
            String fnb;
            String fnc;
            fileUrl = null; 
            fileUrl = this.getClass().getResource("systemMediaLib.class");
            fna = fileUrl.getPath();
            fna = fna.substring(0, fna.indexOf("WEB-INF"));

            fnb = URLDecoder.decode( fna + TEMP_DIR );
            fnc = URLDecoder.decode( fna + REPO_DIR );
            
            fna = fna + TEMP_DIR + pFileName;
            fna = URLDecoder.decode( fna );
        
            File file = new File(fna);
            File repofile = new File(fnc);
            
            try {
                
                ss = conn.createStatement();
                int dr = ss.executeUpdate(READ_FILE);

                ss.close();
                
                // Added by Jammi Dee 05/27/2012
                // Delete the physical file
                if( file.exists() ){
                    
                    DeletFile( TEMP_DIR , pFileName );
                    
                }    

                // Added by Jammi Dee 05/27/2012
                // Delete the physical file in the repository
                if( repofile.exists() ){
                    
                    DeletFile( REPO_DIR , pFileName );
                    
                }                   
                

            } catch (Exception e) {
                 fna = e.getMessage();
                 return fna;
            } finally {
                
            }
            
            return fnb;
        }



    // Added by Jammi Dee 05/27/2012
    /**
     * These functions are specific for the manipulation of media library
    */  
    public String DeletFile(
                               String pPath,        
                               String pFileName)
                               throws Exception, IOException, SQLException {
        
            // Get the path of the system here
            String fna;
            
            fileUrl = null; 
            fileUrl = this.getClass().getResource("systemMediaLib.class");
            fna = fileUrl.getPath();
            fna = fna.substring(0, fna.indexOf("WEB-INF"));

            fna = fna + pPath + pFileName;
            fna = URLDecoder.decode( fna );
            
            File file = new File(fna);
            if ( file.exists() ){
                file.delete();
                fna = "SUCCESS";
            } else {
                file.delete();
                fna = "Error deleting " + fna;
            }
            
        
            return fna;
    }

    /**
     * List all the files in the temporary working folder of the system
     * Added by Jammi Dee
     * Date 06/09/2012
    */
    public String listTempDir() throws Exception, IOException, SQLException {
        
            // Get the path of the system here
            String fna;
            String fnb;
            String fList;
            
            fList = "";
            
            fileUrl = null; 
            fileUrl = this.getClass().getResource("systemMediaLib.class");
            fna = fileUrl.getPath();
            fna = fna.substring(0, fna.indexOf("WEB-INF"));

            fna = fna + TEMP_DIR + ".";
            fna = URLDecoder.decode( fna );
            fnb = TEMP_DIR + ".";
            
            File f = new File( fna );
            String files[] = f.list();
            
            if (files.length != 0){
                
                for (int j=0 ; j <= files.length - 1 ; j++  ){
                    fList = fList + files[j] + "<br>";
                }    
                
            }
            
            
            return fList;
        }

    public String listTempDirForObjectTree() throws Exception, IOException, SQLException {
        
            // Get the path of the system here
            String fna;
            String fnb;
            String fList;
            
            fList = "";
            
            fileUrl = null; 
            fileUrl = this.getClass().getResource("systemMediaLib.class");
            fna = fileUrl.getPath();
            fna = fna.substring(0, fna.indexOf("WEB-INF"));

            fna = fna + TEMP_DIR + ".";
            fna = URLDecoder.decode( fna );
            fnb = TEMP_DIR + ".";
            
            File f = new File( fna );
            String files[] = f.list();
            
            String strHeader = "{'Files':{" ;
            
            if (files.length != 0){
                
                for (int j=0 ; j <= files.length - 1 ; j++  ){
                    
                    files[j] = URLDecoder.decode( files[j] );
                    files[j] = files[j].replace("'", "");                    
                    
                    if (j <= files.length - 2){
                        fList = fList + "'" + files[j] + "':undefined,";
                    } else {
                        fList = fList + "'" + files[j] + "':undefined";
                    }      
                } 
            }
            
            String strFooter = "}}";
            
            
            return strHeader + fList + strFooter;
        }

    public String listUploadDirForObjectTree() throws Exception, IOException, SQLException {
        
            // Get the path of the system here
            String fna;
            String fnb;
            String fList;
            
            fList = "";
            
            fileUrl = null; 
            fileUrl = this.getClass().getResource("systemMediaLib.class");
            fna = fileUrl.getPath();
            fna = fna.substring(0, fna.indexOf("WEB-INF"));

            fna = fna + UPLOAD_DIR + ".";
            fna = URLDecoder.decode( fna );
            fnb = UPLOAD_DIR + ".";
            
            File f = new File( fna );
            String files[] = f.list();
            
            String strHeader = "{'Files':{" ;
            
            if (files.length != 0){
                
                for (int j=0 ; j <= files.length - 1 ; j++  ){
                    
                    files[j] = URLDecoder.decode( files[j] );
                    files[j] = files[j].replace("'", "");   
                    
                    if (j <= files.length - 2){
                        fList = fList + "'" + files[j] + "':undefined,";
                    } else {
                        fList = fList + "'" + files[j] + "':undefined";
                    }      
                } 
            }
            
            String strFooter = "}}";
            
            
            return strHeader + fList + strFooter;
        }


    /**
     * Get the file size
     * Added by Jammi Dee 06/09/2012
     * Other commands that can be used for file
     * file.lastModified (), file.getPath (), file.isDirectory ()
    */
    public long GetFileLength(
                               String pPath,        
                               String pFileName)
                               throws Exception, IOException, SQLException {
        
            // Get the path of the system here
            String fna;
            
            fileUrl = null; 
            fileUrl = this.getClass().getResource("systemMediaLib.class");
            fna = fileUrl.getPath();
            fna = fna.substring(0, fna.indexOf("WEB-INF"));

            fna = fna + pPath + pFileName;
            fna = URLDecoder.decode( fna );
            
            File file = new File(fna);
            long fSize;
            
            if ( file.exists()){
                
                fSize = file.length ();
                
            } else {
                fSize = 0;
            }
            
        
            return fSize;
    }


    //Added by Jammi Dee 09/01/2012
    //Deletes all files in the temporary folder
    public String deleteTempDir() throws Exception, IOException, SQLException {
        
            // Get the path of the system here
            String fna;
            String fnb;
            String fnd;
            String fList;
            
            fList = "";
            
            fileUrl = null; 
            fileUrl = this.getClass().getResource("systemMediaLib.class");
            fna = fileUrl.getPath();
            fna = fna.substring(0, fna.indexOf("WEB-INF"));
            fnd = fna;

            fna = fna + TEMP_DIR + ".";
            fna = URLDecoder.decode( fna );
            fnb = TEMP_DIR + ".";
            
            File f = new File( fna );
            String files[] = f.list();
            
            if (files.length != 0){
                
                for (int j=0 ; j <= files.length - 1 ; j++  ){
                    
                    String fil = fnd + TEMP_DIR + "/" + files[j] ;
                    fil = URLDecoder.decode( fil );
                    
                    File cFile = new File( fil );
                    
                    //Added by Jammi Dee 06/05/2013
                    if(cFile.isDirectory()){
                        // A folder file

                        if(cFile.list().length==0){
                            
                            cFile.delete();
                            
                        } else {  
                            
                            String lfiles[] = cFile.list();
                            
                            for (String temp : lfiles) {
                                //construct the file structure
                                String fi = fil + "/" + temp ;
                                File fileDelete = new File( fi );
        	                    fileDelete.delete();
        	                }                            
                            
                        }    
                        //Check the folder again, delete it.
                        if(cFile.list().length==0){
                            
                            cFile.delete();
                            
                        }   
                        
                    } else {    
                        
                            // Ordinary file
                            //File fd = new File( fil );
                            cFile.delete();
                            
                    }    
                }    
                
            }
            
            
            return fList;
        }


    //Added by Jammi Dee 09/01/2012
    //Deletes all files in the temporary folder
    public String deleteUploadDir() throws Exception, IOException, SQLException {
        
            // Get the path of the system here
            String fna;
            String fnb;
            String fnd;
            String fList;
            
            fList = "";
            
            fileUrl = null; 
            fileUrl = this.getClass().getResource("systemMediaLib.class");
            fna = fileUrl.getPath();
            fna = fna.substring(0, fna.indexOf("WEB-INF"));
            fnd = fna;

            fna = fna + UPLOAD_DIR + ".";
            fna = URLDecoder.decode( fna );
            fnb = UPLOAD_DIR + ".";
            
            File f = new File( fna );
            String files[] = f.list();
            
            if (files.length != 0){
                
                for (int j=0 ; j <= files.length - 1 ; j++  ){
                    
                    String fil = fnd + UPLOAD_DIR + "/" + files[j] ;
                    fil = URLDecoder.decode( fil );
                
                    File cFile = new File( fil );
                    
                    //Added by Jammi Dee 06/05/2013
                    if(cFile.isDirectory()){
                        // A folder file

                        if(cFile.list().length==0){
                            
                            cFile.delete();
                            
                        } else {  
                            
                            String lfiles[] = cFile.list();
                            
                            for (String temp : lfiles) {
                                //construct the file structure
                                String fi = fil + "/" + temp ;
        	                    File fileDelete = new File( fi );
        	                    fileDelete.delete();
        	                }                            
                            
                        }
                        //Check the folder again, delete it.
                        if(cFile.list().length==0){
                            
                            cFile.delete();
                            
                        }    
                        
                    } else {    
                        
                            // Ordinary file
                            //File fd = new File( fil );
                            cFile.delete();
                            
                    }  
                    
                }    
                
            }
            
            
            return fList;
        }

    //Added by Jammi Dee 05/28/2013
    //This function will create the missing system folders
    public String makeSystemDir() throws Exception, IOException, SQLException {
        
            // Get the path of the system here
            String fna;
            String fnb;
            
            fileUrl = null; 
            fileUrl = this.getClass().getResource("systemMediaLib.class");
            fna = fileUrl.getPath();
            fnb = fileUrl.getPath();
            
            fna = fna.substring(0, fna.indexOf("WEB-INF"));
            fnb = fnb.substring(0, fnb.indexOf("WEB-INF"));

            fna = fna + "customdata/temp";
            fna = URLDecoder.decode( fna );
            
            fnb = fnb + "customdata/uploads";
            fnb = URLDecoder.decode( fnb );            
            
            //Create the temp folder
            File f = new File( fna );
            if( !f.exists() ){
             
                f.mkdir();
                    
            }            
            
            //Create the uploads folder
            File f1 = new File( fnb );
            if( !f1.exists() ){
             
                f1.mkdir();
                    
            }  
            
            
            return fna;
        }
        

    /**
     * @return
	 */
	public int getColCount() {
		return colCount;
	}

	/**
	 * @param i
	 */
	public void setColCount(int i) {
		colCount = i;
	}

	/**
	 * @return
	 */
	public String getDriver() {
		return driver;
	}

	/**
	 * @param string
	 */
	public void setDriver(String string) {
		driver = string;
	}

	/**
	 * @return
	 */
	public String getPw() {
		return pw;
	}

	/**
	 * @return
	 */
	public String getQuerystring() {
		return querystring;
	}

	/**
	 * @return
	 */
	public String getTablename() {
		return tablename;
	}

	/**
	 * @return
	 */
	public String getUser() {
		return user;
	}

	/**
	 * @param string
	 */
	public void setPw(String string) {
		pw = string;
	}

	/**
	 * @param string
	 */
	public void setQuerystring(String string) {
		querystring = string;
	}

	/**
	 * @param string
	 */
	public void setTablename(String string) {
		tablename = string;
	}

	/**
	 * @param string
	 */
	public void setUser(String string) {
		user = string;
	}
    
}
