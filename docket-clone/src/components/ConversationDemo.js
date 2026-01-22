import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const GradientText = styled('span')({
  background: 'linear-gradient(90deg, rgba(248, 175, 173, 1) 0%, rgba(227, 177, 195, 1) 33%, rgba(217, 177, 201, 1) 66%, rgba(172, 184, 249, 1) 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
});

const BorderHoverDiv = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgb(53, 53, 53)',
  width: 'auto',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'rgb(85, 85, 85)',
  borderRadius: '20px',
  padding: '1px',
  transition: 'background 0.3s ease',
  position: 'relative',
  '&:hover': {
    backgroundImage: 'linear-gradient(rgb(82, 114, 250), rgb(255, 93, 77))',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(128, 128, 128, 0.3)',
    borderRadius: '20px',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    pointerEvents: 'none',
    zIndex: 10,
  },
}));

const CardLink = styled(Box)(({ theme }) => ({
  color: 'rgb(237, 237, 237)',
  cursor: 'pointer',
  backgroundColor: 'rgb(20, 20, 20)',
  width: '100%',
  position: 'relative',
  borderRadius: '20px',
  padding: 0,
  textDecoration: 'none',
  transition: '0.3s',
  overflow: 'hidden',
  '&:hover': {
    backgroundColor: 'rgb(26, 26, 26)',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 20px',
  },
}));

const CardContent = styled(Box)(({ theme }) => ({
  boxSizing: 'border-box',
  columnGap: '16px',
  rowGap: '16px',
  aspectRatio: 'auto',
  backgroundColor: 'rgba(24, 24, 24, 0)',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  display: 'flex',
  position: 'relative',
  borderRadius: '20px',
  flexDirection: 'column',
  padding: '60px 40px 40px',
  textDecoration: 'none',
  transition: '0.2s',
  overflow: 'hidden',
}));

const DecorativeSVG = styled('img')({
  position: 'absolute',
  top: '-120px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100%',
  maxWidth: '400px',
  height: 'auto',
  zIndex: 0,
  opacity: 0.4,
  filter: 'brightness(0.6)',
  transition: 'all 0.3s ease',
});

