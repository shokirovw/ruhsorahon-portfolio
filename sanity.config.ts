import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import project from './sanity/schemas/pages-schema';
import blog from './sanity/schemas/blog-schema';

const config = defineConfig({
    projectId: "jbvmfa1g",
    dataset: "production",
    title: "ruhsorahon-portfolio",
    apiVersion: "2023-07-07",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {types: [project, blog]}
});

export default config;