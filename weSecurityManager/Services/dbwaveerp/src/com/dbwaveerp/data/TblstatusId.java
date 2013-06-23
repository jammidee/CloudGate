
package com.dbwaveerp.data;

import java.io.Serializable;


/**
 *  dbwaveerp.TblstatusId
 *  05/21/2013 13:12:01
 * 
 */
public class TblstatusId
    implements Serializable
{

    private Integer seqid;
    private String juid;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof TblstatusId)) {
            return false;
        }
        TblstatusId other = ((TblstatusId) o);
        if (this.seqid == null) {
            if (other.seqid!= null) {
                return false;
            }
        } else {
            if (!this.seqid.equals(other.seqid)) {
                return false;
            }
        }
        if (this.juid == null) {
            if (other.juid!= null) {
                return false;
            }
        } else {
            if (!this.juid.equals(other.juid)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.seqid!= null) {
            rtn = (rtn + this.seqid.hashCode());
        }
        rtn = (rtn* 37);
        if (this.juid!= null) {
            rtn = (rtn + this.juid.hashCode());
        }
        return rtn;
    }

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

}
