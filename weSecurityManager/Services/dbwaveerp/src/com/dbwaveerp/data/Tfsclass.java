
package com.dbwaveerp.data;

import java.util.Date;


/**
 *  dbwaveerp.Tfsclass
 *  05/04/2012 23:05:51
 * 
 */
public class Tfsclass {

    private Integer seqid;
    private String entityid;
    private String classid;
    private String classdesc;
    private String notes;
    private String trnid;
    private String roomid;
    private Integer slots;
    private Float classfee;
    private String instid;
    private Date startdate;
    private Date enddate;
    private Date datecreated;
    private String sstatus;

    public Integer getSeqid() {
        return seqid;
    }

    public void setSeqid(Integer seqid) {
        this.seqid = seqid;
    }

    public String getEntityid() {
        return entityid;
    }

    public void setEntityid(String entityid) {
        this.entityid = entityid;
    }

    public String getClassid() {
        return classid;
    }

    public void setClassid(String classid) {
        this.classid = classid;
    }

    public String getClassdesc() {
        return classdesc;
    }

    public void setClassdesc(String classdesc) {
        this.classdesc = classdesc;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public String getTrnid() {
        return trnid;
    }

    public void setTrnid(String trnid) {
        this.trnid = trnid;
    }

    public String getRoomid() {
        return roomid;
    }

    public void setRoomid(String roomid) {
        this.roomid = roomid;
    }

    public Integer getSlots() {
        return slots;
    }

    public void setSlots(Integer slots) {
        this.slots = slots;
    }

    public Float getClassfee() {
        return classfee;
    }

    public void setClassfee(Float classfee) {
        this.classfee = classfee;
    }

    public String getInstid() {
        return instid;
    }

    public void setInstid(String instid) {
        this.instid = instid;
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

    public Date getDatecreated() {
        return datecreated;
    }

    public void setDatecreated(Date datecreated) {
        this.datecreated = datecreated;
    }

    public String getSstatus() {
        return sstatus;
    }

    public void setSstatus(String sstatus) {
        this.sstatus = sstatus;
    }

}
