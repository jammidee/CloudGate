
package com.dbwaveerp.data;

import java.util.Date;


/**
 *  dbwaveerp.Wtmtimedatalocation
 *  05/21/2013 13:12:01
 * 
 */
public class Wtmtimedatalocation {

    private String juid;
    private String entityid;
    private String empid;
    private String fname;
    private String mname;
    private String lname;
    private Date locdate;
    private Date loctime;
    private String locdept;
    private Double geolon;
    private Double geolat;
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

    public String getEmpid() {
        return empid;
    }

    public void setEmpid(String empid) {
        this.empid = empid;
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

    public Date getLocdate() {
        return locdate;
    }

    public void setLocdate(Date locdate) {
        this.locdate = locdate;
    }

    public Date getLoctime() {
        return loctime;
    }

    public void setLoctime(Date loctime) {
        this.loctime = loctime;
    }

    public String getLocdept() {
        return locdept;
    }

    public void setLocdept(String locdept) {
        this.locdept = locdept;
    }

    public Double getGeolon() {
        return geolon;
    }

    public void setGeolon(Double geolon) {
        this.geolon = geolon;
    }

    public Double getGeolat() {
        return geolat;
    }

    public void setGeolat(Double geolat) {
        this.geolat = geolat;
    }

    public Integer getDeleted() {
        return deleted;
    }

    public void setDeleted(Integer deleted) {
        this.deleted = deleted;
    }

}
