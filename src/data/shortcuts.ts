export type OS = "windows" | "mac";
export type ShortcutCategory = "vscode" | "system" | "browser" | "terminal";

export interface ShortcutItem {
  action: string;
  windows: string;
  mac: string;
}

export interface ShortcutGroup {
  heading: string;
  items: ShortcutItem[];
}

export interface ShortcutPage {
  id: ShortcutCategory;
  title: string;
  description: string;
  groups: ShortcutGroup[];
}

export const shortcutPages: ShortcutPage[] = [
  {
    id: "vscode",
    title: "VS Code Shortcuts",
    description: "Essential keyboard shortcuts for Visual Studio Code.",
    groups: [
      {
        heading: "General",
        items: [
          { action: "Command Palette", windows: "Ctrl + Shift + P", mac: "⌘ + Shift + P" },
          { action: "New File", windows: "Ctrl + N", mac: "⌘ + N" },
          { action: "Open File", windows: "Ctrl + O", mac: "⌘ + O" },
          { action: "Save", windows: "Ctrl + S", mac: "⌘ + S" },
          { action: "Save All", windows: "Ctrl + K, S", mac: "⌘ + K, S" },
          { action: "Close Editor Tab", windows: "Ctrl + W", mac: "⌘ + W" },
          { action: "Toggle Sidebar", windows: "Ctrl + B", mac: "⌘ + B" },
          { action: "Open Terminal", windows: "Ctrl + `", mac: "⌘ + `" },
          { action: "Quick File Open", windows: "Ctrl + P", mac: "⌘ + P" },
        ],
      },
      {
        heading: "Editing",
        items: [
          { action: "Comment / Uncomment Line", windows: "Ctrl + /", mac: "⌘ + /" },
          { action: "Duplicate Line Down", windows: "Shift + Alt + ↓", mac: "Shift + ⌥ + ↓" },
          { action: "Move Line Up / Down", windows: "Alt + ↑ / ↓", mac: "⌥ + ↑ / ↓" },
          { action: "Delete Line", windows: "Ctrl + Shift + K", mac: "⌘ + Shift + K" },
          { action: "Undo", windows: "Ctrl + Z", mac: "⌘ + Z" },
          { action: "Redo", windows: "Ctrl + Y", mac: "⌘ + Shift + Z" },
          { action: "Format Document", windows: "Shift + Alt + F", mac: "Shift + ⌥ + F" },
          { action: "Select All Occurrences", windows: "Ctrl + Shift + L", mac: "⌘ + Shift + L" },
          { action: "Add Cursor Above / Below", windows: "Ctrl + Alt + ↑ / ↓", mac: "⌘ + ⌥ + ↑ / ↓" },
        ],
      },
      {
        heading: "Navigation & Search",
        items: [
          { action: "Find in File", windows: "Ctrl + F", mac: "⌘ + F" },
          { action: "Find & Replace", windows: "Ctrl + H", mac: "⌘ + H" },
          { action: "Find in All Files", windows: "Ctrl + Shift + F", mac: "⌘ + Shift + F" },
          { action: "Go to Line", windows: "Ctrl + G", mac: "⌘ + G" },
          { action: "Go to Definition", windows: "F12", mac: "F12" },
          { action: "Peek Definition", windows: "Alt + F12", mac: "⌥ + F12" },
          { action: "Switch Editor Tab", windows: "Ctrl + 1 / 2 / 3", mac: "⌘ + 1 / 2 / 3" },
        ],
      },
    ],
  },
  {
    id: "system",
    title: "System Shortcuts",
    description: "OS-level keyboard shortcuts for Windows and macOS.",
    groups: [
      {
        heading: "Clipboard & Editing",
        items: [
          { action: "Copy", windows: "Ctrl + C", mac: "⌘ + C" },
          { action: "Cut", windows: "Ctrl + X", mac: "⌘ + X" },
          { action: "Paste", windows: "Ctrl + V", mac: "⌘ + V" },
          { action: "Undo", windows: "Ctrl + Z", mac: "⌘ + Z" },
          { action: "Redo", windows: "Ctrl + Y", mac: "⌘ + Shift + Z" },
          { action: "Select All", windows: "Ctrl + A", mac: "⌘ + A" },
          { action: "Find", windows: "Ctrl + F", mac: "⌘ + F" },
        ],
      },
      {
        heading: "Window Management",
        items: [
          { action: "Switch App", windows: "Alt + Tab", mac: "⌘ + Tab" },
          { action: "Close Window / App", windows: "Alt + F4", mac: "⌘ + Q" },
          { action: "Minimize Window", windows: "Win + ↓", mac: "⌘ + M" },
          { action: "Maximize / Full Screen", windows: "Win + ↑", mac: "Ctrl + ⌘ + F" },
          { action: "Snap Left / Right", windows: "Win + ← / →", mac: "—" },
          { action: "Show Desktop", windows: "Win + D", mac: "F11 / Mission Control" },
          { action: "Open File Explorer / Finder", windows: "Win + E", mac: "⌘ + Space (Spotlight)" },
        ],
      },
      {
        heading: "Screenshots",
        items: [
          { action: "Full Screenshot", windows: "Print Screen", mac: "Shift + ⌘ + 3" },
          { action: "Screenshot to Clipboard", windows: "Ctrl + Print Screen", mac: "Ctrl + Shift + ⌘ + 3" },
          { action: "Select Area Screenshot", windows: "Win + Shift + S", mac: "Shift + ⌘ + 4" },
          { action: "Screenshot to File (area)", windows: "—", mac: "Shift + ⌘ + 5" },
        ],
      },
      {
        heading: "System",
        items: [
          { action: "Lock Screen", windows: "Win + L", mac: "Ctrl + ⌘ + Q" },
          { action: "Task Manager / Activity Monitor", windows: "Ctrl + Shift + Esc", mac: "⌘ + Space → Activity" },
          { action: "Settings", windows: "Win + I", mac: "⌘ + , (in app)" },
          { action: "Spotlight / Search", windows: "Win (Start)", mac: "⌘ + Space" },
          { action: "New Virtual Desktop", windows: "Win + Ctrl + D", mac: "⌃ + ↑ → New Space" },
        ],
      },
    ],
  },
  {
    id: "browser",
    title: "Browser Shortcuts",
    description: "Keyboard shortcuts for Chrome, Firefox, Edge, and Safari.",
    groups: [
      {
        heading: "Tabs & Windows",
        items: [
          { action: "New Tab", windows: "Ctrl + T", mac: "⌘ + T" },
          { action: "Close Tab", windows: "Ctrl + W", mac: "⌘ + W" },
          { action: "Reopen Closed Tab", windows: "Ctrl + Shift + T", mac: "⌘ + Shift + T" },
          { action: "Switch to Tab 1–9", windows: "Ctrl + 1–9", mac: "⌘ + 1–9" },
          { action: "Next Tab", windows: "Ctrl + Tab", mac: "⌘ + ⌥ + →" },
          { action: "Previous Tab", windows: "Ctrl + Shift + Tab", mac: "⌘ + ⌥ + ←" },
          { action: "New Window", windows: "Ctrl + N", mac: "⌘ + N" },
          { action: "New Incognito Window", windows: "Ctrl + Shift + N", mac: "⌘ + Shift + N" },
        ],
      },
      {
        heading: "Navigation",
        items: [
          { action: "Go to Address Bar", windows: "Ctrl + L", mac: "⌘ + L" },
          { action: "Refresh", windows: "F5", mac: "⌘ + R" },
          { action: "Hard Refresh (skip cache)", windows: "Ctrl + Shift + R", mac: "⌘ + Shift + R" },
          { action: "Back", windows: "Alt + ←", mac: "⌘ + [" },
          { action: "Forward", windows: "Alt + →", mac: "⌘ + ]" },
          { action: "Stop Loading", windows: "Esc", mac: "Esc" },
        ],
      },
      {
        heading: "Developer Tools",
        items: [
          { action: "Open DevTools", windows: "F12", mac: "⌘ + ⌥ + I" },
          { action: "Console Panel", windows: "Ctrl + Shift + J", mac: "⌘ + ⌥ + J" },
          { action: "Elements / Inspector", windows: "Ctrl + Shift + C", mac: "⌘ + Shift + C" },
          { action: "Inspect Element (context menu)", windows: "Right-click → Inspect", mac: "Right-click → Inspect" },
          { action: "Toggle Device Mode", windows: "Ctrl + Shift + M", mac: "⌘ + Shift + M" },
        ],
      },
      {
        heading: "Page",
        items: [
          { action: "Find in Page", windows: "Ctrl + F", mac: "⌘ + F" },
          { action: "Zoom In", windows: "Ctrl + +", mac: "⌘ + +" },
          { action: "Zoom Out", windows: "Ctrl + -", mac: "⌘ + -" },
          { action: "Reset Zoom", windows: "Ctrl + 0", mac: "⌘ + 0" },
          { action: "Full Screen", windows: "F11", mac: "Ctrl + ⌘ + F" },
          { action: "Save Page", windows: "Ctrl + S", mac: "⌘ + S" },
          { action: "Print", windows: "Ctrl + P", mac: "⌘ + P" },
        ],
      },
    ],
  },
  {
    id: "terminal",
    title: "Terminal Commands",
    description: "Essential terminal / command-line commands for web developers.",
    groups: [
      {
        heading: "Navigation",
        items: [
          { action: "List files", windows: "dir", mac: "ls" },
          { action: "List all files (incl. hidden)", windows: "dir /a", mac: "ls -la" },
          { action: "Change directory", windows: "cd <folder>", mac: "cd <folder>" },
          { action: "Go up one level", windows: "cd ..", mac: "cd .." },
          { action: "Go to home directory", windows: "cd %USERPROFILE%", mac: "cd ~" },
          { action: "Print current path", windows: "cd", mac: "pwd" },
        ],
      },
      {
        heading: "Files & Folders",
        items: [
          { action: "Create file", windows: "type nul > file.txt", mac: "touch file.txt" },
          { action: "Create folder", windows: "mkdir <name>", mac: "mkdir <name>" },
          { action: "Delete file", windows: "del <file>", mac: "rm <file>" },
          { action: "Delete folder (recursive)", windows: "rmdir /s /q <folder>", mac: "rm -rf <folder>" },
          { action: "Copy file", windows: "copy <src> <dest>", mac: "cp <src> <dest>" },
          { action: "Move / Rename", windows: "move <src> <dest>", mac: "mv <src> <dest>" },
          { action: "Read / Print file", windows: "type <file>", mac: "cat <file>" },
        ],
      },
      {
        heading: "System",
        items: [
          { action: "Clear screen", windows: "cls", mac: "clear" },
          { action: "Current user", windows: "whoami", mac: "whoami" },
          { action: "List running processes", windows: "tasklist", mac: "ps aux" },
          { action: "Kill process by ID", windows: "taskkill /PID <id> /F", mac: "kill <id>" },
          { action: "Network info / IP", windows: "ipconfig", mac: "ifconfig" },
          { action: "Ping a host", windows: "ping <host>", mac: "ping <host>" },
        ],
      },
      {
        heading: "Node.js & npm",
        items: [
          { action: "Check Node version", windows: "node -v", mac: "node -v" },
          { action: "Check npm version", windows: "npm -v", mac: "npm -v" },
          { action: "Install dependencies", windows: "npm install", mac: "npm install" },
          { action: "Install package", windows: "npm install <pkg>", mac: "npm install <pkg>" },
          { action: "Run dev server", windows: "npm run dev", mac: "npm run dev" },
          { action: "Run build", windows: "npm run build", mac: "npm run build" },
          { action: "Initialize project", windows: "npm init -y", mac: "npm init -y" },
          { action: "Create Vite project", windows: "npm create vite@latest", mac: "npm create vite@latest" },
        ],
      },
      {
        heading: "Git",
        items: [
          { action: "Initialize repo", windows: "git init", mac: "git init" },
          { action: "Clone repo", windows: "git clone <url>", mac: "git clone <url>" },
          { action: "Check status", windows: "git status", mac: "git status" },
          { action: "Stage all changes", windows: "git add .", mac: "git add ." },
          { action: "Commit", windows: 'git commit -m "msg"', mac: 'git commit -m "msg"' },
          { action: "Push", windows: "git push", mac: "git push" },
          { action: "Pull", windows: "git pull", mac: "git pull" },
          { action: "View log", windows: "git log --oneline", mac: "git log --oneline" },
        ],
      },
    ],
  },
];
