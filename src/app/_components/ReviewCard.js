import React from 'react';

import styled from '@emotion/styled';

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
    height: auto;
    width: '100%',
    gap: 10px;
    justify-content: center;
`;

const ReviewCardStyles = {
    display: 'inline-block',
    width: 'fit-content',
    maxWidth: '80%',
    height: '100%',
};

export const ReviewCard = ({ hidden, info }) => {
    return (
        <div style={{ ...ReviewCardStyles, ...hidden }}>
            <p
                style={{
                    fontStyle: 'italic',
                    textJustify: 'left',
                    minWidth: '100%',
                    width: '0',
                }}
            >
                {info.quote}
            </p>
            <ReviewerInfoContainer>
                {info.portrait.map((image, j) => {
                    return <Portrait key={j} src={image} alt={info.name}></Portrait>;
                })}
                <ReviewerNameContainer>
                    <h3 style={{ margin: 0 }}>{info.name}</h3>
                    <p style={{ margin: 0 }}>{info.position}</p>
                </ReviewerNameContainer>
            </ReviewerInfoContainer>
        </div>
    );
};
