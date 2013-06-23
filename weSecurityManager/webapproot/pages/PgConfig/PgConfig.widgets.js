PgConfig.widgets = {
	svarSaveConfigComAdd: ["wm.ServiceVariable", {"operation":"writeAppRegistry","service":"svcRegistry"}, {}, {
		input: ["wm.ServiceInput", {"type":"writeAppRegistryInputs"}, {}]
	}],
	svarSaveConfigComId: ["wm.ServiceVariable", {"operation":"writeAppRegistry","service":"svcRegistry"}, {}, {
		input: ["wm.ServiceInput", {"type":"writeAppRegistryInputs"}, {}]
	}],
	svarSaveConfigEntId: ["wm.ServiceVariable", {"operation":"writeAppRegistry","service":"svcRegistry"}, {}, {
		input: ["wm.ServiceInput", {"type":"writeAppRegistryInputs"}, {}]
	}],
	svarReadConfigComId: ["wm.ServiceVariable", {"operation":"readAppRegistry","service":"svcRegistry"}, {"onResult":"svarReadConfigComIdResult","onSuccess":"svarReadConfigComIdSuccess"}, {
		input: ["wm.ServiceInput", {"type":"readAppRegistryInputs"}, {}]
	}],
	svarReadConfigComAdd: ["wm.ServiceVariable", {"operation":"readAppRegistry","service":"svcRegistry"}, {"onResult":"svarReadConfigComAddResult"}, {
		input: ["wm.ServiceInput", {"type":"readAppRegistryInputs"}, {}]
	}],
	svarReadConfigEntId: ["wm.ServiceVariable", {"operation":"readAppRegistry","service":"svcRegistry"}, {"onResult":"svarReadConfigEntIdResult"}, {
		input: ["wm.ServiceInput", {"type":"readAppRegistryInputs"}, {}]
	}],
	navBackToMain: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMain\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	svarSaveConfigUserId: ["wm.ServiceVariable", {"operation":"writeAppRegistry","service":"svcRegistry"}, {}, {
		input: ["wm.ServiceInput", {"type":"writeAppRegistryInputs"}, {}]
	}],
	svarReadConfigUserId: ["wm.ServiceVariable", {"operation":"readAppRegistry","service":"svcRegistry"}, {"onResult":"svarReadConfigUserIdResult"}, {
		input: ["wm.ServiceInput", {"type":"readAppRegistryInputs"}, {}]
	}],
	svarEntityId: ["wm.ServiceVariable", {"operation":"getEntityID","service":"dbwaveerp"}, {}, {
		input: ["wm.ServiceInput", {"type":"getEntityIDInputs"}, {}]
	}],
	pnlLayoutMain: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		pnlHeader: ["wm.Panel", {"height":"45px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
			imgLogo: ["wm.Picture", {"height":"45px","source":"resources/images/logos/waveerplogo.jpg","width":"275px"}, {}],
			pnlTitle: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","styles":{"backgroundImage":"url(resources/images/logos/waveerpbar.jpg)","backgroundGradient":"","backgroundColor":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
				lblTitle: ["wm.Label", {"align":"right","autoSizeHeight":true,"caption":"Ticket System","height":"23px","padding":"4","singleLine":false,"width":"600px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}]
		}],
		pnlMenuBar: ["wm.Panel", {"height":"20px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#00008b"},"verticalAlign":"top","width":"100%"}, {}, {
			pnlSubMenu: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"75%"}, {}, {
				lblMain: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"autoSizeWidth":true,"caption":"Main","height":"100%","padding":"4","width":"36px"}, {"onclick":"lblMainClick"}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}],
			pnlSystemInfo: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"25%"}, {}, {
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
			pnlMenuButtonLeft: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"50%"}, {}, {
				pic_back: ["wm.Picture", {"height":"24px","hint":"Back","source":"resources/images/buttons/arrowleft24.png","width":"24px"}, {}]
			}],
			pnlMenuButtonRight: ["wm.Panel", {"height":"24px","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}]
		}],
		spacer2: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
		pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
			pnlConfig: ["wm.Panel", {"height":"70%","horizontalAlign":"left","verticalAlign":"top","width":"80%"}, {}, {
				spcConfig: ["wm.Spacer", {"height":"48px","width":"96px"}, {}],
				pnlUserId: ["wm.Panel", {"height":"30px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					txtUserId: ["wm.Text", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"caption":"User ID :","captionAlign":"left","captionSize":"114px","dataValue":undefined,"displayValue":"","width":"450px"}, {}]
				}],
				pnlComId: ["wm.Panel", {"height":"30px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					txtComId: ["wm.Text", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"caption":"Company ID :","captionAlign":"left","captionSize":"116px","dataValue":undefined,"displayValue":"","width":"450px"}, {}]
				}],
				pnlComAdd: ["wm.Panel", {"height":"127px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					txtComAdd: ["wm.LargeTextArea", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"caption":"Company Address :","dataValue":undefined,"desktopHeight":"121px","displayValue":"","height":"121px","width":"450px"}, {}]
				}],
				pnlEntId: ["wm.Panel", {"height":"29px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					txtEntId: ["wm.SelectMenu", {"allowNone":true,"caption":"Entity ID :","captionAlign":"left","captionSize":"114px","dataField":"c0","dataType":"com.dbwaveerp.data.output.GetEntityIDRtnType","dataValue":undefined,"displayField":"c0","displayValue":"","restrictValues":"on","width":"450px"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"svarEntityId","targetProperty":"dataSet"}, {}]
						}]
					}]
				}],
				pnlButtons: ["wm.Panel", {"height":"48px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					spacer1: ["wm.Spacer", {"height":"48px","width":"301px"}, {}],
					btnSave: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Save","margin":"4"}, {"onclick":"btnSaveClick"}],
					btnCancel: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Cancel","margin":"4"}, {"onclick":"btnCancelClick"}]
				}]
			}]
		}],
		pnlFooter: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundChromeBar_LightBlue","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			lblFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"...","height":"20px","padding":"4","styles":{"backgroundGradient":{"direction":"horizontal","startColor":"#03036d","endColor":"#d8cbf2","colorStop":31},"backgroundColor":"#ffffff"},"width":"100%"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}]
		}]
	}]
}