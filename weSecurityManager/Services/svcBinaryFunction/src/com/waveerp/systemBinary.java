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
 * Created by 05/02/2012
 * Date: 05/24/2012
 * Modified by: Jammi Dee 05/02/2012
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

// Added by Jammi Dee 05/24/2012
// Needed for reading Wave ERP registry
import com.waveerp.registrySystem;

public class systemBinary extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {
    
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
	
	private String querystring  = "select * from tbltickets where ticketid='100034' ";	 
	private int colCount		=   Integer.parseInt("2");
	private String[] colTypes;	// keep here all the column types


    public systemBinary() {
       super(INFO);
    }
    
    public String ReadFilefromMySQLToFile(String pTicketId,
                                          String pUserId,
                                          String pFileName,
                                          String pEntity) throws Exception, IOException, SQLException {
        
            ResultSet rs;
            Statement ss;
            
            Class.forName(this.getDriver());
            Connection conn = DriverManager.getConnection(db, user, pw);
            String READ_FILE = "select filedata from tblattachment where"+
                                  " ticketid ='" + pTicketId + "' and userid = '" + pUserId + "' and "+
                                  " filename = '" + pFileName + "' and entityid = '" + pEntity + "';";

            // Get the path of the system here
            String fna;
            String fnb;
            fileUrl = null; 
            fileUrl = this.getClass().getResource("systemBinary.class");
            fna = fileUrl.getPath();
            fna = fna.substring(0, fna.indexOf("WEB-INF"));

            fna = fna + "/customdata/temp/" + pFileName;
            fna = URLDecoder.decode( fna );
            fnb = "/customdata/temp/" + pFileName;
            try {
                
                ss = conn.createStatement();
                rs = ss.executeQuery(READ_FILE);
                
                while (rs.next()) {
                    
                    //Blob blob = rs.getBlob("ticketimg");
                    
                    int b;
                    InputStream bis = rs.getBinaryStream("filedata");
                    FileOutputStream f = new FileOutputStream(fna);
                    while ((b = bis.read()) >= 0) {
                        f.write(b);
                    }
                    f.close();
                    bis.close();                    
                    
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
    
    public String saveAttachment(String pTicketId,
                                 String pUserid,
                                 String pEntity){
                                     
        List<Tbltempattachment> myList = null;
        Iterator<Tbltempattachment> iterator = null;
        String result = null;
        String fna;
    try{
         
         dbServices.begin();
        
          Session session = dbServices.getDataServiceManager().getSession();
          String sQuery = "select * from Tbltempattachment where userid = '" + pUserid + "' and entityid = '" + pEntity + "';";   
        
          SQLQuery query = session.createSQLQuery(sQuery);
          query.addEntity(Tbltempattachment.class);
          myList = query.list();
         
         dbServices.commit(); 
        
        iterator = myList.iterator();        
            
        while (iterator.hasNext()) {
            
            Tbltempattachment attachment = (Tbltempattachment) iterator.next();
            
            String entity   = (String) attachment.getEntityid();
            String userid   = (String) attachment.getUserid();
            String filename = (String) attachment.getFilename();
            String filext   = (String) attachment.getFilext();
            
            result = InsertAttachmentToMySql(userid,entity,pTicketId,filename,filext);
            execNonQuery("delete from tbltempattachment where "+
                         "userid = '" + userid + "' and entityid = '" + entity + "'"+
                         " and filename = '" + filename + "';");
            
            fileUrl = null; 
            fileUrl = this.getClass().getResource("systemBinary.class");
            fna = fileUrl.getPath();
            fna = fna.substring(0, fna.indexOf("WEB-INF"));
        
            fna = fna + "customdata/uploads/" + filename;
            fna = URLDecoder.decode(fna);
            
            File f1 = new File(fna);
            f1.delete();
        
        }
        return result;
    }catch (Exception e){
      dbServices.rollback();
      return "FAIL";
    }
    
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
    
    public String deleteFile(String pUserid,
                             String pEntity,
                             String pFileName)throws Exception, IOException, SQLException{

            Class.forName(this.getDriver());
            Connection conn = DriverManager.getConnection(db, user, pw);
            String DELETE_ATTACHMENT = "delete from tbltempattachment where "+
                                       "userid = ? and entityid = ? and filename = ?;";
            
            int mid;
            String ext;
            String fna;
            
            fileUrl = null; 
            fileUrl = this.getClass().getResource("systemBinary.class");
            fna = fileUrl.getPath();
            fna = fna.substring(0, fna.indexOf("WEB-INF"));
            
            fna = fna + "/customdata/uploads/" + pFileName;
            fna = URLDecoder.decode(fna);
            
            mid = pFileName.lastIndexOf(".");
            ext = pFileName.substring(mid + 1);
            
            FileInputStream fis = null;
            PreparedStatement ps = null;
            
            try {
                
                conn.setAutoCommit(false);
                //File file = new File(fna);
                //fis = new FileInputStream(file);
                ps = conn.prepareStatement(DELETE_ATTACHMENT);
                ps.setString(1,pUserid);
                ps.setString(2,pEntity);
                ps.setString(3,pFileName);
                int s = ps.executeUpdate();
                
                conn.commit();
                
                
            File f1 = new File(fna);
            f1.delete();
            
            } catch (Exception e) {
                 fna = "Catch 1: " + e.getMessage();
                 return fna;
            } finally {
                ps.close();
                fis.close();
            }
               return fna;
       
    }
    
    public String InsertTempAttachmentToMySql(String pUserid,
                                              String pEntity,
                                              String pTicketId,
                                              String pFileName) throws Exception, IOException, SQLException {
            
            Class.forName(this.getDriver());
            Connection conn = DriverManager.getConnection(db, user, pw);
            String INSERT_ATTACHMENT = "insert tbltempattachment(entityid,ticketid,filename,filext,userid)"+
                                       "values(?,?,?,?,?);";
            int mid;
            String ext;
            String fna;
            
            
            fileUrl = null; 
            fileUrl = this.getClass().getResource("systemBinary.class");
            fna = fileUrl.getPath();
            fna = fna.substring(0, fna.indexOf("WEB-INF"));
            
            fna = fna + "/customdata/uploads/" + pFileName;
            fna = URLDecoder.decode(fna);
            
            mid = pFileName.lastIndexOf(".");
            ext = pFileName.substring(mid + 1);
            
            FileInputStream fis = null;
            PreparedStatement ps = null;
            
            try {
                
                conn.setAutoCommit(false);
                File file = new File(fna);
                fis = new FileInputStream(file);
                ps = conn.prepareStatement(INSERT_ATTACHMENT);
                ps.setString(1,pEntity);
                ps.setString(2,pTicketId);
                ps.setString(3,pFileName);
                ps.setString(4,ext);
                ps.setString(5,pUserid);
                int s = ps.executeUpdate();
                conn.commit();
                
            //File f1 = new File(fna);
            //f1.delete();
            } catch (Exception e) {
                 fna = "Catch 1: " + e.getMessage();
                 return fna;
            } finally {
                ps.close();
                fis.close();
            }
            return fna;
    }
    
    
    
    public String InsertAttachmentToMySql(String pUserId,
                                          String pEntity,
                                          String pTicketId,
                                          String pFileName,
                                          String pFilext) throws Exception, IOException, SQLException {
            
            Class.forName(this.getDriver());
            Connection conn = DriverManager.getConnection(db, user, pw);
            String INSERT_ATTACHMENT = "insert tblattachment(entityid,ticketid,filename,filext,userid,filedata)"+
                                       "values(?,?,?,?,?,?);";
            
            String fna;
            String fnb;
            String delRes;
            
            fileUrl = null; 
            fileUrl = this.getClass().getResource("systemBinary.class");
            fna = fileUrl.getPath();
            fna = fna.substring(0, fna.indexOf("WEB-INF"));
            
            fna = fna + "/customdata/uploads/" + pFileName;
            fna = URLDecoder.decode(fna);
            
            //mid = pFileName.lastIndexOf(".");
            //ext = pFileName.substring(mid + 1);
            
            FileInputStream fis = null;
            PreparedStatement ps = null;
            
            try {
                
                conn.setAutoCommit(false);
                
                 File file = new File(fna);
                 fis = new FileInputStream(file);
                 ps = conn.prepareStatement(INSERT_ATTACHMENT);
                 ps.setString(1,pEntity);
                 ps.setString(2,pTicketId);
                 ps.setString(3,pFileName);
                 ps.setString(4,pFilext);
                 ps.setString(5,pUserId);
                 ps.setBinaryStream(6, fis, (int) file.length());
                 int s = ps.executeUpdate(); 
                
                conn.commit();
                
            //deleteFile(pUserId,pEntity,pFileName);
            
            } catch (Exception e) {
                 fna = "Catch 1: " + pFileName;
                 //fna = pFileName;
                 return fna;
            } finally {
                ps.close();
                fis.close();
                
            }
            
            return fna;
    }
    
    public String InsertPictureToMySql(String ticketId) throws Exception, IOException, SQLException {
        
            Class.forName(this.getDriver());
            Connection conn = DriverManager.getConnection(db, user, pw);
            String INSERT_PICTURE = "update tbltickets set ticketimg = ? where ticketid ='" + ticketId + "' ";

            // Get the path of the system here
            String fna;
            fileUrl = null; 
            fileUrl = this.getClass().getResource("systemBinary.class");
            fna = fileUrl.getPath();
            fna = fna.substring(0, fna.indexOf("WEB-INF"));

            fna = URLDecoder.decode( fna + "/customdata/uploads/limbo3.jpg" );

            FileInputStream fis = null;
            PreparedStatement ps = null;
            
            try {
                
                conn.setAutoCommit(false);
                File file = new File(fna);
                fis = new FileInputStream(file);
                ps = conn.prepareStatement(INSERT_PICTURE);
                ps.setBinaryStream(1, fis, (int) file.length());
                int s = ps.executeUpdate();
                conn.commit();
            } catch (Exception e) {
                 fna = "Catch 1: " + e.getMessage();
                 return fna;
            } finally {
                ps.close();
                fis.close();
            }
            
            return fna;
    }
    
    public String ReadImagefromMySQLToFile(String ticketId) throws Exception, IOException, SQLException {
        
            ResultSet rs;
            Statement ss;
            
            Class.forName(this.getDriver());
            Connection conn = DriverManager.getConnection(db, user, pw);
            String READ_PICTURE = "select ticketimg from tbltickets where ticketid ='" + ticketId + "' ";

            // Get the path of the system here
            String fna;
            fileUrl = null; 
            fileUrl = this.getClass().getResource("dbwaveerp.html");
            fna = fileUrl.getPath();
            fna = fna.substring(0, fna.indexOf("WEB-INF"));

            fna = fna + "/customdata/images/" + ticketId + ".jpg";
            fna = URLDecoder.decode( fna );
            
            try {
                
                ss = conn.createStatement();
                rs = ss.executeQuery(READ_PICTURE);
                
                while (rs.next()) {
                    
                    //Blob blob = rs.getBlob("ticketimg");
                    
                    int b;
                    InputStream bis = rs.getBinaryStream("ticketimg");
                    FileOutputStream f = new FileOutputStream(fna);
                    while ((b = bis.read()) >= 0) {
                        f.write(b);
                    }
                    f.close();
                    bis.close();                    
                    
                }    
                
                rs.close();
                ss.close();

            } catch (Exception e) {
                 fna = e.getMessage();
                 return fna;
            } finally {
                
            }
            
            return fna;
        }
    
      
      
    // Added by Jammi Dee 05/24/2012
    /**
     * These functions are specific for the manipulation of media library
    */
    public String InsertMediaToMySql(String pUserId,
                                          String pEntity,
                                          String pAppId,
                                          String pFileName,
                                          String pFilext) throws Exception, IOException, SQLException {
            
            // Call the registry management system                    
            registrySystem rs = new registrySystem();            
 
            // Added by Jammi Dee 04/28/2012
            String url         = rs.readRegistry("NA", "NA", "NA", "DBURL");
            String dbName      = rs.readRegistry("NA", "NA", "NA", "DBDATABASE");
            String driver      = rs.readRegistry("NA", "NA", "NA", "DBDRIVER");
            String userName    = rs.readRegistry("NA", "NA", "NA", "DBUSER");
            String password    = rs.readRegistry("NA", "NA", "NA", "DBPASSWORD"); 
 
            Class.forName(driver);
            Connection conn = DriverManager.getConnection(url+dbName,userName,password);
            String INSERT_ATTACHMENT = "insert tblmedialib(entity,appid,filename,filext,userid,filedata)"+
                                       "values(?,?,?,?,?,?);";
            
            String fna;
            String fnb;
            String delRes;
            
            fileUrl = null; 
            fileUrl = this.getClass().getResource("systemBinary.class");
            fna = fileUrl.getPath();
            fna = fna.substring(0, fna.indexOf("WEB-INF"));
            
            fna = fna + "/customdata/uploads/" + pFileName;
            fna = URLDecoder.decode(fna);
            
            //mid = pFileName.lastIndexOf(".");
            //ext = pFileName.substring(mid + 1);
            
            FileInputStream fis = null;
            PreparedStatement ps = null;
            
            try {
                
                conn.setAutoCommit(false);
                
                 File file = new File(fna);
                 fis = new FileInputStream(file);
                 ps = conn.prepareStatement(INSERT_ATTACHMENT);
                 ps.setString(1,pEntity);
                 ps.setString(2,pAppId);
                 ps.setString(3,pFileName);
                 ps.setString(4,pFilext);
                 ps.setString(5,pUserId);
                 ps.setBinaryStream(6, fis, (int) file.length());
                 int s = ps.executeUpdate(); 
                
                conn.commit();
                
            //deleteFile(pUserId,pEntity,pFileName);
            
            } catch (Exception e) {
                 fna = "Catch 1: " + pFileName;
                 //fna = pFileName;
                 return fna;
            } finally {
                ps.close();
                fis.close();
                
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
