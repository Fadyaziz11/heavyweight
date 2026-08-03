export const site = {
  name: 'Heavy Weight',
  tagline: 'Music Marketing & Record Label',
  description:
    'Heavy Weight is a premium music marketing agency and record label based in Cairo, Egypt. We build campaigns that turn records into movements.',
  url: 'https://heavyweight.agency',
  email: 'hello@heavyweight.agency',
  phone: '+20 100 000 0000',
  whatsapp: '201000000000',
  instagram: 'heavyweight.eg',
  location: 'New Cairo, Cairo, Egypt',
} as const

export const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Hi Heavy Weight, I'd like to talk about a campaign.",
)}`
export const instagramLink = `https://instagram.com/${site.instagram}`

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const

export type Service = {
  slug: string
  title: string
  icon: string
  summary: string
  detail: string
  deliverables: string[]
}

export const services: Service[] = [
  {
    slug: 'music-marketing',
    title: 'Music Marketing',
    icon: 'Megaphone',
    summary:
      'End-to-end release strategy engineered around the audience that actually converts into fans.',
    detail:
      'We architect the full release cycle — pre-save funnels, teaser sequencing, creative direction and post-release retention — so every single lands with intent instead of hope.',
    deliverables: [
      'Release roadmap & rollout calendar',
      'Audience research & positioning',
      'Creative asset direction',
      'Weekly performance reporting',
    ],
  },
  {
    slug: 'digital-advertising',
    title: 'Digital Advertising',
    icon: 'Target',
    summary:
      'Paid media across Meta, Google and Spotify Ad Studio, optimised on cost-per-listener.',
    detail:
      'Media buying built for music economics. We test hooks at scale, kill what stalls, and scale the creatives that drive saves, streams and ticket sales.',
    deliverables: [
      'Full-funnel campaign architecture',
      'Creative testing framework',
      'Retargeting & lookalike audiences',
      'Live dashboards & attribution',
    ],
  },
  {
    slug: 'music-distribution',
    title: 'Music Distribution',
    icon: 'Globe2',
    summary:
      'Your catalogue delivered to 150+ stores worldwide with clean metadata and fast payouts.',
    detail:
      'Label-grade delivery to Spotify, Apple Music, Anghami, YouTube Music, Deezer and more — with correct splits, ISRC management and royalty transparency.',
    deliverables: [
      '150+ global stores & platforms',
      'Metadata & ISRC/UPC management',
      'Royalty splits & reporting',
      'Content ID & rights protection',
    ],
  },
  {
    slug: 'pr-campaigns',
    title: 'PR Campaigns',
    icon: 'Newspaper',
    summary:
      'Press, radio and editorial coverage across MENA and international music media.',
    detail:
      'We craft the narrative and place it — features, premieres, interviews and radio rotation with outlets your audience already trusts.',
    deliverables: [
      'Press kit & artist narrative',
      'Journalist & blog outreach',
      'Premiere & interview placement',
      'Radio servicing',
    ],
  },
  {
    slug: 'playlist-pitching',
    title: 'Playlist Pitching',
    icon: 'ListMusic',
    summary:
      'Editorial and curator pitching that respects the algorithm and the audience.',
    detail:
      'Direct relationships with editorial teams and independent curators. No bots, no fake streams — only placements that survive skip-rate scrutiny.',
    deliverables: [
      'Editorial pitch submissions',
      'Curator network outreach',
      'Skip-rate & save-rate analysis',
      'Algorithmic playlist priming',
    ],
  },
  {
    slug: 'influencer-marketing',
    title: 'Influencer Marketing',
    icon: 'Users',
    summary:
      'Creator campaigns matched to your sound, from micro voices to regional headliners.',
    detail:
      'We source, brief and manage creators whose audiences overlap with yours, then turn the best-performing content into paid amplification.',
    deliverables: [
      'Creator sourcing & vetting',
      'Briefs, contracts & scheduling',
      'UGC amplification',
      'Sentiment & reach reporting',
    ],
  },
  {
    slug: 'youtube-promotion',
    title: 'YouTube Promotion',
    icon: 'Youtube',
    summary:
      'Channel growth, video SEO and pre-roll campaigns that build watch time, not vanity views.',
    detail:
      'Thumbnails, titles, chapters and pre-roll targeting tuned for retention — plus premiere strategy that stacks first-24-hour momentum.',
    deliverables: [
      'Channel audit & SEO',
      'Thumbnail & title testing',
      'Pre-roll / in-feed ad campaigns',
      'Premiere & shorts strategy',
    ],
  },
  {
    slug: 'tiktok-marketing',
    title: 'TikTok Marketing',
    icon: 'TikTok',
    summary:
      'Sound-first campaigns designed to make your hook the default audio of a trend.',
    detail:
      'We build the trend, seed it with the right creators, then push Spark Ads behind whatever catches. Sound pages become discovery engines.',
    deliverables: [
      'Hook & trend concepting',
      'Creator seeding waves',
      'Spark Ads amplification',
      'Sound page optimisation',
    ],
  },
]

export const stats = [
  { value: '480M+', label: 'Streams generated' },
  { value: '1,200+', label: 'Campaigns delivered' },
  { value: '38', label: 'Countries reached' },
  { value: '96%', label: 'Client retention' },
] as const

export const clients = [
  'ANGHAMI',
  'SPOTIFY MENA',
  'SONY MUSIC',
  'RED SEA LABEL',
  'CAIRO FM',
  'NILE RECORDS',
  'DEEZER',
  'TIKTOK MENA',
] as const

