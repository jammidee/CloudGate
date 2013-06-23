PgJoin.widgets = {
	navBackToLogin: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgLogin\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	varOps: ["wm.Variable", {"type":"StringData"}, {}],
	svarReadFromRegistryJoinPass: ["wm.ServiceVariable", {"operation":"readRegistry","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryJoinPassResult"}, {
		input: ["wm.ServiceInput", {"type":"readRegistryInputs"}, {}]
	}],
	svarReadFromRegistryJoinPassEnc: ["wm.ServiceVariable", {"operation":"readRegistry","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryJoinPassEncResult"}, {
		input: ["wm.ServiceInput", {"type":"readRegistryInputs"}, {}]
	}],
	svarEncryptMD5: ["wm.ServiceVariable", {"operation":"encryptMD5","service":"svcUtility"}, {"onResult":"svarEncryptMD5Result"}, {
		input: ["wm.ServiceInput", {"type":"encryptMD5Inputs"}, {}]
	}],
	varJoinPassEnc: ["wm.Variable", {"type":"StringData"}, {}],
	svarAppJoinToERP: ["wm.ServiceVariable", {"operation":"registerApplicationToERP","service":"svcGenerateAppRights"}, {"onResult":"svarAppJoinToERPResult"}, {
		input: ["wm.ServiceInput", {"type":"registerApplicationToERPInputs"}, {}]
	}],
	svarAppGenerateRights: ["wm.ServiceVariable", {"operation":"generateApplicationRights","service":"svcGenerateAppRights"}, {"onResult":"svarAppGenerateRightsResult"}, {
		input: ["wm.ServiceInput", {"type":"generateApplicationRightsInputs"}, {}]
	}],
	svarEntitySelect: ["wm.ServiceVariable", {"operation":"qryEntitySelect","service":"dbwaveerp"}, {}, {
		input: ["wm.ServiceInput", {"type":"qryEntitySelectInputs"}, {}]
	}],
	svarReadFromPropertyDriverClass: ["wm.ServiceVariable", {"operation":"ReadProperty","service":"svcProperties"}, {"onResult":"svarReadFromPropertyDriverClassResult"}, {
		input: ["wm.ServiceInput", {"type":"ReadPropertyInputs"}, {}]
	}],
	svarReadFromPropertyUsername: ["wm.ServiceVariable", {"operation":"ReadProperty","service":"svcProperties"}, {"onResult":"svarReadFromPropertyUsernameResult"}, {
		input: ["wm.ServiceInput", {"type":"ReadPropertyInputs"}, {}]
	}],
	svarReadFromPropertyConnectionUrl: ["wm.ServiceVariable", {"operation":"ReadProperty","service":"svcProperties"}, {"onResult":"svarReadFromPropertyConnectionUrlResult"}, {
		input: ["wm.ServiceInput", {"type":"ReadPropertyInputs"}, {}]
	}],
	svarReadFromPropertyPassword: ["wm.ServiceVariable", {"operation":"ReadProperty","service":"svcProperties"}, {"onResult":"svarReadFromPropertyPasswordResult"}, {
		input: ["wm.ServiceInput", {"type":"ReadPropertyInputs"}, {}]
	}],
	svarReadFromPropertyNamingStrategy: ["wm.ServiceVariable", {"operation":"ReadProperty","service":"svcProperties"}, {"onResult":"svarReadFromPropertyNamingStrategyResult"}, {
		input: ["wm.ServiceInput", {"type":"ReadPropertyInputs"}, {}]
	}],
	svarReadFromPropertyDialect: ["wm.ServiceVariable", {"operation":"ReadProperty","service":"svcProperties"}, {"onResult":"svarReadFromPropertyDialectResult"}, {
		input: ["wm.ServiceInput", {"type":"ReadPropertyInputs"}, {}]
	}],
	svarWriteToPropertyUsername: ["wm.ServiceVariable", {"operation":"WriteProperty","service":"svcProperties"}, {"onResult":"svarWriteToPropertyUsernameResult"}, {
		input: ["wm.ServiceInput", {"type":"WritePropertyInputs"}, {}]
	}],
	svarWriteToPropertyConnectionUrl: ["wm.ServiceVariable", {"operation":"WriteProperty","service":"svcProperties"}, {}, {
		input: ["wm.ServiceInput", {"type":"WritePropertyInputs"}, {}]
	}],
	svarWriteToPropertyPasswd: ["wm.ServiceVariable", {"operation":"WriteProperty","service":"svcProperties"}, {}, {
		input: ["wm.ServiceInput", {"type":"WritePropertyInputs"}, {}]
	}],
	svarMakeLicenseKey: ["wm.ServiceVariable", {"operation":"makeLicenseKey","service":"svcLicenseSystem"}, {"onResult":"svarMakeLicenseKeyResult"}, {
		input: ["wm.ServiceInput", {"type":"makeLicenseKeyInputs"}, {}]
	}],
	serviceVariable1: ["wm.ServiceVariable", {}, {}, {
		input: ["wm.ServiceInput", {"type":"Inputs"}, {}]
	}],
	svarCreateMissingFolder: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"makeSystemDir","service":"svcMediaLibFunction"}, {}, {
		input: ["wm.ServiceInput", {"type":"makeSystemDirInputs"}, {}]
	}],
	pdLoading: ["wm.PageDialog", {"desktopHeight":"100px","height":"100px","hideControls":true,"pageName":"Main","width":"280px"}, {}],
	pdAbout: ["wm.PageDialog", {"desktopHeight":"341px","height":"341px","noEscape":true,"noMaxify":true,"noMinify":true,"pageName":"PgAbout","width":"616px"}, {}],
	ddPgJoinHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","corner":"cr","modal":false,"title":"Join Help"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgJoin.html"}, {}]
		}],
		buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			btnClose: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddPgJoinHelp.hide"}]
		}]
	}],
	ddSelectEntity: ["wm.DesignableDialog", {"buttonBarId":"buttonBar1","containerWidgetId":"containerWidget1","title":"Select Entity","width":"800px"}, {}, {
		containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			dgEntity: ["wm.DojoGrid", {"columns":[{"show":false,"title":"Seqid","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"seqid"},{"show":true,"title":"Entity ID","width":"80px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":true,"title":"Company","width":"200px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"company"},{"show":true,"title":"Description","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"description"},{"show":false,"title":"Addr01","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"addr01"},{"show":false,"title":"Addr02","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"addr02"},{"show":false,"title":"Addr03","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"addr03"},{"show":false,"title":"Sstatus","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"show":false,"title":"Startdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"startdate"},{"show":false,"title":"Enddate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"enddate"},{"show":false,"title":"Deleted","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"deleted"},{"show":false,"title":"Juid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"juid"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Company: \" + ${company} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n"}],"height":"100%","localizationStructure":{},"margin":"4"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"svarEntitySelect","targetProperty":"dataSet"}, {}]
				}]
			}]
		}],
		buttonBar1: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			btnSelectSelect: ["wm.Button", {"caption":"Select","margin":"4"}, {"onclick":"btnSelectSelectClick"}],
			btnSelectClose: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddSelectEntity.hide"}]
		}]
	}],
	pnlLayoutMain: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		pnlHeader: ["wm.Panel", {"height":"45px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			imgLogo: ["wm.Picture", {"height":"45px","source":"resources/images/logos/waveerplogo.jpg","width":"275px"}, {}],
			pnlTitle: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","styles":{"backgroundImage":"url(resources/images/logos/waveerpbar.jpg)"},"verticalAlign":"middle","width":"100%"}, {}, {
				lblTitle: ["wm.Label", {"align":"right","autoSizeHeight":true,"caption":"Wave ERP System","height":"23px","padding":"4","singleLine":false,"width":"400px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}]
		}],
		pnlMenuBar: ["wm.Panel", {"height":"20px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#00008b"},"verticalAlign":"top","width":"100%"}, {}, {
			pnlSubMenu: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"70%"}, {}, {
				lblBack: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_TextDecoration_Underline","wm_Mouse_pointer"]},"caption":"Back","height":"100%","padding":"4","width":"40px"}, {"onclick":"navBackToLogin"}, {
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
				pic_back: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Back","source":"resources/images/buttons/arrowleft24.png","width":"24px"}, {"onclick":"navBackToLogin"}]
			}],
			pnlMenuButtonRight: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
				pic_help: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Help","source":"resources/images/buttons/helpred24.png","width":"24px"}, {"onclick":"ddPgJoinHelp.show"}],
				pic_about: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"About","source":"resources/images/buttons/aboutblue24.png","width":"24px"}, {"onclick":"pdAbout.show"}]
			}]
		}],
		spacer1: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
		pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
			fpJoin: ["wm.FancyPanel", {"title":"Join to Wave ERP"}, {}, {
				pnlJoinPass: ["wm.Panel", {"fitToContentHeight":true,"height":"57px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					spcJoin: ["wm.Spacer", {"height":"48px","width":"150px"}, {}],
					lblDescription: ["wm.Label", {"align":"left","caption":"This page will setup Wave ERP System database connection parameters. Make sure you have the correct password to be allowed.","height":"55px","padding":"4","singleLine":false,"width":"250px"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}],
				pnlJoinP: ["wm.Panel", {"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					txtPassword: ["wm.Text", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"caption":"Updating Password","captionSize":"150px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","password":true,"placeHolder":"Updating password","promptMessage":"This is required.","width":"400px"}, {}]
				}],
				pnlJoinButton: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					spcJoin1: ["wm.Spacer", {"height":"24px","width":"150px"}, {}],
					btnJoin: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Show Property","margin":"4","width":"166px"}, {"onclick":"btnJoinClick"}]
				}],
				spcJoin2: ["wm.Spacer", {"height":"27px","width":"150px"}, {}],
				pnlEntity: ["wm.Panel", {"fitToContentHeight":true,"height":"158px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
					pnlProp: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						txtDriverClass: ["wm.Text", {"caption":"Driver Class:","captionSize":"150px","dataValue":undefined,"disabled":true,"displayValue":"","placeHolder":"com.mysql.jdbc.Driver","width":"480px"}, {}]
					}],
					pnlProp1: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						txtUsername: ["wm.Text", {"caption":"Username:","captionSize":"150px","dataValue":undefined,"displayValue":"","placeHolder":"root","width":"330px"}, {}]
					}],
					pnlProp2: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						txtConnectionUrl: ["wm.Text", {"caption":"Connection URL:","captionSize":"150px","dataValue":undefined,"displayValue":"","placeHolder":"jdbc\\:mysql\\://localhost\\:3307/dbwaveerp","width":"480px"}, {}]
					}],
					pnlProp3: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						txtPasswd: ["wm.Text", {"caption":"Password:","captionSize":"150px","dataValue":undefined,"displayValue":"","placeHolder":"7b6a43524a352c09787b686e1b5c783a172653-jmd","width":"480px"}, {}]
					}],
					pnlProp4: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						txtNamingStrat: ["wm.Text", {"caption":"Naming Strategy:","captionSize":"150px","dataValue":undefined,"disabled":true,"displayValue":"","placeHolder":"com.wavemaker.tools.data.reveng.DefaultRevengNamingStrategy","width":"630px"}, {}]
					}],
					pnlProp5: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						txtDialect: ["wm.Text", {"caption":"Dialect:","captionSize":"150px","dataValue":undefined,"disabled":true,"displayValue":"","placeHolder":"com.wavemaker.runtime.data.dialect.MySQLDialect","width":"480px"}, {}]
					}]
				}],
				pnlJoinButton02: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
					spcJoin3: ["wm.Spacer", {"height":"24px","width":"150px"}, {}],
					btnJoin02: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Join This App to Wave ERP.","margin":"4","width":"270px"}, {"onclick":"btnJoin02Click"}],
					txtEntity: ["wm.Text", {"caption":"Entity:","captionSize":"50px","dataValue":"DEFAULT","displayValue":"DEFAULT","placeHolder":"DEFAULT","promptMessage":"Entity is required.","width":"150px"}, {}],
					lbldesc: ["wm.Label", {"caption":"Generate rights for security manager.","padding":"4","width":"232px"}, {}]
				}],
				pnlJoinAction: ["wm.Panel", {"height":"57px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
					spacer2: ["wm.Spacer", {"height":"20px","width":"150px"}, {}],
					btnPropertyAction: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Update Database Connection","margin":"4","width":"250px"}, {"onclick":"btnPropertyActionClick"}]
				}],
				pnlGenKey: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
					txtRegisterKey: ["wm.Text", {"caption":"Registration Key:","captionSize":"150px","dataValue":undefined,"displayValue":"","password":true,"placeHolder":"Enter the registration / license key here.","promptMessage":"Allows local connection.","width":"630px"}, {}],
					btnRegister: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Register","margin":"4"}, {"onclick":"btnRegisterClick"}]
				}]
			}]
		}],
		pnlFooter: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel","wm_BackgroundChromeBar_LightBlue"]},"height":"20px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			lblFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"...","height":"100%","padding":"4","styles":{"backgroundGradient":{"direction":"horizontal","startColor":"#03036d","endColor":"#d8cbf2","colorStop":31}},"width":"100%"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}]
		}]
	}]
}