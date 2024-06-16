import React from 'react';
import Image from 'next/image';

export const OptionZeroLogo = (className) => {
    return (
        <Image
            src="/optionzero-logo.png"
            alt="option zero logo"
            width={150}
            height={26}
            className={className}
        />
    );
};
