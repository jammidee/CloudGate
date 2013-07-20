
package com.dbwaveerp;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import com.dbwaveerp.data.Tblaccessurl;
import com.dbwaveerp.data.Tbladmapping;
import com.dbwaveerp.data.Tblapplist;
import com.dbwaveerp.data.Tblbrowserlist;
import com.dbwaveerp.data.Tblconnprofile;
import com.dbwaveerp.data.Tblemployeeext;
import com.dbwaveerp.data.Tblentityasgn;
import com.dbwaveerp.data.Tbllog;
import com.dbwaveerp.data.Tblorgdepartment;
import com.dbwaveerp.data.Tblorgdivision;
import com.dbwaveerp.data.Tblorgrestday;
import com.dbwaveerp.data.Tblorgsection;
import com.dbwaveerp.data.Tblorgshift;
import com.dbwaveerp.data.Tblregistry;
import com.dbwaveerp.data.Tblrightasgn;
import com.dbwaveerp.data.Tblrole;
import com.dbwaveerp.data.Tblroleasgn;
import com.dbwaveerp.data.Tblsessions;
import com.dbwaveerp.data.Tbltypereq;
import com.dbwaveerp.data.output.GetEntityIDRtnType;
import com.dbwaveerp.data.output.QryEntityViewRtnType;
import com.dbwaveerp.data.output.QryGetUserRightsRtnType;
import com.dbwaveerp.data.output.QryMediaLibRtnType;
import com.wavemaker.json.type.TypeDefinition;
import com.wavemaker.runtime.data.DataServiceManager;
import com.wavemaker.runtime.data.DataServiceManagerAccess;
import com.wavemaker.runtime.data.TaskManager;
import com.wavemaker.runtime.service.LiveDataService;
import com.wavemaker.runtime.service.PagingOptions;
import com.wavemaker.runtime.service.PropertyOptions;
import com.wavemaker.runtime.service.TypedServiceReturn;


/**
 *  Operations for service "dbwaveerp"
 *  07/17/2013 22:28:41
 * 
 */
