# ChopDot Landing Page - Design Specification

## 🎯 Overview
ChopDot is a Web3 group-expense app landing page with a brutalist minimalist aesthetic. The design emphasizes clarity, high contrast, and clean typography with strategic use of Polkadot pink as an accent color.

---

## 🎨 Design System

### Color Palette
**STRICT COLOR RULES:**
- **Primary Black:** `#000000` - Main text, borders, backgrounds (light mode)
- **Primary White:** `#FFFFFF` - Backgrounds (light mode), text (dark mode)
- **Accent Pink:** `#E6007A` - Polkadot brand color, used ONLY for:
  - Logo
  - Interactive elements (hover states, focus states)
  - Strategic emphasis (CTAs, icons)
  - Beta signup counter
  - Social icons
- **NO gradients, NO other colors**

### Typography
```css
/* Default typography system from globals.css */

h1 {
  font-size: 3.5rem;        /* 56px */
  font-weight: 900;         /* Black/Extra Bold */
  line-height: 1.1;
  letter-spacing: -0.02em;  /* Tight tracking */
}

h2 {
  font-size: 2.5rem;        /* 40px */
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.01em;
}

h3 {
  font-size: 1.75rem;       /* 28px */
  font-weight: 700;
  line-height: 1.3;
}

p {
  font-size: 1.125rem;      /* 18px */
  line-height: 1.6;
}

.text-sm {
  font-size: 0.875rem;      /* 14px */
}
```

**Font Family:** System font stack for performance:
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

### Spacing System
```css
/* Consistent spacing scale */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

**Section Spacing:**
- Section padding vertical: `py-16` (64px) mobile, `py-24` (96px) desktop
- Container max-width: `max-w-6xl` (1152px)
- Container horizontal padding: `px-6` (24px) mobile, `px-8` (32px) desktop

### Borders & Radius
```css
/* Brutalist style - minimal rounding */
--radius-sm: 0.375rem;   /* 6px - small elements */
--radius-md: 0.5rem;     /* 8px - cards, buttons */
--radius-lg: 0.75rem;    /* 12px - larger containers */
--radius-xl: 1rem;       /* 16px - feature cards */

/* Border weights */
border-width: 1px;        /* Standard borders */
border-width: 2px;        /* Emphasis borders */
```

### Shadows
```css
/* Subtle, brutalist-appropriate shadows */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);           /* Subtle */
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);           /* Card */
box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);         /* Elevated */
box-shadow: 0 0 0 3px rgba(230, 0, 122, 0.2);       /* Focus ring (pink) */
```

---

## 📐 Layout Structure

### Page Architecture
```
App.tsx
└── Navbar (sticky)
    └── Hero
        └── Scenarios
            └── WhyAndHow
                └── FAQ
                    └── BetaSignup
                        └── Footer
