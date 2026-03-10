const pptxgen = require("pptxgenjs");

// 创建演示文稿
let pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.author = 'Android IPC Tutorial';
pres.title = 'Android 跨进程通信(IPC)详解';

// 定义配色方案 - 使用 Teal Trust 主题，适合技术主题
const colors = {
    primary: '028090',      // 青色
    secondary: '00A896',    // 海泡绿
    accent: '02C39A',       // 薄荷绿
    dark: '21295C',         // 午夜蓝
    light: 'F0F7F4',        // 浅灰绿
    white: 'FFFFFF',
    text: '2C3E50'
};

// 定义字体
const fonts = {
    header: 'Arial Black',
    body: 'Arial'
};

// ==================== 第1页：封面 ====================
let slide1 = pres.addSlide();
slide1.background = { color: colors.primary };

// 主标题
slide1.addText("Android 跨进程通信", {
    x: 0.5, y: 1.5, w: 9, h: 1.2,
    fontSize: 48, fontFace: fonts.header, color: colors.white, bold: true,
    align: "center", valign: "middle"
});

// 副标题
slide1.addText("(IPC) 从 Linux 到 Android 的演进", {
    x: 0.5, y: 2.7, w: 9, h: 0.8,
    fontSize: 28, fontFace: fonts.body, color: colors.accent,
    align: "center", valign: "middle"
});

// 装饰线
slide1.addShape(pres.shapes.RECTANGLE, {
    x: 3.5, y: 3.6, w: 3, h: 0.05,
    fill: { color: colors.accent }
});

// 说明文字
slide1.addText("Android 5 到 16 期间的 IPC 机制全面解析", {
    x: 0.5, y: 4.2, w: 9, h: 0.6,
    fontSize: 18, fontFace: fonts.body, color: colors.white,
    align: "center", valign: "middle"
});

// ==================== 第2页：目录 ====================
let slide2 = pres.addSlide();
slide2.background = { color: colors.white };

// 标题
slide2.addText("目录", {
    x: 0.5, y: 0.3, w: 9, h: 0.8,
    fontSize: 36, fontFace: fonts.header, color: colors.primary, bold: true,
    align: "left", valign: "middle"
});

// 目录项
const tocItems = [
    { num: "01", title: "Linux 传统 IPC 机制", desc: "管道、信号、信号量、共享内存、消息队列、套接字" },
    { num: "02", title: "Android IPC 概览", desc: "Messenger、AIDL、ContentProvider、MemoryFile、SharedMemory" },
    { num: "03", title: "Messenger 详解", desc: "轻量级 IPC 方案，基于 AIDL 实现" },
    { num: "04", title: "AIDL 深入解析", desc: "Android 接口定义语言，支持复杂数据类型" },
    { num: "05", title: "ContentProvider", desc: "跨进程数据共享的标准方案" },
    { num: "06", title: "共享内存机制", desc: "MemoryFile 与 SharedMemory 的高性能通信" }
];

let yPos = 1.2;
tocItems.forEach((item, index) => {
    // 编号圆形背景
    slide2.addShape(pres.shapes.OVAL, {
        x: 0.6, y: yPos, w: 0.5, h: 0.5,
        fill: { color: colors.secondary }
    });
    
    // 编号文字
    slide2.addText(item.num, {
        x: 0.6, y: yPos, w: 0.5, h: 0.5,
        fontSize: 14, fontFace: fonts.body, color: colors.white, bold: true,
        align: "center", valign: "middle"
    });
    
    // 标题
    slide2.addText(item.title, {
        x: 1.3, y: yPos, w: 3, h: 0.5,
        fontSize: 18, fontFace: fonts.body, color: colors.dark, bold: true,
        align: "left", valign: "middle"
    });
    
    // 描述
    slide2.addText(item.desc, {
        x: 4.5, y: yPos, w: 5, h: 0.5,
        fontSize: 12, fontFace: fonts.body, color: colors.text,
        align: "left", valign: "middle"
    });
    
    yPos += 0.7;
});

// ==================== 第3页：Linux IPC 概述 ====================
let slide3 = pres.addSlide();
slide3.background = { color: colors.light };

// 标题
slide3.addText("Linux 传统 IPC 机制", {
    x: 0.5, y: 0.3, w: 9, h: 0.8,
    fontSize: 36, fontFace: fonts.header, color: colors.primary, bold: true,
    align: "left", valign: "middle"
});

