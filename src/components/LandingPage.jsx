import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  AppBar,
  Toolbar,
  Stack,
} from "@mui/material";
import {
  LocalShipping,
  Security,
  Speed,
  Support,
  TrendingUp,
  Public,
  ArrowForward,
  CheckCircle,
} from "@mui/icons-material";

// ── Logo ────────────────────────────────────────────────────────────────────
const ShipLogo = ({ size = 36 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Hull */}
    <path d="M4 27 L20 17 L36 27 L32 34 L8 34 Z" fill="#f59e0b" />
    {/* Bridge superstructure */}
    <rect x="22" y="13" width="10" height="8" rx="1.5" fill="#f59e0b" opacity="0.75" />
    {/* Mast */}
    <line x1="27" y1="5" x2="27" y2="13" stroke="#f59e0b" strokeWidth="1.75" strokeLinecap="round" />
    {/* Radar dish */}
    <circle cx="27" cy="4.5" r="2.5" fill="#f59e0b" />
    {/* Wake waves */}
    <path
      d="M2 36 Q10 31 19 35 Q28 39 38 35"
      stroke="#f59e0b"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      opacity="0.7"
    />
  </svg>
);

// ── Hero ship illustration ──────────────────────────────────────────────────
const ContainerShip = () => {
  const containers1 = [
    "#dc2626", "#2563eb", "#d97706", "#16a34a", "#7c3aed", "#dc2626", "#0891b2",
  ];
  const containers2 = [
    "#2563eb", "#d97706", "#dc2626", "#16a34a", "#7c3aed", "#d97706",
  ];

  return (
    <svg
      viewBox="0 0 900 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", maxWidth: 820 }}
    >
      {/* Ship hull */}
      <path d="M70 268 L830 268 L794 308 L106 308 Z" fill="#1a3254" />
      <path d="M100 270 L800 270 L776 304 L124 304 Z" fill="#223a61" />
      {/* Hull stripe */}
      <path d="M106 304 L794 304 L800 270 L830 268 L826 274 L796 310 L104 310 L70 274 L72 268 Z" fill="#1a2d4a" opacity="0.5" />

      {/* Container row 1 – bottom */}
      {containers1.map((color, i) => (
        <g key={i}>
          <rect x={92 + i * 102} y={210} width={92} height={60} rx="2" fill={color} />
          <rect x={92 + i * 102} y={210} width={92} height={7} rx="1" fill="rgba(255,255,255,0.15)" />
          <line
            x1={92 + i * 102 + 30}
            y1={217}
            x2={92 + i * 102 + 30}
            y2={270}
            stroke="rgba(0,0,0,0.2)"
            strokeWidth="1"
          />
          <line
            x1={92 + i * 102 + 61}
            y1={217}
            x2={92 + i * 102 + 61}
            y2={270}
            stroke="rgba(0,0,0,0.2)"
            strokeWidth="1"
          />
        </g>
      ))}

      {/* Container row 2 – upper */}
      {containers2.map((color, i) => (
        <g key={i}>
          <rect x={142 + i * 102} y={152} width={92} height={60} rx="2" fill={color} />
          <rect x={142 + i * 102} y={152} width={92} height={7} rx="1" fill="rgba(255,255,255,0.15)" />
          <line
            x1={142 + i * 102 + 30}
            y1={159}
            x2={142 + i * 102 + 30}
            y2={212}
            stroke="rgba(0,0,0,0.2)"
            strokeWidth="1"
          />
          <line
            x1={142 + i * 102 + 61}
            y1={159}
            x2={142 + i * 102 + 61}
            y2={212}
            stroke="rgba(0,0,0,0.2)"
            strokeWidth="1"
          />
        </g>
      ))}

      {/* Bridge */}
      <rect x="668" y="112" width="118" height="98" rx="4" fill="#152742" />
      <rect x="668" y="110" width="118" height="10" rx="3" fill="#1e3a5f" />
      {/* Bridge windows */}
      <rect x="681" y="124" width="22" height="16" rx="2" fill="#7dd3fc" opacity="0.8" />
      <rect x="713" y="124" width="22" height="16" rx="2" fill="#7dd3fc" opacity="0.8" />
      <rect x="745" y="124" width="22" height="16" rx="2" fill="#7dd3fc" opacity="0.8" />
      {/* Lower windows */}
      <rect x="681" y="150" width="22" height="14" rx="2" fill="#bae6fd" opacity="0.35" />
      <rect x="713" y="150" width="22" height="14" rx="2" fill="#bae6fd" opacity="0.35" />
      <rect x="745" y="150" width="22" height="14" rx="2" fill="#bae6fd" opacity="0.35" />
      {/* Chimney */}
      <rect x="700" y="90" width="28" height="22" rx="2" fill="#1e3a5f" />
      <rect x="700" y="88" width="28" height="6" rx="1" fill="#253f6b" />

      {/* Mast */}
      <line x1="727" y1="48" x2="727" y2="110" stroke="#475569" strokeWidth="3" />
      <line x1="692" y1="70" x2="762" y2="70" stroke="#475569" strokeWidth="2" />
      {/* Radar */}
      <circle cx="727" cy="46" r="7" fill="#f59e0b" />
      <line x1="727" y1="53" x2="762" y2="63" stroke="#475569" strokeWidth="1.5" />
      <line x1="727" y1="53" x2="692" y2="63" stroke="#475569" strokeWidth="1.5" />

      {/* Anchor chain */}
      <path d="M148 302 Q143 318 138 338" stroke="#475569" strokeWidth="2" strokeDasharray="4 3" />

      {/* Ocean waves */}
      <path
        d="M0 322 Q112 307 225 322 Q338 337 450 322 Q562 307 675 322 Q788 337 900 322"
        stroke="#3b82f6"
        strokeWidth="2.5"
        fill="none"
        opacity="0.4"
        strokeLinecap="round"
      />
      <path
        d="M0 338 Q112 323 225 338 Q338 353 450 338 Q562 323 675 338 Q788 353 900 338"
        stroke="#1d4ed8"
        strokeWidth="2"
        fill="none"
        opacity="0.28"
        strokeLinecap="round"
      />
      <path
        d="M0 352 Q112 337 225 352 Q338 367 450 352 Q562 337 675 352 Q788 367 900 352"
        stroke="#1e40af"
        strokeWidth="1.5"
        fill="none"
        opacity="0.18"
        strokeLinecap="round"
      />

      {/* Water reflection glow */}
      <ellipse cx="450" cy="340" rx="380" ry="28" fill="#1565c0" opacity="0.08" />

      {/* Ship wake */}
      <path d="M826 284 Q865 272 900 290" stroke="#7dd3fc" strokeWidth="1.5" fill="none" opacity="0.3" />
      <path d="M826 293 Q865 284 900 304" stroke="#7dd3fc" strokeWidth="1" fill="none" opacity="0.18" />
    </svg>
  );
};

