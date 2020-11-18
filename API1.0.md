# [接口文档]()

地址：xxx.xxx.xxx.xxx:8883

## 1.工程

### 1.1创建工程

```
POST/nr/project/create
```

参数：

```
name: "project1"
```

返回：

```
{
  "code": 0,
    "msg": "成功",
    "data": {
        projectId: "1603878885167648890"
		name：“projec1”
		createTime: "2020-10-28 17:54:53"
		updateTime: "2020-10-28 17:54:53"
    }
}

```



### 1.2查询工程(ID)

```
POST/nr/project/find/id
```

参数

```
id:"1603878885167648890"
```

返回：

```
{
  "code": 0,
    "msg": "成功",
    "data": {
        projectId: "1603878885167648890"
		name：“projec1”
		createTime: "2020-10-28 17:54:53"
		updateTime: "2020-10-28 17:54:53"
    }
}
```



### 1.3查询工程（工程名）

```
POST/nr/project/find/name
```

参数：

```
name：“projec1”
```

返回：

```
{
  "code": 0,
    "msg": "成功",
    "data": {
        projectId: "1603878885167648890"
		name：“projec1”
		createTime: "2020-10-28 17:54:53"
		updateTime: "2020-10-28 17:54:53"
    }
}
```



### 1.4更新工程修改时间

```
POST/nr/project/update
```

参数

```
id: "1603878885167648890"
```

返回：

```
{
  "code": 0,
    "msg": "成功",
    "data": {
        projectId: "1603878885167648890"
		name：“projec1”
		createTime: "2020-10-28 17:54:53"
		updateTime: "2020-11-06 16:58:43"
    }
}
```



### 1.5查询所有工程

```
POST/nr/project/find/list
```

参数：

```
null
```

返回

```
{
  "code": 0,
    "msg": "成功",
    "data": {
        projectId: "1603878885167648890"
		name：“projec1”
		createTime: "2020-10-28 17:54:53"
		updateTime: "2020-11-06 16:58:43"
    },
     {
        projectId: "1604819821726945659"
		name：“Test2”
		createTime: "2020-11-08 15:17:11"
		updateTime: "2020-11-08 15:17:11"
    }
}
```

### 1.6移除工程

### 

```
POST/nr/project/delete
```

参数：

```
 projectId: "1603878885167648890"
```

返回：

```
{
  "code": 0,
    "msg": "成功",
    "data": {
    }
}
```



## 2.图像

### 2.1创建图像

```
POST/nr/image/create
```

参数：

```
DocumentsId: "XXX/XXX/XXX.png"
```

返回：

```
{
  "code": 0,
    "msg": "成功",
    "data": {
        pictureId: "1603878885167648890"
		documentsId：“xxx/xxx/xxx.png”
    }
}
```

### 2.2图像去噪

### 2.3图像增强

### 2.4打开图像

### 2.5移除图像

```
POST/nr/image/delete
```

参数：

```
 pictureId: "1603878885167648890"
```

返回：

```
{
  "code": 0,
    "msg": "成功",
    "data": {
    }
}
```

## 3.点云

### 3.1生成点云

### 2.1创建图像

```
POST/nr/pointCloud/create
```

参数：

```
DocumentsId: "XXX/XXX/XXX.pcl"
projectId: "1603878885167648890"
```

返回：

```
{
  "code": 0,
    "msg": "成功",
    "data": {
        pointCloudId: "1603878885277648890"
		documentsId：“xxx/xxx/xxx.pcl”
		projectId: "1603878885167648890"
    }
}
```

### 

### 3.2打开点云

```
POST/nr/pointCloud/open
```

参数：

```
pointCloudId: "1603878885277648890"
```

返回：

```
{
  "code": 0,
    "msg": "成功",
    "data": {
        pointCloudId: "1603878885277648890"
		documentsId：“xxx/xxx/xxx.pcl”
		projectId: "1603878885167648890"
		
    }
}
```



### 3.3点云去噪

### 3.4点云平滑

### 3.5点云融合

### 3.6三维重建

### 3.7移除点云

```
POST/nr/pointCloud/delete
```

参数：

```
pointCloudId: "1603878885277648890"
```

返回：

```
{
  "code": 0,
    "msg": "成功",
    "data": {
    }
}
```

### 

## 4.模型

### 4.1创建模型

```
POST/nr/model/create
```

参数：

```
DocumentsId: "XXX/XXX/XXX.ply"
projectId: "1603878885167648890"
```

返回：

```
{
  "code": 0,
    "msg": "成功",
    "data": {
        modelId: "1603878885277648890"
		documentsId：“xxx/xxx/xxx.ply”
		projectId: "1603878885167648890"
		
    }
}
```



### 4.2打开模型

```
POST/nr/model/open
```

参数：

```
modelId: "1603878885277648890"
```

返回：

```
{
  "code": 0,
    "msg": "成功",
    "data": {
        modelId: "1603878885277648890"
		documentsId：“xxx/xxx/xxx.ply”
		projectId: "1603878885167648890"
		
    }
}
```

### 4.3缺陷检测

### 4.4移除模型

```
POST/nr/model/delte
```

参数：

```
modelId: "1603878885277648890"
```

返回：

```
{
  "code": 0,
    "msg": "成功",
    "data": {
    }
}
```

### 

## 5.算法

后端自用

### 5.1创建算法

### 5.2查询算法