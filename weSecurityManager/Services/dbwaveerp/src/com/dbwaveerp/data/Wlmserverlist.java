
package com.dbwaveerp.data;



/**
 *  dbwaveerp.Wlmserverlist
 *  07/17/2013 22:12:24
 * 
 */
public class Wlmserverlist {

    private String juid;
    private String farmid;
    private String serverid;
    private String servername;
    private Integer conusers;
    private String strictlimit;
    private String sstatus;
    private Integer deleted;

    public String getJuid() {
        return juid;
    }

    public void setJuid(String juid) {
        this.juid = juid;
    }

    public String getFarmid() {
        return farmid;
    }

    public void setFarmid(String farmid) {
        this.farmid = farmid;
    }

    public String getServerid() {
        return serverid;
    }

    public void setServerid(String serverid) {
        this.serverid = serverid;
    }

    public String getServername() {
        return servername;
    }

    public void setServername(String servername) {
        this.servername = servername;
    }

    public Integer getConusers() {
        return conusers;
    }

    public void setConusers(Integer conusers) {
        this.conusers = conusers;
    }

    public String getStrictlimit() {
        return strictlimit;
    }

    public void setStrictlimit(String strictlimit) {
        this.strictlimit = strictlimit;
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
