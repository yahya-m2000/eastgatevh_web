import { useEffect } from 'react';

const ensureMetaDescriptionTag = () => {
  let tag = document.querySelector('meta[name="description"]');

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', 'description');
    document.head.appendChild(tag);
  }

  return tag;
};

const Seo = ({ title, description }) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      const descriptionTag = ensureMetaDescriptionTag();
      descriptionTag.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
};

export default Seo;
