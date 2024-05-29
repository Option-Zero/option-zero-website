import React from 'react';
import Slider from 'react-slick';
import styled from '@emotion/styled';
import { SectionBackground, SectionContent } from './Section';
import { BREAKPOINTS, MAX_CONTENT_WIDTH } from '../Styles/Styles';
import { Medium_grey } from '../Styles/Colors';
//required for Slider component to function properly
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const REVIEWS = [
    {
        name: 'Nick Reavill',
        position: 'CTO, Commons',
        portrait: ['reviewers/NickReavill.jpeg'],
        review: '"We hired Option Zero to clean up our python data pipeline. They delivered exactly what I wanted - the codebase is less terrifying now! They required minimal oversight, operated as an independent unit, and communicated their work clearly and concisely."',
    },
    {
        name: 'Shannon Bloemker',
        position: 'CEO, Energy Raven',
        portrait: ['reviewers/ShannonBloemker.jpeg'],
        review: '"Option Zero didn’t just fulfill our immediate software needs; they equipped us to thrive independently. I highly recommend them to anyone in the climate space looking for a reliable, mission aligned, and adaptable technical partner. Their contribution was a key factor in our success, and I’m so glad we found them."',
    },
    {
        name: 'Sam & Claire',
        position: 'Co-Founders, Carbon Yield',
        portrait: ['reviewers/Claire-headshot.png', 'reviewers/Sam-headshot.png'],
        review: '"Jaime and Jason are astute, efficient, thorough, and incredibly gracious. \
        They jumped into our complex data challenges but did not make them complicated, \
        rather they helped us create a road map for future development that give us as \
        founders confidence that we can navigate the growth and further development of our platform."',
    },
    {
        name: 'James Regulinski',
        position: 'CTO, Carbon Collective',
        portrait: ['reviewers/JamesRegulinski.jpeg'],
        review: '"Jaime and Jason are a stellar team. They were instrumental in building and running our highly collaborative team and kept us laser-focused on our top strategic priorities. If you want a team to help you figure out where you need to go and get you there fast, you want Jaime and Jason."',
    },
    {
        name: 'Tom Abeles',
        position: 'CEO, Uprope',
        portrait: ['reviewers/TomAbeles.jpeg'],
        review: '"Jason is...perhaps the strongest developer I have worked with."',
    },
];

const reviewCardStyles = {
    width: 350,
    padding: 20,
};
const arrowsOffset = 0;
var cardCount = 2;

const StyledTitle = styled.h4`
    color: ${Medium_grey};
    text-transform: uppercase;
    padding-bottom: 30px;
`;

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
    width: ${reviewCardStyles.width}px;
    gap: 10px;
    justify-content: flex-start;
`;

const ReviewCard = styled.div`
    max-width: ${reviewCardStyles.width}px;
    width: 300px;
    padding: ${reviewCardStyles.padding}px;
    box-sizing: border-box;
    border-width: 8px;
    border-color: black;
`;

const StyledSlider = styled(Slider)`
    width: 100%%;
    margin: 100px auto;
`;

function SliderArrow(props) {
    const { className, onClick, src, alt } = props;
    return (
        <div onClick={onClick} className={`arrow ${className}`}>
            {/**I do not understand how this works */}
            <img src={src} alt={alt} />
        </div>
    );
}

function generateSlides() {
    return REVIEWS.map((review, i) => {
        return (
            <ReviewCard key={i}>
                <p
                    style={{
                        padding: '0 20px',
                        fontStyle: 'italic',
                        alignSelf: 'flex-start',
                    }}
                >
                    {review.review}
                </p>
                <ReviewerInfoContainer>
                    {review.portrait.map((image, j) => {
                        return <Portrait key={j} src={image} alt={review.name}></Portrait>;
                    })}
                    <ReviewerNameContainer>
                        <h3 style={{ margin: 0 }}>{review.name}</h3>
                        <p style={{ margin: 0 }}>{review.position}</p>
                    </ReviewerNameContainer>
                </ReviewerInfoContainer>
            </ReviewCard>
        );
    });
}

const ReviewsSection = () => {
    const sliderSettings = {
        centerMode: true,
        speed: 700,
        adaptiveHeight: false,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        // nextArrow: <SliderArrow src="icons/icons8-right-48.png" alt="right arrow" />,
        // prevArrow: <SliderArrow src="icons/icons8-left-48.png" alt="left arrow" />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div>
            <SectionContent>
                <StyledTitle> Our Clients Say </StyledTitle>
            </SectionContent>

            <StyledSlider {...sliderSettings} style={{ backgroundColor: 'pink' }}>
                {/* <ReviewCard>
                        <p
                            style={{
                                padding: '0 20px',
                                fontStyle: 'italic',
                                alignSelf: 'flex-start',
                            }}
                        >
                            {REVIEWS[0].review}
                        </p>
                        <ReviewerInfoContainer>
                            <Portrait src={REVIEWS[0].portrait} alt={REVIEWS[0].name}></Portrait>
                            <ReviewerNameContainer>
                                <h3 style={{ margin: 0 }}>{REVIEWS[0].name}</h3>
                                <p style={{ margin: 0 }}>{REVIEWS[0].position}</p>
                            </ReviewerNameContainer>
                        </ReviewerInfoContainer>
                    </ReviewCard>
                    <ReviewCard>
                        <p
                            style={{
                                padding: '0 20px',
                                fontStyle: 'italic',
                                alignSelf: 'flex-start',
                            }}
                        >
                            {REVIEWS[1].review}
                        </p>
                        <ReviewerInfoContainer>
                            <Portrait src={REVIEWS[1].portrait} alt={REVIEWS[1].name}></Portrait>
                            <ReviewerNameContainer>
                                <h3 style={{ margin: 0 }}>{REVIEWS[1].name}</h3>
                                <p style={{ margin: 0 }}>{REVIEWS[1].position}</p>
                            </ReviewerNameContainer>
                        </ReviewerInfoContainer>
                    </ReviewCard> */}
                {generateSlides()}
            </StyledSlider>
        </div>
    );
};

export default ReviewsSection;
