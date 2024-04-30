import React from 'react';

const ServiceCard = ({ title, description }) => {
    <div>{title}</div>;
    <div>{description}</div>;
};

const SERVICES = [
    {
        title: 'Software Strategy',
        icon: 'tbd',
        description:
            "You have a vision for your business. Now you need the software to bring it to life. We'll help you define your software needs and create a roadmap for long-term impact.",
    },
    {
        title: 'Software Strategy 2',
        icon: 'tbd',
        description:
            "You have a vision for your business. Now you need the software to bring it to life. We'll help you define your software needs and create a roadmap for long-term impact.",
    },
];

const ServicesSection = () => {
    return (
        <>
            <div> What We Do </div>
            <div> We do... </div>
            {SERVICES.map((service, index) => {
                return (
                    <ServiceCard
                        title={service.title}
                        description={service.description}
                        key={index}
                    />
                );
            })}
        </>
    );
};

export default ServicesSection;
