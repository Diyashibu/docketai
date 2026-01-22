import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const GradientText = styled('span')({
  background: 'linear-gradient(90deg, #c8b3e0 0%, #add9ef 50%, #c8b3e0 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  display: 'inline',
  textShadow: 'none',
});

const HeroSection = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        background: 'radial-gradient(ellipse at center, rgba(68, 41, 59, 1) 0%, rgba(64, 38, 54, 1) 40%, rgba(49, 33, 41, 1) 50%, rgba(0, 0, 0, 1) 100%)',
        pt: { xs: 12, md: 16 },
        pb: { xs: 10, md: 12 },
      }}
    >
      {/* Background Ellipse Decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          height: '100%',
          backgroundImage: 'url(https://cdn.prod.website-files.com/64b81d5f2d8e464f57837a4c/6854065b3c8f8e88b96fffe0_Ellipse%20Decor.svg)',
          backgroundPosition: '50% 0',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          opacity: 0.4,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Top Banner */}
        <Box
          sx={{
            textAlign: 'center',
            mb: 4,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: '#d0d5db',
              fontSize: { xs: '1rem', md: '1.5rem' },
              fontWeight: 400,
            }}
          >
            Unify your GTM data with the{' '}
            <Box
              component="a"
              href="/platform"
              sx={{
                textDecoration: 'underline',
                color: 'white',
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.8,
                },
              }}
            >
              Sales Knowledge Lake™
            </Box>{' '}
            & activate it with powerful, pre-built AI agents
          </Typography>
        </Box>

        {/* Main Heading */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            component="h1"
            sx={{
              fontFamily: 'Inter, Georgia, sans-serif',
              fontWeight: 500,
              textAlign: 'center',
              color: '#e6c9ff',
              fontSize: {
                xs: '4rem',
                sm: '5.5rem',
                md: '7.5rem',
                lg: '8.5rem',
              },
              lineHeight: '1.02',
              letterSpacing: '-0.03em',
              textShadow: `
                0 0 30px rgba(200, 179, 224, 0.35),
                0 0 60px rgba(200, 179, 224, 0.25),
                0 0 100px rgba(200, 179, 224, 0.15)
              `,
              mb: 3,
            }}
          >
         

            <Box
              component="span"
              sx={{
                color: 'rgba(236, 154, 224, 1)',
                textShadow: '0 0 40px rgba(8, 8, 8, 1)',
              }}
            >
              Turn every visit into a qualified meeting{' '}
            </Box>
            {/*<GradientText>into a qualified meeting</GradientText>*/}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: '#b8c5d0',
              fontSize: { xs: '1.05rem', md: '1.25rem' },
              fontWeight: 400,
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            The first sales meeting, delivered by your Marketing Agent—right on
            your homepage.
          </Typography>
        </Box>

        {/* CTA Button */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'white',
              color: '#181818',
              fontSize: { xs: '1rem', md: '1.125rem' },
              px: { xs: 4, md: 5 },
              py: { xs: 1.5, md: 2 },
              borderRadius: '15px',
              fontWeight: 500,
              textTransform: 'none',
              boxShadow: '0 4px 20px rgba(255, 255, 255, 0.15)',
              '&:hover': {
                bgcolor: '#f5f5f5',
                boxShadow: '0 6px 24px rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            Speak with our Agent
          </Button>
        </Box>

        {/* Client Logos */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: { xs: 3, md: 5 },
            flexWrap: 'wrap',
            opacity: 0.7,
          }}
        >
          {['ZoomInfo', 'SecurityPal AI', 'Demandbase', 'STRATA', 'NEWSTORE'].map(
            (company) => (
              <Typography
                key={company}
                sx={{
                  color: 'white',
                  fontSize: { xs: '0.85rem', md: '1rem' },
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                {company}
              </Typography>
            )
          )}
        </Box>
      </Container>

      {/* AI Agent Button (Fixed) */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
        }}
      >
        <Button
          variant="contained"
          sx={{
            bgcolor: 'white',
            color: '#181818',
            px: 4,
            py: 1.5,
            borderRadius: '100px',
            fontSize: '1rem',
            fontWeight: 500,
            textTransform: 'none',
            boxShadow: '0 8px 32px rgba(173, 217, 239, 0.3)',
            border: '2px solid rgba(173, 217, 239, 0.4)',
            '&:hover': {
              bgcolor: '#f5f5f5',
              boxShadow: '0 12px 40px rgba(173, 217, 239, 0.4)',
            },
          }}
          startIcon={
            <Box
              component="span"
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: '#403049',
                animation: 'pulse 2s infinite',
                '@keyframes pulse': {
                  '0%, 100%': {
                    opacity: 1,
                  },
                  '50%': {
                    opacity: 0.5,
                  },
                },
              }}
            />
          }
        >
          Talk to Docket's AI Agent
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;