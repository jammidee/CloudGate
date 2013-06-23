PgMain.widgets = {
	svarAuthenticate: ["wm.ServiceVariable", {"operation":"authenticate","service":"svcLogin"}, {"onResult":"svarAuthenticateResult"}, {
		input: ["wm.ServiceInput", {"type":"authenticateInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":false,"source":"txtPassword.dataValue","targetProperty":"pPass"}, {}],
				wire1: ["wm.Wire", {"expression":false,"source":"txtUserId.dataValue","targetProperty":"pUserId"}, {}]
			}]
		}]
	}],
	navConfig: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgConfig\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navBackToLogin: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgLogin\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navEntity: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgWaiting\"","source":false,"targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	svarPara01: ["wm.ServiceVariable", {"operation":"saveToRegistry","service":"svcRegistry"}, {"onResult":"svarPara01Result"}, {
		input: ["wm.ServiceInput", {"type":"saveToRegistryInputs"}, {}]
	}],
	varOps: ["wm.Variable", {"type":"StringData"}, {}],
	navPgRole: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgRole\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navPgManageUser: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgManageUser\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navPgMainConfig: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMainConfig\"","targetProperty":"pageName"}, {}]
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
	navPgMainReport: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMainReport\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navPgMainTools: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMainTools\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	svarReadCounter: ["wm.ServiceVariable", {"operation":"readCounter","service":"svcRegistry"}, {"onResult":"svarReadCounterResult"}, {
		input: ["wm.ServiceInput", {"type":"readCounterInputs"}, {}]
	}],
	svarReadFromRegistryLogging: ["wm.ServiceVariable", {"operation":"readRegistryDefault","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryLoggingResult"}, {
		input: ["wm.ServiceInput", {"type":"readRegistryDefaultInputs"}, {}]
	}],
	varHasRight: ["wm.Variable", {"type":"StringData"}, {}],
	navPgMainParty: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMainParty\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navPgMainUserProfile: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMainUserProfile\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	svarEmployeeInfo: ["wm.ServiceVariable", {"operation":"getUserValue","service":"svcLogin"}, {"onResult":"svarEmployeeInfoResult"}, {
		input: ["wm.ServiceInput", {"type":"getUserValueInputs"}, {}]
	}],
	navPgMainUser: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMainUser\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	pdLoading: ["wm.PageDialog", {"desktopHeight":"100px","height":"100px","hideControls":true,"pageName":"Main","width":"280px"}, {}],
	ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","title":"Main Help"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgMain.html"}, {}]
		}],
		buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			btnClose: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddPgMainConfigHelp.hide"}]
		}]
	}],
	pdAbout: ["wm.PageDialog", {"desktopHeight":"341px","height":"341px","noEscape":true,"noMaxify":true,"noMinify":true,"pageName":"PgAbout","width":"616px"}, {}],
	pnlLayoutMain: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		pnlHeader: ["wm.Panel", {"height":"45px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
			imgLogo: ["wm.Picture", {"height":"45px","source":"resources/images/logos/waveerplogo.jpg","width":"275px"}, {}],
			pnlTitle: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","styles":{"backgroundImage":"url(resources/images/logos/waveerpbar.jpg)"},"verticalAlign":"middle","width":"100%"}, {}, {
				lblTitle: ["wm.Label", {"align":"right","autoSizeHeight":true,"caption":"Ticket System","height":"36px","padding":"4","singleLine":false,"width":"600px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}]
		}],
		pnlMenuBar: ["wm.Panel", {"height":"20px","horizontalAlign":"right","layoutKind":"left-to-right","styles":{"backgroundColor":"#00008b"},"verticalAlign":"top","width":"100%"}, {}, {
			pnlSubMenu: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"50%"}, {}, {
				lblManageTicket: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Manage Ticket","height":"100%","padding":"4","showing":false,"width":"92px"}, {"onclick":"lblManageTicketClick"}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblSep: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"align":"center","caption":"|","height":"100%","padding":"4","showing":false,"width":"16px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblManageUser: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"align":"center","autoSizeWidth":true,"caption":"Manage Users","height":"100%","padding":"4","width":"90px"}, {"onclick":"lblManageUserClick"}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblSep1: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"align":"center","caption":"|","height":"100%","padding":"4","showing":false,"width":"16px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblManageLookUp: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Manage Lookup","height":"100%","padding":"4","showing":false,"width":"99px"}, {"onclick":"lblManageLookUpClick"}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblSep2: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblParty: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_Mouse_pointer","wm_TextDecoration_Underline"]},"autoSizeWidth":true,"caption":"Manage Parties","height":"100%","padding":"4","width":"97px"}, {"onclick":"lblPartyClick"}],
				lblSep6: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblMaintenance: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Maintenance","height":"100%","padding":"4","width":"81px"}, {"onclick":"lblMaintenanceClick"}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblSep3: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblReport: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Report","height":"100%","padding":"4","width":"48px"}, {"onclick":"lblReportClick"}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblSep4: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblConfigure2: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Configure","height":"100%","padding":"4","width":"66px"}, {"onclick":"lblConfigure2Click"}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblSep5: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblTools: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Tools","height":"100%","padding":"4","width":"39px"}, {"onclick":"navPgMainTools"}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}],
			pnlSystemInfo: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
				lbldDate: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Bold"]},"autoSizeWidth":true,"caption":"DATE:","height":"100%","padding":"4","width":"48px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblDate: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_Yellow"]},"autoSizeWidth":true,"caption":"- - -","height":"100%","padding":"4","width":"33px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblBorder3: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"align":"center","caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblEntityLabel: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Bold"]},"caption":"ENTITY: ","height":"100%","padding":"4","width":"55px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblEntity: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_Yellow"]},"autoSizeWidth":true,"height":"100%","padding":"4","width":"40px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblBorder2: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"align":"center","caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblUserInfo: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_Mouse_pointer","wm_TextDecoration_Underline"]},"autoSizeWidth":true,"height":"100%","padding":"4","width":"40px"}, {"onclick":"navPgMainUserProfile"}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblBorder1: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"align":"center","caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblHelp: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Underline","wm_FontColor_White"]},"autoSizeWidth":true,"caption":"Help","height":"100%","padding":"4","width":"35px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblBorder: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"align":"center","caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblLogout: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Logout","height":"100%","padding":"4","width":"48px"}, {"onclick":"lblLogoutClick"}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}]
		}],
		pnlMenuButton: ["wm.HeaderContentPanel", {"border":"0","height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			pnlMenuButtonLeft: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
				pic_exit: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Exit App","source":"resources/images/buttons/exit24.png","width":"24px"}, {"onclick":"pic_exitClick"}]
			}],
			pnlMenuButtonRight: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
				lblCounterLabel: ["wm.Label", {"_classes":{"domNode":["wm_FontFamily_Arial","wm_FontColor_Blue","wm_TextDecoration_Bold","wm_FontSizePx_14px"]},"align":"left","caption":"Access Count:","height":"100%","padding":"4","width":"106px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblCounter: ["wm.Label", {"_classes":{"domNode":["wm_FontFamily_Arial","wm_FontColor_Evergreen","wm_TextDecoration_Bold","wm_FontSizePx_14px"]},"align":"right","caption":"0000","height":"100%","padding":"4","width":"112px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				pic_help: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Help","source":"resources/images/buttons/helpred24.png","width":"24px"}, {"onclick":"ddPgMainConfigHelp.show"}],
				pic_about: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"About","source":"resources/images/buttons/aboutblue24.png","width":"24px"}, {"onclick":"pdAbout.show"}]
			}]
		}],
		spacer1: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
		pnlBody: ["wm.Panel", {"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","styles":{"backgroundImage":"url(resources/images/logos/wavebgnd.gif) !important; background-repeat:no-repeat !important;"},"verticalAlign":"middle","width":"100%"}, {}, {
			pnlIcons: ["wm.Panel", {"fitToContentHeight":true,"fitToContentWidth":true,"height":"292px","horizontalAlign":"center","verticalAlign":"middle","width":"606px"}, {}, {
				pnlMain1: ["wm.Panel", {"fitToContentHeight":true,"fitToContentWidth":true,"height":"130px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"604px"}, {}, {
					pic_manageuser: ["wm.Picture", {"height":"128px","hint":"Manage User","source":"resources/images/buttons/manageuser128Free.png","width":"128px"}, {"onclick":"navPgMainUser"}],
					spacer5: ["wm.Spacer", {"height":"48px","width":"30px"}, {}],
					pic_manageparties: ["wm.Picture", {"height":"128px","hint":"Manage Parties","source":"resources/images/buttons/manageparties.png","width":"128px"}, {"onclick":"navPgMainParty"}],
					spacer6: ["wm.Spacer", {"height":"48px","width":"30px"}, {}],
					pic_free01: ["wm.Picture", {"height":"128px","hint":"Lookup menu","source":"resources/images/buttons/lookup128f.png","width":"128px"}, {}],
					spacer7: ["wm.Spacer", {"height":"48px","width":"30px"}, {}],
					pic_Free02: ["wm.Picture", {"height":"128px","hint":"Go to cofiguration menu","width":"128px"}, {}]
				}],
				spacer8: ["wm.Spacer", {"height":"30px","width":"47px"}, {}],
				pnlMain: ["wm.Panel", {"fitToContentHeight":true,"fitToContentWidth":true,"height":"130px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"604px"}, {}, {
					pic_maintenance: ["wm.Picture", {"height":"128px","hint":"Go to maintenance","source":"resources/images/buttons/maintenance128.png","width":"128px"}, {"onclick":"navPgMainMaintenance"}],
					spacer2: ["wm.Spacer", {"height":"48px","width":"30px"}, {}],
					pic_Reports: ["wm.Picture", {"height":"128px","hint":"Go to report page","source":"resources/images/buttons/report128.png","width":"128px"}, {"onclick":"navPgMainReport"}],
					spacer3: ["wm.Spacer", {"height":"48px","width":"30px"}, {}],
					pic_Config: ["wm.Picture", {"height":"128px","hint":"Go to cofiguration menu","source":"resources/images/buttons/settingsgear128f.png","width":"128px"}, {"onclick":"navPgMainConfig"}],
					spacer4: ["wm.Spacer", {"height":"48px","width":"30px"}, {}],
					pic_Tools: ["wm.Picture", {"height":"128px","hint":"Go to tools menu","source":"resources/images/buttons/tools128f.png","width":"128px"}, {"onclick":"navPgMainTools"}]
				}]
			}]
		}],
		pnlFooter: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundChromeBar_LightBlue","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			lblFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"...","height":"20px","padding":"4","styles":{"backgroundGradient":{"direction":"horizontal","startColor":"#03036d","endColor":"#d8cbf2","colorStop":31}},"width":"100%"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}]
		}]
	}]
}