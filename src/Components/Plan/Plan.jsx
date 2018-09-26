import React from 'react';
import plan from './planik.PNG';
import './Plan.css';
const Plan = () => {
	return (
		<div className={'plan-container'}>
			<img src={plan} alt={'my_plan_for_uni'} />;
		</div>
	);
};

export default Plan;
