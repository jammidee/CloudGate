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
 * Date: 06/14/2013
 * Modified by: Jammi Dee 06/14/2013 08:45pm
 * 
*/

package com.waveerp;

import com.wavemaker.runtime.javaservice.JavaServiceSuperClass;
import com.wavemaker.runtime.service.annotations.ExposeToClient;

import java.net.URL;
import java.net.URLDecoder;

import java.io.FileOutputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.OutputStream;

import net.glxn.qrgen.QRCode;
import net.glxn.qrgen.image.ImageType;


@ExposeToClient
public class QRCodeFunction extends JavaServiceSuperClass {

    public static final String UPLOAD_DIR   = "customdata/uploads/" ;
    public static final String TEMP_DIR     = "customdata/temp/" ;
    public static final String REPO_DIR     = "customdata/repository/" ;
    
    URL fileUrl;


    public QRCodeFunction() {
       super(INFO);
    }

    //Added by Jammi Dee 06/14/2013
    //Uses core.jar,javase.jar,qrgen-1.1.jar 
    public String createQRCode( String sourceData, String targetFile, String targetSize ){
        
        String strResult = "";
        
        // Get the path of the system here
        String fna  = "";
        //String fnb  = "";
        String fnc  = "";

        
        fileUrl = null; 
        fileUrl = this.getClass().getResource("QRCodeFunction.class");
        fna = fileUrl.getPath();
        fna = fna.substring(0, fna.indexOf("WEB-INF"));   
        
        //fnb = URLDecoder.decode( fna + TEMP_DIR + sourceFile );
        fnc = URLDecoder.decode( fna + TEMP_DIR + targetFile );
        strResult = TEMP_DIR + targetFile;
        
        OutputStream        dstFile = null;
        try{
            
            //srcFile = new FileInputStream ( fnb );
            dstFile = new FileOutputStream( fnc );
            int qX = 0;
            int qY = 0;
            
            if(targetSize.equals("SMALL")){
                
                qX = 120;
                qY = 120;
                
            } else if(targetSize.equals("MEDIUM")){    
                
                qX = 230;
                qY = 230;
                
            } else if(targetSize.equals("LARGE")){    
                
                qX = 350;
                qY = 350;
                                
            } else { 
                
                //Default to Midium
                qX = 230;
                qY = 230;
                
            }
            
            
            ByteArrayOutputStream qrCodesOut = QRCode.from(sourceData).to(ImageType.PNG).withSize(qX, qY).stream();
            qrCodesOut.writeTo(dstFile);
            qrCodesOut.flush();   
            
            dstFile.close();
            
            
        }
        catch (Exception e){
            
            e.printStackTrace();
            
        }
        
        
        

    
        return strResult;
    
    }



}
