PgMainUserTree.widgets = {
	varOps: ["wm.Variable", {"type":"StringData"}, {}],
	navPgMain: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMain\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	svarEntity: ["wm.ServiceVariable", {"operation":"qryEntity","service":"dbwaveerp"}, {}, {
		input: ["wm.ServiceInput", {"type":"qryEntityInputs"}, {}]
	}],
	svarUserTree: ["wm.ServiceVariable", {"operation":"loadData","service":"svcJSONLibrary02"}, {"onResult":"svarUserTreeResult"}, {
		input: ["wm.ServiceInput", {"type":"loadDataInputs"}, {}]
	}],
	navPgManageUser: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgManageUser\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	svarUserTreeQry: ["wm.ServiceVariable", {"operation":"qryUserTree","service":"dbwaveerp"}, {"onResult":"svarUserTreeQryResult"}, {
		input: ["wm.ServiceInput", {"type":"qryUserTreeInputs"}, {}]
	}],
	svarUserProp: ["wm.ServiceVariable", {"operation":"loadData","service":"svcJSONLibrary"}, {"onResult":"svarUserPropResult"}, {
		input: ["wm.ServiceInput", {"type":"loadDataInputs"}, {}]
	}],
	navPgMainUserManageUser: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMainUserManageUser\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	pdLoading: ["wm.PageDialog", {"desktopHeight":"100px","height":"100px","hideControls":true,"pageName":"Main","width":"280px"}, {}],
	ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","title":"Configuration Help"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgMainConfig.html"}, {}]
		}],
		buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			btnClose: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddPgMainConfigHelp.hide"}]
		}]
	}],
	pdAbout: ["wm.PageDialog", {"desktopHeight":"341px","height":"341px","noEscape":true,"noMaxify":true,"noMinify":true,"pageName":"PgAbout","width":"616px"}, {}],
	pnlLayoutMain: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"horizontalAlign":"left","verticalAlign":"top","width":"829px"}, {}, {
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
				pic_delete: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Delete Application Entry","source":"resources/images/buttons/Recyclebin24.png","width":"30px"}, {}]
			}],
			pnlMenuButtonRight: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
				pic_help: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Help","source":"resources/images/buttons/helpred24.png","width":"24px"}, {"onclick":"ddPgMainConfigHelp.show"}],
				pic_about: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"About","source":"resources/images/buttons/aboutblue24.png","width":"24px"}, {"onclick":"pdAbout.show"}]
			}]
		}],
		spacer1: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
		pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
			pnlLookup: ["wm.FancyPanel", {"innerLayoutKind":"left-to-right","title":"User Tree View"}, {}, {
				pnlLookupGrid: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"12px"}, {}, {
					otData: ["wm.ObjectTree", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"height":"100%"}, {"onclick":"otDataClick"}]
				}],
				pnlTree: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"250px"}, {}, {
					ptTree: ["wm.PropertyTree", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"height":"100%"}, {"onselect":"ptTreeSelect"}]
				}],
				splitEntity: ["wm.Splitter", {"_classes":{"domNode":["wm_BackgroundColor_LightBlue"]},"bevelSize":"5","height":"100%","width":"5px"}, {}],
				pnlControl: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
					spacer2: ["wm.Spacer", {"height":"22px","width":"96px"}, {}],
					txtUserId: ["wm.Text", {"caption":"User ID","captionAlign":"left","dataValue":undefined,"displayValue":"","width":"250px"}, {}],
					txtUserName: ["wm.Text", {"caption":"Username","captionAlign":"left","dataValue":undefined,"displayValue":"","width":"400px"}, {}],
					txtFirstName: ["wm.Text", {"caption":"First Name","captionAlign":"left","dataValue":undefined,"displayValue":"","placeHolder":"Wave Enterprise","width":"400px"}, {}],
					txtMiddleName: ["wm.Text", {"caption":"Middle Name","captionAlign":"left","dataValue":undefined,"displayValue":"","placeHolder":"Wave Enterprise","width":"400px"}, {}],
					txtLastName: ["wm.Text", {"caption":"Last Name","captionAlign":"left","dataValue":undefined,"displayValue":"","placeHolder":"Wave Enterprise","width":"400px"}, {}],
					txtEmail: ["wm.Text", {"caption":"Email","captionAlign":"left","dataValue":undefined,"displayValue":"","placeHolder":"Wave Enterprise","width":"400px"}, {}],
					txtParent: ["wm.Text", {"caption":"Parent","captionAlign":"left","dataValue":undefined,"displayValue":"","width":"250px"}, {}]
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