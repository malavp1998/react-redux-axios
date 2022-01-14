import React, { Component } from 'react'
import {Search, Header} from 'semantic-ui-react'
import { connect } from "react-redux";
import { setRocketName } from '../redux/actions/searchAction';

class SearchComponent extends Component {


    handleSearch = (event) => {
        this.props.setRocketName(event.target.value);
    }

    render() {
        return (
            <div>
                <Header as='h3'>Search</Header>
                <label><b>Rocket Name </b> </label>
                <Search
                    onSearchChange={this.handleSearch}
                    showNoResults = {false}
                    value={this.props.rocketName}
                />
                {/*<input placeholder='Search'  onChange ={this.handleSearch}/>*/}
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


