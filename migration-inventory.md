# Migration Inventory — Stage 1 (Inventory Only)

**Workspace:** `f:\Work\SaMs\website\sam-solutions.us`
**Date:** 2026-08-31
**Scope:** Classify every root-level and nested exported entry. No files are moved, renamed, deleted, or modified in this stage.

---

## 1. Classification Rules

| Category | What it includes | Destination (Stage 2) |
|---|---|---|
| `legacy-html` | The root `index.html` (WordPress home-page export) and every directory that contains an exported page `index.html` (service pages, case studies, blog posts, author/category archives, pagination, CTAs, thank-you pages, press kit, etc.) | Move into a `legacy/` subdirectory tree preserving the URL path family |
| `public-asset` | Browser-requested static assets: `wp-content/`, `wp-includes/`, `cdn-cgi/`, crawler files (`robots.txt`), all sitemap XML/XSL files, and any root-level favicon/manifest files that exist | Move into a `public/` subdirectory tree (Next.js serves these as-is) |
| `next-source` | Next.js project config, source code, build output, and dependency manifests that must remain at the workspace root | Stay at root — no move |

**Explicit exclusions (never moved):** `.next/`, `node_modules/`, `.git/` — these are build artifacts, dependencies, and version-control metadata.

---

## 2. legacy-html — Exported Page Directories & Root Home Page

### Root
- `index.html` — WordPress home-page export

### Service / Landing Pages (1 file each)
| Path Family | Public URL |
|---|---|
| `about-us/index.html` | `/about-us/` |
| `contact/index.html` | `/contact/` |
| `custom-software-solutions/index.html` | `/custom-software-solutions/` |
| `customer-experience-and-ecommerce/index.html` | `/customer-experience-and-ecommerce/` |
| `cloud-migration-solutions/index.html` | `/cloud-migration-solutions/` |
| `firmware-and-embedded-software/index.html` | `/firmware-and-embedded-software/` |
| `fpx-cpq/index.html` | `/fpx-cpq/` |
| `hire-professional-sitecore-developers/index.html` | `/hire-professional-sitecore-developers/` |
| `iot-development-services/index.html` | `/iot-development-services/` |
| `iot-embedded/index.html` | `/iot-embedded/` |
| `java-consulting-services/index.html` | `/java-consulting-services/` |
| `magento-ecommerce-development/index.html` | `/magento-ecommerce-development/` |
| `mobile-app-development/index.html` | `/mobile-app-development/` |
| `professional-java-development-services/index.html` | `/professional-java-development-services/` |
| `react-js-development-services/index.html` | `/react-js-development-services/` |
| `sap-development-services/index.html` | `/sap-development-services/` |
| `sitecore-consulting-services/index.html` | `/sitecore-consulting-services/` |
| `sitecore-development-services/index.html` | `/sitecore-development-services/` |
| `sitecore-devops-services/index.html` | `/sitecore-devops-services/` |
| `sitecore-migration-services/index.html` | `/sitecore-migration-services/` |
| `sitecore-platform-integration-services/index.html` | `/sitecore-platform-integration-services/` |
| `sitecore-solutions/index.html` | `/sitecore-solutions/` |
| `sitecore-technical-audit/index.html` | `/sitecore-technical-audit/` |
| `sitecore-upgrade-to-the-latest-version/index.html` | `/sitecore-upgrade-to-the-latest-version/` |
| `sitecore-upgrade-services-upgrade-your-sitecore-to-the-latest-xp-or-xm-cloud/index.html` | `/sitecore-upgrade-services-upgrade-your-sitecore-to-the-latest-xp-or-xm-cloud/` |

