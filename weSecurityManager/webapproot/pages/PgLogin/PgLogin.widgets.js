PgLogin.widgets = {
	svarAuthenticate: ["wm.ServiceVariable", {"operation":"authenticate","service":"svcLogin"}, {"onResult":"svarAuthenticateResult"}, {
		input: ["wm.ServiceInput", {"type":"authenticateInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":false,"source":"txtPassword.dataValue","targetProperty":"pPass"}, {}],
				wire1: ["wm.Wire", {"expression":false,"source":"txtUserId.dataValue","targetProperty":"pUserId"}, {}]
			}]
		}]
	}],
	svarTestDb: ["wm.ServiceVariable", {"operation":"testDatabase","service":"svcDbDirect"}, {"onResult":"svarTestDbResult"}, {
		input: ["wm.ServiceInput", {"type":"testDatabaseInputs"}, {}]
	}],
	svarReadCounter: ["wm.ServiceVariable", {"operation":"readCounter","service":"svcRegistry"}, {"onResult":"svarReadCounterResult"}, {
		input: ["wm.ServiceInput", {"type":"readCounterInputs"}, {}]
	}],
	svarUpdateCounter: ["wm.ServiceVariable", {"operation":"saveCounter","service":"svcRegistry"}, {}, {
		input: ["wm.ServiceInput", {"type":"saveCounterInputs"}, {}]
	}],
	navPgJoin: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgJoin\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	svarReadFromRegistrySitePhrase: ["wm.ServiceVariable", {"operation":"readRegistryDefault","service":"svcRegistry"}, {"onResult":"svarReadFromRegistrySitePhraseResult"}, {
		input: ["wm.ServiceInput", {"type":"readRegistryDefaultInputs"}, {}]
	}],
	svarBrowserList: ["wm.ServiceVariable", {"operation":"qryBrowserList","service":"dbwaveerp"}, {"onResult":"svarBrowserListResult"}, {
		input: ["wm.ServiceInput", {"type":"qryBrowserListInputs"}, {}]
	}],
	svarCreateSession: ["wm.ServiceVariable", {"operation":"createNewSession","service":"svcSessionFunction"}, {"onResult":"svarCreateSessionResult"}, {
		input: ["wm.ServiceInput", {"type":"createNewSessionInputs"}, {}]
	}],
	svarGetRolePage: ["wm.ServiceVariable", {"operation":"getUserRoles","service":"svcSecurity"}, {"onResult":"svarGetRolePageResult"}, {
		input: ["wm.ServiceInput", {"type":"getUserRolesInputs"}, {}]
	}],
	svarLoadUserRightsPage: ["wm.ServiceVariable", {"operation":"loadUserRight","service":"svcSecurity"}, {"onResult":"svarLoadUserRightsPageResult"}, {
		input: ["wm.ServiceInput", {"type":"loadUserRightInputs"}, {}]
	}],
	navPgMain: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMain\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	svarReadFromRegistryJRXMLFormat: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"readRegistryDefault","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryJRXMLFormatResult"}, {
		input: ["wm.ServiceInput", {"type":"readRegistryDefaultInputs"}, {}]
	}],
	pnlLayoutMain: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"horizontalAlign":"left","styles":{"backgroundColor":"#00008b"},"verticalAlign":"top"}, {}, {
		pnlHeader: ["wm.Panel", {"customGetValidate":"","height":"40px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
			imgLogo: ["wm.Picture", {"height":"45px","source":"resources/images/logos/waveerplogo.jpg","width":"275px"}, {}],
			pnlTitle: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","styles":{"backgroundImage":"url(resources/images/logos/waveerpbar.jpg)"},"verticalAlign":"middle","width":"100%"}, {}, {
				lblTitle: ["wm.Label", {"align":"right","autoSizeHeight":true,"caption":"Wave ERP Security Manager","padding":"4","singleLine":false,"width":"600px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}]
		}],
		pnlMenuBar: ["wm.Panel", {"height":"20px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#00008b"},"verticalAlign":"top","width":"100%"}, {}],
		pnlMenuButton: ["wm.HeaderContentPanel", {"border":"0","height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			pnlMenuButtonLeft: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}],
			pnlMenuButtonRight: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
				pic_join: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Join to ERP","source":"resources/images/buttons/join24.png","width":"24px"}, {"onclick":"navPgJoin"}]
			}]
		}],
		spacer1: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
		pnlBody: ["wm.Panel", {"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","styles":{"backgroundImage":"url(resources/images/logos/wavebgnd.gif) !important; background-repeat:no-repeat !important;"},"verticalAlign":"middle","width":"100%"}, {}, {
			pnlLogin: ["wm.Panel", {"fitToContentHeight":true,"height":"232px","horizontalAlign":"left","verticalAlign":"top","width":"588px"}, {}, {
				spcLogin: ["wm.Spacer", {"height":"48px","width":"96px"}, {}],
				pnlUserId: ["wm.Panel", {"desktopHeight":"29px","enableTouchHeight":true,"height":"29px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"35px","verticalAlign":"middle","width":"100%"}, {}, {
					UserIdFront: ["wm.Spacer", {"height":"48px","width":"96px"}, {}],
					txtUserId: ["wm.Text", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"caption":"User ID:","captionAlign":"left","dataValue":undefined,"displayValue":"","width":"389px"}, {}],
					spcUserIdLast: ["wm.Spacer", {"height":"48px","width":"96px"}, {}]
				}],
				pnlPassword: ["wm.Panel", {"desktopHeight":"29px","enableTouchHeight":true,"height":"29px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"35px","verticalAlign":"top","width":"100%"}, {}, {
					spcPasswordFront: ["wm.Spacer", {"height":"48px","width":"96px"}, {}],
					txtPassword: ["wm.Text", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"caption":"Password:","captionAlign":"left","dataValue":undefined,"displayValue":"","password":true,"width":"389px"}, {"onEnterKeyPress":"txtPasswordEnterKeyPress"}],
					spcPasswordLast: ["wm.Spacer", {"height":"48px","width":"96px"}, {}]
				}],
				pnlLoginButton: ["wm.Panel", {"height":"42px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"488px"}, {}, {
					spcLogin1: ["wm.Spacer", {"height":"23px","width":"96px"}, {}],
					pnlErrorMsg: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"307px"}, {}, {
						lblErrorMsg: ["wm.Label", {"_classes":{"domNode":["wm_FontFamily_Arial","wm_FontSizePx_14px","wm_FontColor_BrightRed"]},"align":"center","caption":"Error Message","height":"40px","padding":"4","width":"304px"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}]
					}],
					btnLogin: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Login","margin":"4"}, {"onclick":"btnLoginClick"}]
				}],
				pnlCounter: ["wm.Panel", {"fitToContentHeight":true,"height":"42px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					spcCounter: ["wm.Spacer", {"height":"23px","width":"96px"}, {}],
					lblCounterLabel: ["wm.Label", {"_classes":{"domNode":["wm_FontFamily_Arial","wm_FontColor_Blue","wm_FontSizePx_20px","wm_TextDecoration_Bold"]},"align":"left","caption":"Access Count:","height":"40px","padding":"4","width":"150px"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					lblCounter: ["wm.Label", {"_classes":{"domNode":["wm_FontFamily_Arial","wm_FontSizePx_20px","wm_FontColor_Evergreen","wm_TextDecoration_Bold"]},"align":"right","caption":"0000","height":"40px","padding":"4","width":"240px"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}],
				lblSitePhrase: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px"]},"align":"center","caption":"- - -","height":"40px","padding":"4","width":"100%"}, {}]
			}]
		}],
		pnlFooter: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundChromeBar_LightBlue","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			lblFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"...","height":"20px","padding":"4","styles":{"backgroundGradient":{"direction":"horizontal","startColor":"#03036d","endColor":"#d8cbf2","colorStop":31}},"width":"100%"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}]
		}]
	}]
}