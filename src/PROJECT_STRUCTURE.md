# ChopDot Project Structure

Complete file listing for your ChopDot landing page migration.

## 📁 Root Files (Configuration)

```
/
├── package.json              # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite build config
├── postcss.config.js        # PostCSS/Tailwind config
├── vercel.json              # Vercel deployment settings
├── .gitignore               # Git ignore rules
├── .env.example             # Environment variable template
├── index.html               # HTML entry point
├── main.tsx                 # React entry point
├── App.tsx                  # Main app component
└── Attributions.md          # Third-party attributions
```

## 📖 Documentation

```
/
├── README.md                    # Complete setup guide
├── MIGRATION_GUIDE.md           # Migration walkthrough
├── DEPLOYMENT_CHECKLIST.md      # Deployment checklist
├── PROJECT_STRUCTURE.md         # This file
└── guidelines/
    └── Guidelines.md            # Project guidelines
```

## 🧩 Components

```
/components/
├── Hero.tsx                 # Hero section with headline
├── Scenarios.tsx            # Use case scenarios
├── WhyAndHow.tsx            # App screenshots & features
├── FAQ.tsx                  # Frequently asked questions
├── BetaSignup.tsx          # Beta signup form (with Supabase)
├── Footer.tsx              # Footer with links
├── Navbar.tsx              # Navigation bar
├── AdminSignups.tsx        # Admin dashboard (#/admin)
├── MiniSite.tsx            # Mini site view mode
└── ThemeToggle.tsx         # Dark mode toggle
```

## 🎨 UI Components (shadcn/ui)

```
/components/ui/
├── accordion.tsx
├── alert-dialog.tsx
├── alert.tsx
├── aspect-ratio.tsx
├── avatar.tsx
├── badge.tsx
├── breadcrumb.tsx
├── button.tsx              # Used extensively
├── calendar.tsx
├── card.tsx
├── carousel.tsx
├── chart.tsx
├── checkbox.tsx
├── collapsible.tsx
├── command.tsx
├── context-menu.tsx
├── dialog.tsx
├── drawer.tsx
├── dropdown-menu.tsx
├── form.tsx
├── hover-card.tsx
├── input-otp.tsx
├── input.tsx               # Used in forms
├── label.tsx               # Used in forms
├── menubar.tsx
├── navigation-menu.tsx
├── pagination.tsx
├── popover.tsx
├── progress.tsx
├── radio-group.tsx         # Used in beta signup
├── resizable.tsx
├── scroll-area.tsx
├── select.tsx
├── separator.tsx
├── sheet.tsx
├── sidebar.tsx
├── skeleton.tsx
├── slider.tsx
├── sonner.tsx             # Toast notifications
├── switch.tsx
├── table.tsx
├── tabs.tsx
├── textarea.tsx
├── toggle-group.tsx
├── toggle.tsx
├── tooltip.tsx
├── use-mobile.ts          # Mobile detection hook
└── utils.ts               # UI utilities
```

## 🖼️ Figma Components

```
/components/figma/
└── ImageWithFallback.tsx   # Protected - do not modify
```

## 🎨 Styles

```
/styles/
└── globals.css             # Global styles, Tailwind config, animations
```

## 🔧 Utilities

```
/utils/
├── supabase/
│   ├── info.tsx           # Original Supabase config (deprecated)
│   └── client.tsx         # New env-based Supabase config
└── useScrollAnimation.ts  # Scroll animation hook
```

## 🗄️ Supabase (Backend)

```
/supabase/functions/server/
├── index.tsx              # Edge function entry point
└── kv_store.tsx          # Key-value store utilities
```

---

## 🔑 Key Files to Customize

### Before Deployment

1. **`/utils/supabase/client.tsx`** - Update with your Supabase credentials
2. **`.env`** - Create from `.env.example` with your keys
3. **`/components/BetaSignup.tsx`** - Update X/Twitter URL (line ~327)
4. **`/components/Footer.tsx`** - Update social media links

### After Deployment (Optional)

5. **`/components/Hero.tsx`** - Customize hero copy
6. **`/components/FAQ.tsx`** - Add/edit FAQs
7. **`/styles/globals.css`** - Modify design tokens/colors

---

## 📦 Total File Count

- **Root files**: 11
- **Documentation**: 4
- **Components**: 10
- **UI Components**: 46
- **Figma Components**: 1
- **Styles**: 1
- **Utils**: 3
- **Supabase**: 2

**Total**: ~78 files

---

## 🚫 Protected Files (Do Not Modify)

These files are system files and should not be edited:

- `/components/figma/ImageWithFallback.tsx`

---

## 📤 Files to Copy to GitHub

**Copy ALL files** from your Figma Make project to your GitHub repository.

The `.gitignore` file will automatically exclude:
- `node_modules/`
- `dist/`
- `.env` (but `.env.example` will be included)
- Editor files (`.vscode`, `.DS_Store`, etc.)

---

## 🔄 File Dependencies

### Entry Flow
```
index.html
  └── main.tsx
      └── App.tsx
          ├── Navbar.tsx
          ├── Hero.tsx
          ├── Scenarios.tsx
          ├── WhyAndHow.tsx
          ├── FAQ.tsx
          ├── BetaSignup.tsx (→ Supabase)
          └── Footer.tsx
```

### Supabase Integration
```
BetaSignup.tsx / AdminSignups.tsx
  └── /utils/supabase/client.tsx
      └── Environment Variables (VITE_SUPABASE_*)
```

### Styling
```
All Components
  └── /components/ui/* (shadcn components)
      └── /styles/globals.css (Tailwind + custom styles)
```

---

## 🎯 Quick File Reference

| File | Purpose | Edit? |
|------|---------|-------|
| `App.tsx` | Main app logic, routing | ⚠️ Rarely |
| `BetaSignup.tsx` | Signup form | ✅ Update X URL |
| `Hero.tsx` | Hero section | ✅ Customize copy |
| `FAQ.tsx` | FAQ section | ✅ Add/edit FAQs |
| `Footer.tsx` | Footer links | ✅ Update links |
| `globals.css` | Design system | ✅ Customize colors |
| `client.tsx` | Supabase config | ✅ Update credentials |
| `.env.example` | Env template | ✅ Create `.env` |

---

This structure is optimized for:
- ✅ Vercel deployment
- ✅ Vite build system
- ✅ TypeScript support
- ✅ Tailwind CSS v4
- ✅ Supabase integration
- ✅ Easy customization

For detailed setup instructions, see `MIGRATION_GUIDE.md`
