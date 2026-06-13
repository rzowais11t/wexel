export const SoundWaveAnimation = () => (
  <div className="flex items-center justify-center gap-1 h-8">
    <style>{`
      @keyframes wave {
        0%, 100% { height: 4px; }
        50% { height: 20px; }
      }
      .wave-bar {
        width: 3px;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 2px;
        animation: wave 0.6s ease-in-out infinite;
      }
    `}</style>
    {[0, 1, 2, 3, 4].map((i) => (
      <div
        key={i}
        className="wave-bar"
        style={{ animationDelay: `${i * 0.1}s` }}
      />
    ))}
  </div>
);

export const EmailPulseAnimation = () => (
  <div className="flex items-center justify-center gap-1.5 h-8">
    <style>{`
      @keyframes outreach-flow {
        0% { stroke-dashoffset: 40; opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { stroke-dashoffset: 0; opacity: 0; }
      }
      @keyframes outreach-core {
        0%, 100% { transform: scale(1); opacity: 0.8; }
        50% { transform: scale(1.15); opacity: 1; }
      }
      @keyframes outreach-target {
        0%, 70%, 100% { transform: scale(1); opacity: 0.4; }
        85% { transform: scale(1.4); opacity: 1; }
      }
      .outreach-path {
        stroke-dasharray: 6 34;
        animation: outreach-flow 2s linear infinite;
        stroke-linecap: round;
      }
      .outreach-source {
        animation: outreach-core 2s ease-in-out infinite;
        transform-origin: 10px 12px;
        transform-box: fill-box;
      }
      .outreach-node {
        animation: outreach-target 2s linear infinite;
        transform-origin: center;
        transform-box: fill-box;
      }
      .outreach-icon {
        opacity: 0.6;
      }
    `}</style>
    <svg width="64" height="24" viewBox="0 0 64 24" className="overflow-visible">
      {/* Background connections */}
      <path d="M 10 12 Q 25 4 46 4" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 10 12 L 46 12" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 10 12 Q 25 20 46 20" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" strokeLinecap="round" />

      {/* Animated Pulses */}
      <path d="M 10 12 Q 25 4 46 4" fill="none" stroke="rgba(255, 255, 255, 0.9)" strokeWidth="1.5" className="outreach-path" style={{ animationDelay: "0s" }} />
      <path d="M 10 12 L 46 12" fill="none" stroke="rgba(255, 255, 255, 0.9)" strokeWidth="1.5" className="outreach-path" style={{ animationDelay: "0.6s" }} />
      <path d="M 10 12 Q 25 20 46 20" fill="none" stroke="rgba(255, 255, 255, 0.9)" strokeWidth="1.5" className="outreach-path" style={{ animationDelay: "1.2s" }} />
      
      {/* Secondary faster pulses for high-volume feel */}
      <path d="M 10 12 Q 25 4 46 4" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" className="outreach-path" style={{ animationDelay: "1s", animationDuration: "1.5s", strokeDasharray: "3 37" }} />
      <path d="M 10 12 Q 25 20 46 20" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" className="outreach-path" style={{ animationDelay: "0.5s", animationDuration: "1.5s", strokeDasharray: "3 37" }} />

      {/* Source AI Node (Sender) */}
      <circle cx="10" cy="12" r="5" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" className="outreach-source" style={{ animationDelay: "0s" }} strokeDasharray="2 2" />
      <circle cx="10" cy="12" r="3" fill="#fff" className="outreach-source" style={{ animationDelay: "0s" }} />

      {/* Target Inbox Nodes (Receivers) */}
      <circle cx="46" cy="4" r="2" fill="rgba(255, 255, 255, 0.9)" className="outreach-node" style={{ animationDelay: "0s" }} />
      <circle cx="46" cy="12" r="2" fill="rgba(255, 255, 255, 0.9)" className="outreach-node" style={{ animationDelay: "0.6s" }} />
      <circle cx="46" cy="20" r="2" fill="rgba(255, 255, 255, 0.9)" className="outreach-node" style={{ animationDelay: "1.2s" }} />
      
      {/* Email Icons next to targets to emphasize "Outreach" */}
      <g className="outreach-icon" transform="translate(52, 2)">
        <path d="M 0 0 L 6 0 L 6 4 L 0 4 Z M 0 0 L 3 2 L 6 0" fill="none" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="0.8" strokeLinejoin="round" />
      </g>
      <g className="outreach-icon" transform="translate(52, 10)">
        <path d="M 0 0 L 6 0 L 6 4 L 0 4 Z M 0 0 L 3 2 L 6 0" fill="none" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="0.8" strokeLinejoin="round" />
      </g>
      <g className="outreach-icon" transform="translate(52, 18)">
        <path d="M 0 0 L 6 0 L 6 4 L 0 4 Z M 0 0 L 3 2 L 6 0" fill="none" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="0.8" strokeLinejoin="round" />
      </g>
    </svg>
  </div>
);

