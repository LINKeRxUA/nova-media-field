<template>
  <div>
    <div ref="modals">
      <media-browsing-modal
        :field="field"
        :multipleSelect="multipleSelect"
        :files.sync="files"
        :uploadOnly="true"
        :isModalOpen.sync="isModalOpen"
        :chosenCollection.sync="chosenCollection"
        :activeFile.sync="activeFile"
        :showUploadArea.sync="showUploadArea"
        @updateFiles="updateFiles"
        :loadingMediaFiles.sync="loadingMediaFiles"
        :selectedFiles.sync="selectedFiles"
      />
    </div>

    <button type="button" v-on:click="openMediaBrowsingModal" class="btn btn-default btn-primary whitespace-no-wrap">
      {{ __('Upload media') }}
    </button>
  </div>
</template>

<script>
import { FormField, HandlesValidationErrors } from 'laravel-nova';
import debounce from './../debounce';

function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

export default {
  mixins: [FormField, HandlesValidationErrors],

  props: ['field', 'onUploadFinished'],

  data() {
    return {
      files: [],
      isModalOpen: false,
      activeFile: void 0,
      selectedFiles: [],
      chosenCollection: null,
      loadingMediaFiles: false,
      showUploadArea: true,
    };
  },

  watch: {
    isModalOpen: function (value) {
      if (!value) {
        this.files = [];
      }
    },
  },

  computed: {
    multipleSelect() {
      return this.field.multiple;
    },
  },

  methods: {
    updateFiles(file) {
      this.loadingMediaFiles = false;
      this.files.splice(this.files.map(file => file.uploading).indexOf(true), 1);
      this.files.push(file);
      this.updateMedia();
    },

    updateMedia: debounce(function () {
      this.onUploadFinished();
      this.$toasted.show('Files have been successfully uploaded!', { type: 'success' });
    }, 1000),

    openMediaBrowsingModal() {
      this.isModalOpen = true;
    },
  },
};
</script>
