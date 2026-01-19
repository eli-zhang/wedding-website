import React, { useState } from 'react';
import { PageContainer, EnvelopeBottom, EnvelopeTop, InvitationCard, NavigationArrow } from './styled';
import { Link } from 'react-router-dom';

function InvitationPage() {
    const [isOpened, setIsOpened] = useState(false);

    const handleOpen = () => {
        setIsOpened(true);
    };

    return (
        <PageContainer onClick={handleOpen} $isOpened={isOpened}>
            <EnvelopeBottom $isOpened={isOpened} />
            <EnvelopeTop $isOpened={isOpened} />

            <InvitationCard $isOpened={isOpened} />
            {isOpened && (
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