export const CartPriceAnimation = () => (
  <div className="flex items-center justify-center gap-1.5 h-8">
    <style>{`
      @keyframes price-tick {
        0%, 100% { color: rgba(255, 255, 255, 0.5); }
        50% { color: rgba(255, 255, 255, 1); }
      }
      .price-item {
        font-size: 12px;
        font-weight: bold;
        animation: price-tick 1s ease-in-out infinite;
      }
    `}</style>
    {["$", "↓", "$"].map((char, i) => (
      <div
        key={i}
        className="price-item"
        style={{ animationDelay: `${i * 0.2}s` }}
      >
        {char}
      </div>
    ))}
  </div>
);

export const PostsAnimation = () => (
  <div className="flex items-center justify-center gap-1.5 h-8">
    <style>{`
      @keyframes social-flow {
        0% { stroke-dashoffset: 20; opacity: 0; }
        20% { opacity: 1; }
        80% { opacity: 1; }
        100% { stroke-dashoffset: 0; opacity: 0; }
      }
      @keyframes social-node-pulse {
        0%, 100% { transform: scale(1); opacity: 0.8; }
        50% { transform: scale(1.2); opacity: 1; }
      }
      @keyframes social-platform-bounce {
        0%, 100% { transform: scale(1); opacity: 0.6; }
        50% { transform: scale(1.3); opacity: 1; }
      }
      @keyframes social-heart-float {
        0% { transform: translateY(0) scale(0); opacity: 0; }
        20% { transform: translateY(-3px) scale(1.2); opacity: 1; }
        80% { transform: translateY(-8px) scale(1); opacity: 1; }
        100% { transform: translateY(-10px) scale(0.5); opacity: 0; }
      }
      .social-path {
        stroke-dasharray: 4 16;
        animation: social-flow 1.8s linear infinite;
        stroke-linecap: round;
      }
      .social-core {
        animation: social-node-pulse 2s ease-in-out infinite;
        transform-origin: center;
        transform-box: fill-box;
      }
      .social-platform {
        animation: social-platform-bounce 2s ease-in-out infinite;
        transform-origin: center;
        transform-box: fill-box;
      }
      .social-heart {
        animation: social-heart-float 2s ease-out infinite;
        transform-origin: center bottom;
      }
    `}</style>
    <svg width="60" height="24" viewBox="0 0 60 24" className="overflow-visible">
      {/* Network Connections */}
      <path d="M 30 12 L 12 6" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" strokeLinecap="round" />
      <path d="M 30 12 L 12 18" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" strokeLinecap="round" />
      <path d="M 30 12 L 48 6" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" strokeLinecap="round" />
      <path d="M 30 12 L 48 18" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" strokeLinecap="round" />

      {/* Outward Posts (AI scheduling to platforms) */}
      <path d="M 30 12 L 12 6" fill="none" stroke="rgba(255, 255, 255, 0.9)" strokeWidth="1.5" className="social-path" style={{ animationDelay: "0s" }} />
      <path d="M 30 12 L 48 18" fill="none" stroke="rgba(255, 255, 255, 0.9)" strokeWidth="1.5" className="social-path" style={{ animationDelay: "0.6s" }} />
      <path d="M 30 12 L 48 6" fill="none" stroke="rgba(255, 255, 255, 0.9)" strokeWidth="1.5" className="social-path" style={{ animationDelay: "1.2s" }} />
      
      {/* Inward Engagement (Likes/Comments coming back to dashboard) */}
      <path d="M 12 18 L 30 12" fill="none" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.2" className="social-path" style={{ strokeDasharray: "2 18", animationDelay: "0.3s" }} />
      <path d="M 48 6 L 30 12" fill="none" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.2" className="social-path" style={{ strokeDasharray: "2 18", animationDelay: "0.9s" }} />
      <path d="M 48 18 L 30 12" fill="none" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.2" className="social-path" style={{ strokeDasharray: "2 18", animationDelay: "1.5s" }} />

      {/* Central AI Dashboard Node */}
      <circle cx="30" cy="12" r="5" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" className="social-core" strokeDasharray="2 2" />
      <circle cx="30" cy="12" r="3" fill="#fff" className="social-core" style={{ animationDelay: "0s" }} />

      {/* Social Platforms (Satellites) */}
      <circle cx="12" cy="6" r="2.5" fill="rgba(255, 255, 255, 0.9)" className="social-platform" style={{ animationDelay: "0.4s" }} />
      <circle cx="12" cy="18" r="2.5" fill="rgba(255, 255, 255, 0.9)" className="social-platform" style={{ animationDelay: "0s" }} />
      <circle cx="48" cy="6" r="2.5" fill="rgba(255, 255, 255, 0.9)" className="social-platform" style={{ animationDelay: "1s" }} />
      <circle cx="48" cy="18" r="2.5" fill="rgba(255, 255, 255, 0.9)" className="social-platform" style={{ animationDelay: "0.8s" }} />

      {/* Floating Engagement Particles (Hearts/Likes) popping up at the satellites */}
      <g transform="translate(12, 4)">
        <g className="social-heart" style={{ animationDelay: "0.5s" }}>
          <path d="M 0 1.5 C 0 0, 2 0, 2 1.5 C 2 3, 0 4, 0 4 C 0 4, -2 3, -2 1.5 C -2 0, 0 0, 0 1.5 Z" fill="rgba(255, 255, 255, 0.9)" />
        </g>
      </g>
      <g transform="translate(48, 16)">
        <g className="social-heart" style={{ animationDelay: "1.3s" }}>
          <path d="M 0 1.5 C 0 0, 2 0, 2 1.5 C 2 3, 0 4, 0 4 C 0 4, -2 3, -2 1.5 C -2 0, 0 0, 0 1.5 Z" fill="rgba(255, 255, 255, 0.9)" />
        </g>
      </g>
      <g transform="translate(12, 16)">
        <g className="social-heart" style={{ animationDelay: "0.9s" }}>
          <path d="M 0 1.5 C 0 0, 2 0, 2 1.5 C 2 3, 0 4, 0 4 C 0 4, -2 3, -2 1.5 C -2 0, 0 0, 0 1.5 Z" fill="rgba(255, 255, 255, 0.9)" />
        </g>
      </g>
    </svg>
  </div>
);

