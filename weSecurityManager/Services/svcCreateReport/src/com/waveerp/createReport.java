package com.waveerp;

/* 04/10/2012 5:12pm
 Created by Joel M. Damaso
 
 To create another script like this use:
 svcReport<tablename>
 Package: com.waveerp.rep<tablename>
 
 Copy the entire report() function
 
*/

// Needed by Jasper Reports
import net.sf.jasperreports.engine.JRResultSetDataSource;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.design.JasperDesign;
import net.sf.jasperreports.engine.xml.JRXmlLoader;
import net.sf.jasperreports.view.JasperViewer;
import java.sql.*;
import java.util.*;
import java.text.*;
//import java.io.*;
import java.net.URL;
//import java.net.URLConnection;
import java.net.URLDecoder;

import javax.servlet.http.*;
import javax.servlet.http.HttpSession;
import com.wavemaker.runtime.RuntimeAccess;

// Added by Jammi Dee 04/28/2012
// Needed for reading Wave ERP registry
import com.waveerp.registrySystem;

public class createReport extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {
    
   // Global Declaration
   HttpSession sess = RuntimeAccess.getInstance().getSession();
   HttpServletRequest requ = RuntimeAccess.getInstance().getRequest();
   
    public createReport() {
       super(INFO);
    }

   public String getReport(String pEntity, String pReportName) throws Exception {

        registrySystem rs = new registrySystem();

        URL fileUrl;
        String fna              = "";
        String localpath        = "";
        String templatepath     = "";
        String reportpath       = "";
        String webpath          = "";
        fileUrl                 = null;

        Connection conn         = null;
        String url              = "jdbc:mysql://localhost:3306/";
        String dbName           = "dbwaveerp";
        String driver           = "com.mysql.jdbc.Driver";
        String userName         = "root"; 
        String password         = "password";
        
        // Added by Jammi Dee 04/28/2012
        url         = rs.readRegistry("NA", "NA", "NA", "DBURL");
        dbName      = rs.readRegistry("NA", "NA", "NA", "DBDATABASE");
        driver      = rs.readRegistry("NA", "NA", "NA", "DBDRIVER");
        userName    = rs.readRegistry("NA", "NA", "NA", "DBUSER");
        password    = rs.readRegistry("NA", "NA", "NA", "DBPASSWORD");
    
        try {
            Class.forName(driver).newInstance();
            conn = DriverManager.getConnection(url+dbName,userName,password);

            // Get the path of the system here, relative path
            String fnb;
            fileUrl = null; 
            fileUrl = this.getClass().getResource("createReport.class");
            fna = fileUrl.getPath();
            fna = fna.substring(0, fna.indexOf("WEB-INF"));
            localpath = fna;
            
            // Create paths for the source of the report and the destination as well
            templatepath = URLDecoder.decode( fna + "customdata/reporttemplates/" + pReportName );
            reportpath = URLDecoder.decode( fna + "customdata/reportpdf/" + pReportName + ".pdf" );
            webpath = URLDecoder.decode( "customdata/reportpdf/" + pReportName + ".pdf" );

            // Load the template to the Jasper Report Engine
            JasperDesign jasperDesign = JRXmlLoader.load(templatepath);
            // Compile the loaded report
            JasperReport jasperReport = JasperCompileManager.compileReport(jasperDesign);
            // Create a report from database using the template
            JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport,null, conn);            
            // Write the report into PDF format
            JasperExportManager.exportReportToPdfFile(jasperPrint, reportpath);
      
            // Return the relative path of the report. This will
            // used by the caller in displaying.
            fna = webpath;
    
        } catch (Exception e) {
            
            e.printStackTrace();
            fna = "Catch 1: " + e.getMessage();
            return fna;
            
        } finally {
            try {
                if (conn != null) {
    		        conn.close();
		        }
	        } catch(Exception e) {
                
            fna = "Catch 2:" + e.getMessage();    
            return fna; //e.getMessage();
	        }	
        }

