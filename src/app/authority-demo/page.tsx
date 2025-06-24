import AuthorityHeading from '@/components/ui/AuthorityHeading';

export default function AuthorityDemoPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Hero Section */}
        <section className="text-center py-20">
          <AuthorityHeading 
            size="h1" 
            className="text-6xl mb-8"
            enableParallax={true}
            enableProgress={false}
            enableHighlight={true}
          >
            Authority Flow Animations
          </AuthorityHeading>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the power of dynamic text animations that command attention and establish authority.
          </p>
        </section>

        {/* Different Heading Sizes */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold mb-8">Heading Variations</h2>
          
          <div className="space-y-8">
            <AuthorityHeading size="h1" className="text-5xl">
              Strategic Leadership Solutions
            </AuthorityHeading>
            
            <AuthorityHeading size="h2" className="text-4xl">
              Transform Your Business
            </AuthorityHeading>
            
            <AuthorityHeading size="h3" className="text-3xl">
              Innovative Approaches
            </AuthorityHeading>
            
            <AuthorityHeading size="h4" className="text-2xl">
              Proven Results
            </AuthorityHeading>
          </div>
        </section>

        {/* Feature Demonstrations */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold mb-8">Feature Demonstrations</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Parallax Only */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Parallax Effect</h3>
              <AuthorityHeading 
                size="h3" 
                className="text-2xl"
                enableParallax={true}
                enableProgress={false}
                enableHighlight={false}
              >
                Smooth Parallax Movement
              </AuthorityHeading>
              <p className="text-sm text-muted-foreground mt-2">
                Scroll to see the parallax effect in action
              </p>
            </div>
            
            {/* Progress Only */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Progress Indicator</h3>
              <AuthorityHeading 
                size="h3" 
                className="text-2xl"
                enableParallax={false}
                enableProgress={true}
                enableHighlight={false}
              >
                Reading Progress Track
              </AuthorityHeading>
              <p className="text-sm text-muted-foreground mt-2">
                Shows reading progress as you scroll
              </p>
            </div>
            
            {/* Highlight Only */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Background Highlight</h3>
              <AuthorityHeading 
                size="h3" 
                className="text-2xl"
                enableParallax={false}
                enableProgress={false}
                enableHighlight={true}
              >
                Subtle Background Effect
              </AuthorityHeading>
              <p className="text-sm text-muted-foreground mt-2">
                Gentle background expansion animation
              </p>
            </div>
            
            {/* Minimal */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Minimal Animation</h3>
              <AuthorityHeading 
                size="h3" 
                className="text-2xl"
                enableParallax={false}
                enableProgress={false}
                enableHighlight={false}
              >
                Clean Word-by-Word Reveal
              </AuthorityHeading>
              <p className="text-sm text-muted-foreground mt-2">
                Just the essential text animation
              </p>
            </div>
          </div>
        </section>

        {/* Long Text Examples */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold mb-8">Long Text Examples</h2>
          
          <div className="space-y-8">
            <AuthorityHeading size="h2" className="text-3xl" enableProgress={false}>
              Comprehensive Strategic Planning and Implementation Services
            </AuthorityHeading>
            
            <AuthorityHeading size="h3" className="text-2xl" enableProgress={false}>
              Transformative Business Solutions for Modern Organizations
            </AuthorityHeading>
            
            <AuthorityHeading size="h4" className="text-xl" enableProgress={false}>
              Expert Consulting and Advisory Services
            </AuthorityHeading>
          </div>
        </section>

        {/* Scroll Test Section */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold mb-8">Scroll Interaction Test</h2>
          
          <div className="space-y-48">
            <div className="min-h-[60vh] flex flex-col justify-center">
              <AuthorityHeading size="h2" className="text-3xl mb-8" enableProgress={false}>
                First Scroll Section
              </AuthorityHeading>
              
              <p className="text-lg max-w-2xl">
                Scroll down to see how the headings respond to scroll position. 
                Notice the parallax movement and color shifts as you scroll deeper into the page.
              </p>
            </div>
            
            <div className="min-h-[60vh] flex flex-col justify-center">
              <AuthorityHeading size="h2" className="text-3xl mb-8" enableProgress={false}>
                Second Scroll Section
              </AuthorityHeading>
              
              <p className="text-lg max-w-2xl">
                The progress indicators will show reading progress, and the color 
                will subtly shift as you scroll further down the page.
              </p>
            </div>
            
            <div className="min-h-[60vh] flex flex-col justify-center">
              <AuthorityHeading size="h2" className="text-3xl mb-8" enableProgress={false}>
                Third Scroll Section
              </AuthorityHeading>
              
              <p className="text-lg max-w-2xl">
                Each heading has its own timing and animation sequence, creating 
                a dynamic and engaging reading experience.
              </p>
            </div>
            
            <div className="min-h-[60vh] flex flex-col justify-center">
              <AuthorityHeading size="h2" className="text-3xl mb-8" enableProgress={false}>
                Final Scroll Section
              </AuthorityHeading>
              
              <p className="text-lg max-w-2xl">
                The Authority Flow system creates a sense of progression and 
                authority throughout the content, guiding the reader's attention.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold mb-8">Technical Features</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Animation Features</h3>
              <ul className="space-y-2 text-sm">
                <li>• Word-by-word staggered reveal</li>
                <li>• Elastic overshoot with cubic-bezier</li>
                <li>• Animated gradient underline</li>
                <li>• Floating dot accent element</li>
                <li>• Background highlight expansion</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Scroll Interactions</h3>
              <ul className="space-y-2 text-sm">
                <li>• 30% parallax movement</li>
                <li>• Reading progress indicator</li>
                <li>• Color shift based on scroll depth</li>
                <li>• Intersection Observer triggers</li>
                <li>• Responsive timing adjustments</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Accessibility</h3>
              <ul className="space-y-2 text-sm">
                <li>• Respects prefers-reduced-motion</li>
                <li>• Mobile-optimized animations</li>
                <li>• Semantic HTML structure</li>
                <li>• Keyboard navigation support</li>
                <li>• Screen reader friendly</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Performance</h3>
              <ul className="space-y-2 text-sm">
                <li>• CSS-based animations</li>
                <li>• Efficient scroll handling</li>
                <li>• Dynamic timing calculations</li>
                <li>• Memory leak prevention</li>
                <li>• Optimized re-renders</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 