PgMainMaintenance.widgets = {
	varOps: ["wm.Variable", {"type":"StringData"}, {}],
	navPgMain: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMain\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	svarReadFromRegistry: ["wm.ServiceVariable", {"operation":"readRegistry","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryResult"}, {
		input: ["wm.ServiceInput", {"type":"readRegistryInputs"}, {}]
	}],
	navPgMainMaintenanceAppList: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMainMaintenanceApplist\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navPgMainMaintenanceLogList: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMainMaintenanceLoglist\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navPgMainMaintenanceRegList: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMainMaintenanceReglist\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navPgMainMaintenanceEntity: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMainMaintenanceEntity\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	varHasRight: ["wm.Variable", {"type":"StringData"}, {}],
	navPgMaintenanceEntityAsgn: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMainMaintenanceEntityAsgn\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navPgMainMaintenanceOrg: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMainMaintenanceOrg\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navPgMainMaintenanceSession: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMainMaintenanceSession\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	pdLoading: ["wm.PageDialog", {"desktopHeight":"100px","height":"100px","hideControls":true,"pageName":"Main","width":"280px"}, {}],
	ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","title":"Maintenance Help"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgMainMaintenance.html"}, {}]
		}],
		buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
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
				lblBack: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"caption":"Back","height":"100%","padding":"4","width":"40px"}, {"onclick":"lblBackClick"}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblSep7: ["wm.Label", {"_classes":{"domNode":["wm_Mouse_pointer","wm_FontColor_White"]},"caption":"|","height":"100%","padding":"4","width":"14px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblOrganization: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"caption":"Organization","height":"100%","padding":"4","width":"83px"}, {"onclick":"lblOrganizationClick"}],
				lblSep8: ["wm.Label", {"_classes":{"domNode":["wm_Mouse_pointer","wm_FontColor_White"]},"caption":"|","height":"100%","padding":"4","width":"14px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblAppList: ["wm.Label", {"_classes":{"domNode":["wm_Mouse_pointer","wm_FontColor_White","wm_TextDecoration_Underline"]},"caption":"App List","height":"100%","padding":"4","width":"53px"}, {"onclick":"lblAppListClick"}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblSep2: ["wm.Label", {"_classes":{"domNode":["wm_Mouse_pointer","wm_FontColor_White"]},"caption":"|","height":"100%","padding":"4","width":"14px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblRegs: ["wm.Label", {"_classes":{"domNode":["wm_Mouse_pointer","wm_FontColor_White","wm_TextDecoration_Underline"]},"caption":"Regs List","height":"100%","padding":"4","width":"64px"}, {"onclick":"lblRegsClick"}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblSep3: ["wm.Label", {"_classes":{"domNode":["wm_Mouse_pointer","wm_FontColor_White"]},"caption":"|","height":"100%","padding":"4","width":"14px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblSession: ["wm.Label", {"_classes":{"domNode":["wm_Mouse_pointer","wm_FontColor_White","wm_TextDecoration_Underline"]},"align":"center","autoSizeHeight":true,"caption":"Session","padding":"4","singleLine":false,"width":"57px"}, {"onclick":"lblSessionClick"}],
				lblSep5: ["wm.Label", {"_classes":{"domNode":["wm_Mouse_pointer","wm_FontColor_White"]},"caption":"|","height":"100%","padding":"4","width":"14px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblLogs: ["wm.Label", {"_classes":{"domNode":["wm_Mouse_pointer","wm_FontColor_White","wm_TextDecoration_Underline"]},"caption":"Logs","height":"100%","padding":"4","width":"40px"}, {"onclick":"lblLogsClick"}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblSep4: ["wm.Label", {"_classes":{"domNode":["wm_Mouse_pointer","wm_FontColor_White"]},"caption":"|","height":"100%","padding":"4","width":"14px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblEntityPage: ["wm.Label", {"_classes":{"domNode":["wm_Mouse_pointer","wm_FontColor_White","wm_TextDecoration_Underline"]},"caption":"Entity","height":"100%","padding":"4","width":"41px"}, {"onclick":"lblEntityPageClick"}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblSep01: ["wm.Label", {"_classes":{"domNode":["wm_Mouse_pointer","wm_FontColor_White"]},"caption":"|","height":"100%","padding":"4","width":"14px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblEntityAsgn: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Entity Asgn","height":"100%","padding":"4","width":"74px"}, {"onclick":"lblEntityAsgnClick"}]
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
			pnlMenuButtonLeft: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
				pic_back: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Back","source":"resources/images/buttons/arrowleft24.png","width":"24px"}, {"onclick":"pic_backClick"}]
			}],
			pnlMenuButtonRight: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
				pic_help: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Help","source":"resources/images/buttons/helpred24.png","width":"24px"}, {"onclick":"ddPgMainConfigHelp.show"}],
				pic_about: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"About","source":"resources/images/buttons/aboutblue24.png","width":"24px"}, {"onclick":"pdAbout.show"}]
			}]
		}],
		spacer1: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
		pnlBody: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","styles":{"backgroundImage":"url(resources/images/logos/wavebgnd.gif) !important; background-repeat:no-repeat !important;"},"verticalAlign":"bottom","width":"100%"}, {}, {
			pic_maintenance: ["wm.Picture", {"height":"128px","hint":"Maintendance","source":"resources/images/buttons/maintenance128.png","width":"128px"}, {}]
		}],
		pnlFooter: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel","wm_BackgroundChromeBar_LightBlue"]},"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			lblFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"...","height":"20px","padding":"4","styles":{"backgroundGradient":{"direction":"horizontal","startColor":"#03036d","endColor":"#d8cbf2","colorStop":31}},"width":"100%"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}]
		}]
	}]
}