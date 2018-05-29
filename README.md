
# Button Component

Button component for React

```
npm install --save library-button-component
```

| Prop            | Values                                  |
| :-------------- | :-------------------------------------- |
| buttonCategory  | default, primary, success, danger, info |
| buttonSize      | large                                   |
| buttonText      | String                                  |
| buttonSymbol    | * Font Awesome class                    |
| handleClick     | handleClick function                    |
| handleHoverOver | handleHoverOver function                |
| handleHoverExit | handleHoverExit function                |

* Font Awesome needs to included in project for symbols to display

```
constructor(props) {
	super(props)

	this.state = {
		buttonAction: '',
		buttonCode: '',
		buttonText: ''
	}
}

handleClick(event) {
	this.setState ({
		buttonAction: 'Click'
	});
}

handleHoverOver(event) {
	this.setState ({
		buttonAction: 'Hover',
		buttonCode: event.target.innerHTML,
		buttonText: event.target.textContent
	});

	event.target.innerHTML = "Hovering..."
}

handleHoverExit(event) {
	event.target.innerHTML = this.state.buttonCode;
}

render () {
	return (
		<ButtonComponent
		  buttonCategory="default"
		  buttonSize="default"
		  buttonText="Default"
		  handleClick={this.handleClick.bind(this)}
		  handleHoverOver={this.handleHoverOver.bind(this)}
		  handleHoverExit={this.handleHoverExit.bind(this)} />
	)
}
```