// ── World route map ─────────────────────────────────────────────────────────
const WorldMap = () => (
  <svg viewBox="0 0 900 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%" }}>
    {/* Simplified continent silhouettes */}
    {/* North America */}
    <path
      d="M55 75 L185 55 L225 75 L245 115 L235 165 L205 185 L165 205 L125 225 L82 202 L55 162 Z"
      fill="#1e3a5f"
      stroke="#2563eb"
      strokeWidth="0.6"
      opacity="0.9"
    />
    {/* South America */}
    <path
      d="M145 232 L205 220 L228 262 L218 325 L185 366 L152 374 L122 344 L112 290 L133 252 Z"
      fill="#1e3a5f"
      stroke="#2563eb"
      strokeWidth="0.6"
      opacity="0.9"
    />
    {/* Europe */}
    <path
      d="M382 55 L445 44 L468 68 L458 100 L425 122 L392 112 L372 88 Z"
      fill="#1e3a5f"
      stroke="#2563eb"
      strokeWidth="0.6"
      opacity="0.9"
    />
    {/* Africa */}
    <path
      d="M382 132 L444 122 L464 154 L474 224 L452 308 L412 346 L372 324 L357 262 L362 192 L372 152 Z"
      fill="#1e3a5f"
      stroke="#2563eb"
      strokeWidth="0.6"
      opacity="0.9"
    />
    {/* Asia */}
    <path
      d="M484 48 L658 38 L728 78 L768 100 L758 142 L706 164 L622 174 L562 162 L502 142 L472 102 Z"
      fill="#1e3a5f"
      stroke="#2563eb"
      strokeWidth="0.6"
      opacity="0.9"
    />
    {/* Australia */}
    <path
      d="M726 252 L808 242 L848 272 L838 324 L784 344 L732 334 L702 302 L714 266 Z"
      fill="#1e3a5f"
      stroke="#2563eb"
      strokeWidth="0.6"
      opacity="0.9"
    />

    {/* Shipping routes */}
    <path
      d="M218 148 Q310 100 392 112"
      stroke="#f59e0b"
      strokeWidth="1.8"
      fill="none"
      strokeDasharray="7 4"
      opacity="0.75"
    />
    <path
      d="M392 112 Q432 142 484 124 Q568 90 710 120"
      stroke="#f59e0b"
      strokeWidth="1.8"
      fill="none"
      strokeDasharray="7 4"
      opacity="0.75"
    />
    <path
      d="M205 168 Q292 200 392 200 Q506 200 622 170"
      stroke="#f59e0b"
      strokeWidth="1.5"
      fill="none"
      strokeDasharray="6 4"
      opacity="0.5"
    />
    <path
      d="M392 200 Q504 280 726 282"
      stroke="#f59e0b"
      strokeWidth="1.5"
      fill="none"
      strokeDasharray="6 4"
      opacity="0.4"
    />
    <path
      d="M170 205 Q180 280 152 344"
      stroke="#f59e0b"
      strokeWidth="1.2"
      fill="none"
      strokeDasharray="5 4"
      opacity="0.35"
    />

    {/* Port nodes */}
    {[
      [218, 148], [392, 114], [484, 124], [710, 120], [726, 282], [175, 205],
    ].map(([x, y], i) => (
      <g key={i}>
        <circle cx={x} cy={y} r="12" fill="#f59e0b" opacity="0.12" />
        <circle cx={x} cy={y} r="5.5" fill="#f59e0b" opacity="0.9" />
        <circle cx={x} cy={y} r="2.5" fill="#fff" opacity="0.9" />
      </g>
    ))}
  </svg>
);

