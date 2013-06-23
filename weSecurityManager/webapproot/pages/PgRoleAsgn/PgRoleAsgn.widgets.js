PgRoleAsgn.widgets = {
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
	svarExecGenericNonQuery: ["wm.ServiceVariable", {"operation":"execNonQuery","service":"svcExecGenericNonQuery"}, {"onResult":"svarExecGenericNonQueryResult"}, {
		input: ["wm.ServiceInput", {"type":"execNonQueryInputs"}, {}]
	}],
	varQuery: ["wm.Variable", {"type":"StringData"}, {}],
	varFlag: ["wm.Variable", {"type":"StringData"}, {}],
	svarRoleAsgnID: ["wm.ServiceVariable", {"operation":"qryRoleAsgnView","service":"dbwaveerp"}, {"onResult":"svarRoleAsgnIDResult"}, {
		input: ["wm.ServiceInput", {"type":"qryRoleAsgnViewInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"%\"","targetProperty":"pRoleId"}, {}],
				wire1: ["wm.Wire", {"expression":"\"ACTIVE\"","targetProperty":"pStatus"}, {}],
				wire2: ["wm.Wire", {"expression":false,"source":"app.varEntity.dataValue","targetProperty":"pEntityId"}, {}],
				wire3: ["wm.Wire", {"expression":false,"source":"txtSearchUser.dataValue","targetProperty":"pUserId"}, {}]
			}]
		}]
	}],
	svarRoleID: ["wm.ServiceVariable", {"operation":"qryRoleView","service":"dbwaveerp"}, {}, {
		input: ["wm.ServiceInput", {"type":"qryRoleViewInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"%\"","targetProperty":"pRoleId"}, {}],
				wire1: ["wm.Wire", {"expression":false,"source":"app.varEntity.dataValue","targetProperty":"pEntityId"}, {}],
				wire2: ["wm.Wire", {"expression":"\"ACTIVE\"","targetProperty":"pStatus"}, {}]
			}]
		}]
	}],
	svarUserID: ["wm.ServiceVariable", {"operation":"qryUserView","service":"dbwaveerp"}, {}, {
		input: ["wm.ServiceInput", {"type":"qryUserViewInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"%\"","targetProperty":"pUserId"}, {}],
				wire1: ["wm.Wire", {"expression":false,"source":"app.varEntity.dataValue","targetProperty":"pEntityId"}, {}],
				wire2: ["wm.Wire", {"expression":"\"ACTIVE\"","targetProperty":"pStatus"}, {}],
				wire3: ["wm.Wire", {"expression":"\"%\"","targetProperty":"pEmail"}, {}],
				wire4: ["wm.Wire", {"expression":"\"%\"","targetProperty":"pUsername"}, {}]
			}]
		}]
	}],
	svarTblRoleAsgn: ["wm.ServiceVariable", {"operation":"checkRoleAsgnExist","service":"svcExecQueryTksUsrMgt"}, {"onResult":"svarTblRoleAsgnResult"}, {
		input: ["wm.ServiceInput", {"type":"checkRoleAsgnExistInputs"}, {}]
	}],
	navPgMain: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMain\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	ddEntityID: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","title":"Select Entity ID"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			dgEntityID: ["wm.DojoGrid", {"columns":[{"show":true,"title":"Entityid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":true,"title":"Company","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"company"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Entityid: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Company: \" + ${company} + \"</div>\"\n"}],"height":"100%","margin":"4"}, {"onClick":"dgEntityIDClick"}, {
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
	ddRoleID: ["wm.DesignableDialog", {"buttonBarId":"buttonBar1","containerWidgetId":"containerWidget1","title":"Role List"}, {}, {
		containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			dgRoleID: ["wm.DojoGrid", {"columns":[{"show":false,"field":"seqid","title":"Seqid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"entityid","title":"Entity ID","width":"20%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"roleid","title":"Role ID","width":"20%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"shortdesc","title":"Shortdesc","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"description","title":"Description","width":"60%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"sstatus","title":"Sstatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"startdate","title":"Startdate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"enddate","title":"Enddate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"juid","title":"Juid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Role ID: \" + ${roleid} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n","mobileColumn":true}],"height":"100%","margin":"4"}, {"onClick":"dgRoleIDClick","onSelect":"dgRoleIDClick"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"svarRoleID","targetProperty":"dataSet"}, {}]
				}]
			}]
		}],
		buttonBar1: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"470px"}, {}, {
				txtSearchRole: ["wm.Text", {"caption":"Search Role :","captionAlign":"left","captionSize":"95px","dataValue":undefined,"displayValue":"","width":"250px"}, {}],
				btnSearchRoleView: ["wm.Button", {"caption":"Search","margin":"4"}, {"onclick":"btnSearchRoleViewClick"}]
			}],
			btnSelectRole: ["wm.Button", {"caption":"Select","margin":"4"}, {"onclick":"btnSelectRoleClick"}],
			btnCloseRole: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"btnCloseRoleClick"}]
		}]
	}],
	ddUserID: ["wm.DesignableDialog", {"buttonBarId":"buttonBar2","containerWidgetId":"containerWidget2","title":"User List"}, {}, {
		containerWidget2: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			dgUserID: ["wm.DojoGrid", {"columns":[{"show":true,"field":"userid","title":"User ID","width":"12%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"entityid","title":"Entity ID","width":"13%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"password","title":"Password","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"username","title":"Username","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"firstname","title":"First Name","width":"25%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"middlename","title":"Middle Name","width":"25%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"lastname","title":"Last Name","width":"25%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"sstatus","title":"Sstatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"email","title":"Email","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"roleid","title":"Roleid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"startdate","title":"Startdate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"enddate","title":"Enddate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"deleted","title":"Deleted","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"userimgext","title":"Userimgext","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"pid","title":"Pid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"passwdenc","title":"Passwdenc","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"parentPerson","title":"ParentPerson","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"id","title":"Id","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"id.seqid","title":"Id.seqid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"id.juid","title":"Id.juid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>User ID: \" + ${userid} + \"</div>\"\n+ \"<div class='MobileRow'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>First Name: \" + ${firstname} + \"</div>\"\n+ \"<div class='MobileRow'>Middle Name: \" + ${middlename} + \"</div>\"\n+ \"<div class='MobileRow'>Last Name: \" + ${lastname} + \"</div>\"\n","mobileColumn":true}],"height":"100%","margin":"4"}, {"onCellDblClick":"dgUserIDCellDblClick","onClick":"dgUserIDClick","onSelect":"dgUserIDClick"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"svarUserID","targetProperty":"dataSet"}, {}]
				}]
			}]
		}],
		buttonBar2: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			panel2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"469px"}, {}, {
				txtUserSearch: ["wm.Text", {"caption":"Search by User ID :","captionAlign":"left","captionSize":"135px","dataValue":undefined,"displayValue":"","width":"292px"}, {}],
				btnUserSearch: ["wm.Button", {"caption":"Search","margin":"4"}, {"onclick":"btnUserSearchClick"}]
			}],
			btnSelectUser: ["wm.Button", {"caption":"Select","margin":"4"}, {"onclick":"btnSelectUserClick"}],
			btnCloseUser: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"btnCloseUserClick"}]
		}]
	}],
	pdAbout: ["wm.PageDialog", {"desktopHeight":"341px","height":"341px","noEscape":true,"noMaxify":true,"noMinify":true,"pageName":"PgAbout","width":"616px"}, {}],
	ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar3","containerWidgetId":"containerWidget3","corner":"cr","modal":false,"title":"User / Role Assignment Help"}, {}, {
		containerWidget3: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgRoleAsgn.html"}, {}]
		}],
		buttonBar3: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			btnClose1: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddPgMainConfigHelp.hide"}]
		}]
	}],
	pnlLayoutMain: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"horizontalAlign":"left","verticalAlign":"top"}, {"onEnterKeyPress":"navManageUser"}, {
		pnlHeader: ["wm.Panel", {"height":"45px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
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
				Sep01: ["wm.Spacer", {"height":"24px","width":"5px"}, {}],
				pic_back: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Back","source":"resources/images/buttons/arrowleft24.png","width":"24px"}, {"onclick":"navManageUser"}]
			}],
			pnlMenuButtonRight: ["wm.Panel", {"height":"24px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
				pic_help: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Help","source":"resources/images/buttons/helpred24.png","width":"24px"}, {"onclick":"ddPgMainConfigHelp.show"}],
				pic_about: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"About","source":"resources/images/buttons/aboutblue24.png","width":"24px"}, {"onclick":"pdAbout.show"}]
			}]
		}],
		spacer7: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
		pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
			pnlInputFields: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
				pnlView: ["wm.Panel", {"height":"62%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
					pnlButtonHide: ["wm.Panel", {"height":"15%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
						btnCloseRoleView: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Close","margin":"4"}, {"onclick":"btnCloseRoleViewClick"}]
					}],
					fpTitle: ["wm.FancyPanel", {"title":"Role Assign List"}, {}, {
						pnlSearch: ["wm.Panel", {"height":"12%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
							txtSearchUser: ["wm.Text", {"caption":"Search by User ID : ","captionAlign":"left","captionSize":"130px","dataValue":undefined,"disabled":true,"displayValue":"","placeHolder":"User ID","width":"280px"}, {}],
							btnUserId: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"..","desktopHeight":"28px","height":"28px","margin":"4","width":"30px"}, {"onclick":"btnUserIdClick"}],
							btnSearchRole: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"..","margin":"4","showing":false,"width":"36px"}, {"onclick":"btnSearchRoleClick"}],
							spacer6: ["wm.Spacer", {"height":"48px","width":"115px"}, {}],
							txtSearchStatus: ["wm.SelectMenu", {"caption":"Select Status : ","captionAlign":"left","captionSize":"115px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","options":"ACTIVE,INACTIVE","showing":false}, {"onchange":"txtSearchStatusChange"}]
						}],
						dgRoleAsgnID: ["wm.DojoGrid", {"columns":[{"show":false,"field":"seqid","title":"Seqid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"entityid","title":"Entity ID","width":"15%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"roleid","title":"Role ID","width":"15%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"userid","title":"User ID","width":"15%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"description","title":"Description","width":"55%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"sstatus","title":"Sstatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"isdefault","title":"Isdefault","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"juid","title":"Juid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Role ID: \" + ${roleid} + \"</div>\"\n+ \"<div class='MobileRow'>User ID: \" + ${userid} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n","mobileColumn":true}],"height":"91%","margin":"4"}, {"onClick":"dgRoleAsgnIDClick","onSelect":"dgRoleAsgnIDClick"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svarRoleAsgnID","targetProperty":"dataSet"}, {}]
							}]
						}]
					}]
				}],
				spacer1: ["wm.Spacer", {"height":"5%","width":"96px"}, {}],
				pnlEntityId: ["wm.Panel", {"height":"6%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					spacer2: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
					txtEntityId: ["wm.Text", {"caption":"Entity ID : ","captionAlign":"left","captionSize":"127px","dataValue":undefined,"disabled":true,"displayValue":"","readonly":true,"width":"254px"}, {}],
					btnEntityId: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"..","margin":"4","showing":false,"width":"35px"}, {"onclick":"btnEntityIdClick"}]
				}],
				pnlUserId: ["wm.Panel", {"height":"6%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					spacer4: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
					txtUserId: ["wm.Text", {"caption":"User ID : ","captionAlign":"left","captionSize":"127px","dataValue":undefined,"displayValue":"","readonly":true,"width":"280px"}, {}]
				}],
				pnlRoleId: ["wm.Panel", {"height":"6%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					spacer3: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
					txtRoleId: ["wm.Text", {"caption":"Role ID : ","captionAlign":"left","captionSize":"127px","dataValue":undefined,"displayValue":"","readonly":true,"width":"280px"}, {}],
					btnRoleId: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"..","desktopHeight":"28px","height":"28px","margin":"4","width":"30px"}, {"onclick":"btnRoleIdClick"}]
				}],
				pnlDescription: ["wm.Panel", {"height":"6%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					spacer5: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
					txtDesc: ["wm.Text", {"caption":"Description : ","captionAlign":"left","captionSize":"127px","dataValue":undefined,"displayValue":"","readonly":true,"width":"400px"}, {}],
					pnlStatus: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"235px"}, {}, {
						txtStatus: ["wm.SelectMenu", {"caption":"Status : ","captionAlign":"left","captionSize":"60px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","options":"ACTIVE,INACTIVE","width":"200px"}, {}]
					}]
				}],
				pnlSaveButton: ["wm.Panel", {"height":"9%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					spacer9: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
					btnSave: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Save","margin":"4"}, {"onclick":"btnSaveClick"}],
					btnCancel: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Cancel","margin":"4"}, {"onclick":"btnCancelClick"}]
				}],
				pnlButtons: ["wm.Panel", {"height":"9%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					pnlCrud: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"717px"}, {}, {
						spacer10: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
						btnAdd: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Create","margin":"4","width":"120px"}, {"onclick":"btnAddClick"}],
						btnEdit: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Edit","margin":"4","width":"120px"}, {"onclick":"btnEditClick"}],
						btnDelete: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Delete","margin":"4","width":"120px"}, {"onclick":"btnDeleteClick"}],
						btnView: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"View Role","margin":"4","width":"120px"}, {"onclick":"btnViewClick"}],
						btnExit: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Close","margin":"4","width":"120px"}, {"onclick":"navManageUser"}]
					}]
				}]
			}]
		}],
		pnlFooter: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundChromeBar_LightBlue","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"20px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			lblFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"...","height":"20px","padding":"4","styles":{"backgroundGradient":{"direction":"horizontal","startColor":"#03036d","endColor":"#d8cbf2","colorStop":31}},"width":"100%"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}]
		}]
	}]
}