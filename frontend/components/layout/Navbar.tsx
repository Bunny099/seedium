import { Button } from "../ui/button";
import { Sprout } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-background/80 backdrop-blur-md border-b border-border py-4 px-8 flex justify-between items-center shadow-lg sticky top-0 z-50">
    
      <Link href="/" className="flex items-center gap-3">
        <div className="p-1 rounded-full bg-primary/20 hover:bg-accent/20 transition-colors">
          <Sprout className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-3xl font-extrabold text-primary-foreground tracking-tight hover:text-accent transition-colors">
          Seedium
        </h1>
      </Link>

      
      <div className="flex items-center gap-6">
        <Link
          href="/features"
          className="text-foreground/80 hover:text-accent transition-colors font-medium"
        >
          Features
        </Link>
        <Link
          href="/pricing"
          className="text-foreground/80 hover:text-accent transition-colors font-medium"
        >
          Pricing
        </Link>
        <Link
          href="/contact"
          className="text-foreground/80 hover:text-accent transition-colors font-medium"
        >
          Contact
        </Link>

        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 font-semibold shadow-md hover:shadow-xl transition-all hover:scale-105">
          Connect
        </Button>
      </div>
    </nav>
  );
}
