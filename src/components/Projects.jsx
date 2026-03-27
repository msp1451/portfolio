import React, { memo, useMemo } from "react";
import { FolderKanban } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ProjectCard = memo(({ project }) => (
  <motion.div
    variants={itemVariants}
    className="bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow p-6 flex flex-col h-full"
  >
    <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">{project.title}</h3>
    <p className="text-base text-muted-foreground mb-4 flex-grow">{project.desc}</p>
    <div className="flex flex-wrap gap-2 mb-3 mt-auto">
      {project.tags.map((tag, i) => (
        <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-600">
          {tag}
        </span>
      ))}
    </div>
    {project.impact && (
      <p className="text-sm font-medium text-primary mt-2">{project.impact}</p>
    )}
  </motion.div>
));
ProjectCard.displayName = "ProjectCard";

function ProjectsComponent() {
  const projectsData = useMemo(() => [
    {
      title: "Distributed URL Resolution System",
      desc: "Designed and built an end-to-end distributed system for automated deeplink and QR code generation. Included DynamoDB with composite keys and GSI, Redis caching (Multi-AZ), batch-parallel REST APIs, and a 3-tier fallback chain — from HLD to production in 6 weeks.",
      tags: ["Java", "DynamoDB", "Redis", "REST APIs", "CDK", "System Design"],
      impact: "Reduced manual process from 4-5 hours to seconds via API",
    },
    {
      title: "Cross-Brand Product Discovery",
      desc: "Led feature design and cross-team delivery across 4 teams for a product discovery feature in multi-brand stores. Conducted deep investigation across 5 codebases, evaluated 5 architectural approaches, and authored a comprehensive HLD with phased rollout plan.",
      tags: ["System Design", "Cross-Team Leadership", "Architecture"],
      impact: "Eliminated cross-team dependencies for Phase 1 delivery",
    },
    {
      title: "Service Performance Optimization",
      desc: "Systematically diagnosed and resolved performance bottlenecks across a high-throughput service — tuned S3 concurrency (50→200), fixed multi-threaded RequestId propagation, resolved Cognito pagination infinite loops blocking pipelines for weeks.",
      tags: ["Java", "Performance", "S3", "Multithreading", "Debugging"],
      impact: "25% latency reduction (120s → 90s), unblocked team deployments",
    },
    {
      title: "Full-Stack CMS & Device Management Portal",
      desc: "Delivered a content management system with 15+ Spring Boot APIs, React frontend, Lambda routing layer, and CDK infrastructure. Enabled self-service configuration for device screens, eliminating manual database updates.",
      tags: ["React", "Spring Boot", "Lambda", "DynamoDB", "CDK"],
      impact: "~5,400 LOC shipped in compressed timeline",
    },
    {
      title: "International Marketplace Expansion",
      desc: "Led expansion of a revenue-generating ML-powered widget from US to 6 international markets. Built PySpark ETL pipelines, integrated ML models supporting 39K+ peak TPS, and managed auction tuning across 72 simulation dimensions.",
      tags: ["PySpark", "ML Integration", "ETL", "Multi-Marketplace"],
      impact: "Contributed to +$1M incremental revenue target",
    },
    {
      title: "Standalone Checkout Platform",
      desc: "Architected a standalone checkout experience for bills and recharges with async asset loading, prefetching, and caching strategies. Designed scalable payment retry architecture enabling instant retries on deterministic failures.",
      tags: ["Java", "Scala", "TypeScript", "UPI", "Performance"],
      impact: "+133 bps visitor conversion, 43% latency reduction, UPI 8s→3s",
    },
  ], []);

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center w-full">
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 flex items-center gap-4 text-foreground">
            <FolderKanban className="w-8 h-8 sm:w-11 sm:h-11 text-primary drop-shadow-sm" />
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center mb-10">
            Key projects spanning distributed systems, performance optimization,
            full-stack development, and ML-powered features — each delivered end-to-end
            from design to production.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default memo(ProjectsComponent);
