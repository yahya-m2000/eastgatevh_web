import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { navLinks } from '@/content/siteContent';
import { cn } from '@/lib/utils';

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastPathname, setLastPathname] = useState(location.pathname);

  if (location.pathname !== lastPathname) {
    setLastPathname(location.pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-30 border-b border-transparent transition-all duration-300',
        scrolled ? 'border-border bg-paper/80 backdrop-blur-xl shadow-sm' : 'bg-transparent',
      )}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <NavLink
          to="/"
          aria-label="EVH home"
          className="font-display text-lg font-extrabold tracking-widest text-primary"
        >
          EVH
        </NavLink>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.path}>
                <NavigationMenuLink asChild active={location.pathname === link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      cn(
                        'rounded-full px-4 py-2 text-sm font-medium text-ink/70 transition-colors hover:text-ink',
                        isActive && 'font-semibold text-ink',
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:block">
          <Button asChild>
            <NavLink to="/contact">Contact Us</NavLink>
          </Button>
        </div>

        <Dialog open={mobileOpen} onOpenChange={setMobileOpen}>
          <DialogTrigger asChild>
            <button
              type="button"
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Navigate</DialogTitle>
            <nav className="flex flex-1 flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      'rounded-xl px-4 py-3 text-base font-medium text-ink/70 transition-colors hover:bg-ink/5 hover:text-ink',
                      isActive && 'bg-primary/5 font-semibold text-primary',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <Button asChild size="lg" className="w-full">
              <NavLink to="/contact">Contact Us</NavLink>
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
};

export default Header;
