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
 * Date: 06/03/2012
 * Modified by: Jammi Dee 06/12/2012 3:15pm
 * 
*/

package com.waveerp;

import java.io.*;

import org.apache.log4j.Logger; 
import org.apache.log4j.PropertyConfigurator;
import org.apache.log4j.Level;
import org.apache.log4j.SimpleLayout;
import org.apache.log4j.HTMLLayout;
import org.apache.log4j.FileAppender;
import org.apache.log4j.WriterAppender;

import java.net.URL;
import java.net.URLDecoder;

public class systemLgger extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {

    public static final String TEMP_DIR     = "/customdata/temp/" ;
    public static final String REPO_DIR     = "/customdata/repository/" ;

    public systemLgger() {
       super(INFO);
    }


    public String erpLog() {
    
        URL fileUrl;
        Logger logger = Logger.getRootLogger();
        
        //SimpleLayout layout = new SimpleLayout();
        HTMLLayout layout = new HTMLLayout();
        
        // Get the path of the system here
        String fna;
        String fnb;

        fileUrl = null; 
        fileUrl = this.getClass().getResource("systemLgger.class");
        fna = fileUrl.getPath();
        fna = fna.substring(0, fna.indexOf("WEB-INF"));

        fna = fna + REPO_DIR + "dbwaveerp.html";
        fna = URLDecoder.decode( fna );     
        fnb = REPO_DIR + "dbwaveerp.html";   
        
        WriterAppender appender = null;
      
        try {
          
            FileOutputStream output = new FileOutputStream( fna );
            appender = new WriterAppender(layout,output);
         
        } catch(Exception e) {
          
        }        
        
        logger.addAppender(appender);
        logger.setLevel((Level) Level.DEBUG);
      
        logger.debug("This is a test DEBUG message.");
        logger.info("Created by Wave ERP using log4j library.");
      
        return fnb;
    
    }
    
    
    public String erpLog2(String pLevel, String pMessage) {
        
        return erpLog3("", pLevel, pMessage);
        
    }    
    
    public String erpLog3(String pFile, String pLevel, String pMessage) {
        
        URL fileUrl;
        Logger logger = Logger.getRootLogger();
        
        //SimpleLayout layout = new SimpleLayout();
        HTMLLayout layout = new HTMLLayout();
        
        // Get the path of the system here
        String fna;
        String fnb;

        fileUrl = null; 
        fileUrl = this.getClass().getResource("systemLgger.class");
        fna = fileUrl.getPath();
        fna = fna.substring(0, fna.indexOf("WEB-INF"));
        if(pFile == null){
            pFile = "";
        }
        
        if (pFile == "") {
            
            fna = fna + REPO_DIR + pFile;
            fnb = REPO_DIR + pFile;
            
        } else {
            
            fna = fna + REPO_DIR + "dbwaveerp.html";
            fnb = REPO_DIR + "dbwaveerp.html";
        }
        
        fna = URLDecoder.decode( fna );     
            
        
      WriterAppender appender = null;
      
      try {
          
         FileOutputStream output = new FileOutputStream( fna );
         appender = new WriterAppender(layout,output);
         
      } catch(Exception e) {
          
      }        
        
      logger.addAppender(appender);
      logger.setLevel((Level) Level.DEBUG);
      
      if ( pLevel == "DEBUG" ){
          
          logger.debug( pMessage );
          
      } else if ( pLevel == "WARN" ) {
          
          logger.warn( pMessage );
          
      } else if ( pLevel == "ERROR" ) {
          
          logger.error( pMessage );
          
      } else if ( pLevel == "FATAL" ) {
          
          logger.fatal( pMessage );
          
      } else {
          
          logger.info( pMessage );
          
      }
      
      return fnb;
        
    }


    // Added by Jammi Dee 06/10/2012
    public String erpLogFileRelativePath(String pFile) {
        
        URL fileUrl;
    
        // Get the path of the system here
        String fna;
        String fnb;

        fileUrl = null; 
        fileUrl = this.getClass().getResource("systemLgger.class");
        fna = fileUrl.getPath();
        fna = fna.substring(0, fna.indexOf("WEB-INF"));
        
        if(pFile == null){
            pFile = "";
        }
        
        if (pFile == "") {
            
            fna = fna + REPO_DIR + pFile;
            fnb = REPO_DIR + pFile;
            
        } else {
            
            fna = fna + REPO_DIR + "dbwaveerp.html";
            fnb = REPO_DIR + "dbwaveerp.html";
        }
        
        fna = URLDecoder.decode( fna );     
      
      return fnb;
        
    }

}
