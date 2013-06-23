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
 * Date: 05/01/2012
 * Modified by: Jammi Dee 05/01/2012
 * 
*/
package com.waveerp;

/**
 * Created by Jammi Dee
 * 05/01/2012
 * 11:50 PM
 */
 
 import com.wavemaker.runtime.RuntimeAccess;
 import org.apache.commons.mail.*;
 
 //Added by Jammi Dee 04/15/2013
 import java.util.Properties;
 import javax.mail.*;
 import javax.mail.Message;
 import javax.mail.MessagingException;
 import javax.mail.PasswordAuthentication;
 import javax.mail.Session;
 import javax.mail.Transport;
 import javax.mail.Authenticator;
 import javax.mail.Multipart;
 import javax.mail.internet.InternetAddress;
 import javax.mail.internet.MimeMessage;
 import javax.mail.internet.AddressException;
 import javax.mail.internet.MimeBodyPart;
 import javax.mail.internet.MimeMultipart; 
 
 import java.io.*;
 import java.net.*;
 import java.util.*;
 import java.text.*;

 import java.io.IOException;
 import java.util.Date;
 import java.util.Properties;
 

 
 import java.net.URLDecoder;
 import java.net.URL;  
 
public class sendMail extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {

    String strHostName          = "smtp.gmail.com";                     // smtp server *** Put the name of your smtp server here
    String strUserName          = "jdama001";                           // username of the email account you are going to use to send
    String strPw                = "password";                           // password of that account

    String strSendTo            = "joel.damaso@baligyaan.com";          // email address you are sending To:
    String strSendToDesc        = "Test";                               // Arbitrary description of Send To email address
    String strFrom              = "from@from.com";                      // email address you want in the From (this is arbitrary)
    String strFromDesc          = "From Address";                       // Arbitrary description of the From email address

    String strPathAttach        = "C:/dbwaveerp.sql";                   // Server side path to the file to be attached
    String strAttachDesc        = "Test";                               // Attachment description (arbitrary)
    String strAttachFileName    = "";    

    //final String username = "jammidee@gmail.com";
	//final String password = "19401319";


    public sendMail() {
       super(INFO);
    }

    //sendMsgOrig
    public void sendMsg(  String strSource,
                                String strSourceDesc,
                                String strSubject, 
                                String strMsg, 
                                String strDestination, 
                                String strDestDesc) throws Exception {
                            
        // Call the registry management system                    
        registrySystem rs = new registrySystem();
        // Call the encryption management system
        desEncryption  de = new desEncryption();
        de.Encrypter("","");
        
        String strHost = rs.readRegistry("NA", "NA", "NA", "EMAILHOST");
        String strPort = rs.readRegistry("NA", "NA", "NA", "EMAILPORT");
        String strUser = rs.readRegistry("NA", "NA", "NA", "EMAILUSER");
        String strPass = rs.readRegistry("NA", "NA", "NA", "EMAILPASSWORD");
        
        log(DEBUG, strHost + "|" + strPort + "|" + strUser + "|" + strPass );
        
        //Decrypt the encrypted password.
        strPass = de.decrypt(strPass);

        Email email = new SimpleEmail();
        email.setHostName(strHost);
        email.setSmtpPort( Integer.parseInt(strPort) );
        email.setAuthenticator(new DefaultAuthenticator(strUser, strPass));
        email.setTLS(false);
        email.setFrom(strSource, strSourceDesc);
        email.setSubject(strSubject);
        email.setMsg(strMsg);

        email.addTo(strDestination, strDestDesc);
        email.send();
    
    }
    
