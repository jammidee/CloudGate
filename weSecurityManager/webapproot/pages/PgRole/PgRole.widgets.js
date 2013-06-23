PgRole.widgets = {
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
	svarRoleID: ["wm.ServiceVariable", {"operation":"qryRoleView","service":"dbwaveerp"}, {"onResult":"svarRoleIDResult"}, {
		input: ["wm.ServiceInput", {"type":"qryRoleViewInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"%\"","targetProperty":"pRoleId"}, {}],
				wire1: ["wm.Wire", {"expression":false,"source":"app.varEntity.dataValue","targetProperty":"pEntityId"}, {}],
				wire2: ["wm.Wire", {"expression":"\"ACTIVE\"","targetProperty":"pStatus"}, {}]
			}]
		}]
	}],
	tblattachmentLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.tblattachmentLiveView1","type":"com.dbwaveerp.data.Tblattachment"}, {}],
	varGridSelect: ["wm.Variable", {"type":"StringData"}, {}],
	svarQueryTksUsrMgt: ["wm.ServiceVariable", {"operation":"checkRoleExist","service":"svcExecQueryTksUsrMgt"}, {"onResult":"svarQueryTksUsrMgtResult"}, {
		input: ["wm.ServiceInput", {"type":"checkRoleExistInputs"}, {}]
	}],
	svarExecGenericNonQuery: ["wm.ServiceVariable", {"operation":"execNonQuery","service":"svcExecGenericNonQuery"}, {"onResult":"svarExecGenericNonQueryResult"}, {
		input: ["wm.ServiceInput", {"type":"execNonQueryInputs"}, {}]
	}],
	varQuery: ["wm.Variable", {"type":"StringData"}, {}],
	varFlag: ["wm.Variable", {"type":"StringData"}, {}],
	navPgMain: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMain\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	ddEntityID: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","title":"Select Entity ID"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			dgEntityID: ["wm.DojoGrid", {"columns":[{"show":true,"title":"Entity ID","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":true,"title":"Company","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"company"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Company: \" + ${company} + \"</div>\"\n"}],"height":"100%","margin":"4"}, {"onClick":"dgEntityIDClick"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"svarEntityID","targetProperty":"dataSet"}, {}]
				}]
			}]
		}],
		buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			btnSelect: ["wm.Button", {"caption":"Select","margin":"4"}, {"onclick":"btnSelectClick"}],
			btnClose: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"btnCloseClick"}]
		}]
	}],
	pdAbout: ["wm.PageDialog", {"desktopHeight":"341px","height":"341px","noEscape":true,"noMaxify":true,"noMinify":true,"pageName":"PgAbout","width":"616px"}, {}],
	ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar1","containerWidgetId":"containerWidget1","corner":"cr","modal":false,"title":"Role List Help"}, {}, {
		containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgRole.html"}, {}]
		}],
		buttonBar1: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			btnClose1: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddPgMainConfigHelp.hide"}]
		}]
	}],
	pnlLayoutMain: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"horizontalAlign":"left","verticalAlign":"top","width":"80%"}, {}, {
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
		spacer12: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
		pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
			pnlInputFields: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
				pnlView: ["wm.Panel", {"height":"50%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
					pnlButtonHide: ["wm.Panel", {"height":"15%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
						btnCloseRoleView: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Close","margin":"4"}, {"onclick":"btnCloseRoleViewClick"}]
					}],
					fpTitle: ["wm.FancyPanel", {"title":"Role List"}, {}, {
						pnlSearch: ["wm.Panel", {"height":"15%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
							txtSearch: ["wm.Text", {"caption":"Search by Role ID : ","captionAlign":"left","captionSize":"110px","dataValue":undefined,"displayValue":"","placeHolder":"Role ID","width":"250px"}, {}],
							btnSearch: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Search","margin":"4"}, {"onclick":"btnSearchClick"}],
							spacer11: ["wm.Spacer", {"height":"48px","width":"109px"}, {}],
							txtSearchStatus: ["wm.SelectMenu", {"caption":"Select Status : ","captionAlign":"left","captionSize":"110px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","options":"ACTIVE,INACTIVE","showing":false,"width":"301px"}, {"onchange":"txtSearchStatusChange"}]
						}],
						dgRoleID: ["wm.DojoGrid", {"columns":[{"show":false,"title":"Seqid","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"seqid"},{"show":true,"title":"Entity ID","width":"120px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":true,"title":"Role ID","width":"120px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"roleid"},{"show":false,"title":"Shortdesc","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"shortdesc"},{"show":true,"title":"Description","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"description"},{"show":false,"title":"Sstatus","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"show":false,"title":"Startdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"startdate"},{"show":false,"title":"Enddate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"enddate"},{"show":false,"title":"Juid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"juid"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Role ID: \" + ${roleid} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n"}],"height":"85%","margin":"4"}, {"onClick":"dgRoleIDClick","onSelect":"dgRoleIDClick"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svarRoleID","targetProperty":"dataSet"}, {}]
							}]
						}]
					}]
				}],
				spacer1: ["wm.Spacer", {"height":"5%","width":"96px"}, {}],
				pnlEntityId: ["wm.Panel", {"height":"6%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					spacer2: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
					txtEntityId: ["wm.Text", {"caption":"Entity ID : ","captionAlign":"left","captionSize":"127px","disabled":true,"displayValue":"","readonly":true,"width":"254px"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":false,"source":"app.varEntity.dataValue","targetProperty":"dataValue"}, {}]
						}]
					}],
					btnEntityId: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"..","margin":"4","showing":false,"width":"35px"}, {"onclick":"btnEntityIdClick"}]
				}],
				pnlRoleId: ["wm.Panel", {"height":"6%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					spacer3: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
					txtRoleId: ["wm.Text", {"caption":"Role ID : ","captionAlign":"left","captionSize":"127px","dataValue":undefined,"displayValue":"","readonly":true,"width":"280px"}, {}],
					btnRoleId: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"..","margin":"4","showing":false,"width":"35px"}, {"onclick":"btnRoleIdClick"}]
				}],
				pnlShortDesc: ["wm.Panel", {"height":"6%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					spacer4: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
					txtShortDesc: ["wm.Text", {"caption":"Short Description : ","captionAlign":"left","captionSize":"127px","dataValue":undefined,"displayValue":"","readonly":true,"width":"500px"}, {}]
				}],
				pnlDescription: ["wm.Panel", {"height":"6%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					spacer5: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
					txtDesc: ["wm.Text", {"caption":"Description : ","captionAlign":"left","captionSize":"127px","dataValue":undefined,"displayValue":"","readonly":true,"width":"800px"}, {}]
				}],
				pnlStartDate: ["wm.Panel", {"height":"6%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					spacer6: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
					txtStartDate: ["wm.Date", {"caption":"Start Date :","captionAlign":"left","captionSize":"127px","dataValue":undefined,"displayValue":"","readonly":true,"width":"320px"}, {}]
				}],
				pnlEndDate: ["wm.Panel", {"height":"6%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					spacer7: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
					txtEndDate: ["wm.Date", {"caption":"End Date :","captionAlign":"left","captionSize":"127px","dataValue":undefined,"displayValue":"","readonly":true,"width":"320px"}, {}],
					pnlStatus: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
						spacer8: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
						txtStatus: ["wm.SelectMenu", {"caption":"Status : ","captionAlign":"left","captionSize":"60px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","options":"ACTIVE, INACTIVE","width":"200px"}, {}]
					}]
				}],
				pnlSaveButton: ["wm.Panel", {"height":"9%","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
					spacer9: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
					btnSave: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Save","margin":"4"}, {"onclick":"btnSaveClick"}],
					btnCancel: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Cancel","margin":"4"}, {"onclick":"btnCancelClick"}]
				}],
				pnlButtons: ["wm.Panel", {"height":"9%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					pnlCrud: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"656px"}, {}, {
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
			lblFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"...","height":"100px","padding":"4","styles":{"backgroundGradient":{"direction":"horizontal","startColor":"#03036d","endColor":"#d8cbf2","colorStop":31}},"width":"100%"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}]
		}]
	}]
}