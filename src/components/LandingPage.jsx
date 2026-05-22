import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  AppBar,
  Toolbar,
  Stack,
  Paper,
} from "@mui/material";
import {
  LocalShipping,
  Security,
  Speed,
  Support,
  TrendingUp,
  Public,
} from "@mui/icons-material";

const ServiceCard = ({ Icon, title, description }) => (
  <Card
    sx={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      p: 3,
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      transition: "transform 0.3s, boxShadow 0.3s",
      "&:hover": {
        transform: "translateY(-8px)",
        boxShadow: "0 8px 24px rgba(0,102,204,0.2)",
      },
    }}
  >
    <Box sx={{ mb: 2 }}>
      <Icon sx={{ fontSize: 40, color: "#0066cc" }} />
    </Box>
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

const LandingPage = () => {
  const services = [
    {
      Icon: LocalShipping,
      title: "Global Shipping",
      description: "Reliable shipping services to over 180 countries worldwide",
    },
    {
      Icon: Speed,
      title: "Fast Delivery",
      description: "Express delivery options to get your cargo moving quickly",
    },
    {
      Icon: Security,
      title: "Secure Tracking",
      description:
        "Real-time tracking and insurance coverage for peace of mind",
    },
    {
      Icon: TrendingUp,
      title: "Cost Effective",
      description:
        "Competitive rates and transparent pricing with no hidden fees",
    },
    {
      Icon: Support,
      title: "24/7 Support",
      description: "Expert support team available around the clock",
    },
    {
      Icon: Public,
      title: "Custom Solutions",
      description: "Tailored shipping solutions for your specific needs",
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f5f7fa" }}>
      {/* Navigation Bar */}
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "#ffffff", color: "#000" }}
      >
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
            <LocalShipping sx={{ fontSize: 32, color: "#0066cc", mr: 1 }} />
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#0066cc",
                fontSize: "1.5rem",
              }}
            >
              Simon Ships
            </Typography>
          </Box>
          <Stack direction="row" spacing={2}>
            <Button color="inherit" sx={{ "&:hover": { color: "#0066cc" } }}>
              Services
            </Button>
            <Button color="inherit" sx={{ "&:hover": { color: "#0066cc" } }}>
              About
            </Button>
            <Button color="inherit" sx={{ "&:hover": { color: "#0066cc" } }}>
              Contact
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#0066cc",
                "&:hover": { backgroundColor: "#0052a3" },
              }}
            >
              Get Quote
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #0066cc 0%, #004a99 100%)",
          color: "#fff",
          py: { xs: 8, md: 12 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "2rem", md: "3.5rem" },
            }}
          >
            Your Global Shipping Partner
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              opacity: 0.95,
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            Connecting businesses worldwide with reliable, fast, and affordable
            shipping solutions
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#fff",
                color: "#0066cc",
                fontWeight: "bold",
                px: 4,
                py: 1.5,
                "&:hover": { backgroundColor: "#f0f0f0" },
              }}
            >
              Start Shipping Today
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: "#fff",
                color: "#fff",
                fontWeight: "bold",
                px: 4,
                py: 1.5,
                "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              }}
            >
              Learn More
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mb: 6,
            color: "#333",
          }}
        >
          Our Services
        </Typography>
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ServiceCard
                Icon={service.Icon}
                title={service.title}
                description={service.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Why Choose Us Section */}
      <Box sx={{ backgroundColor: "#fff", py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  mb: 3,
                  color: "#333",
                }}
              >
                Why Choose Simon Ships?
              </Typography>
              <Stack spacing={2}>
                {[
                  "20+ years of industry experience",
                  "Trusted by 10,000+ businesses globally",
                  "State-of-the-art tracking technology",
                  "Competitive pricing with no hidden fees",
                  "Dedicated customer success team",
                  "Full insurance coverage included",
                ].map((item, index) => (
                  <Box
                    key={index}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Box
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        backgroundColor: "#0066cc",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                        fontSize: "0.875rem",
                        fontWeight: "bold",
                      }}
                    >
                      ✓
                    </Box>
                    <Typography variant="body1" sx={{ color: "#555" }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                sx={{
                  background:
                    "linear-gradient(135deg, #0066cc 0%, #004a99 100%)",
                  color: "#fff",
                  p: 4,
                  textAlign: "center",
                  borderRadius: 2,
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
                  Ready to Ship?
                </Typography>
                <Typography sx={{ mb: 3, opacity: 0.95 }}>
                  Get started with Simon Ships and experience the difference in
                  global shipping.
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "#fff",
                    color: "#0066cc",
                    fontWeight: "bold",
                    px: 4,
                    py: 1.5,
                    "&:hover": { backgroundColor: "#f0f0f0" },
                  }}
                >
                  Get a Free Quote
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Statistics Section */}
      <Box sx={{ backgroundColor: "#f5f7fa", py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} textAlign="center">
            {[
              { number: "10,000+", label: "Active Customers" },
              { number: "180", label: "Countries Served" },
              { number: "99.2%", label: "On-Time Delivery" },
              { number: "24/7", label: "Customer Support" },
            ].map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: "#0066cc",
                    mb: 1,
                  }}
                >
                  {stat.number}
                </Typography>
                <Typography variant="body1" sx={{ color: "#666" }}>
                  {stat.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          backgroundColor: "#1a1a1a",
          color: "#fff",
          py: 6,
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body1" sx={{ mb: 1 }}>
            © 2024 Simon Ships. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            Connecting businesses worldwide with reliable shipping solutions.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
