"use client"
import { useState } from "react";



const ButtonTest = ({ label,dataId })=>{
	const [clicked,setClicked] = useState(false)

	const onClick = () => {
		setClicked(!clicked)
	}



	console.log('clicked',clicked)

	return(
		<>
			<button onClick={()=>onClick()} data-id={dataId}>
				{label}
			</button>

			{clicked &&
				<div data-id="div-test">
					Mostrar y ocultar esto
				</div>
			}
		</>
	)
}


export default ButtonTest