export const WebsiteLoadAnimation = () => (
  <div className="flex items-center justify-center gap-1 h-8">
    <style>{`
      @keyframes bar-grow {
        0% { width: 4px; }
        50% { width: 16px; }
        100% { width: 4px; }
      }
      .load-bar {
        height: 2px;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 1px;
        animation: bar-grow 1s ease-in-out infinite;
      }
    `}</style>
    {[0, 1, 2, 3].map((i) => (
      <div
        key={i}
        className="load-bar"
        style={{ animationDelay: `${i * 0.15}s` }}
      />
    ))}
  </div>
);



export const PipelineAnimation = () => (
  <div className="flex items-center justify-center gap-1.5 h-8">
    <style>{`
      @keyframes chat-bubble-up {
        0% { transform: translateY(12px); opacity: 0; }
        20% { opacity: 1; }
        80% { opacity: 1; }
        100% { transform: translateY(-12px); opacity: 0; }
      }
      @keyframes chat-bubble-down {
        0% { transform: translateY(-12px); opacity: 0; }
        20% { opacity: 1; }
        80% { opacity: 1; }
        100% { transform: translateY(12px); opacity: 0; }
      }
      @keyframes ai-pulse {
        0%, 100% { r: 3; }
        50% { r: 4.5; }
      }
      .chat-user {
        animation: chat-bubble-up 2.4s ease-in-out infinite;
      }
      .chat-ai {
        animation: chat-bubble-down 2.4s ease-in-out infinite;
      }
      .ai-node {
        animation: ai-pulse 2.4s ease-in-out infinite;
      }
    `}</style>
    <svg width="64" height="24" viewBox="0 0 64 24" className="overflow-visible">
      {/* Connection lines */}
      <path d="M 10 12 L 54 12" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" strokeLinecap="round" />

      {/* User (Left) */}
      <circle cx="10" cy="12" r="3" fill="rgba(255, 255, 255, 0.7)" />
      
      {/* User chat bubbles flowing right/up */}
      <rect x="16" y="2" width="6" height="4" rx="2" fill="rgba(255, 255, 255, 0.9)" className="chat-user" style={{ animationDelay: "0s" }} />
      <rect x="26" y="2" width="6" height="4" rx="2" fill="rgba(255, 255, 255, 0.9)" className="chat-user" style={{ animationDelay: "0.8s" }} />
      <rect x="36" y="2" width="6" height="4" rx="2" fill="rgba(255, 255, 255, 0.9)" className="chat-user" style={{ animationDelay: "1.6s" }} />

      {/* AI Node (Center) */}
      <circle cx="32" cy="12" r="3" fill="#fff" className="ai-node" />
      <circle cx="32" cy="12" r="5.5" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />

      {/* AI chat bubbles flowing left/down */}
      <rect x="16" y="18" width="6" height="4" rx="2" fill="rgba(255, 255, 255, 0.85)" className="chat-ai" style={{ animationDelay: "0.4s" }} />
      <rect x="26" y="18" width="6" height="4" rx="2" fill="rgba(255, 255, 255, 0.85)" className="chat-ai" style={{ animationDelay: "1.2s" }} />
      <rect x="36" y="18" width="6" height="4" rx="2" fill="rgba(255, 255, 255, 0.85)" className="chat-ai" style={{ animationDelay: "2s" }} />

      {/* Customer (Right) */}
      <circle cx="54" cy="12" r="3" fill="rgba(255, 255, 255, 0.7)" />

      {/* Typing indicators */}
      <circle cx="48" cy="12" r="1" fill="rgba(255, 255, 255, 0.6)" style={{ animation: "crm-bar-pulse 1s ease-in-out infinite", animationDelay: "0s", transformOrigin: "center" }} />
      <circle cx="52" cy="12" r="1" fill="rgba(255, 255, 255, 0.6)" style={{ animation: "crm-bar-pulse 1s ease-in-out infinite", animationDelay: "0.2s", transformOrigin: "center" }} />
      <circle cx="56" cy="12" r="1" fill="rgba(255, 255, 255, 0.6)" style={{ animation: "crm-bar-pulse 1s ease-in-out infinite", animationDelay: "0.4s", transformOrigin: "center" }} />
    </svg>
  </div>
);
