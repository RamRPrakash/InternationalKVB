import React , {Component} from 'react'
import Button from '@material-ui/core/Button';

class KvbButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Button style={{backgroundColor : 'green' , color : 'white'}} variant="outlined" color="success" onClick={this.props.onClick}>
                {this.props.btnName}
      </Button>
    );
    }
}
 
export default KvbButton;