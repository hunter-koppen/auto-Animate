## Auto Animate

The Auto Animate widget adds automatic animations to any *direct content* (immediate children) you load inside the widget.

## Features

-   Automatically animate the adding/removing or moving of *direct content* inside the widget
-   Determine the duration & timing of the animation
-   Enabled/Disable the animation based on your own logic

## Usage

Simply add the widget to a page and place content inside it. Whenever the content changes it will automatically animate
it. You can for example swap some content based on visibility which will then be animated.

## What do I mean with direct content?

Only the first elements loaded inside the widget will trigger an animation change, so for example you can place a container directly inside the widget and based on some visibility show that container, it will then animate. But if you for example add a container and then a button inside it, and you put the visibility on the button it will not animate.

So what if I want to animate multiple things inside the Auto Animate widget? Well simple, just put another Auto Animate widget inside the already existing Auto Animate widget.

## Issues, suggestions and feature requests

https://github.com/hunter-koppen/auto-Animate/issues
