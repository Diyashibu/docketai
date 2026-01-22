import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const GradientText = styled('span')({
  background: 'linear-gradient(90deg, #ed8bfe 0%, #ffa04d 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
});

// Custom SVG Icons
const ConsultationIcon = () => (
  <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 8H4V16H8V8Z" fill="#B2BBC8" />
    <path d="M14 4H10V16H14V4Z" fill="#B2BBC8" />
    <path d="M20 10H16V16H20V10Z" fill="#B2BBC8" />
    <rect x="2" y="17" width="20" height="1.5" fill="#B2BBC8" />
  </svg>
);

const CrownIcon = () => (
  <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 3L15.5 8L21 6.5L18.5 12H6.5L4 6.5L9.5 8L12.5 3Z" fill="#B2BBC8" />
    <path d="M5 13H20V16H5V13Z" fill="#B2BBC8" />
  </svg>
);

const AwardIcon = () => (
  <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12.5" cy="9" r="5" fill="none" stroke="#B2BBC8" strokeWidth="1.5" />
    <path d="M12.5 5V9L15 11" stroke="#B2BBC8" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M9 14L7.5 18L12.5 16L17.5 18L16 14" stroke="#B2BBC8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FeatureCard = ({ icon, title, description }) => (
  <Box
    className="_4points_card-2 shadow bg"
    sx={{
      background: 'linear-gradient(180deg, rgba(28, 26, 28, 1) 0%, rgba(68, 52, 69, 1) 33%, rgba(57, 44, 54, 1) 66%, rgba(0, 0, 0, 1) 100%)',
      backgroundImage: `url('https://cdn.prod.website-files.com/64b81d5300b4d493cead41a3/68540659a5677a3267d27a8f_Ellipse%20Decor.svg'), linear-gradient(180deg, rgba(28, 26, 28, 1) 0%, rgba(68, 52, 69, 1) 33%, rgba(57, 44, 54, 1) 66%, rgba(0, 0, 0, 1) 100%)`,
      backgroundPosition: '50% 0, 0 0',
      backgroundRepeat: 'no-repeat, repeat',
      backgroundSize: 'cover, auto',
      borderRadius: '20px',
      p: { xs: '16px', md: '20px' },
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gridColumnGap: '20px',
      gridRowGap: '20px',
      boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.4)',
      transition: 'all 0.2s',
      minHeight: { xs: '350px', md: '400px' },
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '4px 8px 30px rgba(0, 0, 0, 0.5)',
      },
    }}
  >
    <Box
      sx={{
        width: { xs: 48, md: 56 },
        height: { xs: 48, md: 56 },
        borderRadius: '12px',
        bgcolor: 'rgba(255, 255, 255, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mb: { xs: 1.5, md: 2 },
      }}
    >
      {icon}
    </Box>

    <Typography
      variant="h5"
      sx={{
        fontSize: { xs: '1rem', md: '1.5rem' },
        fontWeight: 600,
        mb: { xs: 1.5, md: 2 },
        color: 'white',
        lineHeight: 1.3,
      }}
    >
      {title}
    </Typography>

    <Typography
      variant="body1"
      sx={{
        color: '#d4d4d8',
        lineHeight: 1.7,
        fontSize: { xs: '0.8rem', md: '1rem' },
      }}
    >
      {description}
    </Typography>
  </Box>
);

const PremiumExperience = () => {
  const features = [
    {
      icon: <ConsultationIcon />,
      title: '14-18 minute consultations',
      description:
        'Real personalized product consultations happening at odd hours—demonstrating both service depth and genuine visitor engagement that converts to qualified pipeline opportunities.',
    },
    {
      icon: <CrownIcon />,
      title: 'White-glove experience driving conversion',
      description:
        'Premium visitor experience delivering measurable conversion improvements while maintaining brand consistency and service quality standards.',
    },
    {
      icon: <AwardIcon />,
      title: '24/7 service excellence & attribution',
      description:
        'Both visitor satisfaction and revenue attribution proven across internal and agency installations—showing consistent concierge-level service and conversion across high volumes.',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#181818',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '150%',
          height: '150%',
          background: 'radial-gradient(circle, rgba(98, 58, 254, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <Box
          sx={{
            width: { xs: '100%', md: '60%' },
            mx: 'auto',
            textAlign: 'center',
            mb: 8,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.75rem', md: '3.5rem' },
              fontWeight: 500,
              mb: 2,
              color: 'white',
            }}
          >
            Premium experience. <GradientText>Proven results.</GradientText>
          </Typography>
        </Box>

        {/* Feature Cards */}
        <Box
          className="_4points_grid _3 as-grid"
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(3, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gridColumnGap: { xs: '8px', md: '16px' },
            gridRowGap: { xs: '8px', md: '16px' },
            gridTemplateRows: 'auto',
            gridAutoColumns: '1fr',
            placeContent: 'start',
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default PremiumExperience;