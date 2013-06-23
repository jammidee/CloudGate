PgMainConfigSystem.widgets = {
	varOps: ["wm.Variable", {"type":"StringData"}, {}],
	navPgMain: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMain\"","targetProperty":"pageName"}, {}]
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
	svarReadFromRegistry: ["wm.ServiceVariable", {"operation":"readRegistry","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryResult"}, {
		input: ["wm.ServiceInput", {"type":"readRegistryInputs"}, {}]
	}],
	svarReadFromRegistryJoinPass: ["wm.ServiceVariable", {"operation":"readRegistry","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryJoinPassResult"}, {
		input: ["wm.ServiceInput", {"type":"readRegistryInputs"}, {}]
	}],
	svarReadFromRegistryDbUrl: ["wm.ServiceVariable", {"operation":"readRegistry","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryDbUrlResult"}, {
		input: ["wm.ServiceInput", {"type":"readRegistryInputs"}, {}]
	}],
	svarReadFromRegistryDbDriver: ["wm.ServiceVariable", {"operation":"readRegistry","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryDbDriverResult"}, {
		input: ["wm.ServiceInput", {"type":"readRegistryInputs"}, {}]
	}],
	svarReadFromRegistryDbUser: ["wm.ServiceVariable", {"operation":"readRegistry","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryDbUserResult"}, {
		input: ["wm.ServiceInput", {"type":"readRegistryInputs"}, {}]
	}],
	svarReadFromRegistryDbPassword: ["wm.ServiceVariable", {"operation":"readRegistry","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryDbPasswordResult"}, {
		input: ["wm.ServiceInput", {"type":"readRegistryInputs"}, {}]
	}],
	svarWriteToRegistryDbDriver: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {}, {
		input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
	}],
	svarWriteToRegistryDbUser: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {}, {
		input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
	}],
	svarWriteToRegistryDbPassword: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {}, {
		input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
	}],
	svarReadFromRegistryDbDatabase: ["wm.ServiceVariable", {"operation":"readRegistry","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryDbDatabaseResult"}, {
		input: ["wm.ServiceInput", {"type":"readRegistryInputs"}, {}]
	}],
	svarWriteToRegistryDbDatabase: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {}, {
		input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
	}],
	svarWriteToRegistryEmailHost: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {}, {
		input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
	}],
	svarWriteToRegistryEmailPort: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {}, {
		input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
	}],
	svarWriteToRegistryEmailUser: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {}, {
		input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
	}],
	svarWriteToRegistryEmailPassword: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {}, {
		input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
	}],
	svarReadFromRegistryEmailHost: ["wm.ServiceVariable", {"operation":"readRegistry","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryEmailHostResult"}, {
		input: ["wm.ServiceInput", {"type":"readRegistryInputs"}, {}]
	}],
	svarReadFromRegistryEmailPort: ["wm.ServiceVariable", {"operation":"readRegistry","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryEmailPortResult"}, {
		input: ["wm.ServiceInput", {"type":"readRegistryInputs"}, {}]
	}],
	svarReadFromRegistryEmailUser: ["wm.ServiceVariable", {"operation":"readRegistry","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryEmailUserResult"}, {
		input: ["wm.ServiceInput", {"type":"readRegistryInputs"}, {}]
	}],
	svarReadFromRegistryEmailPassword: ["wm.ServiceVariable", {"operation":"readRegistry","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryEmailPasswordResult"}, {
		input: ["wm.ServiceInput", {"type":"readRegistryInputs"}, {}]
	}],
	svarEncryptMD5: ["wm.ServiceVariable", {"operation":"encryptMD5","service":"svcUtility"}, {"onResult":"svarEncryptMD5Result"}, {
		input: ["wm.ServiceInput", {"type":"encryptMD5Inputs"}, {}]
	}],
	svarWriteToRegistryJoinPassEnc: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {}, {
		input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
	}],
	svarSendEmail: ["wm.ServiceVariable", {"operation":"sendMsg","service":"svcSendMail"}, {"onResult":"svarSendEmailResult"}, {
		input: ["wm.ServiceInput", {"type":"sendMsgInputs"}, {}]
	}],
	svarDESEncrypt: ["wm.ServiceVariable", {"operation":"encrypt","service":"svcDESEncryption"}, {"onResult":"svarDESEncryptResult"}, {
		input: ["wm.ServiceInput", {"type":"encryptInputs"}, {}]
	}],
	svarDESInit: ["wm.ServiceVariable", {"operation":"Encrypter","service":"svcDESEncryption"}, {}, {
		input: ["wm.ServiceInput", {"type":"EncrypterInputs"}, {}]
	}],
	svarDESDecrypt: ["wm.ServiceVariable", {"operation":"decrypt","service":"svcDESEncryption"}, {"onResult":"svarDESDecryptResult"}, {
		input: ["wm.ServiceInput", {"type":"decryptInputs"}, {}]
	}],
	svarGetJason: ["wm.ServiceVariable", {"operation":"getJSONTree","service":"svcJSONLibrary"}, {"onResult":"svarGetJasonResult"}, {
		input: ["wm.ServiceInput", {"type":"getJSONTreeInputs"}, {}]
	}],
	svarGetJason2: ["wm.ServiceVariable", {"operation":"loadData","service":"svcJSONLibrary02"}, {"onResult":"svarGetJason2Result"}, {
		input: ["wm.ServiceInput", {"type":"loadDataInputs"}, {}]
	}],
	svarTestDb: ["wm.ServiceVariable", {"operation":"testDatabase","service":"svcDbDirect"}, {"onResult":"svarTestDbResult"}, {
		input: ["wm.ServiceInput", {"type":"testDatabaseInputs"}, {}]
	}],
	svarWriteToRegistryLogging: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {"onResult":"svarWriteToRegistryLoggingResult"}, {
		input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
	}],
	svarReadFromRegistryLogging: ["wm.ServiceVariable", {"operation":"readRegistryDefault","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryLoggingResult"}, {
		input: ["wm.ServiceInput", {"type":"readRegistryDefaultInputs"}, {}]
	}],
	svarTestLog: ["wm.ServiceVariable", {"operation":"erpLog","service":"svcLogger"}, {"onResult":"svarTestLogResult"}, {
		input: ["wm.ServiceInput", {"type":"erpLogInputs"}, {}]
	}],
	svarLogView: ["wm.ServiceVariable", {"operation":"erpLogFileRelativePath","service":"svcLogger"}, {"onResult":"svarLogViewResult"}, {
		input: ["wm.ServiceInput", {"type":"erpLogFileRelativePathInputs"}, {}]
	}],
	svarReadFromRegistrySitePhrase: ["wm.ServiceVariable", {"operation":"readRegistryDefault","service":"svcRegistry"}, {"onResult":"svarReadFromRegistrySitePhraseResult"}, {
		input: ["wm.ServiceInput", {"type":"readRegistryDefaultInputs"}, {}]
	}],
	svarWriteToRegistrySitePhrase: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {}, {
		input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
	}],
	svarWriteToRegistryReqBrowser: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {}, {
		input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
	}],
	svarReadFromRegistryReqBrowser: ["wm.ServiceVariable", {"operation":"readRegistryDefault","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryReqBrowserResult"}, {
		input: ["wm.ServiceInput", {"type":"readRegistryDefaultInputs"}, {}]
	}],
	svarReadFromRegistryCentralRepo: ["wm.ServiceVariable", {"operation":"readRegistryDefault","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryCentralRepoResult"}, {
		input: ["wm.ServiceInput", {"type":"readRegistryDefaultInputs"}, {}]
	}],
	svarWriteToRegistryRepo: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {"onResult":"svarWriteToRegistryRepoResult"}, {
		input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
	}],
	svarReadFromRegistryTimeout: ["wm.ServiceVariable", {"operation":"readRegistryDefault","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryTimeoutResult"}, {
		input: ["wm.ServiceInput", {"type":"readRegistryDefaultInputs"}, {}]
	}],
	svarWriteToRegistryTimeout: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {"onResult":"svarWriteToRegistryTimeoutResult"}, {
		input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
	}],
	svarReadFromRegistryTimeoutSwitch: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"readRegistryDefault","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryTimeoutSwitchResult"}, {
		input: ["wm.ServiceInput", {"type":"readRegistryDefaultInputs"}, {}]
	}],
	svarWriteToRegistryTimeoutSwitch: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"writeRegistry","service":"svcRegistry"}, {}, {
		input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
	}],
	svarReadFromRegistryJRXMLFormat: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"readRegistryDefault","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryJRXMLFormatResult"}, {
		input: ["wm.ServiceInput", {"type":"readRegistryDefaultInputs"}, {}]
	}],
	pdLoading: ["wm.PageDialog", {"desktopHeight":"100px","height":"100px","hideControls":true,"pageName":"Main","width":"280px"}, {}],
	ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","corner":"cr","modal":false,"title":"Configure System Help"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgMainConfigSystem.html"}, {}]
		}],
		buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			btnClose: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddPgMainConfigHelp.hide"}]
		}]
	}],
	pdAbout: ["wm.PageDialog", {"desktopHeight":"341px","height":"341px","noEscape":true,"noMaxify":true,"noMinify":true,"pageName":"PgAbout","width":"616px"}, {}],
	ddTestMail: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget1","desktopHeight":"250px","height":"250px","title":"Test Email","width":"400px"}, {}, {
		containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			txtSendTo: ["wm.Text", {"caption":"Send Email To:","captionAlign":"left","captionSize":"120px","dataValue":"jammi.dee@baligyaan.com","displayValue":"jammi.dee@baligyaan.com","width":"100%"}, {}],
			txtSubject: ["wm.Text", {"caption":"Email Subject:","captionAlign":"left","captionSize":"120px","dataValue":"Test email from CloudGate DMS","displayValue":"Test email from CloudGate DMS","width":"100%"}, {}],
			txtMessage: ["wm.LargeTextArea", {"caption":"Test Message:","captionPosition":"left","captionSize":"120px","dataValue":"This is a test email from CG DMS system.","displayValue":"This is a test email from CG DMS system.","width":"100%"}, {}]
		}],
		buttonBar1: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","desktopHeight":"32px","enableTouchHeight":true,"fitToContentHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
			btnTestSend: ["wm.Button", {"caption":"Send","margin":"4"}, {"onclick":"btnTestSendClick"}],
			btnTestCancel: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"ddTestMail.hide"}]
		}]
	}],
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
				pic_back: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Back","source":"resources/images/buttons/arrowleft24.png","width":"24px"}, {"onclick":"pic_backClick"}]
			}],
			pnlMenuButtonRight: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
				pic_help: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Help","source":"resources/images/buttons/helpred24.png","width":"24px"}, {"onclick":"ddPgMainConfigHelp.show"}],
				pic_about: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"About","source":"resources/images/buttons/aboutblue24.png","width":"24px"}, {"onclick":"pdAbout.show"}]
			}]
		}],
		spacer1: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
		pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
			accSystem: ["wm.TabLayers", {}, {}, {
				layApp: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"App Config","horizontalAlign":"left","verticalAlign":"top"}, {}, {
					pnlSiteBgnd: ["wm.FancyPanel", {"height":"90px","title":"Application Website Background"}, {}, {
						pnlSite: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
							txtUrl: ["wm.Text", {"caption":"Background URL","captionSize":"120px","dataValue":undefined,"displayValue":"","placeHolder":"Background URL","width":"500px"}, {}],
							btnSaveSite: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Save","margin":"4"}, {"onclick":"btnSaveSiteClick"}]
						}]
					}],
					fancyPanel1: ["wm.FancyPanel", {"title":"More Site Configuration"}, {}, {
						pnlLoginPhrase: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
							txtSitePhrase: ["wm.Text", {"caption":"Site Phrase","captionAlign":"left","captionSize":"120px","dataValue":undefined,"displayValue":"","placeHolder":"Welcome to Cloud Gate System","width":"500px"}, {}],
							btnSavePhrase: ["wm.Button", {"_classes":{"domNode":["wm_Mouse_pointer","wm_BackgroundColor_SteelBlue"]},"caption":"Save","margin":"4"}, {"onclick":"btnSavePhraseClick"}]
						}],
						pnlBrowser: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
							txtBrowser: ["wm.Text", {"caption":"Req. Browser","captionAlign":"left","captionSize":"120px","dataValue":undefined,"displayValue":"","placeHolder":"Required browser","width":"320px"}, {}],
							btnReqBrowser: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Req. Browser","margin":"4","width":"135px"}, {"onclick":"btnReqBrowserClick"}],
							lblBrowser: ["wm.Label", {"caption":"-","padding":"4","width":"300px"}, {}]
						}],
						pnlSession: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
							txtTimeToLive: ["wm.Text", {"caption":"Sess. Timeout","captionAlign":"left","captionSize":"120px","dataValue":undefined,"displayValue":"","placeHolder":"300000","width":"320px"}, {}],
							btnTimeouthalf: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"1/2hr","margin":"4"}, {"onclick":"btnTimeouthalfClick"}],
							btnTimeoutwhole: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"1 hr","margin":"4"}, {"onclick":"btnTimeoutwholeClick"}],
							btnTimeout: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Save","margin":"4"}, {"onclick":"btnTimeoutClick"}],
							lblSession: ["wm.Label", {"caption":"Session timeout in milliseconds.","padding":"4"}, {}]
						}],
						pnlSessionSwitch: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
							selTimeoutStatus: ["wm.SelectMenu", {"caption":"Timeout Status:","captionAlign":"left","captionSize":"120px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","options":"ON,OFF","width":"220px"}, {}],
							spacer5: ["wm.Spacer", {"height":"17px","width":"100px"}, {}],
							btnTimeoutSwitch: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Save","margin":"4"}, {"onclick":"btnTimeoutSwitchClick"}]
						}],
						pnlJRXMLFormat: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
							selJRXMLFormat: ["wm.SelectMenu", {"caption":"JRXML Format:","captionAlign":"left","captionSize":"120px","dataField":"dataValue","dataValue":"PDF","displayField":"dataValue","displayValue":"PDF","options":"PDF,HTML","width":"220px"}, {}],
							spacer6: ["wm.Spacer", {"height":"17px","width":"100px"}, {}],
							btnJRXMLFormat: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Save","margin":"4"}, {"onclick":"btnJRXMLFormatClick"}]
						}]
					}]
				}],
				layErp: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ERP Config","horizontalAlign":"left","verticalAlign":"top"}, {}, {
					pnlJoin: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
						txtJoinPassword: ["wm.Text", {"caption":"Join Password","dataValue":undefined,"displayValue":"","password":true}, {}],
						btnJoin: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Set","margin":"4","width":"60px"}, {"onclick":"btnJoinClick"}],
						lblJoinDesc: ["wm.Label", {"caption":"Needed by Apps in order to join the Wave ERP System.","padding":"4","width":"339px"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}]
					}],
					pnlServiceODBC: ["wm.Panel", {"fitToContentHeight":true,"height":"215px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						fnlServiceODBC: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"213px","title":"System Service ODBC (This is a cross-Entity settings)"}, {}, {
							spacer2: ["wm.Spacer", {"height":"17px","width":"96px"}, {}],
							pnlUrl: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
								txtDbUrl: ["wm.Text", {"caption":"Database URL","captionAlign":"left","captionSize":"150px","dataValue":undefined,"displayValue":"","placeHolder":"jdbc:mysql://localhost:3306/","width":"500px"}, {}]
							}],
							pnlDatabase: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
								txtDbDatabase: ["wm.Text", {"caption":"Database","captionAlign":"left","captionSize":"150px","dataValue":undefined,"displayValue":"","placeHolder":"dbwaveerp","width":"400px"}, {}]
							}],
							pnlDriver: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
								txtDbDriver: ["wm.Text", {"caption":"Database Driver","captionAlign":"left","captionSize":"150px","dataValue":undefined,"displayValue":"","placeHolder":"com.mysql.jdbc.Driver","width":"500px"}, {}]
							}],
							pnlDbUser: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
								txtDbUser: ["wm.Text", {"caption":"Database User","captionAlign":"left","captionSize":"150px","dataValue":undefined,"displayValue":"","placeHolder":"username","width":"400px"}, {}]
							}],
							pnlDbPassword: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
								txtDbPassword: ["wm.Text", {"caption":"Database Password","captionAlign":"left","captionSize":"150px","dataValue":undefined,"displayValue":"","password":true,"placeHolder":"password","width":"400px"}, {}]
							}],
							pnlDbAction: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
								spcDbSave: ["wm.Spacer", {"height":"20px","width":"350px"}, {}],
								btnTestDb: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Test","margin":"4"}, {"onclick":"btnTestDbClick"}],
								btnDbSave: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Save","margin":"4"}, {"onclick":"btnDbSaveClick"}]
							}]
						}]
					}],
					pnlServiceEmail: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						fnlServiceEmail: ["wm.FancyPanel", {"title":"System Service Email (This is a cross-Entity settings)"}, {}, {
							spacer3: ["wm.Spacer", {"height":"17px","width":"96px"}, {}],
							pnlEmailHost: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
								txtEmailHost: ["wm.Text", {"caption":"Email Host","captionAlign":"left","captionSize":"150px","dataValue":undefined,"displayValue":"","placeHolder":"smtp.gmail.com","width":"400px"}, {}]
							}],
							pnlEmailPort: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
								txtEmailPort: ["wm.Text", {"caption":"Email Port","captionAlign":"left","captionSize":"150px","dataValue":undefined,"displayValue":"","placeHolder":"587","width":"200px"}, {}]
							}],
							pnlEmailUser: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
								txtEmailUser: ["wm.Text", {"caption":"Email User","captionAlign":"left","captionSize":"150px","dataValue":undefined,"displayValue":"","placeHolder":"username","width":"400px"}, {}]
							}],
							pnlEmailPassword: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
								txtEmailPassword: ["wm.Text", {"caption":"Email Password","captionAlign":"left","captionSize":"150px","dataValue":undefined,"displayValue":"","password":true,"placeHolder":"password","width":"400px"}, {}]
							}],
							pnlEmailAction: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
								spcDbSave1: ["wm.Spacer", {"height":"20px","width":"350px"}, {}],
								btnTestEmail: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Test","margin":"4"}, {"onclick":"btnTestEmailClick"}],
								btnEmailSave: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Save","margin":"4"}, {"onclick":"btnEmailSaveClick"}]
							}]
						}]
					}]
				}],
				layLogs: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Logging","horizontalAlign":"left","verticalAlign":"top"}, {}, {
					pnlLogging: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
						selLogging: ["wm.SelectMenu", {"caption":"Logging Status:","captionSize":"120px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","options":"ON,OFF","width":"200px"}, {}],
						btnLogSave: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Save","margin":"4"}, {"onclick":"btnLogSaveClick"}],
						lblLogging: ["wm.Label", {"caption":"Turn ON / OFF the file logging system.","padding":"4","width":"233px"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}]
					}],
					pnlLog4j: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
						btnTestLogView: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Test Log","margin":"4","width":"130px"}, {"onclick":"btnTestLogViewClick"}],
						spacer4: ["wm.Spacer", {"height":"20px","width":"20px"}, {}],
						btnLogViewOnly: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"View Only","margin":"4","width":"130px"}, {"onclick":"btnLogViewOnlyClick"}]
					}],
					pnlLogView: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						fraLogView: ["wm.IFrame", {"height":"100%","width":"100%"}, {}]
					}]
				}],
				layRepo: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Repository","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					pnlRepo: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
						selRepo: ["wm.SelectMenu", {"caption":"Centralize Repo:","captionAlign":"left","captionSize":"110px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","options":"ON,OFF","width":"210px"}, {}],
						btnRepoSave: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Save","margin":"4"}, {"onclick":"btnRepoSaveClick"}],
						lblRepo: ["wm.Label", {"caption":"Turn ON / OFF the centralize Repository scheme.","padding":"4","width":"291px"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}]
					}]
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