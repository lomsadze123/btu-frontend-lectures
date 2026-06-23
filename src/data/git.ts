export interface GitTopicInfo {
  id: string;
  title: string;
  description: string;
}

export const gitTopics: GitTopicInfo[] = [
  {
    id: "git-bash",
    title: "Git & Git Bash",
    description:
      "Version control fundamentals, Git Bash setup, commits, branches, and working with local repositories.",
  },
  {
    id: "github",
    title: "GitHub",
    description:
      "Remote repositories, push/pull, pull requests, collaboration workflows, and GitHub essentials.",
  },
];
