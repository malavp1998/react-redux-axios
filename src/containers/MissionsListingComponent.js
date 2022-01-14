import { connect } from "react-redux";
import { Card, Icon, Image, Grid, Popup } from 'semantic-ui-react';
import React, { Component } from 'react'
import {setMissions} from "../redux/actions/missionActions";

class MissionsListingComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rocketSearch: undefined,
            launchDate: undefined,
            upcoming: undefined
        };
        this.filterAndSearchMissions = this.filterAndSearchMissions.bind(this)
    }

    componentDidMount() {
        this.props.setMissions();
    }

    filterAndSearchMissions(mission) {
        const { launchStatus, rocketName } = this.props;
        const { rocket } = mission;
        if (launchStatus === undefined && rocketName === "") {
            return true;
        }
        else if (launchStatus === undefined) {
            return rocket.rocket_name.toLowerCase().startsWith(rocketName.toLowerCase());
        }
        else if (rocketName === "") {
            return (mission.launch_success === launchStatus);
        }
        else {
            return (mission.launch_success === launchStatus)
                && rocket.rocket_name.toLowerCase().startsWith(rocketName.toLowerCase());
        }

    }

    render() {
        //const products = useSelector((state) => state.allProducts.products);
        const { missions } = this.props;
        const missionsFiltered = [...new Set(missions.filter(this.filterAndSearchMissions))];
        console.log("current")
        console.log(missionsFiltered)
        return (
            <div>
                <Grid columns={4} padded>
                    {
                        missionsFiltered.map((mission) => {
                            // console.log("in rend");
                            // console.log(mission);
                            const { flight_number, mission_name, launch_site, rocket, details, links, launch_success, launch_year } = mission;
                            const { mission_patch } = links;
                            const { site_name_long } = launch_site;
                            const { rocket_name } = rocket;
                            //console.log(mission)
                            return (
                                <Grid.Column key={flight_number}>
                                    <Popup
                                        trigger={
                                            <Card>
                                                <Image src={mission_patch} wrapped ui={false} />
                                                <Card.Content>
                                                    <Card.Header>{mission_name}</Card.Header>
                                                    <Card.Meta>
                                                        <span className='date'>Launched <b>{launch_success ? "successfully" :
                                                            "un-successfully"}</b>in <b>{launch_year}</b></span>
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
                                            {details}
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
        rocketName: state.search.rocketName
    };
}

const mapDispatchToProps =  {
        setMissions
};

export default connect(mapStateToProps, mapDispatchToProps)(MissionsListingComponent);
