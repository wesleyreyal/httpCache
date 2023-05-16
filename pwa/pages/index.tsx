import React from 'react';
import { ConfigurationEditor } from '../components/common/configurationEditor';

const json = {
  glossary: {
    title: 'example glossary',
    GlossDiv: {
      title: 'S',
      GlossList: {
        GlossEntry: {
          ID: 'SGML',
          SortAs: 'SGML',
          GlossTerm: 'Standard Generalized Markup Language',
          Acronym: 'SGML',
          Abbrev: 'ISO 8879:1986',
          GlossDef: {
            para: 'A meta-markup language, used to create markup languages such as DocBook.',
            GlossSeeAlso: ['GML', 'XML'],
          },
          GlossSee: 'markup',
        },
      },
    },
  },
};

const caddy =
  'example.com {\n' +
  '    root /path/to/site\n' +
  '    fastcgi / 127.0.0.1:9000 php\n' +
  '\n' +
  '    status 403 /forbidden\n' +
  '\n' +
  '    # Begin - Security\n' +
  '    # deny all direct access for these folders\n' +
  '    rewrite {\n' +
  '        if {path} match /(.git|cache|bin|logs|backups|tests)/.*$\n' +
  '        to /forbidden\n' +
  '    }\n' +
  '    # deny running scripts inside core system folders\n' +
  '    rewrite {\n' +
  '        if {path} match /(system|vendor)/.*\\.(txt|xml|md|html|yaml|php|pl|py|cgi|twig|sh|bat)$\n' +
  '        to /forbidden\n' +
  '    }\n' +
  '    # deny running scripts inside user folder\n' +
  '    rewrite {\n' +
  '        if {path} match /user/.*\\.(txt|md|yaml|php|pl|py|cgi|twig|sh|bat)$\n' +
  '        to /forbidden\n' +
  '    }\n' +
  '    # deny access to specific files in the root folder\n' +
  '    rewrite {\n' +
  '        if {path} match /(LICENSE.txt|composer.lock|composer.json|nginx.conf|web.config|htaccess.txt|\\.htaccess)\n' +
  '        to /forbidden\n' +
  '    }\n' +
  '    ## End - Security\n' +
  '\n' +
  '    # global rewrite should come last.\n' +
  '    rewrite {\n' +
  '        to  {path} {path}/ /index.php?_url={uri}\n' +
  '    }\n' +
  '}';
const Welcome = () => {
  return <ConfigurationEditor json={json} caddy={caddy} />;
};
export default Welcome;
