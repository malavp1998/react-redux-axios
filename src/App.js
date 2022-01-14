import './App.css';
import HeaderComponent from './containers/HeaderComponent';
import FilterComponent from "./containers/FilterComponent";
import { Segment, Header } from 'semantic-ui-react'
import React from "react";
import SearchComponent from './containers/SearchComponent';
import MissionsListingComponent from "./containers/MissionsListingComponent";


function App() {
  return (
    <div className="App">
      <Segment.Group>
        <Segment> <HeaderComponent /> </Segment>
        <Segment.Group horizontal>
          <Segment compact={true}> <Segment.Group>
            <Segment><Header as='h2'>Filters</Header></Segment>
            <Segment.Group horizontal>
              <Segment><FilterComponent/></Segment>
              <Segment><FilterComponent/></Segment>
            </Segment.Group>

          </Segment.Group> </Segment>
          <Segment compact={true}> <SearchComponent /></Segment>
        </Segment.Group>
        <Segment><MissionsListingComponent /></Segment>
      </Segment.Group>
    </div>
  );
}
export default App;
