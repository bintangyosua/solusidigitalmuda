import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Solusi Digital",
  lastName: "Muda",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Web Developer",
  avatar: "/images/logosdm.png",
  location: "Asia/Jakarta",
  languages: ["English", "Bahasa"],
};

const newsletter = {
  display: true,
  title: <>Hubungi Solusi Digital Muda</>,
  description: (
    <>
      Hubungi kami jika Anda tertarik dengan layanan kami di bidang teknologi,
      pengembangan web, atau solusi IT untuk mendukung kebutuhan bisnis Anda.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system/nextjs-starter",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:example@gmail.com",
  },
];

const home = {
  label: "Beranda",
  title: "Solusi Digital Muda - Penyedia Solusi IT Terpercaya",
  description:
    "Memberdayakan bisnis melalui solusi IT yang inovatif dan transformasi digital",
  headline: <>Transformasi Bisnis Melalui Teknologi</>,
  subline: (
    <>
      Kami adalah <InlineCode>Solusi Digital Muda</InlineCode>, mitra terpercaya
      Anda dalam transformasi digital. Kami menyediakan solusi IT komprehensif
      untuk membantu bisnis Anda berkembang di era digital.
    </>
  ),
};

const about = {
  label: "Tentang",
  title: "Tentang Kami",
  description: `${person.name} - Mitra Solusi IT Terpercaya di ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Visi & Misi",
    description: (
      <>
        Solusi Digital Muda berkomitmen untuk menyediakan layanan IT
        komprehensif yang membantu bisnis dalam menghadapi tantangan era
        digital. Kami memahami bahwa tidak semua organisasi memiliki sumber daya
        untuk mengelola kebutuhan IT mereka secara internal, karena itu kami
        hadir sebagai solusi profesional untuk menjembatani kesenjangan
        tersebut.
      </>
    ),
  },
  work: {
    display: true,
    title: "Layanan Kami",
    experiences: [
      {
        company: "Pengembangan Web",
        timeframe: "Layanan Utama",
        role: "Solusi Pembuatan Website",
        achievements: [
          <>Jasa pembuatan website profesional sesuai kebutuhan bisnis Anda</>,
          <>Penambahan fitur sesuai permintaan dan kebutuhan bisnis</>,
          <>Desain responsif yang optimal untuk perangkat mobile dan desktop</>,
        ],
        images: [
          {
            src: "/images/projects/proyek/satuportal.png",
            alt: "Proyek Pengembangan Website",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Konsultasi IT",
        timeframe: "Layanan Pendukung",
        role: "Layanan Pengembangan",
        achievements: [
          <>Jasa update dan pemeliharaan website</>,
          <>Layanan migrasi website</>,
          <>Optimasi infrastruktur IT</>,
        ],
        images: [
          {
            src: "/images/projects/proyek/kreasikita.png",
            alt: "Proyek Konsultasi IT",
            width: 13,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Portofolio Proyek",
    institutions: [
      {
        name: "Profil Perusahaan",
        description: (
          <>
            Proyek ini melibatkan pengembangan website untuk pemerintahan kota
            yang dirancang untuk meningkatkan transparansi, aksesibilitas, dan
            efisiensi layanan publik. Melalui platform ini, masyarakat dapat
            dengan mudah memperoleh informasi tentang program dan layanan yang
            tersedia, serta mengakses berbagai layanan administrasi secara
            digital.
          </>
        ),
        images: [
          {
            src: "/images/projects/proyek/satuportal.png",
            alt: "Proyek Website Pemerintahan Kota",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        name: "Platform Donasi",
        description: (
          <>
            Platform donasi yang kami kembangkan memungkinkan kreator konten
            untuk terhubung dengan pendukung mereka melalui donasi atau tip
            finansial. Platform ini tidak hanya memberi kreator sumber
            pendapatan tambahan, tetapi juga memperkuat komunitas di sekitar
            karya mereka. Sistem ini dirancang dengan kemudahan akses dan
            keamanan transaksi yang optimal, sehingga pendukung dapat memberikan
            donasi dengan nyaman.
          </>
        ),
        images: [
          {
            src: "/images/projects/proyek/kreasikita.png",
            alt: "Platform Donasi",
            width: 13,
            height: 9,
          },
        ],
      },
    ],
  },
  technical: {
    display: true,
    title: "Keahlian Kami",
    skills: [
      {
        title: "Teknologi Web",
        description: (
          <>
            Keahlian dalam framework pengembangan web modern termasuk React,
            Next.js, dan Node.js
          </>
        ),
        images: [
          {
            src: "/images/tech/HTML.svg",
            alt: "Teknologi Web",
            width: 5,
            height: 5,
          },
          {
            src: "/images/tech/js.svg",
            alt: "Teknologi Web",
            width: 5,
            height: 5,
          },
          {
            src: "/images/tech/ts.svg",
            alt: "Teknologi Web",
            width: 5,
            height: 5,
          },
          {
            src: "/images/tech/node.svg",
            alt: "Teknologi Web",
            width: 5,
            height: 5,
          },
          {
            src: "/images/tech/next.svg",
            alt: "Teknologi Web",
            width: 5,
            height: 5,
          },
          {
            src: "/images/tech/react.svg",
            alt: "Teknologi Web",
            width: 5,
            height: 5,
          },
          {
            src: "/images/tech/php.svg",
            alt: "Teknologi Web",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Database & Backend",
        description: (
          <>
            Pengalaman dalam mengelola berbagai jenis database dan pengembangan
            backend dengan performa tinggi
          </>
        ),
        images: [
          {
            src: "/images/tech/mysql.svg",
            alt: "Database",
            width: 5,
            height: 5,
          },
          {
            src: "/images/tech/mongodb.svg",
            alt: "Database",
            width: 5,
            height: 5,
          },
          {
            src: "/images/tech/postgresql.svg",
            alt: "Database",
            width: 5,
            height: 5,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Artikel & Blog",
  description: "Informasi terkini seputar teknologi dan transformasi digital",
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Proyek",
  title: "Proyek Kami",
  description: `Design proyek yang telah dikerjakan oleh ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Portofolio",
  title: "Showcase Projek",
  description: "Galeri visual dari implementasi sukses kami",
  images: [
    {
      src: "/images/queasy/queasy (1).png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/queasy/queasy (2).png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/queasy/queasy (3).png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/queasy/queasy (4).png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/queasy/queasy (5).png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/queasy/queasy (6).png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/queasy/queasy (7).png",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
