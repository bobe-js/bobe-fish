[中文](#波-比-🐟) &nbsp;[English](#Bobe-🐟)

# 波 比 🐟

> 一款适用于 Visual Studio Code 的深色紫色主题。

![Version](https://img.shields.io/badge/version-1.0.5-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![VS Code](https://img.shields.io/badge/VS%20Code-%5E1.17.0-blue)

---

## 预览

### 主题列表

| 黑色主题 | 彩色主题 |
| --- | --- |
| <img alt="Bobe Fish Black" src="https://github.com/bobe-js/bobe-fish/blob/master/imgs/black.png?raw=true" /> | <img alt="Bobe Fish Purple" src="https://github.com/bobe-js/bobe-fish/blob/master/imgs/purple.png?raw=true" /> |
| <img alt="Bobe Fish Black High Contrast" src="https://github.com/bobe-js/bobe-fish/blob/master/imgs/black-high-constant.png?raw=true" /> | <img alt="Bobe Fish Blue" src="https://github.com/bobe-js/bobe-fish/blob/master/imgs/blue.png?raw=true" /> |

### Bobe

<img src="https://github.com/bobe-js/bobe-fish/blob/master/imgs/bobe.png?raw=true"/>

### Vue

<img src="https://github.com/bobe-js/bobe-fish/blob/master/imgs/vue.png?raw=true" />

### React

<img src="https://github.com/bobe-js/bobe-fish/blob/master/imgs/react.png?raw=true"/>

## 安装

1. 打开 VS Code 的 **扩展** 侧边栏（`Cmd+Shift+X`）
2. 搜索 `Bobe Fish`
3. 点击 **安装**
4. 打开命令面板（`Cmd+Shift+P`），选择 **Preferences: Color Theme** -> `Bobe Fish`

也可以直接从 `.vsix` 文件安装：

```bash
code --install-extension bobe-fish-0.0.1.vsix
```

## 开发

主题 JSON 文件由 `scripts/` 下的文件生成。

- 修改 `scripts/theme-palettes.ts`，通过中文用途名调整调色板颜色。
- 修改 `scripts/bobe-fish-theme.template.json`，调整调色板 token 的使用位置。
- 修改 `scripts/build-themes.ts`，新增、移除或重命名主题变体。
- VS Code 主题选择器会按展示名称排序，所以请让 `contributes.themes[].label` 和生成主题的 `name` 保持你想要的命名排序风格。

```bash
# 安装依赖
pnpm install

# 安装主题脚本使用的 Bun 运行时
pnpm run setup

# 生成主题 JSON 文件
pnpm run build:themes

# 打包扩展
pnpm run build

# 发布到 Marketplace
pnpm run pub
```

## 许可证

MIT — 详情见 [LICENSE](./LICENSEt)。

---

[中文](#波 比 🐟) &nbsp;[English](#Bobe 🐟)

# Bobe 🐟

> A Dark purple Theme for Visual Studio Code.

![Version](https://img.shields.io/badge/version-1.0.3-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![VS Code](https://img.shields.io/badge/VS%20Code-%5E1.17.0-blue)

---

## Preview

### Theme List

| Black Themes | Colorful Themes |
| --- | --- |
| <img alt="Bobe Fish Black" src="https://github.com/bobe-js/bobe-fish/blob/master/imgs/black.png?raw=true" /> | <img alt="Bobe Fish Purple" src="https://github.com/bobe-js/bobe-fish/blob/master/imgs/purple.png?raw=true" /> |
| <img alt="Bobe Fish Black High Contrast" src="https://github.com/bobe-js/bobe-fish/blob/master/imgs/black-high-constant.png?raw=true" /> | <img alt="Bobe Fish Blue" src="https://github.com/bobe-js/bobe-fish/blob/master/imgs/blue.png?raw=true" /> |

### Bobe

<img src="https://github.com/bobe-js/bobe-fish/blob/master/imgs/bobe.png?raw=true"/>

### Vue

<img src="https://github.com/bobe-js/bobe-fish/blob/master/imgs/vue.png?raw=true" />

### React

<img src="https://github.com/bobe-js/bobe-fish/blob/master/imgs/react.png?raw=true"/>

## Installation

1. Open **Extensions** sidebar in VS Code (`Cmd+Shift+X`)
2. Search for `Bobe Fish`
3. Click **Install**
4. Open the Command Palette (`Cmd+Shift+P`) and select **Preferences: Color Theme** → `Bobe Fish`

Or install directly from the `.vsix` file:

```bash
code --install-extension bobe-fish-0.0.1.vsix
```

## Development

Theme JSON files are generated from the files in `scripts/`.

- Edit `scripts/theme-palettes.ts` to change palette colors by Chinese usage names.
- Edit `scripts/bobe-fish-theme.template.json` to change where palette tokens are used.
- Edit `scripts/build-themes.ts` to add, remove, or rename theme variants.
- The VS Code theme picker is sorted by the displayed theme name, so keep `contributes.themes[].label` and the generated theme `name` in the order-friendly naming style you want.

```bash
# Install dependencies
pnpm install

# Install Bun runtime used by theme scripts
pnpm run setup

# Generate theme JSON files
pnpm run build:themes

# Package the extension
pnpm run build

# Publish to marketplace
pnpm run pub
```

## License

MIT — see [LICENSE](./LICENSEt) for details.
