import LectureWrapper from "../../components/LectureWrapper";
import AnnotatedCode from "../../components/AnnotatedCode";
import Diagram from "../../components/Diagram";
import GridPlayground from "../../components/GridPlayground";
import InfoBox from "../../components/InfoBox";
import ExerciseBlock from "../../components/ExerciseBlock";
import HomeworkBlock from "../../components/HomeworkBlock";

const Lecture05 = () => {
  return (
    <LectureWrapper id="05" title="CSS Grid, Pseudo-Classes & Animations">
      {/* ── Intro ── */}
      <section>
        <h2>Welcome to the Grid Side</h2>
        <p>
          Last week you learned Flexbox -- the king of one-dimensional layouts.
          Today we level up to <strong>CSS Grid</strong>, which lets you control
          <em> both rows AND columns</em> at the same time. Think of it like an
          Excel spreadsheet: you decide how many columns and rows you want, then
          drop items into specific cells.
        </p>
        <p>
          We will also explore <strong>pseudo-classes</strong> (styling elements
          based on what is <em>happening</em> to them),{" "}
          <strong>pseudo-elements</strong> (sneaking in extra decorations), and{" "}
          <strong>CSS animations</strong> (making things move, bounce, and spin).
        </p>
        <p>
          Buckle up -- by the end of this lecture, your pages will have
          two-dimensional layouts, rainbow hover effects, and spinning loaders.
        </p>
      </section>

      {/* ── CSS Grid Basics ── */}
      <section>
        <h2>CSS Grid: Your 2D Superpower</h2>
        <p>
          Flexbox is great when things flow in <em>one direction</em> (a row or
          a column). But what if you need a header spanning the full width, a
          sidebar on the left, content on the right, and a footer at the bottom
          -- all at once? That is a <strong>two-dimensional</strong> problem, and
          Grid was built exactly for it.
        </p>

        <Diagram title="Flexbox (1D) vs Grid (2D)">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h4 className="text-sm font-bold text-gray-600 mb-2">
                Flexbox: One Direction
              </h4>
              <div className="flex gap-2">
                <div className="bg-blue-400 text-white rounded px-4 py-6 text-center text-sm font-bold">
                  1
                </div>
                <div className="bg-blue-400 text-white rounded px-4 py-6 text-center text-sm font-bold">
                  2
                </div>
                <div className="bg-blue-400 text-white rounded px-4 py-6 text-center text-sm font-bold">
                  3
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Items flow in a single row or column
              </p>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-gray-600 mb-2">
                Grid: Rows AND Columns
              </h4>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-purple-500 text-white rounded px-4 py-4 text-center text-sm font-bold">
                  1
                </div>
                <div className="bg-purple-500 text-white rounded px-4 py-4 text-center text-sm font-bold">
                  2
                </div>
                <div className="bg-purple-500 text-white rounded px-4 py-4 text-center text-sm font-bold">
                  3
                </div>
                <div className="bg-purple-500 text-white rounded px-4 py-4 text-center text-sm font-bold">
                  4
                </div>
                <div className="bg-purple-500 text-white rounded px-4 py-4 text-center text-sm font-bold">
                  5
                </div>
                <div className="bg-purple-500 text-white rounded px-4 py-4 text-center text-sm font-bold">
                  6
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Items fill a 2D grid of rows and columns
              </p>
            </div>
          </div>
        </Diagram>

        <h3>Step 1: Turn on Grid</h3>
        <p>
          Just like Flexbox, you flip a switch on the parent container. All
          direct children instantly become grid items.
        </p>

        <AnnotatedCode
          title="Three equal columns with Grid"
          segments={[
            {
              code: ".grid-container {\n",
            },
            {
              code: "  display: grid;\n",
              annotation:
                "This turns the container into a grid. All direct children become grid items automatically.",
              label: "Enable Grid",
            },
            {
              code: "  grid-template-columns: 1fr 1fr 1fr;\n",
              annotation:
                "Defines 3 columns, each taking 1 fraction (1fr) of available space. So all three columns are equal width.",
              label: "3 Columns",
            },
            {
              code: "  gap: 10px;\n",
              annotation:
                "Adds 10px of spacing between every grid cell -- both rows and columns. Like gap in Flexbox.",
              label: "Gap",
            },
            {
              code: "}\n",
            },
          ]}
        />

        <InfoBox type="info">
          The <code>fr</code> unit stands for <strong>fraction</strong> of the
          available space. <code>1fr 1fr 1fr</code> = three equal columns.{" "}
          <code>1fr 2fr 1fr</code> = the middle column is twice as wide. It
          works like <code>flex-grow</code> but for grid tracks!
        </InfoBox>

        <h3>Step 2: Mixing Fixed and Flexible Columns</h3>
        <p>
          You define the grid shape with <code>grid-template-columns</code> and{" "}
          <code>grid-template-rows</code>. Mix fixed sizes (<code>200px</code>),
          fractions (<code>1fr</code>), and auto-sizing however you like.
        </p>

        <AnnotatedCode
          title="Mixed fixed + flexible columns"
          segments={[
            {
              code: ".mixed-grid {\n  display: grid;\n",
            },
            {
              code: "  grid-template-columns: 200px 1fr 1fr;\n",
              annotation:
                "First column is always 200px wide (fixed). The remaining two columns share the leftover space equally (1fr each).",
              label: "Mixed widths",
            },
            {
              code: "  grid-template-rows: 80px 120px;\n",
              annotation:
                "First row is 80px tall, second row is 120px tall. Without this, rows auto-size to their content.",
              label: "Row heights",
            },
            {
              code: "  gap: 8px;\n}\n",
            },
          ]}
        />

        <h3>Step 3: The Magic of repeat() and minmax()</h3>
        <p>
          Writing <code>1fr 1fr 1fr 1fr</code> is tedious. Use{" "}
          <code>repeat(4, 1fr)</code> instead. And for fully responsive grids
          without media queries, combine it with <code>auto-fit</code> and{" "}
          <code>minmax()</code>:
        </p>

        <AnnotatedCode
          title="Responsive auto-fit grid -- the most powerful CSS one-liner"
          segments={[
            {
              code: ".auto-grid {\n  display: grid;\n",
            },
            {
              code: "  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n",
              annotation:
                "This is the most powerful one-liner in CSS! It says: make as many columns as fit, each at least 150px wide, and share leftover space equally. The browser automatically adjusts the number of columns as you resize -- no media queries needed!",
              label: "Auto-fit + minmax",
            },
            {
              code: "  gap: 12px;\n}\n",
            },
          ]}
        />

        <InfoBox type="tip">
          <code>repeat(auto-fit, minmax(250px, 1fr))</code> is arguably the most
          powerful one-liner in CSS. It says: "make as many columns as fit, each
          at least 250px wide, and share leftover space equally." No media
          queries needed!
        </InfoBox>

        <h3>Step 4: Spanning Items</h3>
        <p>
          Want a header that stretches across all columns? Or a featured card
          that takes up two cells? Use <code>grid-column</code> and{" "}
          <code>grid-row</code>.
        </p>

        <AnnotatedCode
          title="Items spanning multiple columns and rows"
          segments={[
            {
              code: ".wide-item {\n",
            },
            {
              code: "  grid-column: span 2;\n",
              annotation:
                "This item takes up 2 columns instead of 1. Great for featured cards or wide banners.",
              label: "Span 2 columns",
            },
            {
              code: "}\n\n.tall-item {\n",
            },
            {
              code: "  grid-row: span 2;\n",
              annotation:
                "This item takes up 2 rows instead of 1. Perfect for a tall sidebar or tall image card.",
              label: "Span 2 rows",
            },
            {
              code: "}\n\n.full-width {\n",
            },
            {
              code: "  grid-column: 1 / -1;\n",
              annotation:
                "Stretches from column line 1 to the last column line (-1). This makes the item span ALL columns regardless of how many there are. Perfect for headers and footers.",
              label: "Full width",
            },
            {
              code: "}\n",
            },
          ]}
        />

        <Diagram title="Grid spanning visualized">
          <div className="grid grid-cols-3 gap-2 text-white text-sm font-bold text-center">
            <div className="col-span-3 bg-purple-600 rounded py-3">
              Full Width (grid-column: 1 / -1)
            </div>
            <div className="col-span-2 bg-red-500 rounded py-3">
              Span 2 Columns
            </div>
            <div className="row-span-2 bg-green-500 rounded py-3 flex items-center justify-center">
              Span 2 Rows
            </div>
            <div className="bg-gray-600 rounded py-3">Normal</div>
            <div className="bg-gray-600 rounded py-3">Normal</div>
          </div>
        </Diagram>

        <h3>Step 5: Grid Template Areas (the Visual Way)</h3>
        <p>
          This is the most satisfying CSS feature ever. You literally{" "}
          <em>draw your layout in ASCII art</em> and CSS makes it real:
        </p>

        <AnnotatedCode
          title="Grid Template Areas -- draw your layout!"
          segments={[
            {
              code: ".page-layout {\n  display: grid;\n",
            },
            {
              code:
                '  grid-template-areas:\n    "header  header  header"\n    "sidebar content content"\n    "footer  footer  footer";\n',
              annotation:
                "You literally draw the layout with names! Each quoted string is a row. Repeating a name (like 'header' three times) makes that area span those columns. It is like ASCII art that the browser turns into a real layout.",
              label: "Template areas",
            },
            {
              code: "  grid-template-columns: 200px 1fr 1fr;\n  grid-template-rows: 60px 1fr 50px;\n  gap: 8px;\n}\n\n",
            },
            {
              code: ".header  { grid-area: header; }\n",
              annotation:
                "Assigns this element to the 'header' area defined above. It will automatically span all 3 columns because 'header' appears 3 times in the first row.",
              label: "Assign area",
            },
            {
              code: ".sidebar { grid-area: sidebar; }\n.content { grid-area: content; }\n.footer  { grid-area: footer; }\n",
            },
          ]}
        />

        <Diagram title="Grid Template Areas -- visual result">
          <div
            className="grid gap-2 text-white text-sm font-bold text-center"
            style={{
              gridTemplateAreas: `"header header header" "sidebar content content" "footer footer footer"`,
              gridTemplateColumns: "150px 1fr 1fr",
              gridTemplateRows: "50px 120px 40px",
            }}
          >
            <div
              className="bg-gray-700 rounded flex items-center justify-center"
              style={{ gridArea: "header" }}
            >
              Header
            </div>
            <div
              className="bg-gray-600 rounded flex items-center justify-center"
              style={{ gridArea: "sidebar" }}
            >
              Sidebar
            </div>
            <div
              className="bg-blue-500 rounded flex items-center justify-center"
              style={{ gridArea: "content" }}
            >
              Content
            </div>
            <div
              className="bg-gray-700 rounded flex items-center justify-center"
              style={{ gridArea: "footer" }}
            >
              Footer
            </div>
          </div>
        </Diagram>
      </section>

      {/* ── Interactive Grid Playground ── */}
      <section>
        <h2>Grid Playground -- Your Turn!</h2>
        <p>
          Enough reading. Time to <em>play</em>. The playground below lets you
          tweak grid properties in real time. Change the number of columns, play
          with gap, try different alignments. Go wild!
        </p>
        <GridPlayground />
      </section>

      {/* ── Pseudo-Classes ── */}
      <section>
        <h2>Pseudo-Classes: Styling Based on State</h2>
        <p>
          A <strong>pseudo-class</strong> targets an element based on what is{" "}
          <em>happening</em> to it or <em>where it is</em> in the document. The
          syntax uses a single colon: <code>selector:pseudo-class</code>. Think
          of it as CSS saying "style this element <em>when...</em>"
        </p>

        <Diagram title="Categories of pseudo-classes">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
              <h4 className="text-blue-700 font-bold text-sm mb-2">
                Interactive States
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>
                  <code className="text-blue-600">:hover</code> -- mouse over
                </li>
                <li>
                  <code className="text-blue-600">:focus</code> -- clicked /
                  tabbed into
                </li>
                <li>
                  <code className="text-blue-600">:active</code> -- being
                  clicked
                </li>
              </ul>
            </div>
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
              <h4 className="text-green-700 font-bold text-sm mb-2">
                Structural Position
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>
                  <code className="text-green-600">:first-child</code> -- first
                  item
                </li>
                <li>
                  <code className="text-green-600">:last-child</code> -- last
                  item
                </li>
                <li>
                  <code className="text-green-600">:nth-child(n)</code> -- item
                  by number
                </li>
              </ul>
            </div>
            <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-4">
              <h4 className="text-orange-700 font-bold text-sm mb-2">
                Negation / Filter
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>
                  <code className="text-orange-600">:not(selector)</code> --
                  everything except
                </li>
                <li>
                  <code className="text-orange-600">:empty</code> -- no
                  children
                </li>
                <li>
                  <code className="text-orange-600">:checked</code> -- checked
                  input
                </li>
              </ul>
            </div>
          </div>
        </Diagram>

        <h3>Interactive States: :hover, :focus, :active</h3>
        <p>
          These are the bread and butter of interactive web design. They let you
          change styling when a user interacts with an element.
        </p>

        <AnnotatedCode
          title="Button with hover and active states"
          segments={[
            {
              code: ".btn {\n  background: #3498db;\n  color: white;\n  padding: 14px 28px;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n",
            },
            {
              code: "  transition: all 0.3s ease;\n",
              annotation:
                "Without this line, the hover changes would be instant and jarring. The transition makes them smooth over 0.3 seconds.",
              label: "Smooth transition",
            },
            {
              code: "}\n\n",
            },
            {
              code: ".btn:hover {\n  background: #2980b9;\n  transform: translateY(-3px);\n  box-shadow: 0 6px 20px rgba(52, 152, 219, 0.4);\n}\n",
              annotation:
                "When the mouse hovers over the button, it changes color, lifts up 3px (translateY), and gets a colored shadow. All animated smoothly because of the transition above.",
              label: ":hover",
            },
            {
              code: "\n.btn:active {\n  transform: translateY(0);\n  box-shadow: none;\n}\n",
              annotation:
                "When the button is actively being pressed down, it snaps back to its original position and the shadow disappears. This gives the feel of a physical button press.",
              label: ":active",
            },
          ]}
        />

        <h3>Structural Pseudo-Classes: :nth-child, :first-child, :not()</h3>
        <p>
          These let you style elements based on their <em>position</em> among
          siblings. Want zebra-striped tables? Highlight every third item? Style
          everything <em>except</em> one element?
        </p>

        <AnnotatedCode
          title="Zebra-striped table with structural pseudo-classes"
          segments={[
            {
              code: "/* Every even row gets a light background */\n",
            },
            {
              code: "tr:nth-child(even) {\n  background: #f0f4f8;\n}\n",
              annotation:
                "nth-child(even) targets every second row (2nd, 4th, 6th...). You can also use odd, or formulas like 3n (every third) or 3n+1 (1st, 4th, 7th...).",
              label: ":nth-child",
            },
            {
              code: "\n/* First column in each row is bold */\n",
            },
            {
              code: "td:first-child {\n  font-weight: bold;\n}\n",
              annotation:
                "Selects the first <td> in each row. :last-child would target the last one.",
              label: ":first-child",
            },
            {
              code: "\n/* Style all tags EXCEPT the featured one */\n",
            },
            {
              code: ".tag:not(.featured) {\n  opacity: 0.7;\n}\n",
              annotation:
                ":not() is the negation pseudo-class. It selects everything that does NOT match the selector inside the parentheses. Very handy for 'all except' scenarios.",
              label: ":not()",
            },
          ]}
        />

        <Diagram title="nth-child patterns visualized">
          <div className="space-y-4">
            <div>
              <p className="text-xs font-bold text-gray-500 mb-1">
                :nth-child(even) -- every even item
              </p>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div
                    key={n}
                    className={`w-12 h-12 rounded flex items-center justify-center text-sm font-bold ${
                      n % 2 === 0
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {n}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500 mb-1">
                :nth-child(3n) -- every 3rd item
              </p>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div
                    key={n}
                    className={`w-12 h-12 rounded flex items-center justify-center text-sm font-bold ${
                      n % 3 === 0
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {n}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500 mb-1">
                :first-child and :last-child
              </p>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div
                    key={n}
                    className={`w-12 h-12 rounded flex items-center justify-center text-sm font-bold ${
                      n === 1
                        ? "bg-red-500 text-white"
                        : n === 6
                          ? "bg-purple-500 text-white"
                          : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {n}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Diagram>
      </section>

      {/* ── Pseudo-Elements ── */}
      <section>
        <h2>Pseudo-Elements: Secret Decorations</h2>
        <p>
          While pseudo-<em>classes</em> target elements in a certain state,
          pseudo-<em>elements</em> let you insert or style <em>parts</em> of an
          element. They use a double colon <code>::</code> and the most useful
          ones are <code>::before</code> and <code>::after</code>.
        </p>
        <p>
          Think of them as invisible helpers. They are not real HTML elements --
          you cannot find them in the DOM. But they can hold decorative content!
        </p>

        <AnnotatedCode
          title="Decorative underline with ::after"
          segments={[
            {
              code: ".fancy-heading {\n  font-size: 24px;\n  color: #2c3e50;\n  display: inline-block;\n}\n\n",
            },
            {
              code: ".fancy-heading::after {\n",
              annotation:
                "::after creates a virtual element as the last child of .fancy-heading. It does not exist in the HTML -- CSS generates it!",
              label: "::after",
            },
            {
              code: '  content: "";\n',
              annotation:
                "The content property is REQUIRED for ::before and ::after. Even if empty, you must include it or the pseudo-element will not render at all!",
              label: "content",
            },
            {
              code: "  display: block;\n  width: 60%;\n  height: 4px;\n  background: linear-gradient(to right, #3498db, #9b59b6);\n  margin-top: 8px;\n  border-radius: 2px;\n",
            },
            {
              code: "  transition: width 0.3s ease;\n",
              annotation:
                "Animates the width change. Combined with the hover rule below, the underline expands smoothly on hover.",
              label: "Transition",
            },
            {
              code: "}\n\n",
            },
            {
              code: ".fancy-heading:hover::after {\n  width: 100%;\n}\n",
              annotation:
                "On hover, the pseudo-element expands from 60% to 100% width. Notice the syntax: the pseudo-class (:hover) comes before the pseudo-element (::after).",
              label: ":hover::after",
            },
          ]}
        />

        <InfoBox type="warning">
          <code>::before</code> and <code>::after</code> always need{" "}
          <code>content: ""</code> -- even if it is empty! Without it, they
          simply will not render. Also, they are purely decorative -- screen
          readers skip them, so never put important information in them.
        </InfoBox>

        <Diagram title="Pseudo-class vs Pseudo-element -- know the difference!">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
              <h4 className="text-blue-700 font-bold mb-2">
                Pseudo-CLASS (single colon :)
              </h4>
              <p className="text-sm text-gray-700 mb-2">
                Targets an element in a <strong>specific state</strong>
              </p>
              <div className="font-mono text-sm bg-white rounded p-2 space-y-1">
                <div>
                  <span className="text-blue-600">:hover</span>{" "}
                  <span className="text-gray-400">-- mouse over</span>
                </div>
                <div>
                  <span className="text-blue-600">:nth-child(2)</span>{" "}
                  <span className="text-gray-400">-- 2nd item</span>
                </div>
                <div>
                  <span className="text-blue-600">:not(.active)</span>{" "}
                  <span className="text-gray-400">-- all except</span>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-4">
              <h4 className="text-purple-700 font-bold mb-2">
                Pseudo-ELEMENT (double colon ::)
              </h4>
              <p className="text-sm text-gray-700 mb-2">
                Creates or targets a <strong>part</strong> of an element
              </p>
              <div className="font-mono text-sm bg-white rounded p-2 space-y-1">
                <div>
                  <span className="text-purple-600">::before</span>{" "}
                  <span className="text-gray-400">-- insert before</span>
                </div>
                <div>
                  <span className="text-purple-600">::after</span>{" "}
                  <span className="text-gray-400">-- insert after</span>
                </div>
                <div>
                  <span className="text-purple-600">::first-letter</span>{" "}
                  <span className="text-gray-400">-- style first letter</span>
                </div>
              </div>
            </div>
          </div>
        </Diagram>
      </section>

      {/* ── CSS Transitions ── */}
      <section>
        <h2>CSS Transitions: Smooth State Changes</h2>
        <p>
          A <strong>transition</strong> smoothly animates a property from one
          value to another. It needs a <em>trigger</em> (usually{" "}
          <code>:hover</code>) and the syntax is:{" "}
          <code>transition: property duration timing-function</code>.
        </p>
        <p>
          Without transitions, changes are instant and jarring. With them,
          everything feels polished and professional.
        </p>

        <AnnotatedCode
          title="Transition syntax breakdown"
          segments={[
            {
              code: ".card {\n",
            },
            {
              code: "  transition: all 0.4s ease;\n",
              annotation:
                "'all' = animate any property that changes. '0.4s' = take 0.4 seconds. 'ease' = start slow, speed up, then slow down. You can also target specific properties: 'transition: background 0.3s, transform 0.5s'.",
              label: "Transition shorthand",
            },
            {
              code: "}\n\n.card:hover {\n  background: #3498db;\n",
            },
            {
              code: "  transform: scale(1.2) rotate(10deg);\n",
              annotation:
                "Transform lets you scale (resize), rotate, translate (move), and skew elements. You can chain multiple transforms. These are GPU-accelerated so they are super smooth!",
              label: "Transform",
            },
            {
              code: "  border-radius: 50%;\n}\n",
            },
          ]}
        />

        <Diagram title="Common transform functions">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="w-16 h-16 bg-purple-500 rounded-lg mx-auto mb-2 flex items-center justify-center text-white text-xs font-bold hover:-translate-y-3 transition-transform duration-300 cursor-pointer">
                Hover!
              </div>
              <p className="text-xs text-gray-600 font-mono">
                translateY(-12px)
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-purple-500 rounded-lg mx-auto mb-2 flex items-center justify-center text-white text-xs font-bold hover:rotate-45 transition-transform duration-300 cursor-pointer">
                Hover!
              </div>
              <p className="text-xs text-gray-600 font-mono">rotate(45deg)</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-purple-500 rounded-lg mx-auto mb-2 flex items-center justify-center text-white text-xs font-bold hover:scale-125 transition-transform duration-300 cursor-pointer">
                Hover!
              </div>
              <p className="text-xs text-gray-600 font-mono">scale(1.25)</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-purple-500 rounded-lg mx-auto mb-2 flex items-center justify-center text-white text-xs font-bold hover:skew-x-12 transition-transform duration-300 cursor-pointer">
                Hover!
              </div>
              <p className="text-xs text-gray-600 font-mono">skewX(12deg)</p>
            </div>
          </div>
        </Diagram>

        <InfoBox type="tip">
          For buttery-smooth animations, stick to animating{" "}
          <code>transform</code> and <code>opacity</code>. The browser can
          optimize these on the GPU. Animating <code>width</code>,{" "}
          <code>height</code>, or <code>margin</code> forces the browser to
          recalculate layout -- which causes jank.
        </InfoBox>
      </section>

      {/* ── Keyframe Animations ── */}
      <section>
        <h2>@keyframes: Multi-Step Animations</h2>
        <p>
          Transitions only go from A to B. But what if you want an element to
          fade in, slide up, pause, then glow? That is where{" "}
          <code>@keyframes</code> come in. You define the animation steps, then
          apply them with the <code>animation</code> property.
        </p>

        <AnnotatedCode
          title="Keyframe animation -- fade and slide in"
          segments={[
            {
              code: "@keyframes fadeSlideIn {\n",
              annotation:
                "@keyframes defines a reusable animation by name. You can use 'from/to' for simple two-step animations, or percentages (0%, 50%, 100%) for multi-step ones.",
              label: "@keyframes",
            },
            {
              code: "  0% {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n",
            },
            {
              code: ".card {\n",
            },
            {
              code: "  animation: fadeSlideIn 0.6s ease forwards;\n",
              annotation:
                "Applies the animation. 'fadeSlideIn' = name, '0.6s' = duration, 'ease' = timing, 'forwards' = keep the final state after animation ends. Without 'forwards', the element would snap back to its 0% state.",
              label: "Animation shorthand",
            },
            {
              code: "}\n\n",
            },
            {
              code: ".card:nth-child(2) { animation-delay: 0.2s; opacity: 0; }\n",
              annotation:
                "animation-delay makes this card start its animation 0.2s later than the first card. Combined with opacity: 0 (starting invisible), this creates a staggered entrance effect where cards appear one by one.",
              label: "Staggered delay",
            },
            {
              code: ".card:nth-child(3) { animation-delay: 0.4s; opacity: 0; }\n",
            },
          ]}
        />

        <AnnotatedCode
          title="Infinite animations -- spinner, pulse, bounce"
          segments={[
            {
              code: "@keyframes spin {\n  to { transform: rotate(360deg); }\n}\n\n",
            },
            {
              code: "@keyframes pulse {\n  0%, 100% { transform: scale(1); }\n  50% { transform: scale(1.15); }\n}\n\n",
            },
            {
              code: ".spinner {\n  width: 50px;\n  height: 50px;\n  border: 5px solid #ecf0f1;\n",
            },
            {
              code: "  border-top-color: #3498db;\n",
              annotation:
                "This is the classic CSS spinner trick. All borders are light gray, but the top border is blue. When you rotate it 360 degrees infinitely, it looks like a loading spinner!",
              label: "Spinner trick",
            },
            {
              code: "  border-radius: 50%;\n",
            },
            {
              code: "  animation: spin 1s linear infinite;\n",
              annotation:
                "'linear' means constant speed (no easing). 'infinite' means it repeats forever. Perfect for loading spinners.",
              label: "Infinite loop",
            },
            {
              code: "}\n",
            },
          ]}
        />

        <Diagram title="Transition vs @keyframes -- when to use which">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
              <h4 className="text-blue-700 font-bold text-sm mb-2">
                Transition
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Goes from state A to state B</li>
                <li>Needs a trigger (like :hover)</li>
                <li>Simple and quick to write</li>
                <li>
                  Best for: hover effects, focus states, toggling visibility
                </li>
              </ul>
            </div>
            <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4">
              <h4 className="text-purple-700 font-bold text-sm mb-2">
                @keyframes
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Can have multiple steps (0%, 25%, 50%...)</li>
                <li>Can play automatically (no trigger needed)</li>
                <li>Can loop infinitely</li>
                <li>
                  Best for: loaders, entrance animations, attention-grabbers
                </li>
              </ul>
            </div>
          </div>
        </Diagram>
      </section>

      {/* ── Putting It All Together ── */}
      <section>
        <h2>Grand Finale: Grid + Pseudo + Animations</h2>
        <p>
          Let's see how all today's concepts combine. Here is a card gallery
          that uses Grid for layout, pseudo-classes for interactivity,
          pseudo-elements for decoration, and animations for polish.
        </p>

        <AnnotatedCode
          title="Everything combined into one showcase"
          segments={[
            {
              code: "@keyframes slideUp {\n  from { opacity: 0; transform: translateY(20px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n",
            },
            {
              code: ".showcase {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 16px;\n}\n\n",
            },
            {
              code: ".card {\n  background: white;\n  border-radius: 12px;\n  padding: 20px;\n  text-align: center;\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n",
            },
            {
              code: "  animation: slideUp 0.5s ease forwards;\n  opacity: 0;\n",
              annotation:
                "Cards start invisible (opacity: 0) and animate in with the slideUp keyframes. Combined with nth-child delays below, they appear one by one.",
              label: "Entrance animation",
            },
            {
              code: "}\n\n",
            },
            {
              code: ".card::before {\n  content: \"\";\n  position: absolute;\n  top: 0; left: 0; right: 0;\n  height: 4px;\n  background: linear-gradient(to right, #3498db, #9b59b6);\n  transform: scaleX(0);\n  transition: transform 0.3s ease;\n}\n",
              annotation:
                "A gradient bar at the top of each card, initially scaled to 0 width (invisible). It will expand on hover -- a slick decorative touch!",
              label: "::before decoration",
            },
            {
              code: "\n.card:hover::before { transform: scaleX(1); }\n",
              annotation:
                "On hover, the top bar scales to full width. The scaleX transform is GPU-accelerated, so it is very smooth.",
              label: "Hover reveals decoration",
            },
            {
              code: ".card:hover { transform: translateY(-6px); box-shadow: 0 12px 24px rgba(0,0,0,0.12); }\n",
            },
            {
              code: ".card:nth-child(2) { animation-delay: 0.1s; }\n.card:nth-child(3) { animation-delay: 0.2s; }\n",
            },
          ]}
        />
      </section>

      {/* ── Exercises ── */}
      <section>
        <h2>Exercises</h2>

        <ExerciseBlock number={1}>
          <p>
            Build a <strong>responsive image gallery</strong> using CSS Grid:
          </p>
          <ul>
            <li>
              Use <code>repeat(auto-fit, minmax(250px, 1fr))</code> for
              responsive columns.
            </li>
            <li>Add at least 6 cards with placeholder images and titles.</li>
            <li>
              Make the first card span 2 columns with{" "}
              <code>grid-column: span 2</code>.
            </li>
            <li>
              Use <code>:nth-child(even)</code> for alternating card backgrounds.
            </li>
            <li>
              Add a <code>::after</code> underline on card headings that expands
              on hover.
            </li>
          </ul>
        </ExerciseBlock>

        <ExerciseBlock number={2}>
          <p>
            Create a <strong>full page layout</strong> using{" "}
            <code>grid-template-areas</code>:
          </p>
          <ul>
            <li>
              Areas: header (full width), sidebar (left), content (right),
              footer (full width).
            </li>
            <li>Add hover transitions on sidebar links.</li>
            <li>
              Use <code>::before</code> to add decorative icons before nav links.
            </li>
          </ul>
        </ExerciseBlock>

        <ExerciseBlock number={3}>
          <p>
            Create an <strong>animated button collection</strong> with 3
            different buttons:
          </p>
          <ul>
            <li>
              Button 1: lifts up and changes color on hover (transition +
              transform).
            </li>
            <li>
              Button 2: continuous pulsing glow (@keyframes + box-shadow).
            </li>
            <li>
              Button 3: expanding underline from 0% to 100% width on hover
              (::after + transition).
            </li>
            <li>Bonus: add a spinning CSS loader below the buttons.</li>
          </ul>
        </ExerciseBlock>
      </section>

      {/* ── Homework ── */}
      <HomeworkBlock>
        <h3>Portfolio Page with Grid, Pseudo-Classes & Animations</h3>
        <p>
          Build a portfolio-style page that puts everything from today together:
        </p>
        <ol>
          <li>
            A <strong>header</strong> with navigation. Links should have{" "}
            <code>:hover</code> and <code>:focus</code> transitions.
          </li>
          <li>
            A <strong>projects section</strong> using CSS Grid with{" "}
            <code>repeat(auto-fit, minmax(...))</code>. At least one card should
            span 2 columns.
          </li>
          <li>
            Use at least 3 pseudo-classes (<code>:hover</code>,{" "}
            <code>:nth-child</code>, <code>:not</code>) and 2 pseudo-elements (
            <code>::before</code> or <code>::after</code>).
          </li>
          <li>
            Add at least one <code>@keyframes</code> animation (fade-in, pulse,
            or spinner).
          </li>
          <li>Every interactive element must have smooth transitions.</li>
        </ol>
      </HomeworkBlock>
    </LectureWrapper>
  );
};

export default Lecture05;
