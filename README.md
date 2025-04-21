# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



## NewApi for updated news create your account and get the data 
## browser Extention
to viue  json response in wright formate we use browser extention called - JSONVeu

## google search central for testing website seo 

## if you want to add favicon icon for your website then you canuse favicon generator and generate it and extact all file ans save  copy them into your project folder  public folder ke under and in index.html you can set anuy one of the icon from all 

```<link rel="icon" type="image/svg+xml" href="/public\apple-touch-icon.png" />```

## for react router link 
https://v5.reactrouter.com/web/guides/quick-start follow all the steps to set the router 

## When i was using react i got error you can not use swich because it is replace by routes
You're getting this error because Switch has been removed from react-router-dom in version 6. Instead, you should use Routes and Route.
If you're using version 6+, ensure you're following the correct syntax.

## <Routes>
  <Route path="/home"> <News pageSize={6} category="general"/> </Route> 
</Routes>
err == 
Your error is caused by the incorrect use of <Route>. In React Router v6, components must be passed as the element prop inside <Route>, rather than as children. use like this 
<Route path="/technology" element={<News pageSize={6} category="technology"/>} />

## testing ke liye ki Api se kesa data aaya hai check [ newsResponse.json ] file in the project

##✔ Fixed defaultProps syntax
✔ Ensured componentDidUpdate fetches new results when searchQuery changes
✔ Handled cases where searchQuery is empty (avoided q= in API URL)
✔ Fixed pagination logic (page + 1 > totalResults issue)

Now, when you enter a search query, it will update results dyna ar

are updated

