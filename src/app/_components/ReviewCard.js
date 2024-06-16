import React from 'react';
import styled from '@emotion/styled';
import { Header3, Paragraph } from '../Styles/Typography';

const Portrait = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 30px;
`;

const ReviewerNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 10px;
    padding: 0;
`;

const ReviewerInfoContainer = styled.div`
    display: flex;
    align-items: center;
    align-self: flex-end;
    justify-content: flex-start;
    height: auto;
    width: '100%',
    gap: 10px;
`;

const ReviewCardStyles = {
    display: 'inline-block',
    width: 'fit-content',
    maxWidth: '80%',
    height: '100%',
    margin: '28px',
    flexGrow: '2',
};

export const ReviewCard = ({ hidden, info }) => {
    return (
        <div style={{ ...ReviewCardStyles, ...hidden }}>
            <Paragraph
                style={{
                    fontStyle: 'italic',
                    textJustify: 'left',
                    minWidth: '100%',
                    width: '0',
                }}
            >
                {info.quote}
            </Paragraph>
            <ReviewerInfoContainer>
                {info.portrait.map((image, j) => {
                    return <Portrait key={j} src={image} alt={info.name}></Portrait>;
                })}
                <ReviewerNameContainer>
                    <Header3 style={{ margin: 0, fontSize: '28px' }}>{info.name}</Header3>
                    <Paragraph style={{ margin: 0 }}>{info.position}</Paragraph>
                </ReviewerNameContainer>
            </ReviewerInfoContainer>
        </div>
    );
};
