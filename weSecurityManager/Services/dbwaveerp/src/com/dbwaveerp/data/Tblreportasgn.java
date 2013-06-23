
package com.dbwaveerp.data;

import java.util.Date;


/**
 *  dbwaveerp.Tblreportasgn
 *  05/21/2013 13:12:01
 * 
 */
public class Tblreportasgn {

    private String juid;
    private String entityid;
    private String reportgrpid;
    private String userid;
    private String username;
    private Date startdate;
    private Date enddate;
    private String sstatus;
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

    public String getReportgrpid() {
        return reportgrpid;
    }

    public void setReportgrpid(String reportgrpid) {
        this.reportgrpid = reportgrpid;
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

    public Integer getDeleted() {
        return deleted;
    }

    public void setDeleted(Integer deleted) {
        this.deleted = deleted;
    }

}
