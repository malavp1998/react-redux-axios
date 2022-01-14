import React, { Component } from 'react'
import { Button, Icon, Form, Header } from 'semantic-ui-react'
import { connect } from "react-redux";
import { setRocketName } from '../redux/actions/searchAction';

class SearchComponent extends Component {


    handleSearch = (event) => {
        console.log(event.target.value)
        this.props.setRocketName(event.target.value);
    }

    render() {
        return (
            <div>
                <Header as='h3'>Search</Header>
                <label>Rocket Name</label>
                <input placeholder='Search'  onChange ={this.handleSearch}/>
                {/* <Button as='div' labelPosition='right'>
                    <Button icon>
                        <Icon name='search' />
                    </Button>
                </Button> */}
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        rocketName: state.search.rocketName
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setRocketName: (rocketName) => dispatch(setRocketName(rocketName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);


