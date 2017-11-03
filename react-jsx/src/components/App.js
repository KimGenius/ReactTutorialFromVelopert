import React from 'react';

class App extends React.Component {
	sayHey() { 
		alert("Hey!");
	}
	render() {
		//여러 요소를 렌더링하면 오류남
		//하나로 묶어줘야됨
		let text = "Test Value"

		let pStyle = {
			color: 'aqua',
			backgroundColor: 'black'
		}

		return(
			<div>
			/*주석 ㅇㅇ*/
				<h1>Hello React Skeleton</h1>
				<h2>Test Element {text}</h2>
				<button onClick={this.sayHey}>Hey!</button>
				{console.log(this)}
				<p style={pStyle}>{text=='Test Value'?'True':'False'}</p>
			</div>
		);
	}
}

export default App;
