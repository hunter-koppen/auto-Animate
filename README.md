## Auto Animate
Simplified Animation for Widgets

The Auto Animate widget provides automatic animations for any content you load directly into the widget. It offers several features to customize and control the animations.

## Key Features:
- Automatically animate the addition, removal, or movement of content within the widget.
- Apply animation to specific elements using custom queries.
- Adjust the duration and flow of the animation.
- Enable or disable animations based on your own logic.

## Usage
1. Add the Auto Animate widget to your page.
2. Place the desired content inside the widget.
3. Whenever there are changes to the *direct content*, the widget will automatically animate it. For example, you can swap content based on visibility, and it will be animated accordingly.

You can also use a custom query selector to select a different element as the basis for the animation. Ensure that the selected element is within the widget's content.

For more examples and demonstrations, please refer to the examples page in the demo app.

## Understanding Direct Content:
Only the direct children of the widget trigger animations. For instance, if you place a container directly inside the widget and control its visibility, the container will animate. However, if you add a container and place a button inside it, and you hide the button, it will not animate because the button is not a direct child.

If you want to animate multiple elements within the Auto Animate widget, you can simply add another Auto Animate widget inside the existing one.

## Example: Using Custom Queries
One useful application of this widget is animating sorting changes in lists. To achieve this, you need to use a query selector. Here's a quick setup guide for the most commonly used widgets:

1. First add your own class to the list widget you wish to use, in the examples below I will be using .yourclass.
2. Add the following custom query to widget you are using:

Listviews       : ".yourclass>ul"
Gallery widget  : ".yourclass>.widget-gallery-items"

## Issues, suggestions and feature requests
https://github.com/hunter-koppen/auto-Animate/issues
