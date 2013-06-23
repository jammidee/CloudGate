
package com.dbwaveerp.data;

import java.util.Date;


/**
 *  dbwaveerp.Tbllogging
 *  05/21/2013 13:12:01
 * 
 */
public class Tbllogging {

    private Integer seqid;
    private String juid;
    private String userid;
    private String description;
    private String serverid;
    private String appid;
    private Integer loglevel;
    private Date logdate;

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

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getServerid() {
        return serverid;
    }

    public void setServerid(String serverid) {
        this.serverid = serverid;
    }

    public String getAppid() {
        return appid;
    }

    public void setAppid(String appid) {
        this.appid = appid;
    }

    public Integer getLoglevel() {
        return loglevel;
    }

    public void setLoglevel(Integer loglevel) {
        this.loglevel = loglevel;
    }

    public Date getLogdate() {
        return logdate;
    }

    public void setLogdate(Date logdate) {
        this.logdate = logdate;
    }

}
