# ⚡ ChopDot Quick Start Commands

**Copy-paste ready commands for your migration.**

---

## 🔧 Local Development

### Initial Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:5173
```

### Build & Preview
```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Lint
```bash
# Check for code issues
npm run lint
```

---

## 🐙 GitHub Setup

### Option 1: New Repository
```bash
# Create repo at https://github.com/new first, then:

git init
git add .
git commit -m "Initial commit from Figma Make"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/chopdot-landing.git
git push -u origin main
```

### Option 2: Clone Existing Repository
```bash
# Clone your empty repo
git clone https://github.com/YOUR_USERNAME/chopdot-landing.git
cd chopdot-landing

# Copy all files from Figma Make into this folder
# Then:
git add .
git commit -m "Initial commit from Figma Make"
git push
```

---

## 🗄️ Supabase Setup

### Install Supabase CLI
```bash
npm install -g supabase
```

### Login & Link Project
```bash
# Login to Supabase
supabase login

# Link to your project (get project ref from Supabase dashboard)
supabase link --project-ref YOUR_PROJECT_ID
```

### Create Database Table
```sql
-- Run this in Supabase SQL Editor (Dashboard → SQL Editor)

CREATE TABLE beta_signups (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  interest TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE beta_signups ENABLE ROW LEVEL SECURITY;

-- Allow public inserts
CREATE POLICY "Allow public inserts" ON beta_signups
  FOR INSERT TO anon
  WITH CHECK (true);

-- Allow public reads (for signup counter)
CREATE POLICY "Allow public reads" ON beta_signups
  FOR SELECT TO anon
  USING (true);
```

### Deploy Edge Function
```bash
# Deploy the Supabase edge function
supabase functions deploy make-server-18b870a9
```

### Test Edge Function
```bash
# List deployed functions
supabase functions list

# Test function (replace with your project ID)
curl https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-18b870a9/beta-signups
```

---

## 🚀 Vercel Deployment

### Option 1: Via Dashboard (Recommended)
1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. Add Environment Variables:
   - `VITE_SUPABASE_PROJECT_ID` = your_project_id
   - `VITE_SUPABASE_ANON_KEY` = your_anon_key
6. Click "Deploy"

### Option 2: Via CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Add Environment Variables (CLI)
```bash
vercel env add VITE_SUPABASE_PROJECT_ID
vercel env add VITE_SUPABASE_ANON_KEY
```

---

## 🔍 Testing Commands

### Test Local Build
```bash
# Build and test
npm run build
npm run preview

# Should see no errors
```

### Test Supabase Connection
```bash
# In browser console after starting dev server:
fetch('https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-18b870a9/beta-signups')
  .then(r => r.json())
  .then(console.log)
```

### Check TypeScript
```bash
# Type check without building
npx tsc --noEmit
```

---

## 📝 Common File Edits

### Update Supabase Credentials
```bash
# Edit the file
nano /utils/supabase/client.tsx
# or use your preferred editor
code /utils/supabase/client.tsx
```

### Update X/Twitter Handle
```bash
# Edit BetaSignup component
nano /components/BetaSignup.tsx
# Find line ~327 and update the URL
```

### Create .env File
```bash
# Copy example
cp .env.example .env

# Edit with your credentials
nano .env
```

---

## 🧹 Clean & Reset

### Clean Install
```bash
# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Clean Build
```bash
# Remove dist folder and rebuild
rm -rf dist
npm run build
```

### Reset Git (if needed)
```bash
# Uncommit last commit (keeps changes)
git reset --soft HEAD~1

# Discard all changes (WARNING: destructive)
git reset --hard HEAD
```

---

## 📊 Verify Setup

### Check All Files Present
```bash
# List important files
ls -la package.json tsconfig.json vite.config.ts index.html main.tsx .env

# Check components
ls -la components/*.tsx

# Check UI components
ls -la components/ui/*.tsx
```

### Verify Dependencies
```bash
# Show installed packages
npm list --depth=0

# Check for outdated packages
npm outdated
```

### Check Build Output
```bash
npm run build

# Build output should be in /dist
ls -la dist/
```

---

## 🔐 Environment Variables

### Local Development (.env)
```env
VITE_SUPABASE_PROJECT_ID=your_project_id
VITE_SUPABASE_ANON_KEY=your_anon_key
```

### Vercel (via Dashboard or CLI)
```bash
# Via CLI
vercel env add VITE_SUPABASE_PROJECT_ID production
# Paste your project ID when prompted

vercel env add VITE_SUPABASE_ANON_KEY production
# Paste your anon key when prompted
```

---

## 🐛 Debug Commands

### View Build Logs
```bash
# Verbose build
npm run build -- --debug

# Check Vite version
npx vite --version
```

### Test Production Build Locally
```bash
# Build and serve
npm run build && npm run preview
```

### Check Port Usage
```bash
# Check if port 5173 is in use
lsof -ti:5173

# Kill process on port 5173
kill -9 $(lsof -ti:5173)
```

---

## 📦 Package Management

### Update Dependencies
```bash
# Check for updates
npm outdated

# Update all to latest
npm update

# Update specific package
npm update react
```

### Add New Package
```bash
# Install and add to package.json
npm install package-name

# Dev dependency
npm install --save-dev package-name
```

---

## 🎯 One-Line Deploy

```bash
# Complete local setup → GitHub → Vercel flow
npm install && npm run build && git add . && git commit -m "Deploy to production" && git push && vercel --prod
```

---

## 🆘 Emergency Fixes

### Build Failing
```bash
rm -rf node_modules package-lock.json dist
npm install
npm run build
```

### Git Issues
```bash
# Discard all local changes
git reset --hard HEAD
git clean -fd
```

### Vercel Deployment Failed
```bash
# Redeploy latest commit
vercel --prod --force
```

---

## ✅ Success Verification

After deployment, check:

```bash
# 1. Build succeeds
npm run build
# ✅ Should complete without errors

# 2. Preview works
npm run preview
# ✅ Visit http://localhost:4173

# 3. Git is up to date
git status
# ✅ Should show "nothing to commit, working tree clean"

# 4. Vercel is deployed
vercel ls
# ✅ Should show your project
```

---

## 🔗 Useful URLs

- **Local Dev**: http://localhost:5173
- **Local Preview**: http://localhost:4173
- **Admin Dashboard**: http://localhost:5173/#/admin
- **Supabase Dashboard**: https://app.supabase.com
- **Vercel Dashboard**: https://vercel.com/dashboard
- **GitHub Repo**: https://github.com/YOUR_USERNAME/chopdot-landing

---

## 🎓 Learning Resources

```bash
# Vite docs
open https://vitejs.dev

# Vercel docs
open https://vercel.com/docs

# Supabase docs
open https://supabase.com/docs

# Tailwind CSS
open https://tailwindcss.com/docs
```

---

**📋 Copy these commands as needed. Good luck with your deployment!**

For detailed explanations, see:
- **MIGRATION_GUIDE.md** - Full walkthrough
- **README.md** - Complete documentation
- **DEPLOYMENT_CHECKLIST.md** - Step-by-step tasks
