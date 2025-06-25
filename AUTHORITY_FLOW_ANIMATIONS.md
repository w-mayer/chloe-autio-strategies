# Authority Flow Animation System

A sophisticated CSS and React animation system for main headings that creates an authoritative, engaging user experience through dynamic text reveals, scroll interactions, and visual effects.

## Features

### 🎯 Text Reveal Animations
- **Word-by-word staggered reveal** with 100ms intervals
- **Elastic overshoot** using cubic-bezier(0.68, -0.55, 0.265, 1.55)
- **Opacity fade-in** synchronized with position animation
- **Dynamic timing** based on text length (0.8s per word, capped at 2.5s)

### 🎨 Visual Accent Elements
- **Animated underline** drawing from left to right
- **Flowing gradient** (blue → teal → blue) with 3s cycle
- **Floating dot** that follows the underline end
- **Background highlight** expanding behind key words

### 📜 Scroll Interactions
- **Parallax movement** (30% slower than normal scroll)
- **Reading progress indicator** tracking scroll position
- **Color shift** based on scroll depth (darker as you scroll down)
- **Intersection Observer** for performance optimization

### 📱 Responsive Behavior
- **Mobile optimization** with simplified animations
- **Reduced motion support** for accessibility
- **Dynamic timing** scaling with text length
- **Breakpoint-aware** responsive design

## Installation

The Authority Flow system is already integrated into your project. The following files have been created:

```
src/
├── app/
│   └── globals.css (Authority Flow CSS animations)
├── components/
│   └── ui/
│       └── AuthorityHeading.tsx (React component)
├── lib/
│   └── hooks/
│       └── useAuthorityFlow.ts (Custom hook)
└── types/
    └── authority-flow.ts (TypeScript definitions)
```

## Usage

### Basic Usage

```tsx
import AuthorityHeading from '@/components/ui/AuthorityHeading';

function MyPage() {
  return (
    <div>
      <AuthorityHeading size="h1" className="text-6xl">
        Strategic Leadership Solutions
      </AuthorityHeading>
    </div>
  );
}
```

### Advanced Configuration

```tsx
import AuthorityHeading from '@/components/ui/AuthorityHeading';

function MyPage() {
  return (
    <div>
      <AuthorityHeading 
        size="h2"
        className="text-4xl mb-8"
        enableParallax={true}
        enableProgress={true}
        enableHighlight={true}
      >
        Transform Your Business
      </AuthorityHeading>
    </div>
  );
}
```

### Using the Custom Hook

```tsx
import { useAuthorityFlow } from '@/lib/hooks/useAuthorityFlow';

function CustomHeading({ children }: { children: string }) {
  const {
    ref,
    isVisible,
    progressWidth,
    parallaxOffset,
    underlineComplete,
    triggerAnimation,
    resetAnimation
  } = useAuthorityFlow({
    enableParallax: true,
    enableProgress: true,
    enableHighlight: true,
    parallaxSpeed: 0.3,
    progressThreshold: 0.3
  });

  return (
    <div
      ref={ref}
      className={`authority-heading ${underlineComplete ? 'underline-complete' : ''}`}
      style={{
        transform: `translateY(${parallaxOffset}px)`
      }}
    >
      <div 
        className="authority-heading-progress"
        style={{ width: `${progressWidth}%` }}
      />
      <div className="authority-heading-highlight" />
      <h1 className="authority-heading-words">
        {children.split(' ').map((word, index) => (
          <span
            key={index}
            className={`authority-heading-word authority-heading-word-${index}`}
            style={{
              animationDelay: isVisible ? `${index * 0.1}s` : '0s'
            }}
          >
            {word}
          </span>
        ))}
      </h1>
    </div>
  );
}
```

## CSS Classes

### Core Classes

- `.authority-heading` - Main container
- `.authority-heading-words` - Word container
- `.authority-heading-word` - Individual word elements
- `.authority-heading-progress` - Progress indicator
- `.authority-heading-highlight` - Background highlight

### State Classes

- `.underline-complete` - Applied when underline animation finishes
- `.authority-heading-word-{index}` - Dynamic classes for word timing

### Animation Keyframes

- `@keyframes authorityWordSlide` - Word entrance animation
- `@keyframes authorityUnderlineDraw` - Underline drawing
- `@keyframes authorityGradientFlow` - Gradient flow
- `@keyframes authorityDotFloat` - Dot floating animation
- `@keyframes authorityHighlightExpand` - Background highlight
- `@keyframes authorityParallax` - Parallax movement
- `@keyframes authorityColorShift` - Color shift effect

