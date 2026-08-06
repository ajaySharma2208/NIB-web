import React from "react";

// Helper for soft shadows and gradients
const DefaultDefs = () => (
  <defs>
    {/* Blue Gradients */}
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#2563eb" />
      <stop offset="100%" stopColor="#1e3a8a" />
    </linearGradient>
    <linearGradient id="lightBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#60a5fa" />
      <stop offset="100%" stopColor="#2563eb" />
    </linearGradient>

    {/* Gold / Orange Gradients */}
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#fbbf24" />
      <stop offset="100%" stopColor="#f59e0b" />
    </linearGradient>
    <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#f97316" />
      <stop offset="100%" stopColor="#ea580c" />
    </linearGradient>

    {/* Green / Teal Gradients */}
    <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#34d399" />
      <stop offset="100%" stopColor="#059669" />
    </linearGradient>

    {/* Red / Pink Gradients */}
    <linearGradient id="pinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#f472b6" />
      <stop offset="100%" stopColor="#db2777" />
    </linearGradient>

    {/* Silver / Grey Gradients */}
    <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#f3f4f6" />
      <stop offset="100%" stopColor="#9ca3af" />
    </linearGradient>

    {/* Shadow Filter */}
    <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#0f172a" floodOpacity="0.15" />
    </filter>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
);

export const CarIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <DefaultDefs />
    {/* Shadow */}
    <ellipse cx="32" cy="42" rx="24" ry="4" fill="#0f172a" fillOpacity="0.12" />
    
    {/* Car body (under layer) */}
    <path d="M6 32C6 32 8 22 14 20C20 18 44 18 50 20C56 22 58 32 58 32C58 35 56 38 50 38H14C8 38 6 35 6 32Z" fill="url(#goldGrad)" filter="url(#softShadow)" />
    
    {/* Windshield / Roof */}
    <path d="M18 20L24 10C25 8 28 8 36 8C44 8 47 8 48 10L52 20H18Z" fill="url(#silverGrad)" opacity="0.85" />
    <path d="M22 19L27 11C27.5 10 29 10 35 10C41 10 42.5 10 43 11L47 19H22Z" fill="#1e293b" />

    {/* Side highlights to create 3D volume */}
    <path d="M8 29C8 29 18 24 32 24C46 24 56 29 56 29" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
    
    {/* Headlights */}
    <circle cx="12" cy="30" r="3" fill="#fff" filter="url(#glow)" />
    <circle cx="52" cy="30" r="3" fill="#fff" filter="url(#glow)" />
    
    {/* Wheels */}
    <circle cx="18" cy="38" r="7" fill="#1e293b" />
    <circle cx="18" cy="38" r="3" fill="url(#silverGrad)" />
    <circle cx="46" cy="38" r="7" fill="#1e293b" />
    <circle cx="46" cy="38" r="3" fill="url(#silverGrad)" />
  </svg>
);

export const BikeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <DefaultDefs />
    <ellipse cx="32" cy="42" rx="22" ry="3.5" fill="#0f172a" fillOpacity="0.12" />
    
    {/* Wheels */}
    <circle cx="16" cy="32" r="10" fill="#1e293b" stroke="url(#blueGrad)" strokeWidth="2" />
    <circle cx="16" cy="32" r="4" fill="url(#silverGrad)" />
    <circle cx="48" cy="32" r="10" fill="#1e293b" stroke="url(#blueGrad)" strokeWidth="2" />
    <circle cx="48" cy="32" r="4" fill="url(#silverGrad)" />
    
    {/* Bike Frame & Engine */}
    <path d="M16 32L30 24L48 32" stroke="#4b5563" strokeWidth="4" strokeLinecap="round" />
    <rect x="26" y="24" width="10" height="10" rx="2" fill="url(#silverGrad)" filter="url(#softShadow)" />
    
    {/* Fuel Tank & Bodywork */}
    <path d="M20 18C20 14 26 12 34 14L42 22H24L20 18Z" fill="url(#blueGrad)" filter="url(#softShadow)" />
    {/* Highlight */}
    <path d="M22 17C22 17 26 14 32 15" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    
    {/* Seat */}
    <path d="M24 22C26 18 32 18 36 22H24Z" fill="#1e293b" />
    
    {/* Handlebars & Fork */}
    <path d="M42 22L38 12M38 12H34" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const TruckIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <DefaultDefs />
    <ellipse cx="32" cy="42" rx="24" ry="4" fill="#0f172a" fillOpacity="0.12" />
    
    {/* Cargo Cabin (Box) */}
    <rect x="8" y="10" width="30" height="24" rx="3" fill="url(#silverGrad)" filter="url(#softShadow)" />
    <line x1="23" y1="10" x2="23" y2="34" stroke="#9ca3af" strokeWidth="1.5" />
    
    {/* Driver Cabin */}
    <path d="M38 18H50C52 18 54 22 54 26V34H38V18Z" fill="url(#orangeGrad)" filter="url(#softShadow)" />
    {/* Windshield */}
    <path d="M44 20H49L52 25H44V20Z" fill="#1e293b" />
    
    {/* Bumper */}
    <rect x="36" y="32" width="20" height="4" rx="1" fill="#4b5563" />
    
    {/* Wheels */}
    <circle cx="18" cy="38" r="6.5" fill="#1e293b" />
    <circle cx="18" cy="38" r="2.5" fill="url(#silverGrad)" />
    <circle cx="46" cy="38" r="6.5" fill="#1e293b" />
    <circle cx="46" cy="38" r="2.5" fill="url(#silverGrad)" />
  </svg>
);

