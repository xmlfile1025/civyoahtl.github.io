import { h, onMounted, watch, nextTick } from 'vue'
import Theme from 'vitepress/theme'
import mediumZoom from 'medium-zoom';
import { useRoute } from 'vitepress';

import RegisterSW from './components/RegisterSW.vue'

import './index.css';

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'layout-bottom': () => h(RegisterSW)
    })
  },
  setup() {
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' });
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
}
