
package com.dbwaveerp.data;

import java.util.Date;


/**
 *  dbwaveerp.Tblregistry
 *  07/17/2013 22:12:24
 * 
 */
public class Tblregistry {

    private TblregistryId id;
    private String entity;
    private String appid;
    private String userid;
    private Date regdate;
    private String varname;
    private String varvalue;

    public TblregistryId getId() {
        return id;
    }

    public void setId(TblregistryId id) {
        this.id = id;
    }

    public String getEntity() {
        return entity;
    }

    public void setEntity(String entity) {
        this.entity = entity;
    }

    public String getAppid() {
        return appid;
    }

    public void setAppid(String appid) {
        this.appid = appid;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public Date getRegdate() {
        return regdate;
    }

    public void setRegdate(Date regdate) {
        this.regdate = regdate;
    }

    public String getVarname() {
        return varname;
    }

    public void setVarname(String varname) {
        this.varname = varname;
    }

    public String getVarvalue() {
        return varvalue;
    }

    public void setVarvalue(String varvalue) {
        this.varvalue = varvalue;
    }

}
