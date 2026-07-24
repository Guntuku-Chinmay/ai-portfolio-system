export interface KnowledgeBaseEntry {
  keywords: string[];
  response: string;
}

const KNOWLEDGE_BASE: KnowledgeBaseEntry[] = [
  {
    keywords: ["tell me about yourself", "who are you", "introduce yourself", "introduction", "bio", "about yourself", "tell me about chinmay", "about chinmay"],
    response: "Chinmay is an Aspiring Product Manager and GenAI Builder pursuing his B.Tech. He operates at the intersection of Product Strategy, Generative AI, and Cloud-Native Applications. 🚀\n\n" +
      "On the engineering side, he has built and deployed **3+ production AWS serverless systems** (handling dynamic database operations, automated emails, and schedulers). On the product side, he has secured **Top 8 out of 700+ teams at IIM Kashipur** and **Top 5 out of 245+ teams at IIIT Raipur** by formulating user growth, product prioritization, and retention roadmaps.\n\n" +
      "Additionally, as the GeeksforGeeks Campus Body Lead, he has mentored and impacted **370+ students**. He is eager to bring his technical foundations and product-first mindset to dynamic product management and development roles."
  },
  {
    keywords: ["proud", "proudest", "most proud"],
    response: "Chinmay is most proud of the **AI Portfolio Management System**! 🚀\n\n" +
      "• **Why?**: It bridges the gap between engineering and content strategy. Rather than writing hardcoded markdown files or redeploying the site for minor edits, he engineered a complete cloud-native CMS.\n" +
      "• **The Tech**: Built with Next.js/React, AWS Lambda, API Gateway, DynamoDB, and AWS SES.\n" +
      "• **The Result**: He can securely log in, publish new projects, view recruiter messages, and receive instantaneous email alerts with zero overhead costs. It represents his drive for creating products that solve actual operational problems."
  },
  {
    keywords: ["product management experience", "pm experience", "product experience"],
    response: "Chinmay has strong product strategy experience demonstrated through national product challenges and community leadership:\n\n" +
      "• **Competitions**: Secured **Top 8 out of 700+ teams** at IIM Kashipur Coherence 7.0 (growth and monetization modeling) and **Top 5 out of 245+ teams** at IIIT Raipur Xcelerate (product teardown, prioritization, roadmap formulation).\n" +
      "• **Skills**: Deconstructing product metrics, analyzing user feedback, performing competitor research, and using RICE/MoSCoW for feature prioritization.\n" +
      "• **Community**: Led and managed programs impacting **370+ students** as the Campus Body Lead for GeeksforGeeks, coordinating cross-functional teams."
  },
  {
    keywords: ["hello", "hi", "hey", "greetings", "greet"],
    response: "Hi there! I'm Chinmay's AI Portfolio Assistant. 🚀\n\nI can tell you all about Chinmay's **projects**, **skills**, **journey**, **current focus**, or how to **contact** him. What would you like to know?"
  },
  {
    keywords: ["explain your aws projects", "aws projects", "cloud projects"],
    response: "Chinmay has built **3+ production-ready serverless systems** using AWS. His key cloud projects include:\n\n" +
      "1. **AI Portfolio Management System**: A serverless portfolio CMS with dashboard, dynamically updating MongoDB/DynamoDB lists.\n" +
      "2. **Serverless Job Application Portal**: A highly-scalable screening platform routing candidate metrics and resume storage.\n" +
      "3. **EventBridge Scheduler Automation**: An automated cron-based task execution scheduler.\n\n" +
      "Would you like detailed Problem, Solution, Architecture, and Impact details on any of these?"
  },
  {
    keywords: ["project", "portfolio", "work", "build", "app", "system"],
    response: "Chinmay has built several cloud-native and AI-driven systems. Here are his main projects:\n\n" +
      "• **AI Portfolio Management System**: A serverless portfolio manager with CMS dashboard.\n" +
      "• **Serverless Job Application Portal**: A highly-scalable screening platform.\n" +
      "• **EventBridge Scheduler Automation**: Amazon EventBridge-driven automated scheduler.\n" +
      "• **NAAC Accreditation Platform**: A centralized compliance document catalog.\n\n" +
      "Ask me about any specific project (e.g., \"Tell me about the Job Portal\") to get details on the Problem, Solution, Architecture, and Impact!"
  },
  {
    keywords: ["job application", "job portal", "screening", "applicant tracking", "serverless job"],
    response: "**Serverless Job Application Portal** 💼\n\n" +
      "• **Problem**: Traditional applicant tracking portals rely on dedicated servers running 24/7, leading to high idle maintenance costs and bottlenecking during high-traffic recruitment drives.\n" +
      "• **Solution**: Developed a serverless, event-driven candidate screening platform that scales dynamically.\n" +
      "• **Architecture & Tech**: AWS Lambda (business logic), Amazon S3 (resume storage), Amazon DynamoDB (profiles & states), API Gateway, and IAM for security.\n" +
      "• **Impact**: Reduced server idling costs to $0 under standard usage, while scaling automatically to support thousands of concurrent requests."
  },
  {
    keywords: ["eventbridge", "scheduler", "cron", "automation", "cleanups"],
    response: "**EventBridge Scheduler Automation** ⚙️\n\n" +
      "• **Problem**: Managing cron tasks and schedulers on traditional virtual machine instances is unreliable, high-maintenance, and introduces single-point-of-failure risks.\n" +
      "• **Solution**: Built an automated scheduler triggering serverless logic to perform routine maintenance tasks.\n" +
      "• **Architecture & Tech**: AWS EventBridge (triggers), AWS Lambda (execution), Node.js, and IAM.\n" +
      "• **Impact**: Automated database cleanups and daily notification dispatches with zero manual intervention, securing stable workflows with AWS-backed availability."
  },
  {
    keywords: ["ai portfolio", "portfolio management", "cms", "dashboard"],
    response: "**AI Portfolio Management System** 🚀\n\n" +
      "• **Problem**: Developers need dynamic portfolios that update instantly, without redeploying code or manually updating files.\n" +
      "• **Solution**: Created a fully serverless portfolio CMS enabling instant project logging, message viewing, and admin management.\n" +
      "• **Architecture & Tech**: Next.js & React (Vercel), Node.js serverless REST API on AWS Lambda, API Gateway, DynamoDB, and AWS SES.\n" +
      "• **Impact**: Enabled centralized project updates and real-time client message notifications, running with zero active infrastructure costs."
  },
  {
    keywords: ["accreditation", "naac", "document management"],
    response: "**NAAC Accreditation Platform** 🏫\n\n" +
      "• **Problem**: Academic department documents for accreditation audits were scattered across local computers, causing review bottlenecks.\n" +
      "• **Solution**: Designed a centralized, searchable digital catalog to store and structure compliance files.\n" +
      "• **Architecture & Tech**: React, Node.js, Express, and MongoDB.\n" +
      "• **Impact**: Drastically reduced document retrieval times, streamlining compliance workflows for college staff and coordinators."
  },
  {
    keywords: ["aws", "cloud", "serverless", "lambda", "dynamodb", "s3"],
    response: "Chinmay has deployed **3+ production-ready serverless systems** using AWS. His cloud foundations include:\n\n" +
      "• **Compute & APIs**: AWS Lambda & API Gateway for serverless routes.\n" +
      "• **Databases**: DynamoDB for low-latency NoSQL tables.\n" +
      "• **Storage**: S3 for document hosting & CloudFront for CDN.\n" +
      "• **Task Schedulers**: EventBridge for cron rules.\n" +
      "• **Notifications**: Simple Email Service (SES)."
  },
  {
    keywords: ["skill", "expertise", "competenc", "tech", "languages", "java", "python", "programming"],
    response: "Chinmay's capabilities include:\n\n" +
      "• **Product Management**: User Research, Feature Prioritization, MVP Thinking, User Journey Mapping, Roadmaps, and Problem Solving.\n" +
      "• **Cloud Engineering**: AWS Lambda, API Gateway, DynamoDB, S3, CloudFront, EventBridge.\n" +
      "• **Technical Foundations**: Java, Python, JavaScript, HTML5/CSS3, Tailwind CSS, Bootstrap, React, Next.js, Git/GitHub.\n" +
      "• **Leadership**: Stakeholder Management, Public Speaking, Cross-functional Collaboration, and Community Building."
  },
  {
    keywords: ["contact", "email", "reach", "message", "hire", "phone", "social", "linkedin"],
    response: "You can easily reach Chinmay! 📬\n\n" +
      "• **Contact Form**: Scroll to the **Contact** section at the bottom of this homepage to message him directly.\n" +
      "• **LinkedIn**: [linkedin.com/in/chinmay-guntuku-00b670414](https://www.linkedin.com/in/chinmay-guntuku-00b670414/)\n" +
      "• **GitHub**: [github.com/Guntuku-Chinmay](https://github.com/Guntuku-Chinmay/)\n" +
      "• **Resume**: You can download his resume using the link in the Hero section."
  },
  {
    keywords: ["resume", "cv", "resume.pdf"],
    response: "You can download Chinmay's resume directly from the homepage! Look for the **Download Resume** button next to \"View Projects\" in the Hero section at the top of the page, or access `/Chinmay_Guntuku_Resume.pdf`."
  },
  {
    keywords: ["explore", "learning", "reading", "now", "current", "focus", "interview"],
    response: "Here is what Chinmay is exploring right now:\n\n" +
      "🔨 **Building**: An AI Interview Coach to help candidates prepare for roles.\n" +
      "📈 **Learning**: Product Analytics & Metrics to drive data-informed decisions.\n" +
      "📚 **Reading**: *Inspired* by Marty Cagan (product discovery & product delivery).\n" +
      "🤖 **Exploring**: Multi-Agent AI Systems and workflow automation."
  },
  {
    keywords: ["education", "college", "university", "student", "degree", "btech", "study", "studies"],
    response: "Chinmay is pursuing a **B.Tech degree** at Aditya Institute of Technology and Management (started 2023, expected graduation 2027).\n\nHe maintains a strong balance between academic coursework, serverless engineering projects, and leadership of campus communities."
  },
  {
    keywords: ["achievement", "competition", "hackathon", "award", "iim", "iiit", "coherence", "xcelerate", "productathon"],
    response: "Chinmay has placed highly in several prestigious case competitions and hackathons:\n\n" +
      "🏆 **Coherence 7.0 (IIM Kashipur Product Hackathon)**: Ranked **Top 8 out of 700+ teams** nationwide, focusing on growth and user retention models (2025).\n" +
      "🏆 **Xcelerate (IIIT Raipur Case Competition)**: Ranked **Top 5 out of 245+ teams**, solving product challenges using prioritized analysis frameworks (2025).\n" +
      "👥 **Avishkaar Season 3**: Served as Outreach Coordinator, driving regional engagement and registrations."
  },
  {
    keywords: ["leadership", "geeksforgeeks", "lead", "coordinator", "community", "gfg"],
    response: "Chinmay has extensive experience leading teams and building communities:\n\n" +
      "👥 **GeeksforGeeks Campus Body Lead (2024)**: Led a core student team to coordinate hackathons, web dev workshops, and coding contests, impacting **370+ students**.\n" +
      "📣 **Avishkaar Season 3 Outreach Coordinator**: Led outreach programs and engagement strategies, driving participant registration and visibility."
  },
  {
    keywords: ["certification", "credentials", "certified", "academy"],
    response: "Chinmay holds several credentials and certificates, including:\n\n" +
      "• **AWS Academy Cloud Practitioner / Foundations**: AWS Accredited, demonstrating baseline mastery of cloud concepts, security, and services.\n" +
      "• **Product Management Foundations**: Covering Agile frameworks, user journey mapping, and feature discovery.\n" +
      "• **Programming Certifications**: Java & Python programming credentials."
  }
];

/**
 * Generates an assistant response based on the user's message.
 * Emulates network/computation latency to give a natural feel,
 * and is designed to be easily replaced by an LLM API fetch.
 */
export async function getAIResponse(message: string): Promise<string> {
  // Simulate delay (e.g. 800ms to 1500ms)
  await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 700));

  const cleanMsg = message.toLowerCase().trim();

  // Find the first matching entry
  for (const entry of KNOWLEDGE_BASE) {
    if (entry.keywords.some((keyword) => cleanMsg.includes(keyword))) {
      return entry.response;
    }
  }

  // Fallback response if no keywords match
  return "I'm not sure I understand that query, but I'd love to help! 💡\n\n" +
    "Try asking about:\n" +
    "• Chinmay's **projects** (e.g., \"Tell me about his AWS projects\")\n" +
    "• His **skills** (e.g., \"What product management skills does he have?\")\n" +
    "• His **achievements** (e.g., \"Tell me about IIM Kashipur\")\n" +
    "• What he is **currently exploring**\n" +
    "• How to **contact** him or download his **resume**";
}
