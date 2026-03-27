import React, { memo, useMemo } from "react";
import { Trophy, Shield, Users, Zap, Code2, BookOpen, Brain } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const StatCard = memo(({ stat }) => (
  <motion.div
    variants={itemVariants}
    className="bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow p-6 flex flex-col items-center text-center"
  >
    <div className="p-3 rounded-xl bg-neutral-200 dark:bg-neutral-800 text-primary mb-3">
      {stat.icon}
    </div>
    <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
    <div className="text-sm text-muted-foreground">{stat.label}</div>
  </motion.div>
));
StatCard.displayName = "StatCard";

const AchievementCard = memo(({ achievement }) => (
  <motion.div
    variants={itemVariants}
    className="bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow p-5 flex items-start gap-4"
  >
    <div className="p-2.5 rounded-xl bg-neutral-200 dark:bg-neutral-800 text-primary flex-shrink-0 mt-0.5">
      {achievement.icon}
    </div>
    <div>
      <h3 className="text-base font-semibold text-foreground mb-1">{achievement.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{achievement.desc}</p>
    </div>
  </motion.div>
));
AchievementCard.displayName = "AchievementCard";

function AchievementsComponent() {
  const stats = useMemo(() => [
    { icon: <Code2 className="w-6 h-6" />, value: "196+", label: "Code Reviews (Authored + Reviewed)" },
    { icon: <Zap className="w-6 h-6" />, value: "30K+", label: "Lines of Code Changed" },
    { icon: <Shield className="w-6 h-6" />, value: "64%", label: "On-Call Resolution Rate" },
    { icon: <Brain className="w-6 h-6" />, value: "7+", label: "Services Owned / Contributed" },
  ], []);

  const achievements = useMemo(() => [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Peak Readiness — Zero Outages",
      desc: "Led Prime Day 2023 and Diwali 2023 readiness for tier-1 payment services. Owned alarm audits, stress testing (FLO/QLB), scaling calculations, and circuit breaker deployments during blocked days. Both peaks completed with zero issues.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Mentorship & Intern Development",
      desc: "Mentored an SDE intern end-to-end — provided onboarding resources, weekly 1:1s, design review guidance, and code review coaching. Provided detailed feedback contributing to the hire/no-hire decision.",
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      title: "MGHD & SFI Certified Interviewer",
      desc: "Certified to conduct technical interviews at Amazon, contributing to hiring bar-raising across the organization.",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Complex Debugging — Solved 4+ Month Persistent Issues",
      desc: "Resolved multiple persistent on-call issues that had been passed between teams for months — including stress test failures (disk usage at 100%, 90GB logs/hour), chaos test misconfigurations, and production payment failures requiring cross-team COE authorship.",
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Developer Experience & Knowledge Sharing",
      desc: "Created team-wide testing wiki and OPF setup guide (didn't exist before), conducted WLS sessions, built master monitoring dashboards, and onboarded services to RTLA — eliminating gamma environment bottlenecks for the entire team.",
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Design Review Leadership",
      desc: "Reviewed 4+ external design docs with critical architectural feedback — caught interface scalability issues, incorrect weblab configurations, and edge cases in payment retry flows that senior engineers missed.",
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "GenAI Innovation",
      desc: "Built an e-commerce chatbot using multiple MCP servers for real-time product search and payment processing. Developed a Knowledge-Graph RAG model on Amazon Bedrock. Documented as a team GenAI adoption case study.",
    },
  ], []);

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center w-full">
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 flex items-center gap-4 text-foreground">
            <Trophy className="w-8 h-8 sm:w-11 sm:h-11 text-primary drop-shadow-sm" />
            Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center mb-10">
            Impact beyond code — operational excellence, mentorship, peak readiness,
            and technical leadership across 3.8+ years at Amazon.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div variants={containerVariants} className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} />
          ))}
        </motion.div>

        {/* Achievement Cards */}
        <motion.div variants={containerVariants} className="w-full max-w-3xl flex flex-col gap-4">
          {achievements.map((achievement, i) => (
            <AchievementCard key={i} achievement={achievement} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default memo(AchievementsComponent);
