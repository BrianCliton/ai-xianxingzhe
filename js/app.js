/* =============================================
   AI先行者 — 数据 & 交互逻辑
============================================= */

// ---- 分类定义 ----
const CATEGORIES = [
  { id: 'all',         name: '全部工具',  icon: '🌟', desc: '收录全球优质AI工具，涵盖对话、绘图、视频、写作等多种类型，持续更新中' },
  { id: 'chat',        name: 'AI对话',    icon: '💬', desc: '顶级AI聊天助手与大语言模型，智能问答、创意写作、知识问询一站搞定' },
  { id: 'image',       name: 'AI绘图',    icon: '🎨', desc: 'AI图像生成与艺术创作工具，文字描述一秒变精美图像' },
  { id: 'video',       name: 'AI视频',    icon: '🎬', desc: 'AI视频生成、编辑与数字人制作平台，轻松产出高质量视频' },
  { id: 'writing',     name: 'AI写作',    icon: '✍️', desc: 'AI辅助写作、文案创作与内容生成工具，效率提升10倍' },
  { id: 'code',        name: 'AI编程',    icon: '💻', desc: 'AI代码补全、智能编程助手与开发加速工具' },
  { id: 'music',       name: 'AI音乐',    icon: '🎵', desc: 'AI音乐创作、语音合成与音频处理工具' },
  { id: 'search',      name: 'AI搜索',    icon: '🔍', desc: 'AI驱动的下一代智能搜索引擎与知识问答平台' },
  { id: 'office',      name: 'AI办公',    icon: '📊', desc: 'AI演示、文档、会议助手，提升职场效率' },
  { id: 'translation', name: 'AI翻译',    icon: '🌐', desc: '高精度AI机器翻译工具，支持多语言互译' },
  { id: 'design',      name: 'AI设计',    icon: '🖌️', desc: 'AI平面设计、Logo创作与UI原型生成工具' },
  { id: 'tools',       name: 'AI工具箱',  icon: '🛠️', desc: 'AI实用工具集：抠图、超分、数字人、模型平台等功能性工具' },
];

// 分类背景色（用于avatar fallback）
const CAT_COLORS = {
  chat:        'linear-gradient(135deg,#7c3aed,#9333ea)',
  image:       'linear-gradient(135deg,#ec4899,#db2777)',
  video:       'linear-gradient(135deg,#3b82f6,#6366f1)',
  writing:     'linear-gradient(135deg,#0d9488,#0891b2)',
  code:        'linear-gradient(135deg,#10b981,#059669)',
  music:       'linear-gradient(135deg,#f97316,#ef4444)',
  search:      'linear-gradient(135deg,#06b6d4,#0ea5e9)',
  office:      'linear-gradient(135deg,#6366f1,#4f46e5)',
  translation: 'linear-gradient(135deg,#8b5cf6,#6d28d9)',
  design:      'linear-gradient(135deg,#f43f5e,#e11d48)',
  tools:       'linear-gradient(135deg,#f59e0b,#d97706)',
};