// 左侧：IPC 方式列表
slide3.addText("Linux 原生 IPC", {
    x: 0.5, y: 1.2, w: 4, h: 0.5,
    fontSize: 20, fontFace: fonts.body, color: colors.dark, bold: true,
    align: "left", valign: "middle"
});

const linuxIPC = [
    { name: "管道 (Pipe)", desc: "创建时分配一页内存，缓冲区有限", icon: "🔄" },
    { name: "信号 (Signal)", desc: "适用于进程中断控制，不适合信息交换", icon: "⚡" },
    { name: "信号量 (Semaphore)", desc: "锁机制，用于进程/线程同步", icon: "🔒" },
    { name: "共享内存", desc: "直接附加到虚拟地址空间，速度快", icon: "💾" },
    { name: "消息队列", desc: "信息复制两次，CPU 消耗大", icon: "📨" },
    { name: "套接字 (Socket)", desc: "通用接口，传输效率低", icon: "🔌" }
];

yPos = 1.8;
linuxIPC.forEach((item, index) => {
    // 图标背景
    slide3.addShape(pres.shapes.OVAL, {
        x: 0.5, y: yPos, w: 0.4, h: 0.4,
        fill: { color: colors.secondary }
    });
    
    // 名称
    slide3.addText(item.name, {
        x: 1.0, y: yPos, w: 2.5, h: 0.4,
        fontSize: 14, fontFace: fonts.body, color: colors.dark, bold: true,
        align: "left", valign: "middle"
    });
    
    // 描述
    slide3.addText(item.desc, {
        x: 1.0, y: yPos + 0.35, w: 3.5, h: 0.35,
        fontSize: 11, fontFace: fonts.body, color: colors.text,
        align: "left", valign: "middle"
    });
    
    yPos += 0.75;
});

// 右侧：特点总结
slide3.addShape(pres.shapes.RECTANGLE, {
    x: 5, y: 1.2, w: 4.5, h: 3.8,
    fill: { color: colors.white },
    line: { color: colors.secondary, width: 2 },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 3, angle: 135, opacity: 0.1 }
});

slide3.addText("关键特点", {
    x: 5.3, y: 1.4, w: 4, h: 0.5,
    fontSize: 18, fontFace: fonts.body, color: colors.primary, bold: true,
    align: "left", valign: "middle"
});

const keyPoints = [
    "Android 基于 Linux 内核",
    "Linux IPC 机制基本可用",
    "各有优缺点，需按需选择",
    "共享内存速度最快",
    "Binder 是 Android 的核心创新"
];

yPos = 2.0;
keyPoints.forEach((point, index) => {
    slide3.addText("• " + point, {
        x: 5.3, y: yPos, w: 4, h: 0.4,
        fontSize: 13, fontFace: fonts.body, color: colors.text,
        align: "left", valign: "middle"
    });
    yPos += 0.5;
});

// ==================== 第4页：Android IPC 概览 ====================
let slide4 = pres.addSlide();
slide4.background = { color: colors.white };

// 标题
slide4.addText("Android IPC 方式概览", {
    x: 0.5, y: 0.3, w: 9, h: 0.8,
    fontSize: 36, fontFace: fonts.header, color: colors.primary, bold: true,
    align: "left", valign: "middle"
});

// 分类说明
slide4.addText("Android 提供的 IPC 方式", {
    x: 0.5, y: 1.2, w: 9, h: 0.5,
    fontSize: 18, fontFace: fonts.body, color: colors.dark, bold: true,
    align: "left", valign: "middle"
});

// 基于 Binder 的实现
slide4.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.8, w: 4.3, h: 3.2,
    fill: { color: colors.light },
    line: { color: colors.primary, width: 2 }
});

slide4.addText("基于 Binder", {
    x: 0.7, y: 1.9, w: 4, h: 0.5,
    fontSize: 16, fontFace: fonts.body, color: colors.primary, bold: true,
    align: "left", valign: "middle"
});

const binderIPC = [
    { name: "Messenger", desc: "轻量级，底层 AIDL", level: "简单" },
    { name: "AIDL", desc: "接口定义语言", level: "中等" },
    { name: "ContentProvider", desc: "数据共享标准", level: "中等" }
];

