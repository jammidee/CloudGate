
package com.dbwaveerp.data;

import java.util.Date;


/**
 *  dbwaveerp.Tbllog
 *  07/17/2013 22:12:24
 * 
 */
public class Tbllog {

    private String juid;
    private Date logdatetime;
    private String userid;
    private String msg;
    private String moduleid;
    private String proccess;
    private String serverid;
    private String appid;
    private String scopeid;
    private Integer stype;
    private String entity;

    public String getJuid() {
        return juid;
    }

    public void setJuid(String juid) {
        this.juid = juid;
    }

    public Date getLogdatetime() {
        return logdatetime;
    }

    public void setLogdatetime(Date logdatetime) {
        this.logdatetime = logdatetime;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public String getModuleid() {
        return moduleid;
    }

    public void setModuleid(String moduleid) {
        this.moduleid = moduleid;
    }

    public String getProccess() {
        return proccess;
    }

    public void setProccess(String proccess) {
        this.proccess = proccess;
    }

    public String getServerid() {
        return serverid;
    }

    public void setServerid(String serverid) {
        this.serverid = serverid;
    }

    public String getAppid() {
        return appid;
    }

    public void setAppid(String appid) {
        this.appid = appid;
    }

    public String getScopeid() {
        return scopeid;
    }

    public void setScopeid(String scopeid) {
        this.scopeid = scopeid;
    }

    public Integer getStype() {
        return stype;
    }

    public void setStype(Integer stype) {
        this.stype = stype;
    }

    public String getEntity() {
        return entity;
    }

    public void setEntity(String entity) {
        this.entity = entity;
    }

}
