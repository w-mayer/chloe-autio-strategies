# Service Card Animations - Hover Emphasis Style

This document describes the updated CSS animation system implemented for service cards across the Chloe Autio Strategies website.

## Overview

The "Hover Emphasis" animation style creates a sophisticated, engaging user experience with smooth hover effects that emphasize and enlarge cards when users interact with them, replacing the previous continuous floating animations.

## Animation Features

### 1. Entrance Animation
- **Initial State**: Cards start 40px below viewport with `opacity: 0` and `scale(0.92)`
- **Final State**: Animate to final position with smooth wave-like timing curve
- **Duration**: 1.2s with `cubic-bezier(0.34, 1.56, 0.64, 1)` for confident bounce
- **Staggered Delays**: First card 0ms, subsequent cards +150ms each
- **Wake Effect**: Thin blue line that follows the card upward during entrance

### 2. Hover State - Emphasis and Enlargement
- **Lift Effect**: `translateY(-12px)` and `scale(1.05)` in 0.4s
- **Enhanced Shadow**: `0 20px 40px rgba(0,0,0,0.15)`
- **Z-Index Boost**: Cards rise above others with `z-index: 10`
- **Accent Color Flow**: Flows from left to right across card border (2s animation, runs once)
- **Icon/Number Pulse**: Subtle pulse on any icons or numbers inside the card (1s animation, runs once)
- **Effect Persistence**: Hover effects stay active until mouse moves away

### 3. Interaction Details
- **Corner Radius**: Increases from 12px to 16px on hover
- **Background Gradient**: Shifts 15 degrees clockwise
- **Ripple Effect**: Expanding circle from click point
- **Statistics Counter**: Animate on first viewport entry

## CSS Classes

### Base Classes
- `.service-card` - Base card styling with gradient background and transitions
- `.service-card-entrance` - Entrance animation with staggered delays
- `.service-card-ripple` - Ripple effect on click

### Utility Classes
- `.service-card-icon` - Applies pulse animation to icons on hover
- `.service-card-number` - Applies pulse animation to numbers/statistics on hover

## Usage Examples

### Basic Service Card
```jsx
<div className="service-card service-card-entrance">
  <div className="relative h-full flex flex-col justify-between">
    <div>
      <h3 className="text-xl font-semibold text-primary mb-2 service-card-icon">
        Service Title
      </h3>
      <p className="text-gray text-base mb-4 body-text">
        Service description
      </p>
    </div>
    <Link className="service-card-number">
      Learn More
    </Link>
  </div>
</div>
```

### With Ripple Effect
```jsx
function ServiceCard({ service, index }) {
  const cardRef = useRef(null);

  const handleClick = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const ripple = document.createElement('div');
    ripple.className = 'service-card-ripple';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    
    cardRef.current.appendChild(ripple);
    
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 600);
  };

  return (
    <div
      className="service-card service-card-entrance"
      style={{ animationDelay: `${index * 150}ms` }}
      onClick={handleClick}
    >
      <div ref={cardRef} className="relative h-full flex flex-col justify-between">
        {/* Card content */}
      </div>
    </div>
  );
}
```

## Tailwind Utilities

The following Tailwind utilities are available:

### Animations
- `animate-service-card-entrance` - Entrance animation
- `animate-service-card-wake` - Wake effect
- `animate-service-card-accent-flow` - Accent flow animation (runs once)
- `animate-service-card-pulse` - Pulse animation (runs once)
- `animate-service-card-ripple` - Ripple effect

### Shadows
- `shadow-service-card` - Service card hover shadow

### Timing Functions
- `ease-confident-bounce` - Confident bounce timing function

## Accessibility

### Reduced Motion Support
The animations automatically respect the user's `prefers-reduced-motion` setting:

```css
@media (prefers-reduced-motion: reduce) {
  .service-card-entrance {
    animation: none;
    opacity: 1;
    transform: none;
  }
  
  .service-card:hover {
    transform: translateY(-4px) scale(1.01);
  }
  
  .service-card::before,
  .service-card::after {
    display: none;
  }
}
```

### Focus States
Cards maintain proper focus states for keyboard navigation.

## Dark Mode Support

All animations work seamlessly in both light and dark modes with appropriate color adjustments:

```css
.dark .service-card {
  background: linear-gradient(135deg, #434344 0%, #455D6A 100%);
  border-color: #AAC1BF;
  color: #E1DBA7;
}
```

## Performance Considerations

- Animations use `transform` and `opacity` for optimal performance
- Hardware acceleration is enabled via `will-change` properties
- Animations are optimized for 60fps performance
- Reduced motion support prevents unnecessary animations
- Hover effects are CSS-only for better performance

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- Graceful degradation for older browsers
- Progressive enhancement approach

## Customization

### Modifying Animation Timing
```css
.service-card-entrance {
  animation: serviceCardEntrance 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
```

### Adjusting Stagger Delays
```css
.service-card-entrance:nth-child(1) { animation-delay: 0ms; }
.service-card-entrance:nth-child(2) { animation-delay: 150ms; }
.service-card-entrance:nth-child(3) { animation-delay: 300ms; }
```

### Custom Colors
```css
.service-card::before {
  background: linear-gradient(90deg, transparent, #your-color, transparent);
}
```

### Adjusting Hover Effects
```css
.service-card:hover {
  transform: translateY(-12px) scale(1.05);
  z-index: 10;
}
```

## Implementation Notes

1. **Intersection Observer**: Cards animate when they enter the viewport
2. **Event Handling**: Click events are properly managed with stopPropagation
3. **Memory Management**: Ripple effects are automatically cleaned up
4. **Responsive Design**: Animations work across all screen sizes
5. **SEO Friendly**: No impact on search engine optimization
6. **Hover Persistence**: Effects stay active until mouse moves away

## Troubleshooting

### Common Issues

1. **Animations not triggering**: Check if `prefers-reduced-motion` is enabled
2. **Performance issues**: Ensure hardware acceleration is available
3. **Layout shifts**: Verify proper container sizing
4. **Z-index conflicts**: Check for overlapping elements
5. **Hover not working**: Ensure pointer events are enabled

### Debug Mode
Add `debug` class to see animation boundaries:
```css
.service-card.debug {
  outline: 2px solid red;
}
```

## Migration from Previous Version

### Changes Made
- Removed continuous floating animation (`service-card-float`)
- Removed `service-card-idle` class usage
- Enhanced hover effects with larger scale (1.05 vs 1.03)
- Added z-index boost on hover for better layering
- Simplified animation system for better performance

### Code Updates Required
- Remove `service-card-idle` class from all card components
- Update documentation and examples
- Test hover interactions across different devices 