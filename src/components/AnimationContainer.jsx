import { Component, createElement, createRef } from "react";
import autoAnimate from "@formkit/auto-animate";

export class AnimationContainer extends Component {
    constructor(props) {
        super(props);
        this.parentRef = createRef();
        this.animationController = null; // Reference to the animation controller
    }

    componentDidMount() {
        this.setupAnimations(); // Initial setup
    }

    componentDidUpdate(prevProps) {
        if (prevProps.enabledAnimations !== this.props.enabledAnimations) {
            this.setupAnimations(); // Update animations
        }
    }

    componentWillUnmount() {
        this.removeAnimations(); // Clean up animations
    }

    setupAnimations() {
        if (this.props.enabledAnimations) {
            if (!this.animationController && this.parentRef.current) {
                let easing;
                switch (this.props.animationTiming) {
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
                this.animationController = autoAnimate(this.parentRef.current, {
                    duration: this.props.duration,
                    easing: easing
                });
            } else if (this.animationController) {
                this.animationController.enable(); // Re-enable animations
            }
        } else {
            this.removeAnimations();
        }
    }

    removeAnimations() {
        if (this.animationController) {
            this.animationController.disable(); // Disable animations
            this.animationController = null; // Reset the animation controller
        }
    }

    render() {
        return (
            <div ref={this.parentRef} className="widget-auto-animate">
                {this.props.content}
            </div>
        );
    }
}
