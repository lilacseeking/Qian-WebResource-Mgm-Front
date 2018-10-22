<template>
  <section>
    <!-- 搜索栏-->
    <div>
      <el-form :model="optionParam" :label-position="labelPosition" label-width="35%">
        <el-row :span = "8">
          <el-col>
            <el-form-item>
              <el-input label="姓名" v-model="optionParam.name" size="small" placeholder="请输入" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item>
              <el-input label="用户名" v-model="optionParam.username" size="small" placeholder="请输入" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item>
              <el-input label="手机号" v-model="optionParam.mobile" size="small" placeholder="请输入" clearable></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span = "8">
          <el-col>
            <el-form-item>
              <el-input label="邮箱" v-model="optionParam.email" size="small" placeholder="请输入" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item>
              <el-input label="创建日期" v-model="optionParam.gmtCreate" size="small" placeholder="请输入" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item>
              <el-input label="年龄" v-model="optionParam.age" size="small" placeholder="请输入" clearable></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span = "8">
          <el-col>
            <el-form-item>
              <el-input label="生日" v-model="optionParam.birthday" size="small" placeholder="请输入" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item>
              <el-input label="性别" v-model="optionParam.gender" size="small" placeholder="请输入" clearable></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-button type="success" size="small" @click="getUserListByPage" >搜   索</el-button>
          <el-button type="error" size="small" @click="resetParam" >清   空</el-button>
        </el-row>
      </el-form>
    </div>

    <!--数据栏-->
    <div>
      <el-table :data="userListByPage" fit v-loading="listLoading" style="width: 100%;" border>
        <el-table-column type="selection" align="center"></el-table-column>
        <el-table-column prop="id" label="Id" align="center"></el-table-column>
        <el-table-column prop="platformNo" label="姓名" align="center"></el-table-column>
        <el-table-column prop="partnerPlatformNo" label="用户名" align="center"></el-table-column>
        <el-table-column prop="outerService" label="性别" align="center"></el-table-column>
        <el-table-column prop="service" label="手机号" align="center"></el-table-column>
        <el-table-column prop="name" label="邮箱" align="center"></el-table-column>
        <el-table-column prop="enumName" label="生日" align="center"></el-table-column>
        <el-table-column prop="status" label="注册时间" align="center"></el-table-column>
        <el-table-column prop="status" label="创建日期" align="center"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="Disable(scope.row.platformNo,scope.row.partnerPlatformNo,scope.row.enumName,scope.row.status)" v-if="scope.row.status=='Y'" type="warning">修  改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </section>
</template>

<script>
    import {userMgmService} from "./userMgmService";

    export default {
      name: "userMgm",
      data(){
        return {
          //数据加载图标
          listLoading:false,
          // 标签对齐方式
          labelPosition:'right',
          // 查询过滤器
          filter:{
            rows:10,
            page:1,
            optionParam:{
              name:'',
              username:'',
              mobile:'',
              email:'',
              gmtCreate:[],
              age:'',
              birthday:'',
              gender:'',
              achieve:''
             },
           },
          // 用户列表
          userListByPage:[]
        }
      },
      mounted(){
        this.$nextTick(()=>{
          this.getUserListByPage();
        });
      },
      methods: {
      //  获取用户列表
        getUserListByPage(){
          this.listLoading = true;
          userMgmService.getUserListByPage({params:this.filter}).then(res =>{
            if(res.code =="0"){
              this.userListByPage = res.content;
            }
            else{
              this.$message.error('查询异常');
            }
            this.listLoading = false;
          })
        },
        //  清空查询参数
        resetParam(){
          this.filter.optionParam = {}
        }
      },
      watch: {}
    }
</script>

<style scoped>

</style>
