import React, { useState, useEffect } from 'react';
import { PageContainer, InvitationGroup, EnvelopeBottom, EnvelopeTop, InvitationCard, NavigationArrow } from './styled';
import { Link } from 'react-router-dom';

function InvitationPage() {
    const [openState, setOpenState] = useState('unopened'); // 'unopened', 'opening', 'opened'

    const handleOpen = () => {
        if (openState === 'unopened') {
            setOpenState('opening');
        }
    };

    useEffect(() => {
        if (openState === 'opening') {
            const timer = setTimeout(() => {
                setOpenState('opened');
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [openState]);

    const isOpened = openState === 'opened' || openState === 'opening';

    return (
        <PageContainer onClick={handleOpen} $openState={openState}>
            <InvitationGroup $openState={openState}>
                <EnvelopeBottom $openState={openState} />
                <EnvelopeTop $openState={openState} />
                <InvitationCard $openState={openState} />
            </InvitationGroup>
            {openState === 'opened' && (
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <NavigationArrow>
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                        <span>Continue to website</span>
                    </NavigationArrow>
                </Link>
            )}
        </PageContainer>
    );
}

export default InvitationPage;
