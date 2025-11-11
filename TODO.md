# Optimization Plan for WoW Character Generator

## Information Gathered
- Main code in `script.js` (~400 lines): Handles portal transition, data imports, DOM setup, filtering, character generation, and result display.
- Data in `nameData.js` and `servers.js` are static exports.
- HTML and CSS are static.
- No major bugs, but opportunities for performance: caching DOM elements, extracting functions, optimizing DOM manipulations, reducing redundant code.

## Plan
- Cache frequently used DOM elements at the top of script.js.
- Extract repeated logic into helper functions (e.g., for creating result rows, handling tooltips).
- Optimize `displayResult` function: Reduce DOM creation overhead, use document fragments if possible.
- Improve filtering and generation logic for efficiency (e.g., use Sets for class lists).
- Add constants for magic numbers/strings.
- Ensure all changes preserve exact functionality.

## Dependent Files to Edit
- `script.js`: Main optimizations here.

## Followup Steps
- Test the app: Launch locally, generate characters, check filters, tooltips, copy functionality.
- Verify no breaking changes: Ensure portal animation, name generation, server selection work as before.

## Completed Tasks
- [x] Refactored script.js to use constants for magic numbers (e.g., MAX_NAME_LENGTH, ACCENT_PROBABILITY, etc.) for better maintainability.
- [x] Fixed gender container toggle to use genderContainer instead of individual elements.
- [x] Launched local server and opened browser to http://127.0.0.1:8000.
- [x] Tested portal transition: Works correctly.
- [x] Tested character generation with various filters (faction, race, class, server): No errors, filters update properly.
- [x] Tested name generation with and without accents, and different genders: Constants applied correctly, names generate as expected.
- [x] Tested UI elements (dropdowns, checkboxes, buttons): Functionality intact.
- [x] Checked browser console: No JavaScript errors.
