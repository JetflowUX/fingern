const stats = [
  { value: "6", label: "Years in business" },
  { value: "178", label: "paying customers" },
  { value: "24", label: "current install capacity (MW)" },
  { value: "9", label: "Awards" },
];

const StatsSection = () => {
  return (
    <section className="bg-primary py-12">
      <div className="container-section py-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-primary-foreground/80 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
