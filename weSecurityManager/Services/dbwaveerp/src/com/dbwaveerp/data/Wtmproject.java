
package com.dbwaveerp.data;

import java.math.BigDecimal;
import java.util.Date;


/**
 *  dbwaveerp.Wtmproject
 *  05/21/2013 13:12:01
 * 
 */
public class Wtmproject {

    private String juid;
    private String entityid;
    private String projectid;
    private String description;
    private BigDecimal budhours;
    private Date startdate;
    private Date enddate;
    private String sstatus;
    private Integer deleted;

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

    public String getProjectid() {
        return projectid;
    }

    public void setProjectid(String projectid) {
        this.projectid = projectid;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BigDecimal getBudhours() {
        return budhours;
    }

    public void setBudhours(BigDecimal budhours) {
        this.budhours = budhours;
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

    public Integer getDeleted() {
        return deleted;
    }

    public void setDeleted(Integer deleted) {
        this.deleted = deleted;
    }

}