yPos = 2.4;
binderIPC.forEach((item, index) => {
    // 名称
    slide4.addText(item.name, {
        x: 0.7, y: yPos, w: 2, h: 0.35,
        fontSize: 14, fontFace: fonts.body, color: colors.dark, bold: true,
        align: "left", valign: "middle"
    });
    
    // 描述
    slide4.addText(item.desc, {
        x: 0.7, y: yPos + 0.3, w: 3.5, h: 0.3,
        fontSize: 11, fontFace: fonts.body, color: colors.text,
        align: "left", valign: "middle"
    });
    
    // 难度标签
    let levelColor = item.level === "简单" ? colors.accent : colors.secondary;
    slide4.addShape(pres.shapes.RECTANGLE, {
        x: 3.5, y: yPos, w: 0.8, h: 0.3,
        fill: { color: levelColor }
    });
    slide4.addText(item.level, {
        x: 3.5, y: yPos, w: 0.8, h: 0.3,
        fontSize: 10, fontFace: fonts.body, color: colors.white,
        align: "center", valign: "middle"
    });
    
    yPos += 0.9;
});

// 基于共享内存
slide4.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.8, w: 4.3, h: 3.2,
    fill: { color: colors.light },
    line: { color: colors.accent, width: 2 }
});

slide4.addText("基于共享内存", {
    x: 5.4, y: 1.9, w: 4, h: 0.5,
    fontSize: 16, fontFace: fonts.body, color: colors.accent, bold: true,
    align: "left", valign: "middle"
});

const memoryIPC = [
    { name: "MemoryFile", desc: "内存文件映射", level: "高级" },
    { name: "SharedMemory", desc: "Android 8+ 推荐", level: "高级" }
];

yPos = 2.4;
memoryIPC.forEach((item, index) => {
    // 名称
    slide4.addText(item.name, {
        x: 5.4, y: yPos, w: 2, h: 0.35,
        fontSize: 14, fontFace: fonts.body, color: colors.dark, bold: true,
        align: "left", valign: "middle"
    });
    
    // 描述
    slide4.addText(item.desc, {
        x: 5.4, y: yPos + 0.3, w: 3.5, h: 0.3,
        fontSize: 11, fontFace: fonts.body, color: colors.text,
        align: "left", valign: "middle"
    });
    
    // 难度标签
    slide4.addShape(pres.shapes.RECTANGLE, {
        x: 8.2, y: yPos, w: 0.8, h: 0.3,
        fill: { color: colors.dark }
    });
    slide4.addText(item.level, {
        x: 8.2, y: yPos, w: 0.8, h: 0.3,
        fontSize: 10, fontFace: fonts.body, color: colors.white,
        align: "center", valign: "middle"
    });
    
    yPos += 1.2;
});

// 底部说明
slide4.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.2, w: 9, h: 0.3,
    fill: { color: colors.primary }
});
slide4.addText("💡 Binder 是 Android IPC 的核心，Messenger、AIDL、ContentProvider 底层都由 Binder 实现", {
    x: 0.5, y: 5.2, w: 9, h: 0.3,
    fontSize: 12, fontFace: fonts.body, color: colors.white,
    align: "center", valign: "middle"
});

// ==================== 第5页：Messenger 详解 ====================
let slide5 = pres.addSlide();
slide5.background = { color: colors.white };

// 标题
slide5.addText("Messenger：轻量级 IPC", {
    x: 0.5, y: 0.3, w: 9, h: 0.8,
    fontSize: 36, fontFace: fonts.header, color: colors.primary, bold: true,
    align: "left", valign: "middle"
});

// 左侧：概念说明
slide5.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 4.5, h: 2.5,
    fill: { color: colors.light },
    line: { color: colors.secondary, width: 1 }
});

slide5.addText("核心概念", {
    x: 0.7, y: 1.3, w: 4, h: 0.4,
    fontSize: 18, fontFace: fonts.body, color: colors.primary, bold: true,
    align: "left", valign: "middle"
});

const messengerConcepts = [
    "• 信使模式，传递 Message 对象",
    "• 底层基于 AIDL 实现",
    "• 适用于简单数据传递",
    "• 支持双向通信（replyTo）",
    "• 单线程处理消息"
];

yPos = 1.8;
messengerConcepts.forEach((concept, index) => {
    slide5.addText(concept, {
        x: 0.7, y: yPos, w: 4, h: 0.35,
        fontSize: 12, fontFace: fonts.body, color: colors.text,
        align: "left", valign: "middle"
    });
    yPos += 0.4;
});

