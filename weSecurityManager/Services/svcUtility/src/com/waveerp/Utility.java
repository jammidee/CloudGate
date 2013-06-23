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
 * Date: 05/26/2012
 * Modified by: Jammi Dee 05/26/2012
 * 
*/

package com.waveerp;

/*

Project: Wave ERP Framework
Service Name: Utility
Created : Joel M. Damaso
Date: 01/26/2012
Modified: 04/29/2012
*/

import java.util.List;
import java.security.*;
import java.io.*;

import com.wavemaker.runtime.RuntimeAccess;

import com.dbwaveerp.Dbwaveerp;
import com.dbwaveerp.data.Tbluser;


public class Utility extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {

private Dbwaveerp dbServices = (Dbwaveerp) RuntimeAccess.getInstance().getService(Dbwaveerp.class);

    public Utility() {
       super(INFO);
    }

  /**
  * check whether email address already exist 
  *
  * @param  inEmail  incoming email from client
  * @return          return true if email exist
  */
  public Boolean retEmail(String inEmail) {
    try{

      // call the query directly.
      if (dbServices.getUserByEmail(inEmail, null)!=null) {
        return true;
      } else {
       return false;
      }
    
    } catch(Exception e) {
      log(ERROR, "Error in method retEmail: ", e);
      return false;
    }
  }   
  
 
  /**
  *  checks a given email address
  *
  *  @return true if email format is correct
  */
  public boolean validateEmail(String inEmail){
    String EMAIL_REGEX = "^[\\w-_\\.+]*[\\w-_\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$";
    boolean b = inEmail.matches(EMAIL_REGEX);
    return b;
  }
  
  /**
  *  convert text to md5 striin
  *
  *  @return code a value in md5 string
  */
  public static String encryptMD5(String code){
    try{      
      MessageDigest md = MessageDigest.getInstance("MD5");      
      byte[] input = code.getBytes(); //"UTF8");      
      input=md.digest(input);     
      code = toHexadecimal(input); //new String(input,"UTF8");
      
      return code;
    }catch(Exception e){
      
      return code;
    }
    
  } 
 /**
  *  convert byte[] input to hexadecimal string
  *
  *  @return res a value in hexadecimal string
  */
  private static String toHexadecimal(byte[] datos) 
  { 
            String res=""; 
            ByteArrayInputStream input = new ByteArrayInputStream(datos); 
            String cadAux; 
            boolean ult0=false;
            int leido = input.read(); 
            while(leido != -1) 
            { 
                    cadAux = Integer.toHexString(leido); 
                    if(cadAux.length() < 2){ //set a zero
                            res += "0";
                            if(cadAux.length() == 0)
                              ult0=true;
                    }else{ ult0=false;}                    
                    res += cadAux; 
                    leido = input.read(); 
            } 
            if(ult0)//remove zero if this a  isolated character
        res=
                res.substring(0, res.length()-2)+res.charAt(res.length()-1);
            return res; 
  }

  //Added by Jammi Dee 06/06/2013
  public long getSystemFreeMemory() {
      
    long iFree       = 0;
      
    try{

        iFree = Runtime.getRuntime().freeMemory() / 1024;
    
    } catch(Exception e) {
        
      log(ERROR, "Error in method getSystemFreeMemory: ", e);
      return -99;
      
    }
    
    return iFree;
    
  }  

  //Added by Jammi Dee 06/06/2013
  public long getSystemTotalMemory() {
      
    long iTotal       = 0;
      
    try{

        iTotal = Runtime.getRuntime().totalMemory() / 1024;
    
    } catch(Exception e) {
        
      log(ERROR, "Error in method getSystemTotalMemory: ", e);
      return -99;
      
    }
    
    return iTotal;
    
  }
  
  //Added by Jammi Dee 06/06/2013
  public long getSystemMaximumMemory() {
      
    long iTotal       = 0;
      
    try{

        iTotal = Runtime.getRuntime().maxMemory()/1024;
    
    } catch(Exception e) {
        
      log(ERROR, "Error in method getSystemMaximumMemory: ", e);
      return -99;
      
    }
    
    return iTotal;
    
  }
  
