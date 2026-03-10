import LectureWrapper from "../../components/LectureWrapper";
import AnnotatedCode from "../../components/AnnotatedCode";
import Diagram from "../../components/Diagram";
import InfoBox from "../../components/InfoBox";
import ExerciseBlock from "../../components/ExerciseBlock";
import HomeworkBlock from "../../components/HomeworkBlock";
import JsConsole from "../../components/JsConsole";

const Lecture09 = () => {
  return (
    <LectureWrapper id="09" title="JavaScript Fundamentals">
      {/* ── Section 1: Welcome ── */}
      <section>
        <h2>Welcome to JavaScript!</h2>
        <p>
          Up until now you have been building static pages with HTML and CSS.
          They look great, but they just sit there. JavaScript is the language
          that brings pages to life -- handling clicks, validating forms,
          fetching data, and much more.
        </p>
        <p>
          Brendan Eich created JavaScript in <strong>10 days</strong> back in
          1995. Despite the name it has nothing to do with Java -- that was a
          marketing decision. Today JS runs in browsers, on servers (Node.js),
          and practically everywhere else.
        </p>

        <Diagram title="The Three Pillars of the Web">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-stretch">
            <div className="flex-1 bg-orange-900/40 border border-orange-500/40 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🦴</div>
              <div className="font-bold text-orange-300 mb-1">HTML</div>
              <div className="text-sm text-gray-300">Structure &amp; Content</div>
              <div className="text-xs text-gray-500 mt-1">The skeleton</div>
            </div>
            <div className="flex-1 bg-blue-900/40 border border-blue-500/40 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🎨</div>
              <div className="font-bold text-blue-300 mb-1">CSS</div>
              <div className="text-sm text-gray-300">Presentation &amp; Style</div>
              <div className="text-xs text-gray-500 mt-1">The clothing</div>
            </div>
            <div className="flex-1 bg-yellow-900/40 border border-yellow-500/40 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🧠</div>
              <div className="font-bold text-yellow-300 mb-1">JavaScript</div>
              <div className="text-sm text-gray-300">Behaviour &amp; Logic</div>
              <div className="text-xs text-gray-500 mt-1">The brain</div>
            </div>
          </div>
        </Diagram>

        <InfoBox type="info">
          JavaScript is officially called <strong>ECMAScript</strong>. When you
          see "ES6" or "ES2015," that refers to a version of the language
          specification. Modern JS (ES6+) introduced <code>let</code>,{" "}
          <code>const</code>, arrow functions, template literals, and many
          other features we will use throughout this course.
        </InfoBox>
      </section>

      {/* ── Section 2: Adding JS & console.log ── */}
      <section>
        <h2>Adding JavaScript to a Page</h2>
        <p>
          You include JavaScript in an HTML file using the{" "}
          <code>&lt;script&gt;</code> tag. The modern best practice is to place
          it in the <code>&lt;head&gt;</code> with the <code>defer</code>{" "}
          attribute, which tells the browser: "download this file in the
          background and run it only after the HTML is fully parsed."
        </p>

        <AnnotatedCode
          title="Linking a script file"
          segments={[
            { code: "<!DOCTYPE html>\n<html>\n<head>\n  " },
            {
              code: '<script defer src="app.js">',
              annotation:
                "The defer attribute ensures the script runs after HTML is fully loaded. The src attribute points to an external JS file -- always prefer external files over inline code.",
              label: "script tag",
            },
            { code: "</script>\n" },
            { code: "</head>\n<body>\n  <h1>Hello!</h1>\n</body>\n</html>" },
          ]}
        />

        <p>
          Your very first debugging tool is <code>console.log()</code>. Think
          of it as leaving sticky notes for yourself inside your code. Press{" "}
          <strong>Run</strong> below to try it out.
        </p>

        <JsConsole
          code={`console.log("Hello, world!");
console.log(42);
console.log("My age is", 25, "and I like", "pizza");
console.log("2 + 2 =", 2 + 2);`}
          title="Say hello to console.log()"
        />

        <InfoBox type="tip">
          In a real browser, press <code>F12</code> (or{" "}
          <code>Cmd+Option+I</code> on Mac) and click the "Console" tab to see
          your log output. In this course we have a built-in mini-console for
          convenience.
        </InfoBox>
      </section>

      {/* ── Section 3: Statements vs Expressions ── */}
      <section>
        <h2>Statements vs Expressions</h2>
        <p>
          Every piece of JavaScript code is either a <strong>statement</strong>{" "}
          (it performs an action) or an <strong>expression</strong> (it produces
          a value). Understanding the difference helps you read code more
          fluently.
        </p>

        <Diagram title="Statement vs Expression">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-4">
              <div className="font-bold text-purple-300 mb-2">Expression</div>
              <div className="text-sm text-gray-300 mb-2">Produces a value -- like a math problem</div>
              <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
                <li><code>5 + 3</code> &rarr; 8</li>
                <li><code>"Hi " + "there"</code> &rarr; "Hi there"</li>
                <li><code>10 &gt; 5</code> &rarr; true</li>
              </ul>
            </div>
            <div className="bg-teal-900/30 border border-teal-500/30 rounded-lg p-4">
              <div className="font-bold text-teal-300 mb-2">Statement</div>
              <div className="text-sm text-gray-300 mb-2">Performs an action -- like an instruction</div>
              <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
                <li><code>let score = 100;</code></li>
                <li><code>if (x &gt; 5) {"{ ... }"}</code></li>
                <li><code>for (let i = 0; ...)</code></li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">
            Quick test: if you can place it on the right side of <code>=</code>, it is an expression.
          </p>
        </Diagram>

        <JsConsole
          code={`// Expressions -- these PRODUCE values
console.log(5 + 3);          // 8
console.log("Hi " + "there"); // "Hi there"
console.log(10 > 5);         // true

// Statements -- these DO things
let score = 100;             // declares a variable
console.log(score);

// A statement can CONTAIN an expression
let result = 5 + 3;  // statement (let ...) wrapping expression (5 + 3)
console.log(result);`}
          title="Expressions vs Statements"
        />
      </section>

      {/* ── Section 4: Variables ── */}
      <section>
        <h2>Variables: let, const, and var</h2>
        <p>
          Variables are named containers for data. JavaScript offers three
          keywords for creating them: <code>let</code>, <code>const</code>,
          and the legacy <code>var</code>.
        </p>

        <Diagram title="let vs const vs var">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-2 px-3 text-gray-400">Feature</th>
                  <th className="py-2 px-3 text-green-400">const</th>
                  <th className="py-2 px-3 text-blue-400">let</th>
                  <th className="py-2 px-3 text-red-400">var</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-2 px-3">Reassignable?</td>
                  <td className="py-2 px-3">No</td>
                  <td className="py-2 px-3">Yes</td>
                  <td className="py-2 px-3">Yes</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2 px-3">Block-scoped?</td>
                  <td className="py-2 px-3">Yes</td>
                  <td className="py-2 px-3">Yes</td>
                  <td className="py-2 px-3">No (function-scoped)</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2 px-3">Re-declarable?</td>
                  <td className="py-2 px-3">No</td>
                  <td className="py-2 px-3">No</td>
                  <td className="py-2 px-3">Yes (silent bugs!)</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">Recommendation</td>
                  <td className="py-2 px-3 text-green-400 font-semibold">Default choice</td>
                  <td className="py-2 px-3 text-blue-400">When you must reassign</td>
                  <td className="py-2 px-3 text-red-400">Avoid</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Diagram>

        <AnnotatedCode
          title="Declaring variables"
          segments={[
            {
              code: "const ",
              annotation:
                "const creates a binding that cannot be reassigned. Use it by default for anything that should not change.",
              label: "const",
            },
            { code: "PI = 3.14159;\n" },
            {
              code: "let ",
              annotation:
                "let creates a binding that CAN be reassigned later. Use it for counters, accumulators, or any value that will change.",
              label: "let",
            },
            { code: "score = 0;\nscore = 10;  " },
            { code: "// OK -- let allows reassignment\n\n" },
            {
              code: "var ",
              annotation:
                "var is the legacy keyword. It ignores block scope, can be re-declared, and hoists in confusing ways. Avoid it in modern code.",
              label: "var (legacy)",
            },
            { code: "name = \"Bob\";\nvar name = \"Alice\";  " },
            { code: "// No error -- silently overwrites!" },
          ]}
        />

        <JsConsole
          code={`// const -- for values that stay put
const SITE_NAME = "My App";
console.log(SITE_NAME);

// BUT: const objects/arrays can still be modified internally
const colors = ["red", "green"];
colors.push("blue");  // works! The binding is const, not the contents.
console.log(colors);

// let -- for values that change
let count = 0;
count = count + 1;
console.log("count:", count);

// Naming rules: camelCase is the JS convention
let firstName = "Alice";
let isLoggedIn = true;
let MAX_RETRY = 5;  // ALL_CAPS for true constants
console.log(firstName, isLoggedIn, MAX_RETRY);`}
          title="const and let in practice"
        />

        <InfoBox type="warning">
          <strong>Golden rule:</strong> use <code>const</code> by default. Only
          switch to <code>let</code> when you genuinely need to reassign. Never
          use <code>var</code>.
        </InfoBox>
      </section>

      {/* ── Section 5: Scope ── */}
      <section>
        <h2>Scope: Where Variables Live</h2>
        <p>
          Scope determines where a variable is visible. Think of it like rooms
          in a house -- a variable declared in the kitchen is not available in
          the bedroom.
        </p>

        <Diagram title="The Three Levels of Scope">
          <div className="flex flex-col items-center gap-0">
            <div className="w-full max-w-md bg-red-900/20 border-2 border-red-500/30 rounded-t-lg p-4 text-center">
              <div className="font-bold text-red-300">Global Scope</div>
              <div className="text-xs text-gray-400">Visible everywhere</div>
              <code className="text-xs text-gray-300">const appName = "Demo";</code>
            </div>
            <div className="w-full max-w-sm bg-yellow-900/20 border-x-2 border-yellow-500/30 p-4 text-center">
              <div className="font-bold text-yellow-300">Function Scope</div>
              <div className="text-xs text-gray-400">Visible inside the function</div>
              <code className="text-xs text-gray-300">function greet() {"{ let msg = ... }"}</code>
            </div>
            <div className="w-full max-w-xs bg-green-900/20 border-2 border-green-500/30 rounded-b-lg p-4 text-center">
              <div className="font-bold text-green-300">Block Scope</div>
              <div className="text-xs text-gray-400">Visible inside {"{ }"} only (let/const)</div>
              <code className="text-xs text-gray-300">{"if (true) { let x = 1; }"}</code>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">
            Inner scopes can see outer variables, but never the other way around.
          </p>
        </Diagram>

        <JsConsole
          code={`// GLOBAL scope
const appName = "ScopeDemo";

function greet() {
  // FUNCTION scope
  let message = "Hello from inside!";
  console.log(appName);   // Can see global
  console.log(message);   // Can see own variable
}
greet();
// console.log(message);  // ERROR! message lives only in greet()

// BLOCK scope -- let/const stay inside { }
if (true) {
  let blockVar = "I'm trapped in this block!";
  console.log(blockVar);
}
// console.log(blockVar);  // ERROR! blockVar is gone

// var IGNORES block scope (this is why it's bad)
if (true) {
  var leaky = "I escape blocks!";
}
console.log(leaky);  // works -- yikes!`}
          title="Scope: global, function, and block"
        />
      </section>

      {/* ── Section 6: Data Types ── */}
      <section>
        <h2>Data Types: The 7 Primitives + Object</h2>
        <p>
          Every value in JavaScript has a type. There are seven{" "}
          <strong>primitive</strong> types (simple, immutable values) plus
          the <strong>Object</strong> type (for complex, mutable data).
        </p>

        <Diagram title="JavaScript Data Types">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { name: "String", example: '"hello"', color: "text-green-400" },
              { name: "Number", example: "42, 3.14", color: "text-blue-400" },
              { name: "Boolean", example: "true / false", color: "text-yellow-400" },
              { name: "undefined", example: "let x;", color: "text-gray-400" },
              { name: "null", example: "let x = null;", color: "text-gray-400" },
              { name: "Symbol", example: "Symbol('id')", color: "text-purple-400" },
              { name: "BigInt", example: "42n", color: "text-purple-400" },
              { name: "Object", example: "{ }, [ ]", color: "text-orange-400" },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-center"
              >
                <div className={`font-bold ${t.color}`}>{t.name}</div>
                <code className="text-xs text-gray-400">{t.example}</code>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">
            The first seven are primitives. Object is the complex type (arrays and functions are objects too).
          </p>
        </Diagram>

        <JsConsole
          code={`// String
let greeting = "Hello, World!";
console.log(greeting.length);            // 13
console.log(greeting.toUpperCase());     // "HELLO, WORLD!"

// Number (one type for integers and decimals)
let age = 25;
let price = 9.99;
console.log(typeof age);                 // "number"
console.log(0 / 0);                     // NaN (Not a Number)

// Boolean
let isOnline = true;
console.log(10 > 5);                    // true

// undefined vs null
let oops;
console.log(oops);                      // undefined (accidentally empty)
let selectedUser = null;
console.log(selectedUser);              // null (intentionally empty)

// typeof -- your type detective
console.log(typeof "hello");            // "string"
console.log(typeof 42);                 // "number"
console.log(typeof true);              // "boolean"
console.log(typeof undefined);          // "undefined"
console.log(typeof null);              // "object" (a famous JS bug since 1995!)`}
          title="The main data types"
        />

        <InfoBox type="info">
          Template literals (backtick strings) let you embed expressions
          directly: <code>{"`Hello ${name}`"}</code>. They also support
          multi-line strings without awkward concatenation.
        </InfoBox>

        <JsConsole
          code={`let name = "Alice";
let age = 25;

// Old way: concatenation
let oldWay = "Hello, " + name + "! Age: " + age;
console.log(oldWay);

// Modern way: template literals
let newWay = \`Hello, \${name}! Age: \${age}\`;
console.log(newWay);

// Any expression works inside \${}
console.log(\`2 + 2 = \${2 + 2}\`);
console.log(\`Adult? \${age >= 18}\`);`}
          title="Template literals"
        />
      </section>

      {/* ── Section 7: Type Coercion ── */}
      <section>
        <h2>Type Coercion: Implicit vs Explicit</h2>
        <p>
          JavaScript is a <strong>loosely typed</strong> language, which means
          it will sometimes convert values from one type to another behind
          your back. This is called <strong>implicit coercion</strong>. When
          you convert deliberately, that is <strong>explicit coercion</strong>.
        </p>

        <Diagram title="Implicit Coercion Cheat Sheet">
          <div className="space-y-3">
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3">
              <div className="font-bold text-red-300 text-sm mb-1">The + Trap</div>
              <div className="text-sm text-gray-300">
                When one side of <code>+</code> is a string, JS converts the other side to a string too.
              </div>
              <code className="text-xs text-gray-400">"5" + 3 &rarr; "53" (string!)</code>
            </div>
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3">
              <div className="font-bold text-green-300 text-sm mb-1">Other math operators</div>
              <div className="text-sm text-gray-300">
                <code>-</code>, <code>*</code>, <code>/</code> convert strings to numbers.
              </div>
              <code className="text-xs text-gray-400">"5" - 3 &rarr; 2 (number!)</code>
            </div>
            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-3">
              <div className="font-bold text-yellow-300 text-sm mb-1">Falsy values</div>
              <div className="text-sm text-gray-300">
                These are all treated as <code>false</code>:{" "}
                <code>0</code>, <code>""</code>, <code>null</code>,{" "}
                <code>undefined</code>, <code>NaN</code>, <code>false</code>
              </div>
            </div>
          </div>
        </Diagram>

        <JsConsole
          code={`// IMPLICIT coercion (JS does it for you)
console.log("5" + 3);       // "53" -- string wins with +
console.log("5" - 3);       // 2   -- other operators convert to number
console.log(true + 1);      // 2   -- true becomes 1
console.log(false + 1);     // 1   -- false becomes 0

// EXPLICIT coercion (you do it on purpose)
console.log(Number("42"));     // 42
console.log(Number("hello"));  // NaN
console.log(String(42));       // "42"
console.log(Boolean(1));       // true
console.log(Boolean(""));      // false
console.log(Boolean("0"));     // true (non-empty string!)
console.log(parseInt("42px")); // 42 (stops at non-digit)`}
          title="Implicit vs explicit coercion"
        />
      </section>

      {/* ── Section 8: Equality & Takeaways ── */}
      <section>
        <h2>== vs === : Strict Equality Matters</h2>
        <p>
          JavaScript has two equality operators. The triple-equals{" "}
          <code>===</code> checks both value <em>and</em> type (strict).
          The double-equals <code>==</code> converts types first (loose),
          which leads to surprising results.
        </p>

        <Diagram title="== vs === Comparison">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
              <div className="font-bold text-green-300 mb-2">=== Strict (use this!)</div>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><code>5 === "5"</code> &rarr; <span className="text-red-400">false</span></li>
                <li><code>true === 1</code> &rarr; <span className="text-red-400">false</span></li>
                <li><code>null === undefined</code> &rarr; <span className="text-red-400">false</span></li>
                <li><code>5 === 5</code> &rarr; <span className="text-green-400">true</span></li>
              </ul>
            </div>
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
              <div className="font-bold text-red-300 mb-2">== Loose (avoid!)</div>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><code>5 == "5"</code> &rarr; <span className="text-green-400">true</span> (coerces!)</li>
                <li><code>true == 1</code> &rarr; <span className="text-green-400">true</span> (coerces!)</li>
                <li><code>0 == ""</code> &rarr; <span className="text-green-400">true</span> (!!)</li>
                <li><code>"" == "0"</code> &rarr; <span className="text-red-400">false</span> (?!)</li>
              </ul>
            </div>
          </div>
        </Diagram>

        <JsConsole
          code={`// Always use ===
console.log(5 === 5);       // true
console.log(5 === "5");     // false (different types)
console.log(null === undefined); // false

// == does sneaky conversions
console.log(5 == "5");      // true  (coerces!)
console.log(0 == false);    // true  (coerces!)
console.log("" == false);   // true  (both become 0)
console.log(0 == "");       // true
console.log(0 == "0");      // true
console.log("" == "0");     // false -- inconsistent!`}
          title="Always use === (strict equality)"
        />

        <InfoBox type="warning">
          <strong>Rule #1 of JavaScript:</strong> always use <code>===</code>{" "}
          and <code>!==</code>. There is almost never a good reason to use
          loose equality.
        </InfoBox>
      </section>

      {/* ── Key Takeaways ── */}
      <section>
        <h2>Key Takeaways</h2>
        <ul>
          <li>JavaScript makes web pages interactive. It runs in browsers and on servers.</li>
          <li>Use <code>defer</code> when linking scripts in <code>&lt;head&gt;</code>.</li>
          <li><code>console.log()</code> is your primary debugging tool.</li>
          <li>Use <code>const</code> by default, <code>let</code> when you need to reassign, never <code>var</code>.</li>
          <li><code>let</code>/<code>const</code> are block-scoped; <code>var</code> is function-scoped.</li>
          <li>7 primitive types: string, number, boolean, null, undefined, symbol, bigint.</li>
          <li>Be aware of type coercion -- JS sneakily converts types with <code>+</code> and in boolean contexts.</li>
          <li>Always use <code>===</code>, never <code>==</code>.</li>
          <li>Template literals (<code>{"`${}`"}</code>) are the modern way to build strings.</li>
        </ul>
      </section>

      {/* ── Exercises ── */}
      <ExerciseBlock number={1}>
        <p>
          Create an HTML file with an external JavaScript file (use{" "}
          <code>defer</code>). In your JS file:
        </p>
        <ul>
          <li>
            Declare 5 variables using <code>const</code> and <code>let</code>{" "}
            appropriately: your name, age, whether you are a student (boolean),
            your favorite color, and a score that starts at 0.
          </li>
          <li>
            Log each variable with its type using <code>typeof</code> and
            template literals.
          </li>
          <li>Update the score to 100 and log it again.</li>
          <li>
            Try to reassign a <code>const</code>. What happens? Comment out the
            error and explain why in a comment.
          </li>
        </ul>
      </ExerciseBlock>

      <ExerciseBlock number={2}>
        <p>
          Explore type coercion. For each expression below, first write a
          comment with your prediction, then log the result and the{" "}
          <code>typeof</code>:
        </p>
        <ul>
          <li><code>"5" + 3</code></li>
          <li><code>"5" - 3</code></li>
          <li><code>true + true</code></li>
          <li><code>"10" * "2"</code></li>
          <li><code>5 === "5"</code></li>
          <li><code>5 == "5"</code></li>
          <li><code>null == undefined</code></li>
          <li><code>null === undefined</code></li>
          <li><code>Boolean(0)</code></li>
          <li><code>Boolean("0")</code></li>
        </ul>
        <p>How many did you predict correctly?</p>
      </ExerciseBlock>

      <ExerciseBlock number={3}>
        <p>
          Build a "User Profile Card" generator using template literals:
        </p>
        <ul>
          <li>
            Declare variables for: first name, last name, age, email, city,
            and an <code>isVerified</code> boolean.
          </li>
          <li>
            Use template literals to log a formatted card. The "Verified" line
            should show "Yes" or "No" using a ternary:{" "}
            <code>{"${isVerified ? \"Yes\" : \"No\"}"}</code>
          </li>
        </ul>
      </ExerciseBlock>

      <HomeworkBlock>
        <p>
          Create an HTML page linked to an external JS file. Complete all
          parts:
        </p>
        <ul>
          <li>
            <strong>Part 1 -- Variables:</strong> Declare at least 8 variables
            using <code>const</code>/<code>let</code> covering all common
            types. Log each with its type.
          </li>
          <li>
            <strong>Part 2 -- Coercion:</strong> Show 5 implicit and 5 explicit
            coercion examples with explanations in comments.
          </li>
          <li>
            <strong>Part 3 -- Equality:</strong> Write 6 comparisons where{" "}
            <code>===</code> and <code>==</code> give different results.
            Explain each.
          </li>
          <li>
            <strong>Part 4 -- Template Literals:</strong> Create a "Product
            Details" display with variables for product name, price, quantity,
            discount, and in-stock boolean. Calculate total and log a formatted
            summary.
          </li>
          <li>
            <strong>Part 5 -- Scope:</strong> Demonstrate block scope with{" "}
            <code>let</code> inside an <code>if</code> block. Show the
            variable is inaccessible outside (comment out with explanation).
          </li>
        </ul>
      </HomeworkBlock>
    </LectureWrapper>
  );
};

export default Lecture09;
