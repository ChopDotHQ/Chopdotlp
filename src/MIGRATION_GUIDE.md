# 🚀 ChopDot Migration Guide: Figma Make → GitHub → Vercel

This guide walks you through migrating your ChopDot landing page from Figma Make to a self-hosted solution on GitHub and Vercel.

## 📦 What's Been Prepared

Your codebase is now **production-ready** with the following files added:

### Configuration Files
- ✅ `package.json` - All dependencies listed
- ✅ `tsconfig.json` - TypeScript configuration
- ✅ `vite.config.ts` - Vite build configuration
- ✅ `postcss.config.js` - PostCSS/Tailwind config
- ✅ `vercel.json` - Vercel deployment settings
- ✅ `.gitignore` - Git ignore rules
- ✅ `.env.example` - Environment variable template

### Entry Points
- ✅ `index.html` - HTML entry point
- ✅ `main.tsx` - React entry point

### Documentation
- ✅ `README.md` - Complete setup instructions
- ✅ `DEPLOYMENT_CHECKLIST.md` - Step-by-step deployment guide
- ✅ `MIGRATION_GUIDE.md` - This file!

### Code Updates
- ✅ Updated Supabase imports to use environment variables
- ✅ Created `/utils/supabase/client.tsx` for env-based configuration

---

## 🎯 Quick Start (3 Steps)

### Step 1: GitHub Setup (5 minutes)

```bash
# 1. Create a new GitHub repository at https://github.com/new

# 2. Clone it locally
git clone https://github.com/yourusername/chopdot-landing.git
cd chopdot-landing

# 3. Copy ALL files from Figma Make to this folder
# (You can download them as a ZIP or copy-paste)

# 4. Commit and push
git add .
git commit -m "Initial commit from Figma Make"
git push origin main
```

### Step 2: Supabase Setup (10 minutes)

**Option A: Keep using existing Supabase (easiest)**
- Your current Supabase project will continue to work
- No changes needed - the credentials are already in the code
- Skip to Step 3

**Option B: Create new Supabase project (recommended for production)**

1. Go to https://supabase.com and create a new project
2. Copy your Project ID and anon key from Settings → API
3. Update `/utils/supabase/client.tsx` with new credentials
4. Create the database table:

```sql
CREATE TABLE beta_signups (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  interest TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE beta_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts" ON beta_signups
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow public reads" ON beta_signups
  FOR SELECT TO anon USING (true);
```

5. Deploy the edge function:

```bash
# Install Supabase CLI
npm install -g supabase

# Login and link project
supabase login
supabase link --project-ref YOUR_PROJECT_ID

# Deploy the function
supabase functions deploy make-server-18b870a9
```

### Step 3: Vercel Deployment (5 minutes)

1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

5. Add Environment Variables (if using new Supabase):
   ```
   VITE_SUPABASE_PROJECT_ID=your_project_id
   VITE_SUPABASE_ANON_KEY=your_anon_key
   ```

6. Click "Deploy"!

7. Your site will be live at `https://your-project.vercel.app` in ~2 minutes

---

## 🔧 Testing Your Deployment

Once deployed, test these features:

- [ ] Landing page loads correctly
- [ ] Dark mode toggle works
- [ ] Scroll animations trigger
- [ ] Beta signup form submits successfully
- [ ] Signup counter displays
- [ ] Admin dashboard works at `#/admin`
- [ ] "Follow us on X" button links correctly
- [ ] All sections are responsive on mobile

---

## 🎨 Customization After Deployment

### Update Social Media Links

**X/Twitter handle** (mentioned you need to update this):

1. Edit `/components/BetaSignup.tsx` - Line ~327:
```typescript
onClick={() => window.open('https://x.com/YOUR_ACTUAL_HANDLE', '_blank')}
```

2. Edit `/components/Footer.tsx` if it has social links

### Update Content

- **Hero**: `/components/Hero.tsx`
- **Scenarios**: `/components/Scenarios.tsx`
- **FAQ**: `/components/FAQ.tsx`
- **Footer**: `/components/Footer.tsx`

### Update Colors

Edit `/styles/globals.css` to change design tokens.

---

## 🔐 Environment Variables

### Local Development

Create a `.env` file in the root:

```env
VITE_SUPABASE_PROJECT_ID=hbjzkzuybzkiyqufhjac
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

### Vercel Production

Add the same variables in:
- Vercel Dashboard → Your Project → Settings → Environment Variables

**Important**: These are public keys (client-side), so it's safe to commit them. However, for better security in production, use environment variables.

---

## 📊 What Works Without Changes

The following features will work immediately after deployment:

✅ All UI components and styling
✅ Dark mode
✅ Scroll animations
✅ Responsive design
✅ Form validation
✅ Routing (Full page, Mini site, Admin dashboard)

## 🔄 What Requires Supabase Setup

These features require Supabase to be configured:

⚠️ Beta signup form submission
⚠️ Signup counter
⚠️ Admin dashboard data

If you skip Supabase setup, the page will still look great, but form submissions won't be saved.

---

## 🚨 Common Issues & Solutions

### Issue: Build fails with "Cannot find module"

**Solution**: 
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue: Vite import errors

**Solution**: Make sure all imports use relative paths:
- ✅ `import { Button } from './components/ui/button'`
- ❌ `import { Button } from '@/components/ui/button'`

### Issue: Supabase returns 404

**Solution**: 
- Verify edge function is deployed: `supabase functions list`
- Check function name matches in code: `make-server-18b870a9`
- Verify project ID is correct

### Issue: Environment variables not working

**Solution**:
- In Vite, env vars must start with `VITE_`
- Restart dev server after changing `.env`
- In Vercel, redeploy after adding env vars

---

## 📈 Post-Launch Recommendations

### Analytics
Add Google Analytics or Plausible:
```html
<!-- Add to index.html <head> -->
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

### Custom Domain
1. In Vercel: Settings → Domains → Add Domain
2. Follow DNS setup instructions

### SEO Improvements
Already included in `index.html`:
- ✅ Meta description
- ✅ Title tag
- ✅ Favicon

Consider adding:
- Open Graph tags for social sharing
- Twitter Card tags
- Sitemap.xml

### Performance
Your site is already optimized with:
- ✅ Vite for fast builds
- ✅ Code splitting
- ✅ Tailwind CSS purging

---

## 📞 Need Help?

### Resources
- **README.md**: Detailed setup instructions
- **DEPLOYMENT_CHECKLIST.md**: Step-by-step checklist
- **Vercel Docs**: https://vercel.com/docs
- **Supabase Docs**: https://supabase.com/docs
- **Vite Docs**: https://vitejs.dev

### Checklist
Before reaching out for help, verify:
- [ ] Node.js 18+ installed
- [ ] All files copied from Figma Make
- [ ] `.env` file created (for local dev)
- [ ] `npm install` ran successfully
- [ ] Supabase credentials are correct
- [ ] Browser console shows no errors

---

## 🎉 Success Checklist

Once everything is working:
- [ ] Website is live on Vercel
- [ ] Beta signups are working
- [ ] Admin dashboard accessible
- [ ] Custom domain configured (optional)
- [ ] Analytics set up (optional)
- [ ] Social media links updated
- [ ] Tested on mobile devices
- [ ] Shared with your community!

---

**Congratulations on migrating your ChopDot landing page!** 🎊

Your site is now:
- ✅ Version controlled with Git
- ✅ Deployed on Vercel with automatic deployments
- ✅ Backed by Supabase for data storage
- ✅ Ready to scale

Now go catch those vibes! 💸
