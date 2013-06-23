
package com.dbwaveerp.data;

import java.util.Date;


/**
 *  dbwaveerp.Tfsclsstud
 *  05/04/2012 23:05:51
 * 
 */
public class Tfsclsstud {

    private Integer seqid;
    private String entityid;
    private String classid;
    private String studid;
    private String fname;
    private String mname;
    private String lname;
    private Float grade;
    private String passed;
    private String userid;
    private Date datecomplete;
    private String approved;
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

    public String getStudid() {
        return studid;
    }

    public void setStudid(String studid) {
        this.studid = studid;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getMname() {
        return mname;
    }

    public void setMname(String mname) {
        this.mname = mname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public Float getGrade() {
        return grade;
    }

    public void setGrade(Float grade) {
        this.grade = grade;
    }

    public String getPassed() {
        return passed;
    }

    public void setPassed(String passed) {
        this.passed = passed;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public Date getDatecomplete() {
        return datecomplete;
    }

    public void setDatecomplete(Date datecomplete) {
        this.datecomplete = datecomplete;
    }

    public String getApproved() {
        return approved;
    }

    public void setApproved(String approved) {
        this.approved = approved;
    }

    public String getSstatus() {
        return sstatus;
    }

    public void setSstatus(String sstatus) {
        this.sstatus = sstatus;
    }

}
