import { config } from "@/data/config";

// unauthenticated github api = 60 req/hr per ip; 5min cache -> ~12 req/hr
export async function getGithubStars(): Promise<number> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${config.githubUsername}/${config.githubRepo}`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 300 },
      },
    );
    if (!res.ok) {
      return 0;
    }
    const data = await res.json();
    if (typeof data.stargazers_count !== "number") {
      return 0;
    }
    return data.stargazers_count;
  } catch {
    return 0;
  }
}
