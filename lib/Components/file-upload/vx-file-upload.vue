<template>
  <div>
    <template v-if="images.length > 0">
      <div class="grid grid-cols-2 gap-4 mb-2">
        <div
          class="col-4 d-flex flex-column relative"
          v-for="(img, index) in images"
        >
          <img
            :src="img"
            alt=""
            class="rounded-lg"
          />
          <vx-button
            icon
            color="danger"
            size="tiny"
            class="absolute top-1 right-1"
            @click="deleteImage(index)"
          >
            <vx-icon
              size="tiny"
              name="delete"
            ></vx-icon>
          </vx-button>
        </div>
      </div>
    </template>

    <input
      ref="fileInput"
      type="file"
      name="img"
      multiple
      @change="onFileChange"
      class="hidden"
    />

    <div class="grid grid-cols-3 gap-4">
      <vx-button
        class="col-span-2"
        color="gray"
        @click="$refs.fileInput.click()"
        block
      >
        Select files
      </vx-button>
      <vx-button
        color="indigo"
        dark
        block
        @click="save()"
        :loading="loading"
      >
        Upload
      </vx-button>
    </div>
  </div>
</template>

<script>
import VxIcon from '../icon/vx-icon.vue'
import VxButton from '../button/vx-button.vue'
import _ from 'lodash'

export default {
  name: 'vx-file-upload',
  components: { VxButton, VxIcon },
  emits: ['upload-completed'],
  props: {
    model: {
      type: Object,
      required: true,
    },
    currentFiles: {
      type: Array,
      default: null,
    },
    submitUrl: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
      maxSize: 51200,
      files: [],
      images: [],
    }
  },
  mounted() {
    if (this.currentFiles && this.currentFiles.length > 0) {
      // this.$refs.fileInput.files = this.currentFiles
      this.images = this.currentFiles.map((file) => {
        return file.full_url
      })
      this.images = this.currentFiles
    }
  },
  methods: {
    onFileChange(e) {
      const { maxSize } = this
      let uploadedFiles = this.$refs.fileInput.files
      for (let i = 0; i < uploadedFiles.length; i++) {
        let size = uploadedFiles[i].size / maxSize / maxSize
        if (size > 1) {
          alert('file is too big')
          return
        }
        this.files.push(uploadedFiles[i])
      }
      const images = e.target.files
      _.each(images, (file) => {
        if (file.type.match('image.*')) {
          this.images.push(URL.createObjectURL(file))
        } else {
          this.images.push('/img/document.png')
        }
      })
      if (this.type == 'create') {
        this.$emit('input', this.files)
      }
    },
    deleteImage(imageIndex) {
      if (imageIndex > -1) {
        this.files.splice(imageIndex, 1)
        this.images.splice(imageIndex, 1)
        this.$emit('input', this.files)
      }
    },
    save() {
      this.loading = true
      let formData = new FormData()
      for (let i = 0; i < this.files.length; i++) {
        let file = this.files[i]
        formData.append('images[' + i + ']', file)
      }

      axios
        .post(this.submitUrl, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          this.loading = false
          this.$emit('upload-completed')
        })
        .catch((error) => {
          this.loading = false
          console.log(error)
        })
    },
  },
}
</script>
