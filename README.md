# Mohamed El Khamlichi - Portfolio Website

A highly creative and visually stunning portfolio website featuring cutting-edge animations, 3D elements, smooth scrolling effects, and exceptional UI/UX design.

## 🌟 Features

### Visual Effects
- **3D Particle System**: Interactive Three.js particle background that responds to mouse movement
- **Animated Gradient Background**: Smooth, shifting gradient backgrounds
- **Glassmorphism & Neumorphism**: Modern design trends with glass-like and soft UI elements
- **Custom Cursor**: Magnetic cursor effect that follows and interacts with elements
- **Glitch Effects**: Dynamic text glitch animations on the hero section

### Animations
- **Scroll-Triggered Animations**: Elements animate into view as you scroll
- **Stagger Animations**: Sequential animation delays for smooth reveals
- **Counter Animations**: Smooth counting animations for statistics
- **Progress Circles**: Animated circular progress indicators for skills
- **Card Flip Animations**: 3D flip effects on project cards
- **Ripple Effects**: Material Design-inspired button interactions
- **Floating Elements**: Subtle levitating animations throughout

### Interactive Elements
- **Dark/Light Theme Toggle**: Smooth theme switching with preference saving
- **Hamburger Menu**: Morphing navigation menu for mobile devices
- **Magnetic Buttons**: Buttons that attract the cursor on hover
- **Form Validation**: Real-time form validation with visual feedback
- **Horizontal Scrolling**: Smooth horizontal project showcase

### Sections
1. **Hero Section**: Eye-catching introduction with 3D background and animated stats
2. **About Section**: Personal introduction with glassmorphic cards
3. **Skills Section**: Interactive skill visualization with circular and linear progress bars
4. **Projects Section**: Horizontal scrolling showcase with flip card effects
5. **Contact Section**: Professional contact form with validation
6. **Footer**: Enhanced footer with quick links and social media

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Advanced animations, transforms, and modern design patterns
- **JavaScript**: Vanilla JS with modern ES6+ features
- **Three.js**: 3D graphics and particle system
- **Tailwind CSS**: Utility-first CSS framework
- **Font Awesome**: Icon library
- **SweetAlert2**: Beautiful alert dialogs
- **Supabase**: Backend for contact form submissions

## 📁 Project Structure

```
Portfolio/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Custom styles and animations
├── js/
│   └── main.js            # JavaScript functionality
├── DOJODEV/               # DOJODEV project subfolder
├── SECURITY.md            # Security analysis documentation
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- HTTP server for local development (optional)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/m0hamed-ux/Portfolio.git
   cd Portfolio
   ```

2. **Start a local server**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Or using Node.js
   npx http-server -p 8000
   ```

3. **Open in browser**
   Navigate to `http://localhost:8000`

### Deployment

The website is static and can be deployed to any hosting service:
- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront

## ⚡ Performance Optimizations

- **GPU Acceleration**: CSS transforms and opacity for smooth animations
- **Intersection Observer**: Efficient scroll-triggered animations
- **Mobile Optimization**: Reduced particle count on mobile devices
- **Lazy Loading**: Resources loaded as needed
- **Debounced Events**: Optimized scroll and resize handlers
- **Graceful Degradation**: Fallbacks when features are unavailable

## 🎨 Customization

### Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary: #A0FF00;    /* Lime Green */
    --secondary: #3B82F6;  /* Blue */
    --dark: #0A0E17;       /* Dark Background */
    --card: #1C202B;       /* Card Background */
}
```

### Animations
Adjust animation parameters in `js/main.js`:
```javascript
const PARTICLES_COUNT = 500;           // Desktop particle count
const PARTICLES_COUNT_MOBILE = 200;    // Mobile particle count
const COUNTER_DURATION_MS = 2000;      // Counter animation duration
```

### Content
Update personal information directly in `index.html`:
- Hero section text
- About section description
- Skills and percentages
- Project details
- Contact information

## 🔒 Security

The website follows security best practices:
- Cross-origin attributes on CDN resources
- Input validation on forms
- No sensitive data in client-side code
- Regular dependency updates

See `SECURITY.md` for detailed security analysis.

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Mohamed El Khamlichi**
- GitHub: [@m0hamed-ux](https://github.com/m0hamed-ux)
- Instagram: [@m0hamed_ux](https://www.instagram.com/m0hamed_ux/)

## 🙏 Acknowledgments

- Three.js community for the amazing 3D library
- Tailwind CSS for the utility-first CSS framework
- Font Awesome for the icon library
- Inspiration from award-winning portfolio websites

## 📝 Changelog

### Version 2.0.0 (Current)
- Added 3D particle system with Three.js
- Implemented custom cursor with magnetic effect
- Added dark/light theme toggle
- Enhanced all sections with modern animations
- Implemented glassmorphism and neumorphism effects
- Added scroll-triggered animations
- Created horizontal scrolling project showcase
- Implemented card flip animations
- Added form validation with visual feedback
- Performance optimizations for mobile devices
- Security enhancements and documentation

### Version 1.0.0
- Initial release with basic portfolio sections
- Simple animations and transitions
- Contact form with Supabase integration

---

Made with ❤️ by Mohamed El Khamlichi
