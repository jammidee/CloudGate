package com.waveerp;

// 02/13/2012 6:23 jmd

import java.io.*;

import org.apache.commons.io.IOUtils;
import org.springframework.mail.javamail.ConfigurableMimeFileTypeMap;
import org.springframework.web.multipart.MultipartFile;

import com.wavemaker.runtime.RuntimeAccess;
import com.wavemaker.runtime.server.DownloadResponse;
import com.wavemaker.runtime.server.ParamName;


public class systemUpload extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {
    /* Pass in one of FATAL, ERROR, WARN,  INFO and DEBUG to modify your log level;
     *  recommend changing this to FATAL or ERROR before deploying.  For info on these levels, look for tomcat/log4j documentation
     */
    public systemUpload() {
       super(INFO);
    }

    private String filePath = RuntimeAccess.getInstance().getSession().getServletContext().getRealPath("/customdata/uploads");

    /*
    *  upload file to server folder uploadData
    *
    *  @param   MultipartFile 
    *  @return  void
    */
    public String uploading(@ParamName(name="file") MultipartFile inputfile) {
      String file_name = "";
      try {
        file_name = inputfile.getOriginalFilename();  
        // create a new instance of the method FILE
        File outputFile = new File(filePath, inputfile.getOriginalFilename());
    
        // create a new instance of the method FileOutputStream and write content into it
        FileOutputStream fos = new FileOutputStream(outputFile);

        // copy the inputstream into my new instance of "file"
        IOUtils.copy(inputfile.getInputStream(), fos);
    
        inputfile.getInputStream().close();
        fos.close();
    
      } catch(Exception e) {
        log(ERROR, "Error in method upload: ", e);
      }
       return file_name;
    }

}
