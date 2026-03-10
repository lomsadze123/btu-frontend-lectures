import LectureWrapper from "../../components/LectureWrapper";
import AnnotatedCode from "../../components/AnnotatedCode";
import Diagram from "../../components/Diagram";
import InfoBox from "../../components/InfoBox";
import ExerciseBlock from "../../components/ExerciseBlock";
import HomeworkBlock from "../../components/HomeworkBlock";
import JsConsole from "../../components/JsConsole";

const Lecture16 = () => {
  return (
    <LectureWrapper id="16" title="Form Handling, Validation & Course Summary">
      {/* ── Section 1: Intro ── */}
      <section>
        <h2>The Grand Finale!</h2>
        <p>
          This is it -- the last lecture of the course! And we are ending with
          something you will build in literally every web project for the rest
          of your career: <strong>forms</strong>. Login forms, registration
          forms, search bars, checkout pages, contact forms -- they are
          everywhere.
        </p>
        <p>
          Today we will learn how to handle forms with JavaScript, validate user
          input (and show helpful errors), and use{" "}
          <strong>regular expressions</strong> for pattern matching. Then we
          will wrap up with a look back at everything you have learned.
        </p>
      </section>

      {/* ── Section 2: Getting Form Values ── */}
      <section>
        <h2>Getting Form Values with JavaScript</h2>
        <p>
          HTML forms collect user input. JavaScript reads that input and does
          something with it. The modern way is to use <code>FormData</code>.
        </p>

        <AnnotatedCode
          title="Getting form data on submit"
          segments={[
            { code: 'const form = document.getElementById("myForm");\n\n' },
            {
              code: 'form.addEventListener("submit", ',
              annotation:
                "Listen for the 'submit' event on the form element. This fires when the user clicks a submit button or presses Enter inside a form field.",
              label: "Event",
            },
            { code: "(e) => {\n" },
            {
              code: "  e.preventDefault();",
              annotation:
                "CRITICAL: Without this, the browser will reload the page when the form is submitted. preventDefault() stops the default HTML form behavior so we can handle it with JavaScript instead.",
              label: "Prevent Default",
            },
            { code: "\n\n" },
            {
              code: "  const formData = new FormData(e.target);",
              annotation:
                "FormData automatically collects all named input values from the form. e.target is the form element. Each input must have a 'name' attribute to be included.",
              label: "FormData",
            },
            { code: "\n" },
            {
              code: "  const data = Object.fromEntries(formData);",
              annotation:
                "Object.fromEntries() converts the FormData into a plain JavaScript object. Keys are the input 'name' attributes, values are what the user typed. Very convenient!",
              label: "To Object",
            },
            { code: "\n\n" },
            { code: "  console.log(data);\n" },
            {
              code: "  // { name: 'Ana', email: 'ana@btu.edu.ge', role: 'student' }\n",
            },
            { code: "});" },
          ]}
        />

        <InfoBox type="tip">
          <code>FormData</code> + <code>Object.fromEntries()</code> is the
          modern, recommended way to collect form data. It automatically handles
          all input types! Note: unchecked checkboxes are not included in the
          result.
        </InfoBox>
      </section>

      {/* ── Section 3: Form Events ── */}
      <section>
        <h2>Form Events: When Things Happen</h2>
        <p>
          Forms fire different events at different times. Understanding these is
          key to building great user experiences.
        </p>

        <Diagram title="Key Form Events Timeline">
          <div className="space-y-4">
            {[
              {
                event: "focus",
                when: "User clicks into the field",
                use: "Show hints, highlight field",
                color: "bg-blue-100 border-blue-300 text-blue-800",
              },
              {
                event: "input",
                when: "Every single keystroke",
                use: "Live search, character counter, real-time validation",
                color: "bg-green-100 border-green-300 text-green-800",
              },
              {
                event: "change",
                when: "Field loses focus AND value changed",
                use: "Save preferences, trigger updates",
                color: "bg-orange-100 border-orange-300 text-orange-800",
              },
              {
                event: "blur",
                when: "User clicks away from the field",
                use: "Validate field, format input",
                color: "bg-purple-100 border-purple-300 text-purple-800",
              },
              {
                event: "submit",
                when: "Form is submitted (button or Enter)",
                use: "Validate all fields, send data",
                color: "bg-red-100 border-red-300 text-red-800",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row items-start md:items-center gap-3 p-3 rounded-lg border ${item.color}`}
              >
                <code className="font-bold text-sm shrink-0 w-20">
                  {item.event}
                </code>
                <span className="text-sm flex-1">
                  <strong>When:</strong> {item.when}
                </span>
                <span className="text-xs opacity-75">
                  <strong>Use for:</strong> {item.use}
                </span>
              </div>
            ))}
          </div>
        </Diagram>

        <InfoBox type="info">
          <strong>input</strong> fires on every keystroke (great for live search
          and character counters). <strong>change</strong> fires only when the
          field loses focus and the value has changed. <strong>blur</strong> is
          perfect for validation -- check the field when the user moves away.
        </InfoBox>
      </section>

      {/* ── Section 4: Validation ── */}
      <section>
        <h2>Client-Side Validation: Catching Mistakes Early</h2>
        <p>
          Nobody likes submitting a form only to see "Error!" with no
          explanation. Good validation gives{" "}
          <strong>instant, helpful feedback</strong> as the user fills out the
          form.
        </p>

        <JsConsole
          code={`// Simple validation functions
const isRequired = (value) => value.trim() !== "";
const hasMinLength = (value, min) => value.trim().length >= min;
const isInRange = (value, min, max) => {
  const num = Number(value);
  return !isNaN(num) && num >= min && num <= max;
};
const isValidEmail = (email) => email.includes("@") && email.includes(".");

// Test them!
console.log("Required tests:");
console.log('  "" =>', isRequired(""));        // false
console.log('  "  " =>', isRequired("  "));    // false
console.log('  "Ana" =>', isRequired("Ana"));  // true

console.log("\\nMin length tests:");
console.log('  "Hi" (min 3) =>', hasMinLength("Hi", 3));     // false
console.log('  "Hello" (min 3) =>', hasMinLength("Hello", 3)); // true

console.log("\\nRange tests:");
console.log('  25 (18-99) =>', isInRange("25", 18, 99));   // true
console.log('  15 (18-99) =>', isInRange("15", 18, 99));   // false

console.log("\\nEmail tests:");
console.log('  "ana@btu.edu.ge" =>', isValidEmail("ana@btu.edu.ge")); // true
console.log('  "not-an-email" =>', isValidEmail("not-an-email"));     // false`}
          title="Building validation functions"
        />

        <Diagram title="Validation Strategy: When to Validate">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 bg-blue-50 rounded-xl p-5 border border-blue-200">
              <h4 className="font-bold text-blue-700 mb-2">On Blur</h4>
              <p className="text-sm text-blue-600">
                Validate each field when the user moves away. This is the most
                common approach. It does not annoy users while they are still
                typing.
              </p>
            </div>
            <div className="flex-1 bg-green-50 rounded-xl p-5 border border-green-200">
              <h4 className="font-bold text-green-700 mb-2">On Input</h4>
              <p className="text-sm text-green-600">
                Validate on every keystroke. Use for password strength
                indicators or character counters. Can feel aggressive for
                regular fields.
              </p>
            </div>
            <div className="flex-1 bg-purple-50 rounded-xl p-5 border border-purple-200">
              <h4 className="font-bold text-purple-700 mb-2">On Submit</h4>
              <p className="text-sm text-purple-600">
                Validate ALL fields at once when the form is submitted. Always
                do this as a final check, even if you also validate on blur.
              </p>
            </div>
          </div>
        </Diagram>
      </section>

      {/* ── Section 5: Regex ── */}
      <section>
        <h2>Regular Expressions: Pattern Matching Superpower</h2>
        <p>
          A <strong>regex</strong> (regular expression) is a pattern that
          describes what text should look like. Instead of checking character by
          character, you describe the <em>shape</em> of valid input.
        </p>

        <Diagram title="Regex Cheat Sheet">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h4 className="font-bold text-blue-700 text-sm mb-2">
                Character Classes
              </h4>
              <div className="space-y-1 font-mono text-xs">
                <div>
                  <code className="text-blue-600">\d</code>{" "}
                  <span className="text-gray-500">= any digit (0-9)</span>
                </div>
                <div>
                  <code className="text-blue-600">\w</code>{" "}
                  <span className="text-gray-500">= letter, digit, _</span>
                </div>
                <div>
                  <code className="text-blue-600">\s</code>{" "}
                  <span className="text-gray-500">= any whitespace</span>
                </div>
                <div>
                  <code className="text-blue-600">.</code>{" "}
                  <span className="text-gray-500">= any character</span>
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h4 className="font-bold text-green-700 text-sm mb-2">
                Quantifiers
              </h4>
              <div className="space-y-1 font-mono text-xs">
                <div>
                  <code className="text-green-600">+</code>{" "}
                  <span className="text-gray-500">= one or more</span>
                </div>
                <div>
                  <code className="text-green-600">*</code>{" "}
                  <span className="text-gray-500">= zero or more</span>
                </div>
                <div>
                  <code className="text-green-600">?</code>{" "}
                  <span className="text-gray-500">= zero or one</span>
                </div>
                <div>
                  <code className="text-green-600">{"{3}"}</code>{" "}
                  <span className="text-gray-500">= exactly 3</span>
                </div>
                <div>
                  <code className="text-green-600">{"{3,8}"}</code>{" "}
                  <span className="text-gray-500">= between 3 and 8</span>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h4 className="font-bold text-purple-700 text-sm mb-2">
                Anchors & Groups
              </h4>
              <div className="space-y-1 font-mono text-xs">
                <div>
                  <code className="text-purple-600">^</code>{" "}
                  <span className="text-gray-500">= start of string</span>
                </div>
                <div>
                  <code className="text-purple-600">$</code>{" "}
                  <span className="text-gray-500">= end of string</span>
                </div>
                <div>
                  <code className="text-purple-600">[abc]</code>{" "}
                  <span className="text-gray-500">= any of a, b, c</span>
                </div>
                <div>
                  <code className="text-purple-600">(a|b)</code>{" "}
                  <span className="text-gray-500">= either a or b</span>
                </div>
              </div>
            </div>
          </div>
        </Diagram>

        <JsConsole
          code={`// test() returns true or false
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;

console.log("Email validation:");
console.log('  "ana@btu.edu.ge" =>', emailPattern.test("ana@btu.edu.ge"));
console.log('  "not-an-email" =>', emailPattern.test("not-an-email"));
console.log('  "test@.com" =>', emailPattern.test("test@.com"));

// Password: 8+ chars, uppercase, lowercase, digit
const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$/;

console.log("\\nPassword validation:");
console.log('  "Abc12345" =>', passPattern.test("Abc12345"));
console.log('  "abc12345" =>', passPattern.test("abc12345")); // no uppercase
console.log('  "SHORT1a" =>', passPattern.test("SHORT1a"));   // only 7 chars

// Georgian phone: +995 followed by 9 digits
const phonePattern = /^\\+995\\d{9}$/;

console.log("\\nPhone validation:");
console.log('  "+995555123456" =>', phonePattern.test("+995555123456"));
console.log('  "555123456" =>', phonePattern.test("555123456"));

// match() -- find patterns IN text
const text = "Call me at 555-1234 or 555-5678";
const phones = text.match(/\\d{3}-\\d{4}/g);
console.log("\\nFound phones:", phones);`}
          title="Regex in action -- test() and match()"
        />
      </section>

      {/* ── Section 6: Regex replace and practical use ── */}
      <section>
        <h2>Practical Regex: replace() and Cleaning Input</h2>

        <AnnotatedCode
          title="Common regex patterns for input processing"
          segments={[
            { code: "// Clean up messy phone input\n" },
            { code: 'const dirtyPhone = " +995  (555)  12-34-56 ";\n' },
            {
              code: 'const cleanPhone = dirtyPhone.replace(/[^\\d+]/g, "");',
              annotation:
                "This regex means: match any character that is NOT a digit (\\d) and NOT a plus sign (+). The 'g' flag means replace ALL matches, not just the first one. Result: '+995555123456'",
              label: "Clean phone",
            },
            { code: "\n\n// Remove extra whitespace\n" },
            { code: 'const messy = "Hello    world   how   are   you";\n' },
            {
              code: 'const clean = messy.replace(/\\s+/g, " ").trim();',
              annotation:
                "\\s+ matches one or more whitespace characters. Replacing with a single space collapses all multiple spaces into one. .trim() removes leading/trailing spaces.",
              label: "Clean spaces",
            },
            { code: "\n\n// Extract hashtags from a social media post\n" },
            {
              code: 'const post = "Best #khachapuri in #tbilisi! #foodie";\n',
            },
            {
              code: "const hashtags = post.match(/#\\w+/g);",
              annotation:
                "# matches a literal hash character. \\w+ matches one or more word characters after it. The 'g' flag finds ALL matches. Result: ['#khachapuri', '#tbilisi', '#foodie']",
              label: "Extract hashtags",
            },
            { code: "\n\n// Capitalize first letter of each word\n" },
            { code: 'const title = "the quick brown fox";\n' },
            {
              code: "const caps = title.replace(/\\b\\w/g, c => c.toUpperCase());",
              annotation:
                "\\b is a word boundary -- the position between a word character and a non-word character. \\w matches the first character of each word. The callback converts each match to uppercase.",
              label: "Capitalize",
            },
          ]}
        />

        <JsConsole
          code={`// Practical regex replace examples

// Clean up messy phone input
const dirtyPhone = " +995  (555)  12-34-56 ";
const cleanPhone = dirtyPhone.replace(/[^\\d+]/g, "");
console.log("Clean phone:", cleanPhone);

// Remove extra whitespace
const messy = "Hello    world   how   are   you";
const clean = messy.replace(/\\s+/g, " ").trim();
console.log("Cleaned:", clean);

// Extract hashtags
const post = "Best #khachapuri in #tbilisi! #foodie #georgia";
const hashtags = post.match(/#\\w+/g);
console.log("Hashtags:", hashtags);

// Capitalize first letter of each word
const title = "the quick brown fox";
const capitalized = title.replace(/\\b\\w/g, (char) => char.toUpperCase());
console.log("Capitalized:", capitalized);

// Mask a credit card number
const card = "4111-1111-1111-1111";
const masked = card.replace(/\\d(?=.{4})/g, "*");
console.log("Masked card:", masked);`}
          title="Regex replace() -- cleaning and transforming text"
        />
      </section>

      {/* ── Section 7: Putting It Together ── */}
      <section>
        <h2>Putting It All Together: Form Validation Pattern</h2>
        <p>
          Here is the complete pattern for building a validated form. This
          combines everything we have learned: event handling, regex, DOM
          manipulation, and user feedback.
        </p>

        <AnnotatedCode
          title="Complete form validation pattern"
          segments={[
            { code: "// Step 1: Define your validation rules\n" },
            {
              code: "const rules = {\n  username: /^[a-zA-Z0-9_]{3,20}$/,\n  email: /^[^@]+@[^@]+\\.[^@]+$/,\n  phone: /^\\+995\\d{9}$/,\n};",
              annotation:
                "Keep all regex patterns in one object. This makes them easy to update and test independently.",
              label: "Rules",
            },
            { code: "\n\n// Step 2: Create validate functions\n" },
            {
              code: 'const validate = (field, value) => {\n  if (!value.trim()) return "Required";\n  if (!rules[field].test(value)) return "Invalid format";\n  return null; // null = valid\n};',
              annotation:
                "Each validate function returns an error message (string) or null if valid. Check required first, then pattern. This keeps error messages specific and helpful.",
              label: "Validate",
            },
            { code: "\n\n// Step 3: Show/clear errors\n" },
            {
              code: 'const showError = (field, message) => {\n  input.classList.add("invalid");\n  errorDiv.textContent = message;\n};\nconst clearError = (field) => {\n  input.classList.remove("invalid");\n  input.classList.add("valid");\n  errorDiv.textContent = "";\n};',
              annotation:
                "Use CSS classes to style valid/invalid inputs (green/red borders). Update a nearby error message div. Always clear previous errors before showing new ones.",
              label: "Show/Clear",
            },
            { code: "\n\n// Step 4: Attach to blur events\n" },
            {
              code: 'input.addEventListener("blur", () => {\n  const error = validate("username", input.value);\n  error ? showError("username", error) : clearError("username");\n});',
              annotation:
                "Validate on blur (when user leaves the field). This gives immediate feedback without being annoying while the user is still typing.",
              label: "Blur",
            },
            { code: "\n\n// Step 5: Validate all on submit\n" },
            {
              code: 'form.addEventListener("submit", (e) => {\n  e.preventDefault();\n  const allValid = fields.every(f => validate(f, ...) === null);\n  if (allValid) { /* submit! */ }\n});',
              annotation:
                "On submit, validate ALL fields at once. Only proceed if every field passes. This catches any fields the user might have skipped.",
              label: "Submit",
            },
          ]}
        />

        <InfoBox type="info">
          This five-step pattern works for any form, no matter how many fields
          it has. The key is separating your concerns: rules are separate from
          validation logic, which is separate from display logic.
        </InfoBox>
      </section>

      {/* ── Section 8: Course Summary ── */}
      <section>
        <h2>Course Summary: Look How Far You Have Come!</h2>
        <p>
          16 weeks ago, you might not have known what HTML stands for. Now you
          can build real, interactive websites from scratch. Let us take a
          moment to appreciate everything you have learned:
        </p>

        <Diagram title="Your Frontend Development Journey">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                weeks: "1-4",
                title: "HTML Foundations",
                items:
                  "Document structure, semantic elements, text, links, images, lists, tables, forms, accessibility",
                color: "bg-red-50 border-red-200",
                accent: "text-red-600",
              },
              {
                weeks: "5-8",
                title: "CSS & Styling",
                items:
                  "Selectors, specificity, box model, Flexbox, CSS Grid, responsive design, transitions, animations",
                color: "bg-blue-50 border-blue-200",
                accent: "text-blue-600",
              },
              {
                weeks: "9-10",
                title: "JavaScript Basics",
                items:
                  "Variables, data types, operators, conditionals, loops, arrays, array methods, objects, functions",
                color: "bg-yellow-50 border-yellow-200",
                accent: "text-yellow-600",
              },
              {
                weeks: "11",
                title: "Functions & Closures",
                items:
                  "Arrow functions, scope, closures, IIFE, higher-order functions, practical patterns",
                color: "bg-green-50 border-green-200",
                accent: "text-green-600",
              },
              {
                weeks: "12",
                title: "The DOM",
                items:
                  "Selecting elements, modifying content/styles/classes, creating elements, events, event delegation",
                color: "bg-teal-50 border-teal-200",
                accent: "text-teal-600",
              },
              {
                weeks: "13",
                title: "Async JavaScript",
                items:
                  "Callbacks, promises, .then/.catch/.finally, Promise.all, Promise.race, setTimeout/setInterval",
                color: "bg-indigo-50 border-indigo-200",
                accent: "text-indigo-600",
              },
              {
                weeks: "14",
                title: "Fetch & Async/Await",
                items:
                  "REST APIs, JSON, fetch(), async/await, try/catch, error handling, parallel fetching",
                color: "bg-purple-50 border-purple-200",
                accent: "text-purple-600",
              },
              {
                weeks: "15",
                title: "Web Storage",
                items:
                  "Cookies, localStorage, sessionStorage, JSON serialization, persistence patterns, security",
                color: "bg-pink-50 border-pink-200",
                accent: "text-pink-600",
              },
              {
                weeks: "16",
                title: "Forms & Validation",
                items:
                  "Form handling, FormData, events, validation, regular expressions, pattern matching",
                color: "bg-orange-50 border-orange-200",
                accent: "text-orange-600",
              },
            ].map((block, i) => (
              <div key={i} className={`rounded-lg p-4 border ${block.color}`}>
                <div
                  className={`text-xs font-bold uppercase tracking-wide ${block.accent}`}
                >
                  Week{block.weeks.length > 1 ? "s" : ""} {block.weeks}
                </div>
                <div className="font-bold text-gray-800 mt-1">
                  {block.title}
                </div>
                <div className="text-xs text-gray-500 mt-2 leading-relaxed">
                  {block.items}
                </div>
              </div>
            ))}
          </div>
        </Diagram>

        <h3>Tips for Your Final Project</h3>

        <Diagram title="Final Project Checklist">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 bg-green-50 rounded-xl p-5 border border-green-200">
              <h4 className="font-bold text-green-700 mb-3">Do These Things</h4>
              <ul className="space-y-1 text-sm text-green-800">
                <li>Use semantic HTML (header, main, nav, section, footer)</li>
                <li>Keep CSS and JS in external files</li>
                <li>Make it responsive (works on mobile + desktop)</li>
                <li>Include at least one form with validation</li>
                <li>Use localStorage to persist something</li>
                <li>Fetch data from an API</li>
                <li>Use const/let (never var!) and arrow functions</li>
              </ul>
            </div>
            <div className="flex-1 bg-red-50 rounded-xl p-5 border border-red-200">
              <h4 className="font-bold text-red-700 mb-3">
                Avoid These Mistakes
              </h4>
              <ul className="space-y-1 text-sm text-red-800">
                <li>No inline styles or inline JavaScript in HTML</li>
                <li>Do not forget e.preventDefault() on forms</li>
                <li>Do not forget error handling for fetch requests</li>
                <li>Do not store passwords in localStorage</li>
                <li>Test in at least Chrome and Firefox</li>
              </ul>
            </div>
          </div>
        </Diagram>

        <AnnotatedCode
          title="Recommended project structure"
          segments={[
            { code: "my-project/\n" },
            {
              code: "  index.html",
              annotation:
                "Your main HTML file. Use semantic elements and keep it clean -- no inline styles or scripts.",
              label: "HTML",
            },
            { code: "\n  css/\n" },
            {
              code: "    style.css",
              annotation:
                "All your CSS in one external file (or split into multiple for larger projects). Link it in the HTML head.",
              label: "CSS",
            },
            { code: "\n  js/\n" },
            {
              code: "    app.js",
              annotation:
                "Main application logic -- event listeners, DOM manipulation, initialization code.",
              label: "Main JS",
            },
            { code: "\n" },
            {
              code: "    api.js",
              annotation:
                "All fetch functions in one file. Export async functions like loadUsers(), createPost(), etc.",
              label: "API",
            },
            { code: "\n" },
            {
              code: "    storage.js",
              annotation:
                "localStorage helper functions -- getItem with JSON parsing, setItem with JSON stringify, safe fallbacks.",
              label: "Storage",
            },
            { code: "\n" },
            {
              code: "    validation.js",
              annotation:
                "All regex patterns and validation functions. Keep them reusable and testable.",
              label: "Validation",
            },
            { code: "\n  images/\n" },
            { code: "    ..." },
          ]}
        />
      </section>

      {/* ── Final motivational section ── */}
      <section>
        <h2>You Did It!</h2>
        <p>
          Seriously -- take a moment to appreciate what you have accomplished.
          16 weeks ago, a blank HTML file might have seemed intimidating. Now
          you can:
        </p>
        <ul>
          <li>Build complete web pages with semantic HTML</li>
          <li>Style them beautifully with CSS, Flexbox, and Grid</li>
          <li>Make them interactive with JavaScript</li>
          <li>Handle user events and manipulate the DOM</li>
          <li>Work with asynchronous code and Promises</li>
          <li>Fetch real data from APIs</li>
          <li>Persist data in the browser</li>
          <li>Build and validate forms</li>
        </ul>
        <p>
          These are real, professional skills. The gap between where you are now
          and a working frontend developer is just{" "}
          <strong>practice and projects</strong>. Keep building things. Break
          stuff. Google error messages. That is how every developer on Earth got
          good at this.
        </p>

        <InfoBox type="tip">
          The best way to learn is to{" "}
          <strong>build something you care about</strong>. A portfolio site, a
          project for a friend, a tool that solves a problem you have. The
          course is over, but your learning journey is just beginning. Good
          luck, and happy coding!
        </InfoBox>
      </section>

      {/* ── Exercises ── */}
      <section>
        <h2>Final Practice!</h2>

        <ExerciseBlock number={1}>
          <p>
            <strong>Email Validator:</strong> Write a function that validates
            emails using regex. Test it with 5+ inputs (mix of valid and
            invalid). Display results on the page with green/red styling.
          </p>
        </ExerciseBlock>

        <ExerciseBlock number={2}>
          <p>
            <strong>Live Search:</strong> Create an input field and an array of
            10+ items. As the user types, filter the list in real time using{" "}
            <code>new RegExp(input, "i")</code>. The search should be
            case-insensitive.
          </p>
        </ExerciseBlock>

        <ExerciseBlock number={3}>
          <p>
            <strong>Login Form:</strong> Build a login form with email and
            password validation. Validate on blur and on submit. On success,
            show a welcome message and save the email in localStorage so it is
            pre-filled next time.
          </p>
        </ExerciseBlock>
      </section>

      {/* ── Homework ── */}
      <HomeworkBlock>
        <h4>Final Homework: Registration System with Persistence</h4>
        <p>
          Build a complete user registration system combining everything from
          the course:
        </p>
        <ol>
          <li>
            Registration form: username, email, phone, password, confirm
            password, age, terms checkbox.
          </li>
          <li>
            Real-time regex validation on every field with error messages and
            green/red border styling.
          </li>
          <li>Password strength indicator (weak/medium/strong).</li>
          <li>
            On successful registration, save user data (no password!) to
            localStorage.
          </li>
          <li>
            Show a "profile card" reading data from localStorage after
            registration.
          </li>
          <li>"Log Out" button clears stored data and shows the form again.</li>
          <li>
            On page load, check localStorage -- if a user exists, show the
            profile card instead of the form.
          </li>
        </ol>
        <InfoBox type="tip">
          Build step by step: HTML form first, then one validator at a time,
          then localStorage logic, then the profile card. Test each piece before
          moving on!
        </InfoBox>
      </HomeworkBlock>
    </LectureWrapper>
  );
};

export default Lecture16;