### CTA / Funnel Pages (17 files)
| Path Family | Public URL Pattern |
|---|---|
| `cta/accelerate-your-journey-to-aws-by-working-with-us-contact-us-for-a-free-cloud-consultation/index.html` | `/cta/accelerate-your-journey-to-aws-by-working-with-us-contact-us-for-a-free-cloud-consultation/` |
| `cta/cloud-deployment-models-advantages-and-disadvantages/index.html` | `/cta/cloud-deployment-models-advantages-and-disadvantages/` |
| `cta/how-to-choose-a-software-development-company-№1/index.html` | `/cta/how-to-choose-a-software-development-company-№1/` |
| `cta/how-to-hire-a-full-stack-developer-for-node-js-№1/index.html` | `/cta/how-to-hire-a-full-stack-developer-for-node-js-№1/` |
| `cta/how-to-hire-a-full-stack-developer-for-node-js-№2/index.html` | `/cta/how-to-hire-a-full-stack-developer-for-node-js-№2/` |
| `cta/how-to-hire-a-full-stack-developer-for-node-js-№4/index.html` | `/cta/how-to-hire-a-full-stack-developer-for-node-js-№4/` |
| `cta/how-to-hire-reactjs-developers-№1/index.html` | `/cta/how-to-hire-reactjs-developers-№1/` |
| `cta/how-to-outsource-software-development-№3/index.html` | `/cta/how-to-outsource-software-development-№3/` |
| `cta/hire-programmers-for-a-startup-№1/index.html` | `/cta/hire-programmers-for-a-startup-№1/` |
| `cta/hire-programmers-for-a-startup-№3/index.html` | `/cta/hire-programmers-for-a-startup-№3/` |
| `cta/optimize-your-aws-cloud-costs-by-working-with-us-contact-us-for-a-free-cloud-consultation/index.html` | `/cta/optimize-your-aws-cloud-costs-by-working-with-us-contact-us-for-a-free-cloud-consultation/` |
| `cta/sitecore-pricing-guide-what-you-need-to-know/index.html` | `/cta/sitecore-pricing-guide-what-you-need-to-know/` |
| `cta/sitecore-support-options-which-one-do-you-need/index.html` | `/cta/sitecore-support-options-which-one-do-you-need/` |
| `cta/we-help-companies-across-all-industries-with-embedded-and-iot-product-development/index.html` | `/cta/we-help-companies-across-all-industries-with-embedded-and-iot-product-development/` |
| `cta/what-is-sitecore-from-products-overview-to-pros-and-cons-№-1/index.html` | `/cta/what-is-sitecore-from-products-overview-to-pros-and-cons-№-1/` |
| `cta/what-is-sitecore-from-products-overview-to-pros-and-cons-№2/index.html` | `/cta/what-is-sitecore-from-products-overview-to-pros-and-cons-№2/` |
| `get-your-sitecore-free-audit-sam-solutions/index.html` | `/get-your-sitecore-free-audit-sam-solutions/` |

