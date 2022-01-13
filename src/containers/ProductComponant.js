import { connect } from "react-redux";
import React, { Component } from 'react'

class ProductComponant extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        //const products = useSelector((state) => state.allProducts.products);
        const { products } = this.props;
        return (
            <div>
                {
                    products.map((product) => {
                        console.log("my");
                        console.log(product);
                        const { flight_number, details, links, launch_success, launch_year } = product;
                        const { mission_patch } = links;
                        //console.log(product)
                        return (
                            <div className="four wide column" key={flight_number}>
                                <div className="ui link cards">
                                    <div className="card">
                                        <div className="image">
                                            <img className="ui small image" src={mission_patch} alt={details} />
                                        </div>
                                        <div className="content">
                                            <div className="header">{details}</div>
                                            <div className="meta price">{flight_number}</div>
                                            <div className="meta">{launch_success}</div>
                                            <div className="meta">{launch_year}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.allProducts.products
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

// const ProductComponent = () => {
//     const products = useSelector((state) => state.allProducts.products);
//     const renderList = products.map((product) => {

//         const { flight_number, details, links, launch_success, launch_year } = product;
//         const {mission_patch} = links;
//         console.log(product)
//         return (
//             <div className="four wide column" key={flight_number}>
//                     <div className="ui link cards">
//                         <div className="card">
//                             <div className="image">
//                             <img className="ui small image" src={mission_patch} alt={details} />
//                             </div> 
//                             <div className="content">
//                             <div className="header">{details}</div>
//                                 <div className="meta price">{flight_number}</div>
//                                 <div className="meta">{launch_success}</div>
//                                 <div className="meta">{launch_year}</div>
//                             </div>
//                         </div>
//                     </div>
//             </div>
//         );
//     });
//     return <>{renderList}</>;
// };

// export default ProductComponent;