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
    }

    filterProduct(product) {
        const {launchStatus}  = this.props;
        if(launchStatus === undefined) {
            return true;
        }
        return product.launch_success === launchStatus;
    }

    render() {
        //const products = useSelector((state) => state.allProducts.products);
        const { products } = this.props;
        const productsFiltered = products.filter(this.filterProduct);
        return (
            <div>
                <Grid columns={4} padded>
                    {
                        productsFiltered.map((product) => {
                            const { flight_number, mission_name, launch_site, rocket, details, links, launch_success, launch_year } = product;
                            const { mission_patch } = links;
                            const {site_name_long} = launch_site;
                            const {rocket_name} = rocket;
                            //console.log(product)
                            return (
                                <Grid.Column key={flight_number}>
                                    <Popup
                                        trigger={
                                            <Card>
                                                <Image src="https://miro.medium.com/max/580/0*uyPv5FeFHvOimMKn.jpg" wrapped ui={false} />
                                                <Card.Content>
                                                    <Card.Header>{mission_name}</Card.Header>
                                                    <Card.Meta>
                                                <span className='date'>Launched <b>{launch_success ? "successfully":
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
        launchStatus: state.filters.launchStatus
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
