
package com.dbwaveerp.data;

import java.util.Date;


/**
 *  dbwaveerp.Tblcomp
 *  05/21/2013 13:12:01
 * 
 */
public class Tblcomp {

    private Integer seqid;
    private String juid;
    private String entityid;
    private String compid;
    private String description;
    private String sstatus;
    private String solnid;
    private String solndesc;
    private String chargecodeid;
    private String chargecodedesc;
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

    public String getCompid() {
        return compid;
    }

    public void setCompid(String compid) {
        this.compid = compid;
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

    public String getSolnid() {
        return solnid;
    }

    public void setSolnid(String solnid) {
        this.solnid = solnid;
    }

    public String getSolndesc() {
        return solndesc;
    }

    public void setSolndesc(String solndesc) {
        this.solndesc = solndesc;
    }

    public String getChargecodeid() {
        return chargecodeid;
    }

    public void setChargecodeid(String chargecodeid) {
        this.chargecodeid = chargecodeid;
    }

    public String getChargecodedesc() {
        return chargecodedesc;
    }

    public void setChargecodedesc(String chargecodedesc) {
        this.chargecodedesc = chargecodedesc;
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
