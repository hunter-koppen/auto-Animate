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
        this.setupAnimations();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.enabledAnimations !== this.props.enabledAnimations || prevState.loaded !== this.state.loaded) {
            this.setupAnimations();
        }
    }

    componentWillUnmount() {
        this.removeAnimations();
    }

    setupAnimations() {
        const { enabledAnimations, shouldAnimateOnLoad } = this.props;
        const element = this.parentRef.current;
        debugger;
        if (!element) return;

        // Make sure to only execute logic when we have a value for enabledAnimations (not undefined)
        if (enabledAnimations === false) {
            this.removeAnimations();
            this.setState({ loaded: true });
            return;
        }

        if (enabledAnimations === true) {
            if (this.state.loaded) {
                // need a slight timeout here to make sure the initial rendering has finished.
                setTimeout(this.enableAnimation, 100);
            }

            if (shouldAnimateOnLoad) {
                this.enableAnimation();
            }

            if (!this.state.loaded) {
                this.setState({ loaded: true });
            }
        }
    }

    enableAnimation = () => {
        const { animationTiming, duration } = this.props;
        const element = this.parentRef.current;

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

        if (!this.animationController) {
            this.animationController = autoAnimate(element, {
                duration,
                easing
            });
        } else {
            this.animationController.enable();
        }
    };

    removeAnimations() {
        if (this.animationController) {
            this.animationController.disable(); // Disable animations
            this.animationController = null; // Reset the animation controller
        }
    }

    render() {
        const { content } = this.props;
        const { loaded } = this.state;
        // we only load the content once we have done the initial loading because then we have had time to apply the animations before loading the content if nessecary

        return (
            <div ref={this.parentRef} className="widget-auto-animate">
                {loaded && content}
            </div>
        );
    }
}
