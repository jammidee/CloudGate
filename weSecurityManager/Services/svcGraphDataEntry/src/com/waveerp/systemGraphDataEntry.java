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
 * Date: 06/13/2012
 * Modified by: Jammi Dee 06/14/2012 1:50 pm
 * 
*/

package com.waveerp;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Random;

import com.waveerp.*;

public class systemGraphDataEntry extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {

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
    
    public String[] nodeid;
    public String[] nodeval;
    public int[] nodesum;

    public systemGraphDataEntry() {
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
            nodeval    = new String[rowCount];
            
            int ipoint = 0;
			rs.beforeFirst();
            
			while (rs.next()) {

                nodeid[ipoint]      = rs.getString(1);
                nodeval[ipoint]    = rs.getString(2);
                
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

    public String loadDataEntriesSum() {
        
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
            int rowCount    = rs.getRow();
            nodeid          = new String[rowCount];
            nodesum         = new int[rowCount];
            
            int ipoint = 0;
			rs.beforeFirst();
            
			while (rs.next()) {

                nodeid[ipoint]      = rs.getString(1);
                nodesum[ipoint]     = rs.getInt(2);
                
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


    public String loadGraphData(String sqlScript, String pMode){
        
        this.setQuerystring(sqlScript);
        
        try
        {
            // Select the mode on how to handle the data here
            // Pattern of select must be NAME, VALUE
            if (pMode.equals("INV" )){
                
                // Return each name as is
                
            } else if (pMode.equals("SUM") ) {
                
                this.loadDataEntriesSum();
                // Sum the value of the entries
                strBug = graphBySumNodes();
                
            } else if (pMode.equals("COUNT") ) {
                
               this.loadDataEntries(); 
                // Just count the entries and sum it
               strBug = graphByCountNodes();
                
            } else {
            }
            
            
        }
        catch (Exception ex)
        {
            //throw new Exception(" >> exception occured in selectManagers\n\t"+ex.getMessage());
            strBug = ex.getMessage();
        }        
        
       return strBug;
        
    }


    public String loadTestData(){
        
        Random rno = new Random();
        
        strBug ="";
        try
        {
            int ano;
            ano = rno.nextInt(1000) + 1;
            strBug = strBug + "La Salle," + Integer.toString(ano) + ",";
            ano = rno.nextInt(1000) + 1;
            strBug = strBug + "Ateneo," + Integer.toString(ano) + ",";
            ano = rno.nextInt(1000) + 1;
            strBug = strBug + "New Era," + Integer.toString(ano) + ",";
            ano = rno.nextInt(1000) + 1;
            strBug = strBug + "PUP," + Integer.toString(ano) + ",";
            ano = rno.nextInt(1000) + 1;
            strBug = strBug + "AMA," + Integer.toString(ano) + ",";
            ano = rno.nextInt(1000) + 1;
            strBug = strBug + "Adamson," + Integer.toString(ano) + ",";
            ano = rno.nextInt(1000) + 1;

        }
        catch (Exception ex)
        {
            // Nothing to return
        }        
        
       return strBug;
        
    }

    public String loadTestData01(){
        
        Random rno = new Random();
        
        strBug ="";
        try
        {
            int ano;
            ano = rno.nextInt(1000) + 1;
            strBug = strBug + "Metro Manila," + Integer.toString(ano) + ",";
            ano = rno.nextInt(1000) + 1;
            strBug = strBug + "Quezon City," + Integer.toString(ano) + ",";
            ano = rno.nextInt(1000) + 1;
            strBug = strBug + "Rizal," + Integer.toString(ano) + ",";
            ano = rno.nextInt(1000) + 1;
            strBug = strBug + "Bulacan," + Integer.toString(ano) + ",";
            ano = rno.nextInt(1000) + 1;
            strBug = strBug + "Batangas," + Integer.toString(ano) + ",";
            ano = rno.nextInt(1000) + 1;
            strBug = strBug + "Cavite," + Integer.toString(ano) + ",";
            ano = rno.nextInt(1000) + 1;
            strBug = strBug + "Laguna," + Integer.toString(ano) + ",";
            ano = rno.nextInt(1000) + 1;
            strBug = strBug + "Pasig," + Integer.toString(ano) + ",";
            
        }
        catch (Exception ex)
        {
            // Nothing to return
        }        
        
       return strBug;
        
    }

    // Addded by Jammi Dee 06/13/2012
    public String graphByCountNodes(){
        
        String  strGraph;
        String  nodeName[];
        int     nodeCount[];
        int     nameCnt;
        int     ipoint = 0;
        
        strGraph    = "";
        nodeName    = new String[50];
        nodeCount   = new int[50];
        nameCnt     = 0;
        
        // initialize the array for counting
        for (int j=0 ; j <= nodeName.length - 1 ; j++  ){
            nodeName[j] = "";
            nodeCount[j] = 0;
        }
        
         // Scan the retrieved records
         for (int j=0 ; j <= nodeid.length - 1 ; j++  ){
             
             String nodeTmp = nodeid[j];
            
             ipoint = 0;
             
             // Look for the presence of the node
             for (int i=0 ; i <= nameCnt ; i++  ){
                 if( nodeTmp.equals(nodeName[i]) ){
                     nodeCount[i] = nodeCount[i] + 1;
                     ipoint = 1;
                 }
             }     
             
             // No match found, add it
             if( ipoint == 0 ){
                 nodeName[nameCnt] = nodeid[j];
                 nodeCount [nameCnt] = 1;
                 nameCnt = nameCnt + 1;
             }
             
             
         }     
        
         for (int i=0 ; i <= nameCnt ; i++  ){
             strGraph = strGraph + nodeName[i] + "," + Integer.toString(nodeCount[i]) + ",";
         }     
        
        return strGraph;
    }

    public String graphBySumNodes(){
        
        String  strGraph;
        String  nodeName[];
        int     nodeCount[];
        int     nameCnt;
        int     ipoint = 0;
        
        strGraph    = "";
        nodeName    = new String[50];
        nodeCount   = new int[50];
        nameCnt     = 0;
        
        // initialize the array for counting
        for (int j=0 ; j <= nodeName.length - 1 ; j++  ){
            nodeName[j] = "";
            nodeCount[j] = 0;
        }
        
         // Scan the retrieved records
         for (int j=0 ; j <= nodeid.length - 1 ; j++  ){
             
             String nodeTmp = nodeid[j];
            
             ipoint = 0;
             
             // Look for the presence of the node
             for (int i=0 ; i <= nameCnt ; i++  ){
                 if( nodeTmp.equals(nodeName[i]) ){
                     nodeCount[i] = nodeCount[i] + nodesum[i];
                     ipoint = 1;
                 }
             }     
             
             // No match found, add it
             if( ipoint == 0 ){
                 nodeName[nameCnt] = nodeid[j];
                 nodeCount [nameCnt] = nodesum [nameCnt];
                 nameCnt = nameCnt + 1;
             }
             
             
         }     
        
         for (int i=0 ; i <= nameCnt - 1 ; i++  ){
             
             if (nodeName[i] != ""){
                strGraph = strGraph + nodeName[i] + "," + Integer.toString(nodeCount[i]) + ",";
             } else {
             }
         }     
        
        return strGraph;
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