// 右侧：通信流程图
slide5.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.2, w: 4.3, h: 2.5,
    fill: { color: colors.white },
    line: { color: colors.accent, width: 2 }
});

slide5.addText("通信流程", {
    x: 5.4, y: 1.3, w: 4, h: 0.4,
    fontSize: 18, fontFace: fonts.body, color: colors.accent, bold: true,
    align: "left", valign: "middle"
});

// 流程步骤
const flowSteps = [
    { step: "1", text: "绑定 Service" },
    { step: "2", text: "获取服务端 Messenger" },
    { step: "3", text: "创建客户端 Messenger" },
    { step: "4", text: "发送 Message（含 replyTo）" },
    { step: "5", text: "服务端处理并回复" }
];

yPos = 1.8;
flowSteps.forEach((item, index) => {
    // 步骤编号
    slide5.addShape(pres.shapes.OVAL, {
        x: 5.4, y: yPos, w: 0.35, h: 0.35,
        fill: { color: colors.secondary }
    });
    slide5.addText(item.step, {
        x: 5.4, y: yPos, w: 0.35, h: 0.35,
        fontSize: 12, fontFace: fonts.body, color: colors.white, bold: true,
        align: "center", valign: "middle"
    });
    
    // 步骤文字
    slide5.addText(item.text, {
        x: 5.9, y: yPos, w: 3.2, h: 0.35,
        fontSize: 12, fontFace: fonts.body, color: colors.text,
        align: "left", valign: "middle"
    });
    
    yPos += 0.45;
});

// 底部：代码示例提示
slide5.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.0, w: 9, h: 1.3,
    fill: { color: colors.dark }
});

slide5.addText("关键代码结构", {
    x: 0.7, y: 4.1, w: 4, h: 0.4,
    fontSize: 16, fontFace: fonts.body, color: colors.white, bold: true,
    align: "left", valign: "middle"
});

slide5.addText("客户端：Messenger(service) → Message.obtain() → msg.replyTo = clientMessenger → send(msg)", {
    x: 0.7, y: 4.5, w: 8.5, h: 0.35,
    fontSize: 11, fontFace: fonts.body, color: colors.light,
    align: "left", valign: "middle"
});

slide5.addText("服务端：Messenger(handler) → handleMessage() → 处理消息 → 通过 msg.replyTo 发送回复", {
    x: 0.7, y: 4.85, w: 8.5, h: 0.35,
    fontSize: 11, fontFace: fonts.body, color: colors.light,
    align: "left", valign: "middle"
});

// ==================== 第6页：AIDL 深入解析 ====================
let slide6 = pres.addSlide();
slide6.background = { color: colors.light };

// 标题
slide6.addText("AIDL：Android 接口定义语言", {
    x: 0.5, y: 0.3, w: 9, h: 0.8,
    fontSize: 36, fontFace: fonts.header, color: colors.primary, bold: true,
    align: "left", valign: "middle"
});

// 左侧：特点
slide6.addText("AIDL 特点", {
    x: 0.5, y: 1.2, w: 4.5, h: 0.5,
    fontSize: 20, fontFace: fonts.body, color: colors.dark, bold: true,
    align: "left", valign: "middle"
});

const aidlFeatures = [
    { title: "接口定义", desc: "定义服务端和客户端的通信接口" },
    { title: "数据类型", desc: "支持基本类型、String、List、Map、Parcelable" },
    { title: "方向标记", desc: "in / out / inout 控制数据流向" },
    { title: "线程模型", desc: "服务端方法在 Binder 线程池执行" }
];

yPos = 1.7;
aidlFeatures.forEach((item, index) => {
    // 图标
    slide6.addShape(pres.shapes.OVAL, {
        x: 0.5, y: yPos, w: 0.4, h: 0.4,
        fill: { color: colors.secondary }
    });
    
    // 标题
    slide6.addText(item.title, {
        x: 1.0, y: yPos, w: 2, h: 0.4,
        fontSize: 14, fontFace: fonts.body, color: colors.dark, bold: true,
        align: "left", valign: "middle"
    });
    
    // 描述
    slide6.addText(item.desc, {
        x: 1.0, y: yPos + 0.35, w: 4, h: 0.35,
        fontSize: 11, fontFace: fonts.body, color: colors.text,
        align: "left", valign: "middle"
    });
    
    yPos += 0.9;
});

