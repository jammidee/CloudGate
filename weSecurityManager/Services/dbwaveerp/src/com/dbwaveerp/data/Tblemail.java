
package com.dbwaveerp.data;

import java.util.Date;


/**
 *  dbwaveerp.Tblemail
 *  07/17/2013 22:12:24
 * 
 */
public class Tblemail {

    private String juid;
    private String entityid;
    private Date emldate;
    private String emlfrom;
    private String emlto;
    private String emlcc;
    private String emlbcc;
    private String emlsubject;
    private String emlbody;
    private String emlfolder;
    private String userid;
    private String priority;
    private String sstatus;
    private String attachid;

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

    public Date getEmldate() {
        return emldate;
    }

    public void setEmldate(Date emldate) {
        this.emldate = emldate;
    }

    public String getEmlfrom() {
        return emlfrom;
    }

    public void setEmlfrom(String emlfrom) {
        this.emlfrom = emlfrom;
    }

    public String getEmlto() {
        return emlto;
    }

    public void setEmlto(String emlto) {
        this.emlto = emlto;
    }

    public String getEmlcc() {
        return emlcc;
    }

    public void setEmlcc(String emlcc) {
        this.emlcc = emlcc;
    }

    public String getEmlbcc() {
        return emlbcc;
    }

    public void setEmlbcc(String emlbcc) {
        this.emlbcc = emlbcc;
    }

    public String getEmlsubject() {
        return emlsubject;
    }

    public void setEmlsubject(String emlsubject) {
        this.emlsubject = emlsubject;
    }

    public String getEmlbody() {
        return emlbody;
    }

    public void setEmlbody(String emlbody) {
        this.emlbody = emlbody;
    }

    public String getEmlfolder() {
        return emlfolder;
    }

    public void setEmlfolder(String emlfolder) {
        this.emlfolder = emlfolder;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public String getSstatus() {
        return sstatus;
    }

    public void setSstatus(String sstatus) {
        this.sstatus = sstatus;
    }

    public String getAttachid() {
        return attachid;
    }

    public void setAttachid(String attachid) {
        this.attachid = attachid;
    }

}
