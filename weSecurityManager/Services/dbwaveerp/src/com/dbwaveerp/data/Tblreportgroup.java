
package com.dbwaveerp.data;

import java.util.Date;


/**
 *  dbwaveerp.Tblreportgroup
 *  05/21/2013 13:12:01
 * 
 */
public class Tblreportgroup {

    private String juid;
    private String entityid;
    private String reportgrpid;
    private String description;
    private Date startdate;
    private Date enddate;
    private String sstatus;
    private String pid;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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

    public String getPid() {
        return pid;
    }

    public void setPid(String pid) {
        this.pid = pid;
    }

    public Integer getDeleted() {
        return deleted;
    }

    public void setDeleted(Integer deleted) {
        this.deleted = deleted;
    }

}
