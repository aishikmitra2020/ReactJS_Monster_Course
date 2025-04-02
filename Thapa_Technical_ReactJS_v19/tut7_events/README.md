# Event Handling in ReactJS
Event handling in React.js is the process of **capturing and responding to user interactions, such as clicks, keystrokes, or form submissions, within a React application.** Event handling in React follows a similar pattern to standard JavaScript event handling but with some key differences, such as using **synthetic events** for **cross-browser compatibility** and providing consistent event handling across different elements and browsers.

# What is SyntheticBaseEvent in React?
When you handle events in React, like clicking a button or typing in an input box, React wraps the native browser events are wrapped in something called a **SyntheticEvent**. This SyntheticEvent is a wrapper around the browser's native event, making sure that events behave consistently across all the browsers.

# Events in ReactJS
Here, are some widely used **React.js events:**

1. **onClick**: Triggered when an element is clicked.
2. **onChange**: Triggered when the value of an input element changes.
3. **onSubmit**: Triggered when a form is submitted.
4. **onKeyPress**: Triggered when a key is pressed while an element has focus.
5. **onMouseMove**: Triggered when the mouse moves over an element.
6. **onMouseEnter**: Triggered when the mouse pointer enters an element.
7. **onKeyPress**: Triggered when a key is pressed while an element has focus.
8. **onMouseMove**: Triggered when the mouse moves over an element.
9. **onMouseLeave**: Triggered when the mouse pointer leaves an element.
10. **onKeyPress**: Triggered when a key is pressed while an element has focus.
11. **onMouseMove**: Triggered when the mouse moves over an element.
12. **onKeyDown**: Triggered when a key is pressed down.
13. **onKeyPress**: Triggered when a key is pressed while an element has focus.
14. **onMouseMove**: Triggered when the mouse moves over an element.
15. **onKeyUp**: Triggered when a key is released.
16. **onKeyPress**: Triggered when a key is pressed while an element has focus.
17. **onMouseMove**: Triggered when the mouse moves over an element.
18. **onFocus**: Triggered when an element receives focus.
19. **onKeyPress**: Triggered when a key is pressed while an element has focus.
20. **onMouseMove**: Triggered when the mouse moves over an element.
21. **onBlur**: Triggered when an element loses focus.
22. **onKeyPress**: Triggered when a key is pressed while an element has focus.
23. **onMouseMove**: Triggered when the mouse moves over an element.
24. **onInput**: Triggered when the value of an input element is changed (similar to onChange).
25. **onKeyPress**: Triggered when a key is pressed while an element has focus.
26. **onMouseMove**: Triggered when the mouse moves over an element.

# Event Naming Conventions
**CamelCase**: Event names in JSX should be written in camelCase.
Example: `onClick`, `onChange`, `onSubmit`.
Prefix with **'on'**: Event handlers should be prefixed with **"on"**.
Example: `onClick`, `onMouseEnter`.

## Function Naming Conventions
*   Here also we follow **camelCase** naming convention
*   **Prefix** with **'handle'**: It is a common convention to **prefix event handler functions** with **"handle"** to clearly indicate their purpose.

    *   Example: `handleClick`, `handleChange`, `handleSubmit`.

*   **Descriptive Names:** Function names should be **descriptive and reflect what the function does**. Avoid vague names like `clickHandler` or `handleFormSubmit`. Be specific about the action being performed.

    * Example: Use `handleFormSubmit` instead of just `handleSubmit` if it's specifically for form submission.