```

### Grid System
```css
/* Container */
.container {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Responsive breakpoints */
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
```

---

## 🧩 Component Specifications

### 1. Navbar (`/components/Navbar.tsx`)

**Layout:**
```
┌─────────────────────────────────────────────────────┐
│ [Logo] ChopDot          [Dark Mode] [Beta Signup] │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Position: `sticky top-0 z-50`
- Background: `bg-white/80 dark:bg-black/80` with `backdrop-blur-sm`
- Border: `border-b border-black/10 dark:border-white/10`
- Height: `h-16` (64px)
- Container: `max-w-6xl mx-auto px-6`

**Logo:**
- Pink circle with "C" letter
- Size: `40x40px`
- Color: `#E6007A`
- Font weight: `900` (black)

**Dark Mode Toggle:**
- Sun/Moon icons (lucide-react)
- Smooth transition: `transition-colors duration-300`
- Icon size: `20x20px`

**Beta Signup Button:**
- Background: `bg-[#E6007A]`
- Text: `text-white`
- Padding: `px-6 py-2`
- Hover: `hover:bg-[#E6007A]/90`
- Border radius: `rounded-lg`

---

### 2. Hero (`/components/Hero.tsx`)

**Layout:**
```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  [Pink Logo - Large]                               │
│                                                     │
│  Catch vibes, not feelings                         │
│  about money                                       │
│                                                     │
│  Split expenses. On-chain.                         │
│                                                     │
│  [Join Beta Waitlist →]                           │
│                                                     │
│  [App Screenshot - centered]                       │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Specifications:**

**Section:**
- Padding: `py-16 md:py-24`
- Background: `bg-white dark:bg-black`
- Text align: `center`

**Logo:**
- Size: `w-20 h-20` (80x80px) mobile, `w-24 h-24` (96px) desktop
- Pink circle: `bg-[#E6007A]`
- White "C": `text-white`
- Font size: `text-5xl`
- Center: `mx-auto mb-8`

**Headline:**
- Text: "Catch vibes, not feelings about money"
- Font size: `text-5xl md:text-7xl` (48px mobile, 72px desktop)
- Font weight: `font-black` (900)
- Line height: `leading-[1.1]`
- Letter spacing: `tracking-tight`
- Max width: `max-w-4xl mx-auto`
- Margin bottom: `mb-6`

**Tagline:**
- Text: "Split expenses. On-chain."
- Font size: `text-xl md:text-2xl`
- Color: `text-black/70 dark:text-white/70`
- Max width: `max-w-2xl mx-auto`
- Margin bottom: `mb-10`

**CTA Button:**
- Background: `bg-[#E6007A]`
- Text: `text-white`
- Font size: `text-lg`
- Padding: `px-8 py-4`
- Border radius: `rounded-xl`
- Hover: `hover:bg-[#E6007A]/90 hover:scale-105`
- Transition: `transition-all duration-200`
- Arrow icon: Lucide `ChevronRight`

**App Screenshot:**
- Max width: `max-w-4xl mx-auto`
- Margin top: `mt-16`
- Border radius: `rounded-2xl`
- Border: `border border-black/10 dark:border-white/10`
- Shadow: `shadow-2xl`
- Animation: `fadeInUp` on scroll

---

### 3. Scenarios (`/components/Scenarios.tsx`)

**Layout:**
```
┌─────────────────────────────────────────────────────┐
│  Where ChopDot Works                               │
│  (Section title)                                    │
│                                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐        │
│  │ [Icon]   │  │ [Icon]   │  │ [Icon]   │        │
│  │ Title    │  │ Title    │  │ Title    │        │
│  │ Desc     │  │ Desc     │  │ Desc     │        │
│  └──────────┘  └──────────┘  └──────────┘        │
│                                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐        │
│  │ [Icon]   │  │ [Icon]   │  │ [Icon]   │        │
│  │ Title    │  │ Title    │  │ Title    │        │
│  │ Desc     │  │ Desc     │  │ Desc     │        │
│  └──────────┘  └──────────┘  └──────────┘        │
└─────────────────────────────────────────────────────┘
```

**Specifications:**

**Section:**
- Padding: `py-16 md:py-24`
- Background: `bg-white dark:bg-black`
- Border top: `border-t border-black/10 dark:border-white/10`

**Section Title:**
- Text: "Where ChopDot Works"
- Font size: `text-3xl md:text-4xl`
- Font weight: `font-black`
- Text align: `center`
- Margin bottom: `mb-12 md:mb-16`

**Grid:**
- Layout: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Gap: `gap-8`
- Max width: `max-w-6xl mx-auto`

**Scenario Cards:**
- Padding: `p-8`
- Border: `border border-black/10 dark:border-white/10`
- Border radius: `rounded-2xl`
- Hover: `hover:border-[#E6007A]/50 hover:shadow-lg`
- Transition: `transition-all duration-300`
- Animation: `fadeInUp` on scroll

**Icon Container:**
- Size: `w-14 h-14`
- Background: `bg-[#E6007A]/10 dark:bg-[#E6007A]/20`
- Border radius: `rounded-xl`
- Flex center: `flex items-center justify-center`
- Icon color: `text-[#E6007A]`
- Icon size: `w-7 h-7`
- Margin bottom: `mb-4`

**Card Title:**
- Font size: `text-xl`
- Font weight: `font-bold`
- Margin bottom: `mb-2`

**Card Description:**
- Font size: `text-base`
- Color: `text-black/60 dark:text-white/60`
- Line height: `leading-relaxed`

**Scenarios Content:**
1. **Roommates** - Home icon - "Split rent, utilities, and groceries with your housemates."
2. **Group Trips** - Plane icon - "Track shared expenses during vacations and adventures."
3. **Hackathon Teams** - Code icon - "Manage bounties, tool costs, and team rewards."
4. **Crypto Houses** - Building icon - "Transparent expense tracking for coliving communities."
5. **DAO Contributors** - Users icon - "Split project costs and reimburse contributors fairly."
6. **Event Organizers** - Calendar icon - "Coordinate costs for meetups, workshops, and conferences."

---

### 4. WhyAndHow (`/components/WhyAndHow.tsx`)

**Layout:**
```
┌─────────────────────────────────────────────────────┐
│  Why ChopDot?                                      │
│  (Section title)                                    │
│                                                     │
│  ┌──────────────────────────────────────────────┐ │
│  │ [Screenshot 1]                               │ │
│  │ Create Group                                 │ │
│  │ Description                                  │ │
│  └──────────────────────────────────────────────┘ │
│                                                     │
│  ┌──────────────────────────────────────────────┐ │
│  │ [Screenshot 2]                               │ │
│  │ Add Expenses                                 │ │
│  │ Description                                  │ │
│  └──────────────────────────────────────────────┘ │
│                                                     │
│  ┌──────────────────────────────────────────────┐ │
│  │ [Screenshot 3]                               │ │
│  │ Settle On-Chain                              │ │
│  │ Description                                  │ │
│  └──────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────┘
```

**Specifications:**

**Section:**
- Padding: `py-16 md:py-24`
- Background: `bg-white dark:bg-black`
- Border top: `border-t border-black/10 dark:border-white/10`

**Section Title:**
- Text: "Why ChopDot?"
- Font size: `text-3xl md:text-4xl`
- Font weight: `font-black`
- Text align: `center`
- Margin bottom: `mb-4`

**Section Subtitle:**
- Text: "Simple. Transparent. On-chain."
- Font size: `text-xl`
- Color: `text-black/60 dark:text-white/60`
- Text align: `center`
- Margin bottom: `mb-16`

**Feature Cards:**
- Layout: `space-y-16 md:space-y-24` (vertical stack)
- Max width: `max-w-5xl mx-auto`
- Alternating layout: Desktop has image left/right alternating

**Feature Card Structure:**
- Grid: `md:grid md:grid-cols-2 md:gap-12 md:items-center`
- Gap: `gap-8`
- Animation: `fadeInUp` on scroll

**App Screenshot:**
- Max width: `max-w-md mx-auto`
- Border radius: `rounded-2xl`
- Border: `border-2 border-black/10 dark:border-white/10`
- Shadow: `shadow-xl`
- Hover: `hover:scale-105 hover:border-[#E6007A]/50`
- Transition: `transition-all duration-300`

**Feature Content:**
- Number badge: Pink circle with number (1, 2, 3)
  - Size: `w-10 h-10`
  - Background: `bg-[#E6007A]`
  - Text: `text-white font-black text-xl`
  - Margin bottom: `mb-4`
- Title: `text-2xl md:text-3xl font-black mb-4`
- Description: `text-lg text-black/70 dark:text-white/70 leading-relaxed`

**Features Content:**
1. **Create Group** - "Start a group, invite members. No accounts needed- just wallet addresses."
2. **Add Expenses** - "Log shared costs as they happen. Tag who owes what. Crystal clear breakdown."
3. **Settle On-Chain** - "When it's time to settle, members pay with crypto. Transparent. Instant. Done."

---

### 5. FAQ (`/components/FAQ.tsx`)

**Layout:**
```
┌─────────────────────────────────────────────────────┐
│  FAQ                                               │
│  (Section title)                                    │
│                                                     │
│  ▼ Question 1                                      │
│    Answer text...                                  │
│                                                     │
│  ▶ Question 2                                      │
│                                                     │
│  ▶ Question 3                                      │
│                                                     │
│  ▶ Question 4                                      │
└─────────────────────────────────────────────────────┘
```

**Specifications:**

**Section:**
- Padding: `py-16 md:py-24`
- Background: `bg-white dark:bg-black`
- Border top: `border-t border-black/10 dark:border-white/10`

**Section Title:**
- Text: "FAQ"
- Font size: `text-3xl md:text-4xl`
- Font weight: `font-black`
- Text align: `center`
- Margin bottom: `mb-12`

**Accordion (ShadCN):**
- Type: `single`
- Collapsible: `true`
- Default open: First item
- Max width: `max-w-3xl mx-auto`

**FAQ Item:**
- Border bottom: `border-b border-black/10 dark:border-white/10`
- Animation: `fadeInUp` on scroll with stagger

**Trigger:**
- Padding: `py-5`
- Font size: `text-lg md:text-xl`
- Font weight: `font-bold`
- Text align: `left`
- Hover: `hover:text-[#E6007A]`
- Chevron icon: Lucide `ChevronDown` with rotation animation

**Content:**
- Padding: `pb-5`
- Font size: `text-base`
- Color: `text-black/70 dark:text-white/70`
- Line height: `leading-relaxed`

**FAQ Content:**
1. "What is ChopDot?" - App explanation
2. "How does on-chain settlement work?" - Polkadot explanation
3. "Do I need crypto to use ChopDot?" - Requirements
4. "Is my financial data private?" - Privacy explanation
5. "When will ChopDot launch?" - Beta timeline

---

### 6. BetaSignup (`/components/BetaSignup.tsx`)

**Layout:**
```
┌─────────────────────────────────────────────────────┐
│  Join the Beta Waitlist                            │
│  (Section title)                                    │
│                                                     │
│  ┌─────────────────────────────────────────────┐  │
│  │ [Lock Icon] Secure Signup                   │  │
│  │                                             │  │
│  │ [👥 123 pioneers joined]                   │  │
│  │                                             │  │
│  │ Name: [____________]                        │  │
│  │                                             │  │
│  │ Email: [____________]                       │  │
│  │                                             │  │
│  │ I'm interested in:                          │  │
│  │ ○ Using ChopDot                            │  │
│  │ ○ Building on ChopDot                      │  │
│  │ ○ Both                                     │  │
│  │                                             │  │
│  │ [Join Waitlist]                            │  │
│  │                                             │  │
│  │ [Follow us on X →]                         │  │
│  └─────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

**Specifications:**

**Section:**
- Padding: `py-16 md:py-24`
- Background: `bg-gradient-to-br from-white to-gray-50 dark:from-black dark:to-gray-950`
- Border top: `border-t border-black/10 dark:border-white/10`

**Section Title:**
- Text: "Join the Beta Waitlist"
- Font size: `text-3xl md:text-4xl`
- Font weight: `font-black`
- Text align: `center`
- Margin bottom: `mb-4`

**Section Subtitle:**
- Text: "Be among the first to split smarter."
- Font size: `text-xl`
- Color: `text-black/60 dark:text-white/60`
- Text align: `center`
- Margin bottom: `mb-12`

**Form Container:**
- Max width: `max-w-md mx-auto`
- Background: `bg-white dark:bg-black`
- Border: `border-2 border-black/10 dark:border-white/10`
- Border radius: `rounded-2xl`
- Padding: `p-8`
- Shadow: `shadow-xl`
- Animation: `fadeInUp` on scroll

**Secure Badge:**
- Flex: `items-center gap-2`
- Background: `bg-[#E6007A]/10 dark:bg-[#E6007A]/20`
- Padding: `px-4 py-2`
- Border radius: `rounded-full`
- Font size: `text-sm`
- Font weight: `font-semibold`
- Color: `text-[#E6007A]`
- Icon: Lucide `Lock`
- Margin bottom: `mb-6`

**Signup Counter:**
- Flex: `items-center gap-3`
- Background: `bg-[#E6007A]/10 dark:bg-[#E6007A]/20`
- Padding: `px-5 py-3`
- Border radius: `rounded-xl`
- Border: `border border-[#E6007A]/20`
- Icon: Lucide `Users` (pink)
- Text: "[number] pioneers joined" (live count from Supabase)
- Margin bottom: `mb-6`

**Form Fields (ShadCN):**
- Label: `font-semibold mb-2`
- Input: 
  - Border: `border-2 border-black/10 dark:border-white/10`
  - Focus: `focus:border-[#E6007A] focus:ring-[#E6007A]`
  - Padding: `px-4 py-3`
  - Border radius: `rounded-lg`
  - Font size: `text-base`

**Radio Group (Interest):**
- Label: "I'm interested in:"
- Options:
  - "Using ChopDot for my groups"
  - "Building on ChopDot (developers/partnerships)"
  - "Both!"
- Style: Vertical stack with pink selection indicator

**Submit Button:**
- Full width: `w-full`
- Background: `bg-[#E6007A]`
- Text: `text-white`
- Font size: `text-lg`
- Font weight: `font-bold`
- Padding: `py-4`
- Border radius: `rounded-xl`
- Hover: `hover:bg-[#E6007A]/90 hover:scale-105`
- Loading state: Spinner + "Joining..."
- Success state: Checkmark + "Welcome aboard!"

**X (Twitter) Button:**
- Full width: `w-full`
- Variant: `outline`
- Border: `border-2 border-black/10 dark:border-white/10`
- Hover: `hover:bg-[#E6007A]/10 hover:border-[#E6007A]`
- Icon: Lucide `Twitter` (X icon)
- Text: "Follow us on X"
- Margin top: `mt-4`

**States:**
- Default: Form visible
- Loading: Disabled inputs + spinner
- Success: Checkmark + success message + hide form
- Error: Red error message below form

---

### 7. Footer (`/components/Footer.tsx`)

**Layout:**
```
┌─────────────────────────────────────────────────────┐
│  [Pink Logo] ChopDot                               │
│  Split expenses. On-chain.                         │
│                                                     │
│  [GitHub] [Twitter] [Discord]                      │
│                                                     │
│  © 2024 ChopDot. Built on Polkadot.               │
└─────────────────────────────────────────────────────┘
```

**Specifications:**

**Section:**
- Padding: `py-12`
- Background: `bg-black dark:bg-white`
- Border top: `border-t border-white/10 dark:border-black/10`

**Container:**
- Max width: `max-w-6xl mx-auto px-6`
- Text align: `center`

**Logo:**
- Size: `w-12 h-12`
- Pink circle: `bg-[#E6007A]`
- Margin: `mx-auto mb-4`

**Brand Name:**
- Font size: `text-xl`
- Font weight: `font-black`
- Color: `text-white dark:text-black`
- Margin bottom: `mb-2`

**Tagline:**
- Font size: `text-sm`
- Color: `text-white/60 dark:text-black/60`
- Margin bottom: `mb-6`

**Social Icons:**
- Flex: `justify-center gap-4`
- Icon size: `w-10 h-10`
- Background: `bg-white/10 dark:bg-black/10`
- Hover: `hover:bg-[#E6007A] hover:scale-110`
- Border radius: `rounded-full`
- Padding: `p-2`
- Transition: `transition-all duration-200`
- Icons: GitHub, Twitter, Discord
- Margin bottom: `mb-8`

**Copyright:**
- Font size: `text-sm`
- Color: `text-white/40 dark:text-black/40`

---

## 🎬 Animations

### Scroll Animations (`/utils/useScrollAnimation.tsx`)

**fadeInUp:**
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Implementation:**
- Trigger: IntersectionObserver when element enters viewport
- Threshold: 10% visible
- Duration: `300ms`
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)`
- Stagger: Child elements delayed by 100ms each

**Applied to:**
- Hero app screenshot
- All scenario cards
- WhyAndHow feature cards
- FAQ items
- Beta signup form

### Hover States
```css
/* Buttons */
hover:scale-105
transition-transform duration-200

/* Cards */
hover:border-[#E6007A]/50
hover:shadow-lg
transition-all duration-300

/* Social icons */
hover:bg-[#E6007A]
hover:scale-110
transition-all duration-200
```

### Dark Mode Transition
```css
transition-colors duration-300
```

---

## 🖼️ Assets

### App Screenshots
**Location:** `/public/` directory

**Required Images:**
1. `hero-screenshot.png` - Main hero section (full app interface)
2. `screenshot-create.png` - Create group flow
3. `screenshot-expense.png` - Add expense interface
4. `screenshot-settle.png` - Settlement/payment screen

**Specifications:**
- Format: PNG with transparency preferred
- Dimensions: ~1200px wide, responsive height
- Quality: High resolution (2x for retina)
- Background: App interface on device mockup OR clean screenshot

### Icons
**Source:** Lucide React library

**Used Icons:**
- Navigation: ChevronRight, ChevronDown, Sun, Moon
- Features: Home, Plane, Code, Building, Users, Calendar
- UI: Lock, Shield, CheckCircle2, Twitter, Github, MessageCircle
- States: RefreshCw, Download, Target, FileText

---

## 🔧 Technical Implementation

### Required Dependencies
```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "lucide-react": "latest",
    "recharts": "latest",
    "@supabase/supabase-js": "^2.39.0",
    "sonner": "^2.0.3"
  }
}
```

### File Structure
```
/
├── App.tsx (main entry)
├── main.tsx (imports globals.css)
├── styles/
│   └── globals.css (ALL design tokens, animations, typography)
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Scenarios.tsx
│   ├── WhyAndHow.tsx
│   ├── FAQ.tsx
│   ├── BetaSignup.tsx
│   ├── Footer.tsx
│   ├── MiniSite.tsx
│   ├── AdminSignups.tsx
│   └── ui/ (ShadCN components)
├── utils/
│   ├── useScrollAnimation.tsx
│   └── supabase/
│       ├── info.tsx (Supabase credentials)
│       └── client.tsx (Supabase client)
└── public/ (app screenshots)
```

### Critical Setup
**main.tsx must import globals.css:**
```tsx
import './styles/globals.css'
```

**Tailwind CSS v4.0 in globals.css:**
```css
@import "tailwindcss";
/* Custom styles below */
```

**PostCSS config:**
```js
export default {
  plugins: {
    tailwindcss: {},
  },
}
```

---

## 📱 Responsive Design

### Breakpoints
- **Mobile:** < 768px (single column, stacked layout)
- **Tablet:** 768px - 1024px (2 columns for scenarios)
- **Desktop:** > 1024px (3 columns, alternating feature layout)

### Mobile Considerations
- Hero headline: `text-5xl` → `text-4xl` on mobile
- Padding: `py-24` → `py-16` on mobile
- Scenario grid: `lg:grid-cols-3 md:grid-cols-2 grid-cols-1`
- WhyAndHow: Stacked on mobile, side-by-side on desktop
- Font sizes: Scale down by ~20% on mobile

---

## 🎯 Key Design Principles

1. **Brutalism First:** Sharp edges, high contrast, minimal decoration
2. **Pink is Sacred:** Only use #E6007A for interactive elements and emphasis
3. **Typography Hierarchy:** Let font weight and size create hierarchy, not color
4. **Whitespace:** Generous spacing between sections and elements
5. **Performance:** System fonts, optimized images, CSS animations only
6. **Accessibility:** High contrast ratios, focus states, semantic HTML
7. **Mobile-First:** Design works on smallest screens, enhances for larger

---

## ✅ Verification Checklist

### Visual Check
- [ ] Only black, white, and pink colors used
- [ ] No gradients (except subtle background in BetaSignup)
- [ ] Typography is bold and impactful
- [ ] Generous whitespace between sections
- [ ] All images loading correctly
- [ ] Dark mode works perfectly
- [ ] Hover states on all interactive elements

### Functional Check
- [ ] Smooth scroll animations trigger on viewport enter
- [ ] Beta signup form submits to Supabase
- [ ] Signup counter updates in real-time
- [ ] Admin dashboard accessible at #/admin
- [ ] Dark mode toggle works
- [ ] Responsive on mobile/tablet/desktop
- [ ] All buttons have hover/focus states

### Technical Check
- [ ] `globals.css` imported in `main.tsx`
- [ ] Tailwind classes applying correctly
- [ ] No console errors
- [ ] All images in `/public` directory
- [ ] Environment variables configured for Supabase
- [ ] Build succeeds without errors

---

## 🚀 Deployment Notes

### Environment Variables (Vercel)
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### Build Command
```bash
npm run build
```

### Preview URLs
- Production: Deploy to Vercel
- Admin: https://yourdomain.com/#/admin

---

## 📞 Support

This design spec should provide everything needed to perfectly replicate the ChopDot landing page. If any visual differences remain:

1. Compare `globals.css` token values
2. Verify all components match layout specifications
3. Check that animations are firing on scroll
4. Ensure app screenshots are loading
5. Validate Tailwind classes are processing correctly

**Design Philosophy:** Clean. Bold. Transparent. Just like ChopDot itself.