## Configuration Options

### AuthorityHeading Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `string` | - | The heading text |
| `className` | `string` | `''` | Additional CSS classes |
| `size` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | `'h1'` | HTML heading tag |
| `enableParallax` | `boolean` | `true` | Enable parallax effect |
| `enableProgress` | `boolean` | `true` | Enable progress indicator |
| `enableHighlight` | `boolean` | `true` | Enable background highlight |

### useAuthorityFlow Hook Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `enableParallax` | `boolean` | `true` | Enable parallax scrolling |
| `enableProgress` | `boolean` | `true` | Enable progress tracking |
| `enableHighlight` | `boolean` | `true` | Enable background highlight |
| `enableColorShift` | `boolean` | `true` | Enable color shift on scroll |
| `parallaxSpeed` | `number` | `0.3` | Parallax movement speed |
| `progressThreshold` | `number` | `0.3` | Intersection observer threshold |

## Animation Timing

### Word Animation
- **Duration**: 0.8s per word
- **Delay**: 0.1s between words
- **Easing**: cubic-bezier(0.68, -0.55, 0.265, 1.55)
- **Max Duration**: 2.5s (capped for performance)

### Underline Animation
- **Start Delay**: 0.3s after text completion
- **Duration**: 0.6s
- **Gradient Cycle**: 3s infinite

### Dot Animation
- **Start Delay**: 0.3s after underline
- **Duration**: 2s infinite
- **Movement**: Vertical float with scale

## Responsive Behavior

### Mobile (< 768px)
- Simplified fade-in animation
- Disabled complex effects
- Reduced timing
- Hidden accent elements

### Tablet (768px - 1024px)
- Full animation support
- Optimized performance
- Maintained visual effects

### Desktop (> 1024px)
- Full feature set
- Maximum performance
- All visual effects enabled

## Accessibility

### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
  .authority-heading-word {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
```

### Screen Reader Support
- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels when needed
- Keyboard navigation support

## Performance Optimizations

### CSS Optimizations
- Hardware-accelerated transforms
- Efficient keyframe animations
- Minimal repaints
- Optimized selectors

### JavaScript Optimizations
- Intersection Observer for visibility
- Throttled scroll handlers
- Debounced resize events
- Memory leak prevention
- Cleanup on unmount

### Browser Support
- Modern browsers (Chrome 60+, Firefox 55+, Safari 12+)
- Graceful degradation for older browsers
- Progressive enhancement approach

## Demo Page

Visit `/authority-demo` to see the Authority Flow animations in action with various examples and configurations.

## Customization

### Theme Customization
```css
:root {
  --authority-text-color: #434344;
  --authority-underline-color: #14B8A6;
  --authority-dot-color: #14B8A6;
  --authority-highlight-color: rgba(111, 156, 59, 0.1);
  --authority-progress-color: #3B82F6;
}
```

### Animation Customization
```css
.authority-heading-word {
  animation-duration: 1s;
  animation-delay: 0.15s;
  animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

## Troubleshooting

### Common Issues

1. **Animations not triggering**
   - Check Intersection Observer support
   - Verify element visibility
   - Ensure proper CSS loading

2. **Performance issues**
   - Reduce word count
   - Disable unnecessary features
   - Check for conflicting animations

3. **Mobile issues**
   - Verify responsive breakpoints
   - Check simplified animation mode
   - Test on actual devices

### Debug Mode
```tsx
<AuthorityHeading 
  size="h1"
  className="debug-mode"
  enableParallax={false}
  enableProgress={false}
  enableHighlight={false}
>
  Debug Heading
</AuthorityHeading>
```

## Browser Compatibility

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 60+ | ✅ Full |
| Firefox | 55+ | ✅ Full |
| Safari | 12+ | ✅ Full |
| Edge | 79+ | ✅ Full |
| IE | 11 | ⚠️ Limited |

## License

This animation system is part of the Chloe Autio Strategies project and follows the same licensing terms.

## Contributing

When contributing to the Authority Flow system:

1. Maintain accessibility standards
2. Test across different devices
3. Ensure performance optimization
4. Follow TypeScript best practices
5. Update documentation accordingly

---

For more information, see the demo page at `/authority-demo` or contact the development team. 