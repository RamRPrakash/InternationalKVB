export default (ApplicationMatch, PageMatch, FieldMatchs, Seg)=>{
    var applicationKey = ApplicationMatch['Ans']
    var pageKey = PageMatch['Ans']
    var Fields = []
    var FieldKey = FieldMatchs.map((item)=>{
       Fields.push(...item['Ans'])
    })
    console.log(applicationKey)
    console.log(pageKey)

    console.log(Fields)
    var serachKeys = [...applicationKey, ...pageKey, ...Fields]
    var finalSearchResult = serachKeys.filter(item=>item!='')
    console.log(finalSearchResult)
    console.log(Seg)
    let difference = Seg.filter(x => !finalSearchResult.includes(x));
    console.log(difference)
    var searchKeyWord = {
        'APPLICATION': applicationKey.filter(item=>item!=''),
        'PAGE': pageKey.filter(item=>item!=''),
        'FIELDS': Fields.filter(item=>item!=''),
        'KEYWORDS': difference
    }
    return searchKeyWord
}