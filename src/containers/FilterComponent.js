import {connect} from "react-redux";
import React, {Component} from 'react';
import {Form, Checkbox, Header} from 'semantic-ui-react'
import {updateLaunchStatusFilter} from '../redux/actions/filterActions'

class FilterComponent extends Component {

    constructor(props) {
        super(props);
        this.handleLaunchStatusChange = this.handleLaunchStatusChange.bind(this);
    }

    handleLaunchStatusChange(e, {value}) {
        if (value === "True") {
            this.props.updateLaunchStatusFilter(true);
        } else if (value === "False") {
            this.props.updateLaunchStatusFilter(false);
        } else {
            this.props.updateLaunchStatusFilter(undefined);
        }
    }

    render() {
        return (
            <div>
                {/* <Header as='h2'>Filters</Header> */}
                <Form>
                    <Form.Field>
                        Launch Status
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='Launched'
                            name='launchRadioGroup'
                            value="True"
                            checked={this.props.launchStatus === true}
                            onChange={this.handleLaunchStatusChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='Not Launched'
                            name='launchRadioGroup'
                            value="False"
                            checked={this.props.launchStatus === false}
                            onChange={this.handleLaunchStatusChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='Both'
                            name='launchRadioGroup'
                            value="undefined"
                            checked={this.props.launchStatus === undefined}
                            onChange={this.handleLaunchStatusChange}
                        />
                    </Form.Field>
                </Form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        launchStatus: state.filters.launchStatus
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateLaunchStatusFilter: (launchStatus) => dispatch(updateLaunchStatusFilter(launchStatus))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterComponent);