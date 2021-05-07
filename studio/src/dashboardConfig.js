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
                    "60956dcb28f84b8c463411d7",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-cia2pkns",
                  apiId: "45911b2c-0ecc-4158-8076-cebdd62e8d44",
                },
                {
                  buildHookId: "60956dcb34e2e993452a8ed7",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-iuw41pon",
                  apiId: "2bd2414b-cfaf-4811-8816-1f6a4fa18152",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/tunkytime/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-iuw41pon.netlify.app",
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
