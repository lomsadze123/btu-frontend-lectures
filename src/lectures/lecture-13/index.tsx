import LectureWrapper from "../../components/LectureWrapper";
import AnnotatedCode from "../../components/AnnotatedCode";
import Diagram from "../../components/Diagram";
import InfoBox from "../../components/InfoBox";
import ExerciseBlock from "../../components/ExerciseBlock";
import HomeworkBlock from "../../components/HomeworkBlock";
import JsConsole from "../../components/JsConsole";

const Lecture13 = () => {
  return (
    <LectureWrapper id="13" title="Promises & Asynchronous JavaScript">
      {/* ── Section 1: Intro ── */}
      <section>
        <h2>Welcome to the Async World!</h2>
        <p>
          Imagine you walk into a coffee shop. You order a latte. Do you just
          stand at the counter, frozen, staring at the barista until your latte
          is done? Of course not! You check your phone, chat with a friend,
          maybe grab a seat. When the latte is ready, the barista calls your
          name.
        </p>
        <p>
          That is <strong>asynchronous behavior</strong> -- and JavaScript works
          the same way. Instead of freezing the entire page while waiting for
          something slow (like fetching data from a server), JS says "I will
          deal with that later" and keeps running the rest of your code.
        </p>
        <p>
          Today we are going to learn how JavaScript handles this magic. This
          is one of the most important topics in all of frontend development!
        </p>
      </section>

      {/* ── Section 2: Sync vs Async ── */}
      <section>
        <h2>Synchronous vs Asynchronous Code</h2>

        <Diagram title="Synchronous vs Asynchronous Execution">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Synchronous */}
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Synchronous (Blocking)
              </h3>
              <div className="space-y-2">
                {["Task A", "Task B", "Task C"].map((task, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </div>
                    <div className="flex-1 bg-blue-100 rounded-lg px-4 py-2 text-blue-800 font-medium">
                      {task}
                    </div>
                    {i < 2 && (
                      <span className="text-gray-400 text-xs">waits...</span>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Each task waits for the previous one to finish.
              </p>
            </div>

            {/* Asynchronous */}
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Asynchronous (Non-blocking)
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div className="flex-1 bg-green-100 rounded-lg px-4 py-2 text-green-800 font-medium">
                    Task A (starts)
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div className="flex-1 bg-green-100 rounded-lg px-4 py-2 text-green-800 font-medium">
                    Task B (starts immediately!)
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div className="flex-1 bg-orange-100 rounded-lg px-4 py-2 text-orange-800 font-medium">
                    Task A finishes (callback runs)
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Tasks can overlap. No one waits unnecessarily.
              </p>
            </div>
          </div>
        </Diagram>

        <JsConsole
          code={`console.log("1. Order coffee");

setTimeout(() => {
  console.log("2. Coffee is ready!");
}, 0); // Even with 0ms delay!

console.log("3. Check phone while waiting");

// Why does "Check phone" come BEFORE "Coffee is ready"?
// Because setTimeout is ASYNCHRONOUS -- it goes to the back of the line.`}
          title="Asynchronous -- things get interesting"
        />

        <InfoBox type="info">
          Even with a 0ms delay, <code>setTimeout</code> runs AFTER the current
          code finishes. JavaScript puts it in a queue and gets back to it when
          it is free. This is the <strong>event loop</strong> in action!
        </InfoBox>
      </section>

      {/* ── Section 3: Why Async Matters ── */}
      <section>
        <h2>Why Should You Care About Async?</h2>
        <p>Real websites do slow things ALL the time:</p>

        <Diagram title="Common Async Operations in Web Development">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                icon: "🌐",
                title: "API Requests",
                desc: "100ms to several seconds",
              },
              {
                icon: "🖼",
                title: "Loading Images",
                desc: "Especially on slow networks",
              },
              {
                icon: "👆",
                title: "User Input",
                desc: "Unpredictable timing",
              },
              {
                icon: "⏱",
                title: "Timers & Animations",
                desc: "Things that happen over time",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-bold text-gray-800 text-sm">
                  {item.title}
                </div>
                <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">
            If JavaScript blocked on every slow task, your page would be
            completely unresponsive. Async patterns keep the browser smooth!
          </p>
        </Diagram>
      </section>

      {/* ── Section 4: Callbacks & Callback Hell ── */}
      <section>
        <h2>Callbacks: The Old-School Way</h2>
        <p>
          A <strong>callback</strong> is just a function you give to another
          function, saying: "Hey, when you are done, call this function with
          the result." It is like leaving your phone number at the coffee shop
          so they can text you when your order is ready.
        </p>

        <JsConsole
          code={`const orderFood = (dish, callback) => {
  console.log("Chef is preparing " + dish + "...");
  const meal = { dish: dish, status: "ready", temp: "hot" };
  callback(meal);
};

orderFood("Khachapuri", (meal) => {
  console.log("Your " + meal.dish + " is " + meal.status + "!");
  console.log("Temperature: " + meal.temp);
});

console.log("(Meanwhile, the waiter serves other tables)");`}
          title="Callback -- 'Call me back when it is done'"
        />

        <h3>The Problem: Callback Hell</h3>

        <AnnotatedCode
          title="The Pyramid of Doom -- this is what nightmares look like"
          segments={[
            {
              code: "getUser(1, ",
              annotation:
                "First async call -- get a user by ID. We pass a callback to handle the result.",
              label: "Step 1",
            },
            { code: "(user) => {\n" },
            {
              code: "  getOrders(user.id, ",
              annotation:
                "Second async call, nested inside the first. We need the user before we can get their orders.",
              label: "Step 2",
            },
            { code: "(orders) => {\n" },
            {
              code: "    getOrderDetails(orders[0].id, ",
              annotation:
                "Third level of nesting. Each step depends on the previous result, pushing the code deeper to the right.",
              label: "Step 3",
            },
            { code: "(details) => {\n" },
            {
              code: "      getShippingStatus(details.shippingId, ",
              annotation:
                "Fourth level! The code keeps indenting and becomes very hard to read and maintain.",
              label: "Step 4",
            },
            { code: "(status) => {\n" },
            {
              code: "        sendNotification(user.email, status, ",
              annotation:
                "Five levels deep. Error handling at each level would make this even worse. This is exactly why Promises were invented!",
              label: "Step 5",
            },
            { code: "(result) => {\n" },
            { code: '          console.log("Finally done!");\n' },
            { code: "        });\n" },
            { code: "      });\n" },
            { code: "    });\n" },
            { code: "  });\n" },
            { code: "});" },
          ]}
        />

        <InfoBox type="warning">
          Callback hell is not just ugly -- it is genuinely hard to debug and
          maintain. Error handling becomes a nightmare because you would need a
          separate error check at every nesting level. This is exactly why{" "}
          <strong>Promises</strong> were invented!
        </InfoBox>
      </section>

      {/* ── Section 5: Promises -- The Concept ── */}
      <section>
        <h2>Promises: JavaScript's IOU System</h2>
        <p>
          A <strong>Promise</strong> is exactly what it sounds like -- a promise
          that you will get a result <em>eventually</em>. Think of it like
          ordering something online.
        </p>

        <Diagram title="The Three States of a Promise">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="text-center p-5 bg-yellow-50 border-2 border-yellow-300 rounded-xl w-48">
              <div className="text-2xl mb-1">⏳</div>
              <div className="font-bold text-yellow-700">Pending</div>
              <div className="text-xs text-yellow-600 mt-1">
                Operation in progress. Waiting for result.
              </div>
            </div>
            <div className="text-gray-400 text-2xl hidden md:block">→</div>
            <div className="flex flex-col gap-4">
              <div className="text-center p-5 bg-green-50 border-2 border-green-300 rounded-xl w-48">
                <div className="text-2xl mb-1">✅</div>
                <div className="font-bold text-green-700">Fulfilled</div>
                <div className="text-xs text-green-600 mt-1">
                  Success! The result is available.
                </div>
              </div>
              <div className="text-center p-5 bg-red-50 border-2 border-red-300 rounded-xl w-48">
                <div className="text-2xl mb-1">❌</div>
                <div className="font-bold text-red-700">Rejected</div>
                <div className="text-xs text-red-600 mt-1">
                  Something went wrong. Error available.
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            Once a promise is fulfilled or rejected, it is{" "}
            <strong>settled</strong> -- its state can never change again.
          </p>
        </Diagram>

        <h3>Creating a Promise</h3>

        <AnnotatedCode
          title="Anatomy of a Promise"
          segments={[
            { code: "const orderPizza = (topping) => {\n" },
            { code: "  return " },
            {
              code: "new Promise(",
              annotation:
                "The Promise constructor takes a single function (called the executor). This function runs immediately when the promise is created.",
              label: "Constructor",
            },
            {
              code: "(resolve, reject)",
              annotation:
                "resolve and reject are functions provided by JavaScript. Call resolve(value) for success, or reject(reason) for failure.",
              label: "Parameters",
            },
            { code: " => {\n" },
            { code: '    console.log("Preparing " + topping + " pizza...");\n' },
            { code: "    const isAvailable = Math.random() > 0.2;\n\n" },
            { code: "    if (isAvailable) {\n" },
            {
              code: '      resolve("Your " + topping + " pizza is ready!");',
              annotation:
                "Calling resolve() transitions the promise from Pending to Fulfilled. The value you pass becomes the result.",
              label: "Resolve",
            },
            { code: "\n    } else {\n" },
            {
              code: '      reject("Sorry, we ran out of " + topping);',
              annotation:
                "Calling reject() transitions the promise from Pending to Rejected. The value you pass becomes the error reason.",
              label: "Reject",
            },
            { code: "\n    }\n" },
            { code: "  });\n" },
            { code: "};" },
          ]}
        />

        <JsConsole
          code={`const orderPizza = (topping) => {
  return new Promise((resolve, reject) => {
    console.log("Preparing " + topping + " pizza...");
    const isAvailable = Math.random() > 0.2;

    if (isAvailable) {
      resolve("Your " + topping + " pizza is ready!");
    } else {
      reject("Sorry, we ran out of " + topping);
    }
  });
};

const myOrder = orderPizza("Margherita");
console.log("What is myOrder?", typeof myOrder);
console.log("It is a Promise! We need .then() to get the result.");`}
          title="Creating your first Promise"
        />
      </section>

      {/* ── Section 6: .then(), .catch(), .finally() ── */}
      <section>
        <h2>Consuming Promises: .then(), .catch(), .finally()</h2>
        <p>
          A Promise by itself does not do much. You need to tell JavaScript
          what to do when it resolves or rejects. That is where these three
          methods come in.
        </p>

        <Diagram title="Promise Consumer Methods">
          <div className="space-y-3">
            {[
              {
                method: ".then(callback)",
                color: "green",
                desc: "Runs when the promise is FULFILLED (success). Receives the resolved value.",
              },
              {
                method: ".catch(callback)",
                color: "red",
                desc: "Runs when the promise is REJECTED (failure). Receives the error reason.",
              },
              {
                method: ".finally(callback)",
                color: "blue",
                desc: "Runs NO MATTER WHAT (success or failure). Great for cleanup tasks.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 p-4 rounded-lg border-2 ${
                  item.color === "green"
                    ? "border-green-300 bg-green-50"
                    : item.color === "red"
                    ? "border-red-300 bg-red-50"
                    : "border-blue-300 bg-blue-50"
                }`}
              >
                <code
                  className={`font-bold text-sm shrink-0 ${
                    item.color === "green"
                      ? "text-green-700"
                      : item.color === "red"
                      ? "text-red-700"
                      : "text-blue-700"
                  }`}
                >
                  {item.method}
                </code>
                <span className="text-gray-700 text-sm">{item.desc}</span>
              </div>
            ))}
          </div>
        </Diagram>

        <JsConsole
          code={`const fetchGrade = (studentName) => {
  return new Promise((resolve, reject) => {
    const students = { "Ana": 95, "Giorgi": 87, "Nino": 92 };

    if (students[studentName] !== undefined) {
      resolve({ name: studentName, grade: students[studentName] });
    } else {
      reject("Student '" + studentName + "' not found in database!");
    }
  });
};

// Try with a student that EXISTS:
fetchGrade("Ana")
  .then((student) => {
    console.log("Found: " + student.name + " has grade " + student.grade);
  })
  .catch((error) => {
    console.log("Error: " + error);
  })
  .finally(() => {
    console.log("Database query complete.");
  });

console.log("---");

// Try with a student that DOES NOT exist:
fetchGrade("Batman")
  .then((student) => {
    console.log("Found: " + student.name);
  })
  .catch((error) => {
    console.log("Error: " + error);
  })
  .finally(() => {
    console.log("Database query complete.");
  });`}
          title=".then() / .catch() / .finally() in action"
        />

        <InfoBox type="tip">
          <strong>Golden Rule:</strong> Always add a <code>.catch()</code> to
          your promises! Without it, errors get swallowed silently and you will
          spend hours debugging mysterious failures.
        </InfoBox>
      </section>

      {/* ── Section 7: Promise Chaining ── */}
      <section>
        <h2>Promise Chaining: The Callback Hell Killer</h2>
        <p>
          Remember that horrible pyramid of doom? Promises fix it with{" "}
          <strong>chaining</strong>. Each <code>.then()</code> returns a new
          promise, so you can chain them in a flat, readable sequence.
        </p>

        <Diagram title="Callback Hell vs Promise Chain">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h4 className="font-bold text-red-600 mb-2">
                Callback Hell (nested)
              </h4>
              <div className="bg-red-50 rounded-lg p-4 font-mono text-xs text-red-700 border border-red-200">
                <div>step1(result1 =&gt; {"{"}</div>
                <div className="ml-4">step2(result2 =&gt; {"{"}</div>
                <div className="ml-8">step3(result3 =&gt; {"{"}</div>
                <div className="ml-12">step4(result4 =&gt; {"{"}</div>
                <div className="ml-16">// deeply nested!</div>
                <div className="ml-12">{"}"})</div>
                <div className="ml-8">{"}"})</div>
                <div className="ml-4">{"}"})</div>
                <div>{"}"})</div>
              </div>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-green-600 mb-2">
                Promise Chain (flat)
              </h4>
              <div className="bg-green-50 rounded-lg p-4 font-mono text-xs text-green-700 border border-green-200">
                <div>step1()</div>
                <div className="ml-2">.then(r =&gt; step2(r))</div>
                <div className="ml-2">.then(r =&gt; step3(r))</div>
                <div className="ml-2">.then(r =&gt; step4(r))</div>
                <div className="ml-2">.catch(err =&gt; handle(err))</div>
                <div className="text-green-500 mt-1">
                  // flat and readable!
                </div>
              </div>
            </div>
          </div>
        </Diagram>

        <JsConsole
          code={`const getUser = (id) => new Promise((resolve) => {
  resolve({ id: id, name: "Ana", role: "admin" });
});

const getOrders = (userId) => new Promise((resolve) => {
  resolve([
    { id: 101, userId: userId, item: "Laptop", price: 999 },
    { id: 102, userId: userId, item: "Mouse", price: 29 },
  ]);
});

const getShippingStatus = (orderId) => new Promise((resolve) => {
  resolve({ orderId: orderId, status: "Shipped", tracking: "GE-2024-ABC" });
});

// CHAINED -- flat and beautiful!
getUser(1)
  .then((user) => {
    console.log("User: " + user.name + " (" + user.role + ")");
    return getOrders(user.id); // Return promise for next step
  })
  .then((orders) => {
    console.log("Found " + orders.length + " orders");
    console.log("  First order: " + orders[0].item + " ($" + orders[0].price + ")");
    return getShippingStatus(orders[0].id);
  })
  .then((shipping) => {
    console.log("Status: " + shipping.status);
    console.log("  Tracking: " + shipping.tracking);
  })
  .catch((error) => {
    // ONE catch handles errors from ANY step!
    console.log("Something broke: " + error);
  });`}
          title="Promise chain -- compare this to callback hell!"
        />

        <InfoBox type="info">
          The key insight: when you <code>return</code> a value (or a promise)
          from inside <code>.then()</code>, it becomes the input to the NEXT{" "}
          <code>.then()</code>. This is what makes the chain work!
        </InfoBox>
      </section>

      {/* ── Section 8: Promise.all and Promise.race ── */}
      <section>
        <h2>Promise.all() and Promise.race(): Running in Parallel</h2>
        <p>
          Sometimes you need to do multiple async things at the same time.
          Why wait for one to finish before starting the next?
        </p>

        <Diagram title="Promise.all() vs Promise.race()">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-blue-50 rounded-xl p-5 border border-blue-200">
              <h4 className="font-bold text-blue-700 mb-2">
                Promise.all() -- "Wait for everyone"
              </h4>
              <div className="space-y-2 mb-3">
                <div className="bg-blue-200 rounded px-3 py-1 text-sm text-blue-800">
                  Promise A ----done
                </div>
                <div className="bg-blue-200 rounded px-3 py-1 text-sm text-blue-800">
                  Promise B ---------done
                </div>
                <div className="bg-blue-200 rounded px-3 py-1 text-sm text-blue-800">
                  Promise C ------done
                </div>
              </div>
              <div className="bg-blue-300 rounded px-3 py-1 text-sm text-blue-900 font-bold text-center">
                All results arrive together!
              </div>
              <p className="text-xs text-blue-600 mt-2">
                If ANY promise rejects, the whole thing fails.
              </p>
            </div>
            <div className="flex-1 bg-purple-50 rounded-xl p-5 border border-purple-200">
              <h4 className="font-bold text-purple-700 mb-2">
                Promise.race() -- "First one wins"
              </h4>
              <div className="space-y-2 mb-3">
                <div className="bg-purple-200 rounded px-3 py-1 text-sm text-purple-800">
                  Promise A ----done
                </div>
                <div className="bg-gray-200 rounded px-3 py-1 text-sm text-gray-500">
                  Promise B --------- (ignored)
                </div>
                <div className="bg-gray-200 rounded px-3 py-1 text-sm text-gray-500">
                  Promise C ------ (ignored)
                </div>
              </div>
              <div className="bg-purple-300 rounded px-3 py-1 text-sm text-purple-900 font-bold text-center">
                Only the fastest result matters!
              </div>
              <p className="text-xs text-purple-600 mt-2">
                Great for timeouts: race your request against a timer.
              </p>
            </div>
          </div>
        </Diagram>

        <JsConsole
          code={`// Three independent data fetches
const fetchUser = () => new Promise((resolve) => {
  resolve({ name: "Ana" });
});

const fetchPosts = () => new Promise((resolve) => {
  resolve(["Post 1", "Post 2", "Post 3"]);
});

const fetchNotifications = () => new Promise((resolve) => {
  resolve({ unread: 5 });
});

// Run ALL THREE at the same time!
Promise.all([fetchUser(), fetchPosts(), fetchNotifications()])
  .then(([user, posts, notifications]) => {
    console.log("User: " + user.name);
    console.log("Posts: " + posts.length + " posts loaded");
    console.log("Notifications: " + notifications.unread + " unread");
    console.log("");
    console.log("All data loaded in parallel!");
    console.log("(In real life, total time = the SLOWEST request only)");
  })
  .catch((error) => {
    console.log("At least one request failed: " + error);
  });`}
          title="Promise.all() -- parallel is faster!"
        />

        <JsConsole
          code={`// Promise.race() -- first one wins!
const fast = new Promise((resolve) => resolve("Fast result!"));
const slow = new Promise((resolve) => resolve("Slow result..."));

Promise.race([fast, slow])
  .then((winner) => {
    console.log("Winner: " + winner);
    console.log("");
    console.log("Promise.race() is great for:");
    console.log("  - Adding timeouts to requests");
    console.log("  - Using the fastest of multiple servers");
    console.log("  - Racing a real operation against a deadline");
  });`}
          title="Promise.race() -- first one wins!"
        />
      </section>

      {/* ── Exercises ── */}
      <section>
        <h2>Practice Time!</h2>

        <ExerciseBlock number={1}>
          <p>
            <strong>Delayed Logger:</strong> Write a function{" "}
            <code>delay(ms)</code> that returns a promise which resolves after{" "}
            <code>ms</code> milliseconds. Then chain it to log messages at
            intervals:
          </p>
          <AnnotatedCode
            title="Expected usage"
            segments={[
              {
                code: "delay(1000)",
                annotation:
                  "Returns a promise that resolves after 1000ms. Use setTimeout inside the promise.",
                label: "delay()",
              },
              { code: "\n  .then(() => { console.log(\"1 second\"); " },
              {
                code: "return delay(1000);",
                annotation:
                  "Returning a promise from .then() makes the next .then() wait for it. This is how you chain delays.",
                label: "Chain",
              },
              { code: " })\n" },
              {
                code: '  .then(() => { console.log("2 seconds"); return delay(1000); })',
                annotation:
                  "Each step adds another second of waiting before the next .then() runs.",
              },
              { code: "\n" },
              { code: '  .then(() => { console.log("3 seconds! Done!"); });' },
            ]}
          />
        </ExerciseBlock>

        <ExerciseBlock number={2}>
          <p>
            <strong>Coin Flip Game:</strong> Write a <code>flipCoin()</code>{" "}
            function that returns a promise. It should randomly resolve with
            "Heads" or reject with "Tails" (50/50 chance). Use{" "}
            <code>.then()</code> and <code>.catch()</code> to log the result.
            Then use <code>Promise.all()</code> to flip 3 coins at once!
          </p>
        </ExerciseBlock>

        <ExerciseBlock number={3}>
          <p>
            <strong>Parallel Data Loading:</strong> Create three functions --{" "}
            <code>fetchProducts()</code>, <code>fetchCategories()</code>, and{" "}
            <code>fetchReviews()</code>. Each returns a promise resolving with
            mock data after different delays. Use <code>Promise.all()</code> to
            load them in parallel and log everything when done.
          </p>
        </ExerciseBlock>
      </section>

      {/* ── Homework ── */}
      <HomeworkBlock>
        <h4>Async Order Processing System</h4>
        <p>Build a simulated order processing pipeline using promises:</p>
        <ol>
          <li>
            <code>validateOrder(order)</code> -- Resolves if the order has a
            name, item, and price &gt; 0. Rejects with an error otherwise.
            Delay: 500ms.
          </li>
          <li>
            <code>processPayment(order)</code> -- Succeeds 90% of the time.
            Resolves with a payment confirmation. Rejects with "Payment
            declined." Delay: 1000ms.
          </li>
          <li>
            <code>shipOrder(order)</code> -- Resolves with a tracking number.
            Delay: 1500ms.
          </li>
          <li>
            <code>sendConfirmation(order, trackingNumber)</code> -- Resolves
            with a confirmation message. Delay: 500ms.
          </li>
        </ol>
        <p>
          Chain all four steps and handle errors. Then process 3 orders in
          parallel using <code>Promise.all()</code>.
        </p>
        <InfoBox type="tip">
          Run your system several times to see both success and failure paths.
          Use <code>Math.random()</code> for the 90% success rate.
        </InfoBox>
      </HomeworkBlock>
    </LectureWrapper>
  );
};

export default Lecture13;
