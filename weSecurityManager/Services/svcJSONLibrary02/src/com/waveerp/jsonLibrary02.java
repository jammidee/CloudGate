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
 * 
*/

package com.waveerp;

/**
 * Created by Jammi Dee
 * Date :05/08/2012 8:49
 * Modified : 06/10/2012
 */

//import org.json.simple.JSONObject;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

//import org.json.JSONArray;
//import org.json.JSONObject;
//import org.json.JSONException;


import com.waveerp.*;

public class jsonLibrary02 extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {

    Connection con;
    Statement ps;
    ResultSet rs;
	
	private String driver 		= "com.mysql.jdbc.Driver";
	private String dbName		= "dbwaveerp";
    private String url 			= "jdbc:mysql://localhost:3307/";    
	private String user 		= "root";
	private String password		= "password";
	private String tablename	= "tbltickets";
	
	private String querystring  = "select userid, firstname, pid from tbluser;";	 
	private int colCount		=   Integer.parseInt("2");
	private String[] colTypes;	// keep here all the column types
    private String strBug       = "";

    systemSession ss            = new systemSession();

    public String[] nodeid;
    public String[] nodedesc;
    public String[] nodeparent;

    public jsonLibrary02() {
       super(INFO);
    }

    public String loadDataEntries() {
    	
        // Added by Jammi Dee 05/03/2012
        registrySystem rss          = new registrySystem();
        url                         = rss.readRegistry("NA", "NA", "NA", "DBURL");
        dbName                      = rss.readRegistry("NA", "NA", "NA", "DBDATABASE");
        driver                      = rss.readRegistry("NA", "NA", "NA", "DBDRIVER");
        user                        = rss.readRegistry("NA", "NA", "NA", "DBUSER");
        password                    = rss.readRegistry("NA", "NA", "NA", "DBPASSWORD");             
        
        // Added by Jammi Dee 05/03/2012
        // Call the encryption management system
        desEncryption  de = new desEncryption();
        de.Encrypter("","");        
		
		try {
			Class.forName(getDriver());
			con = DriverManager.getConnection(url+dbName, user, password);
			ps = con.createStatement();
			
			rs = ps.executeQuery(querystring);
			
			/////////////////////////////////////////////
			// Get the number of columns here. I need
			// this to add dynaminism to my table loader
			/////////////////////////////////////////////
			ResultSetMetaData rsmd = rs.getMetaData();
			setColCount(rsmd.getColumnCount());
			
			///////////////////////////////////////////
			// Load the column types to an array
			// Never access it directly, java simply
			// returns NULL, whew I don't know why
			///////////////////////////////////////////
			String[] colTypes = new String[colCount];
			for (int j=0 ; j <= getColCount() - 1 ; j++  ){
				colTypes[j] = rsmd.getColumnTypeName(j+1);
			}	
			
            /**
             * Initialize the working arrays here for the process
             * Added by Jammi Dee 06/06/2012
            */
            while (rs.next()) {
                String id = rs.getString(1);
            }
            rs.last();
            int rowCount = rs.getRow();
            nodeid      = new String[rowCount];
            nodedesc    = new String[rowCount];
            nodeparent  = new String[rowCount];
            
            int ipoint = 0;
			rs.beforeFirst();
            
			while (rs.next()) {

                nodeid[ipoint]      = rs.getString(1);
                nodedesc[ipoint]    = rs.getString(2);
                nodeparent[ipoint]  = rs.getString(3);
                
                // Increment the pointer
                ipoint = ipoint + 1;
                
			}

            
			ps.close();
			con.close();

		} catch (Exception e) {
			System.out.println(e.getMessage());
			e.printStackTrace();
            return "FAILED";
            
		}
        
		return "SUCCESS";
	}


    public String loadData(String sesVar, String sqlScript){
        
        
        systemLgger lg = new systemLgger();
        
        // Prepare the script for loading. The SELECT statement should have 3 columns only
        // Column 1 for nodeid, for description and for parent node
        //querystring  = "select userid, firstname, pid from tbluser where entityid = 'NGLCSL' ";
        this.setQuerystring(sqlScript);
        this.loadDataEntries(); // Load data from the table
        
        try
        {
            
           strBug = "{" + generateTree("000000", "TOP") + "}" ;
            
        }
        catch (Exception ex)
        {
            //throw new Exception(" >> exception occured in selectManagers\n\t"+ex.getMessage());
        }        
        
       return strBug; //tempJsonArr.toString(); 
        
    }

    public String generateTree(String strParent, String strDesc ) throws Exception {  
        
        String[] nodid;
        String[] noddesc;
        String[] nodparent;        
        
        String strHead;
        String strSubHead;
        String strTail;
        String strSubTail;
        String strJSON;
        int iPoint;
        int ChildCount;
        
        // {'Cars':undefined}
        strHead         =  "'" + strParent + ":" + strDesc + "':";
        strSubHead      = ""; 
        strJSON         = "undefined";
        strTail         = "";
        strSubTail      = "";
        ChildCount      = 0;       
        
        nodid        = new String[1];
        noddesc      = new String[1];
        nodparent    = new String[1];        
        
        //return Integer.toString( checkChild(strParent) );
        
        ////////////////////////////////////////////
        // Get the number of childs; Create a local
        // Copy of this parent children
        ////////////////////////////////////////////
        if( checkChild(strParent) > 0 ){  
           
           ChildCount   = checkChild(strParent);
           
           nodid        = new String[ChildCount];
           noddesc      = new String[ChildCount];
           nodparent    = new String[ChildCount];
           iPoint = 0;
           
           for (int j=0 ; j <= nodeid.length - 1 ; j++  ){
               
               String nparent = nodeparent[j];
               if( strParent.equals(nparent) == true ){
                   
                   nodid[iPoint]       = nodeid[j];
                   noddesc[iPoint]     = nodedesc[j];
                   nodparent[iPoint]   = nodeparent[j];   
                   iPoint = iPoint + 1;
               }
               
           }
           
        }
        
        ////////////////////////////////////////////
       
        if( checkChild(strParent) > 0 ){
            
            strSubHead      = "{"; 
            strSubTail      = "}";
            
            // If we have something to process, it must be not undefined
            // Remove the undefined.
            if (strJSON.equals("undefined")){
                strJSON = "";
            }              

            //ifirst = 0;
            for (int j=0 ; j <= nodid.length - 1 ; j++  ){
                
                if ( checkChild(nodid[j]) > 0 ) {
                    
                    if ( j == nodid.length - 1 ) {
                        strJSON = strJSON + generateTree(nodid[j], noddesc[j]) + "";
                    } else {
                        strJSON = strJSON + generateTree(nodid[j], noddesc[j]) + ",";
                    }    
                    
                } else {
                    
                    if (  j == nodid.length - 1  ) {
                        strJSON = strJSON + "'" + nodid[j] + ":" + noddesc[j] + "':undefined";
                    } else {
                        strJSON = strJSON + "'" + nodid[j] + ":" + noddesc[j] + "':undefined,";
                    }
                    
                }
                
            }

            strJSON = strSubHead + strJSON + strSubTail ;

        }
        
        return strHead + strJSON + strTail;
                
    }

    public int checkChild(String strParent ) throws Exception {  
        
        int haveChild;
        haveChild = 0;
        
        for (int j=0 ; j <= nodeid.length - 1 ; j++  ){
            
                String nparent = nodeparent[j];
                if( strParent.equals(nparent) == true ){
                    
                    haveChild = haveChild + 1;
                
                }              
    	}
        
        return haveChild;
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
	 * @param string
	 */
	public void setQuerystring(String string) {
		querystring = string;
	}
    

}


