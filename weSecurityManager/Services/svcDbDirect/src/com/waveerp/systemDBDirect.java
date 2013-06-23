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

/*
 *  Copyright (C) 2012 Wave ERP, Inc. All rights reserved.
 *
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *  
 *  Created by Jammi Dee
 *  Date: 01/26/2012
 *
 *  The services writes directly to database.
 *  The code still needs to be improved in the future. 
 *  The current code is based on the current code of the project.
 */

package com.waveerp;

import org.json.simple.JSONObject;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;


import com.waveerp.*;

public class systemDBDirect extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {

    Connection con;
    Statement ps;
	ResultSet rs;
	
	private String driver 		= "com.mysql.jdbc.Driver";
	private String dbName		= "dbwaveerp";
    private String url 			= "jdbc:mysql://localhost:3307/";    
	private String user 		= "root";
	private String password		= "password";
	private String tablename	= "tbltickets";
	
	private String querystring  = "select * from tblentity ";	 
	private int colCount		=   Integer.parseInt("2");
	private String[] colTypes;	// keep here all the column types

    systemSession ss            = new systemSession();

    public systemDBDirect() {
       super(INFO);  
       
    }

    public ArrayList loadTableEntries() {
		
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
        
		ArrayList trList = new ArrayList();
		
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
			
			
			while (rs.next()) {
                
				//System.out.println(rs.getString(1));
				String[] item = new String[colCount];
				
				for (int j=0 ; j < getColCount() ; j++  ){
					
                    
					if (colTypes[j]=="VARCHAR"){
						item[j] = rs.getString(j+1);
					}
					if (colTypes[j]=="VARCHAR2"){
						item[j] = rs.getString(j+1);
					}
					if (colTypes[j]=="NUMBER"){
						item[j] = Double.toString(rs.getDouble(j+1));
					}
					if (colTypes[j]=="DATE"){
						item[j] =  rs.getDate(j+1).toString();
					}
					if (colTypes[j]=="DATETIME"){
						item[j] = colTypes[j]; // lrs.getTimestamp(j+1).toString();
					}
					if (colTypes[j]=="TIMESTAMP"){
						item[j] = colTypes[j];
					}		                                
					
				}

				trList.add(item);
				
			}
			
			ps.close();
			con.close();

		} catch (Exception e) {
            
			//System.out.println(e.getMessage());
			e.printStackTrace();
            
		}

		return trList;
	}


    public void loadTableToSession(String sesVar, String sqlScript){
        
        ArrayList usrList = new ArrayList();
        
        this.setQuerystring(sqlScript);
        usrList = this.loadTableEntries();
        
        ss.setAttribute(sesVar, usrList);
        
    }

    public String unloadTableFromSession(String sesVar){
        
        ArrayList arr = (ArrayList) ss.getAttributeArr(sesVar);

        for (int i = 0; i < arr.size(); i++){
            if (arr != null && arr.size() > 0) {
        
                String[] aRow     =     (String[]) arr.get(i);
                String col01      =     aRow[0];
        
            }       
        }

        return "";
        
        }


    /**
     * This function test for the database connection based on the configuration
     * taken  from the systems registry.
     * 
     * Created by: Jammi Dee
     * Date: 05/26/2012
    */
    public String testDatabase() {
    	
        String result = "";
        
        // Added by Jammi Dee 05/26/2012
        registrySystem rss          = new registrySystem();
        
        url                         = rss.readRegistry("NA", "NA", "NA", "DBURL");
        dbName                      = rss.readRegistry("NA", "NA", "NA", "DBDATABASE");
        driver                      = rss.readRegistry("NA", "NA", "NA", "DBDRIVER");
        user                        = rss.readRegistry("NA", "NA", "NA", "DBUSER");
        password                    = rss.readRegistry("NA", "NA", "NA", "DBPASSWORD");             
		
		try {
            
			Class.forName(getDriver());
			con = DriverManager.getConnection(url+dbName, user, password);
			ps = con.createStatement();
			rs = ps.executeQuery(querystring);
			
            // Place your test data here
            result = "SUCCESS";
			
			ps.close();
			con.close();

		} catch (Exception e) {
            
            result = e.getMessage() ;
            
		}

		return result;
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
	public String getPassword() {
		return password;
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
	public void setPassword(String string) {
		password = string;
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