// ── Sub-components ──────────────────────────────────────────────────────────
const ServiceCard = ({ icon: Icon, title, description, accent }) => (
  <Box
    sx={{
      p: 3.5,
      borderRadius: 2.5,
      background: "rgba(14,33,68,0.45)",
      border: "1px solid rgba(255,255,255,0.07)",
      backdropFilter: "blur(12px)",
      height: "100%",
      transition: "all 0.3s ease",
      cursor: "default",
      "&:hover": {
        transform: "translateY(-5px)",
        border: `1px solid ${accent}45`,
        boxShadow: `0 12px 40px ${accent}18`,
      },
    }}
  >
    <Box
      sx={{
        width: 52,
        height: 52,
        borderRadius: 2,
        background: `${accent}18`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: 2.5,
      }}
    >
      <Icon sx={{ color: accent, fontSize: 26 }} />
    </Box>
    <Typography
      variant="h6"
      sx={{ color: "#f1f5f9", fontWeight: 700, mb: 1, fontSize: "1rem" }}
    >
      {title}
    </Typography>
    <Typography variant="body2" sx={{ color: "#64748b", lineHeight: 1.75 }}>
      {description}
    </Typography>
  </Box>
);

const StatItem = ({ number, label }) => (
  <Box sx={{ textAlign: "center" }}>
    <Typography
      sx={{
        fontSize: { xs: "2rem", md: "2.75rem" },
        fontWeight: 900,
        color: "#f59e0b",
        lineHeight: 1,
        mb: 0.75,
        letterSpacing: "-0.02em",
      }}
    >
      {number}
    </Typography>
    <Typography
      sx={{
        color: "#64748b",
        fontSize: "0.75rem",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        fontWeight: 600,
      }}
    >
      {label}
    </Typography>
  </Box>
);

