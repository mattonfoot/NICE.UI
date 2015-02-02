---
section: Basic elements
title: Lists
template: page.html
description:
disqus_identifier: /basic-elements/lists
nav_sort: 10
nav_groups:
  - primary
---

## Basic text lists

### Unordered

A list of items in which the order does <em>not</em> explicitly matter.

<div class="guide-example">
  <ul>
    <li class="example-tldr">Lorem ipsum dolor sit amet</li>
    <li class="example-ignore">Consectetur adipiscing elit
      <ul>
        <li>Phasellus iaculis neque</li>
        <li>Vestibulum laoreet porttitor sem</li>
      </ul>
    </li>
    <li class="example-ignore">Aenean sit amet erat nunc</li>
  </ul>
</div>

### Ordered

A list of items in which the order <em>does</em> explicitly matter.

<div class="guide-example">
  <ol>
    <li class="example-tldr">Lorem ipsum dolor sit amet</li>
    <li class="example-ignore">Consectetur adipiscing elit</li>
    <li class="example-ignore">Phasellus iaculis neque</li>
    <li class="example-ignore">Vestibulum laoreet porttitor sem</li>
    <li class="example-ignore">Aenean sit amet erat nunc</li>
  </ol>
</div>

### Unstyled

Remove the default <code>list-style</code> and left padding on list items (immediate children only).

<div class="guide-example">
  <ul class="unstyled">
    <li class="example-tldr">Lorem ipsum dolor sit amet</li>
    <li class="example-ignore">Consectetur adipiscing elit
      <ul>
        <li>Phasellus iaculis neque</li>
        <li>Vestibulum laoreet porttitor sem</li>
      </ul>
    </li>
    <li class="example-ignore">Aenean sit amet erat nunc</li>
  </ul>
</div>

### Inline

Place all list items on a single line by adding <code>.inline</code> to the wrapping <code>&lt;ol&gt;</code> or <code>&lt;ul&gt;</code>.

<div class="guide-example">
  <ul class="inline">
    <li class="example-tldr">Lorem ipsum</li>
    <li class="example-ignore">Phasellus iaculis</li>
    <li class="example-ignore">Nulla volutpat</li>
  </ul>
</div>
