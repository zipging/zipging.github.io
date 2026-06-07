window.profileData = {
  person: {
    name: "Wenlin Li",
    chineseName: "黎文林",
    title: "Ph.D. Student in Data Science",
    affiliation: "The Chinese University of Hong Kong, Shenzhen",
    school: "School of Data Science",
    location: "Shenzhen, China",
    email: "wenlinli1@link.cuhk.edu.cn",
    github: "https://github.com/zipging",
    scholar: "https://scholar.google.com.hk/citations?user=jIHIvPoAAAAJ&hl=zh-CN",
    homepage: "https://zipging.github.io/",
    supervisorName: "Prof. Jin Liu",
    supervisorUrl: "https://sites.google.com/view/liujinlab/home",
    avatar: "assets/images/profile-full.png"
  },
  scholarSnapshot: {
    label: "Google Scholar snapshot",
    date: "June 2026",
    citations: 108,
    hIndex: 3,
    i10Index: 3,
    fields: ["AI4Science", "Bioinformatics"]
  },
  intro: [
    "I am a first-year Ph.D. student in Data Science at the School of Data Science, The Chinese University of Hong Kong, Shenzhen, supervised by <a href=\"https://sites.google.com/view/liujinlab/home\" target=\"_blank\" rel=\"noreferrer\">Prof. Jin Liu</a>.",
    "I obtained my bachelor's degree from the School of Statistics and Mathematics at Zhongnan University of Economics and Law, majoring in Data Science and Big Data Technology, under the guidance of <a href=\"https://cnd.emory.edu/about/faculty-bios/sun-xiaobo.html\" target=\"_blank\" rel=\"noreferrer\">Prof. Xiaobo Sun</a> at Emory University.",
    "My research focuses on developing deep learning algorithms for genomic analysis, with current interests in spatial transcriptomics, spatial genomics, multimodal biomedical learning, and cross-sample differential expression analysis. Since May 2026, I have also been on academic exchange at Shenzhen Loop Area Institute (SLAI)."
  ],
  news: [
    {
      date: "Sep. 2025",
      text: "SIGEL was published in Genome Biology."
    },
    {
      date: "2025",
      text: "MEATRD appeared in AAAI 2025."
    },
    {
      date: "2024",
      text: "DARLC appeared in ACM Multimedia 2024."
    }
  ],
  interests: [
    {
      name: "Spatial Genomics",
      text: "Representation learning methods for spatial transcriptomics and spatially informed genomic analysis."
    },
    {
      name: "AI for Science",
      text: "Deep learning systems that connect biological context, molecular measurements, and downstream discovery tasks."
    },
    {
      name: "Biomedical Multimodal Learning",
      text: "Models that integrate tissue images, spatial omics, and graph-structured tissue context."
    }
  ],
  heroHighlights: [
    {
      period: "2025.09 - Present",
      title: "Ph.D. in Data Science",
      place: "CUHK-Shenzhen",
      logo: "assets/images/cuhksz-logo.png",
      logoAlt: "The Chinese University of Hong Kong, Shenzhen logo"
    },
    {
      period: "2026.05 - Present",
      title: "Academic Exchange",
      place: "Shenzhen Loop Area Institute (SLAI)",
      logo: "assets/images/slai-logo.png",
      logoAlt: "Shenzhen Loop Area Institute logo"
    },
    {
      period: "2024.09 - 2024.12",
      title: "M.Sc. in Applied Statistics",
      place: "Xiamen University (partially completed)",
      logo: "assets/images/xmu-logo.png",
      logoAlt: "Xiamen University logo"
    },
    {
      period: "2020.09 - 2024.06",
      title: "B.Sc. in Data Science and Big Data Technology",
      place: "ZUEL",
      logo: "assets/images/zuel-logo.webp",
      logoAlt: "Zhongnan University of Economics and Law logo"
    }
  ],
  featuredPublications: [
    {
      title: "SIGEL: a context-aware genomic representation learning framework for spatial genomics analysis",
      venue: "Genome Biology",
      year: "2025",
      badge: "Genome Biology 2025",
      image: "assets/images/sigel-thumb.png",
      authors: [
        { name: "Wenlin Li", me: true },
        { name: "Maocheng Zhu" },
        { name: "Yucheng Xu" },
        { name: "Mengqian Huang" },
        { name: "Zihao Wang" },
        { name: "Jin Chen" },
        { name: "Hao Wu", marks: ["*"] },
        { name: "Xiaobo Sun", marks: ["*"] }
      ],
      link: "https://genomebiology.biomedcentral.com/articles/10.1186/s13059-025-03748-7",
      summary: "A context-aware, self-supervised framework for learning spatially informed gene representations that support imputation, spatial pattern detection, disease-associated gene discovery, gene-gene interaction analysis, and spatial clustering."
    },
    {
      title: "Dual Advancement of Representation Learning and Clustering for Sparse and Noisy Images",
      venue: "ACM Multimedia",
      year: "2024",
      badge: "ACM MM 2024",
      image: "assets/images/darlc-thumb.png",
      authors: [
        { name: "Wenlin Li", me: true, marks: ["†"] },
        { name: "Yucheng Xu", marks: ["†"] },
        { name: "Xiaoqing Zheng" },
        { name: "Suoya Han" },
        { name: "Jun Wang" },
        { name: "Xiaobo Sun", marks: ["*"] }
      ],
      link: "https://arxiv.org/abs/2409.01781",
      summary: "A unified framework for joint representation learning and clustering of sparse and noisy images, combining contrastive learning, masked image modeling, graph attention-based augmentation, and robust mixture modeling."
    },
    {
      title: "MEATRD: Multimodal Anomalous Tissue Region Detection Enhanced with Spatial Transcriptomics",
      venue: "AAAI",
      year: "2025",
      badge: "AAAI 2025",
      image: "assets/images/meatrd-thumb.png",
      authors: [
        { name: "Kaicheng Xu", marks: ["†"] },
        { name: "Qilong Wu", marks: ["†"] },
        { name: "Yan Lu" },
        { name: "Yinan Zheng" },
        { name: "Wenlin Li", me: true },
        { name: "Xingjie Tang" },
        { name: "Jun Wang" },
        { name: "Xiaobo Sun", marks: ["*"] }
      ],
      link: "https://ojs.aaai.org/index.php/AAAI/article/view/33409",
      summary: "A multimodal anomalous tissue region detection method that integrates histology images and spatial transcriptomics through masked graph dual-attention learning and reconstruction-based one-class detection."
    }
  ],
  publications: [
    {
      title: "Spatial multi-omics imputation and embedding with SpaMIE",
      authors: [
        { name: "W Liu" },
        { name: "D Xiang" },
        { name: "X Jiang" },
        { name: "Y Bai" },
        { name: "S Li" },
        { name: "W Li", me: true },
        { name: "S Lv" },
        { name: "Q Li" },
        { name: "J Jiang" },
        { name: "J Liu" }
      ],
      venue: "Cell Reports Methods",
      year: "2026",
      citations: "",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=jIHIvPoAAAAJ&citation_for_view=jIHIvPoAAAAJ:LkGwnXOMwfcC"
    },
    {
      title: "SIGEL: a context-aware genomic representation learning framework for spatial genomics analysis",
      authors: [
        { name: "W Li", me: true },
        { name: "M Zhu" },
        { name: "Y Xu" },
        { name: "M Huang" },
        { name: "Z Wang" },
        { name: "J Chen" },
        { name: "H Wu", marks: ["*"] },
        { name: "X Sun", marks: ["*"] }
      ],
      venue: "Genome Biology 26 (1), 287",
      year: "2025",
      citations: "3",
      link: "https://genomebiology.biomedcentral.com/articles/10.1186/s13059-025-03748-7"
    },
    {
      title: "MEATRD: Multimodal Anomalous Tissue Region Detection Enhanced with Spatial Transcriptomics",
      authors: [
        { name: "K Xu", marks: ["†"] },
        { name: "Q Wu", marks: ["†"] },
        { name: "Y Lu" },
        { name: "Y Zheng" },
        { name: "W Li", me: true },
        { name: "X Tang" },
        { name: "J Wang" },
        { name: "X Sun", marks: ["*"] }
      ],
      venue: "AAAI-2025 39 (12), 12918-12926",
      year: "2025",
      citations: "27",
      link: "https://ojs.aaai.org/index.php/AAAI/article/view/33409"
    },
    {
      title: "Contrastive Learning-Based Deep Embedded Clustering and the TCN-DMAttention Model for Traffic Congestion Prediction",
      authors: [
        { name: "B Zhang", marks: ["†"] },
        { name: "H Zhang", marks: ["†"] },
        { name: "W Li", me: true, marks: ["†"] },
        { name: "N Chen" },
        { name: "X Jiang" }
      ],
      venue: "IEEE Transactions on Intelligent Transportation Systems",
      year: "2025",
      citations: "2",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=jIHIvPoAAAAJ&citation_for_view=jIHIvPoAAAAJ:_FxGoFyzp5QC"
    },
    {
      title: "Dual Advancement of Representation Learning and Clustering for Sparse and Noisy Images",
      authors: [
        { name: "W Li", me: true, marks: ["†"] },
        { name: "Y Xu", marks: ["†"] },
        { name: "X Zheng" },
        { name: "S Han" },
        { name: "J Wang" },
        { name: "X Sun", marks: ["*"] }
      ],
      venue: "ACM MM-2024, 1934-1942",
      year: "2024",
      citations: "20",
      link: "https://arxiv.org/abs/2409.01781"
    }
  ],
  experience: [
    {
      period: "2026.05 - Present",
      title: "Academic Exchange",
      place: "Shenzhen Loop Area Institute (SLAI)",
      logo: "assets/images/slai-logo.png",
      logoAlt: "Shenzhen Loop Area Institute logo"
    },
    {
      period: "Teaching",
      title: "Teaching Assistant, MDS5202 Applied Regression Analysis",
      place: "The Chinese University of Hong Kong, Shenzhen",
      logo: "assets/images/cuhksz-logo.png",
      logoAlt: "The Chinese University of Hong Kong, Shenzhen logo"
    }
  ],
  education: [
    {
      period: "2025.09 - Present",
      title: "Ph.D. in Data Science",
      place: "School of Data Science, The Chinese University of Hong Kong, Shenzhen",
      detail: "Supervisor: <a href=\"https://sites.google.com/view/liujinlab/home\" target=\"_blank\" rel=\"noreferrer\">Prof. Jin Liu</a>",
      logo: "assets/images/cuhksz-logo.png",
      logoAlt: "The Chinese University of Hong Kong, Shenzhen logo"
    },
    {
      period: "2025.02 - 2025.09",
      title: "Research Assistant",
      place: "School of Data Science, The Chinese University of Hong Kong, Shenzhen",
      logo: "assets/images/cuhksz-logo.png",
      logoAlt: "The Chinese University of Hong Kong, Shenzhen logo"
    },
    {
      period: "2024.09 - 2024.12",
      title: "Partially Completed M.Sc. in Applied Statistics",
      place: "Department of Statistics and Data Science, Xiamen University",
      logo: "assets/images/xmu-logo.png",
      logoAlt: "Xiamen University logo"
    },
    {
      period: "2020.09 - 2024.06",
      title: "B.Sc. in Data Science and Big Data Technology",
      place: "School of Statistics and Mathematics, Zhongnan University of Economics and Law",
      detail: "Undergraduate research under the guidance of <a href=\"https://cnd.emory.edu/about/faculty-bios/sun-xiaobo.html\" target=\"_blank\" rel=\"noreferrer\">Prof. Xiaobo Sun</a>, Emory University",
      logo: "assets/images/zuel-logo.webp",
      logoAlt: "Zhongnan University of Economics and Law logo"
    }
  ]
};
