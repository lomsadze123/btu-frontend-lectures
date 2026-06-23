import GitWrapper from "../../components/GitWrapper";
import CodeBlock from "../../components/CodeBlock";
import Diagram from "../../components/Diagram";
import InfoBox from "../../components/InfoBox";
import ExerciseBlock from "../../components/ExerciseBlock";
import HomeworkBlock from "../../components/HomeworkBlock";

const GitHub = () => {
  return (
    <GitWrapper id="github" title="GitHub">
      {/* ── Git vs GitHub ── */}
      <section>
        <h2>Git vs. GitHub — What's the Difference?</h2>
        <p>
          This is one of the most common points of confusion for beginners.{" "}
          <strong>Git</strong> is the version control tool — it runs on your
          computer and tracks changes locally.{" "}
          <strong>GitHub</strong> is a website (owned by Microsoft) that hosts
          Git repositories online so you can back them up, share them, and
          collaborate with others.
        </p>

        <Diagram title="Git vs. GitHub">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-4">
              <h4 className="font-bold text-orange-800 mb-2">Git</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✅ Runs on your computer (locally)</li>
                <li>✅ Free and open source</li>
                <li>✅ Tracks history, branches, commits</li>
                <li>✅ Works offline</li>
                <li>❌ No collaboration features built-in</li>
                <li>❌ No web interface</li>
              </ul>
            </div>
            <div className="bg-indigo-50 border-2 border-indigo-300 rounded-lg p-4">
              <h4 className="font-bold text-indigo-800 mb-2">GitHub</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✅ Hosts repos in the cloud</li>
                <li>✅ Pull requests and code review</li>
                <li>✅ Issue tracking</li>
                <li>✅ GitHub Pages (free hosting)</li>
                <li>✅ GitHub Actions (CI/CD automation)</li>
                <li>❌ Requires internet connection</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-3 text-center">
            Think of Git as Microsoft Word and GitHub as Google Drive. Word edits
            the document; Drive stores and shares it.
          </p>
        </Diagram>

        <InfoBox type="info">
          GitHub is the most popular Git hosting platform, but it is not the
          only one. <strong>GitLab</strong> and <strong>Bitbucket</strong> are
          popular alternatives used in many companies. All three use Git under
          the hood — the concepts you learn here apply everywhere.
        </InfoBox>
      </section>

      {/* ── Create Account & Repo ── */}
      <section>
        <h2>Getting Started on GitHub</h2>

        <h3>Create an Account</h3>
        <ol>
          <li>Go to github.com and sign up for a free account.</li>
          <li>
            Choose a professional username — it will appear in your repo URLs
            and on your developer profile. Recruiters will see it.
          </li>
          <li>Verify your email address.</li>
        </ol>

        <h3>Create Your First Repository</h3>
        <ol>
          <li>Click the <strong>+</strong> button (top right) → "New repository".</li>
          <li>Give it a name (e.g., <code>my-portfolio</code>).</li>
          <li>Choose Public or Private.</li>
          <li>
            Check "Add a README file" if starting fresh. If you already have
            a local project, leave it unchecked.
          </li>
          <li>Click "Create repository".</li>
        </ol>

        <InfoBox type="tip">
          Make your profile repositories public. Future employers and
          collaborators look at GitHub profiles the same way they look at
          portfolios. Clean commit history, good README files, and consistent
          work make a strong impression.
        </InfoBox>
      </section>

      {/* ── Local ↔ Remote ── */}
      <section>
        <h2>Local ↔ Remote: Connecting Your Repo</h2>
        <p>
          A <strong>remote</strong> is a version of your repository stored
          somewhere else — in this case, on GitHub. The standard name for the
          main remote is <code>origin</code>.
        </p>

        <Diagram title="Local and remote repository relationship">
          <div className="flex flex-col items-center gap-4">
            <div className="bg-gray-800 text-white rounded-xl px-6 py-3 text-sm font-medium">
              Your Computer (local)
            </div>
            <div className="flex gap-8 text-sm text-gray-600">
              <div className="flex flex-col items-center gap-1">
                <span className="text-green-600 font-semibold">git push</span>
                <span className="text-2xl">↑</span>
                <span className="text-gray-400 text-xs">upload commits</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-blue-600 font-semibold">git pull</span>
                <span className="text-2xl">↓</span>
                <span className="text-gray-400 text-xs">download commits</span>
              </div>
            </div>
            <div className="bg-indigo-600 text-white rounded-xl px-6 py-3 text-sm font-medium">
              GitHub (remote / origin)
            </div>
          </div>
        </Diagram>

        <h3>Scenario A: Push an Existing Local Repo to GitHub</h3>
        <p>
          You already have a local project with commits. You created an empty
          repo on GitHub. Now connect them:
        </p>
        <CodeBlock
          language="bash"
          title="Connect and push a local repo to GitHub"
          code={`# Add the remote (copy the URL from GitHub)
git remote add origin https://github.com/your-username/my-portfolio.git

# Rename current branch to "main" (if needed)
git branch -M main

# Push and set upstream tracking
git push -u origin main

# Future pushes (after the first) are just:
git push`}
        />

        <h3>Scenario B: Clone a Repo from GitHub</h3>
        <p>
          You want to work on a project that already exists on GitHub.{" "}
          <code>git clone</code> downloads the full history and sets up{" "}
          <code>origin</code> automatically.
        </p>
        <CodeBlock
          language="bash"
          title="Clone a GitHub repository"
          code={`# Clone to a folder named after the repo
git clone https://github.com/some-user/some-repo.git

# Clone into a specific folder name
git clone https://github.com/some-user/some-repo.git my-folder

# Navigate into the cloned repo
cd some-repo`}
        />
      </section>

      {/* ── Daily Workflow ── */}
      <section>
        <h2>The Daily Git + GitHub Workflow</h2>
        <p>
          Once your repo is connected to GitHub, your everyday loop looks like
          this:
        </p>

        <Diagram title="The push/pull development loop">
          <div className="flex flex-col gap-3 max-w-lg mx-auto">
            {[
              {
                step: "1",
                cmd: "git pull",
                desc: "Sync latest changes from GitHub before you start work.",
                color: "bg-blue-500",
              },
              {
                step: "2",
                cmd: "edit files",
                desc: "Write code in your editor as usual.",
                color: "bg-gray-500",
              },
              {
                step: "3",
                cmd: "git add .",
                desc: "Stage everything you want in this commit.",
                color: "bg-yellow-500",
              },
              {
                step: "4",
                cmd: 'git commit -m "..."',
                desc: "Save a snapshot with a clear message.",
                color: "bg-orange-500",
              },
              {
                step: "5",
                cmd: "git push",
                desc: "Upload your commits to GitHub.",
                color: "bg-green-500",
              },
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-3">
                <div
                  className={`${item.color} text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0`}
                >
                  {item.step}
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 flex-1">
                  <code className="text-sm font-bold text-gray-800">
                    {item.cmd}
                  </code>
                  <span className="text-sm text-gray-600"> — {item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </Diagram>

        <CodeBlock
          language="bash"
          title="Full daily workflow"
          code={`# Start your session — sync from GitHub
git pull

# ... make changes to your files ...

# Check what changed
git status

# Stage changes
git add .

# Commit
git commit -m "Add hero section to homepage"

# Push to GitHub
git push`}
        />
      </section>

      {/* ── README ── */}
      <section>
        <h2>The README File</h2>
        <p>
          A <code>README.md</code> file is the front page of your repository on
          GitHub. It is written in <strong>Markdown</strong> — a lightweight
          formatting language. A good README explains what the project is, how to
          run it, and any relevant notes.
        </p>

        <CodeBlock
          language="bash"
          title="Simple README.md example (Markdown syntax)"
          code={`# My Portfolio

A personal portfolio website built with HTML, CSS, and JavaScript.

## How to Run

Open \`index.html\` in your browser — no build step required.

## Pages

- **Home** — intro and featured projects
- **About** — background and skills
- **Contact** — contact form

## Tech Used

- HTML5 / CSS3
- CSS Grid and Flexbox
- Vanilla JavaScript`}
        />

        <InfoBox type="tip">
          GitHub renders <code>.md</code> files automatically. Headers, bold
          text, code blocks, and lists all display beautifully. A well-written
          README makes your project look professional even if the code is simple.
        </InfoBox>
      </section>

      {/* ── Pull Requests ── */}
      <section>
        <h2>Pull Requests</h2>
        <p>
          A <strong>pull request (PR)</strong> is how you propose changes to a
          repository on GitHub. Instead of pushing directly to{" "}
          <code>main</code>, you push a branch, then open a PR to request that
          your branch be merged. This is the standard collaboration workflow in
          real teams.
        </p>

        <Diagram title="Pull request workflow">
          <div className="flex flex-col gap-3 max-w-xl mx-auto">
            {[
              {
                n: "1",
                title: "Fork or clone the repo",
                desc: 'Fork creates your own copy on GitHub. "Clone" downloads it locally.',
                color: "bg-indigo-500",
              },
              {
                n: "2",
                title: "Create a branch",
                desc: "Never work directly on main. Branch name should describe the work.",
                color: "bg-purple-500",
              },
              {
                n: "3",
                title: "Commit your changes",
                desc: "Small, focused commits with clear messages.",
                color: "bg-orange-500",
              },
              {
                n: "4",
                title: "Push the branch",
                desc: "git push origin your-branch-name",
                color: "bg-green-500",
              },
              {
                n: "5",
                title: "Open a Pull Request on GitHub",
                desc: "Compare your branch to main. Write a description of what you changed and why.",
                color: "bg-blue-500",
              },
              {
                n: "6",
                title: "Review & Merge",
                desc: "Teammates review the code. After approval, the branch is merged into main.",
                color: "bg-teal-500",
              },
            ].map((item) => (
              <div key={item.n} className="flex items-start gap-3">
                <div
                  className={`${item.color} text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-0.5`}
                >
                  {item.n}
                </div>
                <div>
                  <span className="font-semibold text-gray-800 text-sm">
                    {item.title}
                  </span>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Diagram>

        <CodeBlock
          language="bash"
          title="Create and push a branch for a PR"
          code={`# Create a feature branch
git switch -c feature/dark-mode

# Make changes and commit
git add .
git commit -m "Add dark mode toggle to settings"

# Push the branch to GitHub
git push origin feature/dark-mode

# Then open GitHub in your browser and click
# "Compare & pull request"`}
        />

        <InfoBox type="info">
          On solo projects, you might push directly to <code>main</code>. But
          in team projects, PRs are non-negotiable — they create a record of
          what changed, who approved it, and why. Get in the habit of using
          them even on personal projects.
        </InfoBox>
      </section>

      {/* ── Exercises ── */}
      <section>
        <h2>Exercises</h2>

        <ExerciseBlock number={1}>
          <p>
            <strong>Push your local project to GitHub.</strong> Take the project
            you built in the Git &amp; Git Bash exercises. Create a new repo on
            GitHub (empty, no README). Connect it with{" "}
            <code>git remote add origin</code> and push. Verify you can see your
            files and commit history on github.com.
          </p>
        </ExerciseBlock>

        <ExerciseBlock number={2}>
          <p>
            <strong>Add a README.</strong> Create a <code>README.md</code> in
            your project describing what it is, how to open it, and what you
            built. Use at least: one heading, one list, and one code block.
            Commit and push — check that GitHub renders it nicely on the repo
            homepage.
          </p>
        </ExerciseBlock>

        <ExerciseBlock number={3}>
          <p>
            <strong>Pull request practice.</strong> Create a branch called{" "}
            <code>feature/update-readme</code>. Add a "Technologies" section to
            your README on that branch. Push the branch and open a pull request
            on GitHub comparing it to <code>main</code>. Merge the PR using the
            GitHub UI. Then pull the merged changes back locally with{" "}
            <code>git pull</code>.
          </p>
        </ExerciseBlock>
      </section>

      <HomeworkBlock>
        <h3>Publish Your Portfolio on GitHub</h3>
        <p>
          Take the portfolio project from the Git &amp; Git Bash homework and
          publish it on GitHub with the following requirements:
        </p>
        <ol>
          <li>
            Push all commits to a public GitHub repository named{" "}
            <code>btu-portfolio</code>.
          </li>
          <li>
            Write a professional <code>README.md</code> with: project title,
            description, list of pages, technologies used, and a screenshot (add
            a screenshot image to the repo and reference it in the README with{" "}
            <code>![screenshot](screenshot.png)</code>).
          </li>
          <li>
            Enable <strong>GitHub Pages</strong> (Settings → Pages → Deploy from
            branch: main / root). Share the live URL with your instructor.
          </li>
          <li>
            Create and merge at least <strong>one pull request</strong> — even
            on a solo project. For example, add your screenshot on a branch and
            PR it to main.
          </li>
        </ol>
        <p>
          Submit the GitHub repository URL and the live GitHub Pages URL.
        </p>
      </HomeworkBlock>
    </GitWrapper>
  );
};

export default GitHub;
