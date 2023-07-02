import { hidePropertyIn } from "@mendix/pluggable-widgets-tools";

export function getProperties(values, defaultProperties) {
    if (values.animationBase === "content") {
        hidePropertyIn(defaultProperties, values, "querySelector");
    } else {
        hidePropertyIn(defaultProperties, values, "shouldAnimateOnLoad");
    }
    return defaultProperties;
}
