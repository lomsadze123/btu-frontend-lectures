import LectureWrapper from "../../components/LectureWrapper";
import InfoBox from "../../components/InfoBox";
import ExerciseBlock from "../../components/ExerciseBlock";
import HomeworkBlock from "../../components/HomeworkBlock";
import AnnotatedCode from "../../components/AnnotatedCode";
import Diagram from "../../components/Diagram";

const Lecture01 = () => {
  return (
    <LectureWrapper id="01" title="Introduction to Front-End & HTML Structure">
      {/* ── Welcome ── */}
      <section>
        <h2>Welcome to Front-End Development!</h2>
        <p>
          Hey there! Welcome to the <strong>BTU Front-End Development</strong>{" "}
          course. Over the next 16 weeks, you are going from "what even is
          HTML?" to building real websites you can show off to friends and
          future employers.
        </p>
        <p>
          Today we lay the foundation: how the internet actually delivers pages
          to your screen, and your very first HTML code.
        </p>
      </section>

      {/* ── How the Web Works ── */}
      <section>
        <h2>How the Web Works</h2>
        <p>
          Imagine you are at a restaurant. You (the <strong>client</strong>)
          tell the waiter your order. The waiter carries it to the kitchen (the{" "}
          <strong>server</strong>). The kitchen prepares the meal and sends it
          back. That is basically the internet.
        </p>

        <Diagram title="The Web: Client - Server - Response">
          <div className="flex flex-wrap items-center justify-center gap-4 text-center">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5 w-36">
              <div className="text-4xl mb-2">You</div>
              <div className="font-bold text-blue-800">Client</div>
              <div className="text-xs text-gray-500 mt-1">(your browser)</div>
            </div>

            <div className="flex flex-col items-center gap-1">
              <div className="text-sm font-mono text-gray-500">
                HTTP Request
              </div>
              <div className="text-2xl text-gray-400">{"-->"}</div>
              <div className="text-2xl text-gray-400">{"<--"}</div>
              <div className="text-sm font-mono text-gray-500">
                HTML + CSS + JS
              </div>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-5 w-36">
              <div className="text-4xl mb-2">{"{ }"}</div>
              <div className="font-bold text-green-800">Server</div>
              <div className="text-xs text-gray-500 mt-1">
                (a computer somewhere)
              </div>
            </div>
          </div>
        </Diagram>

        <ol>
          <li>
            You type a URL (like <code>https://google.com</code>) in your
            browser.
          </li>
          <li>
            Your browser sends an <strong>HTTP request</strong> to a server.
          </li>
          <li>
            The server finds the right files and sends back{" "}
            <strong>HTML, CSS, and JavaScript</strong>.
          </li>
          <li>Your browser reads those files and paints the page you see.</li>
        </ol>

        <InfoBox type="info">
          <strong>HTTP</strong> stands for <em>HyperText Transfer Protocol</em>.
          Think of it as the language the waiter speaks so both you and the
          kitchen understand the order.
        </InfoBox>
      </section>

      {/* ── Three Technologies ── */}
      <section>
        <h2>The Three Amigos: HTML, CSS, JavaScript</h2>
        <p>
          Every website is built with three core technologies. Think of building
          a house:
        </p>

        <Diagram title="Three Technologies = One Website">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-5 text-center">
              <div className="text-3xl mb-2 font-mono font-bold text-orange-600">
                {"</>"}
              </div>
              <div className="font-bold text-orange-800 text-lg">HTML</div>
              <div className="text-sm text-gray-600 mt-2">
                The <strong>structure</strong>
              </div>
              <div className="text-xs text-gray-400 mt-1">
                Walls, rooms, doors
              </div>
              <div className="mt-3 text-xs bg-orange-100 rounded px-2 py-1 font-mono">
                WHAT is on the page
              </div>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5 text-center">
              <div className="text-3xl mb-2 font-mono font-bold text-blue-600">
                {"{ }"}
              </div>
              <div className="font-bold text-blue-800 text-lg">CSS</div>
              <div className="text-sm text-gray-600 mt-2">
                The <strong>decoration</strong>
              </div>
              <div className="text-xs text-gray-400 mt-1">
                Paint, furniture, curtains
              </div>
              <div className="mt-3 text-xs bg-blue-100 rounded px-2 py-1 font-mono">
                HOW the page looks
              </div>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-5 text-center">
              <div className="text-3xl mb-2 font-mono font-bold text-yellow-600">
                {"( )"}
              </div>
              <div className="font-bold text-yellow-800 text-lg">
                JavaScript
              </div>
              <div className="text-sm text-gray-600 mt-2">
                The <strong>electricity</strong>
              </div>
              <div className="text-xs text-gray-400 mt-1">
                Lights, switches, smart home
              </div>
              <div className="mt-3 text-xs bg-yellow-100 rounded px-2 py-1 font-mono">
                Makes things INTERACTIVE
              </div>
            </div>
          </div>
        </Diagram>

        <InfoBox type="tip">
          Do not worry about CSS and JavaScript yet. We will learn those in
          depth later. For now, just know each technology has its own job.
        </InfoBox>
      </section>

      {/* ── Developer Tools ── */}
      <section>
        <h2>Your Developer Toolkit</h2>

        <h3>VS Code — Your Code Editor</h3>
        <p>
          <strong>Visual Studio Code</strong> is a free code editor, the most
          popular choice among front-end developers. Download it from{" "}
          <a
            href="https://code.visualstudio.com"
            target="_blank"
            rel="noreferrer"
          >
            code.visualstudio.com
          </a>
          . Install the <strong>Live Server</strong> extension — it
          auto-refreshes your browser when you save.
        </p>

        <h3>Browser DevTools — Your X-Ray Vision</h3>
        <p>
          Press <code>F12</code> (or <code>Cmd + Option + I</code> on Mac) on
          any website. Now you can see the code behind every page on the
          internet.
        </p>

        <Diagram title="Key DevTools Tabs">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="font-bold text-gray-800 mb-1">Elements</div>
              <div className="text-sm text-gray-600">
                Inspect and edit HTML/CSS live on any page
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="font-bold text-gray-800 mb-1">Console</div>
              <div className="text-sm text-gray-600">
                See errors and run JavaScript snippets
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="font-bold text-gray-800 mb-1">Network</div>
              <div className="text-sm text-gray-600">
                Watch HTTP requests happening in real time
              </div>
            </div>
          </div>
        </Diagram>

        <InfoBox type="tip">
          Right-click any element on a web page and choose{" "}
          <strong>"Inspect"</strong> to jump straight to it in DevTools. Try it
          right now on this page!
        </InfoBox>
      </section>

      {/* ── HTML5 Structure ── */}
      <section>
        <h2>Your First HTML Page</h2>
        <p>
          Every HTML page follows a standard skeleton. Click on the highlighted
          parts to understand what each piece does:
        </p>

        <AnnotatedCode
          title="The HTML5 Skeleton"
          segments={[
            {
              code: "<!DOCTYPE html>\n",
              annotation:
                "This tells the browser: 'Hey, this is an HTML5 document!' Every page starts with this. Without it, the browser might render in a weird legacy mode.",
              label: "DOCTYPE",
            },
            {
              code: '<html lang="en">\n',
              annotation:
                'The root element — everything on your page goes inside this tag. The lang="en" attribute tells browsers and screen readers the page is in English.',
              label: "Root Element",
            },
            {
              code: "<head>\n",
              annotation:
                "The invisible part of your page. Nothing here shows up on screen. It contains metadata: the page title, character encoding, linked CSS files, etc.",
              label: "Head Section",
            },
            { code: "  " },
            {
              code: '<meta charset="UTF-8" />',
              annotation:
                "Sets the character encoding to UTF-8, which supports all languages and emojis. Without this, special characters might display as garbage.",
              label: "Charset",
            },
            { code: "\n  " },
            {
              code: '<meta name="viewport" content="width=device-width, initial-scale=1.0" />',
              annotation:
                "Makes your page responsive on mobile devices. Without this, phones would zoom way out and show a tiny desktop version.",
              label: "Viewport",
            },
            { code: "\n  " },
            {
              code: "<title>My First Page</title>",
              annotation:
                "The text that appears in the browser tab. It is also what Google shows as the clickable headline in search results.",
              label: "Page Title",
            },
            { code: "\n" },
            { code: "</head>\n" },
            {
              code: "<body>",
              annotation:
                "Everything the user SEES goes here. All your headings, paragraphs, images, links, buttons — all inside the body.",
              label: "Body",
            },
            {
              code: "\n  <h1>Welcome!</h1>\n  <p>This is my very first web page.</p>\n",
            },
            { code: "</body>\n</html>" },
          ]}
        />
      </section>

      {/* ── Tags vs Attributes vs Elements ── */}
      <section>
        <h2>Tags, Attributes, and Elements</h2>
        <p>Beginners often mix these three up. Think of a gift:</p>
        <ul>
          <li>
            <strong>Tag</strong> = the wrapping paper (the opening{" "}
            <code>&lt;p&gt;</code> and closing <code>&lt;/p&gt;</code>)
          </li>
          <li>
            <strong>Element</strong> = the whole gift (wrapping + the present
            inside)
          </li>
          <li>
            <strong>Attribute</strong> = a label on the gift giving extra info
            (like <code>href="..."</code>)
          </li>
        </ul>

        <AnnotatedCode
          title="Anatomy of an HTML Element"
          segments={[
            {
              code: "<a",
              annotation:
                "This is the OPENING TAG. The 'a' stands for 'anchor' — it creates a clickable link.",
              label: "Opening Tag",
            },
            { code: " " },
            {
              code: 'href="https://btu.edu.ge"',
              annotation:
                "This is an ATTRIBUTE. It provides extra info to the tag. 'href' tells the link WHERE to go. Attributes always use the format: name=\"value\".",
              label: "Attribute",
            },
            { code: " " },
            {
              code: 'target="_blank"',
              annotation:
                "Another attribute! This one tells the browser to open the link in a NEW TAB instead of the same tab.",
              label: "Target",
            },
            {
              code: ">",
            },
            {
              code: "Visit BTU",
              annotation:
                "This is the CONTENT — the visible text the user sees and can click.",
              label: "Content",
            },
            {
              code: "</a>",
              annotation:
                "The CLOSING TAG. It starts with </ to signal the end. The whole thing from <a> to </a> is called an ELEMENT.",
              label: "Closing Tag",
            },
          ]}
        />

        <InfoBox type="info">
          Some elements are <strong>self-closing</strong> — no content, no
          closing tag. Examples: <code>&lt;br /&gt;</code>,{" "}
          <code>&lt;hr /&gt;</code>, <code>&lt;img /&gt;</code>. Think of them
          as gifts that are just a card — no box needed.
        </InfoBox>
      </section>

      {/* ── Formatting Tags ── */}
      <section>
        <h2>Text Formatting Tags</h2>
        <p>HTML gives you several tags to format text:</p>

        <Diagram title="Formatting Tags and What They Do">
          <div className="space-y-3">
            {[
              {
                tag: "<strong>",
                result: "font-bold",
                text: "Important text",
                desc: "Semantic — screen readers emphasize this",
              },
              {
                tag: "<b>",
                result: "font-bold",
                text: "Bold text",
                desc: "Visual only — just makes it bold",
              },
              {
                tag: "<em>",
                result: "italic",
                text: "Emphasized text",
                desc: "Semantic — screen readers change tone",
              },
              {
                tag: "<i>",
                result: "italic",
                text: "Italic text",
                desc: "Visual only — just makes it italic",
              },
            ].map((item) => (
              <div
                key={item.tag}
                className="flex items-center gap-4 bg-gray-50 rounded-lg p-3 border border-gray-100"
              >
                <code className="text-sm bg-gray-800 text-green-400 px-2 py-1 rounded shrink-0">
                  {item.tag}
                </code>
                <div className="text-gray-400">{"="}</div>
                <span className={`${item.result} text-gray-800`}>
                  {item.text}
                </span>
                <span className="text-xs text-gray-500 ml-auto hidden sm:block">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </Diagram>

        <InfoBox type="tip">
          Prefer <code>&lt;strong&gt;</code> over <code>&lt;b&gt;</code> and{" "}
          <code>&lt;em&gt;</code> over <code>&lt;i&gt;</code>. The semantic
          versions tell screen readers "this text is important."
        </InfoBox>
      </section>

      {/* ── Headings ── */}
      <section>
        <h2>Headings — The Hierarchy of Your Page</h2>
        <p>
          Headings create a hierarchy, like a table of contents. HTML gives you
          six levels:
        </p>

        <Diagram title="Heading Levels">
          <div className="space-y-2">
            {[
              {
                level: "h1",
                size: "text-3xl",
                color: "text-gray-900",
                desc: "Main Page Title (one per page)",
              },
              {
                level: "h2",
                size: "text-2xl",
                color: "text-gray-800",
                desc: "Major Section",
              },
              {
                level: "h3",
                size: "text-xl",
                color: "text-gray-700",
                desc: "Sub-section",
              },
              {
                level: "h4",
                size: "text-lg",
                color: "text-gray-600",
                desc: "Sub-sub-section",
              },
              {
                level: "h5",
                size: "text-base",
                color: "text-gray-500",
                desc: "Minor heading",
              },
              {
                level: "h6",
                size: "text-sm",
                color: "text-gray-400",
                desc: "Smallest heading",
              },
            ].map((h) => (
              <div key={h.level} className="flex items-baseline gap-3">
                <code className="text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-600 shrink-0 w-10 text-center">
                  {h.level}
                </code>
                <span className={`${h.size} ${h.color} font-bold`}>
                  {h.desc}
                </span>
              </div>
            ))}
          </div>
        </Diagram>

        <InfoBox type="warning">
          Never skip heading levels! If you have <code>&lt;h2&gt;</code>, the
          next should be <code>&lt;h3&gt;</code>, not <code>&lt;h5&gt;</code>.
          Use CSS to change visual size. Screen readers use levels to navigate.
        </InfoBox>
      </section>

      {/* ── Hyperlinks ── */}
      <section>
        <h2>Hyperlinks — The Backbone of the Web</h2>
        <p>
          Links connect pages together. Click on different parts to see what
          each attribute does:
        </p>

        <AnnotatedCode
          title="Anatomy of a Link"
          segments={[
            { code: "<a " },
            {
              code: 'href="https://btu.edu.ge"',
              annotation:
                "The href (hypertext reference) is WHERE the link goes. Can be a URL, email (mailto:), phone (tel:), or section ID (#contact).",
              label: "Destination",
            },
            { code: " " },
            {
              code: 'target="_blank"',
              annotation:
                "Opens the link in a new tab. Without this, clicking navigates away from the current page.",
              label: "New Tab",
            },
            { code: ">" },
            {
              code: "Visit BTU",
              annotation:
                "The clickable text the user sees. Should be descriptive — 'Visit BTU' is better than 'Click here'.",
              label: "Link Text",
            },
            { code: "</a>" },
          ]}
        />

        <h3>Types of Links</h3>
        <Diagram title="All Link Types">
          <div className="space-y-3">
            {[
              {
                type: "External",
                code: 'href="https://btu.edu.ge"',
                desc: "Goes to another website",
              },
              {
                type: "Anchor",
                code: 'href="#contact"',
                desc: "Jumps to an element with that id on the same page",
              },
              {
                type: "Email",
                code: 'href="mailto:info@btu.edu.ge"',
                desc: "Opens the email app",
              },
              {
                type: "Phone",
                code: 'href="tel:+995555123456"',
                desc: "Opens the phone dialer on mobile",
              },
            ].map((link) => (
              <div
                key={link.type}
                className="flex items-center gap-3 bg-gray-50 rounded-lg p-3 border border-gray-100"
              >
                <span className="text-sm font-bold text-gray-800 shrink-0 w-20">
                  {link.type}
                </span>
                <code className="text-xs bg-gray-800 text-green-400 px-2 py-1 rounded">
                  {link.code}
                </code>
                <span className="text-sm text-gray-500 ml-auto hidden sm:block">
                  {link.desc}
                </span>
              </div>
            ))}
          </div>
        </Diagram>
      </section>

      {/* ── Putting It Together ── */}
      <section>
        <h2>Putting It All Together</h2>
        <p>
          A complete page using everything we learned. Click highlighted parts
          to understand:
        </p>

        <AnnotatedCode
          title="A Complete Personal Page"
          segments={[
            {
              code: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8" />\n  ',
            },
            {
              code: "<title>My Portfolio</title>",
              annotation:
                "Appears in the browser tab and Google search results.",
              label: "Title",
            },
            { code: "\n</head>\n<body>\n\n  " },
            {
              code: "<h1>Nino Mchedlishvili</h1>",
              annotation:
                "The main page title. Only ONE h1 per page — most important heading for SEO.",
              label: "Main Heading",
            },
            { code: "\n  " },
            {
              code: "<hr />",
              annotation:
                "Horizontal rule — draws a line across the page. Self-closing (no </hr>).",
              label: "Separator",
            },
            { code: "\n\n  <h2>About Me</h2>\n  <p>\n    I study " },
            {
              code: "<strong>Front-End Development</strong>",
              annotation:
                "Bold + semantic importance. Screen readers will emphasize this.",
              label: "Strong",
            },
            { code: " at\n    " },
            {
              code: '<a href="https://btu.edu.ge" target="_blank">BTU</a>',
              annotation: "External link opening in a new tab.",
              label: "Link",
            },
            { code: ".\n  </p>\n\n  <h2>Contact</h2>\n  <p>\n    " },
            {
              code: '<a href="mailto:nino@example.com">nino@example.com</a>',
              annotation: "Email link — opens the default email app.",
              label: "Email",
            },
            { code: "\n    " },
            {
              code: "<br />",
              annotation: "Line break — forces text to the next line.",
              label: "Break",
            },
            {
              code: '\n    <a href="tel:+995555123456">+995 555 123 456</a>\n  </p>\n\n</body>\n</html>',
            },
          ]}
        />
      </section>

      {/* ── Exercises ── */}
      <section>
        <h2>Exercises</h2>

        <ExerciseBlock number={1}>
          <p>
            Create <code>profile.html</code> with the full HTML5 skeleton.
            Inside the body:
          </p>
          <ul>
            <li>
              An <code>&lt;h1&gt;</code> with your full name
            </li>
            <li>
              A paragraph using <code>&lt;strong&gt;</code> and{" "}
              <code>&lt;em&gt;</code>
            </li>
            <li>
              A horizontal rule, then <code>&lt;h2&gt;</code> "My Hobbies" with
              a paragraph
            </li>
          </ul>
        </ExerciseBlock>

        <ExerciseBlock number={2}>
          <p>Create a "Favorite Resources" section:</p>
          <ul>
            <li>
              An <code>&lt;h2&gt;</code> title
            </li>
            <li>Three links opening in new tabs</li>
            <li>
              Use <code>&lt;br /&gt;</code> between links
            </li>
          </ul>
        </ExerciseBlock>

        <ExerciseBlock number={3}>
          <p>
            Create <code>article.html</code> as a blog post:
          </p>
          <ul>
            <li>
              <code>&lt;h1&gt;</code> blog title
            </li>
            <li>
              "Introduction" with <code>&lt;h2&gt;</code>
            </li>
            <li>
              "Main Content" with two <code>&lt;h3&gt;</code> sub-sections
            </li>
            <li>"Conclusion" with a link</li>
          </ul>
        </ExerciseBlock>
      </section>

      {/* ── Homework ── */}
      <HomeworkBlock>
        <h3>Personal Portfolio Page (Part 1)</h3>
        <p>
          Create <code>portfolio.html</code> that includes:
        </p>
        <ol>
          <li>Proper HTML5 skeleton with a descriptive title</li>
          <li>
            <code>&lt;h1&gt;</code> with your name and a tagline paragraph
          </li>
          <li>
            Three <code>&lt;h2&gt;</code> sections: "About Me", "Education",
            "Links"
          </li>
          <li>
            Use <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>,{" "}
            <code>&lt;br /&gt;</code>, and <code>&lt;hr /&gt;</code> at least
            once
          </li>
          <li>
            Three links: university (new tab), email link, and anchor link to a
            section
          </li>
        </ol>
        <p>Open in browser, test all links, explore with DevTools (F12).</p>
      </HomeworkBlock>
    </LectureWrapper>
  );
};

export default Lecture01;
