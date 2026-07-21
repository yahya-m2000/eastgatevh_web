import { forwardRef } from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cn } from '@/lib/utils';

const NavigationMenu = forwardRef(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn('relative flex items-center', className)}
    {...props}
  >
    {children}
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = 'NavigationMenu';

const NavigationMenuList = forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn('flex list-none items-center gap-1', className)}
    {...props}
  />
));
NavigationMenuList.displayName = 'NavigationMenuList';

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const NavigationMenuLink = forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Link
    ref={ref}
    className={cn(
      'rounded-full px-4 py-2 text-sm font-medium text-ink/70 transition-colors hover:text-ink data-[active]:text-ink data-[active]:font-semibold',
      className,
    )}
    {...props}
  />
));
NavigationMenuLink.displayName = 'NavigationMenuLink';

export { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink };
