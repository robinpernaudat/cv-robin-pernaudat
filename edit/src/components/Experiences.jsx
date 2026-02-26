import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    period: "06-2020 à aujourd'hui",
    title: "Ingénieur robotique & informatique",
    company: "Capsix Robotique",
    context: "Conception d'un système de massage robotisé et de sa plateforme logicielle.",
    highlights: [
      "Mise en place de l'infrastructure IT, du serveur de supervision Rust et des outils de management des robots.",
      "Développement de logiciels en C++/Qt5 et Rust (supervision, tâches de fond, synchronisation, collecte de logs, alertes).",
      "Conception d'algorithmes robotiques (PID pression, évitement limites mécaniques, recalage d'avatar 3D) et pilotage du bras Kuka LBR Med.",
      "Architecture réseau des systèmes (MQTT, échanges sérialisés), prototypage de cartes électroniques ESP32 et suivi de production.",
      "Pilotage de la plateforme https://www.iyu.care et du site e-commerce https://store.iyu.care.",
    ],
  },
  {
    period: "11-2019 à 06-2020",
    title: "Co-fondateur technique",
    company: "VDSP (Vos Données Sous Protection)",
    context: "Création d'entreprise en période Covid.",
    highlights: [
      "Mise en place de l'infrastructure technique.",
      "Finalisation du prototype produit.",
      "Prospection commerciale pour la vente de services.",
    ],
  },
  {
    period: "02-2019 à 10-2019",
    title: "Développement logiciel",
    company: "Projet entrepreneurial",
    context: "Solution de télé-sauvegarde en vue d'une création d'entreprise.",
    highlights: [
      "Développement C++ et Erlang pour le moteur logiciel.",
      "Développement du site de management d'un groupe de machines.",
    ],
  },
  {
    period: "05-2014 à 12-2018",
    title: "Ingénieur R&D (leader technique)",
    company: "Global Imaging Online (NGI Groupe)",
    context: "Télétravail sur un PACS médical.",
    highlights: [
      "Évolution et maintien d'une plateforme PACS complexe.",
      "Continuité technique de la mission réalisée chez Amesys conseil.",
    ],
  },
  {
    period: "10-2011 à 03-2014",
    title: "Ingénieur d'étude",
    company: "Amesys conseil",
    context: "Missions en développement logiciel et qualification.",
    highlights: [
      "Développement PACS (PHP, MySQL, HTML5, JavaScript, C/C++, Linux/CentOS, DICOM, ZeroC, redondance BDD).",
      "Développement Qt/C++ Android pour un système de confort patient avec affichage multimédia et OpenGL.",
      "Mission aéronautique: qualification moteur Rafale M88 (modélisation Matlab, validation fonctionnelle, DO-178B).",
    ],
  },
  {
    period: "05-2011 à 09-2011",
    title: "Ingénieur de recherche et développement",
    company: "PICVIZ Labs (Lyon)",
    context: "Startup d'analyse de logs.",
    highlights: [
      "Développement C/C++ et calcul GPU CUDA.",
      "Datamining, expressions régulières, Flex/Bison, Re2c.",
      "IHM Qt (widgets, MVC, programmation concurrente).",
    ],
  },
  {
    period: "02-2011 à 03-2011",
    title: "Ingénieur de recherche et développement",
    company: "SAS AABAM (Fleury-d'Aude)",
    context: "Démarrage du produit d'une jeune entreprise de numérisation 3D dentaire.",
    highlights: [
      "Développement C/C++.",
      "Vision par ordinateur et reconstruction 3D à partir de séquences d'images.",
    ],
  },
  {
    period: "04-2010 à 09-2010",
    title: "Stage de recherche",
    company: "CIRAD avec le LIRMM (Montpellier)",
    context: "Reconnaissance automatique de cernes de bois sur images à rayons X.",
    highlights: [
      "Analyse d'image, reconnaissance de formes et d'objets, traitement du signal.",
      "Développement Java sous Linux et Windows.",
      "Gestion de versions avec SVN.",
    ],
  },
  {
    period: "12-2009 à 01-2010",
    title: "Programmation parallèle GPU",
    company: "Université de Perpignan",
    context: "Parallélisation d'un logiciel de calcul de phylogénie.",
    highlights: [
      "Portage C/C++ sous Visual Studio avec CUDA.",
      "Amélioration importante des performances grâce à l'exécution GPU.",
      "Gestion de versions avec SVN.",
    ],
  },
  {
    period: "06-2009 à 09-2009",
    title: "Intégration robotique et vision par ordinateur",
    company: "interHM (Montagnat)",
    context: "Conception et réalisation d'une machine de production robotisée.",
    highlights: [
      "Conception électrotechnique et pneumatique, programmation d'automates et robot FANUC M-710iC.",
      "Vision par ordinateur (OpenCV), reconnaissance d'objets et développement d'un logiciel d'optimisation.",
      "Rédaction du cahier des charges, développement et mise en service.",
    ],
  },
  {
    period: "04-2007 à 07-2007",
    title: "Électronicien (stage)",
    company: "B.K. Pulse Ltd (Milton Keynes, Angleterre)",
    context: "Pôle R&D: conception d'outils et de contrôleurs de machines.",
    highlights: [
      "Conception et réalisation d'une carte électronique.",
      "Programmation C/ASM sur microcontrôleurs, interfaces RS232 et USB.",
      "Développement logiciel d'exploitation de machines (Visual Studio, C/C++) et simulation Matlab/Simulink.",
    ],
  },
];

export default function Experiences() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6">
      <h2 className="text-lg font-semibold text-slate-800 sm:text-xl">Expériences professionnelles</h2>
      <div className="mt-4 space-y-3">
        {experiences.map((experience) => (
          <ExperienceCard
            key={`${experience.period}-${experience.company}`}
            period={experience.period}
            title={experience.title}
            company={experience.company}
            context={experience.context}
            highlights={experience.highlights}
          />
        ))}
      </div>
    </section>
  );
}
