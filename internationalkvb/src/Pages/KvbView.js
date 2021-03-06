import React , {Component} from 'react'
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import KvbSelect from '../Components/KvbTextfield';
import KvbButton from '../Components/KvbButton'
import KvbExpansionPanel from '../Components/KvbExpansionPanel'
import Segmention from '../Frames/Segmention'
import MatchKey from '../Frames/MatchKey'
import Application from '../Frames/ApplicationList'
import Pages from '../Frames/PagesList'
import Fields from '../Frames/FieldsList'
import SearchKey from '../Frames/Searchkey'
import SearchResult from '../Frames/SearchResult'
class KvbView extends Component {
    constructor(props) {
        super(props);
        this.state = { question : '' }
    }
    search=()=>{
        var data = this.state.question 
        // var classfication = data.split(" ")
        // console.log(classfication)
        var Seg = Segmention(data)
        var ApplicationList = Application()
        var ApplicationMatch = MatchKey(ApplicationList, Seg)

        var PageList = Pages()
        var PageMatch = MatchKey(PageList, Seg )
        var FieldsList = Fields()
        var FieldMatchs = this.fieldMatch(PageMatch, FieldsList, Seg)
        

        var keywords = SearchKey(ApplicationMatch, PageMatch, FieldMatchs, Seg)
        
        console.log(ApplicationMatch)
        console.log(PageMatch)
        console.log(FieldMatchs)
        console.log(keywords)
        
        var checkDataBase = SearchResult(keywords)
        console.log(checkDataBase)
    }
    fieldMatch(PageMatch, FieldsList, Seg){
        var TotalFieldMatch = []
        if (PageMatch['Key'].length > 0) {
            PageMatch['Ans'].map((item) => {
                if (item) {
                    var data = FieldsList[item]
                    data.map((items) => {
                        items['FIELDS'].map((fieldItem) => {
                            var FieldMatch = MatchKey(fieldItem, Seg)
                            TotalFieldMatch.push(FieldMatch)
                        })
                    })
                }
            })
        }
        else {
            Object.values(FieldsList).map((item) => {
                item.map((items) => {
                    items['FIELDS'].map((fieldItem) => {
                        var FieldMatch = MatchKey(fieldItem, Seg)
                        TotalFieldMatch.push(FieldMatch)

                    })
                })
            })
        }
        return TotalFieldMatch
    }
    render() { 
        return (<Paper style={{height : '1000px' , margin : '3%'}} elevation={3} >
            <Card style={{display : 'flex' , height : '150px' , margin : '4%'} } >
                <div style={{ marginTop: '60px' }}>
                <KvbSelect style={{ marginTop: '60px' }} value={this.state.question}
                    onChange={(e)=>{
                        this.setState({
                            question : e.target.value
                        })
                    }} />
                    </div>
                <div style={{ marginTop: '60px' , marginLeft : '2%' }}>
                    <KvbButton onClick={this.search} btnName={'Search'} />
                </div>
            </Card>
            <Card style={{marginTop:'2%' , width : '92%' , height : '500px', marginLeft : '4%'}}>
                <KvbExpansionPanel />
                </Card>
            
        </Paper> );
    }
}
 
export default KvbView;