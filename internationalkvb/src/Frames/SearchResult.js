import DataBase from '../Frames/DataBase'
export default (keywords)=>{
    var Db = DataBase()
    var ListApplication = keywords['APPLICATION'] || []
    var ListFields = keywords['FIELDS'] || []
    var ListPage = keywords['PAGE'] || []
    var ListKeywords = keywords['KEYWORDS'] || []
    var fieldAnsWithPage = []
    var FieldAnsWithOutPage = []

    Object.values(Db).map((App)=>{
        App.map((Type)=>{
            Object.keys(Type).map((ListType)=>{
                if (ListApplication.length > 0){
                    ListApplication.map((listApp) => {
                        if (listApp == ListType) {
                            var Selection = 0
                            if (ListType == 'NTB') {
                                Selection = 0
                            }
                            var selectedPage = Db['APPLICATION'][Selection]
                            Object.values(selectedPage).map((Pages) => {
                                Object.values(Pages).map((totPage) => {
                                    var pageList = []
                                    totPage.map((pg) => {
                                        Object.keys(pg).map((TPL, TPLindex) => {
                                            pageList = ListPage.map((ls) => {
                                                if (TPL == ls) {
                                                    return TPLindex
                                                }
                                            })
                                        })
                                    })
                              
                                    if (pageList.length > 0) {
                                        // With Page 
                                        pageList.map((pgItem) => {
                                            var TotFields = totPage[pgItem]
                                            Object.values(TotFields).map((TOTFI) => {
                                                var TTFields = []
                                                TOTFI.FIELDS.map((item) => {
                                                    Object.keys(item).map((TFitems, TFindex) => {
                                                        TTFields = ListFields.map((listFiedItem, listFiedIndex) => {
                                                            if (TFitems == listFiedItem) {
                                                                return TFindex
                                                            }
                                                        })
                                                    })
                                                })
                                                TTFields.map((checkField) => {
                                                    fieldAnsWithPage.push(TOTFI.FIELDS[checkField])
                                                })
                                            })
                                        })
                                    }
                                    else {
                                        // With out page 
                                        totPage.map((totpageItem, totpageIndex) => {
                                            Object.values(totpageItem).map((totFieldItem) => {
                                                var TTFieldsList = []
                                                totFieldItem.FIELDS.map((item) => {
                                                    Object.keys(item).map((tfItems, tfindex) => {
                                                        TTFieldsList = ListFields.map((listOfFieldItem, listOfFieldIndex) => {
                                                            if (tfItems == listOfFieldItem) {
                                                                return tfindex
                                                            }
                                                        })
                                                    })
                                                })
                                                TTFieldsList.map((checkField) => {
                                                    FieldAnsWithOutPage.push(totFieldItem.FIELDS[checkField])
                                                })
                                            })
                                        })
                                    }
                                })
                            })
                        }

                    })
                }
                else{
                    Db['APPLICATION'].map((selectedPage)=>{
                        Object.values(selectedPage).map((Pages) => {
                            Object.values(Pages).map((totPage) => {
                                var pageList = []
                                totPage.map((pg) => {
                                    Object.keys(pg).map((TPL, TPLindex) => {
                                        pageList = ListPage.map((ls) => {
                                            if (TPL == ls) {
                                                return TPLindex
                                            }
                                        })
                                    })
                                })
                                
                                if (pageList.length > 0) {
                                    // With Page 
                                    pageList.map((pgItem) => {
                                        var TotFields = totPage[pgItem]
                                        Object.values(TotFields).map((TOTFI) => {
                                            var TTFields = []
                                            TOTFI.FIELDS.map((item) => {
                                                Object.keys(item).map((TFitems, TFindex) => {
                                                    TTFields = ListFields.map((listFiedItem, listFiedIndex) => {
                                                        if (TFitems == listFiedItem) {
                                                            return TFindex
                                                        }
                                                    })
                                                })
                                            })
                                            TTFields.map((checkField) => {
                                                fieldAnsWithPage.push(TOTFI.FIELDS[checkField])
                                            })
                                        })
                                    })
                                }
                                else {
                                    // With out page 
                                    totPage.map((totpageItem, totpageIndex) => {
                                        Object.values(totpageItem).map((totFieldItem) => {
                                            var TTFieldsList = []
                                            totFieldItem.FIELDS.map((item) => {
                                                Object.keys(item).map((tfItems, tfindex) => {
                                                    TTFieldsList = ListFields.map((listOfFieldItem, listOfFieldIndex) => {
                                                        if (tfItems == listOfFieldItem) {
                                                            return tfindex
                                                        }
                                                    })
                                                })
                                            })
                                            TTFieldsList.map((checkField) => {
                                                FieldAnsWithOutPage.push(totFieldItem.FIELDS[checkField])
                                            })
                                        })
                                    })
                                }
                            })
                        })
                    })
                }
             


            })

        })
    })

    console.log(fieldAnsWithPage)
    console.log(FieldAnsWithOutPage)

    return 'No data'
}