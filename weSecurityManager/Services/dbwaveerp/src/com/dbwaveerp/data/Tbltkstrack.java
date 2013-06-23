
package com.dbwaveerp.data;

import java.util.Date;


/**
 *  dbwaveerp.Tbltkstrack
 *  05/21/2013 13:12:01
 * 
 */
public class Tbltkstrack {

    private Integer seqid;
    private String juid;
    private String ticketid;
    private Date logdate;
    private String statusid;
    private String clock;

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

    public String getTicketid() {
        return ticketid;
    }

    public void setTicketid(String ticketid) {
        this.ticketid = ticketid;
    }

    public Date getLogdate() {
        return logdate;
    }

    public void setLogdate(Date logdate) {
        this.logdate = logdate;
    }

    public String getStatusid() {
        return statusid;
    }

    public void setStatusid(String statusid) {
        this.statusid = statusid;
    }

    public String getClock() {
        return clock;
    }

    public void setClock(String clock) {
        this.clock = clock;
    }

}