// ---- 工具数据 ----
const TOOLS = [
  // ======== AI对话 ========
  {
    id:1, name:'ChatGPT', cat:'chat',
    desc:'OpenAI旗舰AI对话模型，支持GPT-4o多模态能力，擅长推理、写作与代码，全球用户最多的AI产品。',
    url:'https://chat.openai.com', tags:['免费/付费','热门']
  },
  {
    id:2, name:'Claude', cat:'chat',
    desc:'Anthropic研发的安全智能AI助手，以超长上下文、深度分析和优质写作著称，深受专业用户喜爱。',
    url:'https://claude.ai', tags:['免费/付费','热门']
  },
  {
    id:3, name:'Gemini', cat:'chat',
    desc:'Google DeepMind打造的多模态AI模型，深度整合Google搜索与生态服务，支持图文理解。',
    url:'https://gemini.google.com', tags:['免费/付费']
  },
  {
    id:4, name:'Microsoft Copilot', cat:'chat',
    desc:'微软AI助手，基于GPT-4o整合Bing实时搜索，Office 365深度集成，适合商业用户。',
    url:'https://copilot.microsoft.com', tags:['免费']
  },
  {
    id:5, name:'DeepSeek', cat:'chat',
    desc:'深度求索研发的高性能推理大模型，数学与代码能力出众，免费开放使用，全球爆火国产AI。',
    url:'https://chat.deepseek.com', tags:['免费','国产','热门']
  },
  {
    id:6, name:'Kimi', cat:'chat',
    desc:'月之暗面出品，支持200K超长上下文，可上传PDF/文档进行深度分析，中文理解优秀。',
    url:'https://kimi.moonshot.cn', tags:['免费','国产']
  },
  {
    id:7, name:'豆包', cat:'chat',
    desc:'字节跳动出品的AI助手，功能全面，对话流畅自然，支持图像识别，国内活跃用户众多。',
    url:'https://www.doubao.com', tags:['免费','国产']
  },
  {
    id:8, name:'文心一言', cat:'chat',
    desc:'百度ERNIE大模型驱动的智能对话平台，中文能力强，支持绘图与多模态任务。',
    url:'https://yiyan.baidu.com', tags:['免费','国产']
  },
  {
    id:9, name:'通义千问', cat:'chat',
    desc:'阿里巴巴通义大模型，中英文对话能力强，支持长文档处理与代码生成，免费使用。',
    url:'https://tongyi.aliyun.com', tags:['免费','国产']
  },
  {
    id:10, name:'讯飞星火', cat:'chat',
    desc:'科大讯飞认知大模型，擅长中文理解与语音交互，教育场景表现突出，语音能力业界领先。',
    url:'https://xinghuo.xfyun.cn', tags:['免费','国产']
  },
  {
    id:11, name:'智谱清言', cat:'chat',
    desc:'清华技术加持的GLM系列大模型，支持多模态对话，开放API接口，开发者友好。',
    url:'https://chatglm.cn', tags:['免费','国产']
  },
  {
    id:12, name:'Grok', cat:'chat',
    desc:'xAI出品，整合X(Twitter)平台实时数据，擅长时事热点分析，风格幽默直率。',
    url:'https://grok.x.ai', tags:['免费/付费']
  },
  {
    id:13, name:'Perplexity', cat:'chat',
    desc:'融合实时联网搜索的AI问答引擎，答案带引用来源，适合需要实时信息的场景。',
    url:'https://www.perplexity.ai', tags:['免费/付费','热门']
  },
  {
    id:14, name:'Meta AI', cat:'chat',
    desc:'Meta开发的AI助手，基于开源Llama模型，整合WhatsApp/Instagram，支持图像生成。',
    url:'https://www.meta.ai', tags:['免费']
  },
  {
    id:15, name:'Mistral Chat', cat:'chat',
    desc:'法国AI公司Mistral AI开发的高效轻量AI模型，部分开源，欧洲数据合规表现优异。',
    url:'https://chat.mistral.ai', tags:['免费/付费']
  },

  // ======== AI绘图 ========
  {
    id:16, name:'Midjourney', cat:'image',
    desc:'全球最受欢迎的AI图像生成工具，艺术美感极强，社区活跃，持续引领图像AI发展方向。',
    url:'https://www.midjourney.com', tags:['付费','热门']
  },
  {
    id:17, name:'DALL-E 3', cat:'image',
    desc:'OpenAI出品的图像生成模型，集成于ChatGPT，文字理解准确，擅长复杂场景构图。',
    url:'https://openai.com', tags:['付费']
  },
  {
    id:18, name:'Stable Diffusion', cat:'image',
    desc:'影响力最大的开源AI图像生成模型，支持本地部署，海量社区模型，高度可定制化。',
    url:'https://stability.ai', tags:['免费','开源']
  },
  {
    id:19, name:'Adobe Firefly', cat:'image',
    desc:'Adobe出品的生成式AI创意工具，与PS/Illustrator深度集成，商用版权有保障。',
    url:'https://firefly.adobe.com', tags:['免费/付费']
  },
  {
    id:20, name:'Ideogram', cat:'image',
    desc:'擅长在生成图像中呈现清晰可读文字，海报/Logo设计场景表现出色，效果惊艳。',
    url:'https://ideogram.ai', tags:['免费/付费']
  },
  {
    id:21, name:'Leonardo AI', cat:'image',
    desc:'专业级AI图像与游戏资产生成平台，提供丰富的模型选择，适合创意人员和游戏开发者。',
    url:'https://leonardo.ai', tags:['免费/付费']
  },
  {
    id:22, name:'即梦AI', cat:'image',
    desc:'字节跳动出品的中文AI图像创作工具，操作简便，支持多种风格，内容丰富易上手。',
    url:'https://jimeng.jianying.com', tags:['免费','国产']
  },
  {
    id:23, name:'文心一格', cat:'image',
    desc:'百度出品的AI艺术创作平台，中文理解能力强，涵盖国风、写实、动漫等多种风格。',
    url:'https://yige.baidu.com', tags:['免费','国产']
  },
  {
    id:24, name:'通义万相', cat:'image',
    desc:'阿里巴巴通义系列AI绘图工具，支持文生图、图生图，提供商业版权保障。',
    url:'https://tongyi.aliyun.com/wanxiang', tags:['免费','国产']
  },
  {
    id:25, name:'Playground AI', cat:'image',
    desc:'功能丰富的在线AI图像创作平台，支持多种模型切换，适合探索不同风格的创作者。',
    url:'https://playground.ai', tags:['免费/付费']
  },
  {
    id:26, name:'NightCafe', cat:'image',
    desc:'多风格AI艺术图像创作平台，支持多种算法，社区活跃，每日免费额度适合入门。',
    url:'https://creator.nightcafe.studio', tags:['免费/付费']
  },
  {
    id:27, name:'海艺AI', cat:'image',
    desc:'国内领先的AI绘画创作与社区平台，集成多种主流模型，中文界面友好，生态完善。',
    url:'https://www.seaart.ai', tags:['免费','国产']
  },
  {
    id:28, name:'Canva AI', cat:'image',
    desc:'全球最流行设计平台Canva集成的AI图像生成与编辑功能，非设计师也能轻松上手。',
    url:'https://www.canva.com', tags:['免费/付费','热门']
  },
  {
    id:29, name:'Flux AI', cat:'image',
    desc:'Black Forest Labs出品的顶级开源图像生成模型，图像质量极高，细节丰富，真实感强。',
    url:'https://flux1.ai', tags:['开源','免费']
  },

  // ======== AI视频 ========
  {
    id:30, name:'Sora', cat:'video',
    desc:'OpenAI发布的顶级文生视频模型，支持生成长达60秒的高清视频，物理模拟真实，震撼业界。',
    url:'https://sora.com', tags:['付费','热门']
  },
  {
    id:31, name:'Runway ML', cat:'video',
    desc:'专业创作者首选的AI视频生成平台，Gen-3 Alpha模型质量出众，提供丰富创意工具。',
    url:'https://runwayml.com', tags:['免费/付费','热门']
  },
  {
    id:32, name:'可灵AI', cat:'video',
    desc:'快手出品的高质量AI视频生成工具，支持文生视频与图生视频，运动表现自然流畅。',
    url:'https://klingai.kuaishou.com', tags:['免费/付费','国产','热门']
  },
  {
    id:33, name:'即梦AI视频', cat:'video',
    desc:'字节跳动旗下剪映推出的AI视频生成功能，操作简单，与剪辑工具深度整合。',
    url:'https://jimeng.jianying.com', tags:['免费','国产']
  },
  {
    id:34, name:'Pika', cat:'video',
    desc:'创意AI视频生成与编辑工具，支持图片转视频、视频扩展和局部修改，产品体验出色。',
    url:'https://pika.art', tags:['免费/付费']
  },
  {
    id:35, name:'Luma Dream Machine', cat:'video',
    desc:'Luma Labs出品的高质量AI视频生成工具，运动流畅，支持相机控制，细节表现优秀。',
    url:'https://lumalabs.ai/dream-machine', tags:['免费/付费']
  },
  {
    id:36, name:'HeyGen', cat:'video',
    desc:'专业AI数字人视频制作平台，支持声音克隆与形象定制，企业营销视频制作首选。',
    url:'https://www.heygen.com', tags:['免费/付费']
  },
  {
    id:37, name:'海螺AI', cat:'video',
    desc:'MiniMax出品的AI视频生成工具，视频质量高，支持文生视频和图生视频。',
    url:'https://hailuoai.com', tags:['免费','国产']
  },
  {
    id:38, name:'Vidu', cat:'video',
    desc:'生数科技的AI视频生成大模型，国产视频AI代表，支持高清视频创作，持续迭代。',
    url:'https://www.vidu.cn', tags:['免费','国产']
  },
  {
    id:39, name:'Synthesia', cat:'video',
    desc:'企业级AI虚拟人视频制作平台，支持140+语言，适合制作培训、营销和内部沟通视频。',
    url:'https://www.synthesia.io', tags:['付费']
  },

  // ======== AI写作 ========
  {
    id:40, name:'Jasper', cat:'writing',
    desc:'全球领先的AI营销写作平台，提供50+写作模板，支持品牌调性定制，适合营销团队。',
    url:'https://www.jasper.ai', tags:['付费']
  },
  {
    id:41, name:'Copy.ai', cat:'writing',
    desc:'AI驱动的营销文案与内容生成工具，支持多种内容类型，提供丰富的行业模板。',
    url:'https://www.copy.ai', tags:['免费/付费']
  },
  {
    id:42, name:'Notion AI', cat:'writing',
    desc:'Notion内置的AI写作助手，支持起草、润色、翻译和总结，与知识库深度集成。',
    url:'https://www.notion.so', tags:['付费']
  },
  {
    id:43, name:'秘塔写作猫', cat:'writing',
    desc:'国内专业AI写作与内容创作平台，支持文章润色、改写、续写，中文写作体验最佳之一。',
    url:'https://xiezuocat.com', tags:['免费/付费','国产']
  },
  {
    id:44, name:'QuillBot', cat:'writing',
    desc:'AI句子改写与内容润色工具，支持多种改写模式，英文写作优化和语法纠错效果出众。',
    url:'https://quillbot.com', tags:['免费/付费']
  },
  {
    id:45, name:'Grammarly', cat:'writing',
    desc:'全球最受欢迎的英文写作助手，AI语法检查、风格优化，适合英语学习者和职场人士。',
    url:'https://www.grammarly.com', tags:['免费/付费']
  },
  {
    id:46, name:'Sudowrite', cat:'writing',
    desc:'专注于AI小说与创意写作辅助，提供故事展开、描述增强等功能，创作者必备工具。',
    url:'https://www.sudowrite.com', tags:['付费']
  },
  {
    id:47, name:'Writesonic', cat:'writing',
    desc:'多场景AI内容创作工具，支持SEO优化文章、落地页、广告文案等，支持多语言。',
    url:'https://writesonic.com', tags:['免费/付费']
  },
  {
    id:48, name:'彩云小梦', cat:'writing',
    desc:'国内AI小说续写与创意写作工具，支持中文故事生成与续写，已有大量创作者使用。',
    url:'https://if.caiyunai.com', tags:['免费/付费','国产']
  },
  {
    id:49, name:'讯飞写作', cat:'writing',
    desc:'科大讯飞的AI写作辅助平台，中文写作能力强，支持多种文体自动生成与辅助修改。',
    url:'https://huixie.iflyrec.com', tags:['免费/付费','国产']
  },

  // ======== AI编程 ========
  {
    id:50, name:'GitHub Copilot', cat:'code',
    desc:'全球最流行的AI代码补全工具，基于OpenAI Codex，支持几乎所有主流IDE，效率提升显著。',
    url:'https://github.com/features/copilot', tags:['付费','热门']
  },
  {
    id:51, name:'Cursor', cat:'code',
    desc:'基于Claude的新一代AI代码编辑器，支持全代码库理解与多文件编辑，开发者体验最佳。',
    url:'https://cursor.sh', tags:['免费/付费','热门']
  },
  {
    id:52, name:'Windsurf', cat:'code',
    desc:'Codeium推出的AI代码编辑器，Cascade智能体功能强大，可理解项目全局上下文。',
    url:'https://codeium.com/windsurf', tags:['免费/付费']
  },
  {
    id:53, name:'Codeium', cat:'code',
    desc:'免费的AI代码补全与聊天工具，支持70+编程语言，主流IDE全覆盖，性能媲美付费工具。',
    url:'https://codeium.com', tags:['免费']
  },
  {
    id:54, name:'Tabnine', cat:'code',
    desc:'隐私优先的AI代码补全工具，支持本地部署，企业合规性好，适合对数据安全有要求的团队。',
    url:'https://www.tabnine.com', tags:['免费/付费']
  },
  {
    id:55, name:'v0 by Vercel', cat:'code',
    desc:'Vercel出品的AI前端UI代码生成器，输入描述自动生成React组件与Tailwind代码。',
    url:'https://v0.dev', tags:['免费/付费']
  },
  {
    id:56, name:'Bolt.new', cat:'code',
    desc:'StackBlitz出品的AI全栈应用生成工具，在浏览器中一句话生成并运行完整项目。',
    url:'https://bolt.new', tags:['免费/付费']
  },
  {
    id:57, name:'Lovable', cat:'code',
    desc:'AI驱动的Web应用快速构建平台，通过对话构建完整应用，自动生成代码并部署。',
    url:'https://lovable.dev', tags:['免费/付费']
  },
  {
    id:58, name:'Replit AI', cat:'code',
    desc:'Replit云端AI编程环境，AI辅助代码补全与解释，适合学习编程和快速原型开发。',
    url:'https://replit.com', tags:['免费/付费']
  },
  {
    id:59, name:'Amazon Q', cat:'code',
    desc:'AWS的企业级AI编程助手，深度集成AWS生态，擅长云端开发和AWS服务相关代码。',
    url:'https://aws.amazon.com/q', tags:['免费/付费']
  },
  {
    id:60, name:'Claude Code', cat:'code',
    desc:'Anthropic的AI命令行编程工具，在终端中直接操作代码库，代码理解与生成能力极强。',
    url:'https://claude.ai', tags:['付费']
  },
  {
    id:61, name:'Continue', cat:'code',
    desc:'完全开源的AI代码助手IDE插件，支持接入多种模型，隐私有保障，开发者可深度定制。',
    url:'https://continue.dev', tags:['开源','免费']
  },

  // ======== AI音乐 ========
  {
    id:62, name:'Suno AI', cat:'music',
    desc:'最受欢迎的AI音乐创作平台，输入歌词和风格即可生成带人声的完整歌曲，效果震撼。',
    url:'https://suno.ai', tags:['免费/付费','热门']
  },
  {
    id:63, name:'Udio', cat:'music',
    desc:'高质量AI音乐创作工具，音乐多样性强，支持丰富的风格和流派，与Suno并列顶级。',
    url:'https://www.udio.com', tags:['免费/付费']
  },
  {
    id:64, name:'ElevenLabs', cat:'music',
    desc:'全球顶级AI语音合成与声音克隆平台，音色自然逼真，支持多语言，配音行业首选。',
    url:'https://elevenlabs.io', tags:['免费/付费','热门']
  },
  {
    id:65, name:'AIVA', cat:'music',
    desc:'AI古典音乐作曲工具，专注影视配乐与游戏音乐创作，已被多个商业项目采用。',
    url:'https://www.aiva.ai', tags:['免费/付费']
  },
  {
    id:66, name:'Mubert', cat:'music',
    desc:'AI生成版权免费背景音乐，可按情绪/场景/时长定制，适合视频创作者和开发者。',
    url:'https://mubert.com', tags:['免费/付费']
  },
  {
    id:67, name:'网易天音', cat:'music',
    desc:'网易出品的AI音乐创作平台，支持AI作词、作曲、编曲一站式服务，中文音乐场景优化。',
    url:'https://tianyin.music.163.com', tags:['免费','国产']
  },
  {
    id:68, name:'魔音工坊', cat:'music',
    desc:'国内专业AI配音与语音合成工具，提供海量音色，支持方言与特效音，视频配音必备。',
    url:'https://www.moyin.com', tags:['免费/付费','国产']
  },
  {
    id:69, name:'NotebookLM Audio', cat:'music',
    desc:'Google NotebookLM的音频概览功能，可将文档一键转化为播客风格的音频讨论节目。',
    url:'https://notebooklm.google.com', tags:['免费']
  },

  // ======== AI搜索 ========
  {
    id:70, name:'Perplexity AI', cat:'search',
    desc:'引领AI搜索革命的智能问答引擎，实时联网，答案附带来源引用，被誉为"AI时代的Google"。',
    url:'https://www.perplexity.ai', tags:['免费/付费','热门']
  },
  {
    id:71, name:'秘塔AI搜索', cat:'search',
    desc:'国内最受欢迎的AI搜索引擎，无广告，回答全面深入，支持搜索思维导图输出，体验佳。',
    url:'https://metaso.cn', tags:['免费','国产','热门']
  },
  {
    id:72, name:'天工AI搜索', cat:'search',
    desc:'昆仑万维旗下的中文AI搜索平台，支持实时联网，对中文内容理解优化，产品体验流畅。',
    url:'https://search.tiangong.cn', tags:['免费','国产']
  },
  {
    id:73, name:'You.com', cat:'search',
    desc:'多模型支持的AI搜索引擎，可选GPT-4/Claude等模型，支持代码搜索和图像生成搜索。',
    url:'https://you.com', tags:['免费']
  },
  {
    id:74, name:'Phind', cat:'search',
    desc:'专为开发者优化的AI搜索引擎，擅长技术问题检索，代码示例质量高，深受程序员喜爱。',
    url:'https://www.phind.com', tags:['免费']
  },
  {
    id:75, name:'Exa', cat:'search',
    desc:'专为AI应用设计的下一代语义搜索API，理解自然语言查询，适合开发者构建AI产品。',
    url:'https://exa.ai', tags:['免费/付费']
  },

  // ======== AI办公 ========
  {
    id:76, name:'Notion AI', cat:'office',
    desc:'Notion内置的AI助手，支持起草文档、总结内容、翻译、提炼要点，与知识库无缝整合。',
    url:'https://www.notion.so', tags:['付费']
  },
  {
    id:77, name:'WPS AI', cat:'office',
    desc:'国内WPS办公套件的AI功能集成，支持文档写作、PPT生成、表格分析，对国内用户友好。',
    url:'https://ai.wps.cn', tags:['免费/付费','国产']
  },
  {
    id:78, name:'Gamma', cat:'office',
    desc:'AI一键生成专业演示文稿，输入主题自动生成结构完整、设计精美的PPT/网页展示。',
    url:'https://gamma.app', tags:['免费/付费']
  },
  {
    id:79, name:'Tome', cat:'office',
    desc:'AI驱动的故事化演示工具，设计风格现代，支持嵌入视频和交互元素，效果优雅。',
    url:'https://tome.app', tags:['免费/付费']
  },
  {
    id:80, name:'Otter.ai', cat:'office',
    desc:'AI实时会议转录与摘要工具，支持自动识别发言人，会议记录准确，英文效果尤佳。',
    url:'https://otter.ai', tags:['免费/付费']
  },
  {
    id:81, name:'Fireflies.ai', cat:'office',
    desc:'AI会议记录、摘要与分析平台，自动整理会议要点和待办事项，提升会议效率。',
    url:'https://fireflies.ai', tags:['免费/付费']
  },
  {
    id:82, name:'Beautiful.ai', cat:'office',
    desc:'AI智能幻灯片设计工具，自动调整布局保持设计一致性，快速产出美观的商业演示。',
    url:'https://www.beautiful.ai', tags:['付费']
  },
  {
    id:83, name:'飞书AI', cat:'office',
    desc:'字节跳动飞书平台集成的AI功能，支持会议纪要、文档创作和智能搜索，企业场景优化。',
    url:'https://www.feishu.cn', tags:['免费/付费','国产']
  },
  {
    id:84, name:'腾讯文档AI', cat:'office',
    desc:'腾讯文档集成的AI能力，支持文字润色、内容总结、表格分析，与微信生态深度连接。',
    url:'https://docs.qq.com', tags:['免费','国产']
  },

  // ======== AI翻译 ========
  {
    id:85, name:'DeepL', cat:'translation',
    desc:'全球公认最准确的AI翻译工具，语言表达地道自然，支持31种语言，专业用户首选。',
    url:'https://www.deepl.com', tags:['免费/付费','热门']
  },
  {
    id:86, name:'Google翻译', cat:'translation',
    desc:'全球使用最广泛的在线翻译服务，支持133种语言，拍照翻译与实时对话翻译功能实用。',
    url:'https://translate.google.com', tags:['免费']
  },
  {
    id:87, name:'有道翻译', cat:'translation',
    desc:'网易有道的专业AI翻译与词典，中英日韩等多语种支持，企业版文档翻译效果优质。',
    url:'https://fanyi.youdao.com', tags:['免费','国产']
  },
  {
    id:88, name:'百度翻译', cat:'translation',
    desc:'百度的AI机器翻译服务，支持200+语言互译，文档翻译与API接口服务完善。',
    url:'https://fanyi.baidu.com', tags:['免费','国产']
  },
  {
    id:89, name:'腾讯翻译君', cat:'translation',
    desc:'腾讯出品的多语言AI翻译工具，文档翻译格式保留好，支持小程序端便捷使用。',
    url:'https://fanyi.qq.com', tags:['免费','国产']
  },
  {
    id:90, name:'Papago', cat:'translation',
    desc:'Naver出品的AI翻译工具，韩语翻译业界领先，中日韩语种互译表现优异。',
    url:'https://papago.naver.com', tags:['免费']
  },

  // ======== AI设计 ========
  {
    id:91, name:'Canva', cat:'design',
    desc:'全球最流行的AI辅助设计平台，海量模板，AI魔法编辑与文生图功能，非设计师也能用。',
    url:'https://www.canva.com', tags:['免费/付费','热门']
  },
  {
    id:92, name:'Adobe Firefly', cat:'design',
    desc:'Adobe旗下生成式AI创意工具，深度集成PS/AI等软件，商用版权有保障，效果专业。',
    url:'https://firefly.adobe.com', tags:['免费/付费']
  },
  {
    id:93, name:'Figma AI', cat:'design',
    desc:'Figma集成的AI设计辅助功能，包括AI生成图层、自动布局和设计建议，设计师提效利器。',
    url:'https://www.figma.com', tags:['付费']
  },
  {
    id:94, name:'Framer', cat:'design',
    desc:'AI驱动的网站设计与发布平台，无需代码即可设计并部署专业网站，动效支持丰富。',
    url:'https://www.framer.com', tags:['免费/付费']
  },
  {
    id:95, name:'Uizard', cat:'design',
    desc:'AI快速生成UI原型与线框图，支持截图转设计稿，适合产品经理和早期快速原型。',
    url:'https://uizard.io', tags:['免费/付费']
  },
  {
    id:96, name:'Looka', cat:'design',
    desc:'AI自动生成品牌Logo设计，输入品牌名称和偏好即可获得专业Logo，品牌套件一站打包。',
    url:'https://looka.com', tags:['付费']
  },
  {
    id:97, name:'创客贴', cat:'design',
    desc:'国内领先的AI平面设计与营销素材平台，海量模板，AI一键生成海报，中文内容丰富。',
    url:'https://www.chuangkit.com', tags:['免费/付费','国产']
  },
  {
    id:98, name:'Khroma', cat:'design',
    desc:'AI个性化配色方案生成工具，根据用户喜好学习并推荐完美配色，设计师的配色利器。',
    url:'https://www.khroma.co', tags:['免费']
  },

  // ======== AI工具箱 ========
  {
    id:99, name:'Hugging Face', cat:'tools',
    desc:'全球最大AI模型托管与开源社区，数十万个模型和数据集，AI开发者必备平台。',
    url:'https://huggingface.co', tags:['免费','开源']
  },
  {
    id:100, name:'Replicate', cat:'tools',
    desc:'云端一键运行各类AI模型平台，无需环境配置，API调用简单，支持数千种AI模型。',
    url:'https://replicate.com', tags:['付费']
  },
  {
    id:101, name:'Character.ai', cat:'tools',
    desc:'AI虚拟角色对话娱乐平台，可与名人/动漫角色AI对话，社区创建角色海量丰富。',
    url:'https://character.ai', tags:['免费/付费']
  },
  {
    id:102, name:'Remove.bg', cat:'tools',
    desc:'AI一键智能抠图工具，自动识别人物/产品背景并精准去除，处理速度快，效果准确。',
    url:'https://www.remove.bg', tags:['免费/付费']
  },
  {
    id:103, name:'Upscayl', cat:'tools',
    desc:'开源AI图像无损超分辨率放大工具，本地运行保护隐私，支持批量处理，效果出众。',
    url:'https://upscayl.org', tags:['开源','免费']
  },
  {
    id:104, name:'D-ID', cat:'tools',
    desc:'AI数字人生成与互动视频制作平台，上传照片即可生成会说话的数字人，商用场景丰富。',
    url:'https://www.d-id.com', tags:['付费']
  },
  {
    id:105, name:'Lobe Chat', cat:'tools',
    desc:'开源自部署AI聊天客户端，支持接入OpenAI、Claude等多种模型，界面美观功能完善。',
    url:'https://lobechat.com', tags:['开源','免费']
  },
  {
    id:106, name:'NotebookLM', cat:'tools',
    desc:'Google的AI笔记与知识管理工具，上传文档后可与AI对话提问，知识库构建极简高效。',
    url:'https://notebooklm.google.com', tags:['免费']
  },
];

