import React, { useEffect, useRef, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import {
  TimelineContainer,
  TimelineItem,
  TimelineContent,
  TimelineDate,
  TimelineDescription,
  TimelineImageWrapper,
  TimelineImage,
  TimelineDot
} from './styled';

// Import images
import img1 from '../../images/timeline/kiddos.jpg';
import img2 from '../../images/timeline/long_ago.jpg';
import img3 from '../../images/timeline/prom.jpg';
import img4 from '../../images/timeline/visiting_each_other.jpg';
import img5 from '../../images/timeline/crazy_matching.jpg';
import img6 from '../../images/timeline/moved_in.jpg';
import img7 from '../../images/timeline/engaged.jpg';
import starDoodle from '../../images/star_doodle.png';

const TIMELINE_DATA = [
  {
    id: 1,
    date: "November 01, 2009",
    description: "We met in elementary school and both of us liked math.",
    image: img1
  },
  {
    id: 2,
    date: "May 24, 2016",
    description: "We started dating in high school and lived just a few streets away from each other.",
    image: img2
  },
  {
    id: 3,
    date: "May 20, 2017",
    description: "We went to junior prom and senior prom together.",
    image: img3
  },
  {
    id: 4,
    date: "January 17, 2022",
    description: "We were long-distance in college but saw each other during breaks.",
    image: img4
  },
  {
    id: 5,
    date: "February 17, 2023",
    description: "We kept visiting each other in Seattle and Chicago.",
    image: img5
  },
  {
    id: 6,
    date: "August 22, 2024",
    description: "We moved in together in Chicago.",
    image: img6
  },
  {
    id: 7,
    date: "July 28, 2025",
    description: "We got engaged!",
    image: img7
  }
];

const TimelineItemComponent = ({ data, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only trigger once
        }
      },
      {
        threshold: 0.2 // Trigger when 20% visible
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <TimelineItem ref={itemRef} $isVisible={isVisible} $index={index}>
      <TimelineContent $index={index}>
        <TimelineDate>{data.date}</TimelineDate>
        <TimelineDescription>{data.description}</TimelineDescription>
      </TimelineContent>

      <TimelineDot src={starDoodle} alt="star" />

      <TimelineImageWrapper>
        <TimelineImage src={data.image} alt={`Timeline event ${data.date}`} />
      </TimelineImageWrapper>
    </TimelineItem>
  );
};

function AboutUsPage() {
  return (
    <>
      <NavBar tab={"About us"} />
      <TimelineContainer>
        {TIMELINE_DATA.map((item, index) => (
          <TimelineItemComponent key={item.id} data={item} index={index} />
        ))}
      </TimelineContainer>
    </>
  );
}

export default AboutUsPage;

