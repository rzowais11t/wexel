"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Services", href: "/#services" },
  { name: "Case Studies", href: "/#case-studies" },
  { name: "FAQ", href: "/#faq" },
];

const EASE = "cubic-bezier(0.4, 0, 0.2, 1)";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  /* ─── Outer nav: always pinned full-width at the top ─── */
  const wrapStyle: React.CSSProperties = isMobile
    ? { position: "fixed", zIndex: 100, left: 0, right: 0, top: 0, padding: "10px 12px 0" }
    : { position: "fixed", zIndex: 100, left: 0, right: 0, top: 0 };

  /* ─── The pill: margin animates in to create the floating inset look ─── */
  const pillStyle: React.CSSProperties = {
    background: scrolled || isMobile ? "rgba(17, 17, 17, 0.7)" : "transparent",
    backdropFilter: scrolled || isMobile ? "blur(12px)" : "none",
    WebkitBackdropFilter: scrolled || isMobile ? "blur(12px)" : "none",
    borderRadius: scrolled || isMobile ? 9999 : 0,
    border: scrolled || isMobile
      ? "1px solid rgba(255,255,255,0.1)"
      : "1px solid transparent",
    margin: isMobile
      ? "0"
      : scrolled
        ? "12px auto 0"
        : "0 auto",
    width: isMobile ? "100%" : (scrolled ? "calc(100% - 80px)" : "100%"),
    maxWidth: isMobile ? "none" : 1080,
    transition: [
      `background 0.5s ${EASE}`,
      `backdrop-filter 0.5s ${EASE}`,
      `-webkit-backdrop-filter 0.5s ${EASE}`,
      `border-radius 0.5s ${EASE}`,
      `border-color 0.5s ${EASE}`,
      `margin 0.5s ${EASE}`,
      `width 0.5s ${EASE}`,
      `max-width 0.5s ${EASE}`,
    ].join(", "),
    display: "flex",
    alignItems: "center",
    height: isMobile ? 56 : 60,
    overflow: "hidden",
  };

  /* ─── Inner content — max 1080px, centered ─── */
  const innerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    width: "100%",
    margin: "0 auto",
    padding: isMobile ? "0 16px 0 20px" : "0 32px",
    height: "100%",
    position: "relative",
  };

  /* ─── Book Audit button ─── */
  const auditStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 36,
    padding: "0 20px",
    borderRadius: 9999,
    fontSize: "0.8125rem",
    fontWeight: 500,
    cursor: "pointer",
    textDecoration: "none",
    background: "#ffffff",
    color: "#000000",
    border: "none",
    whiteSpace: "nowrap",
    flexShrink: 0,
  };

  return (
    <>
      {/* ── NAV BAR ── */}
      <nav style={wrapStyle}>
        <div style={pillStyle}>
          <div style={innerStyle}>
            {/* Logo */}
            <Link
              href="/"
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                color: "#fff",
                textDecoration: "none",
                fontFamily: "'Blanka', sans-serif",
                flexShrink: 0,
                outline: "none",
                WebkitTapHighlightColor: "transparent",
              }}
            >
              wexel
            </Link>

            {/* Desktop: centered links */}
            {!isMobile && (
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  alignItems: "center",
                  gap: 40,
                }}
              >
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 400,
                      color: "rgba(255,255,255,0.6)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Right side */}
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 12 }}>
              {!isMobile ? (
                <Link href="/contact" style={auditStyle}>
                  Book Audit
                </Link>
              ) : (
                <button
                  onClick={() => setIsOpen(true)}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    width: 36, height: 36,
                    color: "#fff", background: "transparent",
                    border: "none", borderRadius: 9999, cursor: "pointer",
                  }}
                  aria-label="Open menu"
                >
                  <Menu size={20} />
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* ── MOBILE FULL-SCREEN MENU ── */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 200,
              background: "#000",
              display: "flex",
              flexDirection: "column",
              padding: "0 28px 32px",
            }}
          >
            {/* Top bar */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 76, flexShrink: 0 }}>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  color: "#fff",
                  textDecoration: "none",
                  fontFamily: "'Blanka', sans-serif",
                  outline: "none",
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                wexel
              </Link>
            </div>

            {/* Big links */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 8 }}>
              {links.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      display: "block",
                      fontSize: "3rem",
                      fontWeight: 400,
                      color: "#fff",
                      textDecoration: "none",
                      lineHeight: 1.2,
                      padding: "6px 0",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom buttons */}
            <div style={{ display: "flex", gap: 12, flexShrink: 0 }}>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  flex: 1, height: 52, borderRadius: 9999,
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#fff", fontSize: "0.9375rem", fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                Close
              </button>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                style={{
                  flex: 1, height: 52, borderRadius: 9999,
                  background: "#fff", color: "#000",
                  fontSize: "0.9375rem", fontWeight: 600,
                  textDecoration: "none",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                Book Audit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
