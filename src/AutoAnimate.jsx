import { Component, createElement } from "react";

import { AnimationContainer } from "./components/AnimationContainer";
import "./ui/AutoAnimate.css";

export class AutoAnimate extends Component {
    render() {
        return <AnimationContainer content={this.props.content} />;
    }
}
