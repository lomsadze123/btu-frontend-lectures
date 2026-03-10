import LectureWrapper from "../../components/LectureWrapper";
import AnnotatedCode from "../../components/AnnotatedCode";
import Diagram from "../../components/Diagram";
import InfoBox from "../../components/InfoBox";
import ExerciseBlock from "../../components/ExerciseBlock";
import HomeworkBlock from "../../components/HomeworkBlock";
import JsConsole from "../../components/JsConsole";

const Lecture11 = () => {
  return (
    <LectureWrapper id="11" title="Functions & Closures">
      {/* ── Section 1: Intro ── */}
      <section>
        <h2>Functions: The Building Blocks of Everything</h2>
        <p>
          If variables are the nouns of JavaScript, functions are the{" "}
          <strong>verbs</strong>. They package up a piece of logic so you can
          name it, reuse it, and compose it with other pieces. Think of a
          function like a <strong>vending machine</strong>: you put something in
          (parameters), the machine does some work, and something comes out
          (return value).
        </p>
        <p>
          Today we cover every way to create functions, how scope really works,
          and a powerful concept called <strong>closures</strong> that drives
          much of real-world JavaScript.
        </p>

        <Diagram title="Anatomy of a Function">
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-5 max-w-md mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="bg-blue-900/40 border border-blue-500/30 rounded px-3 py-2">
                <div className="text-xs text-blue-400">Input</div>
                <div className="text-sm text-gray-300">Parameters</div>
              </div>
              <div className="text-gray-500 text-xl">&rarr;</div>
              <div className="bg-yellow-900/40 border border-yellow-500/30 rounded px-4 py-2">
                <div className="text-xs text-yellow-400">Processing</div>
                <div className="text-sm text-gray-300">Function Body</div>
              </div>
              <div className="text-gray-500 text-xl">&rarr;</div>
              <div className="bg-green-900/40 border border-green-500/30 rounded px-3 py-2">
                <div className="text-xs text-green-400">Output</div>
                <div className="text-sm text-gray-300">Return Value</div>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              If no return statement is used, the function returns{" "}
              <code>undefined</code>.
            </p>
          </div>
        </Diagram>
      </section>

      {/* ── Section 2: Declaration vs Expression ── */}
      <section>
        <h2>Function Declaration vs Expression</h2>
        <p>
          There are two classic ways to create a function. They look similar but
          differ in one important way: <strong>hoisting</strong>.
        </p>

        <Diagram title="Declaration vs Expression">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
              <div className="font-bold text-green-300 mb-2">Declaration</div>
              <code className="text-xs text-gray-300 block mb-2">
                function greet(name) {"{ ... }"}
              </code>
              <ul className="text-xs text-gray-400 space-y-1 list-disc list-inside">
                <li>Hoisted -- can be called before its definition</li>
                <li>Has its own name</li>
                <li>Great for top-level utility functions</li>
              </ul>
            </div>
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
              <div className="font-bold text-blue-300 mb-2">Expression</div>
              <code className="text-xs text-gray-300 block mb-2">
                const greet = function(name) {"{ ... }"};
              </code>
              <ul className="text-xs text-gray-400 space-y-1 list-disc list-inside">
                <li>NOT hoisted -- must be defined before use</li>
                <li>Stored in a variable</li>
                <li>Good for callbacks and object methods</li>
              </ul>
            </div>
          </div>
        </Diagram>

        <JsConsole
          code={`// DECLARATION -- hoisted! Can call before definition.
greet("Alice");

function greet(name) {
  console.log(\`Hello, \${name}!\`);
}

greet("Bob");

// EXPRESSION -- NOT hoisted. Must define before calling.
// sayHi("Alice");  // Would crash!

const sayHi = function(name) {
  console.log(\`Hi, \${name}!\`);
};

sayHi("Alice");
sayHi("Bob");`}
          title="Declaration (hoisted) vs Expression (not hoisted)"
        />

        <InfoBox type="info">
          <strong>When to use which?</strong> Declarations are great for
          top-level utility functions you want available everywhere. Expressions
          (and arrow functions) are preferred when passing functions as
          arguments or storing them in objects.
        </InfoBox>
      </section>

      {/* ── Section 3: Arrow Functions ── */}
      <section>
        <h2>Arrow Functions: The Modern Syntax</h2>
        <p>
          Arrow functions (<code>=&gt;</code>) were introduced in ES6 and
          quickly became the most popular way to write short functions. They
          have several convenient shortcuts.
        </p>

        <AnnotatedCode
          title="Arrow function syntax variations"
          segments={[
            { code: "// Full body (explicit return)\n" },
            {
              code: "const add = (a, b) => {\n  return a + b;\n};",
              annotation:
                "With curly braces you must explicitly write 'return'. This form is used when the function body has multiple statements.",
              label: "full body",
            },
            { code: "\n\n// Single expression (implicit return)\n" },
            {
              code: "const addShort = (a, b) => a + b;",
              annotation:
                "Without curly braces, the expression is automatically returned. Perfect for one-liners.",
              label: "implicit return",
            },
            { code: "\n\n// Single parameter (no parentheses needed)\n" },
            {
              code: "const double = num => num * 2;",
              annotation:
                "When there is exactly one parameter, the parentheses around it are optional.",
              label: "single param",
            },
            { code: "\n\n// No parameters (empty parentheses required)\n" },
            {
              code: 'const sayHello = () => "Hello!";',
              annotation:
                "With zero parameters you must include the empty parentheses ().",
              label: "no params",
            },
            { code: "\n\n// Returning an object (wrap in parentheses)\n" },
            {
              code: "const makeUser = (name, age) => ({ name, age });",
              annotation:
                "To return an object literal with implicit return, wrap it in parentheses so JS does not confuse the braces with a function body.",
              label: "return object",
            },
          ]}
        />

        <JsConsole
          code={`const add = (a, b) => a + b;
const double = num => num * 2;
const sayHello = () => "Hello!";
const makeUser = (name, age) => ({ name, age });

console.log("add(3, 4):", add(3, 4));
console.log("double(5):", double(5));
console.log("sayHello():", sayHello());
console.log("makeUser:", makeUser("Nino", 22));

// Arrow functions shine as callbacks
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(n => n * n);
console.log("Squared:", squared);`}
          title="Arrow functions in practice"
        />

        <InfoBox type="tip">
          Arrow functions are ideal for callbacks:{" "}
          <code>array.map(item =&gt; item.name)</code>. Use regular declarations
          for standalone named functions that benefit from hoisting.
        </InfoBox>
      </section>

      {/* ── Section 4: Parameters ── */}
      <section>
        <h2>Parameters: Default and Rest</h2>

        <Diagram title="Default vs Rest Parameters">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
              <div className="font-bold text-yellow-300 mb-2">
                Default Parameters
              </div>
              <code className="text-xs text-gray-300 block mb-2">
                function greet(name = "Guest")
              </code>
              <div className="text-xs text-gray-400">
                Provide a fallback value when no argument is passed (or{" "}
                <code>undefined</code> is passed).
              </div>
            </div>
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
              <div className="font-bold text-purple-300 mb-2">
                Rest Parameters (...)
              </div>
              <code className="text-xs text-gray-300 block mb-2">
                function sum(...numbers)
              </code>
              <div className="text-xs text-gray-400">
                Collects all remaining arguments into a real array. Must be the
                last parameter.
              </div>
            </div>
          </div>
        </Diagram>

        <JsConsole
          code={`// Default parameters
const greet = (name = "Guest", greeting = "Hello") => {
  console.log(\`\${greeting}, \${name}!\`);
};
greet("Luka", "Hi");   // "Hi, Luka!"
greet("Luka");          // "Hello, Luka!"
greet();                // "Hello, Guest!"

// Rest parameters
const sum = (...numbers) => {
  return numbers.reduce((total, n) => total + n, 0);
};
console.log("sum(1,2):", sum(1, 2));
console.log("sum(1,2,3,4,5):", sum(1, 2, 3, 4, 5));

// Mix regular and rest (rest must be last!)
const introduce = (greeting, ...names) => {
  console.log(\`\${greeting}: \${names.join(", ")}\`);
};
introduce("Welcome", "Ana", "Giorgi", "Nino");`}
          title="Default and rest parameters"
        />
      </section>

      {/* ── Section 5: IIFE ── */}
      <section>
        <h2>IIFE -- Immediately Invoked Function Expressions</h2>
        <p>
          An IIFE is a function that runs <strong>the instant</strong> it is
          defined. You wrap it in parentheses and call it right away. It creates
          a private scope -- nothing inside leaks out.
        </p>

        <AnnotatedCode
          title="IIFE pattern"
          segments={[
            {
              code: "(",
              annotation:
                "The opening parenthesis tells JavaScript to treat the function keyword as an expression rather than a declaration.",
              label: "wrapper",
            },
            {
              code: 'function () {\n  const secret = "hidden";\n  console.log(secret);\n}',
            },
            {
              code: ")()",
              annotation:
                "The closing parenthesis ends the expression, and the final () immediately invokes it. The function runs once and its scope is garbage-collected.",
              label: "invocation",
            },
            { code: ";\n\n// Arrow function IIFE:\n" },
            {
              code: '(() => {\n  console.log("Runs immediately!");\n})();',
              annotation:
                "The same pattern works with arrow functions. This is the most common modern IIFE syntax.",
              label: "arrow IIFE",
            },
          ]}
        />

        <JsConsole
          code={`// IIFE with a return value
const result = (() => {
  const x = 10;
  const y = 20;
  return x + y;
})();

console.log("IIFE returned:", result);  // 30

// Variables inside are private!
// console.log(x);  // would throw an error
console.log("Variables inside IIFEs are truly private.");`}
          title="IIFE -- run immediately, keep things private"
        />

        <InfoBox type="info">
          While ES6 modules have mostly replaced IIFEs for code organization,
          you will still encounter them in older codebases. They are also a
          great stepping stone to understanding closures.
        </InfoBox>
      </section>

      {/* ── Section 6: Scope Chain ── */}
      <section>
        <h2>Scope Chain and Lexical Scope</h2>
        <p>
          <strong>Lexical scope</strong> means a function's scope is determined
          by <em>where it is written</em> in the source code, not where it is
          called. When JavaScript looks for a variable, it starts in the current
          scope and walks outward through parent scopes. This is the{" "}
          <strong>scope chain</strong>.
        </p>

        <Diagram title="Scope Chain: One-Way Mirror">
          <div className="flex flex-col items-center gap-0 max-w-sm mx-auto">
            <div className="w-full bg-red-900/20 border-2 border-red-500/30 rounded-t-lg p-3 text-center">
              <div className="font-bold text-red-300 text-sm">Global</div>
              <code className="text-xs text-gray-400">
                const globalVar = "..."
              </code>
            </div>
            <div className="text-gray-500 text-xs">
              can see &uarr; | cannot see &darr;
            </div>
            <div className="w-5/6 bg-yellow-900/20 border-x-2 border-yellow-500/30 p-3 text-center">
              <div className="font-bold text-yellow-300 text-sm">outer()</div>
              <code className="text-xs text-gray-400">
                const outerVar = "..."
              </code>
            </div>
            <div className="text-gray-500 text-xs">
              can see &uarr; | cannot see &darr;
            </div>
            <div className="w-2/3 bg-green-900/20 border-2 border-green-500/30 rounded-b-lg p-3 text-center">
              <div className="font-bold text-green-300 text-sm">inner()</div>
              <code className="text-xs text-gray-400">can see all three!</code>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">
            Inner functions can see outer variables, but outer functions can
            never see inner variables.
          </p>
        </Diagram>

        <JsConsole
          code={`const globalVar = "I am global";

function outer() {
  const outerVar = "I am from outer";

  function inner() {
    const innerVar = "I am from inner";
    // inner can see everything above it
    console.log(innerVar);   // own variable
    console.log(outerVar);   // parent's variable
    console.log(globalVar);  // global variable
  }

  inner();
  // console.log(innerVar);  // ERROR! Can't look inward
}

outer();

// Lexical scope: WHERE you write matters
const name = "Global";

function printName() {
  console.log(name);  // always sees "Global"
}

function wrapper() {
  const name = "Wrapper";
  printName();  // still prints "Global"!
}

wrapper();`}
          title="Scope chain and lexical scope"
        />
      </section>

      {/* ── Section 7: Closures ── */}
      <section>
        <h2>Closures: The Superpower</h2>
        <p>
          A <strong>closure</strong> happens when a function "remembers"
          variables from its outer scope even <em>after</em> the outer function
          has finished running. This is one of the most powerful concepts in
          JavaScript.
        </p>

        <Diagram title="How a Closure Works">
          <div className="max-w-md mx-auto space-y-3">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center">
              <div className="text-sm text-gray-400 mb-2">
                1. Outer function runs and creates a local variable
              </div>
              <code className="text-xs text-yellow-300">
                function outer() {"{ let count = 0; ... }"}
              </code>
            </div>
            <div className="text-center text-gray-500">&darr;</div>
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center">
              <div className="text-sm text-gray-400 mb-2">
                2. Outer function returns an inner function
              </div>
              <code className="text-xs text-blue-300">
                return function inner() {"{ count++; }"}
              </code>
            </div>
            <div className="text-center text-gray-500">&darr;</div>
            <div className="bg-indigo-900/30 border border-indigo-500/30 rounded-lg p-4 text-center">
              <div className="text-sm text-gray-400 mb-2">
                3. Outer function is done, but inner still has access to{" "}
                <code>count</code>
              </div>
              <div className="text-xs text-indigo-300 font-bold">
                This is a closure!
              </div>
            </div>
          </div>
        </Diagram>

        <JsConsole
          code={`// Basic closure
function createGreeter(greeting) {
  return function(name) {
    console.log(\`\${greeting}, \${name}!\`);
  };
}

const sayHello = createGreeter("Hello");
const sayGammarjoba = createGreeter("Gammarjoba");

// createGreeter is done, but the inner functions
// still remember their greeting values!
sayHello("Ana");
sayGammarjoba("Nino");`}
          title="A simple closure"
        />

        <JsConsole
          code={`// Private variables with closures
const createCounter = () => {
  let count = 0;  // PRIVATE -- nobody can touch it directly

  return {
    increment: () => { count++; return count; },
    decrement: () => { count--; return count; },
    getCount: () => count,
  };
};

const counter = createCounter();
console.log(counter.increment());  // 1
console.log(counter.increment());  // 2
console.log(counter.increment());  // 3
console.log(counter.decrement());  // 2
console.log(counter.getCount());   // 2

// count is NOT accessible directly!
console.log("counter.count:", counter.count);  // undefined`}
          title="Private variables with closures"
        />

        <JsConsole
          code={`// Factory pattern using closures
const createTaxCalculator = (taxRate) => {
  return (price) => {
    const tax = price * taxRate;
    const total = price + tax;
    return \`Price: $\${price}, Tax: $\${tax.toFixed(2)}, Total: $\${total.toFixed(2)}\`;
  };
};

const georgianVAT = createTaxCalculator(0.18);
const germanVAT = createTaxCalculator(0.19);

console.log("Georgia:", georgianVAT(100));
console.log("Germany:", germanVAT(100));
// Each calculator remembers its own tax rate!`}
          title="Factory functions with closures"
        />

        <InfoBox type="warning">
          Classic trap: using <code>var</code> in a loop with closures. Because{" "}
          <code>var</code> is function-scoped, all callbacks share the same
          variable. Always use <code>let</code> in loops -- each iteration gets
          its own scope.
        </InfoBox>
      </section>

      {/* ── Section 8: Big Example ── */}
      <section>
        <h2>Putting It All Together: Bank Account</h2>
        <JsConsole
          code={`const createBankAccount = (ownerName, initialBalance = 0) => {
  let balance = initialBalance;
  const transactions = [];

  const logTransaction = (type, amount) => {
    transactions.push({ type, amount, balance });
  };

  return {
    getOwner: () => ownerName,
    getBalance: () => balance,
    deposit: (amount) => {
      if (amount <= 0) { console.log("Amount must be positive!"); return; }
      balance += amount;
      logTransaction("deposit", amount);
      console.log(\`Deposited $\${amount}. Balance: $\${balance}\`);
    },
    withdraw: (amount) => {
      if (amount <= 0) { console.log("Amount must be positive!"); return; }
      if (amount > balance) { console.log("Insufficient funds!"); return; }
      balance -= amount;
      logTransaction("withdrawal", amount);
      console.log(\`Withdrew $\${amount}. Balance: $\${balance}\`);
    },
    getHistory: () => [...transactions],
  };
};

const account = createBankAccount("Nino", 1000);
account.deposit(500);
account.withdraw(200);
account.withdraw(2000);  // Insufficient!
console.log("Balance:", account.getBalance());
console.log("History:", account.getHistory());
// balance and transactions are PRIVATE!
console.log("account.balance:", account.balance);  // undefined`}
          title="Bank Account with closures"
        />
      </section>

      {/* ── Exercises ── */}
      <ExerciseBlock number={1}>
        <p>
          <strong>Multiplier Factory:</strong> Write{" "}
          <code>createMultiplier(factor)</code> that returns a function which
          multiplies its argument by that factor.
        </p>
        <AnnotatedCode
          title="Expected usage"
          segments={[
            { code: "const double = createMultiplier(2);\n" },
            { code: "const triple = createMultiplier(3);\n" },
            { code: "console.log(double(5));   " },
            { code: "// 10\n" },
            { code: "console.log(triple(5));   " },
            { code: "// 15\n" },
            { code: "console.log([1,2,3,4,5].map(triple)); " },
            { code: "// [3,6,9,12,15]" },
          ]}
        />
      </ExerciseBlock>

      <ExerciseBlock number={2}>
        <p>
          <strong>Rate Limiter:</strong> Write{" "}
          <code>createRateLimiter(limit)</code> that returns a function. Each
          call increments an internal counter. If it exceeds the limit, log
          "Rate limit exceeded!" instead of running.
        </p>
        <AnnotatedCode
          title="Expected usage"
          segments={[
            { code: "const limiter = createRateLimiter(3);\n" },
            { code: 'limiter(); // "Action performed (1/3)"\n' },
            { code: 'limiter(); // "Action performed (2/3)"\n' },
            { code: 'limiter(); // "Action performed (3/3)"\n' },
            { code: 'limiter(); // "Rate limit exceeded!"' },
          ]}
        />
      </ExerciseBlock>

      <ExerciseBlock number={3}>
        <p>
          <strong>Once Function:</strong> Write <code>once(fn)</code> that takes
          a function and returns a new function. The new function runs the
          original only the <em>first</em> time. Subsequent calls return the
          cached result without running the original again.
        </p>
        <AnnotatedCode
          title="Expected usage"
          segments={[
            { code: "const initialize = once(() => {\n" },
            { code: '  console.log("Initializing...");\n' },
            { code: '  return "App Ready";\n' },
            { code: "});\n" },
            {
              code: 'console.log(initialize()); // logs "Initializing...", returns "App Ready"\n',
            },
            {
              code: 'console.log(initialize()); // returns "App Ready" (no log!)',
            },
          ]}
        />
      </ExerciseBlock>

      <HomeworkBlock>
        <h4>Closure Toolkit</h4>
        <p>Build the following functions that each demonstrate closures:</p>
        <ol>
          <li>
            <strong>createPasswordChecker(correctPassword):</strong> Returns{" "}
            <code>check(input)</code> (true/false) and{" "}
            <code>getAttempts()</code>. Password and attempt count are private.
          </li>
          <li>
            <strong>createShoppingCart():</strong> Returns{" "}
            <code>addItem(name, price)</code>, <code>removeItem(name)</code>,{" "}
            <code>getItems()</code>, <code>getTotal()</code>. The items array is
            private.
          </li>
          <li>
            <strong>createIdGenerator(prefix):</strong> Returns a function that
            generates sequential IDs like "USER_1", "USER_2", etc. The counter
            is private.
          </li>
        </ol>
        <InfoBox type="tip">
          Each function uses closures to keep internal state private. The inner
          functions have access to the outer function's variables even after the
          outer function returns.
        </InfoBox>
      </HomeworkBlock>
    </LectureWrapper>
  );
};

export default Lecture11;
