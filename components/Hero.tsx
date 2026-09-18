"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Mail, ArrowRight, Download, ChevronDown } from "lucide-react";

// Parent container — controls stagger timing for all children
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ig-rg" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      {/* Outer rounded square */}
      <rect x="2" y="2" width="20" height="20" rx="6" ry="6" fill="url(#ig-rg)" />
      {/* Inner white elements */}
      <rect x="2" y="2" width="20" height="20" rx="6" ry="6" fill="none" stroke="white" strokeWidth="0" />
      {/* Camera lens circle */}
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="white" strokeWidth="1.6" />
      {/* Top-right dot */}
      <circle cx="17.5" cy="6.5" r="1.1" fill="white" />
      {/* Outer border ring */}
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" ry="5" fill="none" stroke="white" strokeWidth="1.4" strokeOpacity="0.55" />
    </svg>
  );
}

// Minimal WhatsApp SVG (lucide-react has no brand icons)
function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
    </svg>
  );
}

const socialLinks = [
  {
    href: "https://github.com/Saurabh-2151",
    label: "GitHub",
    icon: Github,
    color: "#e6edf3",
    hoverShadow: "rgba(230,237,243,0.18)",
  },
  {
    href: "https://www.linkedin.com/in/saurabh-ganjale-5b5b76257/",
    label: "LinkedIn",
    icon: Linkedin,
    color: "#0A66C2",
    hoverShadow: "rgba(10,102,194,0.28)",
  },
  {
    href: "https://www.instagram.com/saurabh____2151/",
    label: "Instagram",
    icon: InstagramIcon,
    color: "transparent",
    hoverShadow: "rgba(214,36,159,0.32)",
  },
  {
    href: "https://wa.me/917219185759",
    label: "WhatsApp",
    icon: WhatsAppIcon,
    color: "#25D366",
    hoverShadow: "rgba(37,211,102,0.28)",
  },
  {
    href: "mailto:saurabhganjaleflutter@gmail.com",
    label: "Email",
    icon: Mail,
    color: "#EA4335",
    hoverShadow: "rgba(234,67,53,0.28)",
  },
] as const;

// ── Word-level hover interaction ─────────────────────────────────────────
function HoverWord({ children, className }: { children: string; className?: string }) {
  return (
    <motion.span
      className={className}
      style={{ display: "inline-block", cursor: "default" }}
      whileHover={{
        y: -1,
        color: "#3b82f6",
      }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      {children}
    </motion.span>
  );
}

export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Subtle background glows */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 10% 50%, rgba(59,130,246,0.08) 0%, transparent 100%), radial-gradient(ellipse 40% 40% at 90% 15%, rgba(6,182,212,0.06) 0%, transparent 100%)",
        }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-[0.18] pointer-events-none" />

      {/* Floating ambient particles — premium touch */}
      <motion.div
        aria-hidden="true"
        className="absolute w-2 h-2 rounded-full bg-accent/40 blur-[1px]"
        style={{ top: "20%", left: "15%" }}
        animate={{ y: [0, -18, 0], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute w-1.5 h-1.5 rounded-full bg-accent-cyan/40 blur-[1px]"
        style={{ top: "65%", left: "8%" }}
        animate={{ y: [0, 14, 0], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* ── Left: Content ── */}
          <div className="order-1">
            {/* Name — primary identity */}
            <motion.h1
              variants={fadeUp}
              className="font-bold tracking-tight mb-4"
              style={{ lineHeight: 1.0 }}
            >
              <span className="block text-[2.05rem] sm:text-[2.55rem] lg:text-[3.05rem] xl:text-[3.55rem] text-text-primary">
                <HoverWord>Hi,</HoverWord>
                {" "}
                <HoverWord>I&apos;m</HoverWord>
                {" "}
                <HoverWord>Saurabh</HoverWord>
              </span>
              <span className="block text-[2.5rem] sm:text-[2.55rem] lg:text-[3.05rem] xl:text-[3.55rem] text-text-primary">
                <HoverWord>Ganjale</HoverWord>
              </span>
            </motion.h1>

            {/* Role */}
            <motion.p
              variants={fadeUp}
              className="text-[1.25rem] sm:text-[1.375rem] lg:text-[1.5rem] font-semibold text-text-primary mb-2"
            >
              Software &amp; Flutter Developer
            </motion.p>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-text-secondary text-[0.9375rem] sm:text-[1rem] lg:text-[1.0625rem] leading-[1.75] mb-8 max-w-[30rem]"
            >
              Building production ready mobile apps, modern web platforms, and
              custom business solutions with a focus on clean design, reliable
              performance, and real world business needs.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-8">
              <motion.button
                whileHover={{ scale: 1.045, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={() => scrollTo("#projects")}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors duration-200 text-sm shadow-lg shadow-accent/20 hover:shadow-accent/30"
              >
                View My Work
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight size={15} />
                </motion.span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.045, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                href="https://drive.google.com/file/d/1sDzLq3M5nJccnD8ggr3BpiCgPl9-vkLj/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border-color hover:border-accent/50 hover:bg-card text-text-primary font-semibold rounded-lg transition-colors duration-200 text-sm"
              >
                <Download size={15} />
                Resume
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.045, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-accent-cyan/25 hover:border-accent-cyan/50 hover:bg-accent-cyan/5 text-accent-cyan font-semibold rounded-lg transition-colors duration-200 text-sm"
              >
                Let&apos;s Work Together
              </motion.button>
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 flex-wrap">
              <span className="text-text-muted text-xs font-medium uppercase tracking-wider">
                Find me on
              </span>
              <div className="flex items-center gap-2">
                {socialLinks.map(({ href, label, icon: Icon, color, hoverShadow }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    whileHover={{
                      scale: 1.1,
                      y: -2,
                      boxShadow: `0 0 12px ${hoverShadow}`,
                    }}
                    whileTap={{ scale: 0.93 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="p-2 rounded-lg border border-border-color bg-card/60 transition-colors duration-200 hover:border-white/15"
                    style={{ color }}
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right: Profile Image ── */}
          <motion.div
            variants={fadeUp}
            className="order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[22rem] lg:h-[22rem] xl:w-[26rem] xl:h-[26rem]">
              {/* Pulsing glow ring behind the image — premium ambient effect */}
              <motion.div
                aria-hidden="true"
                className="absolute -inset-3 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, rgba(59,130,246,0.35), rgba(6,182,212,0.35), rgba(59,130,246,0.35))",
                  filter: "blur(18px)",
                }}
                animate={{ rotate: 360, opacity: [0.5, 0.8, 0.5] }}
                transition={{
                  rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
              />

              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative w-full h-full rounded-full ring-1 ring-white/10 overflow-hidden"
              >
                <Image
                  src="/my_img.png"
                  alt="Saurabh Ganjale"
                  fill
                  priority
                  className="rounded-full object-cover object-top"
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, (max-width: 1280px) 352px, 416px"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="hidden lg:flex flex-col items-center gap-1 mt-16 text-text-muted"
          aria-hidden="true"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}