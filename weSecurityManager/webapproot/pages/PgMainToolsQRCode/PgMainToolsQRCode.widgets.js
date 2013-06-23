PgMainToolsQRCode.widgets = {
	varOps: ["wm.Variable", {"type":"StringData"}, {}],
	navPgMain: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMain\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	svarSelectEntity: ["wm.ServiceVariable", {"operation":"qryEntitySelect","service":"dbwaveerp"}, {}, {
		input: ["wm.ServiceInput", {"type":"qryEntitySelectInputs"}, {}]
	}],
	svarUserView: ["wm.ServiceVariable", {"operation":"qryUserView","service":"dbwaveerp"}, {}, {
		input: ["wm.ServiceInput", {"type":"qryUserViewInputs"}, {}]
	}],
	navPgMainTools: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMainTools\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	svarCreateQRCode: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"createQRCode","service":"scvQRCodeFunction"}, {"onResult":"svarCreateQRCodeResult"}, {
		input: ["wm.ServiceInput", {"type":"createQRCodeInputs"}, {}]
	}],
	svarSendEmailWithAttach: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"sendMsgWithAttach","service":"svcSendMail"}, {"onResult":"svarSendEmailWithAttachResult"}, {
		input: ["wm.ServiceInput", {"type":"sendMsgWithAttachInputs"}, {}]
	}],
	pdLoading: ["wm.PageDialog", {"desktopHeight":"100px","height":"100px","hideControls":true,"pageName":"Main","width":"280px"}, {}],
	ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","title":"Configuration Help"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgMainConfig.html"}, {}]
		}],
		buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"fitToContentHeight":true,"height":"34px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			btnClose: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddPgMainConfigHelp.hide"}]
		}]
	}],
	pdAbout: ["wm.PageDialog", {"desktopHeight":"341px","height":"341px","noEscape":true,"noMaxify":true,"noMinify":true,"pageName":"PgAbout","width":"616px"}, {}],
	ddSelectEntity: ["wm.DesignableDialog", {"buttonBarId":"buttonBar1","containerWidgetId":"containerWidget1","title":"Select Entity","width":"800px"}, {"onShow":"ddSelectEntityShow"}, {
		containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			dgDataSelect: ["wm.DojoGrid", {"columns":[{"show":false,"title":"Seqid","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"seqid"},{"show":false,"title":"Juid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"juid"},{"show":true,"title":"Entity ID","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":true,"title":"Company","width":"200px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"company"},{"show":true,"title":"Description","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"description"},{"show":false,"title":"Addr01","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"addr01"},{"show":false,"title":"Addr02","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"addr02"},{"show":false,"title":"Addr03","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"addr03"},{"show":false,"title":"Sstatus","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"show":false,"title":"Startdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"startdate"},{"show":false,"title":"Enddate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"enddate"},{"show":false,"title":"Deleted","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"deleted"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Entity ID: \" + ${entityid} + \"</div>\"\n+ \"<div class='MobileRow'>Company: \" + ${company} + \"</div>\"\n+ \"<div class='MobileRow'>Description: \" + ${description} + \"</div>\"\n"}],"height":"100%","localizationStructure":{},"margin":"4"}, {}, {
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
	ddSelectUser: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget2","title":"Select User","width":"900px"}, {}, {
		containerWidget2: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			dgUserView: ["wm.DojoGrid", {"columns":[{"show":true,"title":"Userid","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"userid"},{"show":false,"title":"Entityid","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"entityid"},{"show":false,"title":"Password","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"password"},{"show":false,"title":"Passwdenc","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"passwdenc"},{"show":true,"title":"Username","width":"80px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"username"},{"show":true,"title":"Firstname","width":"18%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"firstname"},{"show":true,"title":"Middlename","width":"18%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"middlename"},{"show":true,"title":"Lastname","width":"18%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"lastname"},{"show":true,"title":"Email","width":"18%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"email"},{"show":true,"title":"Status","width":"60px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"sstatus"},{"show":false,"title":"Roleid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"roleid"},{"show":false,"title":"Startdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"startdate"},{"show":false,"title":"Enddate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"enddate"},{"show":false,"title":"Userimgext","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"userimgext"},{"show":false,"title":"Pid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"pid"},{"show":false,"title":"ParentPerson","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"parentPerson"},{"show":false,"title":"Deleted","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"deleted"},{"show":false,"field":"id","title":"Id","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"id.seqid","title":"Id.seqid","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"id.juid","title":"Id.juid","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Userid: \" + ${userid} + \"</div>\"\n+ \"<div class='MobileRow'>Username: \" + ${username} + \"</div>\"\n+ \"<div class='MobileRow'>Firstname: \" + ${firstname} + \"</div>\"\n+ \"<div class='MobileRow'>Middlename: \" + ${middlename} + \"</div>\"\n+ \"<div class='MobileRow'>Lastname: \" + ${lastname} + \"</div>\"\n+ \"<div class='MobileRow'>Email: \" + ${email} + \"</div>\"\n+ \"<div class='MobileRow'>Status: \" + ${sstatus} + \"</div>\"\n"}],"height":"100%","margin":"4"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"svarUserView","targetProperty":"dataSet"}, {}]
				}]
			}],
			pnlSearch: ["wm.Panel", {"height":"10%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
				txtSearch: ["wm.Text", {"caption":"Search by User:","captionAlign":"left","dataValue":undefined,"displayValue":"","width":"200px"}, {}],
				txtUname: ["wm.Text", {"caption":"Username : ","captionAlign":"left","captionSize":"75px","dataValue":undefined,"displayValue":"","width":"200px"}, {}],
				txtEMail: ["wm.Text", {"caption":"Email :","captionAlign":"left","captionSize":"50px","dataValue":undefined,"displayValue":"","width":"240px"}, {}],
				txtUserStatus: ["wm.SelectMenu", {"caption":"Status :","captionAlign":"left","captionSize":"55px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","options":"ACTIVE,INACTIVE","width":"155px"}, {"onchange":"txtUserStatusChange"}],
				btnSearchUserID: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue","wm_FontColor_White"]},"caption":"Search","margin":"4"}, {"onclick":"btnSearchUserIDClick"}]
			}]
		}],
		buttonBar2: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			btnSelectUserSelect: ["wm.Button", {"caption":"Select","margin":"4"}, {}],
			btnSelectUserCancel: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"ddSelectUser.hide"}]
		}]
	}],
	ddSendFile: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget3","desktopHeight":"180px","height":"180px","title":"Send File","width":"450px"}, {}, {
		containerWidget3: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			lblWarn: ["wm.Label", {"caption":"Warning!","padding":"4","styles":{"color":"#f20019","fontSize":"18px"}}, {}],
			lblMsg: ["wm.Label", {"caption":"Sending this file will create copies on receiver's mailbox.","padding":"4","width":"100%"}, {}],
			txtEmail01: ["wm.Text", {"caption":"Email Address:","captionAlign":"left","captionSize":"110px","dataValue":undefined,"displayValue":"","width":"100%"}, {}]
		}],
		buttonBar3: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","desktopHeight":"32px","enableTouchHeight":true,"fitToContentHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
			btnSendFileSend: ["wm.Button", {"caption":"Send","margin":"4"}, {"onclick":"btnSendFileSendClick"}],
			btnSendFileCancel: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"ddSendFile.hide"}]
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
		pnlBody: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			pnlLeft: ["wm.Panel", {"fitToContentWidth":true,"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"102px"}, {}, {
				pic_createQRCode: ["wm.Picture", {"hint":"Generate QR-Code","source":"resources/images/buttons/qrcode96.png"}, {}],
				pic_sendQRCode: ["wm.Picture", {"hint":"Send QR-Code as attachment","source":"resources/images/buttons/sendemail96.png"}, {"onclick":"pic_sendQRCodeClick"}]
			}],
			pnlRight: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				pnlForm: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"400px"}, {}, {
					selContent: ["wm.SelectMenu", {"caption":"Contents:","captionAlign":"left","captionSize":"140px","dataField":"dataValue","dataValue":"Contact Information","displayField":"dataValue","displayValue":"Contact Information","options":"Contact Information, Email Address, URL","width":"100%"}, {"onchange":"selContentChange"}],
					txtName: ["wm.Text", {"caption":"Name:","captionAlign":"left","captionSize":"140px","dataValue":undefined,"displayValue":"","placeHolder":"Jammi Dee","width":"100%"}, {}],
					txtCompany: ["wm.Text", {"caption":"Company:","captionAlign":"left","captionSize":"140px","dataValue":undefined,"displayValue":"","placeHolder":"Connext-PH","width":"100%"}, {}],
					txtTitle: ["wm.Text", {"caption":"Title:","captionAlign":"left","captionSize":"140px","dataValue":undefined,"displayValue":"","placeHolder":"System Engineer","width":"100%"}, {}],
					txtPhoneNo: ["wm.Text", {"caption":"Phone No:","captionAlign":"left","captionSize":"140px","dataValue":undefined,"displayValue":"","placeHolder":"+632","width":"100%"}, {}],
					txtEmail: ["wm.Text", {"caption":"Email:","captionAlign":"left","captionSize":"140px","dataValue":undefined,"displayValue":"","placeHolder":"jammi_dee@yahoo.com","width":"100%"}, {}],
					txtAddress01: ["wm.Text", {"caption":"Address 01:","captionAlign":"left","captionSize":"140px","dataValue":undefined,"displayValue":"","width":"100%"}, {}],
					txtAddress02: ["wm.Text", {"caption":"Address 02:","captionAlign":"left","captionSize":"140px","dataValue":undefined,"displayValue":"","width":"100%"}, {}],
					txtWebsite: ["wm.Text", {"caption":"Website:","captionAlign":"left","captionSize":"140px","dataValue":undefined,"displayValue":"","placeHolder":"http://www.connext-ph.com","width":"100%"}, {}],
					txtMemo: ["wm.LargeTextArea", {"caption":"Memo:","captionPosition":"left","captionSize":"140px","dataValue":undefined,"displayValue":"","width":"100%"}, {}],
					txtSSID: ["wm.Text", {"caption":"SSID:","captionAlign":"left","captionSize":"140px","dataValue":undefined,"displayValue":"","placeHolder":"AccessDenied!","width":"100%"}, {}],
					txtPasswd: ["wm.Text", {"caption":"Password:","captionAlign":"left","captionSize":"140px","dataValue":undefined,"displayValue":"","placeHolder":"cloudgate","width":"100%"}, {}],
					selNetwork: ["wm.SelectMenu", {"caption":"Network:","captionAlign":"left","captionSize":"140px","dataField":"dataValue","dataValue":"WEP","displayField":"dataValue","displayValue":"WEP","options":"WEP","width":"250px"}, {}],
					selEncoding: ["wm.SelectMenu", {"caption":"Encoding:","captionAlign":"left","captionSize":"140px","dataField":"dataValue","dataValue":"MECARD","displayField":"dataValue","displayValue":"MECARD","options":"MECARD,vCARD","width":"250px"}, {}],
					selBarSize: ["wm.SelectMenu", {"caption":"Barcode Size:","captionAlign":"left","captionSize":"140px","dataField":"dataValue","dataValue":"LARGE","displayField":"dataValue","displayValue":"LARGE","options":"SMALL,MEDIUM,LARGE","width":"250px"}, {}],
					btnGenerateQRCode: ["wm.Button", {"caption":"Generate QR Code","margin":"4","styles":{"backgroundGradient":"","backgroundColor":"#797272","color":"","textAlign":"center"},"width":"100%"}, {"onclick":"btnGenerateQRCodeClick"}]
				}],
				bevSep: ["wm.Bevel", {"bevelSize":5,"height":"100%","styles":{"backgroundColor":"#c6bebe","backgroundGradient":""},"width":"5px"}, {}],
				pnlQRView: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{"backgroundColor":""},"verticalAlign":"top","width":"100%"}, {}, {
					fraQRCode: ["wm.IFrame", {"height":"300px","width":"100%"}, {}],
					pnlTextData: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						txtaData: ["wm.LargeTextArea", {"caption":undefined,"dataValue":undefined,"displayValue":"","height":"99%","width":"95%"}, {}]
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