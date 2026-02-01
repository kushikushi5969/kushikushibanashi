import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // プリフライトCSSを使用
  preflight: true,

  // CSSを生成するファイルのパス
  include: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],

  // 除外するファイル
  exclude: [],

  // テーマのカスタマイズ（後で作品オマージュ用に拡張可能）
  theme: {
    extend: {},
  },

  // 出力先
  outdir: 'styled-system',

  // JSX統合を有効化
  jsxFramework: 'react',
})
