export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/VSCode/workspace/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"用户帮助文档"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/VSCode/workspace/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