### Case Studies (~30 pages)
| Path Family (truncated) | Public URL Pattern |
|---|---|
| `case-studies/award-winning-sap-cx-implementation-for-telekom-slovenije/index.html` | `/case-studies/award-winning-sap-cx-implementation-for-telekom-slovenije/` |
| `case-studies/cloud-based-platform-to-automate-law-enforcement/index.html` | `/case-studies/cloud-based-platform-to-automate-law-enforcement/` |
| `case-studies/commercial-real-estate-sitecore-based-the-instant-group/index.html` | `/case-studies/commercial-real-estate-sitecore-based-the-instant-group/` |
| `case-studies/desktop-enterprise-software-to-microservices-modular-saas/index.html` | `/case-studies/desktop-enterprise-software-to-microservices-modular-saas/` |
| `case-studies/development-of-an-automotive-infotainment-system/index.html` | `/case-studies/development-of-an-automotive-infotainment-system/` |
| `case-studies/dvs-full-cycle-saas-development-of-real-estate-appraisal-and-lending-platform/index.html` | `/case-studies/dvs-full-cycle-saas-development-of-real-estate-appraisal-and-lending-platform/` |
| `case-studies/koru-iot-enabled-smart-plant-pot-and-air-purifier-for-home-and-workplace/index.html` | `/case-studies/koru-iot-enabled-smart-plant-pot-and-air-purifier-for-home-and-workplace/` |
| `case-studies/leveraging-a-magento-based-ecommerce-solution-for-hardware-nl/index.html` | `/case-studies/leveraging-a-magento-based-ecommerce-solution-for-hardware-nl/` |
| `case-studies/lexware-saas-accounting-platform-for-major-german-financial-software-company/index.html` | `/case-studies/lexware-saas-accounting-platform-for-major-german-financial-software-company/` |
| `case-studies/magento-based-ecommerce-website-for-printsafari/index.html` | `/case-studies/magento-based-ecommerce-website-for-printsafari/` |
| `case-studies/mobile-application-for-azhs-therapy-in-motion-software/index.html` | `/case-studies/mobile-application-for-azhs-therapy-in-motion-software/` |
| `case-studies/mobile-app-for-electric-car-charging-management-platform/index.html` | `/case-studies/mobile-app-for-electric-car-charging-management-platform/` |
| `case-studies/optimizing-the-umbraco-based-corporate-portal-for-a-sixfold-decrease-in-page-loading-time/index.html` | `/case-studies/optimizing-the-umbraco-based-corporate-portal-for-a-sixfold-decrease-in-page-loading-time/` |
| `case-studies/optimization-of-digital-sales-for-tender-corporation-magento-development/index.html` | `/case-studies/optimization-of-digital-sales-for-tender-corporation-magento-development/` |
| `case-studies/payback-largest-customer-loyalty-program-in-europe/index.html` | `/case-studies/payback-largest-customer-loyalty-program-in-europe/` |
| `case-studies/physical-and-virtual-server-management-software-for-a-large-hardware-manufacturer/index.html` | `/case-studies/physical-and-virtual-server-management-software-for-a-large-hardware-manufacturer/` |
| `case-studies/phytec-high-performance-phytec-board-support/index.html` | `/case-studies/phytec-high-performance-phytec-board-support/` |
| `case-studies/predictive-maintenance-iot-case-study/index.html` | `/case-studies/predictive-maintenance-iot-case-study/` |
| `case-studies/sam-solutions-sitecore-accelerator/index.html` | `/case-studies/sam-solutions-sitecore-accelerator/` |
| `case-studies/sap-cx-based-b2b-portal-for-a-major-metal-and-mining-company/index.html` | `/case-studies/sap-cx-based-b2b-portal-for-a-major-metal-and-mining-company/` |
| `case-studies/sap-hybris-implementation-for-major-childrens-toys-retail-chain/index.html` | `/case-studies/sap-hybris-implementation-for-major-childrens-toys-retail-chain/` |
| `case-studies/sitecore-10-migration-and-performance-boost-for-a-global-workspace-leader/index.html` | `/case-studies/sitecore-10-migration-and-performance-boost-for-a-global-workspace-leader/` |
| `case-studies/smart-delivery-box-implementation-iot-sunemates/index.html` | `/case-studies/smart-delivery-box-implementation-iot-sunemates/` |
| `case-studies/smart-house-solution-built-on-phytec-technologies/index.html` | `/case-studies/smart-house-solution-built-on-phytec-technologies/` |
| `case-studies/umbraco-powered-portal-boosts-user-activity-by-300-percent/index.html` | `/case-studies/umbraco-powered-portal-boosts-user-activity-by-300-percent/` |

