# 2024 경북대 대동제 '하푸르나 웹페이지'
![카드뉴스_1](https://github.com/LikeLion-KNU/knufest-frontend/assets/80188977/471dd2c9-a476-42dd-a3ad-bc79fd62976f) ![카드뉴스_2](https://github.com/LikeLion-KNU/knufest-frontend/assets/80188977/016a9f21-0913-4fed-b418-fc69edb29f50) ![카드뉴스_3](https://github.com/LikeLion-KNU/knufest-frontend/assets/80188977/d7b444ce-1593-4e20-a4cf-5f423919943d) ![카드뉴스_4](https://github.com/LikeLion-KNU/knufest-frontend/assets/80188977/3e17f361-b63a-46aa-9c51-2812d8009bf4) ![카드뉴스_5](https://github.com/LikeLion-KNU/knufest-frontend/assets/80188977/2b25f3b3-d9f9-40f8-9c43-480ede42985d) ![카드뉴스_6](https://github.com/LikeLion-KNU/knufest-frontend/assets/80188977/d013e896-3390-4de8-bf02-25d9fb66e805)




# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
