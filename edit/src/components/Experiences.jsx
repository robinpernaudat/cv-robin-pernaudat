import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    period: "06-2020 à aujourd'hui",
    period_us: "06-2020 - Present",
    title: "Tech lead R&D, architecte robotique et système d'information",
    title_us: "Tech lead R&D, robotics architect et SI",
    company: "Capsix Robotique",
    context: "Conception d'un système de massage robotisé et de sa plateforme logicielle.",
    context_us: "Design of a robotic massage system and of its software platform.",
    highlights: [
      "Mise en place de l'infrastructure IT, du serveur de supervision Rust et des outils de management des robots.",
      "Développement de logiciels en C++/Qt5 et Rust (supervision, tâches de fond, synchronisation, collecte de logs, alertes).",
      "Conception d'algorithmes robotiques et intelligence artificielle (PID pression, évitement limites mécaniques, recalage d'avatar 3D) et pilotage du bras Kuka LBR Med.",
      "Architecture robotique (MQTT, échanges sérialisés), prototypage de cartes électroniques ESP32 et suivi de production.",
      "Pilotage de la plateforme https://www.iyu.care et du site e-commerce https://store.iyu.care.",
    ],
    highlights_us: [
      "Setup of the IT infrastructure, the Rust supervision server and the robot management tools.",
      "Development of software in C++/Qt5 and Rust (supervision, background tasks, synchronization, log collection, alerts).",
      "Design of robotic algorithms and artificial intelligence (pressure PID, mechanical limit avoidance, 3D avatar recalibration) and control of the Kuka LBR Med arm.",
      "Robotic architecture (MQTT, serialized exchanges), prototyping of ESP32 electronic boards and production tracking.",
      "Operation of the https://www.iyu.care platform and of the e-commerce site https://store.iyu.care.",
    ],
  },
  {
    period: "11-2019 à 06-2020",
    period_us: "11-2019 - 06-2020",
    title: "Co-fondateur technique",
    title_us: "Technical co-founder",
    company: "VDSP (Vos Données Sous Protection)",
    context: "Création d'entreprise en période Covid.",
    context_us: "Creation of a company during the Covid period.",
    highlights: [
      "Mise en place de l'infrastructure technique.",
      "Finalisation du prototype produit.",
      "Prospection commerciale pour la vente de services.",
    ],
    highlights_us: [
      "Technical infrastructure setup.",
      "Finalizing the product prototype.",
      "Commercial prospecting for the sale of services.",
    ],
  },
  {
    period: "02-2019 à 10-2019",
    period_us: "02-2019 - 10-2019",
    title: "Développement logiciel",
    title_us: "Software development",
    company: "Projet entrepreneurial",
    context: "Solution de télé-sauvegarde en vue d'une création d'entreprise.",
    context_us: "Backup solution in view of launching a company.",
    highlights: [
      "Développement C++ et Erlang pour le moteur logiciel.",
      "Développement du site de management d'un groupe de machines.",
    ],
    highlights_us: [
      "C++ and Erlang development for the software engine.",
      "Development of the management website for a fleet of machines.",
    ],
  },
  {
    period: "05-2014 à 12-2018",
    period_us: "05-2014 - 12-2018",
    title: "Ingénieur R&D (leader technique)",
    title_us: "R&D engineer (technical lead)",
    company: "Global Imaging Online (NGI Groupe)",
    context: "Télétravail sur un PACS médical.",
    context_us: "Remote work on a medical PACS.",
    highlights: [
      "Évolution et maintien d'une plateforme PACS complexe.",
      "Continuité technique de la mission réalisée chez Amesys conseil.",
    ],
    highlights_us: [
      "Evolution and maintenance of a complex PACS platform.",
      "Technical continuity of the mission carried out at Amesys conseil.",
    ],
  },
  {
    period: "10-2011 à 03-2014",
    period_us: "10-2011 - 03-2014",
    title: "Ingénieur d'étude",
    title_us: "R&D engineer",
    company: "Amesys conseil",
    context: "Missions en développement logiciel et qualification.",
    context_us: "Missions in software development and qualification.",
    highlights: [
      "Développement PACS (PHP, MySQL, HTML5, JavaScript, C/C++, Linux/CentOS, DICOM, ZeroC, redondance BDD).",
      "Développement Qt/C++ Android pour un système de confort patient avec affichage multimédia et OpenGL.",
      "Mission aéronautique: qualification moteur Rafale M88 (modélisation Matlab, validation fonctionnelle, DO-178B).",
    ],
    highlights_us: [
      "PACS development (PHP, MySQL, HTML5, JavaScript, C/C++, Linux/CentOS, DICOM, ZeroC, DB redundancy).",
      "Qt/C++ Android development for a patient comfort system with multimedia display and OpenGL.",
      "Aerospace mission: qualification of the Rafale M88 engine (Matlab modeling, functional validation, DO-178B).",
    ],
  },
  {
    period: "05-2011 à 09-2011",
    period_us: "05-2011 - 09-2011",
    title: "Ingénieur de recherche et développement",
    title_us: "Research & development engineer",
    company: "PICVIZ Labs (Lyon)",
    context: "Startup d'analyse de logs.",
    context_us: "Log analysis startup.",
    highlights: [
      "Développement C/C++ et calcul GPU CUDA.",
      "Datamining, expressions régulières, Flex/Bison, Re2c.",
      "IHM Qt (widgets, MVC, programmation concurrente).",
    ],
    highlights_us: [
      "C/C++ and CUDA GPU development.",
      "Datamining, regular expressions, Flex/Bison, Re2c.",
      "Qt UI (widgets, MVC, concurrent programming).",
    ],
  },
  {
    period: "02-2011 à 03-2011",
    period_us: "02-2011 - 03-2011",
    title: "Ingénieur de recherche et développement",
    title_us: "Research & development engineer",
    company: "SAS AABAM (Fleury-d'Aude)",
    context: "Démarrage du produit d'une jeune entreprise de numérisation 3D dentaire.",
    context_us: "Kickoff of the product of a young 3D dental digitization company.",
    highlights: [
      "Développement C/C++.",
      "Vision par ordinateur et reconstruction 3D à partir de séquences d'images.",
    ],
    highlights_us: [
      "C/C++ development.",
      "Computer vision and 3D reconstruction from image sequences.",
    ],
  },
  {
    period: "04-2010 à 09-2010",
    period_us: "04-2010 - 09-2010",
    title: "Stage de recherche",
    title_us: "Research internship",
    company: "CIRAD avec le LIRMM (Montpellier)",
    context: "Reconnaissance automatique de cernes de bois sur images à rayons X.",
    context_us: "Automatic detection of wood grain on X-ray images.",
    highlights: [
      "Analyse d'image, reconnaissance de formes et d'objets, traitement du signal.",
      "Développement Java sous Linux et Windows.",
      "Gestion de versions avec SVN.",
    ],
    highlights_us: [
      "Image analysis, shape and object recognition, signal processing.",
      "Java development on Linux and Windows.",
      "Version management with SVN.",
    ],
  },
  {
    period: "12-2009 à 01-2010",
    period_us: "12-2009 - 01-2010",
    title: "Programmation parallèle GPU",
    title_us: "GPU parallel programming",
    company: "Université de Perpignan",
    context: "Parallélisation d'un logiciel de calcul de phylogénie.",
    context_us: "Parallelization of a phylogenetic computation software.",
    highlights: [
      "Portage C/C++ sous Visual Studio avec CUDA.",
      "Amélioration importante des performances grâce à l'exécution GPU.",
      "Gestion de versions avec SVN.",
    ],
    highlights_us: [
      "C/C++ porting to Visual Studio with CUDA.",
      "Significant performance improvement thanks to GPU execution.",
      "Version management with SVN.",
    ],
  },
  {
    period: "06-2009 à 09-2009",
    period_us: "06-2009 - 09-2009",
    title: "Intégration robotique et vision par ordinateur",
    title_us: "Robotics integration & computer vision",
    company: "interHM (Montagnat)",
    context: "Conception et réalisation d'une machine de production robotisée.",
    context_us: "Design and realization of a robotic production machine.",
    highlights: [
      "Conception électrotechnique et pneumatique, programmation d'automates et robot FANUC M-710iC.",
      "Vision par ordinateur (OpenCV), reconnaissance d'objets et développement d'un logiciel d'optimisation.",
      "Rédaction du cahier des charges, développement et mise en service.",
    ],
    highlights_us: [
      "Electrical and pneumatic design, PLC programming and FANUC M-710iC robot programming.",
      "Computer vision (OpenCV), object recognition and development of an optimization software.",
      "Specification writing, development and commissioning.",
    ],
  },
  {
    period: "04-2007 à 07-2007",
    period_us: "04-2007 - 07-2007",
    title: "Électronicien (stage)",
    title_us: "Electronics engineer (internship)",
    company: "B.K. Pulse Ltd (Milton Keynes, Angleterre)",
    context: "Pôle R&D: conception d'outils et de contrôleurs de machines.",
    context_us: "R&D department: design of tools and machine controllers.",
    highlights: [
      "Conception et réalisation d'une carte électronique.",
      "Programmation C/ASM sur microcontrôleurs, interfaces RS232 et USB.",
      "Développement logiciel d'exploitation de machines (Visual Studio, C/C++) et simulation Matlab/Simulink.",
    ],
    highlights_us: [
      "Design and realization of an electronic board.",
      "C/ASM programming on microcontrollers, RS232 and USB interfaces.",
      "Machine operation software development (Visual Studio, C/C++) and Matlab/Simulink simulation.",
    ],
  },
];

const getExperiences = (lang) =>
  lang === "en"
    ? experiences.map((experience) => ({
        ...experience,
        period: experience.period_us ?? experience.period,
        title: experience.title_us ?? experience.title,
        context: experience.context_us ?? experience.context,
        highlights: experience.highlights_us ?? experience.highlights,
      }))
    : experiences;

export default function Experiences({ lang = "fr" }) {
  const content = getExperiences(lang);

  return (
    <section className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6">
      <h2 className="text-lg font-semibold text-slate-800 sm:text-xl">
        {lang === "en" ? "Professional experiences" : "Expériences professionnelles"}
      </h2>
      <div className="mt-4 space-y-3">
        {content.map((experience) => (
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