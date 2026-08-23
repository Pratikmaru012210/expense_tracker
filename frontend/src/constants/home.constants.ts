import { LineChart, PieChart, ShieldCheck, Wallet, Zap } from 'lucide-react'

export const HERO_CONTENT = {
  badge: 'v1.0 Now Live',
  title: 'Take Control of Your Financial Future',
  subtitle:
    'Track your expenses, monitor your net worth, and make informed financial decisions with our powerful, intuitive dashboard.',
  primaryCta: 'Get Started',
  secondaryCta: 'View Demo',
}

export const FEATURES = [
  {
    id: 'expense-tracking',
    title: 'Smart Expense Tracking',
    description:
      'Automatically categorize and visualize your spending habits over time.',
    icon: Wallet,
  },
  {
    id: 'net-worth',
    title: 'Net Worth Calculator',
    description:
      'Get a holistic view of your financial health by tracking assets and liabilities.',
    icon: LineChart,
  },
  {
    id: 'secure',
    title: 'Bank-Grade Security',
    description:
      'Your data is encrypted and secure. We never sell your personal information.',
    icon: ShieldCheck,
  },
  {
    id: 'real-time',
    title: 'Real-time Analytics',
    description:
      'Instant updates and gorgeous charts to help you understand your money.',
    icon: PieChart,
  },
  {
    id: 'fast',
    title: 'Lightning Fast',
    description:
      'Built on modern architecture ensuring your dashboard loads instantly.',
    icon: Zap,
  },
]

export const FOOTER_CONTENT = {
  copyright: '© 2026 Networth Calculator. All rights reserved.',
  links: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Contact', href: '#' },
  ],
}
