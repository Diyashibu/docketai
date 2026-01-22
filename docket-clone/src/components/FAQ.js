import React, { useState } from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const FAQ = () => {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      question: "What exactly is Docket's Marketing Agent?",
      answer:
        "Docket is an AI agent that lives on your website, qualifying and converting visitors 24/7. It asks discovery questions, books meetings with your team, and logs everything to your CRM—automatically. Deploy in under 10 days.",
    },
    {
      question: 'How is this different from Drift or Intercom?',
      answer:
        "Chat tools capture leads. Docket generates pipeline. It conducts 14-18 minute qualification conversations, captures complete discovery data, and delivers 30% more qualified opportunities. Account-aware, content-grounded, brand-governed. Not a bot.",
    },
    {
      question: 'How fast can we go live?',
      answer:
        'Under 24 hours. Install the agent, connect your CRM, set qualification rules. Start seeing qualified conversations immediately.',
    },
    {
      question: 'What about our data?',
      answer:
        "Docket doesn't train on your proprietary data. Context is processed in real-time, siloed, then discarded. SOC 2 compliant, GDPR ready.",
    },
    {
      question: 'How do we measure this?',
      answer:
        'Pipeline dollars generated. Sales-qualified conversations. Conversation quality scores. Time-to-first-qualified-lead. Full attribution from visitor to opportunity. A/B testing built in. Revenue metrics, not vanity metrics.',
    },
    {
      question: 'Security?',
      answer:
        'Enterprise-grade. Data encrypted in transit and at rest. Strict access controls. Customer environment isolation. Your data flows to your CRM under your control. SOC 2, GDPR compliant.',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#181818',
      }}
    >
      <Container maxWidth="md">
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
          Frequently Asked Questions
        </Typography>

        {/* FAQ Accordion */}
        <Box sx={{ mb: 4 }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={`panel${index + 1}`}
              expanded={expanded === `panel${index + 1}`}
              onChange={handleChange(`panel${index + 1}`)}
              elevation={0}
              sx={{
                bgcolor: 'transparent',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                '&:before': {
                  display: 'none',
                },
                '&.Mui-expanded': {
                  margin: 0,
                },
                '&:last-child': {
                  borderBottom: 'none',
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      bgcolor: 'rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    {expanded === `panel${index + 1}` ? (
                      <RemoveIcon sx={{ color: 'white', fontSize: 20 }} />
                    ) : (
                      <AddIcon sx={{ color: 'white', fontSize: 20 }} />
                    )}
                  </Box>
                }
                sx={{
                  py: 3,
                  px: 0,
                  '& .MuiAccordionSummary-content': {
                    margin: 0,
                    pr: 2,
                  },
                  '&:hover': {
                    '& .MuiTypography-root': {
                      color: 'white',
                    },
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: expanded === `panel${index + 1}` ? 'white' : '#e0e0e0',
                    fontSize: { xs: '1.125rem', md: '1.25rem' },
                    fontWeight: 600,
                    transition: 'color 0.3s ease',
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  px: 0,
                  pb: 3,
                  pt: 0,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: '#b2bbc8',
                    lineHeight: 1.7,
                    fontSize: { xs: '1rem', md: '1.125rem' },
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ;