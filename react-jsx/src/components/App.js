import React from 'react';

class App extends React.Component {
	sayHey() { 
		alert("Hey!");
	}
	render() {
		//���� ��Ҹ� �������ϸ� ������
		//�ϳ��� ������ߵ�
		let text = "Test Value"

		let pStyle = {
			color: 'aqua',
			backgroundColor: 'black'
		}

		return(
			<div>
			/*�ּ� ����*/
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