const StepCard = ({ number, title, description }) => (
  <Box sx={{ textAlign: "center" }}>
    <Box
      sx={{
        width: 60,
        height: 60,
        borderRadius: "50%",
        border: "2px solid rgba(245,158,11,0.4)",
        background: "rgba(245,158,11,0.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mx: "auto",
        mb: 2.5,
      }}
    >
      <Typography sx={{ color: "#f59e0b", fontWeight: 800, fontSize: "1.1rem" }}>
        {number}
      </Typography>
    </Box>
    <Typography variant="h6" sx={{ color: "#f1f5f9", fontWeight: 700, mb: 1 }}>
      {title}
    </Typography>
    <Typography variant="body2" sx={{ color: "#64748b", lineHeight: 1.75 }}>
      {description}
    </Typography>
  </Box>
);

const SectionLabel = ({ children }) => (
  <Typography
    sx={{
      color: "#f59e0b",
      fontSize: "0.72rem",
      fontWeight: 700,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      mb: 1.5,
    }}
  >
    {children}
  </Typography>
);

// ── Landing Page ─────────────────────────────────────────────────────────────
const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const services = [
    {
      icon: LocalShipping,
      title: "Ocean Freight",
      description:
        "Full container (FCL) and groupage (LCL) to 180+ countries with door-to-door options.",
      accent: "#3b82f6",
    },
    {
      icon: Speed,
      title: "Express Delivery",
      description:
        "Priority lanes and air freight for time-critical cargo on every major trade corridor.",
      accent: "#f59e0b",
    },
    {
      icon: Security,
      title: "Cargo Insurance",
      description:
        "Comprehensive all-risk coverage with real-time tracking and 24-hour claim resolution.",
      accent: "#10b981",
    },
    {
      icon: TrendingUp,
      title: "Rate Optimisation",
      description:
        "AI-powered carrier comparison that guarantees you the best rate, every shipment.",
      accent: "#8b5cf6",
    },
    {
      icon: Support,
      title: "Dedicated Support",
      description:
        "Named account managers and a 24/7 operations desk for seamless coordination.",
      accent: "#ef4444",
    },
    {
      icon: Public,
      title: "Customs & Compliance",
      description:
        "End-to-end brokerage and regulatory compliance across every jurisdiction we serve.",
      accent: "#06b6d4",
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#060d1f", color: "#fff" }}>

      {/* ── Navbar ── */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: scrolled ? "rgba(6,13,31,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.07)"
            : "1px solid transparent",
          transition: "all 0.3s ease",
        }}
      >
        <Toolbar sx={{ py: 1 }}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1.5}
            sx={{ flex: 1 }}
          >
            <ShipLogo size={32} />
            <Typography sx={{ fontWeight: 800, fontSize: "1.2rem", letterSpacing: "-0.02em" }}>
              <Box component="span" sx={{ color: "#fff" }}>Simon</Box>
              <Box component="span" sx={{ color: "#f59e0b" }}> Ships</Box>
            </Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={0.5}
            alignItems="center"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {["Services", "Routes", "About", "Contact"].map((item) => (
              <Button
                key={item}
                sx={{
                  color: "#94a3b8",
                  fontSize: "0.875rem",
                  "&:hover": { color: "#fff" },
                }}
              >
                {item}
              </Button>
            ))}
            <Button
              variant="contained"
              size="small"
              sx={{
                ml: 2,
                background: "#f59e0b",
                color: "#060d1f",
                fontWeight: 700,
                px: 2.5,
                "&:hover": { background: "#fbbf24" },
              }}
            >
              Get Quote
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* ── Hero ── */}
      <Box
        sx={{
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          background:
            "radial-gradient(ellipse at 15% 50%, rgba(21,101,192,0.15) 0%, transparent 55%), radial-gradient(ellipse at 85% 15%, rgba(245,158,11,0.08) 0%, transparent 50%), linear-gradient(160deg, #060d1f 0%, #0a1628 100%)",
          position: "relative",
          overflow: "hidden",
          pt: { xs: 6, md: 0 },
          pb: { xs: 4, md: 0 },
        }}
      >
        {/* Dot grid */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              {/* Badge */}
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 3,
                  px: 2,
                  py: 0.75,
                  borderRadius: 10,
                  border: "1px solid rgba(245,158,11,0.3)",
                  background: "rgba(245,158,11,0.07)",
                }}
              >
                <Box
                  sx={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "#f59e0b",
                  }}
                />
                <Typography
                  sx={{
                    color: "#f59e0b",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                  }}
                >
                  TRUSTED BY 10,000+ BUSINESSES
                </Typography>
              </Box>

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.6rem", md: "3.8rem" },
                  fontWeight: 900,
                  lineHeight: 1.08,
                  letterSpacing: "-0.035em",
                  mb: 3,
                }}
              >
                Ship Anything,{" "}
                <Box component="span" sx={{ color: "#f59e0b" }}>
                  Anywhere
                </Box>{" "}
                in the World
              </Typography>

              <Typography
                sx={{
                  color: "#94a3b8",
                  fontSize: "1.05rem",
                  lineHeight: 1.75,
                  mb: 4.5,
                  maxWidth: 420,
                }}
              >
                Global freight forwarding for modern businesses. Reliable
                routes, live tracking, and competitive rates — all in one
                platform.
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  sx={{
                    background: "#f59e0b",
                    color: "#060d1f",
                    fontWeight: 700,
                    px: 3.5,
                    py: 1.6,
                    fontSize: "1rem",
                    transition: "all 0.2s",
                    "&:hover": {
                      background: "#fbbf24",
                      transform: "translateX(3px)",
                    },
                  }}
                >
                  Start Shipping
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: "rgba(255,255,255,0.18)",
                    color: "#e2e8f0",
                    px: 3.5,
                    py: 1.6,
                    "&:hover": {
                      borderColor: "rgba(255,255,255,0.45)",
                      background: "rgba(255,255,255,0.04)",
                    },
                  }}
                >
                  View Routes
                </Button>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{ position: "relative" }}>
                <ContainerShip />
                {/* Blue glow under ship */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "8%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "55%",
                    height: 70,
                    background: "#1565c0",
                    filter: "blur(48px)",
                    opacity: 0.28,
                    borderRadius: "50%",
                    pointerEvents: "none",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── Stats bar ── */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(255,255,255,0.018)",
          py: 6,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {[
              { number: "10,000+", label: "Active Customers" },
              { number: "180", label: "Countries Served" },
              { number: "99.2%", label: "On-Time Delivery" },
              { number: "24/7", label: "Live Support" },
            ].map((s, i) => (
              <Grid size={{ xs: 6, md: 3 }} key={i}>
                <StatItem {...s} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── Services ── */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <SectionLabel>What We Offer</SectionLabel>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2rem", md: "2.75rem" },
                letterSpacing: "-0.025em",
                mb: 2,
              }}
            >
              Full-Service Freight Solutions
            </Typography>
            <Typography
              sx={{
                color: "#64748b",
                maxWidth: 500,
                mx: "auto",
                lineHeight: 1.75,
              }}
            >
              From first mile to last, we handle every link in your global
              supply chain.
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {services.map((s, i) => (
              <Grid size={{ xs: 12, sm: 6 }} key={i}>
                <ServiceCard {...s} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── How it works ── */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: "rgba(255,255,255,0.018)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <SectionLabel>Simple Process</SectionLabel>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2rem", md: "2.75rem" },
                letterSpacing: "-0.025em",
              }}
            >
              Up and Running in Minutes
            </Typography>
          </Box>
          <Grid container spacing={4} alignItems="flex-start">
            {[
              {
                number: "01",
                title: "Get a Quote",
                description:
                  "Enter shipment details and receive instant pricing across our entire carrier network.",
              },
              {
                number: "02",
                title: "Book & Label",
                description:
                  "Confirm your booking, print labels, and schedule collection — all from one dashboard.",
              },
              {
                number: "03",
                title: "Track in Real Time",
                description:
                  "Monitor every leg of your shipment with live updates and proactive delay alerts.",
              },
              {
                number: "04",
                title: "Receive & Review",
                description:
                  "Get delivery confirmation, digital documents, and an invoice summary — all in your dashboard.",
              },
            ].map((step, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i} sx={{ position: "relative" }}>
                {i < 3 && (
                  <Box
                    sx={{
                      display: { xs: "none", md: "block" },
                      position: "absolute",
                      top: 28,
                      left: "60%",
                      right: "-5%",
                      height: 2,
                      background:
                        "linear-gradient(90deg, rgba(245,158,11,0.35), transparent)",
                      zIndex: 0,
                    }}
                  />
                )}
                <StepCard {...step} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── Global routes ── */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <SectionLabel>Global Network</SectionLabel>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "2rem", md: "2.75rem" },
                  letterSpacing: "-0.025em",
                  mb: 3,
                }}
              >
                Routes Across Every Ocean
              </Typography>
              <Typography
                sx={{ color: "#64748b", lineHeight: 1.75, mb: 4 }}
              >
                Our network spans 180 countries with partnerships at 500+
                ports worldwide. Whether you're shipping to Shanghai,
                Rotterdam, or Rio — we have a direct route.
              </Typography>
              <Stack spacing={2}>
                {[
                  "Trans-Pacific & Trans-Atlantic lanes",
                  "Asia–Europe via Suez and Cape routes",
                  "Intra-Asia and Americas coverage",
                  "Air freight for urgent shipments",
                ].map((item, i) => (
                  <Stack key={i} direction="row" alignItems="center" spacing={1.5}>
                    <CheckCircle sx={{ color: "#f59e0b", fontSize: 18 }} />
                    <Typography sx={{ color: "#cbd5e1", fontSize: "0.95rem" }}>
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.07)",
                  background: "rgba(14,33,68,0.45)",
                  p: 2,
                }}
              >
                <WorldMap />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── Why us ── */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: "rgba(255,255,255,0.018)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            {/* Info panel */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  background:
                    "linear-gradient(135deg, #0e2144 0%, #1565c0 100%)",
                  p: { xs: 4, md: 5 },
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: -50,
                    right: -50,
                    width: 220,
                    height: 220,
                    borderRadius: "50%",
                    background: "#f59e0b",
                    opacity: 0.07,
                    pointerEvents: "none",
                  }}
                />
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    mb: 2,
                    fontSize: { xs: "1.75rem", md: "2.1rem" },
                    letterSpacing: "-0.02em",
                  }}
                >
                  20+ Years of<br />Maritime Excellence
                </Typography>
                <Typography sx={{ color: "#bfdbfe", lineHeight: 1.75, mb: 4 }}>
                  Since 2004, Simon Ships has been the trusted partner for
                  businesses that can't afford delays. Our reputation is built
                  shipment by shipment.
                </Typography>
                <Grid container spacing={2}>
                  {[
                    { n: "500+", l: "Port Partners" },
                    { n: "98%", l: "Client Retention" },
                    { n: "$2B+", l: "Cargo Insured" },
                    { n: "60s", l: "Avg Quote Time" },
                  ].map(({ n, l }, i) => (
                    <Grid size={6} key={i}>
                      <Typography
                        sx={{
                          fontSize: "1.8rem",
                          fontWeight: 900,
                          color: "#f59e0b",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {n}
                      </Typography>
                      <Typography sx={{ color: "#93c5fd", fontSize: "0.8rem" }}>
                        {l}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>

            {/* Feature list */}
            <Grid size={{ xs: 12, md: 6 }}>
              <SectionLabel>Why Simon Ships</SectionLabel>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  letterSpacing: "-0.025em",
                  mb: 4,
                }}
              >
                Built for Business,<br />Not Bureaucracy
              </Typography>
              <Stack spacing={3.5}>
                {[
                  {
                    title: "Instant Pricing",
                    desc: "No sales calls. Live rates across 20+ carriers in under a minute.",
                  },
                  {
                    title: "Zero Hidden Fees",
                    desc: "What you see is what you pay — inclusive of port fees, customs, and duties.",
                  },
                  {
                    title: "Proactive Alerts",
                    desc: "We notify you before issues become delays, with recommended solutions.",
                  },
                  {
                    title: "API-First Platform",
                    desc: "Plug our logistics engine directly into your ERP or e-commerce stack.",
                  },
                ].map(({ title, desc }, i) => (
                  <Box key={i} sx={{ display: "flex", gap: 2 }}>
                    <Box
                      sx={{
                        width: 34,
                        height: 34,
                        minWidth: 34,
                        borderRadius: 1.5,
                        background: "rgba(245,158,11,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mt: 0.25,
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#f59e0b",
                          fontWeight: 800,
                          fontSize: "0.8rem",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 700, mb: 0.5, color: "#f1f5f9" }}>
                        {title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#64748b",
                          fontSize: "0.9rem",
                          lineHeight: 1.7,
                        }}
                      >
                        {desc}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── CTA ── */}
      <Box
        sx={{
          py: { xs: 12, md: 18 },
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(ellipse at center, rgba(21,101,192,0.12) 0%, transparent 65%)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
          <SectionLabel>Get Started Today</SectionLabel>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "2.5rem", md: "3.75rem" },
              letterSpacing: "-0.035em",
              mb: 3,
            }}
          >
            Ready to Move Cargo?
          </Typography>
          <Typography
            sx={{
              color: "#64748b",
              fontSize: "1.1rem",
              mb: 6,
              maxWidth: 460,
              mx: "auto",
              lineHeight: 1.75,
            }}
          >
            Join thousands of businesses already shipping smarter. Get your
            first quote in under 60 seconds.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              sx={{
                background: "#f59e0b",
                color: "#060d1f",
                fontWeight: 700,
                px: 4.5,
                py: 1.75,
                fontSize: "1rem",
                "&:hover": { background: "#fbbf24" },
              }}
            >
              Get a Free Quote
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: "rgba(255,255,255,0.18)",
                color: "#e2e8f0",
                px: 4.5,
                py: 1.75,
                "&:hover": {
                  borderColor: "rgba(255,255,255,0.4)",
                  background: "rgba(255,255,255,0.04)",
                },
              }}
            >
              Talk to Sales
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* ── Footer ── */}
      <Box
        component="footer"
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          py: 7,
          background: "#04080f",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
                <ShipLogo size={28} />
                <Typography sx={{ fontWeight: 800, fontSize: "1.1rem" }}>
                  <Box component="span" sx={{ color: "#fff" }}>Simon</Box>
                  <Box component="span" sx={{ color: "#f59e0b" }}> Ships</Box>
                </Typography>
              </Stack>
              <Typography
                sx={{
                  color: "#475569",
                  fontSize: "0.875rem",
                  lineHeight: 1.75,
                  maxWidth: 270,
                }}
              >
                Connecting businesses worldwide with reliable, fast, and
                transparent global freight.
              </Typography>
            </Grid>
            {[
              {
                heading: "Services",
                links: ["Ocean Freight", "Air Freight", "Customs Brokerage", "Cargo Insurance", "API Platform", "Warehousing"],
              },
              {
                heading: "Company",
                links: ["About Us", "Careers", "Press", "Partners", "Sustainability", "Contact"],
              },
              {
                heading: "Support",
                links: ["Help Centre", "Track Shipment", "Rate Calculator", "Status Page", "API Docs", "Community"],
              },
            ].map(({ heading, links }) => (
              <Grid size={{ xs: 6, md: 2.5 }} key={heading}>
                <Typography
                  sx={{ fontWeight: 700, mb: 2, fontSize: "0.875rem", color: "#e2e8f0" }}
                >
                  {heading}
                </Typography>
                <Stack spacing={1.25}>
                  {links.map((link) => (
                    <Typography
                      key={link}
                      sx={{
                        color: "#475569",
                        fontSize: "0.875rem",
                        cursor: "pointer",
                        transition: "color 0.2s",
                        "&:hover": { color: "#94a3b8" },
                      }}
                    >
                      {link}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
            ))}
          </Grid>

          <Box
            sx={{
              mt: 7,
              pt: 3,
              borderTop: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Typography sx={{ color: "#334155", fontSize: "0.8rem" }}>
              © 2026 Simon Ships. All rights reserved.
            </Typography>
            <Stack direction="row" spacing={3}>
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility"].map(
                (link) => (
                  <Typography
                    key={link}
                    sx={{
                      color: "#334155",
                      fontSize: "0.8rem",
                      cursor: "pointer",
                      "&:hover": { color: "#64748b" },
                    }}
                  >
                    {link}
                  </Typography>
                )
              )}
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
