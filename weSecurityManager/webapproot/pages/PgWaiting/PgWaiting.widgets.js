PgWaiting.widgets = {
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
	svarGetUserID: ["wm.ServiceVariable", {"operation":"getUserId","service":"svcRegistry"}, {"onResult":"svarGetUserIDResult"}, {
		input: ["wm.ServiceInput", {"type":"getUserIdInputs"}, {}]
	}],
	svarGetUserInfo: ["wm.ServiceVariable", {"operation":"getUserInfo","service":"svcLogin"}, {"onResult":"svarGetUserInfoResult"}, {
		input: ["wm.ServiceInput", {"type":"getUserInfoInputs"}, {}]
	}],
	svarBrowserList: ["wm.ServiceVariable", {"operation":"qryBrowserList","service":"dbwaveerp"}, {}, {
		input: ["wm.ServiceInput", {"type":"qryBrowserListInputs"}, {}]
	}],
	varPassword: ["wm.Variable", {"type":"StringData"}, {}],
	svarGenerateKeyNoKey: ["wm.ServiceVariable", {"operation":"generateKeyNoKey","service":"svcLicenseSystem"}, {"onResult":"svarGenerateKeyNoKeyResult"}, {
		input: ["wm.ServiceInput", {"type":"generateKeyNoKeyInputs"}, {}]
	}],
	svarUrlAccess: ["wm.ServiceVariable", {"operation":"qryUrlAccess","service":"dbwaveerp"}, {"onResult":"svarUrlAccessResult"}, {
		input: ["wm.ServiceInput", {"type":"qryUrlAccessInputs"}, {}]
	}],
	pnlLayoutMain: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		pnlHeader: ["wm.Panel", {"height":"40px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
			imgLogo: ["wm.Picture", {"height":"45px","source":"resources/images/logos/waveerplogo.jpg","width":"275px"}, {}],
			pnlTitle: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","styles":{"color":"#ffffff","backgroundGradient":"","backgroundImage":"url(resources/images/logos/waveerpbar.jpg)"},"verticalAlign":"middle","width":"100%"}, {}, {
				lblTitle: ["wm.Label", {"align":"right","autoSizeHeight":true,"caption":"Wave ERP Security Manager","height":"34px","padding":"4","singleLine":false,"styles":{"backgroundImage":"url(resources/images/logos/waveerpbar.jpg)","backgroundGradient":"","backgroundColor":"#ffffff"},"width":"600px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}]
		}],
		pnlMenuBar: ["wm.Panel", {"height":"20px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#00008b"},"verticalAlign":"top","width":"100%"}, {}],
		pnlMenuButton: ["wm.HeaderContentPanel", {"border":"0","height":"28px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}],
		spacer1: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
		pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","styles":{"backgroundImage":"url(resources/images/logos/wavebgnd.gif) !important; background-repeat:no-repeat !important;"},"verticalAlign":"middle","width":"100%"}, {}, {
			pnlLoading: ["wm.Panel", {"height":"89px","horizontalAlign":"center","verticalAlign":"top","width":"362px"}, {}, {
				loading: ["wm.Picture", {"height":"58px","source":"resources/images/imagelists/loadingblue.gif","width":"186px"}, {}],
				label2: ["wm.Label", {"_classes":{"domNode":["wm_FontFamily_Courier","wm_FontSizePx_14px","wm_FontColor_SteelBlue"]},"align":"center","caption":"Please wait for a while...","padding":"4","width":"251px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}]
		}],
		pnlFooter: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundChromeBar_LightBlue","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"20px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			lblFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"...","height":"100%","padding":"4","styles":{"backgroundGradient":{"direction":"horizontal","startColor":"#03036d","endColor":"#d8cbf2","colorStop":31}},"width":"100%"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}]
		}]
	}]
}