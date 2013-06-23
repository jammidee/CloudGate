PgMainUser.widgets = {
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
				wire: ["wm.Wire", {"expression":"\"PgEntity\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navManageUser: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navPgRole: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgRole\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navPgRights: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgRights\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navPgAsgnRole: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgRoleAsgn\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navPgRightAsgn: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgRightAsgn\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navBackToMain: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMain\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navPgUser: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgUser\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	varPageName: ["wm.Variable", {"type":"StringData"}, {}],
	svarPara01: ["wm.ServiceVariable", {"operation":"saveToRegistry","service":"svcRegistry"}, {}, {
		input: ["wm.ServiceInput", {"type":"saveToRegistryInputs"}, {}]
	}],
	navPgMainUserTree: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMainUserTree\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navPgMainUserAdMapping: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMainUserAdMapping\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	varHasRight: ["wm.Variable", {"type":"StringData"}, {}],
	navPgMainUserTools: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMainUserTools\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navPgMainUserManageRights: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMainUserManageRights\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navPgMainUserAsgnRights: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMainUserAsgnRights\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navPgMainUserManageRoles: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMainUserManageRoles\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navPgMainUserAsgnRoles: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMainUserAsgnRoles\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navPgMainUserManageUser: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMainUserManageUser\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	pdAbout: ["wm.PageDialog", {"desktopHeight":"341px","height":"341px","noEscape":true,"noMaxify":true,"noMinify":true,"pageName":"PgAbout","width":"616px"}, {}],
	ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","title":"Configure System Help"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgMainConfigSystem.html"}, {}]
		}],
		buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			btnClose: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddPgMainConfigHelp.hide"}]
		}]
	}],
	pnlLayoutMain: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		pnlHeader: ["wm.Panel", {"height":"45px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
			imgLogo: ["wm.Picture", {"height":"45px","source":"resources/images/logos/waveerplogo.jpg","width":"275px"}, {}],
			pnlTitle: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","styles":{"backgroundImage":"url(resources/images/logos/waveerpbar.jpg)"},"verticalAlign":"middle","width":"100%"}, {}, {
				lblTitle: ["wm.Label", {"align":"right","autoSizeHeight":true,"caption":"Ticket System","height":"23px","padding":"4","singleLine":false,"width":"600px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}]
		}],
		pnlMenuBar: ["wm.Panel", {"height":"20px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#00008b"},"verticalAlign":"top","width":"100%"}, {}, {
			pnlSubMenu: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"70%"}, {}, {
				lblUser: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Users","height":"100%","padding":"4","width":"42px"}, {"onclick":"lblUserClick"}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblSep: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"align":"center","caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblAsgnRole: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Assign Role","height":"100%","padding":"4","width":"76px"}, {"onclick":"lblAsgnRoleClick"}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblSep1: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"align":"center","caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblRoles: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Manage Role","height":"100%","padding":"4","width":"83px"}, {"onclick":"lblRolesClick"}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblSep2: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"align":"center","caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblRightsAsgn: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Assign Rights","height":"100%","padding":"4","width":"86px"}, {"onclick":"lblRightsAsgnClick"}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblSep3: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"align":"center","caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblRights: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Manage Rights","height":"100%","padding":"4","width":"93px"}, {"onclick":"lblRightsClick"}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblSep4: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"align":"center","caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblADMapping: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"caption":"AD Mapping","height":"100%","padding":"4","width":"85px"}, {"onclick":"lblADMappingClick"}],
				lblSep5: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"align":"center","caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblUserTools: ["wm.Label", {"_classes":{"domNode":["wm_Mouse_pointer","wm_FontColor_White","wm_TextDecoration_Underline"]},"align":"center","autoSizeHeight":true,"caption":"User Tools","height":"23px","padding":"4","singleLine":false,"width":"86px"}, {"onclick":"lblUserToolsClick"}]
			}],
			pnlSystemInfo: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"30%"}, {}, {
				lblHelp: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Help","height":"100%","padding":"4","width":"35px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblBorder1: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"align":"center","caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblEntity: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Help","height":"100%","padding":"4","width":"35px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblBorder2: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"align":"center","caption":"|","height":"100%","padding":"4","width":"16px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				lblUserInfo: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"autoSizeWidth":true,"height":"100%","padding":"4","width":"40px"}, {}, {
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
		pnlMenuButton: ["wm.HeaderContentPanel", {"border":"0","height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
			pnlMenuButtonLeft: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
				pic_back: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Back","source":"resources/images/buttons/arrowleft24.png","width":"24px"}, {"onclick":"navBackToMain"}],
				spacer2: ["wm.Spacer", {"height":"24px","width":"20px"}, {}],
				pic_userTree: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"User Tree","source":"resources/images/buttons/tree24.png","width":"24px"}, {"onclick":"navPgMainUserTree"}],
				spacer7: ["wm.Spacer", {"height":"24px","width":"10px"}, {}],
				pic_user: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Manage User","source":"resources/images/buttons/user24.png","width":"24px"}, {"onclick":"pic_userClick"}],
				spacer3: ["wm.Spacer", {"height":"24px","width":"10px"}, {}],
				pic_asgnrole: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Assign Role","source":"resources/images/buttons/roleasgn24.png","width":"24px"}, {"onclick":"pic_asgnroleClick"}],
				spacer4: ["wm.Spacer", {"height":"24px","width":"10px"}, {}],
				pic_managerole: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Manage Role","source":"resources/images/buttons/role24.png","width":"24px"}, {"onclick":"pic_manageroleClick"}],
				spacer5: ["wm.Spacer", {"height":"24px","width":"10px"}, {}],
				pic_asgnrights: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Assign Rights to Roles","source":"resources/images/buttons/rightsasgn24.png","width":"24px"}, {"onclick":"pic_asgnrightsClick"}],
				spacer6: ["wm.Spacer", {"height":"24px","width":"10px"}, {}],
				pic_managerights: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Manage Rights","source":"resources/images/buttons/rights24.png","width":"24px"}, {"onclick":"pic_managerightsClick"}]
			}],
			pnlMenuButtonRight: ["wm.Panel", {"height":"24px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
				pic_help: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Help","source":"resources/images/buttons/helpred24.png","width":"24px"}, {"onclick":"ddPgMainConfigHelp.show"}],
				pic_about: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"About","source":"resources/images/buttons/aboutblue24.png","width":"24px"}, {"onclick":"pdAbout.show"}]
			}]
		}],
		spacer1: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
		pnlBody: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","styles":{"backgroundImage":"url(resources/images/logos/wavebgnd.gif) !important; background-repeat:no-repeat !important;"},"verticalAlign":"bottom","width":"100%"}, {}, {
			pic_ManageUser: ["wm.Picture", {"height":"128px","hint":"Go to cofiguration menu","source":"resources/images/buttons/manageuser128Free.png","width":"128px"}, {}]
		}],
		pnlFooter: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel","wm_BackgroundChromeBar_LightBlue"]},"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			lblFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"...","height":"20px","padding":"4","styles":{"backgroundGradient":{"direction":"horizontal","startColor":"#03036d","endColor":"#d8cbf2","colorStop":31}},"width":"100%"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}]
		}]
	}]
}