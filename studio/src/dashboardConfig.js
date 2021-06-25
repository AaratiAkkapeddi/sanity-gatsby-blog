export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60d642299b0a881b22d2e277",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ozm9zenf",
                  apiId: "1ba95941-060a-4bcc-ade7-9d4972039853",
                },
                {
                  buildHookId: "60d6422908a118185753cba0",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-629i359v",
                  apiId: "194e4c87-68bb-4ab5-9d84-ee9e21fedc65",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/AaratiAkkapeddi/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-629i359v.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
