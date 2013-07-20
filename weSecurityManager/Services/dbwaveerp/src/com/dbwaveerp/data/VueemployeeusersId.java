
package com.dbwaveerp.data;

import java.io.Serializable;


/**
 *  dbwaveerp.VueemployeeusersId
 *  07/17/2013 22:12:24
 * 
 */
public class VueemployeeusersId
    implements Serializable
{

    private String userid;
    private String partyid;
    private String badgeid;
    private String email;
    private String divisionid;
    private String departmentid;
    private String sectionid;
    private String locationid;
    private String restdayid;
    private String shiftid;
    private String managerid;
    private String sstatus;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof VueemployeeusersId)) {
            return false;
        }
        VueemployeeusersId other = ((VueemployeeusersId) o);
        if (this.userid == null) {
            if (other.userid!= null) {
                return false;
            }
        } else {
            if (!this.userid.equals(other.userid)) {
                return false;
            }
        }
        if (this.partyid == null) {
            if (other.partyid!= null) {
                return false;
            }
        } else {
            if (!this.partyid.equals(other.partyid)) {
                return false;
            }
        }
        if (this.badgeid == null) {
            if (other.badgeid!= null) {
                return false;
            }
        } else {
            if (!this.badgeid.equals(other.badgeid)) {
                return false;
            }
        }
        if (this.email == null) {
            if (other.email!= null) {
                return false;
            }
        } else {
            if (!this.email.equals(other.email)) {
                return false;
            }
        }
        if (this.divisionid == null) {
            if (other.divisionid!= null) {
                return false;
            }
        } else {
            if (!this.divisionid.equals(other.divisionid)) {
                return false;
            }
        }
        if (this.departmentid == null) {
            if (other.departmentid!= null) {
                return false;
            }
        } else {
            if (!this.departmentid.equals(other.departmentid)) {
                return false;
            }
        }
        if (this.sectionid == null) {
            if (other.sectionid!= null) {
                return false;
            }
        } else {
            if (!this.sectionid.equals(other.sectionid)) {
                return false;
            }
        }
        if (this.locationid == null) {
            if (other.locationid!= null) {
                return false;
            }
        } else {
            if (!this.locationid.equals(other.locationid)) {
                return false;
            }
        }
        if (this.restdayid == null) {
            if (other.restdayid!= null) {
                return false;
            }
        } else {
            if (!this.restdayid.equals(other.restdayid)) {
                return false;
            }
        }
        if (this.shiftid == null) {
            if (other.shiftid!= null) {
                return false;
            }
        } else {
            if (!this.shiftid.equals(other.shiftid)) {
                return false;
            }
        }
        if (this.managerid == null) {
            if (other.managerid!= null) {
                return false;
            }
        } else {
            if (!this.managerid.equals(other.managerid)) {
                return false;
            }
        }
        if (this.sstatus == null) {
            if (other.sstatus!= null) {
                return false;
            }
        } else {
            if (!this.sstatus.equals(other.sstatus)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.userid!= null) {
            rtn = (rtn + this.userid.hashCode());
        }
        rtn = (rtn* 37);
        if (this.partyid!= null) {
            rtn = (rtn + this.partyid.hashCode());
        }
        rtn = (rtn* 37);
        if (this.badgeid!= null) {
            rtn = (rtn + this.badgeid.hashCode());
        }
        rtn = (rtn* 37);
        if (this.email!= null) {
            rtn = (rtn + this.email.hashCode());
        }
        rtn = (rtn* 37);
        if (this.divisionid!= null) {
            rtn = (rtn + this.divisionid.hashCode());
        }
        rtn = (rtn* 37);
        if (this.departmentid!= null) {
            rtn = (rtn + this.departmentid.hashCode());
        }
        rtn = (rtn* 37);
        if (this.sectionid!= null) {
            rtn = (rtn + this.sectionid.hashCode());
        }
        rtn = (rtn* 37);
        if (this.locationid!= null) {
            rtn = (rtn + this.locationid.hashCode());
        }
        rtn = (rtn* 37);
        if (this.restdayid!= null) {
            rtn = (rtn + this.restdayid.hashCode());
        }
        rtn = (rtn* 37);
        if (this.shiftid!= null) {
            rtn = (rtn + this.shiftid.hashCode());
        }
        rtn = (rtn* 37);
        if (this.managerid!= null) {
            rtn = (rtn + this.managerid.hashCode());
        }
        rtn = (rtn* 37);
        if (this.sstatus!= null) {
            rtn = (rtn + this.sstatus.hashCode());
        }
        return rtn;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public String getPartyid() {
        return partyid;
    }

    public void setPartyid(String partyid) {
        this.partyid = partyid;
    }

    public String getBadgeid() {
        return badgeid;
    }

    public void setBadgeid(String badgeid) {
        this.badgeid = badgeid;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDivisionid() {
        return divisionid;
    }

    public void setDivisionid(String divisionid) {
        this.divisionid = divisionid;
    }

    public String getDepartmentid() {
        return departmentid;
    }

    public void setDepartmentid(String departmentid) {
        this.departmentid = departmentid;
    }

    public String getSectionid() {
        return sectionid;
    }

    public void setSectionid(String sectionid) {
        this.sectionid = sectionid;
    }

    public String getLocationid() {
        return locationid;
    }

    public void setLocationid(String locationid) {
        this.locationid = locationid;
    }

    public String getRestdayid() {
        return restdayid;
    }

    public void setRestdayid(String restdayid) {
        this.restdayid = restdayid;
    }

    public String getShiftid() {
        return shiftid;
    }

    public void setShiftid(String shiftid) {
        this.shiftid = shiftid;
    }

    public String getManagerid() {
        return managerid;
    }

    public void setManagerid(String managerid) {
        this.managerid = managerid;
    }

    public String getSstatus() {
        return sstatus;
    }

    public void setSstatus(String sstatus) {
        this.sstatus = sstatus;
    }

}
