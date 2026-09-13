import InteriorHero from '@/components/editorial/InteriorHero';
import InteriorSection from '@/components/editorial/InteriorSection';
import ContactForm from '@/components/ContactForm';
import Seo from '@/components/Seo';
import {
  contactDetails,
  contactWhoWeSpeakWith,
  designContent,
  pageHeroContent,
  pageMeta,
} from '@/content/siteContent';

const copy = designContent.contact;
const ContactPage = () => (
  <>
    <Seo {...pageMeta.contact} />
    <InteriorHero {...pageHeroContent.contact} />
    <section className="contact-section section-space page-gutter">
      <div className="contact-intro">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2>{copy.heading}</h2>
        <p>{copy.intro}</p>
        <dl className="contact-details">
          <div>
            <dt>{copy.emailLabel}</dt>
            <dd>
              <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
            </dd>
          </div>
          <div>
            <dt>{copy.locationLabel}</dt>
            <dd>{contactDetails.location}</dd>
          </div>
        </dl>
      </div>
      <ContactForm />
    </section>
    <InteriorSection
      index={1}
      section={{
        label: copy.audienceLabel,
        heading: copy.audienceHeading,
        content: { type: 'bullets', items: contactWhoWeSpeakWith },
      }}
    />
  </>
);
export default ContactPage;
