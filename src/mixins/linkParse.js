import * as linkify from 'linkifyjs';
import linkifyElement from 'linkifyjs/element';

import plugin from 'linkifyjs/plugins/mention';
plugin(linkify);

export default {
  props: {
    linkOptions: {
      type: Object,
      required: true
    }
  },
  mounted() {
    if (this.$refs['message-content']) {
      linkifyElement(this.$refs['message-content'], this.linkOptions, document)
    }
  },
}