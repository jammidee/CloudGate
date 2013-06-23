
package com.dbwaveerp.data;

import java.util.Date;


/**
 *  dbwaveerp.Wsmtraining
 *  05/21/2013 13:12:01
 * 
 */
public class Wsmtraining {

    private String juid;
    private String entityid;
    private String trnid;
    private String trndesc;
    private Integer nodays;
    private String notes;
    private Date startdate;
    private Date enddate;
    private String sstatus;

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

    public String getTrnid() {
        return trnid;
    }

    public void setTrnid(String trnid) {
        this.trnid = trnid;
    }

    public String getTrndesc() {
        return trndesc;
    }

    public void setTrndesc(String trndesc) {
        this.trndesc = trndesc;
    }

    public Integer getNodays() {
        return nodays;
    }

    public void setNodays(Integer nodays) {
        this.nodays = nodays;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
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

}
