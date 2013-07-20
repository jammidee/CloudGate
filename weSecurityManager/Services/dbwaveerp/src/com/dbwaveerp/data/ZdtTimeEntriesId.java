
package com.dbwaveerp.data;

import java.io.Serializable;


/**
 *  dbwaveerp.ZdtTimeEntriesId
 *  07/17/2013 22:12:24
 * 
 */
public class ZdtTimeEntriesId
    implements Serializable
{

    private String zbukrs;
    private String ztrtyp;
    private String zpernr;
    private String zldate;
    private String zltime;
    private String zsatza;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof ZdtTimeEntriesId)) {
            return false;
        }
        ZdtTimeEntriesId other = ((ZdtTimeEntriesId) o);
        if (this.zbukrs == null) {
            if (other.zbukrs!= null) {
                return false;
            }
        } else {
            if (!this.zbukrs.equals(other.zbukrs)) {
                return false;
            }
        }
        if (this.ztrtyp == null) {
            if (other.ztrtyp!= null) {
                return false;
            }
        } else {
            if (!this.ztrtyp.equals(other.ztrtyp)) {
                return false;
            }
        }
        if (this.zpernr == null) {
            if (other.zpernr!= null) {
                return false;
            }
        } else {
            if (!this.zpernr.equals(other.zpernr)) {
                return false;
            }
        }
        if (this.zldate == null) {
            if (other.zldate!= null) {
                return false;
            }
        } else {
            if (!this.zldate.equals(other.zldate)) {
                return false;
            }
        }
        if (this.zltime == null) {
            if (other.zltime!= null) {
                return false;
            }
        } else {
            if (!this.zltime.equals(other.zltime)) {
                return false;
            }
        }
        if (this.zsatza == null) {
            if (other.zsatza!= null) {
                return false;
            }
        } else {
            if (!this.zsatza.equals(other.zsatza)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.zbukrs!= null) {
            rtn = (rtn + this.zbukrs.hashCode());
        }
        rtn = (rtn* 37);
        if (this.ztrtyp!= null) {
            rtn = (rtn + this.ztrtyp.hashCode());
        }
        rtn = (rtn* 37);
        if (this.zpernr!= null) {
            rtn = (rtn + this.zpernr.hashCode());
        }
        rtn = (rtn* 37);
        if (this.zldate!= null) {
            rtn = (rtn + this.zldate.hashCode());
        }
        rtn = (rtn* 37);
        if (this.zltime!= null) {
            rtn = (rtn + this.zltime.hashCode());
        }
        rtn = (rtn* 37);
        if (this.zsatza!= null) {
            rtn = (rtn + this.zsatza.hashCode());
        }
        return rtn;
    }

    public String getZbukrs() {
        return zbukrs;
    }

    public void setZbukrs(String zbukrs) {
        this.zbukrs = zbukrs;
    }

    public String getZtrtyp() {
        return ztrtyp;
    }

    public void setZtrtyp(String ztrtyp) {
        this.ztrtyp = ztrtyp;
    }

    public String getZpernr() {
        return zpernr;
    }

    public void setZpernr(String zpernr) {
        this.zpernr = zpernr;
    }

    public String getZldate() {
        return zldate;
    }

    public void setZldate(String zldate) {
        this.zldate = zldate;
    }

    public String getZltime() {
        return zltime;
    }

    public void setZltime(String zltime) {
        this.zltime = zltime;
    }

    public String getZsatza() {
        return zsatza;
    }

    public void setZsatza(String zsatza) {
        this.zsatza = zsatza;
    }

}