        return fna;
 
    }
   public String getReportWithParam(String pReportParam, String pReportName) throws Exception {

        registrySystem rs = new registrySystem();

        URL fileUrl;
        String fna              = "";
        String localpath        = "";
        String templatepath     = "";
        String reportpath       = "";
        String webpath          = "";
        fileUrl                 = null;

        Connection conn         = null;
        String url              = "jdbc:mysql://localhost:3306/";
        String dbName           = "dbwaveerp";
        String driver           = "com.mysql.jdbc.Driver";
        String userName         = "root"; 
        String password         = "password";
        
        // Added by Jammi Dee 04/28/2012
        url         = rs.readRegistry("NA", "NA", "NA", "DBURL");
        dbName      = rs.readRegistry("NA", "NA", "NA", "DBDATABASE");
        driver      = rs.readRegistry("NA", "NA", "NA", "DBDRIVER");
        userName    = rs.readRegistry("NA", "NA", "NA", "DBUSER");
        password    = rs.readRegistry("NA", "NA", "NA", "DBPASSWORD");
    
        try {
            Class.forName(driver).newInstance();
            conn = DriverManager.getConnection(url+dbName,userName,password);

            // Get the path of the system here, relative path
            String fnb;
            fileUrl = null; 
            fileUrl = this.getClass().getResource("createReport.class");
            fna = fileUrl.getPath();
            fna = fna.substring(0, fna.indexOf("WEB-INF"));
            localpath = fna;

            //Analyze parameters here
            String strPara    = pReportParam;
            String[] para       = strPara.split("\\|");
            
            String strVarname = "";
            String strType = "";
            String strValue = "";                 
            
            int size = para.length;
            int dLoop = 0;
            
            Map parameters  = new HashMap();         
            
            for (int i=0; i<size; i++){
                
                int                 intValue = 0;
                long                lngValue = 0;
                double              dobValue = 0.0;
                java.util.Date      datValue;                
                
                DateFormat formatter;
                formatter = new SimpleDateFormat("dd/MM/yyyy");
                datValue = (java.util.Date) formatter.parse("07/19/1972");
                 
                //tdata = para[i].toUpperCase();
                
                if( dLoop == 0 ){
                    
                    strVarname = para[i];
                    
                } else if( dLoop == 1 ) {   
                    
                    strType = para[i].toUpperCase().trim();
                    //tdata = tdata + i + strType;
                    
                } else if( dLoop == 2 ) {  
                    
                    strValue = para[i];
                    
                }
                
                //Process the command here and start a new command
                if( dLoop == 2 ){

                   //Process the commands 
                   if( strType.equals("STRING") ){
                       
                       parameters.put(strVarname , strValue );
                       
                   } else if( strType.equals("DATE") ){ 
                       
                       datValue = (java.util.Date) formatter.parse(strValue);
                       parameters.put(strVarname , datValue );
                       
                   } else if( strType.equals("TIME") ){       
                       
                       // Non yet
                       
                   } else if( strType.equals("INTEGER") ){
                       
                       intValue = Integer.parseInt(strValue);
                       parameters.put(strVarname , intValue );
                       
                   } else if( strType.equals("LONG") ){
                       
                       lngValue = Long.parseLong(strValue.trim());
                       parameters.put(strVarname , lngValue );
                       
                   } else if( strType.equals("DOUBLE") ){  
                       
                       dobValue = Double.parseDouble(strValue.trim());
                       parameters.put(strVarname , dobValue );
                       
                   } else if( strType.equals("NUMERIC") ){       
                       
                       dobValue = Double.parseDouble(strValue.trim());
                       parameters.put(strVarname , dobValue );
                       
                   }
                   
                   strVarname = "";
                   strType = "";
                   strValue = "";    
                   
                   dLoop = -1; //reset looper   
                    
                } //if(dLoop = 3)
                
                dLoop = dLoop + 1;
                
            } //for (int i=0; i<size; i++)            


            // Create paths for the source of the report and the destination as well
            templatepath = URLDecoder.decode( fna + "customdata/reporttemplates/" + pReportName );
            reportpath = URLDecoder.decode( fna + "customdata/reportpdf/" + pReportName + ".pdf" );
            webpath = URLDecoder.decode( "customdata/reportpdf/" + pReportName + ".pdf" );

            // Load the template to the Jasper Report Engine
            JasperDesign jasperDesign = JRXmlLoader.load(templatepath);
            // Compile the loaded report
            JasperReport jasperReport = JasperCompileManager.compileReport(jasperDesign);
            // Create a report from database using the template
            JasperPrint jasperPrint = null;
            if( size > 0 ){
            
                jasperPrint = JasperFillManager.fillReport(jasperReport, parameters, conn);
                
            } else {
                
                jasperPrint = JasperFillManager.fillReport(jasperReport, null, conn);
                
            }           
            
            // Write the report into PDF format
            JasperExportManager.exportReportToPdfFile(jasperPrint, reportpath);
      
            // Return the relative path of the report. This will
            // used by the caller in displaying.
            fna = webpath;
    
        } catch (Exception e) {
            
            e.printStackTrace();
            fna = "Catch 1: " + e.getMessage();
            return fna;
            
        } finally {
            try {
                if (conn != null) {
        	        conn.close();
		        }
	        } catch(Exception e) {
                
            fna = "Catch 2:" + e.getMessage();    
            return fna; //e.getMessage();
	        }	
        }

        return fna;
 
    }

   //Added by Jammi Dee 10/09/2012
   public String getMultiEngineReport(   
                                        String pDBDriver,
                                        String pDBUrl,
                                        String pDBUser,
                                        String pDBPassword, 
                                        String pReportPara,
                                        String pReportName,
                                        String pFormat
   
                                      ) throws Exception {

        //registrySystem rs = new registrySystem();
        if( pFormat == null ){
            pFormat = "PDF";
        }        

        URL fileUrl;
        String fna              = "";
        String localpath        = "";
        String templatepath     = "";
        String reportpath       = "";
        String webpath          = "";
        fileUrl                 = null;

        Connection conn         = null;
        
        String url              = pDBUrl;
        //String dbName           = "dbwaveerp";
        String driver           = pDBDriver;
        String userName         = pDBUser; 
        String password         = pDBPassword; 
        
        UUID guid = UUID.randomUUID();
    
        try {
            
            Class.forName(driver).newInstance();
            conn = DriverManager.getConnection(url,userName,password);

            // Get the path of the system here, relative path
            String fnb;
            fileUrl = null; 
            fileUrl = this.getClass().getResource("createReport.class");
            fna = fileUrl.getPath();
            fna = fna.substring(0, fna.indexOf("WEB-INF"));
            localpath = fna;
            
            //Analyze parameters here
            String strPara    = pReportPara;
            String[] para       = strPara.split("\\|");
            
            String strVarname = "";
            String strType = "";
            String strValue = "";                 
            
            int size = para.length;
            int dLoop = 0;
            
            Map parameters  = new HashMap();         
            
            for (int i=0; i<size; i++){
                
                int                 intValue = 0;
                long                lngValue = 0;
                double              dobValue = 0.0;
                java.util.Date      datValue;                
                
                DateFormat formatter;
                formatter = new SimpleDateFormat("dd/MM/yyyy");
                datValue = (java.util.Date) formatter.parse("07/19/1972");
                 
                //tdata = para[i].toUpperCase();
                
                if( dLoop == 0 ){
                    
                    strVarname = para[i];
                    
                } else if( dLoop == 1 ) {   
                    
                    strType = para[i].toUpperCase().trim();
                    //tdata = tdata + i + strType;
                    
                } else if( dLoop == 2 ) {  
                    
                    strValue = para[i];
                    
                }
                
                //Process the command here and start a new command
                if( dLoop == 2 ){

                   //Process the commands 
                   if( strType.equals("STRING") ){
                       
                       parameters.put(strVarname , strValue );
                       
                   } else if( strType.equals("DATE") ){ 
                       
                       datValue = (java.util.Date) formatter.parse(strValue);
                       parameters.put(strVarname , datValue );
                       
                   } else if( strType.equals("TIME") ){       
                       
                       // Non yet
                       
                   } else if( strType.equals("INTEGER") ){
                       
                       intValue = Integer.parseInt(strValue);
                       parameters.put(strVarname , intValue );
                       
                   } else if( strType.equals("LONG") ){
                       
                       lngValue = Long.parseLong(strValue.trim());
                       parameters.put(strVarname , lngValue );
                       
                   } else if( strType.equals("DOUBLE") ){  
                       
                       dobValue = Double.parseDouble(strValue.trim());
                       parameters.put(strVarname , dobValue );
                       
                   } else if( strType.equals("NUMERIC") ){       
                       
                       dobValue = Double.parseDouble(strValue.trim());
                       parameters.put(strVarname , dobValue );
                       
                   }
                   
                   strVarname = "";
                   strType = "";
                   strValue = "";    
                   
                   dLoop = -1; //reset looper   
                    
                } //if(dLoop = 3)
                
                dLoop = dLoop + 1;
                
            } //for (int i=0; i<size; i++)            
            
            // Create paths for the source of the report and the destination as well
            //templatepath    = URLDecoder.decode( fna + "customdata/temp/" + pReportName );
            //reportpath      = URLDecoder.decode( fna + "customdata/temp/" + pReportName + guid.toString() + ".pdf" );
            //webpath         = URLDecoder.decode( "customdata/temp/" + pReportName + guid.toString() + ".pdf" );

            if( pFormat.equals("PDF") == true ){
                
                // Create paths for the source of the report and the destination as well
                templatepath    = URLDecoder.decode( fna + "customdata/temp/" + pReportName );
                reportpath      = URLDecoder.decode( fna + "customdata/temp/" + pReportName + guid.toString() + ".pdf" );
                webpath         = URLDecoder.decode( "customdata/temp/" + pReportName + guid.toString() + ".pdf" );

                
            } else {
            
                // Create paths for the source of the report and the destination as well
                templatepath    = URLDecoder.decode( fna + "customdata/temp/" + pReportName );
                reportpath      = URLDecoder.decode( fna + "customdata/temp/" + pReportName + guid.toString() + ".html" );
                webpath         = URLDecoder.decode( "customdata/temp/" + pReportName + guid.toString() + ".html" );
       
            
            } 

            // Load the template to the Jasper Report Engine
            JasperDesign jasperDesign = JRXmlLoader.load(templatepath);
            // Compile the loaded report
            JasperReport jasperReport = JasperCompileManager.compileReport(jasperDesign);
            
            // Create a report from database using the template
            JasperPrint jasperPrint = null;
            if( size > 0 ){
            
                jasperPrint = JasperFillManager.fillReport(jasperReport, parameters, conn);
                
            } else {
                
                jasperPrint = JasperFillManager.fillReport(jasperReport, null, conn);
                
            }

            if( pFormat.equals("PDF") == true ){
                
                // Write the report into PDF format
                JasperExportManager.exportReportToPdfFile(jasperPrint, reportpath);
                
            } else {
            
                // Write the report into PDF format
                JasperExportManager.exportReportToHtmlFile(jasperPrint, reportpath);            
            
            }         

      
            // Return the relative path of the report. This will
            // used by the caller in displaying.
            fna = webpath;
    
        } catch (Exception e) {
            
            e.printStackTrace();
            fna = "Catch 1: " + e.getMessage();
            return fna;
            
        } finally {
            try {
                if (conn != null) {
                    conn.close();
    	        }
	        } catch(Exception e) {
                
            fna = "Catch 2:" + e.getMessage();    
            return fna; //e.getMessage();
	        }	
        }

        return fna;
 
    }




}
