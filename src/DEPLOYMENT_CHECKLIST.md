# 🚀 ChopDot Deployment Checklist

Use this checklist to ensure a smooth migration from Figma Make to GitHub + Vercel.

## ✅ Pre-Deployment Checklist

### 1. GitHub Setup
- [ ] Create a new GitHub repository
- [ ] Clone the repository locally
- [ ] Copy all files from Figma Make to your local repository
- [ ] Review `.gitignore` to ensure sensitive files are excluded
- [ ] Commit and push to GitHub

### 2. Supabase Setup
- [ ] Create a Supabase account (if you don't have one)
- [ ] Create a new Supabase project
- [ ] Note down your Project ID and anon/public key
- [ ] Create the `beta_signups` table using the SQL in README.md
- [ ] Set up Row Level Security (RLS) policies
- [ ] Test that you can insert/read from the table

### 3. Supabase Edge Function
- [ ] Install Supabase CLI: `npm install -g supabase`
- [ ] Login: `supabase login`
- [ ] Link project: `supabase link --project-ref YOUR_PROJECT_ID`
- [ ] Deploy function: `supabase functions deploy make-server-18b870a9`
- [ ] Test the function endpoint in your browser or Postman

### 4. Update Configuration Files
- [ ] Update `/utils/supabase/info.tsx` with your Supabase credentials (or better: use env vars)
- [ ] Create `.env` file (copy from `.env.example`)
- [ ] Add your Supabase credentials to `.env`
- [ ] Update social media links (X/Twitter handle) in:
  - [ ] `/components/BetaSignup.tsx`
  - [ ] `/components/Footer.tsx`

### 5. Local Testing
- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Test all sections load correctly
- [ ] Test beta signup form submission
- [ ] Test admin dashboard at `#/admin`
- [ ] Test signup counter appears
- [ ] Test dark mode toggle
- [ ] Test scroll animations
- [ ] Test on mobile/responsive views

### 6. Vercel Deployment
- [ ] Create Vercel account (if needed)
- [ ] Connect your GitHub repository to Vercel
- [ ] Configure environment variables in Vercel:
  - [ ] `VITE_SUPABASE_PROJECT_ID`
  - [ ] `VITE_SUPABASE_ANON_KEY`
- [ ] Set Framework Preset to "Vite"
- [ ] Deploy!

### 7. Post-Deployment Testing
- [ ] Visit your deployed URL
- [ ] Test all functionality again on production
- [ ] Submit a test signup and verify it appears in Supabase
- [ ] Check admin dashboard works
- [ ] Test on multiple devices/browsers
- [ ] Check analytics/monitoring (optional)

## 📋 Files That Need Your Attention

### Must Update:
1. **`/utils/supabase/info.tsx`** - Replace with your Supabase credentials
2. **`.env`** - Create from `.env.example` and add your keys
3. **`/components/BetaSignup.tsx`** - Update X/Twitter URL (line ~80)
4. **`/components/Footer.tsx`** - Update X/Twitter URL

### Optional Updates:
- **`/components/Hero.tsx`** - Update copy/messaging
- **`/components/FAQ.tsx`** - Add/modify FAQs
- **`/components/Footer.tsx`** - Update links, add privacy policy, etc.

## 🔧 Common Issues & Solutions

### Issue: Build fails on Vercel
**Solution:** 
- Check that all dependencies are in `package.json`
- Verify TypeScript types are correct
- Check build logs for specific errors

### Issue: Signup form doesn't work
**Solution:**
- Verify Supabase credentials in Vercel environment variables
- Check Supabase table exists and has correct schema
- Check RLS policies allow inserts
- Check browser console for errors

### Issue: Signup counter doesn't appear
**Solution:**
- Verify edge function is deployed
- Check function name matches in code
- Test function URL directly in browser
- Check browser console for errors

### Issue: Styles look broken
**Solution:**
- Verify `styles/globals.css` is imported in `main.tsx`
- Check Tailwind CSS is configured correctly
- Clear browser cache

## 🎯 Performance Optimization (Post-Launch)

- [ ] Set up domain (if using custom domain)
- [ ] Configure CDN for assets
- [ ] Add Open Graph meta tags for social sharing
- [ ] Set up analytics (Google Analytics, Plausible, etc.)
- [ ] Add Sentry or error tracking
- [ ] Optimize images (if any added)
- [ ] Test Core Web Vitals

## 🔐 Security Checklist

- [ ] Verify `.env` is in `.gitignore`
- [ ] Never commit Supabase keys to git
- [ ] Review RLS policies for production
- [ ] Set up proper CORS if needed
- [ ] Consider rate limiting for signup form
- [ ] Review Vercel security headers in `vercel.json`

## 📱 Social Media

Before launch, prepare:
- [ ] X/Twitter announcement post
- [ ] Screenshots for social media
- [ ] Product Hunt launch (optional)
- [ ] Discord/Telegram community links (if applicable)

## 🎉 Launch!

Once everything is checked:
- [ ] Announce on social media
- [ ] Share with early adopters
- [ ] Monitor signups and errors
- [ ] Collect feedback

---

**Need help?** Check the README.md for detailed setup instructions.
