import { Suspense, lazy } from "react";
import { useParams, Navigate } from "react-router-dom";
import { gitTopics } from "../data/git";

const gitModules = import.meta.glob("../git/*/index.tsx");

const lazyGitPages: Record<
  string,
  React.LazyExoticComponent<React.ComponentType>
> = {};
for (const [path, loader] of Object.entries(gitModules)) {
  const match = path.match(/git\/([^/]+)\/index\.tsx$/);
  if (match) {
    lazyGitPages[match[1]] = lazy(
      loader as () => Promise<{ default: React.ComponentType }>,
    );
  }
}

const GitPage = () => {
  const { topic } = useParams<{ topic: string }>();

  const gitTopic = topic ? gitTopics.find((t) => t.id === topic) : null;
  const GitComponent = topic ? lazyGitPages[topic] : null;

  if (!gitTopic || !GitComponent) {
    return <Navigate to="/git/git-bash" replace />;
  }

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-64">
          <div className="text-gray-500">Loading...</div>
        </div>
      }
    >
      <GitComponent key={topic} />
    </Suspense>
  );
};

export default GitPage;
