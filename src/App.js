import './App.css';
import HeaderComponent from './containers/HeaderComponent';
import LaunchFilterComponent from "./containers/LaunchFilterComponent";
import {Segment, Header} from 'semantic-ui-react'
import React from "react";
import SearchComponent from './containers/SearchComponent';
import MissionsListingComponent from "./containers/MissionsListingComponent";
import UpcomingFilterCompnent from "./containers/UpcomingFilterCompnent";
import LaunchDateFilterComponent from "./containers/LaunchDateFilterComponent";


function App() {
    return (
        <div className="App">
            <Segment.Group>
                <Segment> <HeaderComponent/> </Segment>
                <Segment.Group horizontal>

                  <Segment compact={true}>
                    <Segment.Group>
                      <Segment><Header as='h2'>Search</Header></Segment>
                      <Segment> <SearchComponent/></Segment>
                    </Segment.Group>
                  </Segment>

                  <Segment compact={true}>
                      <Segment.Group>
                        <Segment><Header as='h2'>Filters</Header></Segment>
                        <Segment.Group horizontal>
                            <Segment><LaunchFilterComponent/></Segment>
                            <Segment><LaunchDateFilterComponent/></Segment>
                            <Segment><UpcomingFilterCompnent/></Segment>
                        </Segment.Group>
                     </Segment.Group>
                    </Segment>

                </Segment.Group>
                <Segment><MissionsListingComponent/></Segment>
            </Segment.Group>
        </div>
    );
}

export default App;
