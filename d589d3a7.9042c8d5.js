(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),i=n(9),o=(n(0),n(163)),a={id:"getting-started",title:"Getting Started"},l={id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"To use Skyline in your project, you need to first write an entry point file,",source:"@site/docs/getting-started.md",permalink:"/project-website-template/docs/getting-started",editUrl:"https://github.com/skylineprof/skyline/edit/master/website/docs/getting-started.md",sidebar:"sidebar",previous:{title:"Installing Skyline",permalink:"/project-website-template/docs/install"},next:{title:"Providers in Detail",permalink:"/project-website-template/docs/providers"}},c=[{value:"Projects",id:"projects",children:[]},{value:"Entry Point",id:"entry-point",children:[]},{value:"Example",id:"example",children:[]}],p={rightToc:c};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To use Skyline in your project, you need to first write an ",Object(o.b)("em",{parentName:"p"},"entry point file"),",\nwhich is a regular Python file that describes how your model is created and\ntrained. See the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#entry-point"}),"Entry Point")," section for more information."),Object(o.b)("p",null,"Once your entry point file is ready, navigate to your project's ",Object(o.b)("em",{parentName:"p"},"root\ndirectory")," and run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"skyline interactive path/to/entry/point/file\n")),Object(o.b)("p",null,"Then, open up Atom, execute the ",Object(o.b)("inlineCode",{parentName:"p"},"Skyline:Toggle"),' command in the command palette\n(Ctrl-Shift-P on Ubuntu, \u2318-Shift-P on macOS), and hit the "Connect" button that\nappears on the right.'),Object(o.b)("p",null,"To shutdown Skyline, just execute the ",Object(o.b)("inlineCode",{parentName:"p"},"Skyline:Toggle")," command again in the\ncommand palette. You can shutdown the interactive profiling session on the\ncommand line by hitting Ctrl-C in your terminal."),Object(o.b)("p",null,"You can also toggle Skyline using the Atom menus: Packages > Skyline >\nShow/Hide Skyline."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Virtual Environments")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"To analyze your model, Skyline will actually run your code. This means that\nwhen you invoke ",Object(o.b)("inlineCode",{parentName:"p"},"skyline interactive"),", you need to make sure that your shell\nhas the proper environments activated (if needed). For example if you use\n",Object(o.b)("inlineCode",{parentName:"p"},"virtualenv")," to manage your model's dependencies, you need to activate your\n",Object(o.b)("inlineCode",{parentName:"p"},"virtualenv")," before starting Skyline."))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Usage Statistics:")," Skyline collects usage statistics in order to help us\nmake improvements to the tool. If you do not want Skyline to collect usage\nstatistics, you can disable this functionality through Skyline's package\nsettings in Atom (Atom > Settings/Preferences > Packages > Skyline > Settings)."),Object(o.b)("h3",{id:"projects"},"Projects"),Object(o.b)("p",null,"To use Skyline, all of the code that you want to profile interactively must be\nstored under one common directory. Generally, this just means you need to keep\nyour own source code under one common directory. Skyline considers all the\nfiles inside this common directory to be part of a ",Object(o.b)("em",{parentName:"p"},"project"),", and calls this\ncommon directory your project's ",Object(o.b)("em",{parentName:"p"},"root directory"),"."),Object(o.b)("p",null,"When starting a Skyline interactive profiling session, you must invoke ",Object(o.b)("inlineCode",{parentName:"p"},"skyline\ninteractive <entry point>")," inside your project's ",Object(o.b)("em",{parentName:"p"},"root directory"),"."),Object(o.b)("h3",{id:"entry-point"},"Entry Point"),Object(o.b)("p",null,"Skyline uses an ",Object(o.b)("em",{parentName:"p"},"entry point")," file to learn how to create and train your model.\nAn entry point file is a regular Python file that contains three top-level\nfunctions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"skyline_model_provider")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"skyline_input_provider")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"skyline_iteration_provider"))),Object(o.b)("p",null,"These three functions are called ",Object(o.b)("em",{parentName:"p"},"providers")," and must be defined with specific\nsignatures. The easiest way to understand how to write the providers is to read\nthrough an example."),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("p",null,"Suppose that your project code is kept under a ",Object(o.b)("inlineCode",{parentName:"p"},"my_project")," directory:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"my_project\n\u251c\u2500\u2500 __init__.py\n\u2514\u2500\u2500 model.py\n")),Object(o.b)("p",null,"and your model is defined in ",Object(o.b)("inlineCode",{parentName:"p"},"model.py"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:'title="model.py"',title:'"model.py"'}),"import torch.nn as nn\n\n\nclass Model(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.conv = nn.Conv2d(in_channels=3, out_channels=6, kernel_size=3)\n        self.linear = nn.Linear(in_features=387096, out_features=10)\n\n    def forward(self, input):\n        out = self.conv(input)\n        return self.linear(out.view(-1, 387096))\n")),Object(o.b)("p",null,"One way to write the ",Object(o.b)("em",{parentName:"p"},"entry point")," file would be:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:'title="entry_point.py"',title:'"entry_point.py"'}),"import torch\nimport torch.nn as nn\n\nfrom my_project.model import Model\n\n\nclass ModelWithLoss(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.model = Model()\n        self.loss_fn = nn.CrossEntropyLoss()\n\n    def forward(self, input, target):\n        output = self.model(input)\n        return self.loss_fn(output, target)\n\n\ndef skyline_model_provider():\n    # Return a GPU-based instance of our model (that returns a loss)\n    return ModelWithLoss().cuda()\n\n\ndef skyline_input_provider(batch_size=32):\n    # Return GPU-based inputs for our model\n    return (\n      torch.randn((batch_size, 3, 256, 256)).cuda(),\n      torch.randint(low=0, high=9, size=(batch_size,)).cuda(),\n    )\n\n\ndef skyline_iteration_provider(model):\n    # Return a function that executes one training iteration\n    optimizer = torch.optim.SGD(model.parameters(), lr=1e-3)\n    def iteration(*inputs):\n        optimizer.zero_grad()\n        out = model(*inputs)\n        out.backward()\n        optimizer.step()\n    return iteration\n")),Object(o.b)("p",null,"One important thing to highlight is our use of a wrapper ",Object(o.b)("inlineCode",{parentName:"p"},"ModelWithLoss"),"\nmodule. Skyline only provides breakdowns for operations that run inside the\nmodule returned by the model provider. We included the loss function in this\nwrapper module to have Skyline include it in the breakdown. We could have also\nplaced the loss function call in the ",Object(o.b)("inlineCode",{parentName:"p"},"iteration")," function."),Object(o.b)("p",null,"You can place these ",Object(o.b)("em",{parentName:"p"},"provider")," functions either in a new file or directly in\n",Object(o.b)("inlineCode",{parentName:"p"},"model.py"),". Whichever file contains the providers will be your project's ",Object(o.b)("em",{parentName:"p"},"entry\npoint file"),". In this example, we defined the providers in a separate file\ncalled ",Object(o.b)("inlineCode",{parentName:"p"},"entry_point.py")," inside ",Object(o.b)("inlineCode",{parentName:"p"},"my_project"),"."),Object(o.b)("p",null,"Suppose that ",Object(o.b)("inlineCode",{parentName:"p"},"my_project")," is in your home directory. To launch Skyline you\nwould run (in your shell):"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cd ~/my_project\nskyline interactive entry_point.py\n")),Object(o.b)("p",null,"Skyline will then start a profiling session and will launch Atom. To start\nprofiling, hit the Connect button that appears in the sidebar."))}s.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),b=r,m=d["".concat(a,".").concat(b)]||d[b]||u[b]||o;return n?i.a.createElement(m,l(l({ref:t},p),{},{components:n})):i.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);