// 右侧：使用步骤
slide6.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.2, w: 4.3, h: 3.8,
    fill: { color: colors.white },
    line: { color: colors.primary, width: 2 },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 3, angle: 135, opacity: 0.1 }
});

slide6.addText("使用步骤", {
    x: 5.4, y: 1.4, w: 4, h: 0.4,
    fontSize: 18, fontFace: fonts.body, color: colors.primary, bold: true,
    align: "left", valign: "middle"
});

const aidlSteps = [
    "创建 .aidl 文件定义接口",
    "实现 Stub 接口（服务端）",
    "Service 中返回 Binder",
    "客户端绑定 Service",
    "获取接口代理对象",
    "调用接口方法"
];

yPos = 1.9;
aidlSteps.forEach((step, index) => {
    slide6.addShape(pres.shapes.OVAL, {
        x: 5.4, y: yPos, w: 0.3, h: 0.3,
        fill: { color: colors.accent }
    });
    slide6.addText((index + 1).toString(), {
        x: 5.4, y: yPos, w: 0.3, h: 0.3,
        fontSize: 11, fontFace: fonts.body, color: colors.white, bold: true,
        align: "center", valign: "middle"
    });
    
    slide6.addText(step, {
        x: 5.85, y: yPos, w: 3.3, h: 0.3,
        fontSize: 12, fontFace: fonts.body, color: colors.text,
        align: "left", valign: "middle"
    });
    
    yPos += 0.55;
});

// ==================== 第7页：ContentProvider ====================
let slide7 = pres.addSlide();
slide7.background = { color: colors.white };

// 标题
slide7.addText("ContentProvider：数据共享", {
    x: 0.5, y: 0.3, w: 9, h: 0.8,
    fontSize: 36, fontFace: fonts.header, color: colors.primary, bold: true,
    align: "left", valign: "middle"
});

// 核心概念
slide7.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 9, h: 1.2,
    fill: { color: colors.light },
    line: { color: colors.secondary, width: 1 }
});

slide7.addText("核心概念", {
    x: 0.7, y: 1.3, w: 8.5, h: 0.4,
    fontSize: 16, fontFace: fonts.body, color: colors.primary, bold: true,
    align: "left", valign: "middle"
});

slide7.addText("Android 四大组件之一，用于在不同应用间共享数据。底层基于 Binder，提供统一的 URI 接口进行 CRUD 操作。", {
    x: 0.7, y: 1.7, w: 8.5, h: 0.6,
    fontSize: 13, fontFace: fonts.body, color: colors.text,
    align: "left", valign: "middle"
});

// 关键组件
slide7.addText("关键组件", {
    x: 0.5, y: 2.6, w: 4, h: 0.5,
    fontSize: 18, fontFace: fonts.body, color: colors.dark, bold: true,
    align: "left", valign: "middle"
});

const cpComponents = [
    { name: "URI", desc: "content://authority/path/id", color: colors.secondary },
    { name: "Cursor", desc: "查询结果集", color: colors.accent },
    { name: "ContentResolver", desc: "客户端访问接口", color: colors.primary }
];

yPos = 3.1;
cpComponents.forEach((item, index) => {
    slide7.addShape(pres.shapes.RECTANGLE, {
        x: 0.5, y: yPos, w: 0.15, h: 0.5,
        fill: { color: item.color }
    });
    
    slide7.addText(item.name, {
        x: 0.75, y: yPos, w: 1.5, h: 0.5,
        fontSize: 14, fontFace: fonts.body, color: colors.dark, bold: true,
        align: "left", valign: "middle"
    });
    
    slide7.addText(item.desc, {
        x: 2.4, y: yPos, w: 2.5, h: 0.5,
        fontSize: 12, fontFace: fonts.body, color: colors.text,
        align: "left", valign: "middle"
});
    
    yPos += 0.6;
});

// 数据操作
slide7.addText("数据操作", {
    x: 5.2, y: 2.6, w: 4, h: 0.5,
    fontSize: 18, fontFace: fonts.body, color: colors.dark, bold: true,
    align: "left", valign: "middle"
});

const cpOperations = [
    { op: "query()", desc: "查询数据", color: colors.secondary },
    { op: "insert()", desc: "插入数据", color: colors.accent },
    { op: "update()", desc: "更新数据", color: colors.primary },
    { op: "delete()", desc: "删除数据", color: colors.dark }
];