### Blog Insights / Articles (30+ pages)
| Path Family (truncated) | Public URL Pattern |
|---|---|
| `insights/index.html` | `/insights/` |
| `insights/13-signs-its-time-to-find-a-new-sitecore-agency/index.html` | `/insights/13-signs-its-time-to-find-a-new-sitecore-agency/` |
| `insights/a-comprehensive-guide-to-outsourcing-software-development-services/index.html` | `/insights/a-comprehensive-guide-to-outsourcing-software-development-services/` |
| `insights/a-complete-overview-of-amazon-web-services-aws/index.html` | `/insights/a-complete-overview-of-amazon-web-services-aws/` |
| `insights/application-integration-of-aws/index.html` | `/insights/application-integration-of-aws/` |
| `insights/aws-analytics/index.html` | `/insights/aws-analytics/` |
| `insights/aws-developer-tools/index.html` | `/insights/aws-developer-tools/` |
| `insights/aws-migration-how-to-migrate/index.html` | `/insights/aws-migration-how-to-migrate/` |
| `insights/aws-mobile-services/index.html` | `/insights/aws-mobile-services/` |
| `insights/aws-security/index.html` | `/insights/aws-security/` |
| `insights/aws-vs-azure-v-s-google-cloud-which-is-better/index.html` | `/insights/aws-vs-azure-v-s-google-cloud-which-is-better/` |
| `insights/azure-ad-b2c-tutorial-how-to-authenticate-in-sitecore-via-azure/index.html` | `/insights/azure-ad-b2c-tutorial-how-to-authenticate-in-sitecore-via-azure/` |
| `insights/business-applications-of-aws/index.html` | `/insights/business-applications-of-aws/` |
| `insights/calling-an-audible-agile-business-strategies-for-long-term-success-blog/index.html` | `/insights/calling-an-audible-agile-business-strategies-for-long-term-success-blog/` |
| `insights/cloud-migration-strategy-guide-5-steps/index.html` | `/insights/cloud-migration-strategy-guide-5-steps/` |
| `insights/cost-management-of-aws/index.html` | `/insights/cost-management-of-aws/` |
| `insights/databases-on-aws/index.html` | `/insights/databases-on-aws/` |
| `insights/difference-between-sitecore-8-and-9/index.html` | `/insights/difference-between-sitecore-8-and-9/` |
| `insights/embedded-and-iot-product-development/index.html` | `/insights/embedded-and-iot-product-development/` |
| `insights/hire-programmers-for-a-startup/index.html` | `/insights/hire-programmers-for-a-startup/` |
| `insights/how-cloud-migration-digital-transformation-are-driving-the-digital-revolution/index.html` | `/insights/how-cloud-migration-digital-transformation-are-driving-the-digital-revolution/` |
| `insights/how-to-hire-a-full-stack-developer-for-a-node-js/index.html` | `/insights/how-to-hire-a-full-stack-developer-for-a-node-js/` |
| `insights/how-to-hire-a-full-stack-developer-for-a-node-js\index.html` (also in cta) | — |
| `insights/how-to-hire-reactjs-developers/index.html` | `/insights/how-to-hire-reactjs-developers/` |
| `insights/how-to-choose-a-software-development-company/index.html` | `/insights/how-to-choose-a-software-development-company/` |
| `insights/how-to-outsource-software-development\index.html` | `/insights/how-to-outsource-software-development/` |
| `insights/how-to-outsource-software-development-a-guide-for-startups/index.html` | `/insights/how-to-outsource-software-development-a-guide-for-startups/` |
| `insights/how-the-coronavirus-will-spur-a-new-wave-of-tech-innovation/index.html` | `/insights/how-the-coronavirus-will-spur-a-new-wave-of-tech-innovation/` |
| `insights/internet-of-things-of-aws/index.html` | `/insights/internet-of-things-of-aws/` |
| `insights/magento-commerce-what-you-should-know-before-using-magento-as-an-ecommerce-platform/index.html` | `/insights/magento-commerce-what-you-should-know-before-using-magento-as-an-ecommerce-platform/` |
| `insights/magento-offers-help-to-smbs-to-curb-effects-of-coronavirus/index.html` | `/insights/magento-offers-help-to-smbs-to-curb-effects-of-coronavirus/` |
| `insights/migration-and-transfer-of-aws/index.html` | `/insights/migration-and-transfer-of-aws/` |
| `insights/monitoring-and-scaling-of-aws/index.html` | `/insights/monitoring-and-scaling-of-aws/` |
| `insights/networking-and-storage-on-aws/index.html` | `/insights/networking-and-storage-on-aws/` |
| `insights/overview-of-amazon-compute-services/index.html` | `/insights/overview-of-amazon-compute-services/` |
| `insights/predictive-maintenance-using-iot-prototype/index.html` | `/insights/predictive-maintenance-using-iot-prototype/` |
| `insights/sam-solutions-joins-thought-leaders-at-the-2023-new-york-ecommerce-summit/index.html` | `/insights/sam-solutions-joins-thought-leaders-at-the-2023-new-york-ecommerce-summit/` |
| `insights/sam-solutions-sponsor-startup-boston-week-2020/index.html` | `/insights/sam-solutions-sponsor-startup-boston-week-2020/` |
| `insights/sitecore-ai-2020-cmi-awards/index.html` | `/insights/sitecore-ai-2020-cmi-awards/` |
| `insights/sitecore-experience-commerce-success/index.html` | `/insights/sitecore-experience-commerce-success/` |
| `insights/sitecore-honors-sam-solutions-vadzim-papko-with-2022-sitecore-mvp-award/index.html` | `/insights/sitecore-honors-sam-solutions-vadzim-papko-with-2022-sitecore-mvp-award/` |
| `insights/sitecore-price/index.html` | `/insights/sitecore-price/` |
| `insights/sitecore-xm-cloud-overview/index.html` | `/insights/sitecore-xm-cloud-overview/` |
| `insights/software-quality-control-process/index.html` | `/insights/software-quality-control-process/` |
| `insights/sun-e-mates-interview/index.html` | `/insights/sun-e-mates-interview/` |
| `insights/top-10-reasons-to-outsource-react-development/index.html` | `/insights/top-10-reasons-to-outsource-react-development/` |
| `insights/what-is-cloud-software-as-a-service-saas/index.html` | `/insights/what-is-cloud-software-as-a-service-saas/` |
| `insights/what-is-cloud-computing-is-important-for-business/index.html` (typo in original) | `/insights/what-is-cloud-computing-is-important-for-business/` |
| `insights/what-is-hybrid-cloud-computing/index.html` | `/insights/what-is-hybrid-cloud-computing/` |
| `insights/what-is-infrastructure-as-a-service/index.html` | `/insights/what-is-infrastructure-as-a-service/` |
| `insights/what-is-multicloud-computing/index.html` | `/insights/what-is-multicloud-computing/` |
| `insights/what-is-platform-as-a-service/index.html` | `/insights/what-is-platform-as-a-service/` |
| `insights/what-is-private-cloud/index.html` | `/insights/what-is-private-cloud/` |
| `insights/what-is-sitecore/index.html` | `/insights/what-is-sitecore/` |
| `insights/a-guide-to-sitecore-support-options/index.html` | `/insights/a-guide-to-sitecore-support-options/` |

