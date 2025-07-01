import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

const SEO = ({
  title = 'Standaard titel',
  description = 'Standaard beschrijving',
  keywords = 'react, typescript, seo',
  canonical = '/',
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
};

export default SEO;
