import { GITHUB_TOKEN } from '$lib/variables';

export interface PinnedRepository {
  name: string;
  description: string;
  url: string;
  stargazerCount: number;
  languages: {
    name: string;
    color: string
  }[];
  repositoryTopics: {
    name: string;
  }[];
}

export async function getPinnedRepositories(fetch: (info: RequestInfo, init?: RequestInit) => Promise<Response>): Promise<PinnedRepository[]> {
  const query = `{
    user(login: "trs") {
      pinnedItems(first: 10) {
        nodes {
          ... on Repository {
            name
            description
            url
            stargazerCount
            languages(first: 10) {
              nodes {
                name
                color
              }
            }
            repositoryTopics(first: 5) {
              nodes {
                topic {
                  name
                }
              }
            }
          }
        }
      }
    }
  }`;

  const result = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${GITHUB_TOKEN}`
    },
    body: JSON.stringify({query})
  });

  if (!result.ok) {
    return [];
  }

  const json = await result.json();

  return json.data.user.pinnedItems.nodes.map((node) => {
    return {
      ...node,
      description: node.description.replace(/:.+:/g, ''),
      languages: node.languages.nodes.map((node) => node),
      repositoryTopics: node.repositoryTopics.nodes.map((node) => node.topic)
    }
  })
}