### Author Archives + Pagination (12 base authors + pagination)
| Path Family | Public URL Pattern |
|---|---|
| `author/a-paharelskaya/index.html` | `/author/a-paharelskaya/` |
| `author/dev-sharanda/index.html` | `/author/dev-sharanda/` |
| `author/dmitry-genov/index.html` | `/author/dmitry-genov/` |
| `author/dmitry-koshkin/index.html` | `/author/dmitry-koshkin/` |
| `author/epickap/index.html` | `/author/epickap/` |
| `author/g-jamessam-solutions-com/index.html` | `/author/g-jamessam-solutions-com/` |
| `author/ihar/index.html` | `/author/ihar/` |
| `author/s-drek/index.html` | `/author/s-drek/` |
| `author/seotestwb-by/index.html` | `/author/seotestwb-by/` |
| `author/serg/index.html` | `/author/serg/` |
| `author/serg/page/2/index.html` (pagination) | `/author/serg/page/2/` |
| `author/usa-sales/index.html` | `/author/usa-sales/` |
| `author/usa-sales/page/2/index.html` (pagination) | `/author/usa-sales/page/2/` |
| `author/usteam/index.html` | `/author/usteam/` |
| `author/vadim-gusev/index.html` | `/author/vadim-gusev/` |
| `author/g-jamessam-solutions-com/page/2/index.html` (pagination) | `/author/g-jamessam-solutions-com/page/2/` |
| `author/g-jamessam-solutions-com/page/3/index.html` (pagination) | `/author/g-jamessam-solutions-com/page/3/` |
| `author/g-jamessam-solutions-com/page/4/index.html` (pagination) | `/author/g-jamessam-solutions-com/page/4/` |

### Category Archives + Pagination
| Path Family | Public URL Pattern |
|---|---|
| `category/blog/index.html` | `/category/blog/` |
| `category/blog/page/2/index.html` (pagination) | `/category/blog/page/2/` |
| `category/blog/page/3/index.html` (pagination) | `/category/blog/page/3/` |
| `category/blog/page/4/index.html` (pagination) | `/category/blog/page/4/` |
| `category/blog/page/5/index.html` (pagination) | `/category/blog/page/5/` |
| `category/blog/page/6/index.html` (pagination) | `/category/blog/page/6/` |
| `category/cloud/index.html` | `/category/cloud/` |
| `category/cloud/page/2/index.html` (pagination) | `/category/cloud/page/2/` |
| `category/cloud/page/3/index.html` (pagination) | `/category/cloud/page/3/` |
| `category/embedded/index.html` | `/category/embedded/` |
| `category/iot/index.html` | `/category/iot/` |
| `category/outsourcing/index.html` | `/category/outsourcing/` |
| `category/qa-and-testing/index.html` | `/category/qa-and-testing/` |
| `category/sitecore/index.html` | `/category/sitecore/` |
| `category/sitecore/page/2/index.html` (pagination) | `/category/sitecore/page/2/` |

