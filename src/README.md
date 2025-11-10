# ChopDot Landing Page

A landing page for ChopDot, a Web3 group-expense app built on Polkadot blockchain technology. Features a brutalist minimalist design with black, white, and Polkadot pink accents.

## 🚀 Features

- **Hero Section** - "Catch vibes, not feelings about money"
- **Scenarios** - Real-world use cases (roommates, group trips, hackathons, crypto houses)
- **WhyAndHow** - Visual storytelling with app screenshots
- **FAQ** - Common questions answered
- **Beta Signup** - Fully functional form with Supabase backend
- **Admin Dashboard** - View signups at `#/admin`
- **Smooth Scroll Animations** - Engaging user experience
- **Dark Mode Support** - Toggle between light and dark themes
- **Live Signup Counter** - Real-time beta signup tracking

## 📦 Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS v4** for styling
- **shadcn/ui** components
- **Supabase** for backend and database
- **Lucide React** for icons

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd chopdot-landing
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Then edit `.env` and add your Supabase credentials:

```env
VITE_SUPABASE_PROJECT_ID=your_project_id_here
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

**Where to find your Supabase credentials:**
1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Go to Settings → API
4. Copy the Project ID and anon/public key

### 4. Update Supabase Info File

Edit `/utils/supabase/info.tsx` and replace with your credentials:

```typescript
export const projectId = "your_project_id_here"
export const publicAnonKey = "your_anon_key_here"
```

### 5. Set Up Supabase Database

In your Supabase project, you need to create the database table and edge function:

#### Create the `beta_signups` table:

```sql
CREATE TABLE beta_signups (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  interest TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE beta_signups ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts
CREATE POLICY "Allow public inserts" ON beta_signups
  FOR INSERT TO anon
  WITH CHECK (true);

-- Create policy to allow reads (for count)
CREATE POLICY "Allow public reads" ON beta_signups
  FOR SELECT TO anon
  USING (true);
```

#### Deploy the Supabase Edge Function:

The edge function code is in `/supabase/functions/server/index.tsx`. You'll need to:

1. Install Supabase CLI: `npm install -g supabase`
2. Link your project: `supabase link --project-ref your_project_id`
3. Deploy the function: `supabase functions deploy make-server-18b870a9`

### 6. Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 🚀 Deployment to Vercel

### Option 1: Deploy via Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option 2: Deploy via Vercel Dashboard

1. Go to [Vercel](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure environment variables in Vercel:
   - `VITE_SUPABASE_PROJECT_ID`
   - `VITE_SUPABASE_ANON_KEY`
5. Deploy!

### Important Vercel Settings:

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## 📁 Project Structure

```
chopdot-landing/
├── components/           # React components
│   ├── ui/              # shadcn/ui components
│   ├── figma/           # Figma import helpers
│   ├── Hero.tsx
│   ├── Scenarios.tsx
│   ├── WhyAndHow.tsx
│   ├── FAQ.tsx
│   ├── BetaSignup.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── AdminSignups.tsx
│   ├── MiniSite.tsx
│   └── ThemeToggle.tsx
├── styles/              # Global styles
│   └── globals.css
├── utils/               # Utility functions
│   ├── supabase/
│   │   └── info.tsx    # Supabase credentials (UPDATE THIS!)
│   └── useScrollAnimation.ts
├── supabase/            # Supabase edge functions
│   └── functions/
│       └── server/
│           ├── index.tsx
│           └── kv_store.tsx
├── App.tsx              # Main app component
├── main.tsx             # Entry point
├── index.html           # HTML template
└── package.json         # Dependencies
```

## 🔐 Security Notes

- **Never commit `.env` to git** - it's in `.gitignore`
- The current Supabase keys in the code are from Figma Make and should be replaced
- For production, consider adding more restrictive RLS policies
- This app is designed for beta signups, not for collecting sensitive PII

## 🎨 Customization

### Update Colors

Edit `/styles/globals.css` to change the design tokens.

### Update Content

- Hero: `/components/Hero.tsx`
- Scenarios: `/components/Scenarios.tsx`
- FAQ: `/components/FAQ.tsx`

### Social Media Links

Update the X/Twitter link in:
- `/components/BetaSignup.tsx` - Line with "Follow us on X" button
- `/components/Footer.tsx` - Social media section

## 📊 Admin Dashboard

Access the admin dashboard to view beta signups:
- Local: `http://localhost:5173/#/admin`
- Production: `https://yourdomain.com/#/admin`

## 🐛 Troubleshooting

### Signup form not working
- Check that Supabase credentials are correct in `/utils/supabase/info.tsx`
- Verify the `beta_signups` table exists in Supabase
- Check that RLS policies are configured correctly

### Signup counter shows 0 or doesn't appear
- Make sure the Supabase edge function is deployed
- Check browser console for API errors
- Verify the function name matches in the code

### Build errors
- Run `npm install` to ensure all dependencies are installed
- Check that all imports are correct
- Verify TypeScript types are properly configured

## 📄 License

This project is proprietary. All rights reserved.

## 🤝 Contributing

This is a private project. For questions or issues, contact the development team.
