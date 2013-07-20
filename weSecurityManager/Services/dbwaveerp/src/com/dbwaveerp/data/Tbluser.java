
package com.dbwaveerp.data;

import java.util.Date;


/**
 *  dbwaveerp.Tbluser
 *  07/17/2013 22:12:24
 * 
 */
public class Tbluser {

    private TbluserId id;
    private String userid;
    private String entityid;
    private String password;
    private String passwdenc;
    private String username;
    private String firstname;
    private String middlename;
    private String lastname;
    private String sstatus;
    private String email;
    private String roleid;
    private Date startdate;
    private Date enddate;
    private byte[] userimg;
    private String userimgext;
    private String pid;
    private String parentPerson;
    private Integer deleted;

    public TbluserId getId() {
        return id;
    }

    public void setId(TbluserId id) {
        this.id = id;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public String getEntityid() {
        return entityid;
    }

    public void setEntityid(String entityid) {
        this.entityid = entityid;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPasswdenc() {
        return passwdenc;
    }

    public void setPasswdenc(String passwdenc) {
        this.passwdenc = passwdenc;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getMiddlename() {
        return middlename;
    }

    public void setMiddlename(String middlename) {
        this.middlename = middlename;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getSstatus() {
        return sstatus;
    }

    public void setSstatus(String sstatus) {
        this.sstatus = sstatus;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRoleid() {
        return roleid;
    }

    public void setRoleid(String roleid) {
        this.roleid = roleid;
    }

    public Date getStartdate() {
        return startdate;
    }

    public void setStartdate(Date startdate) {
        this.startdate = startdate;
    }

    public Date getEnddate() {
        return enddate;
    }

    public void setEnddate(Date enddate) {
        this.enddate = enddate;
    }

    public byte[] getUserimg() {
        return userimg;
    }

    public void setUserimg(byte[] userimg) {
        this.userimg = userimg;
    }

    public String getUserimgext() {
        return userimgext;
    }

    public void setUserimgext(String userimgext) {
        this.userimgext = userimgext;
    }

    public String getPid() {
        return pid;
    }

    public void setPid(String pid) {
        this.pid = pid;
    }

    public String getParentPerson() {
        return parentPerson;
    }

    public void setParentPerson(String parentPerson) {
        this.parentPerson = parentPerson;
    }

    public Integer getDeleted() {
        return deleted;
    }

    public void setDeleted(Integer deleted) {
        this.deleted = deleted;
    }

}