yPos = 3.1;
cpOperations.forEach((item, index) => {
    slide7.addShape(pres.shapes.RECTANGLE, {
        x: 5.2, y: yPos, w: 0.15, h: 0.4,
        fill: { color: item.color }
    });
    
    slide7.addText(item.op, {
        x: 5.45, y: yPos, w: 1.2, h: 0.4,
        fontSize: 13, fontFace: fonts.body, color: colors.dark, bold: true,
        align: "left", valign: "middle"
    });
    
    slide7.addText(item.desc, {
        x: 6.8, y: yPos, w: 2.5, h: 0.4,
        fontSize: 12, fontFace: fonts.body, color: colors.text,
        align: "left", valign: "middle"
    });
    
    yPos += 0.5;
});

// ==================== 第8页：共享内存 ====================
let slide8 = pres.addSlide();
slide8.background = { color: colors.light };

// 标题
slide8.addText("共享内存：高性能通信", {
    x: 0.5, y: 0.3, w: 9, h: 0.8,
    fontSize: 36, fontFace: fonts.header, color: colors.primary, bold: true,
    align: "left", valign: "middle"
});

// 两种实现对比
slide8.addText("MemoryFile vs SharedMemory", {
    x: 0.5, y: 1.2, w: 9, h: 0.5,
    fontSize: 20, fontFace: fonts.body, color: colors.dark, bold: true,
    align: "left", valign: "middle"
});

// MemoryFile
slide8.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.8, w: 4.3, h: 3.5,
    fill: { color: colors.white },
    line: { color: colors.secondary, width: 2 }
});

slide8.addText("MemoryFile", {
    x: 0.7, y: 1.9, w: 4, h: 0.5,
    fontSize: 18, fontFace: fonts.body, color: colors.secondary, bold: true,
    align: "left", valign: "middle"
});

const memoryFileInfo = [
    "• 早期 Android 共享内存方式",
    "• 基于 ashmem 驱动",
    "• 需要文件描述符传递",
    "• API 较为底层",
    "• 适合小数据量传输"
];

yPos = 2.5;
memoryFileInfo.forEach((info, index) => {
    slide8.addText(info, {
        x: 0.7, y: yPos, w: 3.8, h: 0.4,
        fontSize: 12, fontFace: fonts.body, color: colors.text,
        align: "left", valign: "middle"
    });
    yPos += 0.5;
});

// SharedMemory
slide8.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.8, w: 4.3, h: 3.5,
    fill: { color: colors.white },
    line: { color: colors.accent, width: 2 }
});

slide8.addText("SharedMemory (API 27+)", {
    x: 5.4, y: 1.9, w: 4, h: 0.5,
    fontSize: 18, fontFace: fonts.body, color: colors.accent, bold: true,
    align: "left", valign: "middle"
});

const sharedMemoryInfo = [
    "• Android 8.0+ 推荐方式",
    "• 更现代的 API 设计",
    "• 支持 Parcelable 传递",
    "• 更好的内存管理",
    "• 适合大数据量传输"
];

yPos = 2.5;
sharedMemoryInfo.forEach((info, index) => {
    slide8.addText(info, {
        x: 5.4, y: yPos, w: 3.8, h: 0.4,
        fontSize: 12, fontFace: fonts.body, color: colors.text,
        align: "left", valign: "middle"
    });
    yPos += 0.5;
});

// 底部优势说明
slide8.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.5, w: 9, h: 0.3,
    fill: { color: colors.accent }
});
slide8.addText("🚀 共享内存避免了数据拷贝，是性能最高的 IPC 方式，适合传输图片、视频等大文件", {
    x: 0.5, y: 5.5, w: 9, h: 0.3,
    fontSize: 12, fontFace: fonts.body, color: colors.white,
    align: "center", valign: "middle"
});

// ==================== 第9页：选择指南 ====================
let slide9 = pres.addSlide();
slide9.background = { color: colors.white };

// 标题
slide9.addText("IPC 方式选择指南", {
    x: 0.5, y: 0.3, w: 9, h: 0.8,
    fontSize: 36, fontFace: fonts.header, color: colors.primary, bold: true,
    align: "left", valign: "middle"
});

// 选择矩阵
slide9.addText("根据场景选择合适的 IPC 方式", {
    x: 0.5, y: 1.2, w: 9, h: 0.5,
    fontSize: 16, fontFace: fonts.body, color: colors.text,
    align: "left", valign: "middle"
});

