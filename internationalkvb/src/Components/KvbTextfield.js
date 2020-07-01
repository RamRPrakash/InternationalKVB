import React , {Component} from 'react'
import TextField from '@material-ui/core/TextField';
class KvbTextfield extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <TextField 
            id="outlined-basic" 
            label={this.props.label} 
            value={this.props.value}
            onChange={this.props.onChange}
            width={'360px'}
            style={{width : '700px' , fontSize : '36px'}}
                floatingLabelFocusStyle="green"
             />
         );
    }
}
 
export default KvbTextfield;