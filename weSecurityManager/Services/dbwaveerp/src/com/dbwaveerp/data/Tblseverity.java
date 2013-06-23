
package com.dbwaveerp.data;

import java.util.Date;


/**
 *  dbwaveerp.Tblseverity
 *  05/21/2013 13:12:01
 * 
 */
public class Tblseverity {

    private Integer seqid;
    private String juid;
    private String entityid;
    private String severityid;
    private String description;
    private String sstatus;
    private String ticketid;
    private Date startdate;
    private Date enddate;
    private Integer deleted;
    private Float bizhours;
    private Float bizdays;
    private String userid;

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

    public String getSeverityid() {
        return severityid;
    }

    public void setSeverityid(String severityid) {
        this.severityid = severityid;
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

    public String getTicketid() {
        return ticketid;
    }

    public void setTicketid(String ticketid) {
        this.ticketid = ticketid;
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

    public Float getBizhours() {
        return bizhours;
    }

    public void setBizhours(Float bizhours) {
        this.bizhours = bizhours;
    }

    public Float getBizdays() {
        return bizdays;
    }

    public void setBizdays(Float bizdays) {
        this.bizdays = bizdays;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

}
