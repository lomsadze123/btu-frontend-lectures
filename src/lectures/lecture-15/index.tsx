import LectureWrapper from "../../components/LectureWrapper";
import AnnotatedCode from "../../components/AnnotatedCode";
import Diagram from "../../components/Diagram";
import InfoBox from "../../components/InfoBox";
import ExerciseBlock from "../../components/ExerciseBlock";
import HomeworkBlock from "../../components/HomeworkBlock";
import JsConsole from "../../components/JsConsole";

const Lecture15 = () => {
  return (
    <LectureWrapper id="15" title="Web Storage: Cookies & Storage APIs">
      {/* ── Section 1: Intro ── */}
      <section>
        <h2>Why Does the Web Need Memory?</h2>
        <p>
          Here is a fun fact: by default, websites have <strong>amnesia</strong>
          . Every time you refresh the page, everything resets. Your dark mode
          preference? Gone. Your shopping cart? Empty. That form you were
          filling out? Vanished.
        </p>
        <p>
          That is obviously terrible, which is why browsers give us{" "}
          <strong>storage mechanisms</strong>. Think of them like different
          types of notebooks. Today we will learn about three of them and when
          to use each one.
        </p>

        <Diagram title="Three Types of Browser Storage">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-5 bg-amber-50 rounded-xl border-2 border-amber-300">
              <div className="text-3xl mb-2">🍪</div>
              <h4 className="font-bold text-amber-700">Cookies</h4>
              <p className="text-xs text-amber-600 mt-2">
                Tiny sticky notes that the server can also read. Sent with every
                HTTP request.
              </p>
            </div>
            <div className="text-center p-5 bg-blue-50 rounded-xl border-2 border-blue-300">
              <div className="text-3xl mb-2">💾</div>
              <h4 className="font-bold text-blue-700">localStorage</h4>
              <p className="text-xs text-blue-600 mt-2">
                A personal notebook that stays forever (until you erase it).
                Client-side only.
              </p>
            </div>
            <div className="text-center p-5 bg-purple-50 rounded-xl border-2 border-purple-300">
              <div className="text-3xl mb-2">📋</div>
              <h4 className="font-bold text-purple-700">sessionStorage</h4>
              <p className="text-xs text-purple-600 mt-2">
                A whiteboard that gets wiped when you close the tab. Temporary
                data only.
              </p>
            </div>
          </div>
        </Diagram>
      </section>

      {/* ── Section 2: Cookies ── */}
      <section>
        <h2>Cookies: The OG Storage</h2>
        <p>
          Cookies are the oldest storage method on the web. They were invented
          in 1994 (yes, they are older than most of you!). The key thing about
          cookies is that they are <strong>sent to the server</strong> with
          every HTTP request -- which makes them perfect for authentication
          tokens, but terrible for storing large amounts of data.
        </p>

        <AnnotatedCode
          title="Cookie syntax and options"
          segments={[
            { code: "// Setting a cookie\n" },
            {
              code: 'document.cookie = "',
              annotation:
                "document.cookie is the only way to set cookies in JavaScript. Despite looking like a simple assignment, it ADDS a cookie rather than replacing all of them.",
              label: "Set Cookie",
            },
            {
              code: "username=Ana",
              annotation:
                "The cookie value is a key=value pair. The name is 'username' and the value is 'Ana'. No spaces around the equals sign.",
              label: "Key=Value",
            },
            {
              code: "; max-age=604800",
              annotation:
                "max-age sets how long the cookie lives in seconds. 604800 = 7 days. Without this, the cookie is a 'session cookie' and dies when the browser closes.",
              label: "Expiry",
            },
            {
              code: "; path=/",
              annotation:
                "path=/ means this cookie is accessible from any page on the site. Without it, the cookie might only be available on the current page path.",
              label: "Path",
            },
            { code: '";\n\n' },
            {
              code: "// Reading cookies -- you get ALL of them as one string!\n",
            },
            {
              code: "const allCookies = document.cookie;",
              annotation:
                "Reading cookies gives you ONE BIG STRING with all cookies separated by '; '. You have to parse it yourself -- the API is not friendly!",
              label: "Read All",
            },
            {
              code: '\n// Result: "username=Ana; theme=dark; language=en"\n\n',
            },
            { code: "// Deleting a cookie: set max-age to 0\n" },
            {
              code: 'document.cookie = "username=; max-age=0; path=/";',
              annotation:
                "To delete a cookie, set it again with max-age=0. The browser removes it immediately. Make sure to use the same path as when you set it.",
              label: "Delete",
            },
          ]}
        />

        <JsConsole
          code={`// Parsing cookies -- you need a helper function:
const getCookie = (name) => {
  const cookies = "username=Ana; theme=dark; language=en"; // simulated
  const parts = cookies.split("; ");
  for (const cookie of parts) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
};

console.log("username:", getCookie("username"));
console.log("theme:", getCookie("theme"));
console.log("language:", getCookie("language"));
console.log("missing:", getCookie("pizza"));`}
          title="Cookies -- parsing the cookie string"
        />

        <InfoBox type="warning">
          Cookies have a <strong>~4 KB</strong> size limit per cookie and are
          sent with <strong>every HTTP request</strong>. Big cookies = slower
          site. For most client-side storage, use localStorage instead!
        </InfoBox>
      </section>

      {/* ── Section 3: localStorage ── */}
      <section>
        <h2>localStorage: Your Browser's Hard Drive</h2>
        <p>
          <code>localStorage</code> is the go-to for client-side storage. It is
          simple, holds <strong>~5-10 MB</strong>, persists forever (until
          cleared), and is NOT sent to the server. Perfect for user preferences,
          cached data, shopping carts, and more.
        </p>

        <Diagram title="The Four Essential localStorage Methods">
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                method: "setItem(key, value)",
                desc: "Store a value under a key name",
                example: 'localStorage.setItem("theme", "dark")',
                color: "bg-green-50 border-green-300",
              },
              {
                method: "getItem(key)",
                desc: "Retrieve the value for a key (or null)",
                example: 'localStorage.getItem("theme") // "dark"',
                color: "bg-blue-50 border-blue-300",
              },
              {
                method: "removeItem(key)",
                desc: "Remove one specific item",
                example: 'localStorage.removeItem("theme")',
                color: "bg-orange-50 border-orange-300",
              },
              {
                method: "clear()",
                desc: "Remove ALL items at once",
                example: "localStorage.clear()",
                color: "bg-red-50 border-red-300",
              },
            ].map((item, i) => (
              <div key={i} className={`p-4 rounded-lg border-2 ${item.color}`}>
                <code className="font-bold text-gray-800 text-sm">
                  {item.method}
                </code>
                <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
                <div className="mt-2 bg-white/60 rounded px-2 py-1">
                  <code className="text-xs text-gray-500">{item.example}</code>
                </div>
              </div>
            ))}
          </div>
        </Diagram>

        <JsConsole
          code={`// The 4 essential methods:

// 1. setItem(key, value) -- store something
localStorage.setItem("username", "Ana");
localStorage.setItem("score", "95");
localStorage.setItem("theme", "dark");

// 2. getItem(key) -- retrieve it
console.log("Username:", localStorage.getItem("username"));
console.log("Score:", localStorage.getItem("score"));
console.log("Missing key:", localStorage.getItem("doesNotExist")); // null!

// 3. removeItem(key) -- remove one item
localStorage.removeItem("score");
console.log("After remove:", localStorage.getItem("score")); // null

// 4. clear() -- remove EVERYTHING
// localStorage.clear(); // (not running this so we keep our data)

console.log("---");
console.log("Items stored:", localStorage.length);`}
          title="localStorage basics -- 4 methods to remember"
        />

        <h3>The Big Gotcha: Everything is a String!</h3>

        <JsConsole
          code={`// localStorage ONLY stores strings!
localStorage.setItem("age", "25");
const age = localStorage.getItem("age");
console.log("age:", age, "| type:", typeof age); // "25" string, not number!

localStorage.setItem("loggedIn", "true");
const loggedIn = localStorage.getItem("loggedIn");
console.log("loggedIn:", loggedIn, "| type:", typeof loggedIn); // "true" STRING!

// So how do we store objects and arrays?
// JSON to the rescue!

const user = {
  name: "Nino",
  email: "nino@btu.edu.ge",
  preferences: { theme: "dark", language: "en" },
};

// STORE: convert to JSON string first
localStorage.setItem("user", JSON.stringify(user));

// RETRIEVE: parse back to an object
const stored = JSON.parse(localStorage.getItem("user"));
console.log("---");
console.log("Name:", stored.name);
console.log("Theme:", stored.preferences.theme);

// ARRAYS work the same way:
const cart = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Mouse", price: 29 },
];
localStorage.setItem("cart", JSON.stringify(cart));
const loadedCart = JSON.parse(localStorage.getItem("cart"));
console.log("Cart has", loadedCart.length, "items");
console.log("Total: $" + loadedCart.reduce((s, i) => s + i.price, 0));`}
          title="Storing objects and arrays with JSON"
        />

        <InfoBox type="tip">
          <strong>Pro pattern:</strong> Always wrap <code>JSON.parse()</code> in
          a try/catch! If the stored data is corrupted, your whole app could
          crash.
        </InfoBox>
      </section>

      {/* ── Section 4: sessionStorage ── */}
      <section>
        <h2>sessionStorage: The Temporary Notebook</h2>
        <p>
          <code>sessionStorage</code> has the <strong>exact same API</strong> as
          localStorage (setItem, getItem, removeItem, clear), but with one key
          difference: data is <strong>cleared when the tab is closed</strong>.
        </p>

        <JsConsole
          code={`// Same API as localStorage -- just replace the name!
sessionStorage.setItem("currentStep", "3");
sessionStorage.setItem("formDraft", JSON.stringify({
  name: "Luka",
  email: "luka@example.com",
}));

console.log("Current step:", sessionStorage.getItem("currentStep"));

const draft = JSON.parse(sessionStorage.getItem("formDraft"));
console.log("Draft name:", draft.name);
console.log("Draft email:", draft.email);

console.log("---");
console.log("When to use sessionStorage:");
console.log("  - Multi-step form wizards (remember progress)");
console.log("  - One-time notification dismissals");
console.log("  - Temporary UI state");
console.log("  - Data that should NOT persist between visits");`}
          title="sessionStorage -- same API, temporary data"
        />
      </section>

      {/* ── Section 5: Comparison ── */}
      <section>
        <h2>The Big Comparison</h2>

        <Diagram title="Cookies vs localStorage vs sessionStorage">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 border border-gray-200 font-bold text-gray-700">
                    Feature
                  </th>
                  <th className="text-left p-3 border border-gray-200 font-bold text-amber-700">
                    Cookies
                  </th>
                  <th className="text-left p-3 border border-gray-200 font-bold text-blue-700">
                    localStorage
                  </th>
                  <th className="text-left p-3 border border-gray-200 font-bold text-purple-700">
                    sessionStorage
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Size limit", "~4 KB", "~5-10 MB", "~5-10 MB"],
                  ["Lifespan", "Set manually", "Forever", "Until tab closes"],
                  ["Sent to server?", "Yes, every request!", "No", "No"],
                  [
                    "Accessible from",
                    "Client + Server",
                    "Client only",
                    "Client only",
                  ],
                  [
                    "API friendliness",
                    "Terrible (one big string)",
                    "Great (setItem/getItem)",
                    "Great (setItem/getItem)",
                  ],
                  [
                    "Best for",
                    "Auth tokens, server data",
                    "Preferences, cart, cache",
                    "Temp form data, wizard steps",
                  ],
                ].map(([feature, cookie, local, session], i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="p-3 border border-gray-200 font-medium text-gray-700">
                      {feature}
                    </td>
                    <td className="p-3 border border-gray-200 text-gray-600">
                      {cookie}
                    </td>
                    <td className="p-3 border border-gray-200 text-gray-600">
                      {local}
                    </td>
                    <td className="p-3 border border-gray-200 text-gray-600">
                      {session}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Diagram>
      </section>

      {/* ── Section 6: Practical Patterns ── */}
      <section>
        <h2>Practical Pattern: Theme Toggle with localStorage</h2>
        <p>
          One of the most common uses of localStorage is remembering user
          preferences like dark/light mode. Here is the pattern:
        </p>

        <AnnotatedCode
          title="Theme toggle pattern"
          segments={[
            { code: "// On page load: restore saved theme\n" },
            {
              code: 'const saved = localStorage.getItem("theme") || "light";',
              annotation:
                "Try to read the saved theme. If nothing is saved (null), default to 'light'. The || operator provides the fallback.",
              label: "Load",
            },
            { code: "\n" },
            {
              code: "document.body.className = saved;",
              annotation:
                "Apply the saved theme by setting the body's CSS class. Your CSS should define .light and .dark classes with appropriate styles.",
              label: "Apply",
            },
            { code: "\n\n// Toggle function\n" },
            { code: "function toggleTheme() {\n" },
            { code: '  const isDark = document.body.className === "dark";\n' },
            { code: '  const newTheme = isDark ? "light" : "dark";\n\n' },
            { code: "  document.body.className = newTheme;\n" },
            {
              code: '  localStorage.setItem("theme", newTheme);',
              annotation:
                "Save the new choice to localStorage. Next time the page loads, the saved theme will be restored automatically by the code above.",
              label: "Save",
            },
            { code: "\n}" },
          ]}
        />

        <JsConsole
          code={`// Simulating the theme toggle pattern
let currentTheme = localStorage.getItem("demo-theme") || "light";
console.log("Current theme:", currentTheme);

// Toggle
currentTheme = currentTheme === "dark" ? "light" : "dark";
localStorage.setItem("demo-theme", currentTheme);
console.log("After toggle:", currentTheme);

// Toggle again
currentTheme = currentTheme === "dark" ? "light" : "dark";
localStorage.setItem("demo-theme", currentTheme);
console.log("After second toggle:", currentTheme);

console.log("---");
console.log("Saved in localStorage:", localStorage.getItem("demo-theme"));`}
          title="Theme toggle in action"
        />
      </section>

      {/* ── Section 7: Security ── */}
      <section>
        <h2>Security: What NOT to Store</h2>

        <Diagram title="Storage Security Rules">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 bg-green-50 rounded-xl p-5 border-2 border-green-300">
              <h4 className="font-bold text-green-700 mb-3">
                Safe to store in localStorage
              </h4>
              <ul className="space-y-2 text-sm text-green-800">
                <li>Theme preferences (dark/light)</li>
                <li>Language settings</li>
                <li>Shopping cart items</li>
                <li>UI state (sidebar open/closed)</li>
                <li>Non-sensitive user preferences</li>
                <li>Cached non-sensitive data</li>
              </ul>
            </div>
            <div className="flex-1 bg-red-50 rounded-xl p-5 border-2 border-red-300">
              <h4 className="font-bold text-red-700 mb-3">NEVER store these</h4>
              <ul className="space-y-2 text-sm text-red-800">
                <li>Passwords</li>
                <li>Credit card numbers</li>
                <li>API keys or secrets</li>
                <li>Personal identification numbers</li>
                <li>Social security numbers</li>
                <li>Authentication tokens (use HttpOnly cookies)</li>
              </ul>
            </div>
          </div>
        </Diagram>

        <InfoBox type="warning">
          <strong>
            NEVER store sensitive data in localStorage or sessionStorage!
          </strong>{" "}
          Any JavaScript on your page can read it -- including malicious scripts
          injected through XSS attacks. For auth tokens, use HttpOnly cookies
          that JavaScript cannot read.
        </InfoBox>
      </section>

      {/* ── Exercises ── */}
      <section>
        <h2>Practice Time!</h2>

        <ExerciseBlock number={1}>
          <p>
            <strong>Note Saver:</strong> Create a page with a textarea and two
            buttons: "Save Note" and "Clear Note." When Save is clicked, store
            the textarea content in localStorage. On page load, restore the
            saved note. Clear removes it.
          </p>
        </ExerciseBlock>

        <ExerciseBlock number={2}>
          <p>
            <strong>Visit Counter:</strong> Using localStorage, create a page
            that counts how many times the user has visited. Display the count,
            first visit date, and most recent visit date. Add a "Reset" button.
          </p>
        </ExerciseBlock>

        <ExerciseBlock number={3}>
          <p>
            <strong>Settings Dashboard:</strong> Build a settings page where the
            user can choose: theme (dark/light), font size (small/medium/large),
            and accent color. Save all settings in localStorage as a single JSON
            object. Apply the settings immediately and restore them on page
            load.
          </p>
        </ExerciseBlock>
      </section>

      {/* ── Homework ── */}
      <HomeworkBlock>
        <h4>Persistent Todo App</h4>
        <p>
          Build a fully functional Todo application that saves all data in
          localStorage:
        </p>
        <ol>
          <li>Add todos with a text input and button.</li>
          <li>Click a todo to toggle done/undone.</li>
          <li>Each todo has a delete button.</li>
          <li>All todos persist in localStorage across page refreshes.</li>
          <li>Add filters: "All", "Active", "Completed" buttons.</li>
          <li>Show a count: "X items remaining" (active only).</li>
          <li>"Clear Completed" button removes all done todos.</li>
          <li>
            Bonus: Add a dark/light theme toggle saved in localStorage
            separately.
          </li>
        </ol>
        <InfoBox type="tip">
          Structure your todos as <code>{"[{ id, text, completed }]"}</code>.
          Write a <code>saveTodos()</code> and <code>renderTodos()</code>{" "}
          function. Every change should update both the DOM and localStorage.
        </InfoBox>
      </HomeworkBlock>
    </LectureWrapper>
  );
};

export default Lecture15;
