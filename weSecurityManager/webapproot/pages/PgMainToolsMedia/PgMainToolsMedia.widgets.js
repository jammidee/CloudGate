PgMainToolsMedia.widgets = {
	varOps: ["wm.Variable", {"type":"StringData"}, {}],
	navPgMain: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMain\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navPgMainMaintenance: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMainMaintenance\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	svarMediaLib: ["wm.ServiceVariable", {"operation":"qryMediaLib","service":"dbwaveerp"}, {}, {
		input: ["wm.ServiceInput", {"type":"qryMediaLibInputs"}, {}]
	}],
	svarMediaLibInsert: ["wm.ServiceVariable", {"operation":"InsertMediaToMySql","service":"svcMediaLibFunction"}, {"onResult":"svarMediaLibInsertResult"}, {
		input: ["wm.ServiceInput", {"type":"InsertMediaToMySqlInputs"}, {}]
	}],
	varFileName: ["wm.Variable", {"type":"StringData"}, {}],
	svarMediaLibRead: ["wm.ServiceVariable", {"operation":"ReadMediaToFile","service":"svcMediaLibFunction"}, {"onResult":"svarMediaLibReadResult"}, {
		input: ["wm.ServiceInput", {"type":"ReadMediaToFileInputs"}, {}]
	}],
	navPgMainTools: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PgMainTools\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	svarMediaLibDelete: ["wm.ServiceVariable", {"operation":"DeleteMediaFromMysql","service":"svcMediaLibFunction"}, {"onResult":"svarMediaLibDeleteResult"}, {
		input: ["wm.ServiceInput", {"type":"DeleteMediaFromMysqlInputs"}, {}]
	}],
	svarMediaTempDirList: ["wm.ServiceVariable", {"operation":"listTempDir","service":"svcMediaLibFunction"}, {"onResult":"svarMediaTempDirListResult"}, {
		input: ["wm.ServiceInput", {"type":"listTempDirInputs"}, {}]
	}],
	svarMediaTempDirListTree: ["wm.ServiceVariable", {"operation":"listTempDirForObjectTree","service":"svcMediaLibFunction"}, {"onResult":"svarMediaTempDirListTreeResult"}, {
		input: ["wm.ServiceInput", {"type":"listTempDirForObjectTreeInputs"}, {}]
	}],
	svarMediaUploadDirListTree: ["wm.ServiceVariable", {"operation":"listUploadDirForObjectTree","service":"svcMediaLibFunction"}, {"onResult":"svarMediaUploadDirListTreeResult"}, {
		input: ["wm.ServiceInput", {"type":"listUploadDirForObjectTreeInputs"}, {}]
	}],
	pdLoading: ["wm.PageDialog", {"desktopHeight":"100px","height":"100px","hideControls":true,"pageName":"Main","width":"280px"}, {}],
	ddPgMainConfigHelp: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","corner":"cr","modal":false,"title":"Media Help"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			contHelp: ["wm.Content", {"height":"100%","resource":"resources/htmlcontent/PgMainToolsMedia.html"}, {}]
		}],
		buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			btnClose: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"ddPgMainConfigHelp.hide"}]
		}]
	}],
	pdAbout: ["wm.PageDialog", {"desktopHeight":"341px","height":"341px","noEscape":true,"noMaxify":true,"noMinify":true,"pageName":"PgAbout","width":"616px"}, {}],
	pnlLayoutMain: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		pnlHeader: ["wm.Panel", {"height":"45px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundImage":"url(resources/images/logos/waveerpbar.jpg)"},"verticalAlign":"top","width":"100%"}, {}, {
			imgLogo: ["wm.Picture", {"height":"45px","source":"resources/images/logos/waveerplogo.jpg","width":"275px"}, {}],
			pnlTitle: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","styles":{"backgroundImage":"url(resources/images/logos/waveerpbar.jpg)","backgroundGradient":"","backgroundColor":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
				lblTitle: ["wm.Label", {"align":"right","autoSizeHeight":true,"caption":"Wave ERP System","padding":"4","singleLine":false,"width":"600px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}]
		}],
		pnlMenuBar: ["wm.Panel", {"height":"20px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
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
			tabMain: ["wm.TabLayers", {}, {}, {
				layList: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"File List","horizontalAlign":"left","verticalAlign":"top"}, {}, {
					pnlLookup: ["wm.FancyPanel", {"title":"Media Library"}, {}, {
						pnlFileAction: ["wm.Panel", {"fitToContentHeight":true,"height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							pic_View: ["wm.Picture", {"height":"26px","hint":"View selected item.","source":"resources/images/buttons/view24.png","width":"30px"}, {"onclick":"pic_ViewClick"}],
							pic_toCsv: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"26px","hint":"Export Grid to CSV","source":"resources/images/buttons/csv24.png","width":"30px"}, {"onclick":"pic_toCsvClick"}],
							pic_delete: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"26px","hint":"Delete Application Entry","source":"resources/images/buttons/Recyclebin24.png","width":"30px"}, {"onclick":"pic_deleteClick"}]
						}],
						dgLookup: ["wm.DojoGrid", {"columns":[{"show":true,"field":"c0","title":"Entity","width":"100px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"c1","title":"App ID","width":"100px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"c2","title":"User ID","width":"100px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"c3","title":"Filename","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"c4","title":"Extension","width":"100px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"c5","title":"Size","width":"80px","align":"right","formatFunc":"wm_number_formatter","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"c6","title":"Date","width":"80px","align":"right","formatFunc":"wm_date_formatter","formatProps":{"formatLength":"medium"},"editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"c7","title":"Src","width":"40px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"c8","title":"Is Image","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"c9","title":"Is PDF","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"c10","title":"Has Viewer","width":"100px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Entity: \" + ${c0} + \"</div>\"\n+ \"<div class='MobileRow'>App ID: \" + ${c1} + \"</div>\"\n+ \"<div class='MobileRow'>User ID: \" + ${c2} + \"</div>\"\n+ \"<div class='MobileRow'>Filename: \" + ${c3} + \"</div>\"\n+ \"<div class='MobileRow'>Extension: \" + ${c4} + \"</div>\"\n+ \"<div class='MobileRow'>Size: \" + wm.List.prototype.numberFormatter({}, null,null,null,${c5}) + \"</div>\"\n+ \"<div class='MobileRow'>Date: \" + wm.List.prototype.dateFormatter({\"formatLength\":\"medium\"}, null,null,null,${c6}) + \"</div>\"\n+ \"<div class='MobileRow'>Src: \" + ${c7} + \"</div>\"\n+ \"<div class='MobileRow'>Is Image: \" + ${c8} + \"</div>\"\n+ \"<div class='MobileRow'>Is PDF: \" + ${c9} + \"</div>\"\n+ \"<div class='MobileRow'>Has Viewer: \" + ${c10} + \"</div>\"\n","mobileColumn":true}],"height":"100%","localizationStructure":{},"margin":"4"}, {"onCellDblClick":"dgLookupCellDblClick"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svarMediaLib","targetProperty":"dataSet"}, {}]
							}]
						}],
						pnlControl: ["wm.Panel", {"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							panUploadFrame1: ["wm.Panel", {"fitToContentHeight":true,"height":"32px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
								panUpload1: ["wm.Panel", {"fitToContentHeight":true,"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
									panHolder1: ["wm.Panel", {"height":"28px","horizontalAlign":"left","verticalAlign":"top","width":"455px"}, {}],
									picUpload1: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"27px","source":"resources/images/buttons/load24.png","width":"36px"}, {"onclick":"picUpload1Click"}],
									labUpload1: ["wm.Label", {"caption":"---","padding":"4","width":"322px"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}]
								}],
								panMessage1: ["wm.Panel", {"height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}]
							}]
						}]
					}]
				}],
				layView: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"View","horizontalAlign":"left","verticalAlign":"top"}, {}, {
					fraView: ["wm.IFrame", {"height":"100%","width":"100%"}, {}]
				}],
				layWorkDir: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Working DIR","horizontalAlign":"left","verticalAlign":"top"}, {}, {
					pnlAction: ["wm.Panel", {"fitToContentHeight":true,"height":"29px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
						lblReload: ["wm.Label", {"caption":"Click here to reload informartion.","padding":"4"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						pic_refresh: ["wm.Picture", {"_classes":{"domNode":["wm_Mouse_pointer"]},"height":"27px","hint":"Refresh data","source":"resources/images/buttons/refresh24.png","width":"36px"}, {"onclick":"pic_refreshClick"}],
						lblReload1: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"caption":"This is a cross-Entity tab.","padding":"4","width":"175px"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}]
					}],
					pnlTempDir: ["wm.FancyPanel", {"innerLayoutKind":"left-to-right","title":"Temporary Folder"}, {}, {
						otData: ["wm.ObjectTree", {"height":"100%","width":"300px"}, {}],
						splitData: ["wm.Splitter", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"height":"100%","width":"4px"}, {}],
						txtaTempDir: ["wm.LargeTextArea", {"dataValue":undefined,"displayValue":"","height":"100%","width":"100%"}, {}]
					}],
					pnlUploadDir: ["wm.FancyPanel", {"innerLayoutKind":"left-to-right","title":"Upload Folder"}, {}, {
						otUpload: ["wm.ObjectTree", {"height":"100%","width":"300px"}, {}],
						splitUpload: ["wm.Splitter", {"_classes":{"domNode":["wm_BackgroundColor_SteelBlue"]},"bevelSize":"5","height":"100%","width":"5px"}, {}],
						txtaUploadDir: ["wm.LargeTextArea", {"dataValue":undefined,"displayValue":"","height":"100%","width":"100%"}, {}]
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