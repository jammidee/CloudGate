
package com.dbwaveerp.data;

import java.util.Date;


/**
 *  dbwaveerp.Tblsessions
 *  07/17/2013 22:12:24
 * 
 */
public class Tblsessions {

    private String juid;
    private String entityid;
    private String appid;
    private String serverid;
    private Date timecreate;
    private Date timemodify;
    private Integer timetolive;
    private Integer timeleft;
    private String userid;
    private String username;
    private String sstatus;

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

    public String getAppid() {
        return appid;
    }

    public void setAppid(String appid) {
        this.appid = appid;
    }

    public String getServerid() {
        return serverid;
    }

    public void setServerid(String serverid) {
        this.serverid = serverid;
    }

    public Date getTimecreate() {
        return timecreate;
    }

    public void setTimecreate(Date timecreate) {
        this.timecreate = timecreate;
    }

    public Date getTimemodify() {
        return timemodify;
    }

    public void setTimemodify(Date timemodify) {
        this.timemodify = timemodify;
    }

    public Integer getTimetolive() {
        return timetolive;
    }

    public void setTimetolive(Integer timetolive) {
        this.timetolive = timetolive;
    }

    public Integer getTimeleft() {
        return timeleft;
    }

    public void setTimeleft(Integer timeleft) {
        this.timeleft = timeleft;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getSstatus() {
        return sstatus;
    }

    public void setSstatus(String sstatus) {
        this.sstatus = sstatus;
    }

}
