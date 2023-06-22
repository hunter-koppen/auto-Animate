import { Component, createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/AutoAnimate.css";

export class AutoAnimate extends Component {
    render() {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}
