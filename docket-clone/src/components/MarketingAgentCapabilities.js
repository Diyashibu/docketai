import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const CapabilityCard = styled(Box)(({ theme }) => ({
  gridColumnGap: '16px',
  gridRowGap: '16px',
  backgroundImage: 'linear-gradient(#181818, #242424)',
  borderRadius: '20px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  padding: '20px',
  transition: 'box-shadow 0.2s, opacity 0.4s, transform 0.4s',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  alignSelf: 'center',
  position: 'relative',
  overflow: 'hidden',
  height: 'auto',
  flex: 1,
  opacity: 0.3,
  boxShadow: '0 6px 10px rgba(0, 0, 0, 0.2)',
  '&:hover': {
    zIndex: 1,
    opacity: 1,
    transform: 'scale(1.1)',
  },
  [theme.breakpoints.down('md')]: {
    opacity: 1,
  },
}));

const MarketingAgentCapabilities = () => {
  const capabilities = [
    {
      image: 'https://cdn.prod.website-files.com/64b81d5300b4d493cead41a3/690239f327001f0f296de456_engage%20(1).png',
      title: 'Engage',
      description:
        'Meet every visitor with product-expert conversations. Deep knowledge, natural dialogue, zero wait time.',
    },
    {
      image: 'https://cdn.prod.website-files.com/64b81d5300b4d493cead41a3/690247a21e7387cdc6185f9e_c3da50ea1e7f4536b5ddabd04e676df5_qualify%20%281%29.png',
      title: 'Qualify',
      description:
        'Ask the right discovery questions to spot high-value opportunities. Complete prospect intelligence before handoff.',
    },
    {
      image: 'https://cdn.prod.website-files.com/64b81d5300b4d493cead41a3/69025db98210ff181f9764f6_route%20(1).png',
      title: 'Route',
      description:
        'Connect qualified leads to the right seller with full context. Faster deal velocity, higher close rates.',
    },
    {
      image: 'https://cdn.prod.website-files.com/64b81d5300b4d493cead41a3/6902605bdc62ad12d594dc2b_meeting%20(1).png',
      title: 'Book',
      description:
        'Schedule meetings while prospects are engaged. Convert intent to pipeline instantly, even at 2am.',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#181818',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              mb: 3,
              color: 'white',
            }}
          >
            Marketing Agent Capabilities
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#b2bbc8',
              fontSize: { xs: '1rem', md: '1.125rem' },
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.7,
            }}
          >
            AI agents that conduct concierge-level conversations, capture complete discovery
            data, route to the right seller, and build memory across every interaction—24/7, on
            any web property.
          </Typography>
        </Box>

        {/* Capabilities Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: { xs: 3, md: 2 },
            mt: 6,
          }}
        >
          {capabilities.map((capability, index) => (
            <CapabilityCard key={index} className="features-card fill-height">
              {/* Image */}
              <Box
                component="img"
                src={capability.image}
                alt={capability.title}
                className="team-member-image-two-2"
                sx={{
                  maxWidth: '100%',
                  display: 'inline-block',
                  marginBottom: '18px',
                  verticalAlign: 'middle',
                }}
              />

              {/* Text Content */}
              <Box
                className="team-block-info-2"
                sx={{
                  gridColumnGap: '12px',
                  gridRowGap: '12px',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  paddingLeft: 0,
                  paddingRight: 0,
                  display: 'flex',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: '1.5rem', md: '1.75rem' },
                    fontWeight: 600,
                    color: 'white',
                    textAlign: 'left',
                    zIndex: 3,
                    position: 'relative',
                  }}
                >
                  {capability.title}
                </Typography>

                <Typography
                  className="text-sm-2 font-sans-inter text-left text-grey"
                  sx={{
                    zIndex: 3,
                    color: '#cecece',
                    fontWeight: 400,
                    position: 'relative',
                    fontSize: '16px',
                    lineHeight: '22px',
                    textAlign: 'left',
                    letterSpacing: '-0.4px',
                    fontFamily: 'Inter, Georgia, sans-serif',
                  }}
                >
                  {capability.description}
                </Typography>
              </Box>
            </CapabilityCard>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default MarketingAgentCapabilities;