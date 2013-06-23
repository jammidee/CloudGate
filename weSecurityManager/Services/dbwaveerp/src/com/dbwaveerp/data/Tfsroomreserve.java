
package com.dbwaveerp.data;

import java.util.Date;


/**
 *  dbwaveerp.Tfsroomreserve
 *  05/04/2012 23:05:51
 * 
 */
public class Tfsroomreserve {

    private Integer seqid;
    private String entityid;
    private String reserveid;
    private String reservetype;
    private String reservedesc;
    private String classid;
    private String roomid;
    private String notes;
    private Date startdate;
    private Date enddate;
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

    public String getReserveid() {
        return reserveid;
    }

    public void setReserveid(String reserveid) {
        this.reserveid = reserveid;
    }

    public String getReservetype() {
        return reservetype;
    }

    public void setReservetype(String reservetype) {
        this.reservetype = reservetype;
    }

    public String getReservedesc() {
        return reservedesc;
    }

    public void setReservedesc(String reservedesc) {
        this.reservedesc = reservedesc;
    }

    public String getClassid() {
        return classid;
    }

    public void setClassid(String classid) {
        this.classid = classid;
    }

    public String getRoomid() {
        return roomid;
    }

    public void setRoomid(String roomid) {
        this.roomid = roomid;
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
