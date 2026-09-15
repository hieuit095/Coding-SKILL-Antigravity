---
name: qa-test-planner
description: "Generate comprehensive manual test cases in Markdown table format, perform form/field validation, test edge cases, check responsiveness, and output a ready-to-use QA checklist whenever a new frontend feature or web endpoint is introduced."
---

# QA Test Planner & Manual Testing Framework

This skill combines industry-standard manual testing patterns from **softaworks/qa-test-planner** and **mfaisalkhatri/Manual_Testing** to generate structured, repeatable, and thorough manual test cases for web applications.

---

## 1. Standard Test Case Table Format

Every manual test suite must be delivered in the following Markdown table structure:

| Test ID | Description | Pre-conditions | Steps | Test Data | Expected Result | Severity |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `TC-MOD-001` | Clear test objective and scenario | Setup requirements, user role, initial state | 1. Step 1<br>2. Step 2<br>3. Step 3 | Explicit input values, credentials, or file payloads | Specific visible and state outcome | Critical / High / Medium / Low |

### Severity Classifications
- **Critical (Blocker)**: Crash, data loss, security flaw (auth bypass/SQLi), core business flow completely unusable with no workaround.
- **High**: Core feature malfunction or major validation failure; workaround is complex or unavailable.
- **Medium**: Minor functional defect, secondary feature issue, validation message misleading but feature functional.
- **Low (Cosmetic/Trivial)**: UI alignment, typography discrepancy, spelling error, non-blocking visual defect.

---

## 2. Test Coverage Categories

Whenever generating test cases for a new feature or endpoint, cover all 5 dimensions:

1. **Functional Testing (Happy Path & Negative)**:
   - Business workflow completion end-to-end.
   - Role-based permissions & authorization guards.
   - Proper CRUD updates in database / state.
2. **Web UI & Form Validation (Field-Level)**:
   - Textbox: Min/Max length, character set restrictions, whitespace trimming, copy-paste.
   - Dropdown / Select: Default value, search/filter, options rendering, selection persistence.
   - Date Picker: Format (DD/MM/YYYY), leap year, future/past boundary constraints.
   - Buttons: Click debounce, loading spinner state, Enter key trigger, disabled state when form is invalid.
   - Upload / Export: Valid formats (.xlsx, .csv), invalid mime-types, empty file, oversized file.
3. **Edge Cases & Boundary Values**:
   - Boundary Value Analysis (BVA): Exact min, min-1, exact max, max+1 values.
   - Equivalence Partitioning (EP): Valid vs invalid classes.
   - Special characters & XSS payloads: `<script>alert(1)</script>`, `' OR '1'='1`, emojis (`👵🧓`), long strings (255+ chars).
   - Duplicate submissions, rapid double-clicks.
4. **Cross-Browser & Responsiveness**:
   - Viewports: Desktop (1920x1080, 1366x768), Tablet (768px - 1024px), Mobile (375px - 428px).
   - Browsers: Chromium (Chrome, Edge), Gecko (Firefox), WebKit (Safari).
   - Mobile touch targets (min 44x44px), viewport orientation changes, sticky table headers and modals.
5. **Error Handling & Network Resilience**:
   - Offline / connection loss toast notification.
   - Backend 400/401/403/404/422/500 HTTP response mapping to friendly user alerts.
   - Session expiration handling (graceful redirect to login).

---

## 3. New Feature / Endpoint QA Checklist Template

Copy this checklist into PR reviews, issue tickets, or release notes whenever a new frontend feature or API endpoint is delivered:

```markdown
### 📋 Manual QA Checklist: [Feature / Endpoint Name]

#### 1. Functional & Business Logic
- [ ] Happy path: End-to-end flow succeeds with valid data.
- [ ] Required fields: Form blocks submission and highlights missing mandatory inputs.
- [ ] State synchronization: Data reflects immediately in tables, counters, and related views without hard refresh.
- [ ] Permissions: Unauthorized roles cannot view, edit, or submit actions (backend RLS / 403 verified).

#### 2. Input Controls & Form Validation
- [ ] Text inputs: Trim leading/trailing whitespace automatically.
- [ ] Number/ID fields (e.g. CCCD, Phone): Only numeric input allowed; invalid characters rejected.
- [ ] Select/Combobox: Search filters work accurately; selected value displays properly.
- [ ] Date controls: Prevents invalid dates; boundary constraints strictly enforced.
- [ ] Submit button: Disables and shows loading indicator during inflight network requests.

#### 3. Edge Cases & Boundary Values
- [ ] Max length: Field handles max characters without overflowing UI or truncating unexpectedly.
- [ ] Special characters: Handles accents (Vietnamese Unicode), symbols (`&`, `<`, `>`, `"`, `'`), and emojis gracefully.
- [ ] Zero / Empty state: Table or view displays a friendly placeholder when no records exist.
- [ ] Duplicate check: System catches duplicate unique keys (e.g. Duplicate ID / CCCD) with clear error message.

#### 4. UI, Layout & Cross-Browser Responsiveness
- [ ] Desktop (1920x1080, 1366x768): All components align cleanly; no unexpected scrollbars.
- [ ] Tablet (768px - 1024px): Responsive layout adapts without clipping dialogs or filters.
- [ ] Mobile (375px - 414px): Tables support horizontal scroll or card view; touch targets >= 44x44px.
- [ ] Cross-browser: Layout and interactions verified on Chrome, Firefox, and Safari/Edge.

#### 5. Error Handling & Security
- [ ] API failure (500 / Network Error): Displays understandable toast/modal, never raw JSON or white screen.
- [ ] 401 Unauthorized: Session expiration redirects to Login with return URL preserved.
- [ ] Input sanitization: Malicious tags (`<script>`, HTML tags) render as escaped text, preventing XSS.
- [ ] Cancel / Back navigation: Form discard confirmation prompts if dirty; no ghost data persisted.
```