// ===========================
//   STATE
// ===========================
const state = {
  category: 'all',
  tag: 'all',
  search: '',
  theme: localStorage.getItem('theme') || 'dark',
};

// ===========================
//   DOM REFS
// ===========================
const $ = id => document.getElementById(id);
const searchInput   = $('searchInput');
const searchClear   = $('searchClear');
const catList       = $('catList');
const filterTags    = $('filterTags');
const toolsGrid     = $('toolsGrid');
const emptyState    = $('emptyState');
const heroSection   = $('heroSection');
const heroTotal     = $('heroTotal');
const catTitle      = $('catTitle');
const catDesc       = $('catDesc');
const resultCount   = $('resultCount');
const themeBtn      = $('themeBtn');
const menuToggle    = $('menuToggle');
const sidebar       = $('sidebar');
const sidebarOverlay = $('sidebarOverlay');
const toast         = $('toast');
const themeIconMoon = $('themeIconMoon');
const themeIconSun  = $('themeIconSun');

// ===========================
//   UTILITIES
// ===========================

/** Extract domain from URL */
function getDomain(url) {
  try { return new URL(url).hostname; }
  catch { return null; }
}

/** Get first 2 chars initials */
function getInitials(name) {
  const parts = name.replace(/[.\/]/g, ' ').trim().split(/\s+/);
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

/** Show toast */
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

// ===========================
//   FILTERING
// ===========================
function getFiltered() {
  const q = state.search.trim().toLowerCase();
  return TOOLS.filter(t => {
    // Category filter
    if (state.category !== 'all' && t.cat !== state.category) return false;
    // Tag filter
    if (state.tag !== 'all') {
      const matched = t.tags.some(tag => tag.includes(state.tag));
      if (!matched) return false;
    }
    // Search filter
    if (q) {
      return t.name.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q);
    }
    return true;
  });
}