export type Project = {
  slug: string
  title: string
  artist: string
  category: string
  year: string
  image: string
  description: string
  results: { value: string; label: string }[]
  services: string[]
}
{
  slug: '2007',
  title: '2007',
  artist: 'Shahyn',
  category: '360° Marketing Campaign',
  year: '2024',
  image: '/projects/shahyn-2007.jpg', // غيرها لصورتك

  description:
    'Led a 360° marketing campaign for Shahyn’s "2007", introducing a fresh creative direction across TikTok, Instagram, YouTube, PR, and digital media. The campaign combined original content concepts, creator activations, paid media, strategic media coverage, and platform-specific marketing, helping the release reach #1 on YouTube Trending Egypt and #7 on Global YouTube Trending while significantly expanding its regional and international reach.',

  results: [
    { value: '#1', label: 'YouTube Trending Egypt' },
    { value: '#7', label: 'Global YouTube Trending' },
    { value: '360°', label: 'Marketing Campaign' },
  ],

  services: [
    'Creative Strategy',
    'Music Marketing',
    'TikTok Marketing',
    'Instagram Marketing',
    'YouTube Advertising',
    'PR & Media Coverage',
    'Creator Partnerships',
  ],
}
  {
    slug: 'layali-single',
    title: 'Layali',
    artist: 'Nour Halim',
    category: 'Single Launch',
    year: '2025',
    image: '/projects/singer-cairo.png',
    description:
      'Editorial-first launch for a modern Arabic pop ballad. We built the press narrative around the artist’s Alexandria roots and secured premiere coverage across MENA music media.',
    results: [
      { value: '9', label: 'Editorial playlists' },
      { value: '340K', label: 'First-week streams' },
      { value: '27', label: 'Press features' },
    ],
    services: ['PR Campaigns', 'Playlist Pitching', 'Digital Advertising'],
  },
  {
    slug: 'north-coast-tour',
    title: 'North Coast Tour',
    artist: 'Sahara Collective',
    category: 'Live & Ticketing',
    year: '2024',
    image: '/projects/live-tour.png',
    description:
      'Six-city summer run sold through geo-targeted paid media and creator partnerships, with dynamic retargeting tied directly to ticketing inventory.',
    results: [
      { value: '100%', label: 'Shows sold out' },
      { value: '11.4K', label: 'Tickets sold' },
      { value: '£E 62', label: 'Cost per ticket' },
    ],
    services: ['Digital Advertising', 'Influencer Marketing'],
  },
  {
    slug: 'catalogue-relaunch',
    title: 'Catalogue Relaunch',
    artist: 'Nile Records',
    category: 'Distribution',
    year: '2024',
    image: '/projects/studio-session.png',
    description:
      'We re-delivered a 240-track back catalogue with corrected metadata, recovered Content ID revenue and rebuilt artist profiles across every major platform.',
    results: [
      { value: '240', label: 'Tracks re-delivered' },
      { value: '+214%', label: 'Royalty uplift' },
      { value: '150+', label: 'Stores live' },
    ],
    services: ['Music Distribution', 'Music Marketing'],
  },
  {
    slug: 'sound-of-the-city',
    title: 'Sound of the City',
    artist: 'Maadi Boys',
    category: 'TikTok Campaign',
    year: '2025',
    image: '/projects/tiktok-campaign.png',
    description:
      'A single-hook challenge engineered for repeat use. The sound page became the campaign — organic creator adoption outpaced paid seeding within nine days.',
    results: [
      { value: '86K', label: 'Videos created' },
      { value: '210M', label: 'Total views' },
      { value: '#3', label: 'Egypt viral chart' },
    ],
    services: ['TikTok Marketing', 'Influencer Marketing'],
  },
  {
    slug: 'analog-hearts',
    title: 'Analog Hearts',
    artist: 'The Delta Line',
    category: 'YouTube Growth',
    year: '2024',
    image: '/projects/band-collective.png',
    description:
      'Channel rebuild for an alternative four-piece: new thumbnail system, chaptered long-form uploads and pre-roll targeting against adjacent regional acts.',
    results: [
      { value: '+680%', label: 'Watch time' },
      { value: '124K', label: 'Subscribers gained' },
      { value: '7.2M', label: 'Views' },
    ],
    services: ['YouTube Promotion', 'Digital Advertising'],
  },
]

export const testimonials = [
  {
    quote:
      'They treated our release like a product launch, not a post. Three weeks in we were on editorial playlists we had been pitching ourselves for two years.',
    name: 'Kareem X',
    role: 'Recording artist, Cairo',
  },
  {
    quote:
      'The reporting alone changed how we sign artists. For the first time we could see exactly which spend turned into real listeners.',
    name: 'Mona Fahmy',
    role: 'A&R Director, Nile Records',
  },
  {
    quote:
      'We sold out six shows on the North Coast with a budget our old agency said was impossible. Heavy Weight simply understands this market.',
    name: 'Yassin Adel',
    role: 'Manager, Sahara Collective',
  },
  {
    quote:
      'No fake streams, no vague promises. Just a plan, weekly numbers and a team that answers the phone at midnight before a drop.',
    name: 'Nour Halim',
    role: 'Singer-songwriter',
  },
]

export const process = [
  {
    step: '01',
    title: 'Discovery',
    body: 'We audit your catalogue, audience data and past campaigns to find where the real demand already lives.',
  },
  {
    step: '02',
    title: 'Strategy',
    body: 'A written campaign architecture: positioning, channels, creative angles, budget allocation and success metrics.',
  },
  {
    step: '03',
    title: 'Execution',
    body: 'Our in-house team runs media, PR, creators and distribution in one coordinated rollout — nothing outsourced blindly.',
  },
  {
    step: '04',
    title: 'Scale',
    body: 'We double down on what performs, cut what does not, and turn the winning campaign into a repeatable system.',
  },
]
