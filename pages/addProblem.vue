<template>
  <!--两列布局-->
  <div class="qa-submit-form">
    <form action="" class="sui-form">
      <div class="input-title">
        <input
        v-model="title"
          type="text"
          placeholder="标题：一句话说清问题，用问号结尾"
          class="input-xfat input-xxlarge title"
        />
      </div>
      <el-checkbox-group v-model="labelId" :min="1" :max="4">
        <el-checkbox v-for="label in labelList" :label="label" :key="label.id">{{
          label.labelname
        }}</el-checkbox>
      </el-checkbox-group>
      <div class="editor">
        <div
          class="quill-editor"
          :content="content"
          @change="onEditorChange($event)"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @ready="onEditorReady($event)"
          v-quill:myQuillEditor="editorOption"
        ></div>
        <div class="clearfix"></div>
      </div>
      <div class="submit">
        <span><a class="sui-btn btn-release" @click="save">发布问题</a></span>
      </div>
      <div class="clearfix"></div>
    </form>
  </div>
</template>
<script>
import '~/assets/plugins/normalize-css/normalize.css'
import '~/assets/plugins/yui/cssgrids-min.css'
import '~/assets/plugins/sui/sui.min.css'
import '~/assets/plugins/sui/sui-append.min.css'
import '~/assets/plugins/font-awesome/css/font-awesome.min.css'
import '~/assets/css/widget-base.css'
import '~/assets/css/widget-head-foot.css'
import '~/assets/css/page-sj-qa-submit.css'

import labelApi from '@/api/label'
import { quillRedefine } from 'vue-quill-editor-upload'
import problemApi from '@/api/problem'

export default {
  created () {
    this.getLabel(),
      this.editorOption = quillRedefine({
        uploadConfig: {
          action: 'http://121.5.129.126:8001/file/images',
          res: (response) => {
            return response.data
          },
          name: 'file'  //图片上传参数
        }
      })
  },
  data () {
    return {
      content: '',
      title: '',
      labelId: [],
      operation: false,
      labelList: []
    }
  },
  methods: {
    getLabel () {
      labelApi.toplist().then(res => {
        this.labelList= res.data.data
      })
    },
    onEditorBlur (editor) {
      console.log('editor blur!', editor)
    },
    onEditorFocus (editor) {
      console.log('editor focus!', editor)
    },
    onEditorReady (editor) {
      console.log('editor ready!', editor)
    },
    onEditorChange ({ editor, html, text }) {
      console.log('editor change!', editor, html, text)
      this.content = html
    },
    save () {
      problemApi.save({ content: this.content, title: this.title, labelList: this.labelId}).then(res => {
          this.$message({
          message: res.data.msg,
          type: (res.data.code === 200 ? 'success' : 'error')
        })
      })
    },
  }
}
</script>


<style>
.quill-editor {
  min-height: 400px;
  overflow-y: auto;
}
</style>
