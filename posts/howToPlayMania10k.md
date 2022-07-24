---
title: '如何上手Mania10K'
date: '2022-07-24'
cover: ''
tag: '教程 & 浅谈'
---

# 什么是Mania10key

如果你正在玩osu! 或者任何PC的音游游戏，那么你可能没想过有10k的模式，因为它太小众了；目前截止国内活跃的10k玩家也就20来人。如果你是玩累了7k 或者4k 6k之类的玩家，想来尝试不一样的mania体验，那么你可以来试试10k。

如果你听到10k就一脸拒绝，一口口大佬，一口口我不会，你不会去尝试的，而且 本文也不适合您，您可以直接关闭。如果很勇敢继续看下去的话，希望您能对10k有新的认识。



**前排警告，如果您打mania就是为了段位，我不推荐你玩10k，更推荐你玩4k；而且10k也没什么段位！！！因为它key数多，静下心玩才能体会到它的乐趣**

---

## Mania10k 游玩的准备

首先，你需要一个osu!的客户端    [osu!官网](https://osu.ppy.sh/)
打开游戏，打开游戏设置`Ctrl + O`

![](https://rino.xn--xj8hhl.tk/images/mania10k/1.jpg)

选择5k co-op键位即可设置10k的键位

### 铺面下载

你可以从我们的10k交流群里下载到 QQ群 166683402

或者你可以到国际的Discord交流群里下到曲包 

你也可以在官网里搜索

`cs=10` 或者 `keys=10`来搜索铺面

*如果铺面难度名是HS hitsound之类的，请忽略这些铺面！！*

### 键位推荐

![](https://rino.xn--xj8hhl.tk/images/mania10k/2.jpg)

这是我的常用键位，如果你对键位感觉很别扭，你可以去看看la的键位教程[BV1Nt4y1s73R](https://www.bilibili.com/video/BV1Nt4y1s73R)

### 皮肤

当你设置好键位的时候，你打开了一首10k的歌曲 想尝试的时候 发现你的皮肤不支持10k；这就会让你有极其不好的体验，所以你得先设置一下你的皮肤

在你的osu 皮肤文件夹里找到skin.ini文件，这里会详细说明skin.ini的作用

#### [mania]配置

这里就是设置mania的地方，如果你的皮肤支持mania，就是在这个文件里设置的

```ini
...

[Mania]
Keys: 4
//*4K 内容*

[Mania]
Keys: 5
//*5K 内容*

...
```

你想要添加10k的配置

你需要在skin.ini的末尾添加一个```[Mania]```之后换行添加```Keys: 10```

```ini
[Mania]
Keys: 10
```

之后，搬你之前其他key数的配置

例如 我皮肤文件里的9k配置

```ini
[Mania]
Keys:9
NoteBodyStyle:0
ColumnStart: 202
ColumnWidth: 50,50,50,50,50,50,50,50,50
WidthForNoteHeightScale: 50
ColumnLineWidth: 0,0,0,0,0,0,0,0,0,0
HitPosition: 480
LightPosition:480
ScorePosition: 280
ComboPosition: 80

...
```

把下面的配置复制到你的10k配置里

```ini
[Mania]
Keys: 10
NoteBodyStyle:0
SplitStages: 0
ColumnStart: 152
ColumnWidth: 55,55,55,55,55,55,55,55,55,55
WidthForNoteHeightScale: 55
ColumnLineWidth: 0,0,0,0,0,0,0,0,0,0,0
HitPosition: 480
LightPosition:480
ScorePosition: 280
ComboPosition: 80
...
```

微调你的配置

比如`ColumnStart` `ColumnWidth` `ColumnLineWidth`这些在你之前的key数添加到10k的配置下

如果有`NoteImage`的配置 ，请指定好它的note图片。

*10k的图片是从0 开始 到9 结束*

调整完毕后，回到游戏 按下`Ctrl + Shift + alt + S` 来刷新你的皮肤

#### 下落皮肤分叉成5k co-op了？

你只需要在你的10k配置里添加

`SplitStages: 0`

#### 颜色错了？

请修改你的`NoteImage`相关

详细参考[皮肤 / skin.ini · wiki | osu!](https://osu.ppy.sh/wiki/zh/Skinning/skin.ini#[mania])

#### 皮肤下载

只要支持mania皮肤的即可通过以上配置去设置你的10k模式皮肤

下载其他请从互联网里找

群里也有一些皮肤分享

或者你可以试试我个人做的皮肤，你只需要在这个网站里返回到主页就可以看到

### 读谱

入门第一件事情，是打1星开始，你得重新找映射

这里推荐你的映射把它们归类 譬如左右手分为2大类，你的中指是它们的中心

12311 12321 这样去分类你的note和读谱，你的note皮肤也需要设置为相应的颜色，这需要你的皮肤有这个素材；如果你没有素材，你可以打开你的ps进行绘制。



未完待续 我先吃饭