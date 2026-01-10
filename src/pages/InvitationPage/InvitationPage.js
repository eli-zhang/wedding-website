import React from 'react';
import { PageContainer, InvitationCard, NavigationArrow } from './styled';
import { Link } from 'react-router-dom';

function InvitationPage() {
    return (
        <PageContainer>
            <InvitationCard />
            <Link to="/" style={{ textDecoration: 'none' }}>
                <NavigationArrow>
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    <span>Continue to website</span>
                </NavigationArrow>
            </Link>
        </PageContainer>
    );
}

export default InvitationPage;
