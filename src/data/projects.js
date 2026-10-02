// Edit this file to add, remove or update projects.
export const projects = [
  {
    title: 'Yali 4.0 - TeamSeaSakthi',
    category: 'Marine Robotics & Embedded Systems',
    subtitle: 'Monaco Energy Boat Challenge | Team Sea Sakthi',
    cardDescription:
      'Contributed to embedded systems, cloud telemetry, FPV-AR, and real-time monitoring for an electric catamaran and autonomous river-cleaning boat, representing India at the 12th Monaco Energy Boat Challenge.',
    highlights: ['Monaco Top 8', 'Cloud Telemetry', 'FPV-AR', 'Embedded Systems'],
    image: '/images/image-8.jpg',
    link: 'https://seasakthi.com/',
    details: {
      description: [
        'Contributed to the embedded systems of an electric catamaran (Yali 4.0) and an autonomous river-cleaning boat as part of Team Sea Sakthi at Kumaraguru College of Technology.',
        'Engineered hardware architectures with microcontrollers, sensor integration, robust communication protocols, and low-latency FPV-AR overlays for high-stakes marine environments.',
        'Built cloud telemetry pipelines and live diagnostic dashboards to monitor real-time battery, speed, and navigation metrics during competitive race conditions at the Monaco Yacht Club.',
      ],
      techStack: [
        'Embedded C',
        'Microcontrollers',
        'Sensors',
        'Communication Protocols',
        'FPV-AR',
        'Cloud Telemetry',
        'IoT Dashboards',
      ],
      features: [
        'Real-time telemetry and cloud dashboard integration for marine performance monitoring',
        'Mission-critical embedded system architecture for electric catamaran racing',
        'FPV-AR visual overlay for real-time situational awareness and HUD telemetry',
        'Autonomous river-cleaning boat control, obstacle handling, and waste retrieval',
        'Independently designed and built the official team website (seasakthi.com)',
      ],
      achievements: [
        'Secured 8th place globally at the 12th Monaco Energy Boat Challenge',
        'Winner of the Communication and Townhall Cup',
        'Certificate of Recognition from Kumaraguru Institutions & Yacht Club de Monaco',
      ],
    },
  },
  {
    title: 'Elephant Behavioural Analysis and Mitigation System',
    category: 'AI Research & Computer Vision',
    subtitle: 'USD 11,000 Harvard University Grant Project | Microcosm',
    cardDescription:
      'Leading a 13-member research team on an $11,000 Harvard Mittal Institute grant, developing multi-model computer vision architectures for elephant behavioral analysis and conflict mitigation.',
    highlights: ['Harvard Grant ($11k)', 'YOLO & ByteTrack', 'DeepLabCut', '3D ResNet-18'],
    image: '/images/elephant-analysis.jpg',
    link: 'https://microcosm.kct.ac.in/',
    details: {
      description: [
        'Leading an interdisciplinary 13-member research team supported by a prestigious USD 11,000 grant from the Harvard University Lakshmi Mittal and Family South Asia Institute.',
        'Developing non-invasive computer vision pipelines combining YOLO, ByteTrack, CNN-XGBoost, MobileNetV3, DeepLabCut, and 3D ResNet-18 to track individual elephants, monitor herd dynamics, and classify complex behaviors including feeding, gait patterns, and aggression.',
        'Engineered an integrated AI monitoring dashboard with early warning conflict-risk detection to proactively alert forest rangers and prevent human-elephant conflict.',
      ],
      techStack: [
        'Python',
        'YOLO',
        'ByteTrack',
        'CNN-XGBoost',
        'MobileNetV3',
        'DeepLabCut',
        '3D ResNet-18',
        'PyTorch',
        'FastAPI',
      ],
      features: [
        'Real-time elephant classification, individual re-identification, and continuous herd tracking',
        'Advanced behavioral analysis: feeding, gait kinematics, and aggression prediction',
        'Automated human-elephant conflict risk scoring and early warning alerts',
        'Centralized AI-driven monitoring dashboard for wildlife conservationists and forest rangers',
      ],
      achievements: [
        'Supported by USD 11,000 Harvard University (Mittal Institute) Research Grant',
        'Selected as Bachelor Thesis Project at Kumaraguru College of Technology',
        'Leading a 13-member student and researcher engineering team',
      ],
      impact: [
        'Non-invasive wildlife monitoring protecting both rural communities and endangered elephant populations',
        'Automates complex ethological analysis for wildlife researchers in real-time',
      ],
    },
  },
  {
    title: 'Sustainability Intelligent Dashboard',
    category: 'Full-Stack & ESG Analytics',
    subtitle: 'Campus ESG & Scope 1/2 Greenhouse Gas Analytics | Kumaraguru Institutions',
    cardDescription:
      'Co-developed a campus sustainability platform using FastAPI and PostgreSQL, automating Scope 1 & 2 GHG calculations aligned with ISO 14064-1:2018 across energy, water, and waste.',
    highlights: ['FastAPI', 'PostgreSQL', 'Scope 1 & 2 GHG', 'ISO 14064-1:2018'],
    image: '/videos/solarbuild.mp4',
    video: '/videos/solarbuild.mp4',
    dashboardImage: '/images/kcosmos-sustainability-dashboard.png',
    link: 'https://sustainability.kct.ac.in',
    details: {
      description: [
        'Co-developed and engineered a comprehensive institutional sustainability platform as technical lead for a 4-member engineering team.',
        'Designed full-stack data pipelines with Python, FastAPI, and PostgreSQL to capture, process, and analyze campus-wide resource consumption metrics.',
        'Implemented automated carbon accounting algorithms for Scope 1 and Scope 2 Greenhouse Gas (GHG) calculations strictly aligned with the international ISO 14064-1:2018 standard.',
      ],
      techStack: [
        'Python',
        'FastAPI',
        'PostgreSQL',
        'React',
        'Data Analytics',
        'ISO 14064-1:2018',
        'Tailwind CSS',
      ],
      features: [
        'Scope 1 & Scope 2 greenhouse gas emission computation engines',
        'Multi-vector telemetry covering campus electricity, renewable energy, water, and solid waste',
        'Dynamic interactive dashboards with real-time institutional benchmarking',
        'Automated regulatory compliance reports aligned with ISO 14064-1:2018 standards',
      ],
      role: ['Technical Lead for a 4-member developer and data engineering team'],
      impact: [
        'Drives institutional decarbonization and data-backed sustainability governance across Kumaraguru Institutions',
      ],
    },
  },
  {
    title: 'K-geo portal',
    category: 'Full-Stack & GenAI',
    subtitle: 'Global Opportunities & Intelligence Portal | Global Engagement Office',
    cardDescription:
      'Built a Next.js and Supabase web portal featuring Gemini-powered university recommendations, role-based access control, and automated PDF reporting to track global student opportunities.',
    highlights: ['Next.js', 'Supabase', 'Gemini AI', 'RBAC & PDF Reports'],
    image: '/images/KGEO.png',
    imageFit: 'contain',
    dashboardImage: '/images/kgeo-portal-students.png',
    details: {
      description: [
        'Architected and built a modern portal using Next.js and Supabase while leading a 3-member team for the Kumaraguru Global Engagement Office.',
        'Integrated Google Gemini AI to analyze student profiles and deliver personalized university and research opportunity recommendations.',
        'Implemented secure Role-Based Access Control (RBAC) and developed an automated PDF report generation pipeline for administrative documentation.',
      ],
      techStack: [
        'Next.js',
        'Supabase',
        'Gemini AI API',
        'TypeScript',
        'Tailwind CSS',
        'PostgreSQL',
        'PDF Generation',
      ],
      features: [
        'Gemini AI-powered personalized opportunity and university recommendation engine',
        'Role-Based Access Control (RBAC) supporting students, advisors, and administrators',
        'Automated dynamic PDF report generation for student application tracking',
        'Centralized administrative tracking and analytics for global student mobility',
      ],
      achievements: [
        'Awarded Appreciation Letter from Kumaraguru Global Engagement Office for initiative and leadership',
      ],
      role: ['Team Lead & Full-Stack Architect leading a 3-member engineering team'],
      impact: [
        'Streamlined international opportunity workflows and student career tracking for university administration',
      ],
    },
  },
  {
    title: 'Sugarcane Research Analytical Platform',
    category: 'AgTech & Data Analytics',
    subtitle: 'Microcosm & Environmental Defense Fund (EDF) Field Study',
    cardDescription:
      'Developed a full-stack React and Supabase analytics platform for a Microcosm and Environmental Defense Fund field study across 3 plots and 14 treatments, featuring heatmap and growth analytics.',
    highlights: ['React', 'Supabase', 'AgTech Analytics', 'Heatmap Visuals'],
    image: '/videos/sugarcane-survey.mp4',
    video: '/videos/sugarcane-survey.mp4',
    dashboardImage: '/images/fertigation-tracking.png',
    details: {
      description: [
        'Developed and led a full-stack agricultural data analytics platform in collaboration with Microcosm and the Environmental Defense Fund (EDF).',
        'Analyzed extensive field trial data across 3 experimental plots and 14 distinct crop management treatments using drone survey telemetry and field measurements.',
        'Built responsive visualization suites featuring crop growth dynamics, fertilizer-response modeling, and high-resolution spatial heatmaps.',
      ],
      techStack: [
        'React',
        'Supabase',
        'PostgreSQL',
        'Chart.js',
        'Geospatial Analytics',
        'Tailwind CSS',
      ],
      features: [
        'Drone field survey telemetry and multi-plot tracking across 3 plots and 14 agronomic treatments',
        'Fertilizer-response curve computation and longitudinal growth rate modeling',
        'Interactive geospatial heatmaps and performance distribution graphs',
        'Secure cloud data storage with automated telemetry synchronization',
      ],
      role: ['Full-Stack Developer & Technical Lead at Microcosm'],
      impact: [
        'Equipped researchers and EDF agronomists with data-driven insights for sustainable crop cultivation',
      ],
    },
  },
]
