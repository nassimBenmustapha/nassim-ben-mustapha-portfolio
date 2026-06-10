export const HERO_CONTENT = "Infrastructure as code. CI/CD automation. Cloud-native architectures. Turning complex systems into reliable, observable, and scalable pipelines.";

export const ABOUT_TEXT = "I'm a software engineering graduate specialized in Full Stack development and DevOps, ranked among the top of my class at TEK-UP University. Over nearly five years I've contributed to large-scale projects blending backend development and cloud industrialization. Committed to continuous improvement, I specialize in building robust CI/CD pipelines, observability with Prometheus/Grafana, and high-availability cloud environments on AWS, Azure, and Hetzner.";

export const SKILLS = [
  // Cloud
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'cloud', level: 90 },
  { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', category: 'cloud', level: 85 },
  { name: 'Google Cloud (GCP)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', category: 'cloud', level: 80 },
  { name: 'Hetzner', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/hetzner.svg', category: 'cloud', level: 85 },
  { name: 'Unity Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg', category: 'cloud', level: 85 },

  // Containers & Orchestration
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'containers', level: 90 },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', category: 'containers', level: 85 },

  // Infrastructure as Code
  { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', category: 'infrastructure', level: 85 },
  { name: 'Ansible', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg', category: 'infrastructure', level: 85 },

  // Monitoring & Observability
  { name: 'Prometheus', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg', category: 'monitoring', level: 85 },
  { name: 'Grafana', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg', category: 'monitoring', level: 85 },
  { name: 'Alertmanager', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg', category: 'monitoring', level: 80 },

  // CI/CD & Automation
  { name: 'GitHub Actions / GitLab CI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg', category: 'devops', level: 90 },
  { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-plain.svg', category: 'devops', level: 85 },
  { name: 'GitOps / ArgoCD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg', category: 'devops', level: 85 },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'devops', level: 90 },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg', category: 'devops', level: 90 },

  // Backend Development
  { name: 'Java / Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', category: 'development', level: 90 },
  { name: 'Python / Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', category: 'development', level: 85 },
  { name: 'ASP.NET / .NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg', category: 'development', level: 80 },
  { name: 'PHP / Symfony', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg', category: 'development', level: 75 },

  // Programming Languages
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'languages', level: 85 },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'languages', level: 90 },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'languages', level: 85 },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'languages', level: 90 },
  { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', category: 'languages', level: 80 },

  // Frontend
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'frontend', level: 90 },
  { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg', category: 'frontend', level: 85 },

  // Mobile & Game
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', category: 'mobile', level: 80 },
  { name: 'Ionic', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg', category: 'mobile', level: 80 },
  { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg', category: 'mobile', level: 80 },
  { name: 'Unity', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg', category: 'mobile', level: 85 },

  // AI & Data
  { name: 'Machine Learning', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg', category: 'ai', level: 75 },
  { name: 'Deep Learning', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', category: 'ai', level: 70 },
  { name: 'Data Mining', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', category: 'ai', level: 75 },
  { name: 'Big Data', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg', category: 'ai', level: 70 },

  // Databases
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: 'database', level: 85 },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'database', level: 90 },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'database', level: 85 },
  { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg', category: 'database', level: 80 },
  { name: 'Oracle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg', category: 'database', level: 80 },

  // Security & Quality
  { name: 'HashiCorp Vault', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vault/vault-original.svg', category: 'security', level: 80 },
  { name: 'Checkov / tfsec', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/checkmarx.svg', category: 'security', level: 80 },
  { name: 'pytest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg', category: 'security', level: 85 },
  { name: 'JUnit', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-original.svg', category: 'security', level: 85 },
  { name: 'Selenium', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg', category: 'security', level: 80 },
  { name: 'Postman (API Testing)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', category: 'security', level: 85 },
];

// Conceptual / methodology skills shown as plain tags (no logo) on the Skills page
export const ADDITIONAL_EXPERTISE = [
  'DevSecOps',
  'Microservices',
  'REST APIs / RESTful WebServices',
  'WebSocket',
  'GitOps',
  'Test Automation',
  'Quality Assurance (QA)',
  'Behavior-Driven Development (BDD)',
  'Agile Methodologies',
  'CI/CD',
  'Cloud Computing',
  'IoT / Embedded Systems',
  'Software Development',
];

export const PROJECTS = [
  // ===== DevOps =====
  {
    title: 'DocExtractor — Orchestration Pipeline',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Document-processing orchestration pipeline that extracts and structures data from documents with integrated AI models (Ollama, OpenAI, Mistral). Built with Spring Boot + Thymeleaf and MySQL, containerized with Docker behind Traefik, observability via Prometheus & Grafana, and deployed to Azure through a GitLab CI/CD pipeline.',
    technologies: ['Spring Boot', 'Thymeleaf', 'MySQL', 'Azure', 'Ollama', 'OpenAI', 'Mistral', 'GitLab CI/CD', 'Traefik', 'Prometheus', 'Grafana', 'Docker'],
    category: 'devops',
    githubLink: '',
    websiteLink: '',
  },
  {
    title: 'TTReservation — Multi-Service Reservation Platform',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Scalable multi-service reservation platform — hotel rooms, travel tickets, car rentals, café spots, cinema seats, and more. Two roles: clients who book, and admins/owners who configure prices and add new reservation types (e.g. café booking) thanks to a scalable design. Integrated online payment APIs. Built with Django + Angular on PostgreSQL, covered by unit, lint, and integration tests, and deployed to AWS then Azure via GitLab — using security groups, EC2, VPC, and public IP.',
    technologies: ['Django', 'Angular', 'PostgreSQL', 'Payment API', 'GitLab CI/CD', 'AWS', 'Azure', 'EC2', 'VPC', 'Security Groups', 'Unit Testing', 'Integration Testing', 'Lint'],
    category: 'devops',
    githubLink: '',
    websiteLink: '',
  },
  {
    title: 'Kubernetes HA Cluster',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Multi-node high-availability Kubernetes cluster provisioned with Terraform & Ansible on Hetzner/AWS. GitOps with ArgoCD, auto-scaling, health checks, and automatic rollback.',
    technologies: ['Kubernetes', 'Terraform', 'Ansible', 'ArgoCD', 'Hetzner', 'AWS'],
    category: 'devops',
    githubLink: '',
    websiteLink: '',
  },
  {
    title: 'Cloud CI/CD Pipeline',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'End-to-end CI/CD pipeline on GitLab CI / GitHub Actions with parallelized stages: build, unit tests, BDD, static analysis, Terraform provisioning, and automatic deployment to AWS.',
    technologies: ['GitLab CI', 'GitHub Actions', 'Terraform', 'Docker', 'AWS'],
    category: 'devops',
    githubLink: '',
    websiteLink: '',
  },
  {
    title: 'Monitoring Stack',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Complete observability stack (Prometheus + Grafana + Alertmanager) deployed via Docker & Ansible. Pre-configured dashboards, automated alerting, and metric retention.',
    technologies: ['Prometheus', 'Grafana', 'Alertmanager', 'Docker', 'Ansible'],
    category: 'devops',
    githubLink: '',
    websiteLink: '',
  },

  // ===== Cloud =====
  {
    title: 'WeatherWatch — AWS Serverless Tracker',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: "Serverless weather application that records each day's weather and displays the history on the site. A scheduled AWS Lambda (triggered by CloudWatch) fetches the daily weather and stores it in DynamoDB, while EC2 instances — public and private behind security groups with public/private IP addressing — serve the web layer. CloudWatch handles scheduling and monitoring.",
    technologies: ['AWS', 'Lambda', 'DynamoDB', 'CloudWatch', 'EC2', 'Security Groups', 'VPC'],
    category: 'cloud',
    githubLink: '',
    websiteLink: '',
  },
  {
    title: 'AWS Cloud Infrastructure — High Availability',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'End-to-end production infrastructure on AWS: a custom VPC with public and private subnets, public/private EC2 instances reachable only through an EC2 Bastion Host over SSH, security groups, and public/private IP addressing. High availability and horizontal scaling via Auto Scaling Groups behind an Application Load Balancer (ALB), serverless functions with Lambda, object storage on S3, and data layers on Amazon RDS and DynamoDB — all provisioned from reusable infrastructure templates.',
    technologies: ['AWS', 'VPC', 'EC2', 'Security Groups', 'Bastion Host', 'ALB', 'Auto Scaling', 'Lambda', 'S3', 'Amazon RDS', 'DynamoDB', 'CloudFormation'],
    category: 'cloud',
    githubLink: '',
    websiteLink: '',
  },

  {
    title: 'Secure AWS Infra Demo — Mentoring & Security',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Demonstration AWS infrastructure built as code with Terraform, Ansible, and Docker Compose — a custom VPC with public/private subnets, public and private EC2 instances, S3, and Lambda. Created to mentor and lead junior developers: running security and vulnerability checks together and producing reports using security tooling.',
    technologies: ['AWS', 'Terraform', 'Ansible', 'Docker Compose', 'VPC', 'EC2', 'Public/Private Subnets', 'S3', 'Lambda', 'Security Scanning'],
    category: 'cloud',
    githubLink: '',
    websiteLink: '',
  },

  // ===== Backend =====
  {
    title: 'Data Structuring Engine — Mistral AI',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Web application that transforms raw, unorganized data into clean, structured database tables using the Mistral AI API. Parsed and normalized content is persisted to MySQL, backed by automated testing and a GitLab CI/CD pipeline.',
    technologies: ['Mistral AI API', 'AI / ML', 'MySQL', 'GitLab CI/CD', 'Test Automation'],
    category: 'backend',
    githubLink: '',
    websiteLink: '',
  },
  {
    title: 'ATS System — AI Resume Screening',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Applicant Tracking System that ingests and scans uploaded CVs and surfaces the candidates who best match a given job description. Combines OCR with the Mistral AI API to parse and rank resumes (stored in PostgreSQL). Recruiters can schedule candidate interviews — sending emails and creating Microsoft Teams meeting planning. Built with Angular + Django, automated testing, a GitLab CI/CD pipeline, and deployed on Azure virtual machines.',
    technologies: ['Angular', 'Django', 'PostgreSQL', 'OCR', 'Mistral AI API', 'Azure', 'Azure VM', 'Microsoft Teams', 'Email / SMTP', 'GitLab CI/CD', 'Test Automation'],
    category: 'backend',
    githubLink: '',
    websiteLink: '',
  },
  {
    title: 'ClarieFile — SaaS Platform',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'SaaS platform with an intelligent pipeline that scans, groups, and organizes unstructured data (PDFs, images, files) to produce structured digital exports: Excel, JSON, and databases.',
    technologies: ['Python', 'Django', 'AI / ML', 'PostgreSQL', 'Docker'],
    category: 'backend',
    githubLink: '',
    websiteLink: '',
  },
  {
    title: 'AppsAdministration — Central Admin Backoffice',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Angular + Django backoffice that centrally controls the configuration of multiple applications through API requests. Admins manage payment figures and other operational values across apps, while every action and change is traced and aggregated into a single backoffice governed by a super-admin overseeing all connected applications.',
    technologies: ['Angular', 'Django', 'PostgreSQL', 'REST APIs', 'Docker', 'GitLab CI/CD'],
    category: 'backend',
    githubLink: '',
    websiteLink: '',
  },

  // ===== Full-Stack =====
  {
    title: 'ERP Platform — PHP / Symfony',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Enterprise ERP platform migrated from native PHP to a structured Symfony architecture, with a new Angular front-end and a MySQL database. Optimized the data layer to reduce database issues, implemented automated testing, and shipped through a GitLab CI/CD pipeline with deployment to Azure.',
    technologies: ['PHP', 'Symfony', 'Angular', 'MySQL', 'GitLab CI/CD', 'Test Automation', 'Azure'],
    category: 'fullstack',
    githubLink: '',
    websiteLink: '',
  },
  {
    title: 'Car Booking Application',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Full-stack DevOps car-booking web application built with ASP.NET and MySQL. Containerized with Docker / Docker Compose and deployed to AWS EC2 through a GitLab CI/CD pipeline, backed by a full automated test suite — unit, API, UI, load, and security tests plus static lint checks.',
    technologies: ['ASP.NET', 'MySQL', 'AWS', 'EC2', 'GitLab CI/CD', 'Docker Compose', 'Docker', 'Automated Testing', 'Load Testing', 'Security Testing', 'UI Testing', 'API Testing', 'Unit Testing', 'Lint'],
    category: 'fullstack',
    githubLink: '',
    websiteLink: '',
  },
  {
    title: 'ePrime Wallet Application',
    image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Full-stack DevOps digital wallet application with a Spring Boot backend, Angular frontend, and MySQL. Containerized with Docker / Docker Compose and deployed to AWS EC2 via a GitLab CI/CD pipeline, with comprehensive automated testing — unit, API, UI, load, and security tests plus lint checks.',
    technologies: ['Spring Boot', 'Angular', 'MySQL', 'AWS', 'EC2', 'GitLab CI/CD', 'Docker Compose', 'Docker', 'Automated Testing', 'Load Testing', 'Security Testing', 'UI Testing', 'API Testing', 'Unit Testing', 'Lint'],
    category: 'fullstack',
    githubLink: '',
    websiteLink: '',
  },
  {
    title: 'SahhaTechlogie — ERP / CRM Platform',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Web ERP/CRM platform built with Angular and Django on PostgreSQL, migrated from a legacy Flask architecture. Containerized with Docker / Docker Compose behind Traefik, with full observability (Prometheus, Grafana, Alertmanager) and a GitLab CI/CD pipeline on Hetzner. Comprehensive testing — unit, integration, BDD, and API tests — plus third-party integrations including Twilio, payment gateways, and AI APIs (Claude, OpenAI). Delivered with full documentation under a Scrum methodology.',
    technologies: ['Angular', 'Django', 'PostgreSQL', 'Hetzner', 'Docker Compose', 'Traefik', 'GitLab CI/CD', 'Prometheus', 'Grafana', 'Alertmanager', 'Twilio', 'Payment', 'Claude', 'OpenAI', 'BDD', 'API Testing'],
    category: 'fullstack',
    githubLink: '',
    websiteLink: '',
  },
  {
    title: 'CRM & ERP Platform',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Full-stack CRM & ERP platform with modular services, role-based access, and analytics dashboards — built on Spring Boot, containerized with Docker, and shipped through CI/CD.',
    technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Docker'],
    category: 'fullstack',
    githubLink: '',
    websiteLink: '',
  },

  // ===== Frontend =====
  {
    title: 'SahhaTechlogie — Angular Dashboard UI',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Front-end Angular application for SahhaTechlogie featuring rich data visualizations with Plotly and Chart.js, and a polished UI built on PrimeNG components. Careful management of the Angular component lifecycle for performance, with interface (UI) testing and a GitLab CI pipeline.',
    technologies: ['Angular', 'TypeScript', 'PrimeNG', 'Chart.js', 'Plotly', 'GitLab', 'UI Testing'],
    category: 'frontend',
    githubLink: '',
    websiteLink: '',
  },
  {
    title: 'ATS System — Angular UI',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Front-end Angular interface for the ATS System (AI resume screening), built with PrimeNG components and Chart.js data visualizations. Containerized with Docker, with careful Angular lifecycle management, interface (UI) testing, and a GitLab CI pipeline.',
    technologies: ['Angular', 'TypeScript', 'PrimeNG', 'Chart.js', 'Docker', 'GitLab', 'UI Testing'],
    category: 'frontend',
    githubLink: '',
    websiteLink: '',
  },

  // ===== Mobile & Game =====
  {
    title: 'Al Moghamiroun 1 — Educational Mobile Game',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Educational mobile game for children (part 1 of the Al Moghamiroun series), built in Unity with C#. Published to the Play Store via Google Play Console and automated through Unity Cloud, with automated testing and custom UI/UX assets designed in Photoshop & Illustrator. CI managed through GitLab.',
    technologies: ['Unity', 'C#', 'Unity Cloud', 'GitLab', 'Google Play Console', 'Test Automation', 'Photoshop', 'Illustrator'],
    category: 'mobile',
    githubLink: '',
    websiteLink: '',
  },
  {
    title: 'Al Moghamiroun 2 — Educational Mobile Game',
    image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Educational mobile game for children (part 2 of the Al Moghamiroun series), built in Unity with C#. Published to the Play Store via Google Play Console and automated through Unity Cloud, with automated testing and custom UI/UX assets designed in Photoshop & Illustrator. CI managed through GitLab.',
    technologies: ['Unity', 'C#', 'Unity Cloud', 'GitLab', 'Google Play Console', 'Test Automation', 'Photoshop', 'Illustrator'],
    category: 'mobile',
    githubLink: '',
    websiteLink: '',
  },
  {
    title: 'Al Moghamiroun 3 — Educational Mobile Game',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Educational mobile game for children (part 3 of the Al Moghamiroun series), built in Unity with C#. Published to the Play Store via Google Play Console and automated through Unity Cloud, with automated testing and custom UI/UX assets designed in Photoshop & Illustrator. CI managed through GitLab.',
    technologies: ['Unity', 'C#', 'Unity Cloud', 'GitLab', 'Google Play Console', 'Test Automation', 'Photoshop', 'Illustrator'],
    category: 'mobile',
    githubLink: '',
    websiteLink: '',
  },
  {
    title: 'BlurStyle — Multiplayer Racing Game',
    image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Multiplayer racing game built in Unity with C#. Uses Unity Cloud and its services for online data persistence (cloud save), Gmail-based authentication, and a global leaderboard ranking the best scores. Version-controlled on GitHub with a Jenkins CI/CD pipeline.',
    technologies: ['Unity', 'C#', 'Unity Cloud', 'Cloud Save', 'Google Auth', 'Leaderboard', 'GitHub', 'Jenkins CI/CD'],
    category: 'mobile',
    githubLink: '',
    websiteLink: '',
  },
  {
    title: 'Auto Accident Report (Constat) — Mobile App',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Mobile app for creating an accident report (constat) between two vehicles: capture photos, record incident details, and generate the report on the spot. Built with Android Studio, version-controlled on GitHub with unit testing, and published to the Play Store via Google Play Console.',
    technologies: ['Android Studio', 'Java / Kotlin', 'GitHub', 'Unit Testing', 'Google Play Console'],
    category: 'mobile',
    githubLink: '',
    websiteLink: '',
  },
  {
    title: 'Hotel Booking — Ionic App',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Ionic mobile app for hotel room booking: availability search, real-time reservation, customer profile management, and push notifications.',
    technologies: ['Ionic', 'Angular', 'Firebase', 'REST API'],
    category: 'mobile',
    githubLink: '',
    websiteLink: '',
  },
];

export const EXPERIENCE = [
  {
    period: '01/2023 — Present',
    role: 'Full Stack & DevOps Developer',
    company: 'XFlowData',
    points: [
      'Infrastructure & DevOps: migration of architectures to high-availability cloud environments; CI/CD pipelines and supervision (Prometheus / Grafana).',
      'Data & AI: backend solutions and AI-based data-extraction tools, from database modeling to final deployment.',
      'Full Stack: complex features (backend & application logic), including Unity modules integrated into cloud workflows.',
      'Quality & automated testing: unit, integration, BDD, and load/performance strategies integrated into CI/CD.',
    ],
  },
  {
    period: '08/2021 — 01/2023',
    role: 'Video Game & Web Developer',
    company: 'Re:School Education',
    points: [
      'Built and optimized multiplayer educational games in 2D / 3D environments, handling game mechanics and interactivity.',
      'Managed the full product lifecycle from cloud service configuration to deployment and maintenance on download platforms.',
    ],
  },
  {
    period: '03/2021 — 06/2021',
    role: 'Intern — Final Year Project',
    company: 'Re:School Education',
    points: [
      'Designed and delivered an interactive educational application published on the Play Store.',
    ],
  },
  {
    period: '08/2020 — 09/2020',
    role: 'Intern — Advanced Training',
    company: 'Les Ciments de Bizerte',
    points: [
      'Developed an embedded solution for motor control and energy management.',
    ],
  },
  {
    period: '01/2019 — 02/2019',
    role: 'Intern — Introductory',
    company: 'Tunisie Telecom',
    points: [
      'Explored network infrastructures and built a website.',
    ],
  },
];

export const EDUCATION = [
  {
    period: '2023 — 2026',
    title: 'National Engineering Degree in Software Engineering',
    school: 'TEK-UP University',
  },
  {
    period: '2018 — 2021',
    title: "Bachelor's Degree (Licence) in Information Technologies",
    school: 'ISET Bizerte',
  },
  {
    period: '2018',
    title: 'Baccalaureate — Technical Stream (Bac Technique)',
    school: 'Secondary education diploma',
  },
];

export const CERTIFICATIONS = [
  // In progress (targeted)
  { name: 'RHCSA — Red Hat Certified System Administrator', issuer: 'Red Hat', date: 'In progress', status: 'in progress' },
  { name: 'CKA — Certified Kubernetes Administrator', issuer: 'The Linux Foundation', date: 'In progress', status: 'in progress' },
  { name: 'PCAP — Python Certified Associate', issuer: 'Python Institute', date: 'In progress', status: 'in progress' },
  { name: 'OCA — Oracle Certified Associate', issuer: 'Oracle', date: 'In progress', status: 'in progress' },
  // Completed
  { name: 'Database Engineer', issuer: 'Meta', date: 'Nov 2022', status: 'completed' },
  { name: 'Back-End Developer', issuer: 'Meta', date: 'Nov 2022', status: 'completed' },
  { name: 'Front-End Developer', issuer: 'Meta', date: 'Nov 2022', status: 'completed' },
  { name: 'Python', issuer: 'University of Michigan', date: 'Dec 2022', status: 'completed' },
  { name: 'Flutter', issuer: 'Google Cloud Education', date: 'Dec 2022', status: 'completed' },
  { name: 'IoT & Embedded Systems', issuer: 'UC Irvine', date: 'Dec 2022', status: 'completed' },
  { name: 'Agile Development & Scrum', issuer: 'IBM', date: 'Dec 2022', status: 'completed' },
  { name: 'Learning How to Learn', issuer: 'Coursera', date: 'Oct 2022', status: 'completed' },
];

export const CONTACT = {
  address: 'Ariana, Tunisia',
  phoneNo: '+216 51 996 304',
  email: 'nassimbenmustpha99@gmail.com',
  social: {
    linkedin: 'https://linkedin.com/in/nassim-ben-mustapha-817648200',
  }
};

export const SKILLS_BY_CATEGORY = {
  cloud: SKILLS.filter(skill => skill.category === 'cloud'),
  containers: SKILLS.filter(skill => skill.category === 'containers'),
  infrastructure: SKILLS.filter(skill => skill.category === 'infrastructure'),
  monitoring: SKILLS.filter(skill => skill.category === 'monitoring'),
  devops: SKILLS.filter(skill => skill.category === 'devops'),
  languages: SKILLS.filter(skill => skill.category === 'languages'),
  development: SKILLS.filter(skill => skill.category === 'development'),
  frontend: SKILLS.filter(skill => skill.category === 'frontend'),
  mobile: SKILLS.filter(skill => skill.category === 'mobile'),
  ai: SKILLS.filter(skill => skill.category === 'ai'),
  database: SKILLS.filter(skill => skill.category === 'database'),
  security: SKILLS.filter(skill => skill.category === 'security'),
};

// Order projects by category group for the "All" view
const PROJECT_CATEGORY_ORDER = ['devops', 'cloud', 'backend', 'fullstack', 'frontend', 'mobile'];

export const PROJECTS_BY_CATEGORY = {
  all: PROJECT_CATEGORY_ORDER.flatMap(cat => PROJECTS.filter(p => p.category === cat)),
  devops: PROJECTS.filter(project => project.category === 'devops'),
  cloud: PROJECTS.filter(project => project.category === 'cloud'),
  backend: PROJECTS.filter(project => project.category === 'backend'),
  fullstack: PROJECTS.filter(project => project.category === 'fullstack'),
  frontend: PROJECTS.filter(project => project.category === 'frontend'),
  mobile: PROJECTS.filter(project => project.category === 'mobile'),
};
