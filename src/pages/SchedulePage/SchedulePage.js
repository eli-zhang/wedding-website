import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import {
    PageContainer,
    ScheduleContainer,
    PageSubtitle,
    ScheduleDateTitle,
    ScheduleTableContainer,
    ScheduleTable,
    TableRow,
    TimeCell,
    ItemCell
} from './styled';

function SchedulePage() {
    const itinerary = [
        { time: "5:00 PM", item: "Guests arrive" },
        { time: "5:20 PM", item: "All guests are seated" },
        { time: "5:30 PM", item: "Wedding ceremony" },
        { time: "6:00 PM", item: "Cocktail hour" },
        { time: "7:00 PM", item: "Reception" },
        { time: "9:00 PM", item: "Dancing and board games" },
        { time: "11:00 PM", item: "Send-off" }
    ];

    return (
        <>
            <NavBar tab={"Schedule"} />
            <PageContainer>
                <ScheduleContainer>
                    <PageSubtitle>Wedding Schedule</PageSubtitle>
                    <ScheduleDateTitle>Sunday, May 17</ScheduleDateTitle>

                    <ScheduleTableContainer>
                        <ScheduleTable>
                            <tbody>
                                {itinerary.map((entry, index) => (
                                    <TableRow key={index}>
                                        <TimeCell>{entry.time}</TimeCell>
                                        <ItemCell>{entry.item}</ItemCell>
                                    </TableRow>
                                ))}
                            </tbody>
                        </ScheduleTable>
                    </ScheduleTableContainer>
                </ScheduleContainer>
            </PageContainer>
        </>
    );
}

export default SchedulePage;
