---
title: Math equations
emoji: 🧮
description: On any Notion page, you can display beautifully formatted, comprehensible mathematical characters, expressions and equations. This comes in handy for note taking, technical documentation, homework, or anywhere you need to use fractions and equations 🧮
url: https://www.notion.com/help/math-equations
key: help:math-equations
coverImage: https://images.ctfassets.net/spoqsaf9291f/6QQfPEsbyJySA4Y9WCwZB1/3688c56a0339573413b9228f43c1aad4/Math_equations_-_hero.png
category: Pages & blocks
---

Notion uses the KaTeX [library](https://katex.org/) to render math equations, which supports a large subset of LaTeX functions.

## Add a math equation as a block

1. Click the `+` that appears to the left when you hover over a new line. Scroll down and choose `Block equation` in the dropdown. Alternatively, type `/math` and press enter.

2. With the new equation block in place, click inside it to type or paste your equation, or use `cmd/ctrl` + `enter/return`.

[](//videos.ctfassets.net/spoqsaf9291f/5yuNorGvNg21JUqin68Wbc/7ce374400ad946b0588daa009d92e5bf/Math_block.mp4)

## Add a math equation inline

Just like you can format text in Notion as **bold**, strikethrough, or `code notation`, you can also format your text as a math equation, like this quadratic formula:

There are a few different ways to add math equations inline, and all are keyboard friendly.

**With text shortcuts:**

* Type two dollar signs, followed by your equation. When you close your formula with two more dollar signs, it will turn into an equation.

[](//videos.ctfassets.net/spoqsaf9291f/4rckHeqATbKqBPdU5VV8f1/9ba588addc8b398e883a684113e3e4a3/Inline_math.mp4)

**With the equation input:**

1. To open the equation input, use the keyboard shortcut `ctrl/cmd` + `shift` + `E`.

2. Type your equation into the input, and press `enter`.

[](//videos.ctfassets.net/spoqsaf9291f/50Jd8vzLQkCjBWPJYJYtxz/548e13d3854a1c502c16fb5fe3866f94/Inline_math_shortcut.mp4)

**With the formatting menu:**

1. Highlight an equation in your paragraph.

2. Click the `√x` button in the formatting menu that appears, or use the keyboard shortcut `ctrl/cmd` + `shift`+ `E`. Your selected text should turn into an equation.

[](//videos.ctfassets.net/spoqsaf9291f/6rgqKIB5fH9Fm2Kww4aR9t/3e94ef14a9e1aaad49e0964776f0d935/Inline_math_edit_bar.mp4)

### Edit an inline equation

* You can edit an existing equation by clicking on it. This will open the equation input, and any changes you make to the equation will reflect live on your page.

* You can also use the arrow keys on your keyboard to navigate to an equation. The equation input will open when your cursor passes over the equation, and the equation input will close if you continue pressing the arrow key in the same direction.

[](//videos.ctfassets.net/spoqsaf9291f/232TYBqRpupEOUQ9RTTIIy/48bfffdc652832e49f4721d6f8571465/Edit_inline_math.mp4)

## Recognized symbols

Notion supports the full scope of symbols and operations within the \KaTeX language. For a full list of supported functions, please visit the links below:

[Supported Functions · KaTeX](https://katex.org/docs/supported.html)

[Support Table · KaTeX](https://katex.org/docs/support_table.html)

**Note:&#x20;**&#x4B;aTeX spans most, but not all mathematical notation supported by LaTeX. If your equation isn't rendering correctly in Notion, please visit the links above to see if that function is supported.


## FAQs

### I don't know LaTeX but want to use Notion's equations. How can I get started?

It's easy to get started using LaTeX for homework, class notes, or lab reports. Basic arithmetic and variable names are valid in LaTeX already.

If you just need to look up specific symbols, [Detexify](http://detexify.kirelabs.org/classify.html) is a great resource that allows you to draw the symbol and look up the corresponding LaTeX code.

To learn more powerful LaTeX, Overleaf [documentation](https://www.overleaf.com/learn/latex/Mathematical_expressions) is a great place to learn the basics:

* [Mathematical expressions](https://www.overleaf.com/learn/Mathematical_expressions)

* [Subscripts and superscripts](https://www.overleaf.com/learn/Subscripts_and_superscripts)

* [Brackets and Parentheses](https://www.overleaf.com/learn/Brackets_and_Parentheses)

* [Matrices](https://www.overleaf.com/learn/Matrices)

* [Fractions and Binomials](https://www.overleaf.com/learn/Fractions_and_Binomials)

* [Aligning Equations](https://www.overleaf.com/learn/Aligning_equations)

* [Operators](https://www.overleaf.com/learn/Operators)

* [Spacing in math mode](https://www.overleaf.com/learn/Spacing_in_math_mode)

* [Integrals, sums and limits](https://www.overleaf.com/learn/Integrals,_sums_and_limits)

* [Display style in math mode](https://www.overleaf.com/learn/Display_style_in_math_mode)

* [List of Greek letters and math symbols](https://www.overleaf.com/learn/List_of_Greek_letters_and_math_symbols)

* [Mathematical fonts](https://www.overleaf.com/learn/Mathematical_fonts)

Note that Overleaf is a full-featured LaTeX editor, so not everything in the documentation is supported in Notion. If in doubt, you can always check this list of [Supported Functions](https://katex.org/docs/supported.html) or alphabetized [Support Table](https://katex.org/docs/support_table.html) to determine which functions are supported.


### Why can't I render a specific equation? What formulas/libraries do you support? Can you add support for a formula or library I want to use?

Notion uses the [KaTeX](https://katex.org/) library to render equations. KaTeX supports a large subset of LaTeX, documented on their list of [Supported Functions](https://katex.org/docs/supported.html) and alphabetized in this [Support Table](https://katex.org/docs/support_table.html). To request support for new functions or environments, you can open an issue on the [KaTeX GitHub project](https://github.com/KaTeX/KaTeX).


### I'm trying to use the align environment and it's not working!

From the [Common Issues](https://katex.org/docs/issues.html) page of the KaTeX documentation:

"KaTeX does not support the `align` environment because LaTeX doesn't support `align` in math mode. The `aligned` environment offers the same functionality but in math mode, so use that instead."


### Can I use inline equations for superscript and subscript?

It's possible to use inline equations for superscript and subscript, but it does mean that the text will be an equation, in "equation font."

* Use `^` to designate superscript, for example: `x^2`

* Use `_` to designate subscript, for example: `H_2O`

If there are multiple characters that you want to include in superscript or subscript, wrap them in curly brackets. For example: `23^{rd}`


### What happens when I copy/paste inline LaTeX?

It will give you the source code.


### How do I use Notion for chemistry?

Notion supports the `\\ce` and `\\pu` chemical equation macros from the [mhchem](https://mhchem.github.io/MathJax-mhchem/) extension. These shortcuts allow you to typeset beautiful chemical and mathematical equations quickly and easily.


### How do I convert between inline and block equations?

If you have a block containing an inline equation, you can use the "Turn into" menu to make it a block equation.
