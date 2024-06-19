import { useState, useRef } from 'react';
import './App.css';


function App () {
	const initialList = [
		{ id: 0, val:1 },
		{ id: 1, val:1 },
		{ id: 2, val:2 },
	  ];
	const [counts, setCounts] = useState(initialList);

	function updateC(v,id) {
		const nextC = counts.map(c => {
		  if (c.id != id) {
			return c;
		  } else {
			return {
			  ...c,
			  val: c.val + v,
			};
		  }
		});
		setCounts(nextC);
	}

	return (	
		<div className="flexcol app">
			<div className="textcenter">Select:</div>
			<UpDownGoup couns={counts} handlecouns={updateC} />
			<TextFeld inhalt={counts.map((item) => {return item.val})} />
		</div>
	);
  	
}

function TextFeld ({inhalt}) {
	return (<div className='textcenter'>{inhalt}</div>);
}
 
function UpDown ({coun,handlecoun}) {
	return (
	<div class="counter textcenter" >
		<button onClick={()=>handlecoun(0)}>{'+'}</button>
		<div>{coun}</div>
		<button onClick={()=>handlecoun(1)}>{'-'}</button>
	</div>);
}

function UpDownGoup ({couns,handlecouns}) {
	return (
		<div className="group textcenter flexrow">
			{couns.map((item) => <UpDown key={item.id} coun={item.val} handlecoun={(k) => { handlecouns((-1)**k, item.id)}}/>)}
		</div>
	);
}

export default App;
