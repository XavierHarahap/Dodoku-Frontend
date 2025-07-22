# DODOKU GMIM Design System

## Color Palette

### Primary Colors
- **Primary Color**: `#9A3DAB` - Main brand color, used for buttons, links, and primary elements
- **Secondary Color**: `#EAE7ED` - Background color for sections and subtle elements
- **Tertiary Color**: `#5D1F64` - Darker accent color for depth and contrast

### Gradient Colors
- **Gradient Start**: `#9A3DAB` - Beginning of gradient overlays
- **Gradient End**: `#28142B` - End of gradient overlays

### Neutral Colors
- **Black**: `#1A1A1A` - Primary text color
- **White**: `#FFFFFF` - Background and contrast color

## Typography

### Font Family
- **Primary Font**: Commissioner - Modern, clean sans-serif font
- **Fallback**: System fonts (ui-sans-serif, system-ui, sans-serif)

### Font Usage
```css
font-commissioner    /* Uses Commissioner font specifically */
font-sans           /* Uses Commissioner as default sans-serif */
```

### Typography Scale
- **Heading XL**: 4xl (36px) / 6xl (60px) on desktop - Hero titles
- **Heading LG**: 2xl (24px) / 3xl (30px) on desktop - Section titles  
- **Heading MD**: xl (20px) / 2xl (24px) on desktop - Subsection titles
- **Body LG**: lg (18px) / xl (20px) on desktop - Large body text
- **Body Base**: base (16px) - Standard body text
- **Body SM**: sm (14px) - Small body text, captions

## Usage in Code

### Tailwind Classes
```css
/* Primary Colors */
bg-primary         /* Background: #9A3DAB */
text-primary       /* Text: #9A3DAB */
border-primary     /* Border: #9A3DAB */

/* Secondary Colors */
bg-secondary       /* Background: #EAE7ED */
text-secondary     /* Text: #EAE7ED */

/* Tertiary Colors */
bg-tertiary        /* Background: #5D1F64 */
text-tertiary      /* Text: #5D1F64 */

/* Neutral Colors */
bg-neutral-black   /* Background: #1A1A1A */
bg-neutral-white   /* Background: #FFFFFF */
text-neutral-black /* Text: #1A1A1A */
text-neutral-white /* Text: #FFFFFF */

/* Gradients */
bg-gradient-primary /* Linear gradient from primary to dark */
```

### Direct Style Usage
```css
style={{backgroundColor: '#9A3DAB'}}  /* Primary */
style={{backgroundColor: '#EAE7ED'}}  /* Secondary */
style={{backgroundColor: '#5D1F64'}}  /* Tertiary */
style={{color: '#9A3DAB'}}           /* Primary text */
```

## Component Guidelines

### Buttons
- **Primary Button**: `bg-primary` with white text
- **Secondary Button**: `bg-secondary` with primary text
- **Hover States**: Reduce opacity to 90% or use tertiary color

### Cards
- **Background**: `bg-neutral-white` with subtle shadow
- **Border**: Optional light gray border
- **Text**: `text-neutral-black` for primary text, gray variants for secondary

### Navigation
- **Background**: `bg-primary`
- **Text**: `text-neutral-white`
- **Hover**: Reduced opacity or secondary color

### Sections
- **Alternate Backgrounds**: Use `bg-secondary` for content sections
- **Hero Sections**: Use gradient overlays with hero-pattern 