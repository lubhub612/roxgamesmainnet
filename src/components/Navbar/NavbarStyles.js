import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Header = styled(motion.header)`
    padding: 16px 24px;
    border-bottom: 1px solid hsl(240,17%,26%);

    @media (min-width: 768px) {
        padding: 32px 24px 27px 24px;
    }

    @media (min-width: 1025px) {
        padding: 0 44px 0 32px;
        height: 85px;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 768px) {
        flex-flow: column;
    }

    @media (min-width: 1025px) {
        flex-flow: row;
        height: 100%;
        max-width: 1440px;
        margin: 0 auto;
    }
`;

export const Logo = styled.h1`
    all: unset;
`;

export const LogoLink = styled.a`
    font-size: 28px;
    font-family: 'Antonio',sans-serif;
    color: hsl(0,0%,100%);
    text-transform: uppercase;
    letter-spacing: -1.05px;

    &:focus {
        outline: none;
    }

    &:focus-visible {
        outline: 2px dashed hsl(2,68%,53%);
        outline-offset: 3px;
    }
`;
