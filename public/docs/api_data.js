define({ "api": [
  {
    "type": "delete",
    "url": "/posts/:id",
    "title": "删除帖子",
    "group": "Post",
    "parameter": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token信息</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误消息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/postRouter.js",
    "groupTitle": "Post",
    "name": "DeletePostsId"
  },
  {
    "type": "get",
    "url": "/posts",
    "title": "查询帖子",
    "group": "Post",
    "parameter": {
      "fields": {
        "query": [
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "pageNum",
            "defaultValue": "1",
            "description": "<p>页码&lt;可选&gt;</p>"
          },
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "defaultValue": "2",
            "description": "<p>每页显示条数&lt;可选&gt;</p>"
          },
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>搜索关键字&lt;可选&gt;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误消息.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data[list]",
            "description": "<p>帖子数据</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data[totalPage]",
            "description": "<p>总的页数</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/postRouter.js",
    "groupTitle": "Post",
    "name": "GetPosts"
  },
  {
    "type": "get",
    "url": "/posts/:id",
    "title": "帖子详情",
    "group": "Post",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误消息.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>更新完成之后的帖子信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/postRouter.js",
    "groupTitle": "Post",
    "name": "GetPostsId"
  },
  {
    "type": "post",
    "url": "/posts",
    "title": "创建帖子",
    "group": "Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>帖子标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>帖子内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "live",
            "description": "<p>生活标签</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "work",
            "description": "<p>工作标签</p>"
          }
        ],
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token信息</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误消息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/postRouter.js",
    "groupTitle": "Post",
    "name": "PostPosts"
  },
  {
    "type": "put",
    "url": "/posts/:id",
    "title": "编辑帖子",
    "group": "Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>帖子标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>帖子内容</p>"
          }
        ],
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token信息</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误消息.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>更新完成之后的帖子信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/postRouter.js",
    "groupTitle": "Post",
    "name": "PutPostsId"
  },
  {
    "type": "get",
    "url": "/getInfo",
    "title": "获取当前登录用户的基本信息",
    "group": "用户",
    "parameter": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token信息</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误消息.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>当前用户基本信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/userRouter.js",
    "groupTitle": "用户",
    "name": "GetGetinfo"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "用户登录",
    "group": "用户",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>用户邮箱</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>用户密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误消息.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/userRouter.js",
    "groupTitle": "用户",
    "name": "PostLogin"
  },
  {
    "type": "post",
    "url": "/register",
    "title": "用户注册",
    "group": "用户",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>用户邮箱</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>用户密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误消息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/userRouter.js",
    "groupTitle": "用户",
    "name": "PostRegister"
  },
  {
    "type": "put",
    "url": "/users/resetPwd",
    "title": "重置密码",
    "group": "用户",
    "parameter": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token信息</p>"
          }
        ],
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "oldPwd",
            "description": "<p>原密码</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "newPwd",
            "description": "<p>新密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误消息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/userRouter.js",
    "groupTitle": "用户",
    "name": "PutUsersResetpwd"
  },
  {
    "type": "put",
    "url": "/users/update",
    "title": "修改当前用户的基本信息",
    "group": "用户",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "Object",
            "optional": false,
            "field": "avatar",
            "description": "<p>要修改的头像</p>"
          }
        ],
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token信息</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误消息.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>修改之后的当前用户基本信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/userRouter.js",
    "groupTitle": "用户",
    "name": "PutUsersUpdate"
  }
] });
