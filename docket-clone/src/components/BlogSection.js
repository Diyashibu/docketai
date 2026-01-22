import React, { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const BlogCard = ({ title, readTime, link, image, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      component="a"
      href={link}
      className="_5points_linkblock w-inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        justifyContent: 'flex-start',
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'relative',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
        },
      }}
    >
      {/* Image Container with gray background */}
      <Box
        sx={{
          width: '100%',
          position: 'relative',
          overflow: 'hidden',
          height: '220px',
          backgroundColor: '#2a2a2a',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        {/* Background decorative pattern (img12) - overlay effect */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(/img12.png)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            opacity: isHovered ? 0.4 : 0.1,
            transition: 'opacity 0.3s ease',
            zIndex: 0,
          }}
        />

        {/* Main blog image (img9, img10, img11) - fully contained, aligned to top */}
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            display: 'block',
            position: 'relative',
            zIndex: 1,
          }}
        />
      </Box>

      {/* Content Area with gray background */}
      <Box
        sx={{
          backgroundColor: '#2a2a2a',
          p: 3,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        {/* Read time */}
        <Typography
          className="text-sm text-light-grey"
          sx={{
            color: '#cecece',
            fontFamily: 'Inter, Georgia, sans-serif',
            fontSize: '14px',
            lineHeight: '22px',
            mb: 2,
          }}
        >
          {readTime}
        </Typography>

        {/* Title */}
        <Typography
          className="text-md-3-homepage font-sans-inter text-left weight-md"
          sx={{
            lineHeight: '24px',
            color: 'white',
            fontSize: { xs: '16px', md: '18px' },
            textAlign: 'left',
            letterSpacing: '-0.4px',
            fontFamily: 'Inter, Georgia, sans-serif',
            fontWeight: 500,
            flex: 1,
            mb: 3,
          }}
        >
          {title}
        </Typography>

        {/* Arrow button - pointing to north-east */}
        <Box
          className="_4points_link-div"
          sx={{
            backgroundColor: '#181818',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            right: '12px',
            bottom: '12px',
            boxShadow: '0 2px 8px 5px rgba(0, 0, 0, 0.32)',
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Box>
      </Box>
    </Box>
  );
};

const BlogSection = () => {
  const blogPosts = [
    {
      title:
        'Docket Kicks Off 2025 with Record Growth, New Marquee Customers, Product Innovations and Strategic Expansions',
      readTime: '5 min',
      link: 'https://www.docket.io/blog/docketai-kicks-off-2025-with-record-growth-new-marquee-customers-product-innovations-and-strategic-expansions',
      image: '/img9.png',
    },
    {
      title: 'Get the Most Out of Docket: 7 Essential Sales Tips',
      readTime: '4 Min Read',
      link: 'https://www.docket.io/blog/7-tips-for-getting-the-most-out-of-docket',
      image: '/img10.png',
    },
    {
      title:
        'Docket Named a Cool Vendor in the Gartner® Cool Vendors™ in AI-Led Sales Research Report',
      readTime: '2 Min Read',
      link: 'https://www.docket.io/blog/recognized-as-gartner-cool-vendor-in-ai-led-sales-research',
      image: '/img11.png',
    },
  ];

  return (
    <Box
      className="u-container"
      sx={{
        backgroundColor: 'transparent',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1280px',
        padding: '60px 20px',
        display: 'flex',
        margin: '0 auto',
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: '2rem', md: '3rem' },
          fontWeight: 700,
          mb: 6,
          color: 'white',
          textAlign: 'center',
        }}
      >
        Fresh off the press
      </Typography>

      {/* Blog Cards Grid - Same on mobile and desktop */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 3,
          width: '100%',
        }}
      >
        {blogPosts.map((post, index) => (
          <BlogCard key={index} {...post} index={index} />
        ))}
      </Box>
    </Box>
  );
};

export default BlogSection;