
package com.dbwaveerp.data;

import java.util.Date;


/**
 *  dbwaveerp.Tblsoln
 *  07/17/2013 22:12:24
 * 
 */
public class Tblsoln {

    private Integer seqid;
    private String juid;
    private String entityid;
    private String solnid;
    private String description;
    private String sstatus;
    private String chargecodeid;
    private Date startdate;
    private Date enddate;
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

    public String getSolnid() {
        return solnid;
    }

    public void setSolnid(String solnid) {
        this.solnid = solnid;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSstatus() {
        return sstatus;
    }

    public void setSstatus(String sstatus) {
        this.sstatus = sstatus;
    }

    public String getChargecodeid() {
        return chargecodeid;
    }

    public void setChargecodeid(String chargecodeid) {
        this.chargecodeid = chargecodeid;
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

    public Integer getDeleted() {
        return deleted;
    }

    public void setDeleted(Integer deleted) {
        this.deleted = deleted;
    }

}