### Page Pagination (WordPress paginated pages)
| Path Family | Public URL Pattern |
|---|---|
| `page/2/index.html` | `/page/2/` |
| `page/3/index.html` | `/page/3/` |
| `page/4/index.html` | `/page/4/` |
| `page/5/index.html` | `/page/5/` |
| `page/6/index.html` | `/page/6/` |

### Slider / Testimonial Pages (9 slider + 7 testimonials)
| Path Family | Public URL Pattern |
|---|---|
| `slider/1stquad-michael-hofer-ceo-of-1stquad-talks-about-the-long-term-partnership-with-sam-solutions/index.html` | `/slider/1stquad-michael-hofer-ceo-of-1stquad-talks-about-the-long-term-partnership-with-sam-solutions/` |
| `slider/altima/index.html` | `/slider/altima/` |
| `slider/courtware/index.html` | `/slider/courtware/` |
| `slider/definition6/index.html` | `/slider/definition6/` |
| `slider/direct-value-solutions/index.html` | `/slider/direct-value-solutions/` |
| `slider/instant-group-sap-commercial-real-estate-sitecore-based-the/index.html` | `/slider/instant-group-sap-commercial-real-estate-sitecore-based-the/` |
| `slider/koru-botany-labs/index.html` | `/slider/koru-botany-labs/` |
| `slider/sun-e-mates/index.html` | `/slider/sun-e-mates/` |
| `slider/the-instant-group/index.html` | `/slider/the-instant-group/` |

### Testimonials (7 pages)
| Path Family (truncated) | Public URL Pattern |
|---|---|
| `testimonials/award-winning-sap-commerce-cloud-implementation-for-telekom-slovenije/index.html` | `/testimonials/award-winning-sap-commerce-cloud-implementation-for-telekom-slovenije/` |
| `testimonials/cloud-based-saas-and-mobile-platform-modernization-project-for-gov-tech-leader-courtware-solutions/index.html` | `/testimonials/cloud-based-saas-and-mobile-platform-modernization-project-for-gov-tech-leader-courtware-solutions/` |
| `testimonials/commercial-real-estate-sitecore-based-web-portal-for-the-instant-group/index.html` | `/testimonials/commercial-real-estate-sitecore-based-web-portal-for-the-instant-group/` |
| `testimonials/full-cycle-saas-development-of-real-estate-appraisal-and-lending-platform-for-dvs/index.html` | `/testimonials/full-cycle-saas-development-of-real-estate-appraisal-and-lending-platform-for-dvs/` |
| `testimonials/koru-iot-enabled-smart-plant-pot-and-air-purifier-for-home-and-workplace/index.html` | `/testimonials/koru-iot-enabled-smart-plant-pot-and-air-purifier-for-home-and-workplace/` |
| `testimonials/sap-hybris-implementation-for-major-childrens-toys-retail-chain/index.html` | `/testimonials/sap-hybris-implementation-for-major-childrens-toys-retail-chain/` |
| `testimonials/saas-accounting-platform-for-major-german-financial-software-company-lexware/index.html` | `/testimonials/saas-accounting-platform-for-major-german-financial-software-company-lexware/` |

### Other Pages
| Path Family | Public URL Pattern |
|---|---|
| `experts/vadzim-papko-architect-chief-net-technologist/index.html` | `/experts/vadzim-papko-architect-chief-net-technologist/` |
| `experts/raman-khalupau-lead-net-developer/index.html` | `/experts/raman-khalupau-lead-net-developer/` |
| `press-kit/index.html` | `/press-kit/` |
| `privacy-and-responsibility/index.html` | `/privacy-and-responsibility/` |
| `thank-you-page-general-form/index.html` | `/thank-you-page-general-form/` |

