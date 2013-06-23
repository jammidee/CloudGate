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
 * Date: 09/02/2012
 * Modified by: Jammi Dee 09/02/2012 20:15pm
 * 
*/

package com.waveerp;

import com.wavemaker.runtime.javaservice.JavaServiceSuperClass;
import com.wavemaker.runtime.service.annotations.ExposeToClient;

//import java.text.CharacterIterator;
import java.text.StringCharacterIterator;
//import java.util.regex.Pattern;
//import java.util.regex.Matcher;


@ExposeToClient
public class systemTextUtils extends JavaServiceSuperClass {

    private static String[] nonSearchList = { " a ", " A ", 
                                            " the ", "The ", " THE ", 
                                            " on ", "On ", " ON ",
                                            " at", " At ", " AT ",
                                            " are ", "Are ", " ARE ",
                                            " by ", "By ", " BY ",
                                            " be ", "Be ", " BE ",
                                            " to ", "To ", " TO ",
                                            " is ", "Is ", " IS ",
                                            " this ", "This ", " THIS ",
                                            " do ", "Do ", " DO ",
                                            " so ", "So ", " SO ",
                                            " of ", "Of ", " OF ",
                                            " and ", "And ", " AND ",
                                            " for ", "For ", " FOR ",
                                            " in ", "In ", " IN " };


    public systemTextUtils() {
       super(INFO);
    }

    //Replace all non-Searchable words
    //Added by Jammi Dee 09/02/2012
    public String removeNonSearchables(String strSource){
    
        for (String s: nonSearchList) {
            
            strSource = strSource.replaceAll(s, " ");
            
        }
        
        return strSource ;
    
    }


    public String mySQLEscape(String strSource){
        
        StringBuilder result = new StringBuilder();
        StringCharacterIterator iterator = new StringCharacterIterator( strSource );
        char character = iterator.current();
        while (character != StringCharacterIterator.DONE){
            if( character == '\"' ){
                    result.append("\\\"");
                }
            else if(character == '\''){
                    result.append("\\\'");
                }
            else if(character == '%'){
                    result.append("\\%");
                }
            else if(character == '_'){
                    result.append("\\_");
                }
            else if(character == '\\'){
                    result.append("\\\\");
                }
            else if(character == '/'){
                    result.append("\\/");
                }
            else if(character == '\0'){
                    result.append("\\b");
                }
            else if(character == '\b'){
                    result.append("\\b");
                }
            else if(character == '\t'){
                    result.append("\\t");
                }
            else if(character == '\n'){
                    result.append("\\n");
                }
            else if(character == '\r'){
                    result.append("\\r");
                }
            else if(character == '\f'){
                    result.append("\\f");
                }
            else {
                //the char is not a special one
                //add it to the result as is
                result.append(character);
                }
                character = iterator.next();
            }
        
        return result.toString(); 
        
    }    


}
