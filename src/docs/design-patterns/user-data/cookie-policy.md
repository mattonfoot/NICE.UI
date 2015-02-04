---
section: Cookies and user data storage
title: E-Privacy directive
description: Tracking users around our systems allows us to offer a more tailored service but users need to know what information we are tracking.
template: section.html
disqus_identifier: /design-patterns/user-data/cookie-policy
nav_sort: 1
nav_groups:
  - primary
---

Because we use third party tracking and analysis tools to help understand what needs our users have, we have to explain to our visitors that they will be tracked anonymously through the use of cookies.

[You can read the full E-Privacy policy here](http://www.nice.org.uk/cookies).

<div class="notice notice-important">
  <p><strong>Important</strong> Please ensure that your service conforms to the NICE E-Privacy policy and notify the appropriate department if it does not.</p>
</div>

## Including the E-Privacy banner

The NICE UI library provides a standard E-Privacy banner component that must be included on all
web pages to ensure compliance across services. Below is an example of the basic E-Privacy banner.

<div class="guide-example example-processed">
<div style="display:block;font-family:Lato,Arial,Helvetica,sans-serif;background:#ddeef4;border:1px solid #cddee4;color:#11779b;" id="cookiePolicy"><div style="display:block;margin:0 auto;width:95.74468085%;max-width:1170px;padding:12px 36px 12px 0;padding:1.2rem 3.6rem 1.2rem 0"><button style="float:right;margin:0 -36px 0 0;margin:0 -3.6rem 0 0;padding:0 1em;line-height:24px;line-height:2.4rem;background:none;border:0;color:#000;cursor:pointer;" onclick="return false;">×</button>NICE uses cookies to make the site better. <a href="http://www.nice.org.uk/cookies" target="_blank" style="font-weight:700;color:inherit">Learn more</a></div></div>
</div>

To include the component you need to include the following script tag after all
other script tags in your HTML5 document <code>&lt;body&gt;</code>.

<pre class="prettyprint linenums"><code>&lt;!-- e-privacy policy script --&gt;
&lt;script src="https://cdn.nice.org.uk/v4.0.0/scripts/ui.eprivacy-policy.js" async defer&gt;&lt;/script&gt;</code></pre>

## Data Storage

The [e-Privacy Directive](http://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:31995L0046&from=en) was updated in 2012 but still requires that website inform users in an obvious way that data is being stored regarding their online activity within a website - [See the ICO for a summary of this directive](https://ico.org.uk/for-organisations/guide-to-pecr/cookies/). THis extends beyond cookies to the information that we store on our server or in local storage regarding a users activity.

Items exempt from this directive are items of data regarding personal user settings, or a users authenticated status. It is acceptable to presume that a user that creates an account to access further, enriched or customised content is happy to allow data tracking within the current website.

## Standard storage keys

If you are creating a new service or updating an existing service please refer to the following table for standard storage keys for specific types of information.

<table>
  <thead>
    <tr>
      <th>key</th><th>type</th>
      <th>usage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><var>seen_cookie_message</var></td><td>String</td>
      <td>Indicates whether a user has had the The e-Privacy banner displayed to them on the active service. It is set to the the value <samp>'yes'</samp> if they have.</td>
    </tr>
    <tr>
      <td><var>ASP.NET_SessionId</var></td><td>String</td>
      <td>General purpose platform session key, used by sites written with Miscrosoft .NET based technologies. Usually used to maintain an anonymised user session by the server. [For more infomation see cookiepedia](http://cookiepedia.co.uk/cookies/ASP.NET_SessionId)</td>
    </tr>
    <tr>
      <td><var>uid</var></td><td>String</td>
      <td>General purpose userid key, used to identify a known user so the service can be tailored to their needs or usage patterns. Usually used to maintain an known user session by the server.</td>
    </tr>
    <tr>
      <td><var>__nrpa_2.2</var></td><td>String</td>
      <td>A session identifier, used by the operational service to authenticate the user against NICE Accounts to assertain acces rights and policies for an individual.</td>
    </tr>
    <tr>
      <td><var>ud</var></td><td>JSON</td>
      <td>General purpose storage key used to keep data for this session. Used for storing user interface settings that need to persist thorough the users active session. The user data plugin provided by the NICE UI library uses this key.</td>
    </tr>
    <tr>
      <td><var>Orchrd</var></td><td>JSON</td>
      <td>Orchards default session storage bucket available to all Orchard CMS Modules. Used for storing user interface settings that need to persist thorough the users active session.</td>
    </tr>
  </tbody>
</table>

If you need to store different information than has been identified here then you will also need to ensure that your use case is covered by the existing e-Privacy directive and cookie policy.
