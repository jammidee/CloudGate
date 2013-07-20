
package com.dbwaveerp.data;

import java.util.Date;


/**
 *  dbwaveerp.Wdmentityasgn
 *  07/17/2013 22:12:24
 * 
 */
public class Wdmentityasgn {

    private String juid;
    private String entityid;
    private String siteid;
    private String userid;
    private String username;
    private Date startdate;
    private Date enddate;
    private String sstatus;
    private String asgntype;
    private String asgnoverride;
    private Integer deleted;

    public String getJuid() {
        return juid;
    }

    public void setJuid(String juid) {
        this.juid = juid;
    }

    public String getEntityid() {
        return entityid;
    }

    public void setEntityid(String entityid) {
        this.entityid = entityid;
    }

    public String getSiteid() {
        return siteid;
    }

    public void setSiteid(String siteid) {
        this.siteid = siteid;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Date getStartdate() {
        return startdate;
    }

    public void setStartdate(Date startdate) {
        this.startdate = startdate;
    }

    public Date getEnddate() {
        return enddate;
    }

    public void setEnddate(Date enddate) {
        this.enddate = enddate;
    }

    public String getSstatus() {
        return sstatus;
    }

    public void setSstatus(String sstatus) {
        this.sstatus = sstatus;
    }

    public String getAsgntype() {
        return asgntype;
    }

    public void setAsgntype(String asgntype) {
        this.asgntype = asgntype;
    }

    public String getAsgnoverride() {
        return asgnoverride;
    }

    public void setAsgnoverride(String asgnoverride) {
        this.asgnoverride = asgnoverride;
    }

    public Integer getDeleted() {
        return deleted;
    }

    public void setDeleted(Integer deleted) {
        this.deleted = deleted;
    }

}
