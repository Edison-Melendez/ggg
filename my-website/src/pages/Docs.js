import React from 'react';
import Layout from '@theme/Layout';

function HtmlDocs() {
  return (
    <Layout title="HTML Documentation">
      <iframe
        src="/html/index.html"
        style={{ width: '100%', height: '100vh', border: 'none' }}
      ></iframe>
    </Layout>
  );
}

export default HtmlDocs;
