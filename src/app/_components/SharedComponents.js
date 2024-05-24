import styled from '@emotion/styled';

const SectionWrapper = styled.div`
    display: flex;
    justify-content: center;
    max-width: 100vw;
    min-width: var(--page-width);
`;

const AnchorButton = styled.button`
    color: var(--white);
    background-color: var(--logo-green);
    &:hover {
        background-color: var(--dark-grey);
    }
    &:active {
        background-color: var(--medium-grey);
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
export { AnchorButton, SectionWrapper };
