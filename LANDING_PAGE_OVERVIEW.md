# ChopDot Landing Page - Complete Overview

This is a comprehensive reference document for the ChopDot landing page. Copy and paste this content to recreate or understand the full landing page structure, content, and design specifications.

---

## 📋 Page Structure

The landing page consists of the following sections in order:

1. **Navbar** (sticky, always visible)
2. **Hero Section** (full viewport height)
3. **Why ChopDot** (with benefits and prose)
4. **Polkadot Alignment** (Parity roadmap + stack synergy)
5. **How It Works** (4-step visual flow)
6. **Scenarios** (6 use cases)
7. **Comparison** (Splitwise vs ChopDot + Polkadot stack cards)
8. **Future Features** (Savings + Escrow)
9. **Roadmap & Vision** (timeline + mission)
10. **FAQ** (6 questions)
11. **Beta Signup** (X-first CTA or legacy form)
12. **Footer** (links, social, tagline)

---

## 🎨 Design System

### Colors
- **Primary Pink**: `#E6007A` (Polkadot pink)
- **Background**: `#FFFFFF` (light) / `#000000` (dark)
- **Text Primary**: `#030213` (light) / `#F9FAFB` (dark)
- **Text Secondary**: `rgba(0, 0, 0, 0.6)` (light) / `rgba(255, 255, 255, 0.6)` (dark)

