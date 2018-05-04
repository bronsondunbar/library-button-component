
# Button Component

Button component for React

```
npm install --save library-button-component
```

| Prop            | Default | Values                                  |
| :-------------- |:------- | :-------------------------------------- |
| buttonCategory  | default | default, primary, success, danger, info |
| buttonSize      | none    | large                                   |
| buttonText      | Button  | String for button text                  |
| buttonSymbol    | none    | * Font Awesome class                    |
| handleClick     | none    | handleClick function                    |
| handleHoverOver | none    | handleHoverOver function                |
| handleHoverExit | none    | handleHoverExit function                |

* Font Awesome needs to included in project for symbols to display

```
<ButtonComponent
  buttonCategory="default"
  buttonSize="default"
  buttonText="Default"
  handleClick={this.handleClick.bind(this)}
  handleHoverOver={this.handleHoverOver.bind(this)}
  handleHoverExit={this.handleHoverExit.bind(this)} />
```