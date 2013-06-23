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
*/

package com.waveerp;

/**
 * 
 * Jammi Dee 06/25/2012  10:02
 * Modified: 06/25/2012  10:02
 * This is a manual generation of UUID and other unique IDs
 * 
 */

import java.util.UUID;

import java.security.SecureRandom;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;


public class systemGenUUID extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {



    public systemGenUUID() {
       super(INFO);
    }

    public String generateUUID(){
        
        UUID guid = UUID.randomUUID();

        return guid.toString();
        
    }

    public String generateSecureRandomID(){

        String sID = "";

        try {
            //Initialize SecureRandom
            //This is a lengthy operation, to be done only upon
            //initialization of the application
            SecureRandom prng = SecureRandom.getInstance("SHA1PRNG");

            //generate a random number
            String randomNum = new Integer( prng.nextInt() ).toString();

            //get its digest
            MessageDigest sha = MessageDigest.getInstance("SHA-1");
            byte[] result =  sha.digest( randomNum.getBytes() );

            sID = hexEncode(result);
            
        }
        catch ( NoSuchAlgorithmException ex ) {
        
            System.err.println(ex);
            return "FAILED";
      
        }
        
        return sID;

    }

    static private String hexEncode( byte[] aInput){
        StringBuilder result = new StringBuilder();
            
        char[] digits = {'0', '1', '2', '3', '4','5','6','7','8','9','a','b','c','d','e','f'};
        for ( int idx = 0; idx < aInput.length; ++idx) {
        byte b = aInput[idx];
        result.append( digits[ (b&0xf0) >> 4 ] );
        result.append( digits[ b&0x0f] );
        }
        return result.toString();
    }


}
