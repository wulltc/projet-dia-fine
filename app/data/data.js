// app/data/data.js
export const articles = {
  fr: {
    featured: [
      {
        id: 1,
        title: "Initiative Révolutionnaire d'Énergie Verte",
        excerpt: "Découvrez comment notre projet de ferme solaire transforme l'énergie renouvelable en Afrique de l'Ouest, avec un ROI projeté de 25% sur 5 ans.",
        content: "Ce projet d'énergie solaire révolutionnaire s'étend sur 500 hectares et vise à fournir de l'électricité propre à plus de 100 000 ménages. Avec une technologie photovoltaïque de pointe et des partenariats stratégiques avec les gouvernements locaux, les investisseurs peuvent s'attendre à des rendements substantiels tout en contribuant au développement durable.",
        image: "/assets/images/solar-farm.jpg",
        category: "Énergie Renouvelable",
        investmentRange: "50K$ - 2M$",
        expectedROI: "25%",
        timeline: "5 ans",
        featured: true
      },
      {
        id: 2,
        title: "Hub Technologique d'Agriculture Intelligente",
        excerpt: "Rejoignez la révolution agricole avec nos solutions agricoles alimentées par l'IoT offrant 40% d'augmentation des rendements des cultures.",
        content: "Notre plateforme d'agriculture intelligente combine capteurs IoT, analyses IA et techniques d'agriculture de précision pour maximiser les rendements des cultures tout en minimisant la consommation de ressources. Cette technologie a été testée sur plusieurs exploitations avec des résultats constamment impressionnants.",
        image: "/assets/images/smart-farming.jpg",
        category: "AgriTech",
        investmentRange: "25K$ - 500K$",
        expectedROI: "35%",
        timeline: "3 ans",
        featured: true
      },
      {
        id: 3,
        title: "Expansion de Passerelle de Paiement Fintech",
        excerpt: "Mise à l'échelle des solutions de paiement mobile sur les marchés émergents avec une technologie éprouvée et une base d'utilisateurs croissante de 500K+.",
        content: "Notre plateforme fintech a révolutionné les paiements numériques dans la région, traitant plus de 10M$ mensuellement. Nous recherchons des investissements pour étendre nos opérations et capturer le marché des paiements numériques en croissance rapide en Afrique de l'Ouest.",
        image: "/assets/images/fintech-mobile.jpg",
        category: "Technologie Financière",
        investmentRange: "100K$ - 5M$",
        expectedROI: "45%",
        timeline: "4 ans",
        featured: true
      }
    ],
    additional: [
      {
        id: 4,
        title: "Développement d'Éco-Resort de Luxe",
        excerpt: "Destination d'écotourisme premium combinant durabilité et hospitalité de luxe.",
        image: "/assets/images/eco-resort.jpg",
        category: "Tourisme",
        investmentRange: "200K$ - 3M$",
        expectedROI: "30%",
        timeline: "6 ans"
      },
      {
        id: 5,
        title: "Plateforme de Télémédecine Santé",
        excerpt: "Combler les lacunes de santé avec des solutions de télémédecine innovantes pour les communautés rurales.",
        image: "/assets/images/telemedicine.jpg",
        category: "HealthTech",
        investmentRange: "75K$ - 1M$",
        expectedROI: "28%",
        timeline: "4 ans"
      },
      {
        id: 6,
        title: "Centre Logistique E-commerce",
        excerpt: "Infrastructure logistique moderne pour soutenir la croissance du commerce électronique régional.",
        image: "/assets/images/logistics-center.jpg",
        category: "Logistique",
        investmentRange: "300K$ - 2M$",
        expectedROI: "22%",
        timeline: "5 ans"
      },
      {
        id: 7,
        title: "Application EdTech Mobile",
        excerpt: "Révolutionner l'éducation avec une plateforme d'apprentissage mobile accessible et engageante.",
        image: "/assets/images/edtech-app.jpg",
        category: "Éducation",
        investmentRange: "40K$ - 800K$",
        expectedROI: "38%",
        timeline: "3 ans"
      },
      {
        id: 8,
        title: "Usine de Transformation Alimentaire",
        excerpt: "Moderniser la transformation alimentaire locale avec des équipements de pointe et des pratiques durables.",
        image: "/assets/images/food-processing.jpg",
        category: "Agroalimentaire",
        investmentRange: "150K$ - 1.5M$",
        expectedROI: "26%",
        timeline: "4 ans"
      }
    ]
  },
  en: {
    featured: [
      {
        id: 1,
        title: "Revolutionary Green Energy Initiative",
        excerpt: "Discover how our solar farm project is transforming renewable energy in West Africa, with projected 25% ROI over 5 years.",
        content: "This groundbreaking solar energy project spans 500 hectares and aims to provide clean electricity to over 100,000 households. With cutting-edge photovoltaic technology and strategic partnerships with local governments, investors can expect substantial returns while contributing to sustainable development.",
        image: "/assets/images/solar-farm.jpg",
        category: "Renewable Energy",
        investmentRange: "$50K - $2M",
        expectedROI: "25%",
        timeline: "5 years",
        featured: true
      },
      {
        id: 2,
        title: "Smart Agriculture Tech Hub",
        excerpt: "Join the agricultural revolution with our IoT-powered farming solutions delivering 40% increased crop yields.",
        content: "Our smart agriculture platform combines IoT sensors, AI analytics, and precision farming techniques to maximize crop yields while minimizing resource consumption. This technology has been tested across multiple farms with consistently impressive results.",
        image: "/assets/images/smart-farming.jpg",
        category: "AgriTech",
        investmentRange: "$25K - $500K",
        expectedROI: "35%",
        timeline: "3 years",
        featured: true
      },
      {
        id: 3,
        title: "Fintech Payment Gateway Expansion",
        excerpt: "Scaling mobile payment solutions across emerging markets with proven technology and growing user base of 500K+.",
        content: "Our fintech platform has revolutionized digital payments in the region, processing over $10M monthly. We're seeking investment to expand operations and capture the rapidly growing digital payment market in West Africa.",
        image: "/assets/images/fintech-mobile.jpg",
        category: "Financial Technology",
        investmentRange: "$100K - $5M",
        expectedROI: "45%",
        timeline: "4 years",
        featured: true
      }
    ],
    additional: [
      {
        id: 4,
        title: "Luxury Eco-Resort Development",
        excerpt: "Premium eco-tourism destination combining sustainability with luxury hospitality.",
        image: "/assets/images/eco-resort.jpg",
        category: "Tourism",
        investmentRange: "$200K - $3M",
        expectedROI: "30%",
        timeline: "6 years"
      },
      {
        id: 5,
        title: "Healthcare Telemedicine Platform",
        excerpt: "Bridging healthcare gaps with innovative telemedicine solutions for rural communities.",
        image: "/assets/images/telemedicine.jpg",
        category: "HealthTech",
        investmentRange: "$75K - $1M",
        expectedROI: "28%",
        timeline: "4 years"
      },
      {
        id: 6,
        title: "E-commerce Logistics Center",
        excerpt: "Modern logistics infrastructure to support regional e-commerce growth.",
        image: "/assets/images/logistics-center.jpg",
        category: "Logistics",
        investmentRange: "$300K - $2M",
        expectedROI: "22%",
        timeline: "5 years"
      },
      {
        id: 7,
        title: "Mobile EdTech Application",
        excerpt: "Revolutionizing education with an accessible and engaging mobile learning platform.",
        image: "/assets/images/edtech-app.jpg",
        category: "Education",
        investmentRange: "$40K - $800K",
        expectedROI: "38%",
        timeline: "3 years"
      },
      {
        id: 8,
        title: "Food Processing Plant",
        excerpt: "Modernizing local food processing with state-of-the-art equipment and sustainable practices.",
        image: "/assets/images/food-processing.jpg",
        category: "Food Processing",
        investmentRange: "$150K - $1.5M",
        expectedROI: "26%",
        timeline: "4 years"
      }
    ]
  }
};