import React, {Component} from 'react';
import {updateLaunchDateFilter} from "../redux/actions/filterActions";
import {connect} from "react-redux";
import {Checkbox, Form, Header} from "semantic-ui-react";
import {LaunchDateFilterConstants} from "./LaunchDateFilterConstants";

class LaunchDateFilterComponent extends Component {

    constructor(props) {
        super(props);
        this.handleLaunchDateFilterChange = this.handleLaunchDateFilterChange.bind(this);
    }

    handleLaunchDateFilterChange(e, {value}) {
        this.props.updateLaunchDateFilter(value);
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Field>
                        <Header as='h3'>Launch Date</Header>
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='Last Week'
                            name='launchDateRadioGroup'
                            value={LaunchDateFilterConstants.LAST_WEEK}
                            checked={this.props.launchDateDaysBefore === LaunchDateFilterConstants.LAST_WEEK}
                            onChange={this.handleLaunchDateFilterChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='Last Month'
                            name='launchDateRadioGroup'
                            value={LaunchDateFilterConstants.LAST_MONTH}
                            checked={this.props.launchDateDaysBefore === LaunchDateFilterConstants.LAST_MONTH}
                            onChange={this.handleLaunchDateFilterChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='Last Year'
                            name='launchDateRadioGroup'
                            value={LaunchDateFilterConstants.LAST_YEAR}
                            checked={this.props.launchDateDaysBefore === LaunchDateFilterConstants.LAST_YEAR}
                            onChange={this.handleLaunchDateFilterChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='Last 5 Years'
                            name='launchDateRadioGroup'
                            value={LaunchDateFilterConstants.LAST_FIVE_YEARS}
                            checked={this.props.launchDateDaysBefore === LaunchDateFilterConstants.LAST_FIVE_YEARS}
                            onChange={this.handleLaunchDateFilterChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='All'
                            name='launchDateRadioGroup'
                            value={LaunchDateFilterConstants.SHOW_ALL}
                            checked={this.props.launchDateDaysBefore === LaunchDateFilterConstants.SHOW_ALL}
                            onChange={this.handleLaunchDateFilterChange}
                        />
                    </Form.Field>
                </Form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        launchDateDaysBefore: state.filters.launchDateDaysBefore
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateLaunchDateFilter: (launchDateDaysBefore) => dispatch(updateLaunchDateFilter(launchDateDaysBefore))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchDateFilterComponent);