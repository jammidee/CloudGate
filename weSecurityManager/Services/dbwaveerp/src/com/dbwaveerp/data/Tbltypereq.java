
package com.dbwaveerp.data;

import java.util.Date;


/**
 *  dbwaveerp.Tbltypereq
 *  07/17/2013 22:12:24
 * 
 */
public class Tbltypereq {

    private Integer seqid;
    private String juid;
    private String entityid;
    private String reqtypeid;
    private String description;
    private Date startdate;
    private Date enddate;
    private String sstatus;
    private Integer deleted;

    public Integer getSeqid() {
        return seqid;
    }

    public void setSeqid(Integer seqid) {
        this.seqid = seqid;
    }

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

    public String getReqtypeid() {
        return reqtypeid;
    }

    public void setReqtypeid(String reqtypeid) {
        this.reqtypeid = reqtypeid;
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

    public Integer getDeleted() {
        return deleted;
    }

    public void setDeleted(Integer deleted) {
        this.deleted = deleted;
    }

}
