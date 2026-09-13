import { NavLink } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowUpRight, X } from 'lucide-react';
import Logo from '@/components/Logo';
import { contactDetails, designContent, navLinks } from '@/content/siteContent';

const MenuOverlay = ({ open, onOpenChange, triggerRef }) => (
  <Dialog.Root open={open} onOpenChange={onOpenChange}>
    <Dialog.Portal>
      <Dialog.Overlay className="menu-backdrop" />
      <Dialog.Content
        className="menu-panel"
        aria-describedby={undefined}
        data-lenis-prevent
        onCloseAutoFocus={(event) => {
          event.preventDefault();
          triggerRef.current?.focus();
        }}
      >
        <div className="menu-top">
          <Logo invert />
          <Dialog.Close className="menu-close" aria-label={designContent.closeMenu}>
            <X size={24} />
          </Dialog.Close>
        </div>
        <Dialog.Title className="eyebrow">{designContent.navigation}</Dialog.Title>
        <nav>
          {[...navLinks, designContent.contactLink].map((item, i) => (
            <NavLink
              className="menu-link"
              key={item.path}
              to={item.path}
              onClick={() => onOpenChange(false)}
              style={{ '--item-index': i }}
            >
              <span className="menu-index">{String(i + 1).padStart(2, '0')}</span>
              <span>{item.label}</span>
              <ArrowUpRight aria-hidden="true" />
            </NavLink>
          ))}
        </nav>
        <a className="menu-email" href={`mailto:${contactDetails.email}`}>
          {contactDetails.email}
        </a>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
export default MenuOverlay;
