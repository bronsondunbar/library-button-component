
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