// ===========================
//   RENDER: CATEGORIES
// ===========================
function renderCategories() {
  const counts = {};
  CATEGORIES.forEach(c => { counts[c.id] = 0; });
  TOOLS.forEach(t => {
    counts['all']++;
    counts[t.cat] = (counts[t.cat] || 0) + 1;
  });

  catList.innerHTML = CATEGORIES.map(c => `
    <div
      class="cat-item${state.category === c.id ? ' active' : ''}"
      data-cat="${c.id}"
      role="button"
      tabindex="0"
    >
      <span class="cat-icon">${c.icon}</span>
      <span class="cat-name">${c.name}</span>
      <span class="cat-count">${counts[c.id] || 0}</span>
    </div>
  `).join('');

  catList.querySelectorAll('.cat-item').forEach(el => {
    el.addEventListener('click', () => {
      state.category = el.dataset.cat;
      state.tag = 'all';
      state.search = '';
      searchInput.value = '';
      searchClear.style.display = 'none';
      updateFilterTagsUI();
      renderCategories();
      update();
      closeSidebar();
    });
    el.addEventListener('keydown', e => { if (e.key === 'Enter') el.click(); });
  });
}

// ===========================
//   RENDER: TAGS UI
// ===========================
function updateFilterTagsUI() {
  filterTags.querySelectorAll('.ftag').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tag === state.tag);
  });
}

