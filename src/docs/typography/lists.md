---
section: Basic Typography
title: Lists
date: 2014-12-16
template: section.html
description:
---

## Unordered

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

## Alternate unordered

Change the default <code>list-style</code> on list items (immediate children only).

<div class="guide-example">
  <ul class="alt">
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

## Ordered

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

## Alternate Ordered

Change the default <code>list-style</code> on list items where the order <em>does</em> matter (immediate children only).

<div class="guide-example">
  <ol class="alt">
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

## Inline

Place all list items on a single line with <code>inline-block</code> and some light padding.

<div class="guide-example">
  <ul class="inline">
    <li class="example-tldr">Lorem ipsum</li>
    <li class="example-ignore">Phasellus iaculis</li>
    <li class="example-ignore">Nulla volutpat</li>
  </ul>
</div>

## Definitions and descriptions

A list of terms with their associated definitions or descriptions.

<div class="guide-example">
  <dl>
    <dt class="example-tldr">Definition lists</dt>
    <dd class="example-tldr">A definition list is perfect for defining terms.</dd>
    <dt class="example-ignore">Euismod</dt>
    <dd class="example-ignore">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
    <dd class="example-ignore">Donec id elit non mi porta gravida at eget metus.</dd>
    <dt class="example-ignore">Malesuada porta</dt>
    <dd class="example-ignore">Etiam porta sem malesuada magna mollis euismod.</dd>
  </dl>
</div>

### Options

Make terms and definitions in <code>&lt;dl&gt;</code> line up side-by-side.

<div class="guide-example">
  <dl class="dl-horizontal">
    <dt class="example-tldr">Definition lists</dt>
    <dd class="example-tldr">A definition list is perfect for defining terms.</dd>
    <dt class="example-ignore">Euismod</dt>
    <dd class="example-ignore">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
    <dd class="example-ignore">Donec id elit non mi porta gravida at eget metus.</dd>
    <dt class="example-ignore">Malesuada porta</dt>
    <dd class="example-ignore">Etiam porta sem malesuada magna mollis euismod.</dd>
    <dt class="example-ignore">Felis euismod semper eget lacinia</dt>
    <dd class="example-ignore">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>
  </dl>
</div>

<div class="alert alert-block alert-info">
  <h4>Auto-truncating</h4>

  <p>Horizontal description lists will truncate terms that are too long to fit in the left column fix <code>text-overflow</code>. In narrower viewports, they will change to the default stacked layout.</p>
</div>
