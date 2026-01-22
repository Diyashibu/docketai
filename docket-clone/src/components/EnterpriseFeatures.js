import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import AccuracyIcon from '@mui/icons-material/QueryStats';
import IntegrationIcon from '@mui/icons-material/Hub';
import SecurityIcon from '@mui/icons-material/Security';

const FeatureCard = ({ icon, title, description, badge }) => (
  <Paper
    elevation={0}
    sx={{
      background: 'linear-gradient(135deg, #181818 0%, #242424 100%)',
      borderRadius: '20px',
      p: { xs: 3, md: 4 },
      border: '1px solid rgba(255, 255, 255, 0.1)',
      height: '100%',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-5px)',
        borderColor: 'rgba(98, 58, 254, 0.3)',
      },
    }}
  >
    <Box
      sx={{
        width: 56,
        height: 56,
        borderRadius: '12px',
        bgcolor: 'rgba(255, 255, 255, 0.05)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 3,
      }}
    >
      {icon}
    </Box>

    <Typography
      variant="h5"
      sx={{
        fontSize: { xs: '1.25rem', md: '1.5rem' },
        fontWeight: 600,
        mb: 2,
        color: 'white',
      }}
    >
      {title}
    </Typography>

    <Typography
      variant="body1"
      sx={{
        color: '#b2bbc8',
        lineHeight: 1.7,
        fontSize: { xs: '0.95rem', md: '1rem' },
        mb: 3,
      }}
    >
      {description}
    </Typography>

    {badge && (
      <Box
        sx={{
          mt: 'auto',
          pt: 3,
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        {badge}
      </Box>
    )}
  </Paper>
);

const EnterpriseFeatures = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#181818',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          background: 'radial-gradient(circle at top right, rgba(237, 139, 254, 0.05) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 3 }}>
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
              Engineered to perfection
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              mb: 3,
              color: 'white',
            }}
          >
            Built for enterprise GTM teams
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#b2bbc8',
              fontSize: { xs: '1rem', md: '1.125rem' },
              maxWidth: '800px',
              lineHeight: 1.7,
            }}
          >
            Production-ready AI with the accuracy, integrations, and security controls
            revenue teams need.
          </Typography>
        </Box>

        {/* Feature Cards */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)',
            },
            gap: 3,
          }}
        >
          <FeatureCard
            icon={<AccuracyIcon sx={{ fontSize: 32, color: '#b2bbc8' }} />}
            title="Industry-leading accuracy"
            description="Grounded responses with source attribution and confidence scores. Your reps get verified answers, every conversation"
            badge={
              <Box
                sx={{
                  bgcolor: 'rgba(98, 58, 254, 0.1)',
                  borderRadius: '12px',
                  p: 2,
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3rem' },
                    fontWeight: 700,
                    color: '#ed8bfe',
                  }}
                >
                  98%
                </Typography>
                <Typography variant="caption" sx={{ color: '#b2bbc8' }}>
                  Confidence
                </Typography>
              </Box>
            }
          />

          <FeatureCard
            icon={<IntegrationIcon sx={{ fontSize: 32, color: '#b2bbc8' }} />}
            title="100+ native integrations"
            description="Connect your CRM, MAP, calendar, knowledge base, and sales tools. Full tech stack coverage out of the box."
            badge={
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                  flexWrap: 'wrap',
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '8px',
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                  }}
                />
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '8px',
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                  }}
                />
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '8px',
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                  }}
                />
              </Box>
            }
          />

          <FeatureCard
            icon={<SecurityIcon sx={{ fontSize: 32, color: '#b2bbc8' }} />}
            title="Enterprise-grade security"
            description="SOC 2 Type II, GDPR, and ISO 27001 compliant. Data encrypted in transit and at rest. Complete audit trails for every conversation."
            badge={
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <Typography variant="caption" sx={{ color: '#b2bbc8', fontWeight: 700 }}>
                    SOC 2
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <Typography variant="caption" sx={{ color: '#b2bbc8', fontWeight: 700 }}>
                    GDPR
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <Typography variant="caption" sx={{ color: '#b2bbc8', fontWeight: 700, fontSize: '0.65rem' }}>
                    ISO
                  </Typography>
                </Box>
              </Box>
            }
          />
        </Box>
      </Container>
    </Box>
  );
};

export default EnterpriseFeatures;