
package com.dbwaveerp.data;

import java.math.BigDecimal;
import java.util.Date;


/**
 *  dbwaveerp.Wtmprojactivities
 *  05/21/2013 13:12:01
 * 
 */
public class Wtmprojactivities {

    private String juid;
    private String entityid;
    private String projectid;
    private String projactid;
    private String description;
    private String acttype;
    private BigDecimal rateoutput;
    private BigDecimal ratehour;
    private BigDecimal budhours;
    private String chargecode;
    private String location;
    private String supervisor;
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

    public String getProjactid() {
        return projactid;
    }

    public void setProjactid(String projactid) {
        this.projactid = projactid;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getActtype() {
        return acttype;
    }

    public void setActtype(String acttype) {
        this.acttype = acttype;
    }

    public BigDecimal getRateoutput() {
        return rateoutput;
    }

    public void setRateoutput(BigDecimal rateoutput) {
        this.rateoutput = rateoutput;
    }

    public BigDecimal getRatehour() {
        return ratehour;
    }

    public void setRatehour(BigDecimal ratehour) {
        this.ratehour = ratehour;
    }

    public BigDecimal getBudhours() {
        return budhours;
    }

    public void setBudhours(BigDecimal budhours) {
        this.budhours = budhours;
    }

    public String getChargecode() {
        return chargecode;
    }

    public void setChargecode(String chargecode) {
        this.chargecode = chargecode;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getSupervisor() {
        return supervisor;
    }

    public void setSupervisor(String supervisor) {
        this.supervisor = supervisor;
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
