import { Component, createElement } from "react";

import { AnimationContainer } from "./components/AnimationContainer";

export class AutoAnimate extends Component {
    render() {
        return (
            <AnimationContainer
                classNames={this.props.class}
                content={this.props.content}
                duration={this.props.duration}
                animationTiming={this.props.animationTiming}
                enabledAnimations={this.props.enabledAnimations.value}
                shouldAnimateOnLoad={this.props.shouldAnimateOnLoad}
            />
        );
    }
}
