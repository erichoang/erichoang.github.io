// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A list of featured working and research projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-patents",
          title: "patents",
          description: "Patent applications and patent-pending technologies associated with Dr. Nguyen&#39;s research and collaborators.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/patents/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-activities",
          title: "activities",
          description: "Research leadership, technology translation, conference activities, and professional service.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/activities/";
          },
        },{id: "news-on-the-impact-of-dataset-size-a-twitter-classification-case-study-paper-is-accepted-at-wi-iat-2021-research-track",
          title: '“On the Impact of Dataset Size: A Twitter Classification Case Study” paper is...',
          description: "",
          section: "News",},{id: "news-sochaindb-a-database-for-storing-and-retrieving-blockchain-powered-social-network-data-paper-is-accepted-at-sigir-2022-resources-track",
          title: '“SoChainDB: A Database for Storing and Retrieving Blockchain-Powered Social Network Data” paper is...',
          description: "",
          section: "News",},{id: "news-mando-guru-vulnerability-detection-for-smart-contract-source-code-by-heterogeneous-graph-embeddings-paper-is-accepted-at-esec-fse-2022-tool-demonstrations-track",
          title: '“MANDO-GURU: Vulnerability Detection for Smart Contract Source Code By Heterogeneous Graph Embeddings” paper...',
          description: "",
          section: "News",},{id: "news-mando-multi-level-heterogeneous-graph-embeddings-for-fine-grained-detection-of-smart-contract-vulnerabilities-paper-is-accepted-at-dsaa-2022-research-track",
          title: '“MANDO: Multi-Level Heterogeneous Graph Embeddings for Fine-Grained Detection of Smart Contract Vulnerabilities” paper...',
          description: "",
          section: "News",},{id: "news-real-time-multi-vehicle-multi-camera-tracking-with-graph-based-tracklet-features-paper-has-been-accepted-for-publication-in-the-transportation-research-record-journal",
          title: '“Real-Time Multi-Vehicle Multi-Camera Tracking With Graph-Based Tracklet Features” paper has been accepted for...',
          description: "",
          section: "News",},{id: "news-mando-hgt-heterogeneous-graph-transformers-for-smart-contract-vulnerability-detection-paper-is-accepted-at-the-msr-2023-conference-main-technical-track",
          title: '“MANDO-HGT: Heterogeneous Graph Transformers for Smart Contract Vulnerability Detection” paper is accepted at...',
          description: "",
          section: "News",},{id: "news-multi-vehicle-multi-camera-tracking-with-graph-based-tracklet-features-paper-has-been-accepted-for-publication-in-the-ieee-transactions-on-multimedia-journal",
          title: '“Multi-Vehicle Multi-Camera Tracking With Graph Based Tracklet Features” paper has been accepted for...',
          description: "",
          section: "News",},{id: "news-inductive-and-transductive-link-prediction-for-criminal-network-analysis-paper-has-been-accepted-for-publication-in-the-journal-of-computational-science",
          title: '“Inductive and Transductive Link Prediction for Criminal Network Analysis” paper has been accepted...',
          description: "",
          section: "News",},{id: "news-inductive-and-transductive-link-prediction-for-criminal-network-analysis-paper-has-won-the-best-paper-award-at-the-l3s-research-center-multi-vehicle-multi-camera-tracking-with-graph-based-tracklet-features-paper-has-won-the-best-paper-award-at-the-l3s-research-center",
          title: '“Inductive and Transductive Link Prediction for Criminal Network Analysis” paper has won the...',
          description: "",
          section: "News",},{id: "news-on-may-3rd-2024-after-three-and-a-half-years-hoang-h-nguyen-successfully-defended-his-doctoral-thesis-and-officially-completed-the-doctoral-program-at-leibniz-university-hannover-germany",
          title: 'On May 3rd, 2024, after three and a half years, Hoang H. Nguyen...',
          description: "",
          section: "News",},{id: "news-lammon-language-model-combined-graph-neural-network-for-multi-target-multi-camera-tracking-in-online-scenarios-paper-a-collaboration-between-the-l3s-research-center-and-the-center-for-urban-informatics-and-progress-at-the-university-of-tennessee-at-chattanooga-has-been-officially-accepted-for-publication-in-the-machine-learning-journal",
          title: '“LaMMOn: Language Model Combined Graph Neural Network for Multi-Target Multi-Camera Tracking in Online...',
          description: "",
          section: "News",},{id: "news-dr-nguyen-joined-the-utc-research-institute-at-the-university-of-tennessee-at-chattanooga-as-a-research-assistant-professor-continuing-work-on-graph-machine-learning-smart-transportation-federated-learning-and-blockchain-security",
          title: 'Dr. Nguyen joined the UTC Research Institute at the University of Tennessee at...',
          description: "",
          section: "News",},{id: "news-our-paper-mando-llm-heterogeneous-graph-transformers-with-large-language-models-for-smart-contract-vulnerability-detection-was-published-in-acm-transactions-on-software-engineering-and-methodology-tosem-volume-35-issue-6-article-144",
          title: 'Our paper “MANDO-LLM: Heterogeneous Graph Transformers with Large Language Models for Smart Contract...',
          description: "",
          section: "News",},{id: "news-the-university-of-tennessee-at-chattanooga-featured-dr-nguyen-s-research-and-the-technology-transfer-work-behind-urbisiq-and-icityguardian-in-behind-the-research-at-utc",
          title: 'The University of Tennessee at Chattanooga featured Dr. Nguyen’s research and the technology-transfer...',
          description: "",
          section: "News",},{id: "news-our-paper-pedestrian-crossing-intent-prediction-via-psychological-features-and-transformer-fusion-appeared-at-ieee-intelligent-vehicles-symposium-iv-2026-dr-nguyen-also-served-as-a-poster-session-chair-at-the-conference-in-detroit",
          title: 'Our paper “Pedestrian Crossing Intent Prediction via Psychological Features and Transformer Fusion” appeared...',
          description: "",
          section: "News",},{id: "news-two-of-our-papers-were-accepted-at-ieee-itsc-2026-clife-camera-lidar-fusion-framework-for-edge-deployable-roadside-vru-perception-and-prisa-proactive-infrastructure-lidar-framework-for-intersection-safety-assessment",
          title: 'Two of our papers were accepted at IEEE ITSC 2026: CLIFE: Camera-LiDAR Fusion...',
          description: "",
          section: "News",},{id: "news-two-full-papers-from-our-team-have-been-accepted-at-wacv-2027-covering-language-driven-multi-camera-tracking-and-map-free-traffic-conflict-anticipation-camera-ready-citation-details-will-be-posted-when-available",
          title: 'Two full papers from our team have been accepted at WACV 2027, covering...',
          description: "",
          section: "News",},{id: "news-our-paper-trustworthy-evaluation-of-quantum-message-passing-isolating-circuit-contributions-in-traffic-forecasting-was-accepted-to-the-satquml-workshop-at-neurips-2026-with-firas-elhag-leading-the-presentation",
          title: 'Our paper “Trustworthy Evaluation of Quantum Message Passing: Isolating Circuit Contributions in Traffic...',
          description: "",
          section: "News",},{id: "news-our-team-has-multiple-research-papers-accepted-for-the-transportation-research-board-trb-2027-annual-meeting-spanning-intelligent-transportation-and-traffic-safety-individual-paper-citations-will-be-added-as-their-proceedings-metadata-becomes-available",
          title: 'Our team has multiple research papers accepted for the Transportation Research Board (TRB)...',
          description: "",
          section: "News",},{id: "projects-5gaps",
          title: '5GAPS',
          description: "The aim of the 5GAPS project is to digitally recreate Hannover in a multi-dimensional spatio-temporal coordinate system in real time. This will create a dynamic digital twin of urban outdoor areas as well as indoor areas in buildings or commercially used halls.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_5gaps.html";
            },},{id: "projects-libraryguru",
          title: 'LibraryGuru',
          description: "LibraryGuru internally builds correlation databases among various functionality descriptions and Android APIs. These correlations are extracted from Android development tutorials, and SDK documents with domain-specific code parsing and natural language processing techniques adapted for functional APIs and event callback APIs separately and are matched against functionality queries to recommend relevant APIs for developers.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_libraryguru.html";
            },},{id: "projects-mando",
          title: 'MANDO',
          description: "The MANDO project is an open-source research initiative that endeavors to acquire an understanding of the structures of diverse smart contract graphs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_mando.html";
            },},{id: "projects-roxanne",
          title: 'ROXANNE',
          description: "ROXANNE (Real time network, text, and speaker analytics for combating organized crime) is an EU funded collaborative research and innovation project, aiming to unmask criminal networks and their members as well as to reveal the true identity of perpetrators by combining the capabilities of speech/language technologies and visual analysis with network analysis.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_roxanne.html";
            },},{id: "projects-sochaindb",
          title: 'SoChainDB',
          description: "SoChainDB framework facilitates obtaining data from blockchain-powered social networks. To show the capacity and strength of SoChainDB, we crawl and publish Hive data - one of the largest blockchain-based social networks. SoChainDB is publicly accessible at http://sochaindb.com, and the dataset is available under the CC BY-SA 4.0 license.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_sochaindb.html";
            },},{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.uni-trier.de/pid/200/9071.html", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%72.%68%68%6E@%68%6F%61%6E%67%68%6E%67%75%79%65%6E.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/erichoang", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/mrerichoang", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-0611-4634", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Hoang-Nguyen-368/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=cDB2Tt8AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
