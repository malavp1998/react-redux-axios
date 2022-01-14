import {connect} from "react-redux";
import React, {Component} from 'react';
import {Form, Checkbox, Header} from 'semantic-ui-react'
import {updateLaunchStatusFilter} from '../redux/actions/filterActions'

class LaunchFilterComponent extends Component {

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
                <Form>
                    <Form.Field>
                        <Header as='h3'>Launch Status</Header>
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
                            label='All'
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

export default connect(mapStateToProps, mapDispatchToProps)(LaunchFilterComponent);