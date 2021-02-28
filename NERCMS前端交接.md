# NERCMS 前端



### 需求描述

- **实现一个web端的点云预览编辑网站，用于做缺陷检测等工程应用。**
  1. 实现pcd（点云），ply（Mesh）几种文件的上传，下载，预览
  2. 实现简单的工程管理：一个工程包含若干个pcd/ply/图像等资源文件，可以向工程中添加/删除文件
  3. 实现对工程的层级目录可视化（树形结构，类似ps中的图层）
  4. 实现对pcd、ply文件的一些基本操作，如降噪，滤波等（*对前端而言，只需统计参数并发送至后端，获取新的pcd/ply展示即可）
- **目前已经实现一些基础框架**
  1. 对pcd/ply文件使用three.js进行渲染展示，支持改变视角
  2. 使用vuex对当前打开工程信息进行全局数据存储
  3. 使用element ui简单实现页面上方菜单栏
  4. 使用vue slot实现了点击菜单项弹出对话框的模板
  5. 使用element ui的树形空间简单实现工程树预览
  6. 新建/打开工程等功能与后端连接
- **目前还未实现或有bug的一些功能**
  	1. pcd/ply文件的上传下载与后端的对接
   	2. 一些样式表问题
   	3. 降噪，滤波等操作与后端的对接
   	4. 树形结构中的删除选择操作





### 项目结构

​	**工程目录**

- src/assets：一些pcd测试文件以及用来绘制它们的Renderer.js（Three.js实现，libs与util是依赖库）

- src/components：主要的控件目录
  - Dialogs：弹出对话框相关
    - DialogTemplate：使用element ui中的dialog实现了一个对话框的模板，后续可以替换掉element ui
    - DialogForm：一个表单组件，可以批量产生一组input
    - AllDialogs：对话框的container，当选择哪个菜单的时候就将对应的对话框显示出来
    - DialogMixin：为了省略一些重复代码写了个mixin
    - PCD和Project目录：对话框的实例目录，实现对应的功能
  - SideBar
    - ProjectTreeForm：用于左上工程树中element ui的container，后续也可以替换掉element ui
    - SideBarTags：左侧栏的tag组件
  - AttributeMenu：左下的属性栏
  - ProjectTreeMenu：左上的Tree栏
  - ToolMenu：菜单栏
  - TopMenu：菜单栏上方显示工程名的那个栏
  - Viewport：渲染点云的位置
- src/scss：一些常用的scss变量
- src/store：vuex相关
  - modules/Dialog：储存当前打开了哪个对话框
  - ProjectInfo：当前打开的工程信息



### 实现逻辑

**对话框**

- 使用vuex存储当前打开的是哪个对话框，在Alldialog中通过v-is展示对话框

- 在实现其他对话框时，可以直接先引入mixin，Jedialog，参照其他已实现的对话框实现即可

**工程信息**

- vuex中保存了当前打开的工程信息，使用时可以参考topMenu中获取当前工程名这一案例

  ![image-20210228134155732](C:\Users\jeromeguan\AppData\Roaming\Typora\typora-user-images\image-20210228134155732.png)



### 目前效果

![image-20210228134803444](C:\Users\jeromeguan\AppData\Roaming\Typora\typora-user-images\image-20210228134803444.png)

