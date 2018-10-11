import React from 'react';
import plan from './plan.png';
import colors from './../../colors';
import styled from 'styled-components';

const PlanWrapper = styled.div`
	z-index: 1000;
	position: fixed;
	top: 25px;
	right: -750px;
	width: 750px;
	transition-duration: 0.25s;
	&::before {
		content: '';
		display: block;
		height: 535px;
		width: 7px;
		background-color: ${colors.accent_color};
		margin-top: 15px;
		float: left;
		margin-left: -7px;
		border-bottom-left-radius: 3px;
		border-top-left-radius: 3px;
	}
	&:hover {
		right: 0;
	}
`;
const Image = styled.img`
	margin: 0;
	max-width: 100%;
`;
const Plan = () => {
	return (
		<PlanWrapper>
			<Image src={plan} alt={'my_plan_for_uni'} />;
		</PlanWrapper>
	);
};

export default Plan;
