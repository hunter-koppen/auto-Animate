import { Component, createElement } from "react";

import { AnimationContainer } from "./components/AnimationContainer";

export class AutoAnimate extends Component {
    render() {
        return (
            <AnimationContainer
                classNames={this.props.class}
                content={this.props.content}
                duration={this.props.duration}
                animationFlow={this.props.animationFlow}
                enabledAnimations={this.props.enabledAnimations.value}
                shouldAnimateOnLoad={this.props.shouldAnimateOnLoad}
                animationBase={this.props.animationBase}
                querySelector={this.props.querySelector}
            />
        );
    }
}
