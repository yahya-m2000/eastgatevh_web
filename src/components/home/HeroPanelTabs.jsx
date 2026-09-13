import { useState } from 'react';
import { Label, SectionHeading } from '@/components/editorial/primitives';
import { cn } from '@/lib/utils';

/**
 * Text-led tabbed "what we do" showcase, adopted from the Figma skeleton's
 * Home tab section — a row of underline-indicator tab buttons above a
 * two-column heading/body-and-bullets layout, replacing the previous
 * image-crossfade panel.
 */
const HeroPanelTabs = ({ tabs }) => {
  const [activeId, setActiveId] = useState(tabs[0].id);
  const activeTab = tabs.find((tab) => tab.id === activeId);

  return (
    <section className="bg-paper px-6 py-24 sm:px-10 md:py-32">
      <div className="container-page">
        <Label>What we do</Label>

        <div className="mb-16 flex flex-wrap gap-10 border-b border-border">
          {tabs.map((tab) => {
            const active = tab.id === activeId;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveId(tab.id)}
                className={cn(
                  '-mb-px shrink-0 whitespace-nowrap border-b-2 pb-4 text-sm transition-colors',
                  active
                    ? 'border-primary font-semibold text-ink'
                    : 'border-transparent text-muted hover:text-ink',
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="grid gap-14 md:grid-cols-2 md:gap-20">
          <SectionHeading>{activeTab.heading}</SectionHeading>
          <div>
            <p className="mb-8 text-base leading-relaxed text-muted">{activeTab.body}</p>
            <ul className="flex flex-col gap-3">
              {activeTab.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink">
                  <span className="mt-1.5 shrink-0 text-primary">&#9670;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPanelTabs;