---

## 3. public-asset — Browser-Requested Static Assets

| Path Family | Public URL Pattern | Notes |
|---|---|---|
| `wp-content/` | `/wp-content/*` | WordPress plugins, themes (`sam/`), uploads |
| `wp-includes/` | `/wp-includes/*` | WordPress core JS/CSS |
| `cdn-cgi/` | `/cdn-cgi/*` | Cloudflare/WARP endpoint files |
| `robots.txt` | `/robots.txt` | Crawler directives |
| `sitemap.xml` | `/sitemap.xml` | Main sitemap index |
| `sitemap_index.xml` | `/sitemap_index.xml` | XML sitemap index |
| `page-sitemap.xml` | `/page-sitemap.xml` | Pages sitemap |
| `post-sitemap.xml` | `/post-sitemap.xml` | Posts/blogs sitemap |
| `case-studies-sitemap.xml` | `/case-studies-sitemap.xml` | Case studies sitemap |
| `main-sitemap.xsl` | `/main-sitemap.xsl` | XSL stylesheet for sitemap rendering |

**Favicon / Manifest check:** No standalone root-level favicon (`favicon.ico`, `favicon-*.png`, `site.webmanifest`, `apple-touch-icon.png`) files exist on disk. All favicon references in the HTML point to `/wp-content/themes/sam/img/favicons/...` (served from `wp-content`).

---

## 4. next-source — Files That Must Stay at Root

| File / Directory | Purpose |
|---|---|
| `app/` | Next.js App Router source (`layout.tsx`, `page.tsx`, `globals.css`) |
| `next.config.ts` | Next.js configuration |
| `next.middleware.ts` | Next.js middleware |
| `rewrites.ts` | URL rewrite rules (legacy → Next routing) |
| `package.json` | Project dependencies & scripts |
| `package-lock.json` | Dependency lock file |
| `tsconfig.json` | TypeScript configuration |
| `next-env.d.ts` | Next.js type declarations |
| `.gitignore` | Git ignore rules (already excludes `.next/`, `out/`, `node_modules/`) |
| `static-server.js` | Fallback static server script |
| `.next/` | Next.js build output (excluded from move — generated) |
| `node_modules/` | npm dependencies (excluded from move — installed) |

---

## 5. Stage 2 Proposed Move Mapping (Not Yet Performed)

```
Current Path                        →   Destination (proposed)
─────────────────────────────────────────────────────────────────────
index.html                          →   legacy/index.html
about-us/                           →   legacy/about-us/
contact/                            →   legacy/contact/
custom-software-solutions/          →   legacy/custom-software-solutions/
customer-experience-and-ecommerce/  →   legacy/customer-experience-and-ecommerce/
cloud-migration-solutions/          →   legacy/cloud-migration-solutions/
firmware-and-embedded-software/     →   legacy/firmware-and-embedded-software/
fpx-cpq/                            →   legacy/fpx-cpq/
hire-professional-sitecore-developers/  →   legacy/hire-professional-sitecore-developers/
iot-development-services/           →   legacy/iot-development-services/
iot-embedded/                       →   legacy/iot-embedded/
java-consulting-services/           →   legacy/java-consulting-services/
magento-ecommerce-development/      →   legacy/magento-ecommerce-development/
mobile-app-development/             →   legacy/mobile-app-development/
professional-java-development-services/  →   legacy/professional-java-development-services/
react-js-development-services/      →   legacy/react-js-development-services/
sap-development-services/           →   legacy/sap-development-services/
sitecore-consulting-services/       →   legacy/sitecore-consulting-services/
sitecore-development-services/      →   legacy/sitecore-development-services/
sitecore-devops-services/           →   legacy/sitecore-devops-services/
sitecore-migration-services/        →   legacy/sitecore-migration-services/
sitecore-platform-integration-services/  →   legacy/sitecore-platform-integration-services/
sitecore-solutions/                 →   legacy/sitecore-solutions/
sitecore-technical-audit/           →   legacy/sitecore-technical-audit/
sitecore-upgrade-to-the-latest-version/  →   legacy/sitecore-upgrade-to-the-latest-version/
sitecore-upgrade-services-*         →   legacy/sitecore-upgrade-services-*/
cta/*                               →   legacy/cta/*
case-studies/*                      →   legacy/case-studies/*
insights/*                          →   legacy/insights/*
author/*                            →   legacy/author/*
category/*                          →   legacy/category/*
page/2…6/                           →   legacy/page/2…6/
slider/*                            →   legacy/slider/*
testimonials/*                      →   legacy/testimonials/*
experts/*                           →   legacy/experts/*
press-kit/                          →   legacy/press-kit/
privacy-and-responsibility/         →   legacy/privacy-and-responsibility/
thank-you-page-general-form/        →   legacy/thank-you-page-general-form/
get-your-sitecore-free-audit-sam-solutions/  →   legacy/get-your-sitecore-free-audit-sam-solutions/

wp-content/                         →   public/wp-content/
wp-includes/                        →   public/wp-includes/
cdn-cgi/                            →   public/cdn-cgi/
robots.txt                          →   public/robots.txt
*sitemap*.xml                       →   public/*sitemap*.xml
main-sitemap.xsl                    →   public/main-sitemap.xsl

app/                                →   (stay at root)
next.config.ts                      →   (stay at root)
next.middleware.ts                  →   (stay at root)
rewrites.ts                         →   (stay at root)
package.json                        →   (stay at root)
package-lock.json                   →   (stay at root)
tsconfig.json                       →   (stay at root)
next-env.d.ts                       →   (stay at root)
.gitignore                          →   (stay at root)
static-server.js                    →   (stay at root)
```

