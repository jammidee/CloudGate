PgMainMaintenanceLoglist.widgets = {
	varOps: ["wm.Variable", {"type":"StringData"}, {}],
	navPgMain: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMain\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navPgMainMaintenance: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMainMaintenance\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	svarAppList: ["wm.ServiceVariable", {"operation":"qryAppList","service":"dbwaveerp"}, {}, {
		input: ["wm.ServiceInput", {"type":"qryAppListInputs"}, {}]
	}],
	svarLogList: ["wm.ServiceVariable", {"operation":"qryLogList","service":"dbwaveerp"}, {"onResult":"svarLogListResult"}, {
		input: ["wm.ServiceInput", {"type":"qryLogListInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":false,"source":"dtStartDate.dataValue","targetProperty":"pStart"}, {}],
				wire1: ["wm.Wire", {"expression":false,"source":"dtEndDate.dataValue","targetProperty":"pEnd"}, {}],
				wire2: ["wm.Wire", {"expression":false,"source":"txtAppId.dataValue","targetProperty":"pAppId"}, {}]
			}]
		}]
	}],
	svarLogDelete: ["wm.ServiceVariable", {"operation":"qryLogDelete","service":"dbwaveerp"}, {"onResult":"svarLogDeleteResult"}, {
		input: ["wm.ServiceInput", {"type":"qryLogDeleteInputs"}, {}]
	}],
	svarLogDeletePrior: ["wm.ServiceVariable", {"operation":"qryLogDeletePrior","service":"dbwaveerp"}, {}, {
		input: ["wm.ServiceInput", {"type":"qryLogDeletePriorInputs"}, {}]
	}],
	pdLoading: ["wm.PageDialog", {"desktopHeight":"100px","height":"100px","hideControls":true,"pageName":"Main","width":"280px"}, {}],
	ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","corner":"cr","modal":false,"title":"Log List Help"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgMainMaintenanceLoglist.html"}, {}]
		}],
		buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			btnClose: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddPgMainConfigHelp.hide"}]
		}]
	}],
	pdAbout: ["wm.PageDialog", {"desktopHeight":"341px","height":"341px","noEscape":true,"noMaxify":true,"noMinify":true,"pageName":"PgAbout","width":"616px"}, {}],
	pnlLayoutMain: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		pnlHeader: ["wm.Panel", {"height":"45px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			imgLogo: ["wm.Picture", {"height":"45px","source":"resources/images/logos/waveerplogo.jpg","width":"275px"}, {}],
			pnlTitle: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","styles":{"backgroundImage":"url(resources/images/logos/waveerpbar.jpg)"},"verticalAlign":"middle","width":"100%"}, {}, {
				lblTitle: ["wm.Label", {"align":"right","autoSizeHeight":true,"caption":"Wave ERP System","height":"23px","padding":"4","singleLine":false,"width":"600px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}]
		}],
		pnlMenuBar: ["wm.Panel", {"height":"20px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#00008b"},"verticalAlign":"top","width":"100%"}, {}, {
			pnlSubMenu: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"70%"}, {}, {
				lblBack: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"caption":"Back","padding":"4","width":"40px"}, {"onclick":"lblBackClick"}, {
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
				Sep2: ["wm.Spacer", {"height":"24px","width":"5px"}, {}],
				pic_toCsv: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Export Grid to CSV","source":"resources/images/buttons/csv24.png","width":"30px"}, {"onclick":"pic_toCsvClick"}],
				pic_delete: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Delete Application Entry","source":"resources/images/buttons/Recyclebin24.png","width":"30px"}, {"onclick":"pic_deleteClick"}],
				btnDeletePrior: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Delete Prior","desktopHeight":"28px","height":"28px","hint":"Delete logs prior to select log.","margin":"4","mobileHeight":"28px","width":"120px"}, {"onclick":"btnDeletePriorClick"}]
			}],
			pnlMenuButtonRight: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
				pic_help: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Help","source":"resources/images/buttons/helpred24.png","width":"24px"}, {"onclick":"ddPgMainConfigHelp.show"}],
				pic_about: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"About","source":"resources/images/buttons/aboutblue24.png","width":"24px"}, {"onclick":"pdAbout.show"}]
			}]
		}],
		spacer1: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
		pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
			pnlLookup: ["wm.FancyPanel", {"title":"Log List ( Cross-Entity List )"}, {}, {
				dgLookup: ["wm.DojoGrid", {"columns":[{"show":true,"title":"Created","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"logdatetime"},{"show":true,"title":"Userid","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"userid"},{"show":true,"title":"Msg","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"msg"},{"show":true,"title":"Moduleid","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"moduleid"},{"show":true,"title":"Proccess","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"proccess"},{"show":true,"title":"Appid","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"appid"},{"show":true,"title":"Scopeid","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"scopeid"},{"show":true,"title":"Stype","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"stype"},{"show":true,"title":"Entity","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entity"},{"show":false,"title":"Juid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"juid"},{"show":true,"title":"Serverid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"serverid"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Created: \" + wm.List.prototype.dateFormatter({}, null,null,null,${logdatetime}) + \"</div>\"\n+ \"<div class='MobileRow'>Userid: \" + ${userid} + \"</div>\"\n+ \"<div class='MobileRow'>Msg: \" + ${msg} + \"</div>\"\n+ \"<div class='MobileRow'>Moduleid: \" + ${moduleid} + \"</div>\"\n+ \"<div class='MobileRow'>Proccess: \" + ${proccess} + \"</div>\"\n+ \"<div class='MobileRow'>Appid: \" + ${appid} + \"</div>\"\n+ \"<div class='MobileRow'>Scopeid: \" + ${scopeid} + \"</div>\"\n+ \"<div class='MobileRow'>Stype: \" + ${stype} + \"</div>\"\n+ \"<div class='MobileRow'>Entity: \" + ${entity} + \"</div>\"\n+ \"<div class='MobileRow'>Serverid: \" + ${serverid} + \"</div>\"\n"}],"height":"100%","margin":"4"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"svarLogList","targetProperty":"dataSet"}, {}]
					}]
				}],
				pnlControl: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"35px","verticalAlign":"middle","width":"678px"}, {}, {
					lblFilter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_Blue","wm_TextDecoration_Bold"]},"caption":"Filter:","padding":"4","width":"46px"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					dtStartDate: ["wm.DateTime", {"caption":"Start Date","captionSize":"80px","displayValue":"","width":"260px"}, {}],
					dtEndDate: ["wm.DateTime", {"caption":"End Date","captionSize":"80px","displayValue":"","width":"260px"}, {}],
					txtAppId: ["wm.Text", {"caption":"App ID:","captionSize":"80px","dataValue":"%","displayValue":"%","placeHolder":"%","width":"200px"}, {}],
					pic_refresh: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Refresh","source":"resources/images/buttons/refresh24.png","width":"30px"}, {"onclick":"pic_refreshClick"}]
				}]
			}]
		}],
		pnlFooter: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel","wm_BackgroundChromeBar_LightBlue"]},"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			lblFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"...","height":"20px","padding":"4","styles":{"backgroundGradient":{"direction":"horizontal","startColor":"#03036d","endColor":"#d8cbf2","colorStop":31}},"width":"100%"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}]
		}]
	}]
}