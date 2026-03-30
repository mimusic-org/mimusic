// exports in this file are exposed to themes and md files via 'vitepress'
// so the user can do `import { useRoute, useData } from 'vitepress'`
// composables
export { useData, dataSymbol } from './app/data';
export { useRoute, useRouter } from './app/router';
// utilities
export { inBrowser, onContentUpdated, defineClientComponent, withBase, getScrollOffset, _escapeHtml } from './app/utils';
// components
export { Content } from './app/components/Content';
