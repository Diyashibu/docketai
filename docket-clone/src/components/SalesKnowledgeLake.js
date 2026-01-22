import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const FeatureCard = styled(Box)(({ theme }) => ({
  gridColumnGap: '32px',
  gridRowGap: '32px',
  backgroundColor: '#181818',
  border: '1px solid #2e2e2e',
  borderRadius: '20px',
  flexFlow: 'column',
  justifyContent: 'space-between',
  padding: '12px',
  display: 'flex',
  position: 'relative',
  overflow: 'hidden',
}));

const SalesKnowledgeLake = () => {
  const features = [
    {
      image: '/img3.png',
      title: 'Industry-leading accuracy',
      description:
        'Grounded responses with source attribution and confidence scores. Your reps get verified answers, every conversation',
    },
    {
      image: '/img4.png',
      title: '100+ native integrations',
      description:
        'Connect your CRM, MAP, calendar, knowledge base, and sales tools. Full tech stack coverage out of the box.',
    },
    {
      image: '/img5.png',
      title: 'Enterprise-grade security',
      description:
        'SOC 2 Type II, GDPR, and ISO 27001 compliant. Data encrypted in transit and at rest. Complete audit trails for every conversation.',
    },
  ];

  return (
    <Box
      className="meetdocket-content"
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: '#181818',
        position: 'relative',
      }}
    >
      <Container 
        maxWidth={false}
        sx={{
          maxWidth: { xs: '100%', md: '75%' },
          px: { xs: 2, md: 3 },
        }}
      >
        {/* Centered Badge */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 4,
          }}
        >
          <Box
            sx={{
              display: 'inline-block',
              px: 3,
              py: 1,
              borderRadius: '100px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'white',
                fontWeight: 500,
                fontSize: '0.875rem',
              }}
            >
              Engineered to perfection
            </Typography>
          </Box>
        </Box>

        {/* Title Holder - Side by Side Layout */}
        <Box
          className="meetdocket_title-holder"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mb: 6,
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 3, md: 6 },
            alignItems: { xs: 'flex-start', md: 'flex-start' },
          }}
        >
          {/* Left Side - Heading */}
          <Box
            sx={{
              flex: { xs: '1', md: '0 0 50%' },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                color: 'white',
                lineHeight: 1.2,
              }}
            >
              Built for enterprise GTM teams
            </Typography>
          </Box>

          {/* Right Side - Description */}
          <Box
            sx={{
              flex: { xs: '1', md: '0 0 45%' },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: '#b2bbc8',
                fontSize: { xs: '1rem', md: '1.125rem' },
                lineHeight: 1.7,
              }}
            >
              Production-ready AI with the accuracy, integrations, and security controls
              revenue teams need.
            </Typography>
          </Box>
        </Box>

        {/* Feature Cards Grid */}
        <Box
          className="meetdocket_grid"
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)',
            },
            gridColumnGap: '32px',
            gridRowGap: '32px',
            gridTemplateRows: 'auto',
            gridAutoColumns: '1fr',
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} className="meetdocket_card">
              {/* Text Content First */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  padding: '12px',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: '1.5rem', md: '1.75rem' },
                    fontWeight: 600,
                    color: 'white',
                    lineHeight: 1.3,
                  }}
                >
                  {feature.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: '#b2bbc8',
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    fontFamily: 'Inter, Georgia, sans-serif',
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>

              {/* Image Below */}
              <Box
                component="img"
                src={feature.image}
                alt={feature.title}
                className="meetdocket_image"
                sx={{
                  borderRadius: '12px',
                  marginLeft: 0,
                  maxWidth: '100%',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                }}
              />
            </FeatureCard>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default SalesKnowledgeLake;