
package com.dbwaveerp.data;

import java.util.Date;


/**
 *  dbwaveerp.Wtmtimedatalocationsum
 *  07/17/2013 22:12:24
 * 
 */
public class Wtmtimedatalocationsum {

    private String juid;
    private String entityid;
    private Date locdate;
    private Date loctime;
    private String locdept;
    private Double geolon;
    private Double geolat;
    private Integer incnt;
    private Integer outcnt;
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

    public Integer getIncnt() {
        return incnt;
    }

    public void setIncnt(Integer incnt) {
        this.incnt = incnt;
    }

    public Integer getOutcnt() {
        return outcnt;
    }

    public void setOutcnt(Integer outcnt) {
        this.outcnt = outcnt;
    }

    public Integer getDeleted() {
        return deleted;
    }

    public void setDeleted(Integer deleted) {
        this.deleted = deleted;
    }

}