// 场景卡片
const scenarios = [
    { 
        title: "简单数据传递", 
        method: "Messenger", 
        reason: "轻量级，易于实现",
        color: colors.secondary
    },
    { 
        title: "复杂接口调用", 
        method: "AIDL", 
        reason: "支持多方法、复杂数据",
        color: colors.primary
    },
    { 
        title: "数据共享", 
        method: "ContentProvider", 
        reason: "标准化 URI 接口",
        color: colors.accent
    },
    { 
        title: "大文件传输", 
        method: "SharedMemory", 
        reason: "零拷贝，性能最高",
        color: colors.dark
    }
];

// 2x2 网格布局
const positions = [
    { x: 0.5, y: 1.8 },
    { x: 5.2, y: 1.8 },
    { x: 0.5, y: 3.6 },
    { x: 5.2, y: 3.6 }
];

scenarios.forEach((item, index) => {
    const pos = positions[index];
    
    // 卡片背景
    slide9.addShape(pres.shapes.RECTANGLE, {
        x: pos.x, y: pos.y, w: 4.3, h: 1.5,
        fill: { color: colors.light },
        line: { color: item.color, width: 2 },
        shadow: { type: "outer", color: "000000", blur: 4, offset: 2, angle: 135, opacity: 0.1 }
    });
    
    // 场景
    slide9.addText(item.title, {
        x: pos.x + 0.2, y: pos.y + 0.15, w: 4, h: 0.35,
        fontSize: 14, fontFace: fonts.body, color: colors.dark, bold: true,
        align: "left", valign: "middle"
    });
    
    // 推荐方式
    slide9.addShape(pres.shapes.RECTANGLE, {
        x: pos.x + 0.2, y: pos.y + 0.55, w: 1.5, h: 0.35,
        fill: { color: item.color }
    });
    slide9.addText(item.method, {
        x: pos.x + 0.2, y: pos.y + 0.55, w: 1.5, h: 0.35,
        fontSize: 12, fontFace: fonts.body, color: colors.white, bold: true,
        align: "center", valign: "middle"
    });
    
    // 原因
    slide9.addText(item.reason, {
        x: pos.x + 0.2, y: pos.y + 1.0, w: 3.9, h: 0.4,
        fontSize: 11, fontFace: fonts.body, color: colors.text,
        align: "left", valign: "middle"
    });
});

// ==================== 第10页：总结 ====================
let slide10 = pres.addSlide();
slide10.background = { color: colors.primary };

// 标题
slide10.addText("总结", {
    x: 0.5, y: 0.5, w: 9, h: 0.8,
    fontSize: 44, fontFace: fonts.header, color: colors.white, bold: true,
    align: "center", valign: "middle"
});

// 要点
const summaryPoints = [
    "Linux IPC 机制在 Android 中基本可用",
    "Binder 是 Android IPC 的核心创新",
    "Messenger 适合简单场景，AIDL 适合复杂接口",
    "ContentProvider 是数据共享的标准方案",
    "共享内存提供最高性能的传输能力"
];

yPos = 1.5;
summaryPoints.forEach((point, index) => {
    // 圆点
    slide10.addShape(pres.shapes.OVAL, {
        x: 1.5, y: yPos + 0.1, w: 0.2, h: 0.2,
        fill: { color: colors.accent }
    });
    
    // 文字
    slide10.addText(point, {
        x: 1.9, y: yPos, w: 6.5, h: 0.5,
        fontSize: 18, fontFace: fonts.body, color: colors.white,
        align: "left", valign: "middle"
    });
    
    yPos += 0.7;
});

// 装饰线
slide10.addShape(pres.shapes.RECTANGLE, {
    x: 3.5, y: 5.0, w: 3, h: 0.05,
    fill: { color: colors.accent }
});

// 感谢文字
slide10.addText("感谢阅读", {
    x: 0.5, y: 5.3, w: 9, h: 0.5,
    fontSize: 24, fontFace: fonts.body, color: colors.accent,
    align: "center", valign: "middle"
});

// 保存文件
pres.writeFile({ fileName: "/Users/zhy/zhy/blog_ai/Android_IPC_详解.pptx" });
console.log("PPT 已生成: /Users/zhy/zhy/blog_ai/Android_IPC_详解.pptx");
