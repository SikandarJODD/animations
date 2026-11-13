# Verification

Verify claims against the installed code and rendered result. A successful CLI command is not completion.

## Required checks

1. Run the repository's existing formatter, type check, tests, and production build that are relevant to the changed files.
2. Open the target page and check the browser console.
3. Test the layout at narrow, medium, and wide widths.
4. Test the component with keyboard input when it is interactive.
5. Enable reduced motion and confirm the content remains understandable and usable.

## Accessibility

- Use semantic HTML for controls and landmarks.
- Give every interactive element an accessible name.
- Keep focus visible and restore focus after overlays close.
- Confirm hover interactions have keyboard and touch behavior where the action matters.
- Hide decorative SVG, canvas, and duplicate animated text from assistive technology.
- Do not use animation as the only way to communicate state.

## Rendering and performance

- Check for hydration mismatch when code reads browser state or uses random values.
- Reserve space for delayed media and animation content to avoid layout shift.
- Check continuous animation, canvas, WebGL, pointer tracking, blur, and large particle counts on a small viewport.
- Pause or simplify work that is off-screen when the component supports it.
- Confirm cleanup for timers, observers, listeners, and animation loops.

## Completion report

State:

- Selected component and collection.
- Files added or changed.
- Dependencies added.
- Project-specific adaptations.
- Checks run and their results.
- Limitations or checks that could not be completed.
