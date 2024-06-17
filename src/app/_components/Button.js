import styled from '@emotion/styled';

import { Dark_grey, Logo_green } from '../Styles/Colors.js';

const Button = styled.button`
    letter-spacing: 2px;
    text-transform: capitalize;
    border-radius: 8px;
    border: 0;
    padding: 12px 25px;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    transition: all 0.2s;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(50, 52, 58, 0.3); //Dark_grey
`;

export const GreenButton = styled(Button)`
    color: white;
    background-color: ${Logo_green};
    @media (hover: hover) {
        &:hover {
            background-color: ${Dark_grey};
        }
    }
`;

export const TransparentButton = styled(Button)`
    color: ${Logo_green};
    background-color: transparent;
    padding: 12px 0;
    @media (hover: hover) {
        &:hover {
            color: ${Dark_grey};
        }
    }
`;
