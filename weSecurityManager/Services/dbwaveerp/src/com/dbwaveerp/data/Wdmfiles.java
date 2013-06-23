
package com.dbwaveerp.data;

import java.util.Date;


/**
 *  dbwaveerp.Wdmfiles
 *  05/21/2013 13:12:01
 * 
 */
public class Wdmfiles {

    private String juid;
    private String entity;
    private String appid;
    private String filegrp;
    private String filecat;
    private String userid;
    private byte[] filedata;
    private String filename;
    private String filext;
    private String filesize;
    private Date filedate;
    private String filesrc;
    private Integer ispicture;
    private Integer ispdf;
    private Integer hasviewer;

    public String getJuid() {
        return juid;
    }

    public void setJuid(String juid) {
        this.juid = juid;
    }

    public String getEntity() {
        return entity;
    }

    public void setEntity(String entity) {
        this.entity = entity;
    }

    public String getAppid() {
        return appid;
    }

    public void setAppid(String appid) {
        this.appid = appid;
    }

    public String getFilegrp() {
        return filegrp;
    }

    public void setFilegrp(String filegrp) {
        this.filegrp = filegrp;
    }

    public String getFilecat() {
        return filecat;
    }

    public void setFilecat(String filecat) {
        this.filecat = filecat;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public byte[] getFiledata() {
        return filedata;
    }

    public void setFiledata(byte[] filedata) {
        this.filedata = filedata;
    }

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public String getFilext() {
        return filext;
    }

    public void setFilext(String filext) {
        this.filext = filext;
    }

    public String getFilesize() {
        return filesize;
    }

    public void setFilesize(String filesize) {
        this.filesize = filesize;
    }

    public Date getFiledate() {
        return filedate;
    }

    public void setFiledate(Date filedate) {
        this.filedate = filedate;
    }

    public String getFilesrc() {
        return filesrc;
    }

    public void setFilesrc(String filesrc) {
        this.filesrc = filesrc;
    }

    public Integer getIspicture() {
        return ispicture;
    }

    public void setIspicture(Integer ispicture) {
        this.ispicture = ispicture;
    }

    public Integer getIspdf() {
        return ispdf;
    }

    public void setIspdf(Integer ispdf) {
        this.ispdf = ispdf;
    }

    public Integer getHasviewer() {
        return hasviewer;
    }

    public void setHasviewer(Integer hasviewer) {
        this.hasviewer = hasviewer;
    }

}
