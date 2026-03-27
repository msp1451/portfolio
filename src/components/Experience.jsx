import React, { memo, useMemo } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ExperienceCard = memo(({ experience }) => (
  <motion.div
    variants={itemVariants}
    className="bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow p-6"
  >
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
      <h3 className="text-xl font-bold text-foreground">{experience.role}</h3>
      <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1 sm:mt-0">
        <Calendar className="w-4 h-4" />
        <span>{experience.period}</span>
      </div>
    </div>
    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
      <span className="font-medium text-primary">{experience.company}</span>
      <span className="flex items-center gap-1">
        <MapPin className="w-3.5 h-3.5" />
        {experience.location}
      </span>
    </div>
    <div className="space-y-4">
      {experience.teams.map((team, i) => (
        <div key={i}>
          <h4 className="text-sm font-semibold text-foreground/80 mb-2">{team.name}</h4>
          <ul className="list-disc ml-5 space-y-1.5 text-sm text-muted-foreground">
            {team.highlights.map((highlight, j) => (
              <li key={j}>{highlight}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </motion.div>
));
ExperienceCard.displayName = "ExperienceCard";

function ExperienceComponent() {
  const experiences = useMemo(() => [
    {
      role: "Software Development Engineer",
      company: "Amazon",
      location: "Bangalore, India",
      period: "June 2022 – Present",
      teams: [
        {
          name: "Grocery — Digital In-Store Experience",
          highlights: [
            "Designed and built a distributed URL resolution system end-to-end (DynamoDB + Redis + REST APIs) — from HLD to production in 6 weeks",
            "Led cross-team feature delivery across 4 teams for a cross-brand product discovery feature",
            "Reduced service latency by 25% through systematic performance analysis across S3, Hibernate, and threading layers",
            "Delivered full-stack CMS with 15+ Spring Boot APIs, React frontend, and Lambda routing layer",
            "Ramped into 22 packages across 7+ services in 8 months, shipping 64 CRs",
          ],
        },
        {
          name: "Ads — Sponsored Products",
          highlights: [
            "Led widget expansion from US to 6 international markets (IN, SA, AE, BR, MX, AU)",
            "Architected PySpark ETL pipelines and integrated ML models supporting 39K+ peak TPS",
            "Managed auction tuning analysis across 72 simulation dimensions",
            "Led latency regression deep-dive identifying +69.9ms clientATF and +23ms serverTime issues",
          ],
        },
        {
          name: "Payments — Amazon Pay",
          highlights: [
            "Architected standalone checkout driving +133 bps visitor and +374 bps purchase conversion",
            "Achieved 43% page load latency reduction and 62.5% UPI speedup (8s → 3s)",
            "Designed scalable payment retry architecture enabling instant retries on failures",
            "Led Graviton migration (JDK8→17) achieving 60-65% SafeTPM improvement and ~$60K annual savings",
            "Implemented circuit breaker in tier-1 service handling 13K+ TPS",
          ],
        },
      ],
    },
    {
      role: "Software Development Engineer Intern",
      company: "Amazon",
      location: "Bangalore, India",
      period: "May 2020 – June 2020",
      teams: [
        {
          name: "Payments",
          highlights: [
            "Redesigned coupon UX on payment select page (Scala, AUI), delivering 5 bps conversion improvement",
          ],
        },
      ],
    },
  ], []);

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center w-full">
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 flex items-center gap-4 text-foreground">
            <Briefcase className="w-8 h-8 sm:w-11 sm:h-11 text-primary drop-shadow-sm" />
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center mb-10">
            3.8+ years at Amazon building scalable systems across Payments, Ads, and
            Grocery — from high-TPS payment services to distributed in-store platforms.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} className="w-full max-w-3xl flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default memo(ExperienceComponent);
