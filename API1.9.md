# [接口文档]()

地址：http://kikigogogo.gz2vip.idcfengye.com

## 1.工程

### 1.1创建工程

```
POST/nr/project/create
示例：
http://kikigogogo.gz2vip.idcfengye.com/nr/project/create
```

参数：

```
name: "project1"
```

返回1：

```
{
  "code": 0,
    "msg": "成功",
    "data": {
        projectId: "1603878885167648890"
		projectName：“projec1”
    }
}

```

返回2：

```
{
    "code": 5,
    "msg": "该工程名已经存在"
}
```



### 1.2查询工程(ID)

```
POST/nr/project/find/id
```

参数1

```
id:"1603878885167648890"
```

返回1：

```
{
  "code": 0,
    "msg": "成功",
    "data": {
        projectId: "1603878885167648890"
		projectName：“projec1”
		projectCreationTime: "2020-12-02T22:54:51.000+00:00",
		projectModificationTime: "2020-12-02T22:54:51.000+00:00"
    }
}
```

参数2

```
id:"0000"
```

返回2：

```
{
    "code": 1,
    "msg": "参数不正确"
}
```

参数3(空ID)

```
id:"1603878885167648880"
```

返回3：

```
{
    "code": 0,
    "msg": "成功"
}
```



### 1.3查询工程（工程名）

```
POST/nr/project/find/name
```

参数1：

```
name：“测试工程13”
```

返回1：

```
{
    "code": 0,
    "msg": "成功",
    "data": {
        "projectId": "1606901491696908300",
        "projectName": "测试工程13",
        "projectCreationTime": "2020-12-02T23:31:30.000+00:00",
        "projectModificationTime": "2020-12-02T23:31:30.000+00:00"
    }
}
```

参数2：

```
name：“测试工程133”
```

返回2：

```
{
    "code": 6,
    "msg": "未查询到该工程名"
}
```



### 1.4更新工程修改时间

```
POST/nr/project/update
```

参数1

```
id: "1603878885167648890"
```

返回1：

```
{
    "code": 0,
    "msg": "成功",
    "data": {
        "projectId": "1603878885167648890",
        "projectName": "projec1",
        "projectCreationTime": "2020-10-28T22:54:53.000+00:00"
    }
}
```

参数2

```
id: "000"
```

返回2：

```
{
    "code": 1,
    "msg": "参数不正确"
}
```

参数3

```
id: "1203878885167648890"
```

返回3：

