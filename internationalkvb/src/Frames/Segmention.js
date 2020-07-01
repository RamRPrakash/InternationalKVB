
export default (classfication)=>{
    var data = classfication.split(" ")
    console.log(data)
    var ModifyData = data.map((item)=>{
        item = item.trim().toUpperCase()
        if(item != '')
            return item
    })
    return ModifyData ;
}