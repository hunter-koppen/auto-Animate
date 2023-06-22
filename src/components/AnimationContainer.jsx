import { Component, createRef, createElement } from "react";
import autoAnimate from "@formkit/auto-animate";

export class AnimationContainer extends Component {
    constructor(props) {
        super(props);
        this.parentRef = createRef();
    }

    componentDidMount() {
        if (this.parentRef.current) {
            autoAnimate(this.parentRef.current);
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
