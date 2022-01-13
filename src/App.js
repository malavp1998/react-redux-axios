import './App.css';
import HeaderComponent from './containers/HeaderComponent';
import ProductListing from "./containers/ProductListing";
import FilterComponent from "./containers/FilterComponent";
import { Segment } from 'semantic-ui-react'
import React from "react";


function App() {
  return (
    <div className="App">
        <Segment.Group>
            <Segment> <HeaderComponent /> </Segment>
            <Segment.Group horizontal>
                <Segment compact={true}> <FilterComponent /></Segment>
                <Segment compact={true}> <FilterComponent /></Segment>
            </Segment.Group>
            <Segment><ProductListing /></Segment>
        </Segment.Group>
    </div>
  );
}

export default App;
