import GitWrapper from "../../components/GitWrapper";
import CodeBlock from "../../components/CodeBlock";
import Diagram from "../../components/Diagram";
import InfoBox from "../../components/InfoBox";
import ExerciseBlock from "../../components/ExerciseBlock";
import HomeworkBlock from "../../components/HomeworkBlock";

const GitBash = () => {
  return (
    <GitWrapper id="git-bash" title="Git & Git Bash">
      {/* ── What is Version Control ── */}
      <section>
        <h2>What is Version Control?</h2>
        <p>
          Imagine you are writing an essay and you save copies:{" "}
          <code>essay_v1.docx</code>, <code>essay_v2.docx</code>,{" "}
          <code>essay_final.docx</code>, <code>essay_FINAL_real.docx</code>. You
          have invented a manual version control system — and it is a mess.{" "}
          <strong>Git</strong> solves this problem for code.
        </p>
        <p>
          Git is a <strong>distributed version control system</strong>. It
          tracks every change you make to your files, lets you go back to any
          previous state, and lets multiple people work on the same project
          without overwriting each other's work.
        </p>

        <Diagram title="Life without Git vs. life with Git">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
              <span className="inline-block bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded mb-3">
                WITHOUT GIT
              </span>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>📁 index_v1.html</li>
                <li>📁 index_v2.html</li>
                <li>📁 index_backup.html</li>
                <li>📁 index_FINAL.html</li>
                <li>📁 index_FINAL2.html</li>
                <li className="text-red-600 font-medium mt-2">
                  Which one is the real final?
                </li>
              </ul>
            </div>
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
              <span className="inline-block bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded mb-3">
                WITH GIT
              </span>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>📁 index.html (one file)</li>
                <li className="text-gray-500 text-xs">
                  commit: "Add navbar" — 2 days ago
                </li>
                <li className="text-gray-500 text-xs">
                  commit: "Fix mobile layout" — 1 day ago
                </li>
                <li className="text-gray-500 text-xs">
                  commit: "Add contact form" — 3 hours ago
                </li>
                <li className="text-green-600 font-medium mt-2">
                  Full history, one clean file.
                </li>
              </ul>
            </div>
          </div>
        </Diagram>
      </section>

      {/* ── Git Bash ── */}
      <section>
        <h2>What is Git Bash?</h2>
        <p>
          Git comes with a command-line interface. On <strong>Windows</strong>,
          the installer includes <strong>Git Bash</strong> — a terminal emulator
          that gives you a Unix-style shell (bash) plus all git commands. On{" "}
          <strong>macOS</strong>, you use the built-in Terminal app; git is
          either pre-installed or available via Xcode Command Line Tools.
        </p>

        <Diagram title="How to open Git Bash / Terminal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-bold text-blue-800 mb-2">Windows</h4>
              <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                <li>Download Git from git-scm.com</li>
                <li>Run the installer (defaults are fine)</li>
                <li>Right-click a folder → "Open Git Bash here"</li>
                <li>Or search "Git Bash" in Start menu</li>
              </ol>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-gray-800 mb-2">macOS</h4>
              <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                <li>Open Terminal (Cmd + Space → "Terminal")</li>
                <li>Run: <code>git --version</code></li>
                <li>If prompted, install Xcode Command Line Tools</li>
                <li>Or install via Homebrew: <code>brew install git</code></li>
              </ol>
            </div>
          </div>
        </Diagram>

        <h3>Verify Your Installation</h3>
        <CodeBlock
          language="bash"
          title="Check Git is installed"
          code={`git --version
# Expected output: git version 2.x.x`}
        />
      </section>

      {/* ── First-time Config ── */}
      <section>
        <h2>First-Time Setup</h2>
        <p>
          Before your first commit, tell Git who you are. This name and email
          will be attached to every commit you make — it is your signature.
        </p>

        <CodeBlock
          language="bash"
          title="Configure your identity (do this once)"
          code={`git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# Verify the settings
git config --global --list`}
        />

        <InfoBox type="info">
          The <code>--global</code> flag applies this config to all repositories
          on your machine. You can override it per-project by running the same
          command without <code>--global</code> inside that project folder.
        </InfoBox>
      </section>

      {/* ── Three Areas ── */}
      <section>
        <h2>The Three Areas of Git</h2>
        <p>
          Understanding these three areas is the key to understanding Git. Every
          file you work with lives in one of them at any moment.
        </p>

        <Diagram title="Git's three areas">
          <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
            <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-4 text-center w-full md:w-48">
              <div className="text-2xl mb-1">📝</div>
              <h4 className="font-bold text-orange-800">Working Directory</h4>
              <p className="text-xs text-gray-600 mt-1">
                Where you edit files. Changes here are "untracked" or
                "modified."
              </p>
            </div>
            <div className="text-gray-400 text-3xl font-bold hidden md:block">
              →
            </div>
            <div className="text-gray-400 text-sm md:hidden text-center">
              git add ↓
            </div>
            <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-4 text-center w-full md:w-48">
              <div className="text-2xl mb-1">📋</div>
              <h4 className="font-bold text-yellow-800">Staging Area</h4>
              <p className="text-xs text-gray-600 mt-1">
                A draft of your next commit. You choose exactly what goes in.
              </p>
            </div>
            <div className="text-gray-400 text-3xl font-bold hidden md:block">
              →
            </div>
            <div className="text-gray-400 text-sm md:hidden text-center">
              git commit ↓
            </div>
            <div className="bg-green-50 border-2 border-green-400 rounded-xl p-4 text-center w-full md:w-48">
              <div className="text-2xl mb-1">🗃️</div>
              <h4 className="font-bold text-green-800">Repository</h4>
              <p className="text-xs text-gray-600 mt-1">
                Permanent history of commits stored in the <code>.git</code>{" "}
                folder.
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-col md:flex-row justify-around text-xs text-gray-500 text-center gap-2">
            <span className="md:w-48">Edit files in your editor</span>
            <span className="md:w-48">
              <code>git add</code> moves here
            </span>
            <span className="md:w-48">
              <code>git commit</code> saves here
            </span>
          </div>
        </Diagram>

        <InfoBox type="tip">
          The staging area exists so you can commit only <em>part</em> of your
          changes at once. You might fix a bug and add a feature in the same
          afternoon — but they should be two separate commits with clear
          messages.
        </InfoBox>
      </section>

      {/* ── Core Commands ── */}
      <section>
        <h2>Core Git Commands</h2>

        <h3>Starting a Repository</h3>
        <CodeBlock
          language="bash"
          title="Initialize a new repo"
          code={`# Navigate to your project folder first
cd my-project

# Initialize Git — creates a hidden .git folder
git init`}
        />

        <h3>Checking Status</h3>
        <p>
          <code>git status</code> is the command you will run most often. It
          shows what is modified, what is staged, and what is untracked.
        </p>
        <CodeBlock
          language="bash"
          title="Check what's changed"
          code={`git status

# Example output:
# On branch main
# Changes not staged for commit:
#   modified:   index.html
# Untracked files:
#   style.css`}
        />

        <h3>Staging Changes</h3>
        <CodeBlock
          language="bash"
          title="Stage files"
          code={`# Stage a specific file
git add index.html

# Stage multiple files
git add index.html style.css

# Stage everything in the current folder
git add .`}
        />

        <h3>Committing</h3>
        <p>
          A commit is a permanent snapshot. Write a short, clear message
          describing <em>what</em> changed and <em>why</em>.
        </p>
        <CodeBlock
          language="bash"
          title="Create a commit"
          code={`git commit -m "Add navigation bar to homepage"

# Good commit messages:
# "Fix broken link in footer"
# "Add contact form validation"
# "Remove unused CSS file"

# Bad commit messages:
# "fix"
# "changes"
# "asdfgh"`}
        />

        <h3>Viewing History</h3>
        <CodeBlock
          language="bash"
          title="View commit log"
          code={`# Full log
git log

# Compact one-line format (most useful)
git log --oneline

# Example output:
# a3f8c12 Add contact form validation
# 7d2e019 Fix mobile navbar overflow
# 1b4a8f3 Initial commit`}
        />
      </section>

      {/* ── .gitignore ── */}
      <section>
        <h2>.gitignore</h2>
        <p>
          Some files should <strong>never</strong> be committed: the{" "}
          <code>node_modules</code> folder (huge, always re-installable),{" "}
          <code>.env</code> files (contain passwords), and OS junk like{" "}
          <code>.DS_Store</code>. A <code>.gitignore</code> file lists patterns
          Git should ignore entirely.
        </p>
        <CodeBlock
          language="bash"
          title=".gitignore — create in your project root"
          code={`# Dependencies
node_modules/

# Environment variables (never commit secrets!)
.env
.env.local

# Build output
dist/
build/

# OS files
.DS_Store
Thumbs.db

# Editor files
.vscode/settings.json`}
        />
        <InfoBox type="warning">
          If you accidentally commit <code>node_modules</code> or{" "}
          <code>.env</code>, removing them from Git history is painful. Create{" "}
          <code>.gitignore</code> <strong>before</strong> your first commit.
        </InfoBox>
      </section>

      {/* ── Branches ── */}
      <section>
        <h2>Branches</h2>
        <p>
          A branch is an independent line of development. You start on{" "}
          <strong>main</strong> (or <strong>master</strong>). When you want to
          try something new — a feature, a fix — you create a branch. If it
          works, you merge it in. If not, you delete the branch and nothing is
          lost.
        </p>

        <Diagram title="Branch and merge workflow">
          <div className="overflow-x-auto">
            <div className="min-w-[480px] flex flex-col gap-3 p-2">
              <div className="flex items-center gap-2">
                <div className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full font-mono">
                  main
                </div>
                <div className="flex gap-2">
                  {["C1", "C2", "C3", "···", "C6 (merge)"].map((c) => (
                    <div
                      key={c}
                      className="bg-indigo-100 border-2 border-indigo-400 text-indigo-800 text-xs px-2 py-1 rounded font-mono"
                    >
                      {c}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 ml-24">
                <div className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-mono">
                  feature
                </div>
                <div className="flex gap-2">
                  {["C4", "C5"].map((c) => (
                    <div
                      key={c}
                      className="bg-orange-100 border-2 border-orange-400 text-orange-800 text-xs px-2 py-1 rounded font-mono"
                    >
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2 px-2">
            main continues normally while feature work happens in isolation.
            When ready, merge brings the work together.
          </p>
        </Diagram>

        <CodeBlock
          language="bash"
          title="Working with branches"
          code={`# See all branches (* = current)
git branch

# Create a new branch
git branch feature-navbar

# Switch to it
git switch feature-navbar
# (older syntax: git checkout feature-navbar)

# Create AND switch in one command
git switch -c feature-contact-form

# After committing your work, go back to main
git switch main

# Merge the feature branch into main
git merge feature-navbar

# Delete branch after merging
git branch -d feature-navbar`}
        />

        <InfoBox type="tip">
          Naming branches descriptively helps a lot:{" "}
          <code>feature/dark-mode</code>, <code>fix/mobile-overflow</code>,{" "}
          <code>refactor/css-variables</code>. When you have many branches, good
          names make it obvious what each one is for.
        </InfoBox>
      </section>

      {/* ── Exercises ── */}
      <section>
        <h2>Exercises</h2>

        <ExerciseBlock number={1}>
          <p>
            <strong>Initialize and make your first commits.</strong> Create a
            new folder called <code>my-git-project</code>. Inside it, create{" "}
            <code>index.html</code> with a basic HTML skeleton. Then:
          </p>
          <ul>
            <li>Run <code>git init</code></li>
            <li>Run <code>git status</code> — observe the output</li>
            <li>Stage and commit with message "Initial commit"</li>
            <li>Add an <code>h1</code> to index.html, stage, and commit with "Add page heading"</li>
            <li>Run <code>git log --oneline</code> and verify both commits appear</li>
          </ul>
        </ExerciseBlock>

        <ExerciseBlock number={2}>
          <p>
            <strong>Create a .gitignore.</strong> In the same project, create a{" "}
            <code>.gitignore</code> that ignores <code>node_modules/</code> and{" "}
            <code>.env</code>. Then create those files/folders and run{" "}
            <code>git status</code> to confirm Git ignores them.
          </p>
        </ExerciseBlock>

        <ExerciseBlock number={3}>
          <p>
            <strong>Branch practice.</strong> Create a branch called{" "}
            <code>feature/about-page</code>. On that branch, add{" "}
            <code>about.html</code> and commit it. Switch back to{" "}
            <code>main</code> — confirm <code>about.html</code> is gone. Then
            merge the branch and confirm the file reappears.
          </p>
        </ExerciseBlock>
      </section>

      <HomeworkBlock>
        <h3>Build a Project with Git History</h3>
        <p>
          Create a small 3-page website (Home, About, Contact) using Git
          throughout. Requirements:
        </p>
        <ol>
          <li>
            At least <strong>6 meaningful commits</strong> — one per logical
            chunk of work (e.g., "Add HTML skeleton", "Style navbar", "Add
            contact form").
          </li>
          <li>
            A <code>.gitignore</code> from the start (even if no node_modules
            yet — add <code>*.log</code> and <code>.DS_Store</code>).
          </li>
          <li>
            Use at least <strong>one feature branch</strong>: develop one page
            on a branch, then merge it to main.
          </li>
          <li>
            Submit the project folder. Your instructor will run{" "}
            <code>git log --oneline</code> to evaluate your commit history.
          </li>
        </ol>
      </HomeworkBlock>
    </GitWrapper>
  );
};

export default GitBash;
