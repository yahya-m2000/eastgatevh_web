import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { designContent } from '@/content/siteContent';

const pad = (n) => String(n).padStart(2, '0');

const StoryStages = ({ items, label }) => {
  const [active, setActive] = useState(0);
  const copy = designContent.story;
  return (
    <Tabs
      value={String(active)}
      onValueChange={(value) => setActive(Number(value))}
      className="story-stages"
    >
      <div className="story-stage-rail">
        <TabsList aria-label={label} className="story-stage-list">
          {items.map((item, i) => (
            <TabsTrigger
              key={item.title}
              value={String(i)}
              className="story-stage-tab"
              data-reached={i <= active}
            >
              <span className="story-stage-index">{pad(i + 1)}</span>
              <span className="story-stage-title">{item.title}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        <span
          className="story-stage-progress"
          style={{ '--progress': active / items.length }}
          aria-hidden="true"
        />
      </div>
      {items.map((item, i) => (
        <TabsContent key={item.title} value={String(i)} className="story-stage-panel">
          <figure className="story-stage-media">
            <img src={item.image.src} alt={item.image.alt} decoding="async" />
          </figure>
          <div className="story-stage-copy">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <div className="story-stage-nav">
              <span className="story-stage-count">
                {pad(i + 1)} / {pad(items.length)}
              </span>
              <button type="button" onClick={() => setActive(i - 1)} disabled={i === 0}>
                <ArrowLeft size={18} aria-hidden="true" />
                <span className="sr-only">{copy.previous}</span>
              </button>
              <button
                type="button"
                onClick={() => setActive(i + 1)}
                disabled={i === items.length - 1}
              >
                <ArrowRight size={18} aria-hidden="true" />
                <span className="sr-only">{copy.next}</span>
              </button>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};
export default StoryStages;
