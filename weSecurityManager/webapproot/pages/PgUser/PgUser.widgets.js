PgUser.widgets = {
	sv_authenticate: ["wm.ServiceVariable", {"operation":"authenticate","service":"services"}, {"onResult":"sv_authenticateResult","onSuccess":"sv_authenticateSuccess"}, {
		input: ["wm.ServiceInput", {"type":"authenticateInputs"}, {}]
	}],
	svarStrApp01: ["wm.ServiceVariable", {"operation":"authenticateRegistry","service":"svcRegistry"}, {"onResult":"svarStrApp01Result"}, {
		input: ["wm.ServiceInput", {"type":"authenticateRegistryInputs"}, {}]
	}],
	navLogin: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgLogin\"","source":false,"targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navManageUser: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgManageUser\"","source":false,"targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	lvEntityID: ["wm.LiveVariable", {"liveSource":"com.dbwaveerp.data.Tblentity","type":"com.dbwaveerp.data.Tblentity"}, {}],
	svarEntityID: ["wm.ServiceVariable", {"operation":"qryEntityView","service":"dbwaveerp"}, {"onResult":"svarEntityIDResult"}, {
		input: ["wm.ServiceInput", {"type":"qryEntityViewInputs"}, {}]
	}],
	tblattachmentLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.tblattachmentLiveView1","type":"com.dbwaveerp.data.Tblattachment"}, {}],
	varGridSelect: ["wm.Variable", {"type":"StringData"}, {}],
	varQuery: ["wm.Variable", {"type":"StringData"}, {}],
	varFlag: ["wm.Variable", {"type":"StringData"}, {}],
	svarRightAsgnID: ["wm.ServiceVariable", {"operation":"qryRightAsgnView","service":"dbwaveerp"}, {"onResult":"svarRightAsgnIDResult"}, {
		input: ["wm.ServiceInput", {"type":"qryRightAsgnViewInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"%\"","targetProperty":"pRoleId"}, {}],
				wire1: ["wm.Wire", {"expression":"\"%\"","targetProperty":"pRightId"}, {}]
			}]
		}]
	}],
	svarRightID: ["wm.ServiceVariable", {"operation":"qryRightsView","service":"dbwaveerp"}, {}, {
		input: ["wm.ServiceInput", {"type":"qryRightsViewInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"%\"","targetProperty":"pUserId"}, {}],
				wire1: ["wm.Wire", {"expression":"\"%\"","targetProperty":"pRightId"}, {}]
			}]
		}]
	}],
	svarSearchUserId: ["wm.ServiceVariable", {"operation":"qryTblUser","service":"dbwaveerp"}, {"onResult":"svarSearchUserIdResult"}, {
		input: ["wm.ServiceInput", {"type":"qryTblUserInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"expression":"\"ACTIVE\"","targetProperty":"pStatus"}, {}]
			}]
		}]
	}],
	svarTblUser: ["wm.ServiceVariable", {"operation":"checkUserIdExist","service":"svcExecQueryTksUsrMgt"}, {"onResult":"svarTblUserResult"}, {
		input: ["wm.ServiceInput", {"type":"checkUserIdExistInputs"}, {}]
	}],
	svarExecGenericNonQueryComplex: ["wm.ServiceVariable", {"operation":"execNonQueryLong","service":"svcExecGenericNonQuery"}, {"onResult":"svarExecGenericNonQueryComplexResult"}, {
		input: ["wm.ServiceInput", {"type":"execNonQueryLongInputs"}, {}]
	}],
	svarExecGenericNonQuerySimple: ["wm.ServiceVariable", {"operation":"execNonQuery","service":"svcExecGenericNonQuery"}, {"onResult":"svarExecGenericNonQuerySimpleResult"}, {
		input: ["wm.ServiceInput", {"type":"execNonQueryInputs"}, {}]
	}],
	svarReload: ["wm.ServiceVariable", {"operation":"qryUserView","service":"dbwaveerp"}, {}, {
		input: ["wm.ServiceInput", {"type":"qryUserViewInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"%\"","targetProperty":"pUserId"}, {}]
			}]
		}]
	}],
	svarUserView: ["wm.ServiceVariable", {"operation":"qryUserView","service":"dbwaveerp"}, {}, {
		input: ["wm.ServiceInput", {"type":"qryUserViewInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"%\"","targetProperty":"pRoleId"}, {}],
				wire2: ["wm.Wire", {"expression":false,"source":"app.varEntity.dataValue","targetProperty":"pEntityId"}, {}],
				wire3: ["wm.Wire", {"expression":"\"ACTIVE\"","targetProperty":"pStatus"}, {}]
			}]
		}]
	}],
	navPgMain: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMain\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	svarDESInit: ["wm.ServiceVariable", {"operation":"Encrypter","service":"svcDESEncryption"}, {"onResult":"svarDESInitResult"}, {
		input: ["wm.ServiceInput", {"type":"EncrypterInputs"}, {}]
	}],
	svarDESEncrypt: ["wm.ServiceVariable", {"operation":"encrypt","service":"svcDESEncryption"}, {"onResult":"svarDESEncryptResult"}, {
		input: ["wm.ServiceInput", {"type":"encryptInputs"}, {}]
	}],
	varPassword02: ["wm.Variable", {"type":"StringData"}, {}],
	svarDESInit02: ["wm.ServiceVariable", {"operation":"Encrypter","service":"svcDESEncryption"}, {"onResult":"svarDESInit02Result"}, {
		input: ["wm.ServiceInput", {"type":"EncrypterInputs"}, {}]
	}],
	svarDESDecrypt: ["wm.ServiceVariable", {"operation":"decrypt","service":"svcDESEncryption"}, {"onResult":"svarDESDecryptResult"}, {
		input: ["wm.ServiceInput", {"type":"decryptInputs"}, {}]
	}],
	svarCheckUserLicense: ["wm.ServiceVariable", {"operation":"checkUserLicense","service":"svcLicenseSystem"}, {"onResult":"svarCheckUserLicenseResult"}, {
		input: ["wm.ServiceInput", {"type":"checkUserLicenseInputs"}, {}]
	}],
	navPgMainUser: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMainUser\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	ddEntityID: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","title":"Select Entity ID"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			dgEntityID: ["wm.DojoGrid", {"columns":[{"show":true,"title":"Entity ID","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":true,"title":"Company","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"company"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Company: \" + ${company} + \"</div>\"\n"}],"height":"100%","localizationStructure":{},"margin":"4"}, {"onClick":"dgEntityIDClick"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"svarEntityID","targetProperty":"dataSet"}, {}]
				}]
			}]
		}],
		buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			btnSelect: ["wm.Button", {"caption":"Select","margin":"4"}, {"onclick":"btnSelectClick"}],
			btnClose: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"btnCloseClick"}]
		}]
	}],
	ddRightID: ["wm.DesignableDialog", {"buttonBarId":"buttonBar2","containerWidgetId":"containerWidget2","title":"Right List"}, {}, {
		containerWidget2: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			dgRightID: ["wm.DojoGrid", {"columns":[{"show":false,"title":"Seqid","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"seqid"},{"show":true,"title":"Entity ID","width":"13%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":false,"title":"Sstatus","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"show":true,"title":"Right ID","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"rightid"},{"show":true,"title":"Application ID","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"appid"},{"show":true,"title":"Description","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"description"},{"show":true,"title":"Juid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"juid"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Right ID: \" + ${rightid} + \"</div>\"\n+ \"<div class='MobileRow'>Application ID: \" + ${appid} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n+ \"<div class='MobileRow'>Juid: \" + ${juid} + \"</div>\"\n"}],"height":"100%","margin":"4"}, {"onClick":"dgRightIDClick"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"svarRightID","targetProperty":"dataSet"}, {}]
				}]
			}]
		}],
		buttonBar2: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			btnSelectRight: ["wm.Button", {"caption":"Select","margin":"4"}, {"onclick":"btnSelectRightClick"}],
			btnCloseRight: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"btnCloseRightClick"}]
		}]
	}],
	pgUserView: ["wm.PageDialog", {"desktopHeight":"450px","height":"450px","noEscape":true,"noMaxify":true,"noMinify":true,"title":"User View","width":"700px"}, {"onClose":"pgUserViewClose"}],
	ddUser: ["wm.DesignableDialog", {"buttonBarId":"buttonBar1","containerWidgetId":"containerWidget1","desktopHeight":"450px","height":"450px","title":"User List","width":"900px"}, {}, {
		containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			dgUserView: ["wm.DojoGrid", {"columns":[{"show":true,"field":"entityid","title":"Entity ID","width":"80px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"sstatus","title":"Sstatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"userid","title":"User ID","width":"80px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"password","title":"Password","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"username","title":"Username","width":"80px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"firstname","title":"First Name","width":"100px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"middlename","title":"Middle Name","width":"100px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"lastname","title":"Last Name","width":"100px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"email","title":"Email","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"deleted","title":"Deleted","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"roleid","title":"Roleid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"startdate","title":"Startdate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"enddate","title":"Enddate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"userimgext","title":"Userimgext","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"pid","title":"PID","width":"100px","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"passwdenc","title":"Passwdenc","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"parentPerson","title":"ParentPerson","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"id","title":"Id","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"id.seqid","title":"Id.seqid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"id.juid","title":"Id.juid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>User ID: \" + ${userid} + \"</div>\"\n+ \"<div class='MobileRow'>Username: \" + ${username} + \"</div>\"\n+ \"<div class='MobileRow'>First Name: \" + ${firstname} + \"</div>\"\n+ \"<div class='MobileRow'>Middle Name: \" + ${middlename} + \"</div>\"\n+ \"<div class='MobileRow'>Last Name: \" + ${lastname} + \"</div>\"\n+ \"<div class='MobileRow'>Email: \" + ${email} + \"</div>\"\n","mobileColumn":true}],"height":"90%","margin":"4"}, {"onCellDblClick":"dgUserViewCellDblClick","onClick":"dgUserViewClick"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"svarUserView","targetProperty":"dataSet"}, {}]
				}]
			}],
			pnlSearch: ["wm.Panel", {"height":"10%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
				txtSearch: ["wm.Text", {"caption":"Search by User:","captionAlign":"left","dataValue":undefined,"displayValue":"","width":"200px"}, {}],
				txtUname: ["wm.Text", {"caption":"Username : ","captionAlign":"left","captionSize":"75px","dataValue":undefined,"displayValue":"","width":"200px"}, {}],
				txtEMail: ["wm.Text", {"caption":"Email :","captionAlign":"left","captionSize":"50px","dataValue":undefined,"displayValue":"","width":"240px"}, {}],
				txtUserStatus: ["wm.SelectMenu", {"caption":"Status :","captionAlign":"left","captionSize":"55px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","options":"ACTIVE,INACTIVE","width":"155px"}, {"onchange":"txtUserStatusChange"}],
				btnSearchUserID: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue","wm_FontColor_White"]},"caption":"Search","margin":"4"}, {"onclick":"btnSearchUserIDClick"}]
			}]
		}],
		buttonBar1: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			btnSelectUser: ["wm.Button", {"caption":"Select","margin":"4"}, {"onclick":"btnSelectUserClick"}],
			btnCloseUser: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"btnCloseUserClick"}]
		}]
	}],
	pdAbout: ["wm.PageDialog", {"desktopHeight":"341px","height":"341px","noEscape":true,"noMaxify":true,"noMinify":true,"pageName":"PgAbout","width":"616px"}, {}],
	ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar3","containerWidgetId":"containerWidget3","corner":"cr","modal":false,"title":"Manage User Help"}, {}, {
		containerWidget3: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgUser.html"}, {}]
		}],
		buttonBar3: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			btnClose1: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddPgMainConfigHelp.hide"}]
		}]
	}],
	pnlLayoutMain: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"horizontalAlign":"left","verticalAlign":"top"}, {"onEnterKeyPress":"navManageUser"}, {
		pnlHeader: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"45px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
			imgLogo: ["wm.Picture", {"height":"45px","source":"resources/images/logos/waveerplogo.jpg","width":"275px"}, {}],
			pnlTitle: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","styles":{"backgroundImage":"url(resources/images/logos/waveerpbar.jpg)"},"verticalAlign":"middle","width":"100%"}, {}, {
				lblTitle: ["wm.Label", {"align":"right","autoSizeHeight":true,"caption":"Ticket System","height":"23px","padding":"4","singleLine":false,"width":"600px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}]
		}],
		pnlMenuBar: ["wm.Panel", {"height":"20px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#00008b"},"verticalAlign":"top","width":"100%"}, {}],
		pnlMenuButton: ["wm.HeaderContentPanel", {"border":"0","height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
			pnlMenuButtonLeft: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
				pic_home: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Home","source":"resources/images/buttons/home0224.png","width":"24px"}, {"onclick":"navPgMain"}],
				pic_back: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Back","source":"resources/images/buttons/arrowleft24.png","width":"24px"}, {"onclick":"navPgMainUser"}],
				spacer16: ["wm.Spacer", {"height":"24px","width":"12px"}, {}],
				pic_new: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"New","source":"resources/images/buttons/addball24.png","width":"30px"}, {"onclick":"pic_newClick"}],
				pic_edit: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Edit","source":"resources/images/buttons/editnote24.png","width":"30px"}, {}],
				pic_save: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Save","source":"resources/images/buttons/save24.png","width":"30px"}, {}],
				pic_delete: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Delete","source":"resources/images/buttons/Recyclebin24.png","width":"30px"}, {}]
			}],
			pnlMenuButtonRight: ["wm.Panel", {"height":"24px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
				pic_help: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Help","source":"resources/images/buttons/helpred24.png","width":"24px"}, {"onclick":"ddPgMainConfigHelp.show"}],
				pic_about: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"About","source":"resources/images/buttons/aboutblue24.png","width":"24px"}, {"onclick":"pdAbout.show"}]
			}]
		}],
		spacer15: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
		pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
			pnlInputFields: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
				spacer1: ["wm.Spacer", {"height":"5px","width":"96px"}, {}],
				pnlUserId: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					spacer4: ["wm.Spacer", {"height":"19px","width":"40px"}, {}],
					txtUserId: ["wm.Text", {"caption":"User ID : ","captionAlign":"left","captionSize":"95px","dataValue":undefined,"displayValue":"","width":"277px"}, {"onEnterKeyPress":"txtUserIdEnterKeyPress"}],
					btnSearch: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Search","iconHeight":"14px","margin":"4"}, {"onclick":"btnSearchClick"}]
				}],
				pnlEntityId: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					spacer2: ["wm.Spacer", {"height":"21px","width":"40px"}, {}],
					txtEntityId: ["wm.Text", {"caption":"Entity ID : ","captionAlign":"left","captionSize":"95px","dataValue":undefined,"disabled":true,"displayValue":"","width":"277px"}, {}],
					btnEntityId: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"..","margin":"4","showing":false,"width":"35px"}, {"onclick":"btnEntityIdClick"}],
					btnEntity: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"..","disabled":true,"margin":"4","width":"30px"}, {}]
				}],
				pnlUsername: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					spacer5: ["wm.Spacer", {"height":"21px","width":"40px"}, {}],
					txtUsername: ["wm.Text", {"caption":"Username : ","captionAlign":"left","captionSize":"95px","dataValue":undefined,"disabled":true,"displayValue":"","width":"430px"}, {}]
				}],
				pnlPassword: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					spacer3: ["wm.Spacer", {"height":"23px","width":"40px"}, {}],
					txtPassword: ["wm.Text", {"caption":"Password : ","captionAlign":"left","captionSize":"95px","dataValue":undefined,"disabled":true,"displayValue":"","password":true,"width":"430px"}, {}]
				}],
				pnlFname: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					spacer6: ["wm.Spacer", {"height":"24px","width":"40px"}, {}],
					txtFname: ["wm.Text", {"caption":"Firstname : ","captionAlign":"left","captionSize":"95px","dataValue":undefined,"disabled":true,"displayValue":"","width":"430px"}, {}]
				}],
				pnlMname: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					spacer7: ["wm.Spacer", {"height":"20px","width":"40px"}, {}],
					txtMname: ["wm.Text", {"caption":"Middlename : ","captionAlign":"left","captionSize":"95px","dataValue":undefined,"disabled":true,"displayValue":"","width":"430px"}, {}]
				}],
				pnlLname: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					spacer8: ["wm.Spacer", {"height":"22px","width":"40px"}, {}],
					txtLname: ["wm.Text", {"caption":"Lastname : ","captionAlign":"left","captionSize":"95px","dataValue":undefined,"disabled":true,"displayValue":"","width":"430px"}, {}]
				}],
				pnlEmail: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					spacer11: ["wm.Spacer", {"height":"18px","width":"40px"}, {}],
					txtEmail: ["wm.Text", {"caption":"Email : ","captionAlign":"left","captionSize":"95px","dataValue":undefined,"disabled":true,"displayValue":"","width":"430px"}, {}]
				}],
				pnlSdate: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					spacer12: ["wm.Spacer", {"height":"24px","width":"40px"}, {}],
					txtSdate: ["wm.Date", {"caption":"Start Date :","captionAlign":"left","captionSize":"95px","dataValue":undefined,"disabled":true,"displayValue":""}, {}]
				}],
				pnlEdate: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					spacer13: ["wm.Spacer", {"height":"23px","width":"40px"}, {}],
					txtEdate: ["wm.Date", {"caption":"End Date :","captionAlign":"left","captionSize":"95px","dataValue":undefined,"disabled":true,"displayValue":""}, {}],
					pnlStatus: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
						spacer14: ["wm.Spacer", {"height":"48px","width":"25px"}, {}],
						txtStatus: ["wm.SelectMenu", {"caption":"Status :","captionAlign":"left","captionSize":"60px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","options":"ACTIVE,INACTIVE","width":"200px"}, {}]
					}]
				}],
				pnlParent: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					spacer17: ["wm.Spacer", {"height":"12px","width":"40px"}, {}],
					txtParent: ["wm.Text", {"caption":"Parent","captionAlign":"left","captionSize":"95px","dataValue":undefined,"disabled":true,"displayValue":""}, {}]
				}],
				pnlButtons: ["wm.Panel", {"fitToContentHeight":true,"height":"36px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					pnlCrud: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"656px"}, {}, {
						spacer10: ["wm.Spacer", {"height":"23px","width":"40px"}, {}],
						btnAdd: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Create","margin":"4","width":"120px"}, {"onclick":"btnAddClick"}],
						btnEdit: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Edit","margin":"4","width":"120px"}, {"onclick":"btnEditClick"}],
						btnDelete: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Delete","margin":"4","width":"120px"}, {"onclick":"btnDeleteClick"}],
						btnView: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Select","margin":"4","width":"120px"}, {"onclick":"btnViewClick"}],
						btnExit: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Close","margin":"4","width":"120px"}, {"onclick":"navManageUser"}]
					}]
				}],
				pnlSaveButton: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					spacer9: ["wm.Spacer", {"height":"22px","width":"40px"}, {}],
					btnSave: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Save","margin":"4"}, {"onclick":"btnSaveClick"}],
					btnCancel: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Cancel","margin":"4"}, {"onclick":"btnCancelClick"}]
				}],
				pnlDgUser: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White","wm_BorderShadow_NoShadow","wm_BorderTopStyle_NoCurve","wm_TextDecoration_None"]},"borderColor":"#ffffff","fitToContentHeight":true,"height":"15px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					dgUser: ["wm.DojoGrid", {"_classes":{"domNode":["wm_BackgroundColor_White","wm_FontColor_White"]},"borderColor":"#FFFFFF","columns":[{"show":true,"title":"Userid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"userid"},{"show":true,"title":"Entityid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":true,"title":"Password","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"password"},{"show":true,"title":"Username","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"username"},{"show":true,"title":"Firstname","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"firstname"},{"show":true,"title":"Middlename","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"middlename"},{"show":true,"title":"Lastname","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"lastname"},{"show":true,"title":"Sstatus","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"show":true,"title":"Email","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"email"},{"show":true,"title":"Roleid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"roleid"},{"show":true,"title":"Startdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","fieldType":"","field":"startdate"},{"show":true,"title":"Enddate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","fieldType":"","field":"enddate"},{"show":true,"title":"Deleted","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"deleted"},{"show":true,"title":"Userimgext","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"userimgext"},{"show":true,"title":"Pid","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"pid"},{"show":true,"title":"Passwdenc","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"passwdenc"},{"show":false,"title":"ParentPerson","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"parentPerson"},{"show":false,"field":"id","title":"Id","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"id.seqid","title":"Id.seqid","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"id.juid","title":"Id.juid","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Userid: \" + ${userid} + \"</div>\"\n+ \"<div class='MobileRow'>Entityid: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Password: \" + ${password} + \"</div>\"\n+ \"<div class='MobileRow'>Username: \" + ${username} + \"</div>\"\n+ \"<div class='MobileRow'>Firstname: \" + ${firstname} + \"</div>\"\n+ \"<div class='MobileRow'>Middlename: \" + ${middlename} + \"</div>\"\n+ \"<div class='MobileRow'>Lastname: \" + ${lastname} + \"</div>\"\n+ \"<div class='MobileRow'>Sstatus: \" + ${sstatus} + \"</div>\"\n+ \"<div class='MobileRow'>Email: \" + ${email} + \"</div>\"\n+ \"<div class='MobileRow'>Roleid: \" + ${roleid} + \"</div>\"\n+ \"<div class='MobileRow'>Startdate: \" + wm.List.prototype.dateFormatter({}, null,null,null,${startdate}) + \"</div>\"\n+ \"<div class='MobileRow'>Enddate: \" + wm.List.prototype.dateFormatter({}, null,null,null,${enddate}) + \"</div>\"\n+ \"<div class='MobileRow'>Deleted: \" + ${deleted} + \"</div>\"\n+ \"<div class='MobileRow'>Userimgext: \" + ${userimgext} + \"</div>\"\n+ \"<div class='MobileRow'>Pid: \" + ${pid} + \"</div>\"\n+ \"<div class='MobileRow'>Passwdenc: \" + ${passwdenc} + \"</div>\"\n"}],"height":"0px","margin":"0","minDesktopHeight":60,"width":"249px"}, {"onClick":"dgUserClick"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"svarSearchUserId","targetProperty":"dataSet"}, {}]
						}]
					}]
				}]
			}]
		}],
		pnlFooter: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundChromeBar_LightBlue","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"20px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			lblFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"...","height":"100%","padding":"4","styles":{"backgroundGradient":{"direction":"horizontal","startColor":"#03036d","endColor":"#d8cbf2","colorStop":31}},"width":"100%"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}]
		}]
	}]
}