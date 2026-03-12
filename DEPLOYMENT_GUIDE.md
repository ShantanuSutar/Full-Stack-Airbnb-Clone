# Deployment Guide for Airbnb Clone

## ✅ Fixes Applied

The following issues have been fixed to resolve the deployment error:

1. **Dynamic Server Error** - Fixed `app/page.tsx` to properly handle searchParams in Next.js 14+
2. **Prisma Client Configuration** - Updated `app/libs/prismadb.ts` for better production support
3. **Next.js Config** - Added `serverComponentsExternalPackages` for MongoDB compatibility
4. **Vercel Configuration** - Added function timeout settings

---

## 📋 Pre-Deployment Checklist

### 1. Create Your `.env` File

Copy `.env.example` to `.env` and fill in your values:

```bash
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=https://your-app.vercel.app
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

**Important Notes:**
- For `NEXTAUTH_SECRET`, generate a random string: `openssl rand -base64 32`
- For `NEXTAUTH_URL`, use your Vercel domain (e.g., `https://your-app.vercel.app`)
- Make sure your MongoDB Atlas allows connections from all IPs (0.0.0.0/0)

### 2. MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster if you haven't already
3. Click "Connect" → "Connect your application"
4. Copy the connection string
5. Replace `<password>` with your database user password
6. Replace `dbname` with your preferred database name

### 3. Cloudinary Setup (for Image Uploads)

1. Go to [Cloudinary](https://cloudinary.com/)
2. Sign up for a free account
3. Get your credentials from the dashboard
4. Add them to your `.env` file

---

## 🚀 Deploy to Vercel

### Step 1: Push to Git

```powershell
cd airbnb-clone
git init
git add .
git commit -m "Ready for deployment"
git branch -M main
git remote add origin https://github.com/yourusername/airbnb-clone.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"New Project"**
3. Import your GitHub repository
4. **Configure Project**:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `airbnb-clone`
   - Build Command: `prisma generate && next build`
   - Output Directory: `.next` (default)

5. **Add Environment Variables** (click "Environment Variables"):
   - `DATABASE_URL`
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL`
   - `CLOUDINARY_CLOUD_NAME`
   - `CLOUDINARY_API_KEY`
   - `CLOUDINARY_API_SECRET`

6. Click **"Deploy"**

### Step 3: Update NEXTAUTH_URL

After deployment:
1. Copy your Vercel app URL (e.g., `https://your-app.vercel.app`)
2. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
3. Update `NEXTAUTH_URL` to your production URL
4. Redeploy (or wait for auto-redeploy)

---

## 🔧 Alternative Deployment Options

### Railway

1. Go to [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Add environment variables
5. Railway will auto-detect Next.js and deploy

### Render

1. Go to [render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect your repository
4. Configure:
   - Build Command: `npm install && prisma generate && npm run build`
   - Start Command: `npm start`
5. Add environment variables
6. Deploy

### Docker (Advanced)

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx prisma generate
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Then deploy to any Docker-supported platform.

---

## 🐛 Troubleshooting

### Error: "Dynamic server usage"
✅ Already fixed in `app/page.tsx`

### Error: "MongoDB connection failed"
- Check your `DATABASE_URL` is correct
- Ensure MongoDB Atlas allows connections from all IPs
- Verify your database user has proper permissions

### Error: "NextAuth configuration failed"
- Generate a new `NEXTAUTH_SECRET`
- Make sure `NEXTAUTH_URL` matches your deployment URL exactly

### Error: "Prisma Client not generated"
- Run `npx prisma generate` before building
- The build command already includes this: `prisma generate && next build`

---

## 📝 Post-Deployment

1. **Test Authentication**: Try signing up and logging in
2. **Test Image Uploads**: Create a listing with images
3. **Test Database**: Verify listings are saved to MongoDB
4. **Update Production URL**: Remember to update `NEXTAUTH_URL` after first deploy

---

## 🎯 Quick Deploy Commands

```powershell
# Navigate to project
cd airbnb-clone

# Install dependencies
npm install

# Generate Prisma Client
npx prisma generate

# Test locally
npm run dev

# Build for production
npm run build

# Run production build
npm start
```

---

## 📞 Support

If you encounter issues:
1. Check Vercel Functions logs for errors
2. Verify all environment variables are set correctly
3. Ensure MongoDB Atlas network access allows all IPs
4. Check that `prisma generate` runs successfully

Good luck with your deployment! 🚀
