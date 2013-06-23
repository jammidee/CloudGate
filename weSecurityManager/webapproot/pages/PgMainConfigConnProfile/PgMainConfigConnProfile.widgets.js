PgMainConfigConnProfile.widgets = {
	varOps: ["wm.Variable", {"type":"StringData"}, {}],
	navPgMain: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMain\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	svarSelectEntity: ["wm.ServiceVariable", {"operation":"qryEntitySelect","service":"dbwaveerp"}, {}, {
		input: ["wm.ServiceInput", {"type":"qryEntitySelectInputs"}, {}]
	}],
	svarExecGenericNonQuery: ["wm.ServiceVariable", {"operation":"execNonQuery","service":"svcExecGenericNonQuery"}, {"onResult":"svarExecGenericNonQueryResult"}, {
		input: ["wm.ServiceInput", {"type":"execNonQueryInputs"}, {}]
	}],
	navPgMainConfig: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMainConfig\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	svarConnProfileView: ["wm.ServiceVariable", {"operation":"qryConnProfileView","service":"dbwaveerp"}, {}, {
		input: ["wm.ServiceInput", {"type":"qryConnProfileViewInputs"}, {}]
	}],
	svarConnProfileUpdate: ["wm.ServiceVariable", {"operation":"updConnProfileView","service":"dbwaveerp"}, {"onResult":"svarConnProfileUpdateResult"}, {
		input: ["wm.ServiceInput", {"type":"updConnProfileViewInputs"}, {}]
	}],
	svarConnProfileCreate: ["wm.ServiceVariable", {"operation":"createConnProfile","service":"svcConnProfileFunction"}, {"onResult":"svarConnProfileCreateResult"}, {
		input: ["wm.ServiceInput", {"type":"createConnProfileInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"txtConnId.dataValue","targetProperty":"pConnId"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"txtDbDriver.dataValue","targetProperty":"pDbDriver"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"selDbEngine.selectedItem.dataValue","targetProperty":"pDbEngine"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"txtPassword.dataValue","targetProperty":"pDbPassword"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"txtDbUrl.dataValue","targetProperty":"pDbUrl"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"txtUsername.dataValue","targetProperty":"pDbUsername"}, {}],
				wire6: ["wm.Wire", {"expression":undefined,"source":"txtDescription.dataValue","targetProperty":"pDescription"}, {}]
			}]
		}]
	}],
	svarConnProfileDelete: ["wm.ServiceVariable", {"operation":"qryConnProfileDelete","service":"dbwaveerp"}, {"onResult":"svarConnProfileDeleteResult"}, {
		input: ["wm.ServiceInput", {"type":"qryConnProfileDeleteInputs"}, {}]
	}],
	pdLoading: ["wm.PageDialog", {"desktopHeight":"100px","height":"100px","hideControls":true,"pageName":"Main","width":"280px"}, {}],
	ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","corner":"cr","modal":false,"title":"Connection Profile Help"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgMainConfigConnProfile.html"}, {}]
		}],
		buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			btnClose: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddPgMainConfigHelp.hide"}]
		}]
	}],
	pdAbout: ["wm.PageDialog", {"desktopHeight":"341px","height":"341px","noEscape":true,"noMaxify":true,"noMinify":true,"pageName":"PgAbout","width":"616px"}, {}],
	ddSelectEntity: ["wm.DesignableDialog", {"buttonBarId":"buttonBar1","containerWidgetId":"containerWidget1","title":"Select Entity","width":"800px"}, {"onShow":"ddSelectEntityShow"}, {
		containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			dgDataSelect: ["wm.DojoGrid", {"columns":[{"show":false,"title":"Seqid","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"seqid"},{"show":false,"title":"Juid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"juid"},{"show":true,"title":"Entity ID","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":true,"title":"Company","width":"200px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"company"},{"show":true,"title":"Description","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"description"},{"show":false,"title":"Addr01","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"addr01"},{"show":false,"title":"Addr02","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"addr02"},{"show":false,"title":"Addr03","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"addr03"},{"show":false,"title":"Sstatus","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"show":false,"title":"Startdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"startdate"},{"show":false,"title":"Enddate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"enddate"},{"show":false,"title":"Deleted","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"deleted"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Company: \" + ${company} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n"}],"height":"100%","localizationStructure":{},"margin":"4"}, {"onCellDblClick":"dgDataSelectCellDblClick"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"svarSelectEntity","targetProperty":"dataSet"}, {}]
				}]
			}]
		}],
		buttonBar1: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","fitToContentHeight":true,"height":"33px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			btnSelectSelect: ["wm.Button", {"caption":"Select","margin":"4"}, {"onclick":"btnSelectSelectClick"}],
			btnSelectClose: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddSelectEntity.hide"}]
		}]
	}],
	ddSelectUser: ["wm.DesignableDialog", {"buttonBarId":"buttonBar3","containerWidgetId":"containerWidget2","title":"Select User to Add"}, {"onShow":"ddSelectUserShow"}, {
		containerWidget2: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			dgSelectUser: ["wm.DojoGrid", {"columns":[{"show":true,"title":"User ID","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"userid"},{"show":false,"title":"Entityid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":false,"title":"Password","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"password"},{"show":true,"title":"Username","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"username"},{"show":true,"title":"Firstname","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"firstname"},{"show":true,"title":"Middlename","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"middlename"},{"show":true,"title":"Lastname","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"lastname"},{"show":true,"title":"Status","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"show":false,"title":"Email","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"email"},{"show":false,"title":"Roleid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"roleid"},{"show":false,"title":"Startdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"startdate"},{"show":false,"title":"Enddate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"enddate"},{"show":false,"title":"Userimgext","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"userimgext"},{"show":false,"title":"Pid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"pid"},{"show":false,"title":"Deleted","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"deleted"},{"show":false,"title":"Passwdenc","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"passwdenc"},{"show":false,"title":"ParentPerson","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"parentPerson"}],"height":"100%","margin":"4"}, {"onCellDblClick":"dgSelectUserCellDblClick"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"svarUserView","targetProperty":"dataSet"}, {}]
				}]
			}]
		}],
		buttonBar3: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","fitToContentHeight":true,"height":"33px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			btnSelectUserAdd: ["wm.Button", {"caption":"Add","margin":"4"}, {"onclick":"btnSelectUserAddClick"}],
			btnSelectUserCancel: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"ddSelectUser.hide"}]
		}]
	}],
	ddConnProfileCreate: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget3","desktopHeight":"250px","height":"250px","title":"New Connection Profile","width":"650px"}, {"onShow":"ddConnProfileCreateShow"}, {
		containerWidget3: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			txtConnId: ["wm.Text", {"caption":"Connection ID:","captionAlign":"left","dataValue":undefined,"displayValue":"","placeHolder":"REMOTEDB","width":"250px"}, {}],
			txtDescription: ["wm.Text", {"caption":"Description:","captionAlign":"left","dataValue":undefined,"displayValue":"","placeHolder":"mySQL Connection Profile","width":"400px"}, {}],
			pnlEngine: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
				selDbEngine: ["wm.SelectMenu", {"caption":"DB Engine:","captionAlign":"left","dataValue":undefined,"displayValue":"","placeHolder":"MYSQL","width":"250px"}, {}],
				btnSelectEngine: ["wm.Button", {"caption":"Pattern","margin":"4"}, {"onclick":"btnSelectEngineClick"}]
			}],
			txtDbDriver: ["wm.Text", {"caption":"DB Driver:","captionAlign":"left","dataValue":undefined,"displayValue":"","placeHolder":"com.mysql.jdbc.Driver","width":"350px"}, {}],
			txtDbUrl: ["wm.Text", {"caption":"DB Url:","captionAlign":"left","dataValue":undefined,"displayValue":"","placeHolder":"jdbc:mysql://localhost:3306/dbwaveerp","width":"600px"}, {}],
			txtUsername: ["wm.Text", {"caption":"Username:","captionAlign":"left","dataValue":undefined,"displayValue":"","placeHolder":"root","width":"250px"}, {}],
			txtPassword: ["wm.Text", {"caption":"Password:","captionAlign":"left","dataValue":undefined,"displayValue":"","password":true,"placeHolder":"password","width":"250px"}, {}]
		}],
		buttonBar2: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","fitToContentHeight":true,"height":"33px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			btnConnProfileCreate: ["wm.Button", {"caption":"Create","margin":"4"}, {"onclick":"btnConnProfileCreateClick"}],
			btnConnProfileCancel: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"ddConnProfileCreate.hide"}]
		}]
	}],
	pnlLayoutMain: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"horizontalAlign":"left","styles":{"backgroundImage":"url(resources/images/logos/waveerpbar.jpg)","color":"#ffffff"},"verticalAlign":"top"}, {}, {
		pnlHeader: ["wm.Panel", {"height":"45px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			imgLogo: ["wm.Picture", {"height":"45px","source":"resources/images/logos/waveerplogo.jpg","width":"275px"}, {}],
			pnlTitle: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
				lblTitle: ["wm.Label", {"align":"right","autoSizeHeight":true,"caption":"Wave ERP System","height":"23px","padding":"4","singleLine":false,"width":"600px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}]
		}],
		pnlMenuBar: ["wm.Panel", {"height":"20px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#00008b"},"verticalAlign":"top","width":"100%"}, {}, {
			pnlSubMenu: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"70%"}, {}, {
				lblBack: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"caption":"Back","height":"100%","padding":"4","width":"40px"}, {"onclick":"lblBackClick"}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}],
			pnlSystemInfo: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"30%"}, {}, {
				lbldDate: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Bold"]},"autoSizeWidth":true,"caption":"DATE:","height":"100%","padding":"4","width":"48px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblDate: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_Yellow"]},"autoSizeWidth":true,"caption":"- - -","height":"100%","padding":"4","width":"33px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblBorder2: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"align":"center","caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblEntityLabel: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Bold"]},"caption":"ENTITY: ","height":"100%","padding":"4","width":"55px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblEntity: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_Yellow"]},"autoSizeWidth":true,"height":"100%","padding":"4","width":"40px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblBorder1: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"align":"center","caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblUserInfo: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"autoSizeWidth":true,"height":"100%","padding":"4","width":"40px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}]
		}],
		pnlMenuButton: ["wm.HeaderContentPanel", {"border":"0","height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			pnlMenuButtonLeft: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"50%"}, {}, {
				pic_home: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Home","source":"resources/images/buttons/home0224.png","width":"24px"}, {"onclick":"pic_homeClick"}],
				Sep01: ["wm.Spacer", {"height":"24px","width":"5px"}, {}],
				pic_back: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Back","source":"resources/images/buttons/arrowleft24.png","width":"24px"}, {"onclick":"pic_backClick"}],
				pic_new: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"New","source":"resources/images/buttons/addball24.png","width":"30px"}, {"onclick":"pic_newClick"}],
				pic_delete: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Delete","source":"resources/images/buttons/Recyclebin24.png","width":"30px"}, {"onclick":"pic_deleteClick"}]
			}],
			pnlMenuButtonRight: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
				pic_help: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Help","source":"resources/images/buttons/helpred24.png","width":"24px"}, {"onclick":"ddPgMainConfigHelp.show"}],
				pic_about: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"About","source":"resources/images/buttons/aboutblue24.png","width":"24px"}, {"onclick":"pdAbout.show"}]
			}]
		}],
		spacer1: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
		pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			pnlConnProfile: ["wm.FancyPanel", {"title":"Connection Profile"}, {}, {
				pnlSelSite: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
					txtEntity: ["wm.Text", {"caption":"Select Entity:","captionAlign":"left","dataValue":undefined,"displayValue":"","styles":{"color":"#000000"}}, {}],
					btnEntitySelect: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"..","margin":"4","width":"29px"}, {"onclick":"ddSelectEntity.show"}],
					lblSite: ["wm.Label", {"caption":"---","padding":"4","width":"336px"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}],
				dgData: ["wm.DojoGrid", {"columns":[{"show":false,"title":"Juid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"juid"},{"show":false,"title":"Entity ID","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":true,"title":"Conn ID","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"connid"},{"show":true,"title":"Description","width":"160px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"description"},{"show":true,"title":"Engine","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"dbengine"},{"show":true,"title":"Driver","width":"180px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"dbdriver"},{"show":true,"title":"Url","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"dburl"},{"show":true,"title":"Username","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"dbusername"},{"show":true,"title":"Status","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"show":false,"title":"Password","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"dbpassword"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Conn ID: \" + ${connid} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n+ \"<div class='MobileRow'>Engine: \" + ${dbengine} + \"</div>\"\n+ \"<div class='MobileRow'>Driver: \" + ${dbdriver} + \"</div>\"\n+ \"<div class='MobileRow'>Url: \" + ${dburl} + \"</div>\"\n+ \"<div class='MobileRow'>Username: \" + ${dbusername} + \"</div>\"\n+ \"<div class='MobileRow'>Status: \" + ${sstatus} + \"</div>\"\n"}],"height":"100%","margin":"4"}, {"onClick":"dgDataClick","onSelect":"dgDataClick"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"svarConnProfileView","targetProperty":"dataSet"}, {}]
					}]
				}]
			}]
		}],
		pnlControl: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"middle","width":"100%"}, {}, {
			selStatus: ["wm.SelectMenu", {"caption":"Status:","captionAlign":"left","captionSize":"60px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","options":"ACTIVE, LOCKED","styles":{"color":"#000000"},"width":"200px"}, {}],
			btnUpdateAction: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Update","margin":"4"}, {"onclick":"btnUpdateActionClick"}]
		}],
		pnlFooter: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel","wm_BackgroundChromeBar_LightBlue"]},"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			lblFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"...","height":"20px","padding":"4","styles":{"backgroundGradient":{"direction":"horizontal","startColor":"#03036d","endColor":"#d8cbf2","colorStop":31}},"width":"100%"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}]
		}]
	}]
}