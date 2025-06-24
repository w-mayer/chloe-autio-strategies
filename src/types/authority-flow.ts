export interface AuthorityFlowConfig {
  // Animation settings
  wordDelay?: number;
  animationDuration?: number;
  elasticOvershoot?: boolean;
  cubicBezier?: string;
  
  // Visual effects
  enableUnderline?: boolean;
  enableDot?: boolean;
  enableHighlight?: boolean;
  underlineDelay?: number;
  gradientColors?: string[];
  gradientDuration?: number;
  
  // Scroll interactions
  enableParallax?: boolean;
  enableProgress?: boolean;
  enableColorShift?: boolean;
  parallaxSpeed?: number;
  progressThreshold?: number;
  colorShiftIntensity?: number;
  
  // Responsive behavior
  mobileSimplified?: boolean;
  respectReducedMotion?: boolean;
  maxWordCount?: number;
  
  // Performance
  useIntersectionObserver?: boolean;
  throttleScroll?: boolean;
  debounceResize?: boolean;
}

export interface AuthorityFlowState {
  isVisible: boolean;
  isAnimating: boolean;
  progressWidth: number;
  parallaxOffset: number;
  underlineComplete: boolean;
  currentWordIndex: number;
  scrollDepth: number;
}

export interface AuthorityFlowRefs {
  container: React.RefObject<HTMLDivElement>;
  words: React.RefObject<HTMLSpanElement>[];
  underline: React.RefObject<HTMLDivElement>;
  dot: React.RefObject<HTMLDivElement>;
  highlight: React.RefObject<HTMLDivElement>;
  progress: React.RefObject<HTMLDivElement>;
}

export interface WordElement {
  word: string;
  index: number;
  className: string;
  style: React.CSSProperties;
  ref?: React.RefObject<HTMLSpanElement>;
}

export interface AuthorityFlowEvents {
  onAnimationStart?: () => void;
  onWordAnimate?: (wordIndex: number, word: string) => void;
  onUnderlineComplete?: () => void;
  onAnimationComplete?: () => void;
  onVisibilityChange?: (isVisible: boolean) => void;
  onScrollProgress?: (progress: number) => void;
}

export interface AuthorityFlowTheme {
  // Colors
  textColor: string;
  underlineColor: string;
  dotColor: string;
  highlightColor: string;
  progressColor: string;
  
  // Gradients
  underlineGradient: string[];
  highlightGradient: string[];
  progressGradient: string[];
  
  // Typography
  fontFamily: string;
  fontWeight: number;
  lineHeight: number;
  
  // Spacing
  wordSpacing: string;
  underlineSpacing: string;
  dotSpacing: string;
  
  // Sizes
  underlineHeight: string;
  dotSize: string;
  progressHeight: string;
}

export interface AuthorityFlowBreakpoints {
  mobile: number;
  tablet: number;
  desktop: number;
  large: number;
}

export interface AuthorityFlowPerformance {
  // Animation performance
  useTransform3d: boolean;
  willChange: string;
  backfaceVisibility: string;
  
  // Scroll performance
  passiveListeners: boolean;
  throttleInterval: number;
  debounceDelay: number;
  
  // Memory management
  cleanupOnUnmount: boolean;
  removeEventListeners: boolean;
  clearTimeouts: boolean;
}

// Default configurations
export const DEFAULT_AUTHORITY_FLOW_CONFIG: AuthorityFlowConfig = {
  wordDelay: 0.1,
  animationDuration: 0.8,
  elasticOvershoot: true,
  cubicBezier: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  
  enableUnderline: true,
  enableDot: true,
  enableHighlight: true,
  underlineDelay: 0.3,
  gradientColors: ['#3B82F6', '#14B8A6', '#3B82F6'],
  gradientDuration: 3,
  
  enableParallax: true,
  enableProgress: true,
  enableColorShift: true,
  parallaxSpeed: 0.3,
  progressThreshold: 0.3,
  colorShiftIntensity: 0.1,
  
  mobileSimplified: true,
  respectReducedMotion: true,
  maxWordCount: 10,
  
  useIntersectionObserver: true,
  throttleScroll: true,
  debounceResize: true,
};

export const DEFAULT_AUTHORITY_FLOW_THEME: AuthorityFlowTheme = {
  textColor: '#434344',
  underlineColor: '#14B8A6',
  dotColor: '#14B8A6',
  highlightColor: 'rgba(111, 156, 59, 0.1)',
  progressColor: '#3B82F6',
  
  underlineGradient: ['#3B82F6', '#14B8A6', '#3B82F6'],
  highlightGradient: ['rgba(111, 156, 59, 0.1)', 'rgba(20, 184, 166, 0.1)'],
  progressGradient: ['#3B82F6', '#14B8A6'],
  
  fontFamily: 'DM Sans, Arial, Helvetica, sans-serif',
  fontWeight: 700,
  lineHeight: 1.2,
  
  wordSpacing: '0.2em',
  underlineSpacing: '8px',
  dotSpacing: '10px',
  
  underlineHeight: '3px',
  dotSize: '6px',
  progressHeight: '2px',
};

export const DEFAULT_AUTHORITY_FLOW_BREAKPOINTS: AuthorityFlowBreakpoints = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
  large: 1536,
};

export const DEFAULT_AUTHORITY_FLOW_PERFORMANCE: AuthorityFlowPerformance = {
  useTransform3d: true,
  willChange: 'transform, opacity',
  backfaceVisibility: 'hidden',
  
  passiveListeners: true,
  throttleInterval: 16,
  debounceDelay: 150,
  
  cleanupOnUnmount: true,
  removeEventListeners: true,
  clearTimeouts: true,
}; 