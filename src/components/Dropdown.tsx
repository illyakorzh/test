import React, { useState } from 'react';

import styled from 'styled-components';

import { ReactComponent as CheckMark } from '../assets/checkMark.svg';
import { ReactComponent as Earth } from '../assets/earth.svg';
import { Color, FontFamily } from '../Global';
interface DropdownProps {
	options: string[];
	onSelect: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState<string>(options[0]);

	const handleSelect = (value: string) => {
		setSelected(value);
		setOpen(false);
		onSelect(value);
	};

	return (
		<DropdownContainer>
			<FlexContainer>
				<StyledEarth />
				<DropdownButton onClick={() => setOpen(!open)}>{selected}</DropdownButton>
				<StyledCheckMark open={open} />
			</FlexContainer>
			<DropdownContent open={open}>
				{options.map((option) => (
					<DropdownItem key={option} onClick={() => handleSelect(option)}>
						{option}
					</DropdownItem>
				))}
			</DropdownContent>
		</DropdownContainer>
	);
};

const FlexContainer = styled.div`
	display: flex;
	min-width: 95px;
	justify-content: space-between;
`;

const DropdownContainer = styled.div`
	position: relative;
`;

const StyledEarth = styled(Earth)`
	width: 24px;
	height: 24px;
`;

interface CheckMarkProps {
	open: boolean;
}
const StyledCheckMark = styled(CheckMark)<CheckMarkProps>`
	transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
	width: 24px;
	height: 24px;
`;

const DropdownButton = styled.button`
	background-color: transparent;
	color: ${Color.White};
	border: none;
	cursor: pointer;
	text-align: center;
	font-family: ${FontFamily.SourceCodePro};
	font-size: 24px;
	font-style: normal;
	font-weight: 400;
	line-height: 26px; /* 108.333% */
`;

interface DropdownContentProps {
	open: boolean;
}
const DropdownContent = styled.div<DropdownContentProps>`
	position: absolute;

	display: ${({ open }) => (open ? 'block' : 'none')};
	z-index: 1;
	border-radius: 4px;
	border: 0.5px solid #49b6ff;
	backdrop-filter: blur(7px);
	min-width: 95px;
`;

const DropdownItem = styled.div`
	padding: 10px 30px;
	justify-content: center;
	text-align: center;
	font-family: ${FontFamily.SourceCodePro};
	font-size: 24px;
	font-style: normal;
	font-weight: 400;
	line-height: 26px; /* 108.333% */
	cursor: pointer;
	&:hover {
		background: rgba(73, 182, 255, 0.35);
	}
`;

export default Dropdown;
