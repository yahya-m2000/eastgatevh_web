import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { DARK, DARKEST, GOLD, INK, SANS, SERIF, NAV_H } from "../tokens";

const LEFT_LINKS = [
  { label: "About", to: "/about" },
  { label: "Team", to: "/team" },
  { label: "Founder Partnerships", to: "/founder-partnerships" },
];
const RIGHT_LINKS = [
  { label: "Investment Model", to: "/investment-model" },
  { label: "Regions", to: "/regions" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
];

export default function Nav() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const location = useLocation();

  useEffect(() => {
    // Reset on route change
    setMode("light");
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-bg]");
      let current: "light" | "dark" = "light";
      sections.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= NAV_H && rect.bottom > NAV_H) {
          current = (el as HTMLElement).dataset.bg === "dark" ? "dark" : "light";
        }
      });
      setMode(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const onDark = mode === "dark";
  const textCol = onDark ? "#F0EDE8" : INK;
  const borderCol = onDark ? "rgba(240,237,232,0.1)" : "rgba(15,17,23,0.08)";
  const bgCol = onDark ? "rgba(11,15,24,0.95)" : "rgba(255,255,255,0.95)";

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: NAV_H,
        background: bgCol,
        backdropFilter: "blur(14px)",
        borderBottom: `1px solid ${borderCol}`,
        transition: "background 0.35s, border-color 0.35s",
        fontFamily: SANS,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 40px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {/* Left */}
        <div style={{ display: "flex", gap: 28 }}>
          {LEFT_LINKS.map(({ label, to }) => (
            <NavLink key={to} to={to} col={textCol}>
              {label}
            </NavLink>
          ))}
        </div>

        {/* Logo */}
        <Link
          to="/"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: SERIF,
            fontSize: 15,
            letterSpacing: "0.22em",
            color: textCol,
            fontWeight: 400,
            textDecoration: "none",
            transition: "color 0.35s",
          }}
        >
          EASTGATE
        </Link>

        {/* Right */}
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {RIGHT_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              col={label === "Contact" ? GOLD : textCol}
              weight={label === "Contact" ? 500 : 400}
              defaultOpacity={label === "Contact" ? 1 : 0.75}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

function NavLink({
  to,
  col,
  children,
  weight = 400,
  defaultOpacity = 0.75,
}: {
  to: string;
  col: string;
  children: React.ReactNode;
  weight?: number;
  defaultOpacity?: number;
}) {
  return (
    <Link
      to={to}
      style={{
        fontSize: 13,
        letterSpacing: "0.03em",
        color: col,
        textDecoration: "none",
        opacity: defaultOpacity,
        fontWeight: weight,
        transition: "opacity 0.2s",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLElement).style.opacity = String(defaultOpacity))
      }
    >
      {children}
    </Link>
  );
}