// ===========================
//   RENDER: TOOL CARD
// ===========================
function renderTagBadge(tag) {
  if (tag.includes('免费/付费')) {
    return `<span class="ttag ttag-freemium">免费/付费</span>`;
  }
  if (tag === '免费') return `<span class="ttag ttag-free">免费</span>`;
  if (tag === '付费') return `<span class="ttag ttag-paid">付费</span>`;
  if (tag === '国产') return `<span class="ttag ttag-cn">🇨🇳 国产</span>`;
  if (tag === '热门') return `<span class="ttag ttag-hot">🔥 热门</span>`;
  if (tag === '开源') return `<span class="ttag ttag-oss">📖 开源</span>`;
  return `<span class="ttag ttag-freemium">${tag}</span>`;
}

function buildCard(tool, index) {
  const cat = CATEGORIES.find(c => c.id === tool.cat) || {};
  const domain = getDomain(tool.url);
  const initials = getInitials(tool.name);
  const bgColor = CAT_COLORS[tool.cat] || 'linear-gradient(135deg,#6366f1,#8b5cf6)';
  const isHot = tool.tags.includes('热门');
  const faviconUrl = domain ? `https://www.google.com/s2/favicons?domain=${domain}&sz=64` : null;

  const avatarHtml = faviconUrl
    ? `<div class="tool-avatar" style="background:${bgColor}" data-initials="${initials}">
         <img src="${faviconUrl}" alt="${tool.name}" loading="lazy">
         <span class="avatar-text">${initials}</span>
       </div>`
    : `<div class="tool-avatar" style="background:${bgColor}">
         <span class="avatar-text" style="display:flex">${initials}</span>
       </div>`;

  const tagsHtml = tool.tags.map(renderTagBadge).join('');

  return `
    <div class="tool-card" data-url="${tool.url}" style="animation-delay:${Math.min(index * 0.03, 0.3)}s">
      <div class="card-top">
        ${avatarHtml}
        <div class="card-meta">
          <div class="tool-name">
            ${tool.name}
            ${isHot ? '<span class="hot-badge">热门</span>' : ''}
          </div>
          <span class="cat-badge">${cat.icon || ''} ${cat.name || ''}</span>
        </div>
      </div>
      <p class="tool-desc">${tool.desc}</p>
      <div class="tool-tags">${tagsHtml}</div>
      <div class="card-footer">
        <a class="visit-btn" href="${tool.url}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">
          立即访问
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
        </a>
      </div>
    </div>
  `;
}

