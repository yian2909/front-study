vb<template>
    <div class="con">
      <div class="left">
        <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="课表" name="1">
          <div>
            具体课表信息
          </div>
        </el-collapse-item>
        <el-collapse-item title="今日代办" name="2">
          <div>
            具体代办事项
          </div>
        </el-collapse-item>
        <el-collapse-item title="考试安排" name="3">
          <div>
            具体考试安排
          </div>
        </el-collapse-item>
      </el-collapse>
      </div>
      <div class="right">
        <h2>学生请假</h2>
        <div>
          <el-form :model="form" label-width="auto" style="max-width: 600px">
            <el-form-item label="学生信息">
              <el-input :disabled = "true" placeholder="张三 1班 20220101"/>
            </el-form-item>
            <el-form-item label="请假类型">
              <el-select v-model="form.region" placeholder="请选择请假类型">
                <el-option label="病假" value="shanghai" />
                <el-option label="事假" value="beijing" />
              </el-select>
            </el-form-item>

        <el-form-item label="开始时间">
            <el-col :span="11">
              <el-date-picker v-model="form.date1" type="date" placeholder="请选择开始日期" style="width: 100%"/>
            </el-col>
          <el-col :span="2" class="text-center">
            <span class="text-gray-500">-</span>
          </el-col>
          <el-col :span="11">
            <el-time-picker v-model="form.date2" placeholder="请选择开始时间" style="width: 100%"/>
          </el-col>
        </el-form-item>

        <el-form-item label="结束时间">
            <el-col :span="11">
              <el-date-picker v-model="form.date3" type="date" placeholder="请选择结束日期" style="width: 100%"/>
            </el-col>
          <el-col :span="2" class="text-center">
            <span class="text-gray-500">-</span>
          </el-col>
          <el-col :span="11">
            <el-time-picker v-model="form.date4" placeholder="请选择结束时间" style="width: 100%"/>
          </el-col>
        </el-form-item>

    <el-form-item label="是否占课">
      <el-radio-group v-model="form.resource">
        <el-radio value="Sponsor">占课</el-radio>
        <el-radio value="Venue">不占课</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="请假理由">
      <el-input v-model="form.desc" type="textarea" />
    </el-form-item>
    <el-form-item class="button">
      <el-button type="primary" @click="onSubmit">提交</el-button>
      <!-- <el-button>取消</el-button> -->
    </el-form-item>
  </el-form>
        </div>
      </div>
      
    </div>
  </template>
  
<script lang="ts" setup>
  import { ref,reactive } from 'vue'
  import { ElMessage } from 'element-plus'
  
  const activeNames = ref(['1'])
  const handleChange = (val: string[]) => {
    console.log(val)
  }

  const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  date3: '',
  date4: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const onSubmit = () => {
  ElMessage({
    message: '提交成功!',
    type: 'success',
  })
}

</script>
  
<style scoped>
    .con{
      display: flex;
    }
    .left{
      flex: 1;
      height: 800px;
    }
    .right{
      flex: 3;
      background-color: #c0f9d6;
      padding: 50px;
    }
    .button{
      padding: 20px;
    }
</style>