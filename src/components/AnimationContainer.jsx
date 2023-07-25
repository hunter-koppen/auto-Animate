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
        if (this.props.enabledAnimations) {
            if (this.props.animationBase === "querySelector") {
                this.setupAnimationsSelector();
            } else {
                this.setupAnimationsContent();
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.enabledAnimations !== this.props.enabledAnimations || prevState.loaded !== this.state.loaded) {
            if (this.props.animationBase === "querySelector") {
                this.setupAnimationsSelector();
            } else {
                this.setupAnimationsContent();
            }
        }
    }

    componentWillUnmount() {
        this.removeAnimations();
    }

    setupAnimationsContent() {
        const { enabledAnimations, shouldAnimateOnLoad } = this.props;
        const element = this.parentRef.current;

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
                setTimeout(() => {
                    this.enableAnimation(element);
                }, 200);
            } else {
                if (shouldAnimateOnLoad) {
                    this.enableAnimation(element);
                }
                this.setState({ loaded: true });
            }
        }
    }

    setupAnimationsSelector() {
        const { enabledAnimations, querySelector } = this.props;
        if (!this.state.loaded) {
            this.setState({ loaded: true });
        } else {
            // Use an interval to keep checking for the element until we find it for atleast 2 seconds.
            let elapsedTime = 0;
            const interval = setInterval(() => {
                const element = this.parentRef.current?.querySelector(querySelector);

                if (element) {
                    if (enabledAnimations === false) {
                        this.removeAnimations();
                        this.setState({ loaded: true });
                    }

                    if (enabledAnimations === true) {
                        this.enableAnimation(element);
                    }
                    clearInterval(interval);
                } else {
                    elapsedTime += 100;
                    if (elapsedTime >= 2000) {
                        clearInterval(interval);
                    }
                }
            }, 100);
        }
    }

    enableAnimation = element => {
        const { animationFlow, duration } = this.props;

        const easing =
            {
                easeInOut: "ease-in-out",
                easeIn: "ease-in",
                easeOut: "ease-out",
                linear: "linear"
            }[animationFlow] || "ease-in-out";

        if (!this.animationController) {
            this.animationController = autoAnimate(element, {
                duration,
                easing
            });
        } else {
            this.animationController.enable();
        }
    };

    removeAnimations = () => {
        if (this.animationController) {
            this.animationController.disable(); // Disable animations
            this.animationController = null; // Reset the animation controller
        }
    };

    render() {
        const { content, classNames } = this.props;
        const { loaded } = this.state;
        // we only load the content once we have done the initial loading because then we have had time to apply the animations before loading the content if nessecary

        return (
            <div ref={this.parentRef} className={"widget-auto-animate " + classNames}>
                {loaded && content}
            </div>
        );
    }
}
