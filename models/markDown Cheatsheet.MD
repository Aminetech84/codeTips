<!-- Headings -->
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

<!-- HTML -->
     
## hh2
     
just typing like that is considered a paragraph > p
you can use HTML tags as well <br> like this 


<!-- this is a comment -->


<!-- Italics -->
*This text* is italic

_This text_ is italic

<!-- Strong -->
**This text** is strong

__This text__ is strong

<!-- Strikethrough -->
~~This text~~ is strikethrough


<!-- Horizontal Rule -->

---
___

<!-- Blockquote -->
> This is a quote

<!-- Links -->

<!-- link to other part of the markdown of the file, use - if the title has a space in it -->
[Header 2](#hh2)

[Traversy Media](http://www.traversymedia.com)

[Traversy Media](http://www.traversymedia.com "Traversy Media")

<!-- UL -->

* Item 1 <!-- * or - -->
* Item 2
* Item 3
  * Nested Item 1
  * Nested Item 2

<!-- OL -->
<!-- the TAB key can control the items and sub items -->
<!-- ordered list get the numbers automaticly  -->
1. Item 1
2. Item 2
3. Item 3

<!-- Inline Code Block -->
`<p>This is a paragraph</p>`

<!-- Images -->
![Markdown Logo](https://markdown-here.com/img/icon256.png)

<!-- Github Markdown -->

<!-- Code Blocks -->
```bash
  npm install

  npm start
```

```javascript
  function add(num1, num2) {
    return num1 + num2;     
  }
```

```python
  def add(num1, num2):
    return num1 + num2
```

<!-- Tables -->
| Name     | Email          |
| -------- | -------------- |
| John Doe | john@gmail.com |
| Jane Doe | jane@gmail.com |

<!-- Task List -->
* [x] Task 1
* [x] Task 2
* [ ] Task 3
* [ ] 

---

Markdown is a lightweight markup language with plain-text formatting syntax. Its main design goal is to be as readable as possible. The idea is that a Markdown-formatted document should be publishable as-is, as plain text, without looking like it’s been marked up with tags or formatting instructions. Here are some of the basic and most commonly used Markdown syntax elements:

Headings: Created by adding # in front of a word or phrase. The number of # used determines the level of the heading. For example:
# Heading level 1
## Heading level 2
### Heading level 3

Paragraphs: Just typing text on a new line is considered a paragraph. For a line break, end a line with two or more spaces before hitting return.
Emphasis:
Italic: Wrap text with one asterisk or underscore.
Bold: Wrap text with two asterisks or underscores.
Strikethrough: Wrap text with two tildes.
Lists:
Unordered lists use asterisks, pluses, or hyphens as list markers.
Ordered lists use numbers followed by periods.
Links: To create a link, wrap the link text in brackets [ ], and then follow it immediately with the URL in parentheses ( ).
Images: Similar to links, but an exclamation mark ! is added before the brackets.
Blockquotes: Use > before the text.
Code: To format text as code, use backticks. For inline code, use a single backtick before and after the text. For a code block, use three backticks or indent every line of the block by four spaces.
Tables: Create tables by using hyphens - for creating headers and pipes | for columns.
Here’s a simple example of a Markdown-formatted text:

# Sample Document

## Introduction
This is a *sample* document to demonstrate **Markdown syntax**.

### Lists
- Item 1
- Item 2
  - Sub Item 2.1
  - Sub Item 2.2

### Code
`Inline code` with backticks.


Code block
print(“Hello, Markdown!”)


### Link
[Markdown Guide](https://www.markdownguide.org/)

### Image
!Alt text

Headings: Markdown uses # symbols to create headings, with different levels indicated by the number of # symbols.
Emphasis: Text can be italicized by wrapping it with * or _, and bolded with ** or __.
Strikethrough: Use ~~ before and after the text to apply a strikethrough effect.
Lists: Unordered lists are created using *, and ordered lists with numbers followed by a period.
Links: To add a hyperlink, use the format link text, and for images, !alt text.

---------------
Headings: You've demonstrated how to create headings from H1 (most important) to H6 (least important) using hash symbols (#).

HTML Integration: You've correctly pointed out that while Markdown is simpler, you can also use HTML tags within it for specific formatting needs.

Comments: You've included a comment section using HTML comments syntax ().

Text Formatting:

Italics: You've shown both asterisk (*) and underscore (_) for italicizing text.
Bold: Similarly, you've demonstrated bolding with double asterisks (**) and underscores (__).
Strikethrough: The wavy tilde symbol (~~) creates strikethrough text.
Horizontal Rule: You've included two ways to create horizontal lines using dashes (-) or underscores (_).

Blockquotes: The greater than symbol (>) creates blockquotes for indented quotations.

Links:

Internal Links: You've shown how to link to another heading within the document using its ID enclosed in square brackets.
External Links: You've demonstrated creating links to external websites with text descriptions (optional).
Lists:

Unordered Lists: Asterisks (*) or hyphens (-) create unordered lists. You've also included nested items.
Ordered Lists: Numbers (1.) automatically create ordered lists.
Code Blocks:

Inline Code: Backticks () enclose short inline code snippets.
Fenced Code Blocks: Code blocks with more lines are created using three backticks or tildes at the beginning and end, optionally specifying a programming language for syntax highlighting.
Images: You've included the syntax for embedding images with an alt text description and a link to the image source.

Tables: You've created a simple table structure with headers and rows.

Task Lists: Asterisks (*) with checkboxes ([x] for completed, [ ] for pending) create task lists.