### Typography
- **Headline Font**: `clamp(36px, 6vw, 72px)`, weight 700, line-height 1.15
- **Section Headings**: `3xl sm:text-4xl lg:text-5xl`, weight 700
- **Body Text**: `text-lg`, line-height relaxed
- **Font Stack**: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`

### Spacing
- **Section Padding**: `py-[72px]` (vertical)
- **Container Max Width**: `max-w-7xl` (hero), `max-w-6xl` (most sections), `max-w-5xl` (FAQ)
- **Gap**: `gap-16 lg:gap-24` (hero), `gap-8` (benefits), `gap-6` (scenarios)

### Effects
- **Film Grain**: Subtle texture overlay on all sections (`opacity-[0.06]` or `opacity-[0.07]`)
- **Pink Glow**: Radial gradient behind elements (`blur-[150px]`, `opacity-5`)
- **Animations**: Fade-in-up, float, pulse (with reduced motion support)

---

## 📱 Section 1: Navbar

### Structure
- **Position**: Sticky top, backdrop blur when scrolled
- **Height**: `h-16`
- **Background**: Transparent → `bg-white/90 dark:bg-black/90` when scrolled
- **Border**: Appears on scroll

### Content

**Left Side:**
- Logo image in pink container (`bg-[#E6007A]`, rounded-lg)
- Logo file: `2f278e7f9aca00057cd69bc7a598aa9bac969b83.png`

**Center (Desktop only):**
- **Next variant:** Story → How It Works → Polkadot → Scenarios → Comparison → Future → Roadmap → FAQ → Beta (anchors: `#story`, `#how-it-works`, `#polkadot-story`, `#scenarios`, `#comparison`, `#future-features`, `#roadmap`, `#faq`, `#beta`).
- **Legacy variant:** Scenarios → How It Works → FAQ → Beta (anchors: `#scenarios`, `#how-it-works`, `#faq`, `#beta`).

**Right Side:**
- Theme toggle (light/dark mode)
- "Join Beta" button (mobile: "Join" only)

---

## 🎯 Section 2: Hero

### Headline
```
Catch vibes,
not feelings about money
```

**Style**: 
- Large, bold, sequential animation
- First line: `inline-block`
- Second line: `block` (wraps on mobile)
- Font size: `clamp(36px, 6vw, 72px)`
- Weight: 700
- Letter spacing: `-0.03em`

### Subheading (Variant: "next")
```
Group expenses settled instantly on the blockchain. No IOUs, no awkward reminders.
```

**Alternative (Variant: "legacy")**
```
Split expenses. On-chain.
```

### Polkadot Badge (Next variant only)
- **Text**: "Built on Polkadot"
- **Style**: Pink badge with border (`bg-[#E6007A]/10`, `border-[#E6007A]/20`)
- **Size**: Small pill-shaped badge below subheading

### CTAs
1. **Primary**: "Join Beta" button
   - Pink background (`#E6007A`)
   - White text
   - Large padding (`px-10 py-7`)
   - Rounded corners (`rounded-xl`)
   - Scrolls to `#beta`

2. **Secondary**: "Learn More" button
   - Outline style
   - Transparent background
   - Hover states
   - Scrolls to `#how-it-works`

### Visual Element
- **App Screenshot**: Dashboard showing pots and balances
- **File**: `180bfc8e80372d9c9d7a7766a8c533f2e3674ee8.png`
- **Size**: Max width 280px
- **Effect**: Floating animation, glow behind it
- **Accent**: Small pink dot in bottom-right corner

### Background
- Subtle film grain texture overlay
- Floating pink radial gradient glow (animated)
- Positioned top-right

---

## 💡 Section 3: Why ChopDot

### Heading
```
Why ChopDot?
```

### Prose Paragraphs

**Paragraph 1** (Both variants):
```
Group expenses are messy. Someone pays upfront, screenshots get lost, and settling up becomes this awkward game of "who owes who what?" ChopDot cuts through that. When you close a pot, everyone gets paid instantly- no IOUs, no mental accounting, no chasing people down three weeks later.
```

**Paragraph 2** (Next variant):
```
Here's the thing about blockchain: it's not just crypto hype. Every transaction gets recorded permanently on Polkadot and the receipts live on Crust Network- decentralized storage that means your data belongs to you, not our servers. So when someone asks "wait, did I pay for parking?" you have receipts. Literally. Even if ChopDot shuts down, your records live on. It's transparency by default, not as an afterthought.
```

**Paragraph 2** (Legacy variant):
```
Here's the thing about blockchain: it's not just crypto hype. Every transaction gets recorded permanently. So when someone asks "wait, did I pay for parking?" you have receipts. Literally. It's transparency by default, not as an afterthought. Whether you're splitting a dinner with 3 friends or managing expenses for 20 people at a festival, the system just works.
```

### Benefits Grid

**Next Variant** (4 benefits, 2x2 on desktop):
1. **Instant settlement**
   - Icon: Zap
   - "Close the pot, everyone's paid. No IOUs."

2. **Your receipts, forever**
   - Icon: Shield
   - "Stored on Crust Network- decentralized, permanent, yours."

3. **Actually scales**
   - Icon: Users
   - "Works for 2 roommates or 20 festival attendees."

4. **Built on Polkadot**
   - Icon: Database
   - "Low fees, fast settlements, Web3 integrations."

**Legacy Variant** (3 benefits, 3 columns):
1. **Instant settlement** - Same as above
2. **Blockchain receipts** - "Every transaction recorded. No 'wait, who paid?'"
3. **Actually scales** - Same as above

**Benefit Card Style:**
- Icon in pink rounded container (`bg-[#E6007A]/10`)
- Title: Large, bold
- Description: Small, secondary text

---

## 🛰️ Section 4: Polkadot Alignment

### Purpose
- Connect ChopDot to Parity Technologies’ 2024-25 roadmap and the upcoming Polkadot App
- Communicate that ChopDot complements onramps and wallets rather than competing with them
- Highlight future-proofing around Asynchronous Backing, Agile Coretime, Elastic Scaling, PolkaVM and the Polkadot Visa card

### Layout
- **Header:** “Built for Polkadot’s next era” with subheading about complementing the ecosystem
- **Two Feature Cards:**
  1. *Parity roadmap 2024-25* -  includes short description plus bullets for Asynchronous Backing, Agile Coretime, Elastic Scaling, PolkaVM, and Ethereum compatibility
  2. *Polkadot App focus* -  covers onboarding gateway, identity, gifting, audits, and upcoming Visa card
- **Synergy Grid (3 cards):**
  - *Gateway × Coordination* -  Polkadot App onboards, ChopDot coordinates
  - *Wallets we plug into* -  Nova/SubWallet/Talisman for asset management, ChopDot for social finance
  - *Beyond fintech silos* -  contrasts Venmo/Cash App/Revolut with ChopDot’s borderless, non-custodial design
- **Future Notes (3 mini-cards):** Elastic Scaling readiness, Polkadot Visa card integration, unified user experience vision
- **Live vs Next up Cards:** Two columns summarizing what works today (wallet login, DOT settlement, Supabase auth, Crust receipts, responsive UI) and what is coming next (shared backend data, Polkadot App onboarding hooks, stablecoin savings, smart-contract escrow/ChopPay, Elastic Scaling readiness, Crust audit trails)

### Style
- Uses the same scroll animation + film grain treatment
- Card borders with pink accent icons for each subsection
- Section ID: `polkadot-story` for anchor linking

---

## 🔄 Section 5: How It Works

### Heading
```
How it works
```

### Subheading
```
Follow a Bali trip from creation to settlement.
```

### 4-Step Visual Flow

**Step 1: Create Pot**
- Icon: Plus
- Description: "Name your group pot and invite members. In this case, 'Bali Trip' with friends splitting vacation costs."
- Visual: Bali Trip screenshot (`7886c174fa4d02abef2f4f5291ac0d99dfe17f82.png`)

**Step 2: Add Expenses**
- Icon: Receipt
- Description: "Track who paid for what- accommodation, food, activities. Each expense gets logged with who covered it."
- Visual: Same Bali Trip screenshot

**Step 3: Review Balances**
- Icon: BarChart3
- Description: "ChopDot automatically calculates who owes what. Everyone sees the breakdown before settling."
- Visual: Polkadot Settlement screenshot (`b077d869eeeb730c7df4c3568ced9d5f0744bc21.png`)

**Step 4: Settle On-Chain**
- Icon: CheckCircle2
- Description: "Close the pot and settle instantly on Polkadot. Every transaction gets recorded on the blockchain- transparent, permanent, done."
- Visual: Same Polkadot Settlement screenshot

### Visual Layout
- Steps 1-2: Left side text, right side screenshot
- Steps 3-4: Left side screenshot, right side text
- Connecting lines between steps
- Numbered circles (01-04) in pink
- Smooth transitions and animations

---

## 🌍 Section 6: Scenarios (Made for Real Life)

### Heading
```
Made for real life
```

### Subheading
```
Not just another expense app. Built for how groups actually spend.
```

### 6 Use Case Cards

1. **Roommates**
   - Icon: Home
   - "Rent, utilities, groceries- monthly auto-split"

2. **Group trip**
   - Icon: Plane
   - "Flights, hotels, meals- settled transparently"

3. **Hackathon team**
   - Icon: Code2
   - "Hotel, food runs, supplies- on-chain settlement"

4. **Crypto house**
   - Icon: Users
   - "Shared expenses, multi-sig, transparent accounting"

5. **Weekend getaway**
   - Icon: Calendar
   - "Airbnb, activities, dinners- split instantly"

6. **Group dinner**
   - Icon: Utensils
   - "15 people, one check, zero awkwardness"

**Card Style:**
- Border: `border-black/10 dark:border-white/10`
- Hover: Scale up slightly, shadow
- Icon: Pink background container
- Title: Bold, large
- Description: Small, secondary

**Layout:** 3 columns on desktop, 2 on tablet, 1 on mobile

---

## 📊 Section 7: Comparison

### Heading
```
Why not just use other apps?
```

### Subheading
```
Here's how ChopDot stacks up against traditional expense apps.
```

### Comparison Table

| Feature | Other apps | ChopDot |
|---------|---------------------|---------|
| Settlement Method | Manual bank transfer | ✅ On-chain or bank |
| Group Savings / Yield | ❌ No | ✅ DeFi yields (coming soon) |
| Receipt Storage | Centralized server | ✅ Decentralized (Crust/IPFS) |
| Privacy & Data Ownership | Company servers | ✅ Your data, your control |
| Blockchain Transparency | ❌ No | ✅ Immutable records |
| Fees | Free (data usage unclear) | ✅ Transparent, waived in beta |

**Table Style:**
- Full width, responsive
- Headers: Bold, centered
- Rows: Alternating subtle backgrounds
- Borders: Subtle dividers
- Mobile: Horizontal scroll
- **Pricing Note:** Below the table we remind visitors that demo fees are symbolic and DOT settlement keeps costs low.

### Polkadot Stack Alignment Cards
- After the table, a second grid highlights how ChopDot pairs with:
  1. **Polkadot App** (gateway + identity, gifting, Visa card roadmap)
  2. **Nova/SubWallet/Talisman** (asset management wallets)
  3. **Venmo/Cash App/Revolut** (traditional fintech reference)
- Each card explains the other product’s focus plus a “ChopDot pairs by…” callout.

---

## 🚀 Section 8: Future Features

### Heading
```
What's Next
```

### Subheading
```
We're building features that make group finance smarter and fairer.
```

### Feature Card 1: Group Savings Pots

**Icon:** TrendingUp (pink)

**Title:** Group Savings Pots

**Badge:** "Coming Soon" (pink)

**Description:**
```
Save together and earn DeFi yields on pooled funds via Acala integration. While saving for trips or shared expenses, your money works for you- not just sitting idle.
```

**Bullets:**
- ✅ Earn interest on group savings
- ✅ Acala DeFi integration
- ✅ Automatic yield generation

### Feature Card 2: Smart Contract Escrow

**Icon:** Lock (pink)

**Title:** Smart Contract Escrow

**Badge:** "Coming Soon" (pink)

**Description:**
```
Trustless deposits that release automatically when conditions are met. Perfect for event planning, group purchases, and milestone-based payments. No middleman needed- the smart contract enforces fairness.
```

**Bullets:**
- ✅ Event deposits (held until date)
- ✅ Group purchases (releases on delivery)
- ✅ Milestone payments (auto-release)

**Card Style:**
- 2 columns on desktop
- Pink gradient background (`from-[#E6007A]/5`)
- Border with hover states
- Rounded corners (`rounded-xl`)

---

## 🧭 Section 9: Roadmap & Vision

### Heading
```
Roadmap & Vision
```

### Copy Blocks
- **Intro:** Reiterates that ChopDot rides on Parity upgrades / Polkadot App / Asset Hub and includes a disclaimer that phases may change as education + scaling needs evolve, but self-sovereign coordination remains the focus.
- **Timeline Cards (4 phases):**
  1. *Phase 1 – Today:* Group pots, instant receipts, education kits for squads onboarding now.
  2. *Phase 2 – Next up:* ChopPay + guided onboarding that can plug into forthcoming Polkadot personhood/identity rails (if users opt in).
  3. *Phase 3:* Stable savings (USDC/USDT via Asset Hub) plus merchant rails and Polkadot Visa pilots.
  4. *Phase 4:* Programmable communities- micro-subscriptions, creator tipping, APIs- described as flexible as Elastic Scaling and community feedback evolve.
- **Each card** still uses a label, paragraph, and three bullet chips.

### Mission & Vision Tiles
- Three mini-cards below the timeline:
  - **Mission:** “Enable fair, transparent and instant group finance on Polkadot…”
  - **Vision:** “Money coordination should feel as easy as sending a message…”
  - **Values:** “Sovereignty · Privacy · User-owned data · Open collaboration.”

### Style
- Same scroll animation treatment, border cards, pink accent icons.
- Section ID: `roadmap`.

---

## ❓ Section 10: FAQ

### Heading
```
Questions, answered.
```

### Questions & Answers

1. **Q: Do all members need crypto?**
   - **A:** "Nope. Everyone just adds expenses; settlement options are flexible."

2. **Q: Why blockchain though?**
   - **A:** "Permanent receipts. No 'wait, did I pay?' Transparent by default, not as an afterthought."

3. **Q: Can I export everything?**
   - **A:** "Yes- CSV/PDF with receipts and balances."

4. **Q: What if someone disagrees?**
   - **A:** "Comment on any expense. Attach receipts. Everyone sees the same numbers."

5. **Q: What's the catch?**
   - **A:** "No ads. No data resale. Fees are waived during beta- you only pay blockchain gas fees. After beta, small platform fees may apply (0.02–0.20 CHF per settlement)."

6. **Q: Is this ready to use?**
   - **A:** "We're in beta. Join the waitlist to be first in line."

**Layout:** 2 columns on desktop, 1 on mobile

**Style:**
- Question: Bold, large
- Answer: Small, secondary text
- Smooth scroll-in animations

---

## 📝 Section 11: Beta Signup

### Heading
```
Join the beta
```

### Subheading (Next variant)
```
We’re moving early access coordination to X. Follow us there and DM “BETA” to get the next drop.
```

### Subheading (Legacy variant)
```
Be among the first to split expenses fairly and effortlessly.
```

### CTAs
- **Next Variant:**
  - Three-step instruction cards (Follow @chopdotapp → DM “BETA” → Watch for invites)
  - Primary CTA button opens `https://x.com/chopdotapp`
  - Notes about gifting features, security audits, Visa card roadmap
- **Legacy Variant:**
  - Full Supabase-powered form remains (see fields below)

### Form Fields (Legacy only)

1. **Name** (Text input, required)
2. **Email** (Email input, required)
3. **Interest** (Radio group):
   - "I'm interested as a... User" (default)
   - "I'm interested as an... Organizer"
   - "I'm interested as a... Developer"

### CTA Button
- **Text**: "Join Beta" → "You're on the list!" (after submit)
- **Style**: Large pink button
- **State**: Disabled during submission

### Live Counter (Legacy variant only)
- Fetches from Supabase function
- Updates every 30 seconds
- Format: "{count} people have joined"

### Success Message
- "You're on the list! We'll notify you when ChopDot is ready."
- Social links: Twitter/X (@chopdotapp)

### Error Handling
- Shows error messages below form
- Email validation
- Clear error states

---

## 🔗 Section 12: Footer

### Navigation Links
- About (placeholder: `#`)
- Docs (placeholder: `#` - should link to README)
- Privacy Policy (`/privacy.html`)
- Terms of Service (`/terms.html`)
- GitHub (placeholder: `#` - should link to repo)
- X / Twitter (placeholder: `#` - should link to @chopdotapp)

### Social Icons
- X / Twitter
- GitHub
- Mirror (FileText icon)

**Style:**
- Circular icons with hover effects
- Pink on hover (`hover:bg-[#E6007A]`)

### Tagline
```
Built in Zurich • Powered by Polkadot • Designed for clarity.
```

### Footer Style
- Dark background (light in dark mode)
- White text (black in dark mode)
- Border top
- Centered content

---

## 🎛️ Variant System

The landing page supports two variants that can be toggled:

### Toggle Button
- **Location**: Fixed bottom-right
- **Label**: "View Legacy Landing" / "View New Landing"
- **URL Parameter**: `?variant=legacy` or `?variant=next`

### Differences Between Variants

**Hero:**
- **Next**: Longer subheading + Polkadot badge
- **Legacy**: Shorter subheading, no badge

**Why ChopDot:**
- **Next**: 4 benefits (includes "Built on Polkadot"), Crust Network detail, and a Polkadot App / Parity roadmap paragraph.
- **Legacy**: 3 benefits, generic blockchain mention

**Additional Sections:**
- **Next**: Adds Polkadot Alignment, expanded Comparison cards, Future Features, and Roadmap & Vision.
- **Legacy**: Keeps the slim hero → scenarios → why flow.

**Section Order:**
- **Next**: Hero → Why/How → Polkadot Alignment → Scenarios → Comparison → Future Features → Roadmap → FAQ → Beta → Footer
- **Legacy**: Hero → Scenarios → Why/How → FAQ → Beta → Footer

**Beta Section:**
- **Next**: X-first CTA (Follow @chopdotapp + DM “BETA”), no form.
- **Legacy**: Full Supabase form with live counter.

**Footer:**
- **Next**: Adds tech stack strip + builder credits.
- **Legacy**: Standard footer.

---

## 🖼️ Image Assets

All images are in `/src/assets/`:

1. **Dashboard Screenshot**: `180bfc8e80372d9c9d7a7766a8c533f2e3674ee8.png`
   - Used in: Hero section
   - Shows: App dashboard with pots and balances

2. **Logo**: `2f278e7f9aca00057cd69bc7a598aa9bac969b83.png`
   - Used in: Navbar
   - Shows: ChopDot logo

3. **Bali Trip Screenshot**: `7886c174fa4d02abef2f4f5291ac0d99dfe17f82.png`
   - Used in: How It Works (Step 1-2)
   - Shows: Bali Trip pot with expenses

4. **Polkadot Settlement**: `b077d869eeeb730c7df4c3568ced9d5f0744bc21.png`
   - Used in: How It Works (Step 3-4)
   - Shows: On-chain settlement confirmation

---

## 🎨 Key Design Elements

### Animations
- **Fade-in-up**: Elements fade in and slide up on scroll
- **Float**: Gentle floating motion for background elements
- **Pulse**: Breathing effect for glows
- **Hover Scale**: Cards scale slightly on hover

### Film Grain
- Applied to all sections as subtle texture
- SVG filter with fractal noise
- Very low opacity (`0.06-0.07`)

### Pink Accents
- Used sparingly for emphasis
- Primary CTA buttons
- Icon containers
- Badges and labels
- Hover states

### Responsive Breakpoints
- **Mobile**: `< 640px` (sm)
- **Tablet**: `640px - 1024px` (md, lg)
- **Desktop**: `> 1024px` (lg, xl)

### Dark Mode
- Automatic detection via `prefers-color-scheme`
- Toggle button in navbar
- Full color inversion
- Same opacity values, inverted colors

---

## 🔧 Technical Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Backend**: Supabase (beta signups)
- **Deployment**: Vercel

---

## 📋 Component Files

All components are in `/src/components/`:

- `Navbar.tsx` - Sticky navigation
- `Hero.tsx` - Hero section with variant support
- `WhyAndHow.tsx` - Why section + How It Works flow
- `Scenarios.tsx` - Use cases grid
- `Comparison.tsx` - Feature comparison table
- `FutureFeatures.tsx` - Coming soon features
- `FAQ.tsx` - Questions and answers
- `BetaSignup.tsx` - Signup form with Supabase
- `Footer.tsx` - Footer with links and social
- `ThemeToggle.tsx` - Dark mode toggle

---

## 🎯 Key Messages

### Value Propositions
1. **Instant Settlement**: No IOUs, no waiting, everyone paid instantly
2. **Permanent Records**: Blockchain receipts that last forever
3. **Data Ownership**: Your data on Crust Network, not company servers
4. **Transparency**: Everything recorded on-chain, immutable
5. **Flexibility**: Works with or without crypto

### Differentiation Points
- **vs Splitwise**: On-chain settlement, DeFi yields, decentralized storage
- **vs Traditional Apps**: Blockchain transparency, permanent records, data ownership
- **vs Other Web3 Apps**: Easy to use, no crypto required for participants

### Polkadot Ecosystem
- Built on Polkadot blockchain
- Crust Network for decentralized storage
- Acala for DeFi integration (future)
- Low fees, fast finality
- Interoperability via XCM

---

## 📝 Copy Variations

### Hero Headline Options
- Primary: "Catch vibes, not feelings about money"
- Alternative: "Split fair. Pay transparent. Trust built-in."

### Subheading Options
- Next: "Group expenses settled instantly on the blockchain. No IOUs, no awkward reminders."
- Legacy: "Split expenses. On-chain."
- Shorter: "Split expenses. On-chain."
- Longer: See next variant above

### Meta Description
```
No more "you owe me." Split group expenses instantly, settle on-chain. No IOUs, no awkward reminders.
```

### Page Title
```
ChopDot -  Effortless Group Expense Splitting
```

---

## 🚦 Interactive Elements

### Scroll-to Sections
- "Learn More" → `#how-it-works`
- "Join Beta" → `#beta`
- Navbar links → respective sections
- Smooth scroll behavior

### Form Interactions
- Real-time validation
- Loading states
- Success/error messages
- Live counter (legacy variant)

### Theme Toggle
- Switches between light/dark mode
- Persists preference
- Smooth transitions

---

## 📱 Mobile Considerations

### Responsive Adjustments
- Headlines scale down (`clamp()` functions)
- Grids collapse to single column
- Buttons stack vertically
- Navigation menu simplified
- Images scale appropriately
- Text sizes adjust

### Touch Targets
- Buttons: Minimum 44px height
- Links: Adequate spacing
- Form inputs: Comfortable size

---

## ✅ Checklist for Recreation

When recreating this landing page, ensure:

- [ ] All 10 sections implemented
- [ ] Hero with correct headline and subheading
- [ ] Polkadot badge in hero (next variant)
- [ ] Why ChopDot with 3-4 benefits
- [ ] How It Works with 4 steps and screenshots
- [ ] 6 scenario cards
- [ ] Comparison table vs Splitwise
- [ ] Future features section (2 cards)
- [ ] FAQ with 6 questions
- [ ] Beta signup form with validation
- [ ] Footer with all links
- [ ] Dark mode toggle
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] All animations working
- [ ] Smooth scroll navigation
- [ ] Variant toggle functional
- [ ] Images optimized and loading
- [ ] Supabase integration for signups
- [ ] Theme persistence

---

## 📞 Contact Information

- **Email**: hello@chopdot.xyz
- **Website**: https://chopdot.xyz
- **Twitter/X**: @chopdotapp
- **GitHub**: ChopDotHQ/ChopDot (update placeholder links)

---

## 🎓 Notes for Implementation

1. **Variant System**: Use URL params or state to toggle between legacy/next
2. **Animations**: Respect `prefers-reduced-motion` for accessibility
3. **Images**: Optimize for web, use lazy loading
4. **Forms**: Validate on client and server
5. **SEO**: Meta tags, structured data, semantic HTML
6. **Accessibility**: ARIA labels, keyboard navigation, color contrast
7. **Performance**: Code splitting, lazy loading, optimized assets

---

**Last Updated**: January 2025
**Version**: 2.0 (with Comparison & Future Features sections)

---

This document contains everything needed to recreate or understand the ChopDot landing page. Copy and paste sections as needed for implementation in other platforms or frameworks.
