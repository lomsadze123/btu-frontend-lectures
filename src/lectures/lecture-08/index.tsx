import LectureWrapper from "../../components/LectureWrapper";
import AnnotatedCode from "../../components/AnnotatedCode";
import Diagram from "../../components/Diagram";
import InfoBox from "../../components/InfoBox";
import ExerciseBlock from "../../components/ExerciseBlock";
import HomeworkBlock from "../../components/HomeworkBlock";

const Lecture08 = () => {
  return (
    <LectureWrapper id="08" title="Midterm Review">
      {/* ── Intro ── */}
      <section>
        <h2>The Final Boss Approaches</h2>
        <p>
          Seven weeks of HTML, CSS, layouts, animations, responsive design, and
          AI tools. That is a LOT of knowledge packed into your brain. Today we
          are going to shake it all loose, organize it, practice it, and make
          sure you walk into the midterm feeling like a web development boss.
        </p>
        <p>
          This is not a boring review lecture. We are going to go topic by
          topic, with visual summaries and quick quizzes. Think of this as a
          workout -- reps build muscle, and practice builds confidence.
        </p>
      </section>

      {/* ── Week by Week ── */}
      <section>
        <h2>The Journey So Far</h2>
        <Diagram title="Your 7-week journey">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {[
              { week: "W1", topic: "HTML Basics", color: "bg-red-500" },
              {
                week: "W2",
                topic: "Semantic HTML & Media",
                color: "bg-orange-500",
              },
              {
                week: "W3",
                topic: "CSS Selectors & Box Model",
                color: "bg-yellow-500 text-gray-800",
              },
              {
                week: "W4",
                topic: "Flexbox & Backgrounds",
                color: "bg-green-500",
              },
              {
                week: "W5",
                topic: "Grid & Animations",
                color: "bg-blue-500",
              },
              {
                week: "W6",
                topic: "Responsive & Positioning",
                color: "bg-purple-500",
              },
              { week: "W7", topic: "AI & Web Dev", color: "bg-gray-700" },
            ].map((w) => (
              <div
                key={w.week}
                className={`${w.color} text-white rounded-lg p-3 text-center`}
              >
                <div className="font-bold text-lg">{w.week}</div>
                <div className="text-xs opacity-90 mt-1">{w.topic}</div>
              </div>
            ))}
          </div>
        </Diagram>
      </section>

      {/* ── HTML Review ── */}
      <section>
        <h2>Round 1: HTML Fundamentals</h2>

        <InfoBox type="info">
          <strong>Quick Quiz:</strong> What is{" "}
          <code>&lt;!DOCTYPE html&gt;</code> for? Answer: it tells the browser
          "this is an HTML5 document, render it with modern standards." Without
          it, the browser falls into "quirks mode" and weird things happen.
        </InfoBox>

        <Diagram title="Semantic HTML Cheat Sheet -- know the right tag for each section">
          <div
            className="grid gap-2 text-white text-sm font-bold text-center"
            style={{
              gridTemplateAreas: `"header header header" "nav main aside" "footer footer footer"`,
              gridTemplateColumns: "140px 1fr 140px",
              gridTemplateRows: "50px 120px 40px",
            }}
          >
            <div
              className="bg-blue-500 rounded flex items-center justify-center"
              style={{ gridArea: "header" }}
            >
              &lt;header&gt;
            </div>
            <div
              className="bg-green-500 rounded flex items-center justify-center"
              style={{ gridArea: "nav" }}
            >
              &lt;nav&gt;
            </div>
            <div
              className="bg-gray-200 text-gray-700 rounded flex items-center justify-center"
              style={{ gridArea: "main" }}
            >
              &lt;main&gt;
            </div>
            <div
              className="bg-orange-500 rounded flex items-center justify-center"
              style={{ gridArea: "aside" }}
            >
              &lt;aside&gt;
            </div>
            <div
              className="bg-red-500 rounded flex items-center justify-center"
              style={{ gridArea: "footer" }}
            >
              &lt;footer&gt;
            </div>
          </div>
        </Diagram>

        <h3>The 5 Most Common HTML Mistakes</h3>
        <Diagram title="Don't make these mistakes on the exam!">
          <div className="space-y-2">
            {[
              {
                mistake: "Missing viewport meta tag",
                fix: '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
              },
              {
                mistake: "Using <div> instead of semantic tags",
                fix: "Use <header>, <nav>, <main>, <section>, <footer>",
              },
              {
                mistake: "Skipping heading levels (h1 then h3)",
                fix: "Always go h1 -> h2 -> h3 in order",
              },
              {
                mistake: "Images missing alt attribute",
                fix: '<img src="photo.jpg" alt="Description of the image">',
              },
              {
                mistake: "Form inputs missing <label> elements",
                fix: '<label for="email">Email</label><input id="email">',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row gap-2 text-sm"
              >
                <div className="bg-red-50 border border-red-200 rounded px-3 py-2 flex-1">
                  <span className="text-red-600 font-bold">Mistake:</span>{" "}
                  {item.mistake}
                </div>
                <div className="bg-green-50 border border-green-200 rounded px-3 py-2 flex-1">
                  <span className="text-green-600 font-bold">Fix:</span>{" "}
                  <code className="text-xs">{item.fix}</code>
                </div>
              </div>
            ))}
          </div>
        </Diagram>
      </section>

      {/* ── CSS Review ── */}
      <section>
        <h2>Round 2: CSS Selectors & Box Model</h2>

        <InfoBox type="info">
          <strong>Quick Quiz:</strong> What is the specificity order from lowest
          to highest? Answer: Element selectors (0,0,1) &lt; Class selectors
          (0,1,0) &lt; ID selectors (1,0,0) &lt; Inline styles. When in doubt,
          more specific wins!
        </InfoBox>

        <Diagram title="CSS Specificity Pyramid">
          <div className="flex flex-col items-center gap-1">
            <div className="bg-red-500 text-white rounded px-4 py-2 text-sm font-bold w-40 text-center">
              Inline styles
            </div>
            <div className="bg-orange-500 text-white rounded px-4 py-2 text-sm font-bold w-52 text-center">
              ID selectors (#id)
            </div>
            <div className="bg-yellow-500 text-gray-800 rounded px-4 py-2 text-sm font-bold w-64 text-center">
              Class selectors (.class)
            </div>
            <div className="bg-green-500 text-white rounded px-4 py-2 text-sm font-bold w-80 text-center">
              Element selectors (div, p, h1)
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Higher on the pyramid = higher specificity = wins the battle
            </p>
          </div>
        </Diagram>

        <h3>Box Model Reminder</h3>
        <p>
          Every element is a box with four layers. With{" "}
          <code>box-sizing: border-box</code>, the width includes padding and
          border. Without it, they add on top.{" "}
          <strong>Always use border-box.</strong>
        </p>

        <Diagram title="The CSS Box Model">
          <div className="flex justify-center">
            <div className="bg-orange-100 border-4 border-dashed border-orange-400 rounded-lg p-6 text-center relative">
              <span className="absolute top-1 left-2 text-xs text-orange-500 font-bold">
                margin
              </span>
              <div className="bg-yellow-100 border-4 border-red-400 rounded p-5 relative">
                <span className="absolute top-1 left-2 text-xs text-red-500 font-bold">
                  border
                </span>
                <div className="bg-green-100 border-2 border-dashed border-green-400 rounded p-4 relative">
                  <span className="absolute top-0 left-1 text-xs text-green-600 font-bold">
                    padding
                  </span>
                  <div className="bg-blue-400 text-white rounded px-8 py-4 font-bold">
                    Content
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-3">
            Content + Padding + Border + Margin = Total space used
          </p>
        </Diagram>

        <AnnotatedCode
          title="The universal box-sizing reset -- always use this!"
          segments={[
            {
              code: "*, *::before, *::after {\n",
              annotation:
                "The * selector targets every element. Including ::before and ::after ensures pseudo-elements also get border-box sizing.",
              label: "Universal selector",
            },
            {
              code: "  box-sizing: border-box;\n",
              annotation:
                "With border-box, a 300px wide element stays 300px even with padding and border. Without it (content-box), padding and border ADD to the width, making it wider than expected.",
              label: "border-box",
            },
            {
              code: "}\n",
            },
          ]}
        />
      </section>

      {/* ── Flexbox Review ── */}
      <section>
        <h2>Round 3: Flexbox</h2>
        <p>
          Flexbox is your go-to for <strong>one-dimensional layouts</strong> --
          arranging items in a row or column. The key properties to remember:
        </p>

        <Diagram title="Flexbox visual cheat sheet">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
              <h4 className="text-sm font-bold text-gray-700 mb-2">
                justify-content: center
              </h4>
              <div className="flex justify-center gap-1 bg-white rounded p-2">
                <div className="bg-blue-500 text-white px-3 py-1 rounded text-xs font-bold">
                  A
                </div>
                <div className="bg-blue-500 text-white px-3 py-1 rounded text-xs font-bold">
                  B
                </div>
                <div className="bg-blue-500 text-white px-3 py-1 rounded text-xs font-bold">
                  C
                </div>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
              <h4 className="text-sm font-bold text-gray-700 mb-2">
                justify-content: space-between
              </h4>
              <div className="flex justify-between bg-white rounded p-2">
                <div className="bg-blue-500 text-white px-3 py-1 rounded text-xs font-bold">
                  A
                </div>
                <div className="bg-blue-500 text-white px-3 py-1 rounded text-xs font-bold">
                  B
                </div>
                <div className="bg-blue-500 text-white px-3 py-1 rounded text-xs font-bold">
                  C
                </div>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
              <h4 className="text-sm font-bold text-gray-700 mb-2">
                align-items: center
              </h4>
              <div className="flex items-center gap-1 bg-white rounded p-2 h-16">
                <div className="bg-blue-500 text-white px-3 py-1 rounded text-xs font-bold">
                  A
                </div>
                <div className="bg-blue-500 text-white px-3 py-3 rounded text-xs font-bold">
                  B
                </div>
                <div className="bg-blue-500 text-white px-3 py-1 rounded text-xs font-bold">
                  C
                </div>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
              <h4 className="text-sm font-bold text-gray-700 mb-2">
                flex-direction: column
              </h4>
              <div className="flex flex-col gap-1 bg-white rounded p-2">
                <div className="bg-blue-500 text-white px-3 py-1 rounded text-xs font-bold text-center">
                  A
                </div>
                <div className="bg-blue-500 text-white px-3 py-1 rounded text-xs font-bold text-center">
                  B
                </div>
                <div className="bg-blue-500 text-white px-3 py-1 rounded text-xs font-bold text-center">
                  C
                </div>
              </div>
            </div>
          </div>
        </Diagram>

        <InfoBox type="info">
          <strong>Quick Quiz:</strong> How do you perfectly center something
          with Flexbox? Answer:{" "}
          <code>
            display: flex; justify-content: center; align-items: center;
          </code>{" "}
          -- the holy trinity of centering!
        </InfoBox>
      </section>

      {/* ── Grid Review ── */}
      <section>
        <h2>Round 4: CSS Grid</h2>
        <p>
          Grid is for <strong>two-dimensional layouts</strong> (rows AND
          columns). The killer feature?{" "}
          <code>repeat(auto-fit, minmax(250px, 1fr))</code> -- fully responsive
          without a single media query.
        </p>

        <Diagram title="Flexbox vs Grid -- when to use which">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
              <h4 className="text-blue-700 font-bold mb-2">
                Use Flexbox when:
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Layout is one-dimensional (row OR column)</li>
                <li>Navigation bars</li>
                <li>Centering content</li>
                <li>Simple component layouts</li>
                <li>Items should wrap naturally</li>
              </ul>
            </div>
            <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4">
              <h4 className="text-purple-700 font-bold mb-2">
                Use Grid when:
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Layout is two-dimensional (rows AND columns)</li>
                <li>Full page layouts</li>
                <li>Card galleries</li>
                <li>Items should span multiple cells</li>
                <li>You want template areas (ASCII art layout)</li>
              </ul>
            </div>
          </div>
        </Diagram>

        <AnnotatedCode
          title="Grid essentials -- the must-know patterns"
          segments={[
            {
              code: "/* Pattern 1: Equal columns */\n",
            },
            {
              code: "grid-template-columns: repeat(3, 1fr);\n\n",
              annotation:
                "Creates 3 equal columns. repeat(3, 1fr) is shorthand for '1fr 1fr 1fr'.",
              label: "Equal columns",
            },
            {
              code: "/* Pattern 2: Responsive auto-fit */\n",
            },
            {
              code: "grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n\n",
              annotation:
                "The most powerful one-liner. Creates as many columns as fit, each at least 250px. Fully responsive, no media queries!",
              label: "Auto-fit (memorize this!)",
            },
            {
              code: "/* Pattern 3: Spanning */\n",
            },
            {
              code: "grid-column: span 2;  /* Takes 2 columns */\n",
              annotation:
                "Makes an item occupy 2 grid cells horizontally. grid-row: span 2 does the same vertically.",
              label: "Spanning cells",
            },
            {
              code: "grid-column: 1 / -1;  /* Full width */\n",
              annotation:
                "Stretches from the first column line (1) to the last (-1). Full width regardless of how many columns exist.",
              label: "Full width",
            },
          ]}
        />
      </section>

      {/* ── Animations Review ── */}
      <section>
        <h2>Round 5: Transitions & Animations</h2>
        <p>
          <strong>Transitions</strong> = smooth change from A to B (needs a
          trigger like :hover). <strong>Keyframe animations</strong> = multi-step,
          can play automatically.
        </p>

        <Diagram title="Transition vs @keyframes at a glance">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
              <h4 className="text-blue-700 font-bold text-sm mb-2">
                Transition
              </h4>
              <div className="text-sm text-gray-700 space-y-1">
                <p>
                  <code>transition: property duration timing;</code>
                </p>
                <p>Needs a trigger (:hover, :focus)</p>
                <p>Goes from A to B only</p>
                <p>Best for: hover effects, interactive states</p>
              </div>
            </div>
            <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4">
              <h4 className="text-purple-700 font-bold text-sm mb-2">
                @keyframes
              </h4>
              <div className="text-sm text-gray-700 space-y-1">
                <p>
                  <code>animation: name duration timing count;</code>
                </p>
                <p>Can play automatically (no trigger)</p>
                <p>Multi-step (0%, 50%, 100%)</p>
                <p>Best for: loaders, entrance animations</p>
              </div>
            </div>
          </div>
        </Diagram>

        <AnnotatedCode
          title="Animation essentials -- the patterns you must know"
          segments={[
            {
              code: "/* Transition: smooth hover effect */\n.btn {\n",
            },
            {
              code: "  transition: all 0.3s ease;\n",
              annotation:
                "Animate ALL properties over 0.3 seconds with 'ease' timing. Place this on the BASE state, not the :hover state!",
              label: "Transition on base",
            },
            {
              code: "}\n.btn:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 20px rgba(0,0,0,0.2);\n}\n\n",
            },
            {
              code: "/* Keyframes: spinner loader */\n@keyframes spin {\n  to { transform: rotate(360deg); }\n}\n.spinner {\n  border: 5px solid #eee;\n  border-top-color: #3498db;\n  border-radius: 50%;\n",
            },
            {
              code: "  animation: spin 1s linear infinite;\n",
              annotation:
                "'spin' = keyframe name, '1s' = duration, 'linear' = constant speed, 'infinite' = repeat forever. This is the classic CSS loading spinner!",
              label: "Infinite animation",
            },
            {
              code: "}\n",
            },
          ]}
        />

        <InfoBox type="tip">
          For smooth animations, only animate <code>transform</code> and{" "}
          <code>opacity</code>. These are GPU-accelerated. Animating{" "}
          <code>width</code>, <code>height</code>, or <code>margin</code>{" "}
          causes layout recalculation and jank.
        </InfoBox>
      </section>

      {/* ── Responsive + Position Review ── */}
      <section>
        <h2>Round 6: Responsive Design & Positioning</h2>

        <InfoBox type="info">
          <strong>Quick Quiz:</strong> Name the 5 position values! Answer:{" "}
          <code>static</code> (default, normal flow),{" "}
          <code>relative</code> (nudge from normal position),{" "}
          <code>absolute</code> (position within parent),{" "}
          <code>fixed</code> (glued to viewport),{" "}
          <code>sticky</code> (hybrid of relative + fixed).
        </InfoBox>

        <Diagram title="Responsive design essentials">
          <div className="space-y-3">
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-3">
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded shrink-0">
                #1
              </span>
              <div className="text-sm">
                <strong>Viewport meta tag</strong> -- without it, nothing
                responsive works on mobile.
                <code className="block mt-1 text-xs text-gray-600">
                  &lt;meta name="viewport" content="width=device-width,
                  initial-scale=1.0"&gt;
                </code>
              </div>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 flex items-start gap-3">
              <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded shrink-0">
                #2
              </span>
              <div className="text-sm">
                <strong>Mobile-first</strong> -- write base styles for mobile,
                use <code>@media (min-width: ...)</code> for larger screens.
              </div>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex items-start gap-3">
              <span className="bg-yellow-500 text-gray-800 text-xs font-bold px-2 py-1 rounded shrink-0">
                #3
              </span>
              <div className="text-sm">
                <strong>Responsive images</strong> --{" "}
                <code>max-width: 100%; height: auto;</code> on all images.
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-start gap-3">
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded shrink-0">
                #4
              </span>
              <div className="text-sm">
                <strong>Fluid typography</strong> --{" "}
                <code>font-size: clamp(min, preferred, max);</code> scales
                smoothly without breakpoints.
              </div>
            </div>
          </div>
        </Diagram>

        <InfoBox type="warning">
          <strong>Top 3 exam traps:</strong> (1) Forgetting the viewport meta
          tag -- nothing responsive works without it. (2) Using z-index on a
          static element -- it only works on positioned elements! (3) An
          absolutely positioned child with no positioned parent -- it positions
          relative to the entire page.
        </InfoBox>
      </section>

      {/* ── Common Mistakes ── */}
      <section>
        <h2>The Hall of Shame: Common Mistakes</h2>
        <p>
          These are the mistakes that cost students the most points. Study them,
          memorize them, and never make them again!
        </p>

        <Diagram title="Common mistakes and their fixes">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              {
                mistake: "Fixed widths: width: 960px;",
                fix: "Fluid: max-width: 960px; width: 100%;",
              },
              {
                mistake: "No box-sizing (width 300px + padding = 340px)",
                fix: "*, *::before, *::after { box-sizing: border-box; }",
              },
              {
                mistake: "Using floats for layout: float: left;",
                fix: "Use Flexbox or Grid: display: flex;",
              },
              {
                mistake: "z-index on static element (does nothing!)",
                fix: "Add position: relative; then z-index: 100;",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="bg-red-50 border border-red-200 rounded px-3 py-2 text-sm">
                  <span className="text-red-600 font-bold text-xs">
                    MISTAKE:
                  </span>{" "}
                  <code className="text-xs">{item.mistake}</code>
                </div>
                <div className="bg-green-50 border border-green-200 rounded px-3 py-2 text-sm">
                  <span className="text-green-600 font-bold text-xs">
                    FIX:
                  </span>{" "}
                  <code className="text-xs">{item.fix}</code>
                </div>
              </div>
            ))}
          </div>
        </Diagram>
      </section>

      {/* ── Self-Test Checklist ── */}
      <section>
        <h2>Pre-Exam Self-Test</h2>
        <p>
          Go through this checklist. For every item you cannot confidently
          explain, go back and review that section. Be honest with yourself!
        </p>

        <Diagram title="Check every item you can confidently explain">
          <div className="max-w-xl mx-auto space-y-4">
            {[
              {
                title: "HTML",
                items: [
                  "What is DOCTYPE for?",
                  "Name 6 semantic tags and when to use each",
                  "Block vs inline elements",
                  "How to make images accessible (alt text)",
                  "Form elements: input types, labels, fieldset",
                ],
              },
              {
                title: "CSS",
                items: [
                  "Box model: content, padding, border, margin",
                  "Specificity: element < class < ID < inline",
                  "Flexbox: justify-content, align-items, gap",
                  "Grid: template-columns, auto-fit, minmax, span",
                  "Transitions vs @keyframes",
                  "Pseudo-classes (:hover, :nth-child, :not)",
                  "Pseudo-elements (::before, ::after)",
                ],
              },
              {
                title: "Responsive & Layout",
                items: [
                  "Viewport meta tag",
                  "Media queries (min-width vs max-width)",
                  "Mobile-first approach",
                  "All 5 position values",
                  "z-index (only works on positioned elements!)",
                  "clamp() for fluid typography",
                ],
              },
            ].map((section) => (
              <div key={section.title}>
                <div className="bg-gray-800 text-white px-4 py-2 rounded-t-lg font-bold text-sm">
                  {section.title}
                </div>
                {section.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-4 py-2.5 border-b border-gray-200 text-sm text-gray-700 bg-white last:border-0 last:rounded-b-lg"
                  >
                    <div className="w-4 h-4 border-2 border-gray-300 rounded shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Diagram>
      </section>

      {/* ── Exam Tips ── */}
      <section>
        <h2>Exam Day Battle Plan</h2>

        <Diagram title="Your exam day strategy">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              {
                num: "1",
                title: "Read Everything First",
                desc: "Understand ALL requirements before writing a single line of code.",
              },
              {
                num: "2",
                title: "HTML First, CSS Second",
                desc: "Write the complete HTML structure with semantic tags, then add CSS.",
              },
              {
                num: "3",
                title: "Start with Resets",
                desc: "First CSS line: * { box-sizing: border-box; }",
              },
              {
                num: "4",
                title: "Mobile-First",
                desc: "Write mobile styles first, then add media queries for larger screens.",
              },
              {
                num: "5",
                title: "Keep It Simple",
                desc: "If Flexbox solves it, don't overcomplicate with Grid. Simple wins.",
              },
              {
                num: "6",
                title: "Review Your Code",
                desc: "Check: closing tags, alt text, labels, semicolons, class name typos.",
              },
            ].map((tip) => (
              <div
                key={tip.num}
                className="bg-linear-to-br from-indigo-500 to-purple-600 text-white rounded-xl p-4"
              >
                <div className="bg-white/20 w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm mb-2">
                  {tip.num}
                </div>
                <h4 className="font-bold text-sm mb-1">{tip.title}</h4>
                <p className="text-xs opacity-90 leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </Diagram>
      </section>

      {/* ── Exercises ── */}
      <section>
        <h2>Practice Exercises</h2>

        <ExerciseBlock number={1}>
          <p>
            <strong>Mini-Project: Restaurant Landing Page.</strong> Build a
            complete page combining all concepts:
          </p>
          <ul>
            <li>
              Semantic HTML: header with nav, main with sections, footer.
            </li>
            <li>Sticky navigation bar with restaurant name and 4 links.</li>
            <li>Hero section with clamp() typography.</li>
            <li>3 food cards in a responsive Grid/Flexbox layout.</li>
            <li>
              Each card: food name, description, price badge (positioned
              absolutely), hover effect.
            </li>
            <li>
              Contact form: name, email, date picker, party size dropdown,
              submit button.
            </li>
            <li>Responsive: works from 320px to 1024px+.</li>
          </ul>
        </ExerciseBlock>

        <ExerciseBlock number={2}>
          <p>
            <strong>Mini-Project: Personal Portfolio.</strong> Create a
            single-page portfolio:
          </p>
          <ul>
            <li>Fixed header with your name and nav links.</li>
            <li>
              "About Me" with image + text side by side (Flexbox), stacking on
              mobile.
            </li>
            <li>
              "Skills" using CSS Grid with{" "}
              <code>repeat(auto-fit, minmax(200px, 1fr))</code>.
            </li>
            <li>
              "Projects" with 3 cards: fade-in animation + hover lift effect.
            </li>
            <li>Footer, semantic HTML, 2+ breakpoints.</li>
          </ul>
        </ExerciseBlock>
      </section>

      {/* ── Homework ── */}
      <HomeworkBlock>
        <h3>Midterm Practice Exam</h3>
        <p>
          Complete both tasks below as if it were the real exam.{" "}
          <strong>Time yourself -- try to finish in 90 minutes total.</strong>
        </p>
        <p>
          <strong>Task 1: Event Page (45 minutes)</strong>
        </p>
        <ul>
          <li>A "Tech Conference" page with semantic HTML.</li>
          <li>Fixed navigation with event name and 3 links.</li>
          <li>
            Hero: background color, h1 with clamp(), date, "Register" button.
          </li>
          <li>
            Speakers: 4 cards in responsive Grid. 2 cards have a "Keynote"
            badge (absolute positioned).
          </li>
          <li>Schedule: styled table or list with 5 sessions.</li>
          <li>
            Registration form: name, email, ticket type (radio), dietary
            restrictions (checkboxes), submit.
          </li>
          <li>Footer. Responsive with 2+ breakpoints.</li>
        </ul>
        <p>
          <strong>Task 2: E-Commerce Page (45 minutes)</strong>
        </p>
        <ul>
          <li>Sticky navigation with store name and 4 links.</li>
          <li>
            Product display: image left, details right (Flexbox), stacking on
            mobile.
          </li>
          <li>
            Details: name, price, description, size dropdown, quantity input,
            "Add to Cart" button with hover transition.
          </li>
          <li>
            3 "Related Products" cards in responsive Grid with hover effects.
          </li>
          <li>
            A "SALE" badge on one card (absolute positioned).
          </li>
          <li>Footer. Must look good from 320px to 1200px+.</li>
        </ul>
        <p>
          Save as <code>event.html</code> / <code>event.css</code> and{" "}
          <code>shop.html</code> / <code>shop.css</code>.
        </p>
      </HomeworkBlock>
    </LectureWrapper>
  );
};

export default Lecture08;
