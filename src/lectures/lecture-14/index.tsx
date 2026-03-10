import LectureWrapper from "../../components/LectureWrapper";
import AnnotatedCode from "../../components/AnnotatedCode";
import Diagram from "../../components/Diagram";
import InfoBox from "../../components/InfoBox";
import ExerciseBlock from "../../components/ExerciseBlock";
import HomeworkBlock from "../../components/HomeworkBlock";
import JsConsole from "../../components/JsConsole";

const Lecture14 = () => {
  return (
    <LectureWrapper id="14" title="Fetch API & Async/Await">
      {/* ── Section 1: Intro ── */}
      <section>
        <h2>Time to Talk to the Internet!</h2>
        <p>
          So far, all our data has been hardcoded -- we wrote it ourselves in
          our JavaScript files. But real websites get their data from{" "}
          <strong>servers</strong>. When you open Instagram, your feed does not
          live inside the app -- it is fetched from Instagram's servers every
          time you open it.
        </p>
        <p>
          Today we learn how to do exactly that:{" "}
          <strong>fetch data from the internet</strong> and display it on a
          page. We will also learn <code>async/await</code>, which makes
          asynchronous code look clean and beautiful.
        </p>
      </section>

      {/* ── Section 2: What is an API? ── */}
      <section>
        <h2>What is an API?</h2>
        <p>
          An <strong>API (Application Programming Interface)</strong> is like a
          waiter in a restaurant. You (the browser) do not go into the kitchen
          (the server) yourself. You tell the waiter (the API) what you want,
          and the waiter brings it back to you.
        </p>

        <Diagram title="How a REST API Works">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-6 flex-wrap justify-center">
              <div className="text-center p-4 bg-blue-50 rounded-xl border-2 border-blue-300 w-36">
                <div className="text-3xl mb-1">💻</div>
                <div className="font-bold text-blue-700 text-sm">Browser</div>
                <div className="text-xs text-blue-500">(Client)</div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="text-sm font-mono text-gray-600">
                  HTTP Request →
                </div>
                <div className="h-0.5 w-32 bg-gray-300"></div>
                <div className="text-sm font-mono text-gray-600">
                  ← JSON Response
                </div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl border-2 border-green-300 w-36">
                <div className="text-3xl mb-1">🖥</div>
                <div className="font-bold text-green-700 text-sm">Server</div>
                <div className="text-xs text-green-500">(API)</div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 w-full max-w-lg">
              {[
                { method: "GET", desc: "Read data", color: "text-green-600" },
                { method: "POST", desc: "Create data", color: "text-blue-600" },
                {
                  method: "PUT/PATCH",
                  desc: "Update data",
                  color: "text-orange-600",
                },
                {
                  method: "DELETE",
                  desc: "Remove data",
                  color: "text-red-600",
                },
              ].map((m, i) => (
                <div
                  key={i}
                  className="text-center p-3 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <code className={`font-bold ${m.color}`}>{m.method}</code>
                  <div className="text-xs text-gray-500 mt-1">{m.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </Diagram>
      </section>

      {/* ── Section 3: JSON ── */}
      <section>
        <h2>JSON: The Language APIs Speak</h2>
        <p>
          When a server sends you data, it comes as a{" "}
          <strong>JSON string</strong> -- which looks almost like a JavaScript
          object, but it is just text. You need to <strong>parse</strong> it to
          use it.
        </p>

        <JsConsole
          code={`// JSON string (what comes from the server -- it is just text!)
const jsonString = '{"name": "Ana", "age": 22, "courses": ["Math", "CS"]}';
console.log("Type:", typeof jsonString); // "string"

// Parse it into a real JavaScript object
const user = JSON.parse(jsonString);
console.log("Type after parse:", typeof user); // "object"
console.log("Name:", user.name);
console.log("First course:", user.courses[0]);

console.log("---");

// Go the other way: object -> JSON string
const product = { name: "Laptop", price: 999, inStock: true };
const productJson = JSON.stringify(product);
console.log("As JSON:", productJson);

// Pretty-print (great for debugging!)
console.log("Pretty:\\n" + JSON.stringify(product, null, 2));`}
          title="JSON.parse() and JSON.stringify()"
        />

        <InfoBox type="tip">
          <code>JSON.stringify(data, null, 2)</code> is your best friend for
          debugging. The <code>2</code> means "indent with 2 spaces" -- much
          easier to read than a wall of text!
        </InfoBox>
      </section>

      {/* ── Section 4: Fetch API ── */}
      <section>
        <h2>The Fetch API: Getting Data from a Server</h2>
        <p>
          <code>fetch()</code> is built into every modern browser. You give it a
          URL, and it returns a <strong>Promise</strong> that resolves with the
          server's response.
        </p>

        <AnnotatedCode
          title="Anatomy of a fetch() call"
          segments={[
            {
              code: "fetch(",
              annotation:
                "fetch() is a built-in browser function. It takes a URL and returns a Promise. The promise resolves with a Response object.",
              label: "fetch()",
            },
            {
              code: '"https://jsonplaceholder.typicode.com/users/1"',
              annotation:
                "This is the API endpoint URL. jsonplaceholder.typicode.com is a free fake API for testing. /users/1 means 'give me user number 1'.",
              label: "URL",
            },
            { code: ")\n" },
            { code: "  " },
            {
              code: ".then(response => response.json())",
              annotation:
                "The first .then() receives the raw Response object. Calling .json() on it parses the response body from JSON text into a JavaScript object. Note: .json() also returns a Promise!",
              label: "Parse JSON",
            },
            { code: "\n  " },
            {
              code: ".then(user => {",
              annotation:
                "The second .then() receives the parsed JavaScript object. Now you can use the data like any normal object -- access properties, display it, etc.",
              label: "Use Data",
            },
            { code: "\n" },
            { code: '    console.log("Name: " + user.name);\n' },
            { code: '    console.log("Email: " + user.email);\n' },
            { code: "  })\n  " },
            {
              code: ".catch(error => {",
              annotation:
                "The .catch() handles any errors from the entire chain -- network errors, JSON parsing errors, etc. Always include error handling!",
              label: "Error Handler",
            },
            { code: "\n" },
            { code: '    console.log("Failed: " + error.message);\n' },
            { code: "  });" },
          ]}
        />

        <InfoBox type="warning">
          <code>fetch()</code> only rejects on <strong>network errors</strong>{" "}
          (like no internet). A 404 or 500 response does NOT cause a rejection
          -- you need to check <code>response.ok</code> yourself! This is a
          common source of bugs for beginners.
        </InfoBox>

        <h3>Proper Error Handling with fetch()</h3>

        <AnnotatedCode
          title="Checking response.ok for proper error handling"
          segments={[
            {
              code: "fetch(url)",
              annotation: "Start the request. This returns a Promise.",
              label: "Request",
            },
            { code: "\n  .then(response => {\n" },
            { code: '    console.log("Status: " + response.status);\n' },
            { code: "    " },
            {
              code: "if (!response.ok) {",
              annotation:
                "response.ok is true for status codes 200-299 (success). For 404, 500, etc., it is false. You MUST check this because fetch() does not reject for HTTP errors!",
              label: "Check OK",
            },
            { code: "\n" },
            { code: "      " },
            {
              code: 'throw new Error("HTTP error! Status: " + response.status);',
              annotation:
                "Throwing an error inside .then() will cause the promise chain to jump to the nearest .catch(). This is how you convert HTTP errors into catchable errors.",
              label: "Throw",
            },
            { code: "\n    }\n" },
            { code: "    return response.json();\n" },
            { code: "  })\n" },
            { code: '  .then(data => console.log("Got:", data.name))\n' },
            { code: '  .catch(err => console.log("Error:", err.message));' },
          ]}
        />
      </section>

      {/* ── Section 5: POST requests ── */}
      <section>
        <h2>POST Requests: Sending Data to a Server</h2>
        <p>
          GET retrieves data. POST <strong>sends</strong> data. To make a POST
          request, you pass a second argument to <code>fetch()</code> with the
          method, headers, and body.
        </p>

        <AnnotatedCode
          title="Anatomy of a POST request"
          segments={[
            { code: "fetch(url, " },
            {
              code: '{\n  method: "POST",',
              annotation:
                "By default, fetch uses GET. For POST, PUT, PATCH, or DELETE, you must specify the method explicitly.",
              label: "Method",
            },
            { code: "\n  " },
            {
              code: 'headers: {\n    "Content-Type": "application/json",\n  },',
              annotation:
                "This header tells the server 'I am sending you JSON data.' Without it, the server might not understand your request body.",
              label: "Headers",
            },
            { code: "\n  " },
            {
              code: "body: JSON.stringify(newPost),",
              annotation:
                "The body is the data you want to send. It must be a string, so we use JSON.stringify() to convert our JavaScript object to a JSON string.",
              label: "Body",
            },
            { code: "\n}" },
            { code: ")" },
          ]}
        />

        <JsConsole
          code={`// Creating a new post on the server (simulated)
const newPost = {
  title: "My First Blog Post",
  body: "Hello from BTU! This is my very first post.",
  userId: 1,
};

console.log("Sending POST request...");
console.log("Data being sent:");
console.log(JSON.stringify(newPost, null, 2));
console.log("");
console.log("In a real app, this would call:");
console.log("fetch(url, {");
console.log('  method: "POST",');
console.log('  headers: { "Content-Type": "application/json" },');
console.log("  body: JSON.stringify(newPost),");
console.log("});");
console.log("");
console.log("The server would respond with the created object,");
console.log("usually including a new ID assigned by the server.");`}
          title="POST request -- sending data"
        />

        <InfoBox type="info">
          The <code>Content-Type: application/json</code> header tells the
          server "I am sending you JSON data." And <code>JSON.stringify()</code>{" "}
          converts your JavaScript object into a JSON string for the request
          body.
        </InfoBox>
      </section>

      {/* ── Section 6: async/await ── */}
      <section>
        <h2>async/await -- Making Promises Beautiful</h2>
        <p>
          Promise chains with <code>.then()</code> are way better than callback
          hell, but they can still get messy. <code>async/await</code> lets you
          write async code that <strong>looks synchronous</strong>. It is just
          syntactic sugar for Promises -- same thing under the hood, prettier on
          the outside.
        </p>

        <Diagram title="async/await vs .then() chains">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h4 className="font-bold text-blue-600 mb-2">
                .then() chain style
              </h4>
              <div className="bg-blue-50 rounded-lg p-4 font-mono text-xs text-blue-700 border border-blue-200 space-y-0.5">
                <div>fetch(url)</div>
                <div className="ml-2">.then(res =&gt; res.json())</div>
                <div className="ml-2">.then(data =&gt; use(data))</div>
                <div className="ml-2">.catch(err =&gt; handle(err));</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-3xl text-gray-400">=</div>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-green-600 mb-2">
                async/await style
              </h4>
              <div className="bg-green-50 rounded-lg p-4 font-mono text-xs text-green-700 border border-green-200 space-y-0.5">
                <div>
                  <strong>async</strong> function getData() {"{"}
                </div>
                <div className="ml-2">
                  <strong>try</strong> {"{"}
                </div>
                <div className="ml-4">
                  const res = <strong>await</strong> fetch(url);
                </div>
                <div className="ml-4">
                  const data = <strong>await</strong> res.json();
                </div>
                <div className="ml-4">use(data);</div>
                <div className="ml-2">
                  {"}"} <strong>catch</strong> (err) {"{"}
                </div>
                <div className="ml-4">handle(err);</div>
                <div className="ml-2">{"}"}</div>
                <div>{"}"}</div>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            Both do the exact same thing. async/await just reads more naturally.
          </p>
        </Diagram>

        <AnnotatedCode
          title="The five rules of async/await"
          segments={[
            {
              code: "async ",
              annotation:
                "Rule 1: Mark the function with 'async'. This tells JavaScript the function will contain asynchronous operations and will always return a Promise.",
              label: "Rule 1",
            },
            { code: "function getData() {\n" },
            {
              code: "  try {",
              annotation:
                "Rule 4: Use try/catch for error handling. This replaces .catch() from promise chains. Any error thrown or rejected promise inside try will jump to catch.",
              label: "Rule 4",
            },
            { code: "\n    const response = " },
            {
              code: "await ",
              annotation:
                "Rule 2: Use 'await' before any Promise. Rule 3: await pauses the function execution until the Promise resolves. The resolved value is returned directly -- no .then() needed!",
              label: "Rules 2 & 3",
            },
            { code: "fetch(url);\n" },
            { code: "    const data = await response.json();\n" },
            { code: "    console.log(data);\n" },
            { code: "  } catch (error) {\n" },
            { code: "    console.log(error);\n" },
            { code: "  }\n" },
            { code: "}\n" },
            {
              code: "// An async function ALWAYS returns a Promise",
              annotation:
                "Rule 5: Even if you return a plain value from an async function, it gets wrapped in a Promise automatically. So getData() returns a Promise, not the data directly.",
              label: "Rule 5",
            },
          ]}
        />

        <JsConsole
          code={`// Let's see async/await in action with mock data
const loadUser = async (id) => {
  try {
    // In a real app: const response = await fetch(url);
    // Simulating with mock data:
    const users = {
      1: { name: "Ana", email: "ana@btu.edu.ge", website: "ana.dev" },
      2: { name: "Giorgi", email: "giorgi@btu.edu.ge", website: "giorgi.dev" },
      3: { name: "Nino", email: "nino@btu.edu.ge", website: "nino.dev" },
    };

    if (!users[id]) {
      throw new Error("User not found (id " + id + ")");
    }

    const user = users[id];
    console.log("Name: " + user.name);
    console.log("Email: " + user.email);
    console.log("Website: " + user.website);
    return user;

  } catch (error) {
    console.log("Error: " + error.message);
    return null;

  } finally {
    console.log("Fetch complete.");
  }
};

loadUser(1);`}
          title="async/await with try/catch/finally"
        />
      </section>

      {/* ── Section 7: Parallel Fetching ── */}
      <section>
        <h2>Fetching Multiple Things at Once</h2>
        <p>
          When you need data from multiple endpoints that do not depend on each
          other, fetch them <strong>in parallel</strong> with{" "}
          <code>Promise.all()</code>. This is much faster than fetching one
          after another.
        </p>

        <Diagram title="Sequential vs Parallel Fetching">
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-red-600 text-sm mb-2">
                Sequential (slow)
              </h4>
              <div className="flex items-center gap-1">
                <div className="bg-red-200 rounded px-3 py-2 text-xs text-red-800">
                  Users (2s)
                </div>
                <span className="text-gray-400">→</span>
                <div className="bg-red-200 rounded px-3 py-2 text-xs text-red-800">
                  Posts (1s)
                </div>
                <span className="text-gray-400">→</span>
                <div className="bg-red-200 rounded px-3 py-2 text-xs text-red-800">
                  Todos (1.5s)
                </div>
                <span className="text-gray-400">=</span>
                <div className="bg-red-400 rounded px-3 py-2 text-xs text-white font-bold">
                  4.5s total
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-green-600 text-sm mb-2">
                Parallel with Promise.all() (fast)
              </h4>
              <div className="space-y-1">
                <div className="bg-green-200 rounded px-3 py-2 text-xs text-green-800 w-48">
                  Users (2s)
                </div>
                <div className="bg-green-200 rounded px-3 py-2 text-xs text-green-800 w-32">
                  Posts (1s)
                </div>
                <div className="bg-green-200 rounded px-3 py-2 text-xs text-green-800 w-40">
                  Todos (1.5s)
                </div>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-gray-400">=</span>
                <div className="bg-green-500 rounded px-3 py-2 text-xs text-white font-bold">
                  2s total (only as slow as the slowest)
                </div>
              </div>
            </div>
          </div>
        </Diagram>

        <JsConsole
          code={`// Simulating parallel data loading with Promise.all()
const loadDashboard = async () => {
  try {
    console.log("Loading dashboard...");

    // Fire all three requests simultaneously
    const [users, posts, todos] = await Promise.all([
      new Promise(r => r([{name: "Ana"}, {name: "Giorgi"}, {name: "Nino"}])),
      new Promise(r => r(["Post 1", "Post 2", "Post 3", "Post 4", "Post 5"])),
      new Promise(r => r([{done: true}, {done: false}, {done: true}])),
    ]);

    console.log("Dashboard loaded!");
    console.log("Users: " + users.length + " users");
    console.log("Posts: " + posts.length + " posts");
    console.log("Todos: " + todos.length + " todos");
    console.log("");
    console.log("First user: " + users[0].name);
    console.log("First post: " + posts[0]);

  } catch (error) {
    console.log("Dashboard failed: " + error.message);
  }
};

loadDashboard();`}
          title="Parallel fetching with Promise.all()"
        />

        <InfoBox type="tip">
          <strong>Sequential</strong>: fetch A, wait, fetch B, wait, fetch C,
          wait. Total time = A + B + C.
          <br />
          <strong>Parallel</strong>: fetch A, B, C all at once. Total time =
          max(A, B, C). Much faster!
        </InfoBox>
      </section>

      {/* ── Section 8: Displaying Fetched Data ── */}
      <section>
        <h2>Displaying Fetched Data in HTML</h2>
        <p>
          Fetching data is cool, but the real goal is to show it to users! Here
          is the pattern for rendering fetched data into the DOM:
        </p>

        <AnnotatedCode
          title="Pattern: Fetch and render data"
          segments={[
            {
              code: "async function loadUsers() {",
              annotation:
                "The entire function is async because it needs to await the fetch call.",
              label: "Async function",
            },
            { code: "\n" },
            {
              code: '  const container = document.getElementById("container");\n',
            },
            {
              code: '  container.innerHTML = "<p>Loading...</p>";',
              annotation:
                "Show a loading state while fetching. This gives users immediate visual feedback that something is happening.",
              label: "Loading State",
            },
            { code: "\n\n  try {\n" },
            {
              code: "    const res = await fetch(url);",
              annotation:
                "Send the HTTP request and wait for the response. If the network fails, this throws an error caught by our catch block.",
              label: "Fetch",
            },
            { code: "\n" },
            { code: "    const users = await res.json();\n\n" },
            {
              code: '    container.innerHTML = "";',
              annotation:
                "Clear the loading message. We are about to replace it with real content.",
              label: "Clear",
            },
            { code: "\n" },
            {
              code: "    users.forEach(user => {",
              annotation:
                "Loop through the data array and create DOM elements for each item. This is the most common pattern for rendering lists of data.",
              label: "Render Loop",
            },
            { code: "\n" },
            { code: '      const card = document.createElement("div");\n' },
            { code: "      card.textContent = user.name;\n" },
            { code: "      container.appendChild(card);\n" },
            { code: "    });\n\n" },
            { code: "  } catch (err) {\n" },
            {
              code: '    container.innerHTML = "<p>Failed to load.</p>";',
              annotation:
                "If anything goes wrong, show a user-friendly error message instead of leaving the page broken.",
              label: "Error UI",
            },
            { code: "\n  }\n}" },
          ]}
        />

        <InfoBox type="info">
          The pattern is always the same: (1) show loading state, (2) fetch
          data, (3) clear container, (4) loop and render, (5) handle errors.
          Master this pattern and you can build any data-driven page!
        </InfoBox>
      </section>

      {/* ── Exercises ── */}
      <section>
        <h2>Practice Time!</h2>

        <ExerciseBlock number={1}>
          <p>
            <strong>User Directory:</strong> Using async/await, fetch all users
            from <code>jsonplaceholder.typicode.com/users</code>. Display each
            user's name, email, and city on the page. Add a "Load Users" button
            and show a loading message while fetching.
          </p>
        </ExerciseBlock>

        <ExerciseBlock number={2}>
          <p>
            <strong>Post Viewer:</strong> Build a page with an input field for a
            post ID (1-100). When the user clicks "Fetch", load that post from{" "}
            <code>/posts/{"{id}"}</code> and its comments from{" "}
            <code>/posts/{"{id}"}/comments</code> using{" "}
            <code>Promise.all()</code>. Display both the post and its comments.
          </p>
        </ExerciseBlock>

        <ExerciseBlock number={3}>
          <p>
            <strong>Parallel Photo Loader:</strong> Fetch the first 20 photos
            from <code>/photos?_limit=20</code> and all albums from{" "}
            <code>/albums</code> in parallel. Display the photos in a grid,
            showing which album each photo belongs to.
          </p>
        </ExerciseBlock>
      </section>

      {/* ── Homework ── */}
      <HomeworkBlock>
        <h4>User Profile Explorer</h4>
        <p>
          Build a multi-view user explorer using{" "}
          <code>jsonplaceholder.typicode.com</code>:
        </p>
        <ol>
          <li>
            On page load, fetch and display all 10 users as cards (name, email,
            company).
          </li>
          <li>
            Clicking a user card fetches and shows that user's posts (using{" "}
            <code>/posts?userId=X</code>).
          </li>
          <li>
            Clicking a post fetches and shows that post's comments (using{" "}
            <code>/posts/X/comments</code>).
          </li>
          <li>Add "Back" buttons to navigate between views.</li>
          <li>
            Use async/await with try/catch everywhere. Show loading states and
            handle errors gracefully.
          </li>
        </ol>
        <InfoBox type="tip">
          Structure your code into separate async functions:{" "}
          <code>loadUsers()</code>, <code>loadUserPosts(userId)</code>,{" "}
          <code>loadPostComments(postId)</code>. Each handles its own DOM
          updates, loading states, and error handling.
        </InfoBox>
      </HomeworkBlock>
    </LectureWrapper>
  );
};

export default Lecture14;
