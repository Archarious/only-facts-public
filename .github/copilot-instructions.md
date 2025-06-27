Always respond in Russian
Break down the solution into small clear steps within <step> tags.
Apply KISS, YAGNI, DRY principles to all solutions that you come up with.
Continuously adjust your reasoning based on intermediate results and reflections, adapting your strategy as you progress.
Regularly evaluate progress using <reflection> tags. Be critical and honest about your reasoning process.
Assign a quality score between 0.0 and 1.0 using <reward> tags after each reflection. Use this to guide your approach:
0.8+: Continue current approach
0.5-0.7: Consider minor adjustments
Below 0.5: Seriously consider backtracking and trying a different approach

If unsure or if reward score is low, backtrack and try a different approach, explaining your decision within <backtrack> tags.
For mathematical problems, show all work explicitly using LaTeX for formal notation and provide detailed proofs.
Explore multiple solutions individually if possible, comparing approaches in reflections.
Use thoughts as a scratchpad, writing out all calculations and reasoning explicitly.
Synthesize the final answer providing a clear, concise summary.
Conclude with a final reflection on the overall solution, discussing effectiveness, challenges, and solutions. Assign a final reward score.

description: This rule provides comprehensive best practices for developing TS NextJS v15+ applications with Tailwind v4+, covering code organization, performance, security, testing, and common pitfalls.

It will be project with personal dashboards for authorithed customers to collect gambling regulation news and analytics from many countries. Data will be collect with Strapi and it is part of another team. We will create frontend dashboard. We will use NextJS, Tailwind, shadcn ui, Recharts, GSAP,  deploy it with Vercel, store at Github. Also animation avaliable libs: motion, animate.js; Also UI libs avaliable: Radux ui, Headless ui. We will have Routing, Pages with Layout and Components: it will documents using Storybook.
You must know about Layout: It will Bento Grid for layouts with components with fixed height. We have mobile grid <600px with 8 flexible-width columns; tablet 600-1024px with 16 flexible-width columns; desktop 1024-1243px with 24 flexible-width columns and for >=1244px it will be 24 fix-width columns left-sided at window. When window width <1024px left menu hide and can be slide from left side with width of 6 fixed-width column; >=1024px menu will fixed left position.

Components named Tiles. Titles have fixed heights: 72px, 152px, 232px, 312px, 392px, 472px, 552px, 632px, 712px;
It content into Tile don have enough place to show it will be overflow horizontally to the left and can be scrollable. DO NOT RESIZE Tile if content overflow! Tile Radius 20px; Padding 32px; Gap 8px
I work with WSL2 at Windows 11 with Ubuntu 22.04.5 LTS + Docker + Visual Studio Code + Github Copilot

Latest versions:
Node.js - 24.1.0
Ubuntu - 24
next.js - 15.3.3
tailwind - 4.1.8
shadcn-ui - 2.6.0
recharts - 2.15.3
GSAP - 3.13.0
motion - 12.15.1
react-spring - 10.0.1
animate.js - 4.0.2
storybook - 9.0.4

1. Code Organization and Structure
- Directory Structure: Clearly organized by features/pages, separate components, utils, hooks, and services.
- File Naming Conventions: PascalCase for components, kebab-case for utilities and folders.
- Modules Organization: Feature-based modules to encapsulate related logic.
- Code Splitting: Lazy load modules with dynamic imports in Next.js.

2. Common Patterns and Anti-patterns
- Design Patterns: Component composition, hooks for stateful logic.
- Recommended Approaches: Stateless functional components, separation of concerns, reusable hooks.
- Anti-patterns: Avoid excessive prop drilling, mutable state.
- State Management: Prefer local state or React Context API over complex libraries unless essential.
- Error Handling Patterns: Use boundary components to gracefully handle errors.

3. Performance Considerations
- Optimization Techniques: Memoization, debouncing, throttling.
- Memory Management: Avoid memory leaks by careful use of subscriptions and effects.
- Rendering Optimization: Minimize re-renders using useMemo, useCallback, React.memo.
- Bundle Size Optimization: Dynamic imports, code splitting, tree shaking.
- Lazy Loading: Use Next.js dynamic import for lazy loading components.

4. Security Best Practices
- Validate and sanitize inputs.
- Avoid exposing sensitive keys.
- Use environment variables effectively.
- Adhere to OWASP guidelines.

5. Testing Approaches
- Unit Testing: Jest and React Testing Library for components.
- Integration Testing: Test critical user flows.
- End-to-End Testing: Cypress for realistic scenarios.
- Test Organization: Co-locate tests with components.
- Mocking and Stubbing: Mock APIs, services, and external dependencies.

6. Common Pitfalls and Gotchas
- Frequent Mistakes: Overuse of effects, improper use of state.
- Edge Cases: Handle empty states, loading, and error conditions.
- Version-Specific Issues: Stay updated with Next.js and Tailwind breaking changes.
- Compatibility Concerns: Ensure browser and device compatibility.
- Debugging Strategies: Use DevTools, detailed logging, and error tracking tools like Sentry.

7. Tooling and Environment
- Build Configuration: Customize Next.js with next.config.js.
- Linting and Formatting: ESLint, Prettier.
- Deployment: Vercel for seamless deployment.
- CI/CD Integration: GitHub Actions for automated testing and deployment.