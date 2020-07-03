export default (Application, ModifyData)=>{
    var Indexes = []
    var TotalApp = Object.values(Application).map((item , index) => {
        var App = item.split(",")
        var matchApp = ModifyData.find(val => App.includes(val))
        if(matchApp){
            Indexes.push(index)
        }
        return matchApp || ''
    })
    var corectKey = Object.keys(Application).map((item)=>{
        return item
    })
    var checkKey = Indexes.map((item)=>{
        return corectKey[item]
    })
    //var key = Object.keys(Application).map(item=>{return item})
    return { 'Key': checkKey, 'Ans': TotalApp}
}