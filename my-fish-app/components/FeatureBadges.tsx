import { LifeBuoy, Truck, ShieldCheck } from "lucide-react";

type Feature = {
  label: string;
  caption: string;
  Icon: React.ElementType;
  ring: string;
  grad: string;
  icon: string;
};

const features: Feature[] = [
  {
    label: "Emergency support",
    caption: "24/7 help",
    Icon: LifeBuoy,
    ring: "ring-red-200/60 dark:ring-red-900/40",
    grad: "from-red-500 to-rose-500",
    icon: "text-white",
  },
  {
    label: "Free shipping",
    caption: "On orders over ₹999",
    Icon: Truck,
    ring: "ring-indigo-200/60 dark:ring-indigo-900/40",
    grad: "from-indigo-500 to-blue-500",
    icon: "text-white",
  },
  {
    label: "100% money back",
    caption: "30-day guarantee",
    Icon: ShieldCheck,
    ring: "ring-emerald-200/60 dark:ring-emerald-900/40",
    grad: "from-emerald-500 to-teal-500",
    icon: "text-white",
  },
];

function FeatureCard({ feature }: { feature: Feature }) {
  const { label, caption, Icon, ring, grad, icon } = feature;

  return (
    <div
      className={`group flex items-center gap-4 rounded-2xl border border-black/5 bg-white/70 p-4 shadow-sm ring-1 backdrop-blur-sm ${ring} dark:border-white/5 dark:bg-neutral-900/70`}
    >
      <span
        className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${grad} shadow-sm`}
        aria-hidden="true"
      >
        <Icon className={`h-6 w-6 ${icon}`} />
      </span>
      <div className="min-w-0">
        <p className="truncate text-base font-semibold text-neutral-900 dark:text-neutral-100">
          {label}
        </p>
        <p className="truncate text-sm text-neutral-600 dark:text-neutral-400">
          {caption}
        </p>
      </div>
    </div>
  );
}

export default function FeatureBadges() {
  return (
    <section className="w-full px-4 py-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.label} feature={feature} />
        ))}
      </div>
    </section>
  );
}
