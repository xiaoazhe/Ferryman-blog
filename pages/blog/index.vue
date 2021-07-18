<template>
  <!--两列布局-->
  <div class="wrapper">
    <div class="submit-headline">
      <div class="left-box">
        <h3 class="tit">
          <span>发布博客</span>
        </h3>
        <el-form class="sui-form form-horizontal">
          <div class="control-group">
            <div class="controls title-input">
              <input type="text" v-model="dataForm.title" placeholder="标题" />
            </div>
          </div>

          <div class="editor">
            <mavon-editor
              ref="md"
              v-model="dataForm.content"
              @imgAdd="imgAdd"
              @imgDel="imgDel"
              style="min-height: 500px"
            />
          </div>
          <div class="submit">
            <el-button @click="blogAdd" class="sui-btn btn-xlarge btn-success">
              提交
            </el-button>
          </div>
        </el-form>
      </div>
      <div class="right-tips">
        <h3>发帖指南</h3>
        <ul>
          <li>独立思考、自由探索</li>
          <li>发布的内容和互联网、编程开发、产品设计有关</li>
          <li>标题能准确描述的内容，不要发重复的内容</li>
          <li>客观投票，确保你看过这篇内容</li>
          <li>如果你遇到了具体的编程难题，请到 问答平台 提问</li>
          <li>保持友善，禁止任何形式的广告、SEO 推广</li>
          <li>遵循 用户服务条款</li>
        </ul>
      </div>
    </div>
    <el-dialog title="填写信息" :visible.sync="dialogVisible">
      <el-form >
        <el-form-item label="上传封面">
          <el-upload
            class="upload-cover"
            drag
            action="http://localhost:8800/file/fdfsUploadImage"
            multipartFile
            :on-success="uploadCover"
            :headers="importHeaders"
          >
            <i class="el-icon-upload" v-if="dataForm.fileUid === ''" />

            <img v-else :src="dataForm.fileUid" width="360px" height="180px" />
          </el-upload>
        </el-form-item>
        
        <el-form-item label="分类" prop="typeName">
          <el-select
            v-model="dataForm.typeName"
            size="small"
            placeholder="请选择"
            style="width: 150px"
          >
            <el-option
              v-for="item in typeData"
              :key="item.id"
              :label="item.name"
              :value="item.id"
              >{{ item.name }}</el-option
            >
          </el-select>
        </el-form-item>

        <el-form-item label="摘要" prop="summary">
          <el-input
            type="textarea"
            v-model="dataForm.summary"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
      </el-form>
    </el-dialog>
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
import '~/assets/css/page-sj-headline-submit.css'
import fileApi from '@/api/file'
import type from '@/api/type'
import blog from '@/api/blog'
import { getUser } from '@/utils/auth'

export default {
  data () {
    return {
      dataForm: {
        uid: 0,
        title: '',
        summary: '',
        content: '',
        fileUid: ''
      },
      typeData: [],
      dialogVisible: false,
      importHeaders: {"Authorization" : "Bearer " + getUser().token}
    }
  },
  created () {
    this.getTypeList()
  },
  methods: {
 onSubmit() {
   blog.saveBlog(this.dataForm).then(res => {
     this.dialogVisible= false
        this.$message({
          message: res.data.msg,
          type: (res.data.code === 200 ? 'success' : 'error')
        })
      })
      },
    uploadCover (response) {
      this.dataForm.fileUid = response.data;
    },

    blogAdd: function () {
      this.dialogVisible = true
      // location.href='/manager'
    },
    getTypeList () {
      type.findAll().then(res => {
        this.typeData = res.data.data
      })
    },
    imgAdd (pos, $file) {
      // 第一步.将图片上传到服务器.
      var formdata = new FormData();
      formdata.append('file', $file);
      fileApi.addfdfsUploadImage(formdata).then((res) => {
        let _res = res.data;
        // 第二步.将返回的url替换到文本原位置[外链图片转存失败(img-v2eG7egk-1562220599730)(0)] -> [外链图片转存失败(img-RmlJ1kIp-1562220599733)(url)]
        this.$refs.md.$img2Url(pos, _res.data);
      })
    },
    imgDel (pos) {
      var formdata = new FormData()
      formdata.append('url', pos[0])
      fileApi.deletefdfsImage(formdata).then((res) => {
        delete this.imgFile[pos]
      })
    }
  }
}
</script>
