
# Button Component

Button component for React

| Prop            | Default | Values                                  |
| :-------------- |:------- | :-------------------------------------- |
| buttonCategory  | default | default, primary, success, danger, info |
| buttonSize      | none    | large                                   |
| buttonText      | Button  | String for button text                  |
| buttonSymbol    | none    | Font Awesome class                      |
| handleClick     | none    | handleClick function                    |
| handleHoverOver | none    | handleHoverOver function                |
| handleHoverExit | none    | handleHoverExit function                |

```
<ButtonComponent
  buttonCategory="default"
  buttonSize="default"
  buttonText="Default"
  handleClick={this.handleClick.bind(this)}
  handleHoverOver={this.handleHoverOver.bind(this)}
  handleHoverExit={this.handleHoverExit.bind(this)} />
```