import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const ActionLink = ({ to, href, children, className = '' }) => {
  const Element = href ? 'a' : Link;
  const destination = href ? { href } : { to };
  return (
    <Element {...destination} className={`action-link ${className}`}>
      <span>{children}</span>
      <span className="action-link-icon">
        <ArrowUpRight size={20} aria-hidden="true" />
      </span>
    </Element>
  );
};
export default ActionLink;