```
{
    "code": 7,
    "msg": "未查询到该工程ID"
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
    "data": [
        {
            "projectId": "1603878885167648890",
            "projectName": "projec1",
            "projectCreationTime": "2020-10-28T22:54:53.000+00:00",
            "projectModificationTime": "2020-12-02T23:36:31.000+00:00"
        },
        {
            "projectId": "1605444696825487762",
            "projectName": "Test03",
            "projectCreationTime": "2020-11-16T02:51:36.000+00:00",
            "projectModificationTime": "2020-11-16T02:53:04.000+00:00"
        },
        {
            "projectId": "1605444784485735205",
            "projectName": "Test04",
            "projectCreationTime": "2020-11-16T02:53:03.000+00:00",
            "projectModificationTime": "2020-11-16T02:53:28.000+00:00"
        },
        {
            "projectId": "1606898596875476861",
            "projectName": "测试工程01",
            "projectCreationTime": "2020-12-02T22:43:16.000+00:00",
            "projectModificationTime": "2020-12-02T22:43:16.000+00:00"
        },
        {
            "projectId": "1606898682816284139",
            "projectName": "测试工程02",
            "projectCreationTime": "2020-12-02T22:46:11.000+00:00",
            "projectModificationTime": "2020-12-02T22:46:11.000+00:00"
        },
        {
            "projectId": "1606898800368489082",
            "projectName": "测试工程03",
            "projectCreationTime": "2020-12-02T22:46:47.000+00:00",
            "projectModificationTime": "2020-12-02T22:46:47.000+00:00"
        },
        {
            "projectId": "1606898904072783068",
            "projectName": "测试工程04",
            "projectCreationTime": "2020-12-02T22:48:33.000+00:00",
            "projectModificationTime": "2020-12-02T22:48:33.000+00:00"
        },
        {
            "projectId": "1606899099485439695",
            "projectName": "测试工程05",
            "projectCreationTime": "2020-12-02T22:51:50.000+00:00",
            "projectModificationTime": "2020-12-02T22:51:50.000+00:00"
        },
        {
            "projectId": "1606899245113376439",
            "projectName": "测试工程06",
            "projectCreationTime": "2020-12-02T22:54:04.000+00:00",
            "projectModificationTime": "2020-12-02T22:54:04.000+00:00"
        },
        {
            "projectId": "1606899291813358300",
            "projectName": "测试工程07",
            "projectCreationTime": "2020-12-02T22:54:51.000+00:00",
            "projectModificationTime": "2020-12-02T22:54:51.000+00:00"
        },
        {
            "projectId": "1606899542913566953",
            "projectName": "测试工程08",
            "projectCreationTime": "2020-12-02T22:59:02.000+00:00",
            "projectModificationTime": "2020-12-02T22:59:02.000+00:00"
        },
        {
            "projectId": "1606899610891824972",
            "projectName": "测试工程09",
            "projectCreationTime": "2020-12-02T23:00:18.000+00:00",
            "projectModificationTime": "2020-12-02T23:00:18.000+00:00"
        },
        {
            "projectId": "1606899879977263654",
            "projectName": "测试工程10",
            "projectCreationTime": "2020-12-02T23:04:38.000+00:00",
            "projectModificationTime": "2020-12-02T23:04:38.000+00:00"
        },
        {
            "projectId": "1606900076966407615",
            "projectName": "测试工程11",
            "projectCreationTime": "2020-12-02T23:07:56.000+00:00",
            "projectModificationTime": "2020-12-02T23:07:56.000+00:00"
        },
        {
            "projectId": "1606900975735862991",
            "projectName": "测试工程12",
            "projectCreationTime": "2020-12-02T23:22:54.000+00:00",
            "projectModificationTime": "2020-12-02T23:22:54.000+00:00"
        },
        {
            "projectId": "1606901491696908300",
            "projectName": "测试工程13",
            "projectCreationTime": "2020-12-02T23:31:30.000+00:00",
            "projectModificationTime": "2020-12-02T23:31:30.000+00:00"
        }
    ]
}
```

### 1.6移除工程

### 

```
POST/nr/project/delete
```

参数：

```
 id: "1603878885167648890"
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

### 2.1上传图像

```
POST/nr/image/upload
```

参数1：

```
格式：form-data
documentsId: E:\NERCMS相关\软件后端\Mydemo01\picture\test05.txt
file: test05.txt  (file类型)
projectId：1606898596875476861
```

返回1：

```
{
    "code": 0,
    "msg": "成功",
    "data": {
        "pictureId": "1607095764000420951",
        "documentsId": "E:\\NERCMS相关\\软件后端\\Mydemo01\\picture\\test05.txt",
        "pictureAffiliationId": 10,
        "projectId": "1606898596875476861"
    }
}
```

参数2：

```
格式：form-data
documentsId: E:\NERCMS相关\软件后端\Mydemo01\picture\test09.txt
file: test05.txt  (file类型)
projectId： 1606898596875476861
```

返回2：

```
{
    "code": 13,
    "msg": "文件名与documentId中的文件名不一致"
}
```

参数3：

```
格式：form-data
documentsId: J:\NERCMS相关\软件后端\Mydemo01\picture\test05.txt
file: test05.txt  (file类型)
projectId： 1606898596875476861
```

返回3：

```
{
    "code": 12,
    "msg": "上传路径非法"
}
```

### 

### 2.2图像去噪

### 2.3图像增强

### 2.4下载图像

注：直接使用request参数访问

示例1：

```
http://localhost:8883/nr/image/download?imageId=1604047051062533199
```

返回1：

```
返回内容整个文件
```

示例2：

```
http://localhost:8883/nr/image/download?imageId=1604047051062533198
```

返回2：

```
{
    "code": 8,
    "msg": "未找到该图像"
}
```



### 2.5移除图像

```
POST/nr/image/delete
```

参数：

```
 pictureId: "1607095764000420951"
