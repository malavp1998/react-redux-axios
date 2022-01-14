import {connect} from "react-redux";
import {Card, Grid, Icon, Image, Popup} from 'semantic-ui-react';
import React, {Component} from 'react'
import {setMissions} from "../redux/actions/missionActions";
import {LaunchDateFilterConstants} from "./LaunchDateFilterConstants";

class MissionsListingComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rocketSearch: undefined,
            launchDate: undefined,
            upcoming: undefined
        };
        this.combineFilters = this.combineFilters.bind(this)
        this.getDaysDifference = this.getDaysDifference.bind(this);
        this.filterBasedOnRocketSearch = this.filterBasedOnRocketSearch.bind(this);
        this.filterBasedOnLaunchStatus = this.filterBasedOnLaunchStatus.bind(this);
        this.filterBasedOnUpcomingStatus = this.filterBasedOnUpcomingStatus.bind(this);
        this.filterBasedOnLaunchDate = this.filterBasedOnLaunchDate.bind(this);
    }

    componentDidMount() {
        this.props.setMissions();
    }

    getDaysDifference(date) {
        const now = new Date();
        const utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
        const diffTime = Math.abs(utc.getTime() - date.getTime());
        return Math.ceil(diffTime / (1000 * 3600 * 24));
    }

    filterBasedOnLaunchDate(mission) {
        const { launchDateDaysBefore } = this.props;
        const launchDate = new Date(mission.launch_date_utc);
        const daysBefore = this.getDaysDifference(launchDate);
        if (launchDateDaysBefore === LaunchDateFilterConstants.SHOW_ALL) {
            return true;
        }
        return (daysBefore <= launchDateDaysBefore);
    }

    filterBasedOnLaunchStatus(mission) {
        const { launchStatus } = this.props;
        if (launchStatus === undefined) {
            return true;
        }
        return (mission.launch_success === launchStatus);
    }

    filterBasedOnUpcomingStatus(mission) {
        const { upcomingStatus } = this.props;
        if (upcomingStatus === undefined) {
            return true;
        }
        return (mission.upcoming === upcomingStatus);
    }

    filterBasedOnRocketSearch(mission) {
        const { rocket } = mission;
        const { rocketName } = this.props;
        if (rocketName === "") {
            return true;
        }
        return rocket.rocket_name.toLowerCase().startsWith(rocketName.toLowerCase());
    }

    combineFilters(mission) {
        return this.filterBasedOnLaunchStatus(mission) &&
            this.filterBasedOnUpcomingStatus(mission) &&
            this.filterBasedOnRocketSearch(mission) &&
            this.filterBasedOnLaunchDate(mission);
    }

    render() {
        const { missions } = this.props;
        const missionsFiltered = missions.filter(this.combineFilters);
        return (
            <div>
                <Grid columns={4} padded>
                    {
                        missionsFiltered.map((mission) => {
                            const { mission_name, launch_site, launch_date_utc, upcoming,
                                rocket, details, links, launch_success, launch_year } = mission;
                            const { mission_patch } = links;
                            const { site_name_long } = launch_site;
                            const { rocket_name } = rocket;
                            const launchDate = new Date(launch_date_utc);
                            return (
                                <Grid.Column key={mission_name}>
                                    <Popup
                                        trigger={
                                            <Card>
                                                <Image src={mission_patch} wrapped ui={false} />
                                                <Card.Content>
                                                    <Card.Header>{mission_name} {upcoming ? " (upcoming)" : ""}</Card.Header>
                                                    <Card.Meta>
                                                        <span className='date'>
                                                            Launched <b> {launch_success ? "successfully" : "un-successfully"}
                                                            </b>{this.getDaysDifference(launchDate)} days before in <b>{launch_year}</b></span>
                                                    </Card.Meta>
                                                    <Card.Description>
                                                        Launched from <i>{site_name_long}</i>
                                                    </Card.Description>
                                                    <Card.Content extra>
                                                        <Icon name='rocket' /> {rocket_name}
                                                    </Card.Content>
                                                </Card.Content>
                                            </Card>
                                        }
                                    >
                                        <Popup.Header>Details</Popup.Header>
                                        <Popup.Content>
                                            {details === undefined ? "": details}
                                        </Popup.Content>
                                    </Popup>
                                </Grid.Column>)
                        })
                    }
                </Grid>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        missions: state.allMissions.missions,
        launchStatus: state.filters.launchStatus,
        upcomingStatus: state.filters.upcomingStatus,
        launchDateDaysBefore: state.filters.launchDateDaysBefore,
        rocketName: state.search.rocketName
    };
}

const mapDispatchToProps =  {
        setMissions
};

export default connect(mapStateToProps, mapDispatchToProps)(MissionsListingComponent);