export const ShieldIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <DefaultDefs />
    {/* Shield Base with bevel effect */}
    <path d="M24 4C14 4 10 8 10 18C10 30 20 38 24 42C28 38 38 30 38 18C38 8 34 4 24 4Z" fill="url(#blueGrad)" filter="url(#softShadow)" />
    <path d="M24 4C24 4 34 8 34 18C34 30 26 38 24 42V4Z" fill="url(#lightBlueGrad)" opacity="0.3" />

    {/* Shiny Heart in center */}
    <path d="M24 28.5C24 28.5 16 23.5 16 18C16 15 18 13.5 20.5 13.5C22.5 13.5 23.5 15 24 16C24.5 15 25.5 13.5 27.5 13.5C30 13.5 32 15 32 18C32 23.5 24 28.5 24 28.5Z" fill="url(#goldGrad)" filter="url(#glow)" />
    <path d="M24 28.5C24 28.5 24 16 24 16C24.5 15 25.5 13.5 27.5 13.5C30 13.5 32 15 32 18C32 23.5 24 28.5 24 28.5Z" fill="url(#orangeGrad)" opacity="0.4" />
  </svg>
);

export const TreeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <DefaultDefs />
    {/* Tree Trunk */}
    <path d="M22 32V42H26V32C28 30 30 28 30 24H18C18 28 20 30 22 32Z" fill="#78350f" filter="url(#softShadow)" />

    {/* Golden Leaf Clusters (3D overlapping circles) */}
    <circle cx="24" cy="16" r="11" fill="url(#goldGrad)" filter="url(#softShadow)" />
    <circle cx="16" cy="22" r="9" fill="url(#orangeGrad)" filter="url(#softShadow)" opacity="0.9" />
    <circle cx="32" cy="22" r="9" fill="url(#goldGrad)" filter="url(#softShadow)" opacity="0.95" />
    <circle cx="24" cy="24" r="8.5" fill="url(#orangeGrad)" />

    {/* Sparkles/Coins details */}
    <circle cx="24" cy="16" r="2.5" fill="#fff" opacity="0.6" filter="url(#glow)" />
    <circle cx="16" cy="22" r="1.5" fill="#fff" opacity="0.6" filter="url(#glow)" />
    <circle cx="32" cy="22" r="1.5" fill="#fff" opacity="0.6" filter="url(#glow)" />
  </svg>
);

export const IndividualHealthIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <DefaultDefs />
    {/* Caring Hands */}
    <path d="M8 32C10 26 16 26 18 30C20 34 22 36 24 36C26 36 28 34 30 30C32 26 38 26 40 32C42 35 41 40 36 42H12C7 40 6 35 8 32Z" fill="url(#silverGrad)" filter="url(#softShadow)" />
    
    {/* Green Medical Figure */}
    <circle cx="24" cy="14" r="5" fill="url(#greenGrad)" filter="url(#softShadow)" />
    <path d="M16 28C16 22 20 20 24 20C28 20 32 22 32 28H16Z" fill="url(#greenGrad)" filter="url(#softShadow)" />
    
    {/* Glowing Cross inside figure */}
    <path d="M24 22V26M22 24H26" stroke="#fff" strokeWidth="2" strokeLinecap="round" filter="url(#glow)" />
  </svg>
);

