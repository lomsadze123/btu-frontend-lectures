import LectureWrapper from "../../components/LectureWrapper";
import InfoBox from "../../components/InfoBox";
import ExerciseBlock from "../../components/ExerciseBlock";
import HomeworkBlock from "../../components/HomeworkBlock";
import AnnotatedCode from "../../components/AnnotatedCode";
import Diagram from "../../components/Diagram";
import BoxModelDemo from "../../components/BoxModelDemo";
import DisplayDemo from "../../components/DisplayDemo";

const Lecture03 = () => {
  return (
    <LectureWrapper id="03" title="Display Types, Box Model & Forms">
      {/* ── Display Types Intro ── */}
      <section>
        <h2>Display Types: How Elements Behave</h2>
        <p>
          Every HTML element has a default <strong>display</strong> behavior
          that determines how it sits alongside other elements. Understanding
          this is like understanding how different pieces of furniture fit in a
          room. Some furniture takes up the whole wall (block), some items sit
          on a shelf side by side (inline), and some are a clever mix of both
          (inline-block).
        </p>

        <Diagram title="Block vs Inline vs Inline-Block">
          <div className="space-y-6">
            <div>
              <div className="font-bold text-gray-800 mb-2">
                Block Elements — The Wall Hoggers
              </div>
              <div className="space-y-2">
                <div className="bg-blue-500 text-white rounded-lg p-3 text-center text-sm">
                  Block A — I take the whole row
                </div>
                <div className="bg-blue-600 text-white rounded-lg p-3 text-center text-sm">
                  Block B — Me too, always a new line!
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Common: &lt;div&gt;, &lt;p&gt;, &lt;h1&gt;-&lt;h6&gt;,
                &lt;section&gt;
              </p>
            </div>

            <div>
              <div className="font-bold text-gray-800 mb-2">
                Inline Elements — The Shelf Items
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-500 text-white rounded px-3 py-1 text-sm">
                  Inline A
                </span>
                <span className="bg-green-500 text-white rounded px-3 py-1 text-sm">
                  Inline B
                </span>
                <span className="bg-green-500 text-white rounded px-3 py-1 text-sm">
                  Inline C
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Common: &lt;span&gt;, &lt;a&gt;, &lt;strong&gt;, &lt;em&gt; — NO
                width/height!
              </p>
            </div>

            <div>
              <div className="font-bold text-gray-800 mb-2">
                Inline-Block — Best of Both Worlds
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="bg-red-500 text-white rounded-lg w-28 h-14 flex items-center justify-center text-sm">
                  IB Box A
                </div>
                <div className="bg-red-500 text-white rounded-lg w-28 h-14 flex items-center justify-center text-sm">
                  IB Box B
                </div>
                <div className="bg-red-500 text-white rounded-lg w-28 h-14 flex items-center justify-center text-sm">
                  IB Box C
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Side by side like inline, but you CAN set width and height!
              </p>
            </div>
          </div>
        </Diagram>
      </section>

      {/* ── Interactive Display Demo ── */}
      <section>
        <h2>Interactive Display Demo</h2>
        <p>
          Play with the toggles below to see how different display values affect
          elements in real time. This is the best way to build intuition!
        </p>

        <DisplayDemo />

        <Diagram title="Quick Comparison Table">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="p-3 text-left rounded-tl-lg">Property</th>
                  <th className="p-3 text-center">block</th>
                  <th className="p-3 text-center">inline</th>
                  <th className="p-3 text-center rounded-tr-lg">
                    inline-block
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { prop: "New line?", block: true, inline: false, ib: false },
                  {
                    prop: "Full width?",
                    block: true,
                    inline: false,
                    ib: false,
                  },
                  {
                    prop: "Set width/height?",
                    block: true,
                    inline: false,
                    ib: true,
                  },
                  {
                    prop: "Vertical margin?",
                    block: true,
                    inline: false,
                    ib: true,
                  },
                ].map((row, i) => (
                  <tr
                    key={row.prop}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="p-3 font-medium text-gray-700 border-b border-gray-100">
                      {row.prop}
                    </td>
                    <td
                      className={`p-3 text-center border-b border-gray-100 font-bold ${row.block ? "text-green-600" : "text-red-500"}`}
                    >
                      {row.block ? "Yes" : "No"}
                    </td>
                    <td
                      className={`p-3 text-center border-b border-gray-100 font-bold ${row.inline ? "text-green-600" : "text-red-500"}`}
                    >
                      {row.inline ? "Yes" : "No"}
                    </td>
                    <td
                      className={`p-3 text-center border-b border-gray-100 font-bold ${row.ib ? "text-green-600" : "text-red-500"}`}
                    >
                      {row.ib ? "Yes" : "No"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Diagram>

        <InfoBox type="info">
          You can change ANY element's display type with CSS:{" "}
          <code>display: block;</code>, <code>display: inline;</code>, or{" "}
          <code>display: inline-block;</code>. You can even make a link behave
          like a block!
        </InfoBox>
      </section>

      {/* ── Box Model ── */}
      <section>
        <h2>The CSS Box Model — Every Element is a Box!</h2>
        <p>
          Here is one of the most important concepts in CSS: every single
          element on a web page is a rectangular <strong>box</strong>. Even that
          round button? A box with rounded corners. That text? A box. The box
          model describes the layers that make up each box:
        </p>

        <Diagram title="The Four Layers of Every Box">
          <div className="flex flex-col items-center">
            <div className="bg-orange-100 border-2 border-orange-300 rounded-xl p-6 w-full max-w-md text-center">
              <div className="text-xs font-bold text-orange-600 mb-2">
                MARGIN — space outside the border
              </div>
              <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-5">
                <div className="text-xs font-bold text-yellow-700 mb-2">
                  BORDER — the frame itself
                </div>
                <div className="bg-green-100 border-2 border-green-400 rounded-lg p-4">
                  <div className="text-xs font-bold text-green-700 mb-2">
                    PADDING — breathing room inside
                  </div>
                  <div className="bg-blue-200 border-2 border-blue-400 rounded p-4">
                    <div className="font-bold text-blue-800 text-sm">
                      CONTENT
                    </div>
                    <div className="text-xs text-blue-600">
                      your text, image, etc.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Diagram>

        <p>
          Play with the sliders below to see how each layer affects the box.
          This is the best way to really understand the box model:
        </p>

        <BoxModelDemo />
      </section>

      {/* ── Box Model in Code ── */}
      <section>
        <h2>Box Model in Code</h2>
        <p>Let's see how to write box model properties in CSS:</p>

        <AnnotatedCode
          title="Box Model CSS Properties"
          segments={[
            {
              code: ".card {",
              annotation:
                "This is a class selector targeting elements with class='card'. All box model properties go inside.",
              label: "Selector",
            },
            { code: "\n  " },
            {
              code: "width: 280px;",
              annotation:
                "Sets the width of the CONTENT area. In content-box mode, padding and border are added ON TOP of this. In border-box mode, everything fits inside 280px.",
              label: "Width",
            },
            { code: "\n  " },
            {
              code: "padding: 20px;",
              annotation:
                "Adds 20px of space INSIDE the border on all four sides. Padding creates breathing room between the content and the border.",
              label: "Padding",
            },
            { code: "\n  " },
            {
              code: "border: 3px solid #3498db;",
              annotation:
                "Shorthand for border-width, border-style, and border-color. The border sits between padding and margin.",
              label: "Border",
            },
            { code: "\n  " },
            {
              code: "margin: 20px auto;",
              annotation:
                "20px on top and bottom, 'auto' on left and right. The 'auto' trick centers the element horizontally inside its parent!",
              label: "Margin",
            },
            { code: "\n}" },
          ]}
        />

        <AnnotatedCode
          title="Shorthand Notation for Margin & Padding"
          segments={[
            { code: "/* Each side individually */\n" },
            {
              code: "margin-top: 20px;\nmargin-right: 15px;\nmargin-bottom: 20px;\nmargin-left: 15px;",
              annotation:
                "You can set each side separately. This is verbose but very explicit.",
              label: "Individual Sides",
            },
            { code: "\n\n/* " },
            {
              code: "Shorthand: top right bottom left (clockwise!)",
              annotation:
                "Think of a clock: starts at 12 (top), goes to 3 (right), then 6 (bottom), then 9 (left). Same shorthand works for padding!",
              label: "Clockwise Rule",
            },
            { code: " */\n" },
            { code: "margin: 20px 15px 20px 15px;\n\n" },
            { code: "/* " },
            {
              code: "Two values: vertical horizontal",
              annotation:
                "First value = top AND bottom, second value = left AND right. Most commonly used shorthand.",
              label: "Two Values",
            },
            { code: " */\n" },
            { code: "margin: 20px 15px;\n\n" },
            { code: "/* " },
            {
              code: "One value: all sides equal",
              annotation: "One value applies to all four sides equally.",
              label: "One Value",
            },
            { code: " */\n" },
            { code: "margin: 20px;" },
          ]}
        />
      </section>

      {/* ── content-box vs border-box ── */}
      <section>
        <h2>content-box vs border-box — The Plot Twist</h2>
        <p>
          Here is a gotcha that trips up every beginner. By default, when you
          set <code>width: 300px</code>, that only sets the CONTENT width.
          Padding and border get ADDED on top, making the element bigger than
          300px. Confusing, right?
        </p>

        <Diagram title="content-box vs border-box — Same Width, Different Results!">
          <div className="space-y-4">
            <div className="border-2 border-red-400 bg-red-50 rounded-xl p-4">
              <div className="font-bold text-red-700 mb-2">
                content-box (default)
              </div>
              <div className="text-sm text-gray-700">
                <code>width: 300px</code> + padding: 20px + border: 5px
              </div>
              <div className="font-mono text-red-600 font-bold mt-1">
                Actual width = 300 + 20 + 20 + 5 + 5 = 350px!
              </div>
              <div
                className="mt-2 bg-red-200 rounded h-3"
                style={{ width: "100%" }}
              ></div>
              <div className="text-xs text-gray-500 mt-1">
                The box is WIDER than 300px
              </div>
            </div>

            <div className="border-2 border-green-400 bg-green-50 rounded-xl p-4">
              <div className="font-bold text-green-700 mb-2">
                border-box (recommended)
              </div>
              <div className="text-sm text-gray-700">
                <code>width: 300px</code> + padding: 20px + border: 5px
              </div>
              <div className="font-mono text-green-600 font-bold mt-1">
                Total width = EXACTLY 300px (padding & border fit inside)
              </div>
              <div
                className="mt-2 bg-green-200 rounded h-3"
                style={{ width: "85.7%" }}
              ></div>
              <div className="text-xs text-gray-500 mt-1">
                The box is exactly what you asked for
              </div>
            </div>
          </div>
        </Diagram>

        <InfoBox type="tip">
          Most professional developers apply <code>border-box</code> globally at
          the top of every project. It just makes life so much easier!
        </InfoBox>

        <AnnotatedCode
          title="The Global Reset Everyone Uses"
          segments={[
            { code: "/* Apply border-box to ALL elements */\n" },
            {
              code: "*, *::before, *::after {\n  box-sizing: border-box;\n}",
              annotation:
                "The * selector targets EVERY element. ::before and ::after are pseudo-elements (we will learn these later). This reset makes width mean 'total width' everywhere. Put this at the top of every project!",
              label: "Universal Reset",
            },
            {
              code: "\n\n/* Now width: 300px means EXACTLY 300px. No more math! */",
            },
          ]}
        />
      </section>

      {/* ── HTML Forms ── */}
      <section>
        <h2>HTML Forms — Getting Input from Users</h2>
        <p>
          Forms are how users send data to websites — login pages, sign-up
          forms, search bars, checkout pages. Think of a paper form at a
          doctor's office: fields to fill in, checkboxes, dropdowns, and a
          submit button. HTML forms are the digital version.
        </p>

        <AnnotatedCode
          title="A Simple Form Structure"
          segments={[
            {
              code: "<form",
              annotation:
                "The form element wraps all input fields. It can have 'action' (where data goes) and 'method' (GET or POST) attributes.",
              label: "Form Tag",
            },
            { code: ' action="/submit" method="POST">\n\n  ' },
            {
              code: '<label for="name">Full Name:</label>',
              annotation:
                "Labels describe what each field is for. The 'for' attribute must match the input's 'id'. Clicking the label focuses the input — great for accessibility!",
              label: "Label",
            },
            { code: "\n  " },
            {
              code: '<input type="text" id="name" placeholder="Enter your name" required />',
              annotation:
                "A text input field. 'type' determines what kind of input (text, email, number...). 'placeholder' shows hint text. 'required' prevents empty submission.",
              label: "Text Input",
            },
            { code: '\n\n  <label for="email">Email:</label>\n  ' },
            {
              code: '<input type="email" id="email" placeholder="you@example.com" />',
              annotation:
                "The 'email' type adds built-in validation — the browser checks for an @ symbol and valid format. No JavaScript needed!",
              label: "Email Input",
            },
            { code: '\n\n  <label for="pass">Password:</label>\n  ' },
            {
              code: '<input type="password" id="pass" />',
              annotation:
                "Password type hides the characters as dots. The data is NOT encrypted — that is handled by HTTPS on the server side.",
              label: "Password Input",
            },
            { code: '\n\n  <label for="country">Country:</label>\n  ' },
            {
              code: '<select id="country">\n    <option value="ge">Georgia</option>\n    <option value="us">United States</option>\n  </select>',
              annotation:
                "A dropdown menu. Each <option> is one choice. The 'value' is what gets sent to the server, the text between tags is what the user sees.",
              label: "Select Dropdown",
            },
            { code: "\n\n  " },
            {
              code: '<textarea id="bio" rows="3" placeholder="Tell us about yourself..."></textarea>',
              annotation:
                "A multi-line text area. Use 'rows' to set the visible height. Unlike <input>, textarea has a closing tag.",
              label: "Textarea",
            },
            { code: "\n\n  " },
            {
              code: '<button type="submit">Register</button>',
              annotation:
                "The submit button sends the form data to the URL specified in the form's 'action' attribute. type='reset' would clear all fields instead.",
              label: "Submit Button",
            },
            { code: "\n\n</form>" },
          ]}
        />

        <Diagram title="Form Input Types Cheat Sheet">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              {
                type: "text",
                desc: "Regular text field",
                color: "bg-blue-50 border-blue-200",
              },
              {
                type: "email",
                desc: "Validates email format",
                color: "bg-green-50 border-green-200",
              },
              {
                type: "password",
                desc: "Hides characters",
                color: "bg-orange-50 border-orange-200",
              },
              {
                type: "number",
                desc: "Numbers only + min/max",
                color: "bg-pink-50 border-pink-200",
              },
              {
                type: "date",
                desc: "Date picker",
                color: "bg-cyan-50 border-cyan-200",
              },
              {
                type: "checkbox",
                desc: "Toggle on/off",
                color: "bg-purple-50 border-purple-200",
              },
              {
                type: "radio",
                desc: "Pick one from group",
                color: "bg-indigo-50 border-indigo-200",
              },
              {
                type: "color",
                desc: "Color picker!",
                color: "bg-yellow-50 border-yellow-200",
              },
              {
                type: "tel",
                desc: "Phone number",
                color: "bg-teal-50 border-teal-200",
              },
            ].map((input) => (
              <div
                key={input.type}
                className={`${input.color} border rounded-lg p-3 text-center`}
              >
                <div className="font-bold text-gray-800 text-sm font-mono">
                  type="{input.type}"
                </div>
                <div className="text-xs text-gray-600 mt-1">{input.desc}</div>
              </div>
            ))}
          </div>
        </Diagram>

        <InfoBox type="info">
          The <code>required</code> attribute prevents form submission if a
          field is empty. The <code>type</code> attribute (email, number, date,
          etc.) adds built-in validation — no JavaScript needed!
        </InfoBox>
      </section>

      {/* ── Figma ── */}
      <section>
        <h2>Quick Intro to Figma</h2>
        <p>
          <strong>Figma</strong> is a free, browser-based design tool. As a
          front-end developer, designers will give you Figma files and you will
          need to turn them into real HTML and CSS.
        </p>

        <Diagram title="Getting Started with Figma">
          <div className="space-y-3">
            {[
              { step: "1", text: "Visit figma.com and create a free account" },
              {
                step: "2",
                text: "The Inspect panel (right sidebar) shows CSS-like properties for any selected element",
              },
              {
                step: "3",
                text: "Extract exact values for colors, font sizes, spacing — do not guess!",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex items-center gap-4 bg-gray-50 rounded-lg p-3 border border-gray-200"
              >
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
                  {item.step}
                </div>
                <span className="text-sm text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </Diagram>

        <InfoBox type="tip">
          When a designer shares a Figma file, use the Inspect panel to extract
          exact values. Precision matters in professional work — the difference
          between #333 and #334 might not seem big, but consistency makes or
          breaks a design.
        </InfoBox>
      </section>

      {/* ── Exercises ── */}
      <section>
        <h2>Exercises</h2>

        <ExerciseBlock number={1}>
          <p>
            Create <code>display.html</code> with CSS:
          </p>
          <ul>
            <li>
              Three divs styled as block (different background colors, full
              width)
            </li>
            <li>
              Three spans styled as inline (notice you cannot set width/height)
            </li>
            <li>
              Three elements as inline-block with explicit width, height, and
              backgrounds, sitting side by side
            </li>
          </ul>
        </ExerciseBlock>

        <ExerciseBlock number={2}>
          <p>
            Create <code>boxmodel.html</code>:
          </p>
          <ul>
            <li>
              Two cards side by side (inline-block), each with width: 300px,
              padding: 20px, border: 2px solid
            </li>
            <li>
              One card gets <code>box-sizing: content-box</code>, the other gets{" "}
              <code>box-sizing: border-box</code>
            </li>
            <li>
              Open DevTools and inspect each card — observe the difference in
              total width!
            </li>
          </ul>
        </ExerciseBlock>

        <ExerciseBlock number={3}>
          <p>
            Create a styled <code>contact-form.html</code>:
          </p>
          <ul>
            <li>
              Fields: name (text), email, phone (tel), subject (select
              dropdown), message (textarea)
            </li>
            <li>All fields must have proper labels</li>
            <li>Add a "Subscribe" checkbox and submit/reset buttons</li>
            <li>
              Style with external CSS: padding, border, consistent spacing
            </li>
          </ul>
        </ExerciseBlock>
      </section>

      {/* ── Homework ── */}
      <HomeworkBlock>
        <h3>Styled Registration Form</h3>
        <p>Build a registration form page with an external CSS file:</p>
        <ol>
          <li>
            Apply the global <code>box-sizing: border-box</code> reset
          </li>
          <li>
            Create a centered form card (max-width 500px, centered with margin
            auto) with padding, border, and subtle background
          </li>
          <li>
            Include at least 6 input types: text, email, password, number, date,
            and a select dropdown
          </li>
          <li>
            Add a textarea, checkbox, radio buttons, and submit/reset buttons
          </li>
          <li>
            Every field must have a label. Use <code>required</code> on
            mandatory fields
          </li>
          <li>
            Style inputs with consistent width (100%), padding, margin, and
            border
          </li>
        </ol>
      </HomeworkBlock>
    </LectureWrapper>
  );
};

export default Lecture03;
