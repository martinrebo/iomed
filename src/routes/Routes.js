import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "../screen/Home";
import Weather from "../screen/Weather";

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/weather">
                    <Weather />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )



}