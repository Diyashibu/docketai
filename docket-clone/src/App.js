import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme';
import './styles.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ConversationDemo from './components/ConversationDemo';
import PremiumExperience from './components/PremiumExperience';
import MarketingAgentCapabilities from './components/MarketingAgentCapabilities';
import SalesKnowledgeLake from './components/SalesKnowledgeLake';
import G2Badges from './components/G2Badges';
import Integrations from './components/Integrations';
import BlogSection from './components/BlogSection';
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ';
import Footer from './components/Footer';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          bgcolor: '#181818',
          minHeight: '100vh',
          color: 'white',
        }}
      >
        <Header />
        <HeroSection />
        <ConversationDemo />
        <PremiumExperience />
        <MarketingAgentCapabilities />
        <SalesKnowledgeLake />
        <G2Badges />
        <Integrations />
        <BlogSection />
        <Testimonial />
        <FAQ />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;