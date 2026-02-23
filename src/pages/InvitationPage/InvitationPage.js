import { useState, useEffect } from 'react';
import { PageContainer, InvitationGroup, EnvelopeBottom, EnvelopeTop, InvitationCard, CardInner, NavigationArrow, FadeOverlay } from './styled';
import { useNavigate } from 'react-router-dom';

import cardInvitation from '../../images/invitation/card_invitation.png';
import envelopeBottom from '../../images/invitation/envelope_bottom.png';
import envelopeTop from '../../images/invitation/envelope_top.png';
import paperTexture from '../../images/paper_texture.jpg';

function InvitationPage() {
    const [openState, setOpenState] = useState('unopened'); // 'unopened', 'opening', 'opened'
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [isNavigating, setIsNavigating] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    const handleContinue = (e) => {
        e.preventDefault();
        setIsNavigating(true);
        setTimeout(() => {
            navigate('/');
        }, 800);
    };

    const handleMouseMove = (e) => {
        if (openState !== 'opened') return;
        const rect = e.currentTarget.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate tilt angles (±15 degrees max)
        const tiltX = (mouseY - centerY) / centerY * -15;
        const tiltY = (mouseX - centerX) / centerX * 15;

        setTilt({ x: tiltX, y: tiltY });
    };

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
    };

    const handleOpen = () => {
        if (openState === 'unopened') {
            setOpenState('opening');
        }
    };

    useEffect(() => {
        const images = [cardInvitation, envelopeBottom, envelopeTop, paperTexture];
        let loadedCount = 0;

        const handleImageLoad = () => {
            loadedCount++;
            if (loadedCount === images.length) {
                // Add a small delay for smoother transition
                setTimeout(() => setIsLoading(false), 500);
            }
        };

        images.forEach(src => {
            const img = new Image();
            img.src = src;
            img.onload = handleImageLoad;
            img.onerror = handleImageLoad; // Continue anyway if an image fails
        });
    }, []);

    useEffect(() => {
        if (openState === 'opening') {
            const timer = setTimeout(() => {
                setOpenState('opened');
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [openState]);

    return (
        <PageContainer onClick={handleOpen} $openState={openState} $isLoading={isLoading}>
                <>
                    <InvitationGroup $openState={openState}>
                        <EnvelopeBottom $openState={openState} />
                        <EnvelopeTop $openState={openState} />
                        <InvitationCard $openState={openState}>
                            <CardInner
                                $openState={openState}
                                $tilt={tilt}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                            />
                        </InvitationCard>
                    </InvitationGroup>
                    {openState === 'opened' && (
                        <NavigationArrow onClick={handleContinue}>
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                            <span>Continue to website</span>
                        </NavigationArrow>
                    )}
                </>
            <FadeOverlay $isVisible={isNavigating} />
        </PageContainer>
    );
}

export default InvitationPage;
