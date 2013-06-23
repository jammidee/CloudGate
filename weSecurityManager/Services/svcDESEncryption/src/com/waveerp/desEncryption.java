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
 * Special thanks to Francis Limbo and Rea Javier for the initial codes
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
 * Created by Francis Angelo Limbo
 * Date: 02/24/2012
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

*
*  The services encrypt string using 3DES Algorithm.
*  The code still needs to be improved in the future. 
*  The current code is based on the current code of the project.
*/

package com.waveerp;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.DESedeKeySpec;
import javax.crypto.spec.IvParameterSpec;

import java.security.MessageDigest;
import java.security.spec.KeySpec;
import java.util.Arrays;

import org.apache.commons.codec.binary.Base64;

public class desEncryption extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {
   
  private KeySpec kSpec;
  private SecretKey sKey;
  private IvParameterSpec ivParSpec;
  
  public desEncryption() {
       super(INFO);
  }
  
   public void Encrypter(String keyString, String ivString) {
    try {
        
      keyString = "J3SuSChRiSt";    
      ivString = "Pr0V3rBs";   
        
      final MessageDigest msgDigest = MessageDigest.getInstance("md5");
      final byte[] digestOfPassword = msgDigest.digest(Base64.decodeBase64(keyString.getBytes("utf-8")));
      final byte[] keyBytes = Arrays.copyOf(digestOfPassword, 24);
      for (int j = 0, k = 16; j < 8;) {
        keyBytes[k++] = keyBytes[j++];
      }
      
      kSpec = new DESedeKeySpec(keyBytes);
      
      sKey = SecretKeyFactory.getInstance("DESede").generateSecret(kSpec);
      
      ivParSpec = new IvParameterSpec(ivString.getBytes());
    } catch(Exception e) {
      e.printStackTrace();
    }
  }
  
  public String encrypt(String value) {
    try {
      Cipher ecipher = Cipher.getInstance("DESede/CBC/PKCS5Padding","SunJCE");
      ecipher.init(Cipher.ENCRYPT_MODE, sKey, ivParSpec);
      
      if(value == null)
        return null;
      
      byte[] utf8 = value.getBytes("UTF8");
      byte[] enc = ecipher.doFinal(utf8);

      return new String(Base64.encodeBase64(enc),"UTF-8");
    } catch (Exception e) {
      e.printStackTrace();
    }
    return null;
  }
  
  public String decrypt(String value) {
    try {
      Cipher dcipher = Cipher.getInstance("DESede/CBC/PKCS5Padding","SunJCE");
      dcipher.init(Cipher.DECRYPT_MODE, sKey, ivParSpec);
      
      if(value==null)
        return null;
      
      byte[] dec = Base64.decodeBase64(value.getBytes());
      byte[] utf8 = dcipher.doFinal(dec);
      
      return new String(utf8, "UTF8");
    } catch (Exception e) {
      e.printStackTrace();
    }
    return null;
  }

}