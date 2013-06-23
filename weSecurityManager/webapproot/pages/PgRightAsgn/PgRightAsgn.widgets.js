PgRightAsgn.widgets = {
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
	svarRoleID: ["wm.ServiceVariable", {"operation":"qryRoleView","service":"dbwaveerp"}, {}, {
		input: ["wm.ServiceInput", {"type":"qryRoleViewInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"%\"","targetProperty":"pRoleId"}, {}],
				wire1: ["wm.Wire", {"expression":false,"source":"app.varEntity.dataValue","targetProperty":"pEntityId"}, {}],
				wire2: ["wm.Wire", {"expression":"\"ACTIVE\"","targetProperty":"pStatus"}, {}]
			}]
		}]
	}],
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
				wire1: ["wm.Wire", {"expression":"\"%\"","targetProperty":"pRightId"}, {}],
				wire2: ["wm.Wire", {"expression":false,"source":"app.varEntity.dataValue","targetProperty":"pEntityId"}, {}],
				wire3: ["wm.Wire", {"expression":"\"ACTIVE\"","targetProperty":"pStatus"}, {}],
				wire4: ["wm.Wire", {"expression":"\"%\"","targetProperty":"pAppId"}, {}]
			}]
		}]
	}],
	svarTblRightAsgn: ["wm.ServiceVariable", {"operation":"checkRightAsgnExist","service":"svcExecQueryTksUsrMgt"}, {"onResult":"svarTblRightAsgnResult"}, {
		input: ["wm.ServiceInput", {"type":"checkRightAsgnExistInputs"}, {}]
	}],
	vartest: ["wm.Variable", {"type":"StringData"}, {}],
	varAppid: ["wm.Variable", {"type":"StringData"}, {}],
	navPgMain: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMain\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	svarDestRole: ["wm.ServiceVariable", {"operation":"qryRoleView","service":"dbwaveerp"}, {}, {
		input: ["wm.ServiceInput", {"type":"qryRoleViewInputs"}, {}]
	}],
	svarExecGenericSQL: ["wm.ServiceVariable", {"operation":"execNonQuery","service":"svcExecGenericNonQuery"}, {}, {
		input: ["wm.ServiceInput", {"type":"execNonQueryInputs"}, {}]
	}],
	svarRightAsgnSource: ["wm.ServiceVariable", {"operation":"qryRightAsgnView","service":"dbwaveerp"}, {"onResult":"svarRightAsgnSourceResult"}, {
		input: ["wm.ServiceInput", {"type":"qryRightAsgnViewInputs"}, {}]
	}],
	svarRightAsgnCopy: ["wm.ServiceVariable", {"operation":"copyRoleRights","service":"svcUserFunctions"}, {"onResult":"svarRightAsgnCopyResult"}, {
		input: ["wm.ServiceInput", {"type":"copyRoleRightsInputs"}, {}]
	}],
	varSrcRole: ["wm.Variable", {"type":"StringData"}, {}],
	varDstRole: ["wm.Variable", {"type":"StringData"}, {}],
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
	ddRoleID: ["wm.DesignableDialog", {"buttonBarId":"buttonBar1","containerWidgetId":"containerWidget1","title":"Role List"}, {}, {
		containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			dgRoleID: ["wm.DojoGrid", {"columns":[{"show":false,"field":"seqid","title":"Seqid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"entityid","title":"Entity ID","width":"20%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"roleid","title":"Role ID","width":"20%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"shortdesc","title":"Shortdesc","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"description","title":"Description","width":"60%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"sstatus","title":"Sstatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"startdate","title":"Startdate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"enddate","title":"Enddate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"juid","title":"Juid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Role ID: \" + ${roleid} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n","mobileColumn":true}],"height":"100%","margin":"4"}, {"onClick":"dgRoleIDClick"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"svarRoleID","targetProperty":"dataSet"}, {}]
				}]
			}]
		}],
		buttonBar1: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			panel2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"472px"}, {}, {
				txtRoleSearch: ["wm.Text", {"caption":"Search Role :","captionAlign":"left","dataValue":undefined,"displayValue":"","width":"272px"}, {}],
				btnRoleSearch: ["wm.Button", {"caption":"Search","margin":"4"}, {"onclick":"btnRoleSearchClick"}]
			}],
			btnSelectRole: ["wm.Button", {"caption":"Select","margin":"4"}, {"onclick":"btnSelectRoleClick"}],
			btnCloseRole: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"btnCloseRoleClick"}]
		}]
	}],
	ddRightID: ["wm.DesignableDialog", {"buttonBarId":"buttonBar2","containerWidgetId":"containerWidget2","title":"Right List","width":"1000px"}, {}, {
		containerWidget2: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			dgRightID: ["wm.DojoGrid", {"columns":[{"show":false,"title":"Seqid","width":"100px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"seqid"},{"show":true,"title":"Entity ID","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":false,"title":"Sstatus","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"show":true,"title":"Right ID","width":"240px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"rightid"},{"show":true,"title":"Application ID","width":"240px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"appid"},{"show":true,"title":"Description","width":"400px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"description"},{"show":false,"title":"Juid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"juid"},{"isCustomField":true,"expression":"","show":true,"width":"100%","title":"...","field":"customField"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Right ID: \" + ${rightid} + \"</div>\"\n+ \"<div class='MobileRow'>Application ID: \" + ${appid} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n+ \"<div class='MobileRow'>...: \" + ${customField} + \"</div>\"\n"}],"height":"100%","margin":"4"}, {"onClick":"dgRightIDClick"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"svarRightID","targetProperty":"dataSet"}, {}]
				}]
			}]
		}],
		buttonBar2: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"644px"}, {}, {
				txtSearchRight: ["wm.Text", {"caption":"Search Rights :","captionAlign":"left","captionSize":"111px","dataValue":undefined,"displayValue":"","width":"276px"}, {}],
				txtSearchAppId: ["wm.Text", {"caption":"Search Application Id :","captionSize":"160px","dataValue":undefined,"displayValue":"","width":"290px"}, {}],
				btnSearchRight: ["wm.Button", {"caption":"Search","margin":"4"}, {"onclick":"btnSearchRightClick"}]
			}],
			btnSelectRight: ["wm.Button", {"caption":"Select","margin":"4"}, {"onclick":"btnSelectRightClick"}],
			btnCloseRight: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"btnCloseRightClick"}]
		}]
	}],
	pdAbout: ["wm.PageDialog", {"desktopHeight":"341px","height":"341px","noEscape":true,"noMaxify":true,"noMinify":true,"pageName":"PgAbout","width":"616px"}, {}],
	ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar3","containerWidgetId":"containerWidget3","corner":"cr","modal":false,"title":" Assign Rights to Role Help"}, {}, {
		containerWidget3: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgRightAsgn.html"}, {}]
		}],
		buttonBar3: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			btnClose1: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddPgMainConfigHelp.hide"}]
		}]
	}],
	ddCopyRights: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget4","title":"Select Destination Role"}, {"onShow":"ddCopyRightsShow"}, {
		containerWidget4: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			dgDestRole: ["wm.DojoGrid", {"columns":[{"show":false,"title":"Seqid","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"seqid"},{"show":false,"title":"Juid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"juid"},{"show":true,"title":"Entity ID","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":true,"title":"Role ID","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"roleid"},{"show":false,"title":"Shortdesc","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"shortdesc"},{"show":true,"title":"Description","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"description"},{"show":true,"title":"Status","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"show":false,"title":"Startdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"startdate"},{"show":false,"title":"Enddate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"enddate"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Role ID: \" + ${roleid} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n+ \"<div class='MobileRow'>Status: \" + ${sstatus} + \"</div>\"\n"}],"height":"100%","margin":"4"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"svarDestRole","targetProperty":"dataSet"}, {}]
				}]
			}]
		}],
		buttonBar4: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			btnDestRoleSelect: ["wm.Button", {"caption":"Select","margin":"4"}, {"onclick":"btnDestRoleSelectClick"}],
			btnDestRoleCancel: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"ddCopyRights.hide"}]
		}]
	}],
	ldLoading: ["wm.LoadingDialog", {}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"pnlInputFields","targetProperty":"widgetToCover"}, {}]
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
				pic_home: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Home","source":"resources/images/buttons/home0224.png","width":"24px"}, {"onclick":"pic_homeClick"}],
				Sep01: ["wm.Spacer", {"height":"24px","width":"5px"}, {}],
				pic_back: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Back","source":"resources/images/buttons/arrowleft24.png","width":"24px"}, {"onclick":"pic_backClick"}]
			}],
			pnlMenuButtonRight: ["wm.Panel", {"height":"24px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
				pic_help: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Help","source":"resources/images/buttons/helpred24.png","width":"24px"}, {"onclick":"ddPgMainConfigHelp.show"}],
				pic_about: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"About","source":"resources/images/buttons/aboutblue24.png","width":"24px"}, {"onclick":"pdAbout.show"}]
			}]
		}],
		spacer6: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
		pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
			pnlInputFields: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
				pnlView: ["wm.Panel", {"height":"62%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
					pnlButtonHide: ["wm.Panel", {"height":"15%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
						btnCloseRoleView: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Close","margin":"4"}, {"onclick":"btnCloseRoleViewClick"}]
					}],
					pnlSearch: ["wm.Panel", {"height":"12%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
						txtSearch: ["wm.Text", {"caption":"Search by Right ID : ","captionAlign":"left","captionSize":"135px","dataValue":undefined,"displayValue":"","placeHolder":"Right ID","showing":false,"width":"324px"}, {}],
						btnSearch: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Search","margin":"4","showing":false}, {"onclick":"btnSearchClick"}],
						pnlRoleSearch: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
							txtRoleIDSearch: ["wm.Text", {"caption":"Select Role ID :","captionAlign":"left","captionSize":"105px","dataValue":undefined,"disabled":true,"displayValue":"","placeHolder":"Select Role ID","width":"250px"}, {}],
							btnSearchRole: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"..","margin":"4","width":"30px"}, {"onclick":"btnSearchRoleClick"}],
							txtSearchStatus: ["wm.SelectMenu", {"caption":"Status : ","captionAlign":"left","captionSize":"55px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","options":"ACTIVE,INACTIVE,%","width":"160px"}, {"onchange":"txtSearchStatusChange"}],
							txtAppId: ["wm.Text", {"caption":"App ID:","captionAlign":"left","captionSize":"55px","dataValue":"%","displayValue":"%","width":"160px"}, {}],
							selEntity: ["wm.SelectMenu", {"caption":"Entity:","captionAlign":"left","captionSize":"55px","dataField":"entityid","dataType":"com.dbwaveerp.data.output.QryEntityViewRtnType","dataValue":undefined,"displayField":"entityid","displayValue":"","width":"160px"}, {"onchange":"selEntityChange"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svarEntityID","targetProperty":"dataSet"}, {}]
								}]
							}],
							btnCopyRights: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Copy Rights","margin":"4","width":"120px"}, {"onclick":"btnCopyRightsClick"}],
							btnDeleteAll: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Delete All","margin":"4","width":"120px"}, {"onclick":"btnDeleteAllClick"}]
						}]
					}],
					fpTitle: ["wm.FancyPanel", {"title":"Right Assign List"}, {}, {
						dgRightAsgnID: ["wm.DojoGrid", {"border":"2","borderColor":"#ffffff","columns":[{"show":false,"field":"seqid","title":"Seqid","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"customField","title":"..","width":"15px","editorProps":{"restrictValues":true},"expression":"if (${sstatus}==\"ACTIVE\"){    '<img src =\"resources/images/buttons/grid-green-icon.png\"/>'    } else {    '<img src =\"resources/images/buttons/grid-red-icon.png\"/>'    }","isCustomField":true,"mobileColumn":false},{"show":true,"field":"entityid","title":"Entity ID","width":"120px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"roleid","title":"Role ID","width":"120px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"appid","title":"Application","width":"140px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"rightid","title":"Right ID","width":"240px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"description","title":"Description","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"sstatus","title":"Sstatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"juid","title":"Juid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Role ID: \" + ${roleid} + \"</div>\"\n+ \"<div class='MobileRow'>Application: \" + ${appid} + \"</div>\"\n+ \"<div class='MobileRow'>Right ID: \" + ${rightid} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n","mobileColumn":true}],"height":"100%","margin":"0"}, {"onCellDblClick":"dgRightAsgnIDCellDblClick","onClick":"dgRightAsgnIDClick","onSelect":"dgRightAsgnIDClick"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svarRightAsgnID","targetProperty":"dataSet"}, {}]
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
				pnlRoleId: ["wm.Panel", {"height":"6%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					spacer3: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
					txtRoleId: ["wm.Text", {"caption":"Role ID : ","captionAlign":"left","captionSize":"127px","dataValue":undefined,"displayValue":"","readonly":true,"width":"280px"}, {}],
					btnRoleId: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"..","margin":"4","showing":false,"width":"35px"}, {"onclick":"btnRoleIdClick"}]
				}],
				pnlUserId: ["wm.Panel", {"height":"6%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					spacer4: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
					txtRightId: ["wm.Text", {"caption":"Right ID : ","captionAlign":"left","captionSize":"127px","dataValue":undefined,"displayValue":"","readonly":true,"width":"340px"}, {}],
					btnRightId: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"..","margin":"4","width":"35px"}, {"onclick":"btnRightIdClick"}]
				}],
				pnlDescription: ["wm.Panel", {"height":"6%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					spacer5: ["wm.Spacer", {"height":"48px","width":"40px"}, {}],
					txtDesc: ["wm.Text", {"caption":"Description : ","captionAlign":"left","captionSize":"127px","dataValue":undefined,"displayValue":"","readonly":true,"width":"466px"}, {}],
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
		pnlFooter: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundChromeBar_LightBlue","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundGradient":{"direction":"horizontal","startColor":"#03036d","endColor":"#d8cbf2","colorStop":31}},"verticalAlign":"top","width":"100%"}, {}, {
			lblFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"...","height":"20px","padding":"4","styles":{"backgroundGradient":{"direction":"horizontal","startColor":"#03036d","endColor":"#d8cbf2","colorStop":31}},"width":"100%"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}]
		}]
	}]
}