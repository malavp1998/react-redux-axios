import { connect } from "react-redux";
import { Card, Icon, Image, Grid, Popup } from 'semantic-ui-react';
import React, { Component } from 'react'

class ProductComponant extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rocketSearch: undefined,
            launchDate: undefined,
            upcoming: undefined
        };
        this.filterProduct = this.filterProduct.bind(this);
        this.searchProductByRocketName = this.searchProductByRocketName.bind(this)
        this.filterAndSearchProduct = this.filterAndSearchProduct.bind(this)


    }

    filterProduct(product) {
        const { launchStatus } = this.props;
        if (launchStatus === undefined) {
            return true;
        }
        return product.launch_success === launchStatus;
    }


    filterAndSearchProduct(product) {
        const { launchStatus } = this.props;
        const { rocketName } = this.props;
        const { rocket } = product;
        if (launchStatus === undefined && rocketName === "") {
            return true;
        }
        else if (launchStatus === undefined) {
            // console.log(rocket.rocket_name.substring(0, rocketName.length).toLowerCase());
            // console.log(rocketName.toLowerCase())
            // console.log("ACDS");
            //  console.log(rocketName.toLowerCase())
            return (rocketName.toLowerCase() === rocket.rocket_name.substring(0, rocketName.length).toLowerCase());
        }
        else if (rocketName === "") {
            return (product.launch_success === launchStatus);
        }
        else {
            return (product.launch_success === launchStatus) && (rocketName.toLowerCase() === rocket.rocket_name.toLowerCase());
        }

    }


    searchProductByRocketName(product) {
        const { rocketName } = this.props;
        // const rocketName ="Falcon 9";
        const { rocket } = product;
        // console.log("NAme");
        // console.log(rocket.rocket_name.toLowerCase())
        if (rocketName === "") {
            return true;
        }
        else if (rocketName.toLowerCase() === rocket.rocket_name.toLowerCase()) {
            return true;
        }
        else {
            return false;
        }
    }

    render() {
        //const products = useSelector((state) => state.allProducts.products);
        const { products } = this.props;
        const productsFiltered = products.filter(this.filterAndSearchProduct);
        return (
            <div>
                <Grid columns={4} padded>
                    {
                        productsFiltered.map((product) => {
                            // console.log("in rend");
                            // console.log(product);
                            const { flight_number, mission_name, launch_site, rocket, details, links, launch_success, launch_year } = product;
                            const { mission_patch } = links;
                            const { site_name_long } = launch_site;
                            const { rocket_name } = rocket;
                            //console.log(product)
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
        products: state.allProducts.products,
        launchStatus: state.filters.launchStatus,
        rocketName: state.search.rocketName
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        // dispatching plain actions
        // increment: () => dispatch({ type: 'INCREMENT' }),
        // decrement: () => dispatch({ type: 'DECREMENT' }),
        // reset: () => dispatch({ type: 'RESET' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductComponant);
