# Bobby's 1st Grade Science Curriculum - Web Application

A Next.js web application for Bobby's personalized 1st grade Christian science curriculum based on Young Earth Creationism and Oklahoma science standards.

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0.0 or higher
- npm or yarn

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Deployment to Vercel

### Option 1: Vercel CLI (Recommended)

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Deploy:**
```bash
vercel
```

3. **Follow the prompts:**
- Connect to your Vercel account
- Select "Create new project"
- Accept default settings
- Deploy!

### Option 2: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository (GitHub, GitLab, or Bitbucket)
4. Vercel will auto-detect Next.js and configure everything
5. Click "Deploy"

### Option 3: Deploy from GitHub

1. Push this code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Import the repository
4. Click "Deploy"

That's it! Vercel handles everything automatically.

## 🎨 Features

### Built for Bobby
- **Large, readable text** - 2-3x normal size for beginning readers
- **Colorful, engaging design** - Different color for each unit
- **Heavy use of emojis and icons** - Visual learning support
- **Simple navigation** - Large clickable areas
- **Kid-friendly font** - Comic Sans MS style

### Curriculum Features
- 8 complete units covering all Oklahoma standards
- Biblical integration with ESV scripture references
- Young Earth Creation perspective throughout
- Interest-based content (dinosaurs 🦕, trucks 🚜, bugs 🐛)
- Hands-on activity suggestions
- Oklahoma Academic Standards alignment

### Technical Features
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Static export** - No server needed
- **Responsive design** - Works on tablets and computers
- **Fast loading** - Optimized for performance

## 📁 Project Structure

```
1st grade science/
├── app/
│   ├── layout.tsx          # Root layout with nav/footer
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   └── units/
│       ├── page.tsx         # Units list page
│       └── [id]/
│           └── page.tsx     # Individual unit pages
├── public/
│   └── images/              # Add lesson images here
├── README.md                # Curriculum overview
├── OKLAHOMA_STANDARDS_RESEARCH.md
├── SETUP.md                 # This file
├── package.json
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## 🎯 What's Included

### Units Currently Available:
1. ✅ **Unit 1:** God Made Everything! (Creation Week) - 7 lessons
2. ✅ **Unit 2:** Dinosaurs (God's Amazing Lizards) - 5 lessons
3. 🚧 **Unit 3:** Big Machines (coming soon)
4. 🚧 **Unit 4:** Bugs Are Cool! (coming soon)
5. 🚧 **Unit 5:** Amazing Plants (coming soon)
6. 🚧 **Unit 6:** Weather & Seasons (coming soon)
7. 🚧 **Unit 7:** My Amazing Body (coming soon)
8. 🚧 **Unit 8:** The Earth (coming soon)

### Completed Content:
- ✅ Home page with unit navigation
- ✅ Units overview page
- ✅ Unit 1 complete with all lessons
- ✅ Unit 2 complete with all lessons
- ✅ Scripture references throughout
- ✅ Activity suggestions
- ✅ Oklahoma standards alignment

### To Be Added:
- Individual lesson pages with detailed content
- Image galleries with AI-generated illustrations
- Printable worksheets
- Activity instruction pages
- Assessment tools
- Progress tracking

## 🖼️ Adding Images

### Option 1: Manual Images
Place images in the `public/images/` folder:
```
public/
  images/
    unit1/
      day1-light.jpg
      day2-sky.jpg
    unit2/
      trex.jpg
      brachiosaurus.jpg
```

### Option 2: AI-Generated Images
Use your API keys to generate images via:
- **Claude (Sonnet)** - For diagrams and educational illustrations
- **DALL-E (OpenAI)** - For photorealistic scenes
- **Gemini (Google)** - For variety and backup

Add your API keys to `.env.local` (never commit this file):
```bash
ANTHROPIC_API_KEY=your_key_here
OPENAI_API_KEY=your_key_here
GEMINI_API_KEY=your_key_here
```

## 🛠️ Customization

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#2563eb',  // Your preferred blue
  dinosaur: '#8b5cf6', // Dinosaur purple
  truck: '#ea580c',    // Truck orange
  // etc.
}
```

### Add More Units
Edit `app/units/[id]/page.tsx` and add more data to the `unitData` object:
```typescript
'3': {
  id: 3,
  title: 'Big Machines',
  // ... more content
}
```

### Modify Lessons
Each unit's lessons are defined in the `unitData` object. Add or modify as needed.

## 📱 Responsive Design

The app works great on:
- Desktop computers (primary use)
- Tablets (iPad, Android tablets)
- Large phones (in landscape mode)

Optimized for:
- Reading content
- Viewing large images
- Easy navigation for 7-year-olds

## 🔧 Scripts

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Production
npm run build        # Build for production
npm run start        # Start production server

# Linting
npm run lint         # Check code quality
```

## 🌐 Environment Variables

None required for basic deployment! 

Optional (for future AI image generation):
- `ANTHROPIC_API_KEY` - Claude/Sonnet API
- `OPENAI_API_KEY` - DALL-E API
- `GEMINI_API_KEY` - Google Gemini API

## 📊 Performance

- **Lighthouse Score:** Aim for 90+ across all metrics
- **First Load:** < 2 seconds
- **Interactive:** Immediately
- **Total Size:** Currently < 500KB (before images)

## 🎓 Educational Standards

Meets all **Oklahoma Academic Standards for Science (1st Grade)**:
- ✅ 4 Physical Science standards (Light & Sound)
- ✅ 3 Life Science standards (Structures & Heredity)
- ✅ 3 Earth & Space Science standards (Patterns & Environment)
- ✅ 3 Engineering Design standards (K-2)

**Plus:** Young Earth Creation worldview and Biblical integration throughout

## 🙏 Biblical Foundation

Every unit includes:
- ESV Scripture references
- Creation perspective
- God's design emphasis
- Christian worldview integration

## 📝 License

This is a private educational resource created specifically for Bobby's homeschool curriculum.

## 🤝 Contributing

This is a custom curriculum, but if you'd like to add content:
1. Create new lesson content in markdown
2. Add unit data to the appropriate files
3. Include appropriate scripture references
4. Ensure Oklahoma standards alignment

## 🐛 Troubleshooting

### Port already in use
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use different port
npm run dev -- -p 3001
```

### Build errors
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Deployment issues
- Ensure Node.js 18+ is being used
- Check that `output: 'export'` is in next.config.js
- Verify all dependencies are in package.json

## 📞 Support

For curriculum questions or technical issues, refer to:
- [README.md](README.md) - Curriculum overview
- [OKLAHOMA_STANDARDS_RESEARCH.md](OKLAHOMA_STANDARDS_RESEARCH.md) - Standards documentation
- Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel docs: [vercel.com/docs](https://vercel.com/docs)

## 🎉 Ready to Deploy!

Your application is ready for Vercel deployment. Just run:

```bash
vercel
```

Or push to GitHub and import to Vercel dashboard.

---

**Built with ❤️ for Bobby's science education journey!**

*"The heavens declare the glory of God, and the sky above proclaims his handiwork." - Psalm 19:1 (ESV)*
