---
section: Navigation
title: Basic Navigation
description: The most common form of navigation for exploring the structure of a document
date: 2015-01-26
template: section.html
description:
nav_sort: 1
nav_groups:
  - primary
---

A basic navigation list is best used for navigating around the information within a single document. You can highlight the current section by adding the <code>.active</code> class to the list item wrapping the associated link.

<div class="guide-example">
<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li class="active"><a href="#">First section</a></li>
    <li class="example-tldr"><a href="#">last section</a></li>
  </ul>
</nav>
</div>

## Sub navigation

Navigation lists can be nested to show the hierarchy of information within a
document. simple place the sub navigation within a child list to apply the
desired styles. You will also need to add the <code>.open</code> class to the
parent list item inorder to highlight it correctly.

<div class="guide-example">
<nav>
  <ul>
    <li class="example-ignore"><a href="#">Home</a></li>
    <li class="open"><a href="#">First section</a>
      <ul class="example-tldr">
        <li><a href="#">Home</a></li>
        <li class="active"><a href="#">First section</a></li>
        <li><a href="#">last section</a></li>
      </ul>
    </li>
    <li class="example-ignore"><a href="#">last section</a></li>
  </ul>
</nav>
</div>
