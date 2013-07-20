
package com.dbwaveerp.data;



/**
 *  dbwaveerp.Tblattachment
 *  07/17/2013 22:12:24
 * 
 */
public class Tblattachment {

    private Integer seqid;
    private String juid;
    private String entityid;
    private String userid;
    private String ticketid;
    private byte[] filedata;
    private String filename;
    private String filext;

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

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public String getTicketid() {
        return ticketid;
    }

    public void setTicketid(String ticketid) {
        this.ticketid = ticketid;
    }

    public byte[] getFiledata() {
        return filedata;
    }

    public void setFiledata(byte[] filedata) {
        this.filedata = filedata;
    }

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public String getFilext() {
        return filext;
    }

    public void setFilext(String filext) {
        this.filext = filext;
    }

}
