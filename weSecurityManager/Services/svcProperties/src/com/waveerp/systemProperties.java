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
 * Date: 06/01/2012
 * Modified by: Jammi Dee 06/01/2012
 * 
*/

package com.waveerp;

import java.io.*;
import java.util.*;

import java.io.File; 
import java.io.FileReader; 
import java.io.IOException; 
import java.util.Properties; 

import java.net.URL;
import java.net.URLDecoder;

public class systemProperties extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {

    String str, key;

    public systemProperties() {
       super(INFO);
    }

  public String ReadProperty(String pKey){
    
        String result;
        result = "";
    
        try{
            
            int check = 0;
            
            String fna;
            URL fileUrl;   
            
            fileUrl = null; 
            fileUrl = this.getClass().getResource("systemProperties.class");
            fna = fileUrl.getPath();
            fna = fna.substring(0, fna.indexOf("WEB-INF"));  
            
            fna = fna + "/WEB-INF/classes/" + "dbwaveerp" + ".properties";
            fna = URLDecoder.decode(fna);
            
            while(check == 0){
                check = 1;
                BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
                File f = new File(fna);
                
                if(f.exists()){
                    
                    Properties pro = new Properties();
                    FileInputStream in = new FileInputStream(f);
                    pro.load(in);
                    result = pro.getProperty(pKey);
                    
                    return result;
                    
                } else {
                    
                    check = 0;
                    
                    return "File not found!";
                    
                }
            }
        
        } catch(IOException e){
            
            return e.getMessage();
            
        }
        
        return result;
        
    }

  public String ReadProperty(String pFile, String pKey){
    
        String result;
        result = "";
    
        try{
            
            int check = 0;
            
            String fna;
            
            fna = pFile ;
            
            while(check == 0){
                check = 1;
                BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
                File f = new File(fna);
                
                if(f.exists()){
                    
                    Properties pro = new Properties();
                    FileInputStream in = new FileInputStream(f);
                    pro.load(in);
                    result = pro.getProperty(pKey);
                    
                    return result;
                    
                } else {
                    
                    check = 0;
                    
                    return "File not found!";
                    
                }
            }
        
        } catch(IOException e){
            
            return e.getMessage();
            
        }
        
        return result;
        
    }



    public String WriteProperty(String pKey, String pValue){
        
        FileReader fr = null;
        
        try{
            
            String fna;
            URL fileUrl;   
            
            fileUrl = null; 
            fileUrl = this.getClass().getResource("systemProperties.class");
            fna = fileUrl.getPath();
            fna = fna.substring(0, fna.indexOf("WEB-INF"));  
            
            fna = fna + "/WEB-INF/classes/" + "dbwaveerp" + ".properties";
            fna = URLDecoder.decode(fna);
            
            fr = new FileReader(new File(fna));
            Properties prop = new Properties();
            prop.load(fr);
            
            prop.setProperty(pKey, pValue);

            prop.store(new FileOutputStream( fna ),null);

            return "SUCCESS";
            
            
        } catch(Exception e) {
            
            return "FAILED";
            
        } finally {
            
            try {
                
                fr.close();
                
                return "SUCCESS";
                
            } catch (IOException e) {     
                
                return "FAILED";             
            }            
            
        }
        
        //return "SUCCESS";
        
    }


    public String WriteProperty(String pFile, String pKey, String pValue){
        
        FileReader fr = null;
        
        try{
            
            String fna;
            
            fna = pFile ;
            fna = URLDecoder.decode(fna);
            
            fr = new FileReader(new File(fna));
            Properties prop = new Properties();
            prop.load(fr);
            
            prop.setProperty(pKey, pValue);

            prop.store(new FileOutputStream( fna ),null);

            return "SUCCESS";
            
            
        } catch(Exception e) {
            
            return "FAILED";
            
        } finally {
            
            try {
                
                fr.close();
                
                return "SUCCESS";
                
            } catch (IOException e) {     
                
                return "FAILED";             
            }            
            
        }
        
        //return "SUCCESS";
        
    }


}
