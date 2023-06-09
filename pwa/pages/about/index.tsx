import React from 'react';
import { Subtitle, Title, Text } from '../../components/common/text';
import Link from 'next/link';
import { NextPage } from 'next';

type AboutPropsType = {
  type: AllowedElement;
  text?: string;
  elements?: string[];
};

type AllowedElement = 'title' | 'subtitle' | 'text' | 'list';

function mapTextComponent({ type, text, elements }: AboutPropsType, index: number): React.ReactElement | undefined {
  switch (type) {
    case 'title':
      return <Title title={text || ''} key={index} />;
    case 'subtitle':
      return <Subtitle text={text || ''} key={index} />;
    case 'text':
      return <Text text={text || ''} key={index} />;
    case 'list':
      return (
        <ul className="list-disc pl-8" key={index}>
          {elements && elements.map((element, idx) => <li key={idx}>{element}</li>)}
        </ul>
      );
    default:
      return undefined;
  }
}

const aboutData: AboutPropsType[] = [
  { type: 'title', text: 'Terms & Conditions' },
  { type: 'subtitle', text: 'CONDITIONS GÉNÉRALES' },
  {
    type: 'text',
    text: 'Les présentes conditions générales régissent l’utilisation du site souin.app. Ce site appartient et est géré par Monsieur Sylvain COMBRAQUE',
  },
  {
    type: 'text',
    text: 'En utilisant ce site, vous indiquez que vous avez lu et compris les conditions d’utilisation et que vous acceptez de les respecter en tout temps.',
  },
  { type: 'text', text: 'Type de site : Saas' },
  { type: 'subtitle', text: 'Propriété intellectuelle' },
  {
    type: 'text',
    text: 'Tout contenu publié et mis à disposition sur ce site est la propriété de Sylvain COMBRAQUE et de ses créateurs. Cela comprend, mais n’est pas limité aux images, textes, logos, documents, fichiers téléchargeables et tout ce qui contribue à la composition de ce site.',
  },
  { type: 'subtitle', text: 'Comptes' },
  { type: 'text', text: 'Lorsque vous créez un compte sur notre site, vous acceptez ce qui suit :' },
  {
    type: 'list',
    elements: [
      'que vous êtes seul responsable de votre compte et de la sécurité et la confidentialité de votre compte, y compris les mots de passe ou les renseignements de nature délicate joints à ce compte, et',
      'que tous les renseignements personnels que vous nous fournissez par l’entremise de votre compte sont à jour, exacts et véridiques et que vous mettrez à jour vos renseignements personnels s’ils changent.',
    ],
  },
  {
    type: 'text',
    text: 'Nous nous réservons le droit de suspendre ou de résilier votre compte si vous utilisez notre site illégalement ou si vous violez les conditions d’utilisation acceptable.',
  },
  { type: 'subtitle', text: 'Ventes des biens et Services' },
  { type: 'text', text: 'Ce document régit la vente des services mis à disposition sur notre site.' },
  { type: 'text', text: 'Les services que nous offrons comprennent :' },
  { type: 'list', elements: ['Gestion de cache HTTP'] },
  {
    type: 'text',
    text: 'Les services liés à ce document sont les services qui sont affichés sur notre site au moment où vous y accédez. Toutes les informations, descriptions ou images que nous fournissons sur nos services sont décrites et présentées avec la plus grande précision possible. Cependant, nous ne sommes pas légalement tenus par ces informations, descriptions ou images car nous ne pouvons pas garantir l’exactitude de chaque produit ou service que nous fournissons. Vous acceptez d’acheter ces services à vos propres risques.',
  },
  { type: 'subtitle', text: 'Paiements' },
  { type: 'text', text: 'Nous acceptons les modes de paiement suivants sur ce site :' },
  { type: 'list', elements: ['Carte bancaire'] },
  {
    type: 'text',
    text: 'Lorsque vous nous fournissez vos renseignements de paiement, vous nous confirmez que vous avez autorisé l’utilisation et l’accès à l’instrument de paiement que vous avez choisi d’utiliser. En nous fournissant vos détails de paiement, vous confirmez que vous nous autorisez à facturer le montant dû à cet instrument de paiement.',
  },
  {
    type: 'text',
    text: 'Si nous estimons que votre paiement a violé une loi ou l’une de nos conditions d’utilisation, nous nous réservons le droit d’annuler votre transaction.',
  },
  { type: 'subtitle', text: 'Services' },
  { type: 'text', text: 'Les services seront facturés en totalité à la commande du service.' },
  { type: 'subtitle', text: 'Abonnements' },
  {
    type: 'text',
    text: 'Tous nos abonnements récurrents seront automatiquement facturés et renouvelés jusqu’à ce que nous recevions d’avis que vous souhaitez annuler l’abonnement.',
  },
  { type: 'subtitle', text: 'Limitation de responsabilité' },
  {
    type: 'text',
    text: 'Sylvain COMBRAQUE ou l’un de ses employés sera tenu responsable de tout problème découlant de ce site. Néanmoins, Sylvain COMBRAQUE et ses employés ne seront pas tenus responsables de tout problème découlant de toute utilisation irrégulière de ce site.',
  },
  { type: 'subtitle', text: 'Indemnité' },
  {
    type: 'text',
    text: 'En tant qu’utilisateur, vous indemnisez par les présentes Sylvain COMBRAQUE de toute responsabilité, de tout coût, de toute cause d’action, de tout dommage ou de toute dépense découlant de votre utilisation de ce site ou de votre violation de l’une des dispositions énoncées dans le présent document.',
  },
  { type: 'subtitle', text: 'Lois applicables' },
  {
    type: 'text',
    text: 'Ce document est soumis aux lois applicables en France et vise à se conformer à ses règles et règlements nécessaires. Cela inclut la réglementation à l’échelle de l’UE énoncée dans le RGPD.',
  },
  { type: 'subtitle', text: 'Divisibilité' },
  {
    type: 'text',
    text: 'Si, à tout moment, l’une des dispositions énoncées dans le présent document est jugée incompatible ou invalide en vertu des lois applicables, ces dispositions seront considérées comme nulles et seront retirées du présent document. Toutes les autres dispositions ne seront pas touchées par les lois et le reste du document sera toujours considéré comme valide.',
  },
  { type: 'subtitle', text: 'Modifications' },
  {
    type: 'text',
    text: 'Ces conditions générales peuvent être modifiées de temps à autre afin de maintenir le respect de la loi et de refléter tout changement à la façon dont nous gérons notre site et la façon dont nous nous attendons à ce que les utilisateurs se comportent sur notre site. Nous recommandons à nos utilisateurs de vérifier ces conditions générales de temps à autre pour s’assurer qu’ils sont informés de toute mise à jour. Au besoin, nous informerons les utilisateurs par courriel des changements apportés à ces conditions ou nous afficherons un avis sur notre site.',
  },
  { type: 'subtitle', text: 'Contact' },
  {
    type: 'text',
    text: 'Veuillez communiquer avec nous si vous avez des questions ou des préoccupations. Nos coordonnées sont les suivantes :',
  },
  { type: 'text', text: 'Téléphone : 06 06 06 06 06' },
];

const About: NextPage = () => {
  return (
    <>
      <div className="max-w-2xl mx-auto px-4 py-8">
        {aboutData.map((element, index) => {
          return mapTextComponent(element, index);
        })}
        <p>
          Email :{' '}
          <Link href="mailto:jointure.miraculeux_08@icloud.com" className="text-blue-500">
            jointure.miraculeux_08@icloud.com
          </Link>
        </p>
        <p>Adresse : 64 rue de Sèvres, 92100, Boulogne-Billancourt</p>
      </div>
    </>
  );
};

export default About;
