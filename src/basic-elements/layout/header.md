---
section: Layout
title: Header
description: Provides a standard area to display publication related information.
template: section.html
nav_sort: 1
nav_groups:
  - primary
---

The basic document header when placed directly under the tophat and at the root of the documents body.

<div class="guide-example">
<header role="banner">
  <div class="container">
    <ul class="breadcrumb example-tldr">
      <li><a href="#">Home</a> <i class="divider glyph-chevron-right"></i></li>
      <li class="active"><a href="#">News</a></li>
    </ul>
    <h1>Press and media</h1>
    <div class="nav-responsive collapsed example-tldr" data-state="on" data-on="collapsed" data-off="">
      <button class="toggle" style="display: none;" data-toggle="state">Explore</button>

      <ul class="nav">
        <li><a href="/news/press-release-archive">Press release archive</a></li>
      </ul>
    </div>
  </div>
</header>
</div>

## Options

When placed directly within an <code>&lt;article&gt;</code> element the header takes on a more approriate style

<div class="guide-example">
<article>
  <header role="header">
    <h2>Weighing the benefits and risks of sunlight exposure</h2>
    <ul class="share-links example-tldr">
      <li><a href="#" title="Download a PDF version of this document">
        <span class="glyph-download"></span>
        <span class="label">Download</span></a></li>
      <li class="dropdown" data-state="off" data-on="in" data-off="">
        <a href="#share-menu" class="action-link" data-toggle="state" title="Share">
          <i class="glyph-share"></i>
          <span class="label">Share</span></a>
        <ul class="menu addthis_toolbox" id="share-menu" role="menu" aria-labelledby="nice-share">
          <li>Share</li>
          <!-- AddThis Button BEGIN -->
          <li><a title="Share via Linked In" href="#"><span class="glyph-linkedin"></span> Linked In</a></li>
          <li><a title="Tweet this link" href="#"><span class="glyph-twitter"></span> Twitter</a></li>
          <li><a title="Share on Facebook" href="#"><span class="glyph-facebook"></span> Facebook</a></li>
          <li><a title="Email" href="#"><span class="glyph-email-closed"></span> Email</a></li>
          <li><a title="View more services" href="#"><span class="glyph-plus"></span> More...</a></li>
          <!-- AddThis Button END -->
        </ul></li>
      <li><a href="#" title="Print friendly version" rel="nofollow">
        <span class="glyph-print"></span>
        <span class="label">Print</span></a></li>
    </ul>
    <p>Published on: <time class="published-date" datetime="2015-01-20">20 January 2015</time></p>
    <p class="lead example-tldr" style="clear: right">NICE is consulting on draft recommendations to help people strike the right balance when it comes to being out in the sun.</p>
  </header>
</article>
</div>
