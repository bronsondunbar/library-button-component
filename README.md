
# Button Component

Button component for React

Install and save component as a dependency

```
npm install --save library-button-component
```

Import component into your app

```
import Button from 'library-button-component'
```

Create and assign button states with empty values

```
constructor(props) {
	super(props)

	this.state = {
		buttonAction: '',
		buttonCode: '',
		buttonText: ''
	}
}

```

Create the function that will handle mouse click events

```
handleClick(event) {
	this.setState ({
		buttonAction: 'Click'
	});
}
```

Create the function that will handle mouse hover enter and exit events

```
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
```

Render the component with the functions we created as well as any other props that are needed

```
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