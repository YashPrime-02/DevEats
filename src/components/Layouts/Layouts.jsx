import React from "react";
import Header from "./Header";
import Footer from "./Footer";

/**
 * Layout Component
 * ----------------
 * Acts as a common structural wrapper for all pages.
 * 
 * Responsibilities:
 * - Renders the global Header and Footer
 * - Provides a consistent layout across the application
 * - Displays route/page-specific content via `children`
 *
 * Usage:
 * Wrap page components or route outlets inside this Layout
 * to maintain consistent UI structure.
 */
export default function Layout({ children }) {
  return (
    <>
      {/* Global application header */}
      <Header />

      {/* Main content area where page-specific components render */}
      <div>
        {children}
      </div>

      {/* Global application footer */}
      <Footer />
    </>
  );
}