```

返回：

```
{
    "code": 0,
    "msg": "成功"
}
```

### 2.6查询一个工程下所有的图像

### 

```
POST/nr/image/find/list
```

参数：

```
projectId: "1603878885167648890"
```

返回

```
{
    "code": 0,
    "msg": "成功",
    "data": [
        {
            "pictureId": "1606030790158739678",
            "pictureAffiliationId": 6,
            "projectId": "1603878885167648890"
        },
        {
            "pictureId": "1606978834703147164",
            "pictureAffiliationId": 7,
            "projectId": "1603878885167648890"
        },
        {
            "pictureId": "1606979357803285011",
            "pictureAffiliationId": 9,
            "projectId": "1603878885167648890"
        }
    ]
}
```

### 

## 3.点云

### 3.1上传点云

```
POST/nr/pointCloud/upload
```

参数1：

```
格式：form-data
documentsId: E:\NERCMS相关\软件后端\Mydemo01\picture\test05.txt
file: test05.txt  (file类型)
projectId：1606898596875476861
```

返回1：

```
{
    "code": 0,
    "msg": "成功",
    "data": {
        "pointCloudId": "1607016119434293225",
        "documentsId": "E:\\NERCMS相关\\软件后端\\Mydemo01\\pcdFile\\test05.txt"
    }
}
```

参数2：

```
格式：form-data
documentsId: E:\NERCMS相关\软件后端\Mydemo01\pcdFile\test09.txt
file: test05.txt  (file类型)
```

返回2：

```
{
    "code": 13,
    "msg": "文件名与documentId中的文件名不一致"
}
```

参数3：

```
格式：form-data
documentsId: J:\NERCMS相关\软件后端\Mydemo01\pcdFile\test05.txt
file: test05.txt  (file类型)
```

返回3：

```
{
    "code": 12,
    "msg": "上传路径非法"
}
```

### 

### 3.2下载点云

**注：直接使用request参数访问**

示例1：

```
http://localhost:8883/nr/model/download?modelId=1607098113803355232
```

返回1：

```
返回内容整个文件
```

示例2：

```
http://localhost:8883/nr/model/download?modelId=1607098113803355236
```

返回2：

```
{
    "code": 15,
    "msg": "模型文件未找到"
}
```



### 3.3点云去噪

#### 3.3.1体素滤波

```
POST/nr/pointCloud/denosing/voxel
```

参数：

```
projectId: 1606898596875476861
pointCloudId: 1612021642834704288
x:0.5
y:0.5
z:0.5

```

返回：

```
{
    "code": 0,
    "msg": "成功",
    "data": {
        "pointCloudId": "1612023375558414973",
        "documentsId": "/home/nsy/necrms/软件后端/Mydemo01/pcdFile/cloud_VoxelGridFilter.pcd",
        "pointCloudAffiliationId": 10,
        "projectId": "1606898596875476861"
    }
}
```



#### 3.3.2高斯滤波

#### 

```
POST/nr/pointCloud/denosing/gauss
```

参数：

```
projectId: 1606898596875476861
pointCloudId: 1612021642834704288
searchNearestPointNum:2
removalThresh:0.5


```

返回：

```
{
    "code": 0,
    "msg": "成功",
    "data": {
        "pointCloudId": "1612023503274777008",
        "documentsId": "/home/nsy/necrms/软件后端/Mydemo01/pcdFile/cloud_GaussStatisticalFilter.pcd",
        "pointCloudAffiliationId": 11,
        "projectId": "1606898596875476861"
    }
}
```



#### 3.3.3半径滤波

#### 

```
POST/nr/pointCloud/denosing/radius
```

参数：

```
projectId: 1606898596875476861
pointCloudId: 1612021642834704288
searchRadius:0.5
minimumNeighborNum:50