@SuppressWarnings("unchecked")
public class Dbwaveerp
    implements DataServiceManagerAccess, LiveDataService
{

    private DataServiceManager dsMgr;
    private TaskManager taskMgr;

    public List<com.dbwaveerp.data.Tbluser> qryUserView01(String pEntity, PagingOptions pagingOptions) {
        return ((List<com.dbwaveerp.data.Tbluser> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryUserView01QueryName), pEntity, pagingOptions));
    }

    public List<Tblentityasgn> qryEntityAsgnView(String pEntity, PagingOptions pagingOptions) {
        return ((List<Tblentityasgn> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryEntityAsgnViewQueryName), pEntity, pagingOptions));
    }

    public Integer qryEmployeeExtUpdate(String pParent, String pBadgeId, String pDivisionId, String pDivisionDesc, String pDepartmentId, String pDepartmentDesc, String pSectionId, String pSectionDesc, String pLocationId, String pLocationDesc, String pRestdayId, String pRestdayDesc, String pShiftId, String pShiftDesc, String pManagerId, String pManagerDesc, String pDeviceIn, String pDeviceOut, String pStatus, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryEmployeeExtUpdateQueryName), pParent, pBadgeId, pDivisionId, pDivisionDesc, pDepartmentId, pDepartmentDesc, pSectionId, pSectionDesc, pLocationId, pLocationDesc, pRestdayId, pRestdayDesc, pShiftId, pShiftDesc, pManagerId, pManagerDesc, pDeviceIn, pDeviceOut, pStatus, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<Tblemployeeext> qryEmployeeExt(String pParent, PagingOptions pagingOptions) {
        return ((List<Tblemployeeext> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryEmployeeExtQueryName), pParent, pagingOptions));
    }

    public List<com.dbwaveerp.data.Tbluser> qryUserProfileView(String pUserId, PagingOptions pagingOptions) {
        return ((List<com.dbwaveerp.data.Tbluser> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryUserProfileViewQueryName), pUserId, pagingOptions));
    }

    public List<Tblrightasgn> qryRightAsgnView(String pRightId, String pRoleId, String pStatus, String pEntity, String pAppId, PagingOptions pagingOptions) {
        return ((List<Tblrightasgn> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryRightAsgnViewQueryName), pRightId, pRoleId, pStatus, pEntity, pAppId, pagingOptions));
    }

    public Integer qryUserView01Delete(String pEntity, String pUserId, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryUserView01DeleteQueryName), pEntity, pUserId, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<Tblbrowserlist> qryBrowserList(String pEntity, PagingOptions pagingOptions) {
        return ((List<Tblbrowserlist> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryBrowserListQueryName), pEntity, pagingOptions));
    }

    public List<Tbllog> qryLogList(String pEntity, Timestamp pStart, Timestamp pEnd, String pAppId, PagingOptions pagingOptions) {
        return ((List<Tbllog> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryLogListQueryName), pEntity, pStart, pEnd, pAppId, pagingOptions));
    }

    public List<QryGetUserRightsRtnType> qryGetUserRights(String pRoleId, PagingOptions pagingOptions) {
        return ((List<QryGetUserRightsRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryGetUserRightsQueryName), pRoleId, pagingOptions));
    }

    public List<com.dbwaveerp.data.Tblentity> qryEntity(PagingOptions pagingOptions) {
        return ((List<com.dbwaveerp.data.Tblentity> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryEntityQueryName), pagingOptions));
    }

    public List<com.dbwaveerp.data.Tblentity> qryEntitySelect(PagingOptions pagingOptions) {
        return ((List<com.dbwaveerp.data.Tblentity> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryEntitySelectQueryName), pagingOptions));
    }

    public List<com.dbwaveerp.data.Tbluser> qryUserView(String pUserId, String pEntityId, String pStatus, String pUsername, String pEmail, PagingOptions pagingOptions) {
        return ((List<com.dbwaveerp.data.Tbluser> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryUserViewQueryName), pUserId, pEntityId, pStatus, pUsername, pEmail, pagingOptions));
    }

    public List<com.dbwaveerp.data.Tblperson> qryPersonView(String pEntity, String pPartyId, PagingOptions pagingOptions) {
        return ((List<com.dbwaveerp.data.Tblperson> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryPersonViewQueryName), pEntity, pPartyId, pagingOptions));
    }

    public Integer qryEmployeeExtDelete(String pEntity, String pPartyId, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryEmployeeExtDeleteQueryName), pEntity, pPartyId, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<Tblorgdivision> qryTblOrgDivisionView(String pEntity, PagingOptions pagingOptions) {
        return ((List<Tblorgdivision> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryTblOrgDivisionViewQueryName), pEntity, pagingOptions));
    }

    public List<Tblorgdepartment> qryTblOrgDepartmentView(String pEntity, PagingOptions pagingOptions) {
        return ((List<Tblorgdepartment> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryTblOrgDepartmentViewQueryName), pEntity, pagingOptions));
    }

    public Integer updEntityAsgnView(String pStatus, String pEntity, String pJuid, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.updEntityAsgnViewQueryName), pStatus, pEntity, pJuid, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<Tblorgrestday> qryTblOrgRestdayView(String pEntity, PagingOptions pagingOptions) {
        return ((List<Tblorgrestday> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryTblOrgRestdayViewQueryName), pEntity, pagingOptions));
    }

    public List<GetEntityIDRtnType> getEntityID(PagingOptions pagingOptions) {
        return ((List<GetEntityIDRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.getEntityIDQueryName), pagingOptions));
    }

    public Integer qryPartyDelete(String pEntity, String pPartyId, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryPartyDeleteQueryName), pEntity, pPartyId, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<com.dbwaveerp.data.Tblrights> qryRightView(String pRightId, PagingOptions pagingOptions) {
        return ((List<com.dbwaveerp.data.Tblrights> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryRightViewQueryName), pRightId, pagingOptions));
    }

    public Integer qryUserProfileUpdate(String pFirstname, String pMiddlename, String pLastname, String pUserId, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryUserProfileUpdateQueryName), pFirstname, pMiddlename, pLastname, pUserId, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<com.dbwaveerp.data.Tblperson> qryPartyView01(String pEntity, PagingOptions pagingOptions) {
        return ((List<com.dbwaveerp.data.Tblperson> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryPartyView01QueryName), pEntity, pagingOptions));
    }

    public Integer qryLogDelete(String pJuid, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryLogDeleteQueryName), pJuid, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<Tblapplist> qryAppList(String pEntity, PagingOptions pagingOptions) {
        return ((List<Tblapplist> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryAppListQueryName), pEntity, pagingOptions));
    }

    public Integer updAppList(String pEntity, String pAppId, String pStatus, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.updAppListQueryName), pEntity, pAppId, pStatus, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<com.dbwaveerp.data.Tblorglocation> qryTblOrgLocationView(String pEntity, PagingOptions pagingOptions) {
        return ((List<com.dbwaveerp.data.Tblorglocation> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryTblOrgLocationViewQueryName), pEntity, pagingOptions));
    }

    public List<com.dbwaveerp.data.Tbluser> qryTblUser(String pUserId, PagingOptions pagingOptions) {
        return ((List<com.dbwaveerp.data.Tbluser> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryTblUserQueryName), pUserId, pagingOptions));
    }

    public List<Tblorgsection> qryTblOrgSectionView(String pEntity, PagingOptions pagingOptions) {
        return ((List<Tblorgsection> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryTblOrgSectionViewQueryName), pEntity, pagingOptions));
    }

    public List<Tblregistry> qryRegList(String pEntity, PagingOptions pagingOptions) {
        return ((List<Tblregistry> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryRegListQueryName), pEntity, pagingOptions));
    }

    public List<Tblroleasgn> qryRoleAsgnView(String pUserId, String pEntityId, String pStatus, PagingOptions pagingOptions) {
        return ((List<Tblroleasgn> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryRoleAsgnViewQueryName), pUserId, pEntityId, pStatus, pagingOptions));
    }

    public Integer updUserView01(String pStatus, String pEntity, String pUserId, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.updUserView01QueryName), pStatus, pEntity, pUserId, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<com.dbwaveerp.data.Tblperson> qryPartyView(String pStatus, String pEntityId, String pEmail, String pPartyId, String pFirstName, String pMiddleName, String pLastName, PagingOptions pagingOptions) {
        return ((List<com.dbwaveerp.data.Tblperson> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryPartyViewQueryName), pStatus, pEntityId, pEmail, pPartyId, pFirstName, pMiddleName, pLastName, pagingOptions));
    }

    public Integer qryEntityDelete(String pEntity, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryEntityDeleteQueryName), pEntity, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<Tblrole> qryRoleView(String pRoleId, String pEntityId, String pStatus, PagingOptions pagingOptions) {
        return ((List<Tblrole> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryRoleViewQueryName), pRoleId, pEntityId, pStatus, pagingOptions));
    }

    public Integer qryLogDeletePrior(String pEntity, String pAppId, Timestamp pStart, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryLogDeletePriorQueryName), pEntity, pAppId, pStart, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<Tbltypereq> qRoleView(PagingOptions pagingOptions) {
        return ((List<Tbltypereq> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qRoleViewQueryName), pagingOptions));
    }

    public List<Tblaccessurl> qryUrlAccess(PagingOptions pagingOptions) {
        return ((List<Tblaccessurl> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryUrlAccessQueryName), pagingOptions));
    }

    public List<com.dbwaveerp.data.Tbluser> qryUserTree(String pEntity, String pUserId, PagingOptions pagingOptions) {
        return ((List<com.dbwaveerp.data.Tbluser> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryUserTreeQueryName), pEntity, pUserId, pagingOptions));
    }

    public List<Tblsessions> qrySessionView(String pEntity, PagingOptions pagingOptions) {
        return ((List<Tblsessions> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qrySessionViewQueryName), pEntity, pagingOptions));
    }

    public Integer updConnProfileView(String pStatus, String pEntity, String pJuid, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.updConnProfileViewQueryName), pStatus, pEntity, pJuid, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public com.dbwaveerp.data.Tblorglocation getTblorglocationById(String id, PagingOptions pagingOptions) {
        List<com.dbwaveerp.data.Tblorglocation> rtn = ((List<com.dbwaveerp.data.Tblorglocation> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.getTblorglocationByIdQueryName), id, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<com.dbwaveerp.data.Tbluser> getUserByEmail(String email, PagingOptions pagingOptions) {
        return ((List<com.dbwaveerp.data.Tbluser> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.getUserByEmailQueryName), email, pagingOptions));
    }

    public List<Tblorgshift> qryTblOrgShiftView(String pEntity, PagingOptions pagingOptions) {
        return ((List<Tblorgshift> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryTblOrgShiftViewQueryName), pEntity, pagingOptions));
    }

    public Integer qryEntityUpdate(String pEntity, String pCompany, String pDesc, String pAddr01, String pAddr02, String pAddr03, Date pStartDate, Date pEndDate, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryEntityUpdateQueryName), pEntity, pCompany, pDesc, pAddr01, pAddr02, pAddr03, pStartDate, pEndDate, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public Integer qryPersonViewUpdate(String pEntity, String pJuid, String pUserjuid, String pTitle, String pFirstName, String pMiddleName, String pLastName, String pSuffix, String pAddr01, String pAddr02, String pCity, String pEmpState, String pZipCode, String pCountry, String pEmail, String pCountryCodeHome, String pAreaCodeHome, String pPhoneHome, String pExtensionHome, String pCountryCodeWork, String pAreaCodeWork, String pPhoneWork, String pExtensionWork, String pCountryCodeFax, String pAreaCodeFax, String pPhoneFax, String pExtensionFax, String pCountryCodeMobile, String pAreaCodeMobile, String pPhoneMobile, String pExtensionMobile, String pPid, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryPersonViewUpdateQueryName), pEntity, pJuid, pUserjuid, pTitle, pFirstName, pMiddleName, pLastName, pSuffix, pAddr01, pAddr02, pCity, pEmpState, pZipCode, pCountry, pEmail, pCountryCodeHome, pAreaCodeHome, pPhoneHome, pExtensionHome, pCountryCodeWork, pAreaCodeWork, pPhoneWork, pExtensionWork, pCountryCodeFax, pAreaCodeFax, pPhoneFax, pExtensionFax, pCountryCodeMobile, pAreaCodeMobile, pPhoneMobile, pExtensionMobile, pPid, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<QryMediaLibRtnType> qryMediaLib(String pEntity, String pAppId, PagingOptions pagingOptions) {
        return ((List<QryMediaLibRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryMediaLibQueryName), pEntity, pAppId, pagingOptions));
    }

    public List<Tblconnprofile> qryConnProfileView(String pEntity, PagingOptions pagingOptions) {
        return ((List<Tblconnprofile> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryConnProfileViewQueryName), pEntity, pagingOptions));
    }

    public List<Tbladmapping> qryADMappingView(String pEntity, PagingOptions pagingOptions) {
        return ((List<Tbladmapping> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryADMappingViewQueryName), pEntity, pagingOptions));
    }

    public List<QryEntityViewRtnType> qryEntityView(PagingOptions pagingOptions) {
        return ((List<QryEntityViewRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryEntityViewQueryName), pagingOptions));
    }

    public List<com.dbwaveerp.data.Tblrights> qryRightsView(String pRightId, String pEntityId, String pStatus, String pAppId, PagingOptions pagingOptions) {
        return ((List<com.dbwaveerp.data.Tblrights> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryRightsViewQueryName), pRightId, pEntityId, pStatus, pAppId, pagingOptions));
    }

    public Integer qryEntityAsgnDelete(String pEntity, String pJuId, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryEntityAsgnDeleteQueryName), pEntity, pJuId, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public Integer qryConnProfileDelete(String pEntity, String pJuId, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryConnProfileDeleteQueryName), pEntity, pJuId, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public Integer qryBrowserListDelete(String pJuid, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (DbwaveerpConstants.qryBrowserListDeleteQueryName), pJuid, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public Object insert(Object o) {
        return dsMgr.invoke(taskMgr.getInsertTask(), o);
    }

    public TypedServiceReturn read(TypeDefinition rootType, Object o, PropertyOptions propertyOptions, PagingOptions pagingOptions) {
        return ((TypedServiceReturn) dsMgr.invoke(taskMgr.getReadTask(), rootType, o, propertyOptions, pagingOptions));
    }

    public Object update(Object o) {
        return dsMgr.invoke(taskMgr.getUpdateTask(), o);
    }

    public void delete(Object o) {
        dsMgr.invoke(taskMgr.getDeleteTask(), o);
    }

    public void begin() {
        dsMgr.begin();
    }

    public void commit() {
        dsMgr.commit();
    }

    public void rollback() {
        dsMgr.rollback();
    }

    public DataServiceManager getDataServiceManager() {
        return dsMgr;
    }

    public void setDataServiceManager(DataServiceManager dsMgr) {
        this.dsMgr = dsMgr;
    }

    public TaskManager getTaskManager() {
        return taskMgr;
    }

    public void setTaskManager(TaskManager taskMgr) {
        this.taskMgr = taskMgr;
    }

}
