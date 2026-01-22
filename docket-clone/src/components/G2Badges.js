import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';

const GradientDocket = styled('span')({
  background: 'linear-gradient(90deg, rgba(251, 174, 169, 1) 0%, rgba(232, 176, 188, 1) 10%, rgba(222, 177, 198, 1) 20%, rgba(154, 128, 146, 1) 30%, rgba(208, 179, 212, 1) 40%, rgba(217, 178, 203, 1) 50%, rgba(202, 180, 218, 1) 60%, rgba(190, 181, 230, 1) 70%, rgba(173, 183, 246, 1) 80%, rgba(174, 183, 246, 1) 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
});

const G2Badges = () => {
  return (
    <Box
      className="section-duplicate vertical-padding-md"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: '20px', md: '40px' },
        bgcolor: '#181818',
      }}
    >
      <Container 
        maxWidth={false}
        className="container"
        sx={{
          maxWidth: '75%',
          padding: 0,
          mx: 'auto',
        }}
      >
        {/* Desktop Layout - Badges flanking content */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 5,
            width: '100%',
          }}
        >
          {/* Left Badges */}
          <Box
            sx={{
              display: 'flex',
              gap: 4,
              alignItems: 'flex-start',
              flexShrink: 0,
            }}
          >
            <Box sx={{ width: '160px' }}>
              <img src="/img6.png" alt="High Performer Asia" style={{ width: '100%', display: 'block' }} />
            </Box>
            <Box sx={{ width: '140px' }}>
              <img src="/img7.png" alt="High Performer Mid-Market" style={{ width: '100%', display: 'block' }} />
            </Box>
          </Box>

          {/* Center Content */}
          <Box
            sx={{
              flex: '0 1 auto',
              textAlign: 'center',
              maxWidth: '550px',
              px: 2,
            }}
          >
            {/* Header */}
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', md: '3rem' },
                fontWeight: 700,
                mb: 2,
                color: 'white',
                lineHeight: 1.2,
              }}
            >
              Revenue leaders love{' '}
              <GradientDocket>Docket</GradientDocket>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#b2bbc8',
                fontSize: '1rem',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.7,
                mb: 4,
              }}
            >
              Teams that use Docket see viral adoption of the product and claim they "can't
              imagine life without it"
            </Typography>

            {/* G2 Rating Card */}
            <Box
              sx={{
                display: 'inline-flex',
                bgcolor: 'rgba(60, 60, 60, 0.4)',
                borderRadius: '32px',
                p: '6px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  bgcolor: 'rgba(0, 0, 0, 0.5)',
                  borderRadius: '28px',
                  border: '2px solid rgba(255, 255, 255, 0.15)',
                  px: 5,
                  py: 3,
                  alignItems: 'center',
                  gap: 2.5,
                }}
              >
                {/* G2 Logo */}
                <Box
                  sx={{
                    width: 55,
                    height: 55,
                    borderRadius: '50%',
                    bgcolor: '#ff492c',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 16px rgba(255, 73, 44, 0.4)',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '1.5rem',
                    }}
                  >
                    G2
                  </Typography>
                </Box>

                {/* Star Rating */}
                <Box sx={{ display: 'flex', gap: 0.5 }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon
                      key={star}
                      sx={{
                        color: '#ffa500',
                        fontSize: '1.8rem',
                      }}
                    />
                  ))}
                </Box>

                {/* Rating Number */}
                <Typography
                  variant="h3"
                  sx={{
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '3.5rem',
                    lineHeight: 1,
                  }}
                >
                  4.8
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Right Badges */}
          <Box
            sx={{
              display: 'flex',
              gap: 4,
              alignItems: 'flex-start',
              flexShrink: 0,
            }}
          >
            <Box sx={{ width: '140px' }}>
              <img src="/img7.png" alt="High Performer" style={{ width: '100%', display: 'block' }} />
            </Box>
            <Box sx={{ width: '160px' }}>
              <img src="/img6.png" alt="High Performer Asia Pacific" style={{ width: '100%', display: 'block' }} />
            </Box>
          </Box>
        </Box>

        {/* Mobile Layout - Content on top, badges below */}
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
          {/* Content */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: '2.5rem',
                fontWeight: 700,
                mb: 2,
                color: 'white',
                lineHeight: 1.2,
              }}
            >
              Revenue leaders love{' '}
              <GradientDocket>Docket</GradientDocket>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#b2bbc8',
                fontSize: '1rem',
                lineHeight: 1.7,
                mb: 4,
                px: 2,
              }}
            >
              Teams that use Docket see viral adoption of the product and claim they "can't
              imagine life without it"
            </Typography>

            {/* G2 Rating Card */}
            <Box
              sx={{
                display: 'inline-flex',
                bgcolor: 'rgba(60, 60, 60, 0.4)',
                borderRadius: '32px',
                p: '6px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  bgcolor: 'rgba(0, 0, 0, 0.5)',
                  borderRadius: '28px',
                  border: '2px solid rgba(255, 255, 255, 0.15)',
                  px: 4,
                  py: 3,
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    bgcolor: '#ff492c',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '1.4rem',
                    }}
                  >
                    G2
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 0.5 }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon
                      key={star}
                      sx={{
                        color: '#ffa500',
                        fontSize: '1.75rem',
                      }}
                    />
                  ))}
                </Box>

                <Typography
                  sx={{
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '3rem',
                    lineHeight: 1,
                  }}
                >
                  4.8
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Badges Row */}
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              justifyContent: 'center',
              alignItems: 'flex-start',
              width: '100%',
              px: 2,
            }}
          >
            <Box sx={{ width: '25%', minWidth: '110px' }}>
              <img src="/img6.png" alt="High Performer Asia" style={{ width: '100%', display: 'block' }} />
            </Box>
            <Box sx={{ width: '20%', minWidth: '90px', ml: 1 }}>
              <img src="/img6.png" alt="High Performer Asia Pacific" style={{ width: '100%', display: 'block' }} />
            </Box>
            <Box sx={{ width: '20%', minWidth: '90px', ml: 2 }}>
              <img src="/img7.png" alt="High Performer" style={{ width: '100%', display: 'block' }} />
            </Box>
            <Box sx={{ width: '25%', minWidth: '110px', ml: 1 }}>
              <img src="/img7.png" alt="High Performer Mid-Market" style={{ width: '100%', display: 'block' }} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default G2Badges;