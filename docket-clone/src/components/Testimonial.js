import React, { useState, useRef } from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const testimonials = [
    {
      quote: '"Docket has streamlined our processes, enhancing our team\'s efficiency & effectiveness."',
      description:
        'Since implementing Docket, our sales team is seeing viral adoption of the tool and it has drastically reduced the time spent on repetitive tasks and technical inquiries, allowing us to close deals faster and accelerate the sales onboarding process.',
      author: 'James Roth',
      position: 'Chief Revenue Officer at ZoomInfo',
      image: '/james.png',
      colorStart: 'rgba(255, 93, 77, 0.6)',
      colorEnd: 'rgba(147, 197, 253, 0.6)',
    },
    {
      quote: '"Fast-Tracked RFPs, Accurate Answers: This Is What the Future Looks Like"',
      description:
        'When they first saw it, someone literally exclaimed, "I can\'t actually believe what I\'m seeing". RFPs play a big part in our sales process at Pathify, demanding a lot of time and effort from multiple teams. Our team was thrilled to discover Docket.',
      author: 'Matt Hammond',
      position: 'CRO, Pathify',
      image: '/matt.png',
      colorStart: 'rgba(255, 93, 77, 0.6)',
      colorEnd: 'rgba(98, 58, 254, 0.6)',
    },
    {
      quote: '"My team got up to speed in just a few hours."',
      description:
        'Sales Enablement tools have an unusually long implementation time, and I hate that. But with Docket, it\'s been an absolute breeze. My team got up to speed in just a few hours. It\'s not just the product itself that has me excited, but the future plans too. Docket is game-changing. It\'s the first time I\'ve seen an enablement tool that makes us rethink how we do our jobs.',
      author: 'Krati Seth',
      position: 'Head of Global Sales Enablement, Whatfix',
      image: '/krathi.png',
      colorStart: 'rgba(98, 58, 254, 0.6)',
      colorEnd: 'rgba(147, 197, 253, 0.6)',
    },
    {
      quote: '"Now we have a single, centralized source that is able to scale and handle what 12 people were doing"',
      description:
        'We do quarterly 360s for all of the assigned sales reps, and for the last three quarters we haven\'t seen one sales rep say that their SE is slow to respond to things. The perception from the sales reps on how we\'re supporting them has drastically improved.',
      author: 'Jack Torlucci',
      position: 'Director, Solutions Consulting at Demandbase',
      image: '/jack.png',
      colorStart: 'rgba(147, 197, 253, 0.6)',
      colorEnd: 'rgba(255, 93, 77, 0.6)',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev === 0 ? testimonials.length - 1 : prev - 1;
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev === testimonials.length - 1 ? 0 : prev + 1;
      return newIndex;
    });
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#181818',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container
        maxWidth={false}
        className="container"
        sx={{
          maxWidth: '1136px',
          padding: 0,
        }}
      >
        <Box
          className="wrapper-hp"
          sx={{
            flexFlow: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginTop: '70px',
            display: 'flex',
          }}
        >
          <Box
            className="testimonial_content"
            sx={{
              gridColumnGap: '60px',
              gridRowGap: '60px',
              flexFlow: 'column',
              alignItems: 'center',
              width: '100%',
              display: 'flex',
            }}
          >
            {/* Slider */}
            <Box
              className="slider-2 w-slider"
              sx={{
                backgroundColor: 'transparent',
                justifyContent: 'center',
                alignItems: 'center',
                width: { xs: '700px', md: '1000px' },
                height: 'auto',
                minHeight: '600px',
                display: 'flex',
                position: 'relative',
              }}
            >
              {/* Slider Mask */}
              <Box
                className="mask-3 w-slider-mask"
                ref={sliderRef}
                sx={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                }}
              >
                {/* Slider Track */}
                <Box
                  sx={{
                    display: 'flex',
                    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: `translateX(-${currentIndex * 100}%)`,
                    height: '100%',
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <Box
                      key={index}
                      className="w-slide"
                      sx={{
                        width: '100%',
                        height: '100%',
                        flexShrink: 0,
                        display: 'inline-block',
                        verticalAlign: 'top',
                        whiteSpace: 'normal',
                      }}
                    >
                      {/* Testimonial Slider Center Aligner */}
                      <Box
                        className="testimonial_slider-center-aligner"
                        sx={{
                          justifyContent: 'center',
                          width: '100%',
                          height: 'auto',
                          paddingTop: '60px',
                          paddingBottom: '60px',
                          display: 'flex',
                        }}
                      >
                        {/* Color Holder - Creates colored shadow */}
                        <Box
                          className="testimonial_color-holder"
                          sx={{
                            borderRadius: '16px',
                            width: '85%',
                            maxWidth: '85%',
                            padding: '20px',
                            position: 'relative',
                            boxShadow: index === currentIndex
                              ? '0 0 40px 10px rgba(255, 93, 77, 0.5), 0 0 40px 10px rgba(98, 58, 254, 0.5)'
                              : 'none',
                            transition: 'box-shadow 0.5s ease',
                          }}
                        >
                          {/* Testimonial Slide */}
                          <Box
                            className="testimonial_slide shadow"
                            sx={{
                              gridColumnGap: '24px',
                              gridRowGap: '24px',
                              backgroundColor: '#181818',
                              border: '1px solid #2e2e2e',
                              borderRadius: '20px',
                              flexFlow: 'column',
                              width: '100%',
                              padding: '32px',
                              display: 'flex',
                              zIndex: 2,
                              position: 'relative',
                              boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.4)',
                            }}
                          >
                            {/* Quote */}
                            <Typography
                              className="text-2lg-2 font-display-lausanne tracking-0-1rem text-left"
                              sx={{
                                color: 'var(--system-white)',
                                fontWeight: 600,
                                fontSize: '36px',
                                lineHeight: '40px',
                                textAlign: 'left',
                                letterSpacing: '-0.1rem',
                                fontFamily: 'Inter, Georgia, sans-serif',
                              }}
                            >
                              {testimonial.quote}
                            </Typography>

                            {/* Description */}
                            <Typography
                              className="text-md-3-homepage font-sans-inter text-left text-grey"
                              sx={{
                                color: '#cecece',
                                fontSize: { xs: '16px', md: '18px' },
                                lineHeight: '28px',
                                textAlign: 'left',
                                letterSpacing: '-0.4px',
                                fontFamily: 'Inter, Georgia, sans-serif',
                              }}
                            >
                              {testimonial.description}
                            </Typography>

                            {/* Author Info */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                              {/* Image Div */}
                              <Box
                                className="testimonial_image-div shadow"
                                sx={{
                                  backgroundImage: 'linear-gradient(#fff, #e5e5e5)',
                                  borderRadius: '16px',
                                  width: '72px',
                                  height: '72px',
                                  padding: '6px',
            
                                }}
                              >
                                <Box
                                  component="img"
                                  src={testimonial.image}
                                  alt={testimonial.author}
                                  className="testimonial_image shadow"
                                  sx={{
                                    borderRadius: '16px',
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    filter: 'grayscale(100%)',

                                  }}
                                />
                              </Box>

                              {/* Content Div */}
                              <Box
                                className="testimonial_content-div left-align"
                                sx={{
                                  gridColumnGap: '8px',
                                  gridRowGap: '8px',
                                  flex: '0 auto',
                                  justifyContent: 'flex-start',
                                  alignSelf: 'center',
                                  alignItems: 'flex-start',
                                  marginLeft: '10px',
                                  display: 'flex',
                                  flexFlow: 'column',
                                }}
                              >
                                <Typography
                                  sx={{
                                    color: 'white',
                                    fontSize: '18px',
                                    fontWeight: 600,
                                    fontFamily: 'Inter, Georgia, sans-serif',
                                  }}
                                >
                                  {testimonial.author}
                                </Typography>
                                <Typography
                                  sx={{
                                    color: '#cecece',
                                    fontSize: '16px',
                                    fontFamily: 'Inter, Georgia, sans-serif',
                                  }}
                                >
                                  {testimonial.position}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Navigation Arrows */}
              <IconButton
                onClick={handlePrev}
                sx={{
                  position: 'absolute',
                  left: { xs: '20px', md: '40px' },
                  top: '50%',
                  transform: 'translateY(-50%)',
                  bgcolor: 'white',
                  color: '#181818',
                  width: { xs: 48, md: 56 },
                  height: { xs: 48, md: 56 },
                  borderRadius: '12px',
                  zIndex: 10,
                  '&:hover': {
                    bgcolor: '#f0f0f0',
                  },
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </IconButton>

              <IconButton
                onClick={handleNext}
                sx={{
                  position: 'absolute',
                  right: { xs: '20px', md: '40px' },
                  top: '50%',
                  transform: 'translateY(-50%)',
                  bgcolor: 'white',
                  color: '#181818',
                  width: { xs: 48, md: 56 },
                  height: { xs: 48, md: 56 },
                  borderRadius: '12px',
                  zIndex: 10,
                  '&:hover': {
                    bgcolor: '#f0f0f0',
                  },
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialSlider;