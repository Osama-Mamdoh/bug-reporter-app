import { Bug, BugSeverity, Releases } from '@shared/models';

// Function to generate a random bug record
const generateBug = (id: number): Bug => {
  const randomReleaseIndex = Math.floor(
    Math.random() * Object.keys(Releases).length
  );
  const releaseKey = Object.keys(Releases)[
    randomReleaseIndex
  ] as keyof typeof Releases;
  const release = Releases[releaseKey];

  const randomSeverityIndex = Math.floor(
    Math.random() * Object.keys(BugSeverity).length
  );
  const severityKey = Object.keys(BugSeverity)[
    randomSeverityIndex
  ] as keyof typeof BugSeverity;
  const severity = BugSeverity[severityKey];

  const startOf2023 = new Date(Date.UTC(2023, 0, 1));
  const today = new Date();

  return {
    id: id,
    title: `Issue #${id}: Unexpected behavior in ${release}`,
    severity,
    release,
    link: `https://bugtracker.com/bug-${id}`,
    description: `Steps to reproduce:\n1. Perform X action.\n2. Observe Y unexpected behavior.`,
    stackTrace: 'Stack trace not yet available.',
    createdBy: `Tester-${Math.floor(Math.random() * 100)}`,
    createdAt: new Date(
      startOf2023.getTime() +
        Math.random() * (today.getTime() - startOf2023.getTime())
    ),
  };
};

export const BUGS: Bug[] = Array.from({ length: 100 }, (v, i) =>
  generateBug(i + 1)
);
