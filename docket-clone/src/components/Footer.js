import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  Button,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const GradientText = styled('span')({
  background: 'linear-gradient(90deg, #ed8bfe 0%, #93c5fd 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

const Footer = () => {
  const footerLinks = {
    Solutions: ['For Marketing'],
    Platform: ['Platform Architecture', 'Security', 'Accuracy', 'Integrations'],
    Resources: [
      'Rethink:Revenue Podcast',
      'Blog',
      'Glossary',
      'Events',
      'Video Library',
      'FAQs',
      'ChatGPT Prompts for Marketing',
    ],
    'Customer Stories': ['ZoomInfo', 'Demandbase', 'Whatfix'],
  };

  return (
    <Box component="footer" sx={{ bgcolor: '#000' }}>
      {/* ================= CTA SECTION ================= */}
      <Box
        className="wrapper-hp"
        sx={{
          py: { xs: 10, md: 14 },
          display: 'flex',
          justifyContent: 'center',
          background: `
            radial-gradient(
              ellipse at center,
              rgba(237,139,254,0.18) 0%,
              rgba(147,197,253,0.12) 35%,
              rgba(0,0,0,0.95) 65%,
              #000 100%
            )
          `,
        }}
      >
        <Box
          className="cta_content"
          sx={{
            maxWidth: '60%',
            textAlign: 'center',
            '@media (max-width: 991px)': {
              maxWidth: '100%',
            },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.8rem', sm: '3.6rem', md: '5.2rem' },
              fontWeight: 500,
              lineHeight: 1.05,
              color: '#fff',
            }}
          >
            Don&apos;t take our word for it.
            <br />
            <span className="font-serif-italic-pp-2">
              <GradientText>See it in action.</GradientText>
            </span>
          </Typography>

          <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center' }}>
            <Button
              component="a"
              href="https://www.docket.io/request-for-demo"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                bgcolor: '#fff',
                color: '#000',
                px: 5,
                py: 1.8,
                borderRadius: '999px',
                fontWeight: 500,
                textTransform: 'none',
                '&:hover': { bgcolor: '#f0f0f0' },
              }}
            >
              Book a demo
            </Button>
          </Box>
        </Box>
      </Box>

      {/* ================= FOOTER CONTENT ================= */}
      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 9 } }}>
        <Grid container columnSpacing={6} rowSpacing={5}>
          {/* Logo + Address + Social Icons */}
          <Grid item xs={12} md={3}>
            <Typography sx={{ fontSize: '1.8rem', fontWeight: 700, mb: 3 }}>
              docket
            </Typography>

            <Typography sx={{ mb: 0.5 }}>
              567 University Ave,
            </Typography>
            <Typography sx={{ mb: 3 }}>
              Palo Alto, CA 94301
            </Typography>

            {/* Social Icons */}
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton sx={{ color: '#fff' }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton sx={{ color: '#fff' }}>
                <InstagramIcon />
              </IconButton>
              <IconButton sx={{ color: '#fff' }}>
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Footer Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <Grid item xs={6} sm={4} md={2.25} key={title}>
              <Typography sx={{ fontWeight: 600, mb: 2 }}>
                {title}
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.6 }}>
                {links.map((item) => (
                  <Link
                    key={item}
                    href="#"
                    underline="none"
                    sx={{
                      color: '#fff',
                      fontSize: '0.9rem',
                      opacity: 0.8,
                      '&:hover': { opacity: 1 },
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* ================= BOTTOM BAR ================= */}
        <Box
          sx={{
            mt: 8,
            pt: 4,
            borderTop: '1px solid rgba(255,255,255,0.12)',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography sx={{ fontSize: '0.875rem', opacity: 0.8 }}>
            © 2025 Docket Inc. All rights reserved.
          </Typography>

          <Box sx={{ display: 'flex', gap: 3 }}>
            {['About', 'Careers', 'Terms', 'Privacy', 'Cookies'].map((item) => (
              <Link
                key={item}
                href="#"
                underline="none"
                sx={{
                  color: '#fff',
                  fontSize: '0.875rem',
                  opacity: 0.8,
                  '&:hover': { opacity: 1 },
                }}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
