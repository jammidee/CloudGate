PgMainConfigLicense.widgets = {
	varOps: ["wm.Variable", {"type":"StringData"}, {}],
	navPgMain: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMain\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	svarCreateReport: ["wm.ServiceVariable", {"operation":"getReport","service":"svcCreateReport"}, {"onResult":"svarCreateReportResult"}, {
		input: ["wm.ServiceInput", {"type":"getReportInputs"}, {}]
	}],
	svarSelectEntity: ["wm.ServiceVariable", {"operation":"qryEntity","service":"dbwaveerp"}, {}, {
		input: ["wm.ServiceInput", {"type":"qryEntityInputs"}, {}]
	}],
	navPgMainConfig: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMainConfig\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	svarGenerateKey: ["wm.ServiceVariable", {"operation":"generateKey","service":"svcLicenseSystem"}, {"onResult":"svarGenerateKeyResult"}, {
		input: ["wm.ServiceInput", {"type":"generateKeyInputs"}, {}]
	}],
	svarUrlAccess: ["wm.ServiceVariable", {"operation":"qryUrlAccess","service":"dbwaveerp"}, {}, {
		input: ["wm.ServiceInput", {"type":"qryUrlAccessInputs"}, {}]
	}],
	svarExecGenericNonQuery: ["wm.ServiceVariable", {"operation":"execNonQuery","service":"svcExecGenericNonQuery"}, {"onResult":"svarExecGenericNonQueryResult"}, {
		input: ["wm.ServiceInput", {"type":"execNonQueryInputs"}, {}]
	}],
	svarGenerateURLKey: ["wm.ServiceVariable", {"operation":"readURLKey","service":"svcLicenseSystem"}, {"onResult":"svarGenerateURLKeyResult"}, {
		input: ["wm.ServiceInput", {"type":"readURLKeyInputs"}, {}]
	}],
	svarExecGenericNonQueryDelete: ["wm.ServiceVariable", {"operation":"execNonQuery","service":"svcExecGenericNonQuery"}, {"onResult":"svarExecGenericNonQueryDeleteResult"}, {
		input: ["wm.ServiceInput", {"type":"execNonQueryInputs"}, {}]
	}],
	svarReadFromRegistryLicTo: ["wm.ServiceVariable", {"operation":"readRegistryDefault","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryLicToResult"}, {
		input: ["wm.ServiceInput", {"type":"readRegistryDefaultInputs"}, {}]
	}],
	svarReadFromRegistryConUsers: ["wm.ServiceVariable", {"operation":"readRegistryDefault","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryConUsersResult"}, {
		input: ["wm.ServiceInput", {"type":"readRegistryDefaultInputs"}, {}]
	}],
	svarReadFromRegistryNoUsers: ["wm.ServiceVariable", {"operation":"readRegistryDefault","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryNoUsersResult"}, {
		input: ["wm.ServiceInput", {"type":"readRegistryDefaultInputs"}, {}]
	}],
	svarGenerateKeyLicTo: ["wm.ServiceVariable", {"operation":"generateKey","service":"svcLicenseSystem"}, {}, {
		input: ["wm.ServiceInput", {"type":"generateKeyInputs"}, {}]
	}],
	svarGenerateKeyConUsers: ["wm.ServiceVariable", {"operation":"generateKey","service":"svcLicenseSystem"}, {"onResult":"svarGenerateKeyConUsersResult"}, {
		input: ["wm.ServiceInput", {"type":"generateKeyInputs"}, {}]
	}],
	svarGenerateKeyNoUsers: ["wm.ServiceVariable", {"operation":"generateKey","service":"svcLicenseSystem"}, {"onResult":"svarGenerateKeyNoUsersResult"}, {
		input: ["wm.ServiceInput", {"type":"generateKeyInputs"}, {}]
	}],
	svarReadFromRegistryNoEntities: ["wm.ServiceVariable", {"operation":"readRegistryDefault","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryNoEntitiesResult"}, {
		input: ["wm.ServiceInput", {"type":"readRegistryDefaultInputs"}, {}]
	}],
	svarGenerateKeyNoEntities: ["wm.ServiceVariable", {"operation":"generateKey","service":"svcLicenseSystem"}, {"onResult":"svarGenerateKeyNoEntitiesResult"}, {
		input: ["wm.ServiceInput", {"type":"generateKeyInputs"}, {}]
	}],
	svarWriteToRegistryLicTo: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {"onResult":"svarWriteToRegistryLicToResult"}, {
		input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
	}],
	svarWriteToRegistryConUsers: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {"onResult":"svarWriteToRegistryConUsersResult"}, {
		input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
	}],
	svarWriteToRegistryNoUsers: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {"onResult":"svarWriteToRegistryNoUsersResult"}, {
		input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
	}],
	svarWriteToRegistryNoEntities: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {"onResult":"svarWriteToRegistryNoEntitiesResult"}, {
		input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
	}],
	svarExportLicense: ["wm.ServiceVariable", {"operation":"writeToFileKey","service":"svcLicenseSystem"}, {"onResult":"svarExportLicenseResult"}, {
		input: ["wm.ServiceInput", {"type":"writeToFileKeyInputs"}, {}]
	}],
	svarUnGenerateKeyConUsers: ["wm.ServiceVariable", {"operation":"unGenerateKey","service":"svcLicenseSystem"}, {"onResult":"svarUnGenerateKeyConUsersResult"}, {
		input: ["wm.ServiceInput", {"type":"unGenerateKeyInputs"}, {}]
	}],
	varLicTo: ["wm.Variable", {"type":"StringData"}, {}],
	svarUnGenerateKeyNoUsers: ["wm.ServiceVariable", {"operation":"unGenerateKey","service":"svcLicenseSystem"}, {"onResult":"svarUnGenerateKeyNoUsersResult"}, {
		input: ["wm.ServiceInput", {"type":"unGenerateKeyInputs"}, {}]
	}],
	svarUnGenerateKeyNoEntities: ["wm.ServiceVariable", {"operation":"unGenerateKey","service":"svcLicenseSystem"}, {"onResult":"svarUnGenerateKeyNoEntitiesResult"}, {
		input: ["wm.ServiceInput", {"type":"unGenerateKeyInputs"}, {}]
	}],
	svarReadFromRegistryEdition: ["wm.ServiceVariable", {"operation":"readRegistryDefault","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryEditionResult"}, {
		input: ["wm.ServiceInput", {"type":"readRegistryDefaultInputs"}, {}]
	}],
	svarGenerateKeyEdition: ["wm.ServiceVariable", {"operation":"generateKey","service":"svcLicenseSystem"}, {"onResult":"svarGenerateKeyEditionResult"}, {
		input: ["wm.ServiceInput", {"type":"generateKeyInputs"}, {}]
	}],
	svarWriteToRegistryEdition: ["wm.ServiceVariable", {"operation":"writeRegistry","service":"svcRegistry"}, {}, {
		input: ["wm.ServiceInput", {"type":"writeRegistryInputs"}, {}]
	}],
	svarUnGenerateKeyEdition: ["wm.ServiceVariable", {"operation":"unGenerateKey","service":"svcLicenseSystem"}, {"onResult":"svarUnGenerateKeyEditionResult"}, {
		input: ["wm.ServiceInput", {"type":"unGenerateKeyInputs"}, {}]
	}],
	svarGenerateURLPass: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"generateURLKey","service":"svcLicenseSystem"}, {"onResult":"svarGenerateURLPassResult"}, {
		input: ["wm.ServiceInput", {"type":"generateURLKeyInputs"}, {}]
	}],
	svarReadFromRegistryUrlKey: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"readRegistryDefault","service":"svcRegistry"}, {"onResult":"svarReadFromRegistryUrlKeyResult"}, {
		input: ["wm.ServiceInput", {"type":"readRegistryDefaultInputs"}, {}]
	}],
	pdLoading: ["wm.PageDialog", {"desktopHeight":"100px","height":"100px","hideControls":true,"pageName":"Main","width":"280px"}, {}],
	ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","corner":"cr","modal":false,"title":"License Help"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgMainConfig.html"}, {}]
		}],
		buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			btnClose: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddPgMainConfigHelp.hide"}]
		}]
	}],
	pdAbout: ["wm.PageDialog", {"desktopHeight":"341px","height":"341px","noEscape":true,"noMaxify":true,"noMinify":true,"pageName":"PgAbout","width":"616px"}, {}],
	ddSelectEntity: ["wm.DesignableDialog", {"buttonBarId":"buttonBar1","containerWidgetId":"containerWidget1","title":"Select Entity","width":"800px"}, {"onShow":"ddSelectEntityShow"}, {
		containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			dgDataSelect: ["wm.DojoGrid", {"columns":[{"show":false,"title":"Seqid","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"seqid"},{"show":true,"title":"Entity","width":"80px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":true,"title":"Company","width":"160px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"company"},{"show":true,"title":"Description","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"description"},{"show":false,"title":"Addr01","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"addr01"},{"show":false,"title":"Addr02","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"addr02"},{"show":false,"title":"Addr03","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"addr03"},{"show":true,"title":"Status","width":"80px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"show":false,"title":"Startdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"startdate"},{"show":false,"title":"Enddate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"enddate"},{"show":false,"title":"Deleted","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"deleted"},{"show":true,"title":"Juid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"juid"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Entity: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Company: \" + ${company} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n+ \"<div class='MobileRow'>Status: \" + ${sstatus} + \"</div>\"\n+ \"<div class='MobileRow'>Juid: \" + ${juid} + \"</div>\"\n"}],"height":"100%","localizationStructure":{},"margin":"4"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"svarSelectEntity","targetProperty":"dataSet"}, {}]
				}]
			}]
		}],
		buttonBar1: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			btnSelectSelect: ["wm.Button", {"caption":"Select","margin":"4"}, {"onclick":"btnSelectSelectClick"}],
			btnSelectClose: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddSelectEntity.hide"}]
		}]
	}],
	ddNewUrlAccess: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget2","desktopHeight":"150px","height":"150px","title":"New URL Access","width":"450px"}, {}, {
		containerWidget2: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			txtUrl: ["wm.Text", {"caption":"URL:","captionAlign":"left","dataValue":undefined,"displayValue":"","placeHolder":"localhost:8094","width":"400px"}, {}],
			txtUrlPass: ["wm.Text", {"caption":"Password Key:","captionAlign":"left","dataValue":undefined,"displayValue":"","password":true,"width":"400px"}, {}]
		}],
		buttonBar2: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","fitToContentHeight":true,"height":"33px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			btnUrlAdd: ["wm.Button", {"caption":"Add","margin":"4"}, {"onclick":"btnUrlAddClick"}],
			btnUrlCancel: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"ddNewUrlAccess.hide"}]
		}]
	}],
	ddUrlPassword: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget3","desktopHeight":"150px","height":"150px","title":"Set URL Password","width":"450px"}, {}, {
		containerWidget3: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			txtUrlPassword: ["wm.Text", {"caption":"URL Password:","captionAlign":"left","dataValue":undefined,"displayValue":"","password":true,"width":"400px"}, {}],
			txtUrlPassKey: ["wm.Text", {"caption":"Password Key:","captionAlign":"left","dataValue":undefined,"displayValue":"","password":true,"width":"400px"}, {}]
		}],
		buttonBar3: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","desktopHeight":"32px","enableTouchHeight":true,"fitToContentHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
			btnSetUrlSet: ["wm.Button", {"caption":"Set","margin":"4"}, {"onclick":"btnSetUrlSetClick"}],
			btnSetUrlCancel: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"ddUrlPassword.hide"}]
		}]
	}],
	pnlLayoutMain: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		pnlHeader: ["wm.Panel", {"height":"45px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			imgLogo: ["wm.Picture", {"height":"45px","source":"resources/images/logos/waveerplogo.jpg","width":"275px"}, {}],
			pnlTitle: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","styles":{"backgroundImage":"url(resources/images/logos/waveerpbar.jpg)","color":"#ffffff","backgroundGradient":""},"verticalAlign":"middle","width":"100%"}, {}, {
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
				pic_back: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Back","source":"resources/images/buttons/arrowleft24.png","width":"24px"}, {"onclick":"pic_backClick"}],
				Sep2: ["wm.Spacer", {"height":"24px","width":"5px"}, {}]
			}],
			pnlMenuButtonRight: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
				pic_help: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Help","source":"resources/images/buttons/helpred24.png","width":"24px"}, {"onclick":"ddPgMainConfigHelp.show"}],
				pic_about: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"About","source":"resources/images/buttons/aboutblue24.png","width":"24px"}, {"onclick":"pdAbout.show"}]
			}]
		}],
		spacer1: ["wm.Spacer", {"height":"10px","width":"2px"}, {}],
		pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"100%"}, {}, {
			pnlTop: ["wm.Panel", {"fitToContentHeight":true,"height":"134px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
				pnlLicenseKey: ["wm.Panel", {"fitToContentHeight":true,"height":"132px","horizontalAlign":"left","verticalAlign":"top","width":"497px"}, {}, {
					lblKeyDesc: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"caption":"This is a cross-ENTITY settings.","padding":"4","width":"100%"}, {}],
					txtSourceKey: ["wm.Text", {"caption":"Source Key:","captionAlign":"left","captionSize":"120px","dataValue":undefined,"displayValue":"","width":"420px"}, {}],
					txtPasswordKey: ["wm.Text", {"caption":"Password Key:","captionAlign":"left","captionSize":"120px","dataValue":undefined,"displayValue":"","password":true,"width":"420px"}, {}],
					txtGenKey: ["wm.Text", {"caption":"Generated Key:","captionAlign":"left","captionSize":"120px","dataValue":undefined,"displayValue":"","width":"420px"}, {}],
					pnlAction: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
						spacer2: ["wm.Spacer", {"height":"19px","width":"120px"}, {}],
						btnGenerate: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Generate Key","margin":"4","width":"140px"}, {"onclick":"btnGenerateClick"}]
					}]
				}]
			}],
			tabLicense: ["wm.TabLayers", {}, {}, {
				layUrl: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"URL Access","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					pnlUrlAccess: ["wm.FancyPanel", {"title":"Putting an entry here will limit access to listed URLs below only."}, {}, {
						pnlCommand: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
							pic_urlKey: ["wm.Picture", {"height":"28px","hint":"Set URL key.","source":"resources/images/buttons/rightsasgn24.png","width":"30px"}, {"onclick":"pic_urlKeyClick"}],
							pic_add: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Add URL Access Rights","source":"resources/images/buttons/addball24.png","width":"30px"}, {"onclick":"pic_addClick"}],
							pic_delete: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"24px","hint":"Delete Selected URL Access","source":"resources/images/buttons/Recyclebin24.png","width":"30px"}, {"onclick":"pic_deleteClick"}]
						}],
						dgData: ["wm.DojoGrid", {"columns":[{"show":false,"title":"Juid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"juid"},{"show":true,"title":"URL ID","width":"300px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"urlid"},{"show":true,"title":"URL Access Password","width":"300px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"urlpassword"},{"show":true,"title":"Status","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>URL ID: \" + ${urlid} + \"</div>\"\n+ \"<div class='MobileRow'>URL Access Password: \" + ${urlpassword} + \"</div>\"\n+ \"<div class='MobileRow'>Status: \" + ${sstatus} + \"</div>\"\n"}],"height":"100%","margin":"4"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svarUrlAccess","targetProperty":"dataSet"}, {}]
							}]
						}]
					}]
				}],
				layUserLic: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"User License","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					lblDesc: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"caption":"This is a cross-ENTITY settings.","height":"34px","padding":"4","width":"100%"}, {}],
					pnlLicTo: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						txtLicTo: ["wm.Text", {"caption":"License To:","captionAlign":"left","captionSize":"200px","dataValue":undefined,"displayValue":"","placeHolder":"CloudGate Inc.","width":"700px"}, {}],
						spacer4: ["wm.Spacer", {"height":"19px","width":"24px"}, {}],
						lblLicTo: ["wm.Label", {"caption":"Please do not edit.","padding":"4","width":"143px"}, {}]
					}],
					pnlConcurrentUsers: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						txtConcurrentUsers: ["wm.Text", {"caption":"Number of Concurrent Users To:","captionAlign":"left","captionSize":"200px","dataValue":undefined,"displayValue":"","placeHolder":"10","width":"700px"}, {}],
						spacer5: ["wm.Spacer", {"height":"19px","width":"24px"}, {}],
						lblConcurrentUsers: ["wm.Label", {"caption":"---","padding":"4","width":"100px"}, {}]
					}],
					pnlNoUsers: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						txtNoUsers: ["wm.Text", {"caption":"Number of  Users:","captionAlign":"left","captionSize":"200px","dataValue":undefined,"displayValue":"","placeHolder":"1000","width":"700px"}, {}],
						spacer6: ["wm.Spacer", {"height":"19px","width":"24px"}, {}],
						lblNoUsers: ["wm.Label", {"caption":"---","padding":"4","width":"100px"}, {}]
					}],
					pnlNoEntity: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						txtNoEntity: ["wm.Text", {"caption":"Number of Entity:","captionAlign":"left","captionSize":"200px","dataValue":undefined,"displayValue":"","placeHolder":"3","width":"700px"}, {}],
						spacer7: ["wm.Spacer", {"height":"19px","width":"24px"}, {}],
						lblNoEntity: ["wm.Label", {"caption":"---","padding":"4","width":"100px"}, {}]
					}],
					pnlEdition: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						txtEdition: ["wm.Text", {"caption":"Edition:","captionAlign":"left","captionSize":"200px","dataValue":undefined,"displayValue":"","placeHolder":"STANDARD","width":"700px"}, {}],
						spacer8: ["wm.Spacer", {"height":"19px","width":"24px"}, {}],
						lblEdition: ["wm.Label", {"caption":"---","padding":"4","width":"100px"}, {}]
					}],
					pnlGen: ["wm.Panel", {"fitToContentHeight":true,"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
						spacer3: ["wm.Spacer", {"height":"19px","width":"200px"}, {}],
						btnGenerateLic: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Generate License","margin":"4","width":"180px"}, {"onclick":"btnGenerateLicClick"}],
						btnSaveLic: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Save","margin":"4"}, {"onclick":"btnSaveLicClick"}],
						btnImportLic: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Import","margin":"4"}, {"onclick":"btnImportLicClick"}],
						btnExportLic: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"caption":"Export","margin":"4"}, {"onclick":"btnExportLicClick"}],
						btnTestLic: ["wm.Button", {"_classes":{"domNode":["wm_Mouse_pointer","wm_BackgroundColor_SteelBlue"]},"caption":"Test","margin":"4"}, {"onclick":"btnTestLicClick"}]
					}]
				}]
			}],
			pnlBottom: ["wm.Panel", {"height":"16px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}]
		}],
		pnlFooter: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel","wm_BackgroundChromeBar_LightBlue"]},"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			lblFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"caption":"...","height":"20px","padding":"4","styles":{"backgroundGradient":{"direction":"horizontal","startColor":"#03036d","endColor":"#d8cbf2","colorStop":31}},"width":"100%"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}]
		}]
	}]
}