import { Component, createElement } from "react";

import { AnimationContainer } from "./components/AnimationContainer";

export class AutoAnimate extends Component {
    render() {
        return (
            <AnimationContainer
                content={this.props.content}
                duration={this.props.duration}
                animationTiming={this.props.animationTiming}
            />
        );
    }
}
