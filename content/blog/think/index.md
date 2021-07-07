---
layout: post
title: 架构整洁之道
date: 2021-07-07
author: 'libiao'
postname: clean_arch
tags:
  - 架构
---

## 系统的专制统治
大教堂是艺术史上无与伦比的成就。它的原则既不乏味也不混乱⋯⋯真正达到了风格上的极致，完成这件作品的艺术家们，完全领会和吸收了以往的成功经验，也完全掌握了他们那个 时代的技术，而且在应用的时候做到了恰如其分，绝不轻率，也绝不花哨。 
正是 Jean d ‘Orbais 构思了建筑的整体设计，这个设计得到了后继者的认同，至少在本质 上如此。这也是这个建筑如此和谐统一的原因之一。 
 
## 自由流动的代码
向上流动，项目间流动，独立为新项目
1. 优先按业务模块，其次按功能模块
2. 良好的分层设计：Model、View(Pure Components)、Container()（Controller）
3. Alias，再看到 ../../../../../统统打死

## Settings are for successful products
Settings are for successful products. For MVP, just get the defaults right.
Great products usually start with a dead simple onboarding journey that minimizes or entirely eliminates options.
From a startup evolution or product management perspective, another way of considering this wisdom is: absolutely resist adding options until substantial evidence of success without them exists.

## 系统的无序趋势
如果没有外部能量输入，封闭系统趋向越来越混乱（熵越来越大）。如果要让一个系统变得更有序，必须有外部能量的输入。
如何对抗系统的无序趋势？
- 严格的规范+CR
  - 可以理解为能量的输入（这绝对不是一件容易的事）
- 允许腐败的架构
  - 既然100%整洁的架构无法达到，规范也不可能100%执行，那如何合理的容纳“腐败”

## 系统的稳定
比较悲观阴暗的路线认为，只有权威和刚性才能带来强壮与稳定。如果某项变更成本高昂，那么就应该忽视它：变更背后的需求要么应该被抑制，要么就应该被丢到官僚主义或者流程的机器中去绞碎。
事实上，这确实在发生。
短期内，拒绝高成本的变更可能会见到成效，系统在按照预想的发展。但这只是理想情况，即使你能挡住99.9%的高成本变动，也会有0.1%的变动无法拒绝。长期拒绝变更是在积攒一个Big Surprise。这个surprise最终会击垮你的架构。换句话说，到了该还技术债的时候了。
不要以系统稳定为由拒绝变更。

## 当你闻到"Code Smell"
你按照你的设想，从头设计并且落地了一个自认为比较优雅的系统。你参考了SOLID原则以及种种架构思想，按照你的架构和架构规划进行下去，这个系统将不会惧怕大的的业务变更。
但这个系统不可能只有你来维护，很快就会出现不和谐的部分：一些Code Smell出现在了Repo里，但需求要上线。。
这时候大概率会有人说一句”下次记得改吧“，可能是Reviewer也可能是CR的提交者。但经验告诉我们，这些异味代码大概率会留在系统内
怎么解？

## 规范与创造性
我总觉得制定过多的规范会使Coding变成非常格式化的劳动，而非具备极强生命力的创造性工作。所以其实我不太想制定过多形式化的规范，但这在工程角度一定是错误的。
想到大学初学JAVA时和一个强的离谱的老哥聊天，吐槽写JAVA写起来如何如何繁琐（可能JS写太多了），他的回答是，确实非常繁琐，但也正是他的繁琐，你会发现学JAVA不久的人和写JAVA很久的人，工程代码其实也是大同小异。暂且不说这个结论是否100%正确。但是一个信息是可以确定的：严格的规范和模式可以让你的系统代码风格趋向一致。
所以一个不成熟的抽象：成熟的系统应该具有的几个特征：稳定的架构+一定程度的范式

## JAM Stack到底是个啥
看到了一个新概念，JAM Stack （JavaScript、 APIS、 Markup），但是所有的前端工程不都是这三种吗。。没太理解这个概念到底是想和什么做区分。
翻了下官网，JAM Stack的概念似乎已经不只是停留在JavaScript、 APIS、 Markup的含义，
Jamstack is the new standard architecture for the web. Using Git workflows and modern build tools, pre-rendered content is served to a CDN and made dynamic through APIs and serverless functions. Technologies in the stack include JavaScript frameworks, Static Site Generators, Headless CMSs, and CDNs.
找到了一篇比较好的文章:https://zhuanlan.zhihu.com/p/281085404
简单来说，Jamstack概念本质是一种增强的静态网站。Pre-rendering、Enhancing with JavaScript、Supercharging with services：使用SSG生成静态页面，并可直接托管到CDN上、使用APIs或Serverless云函数赋予动态能力。

## 用户能决定些什么
被用户推着走和随意摩擦用户是两种极端，前者容易发生在B端，后者发生在C端。我都见过。

## 复杂度
在系统中，复杂是主动且被动蕴含的，人为的设计、代码改进走错了方向、团队协作对齐出现问题等都会引入复杂，有不得不解决的难题时也会引入复杂。
复杂度不会凭空消失，只会转移。当你听到有人对于精致的概念模型侃侃而谈，请保持清醒。
Complexity Has to Live Somewhere

## 从0开始的新Repo能更好吗
能好点，但它最终会让你想再建一个新Repo来逃避遇到的新问题，过度自信会让你陷入和之前一样的困局。


## 隐式接口
隐式接口定律表明，当你的 API 有足够多的用户时，API 的所有行为（包括那些未囊括在公共说明中的一部分）最终都会被其他人所依赖。
很多系统中也是这样，即使你给用户架了100座桥来过河，他也可能会直接游过去。当你把河填上的时候，他会来责问你河没了我要怎么游过去呢。

## 杠杆
杠杆点所处的层次越高，杠杆作用就越大，系统变化的能力就越强，但抵制变化的力量也越强。
当你在扮演杠杆的角色时，请时刻反思自己是起到了正向还是负向作用。

## 转嫁负担
当面对一个系统性问题时，如果采用的解决方案根本无助于解决潜在的根本问题，只是缓解了问题的症状时，就会产生转嫁负担、依赖性、上瘾的状况。不管是麻痹个人感官的物质，还是把潜在麻烦隐藏起来的政策，人们选项择的干预行动都不能解决真正的问题。 如果选择并实施的干预措施，导致系统原本的自我调适能力萎缩或受到侵蚀，就会引发一个破坏性的增强回路。系统自我调适能力越差，就需要越多的干预措施；而这回是的系统的自我调适变得更差，不得不更多的依赖外部干预者。
对策： 应对这一陷阱最好的办法是提前预防，防止跌入陷阱。一定要意识到只是缓解症状或掩饰信号的政策或做法，都不能真正的解决问题。因此要将关注点从短期的救济转移到长期的结构性重建上来。

## 系统思考缺乏症
五种典型症状： 只见树木，不见树林； 只看眼前，不看长远； 只看现象，不见本质； 头痛医头，脚痛医脚； 本位主义，局限思考。
把注意力从短期的事件上移开，看到更长期的行为和系统内在结构，不要被表象所迷惑.

## 从0开始的新Repo能更好吗
能好点，但它最终会让你想再建一个新Repo来逃避遇到的新问题，过度自信会让你陷入和之前一样的困局。