    public void sendMsgTLS(   String strSource,
                           String strSourceDesc,
                           String strSubject, 
                           String strMsg, 
                           String strDestination, 
                           String strDestDesc) throws Exception {
                            
        // Call the registry management system                    
        registrySystem rs = new registrySystem();
        // Call the encryption management system
        desEncryption  de = new desEncryption();
        de.Encrypter("","");
        
        String strHost = rs.readRegistry("NA", "NA", "NA", "EMAILHOST");
        String strPort = rs.readRegistry("NA", "NA", "NA", "EMAILPORT");
        final String strUser = rs.readRegistry("NA", "NA", "NA", "EMAILUSER");
        String strPass = rs.readRegistry("NA", "NA", "NA", "EMAILPASSWORD");

        //Decrypt the encrypted password.
        final String strPass01 = de.decrypt(strPass);

    	Properties props = new Properties();
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.host", strHost );
		props.put("mail.smtp.port", strPort );

    	Session session = Session.getInstance(props,
		  new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(strUser, strPass01 );
			}
		  });

    	try {
 
			Message message = new MimeMessage(session);
			message.setFrom(new InternetAddress( strSource ));
			message.setRecipients(Message.RecipientType.TO,
				InternetAddress.parse( strDestination ));
			message.setSubject( strSubject );
			message.setText( strMsg );
 
			Transport.send(message);
 
			//System.out.println("Done");
 
		} catch (MessagingException e) {
			throw new RuntimeException(e);
		}
        
        log(DEBUG, strHost + "|" + strPort + "|" + strUser + "|" + strPass );
        


        //Email email = new SimpleEmail();
        //email.setHostName(strHost);
        //email.setSmtpPort( Integer.parseInt(strPort) );
        //email.setAuthenticator(new DefaultAuthenticator(strUser, strPass01));
        //email.setTLS(true);
        //email.setFrom(strSource, strSourceDesc);
        //email.setSubject(strSubject);
        //email.setMsg(strMsg);

        //email.addTo(strDestination, strDestDesc);
        //email.send();
    
    }
    
    public void sendMsgSSL(   String strSource,
                           String strSourceDesc,
                           String strSubject, 
                           String strMsg, 
                           String strDestination, 
                           String strDestDesc) throws Exception {
                            
        // Call the registry management system                    
        registrySystem rs = new registrySystem();
        // Call the encryption management system
        desEncryption  de = new desEncryption();
        de.Encrypter("","");
        
        String strHost = rs.readRegistry("NA", "NA", "NA", "EMAILHOST");
        String strPort = rs.readRegistry("NA", "NA", "NA", "EMAILPORT");
        final String strUser = rs.readRegistry("NA", "NA", "NA", "EMAILUSER");
        String strPass = rs.readRegistry("NA", "NA", "NA", "EMAILPASSWORD");

        //Decrypt the encrypted password.
        final String strPass01 = de.decrypt(strPass);

    	Properties props = new Properties();
		props.put("mail.smtp.host", strHost );
		props.put("mail.smtp.socketFactory.port", strPort );
		props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.port", strPort );

    	Session session = Session.getInstance(props,
		  new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(strUser, strPass01 );
			}
		  });

    	try {
 
			Message message = new MimeMessage(session);
			message.setFrom(new InternetAddress( strSource ));
			message.setRecipients(Message.RecipientType.TO,
				InternetAddress.parse( strDestination ));
			message.setSubject( strSubject );
			message.setText( strMsg );
 
			Transport.send(message);
 
			//System.out.println("Done");
 
		} catch (MessagingException e) {
			throw new RuntimeException(e);
		}
        
        //log(DEBUG, strHost + "|" + strPort + "|" + strUser + "|" + strPass );
        

    
    }


    //Added by Jammi Dee 04/20/2013
    public String sendMsgWithAttach(   String strSource,
                           String strSourceDesc,
                           String strSubject, 
                           String strMsg, 
                           String strDestination, 
                           String strDestDesc,
                           String strPath ) throws Exception {
                            
        String strResult = "OK";                    
                            
        // Call the registry management system                    
        registrySystem rs = new registrySystem();
        // Call the encryption management system
        desEncryption  de = new desEncryption();
        de.Encrypter("","");
        
        String strHost = rs.readRegistry("NA", "NA", "NA", "EMAILHOST");
        String strPort = rs.readRegistry("NA", "NA", "NA", "EMAILPORT");
        final String strUser = rs.readRegistry("NA", "NA", "NA", "EMAILUSER");
        String strPass = rs.readRegistry("NA", "NA", "NA", "EMAILPASSWORD");

        //Decrypt the encrypted password.
        final String strPass01 = de.decrypt(strPass);

        Properties props = new Properties();
    	props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.host", strHost );
		props.put("mail.smtp.port", strPort );
        props.put("mail.user", strUser);
        props.put("mail.password", strPass01);
        
        // creates a new session with an authenticator
        Authenticator auth = new Authenticator() {
            public PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(strUser, strPass01);
            }
        };
        Session session = Session.getInstance(props, auth);

        // creates a new e-mail message
        Message msg = new MimeMessage(session);
 
        msg.setFrom(new InternetAddress( strSource ));
        //InternetAddress[] toAddresses = { new InternetAddress(strDestination) };
        msg.setRecipient(Message.RecipientType.TO, new InternetAddress(strDestination) );
        msg.setSubject( strSubject );
        msg.setSentDate(new Date());

        // creates message part
        MimeBodyPart messageBodyPart = new MimeBodyPart();
        messageBodyPart.setContent( strMsg , "text/html");

        // creates multi-part
        Multipart multipart = new MimeMultipart();
        multipart.addBodyPart(messageBodyPart);

        // adds attachments
        //if (attachFiles != null && attachFiles.length > 0) {
        //    for (String filePath : attachFiles) {
        //        MimeBodyPart attachPart = new MimeBodyPart();
        //
        //        try {
        //            attachPart.attachFile(filePath);
        //        } catch (IOException ex) {
        //            ex.printStackTrace();
        //        }
        //
        //        multipart.addBodyPart(attachPart);
        //    }
        //}

        String fna;
        String fnb;
        URL fileUrl;
        
        fileUrl = null; 
        fileUrl = this.getClass().getResource("sendMail.class");
        fna = fileUrl.getPath();
        fna = fna.substring(0, fna.indexOf("WEB-INF"));        
        //fnb = URLDecoder.decode( fna + TEMP_DIR + strPath );
        fnb = URLDecoder.decode( fna + strPath );

        MimeBodyPart attachPart = new MimeBodyPart();
        try {
            
            attachPart.attachFile( fnb );
            
        } catch (IOException ex) {
            
            //ex.printStackTrace();
            strResult = ex.getMessage();
            
        }
        multipart.addBodyPart(attachPart);
        
        // sets the multi-part as e-mail's content
        msg.setContent(multipart);
 
        // sends the e-mail
        Transport.send(msg);
        
        return strResult;
        
    
    }


}
