import { Component, createRef, createElement } from "react";
import autoAnimate from "@formkit/auto-animate";

export class AnimationContainer extends Component {
    constructor(props) {
        super(props);
        this.parentRef = createRef();
    }

    componentDidMount() {
        if (this.parentRef.current) {
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
            autoAnimate(this.parentRef.current, {
                // Animation duration in milliseconds (default: 250)
                duration: this.props.duration,
                // Easing for motion (default: 'ease-in-out')
                easing: easing
            });
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
