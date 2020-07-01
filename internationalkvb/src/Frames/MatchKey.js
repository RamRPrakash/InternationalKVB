export default (Application, ModifyData)=>{
    var TotalApp = Object.values(Application).map((item) => {
        var App = item.split(",")
        var matchApp = ModifyData.find(val => App.includes(val))
        return matchApp || ''
    })

    return TotalApp
}