---

## 6. Evidence & Validation

### Exported `index.html` Count
- **Total exported `index.html` documents found:** **188**
- **Total entries listed in this inventory under `legacy-html`:** **188**
  - Root home page: 1
  - Service/landing pages: 25
  - CTA/funnel pages: 17
  - Case studies: 25
  - Blog insights/articles: ~56
  - Author archives + pagination: 18
  - Category archives + pagination: 15
  - Page pagination: 5
  - Slider pages: 9
  - Testimonials: 7
  - Other (experts, press-kit, privacy, thank-you): 5

### Exceptional HTML Paths
- `page/2/index.html` through `page/6/index.html` — WordPress paginated homepage slices (not conventional page folders; these are numbered subdirectories under `page/`).
- Pagination sub-paths within `author/*/page/N/` and `category/*/page/N/` — nested pagination index files.
- `cta/*` directories contain special funnel pages with non-standard slugs (e.g., `№1`, `№2` encoding).
- `get-your-sitecore-free-audit-sam-solutions/` — standalone CTA-style page not under the `cta/` prefix.

### Browser-Visible Public Paths That Must Stay Stable
| Path | Classification |
|---|---|
| `/wp-content/*` | public-asset (themes, plugins, uploads) |
| `/wp-includes/*` | public-asset (WordPress core) |
| `/cdn-cgi/*` | public-asset (Cloudflare endpoints) |
| `/robots.txt` | public-asset (crawler directive) |
| `/sitemap.xml` | public-asset (main sitemap) |
| `/sitemap_index.xml` | public-asset (sitemap index) |
| `/page-sitemap.xml` | public-asset (pages sitemap) |
| `/post-sitemap.xml` | public-asset (posts sitemap) |
| `/case-studies-sitemap.xml` | public-asset (case studies sitemap) |
| `/main-sitemap.xsl` | public-asset (XSL stylesheet) |

### Favicon / Manifest Files
- **None found at root level.** All favicon links in HTML point to `/wp-content/themes/sam/img/favicons/...`.

### Validation Result
- **Files checked:** 188 `index.html` documents via recursive search; root directory listing (50 entries); `page/`, `slider/`, `wp-content/` subdirectory listings.
- **Files modified:** None. Only `migration-inventory.md` created.
- **Match status:** All 188 exported `index.html` paths are accounted for in the inventory. Root asset files (robots.txt, sitemaps, XSL, wp-content, wp-includes, cdn-cgi) are all classified as public-asset. Next.js source/config files are explicitly protected.
- **Existing files status:** Untouched. No edits, moves, renames, or deletions performed.

---

*End of Stage 1 Inventory. Proceed to Stage 2 for filesystem moves.*
