export const styles = {
  container: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
  section: "relative py-16",
  glassEffect: "bg-background/5 border border-border backdrop-blur-lg",
  navItem: "relative cursor-pointer text-sm font-semibold rounded-full transition-colors",
}

export const variants = {
  navItem: {
    default: "text-foreground/80 hover:text-primary",
    active: "bg-muted text-primary",
  },
  button: {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-secondary text-white hover:bg-secondary/90",
    outline: "border border-primary text-primary hover:bg-primary/10",
  },
} 