// ===========================
//   RENDER: GRID
// ===========================
function renderGrid(filtered) {
  if (filtered.length === 0) {
    toolsGrid.innerHTML = '';
    emptyState.style.display = 'block';
  } else {
    emptyState.style.display = 'none';
    toolsGrid.innerHTML = filtered.map((t, i) => buildCard(t, i)).join('');

    // Attach favicon error handlers
    toolsGrid.querySelectorAll('.tool-avatar img').forEach(img => {
      img.addEventListener('error', () => {
        img.style.display = 'none';
        const span = img.nextElementSibling;
        if (span) span.style.display = 'flex';
      });
    });

    // Card click → open URL
    toolsGrid.querySelectorAll('.tool-card').forEach(card => {
      card.addEventListener('click', e => {
        if (e.target.closest('.visit-btn')) return;
        window.open(card.dataset.url, '_blank', 'noopener,noreferrer');
      });
    });
  }
}

// ===========================
//   UPDATE (main render)
// ===========================
function update() {
  const filtered = getFiltered();
  const curCat = CATEGORIES.find(c => c.id === state.category) || CATEGORIES[0];

  // Hero visibility
  const showHero = state.category === 'all' && !state.search && state.tag === 'all';
  heroSection.style.display = showHero ? '' : 'none';

  // Category info
  catTitle.textContent = curCat.name;
  catDesc.textContent = curCat.desc;

  // Result count
  const total = TOOLS.filter(t => state.category === 'all' || t.cat === state.category).length;
  if (state.search || state.tag !== 'all') {
    resultCount.textContent = `找到 ${filtered.length} / ${total} 个工具`;
  } else {
    resultCount.textContent = `共 ${filtered.length} 个工具`;
  }

  renderGrid(filtered);
}

