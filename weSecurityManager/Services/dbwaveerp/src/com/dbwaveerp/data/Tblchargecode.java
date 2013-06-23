
package com.dbwaveerp.data;

import java.util.Date;


/**
 *  dbwaveerp.Tblchargecode
 *  05/21/2013 13:12:01
 * 
 */
public class Tblchargecode {

    private Integer seqid;
    private String juid;
    private String entityid;
    private String chargecodeid;
    private String description;
    private String solnid;
    private String solndesc;
    private String compid;
    private String compdesc;
    private String sstatus;
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

    public String getChargecodeid() {
        return chargecodeid;
    }

    public void setChargecodeid(String chargecodeid) {
        this.chargecodeid = chargecodeid;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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

    public String getCompid() {
        return compid;
    }

    public void setCompid(String compid) {
        this.compid = compid;
    }

    public String getCompdesc() {
        return compdesc;
    }

    public void setCompdesc(String compdesc) {
        this.compdesc = compdesc;
    }

    public String getSstatus() {
        return sstatus;
    }

    public void setSstatus(String sstatus) {
        this.sstatus = sstatus;
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
