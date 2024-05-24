import styled from '@emotion/styled';
import { PAGE_WIDTH, SECTION_PADDING } from '../Styles/Styles.js';
import { Dark_grey, Logo_green, Medium_grey } from '../Styles/Colors.js';

export const SectionBackground = styled.div((props) => ({
    boxSizing: 'border-box',
    display: 'block',
    padding: props.padding ? SECTION_PADDING : 0,
}));

export const SectionContent = styled.div((props) => ({
    display: 'flex',
    flexDirection: props.column && 'column',
    padding: props.padding ? SECTION_PADDING : 0,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: PAGE_WIDTH,
}));

export const AnchorButton = styled.button`
    color: white;
    background-color: ${Logo_green};
    &:hover {
        background-color: ${Dark_grey};
    }
    &:active {
        background-color: ${Medium_grey};
    }
    letter-spacing: 2px;
    text-transform: capitalize;
    border-radius: 8px;
    border: 0;
    padding: 12px 25px;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    transition: all 0.2s;
`;
