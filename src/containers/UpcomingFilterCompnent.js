import React, {Component} from 'react';
import {Checkbox, Form, Header} from "semantic-ui-react";
import {updateUpcomingStatusFilter} from "../redux/actions/filterActions";
import {connect} from "react-redux";

class UpcomingFilterCompnent extends Component {

    constructor(props) {
        super(props);
        this.handleUpcomingStatusChange = this.handleUpcomingStatusChange.bind(this);
    }

    handleUpcomingStatusChange(e, {value}) {
        if (value === "True") {
            this.props.updateUpcomingStatusFilter(true);
        } else if (value === "False") {
            this.props.updateUpcomingStatusFilter(false);
        } else {
            this.props.updateUpcomingStatusFilter(undefined);
        }
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Field>
                        <Header as='h3'>Upcoming Status</Header>
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='Upcoming'
                            name='upcomingRadioGroup'
                            value="True"
                            checked={this.props.upcomingStatus === true}
                            onChange={this.handleUpcomingStatusChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='Launched Already'
                            name='upcomingRadioGroup'
                            value="False"
                            checked={this.props.upcomingStatus === false}
                            onChange={this.handleUpcomingStatusChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='All'
                            name='upcomingRadioGroup'
                            value="undefined"
                            checked={this.props.upcomingStatus === undefined}
                            onChange={this.handleUpcomingStatusChange}
                        />
                    </Form.Field>
                </Form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        upcomingStatus: state.filters.upcomingStatus
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUpcomingStatusFilter: (upcomingStatus) => dispatch(updateUpcomingStatusFilter(upcomingStatus))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingFilterCompnent);