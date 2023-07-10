import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import project from './sanity/schemas/pages-schema';
import blog from './sanity/schemas/blog-schema';
import article from './sanity/schemas/article-schema';
import video from './sanity/schemas/video-schema';

const config = defineConfig({
    projectId: "jbvmfa1g",
    dataset: "production",
    title: "ruhsorahon-portfolio",
    apiVersion: "2023-07-07",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {types: [project, blog, article, video]}
});

export default config;