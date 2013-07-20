
package com.dbwaveerp.data;

import java.util.Date;


/**
 *  dbwaveerp.Tblentity
 *  07/17/2013 22:12:24
 * 
 */
public class Tblentity {

    private Integer seqid;
    private String juid;
    private String entityid;
    private String company;
    private String description;
    private String addr01;
    private String addr02;
    private String addr03;
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

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAddr01() {
        return addr01;
    }

    public void setAddr01(String addr01) {
        this.addr01 = addr01;
    }

    public String getAddr02() {
        return addr02;
    }

    public void setAddr02(String addr02) {
        this.addr02 = addr02;
    }

    public String getAddr03() {
        return addr03;
    }

    public void setAddr03(String addr03) {
        this.addr03 = addr03;
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