// ===========================
//   THEME
// ===========================
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  if (theme === 'dark') {
    themeIconMoon.style.display = '';
    themeIconSun.style.display  = 'none';
  } else {
    themeIconMoon.style.display = 'none';
    themeIconSun.style.display  = '';
  }
}

// ===========================
//   SIDEBAR (mobile)
// ===========================
function openSidebar() {
  sidebar.classList.add('open');
  sidebarOverlay.classList.add('show');
}
function closeSidebar() {
  sidebar.classList.remove('open');
  sidebarOverlay.classList.remove('show');
}

// ===========================
//   RESET ALL
// ===========================
function resetAll() {
  state.category = 'all';
  state.tag = 'all';
  state.search = '';
  searchInput.value = '';
  searchClear.style.display = 'none';
  updateFilterTagsUI();
  renderCategories();
  update();
}
window.resetAll = resetAll;

// ===========================
//   EVENT LISTENERS
// ===========================

// Search
searchInput.addEventListener('input', () => {
  state.search = searchInput.value;
  searchClear.style.display = state.search ? '' : 'none';
  update();
});

searchClear.addEventListener('click', () => {
  state.search = '';
  searchInput.value = '';
  searchClear.style.display = 'none';
  searchInput.focus();
  update();
});

// Keyboard shortcut: Cmd/Ctrl + K → focus search
document.addEventListener('keydown', e => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    searchInput.focus();
    searchInput.select();
  }
  if (e.key === 'Escape' && document.activeElement === searchInput) {
    searchInput.blur();
  }
});

// Tag filters
filterTags.addEventListener('click', e => {
  const btn = e.target.closest('.ftag');
  if (!btn) return;
  state.tag = btn.dataset.tag;
  updateFilterTagsUI();
  update();
});

// Theme toggle
themeBtn.addEventListener('click', () => {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  applyTheme(state.theme);
  showToast(state.theme === 'dark' ? '🌙 已切换为深色模式' : '☀️ 已切换为浅色模式');
});

// Mobile menu
menuToggle.addEventListener('click', () => {
  if (sidebar.classList.contains('open')) {
    closeSidebar();
  } else {
    openSidebar();
  }
});
sidebarOverlay.addEventListener('click', closeSidebar);

// ===========================
//   INIT
// ===========================
function init() {
  // Apply saved theme
  applyTheme(state.theme);

  // Set hero total count
  heroTotal.textContent = TOOLS.length + '+';

  // Render sidebar categories
  renderCategories();

  // Initial grid render
  update();
}

init();
