# Technical Design Document


### Requirements

1. Building a Password generator given filters such as include symbols, numbers etc.
2. A bar containing strength must show how strong the password is low, medium, high
3. Copy the password button
4. Hover states have color changes.


### Components

1. Input Bar
2. Checkboxes 
3. Generate Button
4. Copy Button within Input Box
5. Slider for Character count
6. Strength Indicator 


### User Story

1. Use selects checkboxes, number of characters else take default
2. Password is generated on client side itself.
3. User copies the password through button or manual select
4. Reiterate until password matches required strength.


### Implementation

1. Input Box must contain copy button and its functionality
2. Checkboxes and slider must contain as seperate component
3. Genearate button + Strength must be part of Main component
4. Hover states uses mostly css
5. Password generator logic will take above filters as arguments and build a logic and generate password.
6. Defaults are all checked boxes and character length 10 and strength must be medium
7. Strength calculation logic , find out.


### Tasks

1. Password Generator Logic given arguments
2. Checkboxes with hover state
3. Character Slider 
4. Generate Button + Copy Button
5. Input Box
6. Hover States.


### Components Arch

![Components](https://file%2B.vscode-resource.vscode-cdn.net/Users/nikesh/projects/password_generator/password_generator/docs/components.png?version%3D1662362739808)


### End