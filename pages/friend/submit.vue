<template>
  <!--两列布局-->
  <div class="qa-submit-form">
    <el-form action="" class="sui-form">
         <el-form-item label="上传封面" >
          <el-upload
            class="upload-cover"
            drag
            action="http://localhost:8001/file/fdfsUploadImage"
            multipartFile
            :on-success="uploadCover"
            :headers="importHeaders"
          >
            <i class="el-icon-upload" v-if="fileUid === ''" />

            <img v-else :src="fileUid" width="360px" height="180px" />
          </el-upload>
        </el-form-item>
      <div class="input-title">
        <input
          v-model="title"
          type="text"
          placeholder="标题：一句话说清问题"
          class="input-xfat input-xxlarge title"
        />
      </div>
      <div class="input-title">
        <input
          v-model="url"
          type="text"
          placeholder="url"
          class="input-xfat input-xxlarge title"
        />
      </div>

      <input
        v-model="nickName"
        type="text"
        placeholder="作者名"
        class="input-xfat input-xxlarge title"
      />
      <input
        v-model="email"
        type="text"
        placeholder="邮箱"
        class="input-xfat input-xxlarge title"
      />
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
        <span><a class="sui-btn btn-release" @click="save">申请友情链接</a></span>
      </div>
      <div class="clearfix"></div>
    </el-form>
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

import { quillRedefine } from 'vue-quill-editor-upload'
import friendApi from '@/api/friend'
import { getUser } from '@/utils/auth'
export default {
  created () {
    this.editorOption = quillRedefine({
      uploadConfig: {
        action: 'http://localhost:8001/file/images',
        res: (response) => {
          return response.msg
        },
        name: 'file'  //图片上传参数
      }
    })
  },
  data () {
    return {
      content: '',
      title: '',
      url:'',
      nickName:'',
      summary:'',
      email:'',
      fileUid:'',
      importHeaders: {"Authorization" : "Bearer " + getUser().token}
    }
  },
  methods: {
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
      friendApi.save({ summary: this.content, title: this.title, url: this.url,
       nickName: this.nickName, email: this.email, fileUid: this.fileUid }).then(res => {
        this.$message({
          message: res.data.msg,
          type: (res.data.code === 200 ? 'success' : 'error')
        })
        location.href='/friend'
      })
    },
     uploadCover (response) {
      this.fileUid = response.data;
    },
  }
}
</script>


<style>
.quill-editor {
  min-height: 400px;
  overflow-y: auto;
}
.el-form-item{
  text-align: center;
}
</style>
