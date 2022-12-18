// import { FC } from 'react'


// const About: FC = () => {
// 	return (
// 		<div style={{
// 			height: '100%',
// 			display: 'flex',
// 			alignItems: 'center',
// 			justifyContent: 'center',
// 			textAlign: 'center'
// 		}}>
// 			Hi Evelyn ❤️
// 			<br />
// 			Installed Build: 0.30.2
// 		</div>
// 	)
// };

// export default About;


import React from 'react';
import { Types } from '../Context/reducers';
import { useStore } from '../Context/StoreContextProvider';

const Products = () => {
	const { state, dispatch } = useStore()

	return (
		<div>
			<button onClick={() => {
				dispatch({
					type: Types.UpdateActiveCipher,
					payload: {
						activeCipher: 'hi'
					}
				})
			}}>
				click
			</button>
			<button onClick={() => {
				dispatch({
					type: Types.ResetActiveCipher
				})
			}}>
				RESET
			</button>
			{state.activeCipher}
		</div>
	)
}

export default Products;