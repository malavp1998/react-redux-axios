import React, { Component } from 'react'
import {Search, Form} from 'semantic-ui-react'
import { connect } from "react-redux";
import { setRocketName } from '../redux/actions/searchAction';

class SearchComponent extends Component {


    handleSearch = (event) => {
        this.props.setRocketName(event.target.value);
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Field>
                        <label>Rocket Name (real time search)</label>
                        <Search
                            onSearchChange={this.handleSearch}
                            showNoResults = {false}
                            value={this.props.rocketName}
                        />
                    </Form.Field>
                </Form>
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


