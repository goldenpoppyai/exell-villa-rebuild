# Villa Du Cacique — Exell Dream Estate

A luxury villa rental landing page showcasing Villa Du Cacique, an exclusive 6-bedroom Mediterranean masterpiece located in Casa de Campo Resort, La Romana, Dominican Republic.

## 🏖️ About Villa Du Cacique

Villa Du Cacique represents the pinnacle of Caribbean luxury living, featuring:

- **6 Master Bedrooms** with en-suite bathrooms
- **9 Luxury Bathrooms** (6 full + 3 half baths)  
- **8,500 sq ft** of living space
- **Infinity Pool** with ocean views
- **Private Gardens** with tropical landscaping
- **World-class Amenities** including fitness center, gourmet kitchen, and more
- **Casa de Campo Location** with access to golf, beaches, and resort amenities

Starting at **$2,500 per night** | Maximum **12 guests**

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Mapbox account (for map integration)

### Installation

1. **Clone and install dependencies:**
   ```bash
   git clone <repository-url>
   cd villa-du-cacique
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   # Copy the example environment file
   cp .env.example .env
   
   # Get your Mapbox token from https://mapbox.com/account/access-tokens
   # Edit .env and replace __PUT_TOKEN_HERE__ with your actual token
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🗺️ Mapbox Setup

**In Lovable Platform:**

1. Go to **Project Settings > Environment Variables**
2. Add a new variable:
   - **Name:** `VITE_MAPBOX_TOKEN`
   - **Value:** Your Mapbox public token from [mapbox.com](https://mapbox.com/account/access-tokens)

**For Local Development:**

1. Create a `.env` file in your project root
2. Add: `VITE_MAPBOX_TOKEN=your_mapbox_token_here`

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx           # Navigation and branding
│   ├── Hero.tsx            # Main hero section with villa showcase
│   ├── PropertyDetails.tsx  # Property specs and amenities
│   ├── LocationMap.tsx     # Interactive Mapbox integration
│   └── ContactForm.tsx     # Reservation request form
├── assets/
│   ├── villa-hero.jpg      # Main villa exterior image
│   ├── villa-interior.jpg  # Interior living space
│   └── exell-logo.png     # Exell Dream Estate branding
├── pages/
│   └── Index.tsx          # Main landing page
└── index.css              # Design system and luxury styling
```

## 🎨 Design System

The project uses a sophisticated luxury design system with:

- **Typography:** Playfair Display (headings) + Inter (body)
- **Colors:** Rich gold primary (#B8860B) with deep navy secondary  
- **Gradients:** Luxury gold gradients for CTAs and accents
- **Shadows:** Elegant drop shadows with brand color tinting
- **Animations:** Smooth transitions with luxury easing curves

## 🏗️ Built With

- **Vite** - Fast build tool and dev server
- **React 18** - UI library with hooks and modern patterns
- **TypeScript** - Type-safe JavaScript development  
- **Tailwind CSS** - Utility-first CSS framework with custom design tokens
- **shadcn/ui** - High-quality React component library
- **Mapbox GL** - Interactive maps and location visualization
- **Lucide React** - Beautiful icon library

## 🚢 Deployment

### Lovable Platform
1. Click **Publish** in the Lovable editor
2. Add your Mapbox token in Project Settings > Environment Variables
3. Your site will be live at `yourproject.lovable.app`

### Custom Domain
1. Go to **Project > Settings > Domains**  
2. Click **Connect Domain**
3. Follow the DNS configuration steps

## 📞 Contact & Reservations

- **Phone:** +1 (809) 555-0123
- **Email:** reservations@exelldreamestate.com
- **Location:** Cacique 31, Casa de Campo Resort, La Romana, DR

## 📋 Next Steps Checklist

After deployment, ensure you:

- [ ] **Add Mapbox Token** - Required for location map functionality
- [ ] **Test Contact Form** - Verify form submissions work correctly  
- [ ] **Check Mobile Experience** - Test responsive design on various devices
- [ ] **Set Custom Domain** - Configure your branded domain name
- [ ] **Update Contact Info** - Replace placeholder contact details with real information

## 🛡️ Security & Privacy

- No sensitive data stored in client-side code
- Mapbox token is public-safe (restricted to your domain)
- Form data can be integrated with secure backend services
- All images optimized for web delivery

---

**Villa Du Cacique** — Where luxury meets paradise in the heart of Casa de Campo Resort.

*Exell Dream Estate - Your gateway to luxury Caribbean living.*