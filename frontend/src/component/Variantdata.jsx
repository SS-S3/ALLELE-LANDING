export const variantReports = [
  {
    id: "pathogenic",
    title: "Breast Cancer Variant- BRCA1 c.68_69delAG",
    classification: "Pathogenic",
    confidence: "95% Confidence",
    evidence: "Strong (ACMG-compliant)",
    src: "/assessts/pathogene_glif.png",
    description:
      "This variant has strong evidence supporting disease causation and significantly impacts protein function and biological pathways.",
    sections: [
      {
        heading: "Functional Impact",
        content:
          "Results in loss of normal protein function or severe structural disruption, affecting critical cellular pathways.",
      },
      {
        heading: "Disease Association",
        content:
          "Strongly associated with disease phenotypes and observed in affected individuals.",
      },
      {
        heading: "Clinical Relevance",
        content:
          "Clinically actionable; useful for diagnosis, risk assessment, and genetic counseling.",
      },
    ],
  },

  {
    id: "vus",
    title: "Cancer Preventive Protein Variant- TP53 c.215C>G",
    classification: "Uncertain",
    confidence: "45% Confidence",
    evidence: "Insufficient or Conflicting",
    src: "/assessts/uncertain.png",
    description:
      "Currently lacks enough evidence to determine clinical significance.",
    sections: [
      {
        heading: "Functional Impact",
        content:
          "Conflicting computational predictions and limited functional data.",
      },
      {
        heading: "Disease Association",
        content:
          "No definitive link to disease phenotype.",
      },
      {
        heading: "Clinical Relevance",
        content:
          "Not recommended for clinical decision-making.",
      },
    ],
  },

  {
    id: "benign",
    title: "Fat Cells (lipocytes) - Lipoma",
    classification: "Benign",
    confidence: "98% Confidence",
    evidence: "Strong",
    src: "/assessts/begine.jpeg",
    description:
      "Represents normal genetic variation with no disease impact.",
    sections: [
      {
        heading: "Functional Impact",
        content:
          "No effect on gene or protein function.",
      },
      {
        heading: "Disease Association",
        content:
          "Observed in healthy populations.",
      },
      {
        heading: "Clinical Relevance",
        content:
          "Clinically irrelevant.",
      },
    ],
  },
];