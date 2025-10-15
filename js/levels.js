var levels = [
  {
    helpTitle : "Sélectionner les éléments par leur type",
    selectorName : "Sélecteur de Type",
    doThis : "Sélectionnez les assiettes",
    selector : "plate",
    syntax : "A",
    help : "Sélectionne tous les éléments de type <strong>A</strong>. Le type fait référence au type de balise, donc <tag>div</tag>, <tag>p</tag> et <tag>ul</tag> sont tous des types d'éléments différents.",
    examples : [
      '<strong>div</strong> sélectionne tous les éléments <tag>div</tag>.',
      '<strong>p</strong> sélectionne tous les éléments <tag>p</tag>.',
    ],
    boardMarkup: `
    <plate/>
    <plate/>
    `
  },
  {
    doThis : "Sélectionnez les boîtes bento",
    selector : "bento",
    syntax : "A",
    helpTitle : "Sélectionner les éléments par leur type",
    selectorName : "Sélecteur de Type",
    help : "Sélectionne tous les éléments de type <strong>A</strong>. Le type fait référence au type de balise, donc <tag>div</tag>, <tag>p</tag> et <tag>ul</tag> sont tous des types d'éléments différents.",
    examples : [
      '<strong>div</strong> sélectionne tous les éléments <tag>div</tag>.',
      '<strong>p</strong> sélectionne tous les éléments <tag>p</tag>.',
    ],
    boardMarkup: `
    <bento/>
    <plate/>
    <bento/>
    `
  },
  {
    doThis : "Sélectionnez l'assiette fantaisie",
    selector : "#fancy",
    selectorName: "Sélecteur d'ID",
    helpTitle: "Sélectionner les éléments avec un ID",
    syntax: "#id",
    help : 'Sélectionne l\'élément avec un <strong>id</strong> spécifique. Vous pouvez aussi combiner le sélecteur d\'ID avec le sélecteur de type.',
    examples : [
      '<strong>#cool</strong> sélectionne n\'importe quel élément avec <strong>id="cool"</strong>',
      '<strong>ul#long</strong> sélectionne <tag>ul id="long"</tag>'
    ],
    boardMarkup : `
    <plate id="fancy"/>
    <plate/>
    <bento/>
    `
  },
  {
    helpTitle: "Sélectionner un élément à l'intérieur d'un autre élément",
    selectorName : "Sélecteur Descendant",
    doThis : "Sélectionnez la pomme sur l'assiette",
    selector : "plate apple",
    syntax: "A&nbsp;&nbsp;B",
    help : "Sélectionne tous les <strong>B</strong> à l'intérieur de <strong>A</strong>. <strong>B</strong> est appelé un descendant car il est à l'intérieur d'un autre élément.",
    examples : [
      '<strong>p&nbsp;&nbsp;strong</strong> sélectionne tous les éléments <tag>strong</tag> qui sont à l\'intérieur de n\'importe quel <tag>p</tag>',
      '<strong>#fancy&nbsp;&nbsp;span</strong> sélectionne tous les éléments <tag>span</tag> qui sont à l\'intérieur de l\'élément avec <strong>id="fancy"</strong>',
    ],
    boardMarkup : `
    <bento/>
    <plate>
      <apple/>
    </plate>
    <apple/>
    `
  },
  {
    doThis : "Sélectionnez le cornichon sur l'assiette fantaisie",
    selector : "#fancy pickle",
    helpTitle: "Combiner les sélecteurs Descendant et ID",
    syntax: "#id&nbsp;&nbsp;A",
    help : 'Vous pouvez combiner n\'importe quel sélecteur avec le sélecteur descendant.',
    examples : [
      '<strong>#cool&nbsp;span</strong> sélectionne tous les éléments <tag>span</tag> qui sont à l\'intérieur d\'éléments avec <strong>id="cool"</strong>'
    ],
    boardMarkup : `
    <bento>
    <orange/>
    </bento>
    <plate id="fancy">
      <pickle/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    `
  },
  {
    doThis : "Sélectionnez les petites pommes",
    selector : ".small",
    selectorName: "Sélecteur de Classe",
    helpTitle: "Sélectionner les éléments par leur classe",
    syntax: ".classname",
    help : 'Le sélecteur de classe sélectionne tous les éléments avec cet attribut de classe. Les éléments ne peuvent avoir qu\'un seul ID, mais plusieurs classes.',
    examples : [
    '<strong>.neato</strong> sélectionne tous les éléments avec <strong>class="neato"</strong>'
    ],
    boardMarkup : `
    <apple/>
    <apple class="small"/>
    <plate>
      <apple class="small"/>
    </plate>
    <plate/>
    `
  },
  {
    doThis : "Sélectionnez les petites oranges",
    selector : "orange.small",
    helpTitle: "Combiner le sélecteur de classe",
    syntax: "A.className",
    help : 'Vous pouvez combiner le sélecteur de classe avec d\'autres sélecteurs, comme le sélecteur de type.',
    examples : [
      '<strong>ul.important</strong> sélectionne tous les éléments <tag>ul</tag> qui ont <strong>class="important"</strong>',
      '<strong>#big.wide</strong> sélectionne tous les éléments avec <strong>id="big"</strong> qui ont aussi <strong>class="wide"</strong>'
    ],
    boardMarkup :`
    <apple/>
    <apple class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <plate>
      <orange/>
    </plate>
    <plate>
      <orange class="small"/>
    </plate>`
  },
  {
    doThis : "Sélectionnez les petites oranges dans les bentos",
    selector : "bento orange.small",
    syntax: "Mettez-y du vôtre !",
    helpTitle: "Vous pouvez le faire...",
    help : 'Combinez ce que vous avez appris dans les derniers niveaux pour résoudre celui-ci !',
    boardMarkup : `
    <bento>
      <orange/>
    </bento>
    <orange class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <bento>
      <apple class="small"/>
    </bento>
    <bento>
      <orange class="small"/>
    </bento>
    `
  },
  {
    doThis : "Sélectionnez toutes les assiettes et bentos",
    selector : "plate,bento",
    selectorName : "Combinateur Virgule",
    helpTitle: "Combinez les sélecteurs avec... des virgules !",
    syntax : "A, B",
    help : 'Grâce à la technologie Shatner, ceci sélectionne tous les éléments <strong>A</strong> et <strong>B</strong>. Vous pouvez combiner n\'importe quels sélecteurs de cette façon, et vous pouvez en spécifier plus de deux.',
    examples: [
    '<strong>p, .fun</strong> sélectionne tous les éléments <tag>p</tag> ainsi que tous les éléments avec <strong>class="fun"</strong>',
    '<strong>a, p, div</strong> sélectionne tous les éléments <tag>a</tag>, <tag>p</tag> et <tag>div</tag>'
    ],
    boardMarkup : `
    <pickle class="small"/>
    <pickle/>
    <plate>
      <pickle/>
    </plate>
    <bento>
      <pickle/>
    </bento>
    <plate>
      <pickle/>
    </plate>
    <pickle/>
    <pickle class="small"/>
    `
  },
  {
    doThis : "Sélectionnez tout !",
    selector : "*",
    selectorName:  "Le Sélecteur Universel",
    helpTitle: "Vous pouvez tout sélectionner !",
    syntax : "*",
    help : 'Vous pouvez sélectionner tous les éléments avec le sélecteur universel ! ',
    examples : [
      '<strong>p *</strong> sélectionne n\'importe quel élément à l\'intérieur de tous les éléments <tag>p</tag>.',
    ],
    boardMarkup : `
    <apple/>
    <plate>
      <orange class="small" />
    </plate>
    <bento/>
    <bento>
      <orange/>
    </bento>
    <plate id="fancy"/>
    `
  },
  {
    doThis : "Sélectionnez tout ce qui est sur une assiette",
    selector : "plate *",
    syntax : "A&nbsp;&nbsp;*",
    helpTitle: "Combiner le sélecteur universel",
    help : 'Ceci sélectionne tous les éléments à l\'intérieur de <strong>A</strong>.',
    examples : [
      '<strong>p *</strong> sélectionne chaque élément à l\'intérieur de tous les éléments <tag>p</tag>.',
      '<strong>ul.fancy *</strong> sélectionne chaque élément à l\'intérieur de tous les éléments <tag>ul class="fancy"</tag>.'
    ],
    boardMarkup: `
    <plate id="fancy">
      <orange class="small"/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    <apple class="small"/>
    <plate>
      <apple/>
    </plate>`
  },
  {
    doThis : "Sélectionnez chaque pomme qui est à côté d'une assiette",
    selector : "plate + apple",
    helpTitle: "Sélectionner un élément qui suit directement un autre élément",
    selectorName: "Sélecteur de Frère Adjacent",
    syntax : "A + B",
    help : "Ceci sélectionne tous les éléments <strong>B</strong> qui suivent directement <strong>A</strong>. Les éléments qui se suivent sont appelés frères. Ils sont au même niveau, ou profondeur. <br/><br/>Dans le code HTML de ce niveau, les éléments qui ont la même indentation sont frères.",
    examples : [
      '<strong>p + .intro</strong> sélectionne chaque élément avec <strong>class="intro"</strong> qui suit directement un <tag>p</tag>',
      '<strong>div + a</strong> sélectionne chaque élément <tag>a</tag> qui suit directement un <tag>div</tag>'
    ],
    boardMarkup : `
    <bento>
      <apple class="small"/>
    </bento>
    <plate />
    <apple class="small"/>
    <plate />
    <apple/>
    <apple class="small"/>
    <apple class="small"/>
    `
  },
  {
    selectorName: "Sélecteur de Frère Général",
    helpTitle: "Sélectionner les éléments qui suivent un autre élément",
    syntax: "A ~ B",
    doThis : "Sélectionnez les cornichons à côté du bento",
    selector : "bento ~ pickle",
    help : "Vous pouvez sélectionner tous les frères d'un élément qui le suivent. C'est comme le Sélecteur Adjacent (A + B) sauf qu'il récupère tous les éléments suivants au lieu d'un seul.",
    examples : [
      '<strong>A ~ B</strong> sélectionne tous les <strong>B</strong> qui suivent un <strong>A</strong>'
    ],
    boardMarkup : `
    <pickle/>
    <bento>
      <orange class="small"/>
    </bento>
    <pickle class="small"/>
    <pickle/>
    <plate>
      <pickle/>
    </plate>
    <plate>
      <pickle class="small"/>
    </plate>
    `
  },
  {
    selectorName: "Sélecteur d'Enfant",
    syntax: "A > B&nbsp;",
    doThis : "Sélectionnez la pomme directement sur une assiette",
    selector : "plate > apple",
    helpTitle: "Sélectionner les enfants directs d'un élément",
    help : "Vous pouvez sélectionner les éléments qui sont des enfants directs d'autres éléments. Un élément enfant est tout élément qui est imbriqué directement dans un autre élément. <br><br>Les éléments qui sont imbriqués plus profondément sont appelés éléments descendants.",
    examples : [
      '<strong>A > B</strong> sélectionne tous les <strong>B</strong> qui sont des enfants directs de <strong>A</strong>'
    ],
    boardMarkup: `
    <plate>
      <bento>
        <apple/>
      </bento>
    </plate>
    <plate>
      <apple/>
    </plate>
    <plate/>
    <apple/>
    <apple class="small"/>
    `
  },
  // {
  //   selectorName: "Pseudo-sélecteur Premier Enfant",
  //   helpTitle: "Sélectionner le premier élément enfant à l'intérieur d'un autre élément",
  //   doThis : "Sélectionnez l'orange du haut",
  //   selector : "plate :first-child",
  //   syntax: ":first-child",

  //   help : "Vous pouvez sélectionner le premier élément enfant. Un élément enfant est tout élément qui est directement imbriqué dans un autre élément. Vous pouvez combiner ce pseudo-sélecteur avec d'autres sélecteurs.",
  //   examples : [
  //     '<strong>:first-child</strong> sélectionne tous les premiers éléments enfants.',
  //     '<strong>p:first-child</strong> sélectionne tous les premiers éléments enfants <tag>p</tag>.',
  //     '<strong>div p:first-child</strong> sélectionne tous les premiers éléments enfants <tag>p</tag> qui sont dans un <tag>div</tag>.'
  //   ],
  //   boardMarkup :`
  //   <bento/>
  //   <plate />
  //   <plate>
  //     <orange />
  //     <orange />
  //     <orange />
  //   </plate>
  //   <pickle class="small" />
  //   `
  // },
  // {
  //   selectorName: "Pseudo-sélecteur Enfant Unique",
  //   helpTitle: "Sélectionner un élément qui est le seul élément à l'intérieur d'un autre.",
  //   doThis : "Sélectionnez la pomme et le cornichon sur les assiettes",
  //   selector : "plate :only-child",
  //   syntax: ":only-child",
  //   help : "Vous pouvez sélectionner tout élément qui est le seul élément à l'intérieur d'un autre.",
  //   examples : [
  //     '<strong>span:only-child</strong> sélectionne les éléments <tag>span</tag> qui sont l\'enfant unique d\'un autre élément.',
  //     '<strong>ul li:only-child</strong> sélectionne le seul élément <tag>li</tag> qui est dans un <tag>ul</tag>.'
  //   ],
  //   boardMarkup : `
  //   <plate>
  //     <apple/>
  //   </plate>
  //   <plate>
  //     <pickle />
  //   </plate>
  //   <bento>
  //     <pickle />
  //   </bento>
  //   <plate>
  //     <orange class="small"/>
  //     <orange/>
  //   </plate>
  //   <pickle class="small"/>
  //   `
  // },
  // {
  //   selectorName: "Pseudo-sélecteur Dernier Enfant",
  //   helpTitle: "Sélectionner le dernier élément à l'intérieur d'un autre élément",
  //   doThis : "Sélectionnez la petite pomme et le cornichon",
  //   selector : ".small:last-child",
  //   syntax: ":last-child",
  //   help : "Vous pouvez utiliser ce sélecteur pour sélectionner un élément qui est le dernier élément enfant à l'intérieur d'un autre élément. <br><br>Astuce de pro &rarr; Dans les cas où il n'y a qu'un seul élément, cet élément compte comme le premier-enfant, enfant-unique et dernier-enfant !",
  //   examples : [
  //     '<strong>:last-child</strong> sélectionne tous les éléments derniers-enfants.',
  //     '<strong>span:last-child</strong> sélectionne tous les éléments <tag>span</tag> derniers-enfants.',
  //     '<strong>ul li:last-child</strong> sélectionne les derniers éléments <tag>li</tag> à l\'intérieur de n\'importe quel <tag>ul</tag>.'
  //   ],
  //   boardMarkup : `
  //   <plate id="fancy">
  //     <apple class="small"/>
  //   </plate>
  //   <plate/>
  //   <plate>
  //     <orange class="small"/>
  //     <orange>
  //   </plate>
  //   <pickle class="small"/>`
  // },
  // {
  //   selectorName: "Pseudo-sélecteur Nième Enfant",
  //   helpTitle: "Sélectionner un élément par son ordre dans un autre élément",
  //   doThis : "Sélectionnez la 3ème assiette",
  //   selector : ":nth-child(3)",
  //   syntax: ":nth-child(A)",
  //   help : "Sélectionne le <strong>nième</strong> (Ex : 1er, 3ème, 12ème etc.) élément enfant dans un autre élément.",
  //   examples : [
  //     '<strong>:nth-child(8)</strong> sélectionne chaque élément qui est le 8ème enfant d\'un autre élément.',
  //     '<strong>div p:nth-child(2)</strong> sélectionne le deuxième <strong>p</strong> dans chaque <strong>div</strong>',
  //   ],
  //   boardMarkup : `
  //   <plate/>
  //   <plate/>
  //   <plate/>
  //   <plate id="fancy"/>
  //   `
  // },
  // {
  //   selectorName: "Sélecteur Nième Dernier Enfant",
  //   helpTitle: "Sélectionner un élément par son ordre dans un autre élément, en comptant depuis la fin",
  //   doThis : "Sélectionnez le 1er bento",
  //   selector : "bento:nth-last-child(3)",
  //   syntax: ":nth-last-child(A)",
  //   help : "Sélectionne les enfants depuis le bas du parent. C'est comme nth-child, mais en comptant depuis la fin !",
  //   examples : [
  //     '<strong>:nth-last-child(2)</strong> sélectionne tous les éléments avant-derniers enfants.'
  //   ],
  //   boardMarkup: `
  //   <plate/>
  //   <bento/>
  //   <plate>
  //     <orange/>
  //     <orange/>
  //     <orange/>
  //   </plate>
  //   <bento/>
  //   `
  // },
  // {
  //   selectorName: "First of Type Selector",
  //   helpTitle: "Select the first element of a specific type",
  //   doThis : "Select first apple",
  //   selector : "apple:first-of-type",
  //   syntax: ":first-of-type",
  //   help : "Selects the first element of that type within another element.",
  //   examples : [
  //     '<strong>span:first-of-type</strong> selects the first <tag>span</tag> in any element.'
  //   ],
  //   boardMarkup: `
  //   <orange class="small"/>
  //   <apple/>
  //   <apple class="small"/>
  //   <apple/>
  //   <apple class="small"/>
  //   <plate>
  //     <orange class="small"/>
  //     <orange/>
  //   </plate>
  //   `
  // },
  // {
  //   selectorName: "Nth of Type Selector",
  //   doThis: "Select all even plates",
  //   selector: "plate:nth-of-type(even)",
  //   syntax: ":nth-of-type(A)",
  //   help: "Selects a specific element based on its type and order in another element - or even or odd instances of that element.",
  //   examples: [
  //     '<strong>div:nth-of-type(2)</strong> selects the second instance of a div.',
  //     '<strong>.example:nth-of-type(odd)</strong> selects all odd instances of a the example class.'
  //   ],
  //   boardMarkup : `
  //   <plate/>
  //   <plate/>
  //   <plate/>
  //   <plate/>
  //   <plate id="fancy"/>
  //   <plate/>
  //   `
  // },
  // {
  //   selectorName: "Nth-of-type Selector with Formula",
  //   doThis: "Select every 2nd plate, starting from the 3rd",
  //   selector: "plate:nth-of-type(2n+3)",
  //   syntax: ":nth-of-type(An+B)",
  //   help: "The nth-of-type formula selects every nth element, starting the count at a specific instance of that element.",
  //   examples: [
  //     '<strong>span:nth-of-type(6n+2)</strong> selects every 6th instance of a <tag>span</tag>, starting from (and including) the second instance.'
  //   ],
  //   boardMarkup : `
  //   <plate/>
  //   <plate>
  //     <pickle class="small" />
  //   </plate>
  //   <plate>
  //     <apple class="small" />
  //   </plate>
  //   <plate/>
  //   <plate>
  //     <apple />
  //   </plate>
  //   <plate/>
  //   `
  // },
  // {
  //   selectorName: "Only of Type Selector",
  //   helpTitle: "Select elements that are the only ones of their type within their parent element",
  //   selector : "apple:only-of-type",
  //   syntax: ":only-of-type",
  //   doThis : "Select the apple on the middle plate",
  //   help : "Selects the only element of its type within another element.",
  //   examples : [
  //     '<strong>p span:only-of-type</strong> selects a <tag>span</tag> within any <tag>p</tag> if it is the only <tag>span</tag> in there.'
  //   ],
  //   boardMarkup: `
  //   <plate id="fancy">
  //     <apple class="small" />
  //     <apple />
  //   </plate>
  //   <plate>
  //     <apple class="small" />
  //   </plate>
  //   <plate>
  //     <pickle />
  //   </plate>
  //   `
  // },
  // {
  //   selectorName: "Last of Type Selector",
  //   helpTitle: "Select the last element of a specific type",
  //   doThis : "Select the last apple and orange",
  //   selector : ".small:last-of-type",
  //   syntax: ":last-of-type",
  //   help : "Selects each last element of that type within another element. Remember type refers the kind of tag, so <tag>p</tag> and <tag>span</tag> are different types. <br><br> I wonder if this is how the last dinosaur was selected before it went extinct.",
  //   examples : [
  //     '<strong>div:last-of-type</strong> selects the last <tag>div</tag> in every element.',
  //     '<strong>p span:last-of-type</strong> selects the last <tag>span</tag> in every <tag>p</tag>.'
  //   ],
  //   boardMarkup : `
  //   <orange class="small"/>
  //   <orange class="small" />
  //   <pickle />
  //   <pickle />
  //   <apple class="small" />
  //   <apple class="small" />
  //   `
  // },
  // {
  //   selectorName: "Empty Selector",
  //   helpTitle: "Select elements that don't have children",
  //   doThis : "Select the empty bentos",
  //   selector : "bento:empty",
  //   syntax: ":empty",
  //   help : "Selects elements that don't have any other elements inside of them.",
  //   examples : [
  //     '<strong>div:empty</strong> selects all empty <tag>div</tag> elements.'
  //   ],
  //   boardMarkup:`
  //   <bento/>
  //   <bento>
  //     <pickle class="small"/>
  //   </bento>
  //   <plate/>
  //   <bento/>`
  // },
  // {
  //   selectorName: "Negation Pseudo-class",
  //   helpTitle: "Select all elements that don't match the negation selector",
  //   doThis : "Select the big apples",
  //   selector : "apple:not(.small)",
  //   syntax: ":not(X)",
  //   help : 'You can use this to select all elements that do not match selector <strong>"X"</strong>.',
  //   examples : [
  //     '<strong>:not(#fancy)</strong> selects all elements that do not have <strong>id="fancy"</strong>.',
  //     '<strong>div:not(:first-child)</strong> selects every <tag>div</tag> that is not a first child.',
  //     '<strong>:not(.big, .medium)</strong> selects all elements that do not have <strong>class="big"</strong> or <strong>class="medium"</strong>.'
  //   ],
  //   boardMarkup: `
  //   <plate id="fancy">
  //     <apple class="small" />
  //   </plate>
  //   <plate>
  //     <apple />
  //   </plate>
  //   <apple />
  //   <plate>
  //     <orange class="small" />
  //   </plate>
  //   <pickle class="small" />
  //   `
  // },
  // {
  //   selectorName: "Attribute Selector",
  //   helpTitle: "Select all elements that have a specific attribute",
  //   doThis : "Select the items for someone",
  //   selector : "[for]",
  //   syntax: "[attribute]",
  //   help : 'Attributes appear inside the opening tag of an element, like this: <tag>span attribute="value"</tag>. An attribute does not always have a value, it can be blank!',
  //   examples : [
  //     '<strong>a[href]</strong> selects all <tag>a</tag> elements that have a <strong>href="anything"</strong> attribute.',
  //     '<strong>[type]</strong> selects all elements that have a <strong>type="anything"</strong>. attribute'
  //   ],
  //   boardMarkup:`
  //   <bento><apple class="small"/></bento>
  //   <apple for="Ethan"/>
  //   <plate for="Alice"><pickle/></plate>
  //   <bento for="Clara"><orange/></bento>
  //   <pickle/>`
  // },
  // {
  //   selectorName: "Attribute Selector",
  //   helpTitle: "Select all elements that have a specific attribute",
  //   doThis : "Select the plates for someone",
  //   selector : "plate[for]",
  //   syntax: "A[attribute]",
  //   help : "Combine the attribute selector with another selector (like the tag name selector) by adding it to the end.",
  //   examples : [
  //     '<strong>[value]</strong> selects all elements that have a <strong>value="anything"</strong> attribute.',
  //     '<strong>a[href]</strong> selects all <tag>a</tag> elements that have a <strong>href="anything"</strong> attribute.',
  //     '<strong>input[disabled]</strong> selects all <tag>input</tag> elements with the <strong>disabled</strong> attribute'
  //   ],
  //   boardMarkup:`
  //   <plate for="Sarah"><pickle/></plate>
  //   <plate for="Luke"><apple/></plate>
  //   <plate/>
  //   <bento for="Steve"><orange/></bento>
  //   `
  // },
  // {
  //   selectorName: "Attribute Value Selector",
  //   helpTitle: "Select all elements that have a specific attribute value",
  //   doThis : "Select Vitaly's meal",
  //   selector : "[for=Vitaly]",
  //   syntax: '[attribute="value"]',
  //   help : "Attribute selectors are case sensitive, each character must match exactly.",
  //   examples : [
  //     '<strong>input[type="checkbox"]</strong> selects all checkbox input elements.'
  //   ],
  //   boardMarkup:`
  //   <apple for="Alexei" />
  //   <bento for="Albina"><apple /></bento>
  //   <bento for="Vitaly"><orange/></bento>
  //   <pickle/>
  //   `
  // },
  // {
  //   selectorName: "Attribute Starts With Selector",
  //   helpTitle: "Select all elements with an attribute value that starts with specific characters",
  //   doThis : "Select the items for names that start with 'Sa'",
  //   selector : '[for^="Sa"]',
  //   syntax: '[attribute^="value"]',
  //   // help : "You can use quotes around the value in the selector, or not&mdash;it's optional!",
  //   examples : [
  //     '<strong>.toy[category^="Swim"]</strong> selects elements with class <strong>toy</strong> and either <strong>category="Swimwear"</strong> or <strong>category="Swimming"</strong>.'
  //   ],
  //   boardMarkup: `
  //   <plate for="Sam"><pickle/></plate>
  //   <bento for="Sarah"><apple class="small"/></bento>
  //   <bento for="Mary"><orange/></bento>
  //   `
  // },
  // {
  //   selectorName: "Attribute Ends With Selector",
  //   helpTitle: "Select all elements with an attribute value that ends with specific characters",
  //   doThis : "Select the items for names that end with 'ato'",
  //   selector : '[for$="ato"]',
  //   syntax: '[attribute$="value"]',
  //   help : '',
  //   examples : [
  //     '<strong>img[src$=".jpg"]</strong> selects all images display a <strong>.jpg</strong> image.',
  //   ],
  //   boardMarkup:`
  //   <apple class="small"/>
  //   <bento for="Hayato"><pickle/></bento>
  //   <apple for="Ryota"></apple>
  //   <plate for="Minato"><orange/></plate>
  //   <pickle class="small"/>
  //   `
  // },
  // {
  //   selectorName: "Attribute Wildcard Selector",
  //   helpTitle: "Select all elements with an attribute value that contains specific characters anywhere",
  //   syntax: '[attribute*="value"]',
  //   doThis : "Select the meals for names that contain 'obb'",
  //   selector : '[for*="obb"]',
  //   help : 'A useful selector if you can identify a common pattern in things like <strong>class</strong>, <strong>href</strong> or <strong>src</strong> attributes.',
  //   examples : [
  //     '<strong>img[src*="/thumbnails/"]</strong> selects all image elements that show images from the "thumbnails" folder.',
  //     '<strong>[class*="heading"]</strong> selects all elements with "heading" in their class, like <strong>class="main-heading"</strong> and <strong>class="sub-heading"</strong>'
  //   ],
  //   boardMarkup:`
  //   <bento for="Robbie"><apple /></bento>
  //   <bento for="Timmy"><pickle /></bento>
  //   <bento for="Bobby"><orange /></bento>
  //   `
  // }
];
