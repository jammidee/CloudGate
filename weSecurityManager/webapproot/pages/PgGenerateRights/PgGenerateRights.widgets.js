PgGenerateRights.widgets = {
	svarAuthenticate: ["wm.ServiceVariable", {"operation":"authenticate","service":"svcLogin"}, {"onResult":"svarAuthenticateResult"}, {
		input: ["wm.ServiceInput", {"type":"authenticateInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":false,"source":"txtPassword.dataValue","targetProperty":"pPass"}, {}],
				wire1: ["wm.Wire", {"expression":false,"source":"txtUserId.dataValue","targetProperty":"pUserId"}, {}]
			}]
		}]
	}],
	navAuthenticate: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMain\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	svarGenerateRights: ["wm.ServiceVariable", {"operation":"genRights","service":"svcGenerateRights"}, {"onResult":"svarGenerateRightsResult"}, {
		input: ["wm.ServiceInput", {"type":"genRightsInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":false,"source":"app.varEntity.dataValue","targetProperty":"pEntityId"}, {}]
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
	pdLoading: ["wm.PageDialog", {"desktopHeight":"100px","footerBorder":"0,0,0,0","height":"100px","hideControls":true,"pageName":"Main","titlebarBorder":"0,0,0,0","width":"280px"}, {}],
	pnlLayoutMain: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"horizontalAlign":"left","styles":{"backgroundImage":"url(resources/images/logos/waveerpbar.jpg)"},"verticalAlign":"top"}, {}, {
		pnlHeader: ["wm.Panel", {"customGetValidate":"","height":"45px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
			imgLogo: ["wm.Picture", {"height":"45px","source":"resources/images/logos/waveerplogo.jpg","width":"275px"}, {}],
			pnlTitle: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
				lblTitle: ["wm.Label", {"align":"right","autoSizeHeight":true,"caption":"Ticket System","height":"23px","padding":"4","singleLine":false,"width":"600px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}]
		}],
		pnlMenuBar: ["wm.Panel", {"height":"20px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#00008b"},"verticalAlign":"top","width":"100%"}, {}, {
			lblBack: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Back To Manage Rights","height":"100%","padding":"4","width":"142px"}, {"onclick":"navPgRights"}, {
				format: ["wm.DataFormatter", {}, {}]
			}]
		}],
		pnlMenuButton: ["wm.HeaderContentPanel", {"border":"0","height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
			pnlMenuButtonLeft: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
				pic_back: ["wm.Picture", {"height":"24px","hint":"Back","source":"resources/images/buttons/arrowleft24.png","width":"24px"}, {"onclick":"navPgRights"}]
			}],
			pnlMenuButtonRight: ["wm.Panel", {"height":"24px","horizontalAlign":"left","verticalAlign":"middle","width":"50%"}, {}]
		}],
		spacer1: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
		pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			pnlGenRights1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"34%"}, {}, {
				pnlUsrMgtRights: ["wm.Panel", {"height":"71px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					btnUsrMgtRights: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"User Management Rights","margin":"4","width":"111px"}, {"onclick":"btnUsrMgtRightsClick"}]
				}],
				pnlTicketRights: ["wm.Panel", {"height":"71px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					btnTicketRights: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Ticket Rights","margin":"4","width":"111px"}, {"onclick":"btnTicketRightsClick"}]
				}],
				pnlLookupRights: ["wm.Panel", {"height":"71px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					btnLookupRights: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Lookup Rights","margin":"4","width":"111px"}, {"onclick":"btnLookupRightsClick"}]
				}]
			}],
			pnlGenRights2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"33%"}, {}],
			pnlGenRights3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"33%"}, {}]
		}],
		pnlFooter: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundChromeBar_LightBlue","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			lblFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"...","height":"20px","padding":"4","styles":{"backgroundGradient":{"direction":"horizontal","startColor":"#03036d","endColor":"#d8cbf2","colorStop":31},"backgroundColor":"#ffffff"},"width":"100%"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}]
		}]
	}]
}