import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Integrations = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#181818',
      }}
    >
      <Container 
        maxWidth={false}
        sx={{
          maxWidth: { xs: '100%', md: '65%' },
          px: { xs: 2, md: 3 },
        }}
      >
        {/* Title Holder */}
        <Box 
          className="title-holder-2-onboarding-page"
          sx={{
            gridColumnGap: '11px',
            gridRowGap: '11px',
            flexFlow: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            maxWidth: 'none',
            display: 'flex',
            mb: 6,
          }}
        >
          {/* Section Badge */}
          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Box
              sx={{
                display: 'inline-block',
                px: 3,
                py: 1,
                borderRadius: '100px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
                Integrations
              </Typography>
            </Box>
          </Box>

          {/* Title */}
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.75rem', md: '2.5rem' },
              fontWeight: 700,
              textAlign: 'center',
              color: 'white',
              lineHeight: 1.2,
            }}
          >
            Integrates nicely with your entire tech stack
          </Typography>
        </Box>

        {/* Integration Image Section */}
        <Box
          className="image-section_content no-border"
          sx={{
            backgroundColor: 'transparent',
            borderRadius: '20px',
            flexFlow: 'column',
            alignItems: 'center',
            width: '100%',
            padding: { xs: '20px', md: '40px' },
            display: 'flex',
            mb: 4,
          }}
        >
          <Box
            className="image-section_integrations"
            sx={{
              width: '100%',
              display: 'block',
            }}
          >
            <img 
              src="/img8.png" 
              alt="Integrations" 
              style={{
                maxWidth: '100%',
                display: 'block',
                margin: '0 auto',
              }}
            />
          </Box>
        </Box>

        {/* CTA Section - Same width as image */}
        <Box
          sx={{
            width: '100%',
            px: { xs: '20px', md: '40px' },
          }}
        >
          <Box
            className="skl_cta"
            sx={{
              justifyContent: 'flex-start',
              alignItems: 'center',
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              gap: 4,
            }}
          >
          {/* Description */}
          <Box
            className="text-md-3-homepage font-sans-inter max-width-md text-left text-light-grey"
            sx={{
              color: '#cecece',
              flex: '1',
              fontSize: '16px',
              lineHeight: '28px',
              letterSpacing: '-0.4px',
              fontFamily: 'Inter, Georgia, sans-serif',
              textAlign: 'left',
            }}
          >
            Docket integrates with over a 100 tools to unify sales knowledge and prepare you
            for a company-wide implementation in less than a month
          </Box>

          {/* CTA Button */}
          <Box
            component="a"
            href="/integrations"
            className="btn-primary w-inline-block"
            sx={{
              gridColumnGap: '6px',
              gridRowGap: '6px',
              boxShadow: 'none',
              color: 'var(--system-black)',
              letterSpacing: '-0.5px',
              backgroundColor: '#ededed',
              borderRadius: '16px',
              justifyContent: 'center',
              alignItems: 'center',
              width: '160px',
              minWidth: '160px',
              padding: '12px 24px',
              fontFamily: 'Inter, Georgia, sans-serif',
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: '1.5em',
              textDecoration: 'none',
              transition: 'all 0.2s',
              display: 'flex',
              cursor: 'pointer',
              color:'black',
              flexShrink: 0,
              '&:hover': {
                backgroundColor: '#ffffff',
              },
            }}
          >
            Learn more
          </Box>
        </Box>
      </Box>
      </Container>
    </Box>
  );
};

export default Integrations;