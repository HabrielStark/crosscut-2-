interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

export function TeamMember({ name, role, image }: TeamMemberProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl p-6 hover-lift press-effect
                    bg-gradient-to-br from-background to-muted/50 dark:from-[#000531] dark:to-[#000531]/50">
      {/* Decorative Elements */}
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/5 dark:bg-[#3444D5]/5 rounded-full 
                    group-hover:scale-150 group-hover:rotate-45 transition-all duration-500" />
      <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-primary/10 dark:bg-[#3444D5]/10 rounded-full 
                    group-hover:scale-150 group-hover:-rotate-45 transition-all duration-500 delay-100" />

      <div className="relative z-10">
        {/* Team Member Image */}
        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden 
                      bg-gradient-to-br from-primary/20 to-primary/5 dark:from-[#3444D5]/20 dark:to-[#3444D5]/5
                      group-hover:scale-110 transition-transform duration-300">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="text-xl font-bold text-center mb-2 text-[#3444D5] dark:text-[#4A5FFF] group-hover:text-[#FE5431] transition-colors">
          {name}
        </h3>
        <p className="text-[#0A0320] dark:text-white text-center group-hover:text-[#3444D5] dark:group-hover:text-[#4A5FFF] transition-colors">
          {role}
        </p>

        {/* Social Links */}
        <div className="mt-4 flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <SocialLink icon="linkedin" />
          <SocialLink icon="twitter" />
        </div>
      </div>
    </div>
  );
}

function SocialLink({ icon }: { icon: string }) {
  return (
    <a href="#" className="text-[#3444D5]/50 hover:text-[#3444D5] dark:text-[#4A5FFF]/50 dark:hover:text-[#4A5FFF] transition-colors">
      <span className="sr-only">{icon}</span>
      <div className="w-5 h-5">{/* Icon SVG */}</div>
    </a>
  );
}