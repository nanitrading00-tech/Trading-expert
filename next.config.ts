import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Stops Next.js from regenerating AGENTS.md and CLAUDE.md on every build.
  agentRules: false,
};

export default nextConfig;
