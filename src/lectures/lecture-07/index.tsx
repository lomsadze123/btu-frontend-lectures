import LectureWrapper from "../../components/LectureWrapper";
import AnnotatedCode from "../../components/AnnotatedCode";
import Diagram from "../../components/Diagram";
import InfoBox from "../../components/InfoBox";
import ExerciseBlock from "../../components/ExerciseBlock";
import HomeworkBlock from "../../components/HomeworkBlock";

const Lecture07 = () => {
  return (
    <LectureWrapper id="07" title="Generative AI & Web Development">
      {/* ── Intro ── */}
      <section>
        <h2>The AI Revolution in Your Code Editor</h2>
        <p>
          Welcome to the wildest shift in software development since the
          invention of the internet itself. <strong>Generative AI</strong> --
          tools like ChatGPT, Claude, and GitHub Copilot -- can now write code,
          explain concepts, debug errors, and generate entire web pages from a
          text description.
        </p>
        <p>
          But here is the thing:{" "}
          <strong>AI is a power tool, not a replacement for your brain</strong>.
          A chainsaw helps a carpenter work faster, but you would not hand a
          chainsaw to someone who does not know which end of a board to cut.
          This lecture will teach you how to use AI effectively, ethically, and
          without accidentally becoming dependent on something you do not
          understand.
        </p>
      </section>

      {/* ── What is GenAI ── */}
      <section>
        <h2>What is Generative AI, Really?</h2>
        <p>
          <strong>Generative AI</strong> refers to AI systems that create{" "}
          <em>new content</em> -- text, images, code, music, video. The most
          relevant for us are <strong>Large Language Models (LLMs)</strong>:
          systems trained on enormous amounts of text (including billions of
          lines of code) that can understand and generate human language and
          programming languages.
        </p>
        <p>
          Think of it this way: imagine reading every recipe book, every coding
          tutorial, and every Stack Overflow answer ever written. You would
          start recognizing patterns -- what goes with what, common structures,
          best practices. LLMs do exactly this, but at a scale no human could
          match.
        </p>

        <InfoBox type="info">
          AI does not "understand" code the way you do. It recognizes patterns
          and generates statistically likely outputs. This is why it can write
          convincing code that has subtle bugs -- it looks right because it{" "}
          <em>pattern-matches</em> to correct code, but it was not actually
          "reasoning" about your specific problem.
        </InfoBox>

        <Diagram title="How LLMs work (simplified)">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-3">
              <div className="bg-blue-100 border border-blue-300 rounded-lg px-4 py-2 text-sm text-blue-800">
                Billions of web pages
              </div>
              <div className="bg-blue-100 border border-blue-300 rounded-lg px-4 py-2 text-sm text-blue-800">
                Code repositories
              </div>
              <div className="bg-blue-100 border border-blue-300 rounded-lg px-4 py-2 text-sm text-blue-800">
                Documentation
              </div>
              <div className="bg-blue-100 border border-blue-300 rounded-lg px-4 py-2 text-sm text-blue-800">
                Books & articles
              </div>
            </div>
            <div className="text-gray-400 text-2xl">&#8595;</div>
            <div className="bg-purple-500 text-white rounded-xl px-6 py-3 font-bold text-center">
              Training: Learn patterns, structures, relationships
            </div>
            <div className="text-gray-400 text-2xl">&#8595;</div>
            <div className="bg-green-500 text-white rounded-xl px-6 py-3 font-bold text-center">
              Model: Predicts "what text should come next?"
            </div>
            <div className="text-gray-400 text-2xl">&#8595;</div>
            <div className="flex gap-3 flex-wrap justify-center">
              <div className="bg-orange-100 border border-orange-300 rounded-lg px-4 py-2 text-sm text-orange-800">
                Generates code
              </div>
              <div className="bg-orange-100 border border-orange-300 rounded-lg px-4 py-2 text-sm text-orange-800">
                Answers questions
              </div>
              <div className="bg-orange-100 border border-orange-300 rounded-lg px-4 py-2 text-sm text-orange-800">
                Explains concepts
              </div>
            </div>
          </div>
        </Diagram>

        <h3>The Players</h3>
        <Diagram title="Popular AI tools for web development">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              {
                name: "ChatGPT",
                by: "OpenAI",
                tag: "Chat + Code",
                color: "bg-green-50 border-green-200",
              },
              {
                name: "Claude",
                by: "Anthropic",
                tag: "Chat + Code",
                color: "bg-orange-50 border-orange-200",
              },
              {
                name: "GitHub Copilot",
                by: "GitHub/OpenAI",
                tag: "In-Editor AI",
                color: "bg-blue-50 border-blue-200",
              },
              {
                name: "Cursor",
                by: "AI Code Editor",
                tag: "Full IDE",
                color: "bg-purple-50 border-purple-200",
              },
              {
                name: "v0 by Vercel",
                by: "UI Generator",
                tag: "Design to Code",
                color: "bg-pink-50 border-pink-200",
              },
            ].map((tool) => (
              <div
                key={tool.name}
                className={`${tool.color} border-2 rounded-lg p-3 text-center`}
              >
                <h4 className="font-bold text-sm text-gray-800">{tool.name}</h4>
                <p className="text-xs text-gray-500">{tool.by}</p>
                <span className="inline-block mt-2 bg-white border border-gray-200 text-xs text-gray-600 px-2 py-0.5 rounded-full">
                  {tool.tag}
                </span>
              </div>
            ))}
          </div>
        </Diagram>
      </section>

      {/* ── Prompting ── */}
      <section>
        <h2>The Art of Prompting</h2>
        <p>
          A <strong>prompt</strong> is what you type into an AI tool. The
          quality of your prompt <em>directly</em> determines the quality of the
          output. Bad prompt = bad code. Good prompt = surprisingly useful code.
          This is called <strong>prompt engineering</strong>, and it is a
          genuine skill worth developing.
        </p>

        <h3>The Terrible Prompt vs The Great Prompt</h3>

        <Diagram title="Bad vs. good prompts -- specificity matters!">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
              <span className="inline-block bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded mb-2">
                BAD PROMPT
              </span>
              <div className="bg-white rounded p-3 italic text-sm text-gray-700">
                "Make me a contact form"
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Too vague. What fields? What style? What validation? The AI will
                guess everything.
              </p>
            </div>
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
              <span className="inline-block bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded mb-2">
                GREAT PROMPT
              </span>
              <div className="bg-white rounded p-3 italic text-sm text-gray-700">
                "Create an HTML/CSS contact form with: name (required), email
                (required), subject (dropdown with 3 options), message
                (textarea). Style: centered, max-width 500px, rounded inputs,
                blue (#3498db) submit button. Mobile-responsive. No JavaScript."
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Specific, constrained, and clear. The AI knows exactly what to
                build.
              </p>
            </div>
          </div>
        </Diagram>

        <h3>The Prompt Formula</h3>
        <p>
          Use this template for consistently good results:{" "}
          <strong>Role + Task + Context + Constraints + Format</strong>.
        </p>

        <Diagram title="The prompt engineering formula">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 justify-center items-center">
              <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-sm">
                Role
              </span>
              <span className="text-gray-400 font-bold text-xl">+</span>
              <span className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold text-sm">
                Task
              </span>
              <span className="text-gray-400 font-bold text-xl">+</span>
              <span className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold text-sm">
                Context
              </span>
              <span className="text-gray-400 font-bold text-xl">+</span>
              <span className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold text-sm">
                Constraints
              </span>
              <span className="text-gray-400 font-bold text-xl">+</span>
              <span className="bg-purple-500 text-white px-4 py-2 rounded-lg font-bold text-sm">
                Format
              </span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-sm leading-loose">
              <span className="bg-red-100 text-red-700 px-1 rounded">
                You are a web developer
              </span>{" "}
              (role).{" "}
              <span className="bg-orange-100 text-orange-700 px-1 rounded">
                Create a responsive navbar
              </span>{" "}
              (task){" "}
              <span className="bg-green-100 text-green-700 px-1 rounded">
                for a portfolio website
              </span>{" "}
              (context).{" "}
              <span className="bg-blue-100 text-blue-700 px-1 rounded">
                Use only HTML and CSS with Flexbox, no JavaScript
              </span>{" "}
              (constraints).{" "}
              <span className="bg-purple-100 text-purple-700 px-1 rounded">
                Show HTML and CSS in separate code blocks
              </span>{" "}
              (format).
            </div>
          </div>
        </Diagram>

        <InfoBox type="tip">
          The best developers do not just copy-paste AI output. They{" "}
          <strong>iterate</strong>: "Make the buttons larger," "Switch from
          Flexbox to Grid," "Explain why you used position: absolute here."
          Treat AI like a pair-programming partner, not a magic button.
        </InfoBox>
      </section>

      {/* ── What AI Can Do ── */}
      <section>
        <h2>What AI Can Actually Do (Real Examples)</h2>
        <p>
          Let's see real examples of AI-assisted code. As you look at each one,
          think:{" "}
          <em>could I have built this myself? Do I understand every line?</em>
        </p>

        <h3>Example 1: AI-Generated Color Scheme</h3>
        <p>
          <em>
            Prompt: "Generate a CSS custom properties color scheme for a
            professional portfolio with dark blue as primary."
          </em>
        </p>

        <AnnotatedCode
          title="AI-generated color palette using CSS custom properties"
          segments={[
            {
              code: ":root {\n",
              annotation:
                ":root targets the top-level element (html). Custom properties (CSS variables) defined here are available everywhere in your stylesheet.",
              label: ":root",
            },
            {
              code: "  --primary: #1e3a5f;\n  --primary-light: #2c5282;\n  --accent: #3182ce;\n",
              annotation:
                "Custom properties start with -- and store reusable values. Instead of typing #1e3a5f everywhere, you write var(--primary). Change it in one place, it updates everywhere.",
              label: "CSS variables",
            },
            {
              code: "  --bg: #f7fafc;\n  --text: #2d3748;\n  --text-light: #718096;\n  --success: #38a169;\n  --warning: #d69e2e;\n  --error: #e53e3e;\n}\n\n",
            },
            {
              code: ".button {\n  background: var(--primary);\n  color: white;\n}\n",
              annotation:
                "var(--primary) references the custom property. If you later change --primary in :root, every element using var(--primary) updates automatically. Great for theming!",
              label: "Using variables",
            },
          ]}
        />

        <h3>Example 2: Before/After -- Your Code vs AI-Improved</h3>
        <p>
          One of the best uses of AI: paste your existing code and ask "Review
          this and suggest improvements."
        </p>

        <Diagram title="AI code review: spot the improvements!">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
              <span className="text-red-600 font-bold text-sm">
                BEFORE (Student Code)
              </span>
              <div className="font-mono text-xs bg-white rounded p-3 mt-2 space-y-1 text-gray-700">
                <div>
                  .box {"{"} width: 500px; {"}"}
                </div>
                <div>
                  .sidebar {"{"} float: left; {"}"}
                </div>
                <div>
                  .text {"{"} color: red !important; {"}"}
                </div>
                <div>
                  img {"{"} width: 400px; {"}"}
                </div>
              </div>
            </div>
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
              <span className="text-green-600 font-bold text-sm">
                AFTER (AI-Improved)
              </span>
              <div className="font-mono text-xs bg-white rounded p-3 mt-2 space-y-1 text-gray-700">
                <div>
                  .box {"{"} max-width: 500px; width: 100%; {"}"}
                </div>
                <div>
                  .layout {"{"} display: flex; {"}"}
                </div>
                <div>
                  .text {"{"} color: #e74c3c; {"}"}
                </div>
                <div>
                  img {"{"} max-width: 100%; height: auto; {"}"}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 text-sm text-gray-600">
            <strong>Improvements:</strong> responsive widths (max-width instead
            of width), Flexbox instead of float, no !important, responsive
            images.
          </div>
        </Diagram>
      </section>

      {/* ── Ethics ── */}
      <section>
        <h2>The Ethics of AI-Assisted Coding</h2>
        <p>
          AI tools are incredibly powerful, but with great power comes
          responsibility. Here are the rules of the road.
        </p>

        <Diagram title="The DOs and DON'Ts of AI-assisted coding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
              <h4 className="text-green-700 font-bold mb-3">DO Use AI For:</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>Understanding concepts you are stuck on</li>
                <li>Generating boilerplate to save time</li>
                <li>Debugging when you are lost</li>
                <li>Exploring alternative approaches</li>
                <li>Learning new patterns and techniques</li>
                <li>Code review and improvements</li>
              </ul>
            </div>
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
              <h4 className="text-red-700 font-bold mb-3">DON'T Use AI For:</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>Submitting work you don't understand</li>
                <li>Skipping learning fundamentals</li>
                <li>Copying without testing in browser</li>
                <li>Using during exams (unless allowed)</li>
                <li>Pretending AI code is your own</li>
                <li>Replacing thinking with prompting</li>
              </ul>
            </div>
          </div>
        </Diagram>

        <InfoBox type="warning">
          Here is the golden rule:{" "}
          <strong>never use code you cannot explain</strong>. If AI generates a
          CSS Grid layout, you should be able to tell someone what{" "}
          <code>
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))
          </code>{" "}
          does. If you cannot, stop and learn it before using it. AI should
          accelerate your learning, not replace it.
        </InfoBox>

        <h3>Academic Integrity</h3>
        <p>This is serious. In this course (and most courses):</p>
        <ul>
          <li>
            <strong>Always follow your instructor's policy</strong> on AI usage
            for assignments and exams.
          </li>
          <li>
            <strong>Be transparent</strong> -- if you used AI to help, say so.
            Many instructors appreciate honesty.
          </li>
          <li>
            <strong>The goal is learning</strong> -- AI that helps you
            understand faster is great. AI that lets you skip understanding is
            harmful to your career.
          </li>
        </ul>
      </section>

      {/* ── Limitations ── */}
      <section>
        <h2>AI Limitations (It's Not Magic)</h2>
        <p>
          AI is impressive, but it fails in predictable ways. Knowing these
          limitations makes you a smarter user:
        </p>

        <Diagram title="Six common AI limitations">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              {
                title: "Outdated Code",
                desc: "May use floats for layout instead of Grid/Flexbox. Always check for modern practices.",
              },
              {
                title: "Subtle Bugs",
                desc: "Code looks right but has hidden issues. Always test in the browser!",
              },
              {
                title: "Accessibility Gaps",
                desc: "Often forgets alt text, ARIA labels, and semantic HTML. You must add these.",
              },
              {
                title: "Over-Engineering",
                desc: "Turns a 5-line solution into 50 lines. Simpler is usually better.",
              },
              {
                title: "Inconsistency",
                desc: "Ask the same thing twice, get different answers. Not deterministic.",
              },
              {
                title: "No Context",
                desc: "Doesn't know your project structure or existing styles. May conflict.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-amber-50 border-2 border-amber-200 rounded-lg p-3"
              >
                <h4 className="text-amber-800 font-bold text-sm mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Diagram>

        <h3>The Verification Checklist</h3>
        <p>
          Every time you get code from AI, run through this checklist before
          using it:
        </p>

        <Diagram title="AI Code Review Checklist">
          <div className="max-w-lg mx-auto">
            <div className="bg-gray-800 text-white px-4 py-3 rounded-t-lg font-bold text-sm">
              AI Code Review Checklist
            </div>
            {[
              "Does it work in the browser?",
              "Is it responsive? (resize the window)",
              "Is the HTML semantic? (not just divs)",
              "Does it use modern CSS? (Grid/Flex, not floats)",
              "Accessibility? (alt text, labels, contrast)",
              "Do I understand EVERY line?",
              "Could it be simpler?",
              "Does it match course standards?",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-3 border-b border-gray-200 text-sm text-gray-700 last:border-0 last:rounded-b-lg bg-white"
              >
                <div className="w-5 h-5 border-2 border-gray-300 rounded shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </Diagram>
      </section>

      {/* ── AI in Practice ── */}
      <section>
        <h2>AI in Your Workflow: Practical Tips</h2>
        <p>
          Here is how to actually integrate AI into your daily coding without
          losing the fundamentals:
        </p>

        <Diagram title="The AI-assisted development workflow">
          <div className="flex flex-col gap-3 max-w-lg mx-auto">
            {[
              {
                step: "1",
                title: "Think First",
                desc: "Plan your HTML structure and CSS approach BEFORE asking AI.",
                color: "bg-blue-500",
              },
              {
                step: "2",
                title: "Write a Specific Prompt",
                desc: "Use the Role + Task + Context + Constraints + Format formula.",
                color: "bg-purple-500",
              },
              {
                step: "3",
                title: "Review the Output",
                desc: "Read every line. Mark anything you don't understand.",
                color: "bg-orange-500",
              },
              {
                step: "4",
                title: "Learn Unknown Parts",
                desc: "Ask AI to explain lines you don't understand. Look up documentation.",
                color: "bg-green-500",
              },
              {
                step: "5",
                title: "Test and Iterate",
                desc: "Check in browser, resize, test accessibility. Ask AI to fix issues.",
                color: "bg-red-500",
              },
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-3">
                <div
                  className={`${item.color} text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0`}
                >
                  {item.step}
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 flex-1">
                  <span className="font-bold text-sm text-gray-800">
                    {item.title}
                  </span>
                  <span className="text-sm text-gray-600"> -- {item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </Diagram>

        <AnnotatedCode
          title="Example: asking AI to explain code you don't understand"
          segments={[
            {
              code: "/* You got this from AI but aren't sure about some parts */\n\n",
            },
            {
              code: ".container {\n  display: grid;\n",
            },
            {
              code: "  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n",
              annotation:
                "If you don't understand this, ask AI: 'Explain what repeat(auto-fit, minmax(250px, 1fr)) does step by step.' Never use code you can't explain!",
              label: "Ask AI to explain",
            },
            {
              code: "  gap: 1rem;\n}\n\n",
            },
            {
              code: ".card {\n  container-type: inline-size;\n",
              annotation:
                "This is a newer CSS feature (container queries). If AI generates something unfamiliar, look it up on MDN before using it. It may not be supported in all browsers yet.",
              label: "Unfamiliar? Research it",
            },
            {
              code: "}\n",
            },
          ]}
        />
      </section>

      {/* ── Exercises ── */}
      <section>
        <h2>Exercises</h2>

        <ExerciseBlock number={1}>
          <p>
            <strong>Prompt Writing Practice.</strong> For each task below, write
            the best prompt you can (do not generate code -- focus on the prompt
            itself):
          </p>
          <ul>
            <li>
              A responsive nav bar with a logo, 4 links, and a mobile hamburger
              placeholder.
            </li>
            <li>
              A pricing section with 3 cards where the middle is highlighted as
              "Most Popular."
            </li>
            <li>
              A footer with 3 columns (About, Links, Contact) that stacks on
              mobile.
            </li>
          </ul>
          <p>
            For each prompt, identify: role, task, context, constraints, format.
            Then test one with an AI tool and evaluate the result.
          </p>
        </ExerciseBlock>

        <ExerciseBlock number={2}>
          <p>
            <strong>Generate, Review, and Fix.</strong> Use an AI tool to
            generate a "Team Members" section with 4 profile cards in a
            responsive grid. Then:
          </p>
          <ul>
            <li>Open the generated code in your browser.</li>
            <li>
              Check for: semantic HTML, responsive behavior, accessibility,
              modern CSS.
            </li>
            <li>
              Write down 3 things you would improve, and make those changes.
            </li>
          </ul>
        </ExerciseBlock>

        <ExerciseBlock number={3}>
          <p>
            <strong>Explain AI Code.</strong> Use an AI to generate a responsive
            hero section. Then:
          </p>
          <ul>
            <li>
              Write a comment above every CSS rule explaining what it does and
              why.
            </li>
            <li>Identify which course concepts (weeks 1-6) are used.</li>
            <li>
              List which parts you could write yourself vs. which you would need
              to look up.
            </li>
          </ul>
        </ExerciseBlock>
      </section>

      {/* ── Homework ── */}
      <HomeworkBlock>
        <h3>AI-Assisted Portfolio Project</h3>
        <p>Complete this project with full documentation of your AI usage:</p>
        <ol>
          <li>
            <strong>Write a prompt</strong> asking AI to generate a "Student
            Portfolio" page with: header with nav, about section, skills grid,
            and contact form. Save the prompt in a comment at the top of your
            HTML.
          </li>
          <li>
            <strong>Generate the code</strong> using any AI tool.
          </li>
          <li>
            <strong>Review it.</strong> In a CSS comment, write: (a) 3 things AI
            did well, (b) 3 things you changed and why, (c) any errors you
            found.
          </li>
          <li>
            <strong>Fix and improve</strong> based on your review. Ensure
            semantic HTML, responsive design, modern CSS.
          </li>
          <li>
            <strong>Add comments</strong> to every CSS section proving you
            understand the code.
          </li>
        </ol>
        <p>
          Save as <code>portfolio-ai.html</code> and{" "}
          <code>portfolio-ai.css</code>. The documentation is as important as
          the code!
        </p>
      </HomeworkBlock>
    </LectureWrapper>
  );
};

export default Lecture07;
