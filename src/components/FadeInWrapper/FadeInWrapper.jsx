import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(50px)')};
    transition: opacity 1.0s ease-out, transform 1.0s ease-out;
    width: 100%;
`;

const FadeInWrapper = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            });
        }, {
            threshold: 0.1
        });

        const currentElement = domRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, []);

    return (
        <Wrapper ref={domRef} $isVisible={isVisible}>
            {children}
        </Wrapper>
    );
};

export default FadeInWrapper;