const ConversationDemo = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#181818',
        px: { xs: 2, md: 0 },
      }}
    >
      <Container 
        maxWidth={false}
        sx={{
          maxWidth: { xs: '100%', md: '75%' },
          px: { xs: 2, md: 3 },
        }}
      >
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Box
            sx={{
              display: 'inline-block',
              px: 3,
              py: 1,
              borderRadius: '100px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              mb: 4,
            }}
          >
            <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
              Built for GTM teams
            </Typography>
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '3rem', md: '3.8rem' },
              fontWeight: 500,
              mb: 3,
              ml: { xs: 0, md: 8 },
              mr: { xs: 0, md: 8 },
              color: 'white',
            }}
          >
            Website conversations that <GradientText>drive revenue</GradientText>
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
            Docket's AI agent handles qualification, discovery, and booking while you sleep.
            <br />
            Teams see 30%+ more qualified pipeline from the same traffic.
          </Typography>
        </Box>

        {/* Demo Cards */}
        <Box
          className="agents_grid"
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            columnGap: '16px',
            rowGap: '16px',
            gridTemplateRows: 'auto',
            gridAutoColumns: '1fr',
            mt: 8,
            '&:hover .agents_border-hover-div:not(:hover)::before': {
              opacity: 1,
            },
            '&:hover .agents_border-hover-div:not(:hover) .decorative-svg': {
              opacity: 0.2,
              filter: 'brightness(0.4)',
            },
            '& .agents_border-hover-div:hover .decorative-svg': {
              opacity: 0.8,
              filter: 'brightness(1.2)',
            },
          }}
        >
          {/* Pipeline Card */}
          <BorderHoverDiv className="agents_border-hover-div">
            <CardLink className="agent_link-block">
              <CardContent className="agents_card fill-height">
                <Box
                  sx={{
                    position: 'absolute',
                    top: -50,
                    right: -50,
                    width: 200,
                    height: 200,
                    background: 'radial-gradient(circle, rgba(237, 139, 254, 0.1) 0%, transparent 70%)',
                    borderRadius: '50%',
                  }}
                />

                <Box sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 3,
                    }}
                  >
                    <Box
                      className="tag is--transparent center"
                      sx={{
                        display: 'inline-block',
                        px: 2,
                        py: 0.5,
                        borderRadius: '12px',
                        bgcolor: 'rgba(255, 255, 255, 0.12)',
                      }}
                    >
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          color: 'rgb(237, 237, 237)', 
                          fontWeight: 600,
                          textAlign: 'center',
                        }}
                      >
                        Improve seller efficiency by 33%
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    className="text-2lg-2 weight-bold text-center text-white"
                    variant="h4"
                    sx={{
                      fontSize: { xs: '32px', md: '36px' },
                      fontWeight: 600,
                      mb: 2,
                      color: 'white',
                      lineHeight: '40px',
                      letterSpacing: '-1px',
                      textAlign: 'center',
                    }}
                  >
                    Pipeline you can measure
                  </Typography>

                  <Typography
                    className="text-md-3-homepage font-sans-inter max-width-md text-light-grey"
                    variant="body1"
                    sx={{
                      color: 'rgb(180, 180, 180)',
                      mb: 4,
                      lineHeight: 1.7,
                      textAlign: 'center',
                      fontSize: { xs: '16px', md: '16px' },
                      fontFamily: 'Inter, Georgia, sans-serif',
                      letterSpacing: '-0.4px',
                      maxWidth: '600px',
                      alignSelf: 'center',
                      mx: 'auto',
                    }}
                  >
                    Track every conversation from first question to closed deal. Full
                    attribution, complete discovery data.
                  </Typography>

                  <Box
                    sx={{
                      position: 'relative',
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 3,
                      px: { xs: 2, md: 5 },
                      mt: 6,
                    }}
                  >
                    <DecorativeSVG
                      className="decorative-svg"
                      src="https://cdn.prod.website-files.com/64b81d5300b4d493cead41a3/6821c12ff32347a2550ca539_Visuals%20Repository%20Decor.svg"
                      alt=""
                    />
                    <Box
                      component="img"
                      src="/img1.png"
                      alt="Pipeline tracking"
                      className="agents_internal-image no-margin"
                      sx={{
                        aspectRatio: '1 / 1',
                        objectFit: 'contain',
                        width: 'auto',
                        maxWidth: '100%',
                        height: 'auto',
                        marginTop: 0,
                        position: 'relative',
                        zIndex: 1,
                        borderRadius: '16px',
                      }}
                    />
                  </Box>
                </Box>
              </CardContent>
            </CardLink>
          </BorderHoverDiv>

          {/* Engagement Card */}
          <BorderHoverDiv className="agents_border-hover-div">
            <CardLink className="agent_link-block">
              <CardContent className="agents_card fill-height">
                <Box
                  sx={{
                    position: 'absolute',
                    top: -50,
                    left: -50,
                    width: 200,
                    height: 200,
                    background: 'radial-gradient(circle, rgba(147, 197, 253, 0.1) 0%, transparent 70%)',
                    borderRadius: '50%',
                  }}
                />

                <Box sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 3,
                    }}
                  >
                    <Box
                      className="tag is--transparent center"
                      sx={{
                        display: 'inline-block',
                        px: 2,
                        py: 0.5,
                        borderRadius: '12px',
                        bgcolor: 'rgba(255, 255, 255, 0.12)',
                      }}
                    >
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          color: 'rgb(237, 237, 237)', 
                          fontWeight: 600,
                          textAlign: 'center',
                        }}
                      >
                        Increase marketing pipeline by 15%
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    className="text-2lg-2 weight-bold text-center text-white"
                    variant="h4"
                    sx={{
                      fontSize: { xs: '32px', md: '36px' },
                      fontWeight: 600,
                      mb: 2,
                      color: 'white',
                      lineHeight: '40px',
                      letterSpacing: '-1px',
                      textAlign: 'center',
                    }}
                  >
                    Always-on engagement
                  </Typography>

                  <Typography
                    className="text-md-3-homepage font-sans-inter max-width-md text-light-grey"
                    variant="body1"
                    sx={{
                      color: 'rgb(180, 180, 180)',
                      mb: 4,
                      lineHeight: 1.7,
                      textAlign: 'center',
                      fontSize: { xs: '16px', md: '16px' },
                      fontFamily: 'Inter, Georgia, sans-serif',
                      letterSpacing: '-0.4px',
                      maxWidth: '600px',
                      alignSelf: 'center',
                      mx: 'auto',
                    }}
                  >
                    Every visitor gets instant, expert attention, nights, weekends,
                    whenever they're ready to buy.
                  </Typography>

                  <Box
                    sx={{
                      position: 'relative',
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 3,
                      px: { xs: 2, md: 5 },
                      mt: 6,
                    }}
                  >
                    <DecorativeSVG
                      className="decorative-svg"
                      src="https://cdn.prod.website-files.com/64b81d5300b4d493cead41a3/6821c12ff32347a2550ca539_Visuals%20Repository%20Decor.svg"
                      alt=""
                    />
                    <Box
                      component="img"
                      src="/img2.png"
                      alt="Always-on engagement"
                      className="agents_internal-image no-margin"
                      sx={{
                        aspectRatio: '1 / 1',
                        objectFit: 'contain',
                        width: 'auto',
                        maxWidth: '100%',
                        height: 'auto',
                        marginTop: 0,
                        position: 'relative',
                        zIndex: 1,
                        borderRadius: '16px',
                      }}
                    />
                  </Box>
                </Box>
              </CardContent>
            </CardLink>
          </BorderHoverDiv>
        </Box>
      </Container>
    </Box>
  );
};

export default ConversationDemo;