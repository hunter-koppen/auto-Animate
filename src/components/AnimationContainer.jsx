import { Component, createElement, createRef } from "react";
import autoAnimate from "@formkit/auto-animate";

export class AnimationContainer extends Component {
    constructor(props) {
        super(props);
        this.parentRef = createRef();
        this.animationController = null; // Reference to the animation controller
    }

    state = {
        loaded: false // Flag to track if component has been fully loaded
    };

    componentDidMount() {
        this.setupAnimations(); // Initial setup
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.enabledAnimations !== this.props.enabledAnimations || prevState.loaded !== this.state.loaded) {
            this.setupAnimations(); // Update animations
        }
    }

    componentWillUnmount() {
        this.removeAnimations(); // Clean up animations
    }

    setupAnimations() {
        const { enabledAnimations, animationTiming, duration, shouldAnimateOnLoad } = this.props;
        const element = this.parentRef.current;

        if (enabledAnimations) {
            debugger;
            if (element) {
                if (this.state.loaded || shouldAnimateOnLoad) {
                    if (!this.animationController) {
                        let easing;
                        switch (animationTiming) {
                            case "easeInOut":
                                easing = "ease-in-out";
                                break;
                            case "easeIn":
                                easing = "ease-in";
                                break;
                            case "easeOut":
                                easing = "ease-out";
                                break;
                            case "linear":
                                easing = "linear";
                                break;
                            default:
                                easing = "ease-in-out";
                        }
                        this.animationController = autoAnimate(element, {
                            duration,
                            easing
                        });
                    } else {
                        this.animationController.enable(); // Re-enable animations
                    }
                }

                if (!this.loaded) {
                    this.setState({
                        loaded: true
                    });
                }
            }
        } else if (enabledAnimations === false) {
            this.removeAnimations();
            this.setState({
                loaded: true
            });
        }
    }

    removeAnimations() {
        if (this.parentRef.current && this.animationController) {
            this.animationController.disable(); // Disable animations
            this.animationController = null; // Reset the animation controller
        }
    }

    render() {
        return (
            <div ref={this.parentRef} className="widget-auto-animate">
                {this.state.loaded ? this.props.content : null}
            </div>
        );
    }
}
