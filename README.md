## Auto Animate

The Auto Animate widget adds automatic animations to any *direct content* (immediate children) you load inside the widget.

## Features

-   Automatically animate the adding/removing or moving of *direct content* inside the widget
-   Add animation to an element based on a custom query
-   Determine the duration & flow of the animation
-   Enabled/Disable the animation based on your own logic

## Usage

Simply add the widget to a page and place content inside it. Whenever the direct content changes it will automatically animate
it. You can for example swap some content based on visibility which will then be animated. 

You can also use a custom query selector to select a different element to be the base of the animation. If you use this option make sure the element you are trying to select is inside the content of the widget.

See the examples page in the demo app.

## What do I mean with direct content?

Only the base of the animation will trigger an animation change, so for example you can place a container directly inside the widget and based on some visibility show that container, it will then animate. But if you for example add a container and then a button inside it, and you put the visibility on the button it will not animate because its not a direct child.

So what if I want to animate multiple things inside the Auto Animate widget? Well simple, just put another Auto Animate widget inside the already existing Auto Animate widget.

## Example custom queries:
For any of the examples below make sure to also add your own custom class in front of the query selector so that it find the correct element.
Listviews       : ".yourclass .mx-list"
Gallery widget  : ".yourclass .widget-gallery-items"

## Issues, suggestions and feature requests
https://github.com/hunter-koppen/auto-Animate/issues
