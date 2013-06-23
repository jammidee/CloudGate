
package com.dbwaveerp.data;



/**
 *  dbwaveerp.Wlmloadbalscheme
 *  05/21/2013 13:12:01
 * 
 */
public class Wlmloadbalscheme {

    private String juid;
    private Integer seqno;
    private String serverid;
    private String servername;
    private String appid;
    private String portno;
    private Integer curseq;
    private Integer nextseq;
    private String sstatus;
    private Integer deleted;

    public String getJuid() {
        return juid;
    }

    public void setJuid(String juid) {
        this.juid = juid;
    }

    public Integer getSeqno() {
        return seqno;
    }

    public void setSeqno(Integer seqno) {
        this.seqno = seqno;
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

    public String getAppid() {
        return appid;
    }

    public void setAppid(String appid) {
        this.appid = appid;
    }

    public String getPortno() {
        return portno;
    }

    public void setPortno(String portno) {
        this.portno = portno;
    }

    public Integer getCurseq() {
        return curseq;
    }

    public void setCurseq(Integer curseq) {
        this.curseq = curseq;
    }

    public Integer getNextseq() {
        return nextseq;
    }

    public void setNextseq(Integer nextseq) {
        this.nextseq = nextseq;
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