export const FamilyHealthIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <DefaultDefs />
    {/* Father (Left) */}
    <circle cx="16" cy="18" r="4.5" fill="url(#blueGrad)" />
    <path d="M10 32C10 26 13 24 16 24C19 24 22 26 22 32H10Z" fill="url(#blueGrad)" />

    {/* Mother (Right) */}
    <circle cx="32" cy="18" r="4.5" fill="url(#pinkGrad)" />
    <path d="M26 32C26 26 29 24 32 24C35 24 38 26 38 32H26Z" fill="url(#pinkGrad)" />

    {/* Child (Center) */}
    <circle cx="24" cy="24" r="3.5" fill="url(#goldGrad)" />
    <path d="M20 34C20 30 22 29 24 29C26 29 28 30 28 34H20Z" fill="url(#goldGrad)" />

    {/* Floating Pink Heart above them */}
    <path d="M24 13.5C24 13.5 20.5 10.5 20.5 8C20.5 6.5 21.5 5.5 23 5.5C24 5.5 24.5 6 25 6.5C25.5 6 26 5.5 27 5.5C28.5 5.5 29.5 6.5 29.5 8C29.5 10.5 26 13.5 26 13.5H24Z" fill="url(#pinkGrad)" filter="url(#glow)" />
  </svg>
);

export const SeniorCitizenIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <DefaultDefs />
    {/* Senior Man (Left) with walking stick */}
    <circle cx="18" cy="16" r="4.5" fill="url(#blueGrad)" />
    <path d="M12 34C12 28 15 25 18 25C21 25 24 28 24 34H12Z" fill="url(#blueGrad)" />
    {/* Stick */}
    <path d="M11 26V36M11 26H9" stroke="url(#silverGrad)" strokeWidth="2.5" strokeLinecap="round" />

    {/* Senior Woman (Right) */}
    <circle cx="30" cy="18" r="4.5" fill="url(#pinkGrad)" />
    <path d="M24 34C24 28 27 26 30 26C33 26 36 28 36 34H24Z" fill="url(#pinkGrad)" />
    {/* Hair details (representing age/wisdom) */}
    <path d="M27.5 14.5C27.5 14.5 30 12 32.5 14.5" stroke="#e5e7eb" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Statistics and Hero Extra Icons
export const CheckCircleIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <DefaultDefs />
    <circle cx="12" cy="12" r="10" fill="url(#greenGrad)" filter="url(#softShadow)" />
    <path d="M8 12L11 15L16 9" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const HandshakeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <DefaultDefs />
    <path d="M4 10C4 10 5 7 10 7C15 7 16 10 16 10" stroke="url(#blueGrad)" strokeWidth="2" />
    <path d="M8 14C8 14 9 17 14 17C19 17 20 14 20 14" stroke="url(#goldGrad)" strokeWidth="2" />
    <rect x="6" y="8" width="12" height="8" rx="2" fill="url(#goldGrad)" opacity="0.3" />
    <circle cx="9" cy="12" r="3" fill="url(#blueGrad)" />
    <circle cx="15" cy="12" r="3" fill="url(#goldGrad)" />
  </svg>
);

export const UsersIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <DefaultDefs />
    <circle cx="8" cy="8" r="3" fill="url(#blueGrad)" />
    <path d="M4 16C4 13 6 12 8 12C10 12 12 13 12 16H4Z" fill="url(#blueGrad)" />
    <circle cx="16" cy="10" r="2.5" fill="url(#pinkGrad)" />
    <path d="M13 17C13 14.5 14.5 13.5 16 13.5C17.5 13.5 19 14.5 19 17H13Z" fill="url(#pinkGrad)" />
  </svg>
);

export const ClockIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <DefaultDefs />
    <circle cx="12" cy="12" r="10" fill="url(#blueGrad)" filter="url(#softShadow)" />
    <circle cx="12" cy="12" r="8" fill="#fff" />
    <path d="M12 6V12L15.5 14" stroke="url(#orangeGrad)" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const MedalIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <DefaultDefs />
    {/* Ribbon */}
    <path d="M8 4L12 11L16 4H8Z" fill="url(#pinkGrad)" />
    {/* Coin */}
    <circle cx="12" cy="14" r="6" fill="url(#goldGrad)" filter="url(#softShadow)" />
    <circle cx="12" cy="14" r="4.5" fill="url(#orangeGrad)" opacity="0.3" />
    <polygon points="12,11.5 13.2,13.8 15.8,14.2 13.9,16.1 14.3,18.7 12,17.5 9.7,18.7 10.1,16.1 8.2,14.2 10.8,13.8" fill="#fff" />
  </svg>
);

export const PlayIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <DefaultDefs />
    <circle cx="12" cy="12" r="10" fill="url(#blueGrad)" filter="url(#softShadow)" />
    <polygon points="10,8 16,12 10,16" fill="#fff" />
  </svg>
);
