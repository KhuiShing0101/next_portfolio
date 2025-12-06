export const translations = {
  en: {
    nav: {
      resume: 'resume',
      rirekisho: '履歴書',
    },
    hero: {
      subtitle: 'Hi, my name is',
      title: 'Har Khui Shing(ハクシン).',
      tagline: "I'm a passionate Web Developer",
    },
    about: {
      title: 'about me',
      intro: "I'm a web developer with",
      experience: '5+ years of professional experience',
      specialization: 'specializing in web development and deployment. I focus on driving efficiency, reliability, and continuous improvement within software development processes.',
      focus: 'My main focus these days is',
      learning: 'learning new technologies',
      growth: 'to grow my career.',
    },
    experience: {
      title: "where i've worked",
      role: 'Role',
      company: 'Company',
      duration: 'Duration',
      responsibilities: 'Responsibilities',
      technologies: 'Technologies',
      teamCollaboration: 'Team & Collaboration',
      current: 'current',
    },
    projects: {
      title: "some things I've built",
      viewProject: 'View Project',
      viewCode: 'View Code',
      showMore: 'show more',
      showLess: 'show less',
    },
    skills: {
      title: 'what I do',
    },
    contact: {
      title: "what's next",
      subtitle: 'get in touch',
      description: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
      cta: 'say hello',
    },
    footer: {
      builtBy: 'Built by',
      designedBy: 'Designed by',
    },
  },
  ja: {
    nav: {
      resume: 'レジュメ',
      rirekisho: '履歴書',
    },
    hero: {
      subtitle: 'こんにちは、私の名前は',
      title: 'Har Khui Shing(ハクシン)です。',
      tagline: '情熱的なウェブ開発者です',
    },
    about: {
      title: '自己紹介',
      intro: '私は',
      experience: '5年以上の実務経験',
      specialization: 'を持つウェブ開発者です。ウェブ開発とデプロイメントを専門としています。ソフトウェア開発プロセスにおける効率性、信頼性、継続的な改善に注力しています。',
      focus: '最近の主な焦点は',
      learning: '新しい技術を学ぶこと',
      growth: 'でキャリアを成長させることです。',
    },
    experience: {
      title: '職務経歴',
      role: '役職',
      company: '会社',
      duration: '期間',
      responsibilities: '主な業務',
      technologies: '使用技術',
      teamCollaboration: 'チーム・協力',
      current: '現在',
    },
    projects: {
      title: '制作実績',
      viewProject: 'プロジェクトを見る',
      viewCode: 'コードを見る',
      showMore: 'もっと見る',
      showLess: '閉じる',
    },
    skills: {
      title: 'できること',
    },
    contact: {
      title: '次のステップ',
      subtitle: 'お問い合わせ',
      description: '現在、新しい機会を探しています。質問がある場合や、ただ挨拶したい場合でも、できるだけ早く返信いたします！',
      cta: 'こんにちは',
    },
    footer: {
      builtBy: '開発者',
      designedBy: 'デザイン',
    },
  },
};

export type Language = 'en' | 'ja';
export type TranslationKey = keyof typeof translations.en;