  //Added by Jammi Dee 06/10/2013
  public String getAvailableVsFreeVsUsedMemory() {
      
    String strData       = "";
      
    try{
        
        long memMax = getSystemMaximumMemory();
        long memCur = getSystemTotalMemory();
        long memLef = memMax - memCur;

        long memAlloc = memCur;
        long memFree  = getSystemFreeMemory();
        long memUsed = memAlloc - memFree;
        
        strData = "Available(" + memLef + " Kb)," + memLef + ",Free(" + memFree + " Kb)," + memFree + ",Used(" + memUsed + " Kb)," + memUsed + ",";
    
    } catch(Exception e) {
        
      log(ERROR, "Error in getMaximumVsCurrentMemory: ", e);
      return "ERROR";
      
    }
    
    return strData;
    
  }  
  

  //Added by Jammi Dee 06/10/2013
  public String getAllocatedVsAvailableMemory() {
      
    String strData       = "";
      
    try{
        
        long memMax = getSystemMaximumMemory();
        long memCur = getSystemTotalMemory();
        long memLef = memMax - memCur;
        
        strData = "Allocated(" + memCur + " Kb)," + memCur + ",Available(" + memLef + " Kb)," + memLef + ",";
    
    } catch(Exception e) {
        
      log(ERROR, "Error in getMaximumVsCurrentMemory: ", e);
      return "ERROR";
      
    }
    
    return strData;
    
  }     
  
  //Added by Jammi Dee 06/10/2013
  public String getFreeVsUsedMemory() {
      
    String strData       = "";
      
    try{
        
        long memAlloc = getSystemTotalMemory();
        long memFree  = getSystemFreeMemory();
        long memUsed = memAlloc - memFree;
        
        strData = "Free(" + memFree + " Kb)," + memFree + ",Used(" + memUsed + " Kb)," + memUsed + ",";
    
    } catch(Exception e) {
        
      log(ERROR, "Error in getAllocatedVsFreeMemory: ", e);
      return "ERROR";
      
    }
    
    return strData;
    
  }  
  
  //Added by Jammi Dee 06/06/2013
  public String getSystemOSName() {
      
    String strOSName       = "";
      
    try{ 

        strOSName = System.getProperty("os.name") + " : " + System.getProperty("os.version") + " : " + System.getProperty("os.arch") ;
    
    } catch(Exception e) {
        
      log(ERROR, "Error in method getSystemOSName: ", e);
      return "ERROR";
      
    }
    
    return strOSName;
    
  }    

