import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as e,e as a}from"./app-01db0ec1.js";const r={},u=a('<h1 id="_2024-春-软件工程与计算-ii-课程笔记" tabindex="-1"><a class="header-anchor" href="#_2024-春-软件工程与计算-ii-课程笔记" aria-hidden="true">#</a> 2024 春 软件工程与计算 II 课程笔记</h1><h2 id="第一章-需求分析" tabindex="-1"><a class="header-anchor" href="#第一章-需求分析" aria-hidden="true">#</a> 第一章 需求分析</h2><h3 id="_1-1-需求工程基础" tabindex="-1"><a class="header-anchor" href="#_1-1-需求工程基础" aria-hidden="true">#</a> 1.1 需求工程基础</h3><h4 id="需求、问题域和规格说明" tabindex="-1"><a class="header-anchor" href="#需求、问题域和规格说明" aria-hidden="true">#</a> 需求、问题域和规格说明</h4><ul><li>需求：是一种对软件系统的期望；是多变、可调整的。 <ul><li>包括业务需求、用户需求和系统需求。</li></ul></li><li>问题域：对现实世界运行规律的一种反映；需求产生自问题域，也需要在问题域中解决。问题域需要被尊重，不能被随意改变。</li><li>规格说明：软件产品的方案描述；主要内容是软件产品的运行机制。 <ul><li>需要以关注对外交互的方式描述解决方案。</li></ul></li></ul><h4 id="需求的三个层次" tabindex="-1"><a class="header-anchor" href="#需求的三个层次" aria-hidden="true">#</a> 需求的三个层次</h4><p>需求一般分为三个层次：</p><ul><li>业务需求：描述组织/客户对于系统的高层次目标（例如，某个数值在 xx 时间之后应该提高 yy）。</li><li>用户需求：描述用户使用系统需要完成的具体人物的期望（例如，系统需要帮用户做 xxx）。 <ul><li>对于所有的用户需求，都应该有充分的问题域知识作为背景支持。</li></ul></li><li>系统需求：描述系统的某个具体行为（例如，系统应该在 xxx 时显示 yyy 信息）。 <ul><li>描述了开发人员应该实现什么</li></ul></li></ul><p>将用户需求转化为系统需求的步骤：</p><ul><li>分析问题领域和特性，建立系统知识模型</li><li>将用户需求部署到系统模型中——定义一系列系统行为，联合起来实现用户需求。</li><li>这个过程就是 <strong>需求分析</strong>。</li></ul><h4 id="需求的谱系" tabindex="-1"><a class="header-anchor" href="#需求的谱系" aria-hidden="true">#</a> 需求的谱系</h4><p>需求可以分为以下几类：</p><ul><li><strong>需求</strong><ul><li><strong>项目需求</strong>：针对项目的期望</li><li><strong>过程需求</strong>：对于开发过程的期望</li><li><strong>系统需求</strong><ul><li><strong>软件需求</strong></li><li><strong>硬件需求</strong></li><li><strong>其他需求</strong></li></ul></li></ul></li><li><em>不切实际的期望</em>：原因非常丰富，如资源有限、超出了软件能影响的问题域范围、无法达到的目标等。</li></ul><h4 id="需求的分类" tabindex="-1"><a class="header-anchor" href="#需求的分类" aria-hidden="true">#</a> 需求的分类</h4><p><code>IEEE830-1998</code>标准将软件需求分为了六个明显的类别：</p><ul><li>功能需求： <ul><li>和系统主要工作相关的需求——用户希望系统能够执行的活动。</li><li>是整个软件开发工作的基础。</li></ul></li><li>性能需求 <ul><li>一个系统或其组成部分在限定的约束下，完成其指定功能的速度。</li></ul></li><li>质量属性 <ul><li>可靠性、可用性、安全性、可维护性、可移植性、易用性等。</li></ul></li><li>对外接口：系统和环境中其它系统需要建立的接口，包括用户界面、硬件接口、软件接口、网络接口等。 <ul><li>对系统之间的软硬件接口需要做出如下说明： <ul><li>用途</li><li>输入输出</li><li>数据格式、</li><li>命令格式</li><li>异常处理要求</li></ul></li></ul></li><li>约束：进行系统构造时需要遵守的约定。 <ul><li>系统的开发和运行环境、问题域内的相关标准、商业规则等。</li></ul></li><li>数据需求等 <ul><li>如果功能需要数据支持且没有定义数据结构，则需要定义专门的数据需求。</li></ul></li></ul><p>其中，前五个需求除功能需求以外的需求也被称为非功能需求。其中，质量属性对于系统的影响极大，因此有时非功能需求也特指 <strong>质量属性</strong>。</p><h3 id="_1-2-需求分析的目标与任务" tabindex="-1"><a class="header-anchor" href="#_1-2-需求分析的目标与任务" aria-hidden="true">#</a> 1.2 需求分析的目标与任务</h3><p>需求分析的目标：</p><ul><li>给出软件系统的数据流程图和数据结构，构造一个完全的系统逻辑模型</li><li>提出详细的功能说明，确定限定条件，规定性能要求</li><li>密切与用户的联系，使用户明确自己的任务以实现上述两个目标</li></ul><p>需求分析的任务：</p><ul><li>认识问题 <ul><li>联系用户，理解用户提出的功能和性能要求，并确定出软件开发的总策略。</li></ul></li><li>评价与综合 <ul><li>求得数据的流程和数据结构；修改现有的系统，提出新系统的功能并加以细化；提出软件的约束条件、响应时间、存储条件等。</li></ul></li><li>建立需求说明书 <ul><li>包含软件功能、性能、接口、有效性和逻辑模型的描述。</li></ul></li><li>复审</li></ul><h3 id="_1-3-结构化分析方法" tabindex="-1"><a class="header-anchor" href="#_1-3-结构化分析方法" aria-hidden="true">#</a> 1.3 结构化分析方法</h3><p>结构化分析方法采用 <strong>抽象</strong> 和 <strong>分解</strong> 的两个基本手段，按照 软件内部数据的传递和变换关系，从顶向下依次分解，直到找到 满足功能需要的 所有可实现的软件元素 为止。</p><p>结构化分析引入了 数据流程图 作为 描述信息流程 和 分解 的手段。</p><h4 id="数据流图" tabindex="-1"><a class="header-anchor" href="#数据流图" aria-hidden="true">#</a> 数据流图</h4><ul><li>基本元素 <ul><li>外部实体：方框，文本标注 <ul><li>指处于软件系统之外的人、组织、设备等实体</li><li>不受系统控制，不能被操纵</li><li>只有和系统存在着数据交互的外部实体需要被建模</li></ul></li><li>过程：圆，文本标注 <ul><li>指施加于数据的动作 / 行为，包括转换、存储、分布等。</li><li>可能包括软件系统对于数据的处理和人工对于数据的处理。</li></ul></li><li>数据流：箭头，文本标注 <ul><li>指数据的运动，是系统和环境之间 / 系统内两个过程之间的通信形式。</li><li>必须和过程产生关联——只能是过程的输入 / 输出。</li></ul></li><li>数据存储：双横线，中间文本标注 <ul><li>指软件系统需要在内部手机、保存以供日后使用的数据集合。</li><li>描述的是静止的数据。</li></ul></li></ul></li><li>语法规则 <ul><li>一个过程必须同时具有数据的输入和输出，且输入数据集和输出数据集应当存在差异。</li><li>数据流必须和过程产生关联（只能连入/连出到过程上）。</li><li>所有对象必须都有一个独立的名称。</li></ul></li><li>层级结构 <ul><li>上下文图 <ul><li>将整个系统视为一个过程，该过程实现系统的所有功能；图中仅存在这一个过程。</li><li>界定所有和系统交互的外部实体、交互的数据流（包含输入和输出）。</li></ul></li><li>0 层图 <ul><li>对上下文图系统过程的第一次分解；</li><li>需要分析需求获取的信息，归纳出系统的主要功能，并描述为几个高层的抽象过程。</li></ul></li><li>N 层图 <ul><li>将 0 层图中的每一个过程都进行继续分解</li></ul></li></ul></li></ul>',27),n=[u];function t(h,s){return i(),e("div",null,n)}const c=l(r,[["render",t],["__file","software_engineering_notes.html.vue"]]);export{c as default};
