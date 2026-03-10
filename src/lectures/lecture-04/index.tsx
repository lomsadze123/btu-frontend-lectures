import LectureWrapper from "../../components/LectureWrapper";
import InfoBox from "../../components/InfoBox";
import ExerciseBlock from "../../components/ExerciseBlock";
import HomeworkBlock from "../../components/HomeworkBlock";
import AnnotatedCode from "../../components/AnnotatedCode";
import Diagram from "../../components/Diagram";
import FlexboxPlayground from "../../components/FlexboxPlayground";

const Lecture04 = () => {
  return (
    <LectureWrapper id="04" title="CSS Flexbox & Backgrounds">
      {/* ── Why Layouts Matter ── */}
      <section>
        <h2>Time to Level Up Your Layouts!</h2>
        <p>
          So far our pages have been single-column: elements just stack from top
          to bottom like a boring to-do list. But real websites have navigation
          bars, sidebars, card grids, and footers arranged in sophisticated
          layouts. Before Flexbox, developers used floats and table hacks —
          painful and fragile. <strong>Flexbox</strong> was created specifically
          to make layouts easy, predictable, and responsive.
        </p>
        <p>
          Think of Flexbox like organizing books on a shelf. The{" "}
          <strong>shelf</strong> is the flex container, and each{" "}
          <strong>book</strong> is a flex item. You control how books are
          arranged by giving instructions to the shelf, not the individual
          books!
        </p>

        <Diagram title="Before vs After Flexbox">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <div className="font-bold text-red-700 mb-2 text-sm">
                Without Flexbox (stacked):
              </div>
              <div className="bg-gray-100 rounded-lg p-3 space-y-2">
                <div className="bg-red-500 text-white rounded p-3 text-center text-sm">
                  Item 1
                </div>
                <div className="bg-red-500 text-white rounded p-3 text-center text-sm">
                  Item 2
                </div>
                <div className="bg-red-500 text-white rounded p-3 text-center text-sm">
                  Item 3
                </div>
              </div>
            </div>
            <div>
              <div className="font-bold text-green-700 mb-2 text-sm">
                With Flexbox (side by side!):
              </div>
              <div className="bg-gray-100 rounded-lg p-3 flex gap-2">
                <div className="bg-green-500 text-white rounded p-3 text-center text-sm flex-1">
                  Item 1
                </div>
                <div className="bg-green-500 text-white rounded p-3 text-center text-sm flex-1">
                  Item 2
                </div>
                <div className="bg-green-500 text-white rounded p-3 text-center text-sm flex-1">
                  Item 3
                </div>
              </div>
            </div>
          </div>
        </Diagram>

        <p>
          All it took was <code>display: flex</code> on the parent container.
          That is the magic of Flexbox!
        </p>
      </section>

      {/* ── Interactive Flexbox Playground ── */}
      <section>
        <h2>Interactive Flexbox Playground</h2>
        <p>
          This is your best friend for learning Flexbox. Play with the dropdowns
          and watch the items rearrange in real time. Spend some time here — the
          more you play, the faster you will master it!
        </p>

        <FlexboxPlayground />
      </section>

      {/* ── flex-direction ── */}
      <section>
        <h2>flex-direction — Which Way Do Items Flow?</h2>
        <p>
          By default, flex items flow left to right (row). But you can change
          this! The <code>flex-direction</code> property controls the{" "}
          <strong>main axis</strong> — the direction items flow.
        </p>

        <Diagram title="flex-direction — All Four Values">
          <div className="space-y-4">
            <div>
              <div className="text-sm font-bold text-gray-700 mb-1">
                row (default — left to right)
              </div>
              <div className="bg-gray-100 rounded-lg p-3 flex gap-2">
                <div className="bg-blue-500 text-white rounded px-5 py-2 text-sm">
                  1
                </div>
                <div className="bg-blue-500 text-white rounded px-5 py-2 text-sm">
                  2
                </div>
                <div className="bg-blue-500 text-white rounded px-5 py-2 text-sm">
                  3
                </div>
                <div className="text-gray-400 text-xs flex items-center ml-2">
                  {"-->"}
                </div>
              </div>
            </div>
            <div>
              <div className="text-sm font-bold text-gray-700 mb-1">
                row-reverse (right to left)
              </div>
              <div className="bg-gray-100 rounded-lg p-3 flex flex-row-reverse gap-2">
                <div className="bg-blue-500 text-white rounded px-5 py-2 text-sm">
                  1
                </div>
                <div className="bg-blue-500 text-white rounded px-5 py-2 text-sm">
                  2
                </div>
                <div className="bg-blue-500 text-white rounded px-5 py-2 text-sm">
                  3
                </div>
                <div className="text-gray-400 text-xs flex items-center mr-2">
                  {"<--"}
                </div>
              </div>
            </div>
            <div>
              <div className="text-sm font-bold text-gray-700 mb-1">
                column (top to bottom)
              </div>
              <div className="bg-gray-100 rounded-lg p-3 flex flex-col gap-2 w-32">
                <div className="bg-blue-500 text-white rounded px-5 py-2 text-sm text-center">
                  1
                </div>
                <div className="bg-blue-500 text-white rounded px-5 py-2 text-sm text-center">
                  2
                </div>
                <div className="bg-blue-500 text-white rounded px-5 py-2 text-sm text-center">
                  3
                </div>
              </div>
            </div>
          </div>
        </Diagram>

        <InfoBox type="info">
          The <strong>main axis</strong> is the direction items flow (horizontal
          for row, vertical for column). The <strong>cross axis</strong> is
          perpendicular. Understanding these two axes is the key to mastering
          Flexbox!
        </InfoBox>
      </section>

      {/* ── justify-content & align-items ── */}
      <section>
        <h2>justify-content & align-items — The Power Duo</h2>
        <p>
          These two properties control how items are positioned inside the flex
          container. <code>justify-content</code> works along the{" "}
          <strong>main axis</strong>, while <code>align-items</code> works on
          the <strong>cross axis</strong>.
        </p>

        <Diagram title="justify-content — Spread Items Along the Main Axis">
          <div className="space-y-3">
            {[
              {
                value: "flex-start",
                desc: "Pack items to the start",
                justify: "justify-start",
              },
              {
                value: "center",
                desc: "Pack items in the center",
                justify: "justify-center",
              },
              {
                value: "flex-end",
                desc: "Pack items to the end",
                justify: "justify-end",
              },
              {
                value: "space-between",
                desc: "First & last at edges, rest evenly",
                justify: "justify-between",
              },
              {
                value: "space-around",
                desc: "Equal space around each item",
                justify: "justify-around",
              },
              {
                value: "space-evenly",
                desc: "Equal space between everything",
                justify: "justify-evenly",
              },
            ].map((item) => (
              <div key={item.value}>
                <div className="text-xs font-mono text-gray-500 mb-1">
                  {item.value}{" "}
                  <span className="text-gray-400">— {item.desc}</span>
                </div>
                <div
                  className={`bg-gray-100 rounded-lg p-2 flex ${item.justify} min-h-10 items-center`}
                >
                  <div className="bg-purple-500 text-white rounded px-3 py-1 text-xs">
                    A
                  </div>
                  <div className="bg-purple-500 text-white rounded px-3 py-1 text-xs">
                    B
                  </div>
                  <div className="bg-purple-500 text-white rounded px-3 py-1 text-xs">
                    C
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Diagram>

        <Diagram title="align-items — Align on the Cross Axis (Vertical for Row)">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                value: "stretch",
                desc: "Items stretch to fill height",
                align: "items-stretch",
              },
              {
                value: "flex-start",
                desc: "Items at the top",
                align: "items-start",
              },
              {
                value: "center",
                desc: "Items in the middle",
                align: "items-center",
              },
              {
                value: "flex-end",
                desc: "Items at the bottom",
                align: "items-end",
              },
            ].map((item) => (
              <div key={item.value}>
                <div className="text-xs font-mono text-gray-500 mb-1">
                  {item.value}
                </div>
                <div
                  className={`bg-gray-100 rounded-lg p-2 flex gap-2 h-20 ${item.align}`}
                >
                  <div className="bg-orange-500 text-white rounded px-3 py-1 text-xs">
                    A
                  </div>
                  <div className="bg-orange-500 text-white rounded px-3 py-2 text-xs">
                    B tall
                  </div>
                  <div className="bg-orange-500 text-white rounded px-3 py-1 text-xs">
                    C
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Diagram>
      </section>

      {/* ── flex-wrap, gap, flex shorthand ── */}
      <section>
        <h2>flex-wrap, gap & the flex Shorthand</h2>
        <p>
          By default, all flex items try to squeeze onto one line. Use{" "}
          <code>flex-wrap: wrap</code> to let items wrap to new lines. Use{" "}
          <code>gap</code> to add clean spacing without messy margins.
        </p>

        <Diagram title="flex-wrap: wrap — Items Flow to Next Line">
          <div className="space-y-4">
            <div>
              <div className="text-xs font-mono text-gray-500 mb-1">
                nowrap (default) — items overflow!
              </div>
              <div className="bg-red-50 rounded-lg p-2 flex gap-2 overflow-hidden border border-red-200">
                {["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"].map((c) => (
                  <div
                    key={c}
                    className="bg-red-400 text-white rounded px-4 py-2 text-xs shrink-0"
                  >
                    {c}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-mono text-gray-500 mb-1">
                wrap + gap — items wrap nicely!
              </div>
              <div className="bg-green-50 rounded-lg p-2 flex flex-wrap gap-2 border border-green-200">
                {["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"].map((c) => (
                  <div
                    key={c}
                    className="bg-green-500 text-white rounded px-4 py-2 text-xs"
                  >
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Diagram>

        <AnnotatedCode
          title="The flex Shorthand (Goes on Items, Not Container)"
          segments={[
            { code: "/* " },
            {
              code: "flex: grow shrink basis",
              annotation:
                "The flex shorthand combines three properties: flex-grow (how much to grow), flex-shrink (how much to shrink), and flex-basis (starting size). These go on the ITEMS (children), not the container!",
              label: "Shorthand",
            },
            { code: " */\n\n" },
            {
              code: ".item { flex: 1; }",
              annotation:
                "flex: 1 means grow equally, shrink equally, basis 0%. All items with flex: 1 share the available space equally.",
              label: "Equal Share",
            },
            { code: "\n\n" },
            {
              code: ".sidebar { flex: 0 0 300px; }",
              annotation:
                "Never grow (0), never shrink (0), exactly 300px wide. Perfect for fixed-width sidebars that should not resize.",
              label: "Fixed Width",
            },
            { code: "\n\n" },
            {
              code: ".main { flex: 2; }",
              annotation:
                "Grows twice as much as siblings with flex: 1. If you have flex: 1 and flex: 2 side by side, the flex: 2 item gets double the space.",
              label: "Double Share",
            },
          ]}
        />

        <InfoBox type="tip">
          Remember: <code>display: flex</code>, <code>justify-content</code>,{" "}
          <code>align-items</code>, <code>flex-wrap</code>, and <code>gap</code>{" "}
          go on the <strong>container</strong> (parent). <code>flex</code>,{" "}
          <code>flex-grow</code>, <code>flex-shrink</code>, and{" "}
          <code>flex-basis</code> go on the <strong>items</strong> (children).
        </InfoBox>
      </section>

      {/* ── Common Patterns ── */}
      <section>
        <h2>Real-World Flexbox Patterns</h2>

        <h3>Pattern 1: Perfect Centering (The Holy Grail)</h3>
        <p>
          Before Flexbox, centering something both horizontally AND vertically
          was hilariously hard. Now it is just 3 lines:
        </p>

        <AnnotatedCode
          title="Perfect Centering — Just 3 Lines of CSS!"
          segments={[
            { code: ".center-me {\n  " },
            {
              code: "display: flex;",
              annotation:
                "Step 1: Make the parent a flex container. This activates Flexbox on all its direct children.",
              label: "Step 1",
            },
            { code: "\n  " },
            {
              code: "justify-content: center;",
              annotation: "Step 2: Center horizontally (along the main axis).",
              label: "Step 2",
            },
            { code: "\n  " },
            {
              code: "align-items: center;",
              annotation:
                "Step 3: Center vertically (along the cross axis). Combined with justify-content: center, the child is now perfectly centered in both directions!",
              label: "Step 3",
            },
            { code: "\n  height: 100vh;\n}" },
          ]}
        />

        <h3>Pattern 2: Navigation Bar</h3>
        <AnnotatedCode
          title="Navbar — Logo Left, Links Right"
          segments={[
            { code: ".navbar {\n  " },
            {
              code: "display: flex;",
              annotation:
                "Activates Flexbox. The logo and nav links become flex items.",
              label: "Flex",
            },
            { code: "\n  " },
            {
              code: "justify-content: space-between;",
              annotation:
                "Pushes the first item (logo) to the left and the last item (links) to the right, with all remaining space in between. The most common navbar pattern!",
              label: "Space Between",
            },
            { code: "\n  " },
            {
              code: "align-items: center;",
              annotation:
                "Vertically centers everything in the navbar. Without this, items might be misaligned if they have different heights.",
              label: "Vertical Center",
            },
            {
              code: "\n  padding: 0 24px;\n  height: 60px;\n  background: #2c3e50;\n}",
            },
          ]}
        />

        <h3>Pattern 3: Responsive Card Grid</h3>
        <AnnotatedCode
          title="Card Grid — Wraps Automatically"
          segments={[
            { code: ".cards {\n  display: flex;\n  " },
            {
              code: "flex-wrap: wrap;",
              annotation:
                "Allows cards to wrap to the next line when there is not enough space. Without this, cards would squish or overflow.",
              label: "Wrap",
            },
            { code: "\n  " },
            {
              code: "gap: 16px;",
              annotation:
                "Adds 16px of space between all items — both horizontally and vertically. Much cleaner than using margins on each card!",
              label: "Gap",
            },
            { code: "\n}\n\n.card {\n  " },
            {
              code: "flex: 1 1 280px;",
              annotation:
                "Each card can grow (1), can shrink (1), and starts at 280px wide. When the container is wider, cards grow to fill space. When it is narrower, cards wrap. This creates a responsive grid without media queries!",
              label: "Responsive Sizing",
            },
            {
              code: "\n  background: white;\n  padding: 20px;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n}",
            },
          ]}
        />
      </section>

      {/* ── CSS Backgrounds ── */}
      <section>
        <h2>CSS Backgrounds — Colors, Images, and Gradients</h2>
        <p>
          Backgrounds can make or break a design. Let's explore all the ways you
          can style backgrounds in CSS.
        </p>

        <h3>Background Colors</h3>
        <Diagram title="Multiple Ways to Specify Colors">
          <div className="flex flex-wrap gap-3">
            {[
              { color: "bg-red-400", label: "tomato", type: "Named" },
              { color: "bg-blue-500", label: "#3498db", type: "Hex" },
              { color: "bg-green-500", label: "rgb(46,204,113)", type: "RGB" },
              {
                color: "bg-purple-400",
                label: "rgba(155,89,182,0.7)",
                type: "RGBA",
              },
              { color: "bg-sky-500", label: "hsl(204,70%,53%)", type: "HSL" },
            ].map((c) => (
              <div
                key={c.label}
                className={`${c.color} text-white rounded-xl px-4 py-3 text-center`}
              >
                <div className="text-xs font-bold">{c.type}</div>
                <div className="text-xs mt-0.5 font-mono opacity-90">
                  {c.label}
                </div>
              </div>
            ))}
          </div>
        </Diagram>

        <h3>Gradients — No Image Needed!</h3>
        <p>
          CSS can generate beautiful gradient backgrounds without any image
          file. These are super popular for hero sections and buttons.
        </p>

        <Diagram title="CSS Gradients">
          <div className="grid grid-cols-2 gap-3">
            <div
              className="h-20 rounded-xl flex items-center justify-center text-white text-xs font-bold shadow-sm"
              style={{
                background: "linear-gradient(to right, #3498db, #2ecc71)",
              }}
            >
              linear-gradient to right
            </div>
            <div
              className="h-20 rounded-xl flex items-center justify-center text-white text-xs font-bold shadow-sm"
              style={{
                background: "linear-gradient(135deg, #667eea, #764ba2)",
              }}
            >
              135deg angle
            </div>
            <div
              className="h-20 rounded-xl flex items-center justify-center text-white text-xs font-bold shadow-sm"
              style={{
                background:
                  "linear-gradient(to bottom, #ee7752, #e73c7e, #23a6d5)",
              }}
            >
              3 color stops
            </div>
            <div
              className="h-20 rounded-xl flex items-center justify-center text-white text-xs font-bold shadow-sm"
              style={{
                background: "radial-gradient(circle, #f39c12, #e74c3c)",
              }}
            >
              radial-gradient
            </div>
          </div>
        </Diagram>

        <h3>Background Images</h3>
        <AnnotatedCode
          title="Background Image Properties"
          segments={[
            { code: ".hero {\n  " },
            {
              code: "background-image: url('hero-photo.jpg');",
              annotation:
                "Sets an image as the element's background. The url() function points to the image file — can be a relative path or full URL.",
              label: "Image",
            },
            { code: "\n  " },
            {
              code: "background-size: cover;",
              annotation:
                "Scales the image to cover the entire element, even if it crops a bit. 'contain' would fit the whole image but might leave empty space.",
              label: "Size",
            },
            { code: "\n  " },
            {
              code: "background-position: center;",
              annotation:
                "Centers the image within the element. Important when the image gets cropped — centering ensures the most important part stays visible.",
              label: "Position",
            },
            { code: "\n  " },
            {
              code: "background-repeat: no-repeat;",
              annotation:
                "Prevents the image from tiling/repeating. Without this, small images would tile to fill the space like wallpaper.",
              label: "No Repeat",
            },
            { code: "\n}\n\n/* " },
            {
              code: "Shorthand: color image position/size repeat",
              annotation:
                "You can write all background properties in one line using the shorthand. The order matters: color, image, position/size, repeat.",
              label: "Shorthand",
            },
            { code: " */\n" },
            {
              code: ".hero {\n  background: #333 url('hero.jpg') center/cover no-repeat;\n}",
            },
          ]}
        />

        <h3>The Dark Overlay Trick</h3>
        <p>
          Want readable text on a background image? Layer a semi-transparent
          gradient over it. This technique is used on almost every modern
          website:
        </p>

        <AnnotatedCode
          title="Dark Overlay for Readable Text on Images"
          segments={[
            { code: ".hero {\n  " },
            {
              code: "background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),\n              url('hero-photo.jpg') center/cover no-repeat;",
              annotation:
                "This layers a semi-transparent black gradient (60% opacity) ON TOP of the background image. The comma separates multiple backgrounds — first one is on top. This darkens the image so white text is easily readable.",
              label: "Overlay Trick",
            },
            {
              code: "\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}",
            },
          ]}
        />

        <InfoBox type="tip">
          You can stack multiple backgrounds with commas. The first one listed
          is on top, the last one is on the bottom. This is how the overlay
          trick works — a transparent gradient on top, the image below.
        </InfoBox>
      </section>

      {/* ── Putting It All Together ── */}
      <section>
        <h2>Putting It All Together</h2>
        <p>
          Here is a mental model for a complete landing page layout using
          everything we learned today. You can build this for your homework!
        </p>

        <Diagram title="Landing Page Architecture">
          <div className="space-y-2 max-w-md mx-auto">
            <div className="bg-gray-800 text-white rounded-t-xl p-3 flex justify-between items-center text-sm">
              <span className="font-bold">Logo</span>
              <div className="flex gap-3 text-xs text-gray-300">
                <span>Home</span>
                <span>About</span>
                <span>Contact</span>
              </div>
            </div>
            <div className="text-xs text-gray-400 text-right font-mono">
              display: flex; justify-content: space-between
            </div>

            <div
              className="rounded-xl p-6 text-center text-white"
              style={{
                background: "linear-gradient(135deg, #667eea, #764ba2)",
              }}
            >
              <div className="font-bold text-lg">Hero Section</div>
              <div className="text-sm opacity-80 mt-1">
                Gradient background + centered content
              </div>
              <div className="mt-2 bg-white/20 rounded-full px-4 py-1 inline-block text-xs">
                CTA Button
              </div>
            </div>
            <div className="text-xs text-gray-400 text-right font-mono">
              display: flex; justify-content: center; align-items: center
            </div>

            <div className="bg-gray-50 rounded-xl p-3 flex gap-2 border border-gray-200">
              {["Feature 1", "Feature 2", "Feature 3"].map((f) => (
                <div
                  key={f}
                  className="bg-white rounded-lg p-3 flex-1 text-center text-xs border border-gray-100 shadow-sm"
                >
                  <div className="font-bold text-gray-700">{f}</div>
                </div>
              ))}
            </div>
            <div className="text-xs text-gray-400 text-right font-mono">
              display: flex; flex-wrap: wrap; gap: 16px
            </div>

            <div className="bg-gray-800 text-gray-400 rounded-b-xl p-3 text-center text-xs">
              Footer — Copyright 2026
            </div>
          </div>
        </Diagram>
      </section>

      {/* ── Exercises ── */}
      <section>
        <h2>Exercises</h2>

        <ExerciseBlock number={1}>
          <p>
            Build a <strong>navigation bar</strong> using Flexbox:
          </p>
          <ul>
            <li>Logo on the left, nav links on the right</li>
            <li>
              Use <code>justify-content: space-between</code> and{" "}
              <code>align-items: center</code>
            </li>
            <li>Style links with no underline and hover effects</li>
            <li>Background color and fixed height (60px)</li>
          </ul>
        </ExerciseBlock>

        <ExerciseBlock number={2}>
          <p>
            Create a <strong>card layout</strong> with at least 6 cards:
          </p>
          <ul>
            <li>Use flex-wrap and gap so cards wrap on smaller screens</li>
            <li>Each card: heading, paragraph, and a button</li>
            <li>
              Cards should be flexible: <code>flex: 1 1 280px</code>
            </li>
            <li>Border, border-radius, padding, and box-shadow on each</li>
          </ul>
        </ExerciseBlock>

        <ExerciseBlock number={3}>
          <p>
            Create a <strong>hero section</strong> with a gradient:
          </p>
          <ul>
            <li>
              Full viewport height (<code>height: 100vh</code>)
            </li>
            <li>Multi-color gradient background</li>
            <li>Centered heading and subtitle using Flexbox</li>
            <li>White text, large font size, a call-to-action button</li>
          </ul>
        </ExerciseBlock>
      </section>

      {/* ── Homework ── */}
      <HomeworkBlock>
        <h3>Landing Page with Flexbox</h3>
        <p>Build a single-page landing page that includes:</p>
        <ol>
          <li>
            A <strong>navigation bar</strong> (logo + links) using Flexbox
          </li>
          <li>
            A <strong>hero section</strong> with a background gradient, centered
            content, and a call-to-action button
          </li>
          <li>
            A <strong>"Features" section</strong> with 3+ cards in a flexbox
            layout
          </li>
          <li>
            A <strong>footer</strong> with centered copyright text
          </li>
          <li>
            Use global <code>box-sizing: border-box</code>, an external CSS
            file, and at least one gradient
          </li>
        </ol>
      </HomeworkBlock>
    </LectureWrapper>
  );
};

export default Lecture04;