    //Added by Jammi Dee 06/06/2013
    public String systemInfoToHtml() {
        
        String tableHeaderColor    = "#576EC9";
        
        String dataAlterColorOdd    = "#F5F5F5";
        String dataAlterColorEven   = "#DDDDDD";

        String colAlterColorOdd    = "#E3E3E3";
        String colAlterColorEven   = "#C9C9C9";

        String rowAlterColorOdd    = "#F5D3D5";
        String rowAlterColorEven   = "#CDD6FA";
        
        
        String strData = "";      
        
        //Generate table
        strData = strData + "<table border=\"1\" width=\"100%\">";
        strData = strData + "       <tr>";
        strData = strData + "               <td bgcolor=\"" + tableHeaderColor + "\" align=\"center\" colspan=\"" + "2" + "\">System Information</td>";
        strData = strData + "       </tr>";
        
        strData = strData + "       <tr>";
        strData = strData + "               <td align=\"center\" width=\"180\">Properties</td><td bgcolor=\"" + rowAlterColorEven + "\" align=\"center\" >Values</td>";
        strData = strData + "       </tr>";       

        strData = strData + "       <tr>";
        strData = strData + "           <td bgcolor=\"" + rowAlterColorEven + "\" >" + "OS Name" + "</td>";
        strData = strData + "           <td bgcolor=\"" + dataAlterColorEven + "\" align=\"right\" >" + System.getProperty("os.name") + "</td>";
        strData = strData + "       </tr>"; 

        strData = strData + "       <tr>";
        strData = strData + "           <td bgcolor=\"" + rowAlterColorOdd + "\" >" + "OS Version" + "</td>";
        strData = strData + "           <td bgcolor=\"" + dataAlterColorOdd + "\" align=\"right\" >" + System.getProperty("os.version") + "</td>";
        strData = strData + "       </tr>"; 

        strData = strData + "       <tr>";
        strData = strData + "           <td bgcolor=\"" + rowAlterColorEven + "\" >" + "OS Arch" + "</td>";
        strData = strData + "           <td bgcolor=\"" + dataAlterColorEven + "\" align=\"right\" >" + System.getProperty("os.arch") + "</td>";
        strData = strData + "       </tr>"; 

        strData = strData + "       <tr>";
        strData = strData + "           <td bgcolor=\"" + rowAlterColorOdd + "\" >" + "Username" + "</td>";
        strData = strData + "           <td bgcolor=\"" + dataAlterColorOdd + "\" align=\"right\" >" + System.getProperty("user.name") + "</td>";
        strData = strData + "       </tr>"; 

        strData = strData + "       <tr>";
        strData = strData + "           <td bgcolor=\"" + rowAlterColorEven + "\" >" + "User Home" + "</td>";
        strData = strData + "           <td bgcolor=\"" + dataAlterColorEven + "\" align=\"right\" >" + System.getProperty("os.home") + "</td>";
        strData = strData + "       </tr>"; 

        strData = strData + "       <tr>";
        strData = strData + "           <td bgcolor=\"" + rowAlterColorOdd + "\" >" + "Java Version" + "</td>";
        strData = strData + "           <td bgcolor=\"" + dataAlterColorOdd + "\" align=\"right\" >" + System.getProperty("java.version") + "</td>";
        strData = strData + "       </tr>"; 

        strData = strData + "       <tr>";
        strData = strData + "           <td bgcolor=\"" + rowAlterColorEven + "\" >" + "Java Home" + "</td>";
        strData = strData + "           <td bgcolor=\"" + dataAlterColorEven + "\" align=\"right\" >" + System.getProperty("java.home") + "</td>";
        strData = strData + "       </tr>"; 

        strData = strData + "       <tr>";
        strData = strData + "           <td bgcolor=\"" + rowAlterColorOdd + "\" >" + "Java Vendor" + "</td>";
        strData = strData + "           <td bgcolor=\"" + dataAlterColorOdd + "\" align=\"right\" >" + System.getProperty("java.vendor") + "</td>";
        strData = strData + "       </tr>"; 

        strData = strData + "       <tr>";
        strData = strData + "           <td bgcolor=\"" + rowAlterColorEven + "\" >" + "Java Vendor URL" + "</td>";
        strData = strData + "           <td bgcolor=\"" + dataAlterColorEven + "\" align=\"right\" >" + System.getProperty("java.vendor.url") + "</td>";
        strData = strData + "       </tr>"; 

        strData = strData + "       <tr>";
        strData = strData + "           <td bgcolor=\"" + rowAlterColorOdd + "\" >" + "User Dir" + "</td>";
        strData = strData + "           <td bgcolor=\"" + dataAlterColorOdd + "\" align=\"right\" >" + System.getProperty("user.dir") + "</td>";
        strData = strData + "       </tr>"; 

        strData = strData + "       <tr>";
        strData = strData + "           <td bgcolor=\"" + rowAlterColorEven + "\" >" + "Java VM Name" + "</td>";
        strData = strData + "           <td bgcolor=\"" + dataAlterColorEven + "\" align=\"right\" >" + System.getProperty("java.vm.name") + "</td>";
        strData = strData + "       </tr>"; 

        strData = strData + "       <tr>";
        strData = strData + "           <td bgcolor=\"" + rowAlterColorOdd + "\" >" + "Java VM Version" + "</td>";
        strData = strData + "           <td bgcolor=\"" + dataAlterColorOdd + "\" align=\"right\" >" + System.getProperty("java.vm.version") + "</td>";
        strData = strData + "       </tr>"; 

        strData = strData + "       <tr>";
        strData = strData + "           <td bgcolor=\"" + rowAlterColorEven + "\" >" + "Java VM Vendor" + "</td>";
        strData = strData + "           <td bgcolor=\"" + dataAlterColorEven + "\" align=\"right\" >" + System.getProperty("java.vm.vendor") + "</td>";
        strData = strData + "       </tr>"; 




        strData = strData + "</table>";     
        
        return strData;
        
    }    



}
