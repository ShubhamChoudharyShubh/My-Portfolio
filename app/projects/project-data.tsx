export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
  image?: string;      // Optional image URL for thumbnail
  type?: string;       // Optional project type, e.g., 'WordPress', 'PHP', etc.
}


export const projects: Project[] = [
  {
    title: "The Bake Angels",
    year: 2024,
    description: "E-commerce cake & flower delivery platform",
    url: "https://thebakeangels.com",
    image: "/tbas.jpg",
    type: "WordPress",
  },
  {
    title: "KSW Cargo",
    year: 2024,
    description: "Logistics and air cargo website",
    url: "https://kswcargo.com",
    image: "/ksw.jpg",
    type: "WordPress",
  },
  {
    title: "Securigeek",
    year: 2024,
    description: "Cybersecurity services website",
    url: "https://securigeek.com",
    image: "/securigeek.jpg",
    type: "WordPress",
  },
  {
    title: "Board Exams Community",
    year: 2023,
    description: "SEO-optimized educational blog for students",
    url: "https://boardexamscommunity.in",
    image: "/bec.jpg",
    type: "WordPress",
  },
  {
    title: "My Market Up",
    year: 2024,
    description: "Business growth and digital marketing platform",
    url: "https://mymarketup.com",
    image: "/mymarketup.jpg",
    type: "WordPress",
  },
  {
    title: "Hotel Booking Website",
    year: 2023,
    description: "Full-stack hotel booking platform with admin panel",
    url: "https://github.com/ShubhamChoudharyShubh/Hotel-Booking-Website",
    image: "/casaarev.jpg",
    type: "WordPress",
  },
  {
    title: "PHP Discussion Board",
    year: 2023,
    description: "Dynamic discussion forum built using PHP and MySQL",
    url: "https://discussphp.shubhamchoudharyshubh.in",
    image: "/phpdicussion.png",
    type: "PHP/MySQL",
  }
];