```

返回：

```
{
    "code": 0,
    "msg": "成功",
    "data": {
        "pointCloudId": "1612027730093408044",
        "documentsId": "/home/nsy/necrms/软件后端/Mydemo01/pcdFile/cloud_RadiusFilter.pcd",
        "pointCloudAffiliationId": 12,
        "projectId": "1606898596875476861"
    }
}
```



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

返回1：

```
{
  "code": 0,
    "msg": "成功",
    "data": {
    }
}
```

返回2：

```
{
    "code": 14,
    "msg": "点云文件未找到"
}
```



### 3.8查询一个工程下所有的点云

### 

```
POST/nr/pointCloud/list
```

参数：

```
projectId: "1603878885167648890"
```

返回

```
{
  "code": 0,
    "msg": "成功",
    "data": {
        pointCloudId:"1604047051062533199"
    },
     {
        pointCloudId:"1604047051062533192"
    }
}
```

### 

### 

## 4.模型

### 4.1上传模型

```
POST/nr/model/upload
```

参数1：

```
格式：form-data
documentsId: E:\NERCMS相关\软件后端\Mydemo01\model\test05.txt
file: test05.txt  (file类型)
projectId：1606898596875476861
```

返回1：

```
{
    "code": 0,
    "msg": "成功",
    "data": {
        "modelId": "1607098113803355232",
        "documentsId": "E:\\NERCMS相关\\软件后端\\Mydemo01\\model\\test05.txt"
    }
}
```

参数2：

```
格式：form-data
documentsId: E:\NERCMS相关\软件后端\Mydemo01\pcdFile\test09.txt
file: test05.txt  (file类型)
```

返回2：

```
{
    "code": 13,
    "msg": "文件名与documentId中的文件名不一致"
}
```

参数3：

```
格式：form-data
documentsId: J:\NERCMS相关\软件后端\Mydemo01\pcdFile\test05.txt
file: test05.txt  (file类型)
```

返回3：

```
{
    "code": 12,
    "msg": "上传路径非法"
}
```

### 

### 4.2下载模型

```
POST/nr/model/download
```

参数：

```
modelId: "1607098113803355232"
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
modelId: "1607098113803355232"
```

返回：

```
{
    "code": 0,
    "msg": "成功"
}
```

### 4.5查询一个工程下所有的模型

### 

```
POST/nr/model/list
```

参数：

```
projectId: "1603878885167648890"
```

返回

```
{
    "code": 0,
    "msg": "成功",
    "data": []
}
```

### 

### 

## 5.算法说明

### 5.1图像

#### 5.1.1图像去噪

```java
/**
input:
	imagePath:待处理的图像路径
return:
	type:String
	value:处理后的图像路径
**/
public native String imageDeNoising(String imagePath);
```



#### 5.1.2图像增强

```java
/**
input:
	imagePath:待处理的图像路径
return:
	type:String
	value:处理后的图像路径
**/
public native String imageEnhance(String imagePath);
```



### 5.2点云

#### 5.2.1点云去噪

```java
/**
input:
	imagePath:待处理点云路径
return:
	type:String
	value:处理后的点云路径
**/
public native String pointCloudDeNoising(String pointCloudPath);
```



#### 5.2.2点云平滑

```java
/**
input:
	imagePath:待处理点云路径
return:
	type:String
	value:处理后的点云路径
**/
public native String pointSmooth(String pointCloudPath);
```



#### 5.2.3点云融合

```java
/**
input:
	imagePath:待处理点云路径
return:
	type:String
	value:处理后的点云路径
**/
public native String pointMerge(String pointCloudPath);
```



#### 5.2.4三维重建

```
/**
input:
	imagePath:待处理点云路径
return:
	type:String
	value:生成的模型路径
**/
public native String threeDimensionalReconstruction(String pointCloudPath);
```



### 5.3模型

#### 5.3.1缺陷检测

```java
/**
input:
	imagePath:待处理模型路径
return:
	type:String
	value:处理后的模型路径
**/
public native String defectDetection (String imagePath);
```

